// Compiled by ClojureScript 1.7.189 {}
goog.provide('petrol.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.set');
/**
 * Apply a function to every element that comes out of a channel.
 * 
 *   (This is fmap for channels).
 */
petrol.core.wrap = (function petrol$core$wrap(f,in$){
return cljs.core.async.pipe.call(null,in$,cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,f)));
});
/**
 * Apply a function to every element that goes into a channel.
 * 
 *   (This is contramap for channels).
 */
petrol.core.forward = (function petrol$core$forward(f,from){
var to = cljs.core.async.chan.call(null);
var c__7841__auto___10655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7841__auto___10655,to){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (c__7841__auto___10655,to){
return (function (state_10644){
var state_val_10645 = (state_10644[(1)]);
if((state_val_10645 === (1))){
var state_10644__$1 = state_10644;
var statearr_10646_10656 = state_10644__$1;
(statearr_10646_10656[(2)] = null);

(statearr_10646_10656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10645 === (2))){
var state_10644__$1 = state_10644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10644__$1,(5),to);
} else {
if((state_val_10645 === (3))){
var inst_10642 = (state_10644[(2)]);
var state_10644__$1 = state_10644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10644__$1,inst_10642);
} else {
if((state_val_10645 === (4))){
var inst_10640 = (state_10644[(2)]);
var state_10644__$1 = state_10644;
var statearr_10647_10657 = state_10644__$1;
(statearr_10647_10657[(2)] = inst_10640);

(statearr_10647_10657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10645 === (5))){
var inst_10637 = (state_10644[(2)]);
var inst_10638 = f.call(null,inst_10637);
var state_10644__$1 = state_10644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10644__$1,(4),from,inst_10638);
} else {
return null;
}
}
}
}
}
});})(c__7841__auto___10655,to))
;
return ((function (switch__7729__auto__,c__7841__auto___10655,to){
return (function() {
var petrol$core$forward_$_state_machine__7730__auto__ = null;
var petrol$core$forward_$_state_machine__7730__auto____0 = (function (){
var statearr_10651 = [null,null,null,null,null,null,null];
(statearr_10651[(0)] = petrol$core$forward_$_state_machine__7730__auto__);

(statearr_10651[(1)] = (1));

return statearr_10651;
});
var petrol$core$forward_$_state_machine__7730__auto____1 = (function (state_10644){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_10644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e10652){if((e10652 instanceof Object)){
var ex__7733__auto__ = e10652;
var statearr_10653_10658 = state_10644;
(statearr_10653_10658[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10659 = state_10644;
state_10644 = G__10659;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
petrol$core$forward_$_state_machine__7730__auto__ = function(state_10644){
switch(arguments.length){
case 0:
return petrol$core$forward_$_state_machine__7730__auto____0.call(this);
case 1:
return petrol$core$forward_$_state_machine__7730__auto____1.call(this,state_10644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
petrol$core$forward_$_state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = petrol$core$forward_$_state_machine__7730__auto____0;
petrol$core$forward_$_state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = petrol$core$forward_$_state_machine__7730__auto____1;
return petrol$core$forward_$_state_machine__7730__auto__;
})()
;})(switch__7729__auto__,c__7841__auto___10655,to))
})();
var state__7843__auto__ = (function (){var statearr_10654 = f__7842__auto__.call(null);
(statearr_10654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto___10655);

return statearr_10654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(c__7841__auto___10655,to))
);


return to;
});

/**
 * @interface
 */
petrol.core.Message = function(){};

/**
 * Given a message, take the current app state and
 *                 return the new one. In essense this is a reducing
 *                 function.
 */
petrol.core.process_message = (function petrol$core$process_message(message,app){
if((!((message == null))) && (!((message.petrol$core$Message$process_message$arity$2 == null)))){
return message.petrol$core$Message$process_message$arity$2(message,app);
} else {
var x__5343__auto__ = (((message == null))?null:message);
var m__5344__auto__ = (petrol.core.process_message[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,message,app);
} else {
var m__5344__auto____$1 = (petrol.core.process_message["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,message,app);
} else {
throw cljs.core.missing_protocol.call(null,"Message.process-message",message);
}
}
}
});


/**
 * @interface
 */
petrol.core.EventSource = function(){};

petrol.core.watch_channels = (function petrol$core$watch_channels(message,app){
if((!((message == null))) && (!((message.petrol$core$EventSource$watch_channels$arity$2 == null)))){
return message.petrol$core$EventSource$watch_channels$arity$2(message,app);
} else {
var x__5343__auto__ = (((message == null))?null:message);
var m__5344__auto__ = (petrol.core.watch_channels[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,message,app);
} else {
var m__5344__auto____$1 = (petrol.core.watch_channels["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,message,app);
} else {
throw cljs.core.missing_protocol.call(null,"EventSource.watch-channels",message);
}
}
}
});

petrol.core.process_submessage = (function petrol$core$process_submessage(submessage,app,path){
if(((!((submessage == null)))?(((false) || (submessage.petrol$core$Message$))?true:(((!submessage.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,petrol.core.Message,submessage):false)):cljs.core.native_satisfies_QMARK_.call(null,petrol.core.Message,submessage))){
return cljs.core.update_in.call(null,app,path,(function (p1__10660_SHARP_){
return petrol.core.process_message.call(null,submessage,p1__10660_SHARP_);
}));
} else {
return null;
}
});
petrol.core.watch_subchannels = (function petrol$core$watch_subchannels(submessage,app,path,wrapper){
if(((!((submessage == null)))?(((false) || (submessage.petrol$core$EventSource$))?true:(((!submessage.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,petrol.core.EventSource,submessage):false)):cljs.core.native_satisfies_QMARK_.call(null,petrol.core.EventSource,submessage))){
return cljs.core.map.call(null,(function (p1__10663_SHARP_){
return petrol.core.wrap.call(null,wrapper,p1__10663_SHARP_);
}),petrol.core.watch_channels.call(null,submessage,cljs.core.get_in.call(null,app,path)));
} else {
return null;
}
});
/**
 * Given a DOM event, return the value it yields. This abstracts over
 *   the needless inconsistencies of the DOM.
 */
petrol.core.get_event_value = (function petrol$core$get_event_value(event){
var target = event.target;
var type = target.type;
var pred__10669 = cljs.core.contains_QMARK_;
var expr__10670 = type;
if(cljs.core.truth_(pred__10669.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["checkbox",null], null), null),expr__10670))){
return target.checked;
} else {
if(cljs.core.truth_(pred__10669.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, ["range",null,"select-one",null,"url",null,"tel",null,"email",null,"radio",null,"text",null,"number",null,"week",null,"time",null,"select-multiple",null,"datetime",null,"textarea",null,"password",null,"date",null,"month",null,"datetime-local",null,"search",null,"color",null], null), null),expr__10670))){
return target.value;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10670)].join('')));
}
}
});
/**
 * Send information from the user to the message queue.
 *   The message must be a record which implements the Message protocol.
 */
