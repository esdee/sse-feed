// Compiled by ClojureScript 1.7.189 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args7886 = [];
var len__5746__auto___7892 = arguments.length;
var i__5747__auto___7893 = (0);
while(true){
if((i__5747__auto___7893 < len__5746__auto___7892)){
args7886.push((arguments[i__5747__auto___7893]));

var G__7894 = (i__5747__auto___7893 + (1));
i__5747__auto___7893 = G__7894;
continue;
} else {
}
break;
}

var G__7888 = args7886.length;
switch (G__7888) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7886.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async7889 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7889 = (function (f,blockable,meta7890){
this.f = f;
this.blockable = blockable;
this.meta7890 = meta7890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7891,meta7890__$1){
var self__ = this;
var _7891__$1 = this;
return (new cljs.core.async.t_cljs$core$async7889(self__.f,self__.blockable,meta7890__$1));
});

cljs.core.async.t_cljs$core$async7889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7891){
var self__ = this;
var _7891__$1 = this;
return self__.meta7890;
});

cljs.core.async.t_cljs$core$async7889.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7889.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7889.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async7889.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta7890","meta7890",-1176286425,null)], null);
});

cljs.core.async.t_cljs$core$async7889.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7889";

cljs.core.async.t_cljs$core$async7889.cljs$lang$ctorPrWriter = (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"cljs.core.async/t_cljs$core$async7889");
});

cljs.core.async.__GT_t_cljs$core$async7889 = (function cljs$core$async$__GT_t_cljs$core$async7889(f__$1,blockable__$1,meta7890){
return (new cljs.core.async.t_cljs$core$async7889(f__$1,blockable__$1,meta7890));
});

}

return (new cljs.core.async.t_cljs$core$async7889(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args7898 = [];
var len__5746__auto___7901 = arguments.length;
var i__5747__auto___7902 = (0);
while(true){
if((i__5747__auto___7902 < len__5746__auto___7901)){
args7898.push((arguments[i__5747__auto___7902]));

var G__7903 = (i__5747__auto___7902 + (1));
i__5747__auto___7902 = G__7903;
continue;
} else {
}
break;
}

var G__7900 = args7898.length;
switch (G__7900) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7898.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args7905 = [];
var len__5746__auto___7908 = arguments.length;
var i__5747__auto___7909 = (0);
while(true){
if((i__5747__auto___7909 < len__5746__auto___7908)){
args7905.push((arguments[i__5747__auto___7909]));

var G__7910 = (i__5747__auto___7909 + (1));
i__5747__auto___7909 = G__7910;
continue;
} else {
}
break;
}

var G__7907 = args7905.length;
switch (G__7907) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7905.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args7912 = [];
var len__5746__auto___7915 = arguments.length;
var i__5747__auto___7916 = (0);
while(true){
if((i__5747__auto___7916 < len__5746__auto___7915)){
args7912.push((arguments[i__5747__auto___7916]));

var G__7917 = (i__5747__auto___7916 + (1));
i__5747__auto___7916 = G__7917;
continue;
} else {
}
break;
}

var G__7914 = args7912.length;
switch (G__7914) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7912.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_7919 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_7919);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_7919,ret){
return (function (){
return fn1.call(null,val_7919);
});})(val_7919,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args7920 = [];
var len__5746__auto___7923 = arguments.length;
var i__5747__auto___7924 = (0);
while(true){
if((i__5747__auto___7924 < len__5746__auto___7923)){
args7920.push((arguments[i__5747__auto___7924]));

var G__7925 = (i__5747__auto___7924 + (1));
i__5747__auto___7924 = G__7925;
continue;
} else {
}
break;
}

var G__7922 = args7920.length;
switch (G__7922) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7920.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5591__auto___7927 = n;
var x_7928 = (0);
while(true){
if((x_7928 < n__5591__auto___7927)){
(a[x_7928] = (0));

var G__7929 = (x_7928 + (1));
x_7928 = G__7929;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__7930 = (i + (1));
i = G__7930;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async7934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7934 = (function (alt_flag,flag,meta7935){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta7935 = meta7935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7936,meta7935__$1){
var self__ = this;
var _7936__$1 = this;
return (new cljs.core.async.t_cljs$core$async7934(self__.alt_flag,self__.flag,meta7935__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7934.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7936){
var self__ = this;
var _7936__$1 = this;
return self__.meta7935;
});})(flag))
;

cljs.core.async.t_cljs$core$async7934.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7934.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta7935","meta7935",1445583603,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7934";

cljs.core.async.t_cljs$core$async7934.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"cljs.core.async/t_cljs$core$async7934");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async7934 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7934(alt_flag__$1,flag__$1,meta7935){
return (new cljs.core.async.t_cljs$core$async7934(alt_flag__$1,flag__$1,meta7935));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7934(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async7940 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7940 = (function (alt_handler,flag,cb,meta7941){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta7941 = meta7941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7942,meta7941__$1){
var self__ = this;
var _7942__$1 = this;
return (new cljs.core.async.t_cljs$core$async7940(self__.alt_handler,self__.flag,self__.cb,meta7941__$1));
});

cljs.core.async.t_cljs$core$async7940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7942){
var self__ = this;
var _7942__$1 = this;
return self__.meta7941;
});

cljs.core.async.t_cljs$core$async7940.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7940.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async7940.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7940.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta7941","meta7941",131593957,null)], null);
});

cljs.core.async.t_cljs$core$async7940.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7940";

cljs.core.async.t_cljs$core$async7940.cljs$lang$ctorPrWriter = (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"cljs.core.async/t_cljs$core$async7940");
});

cljs.core.async.__GT_t_cljs$core$async7940 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7940(alt_handler__$1,flag__$1,cb__$1,meta7941){
return (new cljs.core.async.t_cljs$core$async7940(alt_handler__$1,flag__$1,cb__$1,meta7941));
});

}

