(ns sse-feed.test-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [client.sse-feed.processing-test]
            [client.sse-feed.view-test]))

(doo-tests 'client.sse-feed.processing-test
           'client.sse-feed.view-test
           )
