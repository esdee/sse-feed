(ns sse-feed.view)

(defn root
  [_ {:keys [articles]}]
  [:table.pure-table.pure-table-bordered
   [:thead
    [:tr [:th "Title"] [:th "Id"]]]
   [:tbody
    (for [{:keys [id title]} articles]
      [:tr {:key id} [:td title] [:td id]])]])

