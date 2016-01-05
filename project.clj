(defproject sse-feed "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 ;; ClojureScript
                 [org.clojure/clojurescript "1.7.189"]
                 [org.clojure/core.async "0.2.374"]
                 [cljs-http "0.1.39"]
                 [reagent "0.6.0-alpha" :exclusions [cljsjs/react]]
                 [cljsjs/react-with-addons "0.14.3-0"]
                 [figwheel-sidecar "0.5.0-2"]
                 [petrol "0.1.3"]]

  :plugins [[lein-cljsbuild "1.1.1"]]

  :figwheel {:repl       true
             :nrepl-port 7888}

  :source-paths ["src/server"]

  :cljsbuild {:builds
              [{:id           "dev"
                :source-paths ["src/client" "src/common"]
                :figwheel     {:on-jsload "sse-feed.core/reload-hook"}
                :compiler     {:main          sse-feed.core
                               :asset-path    "js/compiled/out"
                               :output-to     "resources/public/js/compiled/app.js"
                               :output-dir    "resources/public/js/compiled/out"
                               :optimizations :none}}]}
  )
