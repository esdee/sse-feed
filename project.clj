(defproject sse-feed "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 ;; Server
                 [io.pedestal/pedestal.service  "0.4.1"]
                 [io.pedestal/pedestal.immutant "0.4.1"]

                 ;; Logging
                 [ch.qos.logback/logback-classic "1.1.2" :exclusions [[org.slf4j/slf4j-api]]]
                 [org.slf4j/jul-to-slf4j         "1.7.7"]
                 [org.slf4j/jcl-over-slf4j       "1.7.7"]
                 [org.slf4j/log4j-over-slf4j     "1.7.7"]

                 ;; ClojureScript
                 [org.clojure/clojurescript "1.7.189"]
                 [org.clojure/core.async    "0.2.374"]
                 [cljs-http                 "0.1.39"]
                 [reagent                   "0.6.0-alpha" :exclusions [cljsjs/react]]
                 [cljsjs/react-with-addons  "0.14.3-0"]
                 [figwheel-sidecar          "0.5.0-2"]
                 [petrol                    "0.1.3"]]

  :plugins [[lein-cljsbuild "1.1.1"]]

  :resource-paths ["resources" "config"]

  :main ^{:skip-aot true} sse-feed.server

  :profiles {:dev {:aliases {"run-dev" ["trampoline" "run" "-m" "sse-feed.server/run-dev"]}
                   :dependencies [[io.pedestal/pedestal.service-tools "0.4.1"]]
                   :source-paths ["dev"]}}

  :source-paths ["src/server"]

  :figwheel {:repl       true
             :nrepl-port 7888}

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
