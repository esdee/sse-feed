// Compiled by ClojureScript 1.7.189 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__5899__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__5899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5900__i = 0, G__5900__a = new Array(arguments.length -  0);
while (G__5900__i < G__5900__a.length) {G__5900__a[G__5900__i] = arguments[G__5900__i + 0]; ++G__5900__i;}
  args = new cljs.core.IndexedSeq(G__5900__a,0);
} 
return G__5899__delegate.call(this,args);};
G__5899.cljs$lang$maxFixedArity = 0;
G__5899.cljs$lang$applyTo = (function (arglist__5901){
var args = cljs.core.seq(arglist__5901);
return G__5899__delegate(args);
});
G__5899.cljs$core$IFn$_invoke$arity$variadic = G__5899__delegate;
return G__5899;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__5902__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__5902 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5903__i = 0, G__5903__a = new Array(arguments.length -  0);
while (G__5903__i < G__5903__a.length) {G__5903__a[G__5903__i] = arguments[G__5903__i + 0]; ++G__5903__i;}
  args = new cljs.core.IndexedSeq(G__5903__a,0);
} 
return G__5902__delegate.call(this,args);};
G__5902.cljs$lang$maxFixedArity = 0;
G__5902.cljs$lang$applyTo = (function (arglist__5904){
var args = cljs.core.seq(arglist__5904);
return G__5902__delegate(args);
});
G__5902.cljs$core$IFn$_invoke$arity$variadic = G__5902__delegate;
return G__5902;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map