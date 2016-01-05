// Compiled by ClojureScript 1.7.189 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__20414 = cljs.core._EQ_;
var expr__20415 = (function (){var or__16842__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16842__auto__)){
return or__16842__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__20414.call(null,"true",expr__20415))){
return true;
} else {
if(cljs.core.truth_(pred__20414.call(null,"false",expr__20415))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__20415)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17907__auto__ = [];
var len__17900__auto___20418 = arguments.length;
var i__17901__auto___20419 = (0);
while(true){
if((i__17901__auto___20419 < len__17900__auto___20418)){
args__17907__auto__.push((arguments[i__17901__auto___20419]));

var G__20420 = (i__17901__auto___20419 + (1));
i__17901__auto___20419 = G__20420;
continue;
} else {
}
break;
}

var argseq__17908__auto__ = ((((0) < args__17907__auto__.length))?(new cljs.core.IndexedSeq(args__17907__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17908__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq20417){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20417));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__20421){
var map__20424 = p__20421;
var map__20424__$1 = ((((!((map__20424 == null)))?((((map__20424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20424):map__20424);
var message = cljs.core.get.call(null,map__20424__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__20424__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16842__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16842__auto__)){
return or__16842__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16830__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16830__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16830__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18892__auto___20586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18892__auto___20586,ch){
return (function (){
var f__18893__auto__ = (function (){var switch__18871__auto__ = ((function (c__18892__auto___20586,ch){
return (function (state_20555){
var state_val_20556 = (state_20555[(1)]);
if((state_val_20556 === (7))){
var inst_20551 = (state_20555[(2)]);
var state_20555__$1 = state_20555;
var statearr_20557_20587 = state_20555__$1;
(statearr_20557_20587[(2)] = inst_20551);

(statearr_20557_20587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (1))){
var state_20555__$1 = state_20555;
var statearr_20558_20588 = state_20555__$1;
(statearr_20558_20588[(2)] = null);

(statearr_20558_20588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (4))){
var inst_20508 = (state_20555[(7)]);
var inst_20508__$1 = (state_20555[(2)]);
var state_20555__$1 = (function (){var statearr_20559 = state_20555;
(statearr_20559[(7)] = inst_20508__$1);

return statearr_20559;
})();
if(cljs.core.truth_(inst_20508__$1)){
var statearr_20560_20589 = state_20555__$1;
(statearr_20560_20589[(1)] = (5));

} else {
var statearr_20561_20590 = state_20555__$1;
(statearr_20561_20590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (15))){
var inst_20515 = (state_20555[(8)]);
var inst_20530 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_20515);
var inst_20531 = cljs.core.first.call(null,inst_20530);
var inst_20532 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_20531);
var inst_20533 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_20532)].join('');
var inst_20534 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_20533);
var state_20555__$1 = state_20555;
var statearr_20562_20591 = state_20555__$1;
(statearr_20562_20591[(2)] = inst_20534);

(statearr_20562_20591[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (13))){
var inst_20539 = (state_20555[(2)]);
var state_20555__$1 = state_20555;
var statearr_20563_20592 = state_20555__$1;
(statearr_20563_20592[(2)] = inst_20539);

(statearr_20563_20592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (6))){
var state_20555__$1 = state_20555;
var statearr_20564_20593 = state_20555__$1;
(statearr_20564_20593[(2)] = null);

(statearr_20564_20593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (17))){
var inst_20537 = (state_20555[(2)]);
var state_20555__$1 = state_20555;
var statearr_20565_20594 = state_20555__$1;
(statearr_20565_20594[(2)] = inst_20537);

(statearr_20565_20594[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (3))){
var inst_20553 = (state_20555[(2)]);
var state_20555__$1 = state_20555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20555__$1,inst_20553);
} else {
if((state_val_20556 === (12))){
var inst_20514 = (state_20555[(9)]);
var inst_20528 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_20514,opts);
var state_20555__$1 = state_20555;
if(cljs.core.truth_(inst_20528)){
var statearr_20566_20595 = state_20555__$1;
(statearr_20566_20595[(1)] = (15));

} else {
var statearr_20567_20596 = state_20555__$1;
(statearr_20567_20596[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (2))){
var state_20555__$1 = state_20555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20555__$1,(4),ch);
} else {
if((state_val_20556 === (11))){
var inst_20515 = (state_20555[(8)]);
var inst_20520 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20521 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_20515);
var inst_20522 = cljs.core.async.timeout.call(null,(1000));
var inst_20523 = [inst_20521,inst_20522];
var inst_20524 = (new cljs.core.PersistentVector(null,2,(5),inst_20520,inst_20523,null));
var state_20555__$1 = state_20555;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20555__$1,(14),inst_20524);
} else {
if((state_val_20556 === (9))){
var inst_20515 = (state_20555[(8)]);
var inst_20541 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_20542 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_20515);
var inst_20543 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_20542);
var inst_20544 = [cljs.core.str("Not loading: "),cljs.core.str(inst_20543)].join('');
var inst_20545 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_20544);
var state_20555__$1 = (function (){var statearr_20568 = state_20555;
(statearr_20568[(10)] = inst_20541);

return statearr_20568;
})();
var statearr_20569_20597 = state_20555__$1;
(statearr_20569_20597[(2)] = inst_20545);

(statearr_20569_20597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (5))){
var inst_20508 = (state_20555[(7)]);
var inst_20510 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_20511 = (new cljs.core.PersistentArrayMap(null,2,inst_20510,null));
var inst_20512 = (new cljs.core.PersistentHashSet(null,inst_20511,null));
var inst_20513 = figwheel.client.focus_msgs.call(null,inst_20512,inst_20508);
var inst_20514 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_20513);
var inst_20515 = cljs.core.first.call(null,inst_20513);
var inst_20516 = figwheel.client.autoload_QMARK_.call(null);
var state_20555__$1 = (function (){var statearr_20570 = state_20555;
(statearr_20570[(9)] = inst_20514);

(statearr_20570[(8)] = inst_20515);

return statearr_20570;
})();
if(cljs.core.truth_(inst_20516)){
var statearr_20571_20598 = state_20555__$1;
(statearr_20571_20598[(1)] = (8));

} else {
var statearr_20572_20599 = state_20555__$1;
(statearr_20572_20599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (14))){
var inst_20526 = (state_20555[(2)]);
var state_20555__$1 = state_20555;
var statearr_20573_20600 = state_20555__$1;
(statearr_20573_20600[(2)] = inst_20526);

(statearr_20573_20600[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (16))){
var state_20555__$1 = state_20555;
var statearr_20574_20601 = state_20555__$1;
(statearr_20574_20601[(2)] = null);

(statearr_20574_20601[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (10))){
var inst_20547 = (state_20555[(2)]);
var state_20555__$1 = (function (){var statearr_20575 = state_20555;
(statearr_20575[(11)] = inst_20547);

return statearr_20575;
})();
var statearr_20576_20602 = state_20555__$1;
(statearr_20576_20602[(2)] = null);

(statearr_20576_20602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (8))){
var inst_20514 = (state_20555[(9)]);
var inst_20518 = figwheel.client.reload_file_state_QMARK_.call(null,inst_20514,opts);
var state_20555__$1 = state_20555;
if(cljs.core.truth_(inst_20518)){
var statearr_20577_20603 = state_20555__$1;
(statearr_20577_20603[(1)] = (11));

} else {
var statearr_20578_20604 = state_20555__$1;
(statearr_20578_20604[(1)] = (12));

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
});})(c__18892__auto___20586,ch))
;
return ((function (switch__18871__auto__,c__18892__auto___20586,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18872__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18872__auto____0 = (function (){
var statearr_20582 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20582[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18872__auto__);

(statearr_20582[(1)] = (1));

return statearr_20582;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18872__auto____1 = (function (state_20555){
while(true){
var ret_value__18873__auto__ = (function (){try{while(true){
var result__18874__auto__ = switch__18871__auto__.call(null,state_20555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18874__auto__;
}
break;
}
}catch (e20583){if((e20583 instanceof Object)){
var ex__18875__auto__ = e20583;
var statearr_20584_20605 = state_20555;
(statearr_20584_20605[(5)] = ex__18875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20606 = state_20555;
state_20555 = G__20606;
continue;
} else {
return ret_value__18873__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18872__auto__ = function(state_20555){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18872__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18872__auto____1.call(this,state_20555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18872__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18872__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18872__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18872__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18872__auto__;
})()
;})(switch__18871__auto__,c__18892__auto___20586,ch))
})();
var state__18894__auto__ = (function (){var statearr_20585 = f__18893__auto__.call(null);
(statearr_20585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18892__auto___20586);

return statearr_20585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18894__auto__);
});})(c__18892__auto___20586,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__20607_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__20607_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_20614 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_20614){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_20612 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_20613 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20613;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20612;
}}catch (e20611){if((e20611 instanceof Error)){
var e = e20611;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_20614], null));
} else {
var e = e20611;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_20614))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__20615){
var map__20622 = p__20615;
var map__20622__$1 = ((((!((map__20622 == null)))?((((map__20622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20622):map__20622);
var opts = map__20622__$1;
var build_id = cljs.core.get.call(null,map__20622__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__20622,map__20622__$1,opts,build_id){
return (function (p__20624){
var vec__20625 = p__20624;
var map__20626 = cljs.core.nth.call(null,vec__20625,(0),null);
var map__20626__$1 = ((((!((map__20626 == null)))?((((map__20626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20626):map__20626);
var msg = map__20626__$1;
var msg_name = cljs.core.get.call(null,map__20626__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__20625,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__20625,map__20626,map__20626__$1,msg,msg_name,_,map__20622,map__20622__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__20625,map__20626,map__20626__$1,msg,msg_name,_,map__20622,map__20622__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__20622,map__20622__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__20632){
var vec__20633 = p__20632;
var map__20634 = cljs.core.nth.call(null,vec__20633,(0),null);
var map__20634__$1 = ((((!((map__20634 == null)))?((((map__20634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20634):map__20634);
var msg = map__20634__$1;
var msg_name = cljs.core.get.call(null,map__20634__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__20633,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__20636){
var map__20646 = p__20636;
var map__20646__$1 = ((((!((map__20646 == null)))?((((map__20646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20646):map__20646);
var on_compile_warning = cljs.core.get.call(null,map__20646__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__20646__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__20646,map__20646__$1,on_compile_warning,on_compile_fail){
return (function (p__20648){
var vec__20649 = p__20648;
var map__20650 = cljs.core.nth.call(null,vec__20649,(0),null);
var map__20650__$1 = ((((!((map__20650 == null)))?((((map__20650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20650):map__20650);
var msg = map__20650__$1;
var msg_name = cljs.core.get.call(null,map__20650__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__20649,(1));
var pred__20652 = cljs.core._EQ_;
var expr__20653 = msg_name;
if(cljs.core.truth_(pred__20652.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__20653))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__20652.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__20653))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__20646,map__20646__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18892__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18892__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18893__auto__ = (function (){var switch__18871__auto__ = ((function (c__18892__auto__,msg_hist,msg_names,msg){
return (function (state_20869){
var state_val_20870 = (state_20869[(1)]);
if((state_val_20870 === (7))){
var inst_20793 = (state_20869[(2)]);
var state_20869__$1 = state_20869;
if(cljs.core.truth_(inst_20793)){
var statearr_20871_20917 = state_20869__$1;
(statearr_20871_20917[(1)] = (8));

} else {
var statearr_20872_20918 = state_20869__$1;
(statearr_20872_20918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (20))){
var inst_20863 = (state_20869[(2)]);
var state_20869__$1 = state_20869;
var statearr_20873_20919 = state_20869__$1;
(statearr_20873_20919[(2)] = inst_20863);

(statearr_20873_20919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (27))){
var inst_20859 = (state_20869[(2)]);
var state_20869__$1 = state_20869;
var statearr_20874_20920 = state_20869__$1;
(statearr_20874_20920[(2)] = inst_20859);

(statearr_20874_20920[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (1))){
var inst_20786 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_20869__$1 = state_20869;
if(cljs.core.truth_(inst_20786)){
var statearr_20875_20921 = state_20869__$1;
(statearr_20875_20921[(1)] = (2));

} else {
var statearr_20876_20922 = state_20869__$1;
(statearr_20876_20922[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (24))){
var inst_20861 = (state_20869[(2)]);
var state_20869__$1 = state_20869;
var statearr_20877_20923 = state_20869__$1;
(statearr_20877_20923[(2)] = inst_20861);

(statearr_20877_20923[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (4))){
var inst_20867 = (state_20869[(2)]);
var state_20869__$1 = state_20869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20869__$1,inst_20867);
} else {
if((state_val_20870 === (15))){
var inst_20865 = (state_20869[(2)]);
var state_20869__$1 = state_20869;
var statearr_20878_20924 = state_20869__$1;
(statearr_20878_20924[(2)] = inst_20865);

(statearr_20878_20924[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (21))){
var inst_20824 = (state_20869[(2)]);
var state_20869__$1 = state_20869;
var statearr_20879_20925 = state_20869__$1;
(statearr_20879_20925[(2)] = inst_20824);

(statearr_20879_20925[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (31))){
var inst_20848 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_20869__$1 = state_20869;
if(cljs.core.truth_(inst_20848)){
var statearr_20880_20926 = state_20869__$1;
(statearr_20880_20926[(1)] = (34));

} else {
var statearr_20881_20927 = state_20869__$1;
(statearr_20881_20927[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (32))){
var inst_20857 = (state_20869[(2)]);
var state_20869__$1 = state_20869;
var statearr_20882_20928 = state_20869__$1;
(statearr_20882_20928[(2)] = inst_20857);

(statearr_20882_20928[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (33))){
var inst_20846 = (state_20869[(2)]);
var state_20869__$1 = state_20869;
var statearr_20883_20929 = state_20869__$1;
(statearr_20883_20929[(2)] = inst_20846);

(statearr_20883_20929[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (13))){
var inst_20807 = figwheel.client.heads_up.clear.call(null);
var state_20869__$1 = state_20869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20869__$1,(16),inst_20807);
} else {
if((state_val_20870 === (22))){
var inst_20828 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20829 = figwheel.client.heads_up.append_message.call(null,inst_20828);
var state_20869__$1 = state_20869;
var statearr_20884_20930 = state_20869__$1;
(statearr_20884_20930[(2)] = inst_20829);

(statearr_20884_20930[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (36))){
var inst_20855 = (state_20869[(2)]);
var state_20869__$1 = state_20869;
var statearr_20885_20931 = state_20869__$1;
(statearr_20885_20931[(2)] = inst_20855);

(statearr_20885_20931[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (29))){
var inst_20839 = (state_20869[(2)]);
var state_20869__$1 = state_20869;
var statearr_20886_20932 = state_20869__$1;
(statearr_20886_20932[(2)] = inst_20839);

(statearr_20886_20932[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (6))){
var inst_20788 = (state_20869[(7)]);
var state_20869__$1 = state_20869;
var statearr_20887_20933 = state_20869__$1;
(statearr_20887_20933[(2)] = inst_20788);

(statearr_20887_20933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (28))){
var inst_20835 = (state_20869[(2)]);
var inst_20836 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20837 = figwheel.client.heads_up.display_warning.call(null,inst_20836);
var state_20869__$1 = (function (){var statearr_20888 = state_20869;
(statearr_20888[(8)] = inst_20835);

return statearr_20888;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20869__$1,(29),inst_20837);
} else {
if((state_val_20870 === (25))){
var inst_20833 = figwheel.client.heads_up.clear.call(null);
var state_20869__$1 = state_20869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20869__$1,(28),inst_20833);
} else {
if((state_val_20870 === (34))){
var inst_20850 = figwheel.client.heads_up.flash_loaded.call(null);
var state_20869__$1 = state_20869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20869__$1,(37),inst_20850);
} else {
if((state_val_20870 === (17))){
var inst_20815 = (state_20869[(2)]);
var state_20869__$1 = state_20869;
var statearr_20889_20934 = state_20869__$1;
(statearr_20889_20934[(2)] = inst_20815);

(statearr_20889_20934[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (3))){
var inst_20805 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_20869__$1 = state_20869;
if(cljs.core.truth_(inst_20805)){
var statearr_20890_20935 = state_20869__$1;
(statearr_20890_20935[(1)] = (13));

} else {
var statearr_20891_20936 = state_20869__$1;
(statearr_20891_20936[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (12))){
var inst_20801 = (state_20869[(2)]);
var state_20869__$1 = state_20869;
var statearr_20892_20937 = state_20869__$1;
(statearr_20892_20937[(2)] = inst_20801);

(statearr_20892_20937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (2))){
var inst_20788 = (state_20869[(7)]);
var inst_20788__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_20869__$1 = (function (){var statearr_20893 = state_20869;
(statearr_20893[(7)] = inst_20788__$1);

return statearr_20893;
})();
if(cljs.core.truth_(inst_20788__$1)){
var statearr_20894_20938 = state_20869__$1;
(statearr_20894_20938[(1)] = (5));

} else {
var statearr_20895_20939 = state_20869__$1;
(statearr_20895_20939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (23))){
var inst_20831 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_20869__$1 = state_20869;
if(cljs.core.truth_(inst_20831)){
var statearr_20896_20940 = state_20869__$1;
(statearr_20896_20940[(1)] = (25));

} else {
var statearr_20897_20941 = state_20869__$1;
(statearr_20897_20941[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (35))){
var state_20869__$1 = state_20869;
var statearr_20898_20942 = state_20869__$1;
(statearr_20898_20942[(2)] = null);

(statearr_20898_20942[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (19))){
var inst_20826 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_20869__$1 = state_20869;
if(cljs.core.truth_(inst_20826)){
var statearr_20899_20943 = state_20869__$1;
(statearr_20899_20943[(1)] = (22));

} else {
var statearr_20900_20944 = state_20869__$1;
(statearr_20900_20944[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (11))){
var inst_20797 = (state_20869[(2)]);
var state_20869__$1 = state_20869;
var statearr_20901_20945 = state_20869__$1;
(statearr_20901_20945[(2)] = inst_20797);

(statearr_20901_20945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (9))){
var inst_20799 = figwheel.client.heads_up.clear.call(null);
var state_20869__$1 = state_20869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20869__$1,(12),inst_20799);
} else {
if((state_val_20870 === (5))){
var inst_20790 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_20869__$1 = state_20869;
var statearr_20902_20946 = state_20869__$1;
(statearr_20902_20946[(2)] = inst_20790);

(statearr_20902_20946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (14))){
var inst_20817 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_20869__$1 = state_20869;
if(cljs.core.truth_(inst_20817)){
var statearr_20903_20947 = state_20869__$1;
(statearr_20903_20947[(1)] = (18));

} else {
var statearr_20904_20948 = state_20869__$1;
(statearr_20904_20948[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (26))){
var inst_20841 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_20869__$1 = state_20869;
if(cljs.core.truth_(inst_20841)){
var statearr_20905_20949 = state_20869__$1;
(statearr_20905_20949[(1)] = (30));

} else {
var statearr_20906_20950 = state_20869__$1;
(statearr_20906_20950[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (16))){
var inst_20809 = (state_20869[(2)]);
var inst_20810 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20811 = figwheel.client.format_messages.call(null,inst_20810);
var inst_20812 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20813 = figwheel.client.heads_up.display_error.call(null,inst_20811,inst_20812);
var state_20869__$1 = (function (){var statearr_20907 = state_20869;
(statearr_20907[(9)] = inst_20809);

return statearr_20907;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20869__$1,(17),inst_20813);
} else {
if((state_val_20870 === (30))){
var inst_20843 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20844 = figwheel.client.heads_up.display_warning.call(null,inst_20843);
var state_20869__$1 = state_20869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20869__$1,(33),inst_20844);
} else {
if((state_val_20870 === (10))){
var inst_20803 = (state_20869[(2)]);
var state_20869__$1 = state_20869;
var statearr_20908_20951 = state_20869__$1;
(statearr_20908_20951[(2)] = inst_20803);

(statearr_20908_20951[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (18))){
var inst_20819 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20820 = figwheel.client.format_messages.call(null,inst_20819);
var inst_20821 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20822 = figwheel.client.heads_up.display_error.call(null,inst_20820,inst_20821);
var state_20869__$1 = state_20869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20869__$1,(21),inst_20822);
} else {
if((state_val_20870 === (37))){
var inst_20852 = (state_20869[(2)]);
var state_20869__$1 = state_20869;
var statearr_20909_20952 = state_20869__$1;
(statearr_20909_20952[(2)] = inst_20852);

(statearr_20909_20952[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (8))){
var inst_20795 = figwheel.client.heads_up.flash_loaded.call(null);
var state_20869__$1 = state_20869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20869__$1,(11),inst_20795);
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
});})(c__18892__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18871__auto__,c__18892__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18872__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18872__auto____0 = (function (){
var statearr_20913 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20913[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18872__auto__);

(statearr_20913[(1)] = (1));

return statearr_20913;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18872__auto____1 = (function (state_20869){
while(true){
var ret_value__18873__auto__ = (function (){try{while(true){
var result__18874__auto__ = switch__18871__auto__.call(null,state_20869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18874__auto__;
}
break;
}
}catch (e20914){if((e20914 instanceof Object)){
var ex__18875__auto__ = e20914;
var statearr_20915_20953 = state_20869;
(statearr_20915_20953[(5)] = ex__18875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20954 = state_20869;
state_20869 = G__20954;
continue;
} else {
return ret_value__18873__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18872__auto__ = function(state_20869){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18872__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18872__auto____1.call(this,state_20869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18872__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18872__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18872__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18872__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18872__auto__;
})()
;})(switch__18871__auto__,c__18892__auto__,msg_hist,msg_names,msg))
})();
var state__18894__auto__ = (function (){var statearr_20916 = f__18893__auto__.call(null);
(statearr_20916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18892__auto__);

return statearr_20916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18894__auto__);
});})(c__18892__auto__,msg_hist,msg_names,msg))
);

return c__18892__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18892__auto___21017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18892__auto___21017,ch){
return (function (){
var f__18893__auto__ = (function (){var switch__18871__auto__ = ((function (c__18892__auto___21017,ch){
return (function (state_21000){
var state_val_21001 = (state_21000[(1)]);
if((state_val_21001 === (1))){
var state_21000__$1 = state_21000;
var statearr_21002_21018 = state_21000__$1;
(statearr_21002_21018[(2)] = null);

(statearr_21002_21018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (2))){
var state_21000__$1 = state_21000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21000__$1,(4),ch);
} else {
if((state_val_21001 === (3))){
var inst_20998 = (state_21000[(2)]);
var state_21000__$1 = state_21000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21000__$1,inst_20998);
} else {
if((state_val_21001 === (4))){
var inst_20988 = (state_21000[(7)]);
var inst_20988__$1 = (state_21000[(2)]);
var state_21000__$1 = (function (){var statearr_21003 = state_21000;
(statearr_21003[(7)] = inst_20988__$1);

return statearr_21003;
})();
if(cljs.core.truth_(inst_20988__$1)){
var statearr_21004_21019 = state_21000__$1;
(statearr_21004_21019[(1)] = (5));

} else {
var statearr_21005_21020 = state_21000__$1;
(statearr_21005_21020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (5))){
var inst_20988 = (state_21000[(7)]);
var inst_20990 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_20988);
var state_21000__$1 = state_21000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21000__$1,(8),inst_20990);
} else {
if((state_val_21001 === (6))){
var state_21000__$1 = state_21000;
var statearr_21006_21021 = state_21000__$1;
(statearr_21006_21021[(2)] = null);

(statearr_21006_21021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (7))){
var inst_20996 = (state_21000[(2)]);
var state_21000__$1 = state_21000;
var statearr_21007_21022 = state_21000__$1;
(statearr_21007_21022[(2)] = inst_20996);

(statearr_21007_21022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (8))){
var inst_20992 = (state_21000[(2)]);
var state_21000__$1 = (function (){var statearr_21008 = state_21000;
(statearr_21008[(8)] = inst_20992);

return statearr_21008;
})();
var statearr_21009_21023 = state_21000__$1;
(statearr_21009_21023[(2)] = null);

(statearr_21009_21023[(1)] = (2));


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
});})(c__18892__auto___21017,ch))
;
return ((function (switch__18871__auto__,c__18892__auto___21017,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18872__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18872__auto____0 = (function (){
var statearr_21013 = [null,null,null,null,null,null,null,null,null];
(statearr_21013[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18872__auto__);

(statearr_21013[(1)] = (1));

return statearr_21013;
});
var figwheel$client$heads_up_plugin_$_state_machine__18872__auto____1 = (function (state_21000){
while(true){
var ret_value__18873__auto__ = (function (){try{while(true){
var result__18874__auto__ = switch__18871__auto__.call(null,state_21000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18874__auto__;
}
break;
}
}catch (e21014){if((e21014 instanceof Object)){
var ex__18875__auto__ = e21014;
var statearr_21015_21024 = state_21000;
(statearr_21015_21024[(5)] = ex__18875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21025 = state_21000;
state_21000 = G__21025;
continue;
} else {
return ret_value__18873__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18872__auto__ = function(state_21000){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18872__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18872__auto____1.call(this,state_21000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18872__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18872__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18872__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18872__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18872__auto__;
})()
;})(switch__18871__auto__,c__18892__auto___21017,ch))
})();
var state__18894__auto__ = (function (){var statearr_21016 = f__18893__auto__.call(null);
(statearr_21016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18892__auto___21017);

return statearr_21016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18894__auto__);
});})(c__18892__auto___21017,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18892__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18892__auto__){
return (function (){
var f__18893__auto__ = (function (){var switch__18871__auto__ = ((function (c__18892__auto__){
return (function (state_21046){
var state_val_21047 = (state_21046[(1)]);
if((state_val_21047 === (1))){
var inst_21041 = cljs.core.async.timeout.call(null,(3000));
var state_21046__$1 = state_21046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21046__$1,(2),inst_21041);
} else {
if((state_val_21047 === (2))){
var inst_21043 = (state_21046[(2)]);
var inst_21044 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_21046__$1 = (function (){var statearr_21048 = state_21046;
(statearr_21048[(7)] = inst_21043);

return statearr_21048;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21046__$1,inst_21044);
} else {
return null;
}
}
});})(c__18892__auto__))
;
return ((function (switch__18871__auto__,c__18892__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18872__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18872__auto____0 = (function (){
var statearr_21052 = [null,null,null,null,null,null,null,null];
(statearr_21052[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18872__auto__);

(statearr_21052[(1)] = (1));

return statearr_21052;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18872__auto____1 = (function (state_21046){
while(true){
var ret_value__18873__auto__ = (function (){try{while(true){
var result__18874__auto__ = switch__18871__auto__.call(null,state_21046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18874__auto__;
}
break;
}
}catch (e21053){if((e21053 instanceof Object)){
var ex__18875__auto__ = e21053;
var statearr_21054_21056 = state_21046;
(statearr_21054_21056[(5)] = ex__18875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21057 = state_21046;
state_21046 = G__21057;
continue;
} else {
return ret_value__18873__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18872__auto__ = function(state_21046){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18872__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18872__auto____1.call(this,state_21046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18872__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18872__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18872__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18872__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18872__auto__;
})()
;})(switch__18871__auto__,c__18892__auto__))
})();
var state__18894__auto__ = (function (){var statearr_21055 = f__18893__auto__.call(null);
(statearr_21055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18892__auto__);

return statearr_21055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18894__auto__);
});})(c__18892__auto__))
);

return c__18892__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__21058){
var map__21065 = p__21058;
var map__21065__$1 = ((((!((map__21065 == null)))?((((map__21065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21065):map__21065);
var ed = map__21065__$1;
var formatted_exception = cljs.core.get.call(null,map__21065__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__21065__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__21065__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__21067_21071 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__21068_21072 = null;
var count__21069_21073 = (0);
var i__21070_21074 = (0);
while(true){
if((i__21070_21074 < count__21069_21073)){
var msg_21075 = cljs.core._nth.call(null,chunk__21068_21072,i__21070_21074);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_21075);

var G__21076 = seq__21067_21071;
var G__21077 = chunk__21068_21072;
var G__21078 = count__21069_21073;
var G__21079 = (i__21070_21074 + (1));
seq__21067_21071 = G__21076;
chunk__21068_21072 = G__21077;
count__21069_21073 = G__21078;
i__21070_21074 = G__21079;
continue;
} else {
var temp__4425__auto___21080 = cljs.core.seq.call(null,seq__21067_21071);
if(temp__4425__auto___21080){
var seq__21067_21081__$1 = temp__4425__auto___21080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21067_21081__$1)){
var c__17645__auto___21082 = cljs.core.chunk_first.call(null,seq__21067_21081__$1);
var G__21083 = cljs.core.chunk_rest.call(null,seq__21067_21081__$1);
var G__21084 = c__17645__auto___21082;
var G__21085 = cljs.core.count.call(null,c__17645__auto___21082);
var G__21086 = (0);
seq__21067_21071 = G__21083;
chunk__21068_21072 = G__21084;
count__21069_21073 = G__21085;
i__21070_21074 = G__21086;
continue;
} else {
var msg_21087 = cljs.core.first.call(null,seq__21067_21081__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_21087);

var G__21088 = cljs.core.next.call(null,seq__21067_21081__$1);
var G__21089 = null;
var G__21090 = (0);
var G__21091 = (0);
seq__21067_21071 = G__21088;
chunk__21068_21072 = G__21089;
count__21069_21073 = G__21090;
i__21070_21074 = G__21091;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__21092){
var map__21095 = p__21092;
var map__21095__$1 = ((((!((map__21095 == null)))?((((map__21095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21095):map__21095);
var w = map__21095__$1;
var message = cljs.core.get.call(null,map__21095__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16830__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16830__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16830__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__21103 = cljs.core.seq.call(null,plugins);
var chunk__21104 = null;
var count__21105 = (0);
var i__21106 = (0);
while(true){
if((i__21106 < count__21105)){
var vec__21107 = cljs.core._nth.call(null,chunk__21104,i__21106);
var k = cljs.core.nth.call(null,vec__21107,(0),null);
var plugin = cljs.core.nth.call(null,vec__21107,(1),null);
if(cljs.core.truth_(plugin)){
var pl_21109 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__21103,chunk__21104,count__21105,i__21106,pl_21109,vec__21107,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_21109.call(null,msg_hist);
});})(seq__21103,chunk__21104,count__21105,i__21106,pl_21109,vec__21107,k,plugin))
);
} else {
}

var G__21110 = seq__21103;
var G__21111 = chunk__21104;
var G__21112 = count__21105;
var G__21113 = (i__21106 + (1));
seq__21103 = G__21110;
chunk__21104 = G__21111;
count__21105 = G__21112;
i__21106 = G__21113;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21103);
if(temp__4425__auto__){
var seq__21103__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21103__$1)){
var c__17645__auto__ = cljs.core.chunk_first.call(null,seq__21103__$1);
var G__21114 = cljs.core.chunk_rest.call(null,seq__21103__$1);
var G__21115 = c__17645__auto__;
var G__21116 = cljs.core.count.call(null,c__17645__auto__);
var G__21117 = (0);
seq__21103 = G__21114;
chunk__21104 = G__21115;
count__21105 = G__21116;
i__21106 = G__21117;
continue;
} else {
var vec__21108 = cljs.core.first.call(null,seq__21103__$1);
var k = cljs.core.nth.call(null,vec__21108,(0),null);
var plugin = cljs.core.nth.call(null,vec__21108,(1),null);
if(cljs.core.truth_(plugin)){
var pl_21118 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__21103,chunk__21104,count__21105,i__21106,pl_21118,vec__21108,k,plugin,seq__21103__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_21118.call(null,msg_hist);
});})(seq__21103,chunk__21104,count__21105,i__21106,pl_21118,vec__21108,k,plugin,seq__21103__$1,temp__4425__auto__))
);
} else {
}

var G__21119 = cljs.core.next.call(null,seq__21103__$1);
var G__21120 = null;
var G__21121 = (0);
var G__21122 = (0);
seq__21103 = G__21119;
chunk__21104 = G__21120;
count__21105 = G__21121;
i__21106 = G__21122;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args21123 = [];
var len__17900__auto___21126 = arguments.length;
var i__17901__auto___21127 = (0);
while(true){
if((i__17901__auto___21127 < len__17900__auto___21126)){
args21123.push((arguments[i__17901__auto___21127]));

var G__21128 = (i__17901__auto___21127 + (1));
i__17901__auto___21127 = G__21128;
continue;
} else {
}
break;
}

var G__21125 = args21123.length;
switch (G__21125) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21123.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17907__auto__ = [];
var len__17900__auto___21134 = arguments.length;
var i__17901__auto___21135 = (0);
while(true){
if((i__17901__auto___21135 < len__17900__auto___21134)){
args__17907__auto__.push((arguments[i__17901__auto___21135]));

var G__21136 = (i__17901__auto___21135 + (1));
i__17901__auto___21135 = G__21136;
continue;
} else {
}
break;
}

var argseq__17908__auto__ = ((((0) < args__17907__auto__.length))?(new cljs.core.IndexedSeq(args__17907__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17908__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__21131){
var map__21132 = p__21131;
var map__21132__$1 = ((((!((map__21132 == null)))?((((map__21132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21132):map__21132);
var opts = map__21132__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq21130){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21130));
});

//# sourceMappingURL=client.js.map