petrol.core.send_BANG_ = (function petrol$core$send_BANG_(channel,message){
return (function (dom_event){
cljs.core.async.put_BANG_.call(null,channel,message);

return dom_event.stopPropagation();
});
});
/**
 * Send information from the user to the message queue.
 * 
 *   Similar to `send!`, except the message-fn will be called with the message's value first.
 */
petrol.core.send_value_BANG_ = (function petrol$core$send_value_BANG_(channel,message_fn){
return (function (dom_event){
cljs.core.async.put_BANG_.call(null,channel,message_fn.call(null,petrol.core.get_event_value.call(null,dom_event)));

return dom_event.stopPropagation();
});
});
petrol.core._BANG_channels = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
petrol.core.start_message_loop_BANG_ = (function petrol$core$start_message_loop_BANG_(var_args){
var args10673 = [];
var len__5746__auto___10809 = arguments.length;
var i__5747__auto___10810 = (0);
while(true){
if((i__5747__auto___10810 < len__5746__auto___10809)){
args10673.push((arguments[i__5747__auto___10810]));

var G__10811 = (i__5747__auto___10810 + (1));
i__5747__auto___10810 = G__10811;
continue;
} else {
}
break;
}

var G__10675 = args10673.length;
switch (G__10675) {
case 2:
return petrol.core.start_message_loop_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return petrol.core.start_message_loop_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10673.length)].join('')));

}
});

