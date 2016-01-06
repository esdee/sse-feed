(ns client.sse-feed.view-test
  (:require [cljs.test :refer-macros [async deftest is testing]]
            [cljs.core.async :refer [chan]]
            [sse-feed.view :as view]))

(deftest displaying-a-list-of-articles
  (testing "Will show the table headers when sent an empty list"
    (is (= [:table.pure-table.pure-table-bordered
            [:thead [:tr [:th "Title"] [:th "Id"]]]
            [:tbody '()]]
           (view/root (chan) {:articles []}))))
  (testing "Will show the articles when sent a list of articles"
    (let [articles (for [id (range 0 10)]
                     {:id id :title (str "Article " id)})]
      (is (= [:table.pure-table.pure-table-bordered
              [:thead [:tr [:th "Title"] [:th "Id"]]]
              [:tbody [[:tr {:key 0} [:td "Article 0"] [:td 0]]
                       [:tr {:key 1} [:td "Article 1"] [:td 1]]
                       [:tr {:key 2} [:td "Article 2"] [:td 2]]
                       [:tr {:key 3} [:td "Article 3"] [:td 3]]
                       [:tr {:key 4} [:td "Article 4"] [:td 4]]
                       [:tr {:key 5} [:td "Article 5"] [:td 5]]
                       [:tr {:key 6} [:td "Article 6"] [:td 6]]
                       [:tr {:key 7} [:td "Article 7"] [:td 7]]
                       [:tr {:key 8} [:td "Article 8"] [:td 8]]
                       [:tr {:key 9} [:td "Article 9"] [:td 9]]]]]
             (view/root (chan) {:articles articles}))))))


