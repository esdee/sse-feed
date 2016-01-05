// Compiled by ClojureScript 1.7.189 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19995_20009 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19996_20010 = null;
var count__19997_20011 = (0);
var i__19998_20012 = (0);
while(true){
if((i__19998_20012 < count__19997_20011)){
var f_20013 = cljs.core._nth.call(null,chunk__19996_20010,i__19998_20012);
cljs.core.println.call(null,"  ",f_20013);

var G__20014 = seq__19995_20009;
var G__20015 = chunk__19996_20010;
var G__20016 = count__19997_20011;
var G__20017 = (i__19998_20012 + (1));
seq__19995_20009 = G__20014;
chunk__19996_20010 = G__20015;
count__19997_20011 = G__20016;
i__19998_20012 = G__20017;
continue;
} else {
var temp__4425__auto___20018 = cljs.core.seq.call(null,seq__19995_20009);
if(temp__4425__auto___20018){
var seq__19995_20019__$1 = temp__4425__auto___20018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19995_20019__$1)){
var c__17645__auto___20020 = cljs.core.chunk_first.call(null,seq__19995_20019__$1);
var G__20021 = cljs.core.chunk_rest.call(null,seq__19995_20019__$1);
var G__20022 = c__17645__auto___20020;
var G__20023 = cljs.core.count.call(null,c__17645__auto___20020);
var G__20024 = (0);
seq__19995_20009 = G__20021;
chunk__19996_20010 = G__20022;
count__19997_20011 = G__20023;
i__19998_20012 = G__20024;
continue;
} else {
var f_20025 = cljs.core.first.call(null,seq__19995_20019__$1);
cljs.core.println.call(null,"  ",f_20025);

var G__20026 = cljs.core.next.call(null,seq__19995_20019__$1);
var G__20027 = null;
var G__20028 = (0);
var G__20029 = (0);
seq__19995_20009 = G__20026;
chunk__19996_20010 = G__20027;
count__19997_20011 = G__20028;
i__19998_20012 = G__20029;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20030 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16842__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16842__auto__)){
return or__16842__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20030);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20030)))?cljs.core.second.call(null,arglists_20030):arglists_20030));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19999 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20000 = null;
var count__20001 = (0);
var i__20002 = (0);
while(true){
if((i__20002 < count__20001)){
var vec__20003 = cljs.core._nth.call(null,chunk__20000,i__20002);
var name = cljs.core.nth.call(null,vec__20003,(0),null);
var map__20004 = cljs.core.nth.call(null,vec__20003,(1),null);
var map__20004__$1 = ((((!((map__20004 == null)))?((((map__20004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20004):map__20004);
var doc = cljs.core.get.call(null,map__20004__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__20004__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__20031 = seq__19999;
var G__20032 = chunk__20000;
var G__20033 = count__20001;
var G__20034 = (i__20002 + (1));
seq__19999 = G__20031;
chunk__20000 = G__20032;
count__20001 = G__20033;
i__20002 = G__20034;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19999);
if(temp__4425__auto__){
var seq__19999__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19999__$1)){
var c__17645__auto__ = cljs.core.chunk_first.call(null,seq__19999__$1);
var G__20035 = cljs.core.chunk_rest.call(null,seq__19999__$1);
var G__20036 = c__17645__auto__;
var G__20037 = cljs.core.count.call(null,c__17645__auto__);
var G__20038 = (0);
seq__19999 = G__20035;
chunk__20000 = G__20036;
count__20001 = G__20037;
i__20002 = G__20038;
continue;
} else {
var vec__20006 = cljs.core.first.call(null,seq__19999__$1);
var name = cljs.core.nth.call(null,vec__20006,(0),null);
var map__20007 = cljs.core.nth.call(null,vec__20006,(1),null);
var map__20007__$1 = ((((!((map__20007 == null)))?((((map__20007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20007):map__20007);
var doc = cljs.core.get.call(null,map__20007__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__20007__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__20039 = cljs.core.next.call(null,seq__19999__$1);
var G__20040 = null;
var G__20041 = (0);
var G__20042 = (0);
seq__19999 = G__20039;
chunk__20000 = G__20040;
count__20001 = G__20041;
i__20002 = G__20042;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map