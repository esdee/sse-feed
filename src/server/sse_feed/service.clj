(ns sse-feed.service
  (:require [io.pedestal.http :as bootstrap]
            [io.pedestal.http.sse :as sse]
            [io.pedestal.http.route.definition :refer [defroutes]]
            [ring.util.response :as ring-resp]
            [clojure.core.async :as async]))

(defn send-article
  [event-channel feed-channel]
  (async/go-loop [article (async/<! feed-channel)]
    (when (async/>! event-channel {:name "article" :data (pr-str article)})
      (recur (async/<! feed-channel)))))

(def feed-channel (async/chan 1))

(defn sse-stream-ready
  "Starts sending counter events to client."
  [event-channel ctx]
  (let [{:keys [request]} ctx]
    (send-article event-channel feed-channel)))

(defn about-page
  [_]
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