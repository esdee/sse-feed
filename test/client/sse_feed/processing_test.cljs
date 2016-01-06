(ns client.sse-feed.processing-test
  (:require [cljs.test :refer-macros [async deftest is testing]]
            [petrol.core :as petrol]
            [sse-feed.messages :as messages]
            [sse-feed.processing]))

(deftest processing-article-messages
  (testing "Will add an article to an empty sequence of articles"
    (let [article (messages/->Article 1 "Article 1")]
      (is (= {:articles (list article)}
             (petrol/process-message article {:articles '()})))))
  (testing "Will add an article to rhe beginning of a list of articles"
    (let [article (messages/->Article 10 "Article 10")
          articles (for [id (range 1 10)]
                     {:id id :title (str "Article " id)})]
      (is (= {:articles (cons article articles)}
             (petrol/process-message article {:articles articles}))))
    )
  (testing "Will only keep the latest 10 articles"
    (let [article (messages/->Article "latest" "Article Latest")
          articles (for [id (range 1 11)]
                     {:id id :title (str "Article " id)})]
      (is (= {:articles (cons article (take 9 articles))}
             (petrol/process-message article {:articles articles}))))))