return (new cljs.core.async.t_cljs$core$async7940(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7943_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7943_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7944_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7944_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4688__auto__ = wport;
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
return port;
}
})()], null));
} else {
var G__7945 = (i + (1));
i = G__7945;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4688__auto__ = ret;
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4676__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4676__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4676__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5753__auto__ = [];
var len__5746__auto___7951 = arguments.length;
var i__5747__auto___7952 = (0);
while(true){
if((i__5747__auto___7952 < len__5746__auto___7951)){
args__5753__auto__.push((arguments[i__5747__auto___7952]));

var G__7953 = (i__5747__auto___7952 + (1));
i__5747__auto___7952 = G__7953;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((1) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5754__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7948){
var map__7949 = p__7948;
var map__7949__$1 = ((((!((map__7949 == null)))?((((map__7949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7949):map__7949);
var opts = map__7949__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7946){
var G__7947 = cljs.core.first.call(null,seq7946);
var seq7946__$1 = cljs.core.next.call(null,seq7946);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7947,seq7946__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args7954 = [];
var len__5746__auto___8004 = arguments.length;
var i__5747__auto___8005 = (0);
while(true){
if((i__5747__auto___8005 < len__5746__auto___8004)){
args7954.push((arguments[i__5747__auto___8005]));

var G__8006 = (i__5747__auto___8005 + (1));
i__5747__auto___8005 = G__8006;
continue;
} else {
}
break;
}

var G__7956 = args7954.length;
switch (G__7956) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7954.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7841__auto___8008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7841__auto___8008){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (c__7841__auto___8008){
return (function (state_7980){
var state_val_7981 = (state_7980[(1)]);
if((state_val_7981 === (7))){
var inst_7976 = (state_7980[(2)]);
var state_7980__$1 = state_7980;
var statearr_7982_8009 = state_7980__$1;
(statearr_7982_8009[(2)] = inst_7976);

(statearr_7982_8009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7981 === (1))){
var state_7980__$1 = state_7980;
var statearr_7983_8010 = state_7980__$1;
(statearr_7983_8010[(2)] = null);

(statearr_7983_8010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7981 === (4))){
var inst_7959 = (state_7980[(7)]);
var inst_7959__$1 = (state_7980[(2)]);
var inst_7960 = (inst_7959__$1 == null);
var state_7980__$1 = (function (){var statearr_7984 = state_7980;
(statearr_7984[(7)] = inst_7959__$1);

return statearr_7984;
})();
if(cljs.core.truth_(inst_7960)){
var statearr_7985_8011 = state_7980__$1;
(statearr_7985_8011[(1)] = (5));

} else {
var statearr_7986_8012 = state_7980__$1;
(statearr_7986_8012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7981 === (13))){
var state_7980__$1 = state_7980;
var statearr_7987_8013 = state_7980__$1;
(statearr_7987_8013[(2)] = null);

(statearr_7987_8013[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7981 === (6))){
var inst_7959 = (state_7980[(7)]);
var state_7980__$1 = state_7980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7980__$1,(11),to,inst_7959);
} else {
if((state_val_7981 === (3))){
var inst_7978 = (state_7980[(2)]);
var state_7980__$1 = state_7980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7980__$1,inst_7978);
} else {
if((state_val_7981 === (12))){
var state_7980__$1 = state_7980;
var statearr_7988_8014 = state_7980__$1;
(statearr_7988_8014[(2)] = null);

(statearr_7988_8014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7981 === (2))){
var state_7980__$1 = state_7980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7980__$1,(4),from);
} else {
if((state_val_7981 === (11))){
var inst_7969 = (state_7980[(2)]);
var state_7980__$1 = state_7980;
if(cljs.core.truth_(inst_7969)){
var statearr_7989_8015 = state_7980__$1;
(statearr_7989_8015[(1)] = (12));

} else {
var statearr_7990_8016 = state_7980__$1;
(statearr_7990_8016[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7981 === (9))){
var state_7980__$1 = state_7980;
var statearr_7991_8017 = state_7980__$1;
(statearr_7991_8017[(2)] = null);

(statearr_7991_8017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7981 === (5))){
var state_7980__$1 = state_7980;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7992_8018 = state_7980__$1;
(statearr_7992_8018[(1)] = (8));

} else {
var statearr_7993_8019 = state_7980__$1;
(statearr_7993_8019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7981 === (14))){
var inst_7974 = (state_7980[(2)]);
var state_7980__$1 = state_7980;
var statearr_7994_8020 = state_7980__$1;
(statearr_7994_8020[(2)] = inst_7974);

(statearr_7994_8020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7981 === (10))){
var inst_7966 = (state_7980[(2)]);
var state_7980__$1 = state_7980;
var statearr_7995_8021 = state_7980__$1;
(statearr_7995_8021[(2)] = inst_7966);

(statearr_7995_8021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7981 === (8))){
var inst_7963 = cljs.core.async.close_BANG_.call(null,to);
var state_7980__$1 = state_7980;
var statearr_7996_8022 = state_7980__$1;
(statearr_7996_8022[(2)] = inst_7963);

(statearr_7996_8022[(1)] = (10));


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
});})(c__7841__auto___8008))
;
return ((function (switch__7729__auto__,c__7841__auto___8008){
return (function() {
var cljs$core$async$state_machine__7730__auto__ = null;
var cljs$core$async$state_machine__7730__auto____0 = (function (){
var statearr_8000 = [null,null,null,null,null,null,null,null];
(statearr_8000[(0)] = cljs$core$async$state_machine__7730__auto__);

(statearr_8000[(1)] = (1));

return statearr_8000;
});
var cljs$core$async$state_machine__7730__auto____1 = (function (state_7980){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_7980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e8001){if((e8001 instanceof Object)){
var ex__7733__auto__ = e8001;
var statearr_8002_8023 = state_7980;
(statearr_8002_8023[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8024 = state_7980;
state_7980 = G__8024;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
cljs$core$async$state_machine__7730__auto__ = function(state_7980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7730__auto____1.call(this,state_7980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7730__auto____0;
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7730__auto____1;
return cljs$core$async$state_machine__7730__auto__;
})()
;})(switch__7729__auto__,c__7841__auto___8008))
})();
var state__7843__auto__ = (function (){var statearr_8003 = f__7842__auto__.call(null);
(statearr_8003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto___8008);

return statearr_8003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(c__7841__auto___8008))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__8208){
var vec__8209 = p__8208;
var v = cljs.core.nth.call(null,vec__8209,(0),null);
var p = cljs.core.nth.call(null,vec__8209,(1),null);
var job = vec__8209;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7841__auto___8391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7841__auto___8391,res,vec__8209,v,p,job,jobs,results){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (c__7841__auto___8391,res,vec__8209,v,p,job,jobs,results){
return (function (state_8214){
var state_val_8215 = (state_8214[(1)]);
if((state_val_8215 === (1))){
var state_8214__$1 = state_8214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8214__$1,(2),res,v);
} else {
if((state_val_8215 === (2))){
var inst_8211 = (state_8214[(2)]);
var inst_8212 = cljs.core.async.close_BANG_.call(null,res);
var state_8214__$1 = (function (){var statearr_8216 = state_8214;
(statearr_8216[(7)] = inst_8211);

return statearr_8216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8214__$1,inst_8212);
} else {
return null;
}
}
});})(c__7841__auto___8391,res,vec__8209,v,p,job,jobs,results))
;
return ((function (switch__7729__auto__,c__7841__auto___8391,res,vec__8209,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____0 = (function (){
var statearr_8220 = [null,null,null,null,null,null,null,null];
(statearr_8220[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__);

(statearr_8220[(1)] = (1));

return statearr_8220;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____1 = (function (state_8214){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_8214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e8221){if((e8221 instanceof Object)){
var ex__7733__auto__ = e8221;
var statearr_8222_8392 = state_8214;
(statearr_8222_8392[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8393 = state_8214;
state_8214 = G__8393;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__ = function(state_8214){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____1.call(this,state_8214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__;
})()
;})(switch__7729__auto__,c__7841__auto___8391,res,vec__8209,v,p,job,jobs,results))
})();
var state__7843__auto__ = (function (){var statearr_8223 = f__7842__auto__.call(null);
(statearr_8223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto___8391);

return statearr_8223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(c__7841__auto___8391,res,vec__8209,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__8224){
var vec__8225 = p__8224;
var v = cljs.core.nth.call(null,vec__8225,(0),null);
var p = cljs.core.nth.call(null,vec__8225,(1),null);
var job = vec__8225;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5591__auto___8394 = n;
var __8395 = (0);
while(true){
if((__8395 < n__5591__auto___8394)){
var G__8226_8396 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__8226_8396) {
case "compute":
var c__7841__auto___8398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8395,c__7841__auto___8398,G__8226_8396,n__5591__auto___8394,jobs,results,process,async){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (__8395,c__7841__auto___8398,G__8226_8396,n__5591__auto___8394,jobs,results,process,async){
return (function (state_8239){
var state_val_8240 = (state_8239[(1)]);
if((state_val_8240 === (1))){
var state_8239__$1 = state_8239;
var statearr_8241_8399 = state_8239__$1;
(statearr_8241_8399[(2)] = null);

(statearr_8241_8399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8240 === (2))){
var state_8239__$1 = state_8239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8239__$1,(4),jobs);
} else {
if((state_val_8240 === (3))){
var inst_8237 = (state_8239[(2)]);
var state_8239__$1 = state_8239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8239__$1,inst_8237);
} else {
if((state_val_8240 === (4))){
var inst_8229 = (state_8239[(2)]);
var inst_8230 = process.call(null,inst_8229);
var state_8239__$1 = state_8239;
if(cljs.core.truth_(inst_8230)){
var statearr_8242_8400 = state_8239__$1;
(statearr_8242_8400[(1)] = (5));

} else {
var statearr_8243_8401 = state_8239__$1;
(statearr_8243_8401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8240 === (5))){
var state_8239__$1 = state_8239;
var statearr_8244_8402 = state_8239__$1;
(statearr_8244_8402[(2)] = null);

(statearr_8244_8402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8240 === (6))){
var state_8239__$1 = state_8239;
var statearr_8245_8403 = state_8239__$1;
(statearr_8245_8403[(2)] = null);

(statearr_8245_8403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8240 === (7))){
var inst_8235 = (state_8239[(2)]);
var state_8239__$1 = state_8239;
var statearr_8246_8404 = state_8239__$1;
(statearr_8246_8404[(2)] = inst_8235);

(statearr_8246_8404[(1)] = (3));


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
});})(__8395,c__7841__auto___8398,G__8226_8396,n__5591__auto___8394,jobs,results,process,async))
;
return ((function (__8395,switch__7729__auto__,c__7841__auto___8398,G__8226_8396,n__5591__auto___8394,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____0 = (function (){
var statearr_8250 = [null,null,null,null,null,null,null];
(statearr_8250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__);

(statearr_8250[(1)] = (1));

return statearr_8250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____1 = (function (state_8239){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_8239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e8251){if((e8251 instanceof Object)){
var ex__7733__auto__ = e8251;
var statearr_8252_8405 = state_8239;
(statearr_8252_8405[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8406 = state_8239;
state_8239 = G__8406;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__ = function(state_8239){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____1.call(this,state_8239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__;
})()
;})(__8395,switch__7729__auto__,c__7841__auto___8398,G__8226_8396,n__5591__auto___8394,jobs,results,process,async))
})();
var state__7843__auto__ = (function (){var statearr_8253 = f__7842__auto__.call(null);
(statearr_8253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto___8398);

return statearr_8253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(__8395,c__7841__auto___8398,G__8226_8396,n__5591__auto___8394,jobs,results,process,async))
);


break;
case "async":
var c__7841__auto___8407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8395,c__7841__auto___8407,G__8226_8396,n__5591__auto___8394,jobs,results,process,async){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (__8395,c__7841__auto___8407,G__8226_8396,n__5591__auto___8394,jobs,results,process,async){
return (function (state_8266){
var state_val_8267 = (state_8266[(1)]);
if((state_val_8267 === (1))){
var state_8266__$1 = state_8266;
var statearr_8268_8408 = state_8266__$1;
(statearr_8268_8408[(2)] = null);

(statearr_8268_8408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8267 === (2))){
var state_8266__$1 = state_8266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8266__$1,(4),jobs);
} else {
if((state_val_8267 === (3))){
var inst_8264 = (state_8266[(2)]);
var state_8266__$1 = state_8266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8266__$1,inst_8264);
} else {
if((state_val_8267 === (4))){
var inst_8256 = (state_8266[(2)]);
var inst_8257 = async.call(null,inst_8256);
var state_8266__$1 = state_8266;
if(cljs.core.truth_(inst_8257)){
var statearr_8269_8409 = state_8266__$1;
(statearr_8269_8409[(1)] = (5));

} else {
var statearr_8270_8410 = state_8266__$1;
(statearr_8270_8410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8267 === (5))){
var state_8266__$1 = state_8266;
var statearr_8271_8411 = state_8266__$1;
(statearr_8271_8411[(2)] = null);

(statearr_8271_8411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8267 === (6))){
var state_8266__$1 = state_8266;
var statearr_8272_8412 = state_8266__$1;
(statearr_8272_8412[(2)] = null);

(statearr_8272_8412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8267 === (7))){
var inst_8262 = (state_8266[(2)]);
var state_8266__$1 = state_8266;
var statearr_8273_8413 = state_8266__$1;
(statearr_8273_8413[(2)] = inst_8262);

(statearr_8273_8413[(1)] = (3));


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
});})(__8395,c__7841__auto___8407,G__8226_8396,n__5591__auto___8394,jobs,results,process,async))
;
return ((function (__8395,switch__7729__auto__,c__7841__auto___8407,G__8226_8396,n__5591__auto___8394,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____0 = (function (){
var statearr_8277 = [null,null,null,null,null,null,null];
(statearr_8277[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__);

(statearr_8277[(1)] = (1));

return statearr_8277;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____1 = (function (state_8266){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_8266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e8278){if((e8278 instanceof Object)){
var ex__7733__auto__ = e8278;
var statearr_8279_8414 = state_8266;
(statearr_8279_8414[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8415 = state_8266;
state_8266 = G__8415;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__ = function(state_8266){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____1.call(this,state_8266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__;
})()
;})(__8395,switch__7729__auto__,c__7841__auto___8407,G__8226_8396,n__5591__auto___8394,jobs,results,process,async))
})();
var state__7843__auto__ = (function (){var statearr_8280 = f__7842__auto__.call(null);
(statearr_8280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto___8407);

return statearr_8280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(__8395,c__7841__auto___8407,G__8226_8396,n__5591__auto___8394,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__8416 = (__8395 + (1));
__8395 = G__8416;
continue;
} else {
}
break;
}

var c__7841__auto___8417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7841__auto___8417,jobs,results,process,async){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (c__7841__auto___8417,jobs,results,process,async){
return (function (state_8302){
var state_val_8303 = (state_8302[(1)]);
if((state_val_8303 === (1))){
var state_8302__$1 = state_8302;
var statearr_8304_8418 = state_8302__$1;
(statearr_8304_8418[(2)] = null);

(statearr_8304_8418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8303 === (2))){
var state_8302__$1 = state_8302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8302__$1,(4),from);
} else {
if((state_val_8303 === (3))){
var inst_8300 = (state_8302[(2)]);
var state_8302__$1 = state_8302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8302__$1,inst_8300);
} else {
if((state_val_8303 === (4))){
var inst_8283 = (state_8302[(7)]);
var inst_8283__$1 = (state_8302[(2)]);
var inst_8284 = (inst_8283__$1 == null);
var state_8302__$1 = (function (){var statearr_8305 = state_8302;
(statearr_8305[(7)] = inst_8283__$1);

return statearr_8305;
})();
if(cljs.core.truth_(inst_8284)){
var statearr_8306_8419 = state_8302__$1;
(statearr_8306_8419[(1)] = (5));

} else {
var statearr_8307_8420 = state_8302__$1;
(statearr_8307_8420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8303 === (5))){
var inst_8286 = cljs.core.async.close_BANG_.call(null,jobs);
var state_8302__$1 = state_8302;
var statearr_8308_8421 = state_8302__$1;
(statearr_8308_8421[(2)] = inst_8286);

(statearr_8308_8421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8303 === (6))){
var inst_8283 = (state_8302[(7)]);
var inst_8288 = (state_8302[(8)]);
var inst_8288__$1 = cljs.core.async.chan.call(null,(1));
var inst_8289 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8290 = [inst_8283,inst_8288__$1];
var inst_8291 = (new cljs.core.PersistentVector(null,2,(5),inst_8289,inst_8290,null));
var state_8302__$1 = (function (){var statearr_8309 = state_8302;
(statearr_8309[(8)] = inst_8288__$1);

return statearr_8309;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8302__$1,(8),jobs,inst_8291);
} else {
if((state_val_8303 === (7))){
var inst_8298 = (state_8302[(2)]);
var state_8302__$1 = state_8302;
var statearr_8310_8422 = state_8302__$1;
(statearr_8310_8422[(2)] = inst_8298);

(statearr_8310_8422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8303 === (8))){
var inst_8288 = (state_8302[(8)]);
var inst_8293 = (state_8302[(2)]);
var state_8302__$1 = (function (){var statearr_8311 = state_8302;
(statearr_8311[(9)] = inst_8293);

return statearr_8311;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8302__$1,(9),results,inst_8288);
} else {
if((state_val_8303 === (9))){
var inst_8295 = (state_8302[(2)]);
var state_8302__$1 = (function (){var statearr_8312 = state_8302;
(statearr_8312[(10)] = inst_8295);

return statearr_8312;
})();
var statearr_8313_8423 = state_8302__$1;
(statearr_8313_8423[(2)] = null);

(statearr_8313_8423[(1)] = (2));


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
});})(c__7841__auto___8417,jobs,results,process,async))
;
return ((function (switch__7729__auto__,c__7841__auto___8417,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____0 = (function (){
var statearr_8317 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8317[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__);

(statearr_8317[(1)] = (1));

return statearr_8317;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____1 = (function (state_8302){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_8302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e8318){if((e8318 instanceof Object)){
var ex__7733__auto__ = e8318;
var statearr_8319_8424 = state_8302;
(statearr_8319_8424[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8425 = state_8302;
state_8302 = G__8425;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__ = function(state_8302){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____1.call(this,state_8302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__;
})()
;})(switch__7729__auto__,c__7841__auto___8417,jobs,results,process,async))
})();
var state__7843__auto__ = (function (){var statearr_8320 = f__7842__auto__.call(null);
(statearr_8320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto___8417);

return statearr_8320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(c__7841__auto___8417,jobs,results,process,async))
);


var c__7841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7841__auto__,jobs,results,process,async){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (c__7841__auto__,jobs,results,process,async){
return (function (state_8358){
var state_val_8359 = (state_8358[(1)]);
if((state_val_8359 === (7))){
var inst_8354 = (state_8358[(2)]);
var state_8358__$1 = state_8358;
var statearr_8360_8426 = state_8358__$1;
(statearr_8360_8426[(2)] = inst_8354);

(statearr_8360_8426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (20))){
var state_8358__$1 = state_8358;
var statearr_8361_8427 = state_8358__$1;
(statearr_8361_8427[(2)] = null);

(statearr_8361_8427[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (1))){
var state_8358__$1 = state_8358;
var statearr_8362_8428 = state_8358__$1;
(statearr_8362_8428[(2)] = null);

(statearr_8362_8428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (4))){
var inst_8323 = (state_8358[(7)]);
var inst_8323__$1 = (state_8358[(2)]);
var inst_8324 = (inst_8323__$1 == null);
var state_8358__$1 = (function (){var statearr_8363 = state_8358;
(statearr_8363[(7)] = inst_8323__$1);

return statearr_8363;
})();
if(cljs.core.truth_(inst_8324)){
var statearr_8364_8429 = state_8358__$1;
(statearr_8364_8429[(1)] = (5));

} else {
var statearr_8365_8430 = state_8358__$1;
(statearr_8365_8430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (15))){
var inst_8336 = (state_8358[(8)]);
var state_8358__$1 = state_8358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8358__$1,(18),to,inst_8336);
} else {
if((state_val_8359 === (21))){
var inst_8349 = (state_8358[(2)]);
var state_8358__$1 = state_8358;
var statearr_8366_8431 = state_8358__$1;
(statearr_8366_8431[(2)] = inst_8349);

(statearr_8366_8431[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (13))){
var inst_8351 = (state_8358[(2)]);
var state_8358__$1 = (function (){var statearr_8367 = state_8358;
(statearr_8367[(9)] = inst_8351);

return statearr_8367;
})();
var statearr_8368_8432 = state_8358__$1;
(statearr_8368_8432[(2)] = null);

(statearr_8368_8432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (6))){
var inst_8323 = (state_8358[(7)]);
var state_8358__$1 = state_8358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8358__$1,(11),inst_8323);
} else {
if((state_val_8359 === (17))){
var inst_8344 = (state_8358[(2)]);
var state_8358__$1 = state_8358;
if(cljs.core.truth_(inst_8344)){
var statearr_8369_8433 = state_8358__$1;
(statearr_8369_8433[(1)] = (19));

} else {
var statearr_8370_8434 = state_8358__$1;
(statearr_8370_8434[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (3))){
var inst_8356 = (state_8358[(2)]);
var state_8358__$1 = state_8358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8358__$1,inst_8356);
} else {
if((state_val_8359 === (12))){
var inst_8333 = (state_8358[(10)]);
var state_8358__$1 = state_8358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8358__$1,(14),inst_8333);
} else {
if((state_val_8359 === (2))){
var state_8358__$1 = state_8358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8358__$1,(4),results);
} else {
if((state_val_8359 === (19))){
var state_8358__$1 = state_8358;
var statearr_8371_8435 = state_8358__$1;
(statearr_8371_8435[(2)] = null);

(statearr_8371_8435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (11))){
var inst_8333 = (state_8358[(2)]);
var state_8358__$1 = (function (){var statearr_8372 = state_8358;
(statearr_8372[(10)] = inst_8333);

return statearr_8372;
})();
var statearr_8373_8436 = state_8358__$1;
(statearr_8373_8436[(2)] = null);

(statearr_8373_8436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (9))){
var state_8358__$1 = state_8358;
var statearr_8374_8437 = state_8358__$1;
(statearr_8374_8437[(2)] = null);

(statearr_8374_8437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (5))){
var state_8358__$1 = state_8358;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8375_8438 = state_8358__$1;
(statearr_8375_8438[(1)] = (8));

} else {
var statearr_8376_8439 = state_8358__$1;
(statearr_8376_8439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (14))){
var inst_8336 = (state_8358[(8)]);
var inst_8338 = (state_8358[(11)]);
var inst_8336__$1 = (state_8358[(2)]);
var inst_8337 = (inst_8336__$1 == null);
var inst_8338__$1 = cljs.core.not.call(null,inst_8337);
var state_8358__$1 = (function (){var statearr_8377 = state_8358;
(statearr_8377[(8)] = inst_8336__$1);

(statearr_8377[(11)] = inst_8338__$1);

return statearr_8377;
})();
if(inst_8338__$1){
var statearr_8378_8440 = state_8358__$1;
(statearr_8378_8440[(1)] = (15));

} else {
var statearr_8379_8441 = state_8358__$1;
(statearr_8379_8441[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (16))){
var inst_8338 = (state_8358[(11)]);
var state_8358__$1 = state_8358;
var statearr_8380_8442 = state_8358__$1;
(statearr_8380_8442[(2)] = inst_8338);

(statearr_8380_8442[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (10))){
var inst_8330 = (state_8358[(2)]);
var state_8358__$1 = state_8358;
var statearr_8381_8443 = state_8358__$1;
(statearr_8381_8443[(2)] = inst_8330);

(statearr_8381_8443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (18))){
var inst_8341 = (state_8358[(2)]);
var state_8358__$1 = state_8358;
var statearr_8382_8444 = state_8358__$1;
(statearr_8382_8444[(2)] = inst_8341);

(statearr_8382_8444[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (8))){
var inst_8327 = cljs.core.async.close_BANG_.call(null,to);
var state_8358__$1 = state_8358;
var statearr_8383_8445 = state_8358__$1;
(statearr_8383_8445[(2)] = inst_8327);

(statearr_8383_8445[(1)] = (10));


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
});})(c__7841__auto__,jobs,results,process,async))
;
return ((function (switch__7729__auto__,c__7841__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____0 = (function (){
var statearr_8387 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8387[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__);

(statearr_8387[(1)] = (1));

return statearr_8387;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____1 = (function (state_8358){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_8358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e8388){if((e8388 instanceof Object)){
var ex__7733__auto__ = e8388;
var statearr_8389_8446 = state_8358;
(statearr_8389_8446[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8447 = state_8358;
state_8358 = G__8447;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__ = function(state_8358){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____1.call(this,state_8358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7730__auto__;
})()
;})(switch__7729__auto__,c__7841__auto__,jobs,results,process,async))
})();
var state__7843__auto__ = (function (){var statearr_8390 = f__7842__auto__.call(null);
(statearr_8390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto__);

return statearr_8390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(c__7841__auto__,jobs,results,process,async))
);

return c__7841__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args8448 = [];
var len__5746__auto___8451 = arguments.length;
var i__5747__auto___8452 = (0);
while(true){
if((i__5747__auto___8452 < len__5746__auto___8451)){
args8448.push((arguments[i__5747__auto___8452]));

var G__8453 = (i__5747__auto___8452 + (1));
i__5747__auto___8452 = G__8453;
continue;
} else {
}
break;
}

var G__8450 = args8448.length;
switch (G__8450) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8448.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args8455 = [];
var len__5746__auto___8458 = arguments.length;
var i__5747__auto___8459 = (0);
while(true){
if((i__5747__auto___8459 < len__5746__auto___8458)){
args8455.push((arguments[i__5747__auto___8459]));

var G__8460 = (i__5747__auto___8459 + (1));
i__5747__auto___8459 = G__8460;
continue;
} else {
}
break;
}

var G__8457 = args8455.length;
switch (G__8457) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8455.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args8462 = [];
var len__5746__auto___8515 = arguments.length;
var i__5747__auto___8516 = (0);
while(true){
if((i__5747__auto___8516 < len__5746__auto___8515)){
args8462.push((arguments[i__5747__auto___8516]));

var G__8517 = (i__5747__auto___8516 + (1));
i__5747__auto___8516 = G__8517;
continue;
} else {
}
break;
}

var G__8464 = args8462.length;
switch (G__8464) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8462.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7841__auto___8519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7841__auto___8519,tc,fc){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (c__7841__auto___8519,tc,fc){
return (function (state_8490){
var state_val_8491 = (state_8490[(1)]);
if((state_val_8491 === (7))){
var inst_8486 = (state_8490[(2)]);
var state_8490__$1 = state_8490;
var statearr_8492_8520 = state_8490__$1;
(statearr_8492_8520[(2)] = inst_8486);

(statearr_8492_8520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8491 === (1))){
var state_8490__$1 = state_8490;
var statearr_8493_8521 = state_8490__$1;
(statearr_8493_8521[(2)] = null);

(statearr_8493_8521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8491 === (4))){
var inst_8467 = (state_8490[(7)]);
var inst_8467__$1 = (state_8490[(2)]);
var inst_8468 = (inst_8467__$1 == null);
var state_8490__$1 = (function (){var statearr_8494 = state_8490;
(statearr_8494[(7)] = inst_8467__$1);

return statearr_8494;
})();
if(cljs.core.truth_(inst_8468)){
var statearr_8495_8522 = state_8490__$1;
(statearr_8495_8522[(1)] = (5));

} else {
var statearr_8496_8523 = state_8490__$1;
(statearr_8496_8523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8491 === (13))){
var state_8490__$1 = state_8490;
var statearr_8497_8524 = state_8490__$1;
(statearr_8497_8524[(2)] = null);

(statearr_8497_8524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8491 === (6))){
var inst_8467 = (state_8490[(7)]);
var inst_8473 = p.call(null,inst_8467);
var state_8490__$1 = state_8490;
if(cljs.core.truth_(inst_8473)){
var statearr_8498_8525 = state_8490__$1;
(statearr_8498_8525[(1)] = (9));

} else {
var statearr_8499_8526 = state_8490__$1;
(statearr_8499_8526[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8491 === (3))){
var inst_8488 = (state_8490[(2)]);
var state_8490__$1 = state_8490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8490__$1,inst_8488);
} else {
if((state_val_8491 === (12))){
var state_8490__$1 = state_8490;
var statearr_8500_8527 = state_8490__$1;
(statearr_8500_8527[(2)] = null);

(statearr_8500_8527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8491 === (2))){
var state_8490__$1 = state_8490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8490__$1,(4),ch);
} else {
if((state_val_8491 === (11))){
var inst_8467 = (state_8490[(7)]);
var inst_8477 = (state_8490[(2)]);
var state_8490__$1 = state_8490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8490__$1,(8),inst_8477,inst_8467);
} else {
if((state_val_8491 === (9))){
var state_8490__$1 = state_8490;
var statearr_8501_8528 = state_8490__$1;
(statearr_8501_8528[(2)] = tc);

(statearr_8501_8528[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8491 === (5))){
var inst_8470 = cljs.core.async.close_BANG_.call(null,tc);
var inst_8471 = cljs.core.async.close_BANG_.call(null,fc);
var state_8490__$1 = (function (){var statearr_8502 = state_8490;
(statearr_8502[(8)] = inst_8470);

return statearr_8502;
})();
var statearr_8503_8529 = state_8490__$1;
(statearr_8503_8529[(2)] = inst_8471);

(statearr_8503_8529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8491 === (14))){
var inst_8484 = (state_8490[(2)]);
var state_8490__$1 = state_8490;
var statearr_8504_8530 = state_8490__$1;
(statearr_8504_8530[(2)] = inst_8484);

(statearr_8504_8530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8491 === (10))){
var state_8490__$1 = state_8490;
var statearr_8505_8531 = state_8490__$1;
(statearr_8505_8531[(2)] = fc);

(statearr_8505_8531[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8491 === (8))){
var inst_8479 = (state_8490[(2)]);
var state_8490__$1 = state_8490;
if(cljs.core.truth_(inst_8479)){
var statearr_8506_8532 = state_8490__$1;
(statearr_8506_8532[(1)] = (12));

} else {
var statearr_8507_8533 = state_8490__$1;
(statearr_8507_8533[(1)] = (13));

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
});})(c__7841__auto___8519,tc,fc))
;
return ((function (switch__7729__auto__,c__7841__auto___8519,tc,fc){
return (function() {
var cljs$core$async$state_machine__7730__auto__ = null;
var cljs$core$async$state_machine__7730__auto____0 = (function (){
var statearr_8511 = [null,null,null,null,null,null,null,null,null];
(statearr_8511[(0)] = cljs$core$async$state_machine__7730__auto__);

(statearr_8511[(1)] = (1));

return statearr_8511;
});
var cljs$core$async$state_machine__7730__auto____1 = (function (state_8490){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_8490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e8512){if((e8512 instanceof Object)){
var ex__7733__auto__ = e8512;
var statearr_8513_8534 = state_8490;
(statearr_8513_8534[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8535 = state_8490;
state_8490 = G__8535;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
cljs$core$async$state_machine__7730__auto__ = function(state_8490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7730__auto____1.call(this,state_8490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7730__auto____0;
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7730__auto____1;
return cljs$core$async$state_machine__7730__auto__;
})()
;})(switch__7729__auto__,c__7841__auto___8519,tc,fc))
})();
var state__7843__auto__ = (function (){var statearr_8514 = f__7842__auto__.call(null);
(statearr_8514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto___8519);

return statearr_8514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(c__7841__auto___8519,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7841__auto__){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (c__7841__auto__){
return (function (state_8599){
var state_val_8600 = (state_8599[(1)]);
if((state_val_8600 === (7))){
var inst_8595 = (state_8599[(2)]);
var state_8599__$1 = state_8599;
var statearr_8601_8622 = state_8599__$1;
(statearr_8601_8622[(2)] = inst_8595);

(statearr_8601_8622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8600 === (1))){
var inst_8579 = init;
var state_8599__$1 = (function (){var statearr_8602 = state_8599;
(statearr_8602[(7)] = inst_8579);

return statearr_8602;
})();
var statearr_8603_8623 = state_8599__$1;
(statearr_8603_8623[(2)] = null);

(statearr_8603_8623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8600 === (4))){
var inst_8582 = (state_8599[(8)]);
var inst_8582__$1 = (state_8599[(2)]);
var inst_8583 = (inst_8582__$1 == null);
var state_8599__$1 = (function (){var statearr_8604 = state_8599;
(statearr_8604[(8)] = inst_8582__$1);

return statearr_8604;
})();
if(cljs.core.truth_(inst_8583)){
var statearr_8605_8624 = state_8599__$1;
(statearr_8605_8624[(1)] = (5));

} else {
var statearr_8606_8625 = state_8599__$1;
(statearr_8606_8625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8600 === (6))){
var inst_8586 = (state_8599[(9)]);
var inst_8579 = (state_8599[(7)]);
var inst_8582 = (state_8599[(8)]);
var inst_8586__$1 = f.call(null,inst_8579,inst_8582);
var inst_8587 = cljs.core.reduced_QMARK_.call(null,inst_8586__$1);
var state_8599__$1 = (function (){var statearr_8607 = state_8599;
(statearr_8607[(9)] = inst_8586__$1);

return statearr_8607;
})();
if(inst_8587){
var statearr_8608_8626 = state_8599__$1;
(statearr_8608_8626[(1)] = (8));

} else {
var statearr_8609_8627 = state_8599__$1;
(statearr_8609_8627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8600 === (3))){
var inst_8597 = (state_8599[(2)]);
var state_8599__$1 = state_8599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8599__$1,inst_8597);
} else {
if((state_val_8600 === (2))){
var state_8599__$1 = state_8599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8599__$1,(4),ch);
} else {
if((state_val_8600 === (9))){
var inst_8586 = (state_8599[(9)]);
var inst_8579 = inst_8586;
var state_8599__$1 = (function (){var statearr_8610 = state_8599;
(statearr_8610[(7)] = inst_8579);

return statearr_8610;
})();
var statearr_8611_8628 = state_8599__$1;
(statearr_8611_8628[(2)] = null);

(statearr_8611_8628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8600 === (5))){
var inst_8579 = (state_8599[(7)]);
var state_8599__$1 = state_8599;
var statearr_8612_8629 = state_8599__$1;
(statearr_8612_8629[(2)] = inst_8579);

(statearr_8612_8629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8600 === (10))){
var inst_8593 = (state_8599[(2)]);
var state_8599__$1 = state_8599;
var statearr_8613_8630 = state_8599__$1;
(statearr_8613_8630[(2)] = inst_8593);

(statearr_8613_8630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8600 === (8))){
var inst_8586 = (state_8599[(9)]);
var inst_8589 = cljs.core.deref.call(null,inst_8586);
var state_8599__$1 = state_8599;
var statearr_8614_8631 = state_8599__$1;
(statearr_8614_8631[(2)] = inst_8589);

(statearr_8614_8631[(1)] = (10));


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
});})(c__7841__auto__))
;
return ((function (switch__7729__auto__,c__7841__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7730__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7730__auto____0 = (function (){
var statearr_8618 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8618[(0)] = cljs$core$async$reduce_$_state_machine__7730__auto__);

(statearr_8618[(1)] = (1));

return statearr_8618;
});
var cljs$core$async$reduce_$_state_machine__7730__auto____1 = (function (state_8599){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_8599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e8619){if((e8619 instanceof Object)){
var ex__7733__auto__ = e8619;
var statearr_8620_8632 = state_8599;
(statearr_8620_8632[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8633 = state_8599;
state_8599 = G__8633;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7730__auto__ = function(state_8599){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7730__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7730__auto____1.call(this,state_8599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7730__auto____0;
cljs$core$async$reduce_$_state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7730__auto____1;
return cljs$core$async$reduce_$_state_machine__7730__auto__;
})()
;})(switch__7729__auto__,c__7841__auto__))
})();
var state__7843__auto__ = (function (){var statearr_8621 = f__7842__auto__.call(null);
(statearr_8621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto__);

return statearr_8621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(c__7841__auto__))
);

return c__7841__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args8634 = [];
var len__5746__auto___8686 = arguments.length;
var i__5747__auto___8687 = (0);
while(true){
if((i__5747__auto___8687 < len__5746__auto___8686)){
args8634.push((arguments[i__5747__auto___8687]));

var G__8688 = (i__5747__auto___8687 + (1));
i__5747__auto___8687 = G__8688;
continue;
} else {
}
break;
}

var G__8636 = args8634.length;
switch (G__8636) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8634.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7841__auto__){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (c__7841__auto__){
return (function (state_8661){
var state_val_8662 = (state_8661[(1)]);
if((state_val_8662 === (7))){
var inst_8643 = (state_8661[(2)]);
var state_8661__$1 = state_8661;
var statearr_8663_8690 = state_8661__$1;
(statearr_8663_8690[(2)] = inst_8643);

(statearr_8663_8690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8662 === (1))){
var inst_8637 = cljs.core.seq.call(null,coll);
var inst_8638 = inst_8637;
var state_8661__$1 = (function (){var statearr_8664 = state_8661;
(statearr_8664[(7)] = inst_8638);

return statearr_8664;
})();
var statearr_8665_8691 = state_8661__$1;
(statearr_8665_8691[(2)] = null);

(statearr_8665_8691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8662 === (4))){
var inst_8638 = (state_8661[(7)]);
var inst_8641 = cljs.core.first.call(null,inst_8638);
var state_8661__$1 = state_8661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8661__$1,(7),ch,inst_8641);
} else {
if((state_val_8662 === (13))){
var inst_8655 = (state_8661[(2)]);
var state_8661__$1 = state_8661;
var statearr_8666_8692 = state_8661__$1;
(statearr_8666_8692[(2)] = inst_8655);

(statearr_8666_8692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8662 === (6))){
var inst_8646 = (state_8661[(2)]);
var state_8661__$1 = state_8661;
if(cljs.core.truth_(inst_8646)){
var statearr_8667_8693 = state_8661__$1;
(statearr_8667_8693[(1)] = (8));

} else {
var statearr_8668_8694 = state_8661__$1;
(statearr_8668_8694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8662 === (3))){
var inst_8659 = (state_8661[(2)]);
var state_8661__$1 = state_8661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8661__$1,inst_8659);
} else {
if((state_val_8662 === (12))){
var state_8661__$1 = state_8661;
var statearr_8669_8695 = state_8661__$1;
(statearr_8669_8695[(2)] = null);

(statearr_8669_8695[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8662 === (2))){
var inst_8638 = (state_8661[(7)]);
var state_8661__$1 = state_8661;
if(cljs.core.truth_(inst_8638)){
var statearr_8670_8696 = state_8661__$1;
(statearr_8670_8696[(1)] = (4));

} else {
var statearr_8671_8697 = state_8661__$1;
(statearr_8671_8697[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8662 === (11))){
var inst_8652 = cljs.core.async.close_BANG_.call(null,ch);
var state_8661__$1 = state_8661;
var statearr_8672_8698 = state_8661__$1;
(statearr_8672_8698[(2)] = inst_8652);

(statearr_8672_8698[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8662 === (9))){
var state_8661__$1 = state_8661;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8673_8699 = state_8661__$1;
(statearr_8673_8699[(1)] = (11));

} else {
var statearr_8674_8700 = state_8661__$1;
(statearr_8674_8700[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8662 === (5))){
var inst_8638 = (state_8661[(7)]);
var state_8661__$1 = state_8661;
var statearr_8675_8701 = state_8661__$1;
(statearr_8675_8701[(2)] = inst_8638);

(statearr_8675_8701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8662 === (10))){
var inst_8657 = (state_8661[(2)]);
var state_8661__$1 = state_8661;
var statearr_8676_8702 = state_8661__$1;
(statearr_8676_8702[(2)] = inst_8657);

(statearr_8676_8702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8662 === (8))){
var inst_8638 = (state_8661[(7)]);
var inst_8648 = cljs.core.next.call(null,inst_8638);
var inst_8638__$1 = inst_8648;
var state_8661__$1 = (function (){var statearr_8677 = state_8661;
(statearr_8677[(7)] = inst_8638__$1);

return statearr_8677;
})();
var statearr_8678_8703 = state_8661__$1;
(statearr_8678_8703[(2)] = null);

(statearr_8678_8703[(1)] = (2));


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
});})(c__7841__auto__))
;
return ((function (switch__7729__auto__,c__7841__auto__){
return (function() {
var cljs$core$async$state_machine__7730__auto__ = null;
var cljs$core$async$state_machine__7730__auto____0 = (function (){
var statearr_8682 = [null,null,null,null,null,null,null,null];
(statearr_8682[(0)] = cljs$core$async$state_machine__7730__auto__);

(statearr_8682[(1)] = (1));

return statearr_8682;
});
var cljs$core$async$state_machine__7730__auto____1 = (function (state_8661){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_8661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e8683){if((e8683 instanceof Object)){
var ex__7733__auto__ = e8683;
var statearr_8684_8704 = state_8661;
(statearr_8684_8704[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8705 = state_8661;
state_8661 = G__8705;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
cljs$core$async$state_machine__7730__auto__ = function(state_8661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7730__auto____1.call(this,state_8661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7730__auto____0;
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7730__auto____1;
return cljs$core$async$state_machine__7730__auto__;
})()
;})(switch__7729__auto__,c__7841__auto__))
})();
var state__7843__auto__ = (function (){var statearr_8685 = f__7842__auto__.call(null);
(statearr_8685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto__);

return statearr_8685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(c__7841__auto__))
);

return c__7841__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5343__auto__ = (((_ == null))?null:_);
var m__5344__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,_);
} else {
var m__5344__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5343__auto__ = (((m == null))?null:m);
var m__5344__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5344__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5343__auto__ = (((m == null))?null:m);
var m__5344__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,m,ch);
} else {
var m__5344__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5343__auto__ = (((m == null))?null:m);
var m__5344__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,m);
} else {
var m__5344__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8927 = (function (mult,ch,cs,meta8928){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta8928 = meta8928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_8929,meta8928__$1){
var self__ = this;
var _8929__$1 = this;
return (new cljs.core.async.t_cljs$core$async8927(self__.mult,self__.ch,self__.cs,meta8928__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async8927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_8929){
var self__ = this;
var _8929__$1 = this;
return self__.meta8928;
});})(cs))
;

cljs.core.async.t_cljs$core$async8927.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8927.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async8927.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async8927.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8927.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8927.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8927.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta8928","meta8928",-1033616833,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async8927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8927";

cljs.core.async.t_cljs$core$async8927.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"cljs.core.async/t_cljs$core$async8927");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async8927 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async8927(mult__$1,ch__$1,cs__$1,meta8928){
return (new cljs.core.async.t_cljs$core$async8927(mult__$1,ch__$1,cs__$1,meta8928));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async8927(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7841__auto___9148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7841__auto___9148,cs,m,dchan,dctr,done){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (c__7841__auto___9148,cs,m,dchan,dctr,done){
return (function (state_9060){
var state_val_9061 = (state_9060[(1)]);
if((state_val_9061 === (7))){
var inst_9056 = (state_9060[(2)]);
var state_9060__$1 = state_9060;
var statearr_9062_9149 = state_9060__$1;
(statearr_9062_9149[(2)] = inst_9056);

(statearr_9062_9149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (20))){
var inst_8961 = (state_9060[(7)]);
var inst_8971 = cljs.core.first.call(null,inst_8961);
var inst_8972 = cljs.core.nth.call(null,inst_8971,(0),null);
var inst_8973 = cljs.core.nth.call(null,inst_8971,(1),null);
var state_9060__$1 = (function (){var statearr_9063 = state_9060;
(statearr_9063[(8)] = inst_8972);

return statearr_9063;
})();
if(cljs.core.truth_(inst_8973)){
var statearr_9064_9150 = state_9060__$1;
(statearr_9064_9150[(1)] = (22));

} else {
var statearr_9065_9151 = state_9060__$1;
(statearr_9065_9151[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (27))){
var inst_9008 = (state_9060[(9)]);
var inst_9001 = (state_9060[(10)]);
var inst_8932 = (state_9060[(11)]);
var inst_9003 = (state_9060[(12)]);
var inst_9008__$1 = cljs.core._nth.call(null,inst_9001,inst_9003);
var inst_9009 = cljs.core.async.put_BANG_.call(null,inst_9008__$1,inst_8932,done);
var state_9060__$1 = (function (){var statearr_9066 = state_9060;
(statearr_9066[(9)] = inst_9008__$1);

return statearr_9066;
})();
if(cljs.core.truth_(inst_9009)){
var statearr_9067_9152 = state_9060__$1;
(statearr_9067_9152[(1)] = (30));

} else {
var statearr_9068_9153 = state_9060__$1;
(statearr_9068_9153[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (1))){
var state_9060__$1 = state_9060;
var statearr_9069_9154 = state_9060__$1;
(statearr_9069_9154[(2)] = null);

(statearr_9069_9154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (24))){
var inst_8961 = (state_9060[(7)]);
var inst_8978 = (state_9060[(2)]);
var inst_8979 = cljs.core.next.call(null,inst_8961);
var inst_8941 = inst_8979;
var inst_8942 = null;
var inst_8943 = (0);
var inst_8944 = (0);
var state_9060__$1 = (function (){var statearr_9070 = state_9060;
(statearr_9070[(13)] = inst_8944);

(statearr_9070[(14)] = inst_8978);

(statearr_9070[(15)] = inst_8943);

(statearr_9070[(16)] = inst_8941);

(statearr_9070[(17)] = inst_8942);

return statearr_9070;
})();
var statearr_9071_9155 = state_9060__$1;
(statearr_9071_9155[(2)] = null);

(statearr_9071_9155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (39))){
var state_9060__$1 = state_9060;
var statearr_9075_9156 = state_9060__$1;
(statearr_9075_9156[(2)] = null);

(statearr_9075_9156[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (4))){
var inst_8932 = (state_9060[(11)]);
var inst_8932__$1 = (state_9060[(2)]);
var inst_8933 = (inst_8932__$1 == null);
var state_9060__$1 = (function (){var statearr_9076 = state_9060;
(statearr_9076[(11)] = inst_8932__$1);

return statearr_9076;
})();
if(cljs.core.truth_(inst_8933)){
var statearr_9077_9157 = state_9060__$1;
(statearr_9077_9157[(1)] = (5));

} else {
var statearr_9078_9158 = state_9060__$1;
(statearr_9078_9158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (15))){
var inst_8944 = (state_9060[(13)]);
var inst_8943 = (state_9060[(15)]);
var inst_8941 = (state_9060[(16)]);
var inst_8942 = (state_9060[(17)]);
var inst_8957 = (state_9060[(2)]);
var inst_8958 = (inst_8944 + (1));
var tmp9072 = inst_8943;
var tmp9073 = inst_8941;
var tmp9074 = inst_8942;
var inst_8941__$1 = tmp9073;
var inst_8942__$1 = tmp9074;
var inst_8943__$1 = tmp9072;
var inst_8944__$1 = inst_8958;
var state_9060__$1 = (function (){var statearr_9079 = state_9060;
(statearr_9079[(13)] = inst_8944__$1);

(statearr_9079[(18)] = inst_8957);

(statearr_9079[(15)] = inst_8943__$1);

(statearr_9079[(16)] = inst_8941__$1);

(statearr_9079[(17)] = inst_8942__$1);

return statearr_9079;
})();
var statearr_9080_9159 = state_9060__$1;
(statearr_9080_9159[(2)] = null);

(statearr_9080_9159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (21))){
var inst_8982 = (state_9060[(2)]);
var state_9060__$1 = state_9060;
var statearr_9084_9160 = state_9060__$1;
(statearr_9084_9160[(2)] = inst_8982);

(statearr_9084_9160[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (31))){
var inst_9008 = (state_9060[(9)]);
var inst_9012 = done.call(null,null);
var inst_9013 = cljs.core.async.untap_STAR_.call(null,m,inst_9008);
var state_9060__$1 = (function (){var statearr_9085 = state_9060;
(statearr_9085[(19)] = inst_9012);

return statearr_9085;
})();
var statearr_9086_9161 = state_9060__$1;
(statearr_9086_9161[(2)] = inst_9013);

(statearr_9086_9161[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (32))){
var inst_9000 = (state_9060[(20)]);
var inst_9001 = (state_9060[(10)]);
var inst_9003 = (state_9060[(12)]);
var inst_9002 = (state_9060[(21)]);
var inst_9015 = (state_9060[(2)]);
var inst_9016 = (inst_9003 + (1));
var tmp9081 = inst_9000;
var tmp9082 = inst_9001;
var tmp9083 = inst_9002;
var inst_9000__$1 = tmp9081;
var inst_9001__$1 = tmp9082;
var inst_9002__$1 = tmp9083;
var inst_9003__$1 = inst_9016;
var state_9060__$1 = (function (){var statearr_9087 = state_9060;
(statearr_9087[(20)] = inst_9000__$1);

(statearr_9087[(22)] = inst_9015);

(statearr_9087[(10)] = inst_9001__$1);

(statearr_9087[(12)] = inst_9003__$1);

(statearr_9087[(21)] = inst_9002__$1);

return statearr_9087;
})();
var statearr_9088_9162 = state_9060__$1;
(statearr_9088_9162[(2)] = null);

(statearr_9088_9162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (40))){
var inst_9028 = (state_9060[(23)]);
var inst_9032 = done.call(null,null);
var inst_9033 = cljs.core.async.untap_STAR_.call(null,m,inst_9028);
var state_9060__$1 = (function (){var statearr_9089 = state_9060;
(statearr_9089[(24)] = inst_9032);

return statearr_9089;
})();
var statearr_9090_9163 = state_9060__$1;
(statearr_9090_9163[(2)] = inst_9033);

(statearr_9090_9163[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (33))){
var inst_9019 = (state_9060[(25)]);
var inst_9021 = cljs.core.chunked_seq_QMARK_.call(null,inst_9019);
var state_9060__$1 = state_9060;
if(inst_9021){
var statearr_9091_9164 = state_9060__$1;
(statearr_9091_9164[(1)] = (36));

} else {
var statearr_9092_9165 = state_9060__$1;
(statearr_9092_9165[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (13))){
var inst_8951 = (state_9060[(26)]);
var inst_8954 = cljs.core.async.close_BANG_.call(null,inst_8951);
var state_9060__$1 = state_9060;
var statearr_9093_9166 = state_9060__$1;
(statearr_9093_9166[(2)] = inst_8954);

(statearr_9093_9166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (22))){
var inst_8972 = (state_9060[(8)]);
var inst_8975 = cljs.core.async.close_BANG_.call(null,inst_8972);
var state_9060__$1 = state_9060;
var statearr_9094_9167 = state_9060__$1;
(statearr_9094_9167[(2)] = inst_8975);

(statearr_9094_9167[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (36))){
var inst_9019 = (state_9060[(25)]);
var inst_9023 = cljs.core.chunk_first.call(null,inst_9019);
var inst_9024 = cljs.core.chunk_rest.call(null,inst_9019);
var inst_9025 = cljs.core.count.call(null,inst_9023);
var inst_9000 = inst_9024;
var inst_9001 = inst_9023;
var inst_9002 = inst_9025;
var inst_9003 = (0);
var state_9060__$1 = (function (){var statearr_9095 = state_9060;
(statearr_9095[(20)] = inst_9000);

(statearr_9095[(10)] = inst_9001);

(statearr_9095[(12)] = inst_9003);

(statearr_9095[(21)] = inst_9002);

return statearr_9095;
})();
var statearr_9096_9168 = state_9060__$1;
(statearr_9096_9168[(2)] = null);

(statearr_9096_9168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (41))){
var inst_9019 = (state_9060[(25)]);
var inst_9035 = (state_9060[(2)]);
var inst_9036 = cljs.core.next.call(null,inst_9019);
var inst_9000 = inst_9036;
var inst_9001 = null;
var inst_9002 = (0);
var inst_9003 = (0);
var state_9060__$1 = (function (){var statearr_9097 = state_9060;
(statearr_9097[(20)] = inst_9000);

(statearr_9097[(10)] = inst_9001);

(statearr_9097[(12)] = inst_9003);

(statearr_9097[(21)] = inst_9002);

(statearr_9097[(27)] = inst_9035);

return statearr_9097;
})();
var statearr_9098_9169 = state_9060__$1;
(statearr_9098_9169[(2)] = null);

(statearr_9098_9169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (43))){
var state_9060__$1 = state_9060;
var statearr_9099_9170 = state_9060__$1;
(statearr_9099_9170[(2)] = null);

(statearr_9099_9170[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (29))){
var inst_9044 = (state_9060[(2)]);
var state_9060__$1 = state_9060;
var statearr_9100_9171 = state_9060__$1;
(statearr_9100_9171[(2)] = inst_9044);

(statearr_9100_9171[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (44))){
var inst_9053 = (state_9060[(2)]);
var state_9060__$1 = (function (){var statearr_9101 = state_9060;
(statearr_9101[(28)] = inst_9053);

return statearr_9101;
})();
var statearr_9102_9172 = state_9060__$1;
(statearr_9102_9172[(2)] = null);

(statearr_9102_9172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (6))){
var inst_8992 = (state_9060[(29)]);
var inst_8991 = cljs.core.deref.call(null,cs);
var inst_8992__$1 = cljs.core.keys.call(null,inst_8991);
var inst_8993 = cljs.core.count.call(null,inst_8992__$1);
var inst_8994 = cljs.core.reset_BANG_.call(null,dctr,inst_8993);
var inst_8999 = cljs.core.seq.call(null,inst_8992__$1);
var inst_9000 = inst_8999;
var inst_9001 = null;
var inst_9002 = (0);
var inst_9003 = (0);
var state_9060__$1 = (function (){var statearr_9103 = state_9060;
(statearr_9103[(20)] = inst_9000);

(statearr_9103[(10)] = inst_9001);

(statearr_9103[(12)] = inst_9003);

(statearr_9103[(21)] = inst_9002);

(statearr_9103[(29)] = inst_8992__$1);

(statearr_9103[(30)] = inst_8994);

return statearr_9103;
})();
var statearr_9104_9173 = state_9060__$1;
(statearr_9104_9173[(2)] = null);

(statearr_9104_9173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (28))){
var inst_9000 = (state_9060[(20)]);
var inst_9019 = (state_9060[(25)]);
var inst_9019__$1 = cljs.core.seq.call(null,inst_9000);
var state_9060__$1 = (function (){var statearr_9105 = state_9060;
(statearr_9105[(25)] = inst_9019__$1);

return statearr_9105;
})();
if(inst_9019__$1){
var statearr_9106_9174 = state_9060__$1;
(statearr_9106_9174[(1)] = (33));

} else {
var statearr_9107_9175 = state_9060__$1;
(statearr_9107_9175[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (25))){
var inst_9003 = (state_9060[(12)]);
var inst_9002 = (state_9060[(21)]);
var inst_9005 = (inst_9003 < inst_9002);
var inst_9006 = inst_9005;
var state_9060__$1 = state_9060;
if(cljs.core.truth_(inst_9006)){
var statearr_9108_9176 = state_9060__$1;
(statearr_9108_9176[(1)] = (27));

} else {
var statearr_9109_9177 = state_9060__$1;
(statearr_9109_9177[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (34))){
var state_9060__$1 = state_9060;
var statearr_9110_9178 = state_9060__$1;
(statearr_9110_9178[(2)] = null);

(statearr_9110_9178[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (17))){
var state_9060__$1 = state_9060;
var statearr_9111_9179 = state_9060__$1;
(statearr_9111_9179[(2)] = null);

(statearr_9111_9179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (3))){
var inst_9058 = (state_9060[(2)]);
var state_9060__$1 = state_9060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9060__$1,inst_9058);
} else {
if((state_val_9061 === (12))){
var inst_8987 = (state_9060[(2)]);
var state_9060__$1 = state_9060;
var statearr_9112_9180 = state_9060__$1;
(statearr_9112_9180[(2)] = inst_8987);

(statearr_9112_9180[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (2))){
var state_9060__$1 = state_9060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9060__$1,(4),ch);
} else {
if((state_val_9061 === (23))){
var state_9060__$1 = state_9060;
var statearr_9113_9181 = state_9060__$1;
(statearr_9113_9181[(2)] = null);

(statearr_9113_9181[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (35))){
var inst_9042 = (state_9060[(2)]);
var state_9060__$1 = state_9060;
var statearr_9114_9182 = state_9060__$1;
(statearr_9114_9182[(2)] = inst_9042);

(statearr_9114_9182[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (19))){
var inst_8961 = (state_9060[(7)]);
var inst_8965 = cljs.core.chunk_first.call(null,inst_8961);
var inst_8966 = cljs.core.chunk_rest.call(null,inst_8961);
var inst_8967 = cljs.core.count.call(null,inst_8965);
var inst_8941 = inst_8966;
var inst_8942 = inst_8965;
var inst_8943 = inst_8967;
var inst_8944 = (0);
var state_9060__$1 = (function (){var statearr_9115 = state_9060;
(statearr_9115[(13)] = inst_8944);

(statearr_9115[(15)] = inst_8943);

(statearr_9115[(16)] = inst_8941);

(statearr_9115[(17)] = inst_8942);

return statearr_9115;
})();
var statearr_9116_9183 = state_9060__$1;
(statearr_9116_9183[(2)] = null);

(statearr_9116_9183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (11))){
var inst_8941 = (state_9060[(16)]);
var inst_8961 = (state_9060[(7)]);
var inst_8961__$1 = cljs.core.seq.call(null,inst_8941);
var state_9060__$1 = (function (){var statearr_9117 = state_9060;
(statearr_9117[(7)] = inst_8961__$1);

return statearr_9117;
})();
if(inst_8961__$1){
var statearr_9118_9184 = state_9060__$1;
(statearr_9118_9184[(1)] = (16));

} else {
var statearr_9119_9185 = state_9060__$1;
(statearr_9119_9185[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (9))){
var inst_8989 = (state_9060[(2)]);
var state_9060__$1 = state_9060;
var statearr_9120_9186 = state_9060__$1;
(statearr_9120_9186[(2)] = inst_8989);

(statearr_9120_9186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (5))){
var inst_8939 = cljs.core.deref.call(null,cs);
var inst_8940 = cljs.core.seq.call(null,inst_8939);
var inst_8941 = inst_8940;
var inst_8942 = null;
var inst_8943 = (0);
var inst_8944 = (0);
var state_9060__$1 = (function (){var statearr_9121 = state_9060;
(statearr_9121[(13)] = inst_8944);

(statearr_9121[(15)] = inst_8943);

(statearr_9121[(16)] = inst_8941);

(statearr_9121[(17)] = inst_8942);

return statearr_9121;
})();
var statearr_9122_9187 = state_9060__$1;
(statearr_9122_9187[(2)] = null);

(statearr_9122_9187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (14))){
var state_9060__$1 = state_9060;
var statearr_9123_9188 = state_9060__$1;
(statearr_9123_9188[(2)] = null);

(statearr_9123_9188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (45))){
var inst_9050 = (state_9060[(2)]);
var state_9060__$1 = state_9060;
var statearr_9124_9189 = state_9060__$1;
(statearr_9124_9189[(2)] = inst_9050);

(statearr_9124_9189[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (26))){
var inst_8992 = (state_9060[(29)]);
var inst_9046 = (state_9060[(2)]);
var inst_9047 = cljs.core.seq.call(null,inst_8992);
var state_9060__$1 = (function (){var statearr_9125 = state_9060;
(statearr_9125[(31)] = inst_9046);

return statearr_9125;
})();
if(inst_9047){
var statearr_9126_9190 = state_9060__$1;
(statearr_9126_9190[(1)] = (42));

} else {
var statearr_9127_9191 = state_9060__$1;
(statearr_9127_9191[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (16))){
var inst_8961 = (state_9060[(7)]);
var inst_8963 = cljs.core.chunked_seq_QMARK_.call(null,inst_8961);
var state_9060__$1 = state_9060;
if(inst_8963){
var statearr_9128_9192 = state_9060__$1;
(statearr_9128_9192[(1)] = (19));

} else {
var statearr_9129_9193 = state_9060__$1;
(statearr_9129_9193[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (38))){
var inst_9039 = (state_9060[(2)]);
var state_9060__$1 = state_9060;
var statearr_9130_9194 = state_9060__$1;
(statearr_9130_9194[(2)] = inst_9039);

(statearr_9130_9194[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (30))){
var state_9060__$1 = state_9060;
var statearr_9131_9195 = state_9060__$1;
(statearr_9131_9195[(2)] = null);

(statearr_9131_9195[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (10))){
var inst_8944 = (state_9060[(13)]);
var inst_8942 = (state_9060[(17)]);
var inst_8950 = cljs.core._nth.call(null,inst_8942,inst_8944);
var inst_8951 = cljs.core.nth.call(null,inst_8950,(0),null);
var inst_8952 = cljs.core.nth.call(null,inst_8950,(1),null);
var state_9060__$1 = (function (){var statearr_9132 = state_9060;
(statearr_9132[(26)] = inst_8951);

return statearr_9132;
})();
if(cljs.core.truth_(inst_8952)){
var statearr_9133_9196 = state_9060__$1;
(statearr_9133_9196[(1)] = (13));

} else {
var statearr_9134_9197 = state_9060__$1;
(statearr_9134_9197[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (18))){
var inst_8985 = (state_9060[(2)]);
var state_9060__$1 = state_9060;
var statearr_9135_9198 = state_9060__$1;
(statearr_9135_9198[(2)] = inst_8985);

(statearr_9135_9198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (42))){
var state_9060__$1 = state_9060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9060__$1,(45),dchan);
} else {
if((state_val_9061 === (37))){
var inst_9019 = (state_9060[(25)]);
var inst_8932 = (state_9060[(11)]);
var inst_9028 = (state_9060[(23)]);
var inst_9028__$1 = cljs.core.first.call(null,inst_9019);
var inst_9029 = cljs.core.async.put_BANG_.call(null,inst_9028__$1,inst_8932,done);
var state_9060__$1 = (function (){var statearr_9136 = state_9060;
(statearr_9136[(23)] = inst_9028__$1);

return statearr_9136;
})();
if(cljs.core.truth_(inst_9029)){
var statearr_9137_9199 = state_9060__$1;
(statearr_9137_9199[(1)] = (39));

} else {
var statearr_9138_9200 = state_9060__$1;
(statearr_9138_9200[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9061 === (8))){
var inst_8944 = (state_9060[(13)]);
var inst_8943 = (state_9060[(15)]);
var inst_8946 = (inst_8944 < inst_8943);
var inst_8947 = inst_8946;
var state_9060__$1 = state_9060;
if(cljs.core.truth_(inst_8947)){
var statearr_9139_9201 = state_9060__$1;
(statearr_9139_9201[(1)] = (10));

} else {
var statearr_9140_9202 = state_9060__$1;
(statearr_9140_9202[(1)] = (11));

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
});})(c__7841__auto___9148,cs,m,dchan,dctr,done))
;
return ((function (switch__7729__auto__,c__7841__auto___9148,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7730__auto__ = null;
var cljs$core$async$mult_$_state_machine__7730__auto____0 = (function (){
var statearr_9144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9144[(0)] = cljs$core$async$mult_$_state_machine__7730__auto__);

(statearr_9144[(1)] = (1));

return statearr_9144;
});
var cljs$core$async$mult_$_state_machine__7730__auto____1 = (function (state_9060){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_9060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e9145){if((e9145 instanceof Object)){
var ex__7733__auto__ = e9145;
var statearr_9146_9203 = state_9060;
(statearr_9146_9203[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9204 = state_9060;
state_9060 = G__9204;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7730__auto__ = function(state_9060){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7730__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7730__auto____1.call(this,state_9060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7730__auto____0;
cljs$core$async$mult_$_state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7730__auto____1;
return cljs$core$async$mult_$_state_machine__7730__auto__;
})()
;})(switch__7729__auto__,c__7841__auto___9148,cs,m,dchan,dctr,done))
})();
var state__7843__auto__ = (function (){var statearr_9147 = f__7842__auto__.call(null);
(statearr_9147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto___9148);

return statearr_9147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(c__7841__auto___9148,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args9205 = [];
var len__5746__auto___9208 = arguments.length;
var i__5747__auto___9209 = (0);
while(true){
if((i__5747__auto___9209 < len__5746__auto___9208)){
args9205.push((arguments[i__5747__auto___9209]));

var G__9210 = (i__5747__auto___9209 + (1));
i__5747__auto___9209 = G__9210;
continue;
} else {
}
break;
}

var G__9207 = args9205.length;
switch (G__9207) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9205.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5343__auto__ = (((m == null))?null:m);
var m__5344__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,m,ch);
} else {
var m__5344__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5343__auto__ = (((m == null))?null:m);
var m__5344__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,m,ch);
} else {
var m__5344__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5343__auto__ = (((m == null))?null:m);
var m__5344__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,m);
} else {
var m__5344__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5343__auto__ = (((m == null))?null:m);
var m__5344__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,m,state_map);
} else {
var m__5344__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5343__auto__ = (((m == null))?null:m);
var m__5344__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,m,mode);
} else {
var m__5344__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5753__auto__ = [];
var len__5746__auto___9222 = arguments.length;
var i__5747__auto___9223 = (0);
while(true){
if((i__5747__auto___9223 < len__5746__auto___9222)){
args__5753__auto__.push((arguments[i__5747__auto___9223]));

var G__9224 = (i__5747__auto___9223 + (1));
i__5747__auto___9223 = G__9224;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((3) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5754__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__9216){
var map__9217 = p__9216;
var map__9217__$1 = ((((!((map__9217 == null)))?((((map__9217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9217):map__9217);
var opts = map__9217__$1;
var statearr_9219_9225 = state;
(statearr_9219_9225[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__9217,map__9217__$1,opts){
return (function (val){
var statearr_9220_9226 = state;
(statearr_9220_9226[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__9217,map__9217__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_9221_9227 = state;
(statearr_9221_9227[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq9212){
var G__9213 = cljs.core.first.call(null,seq9212);
var seq9212__$1 = cljs.core.next.call(null,seq9212);
var G__9214 = cljs.core.first.call(null,seq9212__$1);
var seq9212__$2 = cljs.core.next.call(null,seq9212__$1);
var G__9215 = cljs.core.first.call(null,seq9212__$2);
var seq9212__$3 = cljs.core.next.call(null,seq9212__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9213,G__9214,G__9215,seq9212__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async9391 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9391 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta9392){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta9392 = meta9392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9393,meta9392__$1){
var self__ = this;
var _9393__$1 = this;
return (new cljs.core.async.t_cljs$core$async9391(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta9392__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9391.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9393){
var self__ = this;
var _9393__$1 = this;
return self__.meta9392;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9391.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9391.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9391.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async9391.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9391.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9391.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9391.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9391.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9391.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta9392","meta9392",1442817610,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9391.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9391";

cljs.core.async.t_cljs$core$async9391.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"cljs.core.async/t_cljs$core$async9391");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async9391 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async9391(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9392){
return (new cljs.core.async.t_cljs$core$async9391(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9392));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async9391(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7841__auto___9554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7841__auto___9554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (c__7841__auto___9554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_9491){
var state_val_9492 = (state_9491[(1)]);
if((state_val_9492 === (7))){
var inst_9409 = (state_9491[(2)]);
var state_9491__$1 = state_9491;
var statearr_9493_9555 = state_9491__$1;
(statearr_9493_9555[(2)] = inst_9409);

(statearr_9493_9555[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (20))){
var inst_9421 = (state_9491[(7)]);
var state_9491__$1 = state_9491;
var statearr_9494_9556 = state_9491__$1;
(statearr_9494_9556[(2)] = inst_9421);

(statearr_9494_9556[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (27))){
var state_9491__$1 = state_9491;
var statearr_9495_9557 = state_9491__$1;
(statearr_9495_9557[(2)] = null);

(statearr_9495_9557[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (1))){
var inst_9397 = (state_9491[(8)]);
var inst_9397__$1 = calc_state.call(null);
var inst_9399 = (inst_9397__$1 == null);
var inst_9400 = cljs.core.not.call(null,inst_9399);
var state_9491__$1 = (function (){var statearr_9496 = state_9491;
(statearr_9496[(8)] = inst_9397__$1);

return statearr_9496;
})();
if(inst_9400){
var statearr_9497_9558 = state_9491__$1;
(statearr_9497_9558[(1)] = (2));

} else {
var statearr_9498_9559 = state_9491__$1;
(statearr_9498_9559[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (24))){
var inst_9444 = (state_9491[(9)]);
var inst_9451 = (state_9491[(10)]);
var inst_9465 = (state_9491[(11)]);
var inst_9465__$1 = inst_9444.call(null,inst_9451);
var state_9491__$1 = (function (){var statearr_9499 = state_9491;
(statearr_9499[(11)] = inst_9465__$1);

return statearr_9499;
})();
if(cljs.core.truth_(inst_9465__$1)){
var statearr_9500_9560 = state_9491__$1;
(statearr_9500_9560[(1)] = (29));

} else {
var statearr_9501_9561 = state_9491__$1;
(statearr_9501_9561[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (4))){
var inst_9412 = (state_9491[(2)]);
var state_9491__$1 = state_9491;
if(cljs.core.truth_(inst_9412)){
var statearr_9502_9562 = state_9491__$1;
(statearr_9502_9562[(1)] = (8));

} else {
var statearr_9503_9563 = state_9491__$1;
(statearr_9503_9563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (15))){
var inst_9438 = (state_9491[(2)]);
var state_9491__$1 = state_9491;
if(cljs.core.truth_(inst_9438)){
var statearr_9504_9564 = state_9491__$1;
(statearr_9504_9564[(1)] = (19));

} else {
var statearr_9505_9565 = state_9491__$1;
(statearr_9505_9565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (21))){
var inst_9443 = (state_9491[(12)]);
var inst_9443__$1 = (state_9491[(2)]);
var inst_9444 = cljs.core.get.call(null,inst_9443__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9445 = cljs.core.get.call(null,inst_9443__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9446 = cljs.core.get.call(null,inst_9443__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_9491__$1 = (function (){var statearr_9506 = state_9491;
(statearr_9506[(13)] = inst_9445);

(statearr_9506[(9)] = inst_9444);

(statearr_9506[(12)] = inst_9443__$1);

return statearr_9506;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_9491__$1,(22),inst_9446);
} else {
if((state_val_9492 === (31))){
var inst_9473 = (state_9491[(2)]);
var state_9491__$1 = state_9491;
if(cljs.core.truth_(inst_9473)){
var statearr_9507_9566 = state_9491__$1;
(statearr_9507_9566[(1)] = (32));

} else {
var statearr_9508_9567 = state_9491__$1;
(statearr_9508_9567[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (32))){
var inst_9450 = (state_9491[(14)]);
var state_9491__$1 = state_9491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9491__$1,(35),out,inst_9450);
} else {
if((state_val_9492 === (33))){
var inst_9443 = (state_9491[(12)]);
var inst_9421 = inst_9443;
var state_9491__$1 = (function (){var statearr_9509 = state_9491;
(statearr_9509[(7)] = inst_9421);

return statearr_9509;
})();
var statearr_9510_9568 = state_9491__$1;
(statearr_9510_9568[(2)] = null);

(statearr_9510_9568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (13))){
var inst_9421 = (state_9491[(7)]);
var inst_9428 = inst_9421.cljs$lang$protocol_mask$partition0$;
var inst_9429 = (inst_9428 & (64));
var inst_9430 = inst_9421.cljs$core$ISeq$;
var inst_9431 = (inst_9429) || (inst_9430);
var state_9491__$1 = state_9491;
if(cljs.core.truth_(inst_9431)){
var statearr_9511_9569 = state_9491__$1;
(statearr_9511_9569[(1)] = (16));

} else {
var statearr_9512_9570 = state_9491__$1;
(statearr_9512_9570[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (22))){
var inst_9451 = (state_9491[(10)]);
var inst_9450 = (state_9491[(14)]);
var inst_9449 = (state_9491[(2)]);
var inst_9450__$1 = cljs.core.nth.call(null,inst_9449,(0),null);
var inst_9451__$1 = cljs.core.nth.call(null,inst_9449,(1),null);
var inst_9452 = (inst_9450__$1 == null);
var inst_9453 = cljs.core._EQ_.call(null,inst_9451__$1,change);
var inst_9454 = (inst_9452) || (inst_9453);
var state_9491__$1 = (function (){var statearr_9513 = state_9491;
(statearr_9513[(10)] = inst_9451__$1);

(statearr_9513[(14)] = inst_9450__$1);

return statearr_9513;
})();
if(cljs.core.truth_(inst_9454)){
var statearr_9514_9571 = state_9491__$1;
(statearr_9514_9571[(1)] = (23));

} else {
var statearr_9515_9572 = state_9491__$1;
(statearr_9515_9572[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (36))){
var inst_9443 = (state_9491[(12)]);
var inst_9421 = inst_9443;
var state_9491__$1 = (function (){var statearr_9516 = state_9491;
(statearr_9516[(7)] = inst_9421);

return statearr_9516;
})();
var statearr_9517_9573 = state_9491__$1;
(statearr_9517_9573[(2)] = null);

(statearr_9517_9573[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (29))){
var inst_9465 = (state_9491[(11)]);
var state_9491__$1 = state_9491;
var statearr_9518_9574 = state_9491__$1;
(statearr_9518_9574[(2)] = inst_9465);

(statearr_9518_9574[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (6))){
var state_9491__$1 = state_9491;
var statearr_9519_9575 = state_9491__$1;
(statearr_9519_9575[(2)] = false);

(statearr_9519_9575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (28))){
var inst_9461 = (state_9491[(2)]);
var inst_9462 = calc_state.call(null);
var inst_9421 = inst_9462;
var state_9491__$1 = (function (){var statearr_9520 = state_9491;
(statearr_9520[(7)] = inst_9421);

(statearr_9520[(15)] = inst_9461);

return statearr_9520;
})();
var statearr_9521_9576 = state_9491__$1;
(statearr_9521_9576[(2)] = null);

(statearr_9521_9576[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (25))){
var inst_9487 = (state_9491[(2)]);
var state_9491__$1 = state_9491;
var statearr_9522_9577 = state_9491__$1;
(statearr_9522_9577[(2)] = inst_9487);

(statearr_9522_9577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (34))){
var inst_9485 = (state_9491[(2)]);
var state_9491__$1 = state_9491;
var statearr_9523_9578 = state_9491__$1;
(statearr_9523_9578[(2)] = inst_9485);

(statearr_9523_9578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (17))){
var state_9491__$1 = state_9491;
var statearr_9524_9579 = state_9491__$1;
(statearr_9524_9579[(2)] = false);

(statearr_9524_9579[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (3))){
var state_9491__$1 = state_9491;
var statearr_9525_9580 = state_9491__$1;
(statearr_9525_9580[(2)] = false);

(statearr_9525_9580[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (12))){
var inst_9489 = (state_9491[(2)]);
var state_9491__$1 = state_9491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9491__$1,inst_9489);
} else {
if((state_val_9492 === (2))){
var inst_9397 = (state_9491[(8)]);
var inst_9402 = inst_9397.cljs$lang$protocol_mask$partition0$;
var inst_9403 = (inst_9402 & (64));
var inst_9404 = inst_9397.cljs$core$ISeq$;
var inst_9405 = (inst_9403) || (inst_9404);
var state_9491__$1 = state_9491;
if(cljs.core.truth_(inst_9405)){
var statearr_9526_9581 = state_9491__$1;
(statearr_9526_9581[(1)] = (5));

} else {
var statearr_9527_9582 = state_9491__$1;
(statearr_9527_9582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (23))){
var inst_9450 = (state_9491[(14)]);
var inst_9456 = (inst_9450 == null);
var state_9491__$1 = state_9491;
if(cljs.core.truth_(inst_9456)){
var statearr_9528_9583 = state_9491__$1;
(statearr_9528_9583[(1)] = (26));

} else {
var statearr_9529_9584 = state_9491__$1;
(statearr_9529_9584[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (35))){
var inst_9476 = (state_9491[(2)]);
var state_9491__$1 = state_9491;
if(cljs.core.truth_(inst_9476)){
var statearr_9530_9585 = state_9491__$1;
(statearr_9530_9585[(1)] = (36));

} else {
var statearr_9531_9586 = state_9491__$1;
(statearr_9531_9586[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (19))){
var inst_9421 = (state_9491[(7)]);
var inst_9440 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9421);
var state_9491__$1 = state_9491;
var statearr_9532_9587 = state_9491__$1;
(statearr_9532_9587[(2)] = inst_9440);

(statearr_9532_9587[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (11))){
var inst_9421 = (state_9491[(7)]);
var inst_9425 = (inst_9421 == null);
var inst_9426 = cljs.core.not.call(null,inst_9425);
var state_9491__$1 = state_9491;
if(inst_9426){
var statearr_9533_9588 = state_9491__$1;
(statearr_9533_9588[(1)] = (13));

} else {
var statearr_9534_9589 = state_9491__$1;
(statearr_9534_9589[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (9))){
var inst_9397 = (state_9491[(8)]);
var state_9491__$1 = state_9491;
var statearr_9535_9590 = state_9491__$1;
(statearr_9535_9590[(2)] = inst_9397);

(statearr_9535_9590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (5))){
var state_9491__$1 = state_9491;
var statearr_9536_9591 = state_9491__$1;
(statearr_9536_9591[(2)] = true);

(statearr_9536_9591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (14))){
var state_9491__$1 = state_9491;
var statearr_9537_9592 = state_9491__$1;
(statearr_9537_9592[(2)] = false);

(statearr_9537_9592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (26))){
var inst_9451 = (state_9491[(10)]);
var inst_9458 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_9451);
var state_9491__$1 = state_9491;
var statearr_9538_9593 = state_9491__$1;
(statearr_9538_9593[(2)] = inst_9458);

(statearr_9538_9593[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (16))){
var state_9491__$1 = state_9491;
var statearr_9539_9594 = state_9491__$1;
(statearr_9539_9594[(2)] = true);

(statearr_9539_9594[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (38))){
var inst_9481 = (state_9491[(2)]);
var state_9491__$1 = state_9491;
var statearr_9540_9595 = state_9491__$1;
(statearr_9540_9595[(2)] = inst_9481);

(statearr_9540_9595[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (30))){
var inst_9445 = (state_9491[(13)]);
var inst_9444 = (state_9491[(9)]);
var inst_9451 = (state_9491[(10)]);
var inst_9468 = cljs.core.empty_QMARK_.call(null,inst_9444);
var inst_9469 = inst_9445.call(null,inst_9451);
var inst_9470 = cljs.core.not.call(null,inst_9469);
var inst_9471 = (inst_9468) && (inst_9470);
var state_9491__$1 = state_9491;
var statearr_9541_9596 = state_9491__$1;
(statearr_9541_9596[(2)] = inst_9471);

(statearr_9541_9596[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (10))){
var inst_9397 = (state_9491[(8)]);
var inst_9417 = (state_9491[(2)]);
var inst_9418 = cljs.core.get.call(null,inst_9417,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9419 = cljs.core.get.call(null,inst_9417,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9420 = cljs.core.get.call(null,inst_9417,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_9421 = inst_9397;
var state_9491__$1 = (function (){var statearr_9542 = state_9491;
(statearr_9542[(16)] = inst_9418);

(statearr_9542[(7)] = inst_9421);

(statearr_9542[(17)] = inst_9419);

(statearr_9542[(18)] = inst_9420);

return statearr_9542;
})();
var statearr_9543_9597 = state_9491__$1;
(statearr_9543_9597[(2)] = null);

(statearr_9543_9597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (18))){
var inst_9435 = (state_9491[(2)]);
var state_9491__$1 = state_9491;
var statearr_9544_9598 = state_9491__$1;
(statearr_9544_9598[(2)] = inst_9435);

(statearr_9544_9598[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (37))){
var state_9491__$1 = state_9491;
var statearr_9545_9599 = state_9491__$1;
(statearr_9545_9599[(2)] = null);

(statearr_9545_9599[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9492 === (8))){
var inst_9397 = (state_9491[(8)]);
var inst_9414 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9397);
var state_9491__$1 = state_9491;
var statearr_9546_9600 = state_9491__$1;
(statearr_9546_9600[(2)] = inst_9414);

(statearr_9546_9600[(1)] = (10));


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
});})(c__7841__auto___9554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7729__auto__,c__7841__auto___9554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7730__auto__ = null;
var cljs$core$async$mix_$_state_machine__7730__auto____0 = (function (){
var statearr_9550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9550[(0)] = cljs$core$async$mix_$_state_machine__7730__auto__);

(statearr_9550[(1)] = (1));

return statearr_9550;
});
var cljs$core$async$mix_$_state_machine__7730__auto____1 = (function (state_9491){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_9491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e9551){if((e9551 instanceof Object)){
var ex__7733__auto__ = e9551;
var statearr_9552_9601 = state_9491;
(statearr_9552_9601[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9602 = state_9491;
state_9491 = G__9602;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7730__auto__ = function(state_9491){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7730__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7730__auto____1.call(this,state_9491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7730__auto____0;
cljs$core$async$mix_$_state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7730__auto____1;
return cljs$core$async$mix_$_state_machine__7730__auto__;
})()
;})(switch__7729__auto__,c__7841__auto___9554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7843__auto__ = (function (){var statearr_9553 = f__7842__auto__.call(null);
(statearr_9553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto___9554);

return statearr_9553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(c__7841__auto___9554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5343__auto__ = (((p == null))?null:p);
var m__5344__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5344__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5343__auto__ = (((p == null))?null:p);
var m__5344__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,p,v,ch);
} else {
var m__5344__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args9603 = [];
var len__5746__auto___9606 = arguments.length;
var i__5747__auto___9607 = (0);
while(true){
if((i__5747__auto___9607 < len__5746__auto___9606)){
args9603.push((arguments[i__5747__auto___9607]));

var G__9608 = (i__5747__auto___9607 + (1));
i__5747__auto___9607 = G__9608;
continue;
} else {
}
break;
}

var G__9605 = args9603.length;
switch (G__9605) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9603.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5343__auto__ = (((p == null))?null:p);
var m__5344__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,p);
} else {
var m__5344__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5343__auto__ = (((p == null))?null:p);
var m__5344__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,p,v);
} else {
var m__5344__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args9611 = [];
var len__5746__auto___9736 = arguments.length;
var i__5747__auto___9737 = (0);
while(true){
if((i__5747__auto___9737 < len__5746__auto___9736)){
args9611.push((arguments[i__5747__auto___9737]));

var G__9738 = (i__5747__auto___9737 + (1));
i__5747__auto___9737 = G__9738;
continue;
} else {
}
break;
}

var G__9613 = args9611.length;
switch (G__9613) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9611.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4688__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4688__auto__,mults){
return (function (p1__9610_SHARP_){
if(cljs.core.truth_(p1__9610_SHARP_.call(null,topic))){
return p1__9610_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__9610_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4688__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async9614 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9614 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta9615){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta9615 = meta9615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_9616,meta9615__$1){
var self__ = this;
var _9616__$1 = this;
return (new cljs.core.async.t_cljs$core$async9614(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta9615__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_9616){
var self__ = this;
var _9616__$1 = this;
return self__.meta9615;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9614.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9614.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9614.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async9614.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9614.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9614.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9614.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9614.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta9615","meta9615",-1786105748,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9614.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9614";

cljs.core.async.t_cljs$core$async9614.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"cljs.core.async/t_cljs$core$async9614");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async9614 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async9614(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9615){
return (new cljs.core.async.t_cljs$core$async9614(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9615));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async9614(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7841__auto___9740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7841__auto___9740,mults,ensure_mult,p){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (c__7841__auto___9740,mults,ensure_mult,p){
return (function (state_9688){
var state_val_9689 = (state_9688[(1)]);
if((state_val_9689 === (7))){
var inst_9684 = (state_9688[(2)]);
var state_9688__$1 = state_9688;
var statearr_9690_9741 = state_9688__$1;
(statearr_9690_9741[(2)] = inst_9684);

(statearr_9690_9741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (20))){
var state_9688__$1 = state_9688;
var statearr_9691_9742 = state_9688__$1;
(statearr_9691_9742[(2)] = null);

(statearr_9691_9742[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (1))){
var state_9688__$1 = state_9688;
var statearr_9692_9743 = state_9688__$1;
(statearr_9692_9743[(2)] = null);

(statearr_9692_9743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (24))){
var inst_9667 = (state_9688[(7)]);
var inst_9676 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_9667);
var state_9688__$1 = state_9688;
var statearr_9693_9744 = state_9688__$1;
(statearr_9693_9744[(2)] = inst_9676);

(statearr_9693_9744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (4))){
var inst_9619 = (state_9688[(8)]);
var inst_9619__$1 = (state_9688[(2)]);
var inst_9620 = (inst_9619__$1 == null);
var state_9688__$1 = (function (){var statearr_9694 = state_9688;
(statearr_9694[(8)] = inst_9619__$1);

return statearr_9694;
})();
if(cljs.core.truth_(inst_9620)){
var statearr_9695_9745 = state_9688__$1;
(statearr_9695_9745[(1)] = (5));

} else {
var statearr_9696_9746 = state_9688__$1;
(statearr_9696_9746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (15))){
var inst_9661 = (state_9688[(2)]);
var state_9688__$1 = state_9688;
var statearr_9697_9747 = state_9688__$1;
(statearr_9697_9747[(2)] = inst_9661);

(statearr_9697_9747[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (21))){
var inst_9681 = (state_9688[(2)]);
var state_9688__$1 = (function (){var statearr_9698 = state_9688;
(statearr_9698[(9)] = inst_9681);

return statearr_9698;
})();
var statearr_9699_9748 = state_9688__$1;
(statearr_9699_9748[(2)] = null);

(statearr_9699_9748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (13))){
var inst_9643 = (state_9688[(10)]);
var inst_9645 = cljs.core.chunked_seq_QMARK_.call(null,inst_9643);
var state_9688__$1 = state_9688;
if(inst_9645){
var statearr_9700_9749 = state_9688__$1;
(statearr_9700_9749[(1)] = (16));

} else {
var statearr_9701_9750 = state_9688__$1;
(statearr_9701_9750[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (22))){
var inst_9673 = (state_9688[(2)]);
var state_9688__$1 = state_9688;
if(cljs.core.truth_(inst_9673)){
var statearr_9702_9751 = state_9688__$1;
(statearr_9702_9751[(1)] = (23));

} else {
var statearr_9703_9752 = state_9688__$1;
(statearr_9703_9752[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (6))){
var inst_9619 = (state_9688[(8)]);
var inst_9667 = (state_9688[(7)]);
var inst_9669 = (state_9688[(11)]);
var inst_9667__$1 = topic_fn.call(null,inst_9619);
var inst_9668 = cljs.core.deref.call(null,mults);
var inst_9669__$1 = cljs.core.get.call(null,inst_9668,inst_9667__$1);
var state_9688__$1 = (function (){var statearr_9704 = state_9688;
(statearr_9704[(7)] = inst_9667__$1);

(statearr_9704[(11)] = inst_9669__$1);

return statearr_9704;
})();
if(cljs.core.truth_(inst_9669__$1)){
var statearr_9705_9753 = state_9688__$1;
(statearr_9705_9753[(1)] = (19));

} else {
var statearr_9706_9754 = state_9688__$1;
(statearr_9706_9754[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (25))){
var inst_9678 = (state_9688[(2)]);
var state_9688__$1 = state_9688;
var statearr_9707_9755 = state_9688__$1;
(statearr_9707_9755[(2)] = inst_9678);

(statearr_9707_9755[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (17))){
var inst_9643 = (state_9688[(10)]);
var inst_9652 = cljs.core.first.call(null,inst_9643);
var inst_9653 = cljs.core.async.muxch_STAR_.call(null,inst_9652);
var inst_9654 = cljs.core.async.close_BANG_.call(null,inst_9653);
var inst_9655 = cljs.core.next.call(null,inst_9643);
var inst_9629 = inst_9655;
var inst_9630 = null;
var inst_9631 = (0);
var inst_9632 = (0);
var state_9688__$1 = (function (){var statearr_9708 = state_9688;
(statearr_9708[(12)] = inst_9631);

(statearr_9708[(13)] = inst_9632);

(statearr_9708[(14)] = inst_9629);

(statearr_9708[(15)] = inst_9630);

(statearr_9708[(16)] = inst_9654);

return statearr_9708;
})();
var statearr_9709_9756 = state_9688__$1;
(statearr_9709_9756[(2)] = null);

(statearr_9709_9756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (3))){
var inst_9686 = (state_9688[(2)]);
var state_9688__$1 = state_9688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9688__$1,inst_9686);
} else {
if((state_val_9689 === (12))){
var inst_9663 = (state_9688[(2)]);
var state_9688__$1 = state_9688;
var statearr_9710_9757 = state_9688__$1;
(statearr_9710_9757[(2)] = inst_9663);

(statearr_9710_9757[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (2))){
var state_9688__$1 = state_9688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9688__$1,(4),ch);
} else {
if((state_val_9689 === (23))){
var state_9688__$1 = state_9688;
var statearr_9711_9758 = state_9688__$1;
(statearr_9711_9758[(2)] = null);

(statearr_9711_9758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (19))){
var inst_9619 = (state_9688[(8)]);
var inst_9669 = (state_9688[(11)]);
var inst_9671 = cljs.core.async.muxch_STAR_.call(null,inst_9669);
var state_9688__$1 = state_9688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9688__$1,(22),inst_9671,inst_9619);
} else {
if((state_val_9689 === (11))){
var inst_9629 = (state_9688[(14)]);
var inst_9643 = (state_9688[(10)]);
var inst_9643__$1 = cljs.core.seq.call(null,inst_9629);
var state_9688__$1 = (function (){var statearr_9712 = state_9688;
(statearr_9712[(10)] = inst_9643__$1);

return statearr_9712;
})();
if(inst_9643__$1){
var statearr_9713_9759 = state_9688__$1;
(statearr_9713_9759[(1)] = (13));

} else {
var statearr_9714_9760 = state_9688__$1;
(statearr_9714_9760[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (9))){
var inst_9665 = (state_9688[(2)]);
var state_9688__$1 = state_9688;
var statearr_9715_9761 = state_9688__$1;
(statearr_9715_9761[(2)] = inst_9665);

(statearr_9715_9761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (5))){
var inst_9626 = cljs.core.deref.call(null,mults);
var inst_9627 = cljs.core.vals.call(null,inst_9626);
var inst_9628 = cljs.core.seq.call(null,inst_9627);
var inst_9629 = inst_9628;
var inst_9630 = null;
var inst_9631 = (0);
var inst_9632 = (0);
var state_9688__$1 = (function (){var statearr_9716 = state_9688;
(statearr_9716[(12)] = inst_9631);

(statearr_9716[(13)] = inst_9632);

(statearr_9716[(14)] = inst_9629);

(statearr_9716[(15)] = inst_9630);

return statearr_9716;
})();
var statearr_9717_9762 = state_9688__$1;
(statearr_9717_9762[(2)] = null);

(statearr_9717_9762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (14))){
var state_9688__$1 = state_9688;
var statearr_9721_9763 = state_9688__$1;
(statearr_9721_9763[(2)] = null);

(statearr_9721_9763[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (16))){
var inst_9643 = (state_9688[(10)]);
var inst_9647 = cljs.core.chunk_first.call(null,inst_9643);
var inst_9648 = cljs.core.chunk_rest.call(null,inst_9643);
var inst_9649 = cljs.core.count.call(null,inst_9647);
var inst_9629 = inst_9648;
var inst_9630 = inst_9647;
var inst_9631 = inst_9649;
var inst_9632 = (0);
var state_9688__$1 = (function (){var statearr_9722 = state_9688;
(statearr_9722[(12)] = inst_9631);

(statearr_9722[(13)] = inst_9632);

(statearr_9722[(14)] = inst_9629);

(statearr_9722[(15)] = inst_9630);

return statearr_9722;
})();
var statearr_9723_9764 = state_9688__$1;
(statearr_9723_9764[(2)] = null);

(statearr_9723_9764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (10))){
var inst_9631 = (state_9688[(12)]);
var inst_9632 = (state_9688[(13)]);
var inst_9629 = (state_9688[(14)]);
var inst_9630 = (state_9688[(15)]);
var inst_9637 = cljs.core._nth.call(null,inst_9630,inst_9632);
var inst_9638 = cljs.core.async.muxch_STAR_.call(null,inst_9637);
var inst_9639 = cljs.core.async.close_BANG_.call(null,inst_9638);
var inst_9640 = (inst_9632 + (1));
var tmp9718 = inst_9631;
var tmp9719 = inst_9629;
var tmp9720 = inst_9630;
var inst_9629__$1 = tmp9719;
var inst_9630__$1 = tmp9720;
var inst_9631__$1 = tmp9718;
var inst_9632__$1 = inst_9640;
var state_9688__$1 = (function (){var statearr_9724 = state_9688;
(statearr_9724[(12)] = inst_9631__$1);

(statearr_9724[(13)] = inst_9632__$1);

(statearr_9724[(14)] = inst_9629__$1);

(statearr_9724[(15)] = inst_9630__$1);

(statearr_9724[(17)] = inst_9639);

return statearr_9724;
})();
var statearr_9725_9765 = state_9688__$1;
(statearr_9725_9765[(2)] = null);

(statearr_9725_9765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (18))){
var inst_9658 = (state_9688[(2)]);
var state_9688__$1 = state_9688;
var statearr_9726_9766 = state_9688__$1;
(statearr_9726_9766[(2)] = inst_9658);

(statearr_9726_9766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (8))){
var inst_9631 = (state_9688[(12)]);
var inst_9632 = (state_9688[(13)]);
var inst_9634 = (inst_9632 < inst_9631);
var inst_9635 = inst_9634;
var state_9688__$1 = state_9688;
if(cljs.core.truth_(inst_9635)){
var statearr_9727_9767 = state_9688__$1;
(statearr_9727_9767[(1)] = (10));

} else {
var statearr_9728_9768 = state_9688__$1;
(statearr_9728_9768[(1)] = (11));

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
});})(c__7841__auto___9740,mults,ensure_mult,p))
;
return ((function (switch__7729__auto__,c__7841__auto___9740,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7730__auto__ = null;
var cljs$core$async$state_machine__7730__auto____0 = (function (){
var statearr_9732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9732[(0)] = cljs$core$async$state_machine__7730__auto__);

(statearr_9732[(1)] = (1));

return statearr_9732;
});
var cljs$core$async$state_machine__7730__auto____1 = (function (state_9688){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_9688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e9733){if((e9733 instanceof Object)){
var ex__7733__auto__ = e9733;
var statearr_9734_9769 = state_9688;
(statearr_9734_9769[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9770 = state_9688;
state_9688 = G__9770;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
cljs$core$async$state_machine__7730__auto__ = function(state_9688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7730__auto____1.call(this,state_9688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7730__auto____0;
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7730__auto____1;
return cljs$core$async$state_machine__7730__auto__;
})()
;})(switch__7729__auto__,c__7841__auto___9740,mults,ensure_mult,p))
})();
var state__7843__auto__ = (function (){var statearr_9735 = f__7842__auto__.call(null);
(statearr_9735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto___9740);

return statearr_9735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(c__7841__auto___9740,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args9771 = [];
var len__5746__auto___9774 = arguments.length;
var i__5747__auto___9775 = (0);
while(true){
if((i__5747__auto___9775 < len__5746__auto___9774)){
args9771.push((arguments[i__5747__auto___9775]));

var G__9776 = (i__5747__auto___9775 + (1));
i__5747__auto___9775 = G__9776;
continue;
} else {
}
break;
}

var G__9773 = args9771.length;
switch (G__9773) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9771.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args9778 = [];
var len__5746__auto___9781 = arguments.length;
var i__5747__auto___9782 = (0);
while(true){
if((i__5747__auto___9782 < len__5746__auto___9781)){
args9778.push((arguments[i__5747__auto___9782]));

var G__9783 = (i__5747__auto___9782 + (1));
i__5747__auto___9782 = G__9783;
continue;
} else {
}
break;
}

var G__9780 = args9778.length;
switch (G__9780) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9778.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args9785 = [];
var len__5746__auto___9856 = arguments.length;
var i__5747__auto___9857 = (0);
while(true){
if((i__5747__auto___9857 < len__5746__auto___9856)){
args9785.push((arguments[i__5747__auto___9857]));

var G__9858 = (i__5747__auto___9857 + (1));
i__5747__auto___9857 = G__9858;
continue;
} else {
}
break;
}

var G__9787 = args9785.length;
switch (G__9787) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9785.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7841__auto___9860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7841__auto___9860,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (c__7841__auto___9860,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_9826){
var state_val_9827 = (state_9826[(1)]);
if((state_val_9827 === (7))){
var state_9826__$1 = state_9826;
var statearr_9828_9861 = state_9826__$1;
(statearr_9828_9861[(2)] = null);

(statearr_9828_9861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (1))){
var state_9826__$1 = state_9826;
var statearr_9829_9862 = state_9826__$1;
(statearr_9829_9862[(2)] = null);

(statearr_9829_9862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (4))){
var inst_9790 = (state_9826[(7)]);
var inst_9792 = (inst_9790 < cnt);
var state_9826__$1 = state_9826;
if(cljs.core.truth_(inst_9792)){
var statearr_9830_9863 = state_9826__$1;
(statearr_9830_9863[(1)] = (6));

} else {
var statearr_9831_9864 = state_9826__$1;
(statearr_9831_9864[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (15))){
var inst_9822 = (state_9826[(2)]);
var state_9826__$1 = state_9826;
var statearr_9832_9865 = state_9826__$1;
(statearr_9832_9865[(2)] = inst_9822);

(statearr_9832_9865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (13))){
var inst_9815 = cljs.core.async.close_BANG_.call(null,out);
var state_9826__$1 = state_9826;
var statearr_9833_9866 = state_9826__$1;
(statearr_9833_9866[(2)] = inst_9815);

(statearr_9833_9866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (6))){
var state_9826__$1 = state_9826;
var statearr_9834_9867 = state_9826__$1;
(statearr_9834_9867[(2)] = null);

(statearr_9834_9867[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (3))){
var inst_9824 = (state_9826[(2)]);
var state_9826__$1 = state_9826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9826__$1,inst_9824);
} else {
if((state_val_9827 === (12))){
var inst_9812 = (state_9826[(8)]);
var inst_9812__$1 = (state_9826[(2)]);
var inst_9813 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_9812__$1);
var state_9826__$1 = (function (){var statearr_9835 = state_9826;
(statearr_9835[(8)] = inst_9812__$1);

return statearr_9835;
})();
if(cljs.core.truth_(inst_9813)){
var statearr_9836_9868 = state_9826__$1;
(statearr_9836_9868[(1)] = (13));

} else {
var statearr_9837_9869 = state_9826__$1;
(statearr_9837_9869[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (2))){
var inst_9789 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_9790 = (0);
var state_9826__$1 = (function (){var statearr_9838 = state_9826;
(statearr_9838[(9)] = inst_9789);

(statearr_9838[(7)] = inst_9790);

return statearr_9838;
})();
var statearr_9839_9870 = state_9826__$1;
(statearr_9839_9870[(2)] = null);

(statearr_9839_9870[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (11))){
var inst_9790 = (state_9826[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9826,(10),Object,null,(9));
var inst_9799 = chs__$1.call(null,inst_9790);
var inst_9800 = done.call(null,inst_9790);
var inst_9801 = cljs.core.async.take_BANG_.call(null,inst_9799,inst_9800);
var state_9826__$1 = state_9826;
var statearr_9840_9871 = state_9826__$1;
(statearr_9840_9871[(2)] = inst_9801);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9826__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (9))){
var inst_9790 = (state_9826[(7)]);
var inst_9803 = (state_9826[(2)]);
var inst_9804 = (inst_9790 + (1));
var inst_9790__$1 = inst_9804;
var state_9826__$1 = (function (){var statearr_9841 = state_9826;
(statearr_9841[(7)] = inst_9790__$1);

(statearr_9841[(10)] = inst_9803);

return statearr_9841;
})();
var statearr_9842_9872 = state_9826__$1;
(statearr_9842_9872[(2)] = null);

(statearr_9842_9872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (5))){
var inst_9810 = (state_9826[(2)]);
var state_9826__$1 = (function (){var statearr_9843 = state_9826;
(statearr_9843[(11)] = inst_9810);

return statearr_9843;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9826__$1,(12),dchan);
} else {
if((state_val_9827 === (14))){
var inst_9812 = (state_9826[(8)]);
var inst_9817 = cljs.core.apply.call(null,f,inst_9812);
var state_9826__$1 = state_9826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9826__$1,(16),out,inst_9817);
} else {
if((state_val_9827 === (16))){
var inst_9819 = (state_9826[(2)]);
var state_9826__$1 = (function (){var statearr_9844 = state_9826;
(statearr_9844[(12)] = inst_9819);

return statearr_9844;
})();
var statearr_9845_9873 = state_9826__$1;
(statearr_9845_9873[(2)] = null);

(statearr_9845_9873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (10))){
var inst_9794 = (state_9826[(2)]);
var inst_9795 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_9826__$1 = (function (){var statearr_9846 = state_9826;
(statearr_9846[(13)] = inst_9794);

return statearr_9846;
})();
var statearr_9847_9874 = state_9826__$1;
(statearr_9847_9874[(2)] = inst_9795);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9826__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (8))){
var inst_9808 = (state_9826[(2)]);
var state_9826__$1 = state_9826;
var statearr_9848_9875 = state_9826__$1;
(statearr_9848_9875[(2)] = inst_9808);

(statearr_9848_9875[(1)] = (5));


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
});})(c__7841__auto___9860,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7729__auto__,c__7841__auto___9860,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7730__auto__ = null;
var cljs$core$async$state_machine__7730__auto____0 = (function (){
var statearr_9852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9852[(0)] = cljs$core$async$state_machine__7730__auto__);

(statearr_9852[(1)] = (1));

return statearr_9852;
});
var cljs$core$async$state_machine__7730__auto____1 = (function (state_9826){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_9826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e9853){if((e9853 instanceof Object)){
var ex__7733__auto__ = e9853;
var statearr_9854_9876 = state_9826;
(statearr_9854_9876[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9877 = state_9826;
state_9826 = G__9877;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
cljs$core$async$state_machine__7730__auto__ = function(state_9826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7730__auto____1.call(this,state_9826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7730__auto____0;
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7730__auto____1;
return cljs$core$async$state_machine__7730__auto__;
})()
;})(switch__7729__auto__,c__7841__auto___9860,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7843__auto__ = (function (){var statearr_9855 = f__7842__auto__.call(null);
(statearr_9855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto___9860);

return statearr_9855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(c__7841__auto___9860,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args9879 = [];
var len__5746__auto___9935 = arguments.length;
var i__5747__auto___9936 = (0);
while(true){
if((i__5747__auto___9936 < len__5746__auto___9935)){
args9879.push((arguments[i__5747__auto___9936]));

var G__9937 = (i__5747__auto___9936 + (1));
i__5747__auto___9936 = G__9937;
continue;
} else {
}
break;
}

var G__9881 = args9879.length;
switch (G__9881) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9879.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7841__auto___9939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7841__auto___9939,out){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (c__7841__auto___9939,out){
return (function (state_9911){
var state_val_9912 = (state_9911[(1)]);
if((state_val_9912 === (7))){
var inst_9890 = (state_9911[(7)]);
var inst_9891 = (state_9911[(8)]);
var inst_9890__$1 = (state_9911[(2)]);
var inst_9891__$1 = cljs.core.nth.call(null,inst_9890__$1,(0),null);
var inst_9892 = cljs.core.nth.call(null,inst_9890__$1,(1),null);
var inst_9893 = (inst_9891__$1 == null);
var state_9911__$1 = (function (){var statearr_9913 = state_9911;
(statearr_9913[(7)] = inst_9890__$1);

(statearr_9913[(9)] = inst_9892);

(statearr_9913[(8)] = inst_9891__$1);

return statearr_9913;
})();
if(cljs.core.truth_(inst_9893)){
var statearr_9914_9940 = state_9911__$1;
(statearr_9914_9940[(1)] = (8));

} else {
var statearr_9915_9941 = state_9911__$1;
(statearr_9915_9941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9912 === (1))){
var inst_9882 = cljs.core.vec.call(null,chs);
var inst_9883 = inst_9882;
var state_9911__$1 = (function (){var statearr_9916 = state_9911;
(statearr_9916[(10)] = inst_9883);

return statearr_9916;
})();
var statearr_9917_9942 = state_9911__$1;
(statearr_9917_9942[(2)] = null);

(statearr_9917_9942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9912 === (4))){
var inst_9883 = (state_9911[(10)]);
var state_9911__$1 = state_9911;
return cljs.core.async.ioc_alts_BANG_.call(null,state_9911__$1,(7),inst_9883);
} else {
if((state_val_9912 === (6))){
var inst_9907 = (state_9911[(2)]);
var state_9911__$1 = state_9911;
var statearr_9918_9943 = state_9911__$1;
(statearr_9918_9943[(2)] = inst_9907);

(statearr_9918_9943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9912 === (3))){
var inst_9909 = (state_9911[(2)]);
var state_9911__$1 = state_9911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9911__$1,inst_9909);
} else {
if((state_val_9912 === (2))){
var inst_9883 = (state_9911[(10)]);
var inst_9885 = cljs.core.count.call(null,inst_9883);
var inst_9886 = (inst_9885 > (0));
var state_9911__$1 = state_9911;
if(cljs.core.truth_(inst_9886)){
var statearr_9920_9944 = state_9911__$1;
(statearr_9920_9944[(1)] = (4));

} else {
var statearr_9921_9945 = state_9911__$1;
(statearr_9921_9945[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9912 === (11))){
var inst_9883 = (state_9911[(10)]);
var inst_9900 = (state_9911[(2)]);
var tmp9919 = inst_9883;
var inst_9883__$1 = tmp9919;
var state_9911__$1 = (function (){var statearr_9922 = state_9911;
(statearr_9922[(11)] = inst_9900);

(statearr_9922[(10)] = inst_9883__$1);

return statearr_9922;
})();
var statearr_9923_9946 = state_9911__$1;
(statearr_9923_9946[(2)] = null);

(statearr_9923_9946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9912 === (9))){
var inst_9891 = (state_9911[(8)]);
var state_9911__$1 = state_9911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9911__$1,(11),out,inst_9891);
} else {
if((state_val_9912 === (5))){
var inst_9905 = cljs.core.async.close_BANG_.call(null,out);
var state_9911__$1 = state_9911;
var statearr_9924_9947 = state_9911__$1;
(statearr_9924_9947[(2)] = inst_9905);

(statearr_9924_9947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9912 === (10))){
var inst_9903 = (state_9911[(2)]);
var state_9911__$1 = state_9911;
var statearr_9925_9948 = state_9911__$1;
(statearr_9925_9948[(2)] = inst_9903);

(statearr_9925_9948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9912 === (8))){
var inst_9890 = (state_9911[(7)]);
var inst_9892 = (state_9911[(9)]);
var inst_9883 = (state_9911[(10)]);
var inst_9891 = (state_9911[(8)]);
var inst_9895 = (function (){var cs = inst_9883;
var vec__9888 = inst_9890;
var v = inst_9891;
var c = inst_9892;
return ((function (cs,vec__9888,v,c,inst_9890,inst_9892,inst_9883,inst_9891,state_val_9912,c__7841__auto___9939,out){
return (function (p1__9878_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__9878_SHARP_);
});
;})(cs,vec__9888,v,c,inst_9890,inst_9892,inst_9883,inst_9891,state_val_9912,c__7841__auto___9939,out))
})();
var inst_9896 = cljs.core.filterv.call(null,inst_9895,inst_9883);
var inst_9883__$1 = inst_9896;
var state_9911__$1 = (function (){var statearr_9926 = state_9911;
(statearr_9926[(10)] = inst_9883__$1);

return statearr_9926;
})();
var statearr_9927_9949 = state_9911__$1;
(statearr_9927_9949[(2)] = null);

(statearr_9927_9949[(1)] = (2));


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
});})(c__7841__auto___9939,out))
;
return ((function (switch__7729__auto__,c__7841__auto___9939,out){
return (function() {
var cljs$core$async$state_machine__7730__auto__ = null;
var cljs$core$async$state_machine__7730__auto____0 = (function (){
var statearr_9931 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9931[(0)] = cljs$core$async$state_machine__7730__auto__);

(statearr_9931[(1)] = (1));

return statearr_9931;
});
var cljs$core$async$state_machine__7730__auto____1 = (function (state_9911){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_9911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e9932){if((e9932 instanceof Object)){
var ex__7733__auto__ = e9932;
var statearr_9933_9950 = state_9911;
(statearr_9933_9950[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9951 = state_9911;
state_9911 = G__9951;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
cljs$core$async$state_machine__7730__auto__ = function(state_9911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7730__auto____1.call(this,state_9911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7730__auto____0;
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7730__auto____1;
return cljs$core$async$state_machine__7730__auto__;
})()
;})(switch__7729__auto__,c__7841__auto___9939,out))
})();
var state__7843__auto__ = (function (){var statearr_9934 = f__7842__auto__.call(null);
(statearr_9934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto___9939);

return statearr_9934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(c__7841__auto___9939,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args9952 = [];
var len__5746__auto___10001 = arguments.length;
var i__5747__auto___10002 = (0);
while(true){
if((i__5747__auto___10002 < len__5746__auto___10001)){
args9952.push((arguments[i__5747__auto___10002]));

var G__10003 = (i__5747__auto___10002 + (1));
i__5747__auto___10002 = G__10003;
continue;
} else {
}
break;
}

var G__9954 = args9952.length;
switch (G__9954) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9952.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7841__auto___10005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7841__auto___10005,out){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (c__7841__auto___10005,out){
return (function (state_9978){
var state_val_9979 = (state_9978[(1)]);
if((state_val_9979 === (7))){
var inst_9960 = (state_9978[(7)]);
var inst_9960__$1 = (state_9978[(2)]);
var inst_9961 = (inst_9960__$1 == null);
var inst_9962 = cljs.core.not.call(null,inst_9961);
var state_9978__$1 = (function (){var statearr_9980 = state_9978;
(statearr_9980[(7)] = inst_9960__$1);

return statearr_9980;
})();
if(inst_9962){
var statearr_9981_10006 = state_9978__$1;
(statearr_9981_10006[(1)] = (8));

} else {
var statearr_9982_10007 = state_9978__$1;
(statearr_9982_10007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9979 === (1))){
var inst_9955 = (0);
var state_9978__$1 = (function (){var statearr_9983 = state_9978;
(statearr_9983[(8)] = inst_9955);

return statearr_9983;
})();
var statearr_9984_10008 = state_9978__$1;
(statearr_9984_10008[(2)] = null);

(statearr_9984_10008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9979 === (4))){
var state_9978__$1 = state_9978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9978__$1,(7),ch);
} else {
if((state_val_9979 === (6))){
var inst_9973 = (state_9978[(2)]);
var state_9978__$1 = state_9978;
var statearr_9985_10009 = state_9978__$1;
(statearr_9985_10009[(2)] = inst_9973);

(statearr_9985_10009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9979 === (3))){
var inst_9975 = (state_9978[(2)]);
var inst_9976 = cljs.core.async.close_BANG_.call(null,out);
var state_9978__$1 = (function (){var statearr_9986 = state_9978;
(statearr_9986[(9)] = inst_9975);

return statearr_9986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9978__$1,inst_9976);
} else {
if((state_val_9979 === (2))){
var inst_9955 = (state_9978[(8)]);
var inst_9957 = (inst_9955 < n);
var state_9978__$1 = state_9978;
if(cljs.core.truth_(inst_9957)){
var statearr_9987_10010 = state_9978__$1;
(statearr_9987_10010[(1)] = (4));

} else {
var statearr_9988_10011 = state_9978__$1;
(statearr_9988_10011[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9979 === (11))){
var inst_9955 = (state_9978[(8)]);
var inst_9965 = (state_9978[(2)]);
var inst_9966 = (inst_9955 + (1));
var inst_9955__$1 = inst_9966;
var state_9978__$1 = (function (){var statearr_9989 = state_9978;
(statearr_9989[(8)] = inst_9955__$1);

(statearr_9989[(10)] = inst_9965);

return statearr_9989;
})();
var statearr_9990_10012 = state_9978__$1;
(statearr_9990_10012[(2)] = null);

(statearr_9990_10012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9979 === (9))){
var state_9978__$1 = state_9978;
var statearr_9991_10013 = state_9978__$1;
(statearr_9991_10013[(2)] = null);

(statearr_9991_10013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9979 === (5))){
var state_9978__$1 = state_9978;
var statearr_9992_10014 = state_9978__$1;
(statearr_9992_10014[(2)] = null);

(statearr_9992_10014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9979 === (10))){
var inst_9970 = (state_9978[(2)]);
var state_9978__$1 = state_9978;
var statearr_9993_10015 = state_9978__$1;
(statearr_9993_10015[(2)] = inst_9970);

(statearr_9993_10015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9979 === (8))){
var inst_9960 = (state_9978[(7)]);
var state_9978__$1 = state_9978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9978__$1,(11),out,inst_9960);
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
});})(c__7841__auto___10005,out))
;
return ((function (switch__7729__auto__,c__7841__auto___10005,out){
return (function() {
var cljs$core$async$state_machine__7730__auto__ = null;
var cljs$core$async$state_machine__7730__auto____0 = (function (){
var statearr_9997 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9997[(0)] = cljs$core$async$state_machine__7730__auto__);

(statearr_9997[(1)] = (1));

return statearr_9997;
});
var cljs$core$async$state_machine__7730__auto____1 = (function (state_9978){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_9978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e9998){if((e9998 instanceof Object)){
var ex__7733__auto__ = e9998;
var statearr_9999_10016 = state_9978;
(statearr_9999_10016[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10017 = state_9978;
state_9978 = G__10017;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
cljs$core$async$state_machine__7730__auto__ = function(state_9978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7730__auto____1.call(this,state_9978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7730__auto____0;
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7730__auto____1;
return cljs$core$async$state_machine__7730__auto__;
})()
;})(switch__7729__auto__,c__7841__auto___10005,out))
})();
var state__7843__auto__ = (function (){var statearr_10000 = f__7842__auto__.call(null);
(statearr_10000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto___10005);

return statearr_10000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(c__7841__auto___10005,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async10025 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10025 = (function (map_LT_,f,ch,meta10026){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10026 = meta10026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10027,meta10026__$1){
var self__ = this;
var _10027__$1 = this;
return (new cljs.core.async.t_cljs$core$async10025(self__.map_LT_,self__.f,self__.ch,meta10026__$1));
});

cljs.core.async.t_cljs$core$async10025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10027){
var self__ = this;
var _10027__$1 = this;
return self__.meta10026;
});

cljs.core.async.t_cljs$core$async10025.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10025.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10025.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10025.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10025.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async10028 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10028 = (function (map_LT_,f,ch,meta10026,_,fn1,meta10029){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10026 = meta10026;
this._ = _;
this.fn1 = fn1;
this.meta10029 = meta10029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10030,meta10029__$1){
var self__ = this;
var _10030__$1 = this;
return (new cljs.core.async.t_cljs$core$async10028(self__.map_LT_,self__.f,self__.ch,self__.meta10026,self__._,self__.fn1,meta10029__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async10028.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10030){
var self__ = this;
var _10030__$1 = this;
return self__.meta10029;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10028.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10028.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__10018_SHARP_){
return f1.call(null,(((p1__10018_SHARP_ == null))?null:self__.f.call(null,p1__10018_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async10028.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10026","meta10026",1415132274,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async10025","cljs.core.async/t_cljs$core$async10025",-1820039921,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta10029","meta10029",-1178455733,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10028.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10028";

cljs.core.async.t_cljs$core$async10028.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"cljs.core.async/t_cljs$core$async10028");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async10028 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10028(map_LT___$1,f__$1,ch__$1,meta10026__$1,___$2,fn1__$1,meta10029){
return (new cljs.core.async.t_cljs$core$async10028(map_LT___$1,f__$1,ch__$1,meta10026__$1,___$2,fn1__$1,meta10029));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async10028(self__.map_LT_,self__.f,self__.ch,self__.meta10026,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4676__auto__ = ret;
if(cljs.core.truth_(and__4676__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4676__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async10025.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10025.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async10025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10026","meta10026",1415132274,null)], null);
});

cljs.core.async.t_cljs$core$async10025.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10025";

cljs.core.async.t_cljs$core$async10025.cljs$lang$ctorPrWriter = (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"cljs.core.async/t_cljs$core$async10025");
});

cljs.core.async.__GT_t_cljs$core$async10025 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10025(map_LT___$1,f__$1,ch__$1,meta10026){
return (new cljs.core.async.t_cljs$core$async10025(map_LT___$1,f__$1,ch__$1,meta10026));
});

}

return (new cljs.core.async.t_cljs$core$async10025(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async10034 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10034 = (function (map_GT_,f,ch,meta10035){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta10035 = meta10035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10036,meta10035__$1){
var self__ = this;
var _10036__$1 = this;
return (new cljs.core.async.t_cljs$core$async10034(self__.map_GT_,self__.f,self__.ch,meta10035__$1));
});

cljs.core.async.t_cljs$core$async10034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10036){
var self__ = this;
var _10036__$1 = this;
return self__.meta10035;
});

cljs.core.async.t_cljs$core$async10034.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10034.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10034.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10034.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10034.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10034.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async10034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10035","meta10035",766647287,null)], null);
});

cljs.core.async.t_cljs$core$async10034.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10034";

cljs.core.async.t_cljs$core$async10034.cljs$lang$ctorPrWriter = (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"cljs.core.async/t_cljs$core$async10034");
});

cljs.core.async.__GT_t_cljs$core$async10034 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async10034(map_GT___$1,f__$1,ch__$1,meta10035){
return (new cljs.core.async.t_cljs$core$async10034(map_GT___$1,f__$1,ch__$1,meta10035));
});

}

return (new cljs.core.async.t_cljs$core$async10034(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async10040 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10040 = (function (filter_GT_,p,ch,meta10041){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta10041 = meta10041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10042,meta10041__$1){
var self__ = this;
var _10042__$1 = this;
return (new cljs.core.async.t_cljs$core$async10040(self__.filter_GT_,self__.p,self__.ch,meta10041__$1));
});

cljs.core.async.t_cljs$core$async10040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10042){
var self__ = this;
var _10042__$1 = this;
return self__.meta10041;
});

cljs.core.async.t_cljs$core$async10040.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10040.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10040.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10040.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10040.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10040.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10040.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async10040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10041","meta10041",-297925372,null)], null);
});

cljs.core.async.t_cljs$core$async10040.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10040";

cljs.core.async.t_cljs$core$async10040.cljs$lang$ctorPrWriter = (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"cljs.core.async/t_cljs$core$async10040");
});

cljs.core.async.__GT_t_cljs$core$async10040 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async10040(filter_GT___$1,p__$1,ch__$1,meta10041){
return (new cljs.core.async.t_cljs$core$async10040(filter_GT___$1,p__$1,ch__$1,meta10041));
});

}

return (new cljs.core.async.t_cljs$core$async10040(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args10043 = [];
var len__5746__auto___10087 = arguments.length;
var i__5747__auto___10088 = (0);
while(true){
if((i__5747__auto___10088 < len__5746__auto___10087)){
args10043.push((arguments[i__5747__auto___10088]));

var G__10089 = (i__5747__auto___10088 + (1));
i__5747__auto___10088 = G__10089;
continue;
} else {
}
break;
}

var G__10045 = args10043.length;
switch (G__10045) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10043.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7841__auto___10091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7841__auto___10091,out){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (c__7841__auto___10091,out){
return (function (state_10066){
var state_val_10067 = (state_10066[(1)]);
if((state_val_10067 === (7))){
var inst_10062 = (state_10066[(2)]);
var state_10066__$1 = state_10066;
var statearr_10068_10092 = state_10066__$1;
(statearr_10068_10092[(2)] = inst_10062);

(statearr_10068_10092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (1))){
var state_10066__$1 = state_10066;
var statearr_10069_10093 = state_10066__$1;
(statearr_10069_10093[(2)] = null);

(statearr_10069_10093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (4))){
var inst_10048 = (state_10066[(7)]);
var inst_10048__$1 = (state_10066[(2)]);
var inst_10049 = (inst_10048__$1 == null);
var state_10066__$1 = (function (){var statearr_10070 = state_10066;
(statearr_10070[(7)] = inst_10048__$1);

return statearr_10070;
})();
if(cljs.core.truth_(inst_10049)){
var statearr_10071_10094 = state_10066__$1;
(statearr_10071_10094[(1)] = (5));

} else {
var statearr_10072_10095 = state_10066__$1;
(statearr_10072_10095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (6))){
var inst_10048 = (state_10066[(7)]);
var inst_10053 = p.call(null,inst_10048);
var state_10066__$1 = state_10066;
if(cljs.core.truth_(inst_10053)){
var statearr_10073_10096 = state_10066__$1;
(statearr_10073_10096[(1)] = (8));

} else {
var statearr_10074_10097 = state_10066__$1;
(statearr_10074_10097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (3))){
var inst_10064 = (state_10066[(2)]);
var state_10066__$1 = state_10066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10066__$1,inst_10064);
} else {
if((state_val_10067 === (2))){
var state_10066__$1 = state_10066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10066__$1,(4),ch);
} else {
if((state_val_10067 === (11))){
var inst_10056 = (state_10066[(2)]);
var state_10066__$1 = state_10066;
var statearr_10075_10098 = state_10066__$1;
(statearr_10075_10098[(2)] = inst_10056);

(statearr_10075_10098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (9))){
var state_10066__$1 = state_10066;
var statearr_10076_10099 = state_10066__$1;
(statearr_10076_10099[(2)] = null);

(statearr_10076_10099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (5))){
var inst_10051 = cljs.core.async.close_BANG_.call(null,out);
var state_10066__$1 = state_10066;
var statearr_10077_10100 = state_10066__$1;
(statearr_10077_10100[(2)] = inst_10051);

(statearr_10077_10100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (10))){
var inst_10059 = (state_10066[(2)]);
var state_10066__$1 = (function (){var statearr_10078 = state_10066;
(statearr_10078[(8)] = inst_10059);

return statearr_10078;
})();
var statearr_10079_10101 = state_10066__$1;
(statearr_10079_10101[(2)] = null);

(statearr_10079_10101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (8))){
var inst_10048 = (state_10066[(7)]);
var state_10066__$1 = state_10066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10066__$1,(11),out,inst_10048);
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
});})(c__7841__auto___10091,out))
;
return ((function (switch__7729__auto__,c__7841__auto___10091,out){
return (function() {
var cljs$core$async$state_machine__7730__auto__ = null;
var cljs$core$async$state_machine__7730__auto____0 = (function (){
var statearr_10083 = [null,null,null,null,null,null,null,null,null];
(statearr_10083[(0)] = cljs$core$async$state_machine__7730__auto__);

(statearr_10083[(1)] = (1));

return statearr_10083;
});
var cljs$core$async$state_machine__7730__auto____1 = (function (state_10066){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_10066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e10084){if((e10084 instanceof Object)){
var ex__7733__auto__ = e10084;
var statearr_10085_10102 = state_10066;
(statearr_10085_10102[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10103 = state_10066;
state_10066 = G__10103;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
cljs$core$async$state_machine__7730__auto__ = function(state_10066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7730__auto____1.call(this,state_10066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7730__auto____0;
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7730__auto____1;
return cljs$core$async$state_machine__7730__auto__;
})()
;})(switch__7729__auto__,c__7841__auto___10091,out))
})();
var state__7843__auto__ = (function (){var statearr_10086 = f__7842__auto__.call(null);
(statearr_10086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto___10091);

return statearr_10086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(c__7841__auto___10091,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args10104 = [];
var len__5746__auto___10107 = arguments.length;
var i__5747__auto___10108 = (0);
while(true){
if((i__5747__auto___10108 < len__5746__auto___10107)){
args10104.push((arguments[i__5747__auto___10108]));

var G__10109 = (i__5747__auto___10108 + (1));
i__5747__auto___10108 = G__10109;
continue;
} else {
}
break;
}

var G__10106 = args10104.length;
switch (G__10106) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10104.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7841__auto__){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (c__7841__auto__){
return (function (state_10276){
var state_val_10277 = (state_10276[(1)]);
if((state_val_10277 === (7))){
var inst_10272 = (state_10276[(2)]);
var state_10276__$1 = state_10276;
var statearr_10278_10319 = state_10276__$1;
(statearr_10278_10319[(2)] = inst_10272);

(statearr_10278_10319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10277 === (20))){
var inst_10242 = (state_10276[(7)]);
var inst_10253 = (state_10276[(2)]);
var inst_10254 = cljs.core.next.call(null,inst_10242);
var inst_10228 = inst_10254;
var inst_10229 = null;
var inst_10230 = (0);
var inst_10231 = (0);
var state_10276__$1 = (function (){var statearr_10279 = state_10276;
(statearr_10279[(8)] = inst_10228);

(statearr_10279[(9)] = inst_10253);

(statearr_10279[(10)] = inst_10230);

(statearr_10279[(11)] = inst_10231);

(statearr_10279[(12)] = inst_10229);

return statearr_10279;
})();
var statearr_10280_10320 = state_10276__$1;
(statearr_10280_10320[(2)] = null);

(statearr_10280_10320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10277 === (1))){
var state_10276__$1 = state_10276;
var statearr_10281_10321 = state_10276__$1;
(statearr_10281_10321[(2)] = null);

(statearr_10281_10321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10277 === (4))){
var inst_10217 = (state_10276[(13)]);
var inst_10217__$1 = (state_10276[(2)]);
var inst_10218 = (inst_10217__$1 == null);
var state_10276__$1 = (function (){var statearr_10282 = state_10276;
(statearr_10282[(13)] = inst_10217__$1);

return statearr_10282;
})();
if(cljs.core.truth_(inst_10218)){
var statearr_10283_10322 = state_10276__$1;
(statearr_10283_10322[(1)] = (5));

} else {
var statearr_10284_10323 = state_10276__$1;
(statearr_10284_10323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10277 === (15))){
var state_10276__$1 = state_10276;
var statearr_10288_10324 = state_10276__$1;
(statearr_10288_10324[(2)] = null);

(statearr_10288_10324[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10277 === (21))){
var state_10276__$1 = state_10276;
var statearr_10289_10325 = state_10276__$1;
(statearr_10289_10325[(2)] = null);

(statearr_10289_10325[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10277 === (13))){
var inst_10228 = (state_10276[(8)]);
var inst_10230 = (state_10276[(10)]);
var inst_10231 = (state_10276[(11)]);
var inst_10229 = (state_10276[(12)]);
var inst_10238 = (state_10276[(2)]);
var inst_10239 = (inst_10231 + (1));
var tmp10285 = inst_10228;
var tmp10286 = inst_10230;
var tmp10287 = inst_10229;
var inst_10228__$1 = tmp10285;
var inst_10229__$1 = tmp10287;
var inst_10230__$1 = tmp10286;
var inst_10231__$1 = inst_10239;
var state_10276__$1 = (function (){var statearr_10290 = state_10276;
(statearr_10290[(14)] = inst_10238);

(statearr_10290[(8)] = inst_10228__$1);

(statearr_10290[(10)] = inst_10230__$1);

(statearr_10290[(11)] = inst_10231__$1);

(statearr_10290[(12)] = inst_10229__$1);

return statearr_10290;
})();
var statearr_10291_10326 = state_10276__$1;
(statearr_10291_10326[(2)] = null);

(statearr_10291_10326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10277 === (22))){
var state_10276__$1 = state_10276;
var statearr_10292_10327 = state_10276__$1;
(statearr_10292_10327[(2)] = null);

(statearr_10292_10327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10277 === (6))){
var inst_10217 = (state_10276[(13)]);
var inst_10226 = f.call(null,inst_10217);
var inst_10227 = cljs.core.seq.call(null,inst_10226);
var inst_10228 = inst_10227;
var inst_10229 = null;
var inst_10230 = (0);
var inst_10231 = (0);
var state_10276__$1 = (function (){var statearr_10293 = state_10276;
(statearr_10293[(8)] = inst_10228);

(statearr_10293[(10)] = inst_10230);

(statearr_10293[(11)] = inst_10231);

(statearr_10293[(12)] = inst_10229);

return statearr_10293;
})();
var statearr_10294_10328 = state_10276__$1;
(statearr_10294_10328[(2)] = null);

(statearr_10294_10328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10277 === (17))){
var inst_10242 = (state_10276[(7)]);
var inst_10246 = cljs.core.chunk_first.call(null,inst_10242);
var inst_10247 = cljs.core.chunk_rest.call(null,inst_10242);
var inst_10248 = cljs.core.count.call(null,inst_10246);
var inst_10228 = inst_10247;
var inst_10229 = inst_10246;
var inst_10230 = inst_10248;
var inst_10231 = (0);
var state_10276__$1 = (function (){var statearr_10295 = state_10276;
(statearr_10295[(8)] = inst_10228);

(statearr_10295[(10)] = inst_10230);

(statearr_10295[(11)] = inst_10231);

(statearr_10295[(12)] = inst_10229);

return statearr_10295;
})();
var statearr_10296_10329 = state_10276__$1;
(statearr_10296_10329[(2)] = null);

(statearr_10296_10329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10277 === (3))){
var inst_10274 = (state_10276[(2)]);
var state_10276__$1 = state_10276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10276__$1,inst_10274);
} else {
if((state_val_10277 === (12))){
var inst_10262 = (state_10276[(2)]);
var state_10276__$1 = state_10276;
var statearr_10297_10330 = state_10276__$1;
(statearr_10297_10330[(2)] = inst_10262);

(statearr_10297_10330[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10277 === (2))){
var state_10276__$1 = state_10276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10276__$1,(4),in$);
} else {
if((state_val_10277 === (23))){
var inst_10270 = (state_10276[(2)]);
var state_10276__$1 = state_10276;
var statearr_10298_10331 = state_10276__$1;
(statearr_10298_10331[(2)] = inst_10270);

(statearr_10298_10331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10277 === (19))){
var inst_10257 = (state_10276[(2)]);
var state_10276__$1 = state_10276;
var statearr_10299_10332 = state_10276__$1;
(statearr_10299_10332[(2)] = inst_10257);

(statearr_10299_10332[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10277 === (11))){
var inst_10228 = (state_10276[(8)]);
var inst_10242 = (state_10276[(7)]);
var inst_10242__$1 = cljs.core.seq.call(null,inst_10228);
var state_10276__$1 = (function (){var statearr_10300 = state_10276;
(statearr_10300[(7)] = inst_10242__$1);

return statearr_10300;
})();
if(inst_10242__$1){
var statearr_10301_10333 = state_10276__$1;
(statearr_10301_10333[(1)] = (14));

} else {
var statearr_10302_10334 = state_10276__$1;
(statearr_10302_10334[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10277 === (9))){
var inst_10264 = (state_10276[(2)]);
var inst_10265 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_10276__$1 = (function (){var statearr_10303 = state_10276;
(statearr_10303[(15)] = inst_10264);

return statearr_10303;
})();
if(cljs.core.truth_(inst_10265)){
var statearr_10304_10335 = state_10276__$1;
(statearr_10304_10335[(1)] = (21));

} else {
var statearr_10305_10336 = state_10276__$1;
(statearr_10305_10336[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10277 === (5))){
var inst_10220 = cljs.core.async.close_BANG_.call(null,out);
var state_10276__$1 = state_10276;
var statearr_10306_10337 = state_10276__$1;
(statearr_10306_10337[(2)] = inst_10220);

(statearr_10306_10337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10277 === (14))){
var inst_10242 = (state_10276[(7)]);
var inst_10244 = cljs.core.chunked_seq_QMARK_.call(null,inst_10242);
var state_10276__$1 = state_10276;
if(inst_10244){
var statearr_10307_10338 = state_10276__$1;
(statearr_10307_10338[(1)] = (17));

} else {
var statearr_10308_10339 = state_10276__$1;
(statearr_10308_10339[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10277 === (16))){
var inst_10260 = (state_10276[(2)]);
var state_10276__$1 = state_10276;
var statearr_10309_10340 = state_10276__$1;
(statearr_10309_10340[(2)] = inst_10260);

(statearr_10309_10340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10277 === (10))){
var inst_10231 = (state_10276[(11)]);
var inst_10229 = (state_10276[(12)]);
var inst_10236 = cljs.core._nth.call(null,inst_10229,inst_10231);
var state_10276__$1 = state_10276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10276__$1,(13),out,inst_10236);
} else {
if((state_val_10277 === (18))){
var inst_10242 = (state_10276[(7)]);
var inst_10251 = cljs.core.first.call(null,inst_10242);
var state_10276__$1 = state_10276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10276__$1,(20),out,inst_10251);
} else {
if((state_val_10277 === (8))){
var inst_10230 = (state_10276[(10)]);
var inst_10231 = (state_10276[(11)]);
var inst_10233 = (inst_10231 < inst_10230);
var inst_10234 = inst_10233;
var state_10276__$1 = state_10276;
if(cljs.core.truth_(inst_10234)){
var statearr_10310_10341 = state_10276__$1;
(statearr_10310_10341[(1)] = (10));

} else {
var statearr_10311_10342 = state_10276__$1;
(statearr_10311_10342[(1)] = (11));

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
});})(c__7841__auto__))
;
return ((function (switch__7729__auto__,c__7841__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7730__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7730__auto____0 = (function (){
var statearr_10315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10315[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7730__auto__);

(statearr_10315[(1)] = (1));

return statearr_10315;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7730__auto____1 = (function (state_10276){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_10276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e10316){if((e10316 instanceof Object)){
var ex__7733__auto__ = e10316;
var statearr_10317_10343 = state_10276;
(statearr_10317_10343[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10344 = state_10276;
state_10276 = G__10344;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7730__auto__ = function(state_10276){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7730__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7730__auto____1.call(this,state_10276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7730__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7730__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7730__auto__;
})()
;})(switch__7729__auto__,c__7841__auto__))
})();
var state__7843__auto__ = (function (){var statearr_10318 = f__7842__auto__.call(null);
(statearr_10318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto__);

return statearr_10318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(c__7841__auto__))
);

return c__7841__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args10345 = [];
var len__5746__auto___10348 = arguments.length;
var i__5747__auto___10349 = (0);
while(true){
if((i__5747__auto___10349 < len__5746__auto___10348)){
args10345.push((arguments[i__5747__auto___10349]));

var G__10350 = (i__5747__auto___10349 + (1));
i__5747__auto___10349 = G__10350;
continue;
} else {
}
break;
}

var G__10347 = args10345.length;
switch (G__10347) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10345.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args10352 = [];
var len__5746__auto___10355 = arguments.length;
var i__5747__auto___10356 = (0);
while(true){
if((i__5747__auto___10356 < len__5746__auto___10355)){
args10352.push((arguments[i__5747__auto___10356]));

var G__10357 = (i__5747__auto___10356 + (1));
i__5747__auto___10356 = G__10357;
continue;
} else {
}
break;
}

var G__10354 = args10352.length;
switch (G__10354) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10352.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args10359 = [];
var len__5746__auto___10410 = arguments.length;
var i__5747__auto___10411 = (0);
while(true){
if((i__5747__auto___10411 < len__5746__auto___10410)){
args10359.push((arguments[i__5747__auto___10411]));

var G__10412 = (i__5747__auto___10411 + (1));
i__5747__auto___10411 = G__10412;
continue;
} else {
}
break;
}

var G__10361 = args10359.length;
switch (G__10361) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10359.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7841__auto___10414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7841__auto___10414,out){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (c__7841__auto___10414,out){
return (function (state_10385){
var state_val_10386 = (state_10385[(1)]);
if((state_val_10386 === (7))){
var inst_10380 = (state_10385[(2)]);
var state_10385__$1 = state_10385;
var statearr_10387_10415 = state_10385__$1;
(statearr_10387_10415[(2)] = inst_10380);

(statearr_10387_10415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10386 === (1))){
var inst_10362 = null;
var state_10385__$1 = (function (){var statearr_10388 = state_10385;
(statearr_10388[(7)] = inst_10362);

return statearr_10388;
})();
var statearr_10389_10416 = state_10385__$1;
(statearr_10389_10416[(2)] = null);

(statearr_10389_10416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10386 === (4))){
var inst_10365 = (state_10385[(8)]);
var inst_10365__$1 = (state_10385[(2)]);
var inst_10366 = (inst_10365__$1 == null);
var inst_10367 = cljs.core.not.call(null,inst_10366);
var state_10385__$1 = (function (){var statearr_10390 = state_10385;
(statearr_10390[(8)] = inst_10365__$1);

return statearr_10390;
})();
if(inst_10367){
var statearr_10391_10417 = state_10385__$1;
(statearr_10391_10417[(1)] = (5));

} else {
var statearr_10392_10418 = state_10385__$1;
(statearr_10392_10418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10386 === (6))){
var state_10385__$1 = state_10385;
var statearr_10393_10419 = state_10385__$1;
(statearr_10393_10419[(2)] = null);

(statearr_10393_10419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10386 === (3))){
var inst_10382 = (state_10385[(2)]);
var inst_10383 = cljs.core.async.close_BANG_.call(null,out);
var state_10385__$1 = (function (){var statearr_10394 = state_10385;
(statearr_10394[(9)] = inst_10382);

return statearr_10394;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10385__$1,inst_10383);
} else {
if((state_val_10386 === (2))){
var state_10385__$1 = state_10385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10385__$1,(4),ch);
} else {
if((state_val_10386 === (11))){
var inst_10365 = (state_10385[(8)]);
var inst_10374 = (state_10385[(2)]);
var inst_10362 = inst_10365;
var state_10385__$1 = (function (){var statearr_10395 = state_10385;
(statearr_10395[(10)] = inst_10374);

(statearr_10395[(7)] = inst_10362);

return statearr_10395;
})();
var statearr_10396_10420 = state_10385__$1;
(statearr_10396_10420[(2)] = null);

(statearr_10396_10420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10386 === (9))){
var inst_10365 = (state_10385[(8)]);
var state_10385__$1 = state_10385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10385__$1,(11),out,inst_10365);
} else {
if((state_val_10386 === (5))){
var inst_10365 = (state_10385[(8)]);
var inst_10362 = (state_10385[(7)]);
var inst_10369 = cljs.core._EQ_.call(null,inst_10365,inst_10362);
var state_10385__$1 = state_10385;
if(inst_10369){
var statearr_10398_10421 = state_10385__$1;
(statearr_10398_10421[(1)] = (8));

} else {
var statearr_10399_10422 = state_10385__$1;
(statearr_10399_10422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10386 === (10))){
var inst_10377 = (state_10385[(2)]);
var state_10385__$1 = state_10385;
var statearr_10400_10423 = state_10385__$1;
(statearr_10400_10423[(2)] = inst_10377);

(statearr_10400_10423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10386 === (8))){
var inst_10362 = (state_10385[(7)]);
var tmp10397 = inst_10362;
var inst_10362__$1 = tmp10397;
var state_10385__$1 = (function (){var statearr_10401 = state_10385;
(statearr_10401[(7)] = inst_10362__$1);

return statearr_10401;
})();
var statearr_10402_10424 = state_10385__$1;
(statearr_10402_10424[(2)] = null);

(statearr_10402_10424[(1)] = (2));


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
});})(c__7841__auto___10414,out))
;
return ((function (switch__7729__auto__,c__7841__auto___10414,out){
return (function() {
var cljs$core$async$state_machine__7730__auto__ = null;
var cljs$core$async$state_machine__7730__auto____0 = (function (){
var statearr_10406 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10406[(0)] = cljs$core$async$state_machine__7730__auto__);

(statearr_10406[(1)] = (1));

return statearr_10406;
});
var cljs$core$async$state_machine__7730__auto____1 = (function (state_10385){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_10385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e10407){if((e10407 instanceof Object)){
var ex__7733__auto__ = e10407;
var statearr_10408_10425 = state_10385;
(statearr_10408_10425[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10426 = state_10385;
state_10385 = G__10426;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
cljs$core$async$state_machine__7730__auto__ = function(state_10385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7730__auto____1.call(this,state_10385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7730__auto____0;
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7730__auto____1;
return cljs$core$async$state_machine__7730__auto__;
})()
;})(switch__7729__auto__,c__7841__auto___10414,out))
})();
var state__7843__auto__ = (function (){var statearr_10409 = f__7842__auto__.call(null);
(statearr_10409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto___10414);

return statearr_10409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(c__7841__auto___10414,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args10427 = [];
var len__5746__auto___10497 = arguments.length;
var i__5747__auto___10498 = (0);
while(true){
if((i__5747__auto___10498 < len__5746__auto___10497)){
args10427.push((arguments[i__5747__auto___10498]));

var G__10499 = (i__5747__auto___10498 + (1));
i__5747__auto___10498 = G__10499;
continue;
} else {
}
break;
}

var G__10429 = args10427.length;
switch (G__10429) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10427.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7841__auto___10501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7841__auto___10501,out){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (c__7841__auto___10501,out){
return (function (state_10467){
var state_val_10468 = (state_10467[(1)]);
if((state_val_10468 === (7))){
var inst_10463 = (state_10467[(2)]);
var state_10467__$1 = state_10467;
var statearr_10469_10502 = state_10467__$1;
(statearr_10469_10502[(2)] = inst_10463);

(statearr_10469_10502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (1))){
var inst_10430 = (new Array(n));
var inst_10431 = inst_10430;
var inst_10432 = (0);
var state_10467__$1 = (function (){var statearr_10470 = state_10467;
(statearr_10470[(7)] = inst_10431);

(statearr_10470[(8)] = inst_10432);

return statearr_10470;
})();
var statearr_10471_10503 = state_10467__$1;
(statearr_10471_10503[(2)] = null);

(statearr_10471_10503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (4))){
var inst_10435 = (state_10467[(9)]);
var inst_10435__$1 = (state_10467[(2)]);
var inst_10436 = (inst_10435__$1 == null);
var inst_10437 = cljs.core.not.call(null,inst_10436);
var state_10467__$1 = (function (){var statearr_10472 = state_10467;
(statearr_10472[(9)] = inst_10435__$1);

return statearr_10472;
})();
if(inst_10437){
var statearr_10473_10504 = state_10467__$1;
(statearr_10473_10504[(1)] = (5));

} else {
var statearr_10474_10505 = state_10467__$1;
(statearr_10474_10505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (15))){
var inst_10457 = (state_10467[(2)]);
var state_10467__$1 = state_10467;
var statearr_10475_10506 = state_10467__$1;
(statearr_10475_10506[(2)] = inst_10457);

(statearr_10475_10506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (13))){
var state_10467__$1 = state_10467;
var statearr_10476_10507 = state_10467__$1;
(statearr_10476_10507[(2)] = null);

(statearr_10476_10507[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (6))){
var inst_10432 = (state_10467[(8)]);
var inst_10453 = (inst_10432 > (0));
var state_10467__$1 = state_10467;
if(cljs.core.truth_(inst_10453)){
var statearr_10477_10508 = state_10467__$1;
(statearr_10477_10508[(1)] = (12));

} else {
var statearr_10478_10509 = state_10467__$1;
(statearr_10478_10509[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (3))){
var inst_10465 = (state_10467[(2)]);
var state_10467__$1 = state_10467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10467__$1,inst_10465);
} else {
if((state_val_10468 === (12))){
var inst_10431 = (state_10467[(7)]);
var inst_10455 = cljs.core.vec.call(null,inst_10431);
var state_10467__$1 = state_10467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10467__$1,(15),out,inst_10455);
} else {
if((state_val_10468 === (2))){
var state_10467__$1 = state_10467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10467__$1,(4),ch);
} else {
if((state_val_10468 === (11))){
var inst_10447 = (state_10467[(2)]);
var inst_10448 = (new Array(n));
var inst_10431 = inst_10448;
var inst_10432 = (0);
var state_10467__$1 = (function (){var statearr_10479 = state_10467;
(statearr_10479[(10)] = inst_10447);

(statearr_10479[(7)] = inst_10431);

(statearr_10479[(8)] = inst_10432);

return statearr_10479;
})();
var statearr_10480_10510 = state_10467__$1;
(statearr_10480_10510[(2)] = null);

(statearr_10480_10510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (9))){
var inst_10431 = (state_10467[(7)]);
var inst_10445 = cljs.core.vec.call(null,inst_10431);
var state_10467__$1 = state_10467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10467__$1,(11),out,inst_10445);
} else {
if((state_val_10468 === (5))){
var inst_10435 = (state_10467[(9)]);
var inst_10431 = (state_10467[(7)]);
var inst_10440 = (state_10467[(11)]);
var inst_10432 = (state_10467[(8)]);
var inst_10439 = (inst_10431[inst_10432] = inst_10435);
var inst_10440__$1 = (inst_10432 + (1));
var inst_10441 = (inst_10440__$1 < n);
var state_10467__$1 = (function (){var statearr_10481 = state_10467;
(statearr_10481[(12)] = inst_10439);

(statearr_10481[(11)] = inst_10440__$1);

return statearr_10481;
})();
if(cljs.core.truth_(inst_10441)){
var statearr_10482_10511 = state_10467__$1;
(statearr_10482_10511[(1)] = (8));

} else {
var statearr_10483_10512 = state_10467__$1;
(statearr_10483_10512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (14))){
var inst_10460 = (state_10467[(2)]);
var inst_10461 = cljs.core.async.close_BANG_.call(null,out);
var state_10467__$1 = (function (){var statearr_10485 = state_10467;
(statearr_10485[(13)] = inst_10460);

return statearr_10485;
})();
var statearr_10486_10513 = state_10467__$1;
(statearr_10486_10513[(2)] = inst_10461);

(statearr_10486_10513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (10))){
var inst_10451 = (state_10467[(2)]);
var state_10467__$1 = state_10467;
var statearr_10487_10514 = state_10467__$1;
(statearr_10487_10514[(2)] = inst_10451);

(statearr_10487_10514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (8))){
var inst_10431 = (state_10467[(7)]);
var inst_10440 = (state_10467[(11)]);
var tmp10484 = inst_10431;
var inst_10431__$1 = tmp10484;
var inst_10432 = inst_10440;
var state_10467__$1 = (function (){var statearr_10488 = state_10467;
(statearr_10488[(7)] = inst_10431__$1);

(statearr_10488[(8)] = inst_10432);

return statearr_10488;
})();
var statearr_10489_10515 = state_10467__$1;
(statearr_10489_10515[(2)] = null);

(statearr_10489_10515[(1)] = (2));


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
});})(c__7841__auto___10501,out))
;
return ((function (switch__7729__auto__,c__7841__auto___10501,out){
return (function() {
var cljs$core$async$state_machine__7730__auto__ = null;
var cljs$core$async$state_machine__7730__auto____0 = (function (){
var statearr_10493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10493[(0)] = cljs$core$async$state_machine__7730__auto__);

(statearr_10493[(1)] = (1));

return statearr_10493;
});
var cljs$core$async$state_machine__7730__auto____1 = (function (state_10467){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_10467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e10494){if((e10494 instanceof Object)){
var ex__7733__auto__ = e10494;
var statearr_10495_10516 = state_10467;
(statearr_10495_10516[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10517 = state_10467;
state_10467 = G__10517;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
cljs$core$async$state_machine__7730__auto__ = function(state_10467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7730__auto____1.call(this,state_10467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7730__auto____0;
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7730__auto____1;
return cljs$core$async$state_machine__7730__auto__;
})()
;})(switch__7729__auto__,c__7841__auto___10501,out))
})();
var state__7843__auto__ = (function (){var statearr_10496 = f__7842__auto__.call(null);
(statearr_10496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto___10501);

return statearr_10496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(c__7841__auto___10501,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args10518 = [];
var len__5746__auto___10592 = arguments.length;
var i__5747__auto___10593 = (0);
while(true){
if((i__5747__auto___10593 < len__5746__auto___10592)){
args10518.push((arguments[i__5747__auto___10593]));

var G__10594 = (i__5747__auto___10593 + (1));
i__5747__auto___10593 = G__10594;
continue;
} else {
}
break;
}

var G__10520 = args10518.length;
switch (G__10520) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10518.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7841__auto___10596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7841__auto___10596,out){
return (function (){
var f__7842__auto__ = (function (){var switch__7729__auto__ = ((function (c__7841__auto___10596,out){
return (function (state_10562){
var state_val_10563 = (state_10562[(1)]);
if((state_val_10563 === (7))){
var inst_10558 = (state_10562[(2)]);
var state_10562__$1 = state_10562;
var statearr_10564_10597 = state_10562__$1;
(statearr_10564_10597[(2)] = inst_10558);

(statearr_10564_10597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10563 === (1))){
var inst_10521 = [];
var inst_10522 = inst_10521;
var inst_10523 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_10562__$1 = (function (){var statearr_10565 = state_10562;
(statearr_10565[(7)] = inst_10523);

(statearr_10565[(8)] = inst_10522);

return statearr_10565;
})();
var statearr_10566_10598 = state_10562__$1;
(statearr_10566_10598[(2)] = null);

(statearr_10566_10598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10563 === (4))){
var inst_10526 = (state_10562[(9)]);
var inst_10526__$1 = (state_10562[(2)]);
var inst_10527 = (inst_10526__$1 == null);
var inst_10528 = cljs.core.not.call(null,inst_10527);
var state_10562__$1 = (function (){var statearr_10567 = state_10562;
(statearr_10567[(9)] = inst_10526__$1);

return statearr_10567;
})();
if(inst_10528){
var statearr_10568_10599 = state_10562__$1;
(statearr_10568_10599[(1)] = (5));

} else {
var statearr_10569_10600 = state_10562__$1;
(statearr_10569_10600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10563 === (15))){
var inst_10552 = (state_10562[(2)]);
var state_10562__$1 = state_10562;
var statearr_10570_10601 = state_10562__$1;
(statearr_10570_10601[(2)] = inst_10552);

(statearr_10570_10601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10563 === (13))){
var state_10562__$1 = state_10562;
var statearr_10571_10602 = state_10562__$1;
(statearr_10571_10602[(2)] = null);

(statearr_10571_10602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10563 === (6))){
var inst_10522 = (state_10562[(8)]);
var inst_10547 = inst_10522.length;
var inst_10548 = (inst_10547 > (0));
var state_10562__$1 = state_10562;
if(cljs.core.truth_(inst_10548)){
var statearr_10572_10603 = state_10562__$1;
(statearr_10572_10603[(1)] = (12));

} else {
var statearr_10573_10604 = state_10562__$1;
(statearr_10573_10604[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10563 === (3))){
var inst_10560 = (state_10562[(2)]);
var state_10562__$1 = state_10562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10562__$1,inst_10560);
} else {
if((state_val_10563 === (12))){
var inst_10522 = (state_10562[(8)]);
var inst_10550 = cljs.core.vec.call(null,inst_10522);
var state_10562__$1 = state_10562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10562__$1,(15),out,inst_10550);
} else {
if((state_val_10563 === (2))){
var state_10562__$1 = state_10562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10562__$1,(4),ch);
} else {
if((state_val_10563 === (11))){
var inst_10530 = (state_10562[(10)]);
var inst_10526 = (state_10562[(9)]);
var inst_10540 = (state_10562[(2)]);
var inst_10541 = [];
var inst_10542 = inst_10541.push(inst_10526);
var inst_10522 = inst_10541;
var inst_10523 = inst_10530;
var state_10562__$1 = (function (){var statearr_10574 = state_10562;
(statearr_10574[(11)] = inst_10540);

(statearr_10574[(7)] = inst_10523);

(statearr_10574[(12)] = inst_10542);

(statearr_10574[(8)] = inst_10522);

return statearr_10574;
})();
var statearr_10575_10605 = state_10562__$1;
(statearr_10575_10605[(2)] = null);

(statearr_10575_10605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10563 === (9))){
var inst_10522 = (state_10562[(8)]);
var inst_10538 = cljs.core.vec.call(null,inst_10522);
var state_10562__$1 = state_10562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10562__$1,(11),out,inst_10538);
} else {
if((state_val_10563 === (5))){
var inst_10523 = (state_10562[(7)]);
var inst_10530 = (state_10562[(10)]);
var inst_10526 = (state_10562[(9)]);
var inst_10530__$1 = f.call(null,inst_10526);
var inst_10531 = cljs.core._EQ_.call(null,inst_10530__$1,inst_10523);
var inst_10532 = cljs.core.keyword_identical_QMARK_.call(null,inst_10523,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_10533 = (inst_10531) || (inst_10532);
var state_10562__$1 = (function (){var statearr_10576 = state_10562;
(statearr_10576[(10)] = inst_10530__$1);

return statearr_10576;
})();
if(cljs.core.truth_(inst_10533)){
var statearr_10577_10606 = state_10562__$1;
(statearr_10577_10606[(1)] = (8));

} else {
var statearr_10578_10607 = state_10562__$1;
(statearr_10578_10607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10563 === (14))){
var inst_10555 = (state_10562[(2)]);
var inst_10556 = cljs.core.async.close_BANG_.call(null,out);
var state_10562__$1 = (function (){var statearr_10580 = state_10562;
(statearr_10580[(13)] = inst_10555);

return statearr_10580;
})();
var statearr_10581_10608 = state_10562__$1;
(statearr_10581_10608[(2)] = inst_10556);

(statearr_10581_10608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10563 === (10))){
var inst_10545 = (state_10562[(2)]);
var state_10562__$1 = state_10562;
var statearr_10582_10609 = state_10562__$1;
(statearr_10582_10609[(2)] = inst_10545);

(statearr_10582_10609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10563 === (8))){
var inst_10530 = (state_10562[(10)]);
var inst_10526 = (state_10562[(9)]);
var inst_10522 = (state_10562[(8)]);
var inst_10535 = inst_10522.push(inst_10526);
var tmp10579 = inst_10522;
var inst_10522__$1 = tmp10579;
var inst_10523 = inst_10530;
var state_10562__$1 = (function (){var statearr_10583 = state_10562;
(statearr_10583[(14)] = inst_10535);

(statearr_10583[(7)] = inst_10523);

(statearr_10583[(8)] = inst_10522__$1);

return statearr_10583;
})();
var statearr_10584_10610 = state_10562__$1;
(statearr_10584_10610[(2)] = null);

(statearr_10584_10610[(1)] = (2));


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
});})(c__7841__auto___10596,out))
;
return ((function (switch__7729__auto__,c__7841__auto___10596,out){
return (function() {
var cljs$core$async$state_machine__7730__auto__ = null;
var cljs$core$async$state_machine__7730__auto____0 = (function (){
var statearr_10588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10588[(0)] = cljs$core$async$state_machine__7730__auto__);

(statearr_10588[(1)] = (1));

return statearr_10588;
});
var cljs$core$async$state_machine__7730__auto____1 = (function (state_10562){
while(true){
var ret_value__7731__auto__ = (function (){try{while(true){
var result__7732__auto__ = switch__7729__auto__.call(null,state_10562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7732__auto__;
}
break;
}
}catch (e10589){if((e10589 instanceof Object)){
var ex__7733__auto__ = e10589;
var statearr_10590_10611 = state_10562;
(statearr_10590_10611[(5)] = ex__7733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10612 = state_10562;
state_10562 = G__10612;
continue;
} else {
return ret_value__7731__auto__;
}
break;
}
});
cljs$core$async$state_machine__7730__auto__ = function(state_10562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7730__auto____1.call(this,state_10562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7730__auto____0;
cljs$core$async$state_machine__7730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7730__auto____1;
return cljs$core$async$state_machine__7730__auto__;
})()
;})(switch__7729__auto__,c__7841__auto___10596,out))
})();
var state__7843__auto__ = (function (){var statearr_10591 = f__7842__auto__.call(null);
(statearr_10591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7841__auto___10596);

return statearr_10591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7843__auto__);
});})(c__7841__auto___10596,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map