// Compiled by ClojureScript 1.7.189 {}
goog.provide('sse_feed.core');
goog.require('cljs.core');
goog.require('petrol.core');
goog.require('reagent.core');
sse_feed.core.initial_state = cljs.core.PersistentArrayMap.EMPTY;
if(typeof sse_feed.core._BANG_app !== 'undefined'){
} else {
sse_feed.core._BANG_app = reagent.core.atom.call(null,sse_feed.core.initial_state);
}
sse_feed.core.reload_hook = (function sse_feed$core$reload_hook(){
return cljs.core.println.call(null,"**reloading**");
});
sse_feed.core.main = (function sse_feed$core$main(){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"Hello World: Starting");
});
goog.exportSymbol('sse_feed.core.main', sse_feed.core.main);

//# sourceMappingURL=core.js.map