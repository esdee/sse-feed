(ns sse-feed.service
  (:require [clojure.core.async :as async]
            [clojure.edn :as edn]
            [clojure.tools.logging :as log]
            [io.pedestal.http :as bootstrap]
            [io.pedestal.http.route.definition :refer [defroutes]]
            [io.pedestal.http.sse :as sse]
            [redis-async.client :as redis-client]
            [redis-async.core :as redis-async]
            [ring.util.response :as ring-resp]))

;; Ideally these values would come from env
(def ^:private redis-conn {:hostname "localhost" :port 6379})
(def ^:private topic "articles")

(defn- make-pool
  [opts]
  (redis-async/make-pool opts))

(defn publish-article
  "Use from the command line to publish an article to Redis"
  [id title]
  (let [article {:id id :title title}]
    (async/<!! (redis-client/publish (make-pool redis-conn)
                                     topic
                                     (pr-str article)))
    (println "Published: " article)))

;;
(defn- make-mult-sub
  [sub parse-fn]
  (let [chan (async/chan)
        mult (async/mult chan)]
    (async/go-loop [message-data (parse-fn (async/<! sub))]
      (async/>! chan message-data)
      (recur (async/<! sub)))
    mult))

(defonce ^:private articles-chan
         (make-mult-sub (redis-client/subscribe (make-pool redis-conn) topic)
                        ; Format the response we get back from the Redis subscription
                        #(edn/read-string (.unwrap %))))

(defn send-article-to-client
  [event-channel listen-on-chan]
  (let [tap-chan (async/chan)]
    (async/tap listen-on-chan tap-chan)
    (async/go-loop [article (async/<! tap-chan)]
      (log/debug "**Retrieved article**" article)
      (if
        (try
          (async/>! event-channel {:name "article" :data (pr-str article)})
          (catch Throwable t (log/error t)))
        (recur (async/<! tap-chan))
        (do
          (log/warn "Client disconnected")
          (async/close! tap-chan))))))

(defn sse-stream-ready
  "Starts listening for redis subscription events"
  ; citing context in fn args for documentation
  [event-channel ctx]
  (let [{:keys [request]} ctx]
    (send-article-to-client event-channel articles-chan)))

(defn about-page
  ; just making note of what is sent to this fn
  [request]
  (ring-resp/response "Server Sent Service"))

;; Wire root URL to sse event stream
(defroutes
  routes
  [[["/" {:get [::send-article (sse/start-event-stream sse-stream-ready)]}
     ["/about" {:get about-page}]]]])

;; Consumed by server-sent-events.server/create-server
(def service {:env                      :prod
              ;; You can bring your own non-default interceptors. Make
              ;; sure you include routing and set it up right for
              ;; dev-mode. If you do, many other keys for configuring
              ;; default interceptors will be ignored.
              ;; :bootstrap/interceptors []
              ::bootstrap/routes        routes
              ;; Root for resource interceptor that is available by default.
              ::bootstrap/resource-path "/public"
              ::bootstrap/type          :immutant
              ::bootstrap/port          8080})