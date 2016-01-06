(ns sse-feed.service
  (:require [clojure.core.async :as async]
            [clojure.edn :as edn]
            [io.pedestal.http :as bootstrap]
            [io.pedestal.http.route.definition :refer [defroutes]]
            [io.pedestal.http.sse :as sse]
            [redis-async.client :as redis-client]
            [redis-async.core :as redis-async]
            [ring.util.response :as ring-resp]))

(def redis-conn (redis-async/make-pool {:hostname "localhost" :port 6379}))

(def topic "articles")

(defn redis->feed-channel
  [redis-conn topic]
  (async/pipe (redis-client/subscribe redis-conn topic)
              (async/chan 1 (map #(edn/read-string (.unwrap %))))))

(defn send-article
  [event-channel redis-conn topic]
  (let [articles-channel (redis->feed-channel redis-conn topic)]
    (async/go-loop [article (async/<! articles-channel)]
      (when (async/>! event-channel {:name "article" :data (pr-str article)})
        (recur (async/<! articles-channel))))))

(defn sse-stream-ready
  "Starts sending counter events to client."
  ; citing context in fn args for documentation
  [event-channel ctx]
  (let [{:keys [request]} ctx]
    (send-article event-channel redis-conn topic)))

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