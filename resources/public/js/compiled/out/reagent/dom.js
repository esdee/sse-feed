// Compiled by ClojureScript 1.7.189 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__4688__auto__ = (function (){var and__4676__auto__ = typeof ReactDOM !== 'undefined';
if(and__4676__auto__){
return ReactDOM;
} else {
return and__4676__auto__;
}
})();
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
var and__4676__auto__ = typeof require !== 'undefined';
if(and__4676__auto__){
return require("react-dom");
} else {
return and__4676__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"dom","dom",403993605,null)))].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_6382 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_6382){
return (function (){
var _STAR_always_update_STAR_6383 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_6383;
}});})(_STAR_always_update_STAR_6382))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_6382;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args6384 = [];
var len__5746__auto___6387 = arguments.length;
var i__5747__auto___6388 = (0);
while(true){
if((i__5747__auto___6388 < len__5746__auto___6387)){
args6384.push((arguments[i__5747__auto___6388]));

var G__6389 = (i__5747__auto___6388 + (1));
i__5747__auto___6388 = G__6389;
continue;
} else {
}
break;
}

var G__6386 = args6384.length;
switch (G__6386) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6384.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__6395_6399 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__6396_6400 = null;
var count__6397_6401 = (0);
var i__6398_6402 = (0);
while(true){
if((i__6398_6402 < count__6397_6401)){
var v_6403 = cljs.core._nth.call(null,chunk__6396_6400,i__6398_6402);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_6403);

var G__6404 = seq__6395_6399;
var G__6405 = chunk__6396_6400;
var G__6406 = count__6397_6401;
var G__6407 = (i__6398_6402 + (1));
seq__6395_6399 = G__6404;
chunk__6396_6400 = G__6405;
count__6397_6401 = G__6406;
i__6398_6402 = G__6407;
continue;
} else {
var temp__4425__auto___6408 = cljs.core.seq.call(null,seq__6395_6399);
if(temp__4425__auto___6408){
var seq__6395_6409__$1 = temp__4425__auto___6408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6395_6409__$1)){
var c__5491__auto___6410 = cljs.core.chunk_first.call(null,seq__6395_6409__$1);
var G__6411 = cljs.core.chunk_rest.call(null,seq__6395_6409__$1);
var G__6412 = c__5491__auto___6410;
var G__6413 = cljs.core.count.call(null,c__5491__auto___6410);
var G__6414 = (0);
seq__6395_6399 = G__6411;
chunk__6396_6400 = G__6412;
count__6397_6401 = G__6413;
i__6398_6402 = G__6414;
continue;
} else {
var v_6415 = cljs.core.first.call(null,seq__6395_6409__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_6415);

var G__6416 = cljs.core.next.call(null,seq__6395_6409__$1);
var G__6417 = null;
var G__6418 = (0);
var G__6419 = (0);
seq__6395_6399 = G__6416;
chunk__6396_6400 = G__6417;
count__6397_6401 = G__6418;
i__6398_6402 = G__6419;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map