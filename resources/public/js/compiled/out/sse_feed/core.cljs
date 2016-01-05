(ns sse-feed.core
  (:require [petrol.core :as petrol]
            [reagent.core :as reagent]))

(def initial-state {})

(defonce !app
         (reagent/atom initial-state))

;; figwheel reload-hook
(defn reload-hook
  []
  (println "**reloading**"))

#_(defn render-fn
    [ui-channel app]
    (reagent/render-component [view/root ui-channel app]
                              (.getElementById js/document "content")))

(defn ^:export main
  []
  (enable-console-print!)
  (println "Hello World: Starting")
  #_(petrol/start-message-loop! !app render-fn))
