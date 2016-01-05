(ns figwheel.connect (:require [sse-feed.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/sse-feed.core.reload-hook (apply js/sse-feed.core.reload-hook x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'sse-feed.core/reload-hook' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

