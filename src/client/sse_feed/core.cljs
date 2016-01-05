(ns sse-feed.core
  (:require [cljs.core.async :as async]
            [cljs.reader     :as reader]
            [petrol.core     :as petrol]
            [reagent.core    :as reagent]
            [sse-feed.messages :refer [map->Article]]
            [sse-feed.processing]
            [sse-feed.view   :as view]))

(def initial-state {:articles '()})

(defonce !app
         (reagent/atom initial-state))

;; figwheel reload-hook
(defn reload-hook
  []
  (println "**reloading**"))

(defn event-source!
  [url channel message]
  (let [event-source (js/EventSource. url)]
    (.addEventListener event-source
                       message
                       (fn [e] (->> (.-data e) reader/read-string map->Article (async/put! channel)))
                       false)))

(def feed-channel (async/chan 10))

(defn ^:export main
  []
  (letfn [(render
            [ui-channel app]
            (reagent/render-component [view/root ui-channel app]
                                      (.getElementById js/document "content")))]
    (enable-console-print!)
    (println "Hello World: Starting")
    (petrol/start-message-loop! !app render #{feed-channel})
    (event-source! "/" feed-channel "article")))
