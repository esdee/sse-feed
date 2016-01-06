(ns sse-feed.core
  (:require [cljs.core.async :as async]
            [cljs.reader :as reader]
            [petrol.core :as petrol]
            [reagent.core :as reagent]
            [sse-feed.messages :refer [map->Article]]
            [sse-feed.processing]
            [sse-feed.view :as view]))

(def ^:private initial-state {:articles '()})

(defonce ^:private !app (reagent/atom initial-state))

;; figwheel reload-hook
(defn reload-hook
  []
  (println "**reloading**"))

(defn- event-source!
  [url channel message]
  (let [event-source (js/EventSource. url)
        ->article    #(->> (.-data %) reader/read-string map->Article)]
    (.addEventListener event-source
                       message
                       #(async/put! channel (->article %))
                       false)))

(defn ^:export main
  []
  (let [render       (fn [ui-channel app]
                       (reagent/render-component [view/root ui-channel app]
                                                 (.getElementById js/document "content")))
        feed-channel (async/chan 10)]
    (enable-console-print!)
    (println "Hello World: Starting")
    (petrol/start-message-loop! !app render #{feed-channel})
    (event-source! "/" feed-channel "article")))
