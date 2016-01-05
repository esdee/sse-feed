(ns sse-feed.service
  (:require [io.pedestal.http :as bootstrap]
            [io.pedestal.http.sse :as sse]
            [io.pedestal.http.route :as route]
            [io.pedestal.http.route.definition :refer [defroutes]]
            [ring.util.response :as ring-resp]
            [clojure.core.async :as async]))

(defn about-page
  [_]
  (ring-resp/response "Server Sent Service"))

;; Wire root URL to sse event stream
(defroutes
  routes
  [[["/about" {:get about-page}]]])

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
              ;; Either :jetty or :tomcat (see comments in project.clj
              ;; to enable Tomcat)
              ::bootstrap/type          :immutant
              ::bootstrap/port          8080})