// Compiled by ClojureScript 1.7.189 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16842__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16842__auto__){
return or__16842__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16842__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16842__auto__)){
return or__16842__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__18971_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__18971_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__18976 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__18977 = null;
var count__18978 = (0);
var i__18979 = (0);
while(true){
if((i__18979 < count__18978)){
var n = cljs.core._nth.call(null,chunk__18977,i__18979);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__18980 = seq__18976;
var G__18981 = chunk__18977;
var G__18982 = count__18978;
var G__18983 = (i__18979 + (1));
seq__18976 = G__18980;
chunk__18977 = G__18981;
count__18978 = G__18982;
i__18979 = G__18983;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18976);
if(temp__4425__auto__){
var seq__18976__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18976__$1)){
var c__17645__auto__ = cljs.core.chunk_first.call(null,seq__18976__$1);
var G__18984 = cljs.core.chunk_rest.call(null,seq__18976__$1);
var G__18985 = c__17645__auto__;
var G__18986 = cljs.core.count.call(null,c__17645__auto__);
var G__18987 = (0);
seq__18976 = G__18984;
chunk__18977 = G__18985;
count__18978 = G__18986;
i__18979 = G__18987;
continue;
} else {
var n = cljs.core.first.call(null,seq__18976__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__18988 = cljs.core.next.call(null,seq__18976__$1);
var G__18989 = null;
var G__18990 = (0);
var G__18991 = (0);
seq__18976 = G__18988;
chunk__18977 = G__18989;
count__18978 = G__18990;
i__18979 = G__18991;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__19030_19037 = cljs.core.seq.call(null,deps);
var chunk__19031_19038 = null;
var count__19032_19039 = (0);
var i__19033_19040 = (0);
while(true){
if((i__19033_19040 < count__19032_19039)){
var dep_19041 = cljs.core._nth.call(null,chunk__19031_19038,i__19033_19040);
topo_sort_helper_STAR_.call(null,dep_19041,(depth + (1)),state);

var G__19042 = seq__19030_19037;
var G__19043 = chunk__19031_19038;
var G__19044 = count__19032_19039;
var G__19045 = (i__19033_19040 + (1));
seq__19030_19037 = G__19042;
chunk__19031_19038 = G__19043;
count__19032_19039 = G__19044;
i__19033_19040 = G__19045;
continue;
} else {
var temp__4425__auto___19046 = cljs.core.seq.call(null,seq__19030_19037);
if(temp__4425__auto___19046){
var seq__19030_19047__$1 = temp__4425__auto___19046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19030_19047__$1)){
var c__17645__auto___19048 = cljs.core.chunk_first.call(null,seq__19030_19047__$1);
var G__19049 = cljs.core.chunk_rest.call(null,seq__19030_19047__$1);
var G__19050 = c__17645__auto___19048;
var G__19051 = cljs.core.count.call(null,c__17645__auto___19048);
var G__19052 = (0);
seq__19030_19037 = G__19049;
chunk__19031_19038 = G__19050;
count__19032_19039 = G__19051;
i__19033_19040 = G__19052;
continue;
} else {
var dep_19053 = cljs.core.first.call(null,seq__19030_19047__$1);
topo_sort_helper_STAR_.call(null,dep_19053,(depth + (1)),state);

var G__19054 = cljs.core.next.call(null,seq__19030_19047__$1);
var G__19055 = null;
var G__19056 = (0);
var G__19057 = (0);
seq__19030_19037 = G__19054;
chunk__19031_19038 = G__19055;
count__19032_19039 = G__19056;
i__19033_19040 = G__19057;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__19034){
var vec__19036 = p__19034;
var x = cljs.core.nth.call(null,vec__19036,(0),null);
var xs = cljs.core.nthnext.call(null,vec__19036,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__19036,x,xs,get_deps__$1){
return (function (p1__18992_SHARP_){
return clojure.set.difference.call(null,p1__18992_SHARP_,x);
});})(vec__19036,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__19070 = cljs.core.seq.call(null,provides);
var chunk__19071 = null;
var count__19072 = (0);
var i__19073 = (0);
while(true){
if((i__19073 < count__19072)){
var prov = cljs.core._nth.call(null,chunk__19071,i__19073);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__19074_19082 = cljs.core.seq.call(null,requires);
var chunk__19075_19083 = null;
var count__19076_19084 = (0);
var i__19077_19085 = (0);
while(true){
if((i__19077_19085 < count__19076_19084)){
var req_19086 = cljs.core._nth.call(null,chunk__19075_19083,i__19077_19085);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_19086,prov);

var G__19087 = seq__19074_19082;
var G__19088 = chunk__19075_19083;
var G__19089 = count__19076_19084;
var G__19090 = (i__19077_19085 + (1));
seq__19074_19082 = G__19087;
chunk__19075_19083 = G__19088;
count__19076_19084 = G__19089;
i__19077_19085 = G__19090;
continue;
} else {
var temp__4425__auto___19091 = cljs.core.seq.call(null,seq__19074_19082);
if(temp__4425__auto___19091){
var seq__19074_19092__$1 = temp__4425__auto___19091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19074_19092__$1)){
var c__17645__auto___19093 = cljs.core.chunk_first.call(null,seq__19074_19092__$1);
var G__19094 = cljs.core.chunk_rest.call(null,seq__19074_19092__$1);
var G__19095 = c__17645__auto___19093;
var G__19096 = cljs.core.count.call(null,c__17645__auto___19093);
var G__19097 = (0);
seq__19074_19082 = G__19094;
chunk__19075_19083 = G__19095;
count__19076_19084 = G__19096;
i__19077_19085 = G__19097;
continue;
} else {
var req_19098 = cljs.core.first.call(null,seq__19074_19092__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_19098,prov);

var G__19099 = cljs.core.next.call(null,seq__19074_19092__$1);
var G__19100 = null;
var G__19101 = (0);
var G__19102 = (0);
seq__19074_19082 = G__19099;
chunk__19075_19083 = G__19100;
count__19076_19084 = G__19101;
i__19077_19085 = G__19102;
continue;
}
} else {
}
}
break;
}

var G__19103 = seq__19070;
var G__19104 = chunk__19071;
var G__19105 = count__19072;
var G__19106 = (i__19073 + (1));
seq__19070 = G__19103;
chunk__19071 = G__19104;
count__19072 = G__19105;
i__19073 = G__19106;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19070);
if(temp__4425__auto__){
var seq__19070__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19070__$1)){
var c__17645__auto__ = cljs.core.chunk_first.call(null,seq__19070__$1);
var G__19107 = cljs.core.chunk_rest.call(null,seq__19070__$1);
var G__19108 = c__17645__auto__;
var G__19109 = cljs.core.count.call(null,c__17645__auto__);
var G__19110 = (0);
seq__19070 = G__19107;
chunk__19071 = G__19108;
count__19072 = G__19109;
i__19073 = G__19110;
continue;
} else {
var prov = cljs.core.first.call(null,seq__19070__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__19078_19111 = cljs.core.seq.call(null,requires);
var chunk__19079_19112 = null;
var count__19080_19113 = (0);
var i__19081_19114 = (0);
while(true){
if((i__19081_19114 < count__19080_19113)){
var req_19115 = cljs.core._nth.call(null,chunk__19079_19112,i__19081_19114);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_19115,prov);

var G__19116 = seq__19078_19111;
var G__19117 = chunk__19079_19112;
var G__19118 = count__19080_19113;
var G__19119 = (i__19081_19114 + (1));
seq__19078_19111 = G__19116;
chunk__19079_19112 = G__19117;
count__19080_19113 = G__19118;
i__19081_19114 = G__19119;
continue;
} else {
var temp__4425__auto___19120__$1 = cljs.core.seq.call(null,seq__19078_19111);
if(temp__4425__auto___19120__$1){
var seq__19078_19121__$1 = temp__4425__auto___19120__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19078_19121__$1)){
var c__17645__auto___19122 = cljs.core.chunk_first.call(null,seq__19078_19121__$1);
var G__19123 = cljs.core.chunk_rest.call(null,seq__19078_19121__$1);
var G__19124 = c__17645__auto___19122;
var G__19125 = cljs.core.count.call(null,c__17645__auto___19122);
var G__19126 = (0);
seq__19078_19111 = G__19123;
chunk__19079_19112 = G__19124;
count__19080_19113 = G__19125;
i__19081_19114 = G__19126;
continue;
} else {
var req_19127 = cljs.core.first.call(null,seq__19078_19121__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_19127,prov);

var G__19128 = cljs.core.next.call(null,seq__19078_19121__$1);
var G__19129 = null;
var G__19130 = (0);
var G__19131 = (0);
seq__19078_19111 = G__19128;
chunk__19079_19112 = G__19129;
count__19080_19113 = G__19130;
i__19081_19114 = G__19131;
continue;
}
} else {
}
}
break;
}

var G__19132 = cljs.core.next.call(null,seq__19070__$1);
var G__19133 = null;
var G__19134 = (0);
var G__19135 = (0);
seq__19070 = G__19132;
chunk__19071 = G__19133;
count__19072 = G__19134;
i__19073 = G__19135;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__19140_19144 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__19141_19145 = null;
var count__19142_19146 = (0);
var i__19143_19147 = (0);
while(true){
if((i__19143_19147 < count__19142_19146)){
var ns_19148 = cljs.core._nth.call(null,chunk__19141_19145,i__19143_19147);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_19148);

var G__19149 = seq__19140_19144;
var G__19150 = chunk__19141_19145;
var G__19151 = count__19142_19146;
var G__19152 = (i__19143_19147 + (1));
seq__19140_19144 = G__19149;
chunk__19141_19145 = G__19150;
count__19142_19146 = G__19151;
i__19143_19147 = G__19152;
continue;
} else {
var temp__4425__auto___19153 = cljs.core.seq.call(null,seq__19140_19144);
if(temp__4425__auto___19153){
var seq__19140_19154__$1 = temp__4425__auto___19153;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19140_19154__$1)){
var c__17645__auto___19155 = cljs.core.chunk_first.call(null,seq__19140_19154__$1);
var G__19156 = cljs.core.chunk_rest.call(null,seq__19140_19154__$1);
var G__19157 = c__17645__auto___19155;
var G__19158 = cljs.core.count.call(null,c__17645__auto___19155);
var G__19159 = (0);
seq__19140_19144 = G__19156;
chunk__19141_19145 = G__19157;
count__19142_19146 = G__19158;
i__19143_19147 = G__19159;
continue;
} else {
var ns_19160 = cljs.core.first.call(null,seq__19140_19154__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_19160);

var G__19161 = cljs.core.next.call(null,seq__19140_19154__$1);
var G__19162 = null;
var G__19163 = (0);
var G__19164 = (0);
seq__19140_19144 = G__19161;
chunk__19141_19145 = G__19162;
count__19142_19146 = G__19163;
i__19143_19147 = G__19164;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16842__auto__ = goog.require__;
if(cljs.core.truth_(or__16842__auto__)){
return or__16842__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__19165__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__19165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19166__i = 0, G__19166__a = new Array(arguments.length -  0);
while (G__19166__i < G__19166__a.length) {G__19166__a[G__19166__i] = arguments[G__19166__i + 0]; ++G__19166__i;}
  args = new cljs.core.IndexedSeq(G__19166__a,0);
} 
return G__19165__delegate.call(this,args);};
G__19165.cljs$lang$maxFixedArity = 0;
G__19165.cljs$lang$applyTo = (function (arglist__19167){
var args = cljs.core.seq(arglist__19167);
return G__19165__delegate(args);
});
G__19165.cljs$core$IFn$_invoke$arity$variadic = G__19165__delegate;
return G__19165;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__19169 = cljs.core._EQ_;
var expr__19170 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__19169.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__19170))){
var path_parts = ((function (pred__19169,expr__19170){
return (function (p1__19168_SHARP_){
return clojure.string.split.call(null,p1__19168_SHARP_,/[\/\\]/);
});})(pred__19169,expr__19170))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__19169,expr__19170){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e19172){if((e19172 instanceof Error)){
var e = e19172;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e19172;

}
}})());
});
;})(path_parts,sep,root,pred__19169,expr__19170))
} else {
if(cljs.core.truth_(pred__19169.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__19170))){
return ((function (pred__19169,expr__19170){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__19169,expr__19170){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__19169,expr__19170))
);

return deferred.addErrback(((function (deferred,pred__19169,expr__19170){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__19169,expr__19170))
);
});
;})(pred__19169,expr__19170))
} else {
return ((function (pred__19169,expr__19170){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__19169,expr__19170))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__19173,callback){
var map__19176 = p__19173;
var map__19176__$1 = ((((!((map__19176 == null)))?((((map__19176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19176):map__19176);
var file_msg = map__19176__$1;
var request_url = cljs.core.get.call(null,map__19176__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__19176,map__19176__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__19176,map__19176__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__18892__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18892__auto__){
return (function (){
var f__18893__auto__ = (function (){var switch__18871__auto__ = ((function (c__18892__auto__){
return (function (state_19200){
var state_val_19201 = (state_19200[(1)]);
if((state_val_19201 === (7))){
var inst_19196 = (state_19200[(2)]);
var state_19200__$1 = state_19200;
var statearr_19202_19222 = state_19200__$1;
(statearr_19202_19222[(2)] = inst_19196);

(statearr_19202_19222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19201 === (1))){
var state_19200__$1 = state_19200;
var statearr_19203_19223 = state_19200__$1;
(statearr_19203_19223[(2)] = null);

(statearr_19203_19223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19201 === (4))){
var inst_19180 = (state_19200[(7)]);
var inst_19180__$1 = (state_19200[(2)]);
var state_19200__$1 = (function (){var statearr_19204 = state_19200;
(statearr_19204[(7)] = inst_19180__$1);

return statearr_19204;
})();
if(cljs.core.truth_(inst_19180__$1)){
var statearr_19205_19224 = state_19200__$1;
(statearr_19205_19224[(1)] = (5));

} else {
var statearr_19206_19225 = state_19200__$1;
(statearr_19206_19225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19201 === (6))){
var state_19200__$1 = state_19200;
var statearr_19207_19226 = state_19200__$1;
(statearr_19207_19226[(2)] = null);

(statearr_19207_19226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19201 === (3))){
var inst_19198 = (state_19200[(2)]);
var state_19200__$1 = state_19200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19200__$1,inst_19198);
} else {
if((state_val_19201 === (2))){
var state_19200__$1 = state_19200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19200__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_19201 === (11))){
var inst_19192 = (state_19200[(2)]);
var state_19200__$1 = (function (){var statearr_19208 = state_19200;
(statearr_19208[(8)] = inst_19192);

return statearr_19208;
})();
var statearr_19209_19227 = state_19200__$1;
(statearr_19209_19227[(2)] = null);

(statearr_19209_19227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19201 === (9))){
var inst_19186 = (state_19200[(9)]);
var inst_19184 = (state_19200[(10)]);
var inst_19188 = inst_19186.call(null,inst_19184);
var state_19200__$1 = state_19200;
var statearr_19210_19228 = state_19200__$1;
(statearr_19210_19228[(2)] = inst_19188);

(statearr_19210_19228[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19201 === (5))){
var inst_19180 = (state_19200[(7)]);
var inst_19182 = figwheel.client.file_reloading.blocking_load.call(null,inst_19180);
var state_19200__$1 = state_19200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19200__$1,(8),inst_19182);
} else {
if((state_val_19201 === (10))){
var inst_19184 = (state_19200[(10)]);
var inst_19190 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_19184);
var state_19200__$1 = state_19200;
var statearr_19211_19229 = state_19200__$1;
(statearr_19211_19229[(2)] = inst_19190);

(statearr_19211_19229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19201 === (8))){
var inst_19186 = (state_19200[(9)]);
var inst_19180 = (state_19200[(7)]);
var inst_19184 = (state_19200[(2)]);
var inst_19185 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_19186__$1 = cljs.core.get.call(null,inst_19185,inst_19180);
var state_19200__$1 = (function (){var statearr_19212 = state_19200;
(statearr_19212[(9)] = inst_19186__$1);

(statearr_19212[(10)] = inst_19184);

return statearr_19212;
})();
if(cljs.core.truth_(inst_19186__$1)){
var statearr_19213_19230 = state_19200__$1;
(statearr_19213_19230[(1)] = (9));

} else {
var statearr_19214_19231 = state_19200__$1;
(statearr_19214_19231[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18892__auto__))
;
return ((function (switch__18871__auto__,c__18892__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18872__auto__ = null;
var figwheel$client$file_reloading$state_machine__18872__auto____0 = (function (){
var statearr_19218 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19218[(0)] = figwheel$client$file_reloading$state_machine__18872__auto__);

(statearr_19218[(1)] = (1));

return statearr_19218;
});
var figwheel$client$file_reloading$state_machine__18872__auto____1 = (function (state_19200){
while(true){
var ret_value__18873__auto__ = (function (){try{while(true){
var result__18874__auto__ = switch__18871__auto__.call(null,state_19200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18874__auto__;
}
break;
}
}catch (e19219){if((e19219 instanceof Object)){
var ex__18875__auto__ = e19219;
var statearr_19220_19232 = state_19200;
(statearr_19220_19232[(5)] = ex__18875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19233 = state_19200;
state_19200 = G__19233;
continue;
} else {
return ret_value__18873__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18872__auto__ = function(state_19200){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18872__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18872__auto____1.call(this,state_19200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18872__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18872__auto____0;
figwheel$client$file_reloading$state_machine__18872__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18872__auto____1;
return figwheel$client$file_reloading$state_machine__18872__auto__;
})()
;})(switch__18871__auto__,c__18892__auto__))
})();
var state__18894__auto__ = (function (){var statearr_19221 = f__18893__auto__.call(null);
(statearr_19221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18892__auto__);

return statearr_19221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18894__auto__);
});})(c__18892__auto__))
);

return c__18892__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__19234,callback){
var map__19237 = p__19234;
var map__19237__$1 = ((((!((map__19237 == null)))?((((map__19237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19237):map__19237);
var file_msg = map__19237__$1;
var namespace = cljs.core.get.call(null,map__19237__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__19237,map__19237__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__19237,map__19237__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__19239){
var map__19242 = p__19239;
var map__19242__$1 = ((((!((map__19242 == null)))?((((map__19242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19242):map__19242);
var file_msg = map__19242__$1;
var namespace = cljs.core.get.call(null,map__19242__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16830__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16830__auto__){
var or__16842__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16842__auto__)){
return or__16842__auto__;
} else {
var or__16842__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16842__auto____$1)){
return or__16842__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16830__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__19244,callback){
var map__19247 = p__19244;
var map__19247__$1 = ((((!((map__19247 == null)))?((((map__19247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19247):map__19247);
var file_msg = map__19247__$1;
var request_url = cljs.core.get.call(null,map__19247__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__19247__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18892__auto___19335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18892__auto___19335,out){
return (function (){
var f__18893__auto__ = (function (){var switch__18871__auto__ = ((function (c__18892__auto___19335,out){
return (function (state_19317){
var state_val_19318 = (state_19317[(1)]);
if((state_val_19318 === (1))){
var inst_19295 = cljs.core.nth.call(null,files,(0),null);
var inst_19296 = cljs.core.nthnext.call(null,files,(1));
var inst_19297 = files;
var state_19317__$1 = (function (){var statearr_19319 = state_19317;
(statearr_19319[(7)] = inst_19295);

(statearr_19319[(8)] = inst_19296);

(statearr_19319[(9)] = inst_19297);

return statearr_19319;
})();
var statearr_19320_19336 = state_19317__$1;
(statearr_19320_19336[(2)] = null);

(statearr_19320_19336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19318 === (2))){
var inst_19300 = (state_19317[(10)]);
var inst_19297 = (state_19317[(9)]);
var inst_19300__$1 = cljs.core.nth.call(null,inst_19297,(0),null);
var inst_19301 = cljs.core.nthnext.call(null,inst_19297,(1));
var inst_19302 = (inst_19300__$1 == null);
var inst_19303 = cljs.core.not.call(null,inst_19302);
var state_19317__$1 = (function (){var statearr_19321 = state_19317;
(statearr_19321[(11)] = inst_19301);

(statearr_19321[(10)] = inst_19300__$1);

return statearr_19321;
})();
if(inst_19303){
var statearr_19322_19337 = state_19317__$1;
(statearr_19322_19337[(1)] = (4));

} else {
var statearr_19323_19338 = state_19317__$1;
(statearr_19323_19338[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19318 === (3))){
var inst_19315 = (state_19317[(2)]);
var state_19317__$1 = state_19317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19317__$1,inst_19315);
} else {
if((state_val_19318 === (4))){
var inst_19300 = (state_19317[(10)]);
var inst_19305 = figwheel.client.file_reloading.reload_js_file.call(null,inst_19300);
var state_19317__$1 = state_19317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19317__$1,(7),inst_19305);
} else {
if((state_val_19318 === (5))){
var inst_19311 = cljs.core.async.close_BANG_.call(null,out);
var state_19317__$1 = state_19317;
var statearr_19324_19339 = state_19317__$1;
(statearr_19324_19339[(2)] = inst_19311);

(statearr_19324_19339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19318 === (6))){
var inst_19313 = (state_19317[(2)]);
var state_19317__$1 = state_19317;
var statearr_19325_19340 = state_19317__$1;
(statearr_19325_19340[(2)] = inst_19313);

(statearr_19325_19340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19318 === (7))){
var inst_19301 = (state_19317[(11)]);
var inst_19307 = (state_19317[(2)]);
var inst_19308 = cljs.core.async.put_BANG_.call(null,out,inst_19307);
var inst_19297 = inst_19301;
var state_19317__$1 = (function (){var statearr_19326 = state_19317;
(statearr_19326[(12)] = inst_19308);

(statearr_19326[(9)] = inst_19297);

return statearr_19326;
})();
var statearr_19327_19341 = state_19317__$1;
(statearr_19327_19341[(2)] = null);

(statearr_19327_19341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18892__auto___19335,out))
;
return ((function (switch__18871__auto__,c__18892__auto___19335,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18872__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18872__auto____0 = (function (){
var statearr_19331 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19331[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18872__auto__);

(statearr_19331[(1)] = (1));

return statearr_19331;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18872__auto____1 = (function (state_19317){
while(true){
var ret_value__18873__auto__ = (function (){try{while(true){
var result__18874__auto__ = switch__18871__auto__.call(null,state_19317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18874__auto__;
}
break;
}
}catch (e19332){if((e19332 instanceof Object)){
var ex__18875__auto__ = e19332;
var statearr_19333_19342 = state_19317;
(statearr_19333_19342[(5)] = ex__18875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19343 = state_19317;
state_19317 = G__19343;
continue;
} else {
return ret_value__18873__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18872__auto__ = function(state_19317){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18872__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18872__auto____1.call(this,state_19317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18872__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18872__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18872__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18872__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18872__auto__;
})()
;})(switch__18871__auto__,c__18892__auto___19335,out))
})();
var state__18894__auto__ = (function (){var statearr_19334 = f__18893__auto__.call(null);
(statearr_19334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18892__auto___19335);

return statearr_19334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18894__auto__);
});})(c__18892__auto___19335,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__19344,opts){
var map__19348 = p__19344;
var map__19348__$1 = ((((!((map__19348 == null)))?((((map__19348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19348):map__19348);
var eval_body__$1 = cljs.core.get.call(null,map__19348__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__19348__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16830__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16830__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16830__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e19350){var e = e19350;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__19351_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__19351_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__19356){
var vec__19357 = p__19356;
var k = cljs.core.nth.call(null,vec__19357,(0),null);
var v = cljs.core.nth.call(null,vec__19357,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__19358){
var vec__19359 = p__19358;
var k = cljs.core.nth.call(null,vec__19359,(0),null);
var v = cljs.core.nth.call(null,vec__19359,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__19363,p__19364){
var map__19611 = p__19363;
var map__19611__$1 = ((((!((map__19611 == null)))?((((map__19611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19611):map__19611);
var opts = map__19611__$1;
var before_jsload = cljs.core.get.call(null,map__19611__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__19611__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__19611__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__19612 = p__19364;
var map__19612__$1 = ((((!((map__19612 == null)))?((((map__19612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19612):map__19612);
var msg = map__19612__$1;
var files = cljs.core.get.call(null,map__19612__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__19612__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__19612__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18892__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18892__auto__,map__19611,map__19611__$1,opts,before_jsload,on_jsload,reload_dependents,map__19612,map__19612__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18893__auto__ = (function (){var switch__18871__auto__ = ((function (c__18892__auto__,map__19611,map__19611__$1,opts,before_jsload,on_jsload,reload_dependents,map__19612,map__19612__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_19765){
var state_val_19766 = (state_19765[(1)]);
if((state_val_19766 === (7))){
var inst_19626 = (state_19765[(7)]);
var inst_19629 = (state_19765[(8)]);
var inst_19628 = (state_19765[(9)]);
var inst_19627 = (state_19765[(10)]);
var inst_19634 = cljs.core._nth.call(null,inst_19627,inst_19629);
var inst_19635 = figwheel.client.file_reloading.eval_body.call(null,inst_19634,opts);
var inst_19636 = (inst_19629 + (1));
var tmp19767 = inst_19626;
var tmp19768 = inst_19628;
var tmp19769 = inst_19627;
var inst_19626__$1 = tmp19767;
var inst_19627__$1 = tmp19769;
var inst_19628__$1 = tmp19768;
var inst_19629__$1 = inst_19636;
var state_19765__$1 = (function (){var statearr_19770 = state_19765;
(statearr_19770[(7)] = inst_19626__$1);

(statearr_19770[(8)] = inst_19629__$1);

(statearr_19770[(11)] = inst_19635);

(statearr_19770[(9)] = inst_19628__$1);

(statearr_19770[(10)] = inst_19627__$1);

return statearr_19770;
})();
var statearr_19771_19857 = state_19765__$1;
(statearr_19771_19857[(2)] = null);

(statearr_19771_19857[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (20))){
var inst_19669 = (state_19765[(12)]);
var inst_19677 = figwheel.client.file_reloading.sort_files.call(null,inst_19669);
var state_19765__$1 = state_19765;
var statearr_19772_19858 = state_19765__$1;
(statearr_19772_19858[(2)] = inst_19677);

(statearr_19772_19858[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (27))){
var state_19765__$1 = state_19765;
var statearr_19773_19859 = state_19765__$1;
(statearr_19773_19859[(2)] = null);

(statearr_19773_19859[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (1))){
var inst_19618 = (state_19765[(13)]);
var inst_19615 = before_jsload.call(null,files);
var inst_19616 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_19617 = (function (){return ((function (inst_19618,inst_19615,inst_19616,state_val_19766,c__18892__auto__,map__19611,map__19611__$1,opts,before_jsload,on_jsload,reload_dependents,map__19612,map__19612__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__19360_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__19360_SHARP_);
});
;})(inst_19618,inst_19615,inst_19616,state_val_19766,c__18892__auto__,map__19611,map__19611__$1,opts,before_jsload,on_jsload,reload_dependents,map__19612,map__19612__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_19618__$1 = cljs.core.filter.call(null,inst_19617,files);
var inst_19619 = cljs.core.not_empty.call(null,inst_19618__$1);
var state_19765__$1 = (function (){var statearr_19774 = state_19765;
(statearr_19774[(14)] = inst_19616);

(statearr_19774[(15)] = inst_19615);

(statearr_19774[(13)] = inst_19618__$1);

return statearr_19774;
})();
if(cljs.core.truth_(inst_19619)){
var statearr_19775_19860 = state_19765__$1;
(statearr_19775_19860[(1)] = (2));

} else {
var statearr_19776_19861 = state_19765__$1;
(statearr_19776_19861[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (24))){
var state_19765__$1 = state_19765;
var statearr_19777_19862 = state_19765__$1;
(statearr_19777_19862[(2)] = null);

(statearr_19777_19862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (39))){
var inst_19719 = (state_19765[(16)]);
var state_19765__$1 = state_19765;
var statearr_19778_19863 = state_19765__$1;
(statearr_19778_19863[(2)] = inst_19719);

(statearr_19778_19863[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (46))){
var inst_19760 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
var statearr_19779_19864 = state_19765__$1;
(statearr_19779_19864[(2)] = inst_19760);

(statearr_19779_19864[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (4))){
var inst_19663 = (state_19765[(2)]);
var inst_19664 = cljs.core.List.EMPTY;
var inst_19665 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_19664);
var inst_19666 = (function (){return ((function (inst_19663,inst_19664,inst_19665,state_val_19766,c__18892__auto__,map__19611,map__19611__$1,opts,before_jsload,on_jsload,reload_dependents,map__19612,map__19612__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__19361_SHARP_){
var and__16830__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__19361_SHARP_);
if(cljs.core.truth_(and__16830__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__19361_SHARP_));
} else {
return and__16830__auto__;
}
});
;})(inst_19663,inst_19664,inst_19665,state_val_19766,c__18892__auto__,map__19611,map__19611__$1,opts,before_jsload,on_jsload,reload_dependents,map__19612,map__19612__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_19667 = cljs.core.filter.call(null,inst_19666,files);
var inst_19668 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_19669 = cljs.core.concat.call(null,inst_19667,inst_19668);
var state_19765__$1 = (function (){var statearr_19780 = state_19765;
(statearr_19780[(17)] = inst_19663);

(statearr_19780[(18)] = inst_19665);

(statearr_19780[(12)] = inst_19669);

return statearr_19780;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_19781_19865 = state_19765__$1;
(statearr_19781_19865[(1)] = (16));

} else {
var statearr_19782_19866 = state_19765__$1;
(statearr_19782_19866[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (15))){
var inst_19653 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
var statearr_19783_19867 = state_19765__$1;
(statearr_19783_19867[(2)] = inst_19653);

(statearr_19783_19867[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (21))){
var inst_19679 = (state_19765[(19)]);
var inst_19679__$1 = (state_19765[(2)]);
var inst_19680 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_19679__$1);
var state_19765__$1 = (function (){var statearr_19784 = state_19765;
(statearr_19784[(19)] = inst_19679__$1);

return statearr_19784;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19765__$1,(22),inst_19680);
} else {
if((state_val_19766 === (31))){
var inst_19763 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19765__$1,inst_19763);
} else {
if((state_val_19766 === (32))){
var inst_19719 = (state_19765[(16)]);
var inst_19724 = inst_19719.cljs$lang$protocol_mask$partition0$;
var inst_19725 = (inst_19724 & (64));
var inst_19726 = inst_19719.cljs$core$ISeq$;
var inst_19727 = (inst_19725) || (inst_19726);
var state_19765__$1 = state_19765;
if(cljs.core.truth_(inst_19727)){
var statearr_19785_19868 = state_19765__$1;
(statearr_19785_19868[(1)] = (35));

} else {
var statearr_19786_19869 = state_19765__$1;
(statearr_19786_19869[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (40))){
var inst_19740 = (state_19765[(20)]);
var inst_19739 = (state_19765[(2)]);
var inst_19740__$1 = cljs.core.get.call(null,inst_19739,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_19741 = cljs.core.get.call(null,inst_19739,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_19742 = cljs.core.not_empty.call(null,inst_19740__$1);
var state_19765__$1 = (function (){var statearr_19787 = state_19765;
(statearr_19787[(20)] = inst_19740__$1);

(statearr_19787[(21)] = inst_19741);

return statearr_19787;
})();
if(cljs.core.truth_(inst_19742)){
var statearr_19788_19870 = state_19765__$1;
(statearr_19788_19870[(1)] = (41));

} else {
var statearr_19789_19871 = state_19765__$1;
(statearr_19789_19871[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (33))){
var state_19765__$1 = state_19765;
var statearr_19790_19872 = state_19765__$1;
(statearr_19790_19872[(2)] = false);

(statearr_19790_19872[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (13))){
var inst_19639 = (state_19765[(22)]);
var inst_19643 = cljs.core.chunk_first.call(null,inst_19639);
var inst_19644 = cljs.core.chunk_rest.call(null,inst_19639);
var inst_19645 = cljs.core.count.call(null,inst_19643);
var inst_19626 = inst_19644;
var inst_19627 = inst_19643;
var inst_19628 = inst_19645;
var inst_19629 = (0);
var state_19765__$1 = (function (){var statearr_19791 = state_19765;
(statearr_19791[(7)] = inst_19626);

(statearr_19791[(8)] = inst_19629);

(statearr_19791[(9)] = inst_19628);

(statearr_19791[(10)] = inst_19627);

return statearr_19791;
})();
var statearr_19792_19873 = state_19765__$1;
(statearr_19792_19873[(2)] = null);

(statearr_19792_19873[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (22))){
var inst_19682 = (state_19765[(23)]);
var inst_19679 = (state_19765[(19)]);
var inst_19687 = (state_19765[(24)]);
var inst_19683 = (state_19765[(25)]);
var inst_19682__$1 = (state_19765[(2)]);
var inst_19683__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_19682__$1);
var inst_19684 = (function (){var all_files = inst_19679;
var res_SINGLEQUOTE_ = inst_19682__$1;
var res = inst_19683__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_19682,inst_19679,inst_19687,inst_19683,inst_19682__$1,inst_19683__$1,state_val_19766,c__18892__auto__,map__19611,map__19611__$1,opts,before_jsload,on_jsload,reload_dependents,map__19612,map__19612__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__19362_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__19362_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_19682,inst_19679,inst_19687,inst_19683,inst_19682__$1,inst_19683__$1,state_val_19766,c__18892__auto__,map__19611,map__19611__$1,opts,before_jsload,on_jsload,reload_dependents,map__19612,map__19612__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_19685 = cljs.core.filter.call(null,inst_19684,inst_19682__$1);
var inst_19686 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_19687__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_19686);
var inst_19688 = cljs.core.not_empty.call(null,inst_19687__$1);
var state_19765__$1 = (function (){var statearr_19793 = state_19765;
(statearr_19793[(23)] = inst_19682__$1);

(statearr_19793[(26)] = inst_19685);

(statearr_19793[(24)] = inst_19687__$1);

(statearr_19793[(25)] = inst_19683__$1);

return statearr_19793;
})();
if(cljs.core.truth_(inst_19688)){
var statearr_19794_19874 = state_19765__$1;
(statearr_19794_19874[(1)] = (23));

} else {
var statearr_19795_19875 = state_19765__$1;
(statearr_19795_19875[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (36))){
var state_19765__$1 = state_19765;
var statearr_19796_19876 = state_19765__$1;
(statearr_19796_19876[(2)] = false);

(statearr_19796_19876[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (41))){
var inst_19740 = (state_19765[(20)]);
var inst_19744 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_19745 = cljs.core.map.call(null,inst_19744,inst_19740);
var inst_19746 = cljs.core.pr_str.call(null,inst_19745);
var inst_19747 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_19746)].join('');
var inst_19748 = figwheel.client.utils.log.call(null,inst_19747);
var state_19765__$1 = state_19765;
var statearr_19797_19877 = state_19765__$1;
(statearr_19797_19877[(2)] = inst_19748);

(statearr_19797_19877[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (43))){
var inst_19741 = (state_19765[(21)]);
var inst_19751 = (state_19765[(2)]);
var inst_19752 = cljs.core.not_empty.call(null,inst_19741);
var state_19765__$1 = (function (){var statearr_19798 = state_19765;
(statearr_19798[(27)] = inst_19751);

return statearr_19798;
})();
if(cljs.core.truth_(inst_19752)){
var statearr_19799_19878 = state_19765__$1;
(statearr_19799_19878[(1)] = (44));

} else {
var statearr_19800_19879 = state_19765__$1;
(statearr_19800_19879[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (29))){
var inst_19682 = (state_19765[(23)]);
var inst_19719 = (state_19765[(16)]);
var inst_19685 = (state_19765[(26)]);
var inst_19679 = (state_19765[(19)]);
var inst_19687 = (state_19765[(24)]);
var inst_19683 = (state_19765[(25)]);
var inst_19715 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_19718 = (function (){var all_files = inst_19679;
var res_SINGLEQUOTE_ = inst_19682;
var res = inst_19683;
var files_not_loaded = inst_19685;
var dependencies_that_loaded = inst_19687;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_19682,inst_19719,inst_19685,inst_19679,inst_19687,inst_19683,inst_19715,state_val_19766,c__18892__auto__,map__19611,map__19611__$1,opts,before_jsload,on_jsload,reload_dependents,map__19612,map__19612__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__19717){
var map__19801 = p__19717;
var map__19801__$1 = ((((!((map__19801 == null)))?((((map__19801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19801):map__19801);
var namespace = cljs.core.get.call(null,map__19801__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_19682,inst_19719,inst_19685,inst_19679,inst_19687,inst_19683,inst_19715,state_val_19766,c__18892__auto__,map__19611,map__19611__$1,opts,before_jsload,on_jsload,reload_dependents,map__19612,map__19612__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_19719__$1 = cljs.core.group_by.call(null,inst_19718,inst_19685);
var inst_19721 = (inst_19719__$1 == null);
var inst_19722 = cljs.core.not.call(null,inst_19721);
var state_19765__$1 = (function (){var statearr_19803 = state_19765;
(statearr_19803[(28)] = inst_19715);

(statearr_19803[(16)] = inst_19719__$1);

return statearr_19803;
})();
if(inst_19722){
var statearr_19804_19880 = state_19765__$1;
(statearr_19804_19880[(1)] = (32));

} else {
var statearr_19805_19881 = state_19765__$1;
(statearr_19805_19881[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (44))){
var inst_19741 = (state_19765[(21)]);
var inst_19754 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_19741);
var inst_19755 = cljs.core.pr_str.call(null,inst_19754);
var inst_19756 = [cljs.core.str("not required: "),cljs.core.str(inst_19755)].join('');
var inst_19757 = figwheel.client.utils.log.call(null,inst_19756);
var state_19765__$1 = state_19765;
var statearr_19806_19882 = state_19765__$1;
(statearr_19806_19882[(2)] = inst_19757);

(statearr_19806_19882[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (6))){
var inst_19660 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
var statearr_19807_19883 = state_19765__$1;
(statearr_19807_19883[(2)] = inst_19660);

(statearr_19807_19883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (28))){
var inst_19685 = (state_19765[(26)]);
var inst_19712 = (state_19765[(2)]);
var inst_19713 = cljs.core.not_empty.call(null,inst_19685);
var state_19765__$1 = (function (){var statearr_19808 = state_19765;
(statearr_19808[(29)] = inst_19712);

return statearr_19808;
})();
if(cljs.core.truth_(inst_19713)){
var statearr_19809_19884 = state_19765__$1;
(statearr_19809_19884[(1)] = (29));

} else {
var statearr_19810_19885 = state_19765__$1;
(statearr_19810_19885[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (25))){
var inst_19683 = (state_19765[(25)]);
var inst_19699 = (state_19765[(2)]);
var inst_19700 = cljs.core.not_empty.call(null,inst_19683);
var state_19765__$1 = (function (){var statearr_19811 = state_19765;
(statearr_19811[(30)] = inst_19699);

return statearr_19811;
})();
if(cljs.core.truth_(inst_19700)){
var statearr_19812_19886 = state_19765__$1;
(statearr_19812_19886[(1)] = (26));

} else {
var statearr_19813_19887 = state_19765__$1;
(statearr_19813_19887[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (34))){
var inst_19734 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
if(cljs.core.truth_(inst_19734)){
var statearr_19814_19888 = state_19765__$1;
(statearr_19814_19888[(1)] = (38));

} else {
var statearr_19815_19889 = state_19765__$1;
(statearr_19815_19889[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (17))){
var state_19765__$1 = state_19765;
var statearr_19816_19890 = state_19765__$1;
(statearr_19816_19890[(2)] = recompile_dependents);

(statearr_19816_19890[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (3))){
var state_19765__$1 = state_19765;
var statearr_19817_19891 = state_19765__$1;
(statearr_19817_19891[(2)] = null);

(statearr_19817_19891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (12))){
var inst_19656 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
var statearr_19818_19892 = state_19765__$1;
(statearr_19818_19892[(2)] = inst_19656);

(statearr_19818_19892[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (2))){
var inst_19618 = (state_19765[(13)]);
var inst_19625 = cljs.core.seq.call(null,inst_19618);
var inst_19626 = inst_19625;
var inst_19627 = null;
var inst_19628 = (0);
var inst_19629 = (0);
var state_19765__$1 = (function (){var statearr_19819 = state_19765;
(statearr_19819[(7)] = inst_19626);

(statearr_19819[(8)] = inst_19629);

(statearr_19819[(9)] = inst_19628);

(statearr_19819[(10)] = inst_19627);

return statearr_19819;
})();
var statearr_19820_19893 = state_19765__$1;
(statearr_19820_19893[(2)] = null);

(statearr_19820_19893[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (23))){
var inst_19682 = (state_19765[(23)]);
var inst_19685 = (state_19765[(26)]);
var inst_19679 = (state_19765[(19)]);
var inst_19687 = (state_19765[(24)]);
var inst_19683 = (state_19765[(25)]);
var inst_19690 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_19692 = (function (){var all_files = inst_19679;
var res_SINGLEQUOTE_ = inst_19682;
var res = inst_19683;
var files_not_loaded = inst_19685;
var dependencies_that_loaded = inst_19687;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_19682,inst_19685,inst_19679,inst_19687,inst_19683,inst_19690,state_val_19766,c__18892__auto__,map__19611,map__19611__$1,opts,before_jsload,on_jsload,reload_dependents,map__19612,map__19612__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__19691){
var map__19821 = p__19691;
var map__19821__$1 = ((((!((map__19821 == null)))?((((map__19821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19821):map__19821);
var request_url = cljs.core.get.call(null,map__19821__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_19682,inst_19685,inst_19679,inst_19687,inst_19683,inst_19690,state_val_19766,c__18892__auto__,map__19611,map__19611__$1,opts,before_jsload,on_jsload,reload_dependents,map__19612,map__19612__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_19693 = cljs.core.reverse.call(null,inst_19687);
var inst_19694 = cljs.core.map.call(null,inst_19692,inst_19693);
var inst_19695 = cljs.core.pr_str.call(null,inst_19694);
var inst_19696 = figwheel.client.utils.log.call(null,inst_19695);
var state_19765__$1 = (function (){var statearr_19823 = state_19765;
(statearr_19823[(31)] = inst_19690);

return statearr_19823;
})();
var statearr_19824_19894 = state_19765__$1;
(statearr_19824_19894[(2)] = inst_19696);

(statearr_19824_19894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (35))){
var state_19765__$1 = state_19765;
var statearr_19825_19895 = state_19765__$1;
(statearr_19825_19895[(2)] = true);

(statearr_19825_19895[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (19))){
var inst_19669 = (state_19765[(12)]);
var inst_19675 = figwheel.client.file_reloading.expand_files.call(null,inst_19669);
var state_19765__$1 = state_19765;
var statearr_19826_19896 = state_19765__$1;
(statearr_19826_19896[(2)] = inst_19675);

(statearr_19826_19896[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (11))){
var state_19765__$1 = state_19765;
var statearr_19827_19897 = state_19765__$1;
(statearr_19827_19897[(2)] = null);

(statearr_19827_19897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (9))){
var inst_19658 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
var statearr_19828_19898 = state_19765__$1;
(statearr_19828_19898[(2)] = inst_19658);

(statearr_19828_19898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (5))){
var inst_19629 = (state_19765[(8)]);
var inst_19628 = (state_19765[(9)]);
var inst_19631 = (inst_19629 < inst_19628);
var inst_19632 = inst_19631;
var state_19765__$1 = state_19765;
if(cljs.core.truth_(inst_19632)){
var statearr_19829_19899 = state_19765__$1;
(statearr_19829_19899[(1)] = (7));

} else {
var statearr_19830_19900 = state_19765__$1;
(statearr_19830_19900[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (14))){
var inst_19639 = (state_19765[(22)]);
var inst_19648 = cljs.core.first.call(null,inst_19639);
var inst_19649 = figwheel.client.file_reloading.eval_body.call(null,inst_19648,opts);
var inst_19650 = cljs.core.next.call(null,inst_19639);
var inst_19626 = inst_19650;
var inst_19627 = null;
var inst_19628 = (0);
var inst_19629 = (0);
var state_19765__$1 = (function (){var statearr_19831 = state_19765;
(statearr_19831[(7)] = inst_19626);

(statearr_19831[(8)] = inst_19629);

(statearr_19831[(32)] = inst_19649);

(statearr_19831[(9)] = inst_19628);

(statearr_19831[(10)] = inst_19627);

return statearr_19831;
})();
var statearr_19832_19901 = state_19765__$1;
(statearr_19832_19901[(2)] = null);

(statearr_19832_19901[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (45))){
var state_19765__$1 = state_19765;
var statearr_19833_19902 = state_19765__$1;
(statearr_19833_19902[(2)] = null);

(statearr_19833_19902[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (26))){
var inst_19682 = (state_19765[(23)]);
var inst_19685 = (state_19765[(26)]);
var inst_19679 = (state_19765[(19)]);
var inst_19687 = (state_19765[(24)]);
var inst_19683 = (state_19765[(25)]);
var inst_19702 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_19704 = (function (){var all_files = inst_19679;
var res_SINGLEQUOTE_ = inst_19682;
var res = inst_19683;
var files_not_loaded = inst_19685;
var dependencies_that_loaded = inst_19687;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_19682,inst_19685,inst_19679,inst_19687,inst_19683,inst_19702,state_val_19766,c__18892__auto__,map__19611,map__19611__$1,opts,before_jsload,on_jsload,reload_dependents,map__19612,map__19612__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__19703){
var map__19834 = p__19703;
var map__19834__$1 = ((((!((map__19834 == null)))?((((map__19834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19834):map__19834);
var namespace = cljs.core.get.call(null,map__19834__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__19834__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_19682,inst_19685,inst_19679,inst_19687,inst_19683,inst_19702,state_val_19766,c__18892__auto__,map__19611,map__19611__$1,opts,before_jsload,on_jsload,reload_dependents,map__19612,map__19612__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_19705 = cljs.core.map.call(null,inst_19704,inst_19683);
var inst_19706 = cljs.core.pr_str.call(null,inst_19705);
var inst_19707 = figwheel.client.utils.log.call(null,inst_19706);
var inst_19708 = (function (){var all_files = inst_19679;
var res_SINGLEQUOTE_ = inst_19682;
var res = inst_19683;
var files_not_loaded = inst_19685;
var dependencies_that_loaded = inst_19687;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_19682,inst_19685,inst_19679,inst_19687,inst_19683,inst_19702,inst_19704,inst_19705,inst_19706,inst_19707,state_val_19766,c__18892__auto__,map__19611,map__19611__$1,opts,before_jsload,on_jsload,reload_dependents,map__19612,map__19612__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_19682,inst_19685,inst_19679,inst_19687,inst_19683,inst_19702,inst_19704,inst_19705,inst_19706,inst_19707,state_val_19766,c__18892__auto__,map__19611,map__19611__$1,opts,before_jsload,on_jsload,reload_dependents,map__19612,map__19612__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_19709 = setTimeout(inst_19708,(10));
var state_19765__$1 = (function (){var statearr_19836 = state_19765;
(statearr_19836[(33)] = inst_19702);

(statearr_19836[(34)] = inst_19707);

return statearr_19836;
})();
var statearr_19837_19903 = state_19765__$1;
(statearr_19837_19903[(2)] = inst_19709);

(statearr_19837_19903[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (16))){
var state_19765__$1 = state_19765;
var statearr_19838_19904 = state_19765__$1;
(statearr_19838_19904[(2)] = reload_dependents);

(statearr_19838_19904[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (38))){
var inst_19719 = (state_19765[(16)]);
var inst_19736 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19719);
var state_19765__$1 = state_19765;
var statearr_19839_19905 = state_19765__$1;
(statearr_19839_19905[(2)] = inst_19736);

(statearr_19839_19905[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (30))){
var state_19765__$1 = state_19765;
var statearr_19840_19906 = state_19765__$1;
(statearr_19840_19906[(2)] = null);

(statearr_19840_19906[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (10))){
var inst_19639 = (state_19765[(22)]);
var inst_19641 = cljs.core.chunked_seq_QMARK_.call(null,inst_19639);
var state_19765__$1 = state_19765;
if(inst_19641){
var statearr_19841_19907 = state_19765__$1;
(statearr_19841_19907[(1)] = (13));

} else {
var statearr_19842_19908 = state_19765__$1;
(statearr_19842_19908[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (18))){
var inst_19673 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
if(cljs.core.truth_(inst_19673)){
var statearr_19843_19909 = state_19765__$1;
(statearr_19843_19909[(1)] = (19));

} else {
var statearr_19844_19910 = state_19765__$1;
(statearr_19844_19910[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (42))){
var state_19765__$1 = state_19765;
var statearr_19845_19911 = state_19765__$1;
(statearr_19845_19911[(2)] = null);

(statearr_19845_19911[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (37))){
var inst_19731 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
var statearr_19846_19912 = state_19765__$1;
(statearr_19846_19912[(2)] = inst_19731);

(statearr_19846_19912[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (8))){
var inst_19626 = (state_19765[(7)]);
var inst_19639 = (state_19765[(22)]);
var inst_19639__$1 = cljs.core.seq.call(null,inst_19626);
var state_19765__$1 = (function (){var statearr_19847 = state_19765;
(statearr_19847[(22)] = inst_19639__$1);

return statearr_19847;
})();
if(inst_19639__$1){
var statearr_19848_19913 = state_19765__$1;
(statearr_19848_19913[(1)] = (10));

} else {
var statearr_19849_19914 = state_19765__$1;
(statearr_19849_19914[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18892__auto__,map__19611,map__19611__$1,opts,before_jsload,on_jsload,reload_dependents,map__19612,map__19612__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18871__auto__,c__18892__auto__,map__19611,map__19611__$1,opts,before_jsload,on_jsload,reload_dependents,map__19612,map__19612__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18872__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18872__auto____0 = (function (){
var statearr_19853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19853[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18872__auto__);

(statearr_19853[(1)] = (1));

return statearr_19853;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18872__auto____1 = (function (state_19765){
while(true){
var ret_value__18873__auto__ = (function (){try{while(true){
var result__18874__auto__ = switch__18871__auto__.call(null,state_19765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18874__auto__;
}
break;
}
}catch (e19854){if((e19854 instanceof Object)){
var ex__18875__auto__ = e19854;
var statearr_19855_19915 = state_19765;
(statearr_19855_19915[(5)] = ex__18875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19916 = state_19765;
state_19765 = G__19916;
continue;
} else {
return ret_value__18873__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18872__auto__ = function(state_19765){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18872__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18872__auto____1.call(this,state_19765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18872__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18872__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18872__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18872__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18872__auto__;
})()
;})(switch__18871__auto__,c__18892__auto__,map__19611,map__19611__$1,opts,before_jsload,on_jsload,reload_dependents,map__19612,map__19612__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18894__auto__ = (function (){var statearr_19856 = f__18893__auto__.call(null);
(statearr_19856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18892__auto__);

return statearr_19856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18894__auto__);
});})(c__18892__auto__,map__19611,map__19611__$1,opts,before_jsload,on_jsload,reload_dependents,map__19612,map__19612__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18892__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__19919,link){
var map__19922 = p__19919;
var map__19922__$1 = ((((!((map__19922 == null)))?((((map__19922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19922):map__19922);
var file = cljs.core.get.call(null,map__19922__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__19922,map__19922__$1,file){
return (function (p1__19917_SHARP_,p2__19918_SHARP_){
if(cljs.core._EQ_.call(null,p1__19917_SHARP_,p2__19918_SHARP_)){
return p1__19917_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__19922,map__19922__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__19928){
var map__19929 = p__19928;
var map__19929__$1 = ((((!((map__19929 == null)))?((((map__19929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19929):map__19929);
var match_length = cljs.core.get.call(null,map__19929__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__19929__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__19924_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__19924_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args19931 = [];
var len__17900__auto___19934 = arguments.length;
var i__17901__auto___19935 = (0);
while(true){
if((i__17901__auto___19935 < len__17900__auto___19934)){
args19931.push((arguments[i__17901__auto___19935]));

var G__19936 = (i__17901__auto___19935 + (1));
i__17901__auto___19935 = G__19936;
continue;
} else {
}
break;
}

var G__19933 = args19931.length;
switch (G__19933) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19931.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__19938_SHARP_,p2__19939_SHARP_){
return cljs.core.assoc.call(null,p1__19938_SHARP_,cljs.core.get.call(null,p2__19939_SHARP_,key),p2__19939_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__19940){
var map__19943 = p__19940;
var map__19943__$1 = ((((!((map__19943 == null)))?((((map__19943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19943):map__19943);
var f_data = map__19943__$1;
var file = cljs.core.get.call(null,map__19943__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__19945,files_msg){
var map__19952 = p__19945;
var map__19952__$1 = ((((!((map__19952 == null)))?((((map__19952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19952):map__19952);
var opts = map__19952__$1;
var on_cssload = cljs.core.get.call(null,map__19952__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__19954_19958 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__19955_19959 = null;
var count__19956_19960 = (0);
var i__19957_19961 = (0);
while(true){
if((i__19957_19961 < count__19956_19960)){
var f_19962 = cljs.core._nth.call(null,chunk__19955_19959,i__19957_19961);
figwheel.client.file_reloading.reload_css_file.call(null,f_19962);

var G__19963 = seq__19954_19958;
var G__19964 = chunk__19955_19959;
var G__19965 = count__19956_19960;
var G__19966 = (i__19957_19961 + (1));
seq__19954_19958 = G__19963;
chunk__19955_19959 = G__19964;
count__19956_19960 = G__19965;
i__19957_19961 = G__19966;
continue;
} else {
var temp__4425__auto___19967 = cljs.core.seq.call(null,seq__19954_19958);
if(temp__4425__auto___19967){
var seq__19954_19968__$1 = temp__4425__auto___19967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19954_19968__$1)){
var c__17645__auto___19969 = cljs.core.chunk_first.call(null,seq__19954_19968__$1);
var G__19970 = cljs.core.chunk_rest.call(null,seq__19954_19968__$1);
var G__19971 = c__17645__auto___19969;
var G__19972 = cljs.core.count.call(null,c__17645__auto___19969);
var G__19973 = (0);
seq__19954_19958 = G__19970;
chunk__19955_19959 = G__19971;
count__19956_19960 = G__19972;
i__19957_19961 = G__19973;
continue;
} else {
var f_19974 = cljs.core.first.call(null,seq__19954_19968__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_19974);

var G__19975 = cljs.core.next.call(null,seq__19954_19968__$1);
var G__19976 = null;
var G__19977 = (0);
var G__19978 = (0);
seq__19954_19958 = G__19975;
chunk__19955_19959 = G__19976;
count__19956_19960 = G__19977;
i__19957_19961 = G__19978;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__19952,map__19952__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__19952,map__19952__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map