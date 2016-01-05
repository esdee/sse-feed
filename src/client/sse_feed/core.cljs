(ns sse-feed.core
  (:require [cljs.core.async :as async]
            [petrol.core     :as petrol]
            [reagent.core    :as reagent]
            [sse-feed.processing]
            [sse-feed.view   :as view]))

(def initial-state {:articles '()})

(defonce !app
         (reagent/atom initial-state))

;; figwheel reload-hook
(defn reload-hook
  []
  (println "**reloading**"))

(defn render-fn
    [ui-channel app]
    (reagent/render-component [view/root ui-channel app]
                              (.getElementById js/document "content")))


(def feed-channel (async/chan 1))

(defn ^:export main
  []
  (enable-console-print!)
  (println "Hello World: Starting")
  (petrol/start-message-loop! !app render-fn #{feed-channel}))