petrol.core.start_message_loop_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_BANG_app,render_fn){
return petrol.core.start_message_loop_BANG_.call(null,_BANG_app,render_fn,cljs.core.PersistentHashSet.EMPTY);
});

petrol.core.start_message_loop_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_BANG_app,render_fn,initial_channels){
cljs.core.reset_BANG_.call(null,petrol.core._BANG_channels,initial_channels);

var ui_channel = cljs.core.async.chan.call(null);
cljs.core.swap_BANG_.call(null,petrol.core._BANG_channels,cljs.core.conj,ui_channel);

cljs.core.add_watch.call(null,_BANG_app,new cljs.core.Keyword(null,"render","render",-1408033454),((function (ui_channel){
return (function (_,___$1,___$2,app){
return render_fn.call(null,ui_channel,app);
});})(ui_channel))
);

cljs.core.swap_BANG_.call(null,_BANG_app,cljs.core.identity);

var c__7841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7841__auto__,ui_channel){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (c__7841__auto__,ui_channel){
return (function (state_10753){
var state_val_10754 = (state_10753[(1)]);
if((state_val_10754 === (7))){
var inst_10683 = (state_10753[(7)]);
var inst_10682 = (state_10753[(8)]);
var inst_10682__$1 = (state_10753[(2)]);
var inst_10683__$1 = cljs.core.nth.call(null,inst_10682__$1,(0),null);
var inst_10684 = cljs.core.nth.call(null,inst_10682__$1,(1),null);
var inst_10685 = (inst_10683__$1 == null);
var state_10753__$1 = (function (){var statearr_10755 = state_10753;
(statearr_10755[(7)] = inst_10683__$1);

(statearr_10755[(9)] = inst_10684);

(statearr_10755[(8)] = inst_10682__$1);

return statearr_10755;
})();
if(cljs.core.truth_(inst_10685)){
var statearr_10756_10813 = state_10753__$1;
(statearr_10756_10813[(1)] = (8));

} else {
var statearr_10757_10814 = state_10753__$1;
(statearr_10757_10814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (20))){
var inst_10683 = (state_10753[(7)]);
var inst_10684 = (state_10753[(9)]);
var inst_10682 = (state_10753[(8)]);
var inst_10678 = (state_10753[(10)]);
var inst_10713 = (function (){var temp__4425__auto__ = inst_10678;
var cs = inst_10678;
var vec__10680 = inst_10682;
var message = inst_10683;
var channel = inst_10684;
return ((function (temp__4425__auto__,cs,vec__10680,message,channel,inst_10683,inst_10684,inst_10682,inst_10678,state_val_10754,c__7841__auto__,ui_channel){
return (function (p1__10672_SHARP_){
return petrol.core.process_message.call(null,message,p1__10672_SHARP_);
});
;})(temp__4425__auto__,cs,vec__10680,message,channel,inst_10683,inst_10684,inst_10682,inst_10678,state_val_10754,c__7841__auto__,ui_channel))
})();
var inst_10714 = cljs.core.swap_BANG_.call(null,_BANG_app,inst_10713);
var state_10753__$1 = state_10753;
var statearr_10758_10815 = state_10753__$1;
(statearr_10758_10815[(2)] = inst_10714);

(statearr_10758_10815[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (27))){
var inst_10683 = (state_10753[(7)]);
var inst_10726 = inst_10683.cljs$lang$protocol_mask$partition$;
var inst_10727 = (!inst_10726);
var state_10753__$1 = state_10753;
if(cljs.core.truth_(inst_10727)){
var statearr_10759_10816 = state_10753__$1;
(statearr_10759_10816[(1)] = (29));

} else {
var statearr_10760_10817 = state_10753__$1;
(statearr_10760_10817[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (1))){
var state_10753__$1 = state_10753;
var statearr_10761_10818 = state_10753__$1;
(statearr_10761_10818[(2)] = null);

(statearr_10761_10818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (24))){
var inst_10683 = (state_10753[(7)]);
var inst_10736 = cljs.core.native_satisfies_QMARK_.call(null,petrol.core.EventSource,inst_10683);
var state_10753__$1 = state_10753;
var statearr_10762_10819 = state_10753__$1;
(statearr_10762_10819[(2)] = inst_10736);

(statearr_10762_10819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (4))){
var inst_10678 = (state_10753[(10)]);
var state_10753__$1 = state_10753;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10753__$1,(7),inst_10678);
} else {
if((state_val_10754 === (15))){
var inst_10683 = (state_10753[(7)]);
var inst_10699 = inst_10683.cljs$lang$protocol_mask$partition$;
var inst_10700 = (!inst_10699);
var state_10753__$1 = state_10753;
if(cljs.core.truth_(inst_10700)){
var statearr_10763_10820 = state_10753__$1;
(statearr_10763_10820[(1)] = (17));

} else {
var statearr_10764_10821 = state_10753__$1;
(statearr_10764_10821[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (21))){
var state_10753__$1 = state_10753;
var statearr_10765_10822 = state_10753__$1;
(statearr_10765_10822[(2)] = null);

(statearr_10765_10822[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (31))){
var inst_10732 = (state_10753[(2)]);
var state_10753__$1 = state_10753;
var statearr_10766_10823 = state_10753__$1;
(statearr_10766_10823[(2)] = inst_10732);

(statearr_10766_10823[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (32))){
var inst_10683 = (state_10753[(7)]);
var inst_10740 = cljs.core.deref.call(null,_BANG_app);
var inst_10741 = petrol.core.watch_channels.call(null,inst_10683,inst_10740);
var inst_10742 = cljs.core.swap_BANG_.call(null,petrol.core._BANG_channels,clojure.set.union,inst_10741);
var state_10753__$1 = state_10753;
var statearr_10767_10824 = state_10753__$1;
(statearr_10767_10824[(2)] = inst_10742);

(statearr_10767_10824[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (33))){
var state_10753__$1 = state_10753;
var statearr_10768_10825 = state_10753__$1;
(statearr_10768_10825[(2)] = null);

(statearr_10768_10825[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (13))){
var inst_10711 = (state_10753[(2)]);
var state_10753__$1 = state_10753;
if(cljs.core.truth_(inst_10711)){
var statearr_10769_10826 = state_10753__$1;
(statearr_10769_10826[(1)] = (20));

} else {
var statearr_10770_10827 = state_10753__$1;
(statearr_10770_10827[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (22))){
var inst_10683 = (state_10753[(7)]);
var inst_10717 = (state_10753[(2)]);
var inst_10719 = (inst_10683 == null);
var inst_10720 = cljs.core.not.call(null,inst_10719);
var state_10753__$1 = (function (){var statearr_10771 = state_10753;
(statearr_10771[(11)] = inst_10717);

return statearr_10771;
})();
if(inst_10720){
var statearr_10772_10828 = state_10753__$1;
(statearr_10772_10828[(1)] = (23));

} else {
var statearr_10773_10829 = state_10753__$1;
(statearr_10773_10829[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (29))){
var inst_10683 = (state_10753[(7)]);
var inst_10729 = cljs.core.native_satisfies_QMARK_.call(null,petrol.core.EventSource,inst_10683);
var state_10753__$1 = state_10753;
var statearr_10774_10830 = state_10753__$1;
(statearr_10774_10830[(2)] = inst_10729);

(statearr_10774_10830[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (6))){
var inst_10749 = (state_10753[(2)]);
var state_10753__$1 = state_10753;
var statearr_10775_10831 = state_10753__$1;
(statearr_10775_10831[(2)] = inst_10749);

(statearr_10775_10831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (28))){
var inst_10734 = (state_10753[(2)]);
var state_10753__$1 = state_10753;
var statearr_10776_10832 = state_10753__$1;
(statearr_10776_10832[(2)] = inst_10734);

(statearr_10776_10832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (25))){
var inst_10738 = (state_10753[(2)]);
var state_10753__$1 = state_10753;
if(cljs.core.truth_(inst_10738)){
var statearr_10777_10833 = state_10753__$1;
(statearr_10777_10833[(1)] = (32));

} else {
var statearr_10778_10834 = state_10753__$1;
(statearr_10778_10834[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (34))){
var inst_10745 = (state_10753[(2)]);
var state_10753__$1 = (function (){var statearr_10779 = state_10753;
(statearr_10779[(12)] = inst_10745);

return statearr_10779;
})();
var statearr_10780_10835 = state_10753__$1;
(statearr_10780_10835[(2)] = null);

(statearr_10780_10835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (17))){
var inst_10683 = (state_10753[(7)]);
var inst_10702 = cljs.core.native_satisfies_QMARK_.call(null,petrol.core.Message,inst_10683);
var state_10753__$1 = state_10753;
var statearr_10781_10836 = state_10753__$1;
(statearr_10781_10836[(2)] = inst_10702);

(statearr_10781_10836[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (3))){
var inst_10751 = (state_10753[(2)]);
var state_10753__$1 = state_10753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10753__$1,inst_10751);
} else {
if((state_val_10754 === (12))){
var inst_10683 = (state_10753[(7)]);
var inst_10709 = cljs.core.native_satisfies_QMARK_.call(null,petrol.core.Message,inst_10683);
var state_10753__$1 = state_10753;
var statearr_10782_10837 = state_10753__$1;
(statearr_10782_10837[(2)] = inst_10709);

(statearr_10782_10837[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (2))){
var inst_10678 = (state_10753[(10)]);
var inst_10677 = cljs.core.deref.call(null,petrol.core._BANG_channels);
var inst_10678__$1 = cljs.core.seq.call(null,inst_10677);
var state_10753__$1 = (function (){var statearr_10783 = state_10753;
(statearr_10783[(10)] = inst_10678__$1);

return statearr_10783;
})();
if(inst_10678__$1){
var statearr_10784_10838 = state_10753__$1;
(statearr_10784_10838[(1)] = (4));

} else {
var statearr_10785_10839 = state_10753__$1;
(statearr_10785_10839[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (23))){
var inst_10683 = (state_10753[(7)]);
var inst_10722 = inst_10683.petrol$core$EventSource$;
var inst_10723 = (false) || (inst_10722);
var state_10753__$1 = state_10753;
if(cljs.core.truth_(inst_10723)){
var statearr_10786_10840 = state_10753__$1;
(statearr_10786_10840[(1)] = (26));

} else {
var statearr_10787_10841 = state_10753__$1;
(statearr_10787_10841[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (19))){
var inst_10705 = (state_10753[(2)]);
var state_10753__$1 = state_10753;
var statearr_10788_10842 = state_10753__$1;
(statearr_10788_10842[(2)] = inst_10705);

(statearr_10788_10842[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (11))){
var inst_10683 = (state_10753[(7)]);
var inst_10695 = inst_10683.petrol$core$Message$;
var inst_10696 = (false) || (inst_10695);
var state_10753__$1 = state_10753;
if(cljs.core.truth_(inst_10696)){
var statearr_10789_10843 = state_10753__$1;
(statearr_10789_10843[(1)] = (14));

} else {
var statearr_10790_10844 = state_10753__$1;
(statearr_10790_10844[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (9))){
var state_10753__$1 = state_10753;
var statearr_10791_10845 = state_10753__$1;
(statearr_10791_10845[(2)] = null);

(statearr_10791_10845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (5))){
var state_10753__$1 = state_10753;
var statearr_10792_10846 = state_10753__$1;
(statearr_10792_10846[(2)] = null);

(statearr_10792_10846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (14))){
var state_10753__$1 = state_10753;
var statearr_10793_10847 = state_10753__$1;
(statearr_10793_10847[(2)] = true);

(statearr_10793_10847[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (26))){
var state_10753__$1 = state_10753;
var statearr_10794_10848 = state_10753__$1;
(statearr_10794_10848[(2)] = true);

(statearr_10794_10848[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (16))){
var inst_10707 = (state_10753[(2)]);
var state_10753__$1 = state_10753;
var statearr_10795_10849 = state_10753__$1;
(statearr_10795_10849[(2)] = inst_10707);

(statearr_10795_10849[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (30))){
var state_10753__$1 = state_10753;
var statearr_10796_10850 = state_10753__$1;
(statearr_10796_10850[(2)] = false);

(statearr_10796_10850[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (10))){
var inst_10683 = (state_10753[(7)]);
var inst_10690 = (state_10753[(2)]);
var inst_10692 = (inst_10683 == null);
var inst_10693 = cljs.core.not.call(null,inst_10692);
var state_10753__$1 = (function (){var statearr_10797 = state_10753;
(statearr_10797[(13)] = inst_10690);

return statearr_10797;
})();
if(inst_10693){
var statearr_10798_10851 = state_10753__$1;
(statearr_10798_10851[(1)] = (11));

} else {
var statearr_10799_10852 = state_10753__$1;
(statearr_10799_10852[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (18))){
var state_10753__$1 = state_10753;
var statearr_10800_10853 = state_10753__$1;
(statearr_10800_10853[(2)] = false);

(statearr_10800_10853[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10754 === (8))){
var inst_10684 = (state_10753[(9)]);
var inst_10687 = cljs.core.swap_BANG_.call(null,petrol.core._BANG_channels,cljs.core.disj,inst_10684);
var state_10753__$1 = state_10753;
var statearr_10801_10854 = state_10753__$1;
(statearr_10801_10854[(2)] = inst_10687);

(statearr_10801_10854[(1)] = (10));


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
});})(c__7841__auto__,ui_channel))
;
return ((function (switch__7729__auto__,c__7841__auto__,ui_channel){
return (function() {
var petrol$core$state_machine__7730__auto__ = null;
var petrol$core$state_machine__7730__auto____0 = (function (){
var statearr_10805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10805[(0)] = petrol$core$state_machine__7730__auto__);

(statearr_10805[(1)] = (1));

return statearr_10805;
});
var petrol$core$state_machine__7730__auto____1 = (function (state_10753){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_10753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e10806){if((e10806 instanceof Object)){
var ex__7733__auto__ = e10806;
var statearr_10807_10855 = state_10753;
(statearr_10807_10855[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10856 = state_10753;
state_10753 = G__10856;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
petrol$core$state_machine__7730__auto__ = function(state_10753){
switch(arguments.length){
case 0:
return petrol$core$state_machine__7730__auto____0.call(this);
case 1:
return petrol$core$state_machine__7730__auto____1.call(this,state_10753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
petrol$core$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = petrol$core$state_machine__7730__auto____0;
petrol$core$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = petrol$core$state_machine__7730__auto____1;
return petrol$core$state_machine__7730__auto__;
})()
;})(switch__7729__auto__,c__7841__auto__,ui_channel))
})();
var state__7843__auto__ = (function (){var statearr_10808 = f__7842__auto__.call(null);
(statearr_10808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto__);

return statearr_10808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(c__7841__auto__,ui_channel))
);

return c__7841__auto__;
});

petrol.core.start_message_loop_BANG_.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=core.js.map