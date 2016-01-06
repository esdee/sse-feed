(ns sse-feed.processing
  (:require [petrol.core :refer [Message]]
            [sse-feed.messages :as messages]))

(extend-protocol Message
  messages/Article
  (process-message [article {:keys [articles] :as app}]
    (->> article
         (conj (take 9 articles))
         (assoc app :articles))))
