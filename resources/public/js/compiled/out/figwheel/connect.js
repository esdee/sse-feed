// Compiled by ClojureScript 1.7.189 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('sse_feed.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__19214__delegate = function (x){
if(cljs.core.truth_(sse_feed.core.reload_hook)){
return cljs.core.apply.call(null,sse_feed.core.reload_hook,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'sse-feed.core/reload-hook' is missing");
}
};
var G__19214 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__19215__i = 0, G__19215__a = new Array(arguments.length -  0);
while (G__19215__i < G__19215__a.length) {G__19215__a[G__19215__i] = arguments[G__19215__i + 0]; ++G__19215__i;}
  x = new cljs.core.IndexedSeq(G__19215__a,0);
} 
return G__19214__delegate.call(this,x);};
G__19214.cljs$lang$maxFixedArity = 0;
G__19214.cljs$lang$applyTo = (function (arglist__19216){
var x = cljs.core.seq(arglist__19216);
return G__19214__delegate(x);
});
G__19214.cljs$core$IFn$_invoke$arity$variadic = G__19214__delegate;
return G__19214;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map