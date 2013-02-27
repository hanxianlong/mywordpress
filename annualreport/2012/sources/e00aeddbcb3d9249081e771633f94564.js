/*
CSS Browser Selector v0.4.0 (Nov 02, 2010)
Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/
Contributors: http://rafael.adm.br/css_browser_selector#contributors
*/
function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);
/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
var Translate = function() {
    return '';
};
(function(){function e(e,t){try{for(var n in t)Object.defineProperty(e.prototype,n,{value:t[n],enumerable:!1})}catch(r){e.prototype=t}}function t(e){var t=-1,n=e.length,r=[];while(++t<n)r.push(e[t]);return r}function n(e){return Array.prototype.slice.call(e)}function r(){}function i(e){return e}function s(){return this}function o(){return!0}function u(e){return typeof e=="function"?e:function(){return e}}function a(e,t,n){return function(){var r=n.apply(t,arguments);return arguments.length?e:r}}function f(e){return e!=null&&!isNaN(e)}function l(e){return e.length}function c(e){return e==null}function h(e){return e.trim().replace(/\s+/g," ")}function p(e){var t=1;while(e*t%1)t*=10;return t}function d(){}function v(e){function t(){var t=n,r=-1,i=t.length,s;while(++r<i)(s=t[r].on)&&s.apply(this,arguments);return e}var n=[],i=new r;return t.on=function(t,r){var s=i.get(t),o;return arguments.length<2?s&&s.on:(s&&(s.on=null,n=n.slice(0,o=n.indexOf(s)).concat(n.slice(o+1)),i.remove(t)),r&&n.push(i.set(t,{on:r})),e)},t}function m(e,t){return t-(e?1+Math.floor(Math.log(e+Math.pow(10,1+Math.floor(Math.log(e)/Math.LN10)-t))/Math.LN10):1)}function g(e){return e+""}function y(e){var t=e.lastIndexOf("."),n=t>=0?e.substring(t):(t=e.length,""),r=[];while(t>0)r.push(e.substring(t-=3,t+3));return r.reverse().join(",")+n}function b(e,t){var n=Math.pow(10,Math.abs(8-t)*3);return{scale:t>8?function(e){return e/n}:function(e){return e*n},symbol:e}}function w(e){return function(t){return t<=0?0:t>=1?1:e(t)}}function E(e){return function(t){return 1-e(1-t)}}function S(e){return function(t){return.5*(t<.5?e(2*t):2-e(2-2*t))}}function x(e){return e}function T(e){return function(t){return Math.pow(t,e)}}function N(e){return 1-Math.cos(e*Math.PI/2)}function C(e){return Math.pow(2,10*(e-1))}function k(e){return 1-Math.sqrt(1-e*e)}function L(e,t){var n;return arguments.length<2&&(t=.45),arguments.length<1?(e=1,n=t/4):n=t/(2*Math.PI)*Math.asin(1/e),function(r){return 1+e*Math.pow(2,10*-r)*Math.sin((r-n)*2*Math.PI/t)}}function A(e){return e||(e=1.70158),function(t){return t*t*((e+1)*t-e)}}function O(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}function M(){d3.event.stopPropagation(),d3.event.preventDefault()}function _(){var e=d3.event,t;while(t=e.sourceEvent)e=t;return e}function D(e){var t=new d,n=0,r=arguments.length;while(++n<r)t[arguments[n]]=v(t);return t.of=function(n,r){return function(i){try{var s=i.sourceEvent=d3.event;i.target=e,d3.event=i,t[i.type].apply(n,r)}finally{d3.event=s}}},t}function P(e){var t=[e.a,e.b],n=[e.c,e.d],r=B(t),i=H(t,n),s=B(j(n,t,-i))||0;t[0]*n[1]<n[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,i*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-n[0],n[1]))*ls,this.translate=[e.e,e.f],this.scale=[r,s],this.skew=s?Math.atan2(i,s)*ls:0}function H(e,t){return e[0]*t[0]+e[1]*t[1]}function B(e){var t=Math.sqrt(H(e,e));return t&&(e[0]/=t,e[1]/=t),t}function j(e,t,n){return e[0]+=n*t[0],e[1]+=n*t[1],e}function F(e){return e=="transform"?d3.interpolateTransform:d3.interpolate}function I(e,t){return t=t-(e=+e)?1/(t-e):0,function(n){return(n-e)*t}}function q(e,t){return t=t-(e=+e)?1/(t-e):0,function(n){return Math.max(0,Math.min(1,(n-e)*t))}}function R(){}function U(e,t,n){return new z(e,t,n)}function z(e,t,n){this.r=e,this.g=t,this.b=n}function W(e){return e<16?"0"+Math.max(0,e).toString(16):Math.min(255,e).toString(16)}function X(e,t,n){var r=0,i=0,s=0,o,u,a;o=/([a-z]+)\((.*)\)/i.exec(e);if(o){u=o[2].split(",");switch(o[1]){case"hsl":return n(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(K(u[0]),K(u[1]),K(u[2]))}}return(a=ds.get(e))?t(a.r,a.g,a.b):(e!=null&&e.charAt(0)==="#"&&(e.length===4?(r=e.charAt(1),r+=r,i=e.charAt(2),i+=i,s=e.charAt(3),s+=s):e.length===7&&(r=e.substring(1,3),i=e.substring(3,5),s=e.substring(5,7)),r=parseInt(r,16),i=parseInt(i,16),s=parseInt(s,16)),t(r,i,s))}function V(e,t,n){var r=Math.min(e/=255,t/=255,n/=255),i=Math.max(e,t,n),s=i-r,o,u,a=(i+r)/2;return s?(u=a<.5?s/(i+r):s/(2-i-r),e==i?o=(t-n)/s+(t<n?6:0):t==i?o=(n-e)/s+2:o=(e-t)/s+4,o*=60):u=o=0,Q(o,u,a)}function $(e,t,n){e=J(e),t=J(t),n=J(n);var r=ut((.4124564*e+.3575761*t+.1804375*n)/ys),i=ut((.2126729*e+.7151522*t+.072175*n)/bs),s=ut((.0193339*e+.119192*t+.9503041*n)/ws);return nt(116*i-16,500*(r-i),200*(i-s))}function J(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function K(e){var t=parseFloat(e);return e.charAt(e.length-1)==="%"?Math.round(t*2.55):t}function Q(e,t,n){return new G(e,t,n)}function G(e,t,n){this.h=e,this.s=t,this.l=n}function Y(e,t,n){function r(e){return e>360?e-=360:e<0&&(e+=360),e<60?s+(o-s)*e/60:e<180?o:e<240?s+(o-s)*(240-e)/60:s}function i(e){return Math.round(r(e)*255)}var s,o;return e%=360,e<0&&(e+=360),t=t<0?0:t>1?1:t,n=n<0?0:n>1?1:n,o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o,U(i(e+120),i(e),i(e-120))}function Z(e,t,n){return new et(e,t,n)}function et(e,t,n){this.h=e,this.c=t,this.l=n}function tt(e,t,n){return nt(n,Math.cos(e*=Math.PI/180)*t,Math.sin(e)*t)}function nt(e,t,n){return new rt(e,t,n)}function rt(e,t,n){this.l=e,this.a=t,this.b=n}function it(e,t,n){var r=(e+16)/116,i=r+t/500,s=r-n/200;return i=ot(i)*ys,r=ot(r)*bs,s=ot(s)*ws,U(at(3.2404542*i-1.5371385*r-.4985314*s),at(-0.969266*i+1.8760108*r+.041556*s),at(.0556434*i-.2040259*r+1.0572252*s))}function st(e,t,n){return Z(Math.atan2(n,t)/Math.PI*180,Math.sqrt(t*t+n*n),e)}function ot(e){return e>.206893034?e*e*e:(e-4/29)/7.787037}function ut(e){return e>.008856?Math.pow(e,1/3):7.787037*e+4/29}function at(e){return Math.round(255*(e<=.00304?12.92*e:1.055*Math.pow(e,1/2.4)-.055))}function ft(e){return Qi(e,ks),e}function lt(e){return function(){return Ss(e,this)}}function ct(e){return function(){return xs(e,this)}}function ht(e,t){function n(){this.removeAttribute(e)}function r(){this.removeAttributeNS(e.space,e.local)}function i(){this.setAttribute(e,t)}function s(){this.setAttributeNS(e.space,e.local,t)}function o(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}function u(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}return e=d3.ns.qualify(e),t==null?e.local?r:n:typeof t=="function"?e.local?u:o:e.local?s:i}function pt(e){return new RegExp("(?:^|\\s+)"+d3.requote(e)+"(?:\\s+|$)","g")}function dt(e,t){function n(){var n=-1;while(++n<i)e[n](this,t)}function r(){var n=-1,r=t.apply(this,arguments);while(++n<i)e[n](this,r)}e=e.trim().split(/\s+/).map(vt);var i=e.length;return typeof t=="function"?r:n}function vt(e){var t=pt(e);return function(n,r){if(i=n.classList)return r?i.add(e):i.remove(e);var i=n.className,s=i.baseVal!=null,o=s?i.baseVal:i;r?(t.lastIndex=0,t.test(o)||(o=h(o+" "+e),s?i.baseVal=o:n.className=o)):o&&(o=h(o.replace(t," ")),s?i.baseVal=o:n.className=o)}}function mt(e,t,n){function r(){this.style.removeProperty(e)}function i(){this.style.setProperty(e,t,n)}function s(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}return t==null?r:typeof t=="function"?s:i}function gt(e,t){function n(){delete this[e]}function r(){this[e]=t}function i(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}return t==null?n:typeof t=="function"?i:r}function yt(e){return{__data__:e}}function bt(e){return function(){return Cs(this,e)}}function wt(e){return arguments.length||(e=d3.ascending),function(t,n){return e(t&&t.__data__,n&&n.__data__)}}function Et(e,t,n){function r(){var t=this[s];t&&(this.removeEventListener(e,t,t.$),delete this[s])}function i(){function i(e){var n=d3.event;d3.event=e,u[0]=o.__data__;try{t.apply(o,u)}finally{d3.event=n}}var o=this,u=arguments;r.call(this),this.addEventListener(e,this[s]=i,i.$=n),i._=t}var s="__on"+e,o=e.indexOf(".");return o>0&&(e=e.substring(0,o)),t?i:r}function St(e,t){for(var n=0,r=e.length;n<r;n++)for(var i=e[n],s=0,o=i.length,u;s<o;s++)(u=i[s])&&t(u,s,n);return e}function xt(e){return Qi(e,As),e}function Tt(e,t,n){Qi(e,Os);var i=new r,s=d3.dispatch("start","end"),o=Fs;return e.id=t,e.time=n,e.tween=function(t,n){return arguments.length<2?i.get(t):(n==null?i.remove(t):i.set(t,n),e)},e.ease=function(t){return arguments.length?(o=typeof t=="function"?t:d3.ease.apply(d3,arguments),e):o},e.each=function(t,n){return arguments.length<2?Nt.call(e,t):(s.on(t,n),e)},d3.timer(function(r){return St(e,function(e,u,a){function f(r){return v.active>t?c():(v.active=t,i.forEach(function(t,n){(n=n.call(e,m,u))&&h.push(n)}),s.start.call(e,m,u),l(r)||d3.timer(l,0,n),1)}function l(n){if(v.active!==t)return c();var r=(n-p)/d,i=o(r),a=h.length;while(a>0)h[--a].call(e,i);if(r>=1)return c(),_s=t,s.end.call(e,m,u),_s=0,1}function c(){return--v.count||delete e.__transition__,1}var h=[],p=e.delay,d=e.duration,v=(e=e.node).__transition__||(e.__transition__={active:0,count:0}),m=e.__data__;++v.count,p<=r?f(r):d3.timer(f,p,n)})},0,n),e}function Nt(e){var t=_s,n=Fs,r=Bs,i=js;return _s=this.id,Fs=this.ease(),St(this,function(t,n,r){Bs=t.delay,js=t.duration,e.call(t=t.node,t.__data__,n,r)}),_s=t,Fs=n,Bs=r,js=i,this}function Ct(e,t,n){return n!=""&&Is}function kt(e,t){return d3.tween(e,F(t))}function Lt(){var e,t=Date.now(),n=Us;while(n)e=t-n.then,e>=n.delay&&(n.flush=n.callback(e)),n=n.next;var r=At()-t;r>24?(isFinite(r)&&(clearTimeout(Ws),Ws=setTimeout(Lt,r)),zs=0):(zs=1,Xs(Lt))}function At(){var e=null,t=Us,n=Infinity;while(t)t.flush?(delete Rs[t.callback.id],t=e?e.next=t.next:Us=t.next):(n=Math.min(n,t.then+t.delay),t=(e=t).next);return n}function Ot(e,t){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var r=n.createSVGPoint();if(Vs<0&&(window.scrollX||window.scrollY)){n=d3.select(document.body).append("svg").style("position","absolute").style("top",0).style("left",0);var i=n[0][0].getScreenCTM();Vs=!i.f&&!i.e,n.remove()}return Vs?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(e.getScreenCTM().inverse()),[r.x,r.y]}var s=e.getBoundingClientRect();return[t.clientX-s.left-e.clientLeft,t.clientY-s.top-e.clientTop]}function Mt(){}function _t(e){var t=e[0],n=e[e.length-1];return t<n?[t,n]:[n,t]}function Dt(e){return e.rangeExtent?e.rangeExtent():_t(e.range())}function Pt(e,t){var n=0,r=e.length-1,i=e[n],s=e[r],o;s<i&&(o=n,n=r,r=o,o=i,i=s,s=o);if(t=t(s-i))e[n]=t.floor(i),e[r]=t.ceil(s);return e}function Ht(){return Math}function Bt(e,t,n,r){function i(){var i=Math.min(e.length,t.length)>2?zt:Ut,a=r?q:I;return o=i(e,t,a,n),u=i(t,e,a,d3.interpolate),s}function s(e){return o(e)}var o,u;return s.invert=function(e){return u(e)},s.domain=function(t){return arguments.length?(e=t.map(Number),i()):e},s.range=function(e){return arguments.length?(t=e,i()):t},s.rangeRound=function(e){return s.range(e).interpolate(d3.interpolateRound)},s.clamp=function(e){return arguments.length?(r=e,i()):r},s.interpolate=function(e){return arguments.length?(n=e,i()):n},s.ticks=function(t){return qt(e,t)},s.tickFormat=function(t){return Rt(e,t)},s.nice=function(){return Pt(e,Ft),i()},s.copy=function(){return Bt(e,t,n,r)},i()}function jt(e,t){return d3.rebind(e,t,"range","rangeRound","interpolate","clamp")}function Ft(e){return e=Math.pow(10,Math.round(Math.log(e)/Math.LN10)-1),e&&{floor:function(t){return Math.floor(t/e)*e},ceil:function(t){return Math.ceil(t/e)*e}}}function It(e,t){var n=_t(e),r=n[1]-n[0],i=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),s=t/r*i;return s<=.15?i*=10:s<=.35?i*=5:s<=.75&&(i*=2),n[0]=Math.ceil(n[0]/i)*i,n[1]=Math.floor(n[1]/i)*i+i*.5,n[2]=i,n}function qt(e,t){return d3.range.apply(d3,It(e,t))}function Rt(e,t){return d3.format(",."+Math.max(0,-Math.floor(Math.log(It(e,t)[2])/Math.LN10+.01))+"f")}function Ut(e,t,n,r){var i=n(e[0],e[1]),s=r(t[0],t[1]);return function(e){return s(i(e))}}function zt(e,t,n,r){var i=[],s=[],o=0,u=Math.min(e.length,t.length)-1;e[u]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());while(++o<=u)i.push(n(e[o-1],e[o])),s.push(r(t[o-1],t[o]));return function(t){var n=d3.bisect(e,t,1,u)-1;return s[n](i[n](t))}}function Wt(e,t){function n(n){return e(t(n))}var r=t.pow;return n.invert=function(t){return r(e.invert(t))},n.domain=function(i){return arguments.length?(t=i[0]<0?Vt:Xt,r=t.pow,e.domain(i.map(t)),n):e.domain().map(r)},n.nice=function(){return e.domain(Pt(e.domain(),Ht)),n},n.ticks=function(){var n=_t(e.domain()),i=[];if(n.every(isFinite)){var s=Math.floor(n[0]),o=Math.ceil(n[1]),u=r(n[0]),a=r(n[1]);if(t===Vt){i.push(r(s));for(;s++<o;)for(var f=9;f>0;f--)i.push(r(s)*f)}else{for(;s<o;s++)for(var f=1;f<10;f++)i.push(r(s)*f);i.push(r(s))}for(s=0;i[s]<u;s++);for(o=i.length;i[o-1]>a;o--);i=i.slice(s,o)}return i},n.tickFormat=function(e,i){arguments.length<2&&(i=$s);if(arguments.length<1)return i;var s=Math.max(.1,e/n.ticks().length),o=t===Vt?(u=-1e-12,Math.floor):(u=1e-12,Math.ceil),u;return function(e){return e/r(o(t(e)+u))<=s?i(e):""}},n.copy=function(){return Wt(e.copy(),t)},jt(n,e)}function Xt(e){return Math.log(e<0?0:e)/Math.LN10}function Vt(e){return-Math.log(e>0?0:-e)/Math.LN10}function $t(e,t){function n(t){return e(r(t))}var r=Jt(t),i=Jt(1/t);return n.invert=function(t){return i(e.invert(t))},n.domain=function(t){return arguments.length?(e.domain(t.map(r)),n):e.domain().map(i)},n.ticks=function(e){return qt(n.domain(),e)},n.tickFormat=function(e){return Rt(n.domain(),e)},n.nice=function(){return n.domain(Pt(n.domain(),Ft))},n.exponent=function(e){if(!arguments.length)return t;var s=n.domain();return r=Jt(t=e),i=Jt(1/t),n.domain(s)},n.copy=function(){return $t(e.copy(),t)},jt(n,e)}function Jt(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function Kt(e,t){function n(t){return o[((s.get(t)||s.set(t,e.push(t)))-1)%o.length]}function i(t,n){return d3.range(e.length).map(function(e){return t+n*e})}var s,o,u;return n.domain=function(i){if(!arguments.length)return e;e=[],s=new r;var o=-1,u=i.length,a;while(++o<u)s.has(a=i[o])||s.set(a,e.push(a));return n[t.t].apply(n,t.a)},n.range=function(e){return arguments.length?(o=e,u=0,t={t:"range",a:arguments},n):o},n.rangePoints=function(r,s){arguments.length<2&&(s=0);var a=r[0],f=r[1],l=(f-a)/(Math.max(1,e.length-1)+s);return o=i(e.length<2?(a+f)/2:a+l*s/2,l),u=0,t={t:"rangePoints",a:arguments},n},n.rangeBands=function(r,s,a){arguments.length<2&&(s=0),arguments.length<3&&(a=s);var f=r[1]<r[0],l=r[f-0],c=r[1-f],h=(c-l)/(e.length-s+2*a);return o=i(l+h*a,h),f&&o.reverse(),u=h*(1-s),t={t:"rangeBands",a:arguments},n},n.rangeRoundBands=function(r,s,a){arguments.length<2&&(s=0),arguments.length<3&&(a=s);var f=r[1]<r[0],l=r[f-0],c=r[1-f],h=Math.floor((c-l)/(e.length-s+2*a)),p=c-l-(e.length-s)*h;return o=i(l+Math.round(p/2),h),f&&o.reverse(),u=Math.round(h*(1-s)),t={t:"rangeRoundBands",a:arguments},n},n.rangeBand=function(){return u},n.rangeExtent=function(){return _t(t.a[0])},n.copy=function(){return Kt(e,t)},n.domain(e)}function Qt(e,t){function n(){var n=0,s=e.length,o=t.length;i=[];while(++n<o)i[n-1]=d3.quantile(e,n/o);return r}function r(e){return isNaN(e=+e)?NaN:t[d3.bisect(i,e)]}var i;return r.domain=function(t){return arguments.length?(e=t.filter(function(e){return!isNaN(e)}).sort(d3.ascending),n()):e},r.range=function(e){return arguments.length?(t=e,n()):t},r.quantiles=function(){return i},r.copy=function(){return Qt(e,t)},n()}function Gt(e,t,n){function r(t){return n[Math.max(0,Math.min(o,Math.floor(s*(t-e))))]}function i(){return s=n.length/(t-e),o=n.length-1,r}var s,o;return r.domain=function(n){return arguments.length?(e=+n[0],t=+n[n.length-1],i()):[e,t]},r.range=function(e){return arguments.length?(n=e,i()):n},r.copy=function(){return Gt(e,t,n)},i()}function Yt(e,t){function n(n){return t[d3.bisect(e,n)]}return n.domain=function(t){return arguments.length?(e=t,n):e},n.range=function(e){return arguments.length?(t=e,n):t},n.copy=function(){return Yt(e,t)},n}function Zt(e){function t(e){return+e}return t.invert=t,t.domain=t.range=function(n){return arguments.length?(e=n.map(t),t):e},t.ticks=function(t){return qt(e,t)},t.tickFormat=function(t){return Rt(e,t)},t.copy=function(){return Zt(e)},t}function en(e){return e.innerRadius}function tn(e){return e.outerRadius}function nn(e){return e.startAngle}function rn(e){return e.endAngle}function sn(e){function t(t){function o(){a.push("M",s(e(l),f))}var a=[],l=[],c=-1,h=t.length,p,d=u(n),v=u(r);while(++c<h)i.call(this,p=t[c],c)?l.push([+d.call(this,p,c),+v.call(this,p,c)]):l.length&&(o(),l=[]);return l.length&&o(),a.length?a.join(""):null}var n=on,r=un,i=o,s=an,a=s.key,f=.7;return t.x=function(e){return arguments.length?(n=e,t):n},t.y=function(e){return arguments.length?(r=e,t):r},t.defined=function(e){return arguments.length?(i=e,t):i},t.interpolate=function(e){return arguments.length?(typeof e=="function"?a=s=e:a=(s=eo.get(e)||an).key,t):a},t.tension=function(e){return arguments.length?(f=e,t):f},t}function on(e){return e[0]}function un(e){return e[1]}function an(e){return e.join("L")}function fn(e){return an(e)+"Z"}function ln(e){var t=0,n=e.length,r=e[0],i=[r[0],",",r[1]];while(++t<n)i.push("V",(r=e[t])[1],"H",r[0]);return i.join("")}function cn(e){var t=0,n=e.length,r=e[0],i=[r[0],",",r[1]];while(++t<n)i.push("H",(r=e[t])[0],"V",r[1]);return i.join("")}function hn(e,t){return e.length<4?an(e):e[1]+vn(e.slice(1,e.length-1),mn(e,t))}function pn(e,t){return e.length<3?an(e):e[0]+vn((e.push(e[0]),e),mn([e[e.length-2]].concat(e,[e[1]]),t))}function dn(e,t,n){return e.length<3?an(e):e[0]+vn(e,mn(e,t))}function vn(e,t){if(t.length<1||e.length!=t.length&&e.length!=t.length+2)return an(e);var n=e.length!=t.length,r="",i=e[0],s=e[1],o=t[0],u=o,a=1;n&&(r+="Q"+(s[0]-o[0]*2/3)+","+(s[1]-o[1]*2/3)+","+s[0]+","+s[1],i=e[1],a=2);if(t.length>1){u=t[1],s=e[a],a++,r+="C"+(i[0]+o[0])+","+(i[1]+o[1])+","+(s[0]-u[0])+","+(s[1]-u[1])+","+s[0]+","+s[1];for(var f=2;f<t.length;f++,a++)s=e[a],u=t[f],r+="S"+(s[0]-u[0])+","+(s[1]-u[1])+","+s[0]+","+s[1]}if(n){var l=e[a];r+="Q"+(s[0]+u[0]*2/3)+","+(s[1]+u[1]*2/3)+","+l[0]+","+l[1]}return r}function mn(e,t){var n=[],r=(1-t)/2,i,s=e[0],o=e[1],u=1,a=e.length;while(++u<a)i=s,s=o,o=e[u],n.push([r*(o[0]-i[0]),r*(o[1]-i[1])]);return n}function gn(e){if(e.length<3)return an(e);var t=1,n=e.length,r=e[0],i=r[0],s=r[1],o=[i,i,i,(r=e[1])[0]],u=[s,s,s,r[1]],a=[i,",",s];Sn(a,o,u);while(++t<n)r=e[t],o.shift(),o.push(r[0]),u.shift(),u.push(r[1]),Sn(a,o,u);t=-1;while(++t<2)o.shift(),o.push(r[0]),u.shift(),u.push(r[1]),Sn(a,o,u);return a.join("")}function yn(e){if(e.length<4)return an(e);var t=[],n=-1,r=e.length,i,s=[0],o=[0];while(++n<3)i=e[n],s.push(i[0]),o.push(i[1]);t.push(En(ro,s)+","+En(ro,o)),--n;while(++n<r)i=e[n],s.shift(),s.push(i[0]),o.shift(),o.push(i[1]),Sn(t,s,o);return t.join("")}function bn(e){var t,n=-1,r=e.length,i=r+4,s,o=[],u=[];while(++n<4)s=e[n%r],o.push(s[0]),u.push(s[1]);t=[En(ro,o),",",En(ro,u)],--n;while(++n<i)s=e[n%r],o.shift(),o.push(s[0]),u.shift(),u.push(s[1]),Sn(t,o,u);return t.join("")}function wn(e,t){var n=e.length-1;if(n){var r=e[0][0],i=e[0][1],s=e[n][0]-r,o=e[n][1]-i,u=-1,a,f;while(++u<=n)a=e[u],f=u/n,a[0]=t*a[0]+(1-t)*(r+f*s),a[1]=t*a[1]+(1-t)*(i+f*o)}return gn(e)}function En(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function Sn(e,t,n){e.push("C",En(to,t),",",En(to,n),",",En(no,t),",",En(no,n),",",En(ro,t),",",En(ro,n))}function xn(e,t){return(t[1]-e[1])/(t[0]-e[0])}function Tn(e){var t=0,n=e.length-1,r=[],i=e[0],s=e[1],o=r[0]=xn(i,s);while(++t<n)r[t]=(o+(o=xn(i=s,s=e[t+1])))/2;return r[t]=o,r}function Nn(e){var t=[],n,r,i,s,o=Tn(e),u=-1,a=e.length-1;while(++u<a)n=xn(e[u],e[u+1]),Math.abs(n)<1e-6?o[u]=o[u+1]=0:(r=o[u]/n,i=o[u+1]/n,s=r*r+i*i,s>9&&(s=n*3/Math.sqrt(s),o[u]=s*r,o[u+1]=s*i));u=-1;while(++u<=a)s=(e[Math.min(a,u+1)][0]-e[Math.max(0,u-1)][0])/(6*(1+o[u]*o[u])),t.push([s||0,o[u]*s||0]);return t}function Cn(e){return e.length<3?an(e):e[0]+vn(e,Nn(e))}function kn(e){var t,n=-1,r=e.length,i,s;while(++n<r)t=e[n],i=t[0],s=t[1]+Ys,t[0]=i*Math.cos(s),t[1]=i*Math.sin(s);return e}function Ln(e){function t(t){function o(){l.push("M",f(e(v),p),h,c(e(d.reverse()),p),"Z")}var l=[],d=[],v=[],m=-1,g=t.length,y,b=u(n),w=u(i),E=n===r?function(){return x}:u(r),S=i===s?function(){return T}:u(s),x,T;while(++m<g)a.call(this,y=t[m],m)?(d.push([x=+b.call(this,y,m),T=+w.call(this,y,m)]),v.push([+E.call(this,y,m),+S.call(this,y,m)])):d.length&&(o(),d=[],v=[]);return d.length&&o(),l.length?l.join(""):null}var n=on,r=on,i=0,s=un,a=o,f=an,l=f.key,c=f,h="L",p=.7;return t.x=function(e){return arguments.length?(n=r=e,t):r},t.x0=function(e){return arguments.length?(n=e,t):n},t.x1=function(e){return arguments.length?(r=e,t):r},t.y=function(e){return arguments.length?(i=s=e,t):s},t.y0=function(e){return arguments.length?(i=e,t):i},t.y1=function(e){return arguments.length?(s=e,t):s},t.defined=function(e){return arguments.length?(a=e,t):a},t.interpolate=function(e){return arguments.length?(typeof e=="function"?l=f=e:l=(f=eo.get(e)||an).key,c=f.reverse||f,h=f.closed?"M":"L",t):l},t.tension=function(e){return arguments.length?(p=e,t):p},t}function An(e){return e.source}function On(e){return e.target}function Mn(e){return e.radius}function _n(e){return e.startAngle}function Dn(e){return e.endAngle}function Pn(e){return[e.x,e.y]}function Hn(e){return function(){var t=e.apply(this,arguments),n=t[0],r=t[1]+Ys;return[n*Math.cos(r),n*Math.sin(r)]}}function Bn(){return 64}function jn(){return"circle"}function Fn(e){var t=Math.sqrt(e/Math.PI);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+ -t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function In(e,t){e.attr("transform",function(e){return"translate("+t(e)+",0)"})}function qn(e,t){e.attr("transform",function(e){return"translate(0,"+t(e)+")"})}function Rn(e,t,n){i=[];if(n&&t.length>1){var r=_t(e.domain()),i,s=-1,o=t.length,u=(t[1]-t[0])/++n,a,f;while(++s<o)for(a=n;--a>0;)(f=+t[s]-a*u)>=r[0]&&i.push(f);for(--s,a=0;++a<n&&(f=+t[s]+a*u)<r[1];)i.push(f)}return i}function Un(){fo||(fo=d3.select("body").append("div").style("visibility","hidden").style("top",0).style("height",0).style("width",0).style("overflow-y","scroll").append("div").style("height","2000px").node().parentNode);var e=d3.event,t;try{fo.scrollTop=1e3,fo.dispatchEvent(e),t=1e3-fo.scrollTop}catch(n){t=e.wheelDelta||-e.detail*5}return t}function zn(e){var t=e.source,n=e.target,r=Xn(t,n),i=[t];while(t!==r)t=t.parent,i.push(t);var s=i.length;while(n!==r)i.splice(s,0,n),n=n.parent;return i}function Wn(e){var t=[],n=e.parent;while(n!=null)t.push(e),e=n,n=n.parent;return t.push(e),t}function Xn(e,t){if(e===t)return e;var n=Wn(e),r=Wn(t),i=n.pop(),s=r.pop(),o=null;while(i===s)o=i,i=n.pop(),s=r.pop();return o}function Vn(e){e.fixed|=2}function $n(e){e.fixed&=1}function Jn(e){e.fixed|=4}function Kn(e){e.fixed&=3}function Qn(e,t,n){var r=0,i=0;e.charge=0;if(!e.leaf){var s=e.nodes,o=s.length,u=-1,a;while(++u<o){a=s[u];if(a==null)continue;Qn(a,t,n),e.charge+=a.charge,r+=a.charge*a.cx,i+=a.charge*a.cy}}if(e.point){e.leaf||(e.point.x+=Math.random()-.5,e.point.y+=Math.random()-.5);var f=t*n[e.point.index];e.charge+=e.pointCharge=f,r+=f*e.point.x,i+=f*e.point.y}e.cx=r/e.charge,e.cy=i/e.charge}function Gn(e){return 20}function Yn(e){return 1}function Zn(e){return e.x}function er(e){return e.y}function tr(e,t,n){e.y0=t,e.y=n}function nr(e){return d3.range(e.length)}function rr(e){var t=-1,n=e[0].length,r=[];while(++t<n)r[t]=0;return r}function ir(e){var t=1,n=0,r=e[0][1],i,s=e.length;for(;t<s;++t)(i=e[t][1])>r&&(n=t,r=i);return n}function sr(e){return e.reduce(or,0)}function or(e,t){return e+t[1]}function ur(e,t){return ar(e,Math.ceil(Math.log(t.length)/Math.LN2+1))}function ar(e,t){var n=-1,r=+e[0],i=(e[1]-r)/t,s=[];while(++n<=t)s[n]=i*n+r;return s}function fr(e){return[d3.min(e),d3.max(e)]}function lr(e,t){return d3.rebind(e,t,"sort","children","value"),e.links=dr,e.nodes=function(t){return vo=!0,(e.nodes=e)(t)},e}function cr(e){return e.children}function hr(e){return e.value}function pr(e,t){return t.value-e.value}function dr(e){return d3.merge(e.map(function(e){return(e.children||[]).map(function(t){return{source:e,target:t}})}))}function vr(e,t){return e.value-t.value}function mr(e,t){var n=e._pack_next;e._pack_next=t,t._pack_prev=e,t._pack_next=n,n._pack_prev=t}function gr(e,t){e._pack_next=t,t._pack_prev=e}function yr(e,t){var n=t.x-e.x,r=t.y-e.y,i=e.r+t.r;return i*i-n*n-r*r>.001}function br(e){function t(e){r=Math.min(e.x-e.r,r),i=Math.max(e.x+e.r,i),s=Math.min(e.y-e.r,s),o=Math.max(e.y+e.r,o)}if(!(n=e.children)||!(p=n.length))return;var n,r=Infinity,i=-Infinity,s=Infinity,o=-Infinity,u,a,f,l,c,h,p;n.forEach(wr),u=n[0],u.x=-u.r,u.y=0,t(u);if(p>1){a=n[1],a.x=a.r,a.y=0,t(a);if(p>2){f=n[2],xr(u,a,f),t(f),mr(u,f),u._pack_prev=f,mr(f,a),a=u._pack_next;for(l=3;l<p;l++){xr(u,a,f=n[l]);var d=0,v=1,m=1;for(c=a._pack_next;c!==a;c=c._pack_next,v++)if(yr(c,f)){d=1;break}if(d==1)for(h=u._pack_prev;h!==c._pack_prev;h=h._pack_prev,m++)if(yr(h,f))break;d?(v<m||v==m&&a.r<u.r?gr(u,a=c):gr(u=h,a),l--):(mr(u,f),a=f,t(f))}}}var g=(r+i)/2,y=(s+o)/2,b=0;for(l=0;l<p;l++)f=n[l],f.x-=g,f.y-=y,b=Math.max(b,f.r+Math.sqrt(f.x*f.x+f.y*f.y));e.r=b,n.forEach(Er)}function wr(e){e._pack_next=e._pack_prev=e}function Er(e){delete e._pack_next,delete e._pack_prev}function Sr(e,t,n,r){var i=e.children;e.x=t+=r*e.x,e.y=n+=r*e.y,e.r*=r;if(i){var s=-1,o=i.length;while(++s<o)Sr(i[s],t,n,r)}}function xr(e,t,n){var r=e.r+n.r,i=t.x-e.x,s=t.y-e.y;if(r&&(i||s)){var o=t.r+n.r,u=i*i+s*s;o*=o,r*=r;var a=.5+(r-o)/(2*u),f=Math.sqrt(Math.max(0,2*o*(r+u)-(r-=u)*r-o*o))/(2*u);n.x=e.x+a*i+f*s,n.y=e.y+a*s-f*i}else n.x=e.x+r,n.y=e.y}function Tr(e){return 1+d3.max(e,function(e){return e.y})}function Nr(e){return e.reduce(function(e,t){return e+t.x},0)/e.length}function Cr(e){var t=e.children;return t&&t.length?Cr(t[0]):e}function kr(e){var t=e.children,n;return t&&(n=t.length)?kr(t[n-1]):e}function Lr(e,t){return e.parent==t.parent?1:2}function Ar(e){var t=e.children;return t&&t.length?t[0]:e._tree.thread}function Or(e){var t=e.children,n;return t&&(n=t.length)?t[n-1]:e._tree.thread}function Mr(e,t){var n=e.children;if(n&&(i=n.length)){var r,i,s=-1;while(++s<i)t(r=Mr(n[s],t),e)>0&&(e=r)}return e}function _r(e,t){return e.x-t.x}function Dr(e,t){return t.x-e.x}function Pr(e,t){return e.depth-t.depth}function Hr(e,t){function n(e,r){var i=e.children;if(i&&(a=i.length)){var s,o=null,u=-1,a;while(++u<a)s=i[u],n(s,o),o=s}t(e,r)}n(e,null)}function Br(e){var t=0,n=0,r=e.children,i=r.length,s;while(--i>=0)s=r[i]._tree,s.prelim+=t,s.mod+=t,t+=s.shift+(n+=s.change)}function jr(e,t,n){e=e._tree,t=t._tree;var r=n/(t.number-e.number);e.change+=r,t.change-=r,t.shift+=n,t.prelim+=n,t.mod+=n}function Fr(e,t,n){return e._tree.ancestor.parent==t.parent?e._tree.ancestor:n}function Ir(e){return{x:e.x,y:e.y,dx:e.dx,dy:e.dy}}function qr(e,t){var n=e.x+t[3],r=e.y+t[0],i=e.dx-t[1]-t[3],s=e.dy-t[0]-t[2];return i<0&&(n+=i/2,i=0),s<0&&(r+=s/2,s=0),{x:n,y:r,dx:i,dy:s}}function Rr(e,t){function n(e,r){d3.text(e,t,function(e){r(e&&n.parse(e))})}function r(t){return t.map(i).join(e)}function i(e){return o.test(e)?'"'+e.replace(/\"/g,'""')+'"':e}var s=new RegExp("\r\n|["+e+"\r\n]","g"),o=new RegExp('["'+e+"\n]"),u=e.charCodeAt(0);return n.parse=function(e){var t;return n.parseRows(e,function(e,n){if(n){var r={},i=-1,s=t.length;while(++i<s)r[t[i]]=e[i];return r}return t=e,null})},n.parseRows=function(e,t){function n(){if(s.lastIndex>=e.length)return i;if(l)return l=!1,r;var t=s.lastIndex;if(e.charCodeAt(t)===34){var n=t;while(n++<e.length)if(e.charCodeAt(n)===34){if(e.charCodeAt(n+1)!==34)break;n++}s.lastIndex=n+2;var o=e.charCodeAt(n+1);return o===13?(l=!0,e.charCodeAt(n+2)===10&&s.lastIndex++):o===10&&(l=!0),e.substring(t+1,n).replace(/""/g,'"')}var a=s.exec(e);return a?(l=a[0].charCodeAt(0)!==u,e.substring(t,a.index)):(s.lastIndex=e.length,e.substring(t))}var r={},i={},o=[],a=0,f,l;s.lastIndex=0;while((f=n())!==i){var c=[];while(f!==r&&f!==i)c.push(f),f=n();if(t&&!(c=t(c,a++)))continue;o.push(c)}return o},n.format=function(e){return e.map(r).join("\n")},n}function Ur(e,t){return function(n){return n&&e.hasOwnProperty(n.type)?e[n.type](n):t}}function zr(e){return"m0,"+e+"a"+e+","+e+" 0 1,1 0,"+ -2*e+"a"+e+","+e+" 0 1,1 0,"+2*e+"z"}function Wr(e,t){go.hasOwnProperty(e.type)&&go[e.type](e,t)}function Xr(e,t){Wr(e.geometry,t)}function Vr(e,t){for(var n=e.features,r=0,i=n.length;r<i;r++)Wr(n[r].geometry,t)}function $r(e,t){for(var n=e.geometries,r=0,i=n.length;r<i;r++)Wr(n[r],t)}function Jr(e,t){for(var n=e.coordinates,r=0,i=n.length;r<i;r++)t.apply(null,n[r])}function Kr(e,t){for(var n=e.coordinates,r=0,i=n.length;r<i;r++)for(var s=n[r],o=0,u=s.length;o<u;o++)t.apply(null,s[o])}function Qr(e,t){for(var n=e.coordinates,r=0,i=n.length;r<i;r++)for(var s=n[r][0],o=0,u=s.length;o<u;o++)t.apply(null,s[o])}function Gr(e,t){t.apply(null,e.coordinates)}function Yr(e,t){for(var n=e.coordinates[0],r=0,i=n.length;r<i;r++)t.apply(null,n[r])}function Zr(e){return e.source}function ei(e){return e.target}function ti(){function e(e){var t=Math.sin(e*=p)*d,n=Math.sin(p-e)*d,r=n*s+t*c,u=n*o+t*h,a=n*i+t*l;return[Math.atan2(u,r)/mo,Math.atan2(a,Math.sqrt(r*r+u*u))/mo]}var t,n,r,i,s,o,u,a,f,l,c,h,p,d;return e.distance=function(){return p==null&&(d=1/Math.sin(p=Math.acos(Math.max(-1,Math.min(1,i*l+r*f*Math.cos(u-t)))))),p},e.source=function(u){var a=Math.cos(t=u[0]*mo),f=Math.sin(t);return r=Math.cos(n=u[1]*mo),i=Math.sin(n),s=r*a,o=r*f,p=null,e},e.target=function(t){var n=Math.cos(u=t[0]*mo),r=Math.sin(u);return f=Math.cos(a=t[1]*mo),l=Math.sin(a),c=f*n,h=f*r,p=null,e},e}function ni(e,t){var n=ti().source(e).target(t);return n.distance(),n}function ri(e){var t=0,n=0;for(;;){if(e(t,n))return[t,n];t===0?(t=n+1,n=0):(t-=1,n+=1)}}function ii(e,t,n,r){var i,s,o,u,a,f,l;return i=r[e],s=i[0],o=i[1],i=r[t],u=i[0],a=i[1],i=r[n],f=i[0],l=i[1],(l-o)*(u-s)-(a-o)*(f-s)>0}function si(e,t,n){return(n[0]-t[0])*(e[1]-t[1])<(n[1]-t[1])*(e[0]-t[0])}function oi(e,t,n,r){var i=e[0],s=t[0],o=n[0],u=r[0],a=e[1],f=t[1],l=n[1],c=r[1],h=i-o,p=s-i,d=u-o,v=a-l,m=f-a,g=c-l,y=(d*v-g*h)/(g*p-d*m);return[i+y*p,a+y*m]}function ui(e,t){var n={list:e.map(function(e,t){return{index:t,x:e[0],y:e[1]}}).sort(function(e,t){return e.y<t.y?-1:e.y>t.y?1:e.x<t.x?-1:e.x>t.x?1:0}),bottomSite:null},r={list:[],leftEnd:null,rightEnd:null,init:function(){r.leftEnd=r.createHalfEdge(null,"l"),r.rightEnd=r.createHalfEdge(null,"l"),r.leftEnd.r=r.rightEnd,r.rightEnd.l=r.leftEnd,r.list.unshift(r.leftEnd,r.rightEnd)},createHalfEdge:function(e,t){return{edge:e,side:t,vertex:null,l:null,r:null}},insert:function(e,t){t.l=e,t.r=e.r,e.r.l=t,e.r=t},leftBound:function(e){var t=r.leftEnd;do t=t.r;while(t!=r.rightEnd&&i.rightOf(t,e));return t=t.l,t},del:function(e){e.l.r=e.r,e.r.l=e.l,e.edge=null},right:function(e){return e.r},left:function(e){return e.l},leftRegion:function(e){return e.edge==null?n.bottomSite:e.edge.region[e.side]},rightRegion:function(e){return e.edge==null?n.bottomSite:e.edge.region[wo[e.side]]}},i={bisect:function(e,t){var n={region:{l:e,r:t},ep:{l:null,r:null}},r=t.x-e.x,i=t.y-e.y,s=r>0?r:-r,o=i>0?i:-i;return n.c=e.x*r+e.y*i+(r*r+i*i)*.5,s>o?(n.a=1,n.b=i/r,n.c/=r):(n.b=1,n.a=r/i,n.c/=i),n},intersect:function(e,t){var n=e.edge,r=t.edge;if(!n||!r||n.region.r==r.region.r)return null;var i=n.a*r.b-n.b*r.a;if(Math.abs(i)<1e-10)return null;var s=(n.c*r.b-r.c*n.b)/i,o=(r.c*n.a-n.c*r.a)/i,u=n.region.r,a=r.region.r,f,l;u.y<a.y||u.y==a.y&&u.x<a.x?(f=e,l=n):(f=t,l=r);var c=s>=l.region.r.x;return c&&f.side==="l"||!c&&f.side==="r"?null:{x:s,y:o}},rightOf:function(e,t){var n=e.edge,r=n.region.r,i=t.x>r.x;if(i&&e.side==="l")return 1;if(!i&&e.side==="r")return 0;if(n.a===1){var s=t.y-r.y,o=t.x-r.x,u=0,a=0;!i&&n.b<0||i&&n.b>=0?a=u=s>=n.b*o:(a=t.x+t.y*n.b>n.c,n.b<0&&(a=!a),a||(u=1));if(!u){var f=r.x-n.region.l.x;a=n.b*(o*o-s*s)<f*s*(1+2*o/f+n.b*n.b),n.b<0&&(a=!a)}}else{var l=n.c-n.a*t.x,c=t.y-l,h=t.x-r.x,p=l-r.y;a=c*c>h*h+p*p}return e.side==="l"?a:!a},endPoint:function(e,n,r){e.ep[n]=r;if(!e.ep[wo[n]])return;t(e)},distance:function(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}},s={list:[],insert:function(e,t,n){e.vertex=t,e.ystar=t.y+n;for(var r=0,i=s.list,o=i.length;r<o;r++){var u=i[r];if(e.ystar>u.ystar||e.ystar==u.ystar&&t.x>u.vertex.x)continue;break}i.splice(r,0,e)},del:function(e){for(var t=0,n=s.list,r=n.length;t<r&&n[t]!=e;++t);n.splice(t,1)},empty:function(){return s.list.length===0},nextEvent:function(e){for(var t=0,n=s.list,r=n.length;t<r;++t)if(n[t]==e)return n[t+1];return null},min:function(){var e=s.list[0];return{x:e.vertex.x,y:e.ystar}},extractMin:function(){return s.list.shift()}};r.init(),n.bottomSite=n.list.shift();var o=n.list.shift(),u,a,f,l,c,h,p,d,v,m,g,y,b;for(;;){s.empty()||(u=s.min());if(o&&(s.empty()||o.y<u.y||o.y==u.y&&o.x<u.x))a=r.leftBound(o),f=r.right(a),p=r.rightRegion(a),y=i.bisect(p,o),h=r.createHalfEdge(y,"l"),r.insert(a,h),m=i.intersect(a,h),m&&(s.del(a),s.insert(a,m,i.
distance(m,o))),a=h,h=r.createHalfEdge(y,"r"),r.insert(a,h),m=i.intersect(h,f),m&&s.insert(h,m,i.distance(m,o)),o=n.list.shift();else{if(!!s.empty())break;a=s.extractMin(),l=r.left(a),f=r.right(a),c=r.right(f),p=r.leftRegion(a),d=r.rightRegion(f),g=a.vertex,i.endPoint(a.edge,a.side,g),i.endPoint(f.edge,f.side,g),r.del(a),s.del(f),r.del(f),b="l",p.y>d.y&&(v=p,p=d,d=v,b="r"),y=i.bisect(p,d),h=r.createHalfEdge(y,b),r.insert(l,h),i.endPoint(y,wo[b],g),m=i.intersect(l,h),m&&(s.del(l),s.insert(l,m,i.distance(m,p))),m=i.intersect(h,c),m&&s.insert(h,m,i.distance(m,p))}}for(a=r.right(r.leftEnd);a!=r.rightEnd;a=r.right(a))t(a.edge)}function ai(){return{leaf:!0,nodes:[],point:null}}function fi(e,t,n,r,i,s){if(!e(t,n,r,i,s)){var o=(n+i)*.5,u=(r+s)*.5,a=t.nodes;a[0]&&fi(e,a[0],n,r,o,u),a[1]&&fi(e,a[1],o,r,i,u),a[2]&&fi(e,a[2],n,u,o,s),a[3]&&fi(e,a[3],o,u,i,s)}}function li(e){return{x:e[0],y:e[1]}}function ci(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function hi(e){return e.substring(0,3)}function pi(e,t,n,r){var i,s,o=0,u=t.length,a=n.length;while(o<u){if(r>=a)return-1;i=t.charCodeAt(o++);if(i==37){s=Uo[t.charAt(o++)];if(!s||(r=s(e,n,r))<0)return-1}else if(i!=n.charCodeAt(r++))return-1}return r}function di(e){return new RegExp("^(?:"+e.map(d3.requote).join("|")+")","i")}function vi(e){var t=new r,n=-1,i=e.length;while(++n<i)t.set(e[n].toLowerCase(),n);return t}function mi(e,t,n){Bo.lastIndex=0;var r=Bo.exec(t.substring(n));return r?n+=r[0].length:-1}function gi(e,t,n){Ho.lastIndex=0;var r=Ho.exec(t.substring(n));return r?n+=r[0].length:-1}function yi(e,t,n){Io.lastIndex=0;var r=Io.exec(t.substring(n));return r?(e.m=qo.get(r[0].toLowerCase()),n+=r[0].length):-1}function bi(e,t,n){jo.lastIndex=0;var r=jo.exec(t.substring(n));return r?(e.m=Fo.get(r[0].toLowerCase()),n+=r[0].length):-1}function wi(e,t,n){return pi(e,Ro.c.toString(),t,n)}function Ei(e,t,n){return pi(e,Ro.x.toString(),t,n)}function Si(e,t,n){return pi(e,Ro.X.toString(),t,n)}function xi(e,t,n){zo.lastIndex=0;var r=zo.exec(t.substring(n,n+4));return r?(e.y=+r[0],n+=r[0].length):-1}function Ti(e,t,n){zo.lastIndex=0;var r=zo.exec(t.substring(n,n+2));return r?(e.y=Ni(+r[0]),n+=r[0].length):-1}function Ni(e){return e+(e>68?1900:2e3)}function Ci(e,t,n){zo.lastIndex=0;var r=zo.exec(t.substring(n,n+2));return r?(e.m=r[0]-1,n+=r[0].length):-1}function ki(e,t,n){zo.lastIndex=0;var r=zo.exec(t.substring(n,n+2));return r?(e.d=+r[0],n+=r[0].length):-1}function Li(e,t,n){zo.lastIndex=0;var r=zo.exec(t.substring(n,n+2));return r?(e.H=+r[0],n+=r[0].length):-1}function Ai(e,t,n){zo.lastIndex=0;var r=zo.exec(t.substring(n,n+2));return r?(e.M=+r[0],n+=r[0].length):-1}function Oi(e,t,n){zo.lastIndex=0;var r=zo.exec(t.substring(n,n+2));return r?(e.S=+r[0],n+=r[0].length):-1}function Mi(e,t,n){zo.lastIndex=0;var r=zo.exec(t.substring(n,n+3));return r?(e.L=+r[0],n+=r[0].length):-1}function _i(e,t,n){var r=Wo.get(t.substring(n,n+=2).toLowerCase());return r==null?-1:(e.p=r,n)}function Di(e){var t=e.getTimezoneOffset(),n=t>0?"-":"+",r=~~(Math.abs(t)/60),i=Math.abs(t)%60;return n+Mo(r)+Mo(i)}function Pi(e){return e.toISOString()}function Hi(e,t,n){function r(t){var n=e(t),r=s(n,1);return t-n<r-t?n:r}function i(n){return t(n=e(new Eo(n-1)),1),n}function s(e,n){return t(e=new Eo(+e),n),e}function o(e,r,s){var o=i(e),u=[];if(s>1)while(o<r)n(o)%s||u.push(new Date(+o)),t(o,1);else while(o<r)u.push(new Date(+o)),t(o,1);return u}function u(e,t,n){try{Eo=ci;var r=new ci;return r._=e,o(r,t,n)}finally{Eo=Date}}e.floor=e,e.round=r,e.ceil=i,e.offset=s,e.range=o;var a=e.utc=Bi(e);return a.floor=a,a.round=Bi(r),a.ceil=Bi(i),a.offset=Bi(s),a.range=u,e}function Bi(e){return function(t,n){try{Eo=ci;var r=new ci;return r._=t,e(r,n)._}finally{Eo=Date}}}function ji(e,t,n){function r(t){return e(t)}return r.invert=function(t){return Ii(e.invert(t))},r.domain=function(t){return arguments.length?(e.domain(t),r):e.domain().map(Ii)},r.nice=function(e){return r.domain(Pt(r.domain(),function(){return e}))},r.ticks=function(n,i){var s=Fi(r.domain());if(typeof n!="function"){var o=s[1]-s[0],u=o/n,a=d3.bisect(Vo,u);if(a==Vo.length)return t.year(s,n);if(!a)return e.ticks(n).map(Ii);Math.log(u/Vo[a-1])<Math.log(Vo[a]/u)&&--a,n=t[a],i=n[1],n=n[0].range}return n(s[0],new Date(+s[1]+1),i)},r.tickFormat=function(){return n},r.copy=function(){return ji(e.copy(),t,n)},d3.rebind(r,e,"range","rangeRound","interpolate","clamp")}function Fi(e){var t=e[0],n=e[e.length-1];return t<n?[t,n]:[n,t]}function Ii(e){return new Date(e)}function qi(e){return function(t){var n=e.length-1,r=e[n];while(!r[1](t))r=e[--n];return r[0](t)}}function Ri(e){var t=new Date(e,0,1);return t.setFullYear(e),t}function Ui(e){var t=e.getFullYear(),n=Ri(t),r=Ri(t+1);return t+(e-n)/(r-n)}function zi(e){var t=new Date(Date.UTC(e,0,1));return t.setUTCFullYear(e),t}function Wi(e){var t=e.getUTCFullYear(),n=zi(t),r=zi(t+1);return t+(e-n)/(r-n)}Date.now||(Date.now=function(){return+(new Date)});try{document.createElement("div").style.setProperty("opacity",0,"")}catch(Xi){var Vi=CSSStyleDeclaration.prototype,$i=Vi.setProperty;Vi.setProperty=function(e,t,n){$i.call(this,e,t+"",n)}}d3={version:"2.10.3"};var Ji=n;try{Ji(document.documentElement.childNodes)[0].nodeType}catch(Ki){Ji=t}var Qi=[].__proto__?function(e,t){e.__proto__=t}:function(e,t){for(var n in t)e[n]=t[n]};d3.map=function(e){var t=new r;for(var n in e)t.set(n,e[n]);return t},e(r,{has:function(e){return Gi+e in this},get:function(e){return this[Gi+e]},set:function(e,t){return this[Gi+e]=t},remove:function(e){return e=Gi+e,e in this&&delete this[e]},keys:function(){var e=[];return this.forEach(function(t){e.push(t)}),e},values:function(){var e=[];return this.forEach(function(t,n){e.push(n)}),e},entries:function(){var e=[];return this.forEach(function(t,n){e.push({key:t,value:n})}),e},forEach:function(e){for(var t in this)t.charCodeAt(0)===Yi&&e.call(this,t.substring(1),this[t])}});var Gi="\0",Yi=Gi.charCodeAt(0);d3.functor=u,d3.rebind=function(e,t){var n=1,r=arguments.length,i;while(++n<r)e[i=arguments[n]]=a(e,t,t[i]);return e},d3.ascending=function(e,t){return e<t?-1:e>t?1:e>=t?0:NaN},d3.descending=function(e,t){return t<e?-1:t>e?1:t>=e?0:NaN},d3.mean=function(e,t){var n=e.length,r,i=0,s=-1,o=0;if(arguments.length===1)while(++s<n)f(r=e[s])&&(i+=(r-i)/++o);else while(++s<n)f(r=t.call(e,e[s],s))&&(i+=(r-i)/++o);return o?i:undefined},d3.median=function(e,t){return arguments.length>1&&(e=e.map(t)),e=e.filter(f),e.length?d3.quantile(e.sort(d3.ascending),.5):undefined},d3.min=function(e,t){var n=-1,r=e.length,i,s;if(arguments.length===1){while(++n<r&&((i=e[n])==null||i!=i))i=undefined;while(++n<r)(s=e[n])!=null&&i>s&&(i=s)}else{while(++n<r&&((i=t.call(e,e[n],n))==null||i!=i))i=undefined;while(++n<r)(s=t.call(e,e[n],n))!=null&&i>s&&(i=s)}return i},d3.max=function(e,t){var n=-1,r=e.length,i,s;if(arguments.length===1){while(++n<r&&((i=e[n])==null||i!=i))i=undefined;while(++n<r)(s=e[n])!=null&&s>i&&(i=s)}else{while(++n<r&&((i=t.call(e,e[n],n))==null||i!=i))i=undefined;while(++n<r)(s=t.call(e,e[n],n))!=null&&s>i&&(i=s)}return i},d3.extent=function(e,t){var n=-1,r=e.length,i,s,o;if(arguments.length===1){while(++n<r&&((i=o=e[n])==null||i!=i))i=o=undefined;while(++n<r)(s=e[n])!=null&&(i>s&&(i=s),o<s&&(o=s))}else{while(++n<r&&((i=o=t.call(e,e[n],n))==null||i!=i))i=undefined;while(++n<r)(s=t.call(e,e[n],n))!=null&&(i>s&&(i=s),o<s&&(o=s))}return[i,o]},d3.random={normal:function(e,t){var n=arguments.length;return n<2&&(t=1),n<1&&(e=0),function(){var n,r,i;do n=Math.random()*2-1,r=Math.random()*2-1,i=n*n+r*r;while(!i||i>1);return e+t*n*Math.sqrt(-2*Math.log(i)/i)}},logNormal:function(e,t){var n=arguments.length;n<2&&(t=1),n<1&&(e=0);var r=d3.random.normal();return function(){return Math.exp(e+t*r())}},irwinHall:function(e){return function(){for(var t=0,n=0;n<e;n++)t+=Math.random();return t/e}}},d3.sum=function(e,t){var n=0,r=e.length,i,s=-1;if(arguments.length===1)while(++s<r)isNaN(i=+e[s])||(n+=i);else while(++s<r)isNaN(i=+t.call(e,e[s],s))||(n+=i);return n},d3.quantile=function(e,t){var n=(e.length-1)*t+1,r=Math.floor(n),i=e[r-1],s=n-r;return s?i+s*(e[r]-i):i},d3.transpose=function(e){return d3.zip.apply(d3,e)},d3.zip=function(){if(!(i=arguments.length))return[];for(var e=-1,t=d3.min(arguments,l),n=new Array(t);++e<t;)for(var r=-1,i,s=n[e]=new Array(i);++r<i;)s[r]=arguments[r][e];return n},d3.bisector=function(e){return{left:function(t,n,r,i){arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);while(r<i){var s=r+i>>>1;e.call(t,t[s],s)<n?r=s+1:i=s}return r},right:function(t,n,r,i){arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);while(r<i){var s=r+i>>>1;n<e.call(t,t[s],s)?i=s:r=s+1}return r}}};var Zi=d3.bisector(function(e){return e});d3.bisectLeft=Zi.left,d3.bisect=d3.bisectRight=Zi.right,d3.first=function(e,t){var n=0,r=e.length,i=e[0],s;arguments.length===1&&(t=d3.ascending);while(++n<r)t.call(e,i,s=e[n])>0&&(i=s);return i},d3.last=function(e,t){var n=0,r=e.length,i=e[0],s;arguments.length===1&&(t=d3.ascending);while(++n<r)t.call(e,i,s=e[n])<=0&&(i=s);return i},d3.nest=function(){function e(t,s){if(s>=i.length)return u?u.call(n,t):o?t.sort(o):t;var a=-1,f=t.length,l=i[s++],c,h,p=new r,d,v={};while(++a<f)(d=p.get(c=l(h=t[a])))?d.push(h):p.set(c,[h]);return p.forEach(function(t,n){v[t]=e(n,s)}),v}function t(e,n){if(n>=i.length)return e;var r=[],o=s[n++],u;for(u in e)r.push({key:u,values:t(e[u],n)});return o&&r.sort(function(e,t){return o(e.key,t.key)}),r}var n={},i=[],s=[],o,u;return n.map=function(t){return e(t,0)},n.entries=function(n){return t(e(n,0),0)},n.key=function(e){return i.push(e),n},n.sortKeys=function(e){return s[i.length-1]=e,n},n.sortValues=function(e){return o=e,n},n.rollup=function(e){return u=e,n},n},d3.keys=function(e){var t=[];for(var n in e)t.push(n);return t},d3.values=function(e){var t=[];for(var n in e)t.push(e[n]);return t},d3.entries=function(e){var t=[];for(var n in e)t.push({key:n,value:e[n]});return t},d3.permute=function(e,t){var n=[],r=-1,i=t.length;while(++r<i)n[r]=e[t[r]];return n},d3.merge=function(e){return Array.prototype.concat.apply([],e)},d3.split=function(e,t){var n=[],r=[],i,s=-1,o=e.length;arguments.length<2&&(t=c);while(++s<o)t.call(r,i=e[s],s)?r=[]:(r.length||n.push(r),r.push(i));return n},d3.range=function(e,t,n){arguments.length<3&&(n=1,arguments.length<2&&(t=e,e=0));if((t-e)/n===Infinity)throw new Error("infinite range");var r=[],i=p(Math.abs(n)),s=-1,o;e*=i,t*=i,n*=i;if(n<0)while((o=e+n*++s)>t)r.push(o/i);else while((o=e+n*++s)<t)r.push(o/i);return r},d3.requote=function(e){return e.replace(es,"\\$&")};var es=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;d3.round=function(e,t){return t?Math.round(e*(t=Math.pow(10,t)))/t:Math.round(e)},d3.xhr=function(e,t,n){var r=new XMLHttpRequest;arguments.length<3?(n=t,t=null):t&&r.overrideMimeType&&r.overrideMimeType(t),r.open("GET",e,!0),t&&r.setRequestHeader("Accept",t),r.onreadystatechange=function(){if(r.readyState===4){var e=r.status;n(!e&&r.response||e>=200&&e<300||e===304?r:null)}},r.send(null)},d3.text=function(e,t,n){function r(e){n(e&&e.responseText)}arguments.length<3&&(n=t,t=null),d3.xhr(e,t,r)},d3.json=function(e,t){d3.text(e,"application/json",function(e){t(e?JSON.parse(e):null)})},d3.html=function(e,t){d3.text(e,"text/html",function(e){if(e!=null){var n=document.createRange();n.selectNode(document.body),e=n.createContextualFragment(e)}t(e)})},d3.xml=function(e,t,n){function r(e){n(e&&e.responseXML)}arguments.length<3&&(n=t,t=null),d3.xhr(e,t,r)};var ts={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};d3.ns={prefix:ts,qualify:function(e){var t=e.indexOf(":"),n=e;return t>=0&&(n=e.substring(0,t),e=e.substring(t+1)),ts.hasOwnProperty(n)?{space:ts[n],local:e}:e}},d3.dispatch=function(){var e=new d,t=-1,n=arguments.length;while(++t<n)e[arguments[t]]=v(e);return e},d.prototype.on=function(e,t){var n=e.indexOf("."),r="";return n>0&&(r=e.substring(n+1),e=e.substring(0,n)),arguments.length<2?this[e].on(r):this[e].on(r,t)},d3.format=function(e){var t=ns.exec(e),n=t[1]||" ",r=t[3]||"",i=t[5],s=+t[6],o=t[7],u=t[8],a=t[9],f=1,l="",c=!1;u&&(u=+u.substring(1)),i&&(n="0",o&&(s-=Math.floor((s-1)/4)));switch(a){case"n":o=!0,a="g";break;case"%":f=100,l="%",a="f";break;case"p":f=100,l="%",a="r";break;case"d":c=!0,u=0;break;case"s":f=-1,a="r"}return a=="r"&&!u&&(a="g"),a=rs.get(a)||g,function(e){if(c&&e%1)return"";var t=e<0&&(e=-e)?"-":r;if(f<0){var h=d3.formatPrefix(e,u);e=h.scale(e),l=h.symbol}else e*=f;e=a(e,u);if(i){var p=e.length+t.length;p<s&&(e=(new Array(s-p+1)).join(n)+e),o&&(e=y(e)),e=t+e}else{o&&(e=y(e)),e=t+e;var p=e.length;p<s&&(e=(new Array(s-p+1)).join(n)+e)}return e+l}};var ns=/(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/,rs=d3.map({g:function(e,t){return e.toPrecision(t)},e:function(e,t){return e.toExponential(t)},f:function(e,t){return e.toFixed(t)},r:function(e,t){return d3.round(e,t=m(e,t)).toFixed(Math.max(0,Math.min(20,t)))}}),is=["y","z","a","f","p","n","μ","m","","k","M","G","T","P","E","Z","Y"].map(b);d3.formatPrefix=function(e,t){var n=0;return e&&(e<0&&(e*=-1),t&&(e=d3.round(e,m(e,t))),n=1+Math.floor(1e-12+Math.log(e)/Math.LN10),n=Math.max(-24,Math.min(24,Math.floor((n<=0?n+1:n-1)/3)*3))),is[8+n/3]};var ss=T(2),os=T(3),us=function(){return x},as=d3.map({linear:us,poly:T,quad:function(){return ss},cubic:function(){return os},sin:function(){return N},exp:function(){return C},circle:function(){return k},elastic:L,back:A,bounce:function(){return O}}),fs=d3.map({"in":x,out:E,"in-out":S,"out-in":function(e){return S(E(e))}});d3.ease=function(e){var t=e.indexOf("-"),n=t>=0?e.substring(0,t):e,r=t>=0?e.substring(t+1):"in";return n=as.get(n)||us,r=fs.get(r)||x,w(r(n.apply(null,Array.prototype.slice.call(arguments,1))))},d3.event=null,d3.transform=function(e){var t=document.createElementNS(d3.ns.prefix.svg,"g");return(d3.transform=function(e){t.setAttribute("transform",e);var n=t.transform.baseVal.consolidate();return new P(n?n.matrix:cs)})(e)},P.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var ls=180/Math.PI,cs={a:1,b:0,c:0,d:1,e:0,f:0};d3.interpolate=function(e,t){var n=d3.interpolators.length,r;while(--n>=0&&!(r=d3.interpolators[n](e,t)));return r},d3.interpolateNumber=function(e,t){return t-=e,function(n){return e+t*n}},d3.interpolateRound=function(e,t){return t-=e,function(n){return Math.round(e+t*n)}},d3.interpolateString=function(e,t){var n,r,i,s=0,o=0,u=[],a=[],f,l;hs.lastIndex=0;for(r=0;n=hs.exec(t);++r)n.index&&u.push(t.substring(s,o=n.index)),a.push({i:u.length,x:n[0]}),u.push(null),s=hs.lastIndex;s<t.length&&u.push(t.substring(s));for(r=0,f=a.length;(n=hs.exec(e))&&r<f;++r){l=a[r];if(l.x==n[0]){if(l.i)if(u[l.i+1]==null){u[l.i-1]+=l.x,u.splice(l.i,1);for(i=r+1;i<f;++i)a[i].i--}else{u[l.i-1]+=l.x+u[l.i+1],u.splice(l.i,2);for(i=r+1;i<f;++i)a[i].i-=2}else if(u[l.i+1]==null)u[l.i]=l.x;else{u[l.i]=l.x+u[l.i+1],u.splice(l.i+1,1);for(i=r+1;i<f;++i)a[i].i--}a.splice(r,1),f--,r--}else l.x=d3.interpolateNumber(parseFloat(n[0]),parseFloat(l.x))}while(r<f)l=a.pop(),u[l.i+1]==null?u[l.i]=l.x:(u[l.i]=l.x+u[l.i+1],u.splice(l.i+1,1)),f--;return u.length===1?u[0]==null?a[0].x:function(){return t}:function(e){for(r=0;r<f;++r)u[(l=a[r]).i]=l.x(e);return u.join("")}},d3.interpolateTransform=function(e,t){var n=[],r=[],i,s=d3.transform(e),o=d3.transform(t),u=s.translate,a=o.translate,f=s.rotate,l=o.rotate,c=s.skew,h=o.skew,p=s.scale,d=o.scale;return u[0]!=a[0]||u[1]!=a[1]?(n.push("translate(",null,",",null,")"),r.push({i:1,x:d3.interpolateNumber(u[0],a[0])},{i:3,x:d3.interpolateNumber(u[1],a[1])})):a[0]||a[1]?n.push("translate("+a+")"):n.push(""),f!=l?(f-l>180?l+=360:l-f>180&&(f+=360),r.push({i:n.push(n.pop()+"rotate(",null,")")-2,x:d3.interpolateNumber(f,l)})):l&&n.push(n.pop()+"rotate("+l+")"),c!=h?r.push({i:n.push(n.pop()+"skewX(",null,")")-2,x:d3.interpolateNumber(c,h)}):h&&n.push(n.pop()+"skewX("+h+")"),p[0]!=d[0]||p[1]!=d[1]?(i=n.push(n.pop()+"scale(",null,",",null,")"),r.push({i:i-4,x:d3.interpolateNumber(p[0],d[0])},{i:i-2,x:d3.interpolateNumber(p[1],d[1])})):(d[0]!=1||d[1]!=1)&&n.push(n.pop()+"scale("+d+")"),i=r.length,function(e){var t=-1,s;while(++t<i)n[(s=r[t]).i]=s.x(e);return n.join("")}},d3.interpolateRgb=function(e,t){e=d3.rgb(e),t=d3.rgb(t);var n=e.r,r=e.g,i=e.b,s=t.r-n,o=t.g-r,u=t.b-i;return function(e){return"#"+W(Math.round(n+s*e))+W(Math.round(r+o*e))+W(Math.round(i+u*e))}},d3.interpolateHsl=function(e,t){e=d3.hsl(e),t=d3.hsl(t);var n=e.h,r=e.s,i=e.l,s=t.h-n,o=t.s-r,u=t.l-i;return s>180?s-=360:s<-180&&(s+=360),function(e){return Y(n+s*e,r+o*e,i+u*e)+""}},d3.interpolateLab=function(e,t){e=d3.lab(e),t=d3.lab(t);var n=e.l,r=e.a,i=e.b,s=t.l-n,o=t.a-r,u=t.b-i;return function(e){return it(n+s*e,r+o*e,i+u*e)+""}},d3.interpolateHcl=function(e,t){e=d3.hcl(e),t=d3.hcl(t);var n=e.h,r=e.c,i=e.l,s=t.h-n,o=t.c-r,u=t.l-i;return s>180?s-=360:s<-180&&(s+=360),function(e){return tt(n+s*e,r+o*e,i+u*e)+""}},d3.interpolateArray=function(e,t){var n=[],r=[],i=e.length,s=t.length,o=Math.min(e.length,t.length),u;for(u=0;u<o;++u)n.push(d3.interpolate(e[u],t[u]));for(;u<i;++u)r[u]=e[u];for(;u<s;++u)r[u]=t[u];return function(e){for(u=0;u<o;++u)r[u]=n[u](e);return r}},d3.interpolateObject=function(e,t){var n={},r={},i;for(i in e)i in t?n[i]=F(i)(e[i],t[i]):r[i]=e[i];for(i in t)i in e||(r[i]=t[i]);return function(e){for(i in n)r[i]=n[i](e);return r}};var hs=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;d3.interpolators=[d3.interpolateObject,function(e,t){return t instanceof Array&&d3.interpolateArray(e,t)},function(e,t){return(typeof e=="string"||typeof t=="string")&&d3.interpolateString(e+"",t+"")},function(e,t){return(typeof t=="string"?ds.has(t)||/^(#|rgb\(|hsl\()/.test(t):t instanceof R)&&d3.interpolateRgb(e,t)},function(e,t){return!isNaN(e=+e)&&!isNaN(t=+t)&&d3.interpolateNumber(e,t)}],R.prototype.toString=function(){return this.rgb()+""},d3.rgb=function(e,t,n){return arguments.length===1?e instanceof z?U(e.r,e.g,e.b):X(""+e,U,Y):U(~~e,~~t,~~n)};var ps=z.prototype=new R;ps.brighter=function(e){e=Math.pow(.7,arguments.length?e:1);var t=this.r,n=this.g,r=this.b,i=30;return!t&&!n&&!r?U(i,i,i):(t&&t<i&&(t=i),n&&n<i&&(n=i),r&&r<i&&(r=i),U(Math.min(255,Math.floor(t/e)),Math.min(255,Math.floor(n/e)),Math.min(255,Math.floor(r/e))))},ps.darker=function(e){return e=Math.pow(.7,arguments.length?e:1),U(Math.floor(e*this.r),Math.floor(e*this.g),Math.floor(e*this.b))},ps.hsl=function(){return V(this.r,this.g,this.b)},ps.toString=function(){return"#"+W(this.r)+W(this.g)+W(this.b)};var ds=d3.map({aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"});ds.forEach(function(e,t){ds.set(e,X(t,U,Y))}),d3.hsl=function(e,t,n){return arguments.length===1?e instanceof G?Q(e.h,e.s,e.l):X(""+e,V,Q):Q(+e,+t,+n)};var vs=G.prototype=new R;vs.brighter=function(e){return e=Math.pow(.7,arguments.length?e:1),Q(this.h,this.s,this.l/e)},vs.darker=function(e){return e=Math.pow(.7,arguments.length?e:1),Q(this.h,this.s,e*this.l)},vs.rgb=function(){return Y(this.h,this.s,this.l)},d3.hcl=function(e,t,n){return arguments.length===1?e instanceof et?Z(e.h,e.c,e.l):e instanceof rt?st(e.l,e.a,e.b):st((e=$((e=d3.rgb(e)).r,e.g,e.b)).l,e.a,e.b):Z(+e,+t,+n)};var ms=et.prototype=new R;ms.brighter=function(e){return Z(this.h,this.c,Math.min(100,this.l+gs*(arguments.length?e:1)))},ms.darker=function(e){return Z(this.h,this.c,Math.max(0,this.l-gs*(arguments.length?e:1)))},ms.rgb=function(){return tt(this.h,this.c,this.l).rgb()},d3.lab=function(e,t,n){return arguments.length===1?e instanceof rt?nt(e.l,e.a,e.b):e instanceof et?tt(e.l,e.c,e.h):$((e=d3.rgb(e)).r,e.g,e.b):nt(+e,+t,+n)};var gs=18,ys=.95047,bs=1,ws=1.08883,Es=rt.prototype=new R;Es.brighter=function(e){return nt(Math.min(100,this.l+gs*(arguments.length?e:1)),this.a,this.b)},Es.darker=function(e){return nt(Math.max(0,this.l-gs*(arguments.length?e:1)),this.a,this.b)},Es.rgb=function(){return it(this.l,this.a,this.b)};var Ss=function(e,t){return t.querySelector(e)},xs=function(e,t){return t.querySelectorAll(e)},Ts=document.documentElement,Ns=Ts.matchesSelector||Ts.webkitMatchesSelector||Ts.mozMatchesSelector||Ts.msMatchesSelector||Ts.oMatchesSelector,Cs=function(e,t){return Ns.call(e,t)};typeof Sizzle=="function"&&(Ss=function(e,t){return Sizzle(e,t)[0]||null},xs=function(e,t){return Sizzle.uniqueSort(Sizzle(e,t))},Cs=Sizzle.matchesSelector);var ks=[];d3.selection=function(){return Ls},d3.selection.prototype=ks,ks.select=function(e){var t=[],n,r,i,s;typeof e!="function"&&(e=lt(e));for(var o=-1,u=this.length;++o<u;){t.push(n=[]),n.parentNode=(i=this[o]).parentNode;for(var a=-1,f=i.length;++a<f;)(s=i[a])?(n.push(r=e.call(s,s.__data__,a)),r&&"__data__"in s&&(r.__data__=s.__data__)):n.push(null)}return ft(t)},ks.selectAll=function(e){var t=[],n,r;typeof e!="function"&&(e=ct(e));for(var i=-1,s=this.length;++i<s;)for(var o=this[i],u=-1,a=o.length;++u<a;)if(r=o[u])t.push(n=Ji(e.call(r,r.__data__,u))),n.parentNode=r;return ft(t)},ks.attr=function(e,t){if(arguments.length<2){if(typeof e=="string"){var n=this.node();return e=d3.ns.qualify(e),e.local?n.getAttributeNS(e.space,e.local):n.getAttribute(e)}for(t in e)this.each(ht(t,e[t]));return this}return this.each(ht(e,t))},ks.classed=function(e,t){if(arguments.length<2){if(typeof e=="string"){var n=this.node(),r=(e=e.trim().split(/^|\s+/g)).length,i=-1;if(t=n.classList){while(++i<r)if(!t.contains(e[i]))return!1}else{t=n.className,t.baseVal!=null&&(t=t.baseVal);while(++i<r)if(!pt(e[i]).test(t))return!1}return!0}for(t in e)this.each(dt(t,e[t]));return this}return this.each(dt(e,t))},ks.style=function(e,t,n){var r=arguments.length;if(r<3){if(typeof e!="string"){r<2&&(t="");for(n in e)this.each(mt(n,e[n],t));return this}if(r<2)return window.getComputedStyle(this.node(),null).getPropertyValue(e);n=""}return this.each(mt(e,t,n))},ks.property=function(e,t){if(arguments.length<2){if(typeof e=="string")return this.node()[e];for(t in e)this.each(gt(t,e[t]));return this}return this.each(gt(e,t))},ks.text=function(e){return arguments.length<1?this.node().textContent:this.each(typeof e=="function"?function(){var t=e.apply(this,arguments);this.textContent=t==null?"":t}:e==null?function(){this.textContent=""}:function(){this.textContent=e})},ks.html=function(e){return arguments.length<1?this.node().innerHTML:this.each(typeof e=="function"?function(){var t=e.apply(this,arguments);this.innerHTML=t==null?"":t}:e==null?function(){this.innerHTML=""}:function(){this.innerHTML=e})},ks.append=function(e){function t(){return this.appendChild(document.createElementNS(this.namespaceURI,e))}function n(){return this.appendChild(document.createElementNS(e.space,e.local))}return e=d3.ns.qualify(e),this.select(e.local?n:t)},ks.insert=function(e,t){function n(){return this.insertBefore(document.createElementNS(this.namespaceURI,e),Ss(t,this))}function r(){return this.insertBefore(document.createElementNS(e.space,e.local),Ss(t,this))}return e=d3.ns.qualify(e),this.select(e.local?r:n)},ks.remove=function(){return this.each(function(){var e=this.parentNode;e&&e.removeChild(this)})},ks.data=function(e,t){function n(e,n){var i,s=e.length,o=n.length,u=Math.min(s,o),c=Math.max(s,o),h=[],p=[],d=[],v,m;if(t){var g=new r,y=[],b,w=n.length;for(i=-1;++i<s;)b=t.call(v=e[i],v.__data__,i),g.has(b)?d[w++]=v:g.set(b,v),y.push(b);for(i=-1;++i<o;)b=t.call(n,m=n[i],i),g.has(b)?(h[i]=v=g.get(b),v.__data__=m,p[i]=d[i]=null):(p[i]=yt(m),h[i]=d[i]=null),g.remove(b);for(i=-1;++i<s;)g.has(y[i])&&(d[i]=e[i])}else{for(i=-1;++i<u;)v=e[i],m=n[i],v?(v.__data__=m,h[i]=v,p[i]=d[i]=null):(p[i]=yt(m),h[i]=d[i]=null);for(;i<o;++i)p[i]=yt(n[i]),h[i]=d[i]=null;for(;i<c;++i)d[i]=e[i],p[i]=h[i]=null}p.update=h,p.parentNode=h.parentNode=d.parentNode=e.parentNode,a.push(p),f.push(h),l.push(d)}var i=-1,s=this.length,o,u;if(!arguments.length){e=new Array(s=(o=this[0]).length);while(++i<s)if(u=o[i])e[i]=u.__data__;return e}var a=xt([]),f=ft([]),l=ft([]);if(typeof e=="function")while(++i<s)n(o=this[i],e.call(o,o.parentNode.__data__,i));else while(++i<s)n(o=this[i],e);return f.enter=function(){return a},f.exit=function(){return l},f},ks.datum=ks.map=function(e){return arguments.length<1?this.property("__data__"):this.property("__data__",e)},ks.filter=function(e){var t=[],n,r,i;typeof e!="function"&&(e=bt(e));for(var s=0,o=this.length;s<o;s++){t.push(n=[]),n.parentNode=(r=this[s]).parentNode;for(var u=0,a=r.length;u<a;u++)(i=r[u])&&e.call(i,i.__data__,u)&&n.push(i)}return ft(t)},ks.order=function(){for(var e=-1,t=this.length;++e<t;)for(var n=this[e],r=n.length-1,i=n[r],s;--r>=0;)if(s=n[r])i&&i!==s.nextSibling&&i.parentNode.insertBefore(s,i),i=s;return this},ks.sort=function(e){e=wt.apply(this,arguments);for(var t=-1,n=this.length;++t<n;)this[t].sort(e);return this.order()},ks.on=function(e,t,n){var r=arguments.length;if(r<3){if(typeof e!="string"){r<2&&(t=!1);for(n in e)this.each(Et(n,e[n],t));return this}if(r<2)return(r=this.node()["__on"+e])&&r._;n=!1}return this.each(Et(e,t,n))},ks.each=function(e){return St(this,function(t,n,r){e.call(t,t.__data__,n,r)})},ks.call=function(e){return e.apply(this,(arguments[0]=this,arguments)),this},ks.empty=function(){return!this.node()},ks.node=function(e){for(var t=0,n=this.length;t<n;t++)for(var r=this[t],i=0,s=r.length;i<s;i++){var o=r[i];if(o)return o}return null},ks.transition=function(){var e=[],t,n;for(var r=-1,i=this.length;++r<i;){e.push(t=[]);for(var s=this[r],o=-1,u=s.length;++o<u;)t.push((n=s[o])?{node:n,delay:Bs,duration:js}:null)}return Tt(e,_s||++Ms,Date.now())};var Ls=ft([[document]]);Ls[0].parentNode=Ts,d3.select=function(e){return typeof e=="string"?Ls.select(e):ft([[e]])},d3.selectAll=function(e){return typeof e=="string"?Ls.selectAll(e):ft([Ji(e)])};var As=[];d3.selection.enter=xt,d3.selection.enter.prototype=As,As.append=ks.append,As.insert=ks.insert,As.empty=ks.empty,As.node=ks.node,As.select=function(e){var t=[],n,r,i,s,o;for(var u=-1,a=this.length;++u<a;){i=(s=this[u]).update,t.push(n=[]),n.parentNode=s.parentNode;for(var f=-1,l=s.length;++f<l;)(o=s[f])?(n.push(i[f]=r=e.call(s.parentNode,o.__data__,f)),r.__data__=o.__data__):n.push(null)}return ft(t)};var Os=[],Ms=0,_s=0,Ds=0,Ps=250,Hs=d3.ease("cubic-in-out"),Bs=Ds,js=Ps,Fs=Hs;Os.call=ks.call,d3.transition=function(e){return arguments.length?_s?e.transition():e:Ls.transition()},d3.transition.prototype=Os,Os.select=function(e){var t=[],n,r,i;typeof e!="function"&&(e=lt(e));for(var s=-1,o=this.length;++s<o;){t.push(n=[]);for(var u=this[s],a=-1,f=u.length;++a<f;)(i=u[a])&&(r=e.call(i.node,i.node.__data__,a))?("__data__"in i.node&&(r.__data__=i.node.__data__),n.push({node:r,delay:i.delay,duration:i.duration})):n.push(null)}return Tt(t,this.id,this.time).ease(this.ease())},Os.selectAll=function(e){var t=[],n,r,i;typeof e!="function"&&(e=ct(e));for(var s=-1,o=this.length;++s<o;)for(var u=this[s],a=-1,f=u.length;++a<f;)if(i=u[a]){r=e.call(i.node,i.node.__data__,a),t.push(n=[]);for(var l=-1,c=r.length;++l<c;)n.push({node:r[l],delay:i.delay,duration:i.duration})}return Tt(t,this.id,this.time).ease(this.ease())},Os.filter=function(e){var t=[],n,r,i;typeof e!="function"&&(e=bt(e));for(var s=0,o=this.length;s<o;s++){t.push(n=[]);for(var r=this[s],u=0,a=r.length;u<a;u++)(i=r[u])&&e.call(i.node,i.node.__data__,u)&&n.push(i)}return Tt(t,this.id,this.time).ease(this.ease())},Os.attr=function(e,t){if(arguments.length<2){for(t in e)this.attrTween(t,kt(e[t],t));return this}return this.attrTween(e,kt(t,e))},Os.attrTween=function(e,t){function n(e,n){var r=t.call(this,e,n,this.getAttribute(i));return r===Is?(this.removeAttribute(i),null):r&&function(e){this.setAttribute(i,r(e))}}function r(e,n){var r=t.call(this,e,n,this.getAttributeNS(i.space,i.local));return r===Is?(this.removeAttributeNS(i.space,i.local),null):r&&function(e){this.setAttributeNS(i.space,i.local,r(e))}}var i=d3.ns.qualify(e);return this.tween("attr."+e,i.local?r:n)},Os.style=function(e,t,n){var r=arguments.length;if(r<3){if(typeof e!="string"){r<2&&(t="");for(n in e)this.styleTween(n,kt(e[n],n),t);return this}n=""}return this.styleTween(e,kt(t,e),n)},Os.styleTween=function(e,t,n){return arguments.length<3&&(n=""),this.tween("style."+e,function(r,i){var s=t.call(this,r,i,window.getComputedStyle(this,null).getPropertyValue(e));return s===Is?(this.style.removeProperty(e),null):s&&function(t){this.style.setProperty(e,s(t),n)}})},Os.text=function(e){return this.tween("text",function(t,n){this.textContent=typeof e=="function"?e.call(this,t,n):e})},Os.remove=function(){return this.each("end.transition",function(){var e;!this.__transition__&&(e=this.parentNode)&&e.removeChild(this)})},Os.delay=function(e){return St(this,typeof e=="function"?function(t,n,r){t.delay=e.call(t=t.node,t.__data__,n,r)|0}:(e|=0,function(t){t.delay=e}))},Os.duration=function(e){return St(this,typeof e=="function"?function(t,n,r){t.duration=Math.max(1,e.call(t=t.node,t.__data__,n,r)|0)}:(e=Math.max(1,e|0),function(t){t.duration=e}))},Os.transition=function(){return this.select(s)},d3.tween=function(e,t){function n(n,r,i){var s=e.call(this,n,r);return s==null?i!=""&&Is:i!=s&&t(i,s+"")}function r(n,r,i){return i!=e&&t(i,e)}return typeof e=="function"?n:e==null?Ct:(e+="",r)};var Is={},qs=0,Rs={},Us=null,zs,Ws;d3.timer=function(e,t,n){if(arguments.length<3){if(arguments.length<2)t=0;else if(!isFinite(t))return;n=Date.now()}var r=Rs[e.id];r&&r.callback===e?(r.then=n,r.delay=t):Rs[e.id=++qs]=Us={callback:e,then:n,delay:t,next:Us},zs||(Ws=clearTimeout(Ws),zs=1,Xs(Lt))},d3.timer.flush=function(){var e,t=Date.now(),n=Us;while(n)e=t-n.then,n.delay||(n.flush=n.callback(e)),n=n.next;At()};var Xs=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout
(e,17)};d3.mouse=function(e){return Ot(e,_())};var Vs=/WebKit/.test(navigator.userAgent)?-1:0;d3.touches=function(e,t){return arguments.length<2&&(t=_().touches),t?Ji(t).map(function(t){var n=Ot(e,t);return n.identifier=t.identifier,n}):[]},d3.scale={},d3.scale.linear=function(){return Bt([0,1],[0,1],d3.interpolate,!1)},d3.scale.log=function(){return Wt(d3.scale.linear(),Xt)};var $s=d3.format(".0e");Xt.pow=function(e){return Math.pow(10,e)},Vt.pow=function(e){return-Math.pow(10,-e)},d3.scale.pow=function(){return $t(d3.scale.linear(),1)},d3.scale.sqrt=function(){return d3.scale.pow().exponent(.5)},d3.scale.ordinal=function(){return Kt([],{t:"range",a:[[]]})},d3.scale.category10=function(){return d3.scale.ordinal().range(Js)},d3.scale.category20=function(){return d3.scale.ordinal().range(Ks)},d3.scale.category20b=function(){return d3.scale.ordinal().range(Qs)},d3.scale.category20c=function(){return d3.scale.ordinal().range(Gs)};var Js=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],Ks=["#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f","#c7c7c7","#bcbd22","#dbdb8d","#17becf","#9edae5"],Qs=["#393b79","#5254a3","#6b6ecf","#9c9ede","#637939","#8ca252","#b5cf6b","#cedb9c","#8c6d31","#bd9e39","#e7ba52","#e7cb94","#843c39","#ad494a","#d6616b","#e7969c","#7b4173","#a55194","#ce6dbd","#de9ed6"],Gs=["#3182bd","#6baed6","#9ecae1","#c6dbef","#e6550d","#fd8d3c","#fdae6b","#fdd0a2","#31a354","#74c476","#a1d99b","#c7e9c0","#756bb1","#9e9ac8","#bcbddc","#dadaeb","#636363","#969696","#bdbdbd","#d9d9d9"];d3.scale.quantile=function(){return Qt([],[])},d3.scale.quantize=function(){return Gt(0,1,[0,1])},d3.scale.threshold=function(){return Yt([.5],[0,1])},d3.scale.identity=function(){return Zt([0,1])},d3.svg={},d3.svg.arc=function(){function e(){var e=t.apply(this,arguments),s=n.apply(this,arguments),o=r.apply(this,arguments)+Ys,u=i.apply(this,arguments)+Ys,a=(u<o&&(a=o,o=u,u=a),u-o),f=a<Math.PI?"0":"1",l=Math.cos(o),c=Math.sin(o),h=Math.cos(u),p=Math.sin(u);return a>=Zs?e?"M0,"+s+"A"+s+","+s+" 0 1,1 0,"+ -s+"A"+s+","+s+" 0 1,1 0,"+s+"M0,"+e+"A"+e+","+e+" 0 1,0 0,"+ -e+"A"+e+","+e+" 0 1,0 0,"+e+"Z":"M0,"+s+"A"+s+","+s+" 0 1,1 0,"+ -s+"A"+s+","+s+" 0 1,1 0,"+s+"Z":e?"M"+s*l+","+s*c+"A"+s+","+s+" 0 "+f+",1 "+s*h+","+s*p+"L"+e*h+","+e*p+"A"+e+","+e+" 0 "+f+",0 "+e*l+","+e*c+"Z":"M"+s*l+","+s*c+"A"+s+","+s+" 0 "+f+",1 "+s*h+","+s*p+"L0,0"+"Z"}var t=en,n=tn,r=nn,i=rn;return e.innerRadius=function(n){return arguments.length?(t=u(n),e):t},e.outerRadius=function(t){return arguments.length?(n=u(t),e):n},e.startAngle=function(t){return arguments.length?(r=u(t),e):r},e.endAngle=function(t){return arguments.length?(i=u(t),e):i},e.centroid=function(){var e=(t.apply(this,arguments)+n.apply(this,arguments))/2,s=(r.apply(this,arguments)+i.apply(this,arguments))/2+Ys;return[Math.cos(s)*e,Math.sin(s)*e]},e};var Ys=-Math.PI/2,Zs=2*Math.PI-1e-6;d3.svg.line=function(){return sn(i)};var eo=d3.map({linear:an,"linear-closed":fn,"step-before":ln,"step-after":cn,basis:gn,"basis-open":yn,"basis-closed":bn,bundle:wn,cardinal:dn,"cardinal-open":hn,"cardinal-closed":pn,monotone:Cn});eo.forEach(function(e,t){t.key=e,t.closed=/-closed$/.test(e)});var to=[0,2/3,1/3,0],no=[0,1/3,2/3,0],ro=[0,1/6,2/3,1/6];d3.svg.line.radial=function(){var e=sn(kn);return e.radius=e.x,delete e.x,e.angle=e.y,delete e.y,e},ln.reverse=cn,cn.reverse=ln,d3.svg.area=function(){return Ln(i)},d3.svg.area.radial=function(){var e=Ln(kn);return e.radius=e.x,delete e.x,e.innerRadius=e.x0,delete e.x0,e.outerRadius=e.x1,delete e.x1,e.angle=e.y,delete e.y,e.startAngle=e.y0,delete e.y0,e.endAngle=e.y1,delete e.y1,e},d3.svg.chord=function(){function e(e,u){var a=t(this,s,e,u),f=t(this,o,e,u);return"M"+a.p0+r(a.r,a.p1,a.a1-a.a0)+(n(a,f)?i(a.r,a.p1,a.r,a.p0):i(a.r,a.p1,f.r,f.p0)+r(f.r,f.p1,f.a1-f.a0)+i(f.r,f.p1,a.r,a.p0))+"Z"}function t(e,t,n,r){var i=t.call(e,n,r),s=a.call(e,i,r),o=f.call(e,i,r)+Ys,u=l.call(e,i,r)+Ys;return{r:s,a0:o,a1:u,p0:[s*Math.cos(o),s*Math.sin(o)],p1:[s*Math.cos(u),s*Math.sin(u)]}}function n(e,t){return e.a0==t.a0&&e.a1==t.a1}function r(e,t,n){return"A"+e+","+e+" 0 "+ +(n>Math.PI)+",1 "+t}function i(e,t,n,r){return"Q 0,0 "+r}var s=An,o=On,a=Mn,f=nn,l=rn;return e.radius=function(t){return arguments.length?(a=u(t),e):a},e.source=function(t){return arguments.length?(s=u(t),e):s},e.target=function(t){return arguments.length?(o=u(t),e):o},e.startAngle=function(t){return arguments.length?(f=u(t),e):f},e.endAngle=function(t){return arguments.length?(l=u(t),e):l},e},d3.svg.diagonal=function(){function e(e,i){var s=t.call(this,e,i),o=n.call(this,e,i),u=(s.y+o.y)/2,a=[s,{x:s.x,y:u},{x:o.x,y:u},o];return a=a.map(r),"M"+a[0]+"C"+a[1]+" "+a[2]+" "+a[3]}var t=An,n=On,r=Pn;return e.source=function(n){return arguments.length?(t=u(n),e):t},e.target=function(t){return arguments.length?(n=u(t),e):n},e.projection=function(t){return arguments.length?(r=t,e):r},e},d3.svg.diagonal.radial=function(){var e=d3.svg.diagonal(),t=Pn,n=e.projection;return e.projection=function(e){return arguments.length?n(Hn(t=e)):t},e},d3.svg.mouse=d3.mouse,d3.svg.touches=d3.touches,d3.svg.symbol=function(){function e(e,r){return(io.get(t.call(this,e,r))||Fn)(n.call(this,e,r))}var t=jn,n=Bn;return e.type=function(n){return arguments.length?(t=u(n),e):t},e.size=function(t){return arguments.length?(n=u(t),e):n},e};var io=d3.map({circle:Fn,cross:function(e){var t=Math.sqrt(e/5)/2;return"M"+ -3*t+","+ -t+"H"+ -t+"V"+ -3*t+"H"+t+"V"+ -t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+ -t+"V"+t+"H"+ -3*t+"Z"},diamond:function(e){var t=Math.sqrt(e/(2*oo)),n=t*oo;return"M0,"+ -t+"L"+n+",0"+" 0,"+t+" "+ -n+",0"+"Z"},square:function(e){var t=Math.sqrt(e)/2;return"M"+ -t+","+ -t+"L"+t+","+ -t+" "+t+","+t+" "+ -t+","+t+"Z"},"triangle-down":function(e){var t=Math.sqrt(e/so),n=t*so/2;return"M0,"+n+"L"+t+","+ -n+" "+ -t+","+ -n+"Z"},"triangle-up":function(e){var t=Math.sqrt(e/so),n=t*so/2;return"M0,"+ -n+"L"+t+","+n+" "+ -t+","+n+"Z"}});d3.svg.symbolTypes=io.keys();var so=Math.sqrt(3),oo=Math.tan(30*Math.PI/180);d3.svg.axis=function(){function e(e){e.each(function(){var e=d3.select(this),c=a==null?t.ticks?t.ticks.apply(t,u):t.domain():a,h=f==null?t.tickFormat?t.tickFormat.apply(t,u):String:f,p=Rn(t,c,l),d=e.selectAll(".minor").data(p,String),v=d.enter().insert("line","g").attr("class","tick minor").style("opacity",1e-6),m=d3.transition(d.exit()).style("opacity",1e-6).remove(),g=d3.transition(d).style("opacity",1),y=e.selectAll("g").data(c,String),b=y.enter().insert("g","path").style("opacity",1e-6),w=d3.transition(y.exit()).style("opacity",1e-6).remove(),E=d3.transition(y).style("opacity",1),S,x=Dt(t),T=e.selectAll(".domain").data([0]),N=T.enter().append("path").attr("class","domain"),C=d3.transition(T),k=t.copy(),L=this.__chart__||k;this.__chart__=k,b.append("line").attr("class","tick"),b.append("text");var A=b.select("line"),O=E.select("line"),M=y.select("text").text(h),_=b.select("text"),D=E.select("text");switch(n){case"bottom":S=In,v.attr("y2",i),g.attr("x2",0).attr("y2",i),A.attr("y2",r),_.attr("y",Math.max(r,0)+o),O.attr("x2",0).attr("y2",r),D.attr("x",0).attr("y",Math.max(r,0)+o),M.attr("dy",".71em").attr("text-anchor","middle"),C.attr("d","M"+x[0]+","+s+"V0H"+x[1]+"V"+s);break;case"top":S=In,v.attr("y2",-i),g.attr("x2",0).attr("y2",-i),A.attr("y2",-r),_.attr("y",-(Math.max(r,0)+o)),O.attr("x2",0).attr("y2",-r),D.attr("x",0).attr("y",-(Math.max(r,0)+o)),M.attr("dy","0em").attr("text-anchor","middle"),C.attr("d","M"+x[0]+","+ -s+"V0H"+x[1]+"V"+ -s);break;case"left":S=qn,v.attr("x2",-i),g.attr("x2",-i).attr("y2",0),A.attr("x2",-r),_.attr("x",-(Math.max(r,0)+o)),O.attr("x2",-r).attr("y2",0),D.attr("x",-(Math.max(r,0)+o)).attr("y",0),M.attr("dy",".32em").attr("text-anchor","end"),C.attr("d","M"+ -s+","+x[0]+"H0V"+x[1]+"H"+ -s);break;case"right":S=qn,v.attr("x2",i),g.attr("x2",i).attr("y2",0),A.attr("x2",r),_.attr("x",Math.max(r,0)+o),O.attr("x2",r).attr("y2",0),D.attr("x",Math.max(r,0)+o).attr("y",0),M.attr("dy",".32em").attr("text-anchor","start"),C.attr("d","M"+s+","+x[0]+"H0V"+x[1]+"H"+s)}if(t.ticks)b.call(S,L),E.call(S,k),w.call(S,k),v.call(S,L),g.call(S,k),m.call(S,k);else{var P=k.rangeBand()/2,H=function(e){return k(e)+P};b.call(S,H),E.call(S,H)}})}var t=d3.scale.linear(),n="bottom",r=6,i=6,s=6,o=3,u=[10],a=null,f,l=0;return e.scale=function(n){return arguments.length?(t=n,e):t},e.orient=function(t){return arguments.length?(n=t,e):n},e.ticks=function(){return arguments.length?(u=arguments,e):u},e.tickValues=function(t){return arguments.length?(a=t,e):a},e.tickFormat=function(t){return arguments.length?(f=t,e):f},e.tickSize=function(t,n,o){if(!arguments.length)return r;var u=arguments.length-1;return r=+t,i=u>1?+n:r,s=u>0?+arguments[u]:r,e},e.tickPadding=function(t){return arguments.length?(o=+t,e):o},e.tickSubdivide=function(t){return arguments.length?(l=+t,e):l},e},d3.svg.brush=function(){function e(s){s.each(function(){var s=d3.select(this),f=s.selectAll(".background").data([0]),l=s.selectAll(".extent").data([0]),c=s.selectAll(".resize").data(a,String),h;s.style("pointer-events","all").on("mousedown.brush",i).on("touchstart.brush",i),f.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),l.enter().append("rect").attr("class","extent").style("cursor","move"),c.enter().append("g").attr("class",function(e){return"resize "+e}).style("cursor",function(e){return uo[e]}).append("rect").attr("x",function(e){return/[ew]$/.test(e)?-3:null}).attr("y",function(e){return/^[ns]/.test(e)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),c.style("display",e.empty()?"none":null),c.exit().remove(),o&&(h=Dt(o),f.attr("x",h[0]).attr("width",h[1]-h[0]),n(s)),u&&(h=Dt(u),f.attr("y",h[0]).attr("height",h[1]-h[0]),r(s)),t(s)})}function t(e){e.selectAll(".resize").attr("transform",function(e){return"translate("+f[+/e$/.test(e)][0]+","+f[+/^s/.test(e)][1]+")"})}function n(e){e.select(".extent").attr("x",f[0][0]),e.selectAll(".extent,.n>rect,.s>rect").attr("width",f[1][0]-f[0][0])}function r(e){e.select(".extent").attr("y",f[0][1]),e.selectAll(".extent,.e>rect,.w>rect").attr("height",f[1][1]-f[0][1])}function i(){function i(){var e=d3.event.changedTouches;return e?d3.touches(v,e)[0]:d3.mouse(v)}function a(){d3.event.keyCode==32&&(S||(x=null,T[0]-=f[1][0],T[1]-=f[1][1],S=2),M())}function c(){d3.event.keyCode==32&&S==2&&(T[0]+=f[1][0],T[1]+=f[1][1],S=0,M())}function h(){var e=i(),s=!1;N&&(e[0]+=N[0],e[1]+=N[1]),S||(d3.event.altKey?(x||(x=[(f[0][0]+f[1][0])/2,(f[0][1]+f[1][1])/2]),T[0]=f[+(e[0]<x[0])][0],T[1]=f[+(e[1]<x[1])][1]):x=null),w&&p(e,o,0)&&(n(y),s=!0),E&&p(e,u,1)&&(r(y),s=!0),s&&(t(y),g({type:"brush",mode:S?"move":"resize"}))}function p(e,t,n){var r=Dt(t),i=r[0],s=r[1],o=T[n],u=f[1][n]-f[0][n],a,c;S&&(i-=o,s-=u+o),a=Math.max(i,Math.min(s,e[n])),S?c=(a+=o)+u:(x&&(o=Math.max(i,Math.min(s,2*x[n]-a))),o<a?(c=a,a=o):c=o);if(f[0][n]!==a||f[1][n]!==c)return l=null,f[0][n]=a,f[1][n]=c,!0}function d(){h(),y.style("pointer-events","all").selectAll(".resize").style("display",e.empty()?"none":null),d3.select("body").style("cursor",null),C.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),g({type:"brushend"}),M()}var v=this,m=d3.select(d3.event.target),g=s.of(v,arguments),y=d3.select(v),b=m.datum(),w=!/^(n|s)$/.test(b)&&o,E=!/^(e|w)$/.test(b)&&u,S=m.classed("extent"),x,T=i(),N,C=d3.select(window).on("mousemove.brush",h).on("mouseup.brush",d).on("touchmove.brush",h).on("touchend.brush",d).on("keydown.brush",a).on("keyup.brush",c);if(S)T[0]=f[0][0]-T[0],T[1]=f[0][1]-T[1];else if(b){var k=+/w$/.test(b),L=+/^n/.test(b);N=[f[1-k][0]-T[0],f[1-L][1]-T[1]],T[0]=f[k][0],T[1]=f[L][1]}else d3.event.altKey&&(x=T.slice());y.style("pointer-events","none").selectAll(".resize").style("display",null),d3.select("body").style("cursor",m.style("cursor")),g({type:"brushstart"}),h(),M()}var s=D(e,"brushstart","brush","brushend"),o=null,u=null,a=ao[0],f=[[0,0],[0,0]],l;return e.x=function(t){return arguments.length?(o=t,a=ao[!o<<1|!u],e):o},e.y=function(t){return arguments.length?(u=t,a=ao[!o<<1|!u],e):u},e.extent=function(t){var n,r,i,s,a;return arguments.length?(l=[[0,0],[0,0]],o&&(n=t[0],r=t[1],u&&(n=n[0],r=r[0]),l[0][0]=n,l[1][0]=r,o.invert&&(n=o(n),r=o(r)),r<n&&(a=n,n=r,r=a),f[0][0]=n|0,f[1][0]=r|0),u&&(i=t[0],s=t[1],o&&(i=i[1],s=s[1]),l[0][1]=i,l[1][1]=s,u.invert&&(i=u(i),s=u(s)),s<i&&(a=i,i=s,s=a),f[0][1]=i|0,f[1][1]=s|0),e):(t=l||f,o&&(n=t[0][0],r=t[1][0],l||(n=f[0][0],r=f[1][0],o.invert&&(n=o.invert(n),r=o.invert(r)),r<n&&(a=n,n=r,r=a))),u&&(i=t[0][1],s=t[1][1],l||(i=f[0][1],s=f[1][1],u.invert&&(i=u.invert(i),s=u.invert(s)),s<i&&(a=i,i=s,s=a))),o&&u?[[n,i],[r,s]]:o?[n,r]:u&&[i,s])},e.clear=function(){return l=null,f[0][0]=f[0][1]=f[1][0]=f[1][1]=0,e},e.empty=function(){return o&&f[0][0]===f[1][0]||u&&f[0][1]===f[1][1]},d3.rebind(e,s,"on")};var uo={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},ao=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]];d3.behavior={},d3.behavior.drag=function(){function e(){this.on("mousedown.drag",t).on("touchstart.drag",t)}function t(){function e(){var e=o.parentNode;return f?d3.touches(e).filter(function(e){return e.identifier===f})[0]:d3.mouse(e)}function t(){if(!o.parentNode)return i();var t=e(),n=t[0]-c[0],r=t[1]-c[1];h|=n|r,c=t,M(),u({type:"drag",x:t[0]+l[0],y:t[1]+l[1],dx:n,dy:r})}function i(){u({type:"dragend"}),h&&(M(),d3.event.target===a&&p.on("click.drag",s,!0)),p.on(f?"touchmove.drag-"+f:"mousemove.drag",null).on(f?"touchend.drag-"+f:"mouseup.drag",null)}function s(){M(),p.on("click.drag",null)}var o=this,u=n.of(o,arguments),a=d3.event.target,f=d3.event.touches&&d3.event.changedTouches[0].identifier,l,c=e(),h=0,p=d3.select(window).on(f?"touchmove.drag-"+f:"mousemove.drag",t).on(f?"touchend.drag-"+f:"mouseup.drag",i,!0);r?(l=r.apply(o,arguments),l=[l.x-c[0],l.y-c[1]]):l=[0,0],f||M(),u({type:"dragstart"})}var n=D(e,"drag","dragstart","dragend"),r=null;return e.origin=function(t){return arguments.length?(r=t,e):r},d3.rebind(e,n,"on")},d3.behavior.zoom=function(){function e(){this.on("mousedown.zoom",o).on("mousewheel.zoom",u).on("mousemove.zoom",a).on("DOMMouseScroll.zoom",u).on("dblclick.zoom",f).on("touchstart.zoom",l).on("touchmove.zoom",c).on("touchend.zoom",l)}function t(e){return[(e[0]-h[0])/d,(e[1]-h[1])/d]}function n(e){return[e[0]*d+h[0],e[1]*d+h[1]]}function r(e){d=Math.max(m[0],Math.min(m[1],e))}function i(e,t){t=n(t),h[0]+=e[0]-t[0],h[1]+=e[1]-t[1]}function s(e){b&&b.domain(y.range().map(function(e){return(e-h[0])/d}).map(y.invert)),E&&E.domain(w.range().map(function(e){return(e-h[1])/d}).map(w.invert)),d3.event.preventDefault(),e({type:"zoom",scale:d,translate:h})}function o(){function e(){f=1,i(d3.mouse(o),c),s(u)}function n(){f&&M(),l.on("mousemove.zoom",null).on("mouseup.zoom",null),f&&d3.event.target===a&&l.on("click.zoom",r,!0)}function r(){M(),l.on("click.zoom",null)}var o=this,u=g.of(o,arguments),a=d3.event.target,f=0,l=d3.select(window).on("mousemove.zoom",e).on("mouseup.zoom",n),c=t(d3.mouse(o));window.focus(),M()}function u(){p||(p=t(d3.mouse(this))),r(Math.pow(2,Un()*.002)*d),i(d3.mouse(this),p),s(g.of(this,arguments))}function a(){p=null}function f(){var e=d3.mouse(this),n=t(e);r(d3.event.shiftKey?d/2:d*2),i(e,n),s(g.of(this,arguments))}function l(){var e=d3.touches(this),n=Date.now();v=d,p={},e.forEach(function(e){p[e.identifier]=t(e)}),M();if(e.length===1){if(n-S<500){var o=e[0],u=t(e[0]);r(d*2),i(o,u),s(g.of(this,arguments))}S=n}}function c(){var e=d3.touches(this),t=e[0],n=p[t.identifier];if(o=e[1]){var o,u=p[o.identifier];t=[(t[0]+o[0])/2,(t[1]+o[1])/2],n=[(n[0]+u[0])/2,(n[1]+u[1])/2],r(d3.event.scale*v)}i(t,n),S=null,s(g.of(this,arguments))}var h=[0,0],p,d=1,v,m=lo,g=D(e,"zoom"),y,b,w,E,S;return e.translate=function(t){return arguments.length?(h=t.map(Number),e):h},e.scale=function(t){return arguments.length?(d=+t,e):d},e.scaleExtent=function(t){return arguments.length?(m=t==null?lo:t.map(Number),e):m},e.x=function(t){return arguments.length?(b=t,y=t.copy(),e):b},e.y=function(t){return arguments.length?(E=t,w=t.copy(),e):E},d3.rebind(e,g,"on")};var fo,lo=[0,Infinity];d3.layout={},d3.layout.bundle=function(){return function(e){var t=[],n=-1,r=e.length;while(++n<r)t.push(zn(e[n]));return t}},d3.layout.chord=function(){function e(){var e={},n=[],c=d3.range(o),h=[],p,d,v,m,g;r=[],i=[],p=0,m=-1;while(++m<o){d=0,g=-1;while(++g<o)d+=s[m][g];n.push(d),h.push(d3.range(o)),p+=d}a&&c.sort(function(e,t){return a(n[e],n[t])}),f&&h.forEach(function(e,t){e.sort(function(e,n){return f(s[t][e],s[t][n])})}),p=(2*Math.PI-u*o)/p,d=0,m=-1;while(++m<o){v=d,g=-1;while(++g<o){var y=c[m],b=h[y][g],w=s[y][b],E=d,S=d+=w*p;e[y+"-"+b]={index:y,subindex:b,startAngle:E,endAngle:S,value:w}}i[y]={index:y,startAngle:v,endAngle:d,value:(d-v)/p},d+=u}m=-1;while(++m<o){g=m-1;while(++g<o){var x=e[m+"-"+g],T=e[g+"-"+m];(x.value||T.value)&&r.push(x.value<T.value?{source:T,target:x}:{source:x,target:T})}}l&&t()}function t(){r.sort(function(e,t){return l((e.source.value+e.target.value)/2,(t.source.value+t.target.value)/2)})}var n={},r,i,s,o,u=0,a,f,l;return n.matrix=function(e){return arguments.length?(o=(s=e)&&s.length,r=i=null,n):s},n.padding=function(e){return arguments.length?(u=e,r=i=null,n):u},n.sortGroups=function(e){return arguments.length?(a=e,r=i=null,n):a},n.sortSubgroups=function(e){return arguments.length?(f=e,r=null,n):f},n.sortChords=function(e){return arguments.length?(l=e,r&&t(),n):l},n.chords=function(){return r||e(),r},n.groups=function(){return i||e(),i},n},d3.layout.force=function(){function e(e){return function(t,n,r,i,s){if(t.point!==e){var o=t.cx-e.x,u=t.cy-e.y,a=1/Math.sqrt(o*o+u*u);if((i-n)*a<d){var f=t.charge*a*a;return e.px-=o*f,e.py-=u*f,!0}if(t.point&&isFinite(a)){var f=t.pointCharge*a*a;e.px-=o*f,e.py-=u*f}}return!t.charge}}function t(e){e.px=d3.event.x,e.py=d3.event.y,n.resume()}var n={},r=d3.dispatch("start","tick","end"),s=[1,1],o,a,f=.9,l=Gn,c=Yn,h=-30,p=.1,d=.8,v,m=[],g=[],y,b,w;return n.tick=function(){if((a*=.99)<.005)return r.end({type:"end",alpha:a=0}),!0;var t=m.length,n=g.length,i,o,u,l,c,d,v,E,S;for(o=0;o<n;++o){u=g[o],l=u.source,c=u.target,E=c.x-l.x,S=c.y-l.y;if(d=E*E+S*S)d=a*b[o]*((d=Math.sqrt(d))-y[o])/d,E*=d,S*=d,c.x-=E*(v=l.weight/(c.weight+l.weight)),c.y-=S*v,l.x+=E*(v=1-v),l.y+=S*v}if(v=a*p){E=s[0]/2,S=s[1]/2,o=-1;if(v)while(++o<t)u=m[o],u.x+=(E-u.x)*v,u.y+=(S-u.y)*v}if(h){Qn(i=d3.geom.quadtree(m),a,w),o=-1;while(++o<t)(u=m[o]).fixed||i.visit(e(u))}o=-1;while(++o<t)u=m[o],u.fixed?(u.x=u.px,u.y=u.py):(u.x-=(u.px-(u.px=u.x))*f,u.y-=(u.py-(u.py=u.y))*f);r.tick({type:"tick",alpha:a})},n.nodes=function(e){return arguments.length?(m=e,n):m},n.links=function(e){return arguments.length?(g=e,n):g},n.size=function(e){return arguments.length?(s=e,n):s},n.linkDistance=function(e){return arguments.length?(l=u(e),n):l},n.distance=n.linkDistance,n.linkStrength=function(e){return arguments.length?(c=u(e),n):c},n.friction=function(e){return arguments.length?(f=e,n):f},n.charge=function(e){return arguments.length?(h=typeof e=="function"?e:+e,n):h},n.gravity=function(e){return arguments.length?(p=e,n):p},n.theta=function(e){return arguments.length?(d=e,n):d},n.alpha=function(e){return arguments.length?(a?e>0?a=e:a=0:e>0&&(r.start({type:"start",alpha:a=e}),d3.timer(n.tick)),n):a},n.start=function(){function e(e,n){var i=t(r),s=-1,o=i.length,u;while(++s<o)if(!isNaN(u=i[s][e]))return u;return Math.random()*n}function t(){if(!p){p=[];for(i=0;i<o;++i)p[i]=[];for(i=0;i<u;++i){var e=g[i];p[e.source.index].push(e.target),p[e.target.index].push(e.source)}}return p[r]}var r,i,o=m.length,u=g.length,a=s[0],f=s[1],p,d;for(r=0;r<o;++r)(d=m[r]).index=r,d.weight=0;y=[],b=[];for(r=0;r<u;++r)d=g[r],typeof d.source=="number"&&(d.source=m[d.source]),typeof d.target=="number"&&(d.target=m[d.target]),y[r]=l.call(this,d,r),b[r]=c.call(this,d,r),++d.source.weight,++d.target.weight;for(r=0;r<o;++r)d=m[r],isNaN(d.x)&&(d.x=e("x",a)),isNaN(d.y)&&(d.y=e("y",f)),isNaN(d.px)&&(d.px=d.x),isNaN(d.py)&&(d.py=d.y);w=[];if(typeof h=="function")for(r=0;r<o;++r)w[r]=+h.call(this,m[r],r);else for(r=0;r<o;++r)w[r]=h;return n.resume()},n.resume=function(){return n.alpha(.1)},n.stop=function(){return n.alpha(0)},n.drag=function(){o||(o=d3.behavior.drag().origin(i).on("dragstart",Vn).on("drag",t).on("dragend",$n)),this.on("mouseover.force",Jn).on("mouseout.force",Kn).call(o)},d3.rebind(n,r,"on")},d3.layout.partition=function(){function e(t,n,r,i){var s=t.children;t.x=n,t.y=t.depth*i,t.dx=r,t.dy=i;if(s&&(u=s.length)){var o=-1,u,a,f;r=t.value?r/t.value:0;while(++o<u)e(a=s[o],n,f=a.value*r,i),n+=f}}function t(e){var n=e.children,r=0;if(n&&(s=n.length)){var i=-1,s;while(++i<s)r=Math.max(r,t(n[i]))}return 1+r}function n(n,s){var o=r.call(this,n,s);return e(o[0],0,i[0],i[1]/t(o[0])),o}var r=d3.layout.hierarchy(),i=[1,1];return n.size=function(e){return arguments.length?(i=e,n):i},lr(n,r)},d3.layout.pie=function(){function e(s,o){var u=s.map(function(n,r){return+t.call(e,n,r)}),a=+(typeof r=="function"?r.apply(this,arguments):r),f=((typeof i=="function"?i.apply(this,arguments):i)-r)/d3.sum(u),l=d3.range(s.length);n!=null&&l.sort(n===co?function(e,t){return u[t]-u[e]}:function(e,t){return n(s[e],s[t])});var c=[];return l.forEach(function(e){var t;c[e]={data:s[e],value:t=u[e],startAngle:a,endAngle:a+=t*f}}),c}var t=Number,n=co,r=0,i=2*Math.PI;return e.value=function(n){return arguments.length?(t=n,e):t},e.sort=function(t){return arguments.length?(n=t,e):n},e.startAngle=function(t){return arguments.length?(r=t,e):r},e.endAngle=function(t){return arguments.length?(i=t,e):i},e};var co={};d3.layout.stack=function(){function e(i,a){var f=i.map(function(n,r){return t.call(e,n,r)}),l=f.map(function(t,n){return t.map(function(t,n){return[o.call(e,t,n),u.call(e,t,n)]})}),c=n.call(e,l,a);f=d3.permute(f,c),l=d3.permute(l,c);var h=r.call(e,l,a),p=f.length,d=f[0].length,v,m,g;for(m=0;m<d;++m){s.call(e,f[0][m],g=h[m],l[0][m][1]);for(v=1;v<p;++v)s.call(e,f[v][m],g+=l[v-1][m][1],l[v][m][1])}return i}var t=i,n=nr,r=rr,s=tr,o=Zn,u=er;return e.values=function(n){return arguments.length?(t=n,e):t},e.order=function(t){return arguments.length?(n=typeof t=="function"?t:ho.get(t)||nr,e):n},e.offset=function(t){return arguments.length?(r=typeof t=="function"?t:po.get(t)||rr,e):r},e.x=function(t){return arguments.length?(o=t,e):o},e.y=function(t){return arguments.length?(u=t,e):u},e.out=function(t){return arguments.length?(s=t,e):s},e};var ho=d3.map({"inside-out":function(e){var t=e.length,n,r,i=e.map(ir),s=e.map(sr),o=d3.range(t).sort(function(e,t){return i[e]-i[t]}),u=0,a=0,f=[],l=[];for(n=0;n<t;++n)r=o[n],u<a?(u+=s[r],f.push(r)):(a+=s[r],l.push(r));return l.reverse().concat(f)},reverse:function(e){return d3.range(e.length).reverse()},"default":nr}),po=d3.map({silhouette:function(e){var t=e.length,n=e[0].length,r=[],i=0,s,o,u,a=[];for(o=0;o<n;++o){for(s=0,u=0;s<t;s++)u+=e[s][o][1];u>i&&(i=u),r.push(u)}for(o=0;o<n;++o)a[o]=(i-r[o])/2;return a},wiggle:function(e){var t=e.length,n=e[0],r=n.length,i=0,s,o,u,a,f,l,c,h,p,d=[];d[0]=h=p=0;for(o=1;o<r;++o){for(s=0,a=0;s<t;++s)a+=e[s][o][1];for(s=0,f=0,c=n[o][0]-n[o-1][0];s<t;++s){for(u=0,l=(e[s][o][1]-e[s][o-1][1])/(2*c);u<s;++u)l+=(e[u][o][1]-e[u][o-1][1])/c;f+=l*e[s][o][1]}d[o]=h-=a?f/a*c:0,h<p&&(p=h)}for(o=0;o<r;++o)d[o]-=p;return d},expand:function(e){var t=e.length,n=e[0].length,r=1/t,i,s,o,u=[];for(s=0;s<n;++s){for(i=0,o=0;i<t;i++)o+=e[i][s][1];if(o)for(i=0;i<t;i++)e[i][s][1]/=o;else for(i=0;i<t;i++)e[i][s][1]=r}for(s=0;s<n;++s)u[s]=0;return u},zero:rr});d3.layout.histogram=function(){function e(e,s){var o=[],u=e.map(n,this),a=r.call(this,u,s),f=i.call(this,a,u,s),l,s=-1,c=u.length,h=f.length-1,p=t?1:1/c,d;while(++s<h)l=o[s]=[],l.dx=f[s+1]-(l.x=f[s]),l.y=0;if(h>0){s=-1;while(++s<c)d=u[s],d>=a[0]&&d<=a[1]&&(l=o[d3.bisect(f,d,1,h)-1],l.y+=p,l.push(e[s]))}return o}var t=!0,n=Number,r=fr,i=ur;return e.value=function(t){return arguments.length?(n=t,e):n},e.range=function(t){return arguments.length?(r=u(t),e):r},e.bins=function(t){return arguments.length?(i=typeof t=="number"?function(e){return ar(e,t)}:u(t),e):i},e.frequency=function(n){return arguments.length?(t=!!n,e):t},e},d3.layout.hierarchy=function(){function e(t,o,u){var a=i.call(n,t,o),f=vo?t:{data:t};f.depth=o,u.push(f);if(a&&(c=a.length)){var l=-1,c,h=f.children=[],p=0,d=o+1,v;while(++l<c)v=e(a[l],d,u),v.parent=f,h.push(v),p+=v.value;r&&h.sort(r),s&&(f.value=p)}else s&&(f.value=+s.call(n,t,o)||0);return f}function t(e,r){var i=e.children,o=0;if(i&&(a=i.length)){var u=-1,a,f=r+1;while(++u<a)o+=t(i[u],f)}else s&&(o=+s.call(n,vo?e:e.data,r)||0);return s&&(e.value=o),o}function n(t){var n=[];return e(t,0,n),n}var r=pr,i=cr,s=hr;return n.sort=function(e){return arguments.length?(r=e,n):r},n.children=function(e){return arguments.length?(i=e,n):i},n.value=function(e){return arguments.length?(s=e,n):s},n.revalue=function(e){return t(e,0),e},n};var vo=!1;d3.layout.pack=function(){function e(e,i){var s=t.call(this,e,i),o=s[0];o.x=0,o.y=0,Hr(o,function(e){e.r=Math.sqrt(e.value)}),Hr(o,br);var u=r[0],a=r[1],f=Math.max(2*o.r/u,2*o.r/a);if(n>0){var l=n*f/2;Hr(o,function(e){e.r+=l}),Hr(o,br),Hr(o,function(e){e.r-=l}),f=Math.max(2*o.r/u,2*o.r/a)}return Sr(o,u/2,a/2,1/f),s}var t=d3.layout.hierarchy().sort(vr),n=0,r=[1,1];return e.size=function(t){return arguments.length?(r=t,e):r},e.padding=function(t){return arguments.length?(n=+t,e):n},lr(e,t)},d3.layout.cluster=function(){function e(e,i){var s=t.call(this,e,i),o=s[0],u,a=0,f,l;Hr(o,function(e){var t=e.children;t&&t.length?(e.x=Nr(t),e.y=Tr(t)):(e.x=u?a+=n(e,u):0,e.y=0,u=e)});var c=Cr(o),h=kr(o),p=c.x-n(c,h)/2,d=h.x+n(h,c)/2;return Hr(o,function(e){e.x=(e.x-p)/(d-p)*r[0],e.y=(1-(o.y?e.y/o.y:1))*r[1]}),s}var t=d3.layout.hierarchy().sort(null).value(null),n=Lr,r=[1,1];return e.separation=function(t){return arguments.length?(n=t,e):n},e.size=function(t){return arguments.length?(r=t,e):r},lr(e,t)},d3.layout.tree=function(){function e(e,i){function s(e,t){var r=e.children,i=e._tree;if(r&&(o=r.length)){var o,a=r[0],f,l=a,c,h=-1;while(++h<o)c=r[h],s(c,f),l=u(c,f,l),f=c;Br(e);var p=.5*(a._tree.prelim+c._tree.prelim);t?(i.prelim=t._tree.prelim+n(e,t),i.mod=i.prelim-p):i.prelim=p}else t&&(i.prelim=t._tree.prelim+n(e,t))}function o(e,t){e.x=e._tree.prelim+t;var n=e.children;if(n&&(i=n.length)){var r=-1,i;t+=e._tree.mod;while(++r<i)o(n[r],t)}}function u(e,t,r){if(t){var i=e,s=e,o=t,u=e.parent.children[0],a=i._tree.mod,f=s._tree.mod,l=o._tree.mod,c=u._tree.mod,h;while(o=Or(o),i=Ar(i),o&&i)u=Ar(u),s=Or(s),s._tree.ancestor=e,h=o._tree.prelim+l-i._tree.prelim-a+n(o,i),h>0&&(jr(Fr(o,e,r),e,h),a+=h,f+=h),l+=o._tree.mod,a+=i._tree.mod,c+=u._tree.mod,f+=s._tree.mod;o&&!Or(s)&&(s._tree.thread=o,s._tree.mod+=l-f),i&&!Ar(u)&&(u._tree.thread=i,u._tree.mod+=a-c,r=e)}return r}var a=t.call(this,e,i),f=a[0];Hr(f,function(e,t){e._tree={ancestor:e,prelim:0,mod:0,change:0,shift:0,number:t?t._tree.number+1:0}}),s(f),o(f,-f._tree.prelim);var l=Mr(f,Dr),c=Mr(f,_r),h=Mr(f,Pr),p=l.x-n(l,c)/2,d=c.x+n(c,l)/2,v=h.depth||1;return Hr(f,function(e){e.x=(e.x-p)/(d-p)*r[0],e.y=e.depth/v*r[1],delete e._tree}),a}var t=d3.layout.hierarchy().sort(null).value(null),n=Lr,r=[1,1];return e.separation=function(t){return arguments.length?(n=t,e):n},e.size=function(t){return arguments.length?(r=t,e):r},lr(e,t)},d3.layout.treemap=function(){function e(e,t){var n=-1,r=e.length,i,s;while(++n<r)s=(i=e[n]).value*(t<0?0:t),i.area=isNaN(s)||s<=0?0:s}function t(n){var s=n.children;if(s&&s.length){var o=l(n),u=[],a=s.slice(),f,c=Infinity,h,p=Math.min(o.dx,o.dy),d;e(a,o.dx*o.dy/n.value),u.area=0;while((d=a.length)>0)u.push(f=a[d-1]),u.area+=f.area,(h=r(u,p))<=c?(a.pop(),c=h):(u.area-=u.pop().area,i(u,p,o,!1),p=Math.min(o.dx,o.dy),u.length=u.area=0,c=Infinity);u.length&&(i(u,p,o,!0),u.length=u.area=0),s.forEach(t)}}function n(t){var r=t.children;if(r&&r.length){var s=l(t),o=r.slice(),u,a=[];e(o,s.dx*s.dy/t.value),a.area=0;while(u=o.pop())a.push(u),a.area+=u.area,u.z!=null&&(i(a,u.z?s.dx:s.dy,s,!o.length),a.length=a.area=0);r.forEach(n)}}function r(e,t){var n=e.area,r,i=0,s=Infinity,o=-1,u=e.length;while(++o<u){if(!(r=e[o].area))continue;r<s&&(s=r),r>i&&(i=r)}return n*=n,t*=t,n?Math.max(t*i*p/n,n/(t*s*p)):Infinity}function i(e,t,n,r){var i=-1,s=e.length,o=n.x,a=n.y,f=t?u(e.area/t):0,l;if(t==n.dx){if(r||f>n.dy)f=n.dy;while(++i<s)l=e[i],l.x=o,l.y=a,l.dy=f,o+=l.dx=Math.min(n.x+n.dx-o,f?u(l.area/f):0);l.z=!0,l.dx+=n.x+n.dx-o,n.y+=f,n.dy-=f}else{if(r||f>n.dx)f=n.dx;while(++i<s)l=e[i],l.x=o,l.y=a,l.dx=f,a+=l.dy=Math.min(n.y+n.dy-a,f?u(l.area/f):0);l.z=!1,l.dy+=n.y+n.dy-a,n.x+=f,n.dx-=f}}function s(r){var i=h||o(r),s=i[0];return s.x=0,s.y=0,s.dx=a[0],s.dy=a[1],h&&o.revalue(s),e([s],s.dx*s.dy/s.value),(h?n:t)(s),c&&(h=i),i}var o=d3.layout.hierarchy(),u=Math.round,a=[1,1],f=null,l=Ir,c=!1,h,p=.5*(1+Math.sqrt(5));return s.size=function(e){return arguments.length?(a=e,s):a},s.padding=function(e){function t(t){var n=e.call(s,t,t.depth);return n==null?Ir(t):qr(t,typeof n=="number"?[n,n,n,n]:n)}function n(t){return qr(t,e)}if(!arguments.length)return f;var r;return l=(f=e)==null?Ir:(r=typeof e)==="function"?t:r==="number"?(e=[e,e,e,e],n):n,s},s.round=function(e){return arguments.length?(u=e?Math.round:Number,s):u!=Number},s.sticky=function(e){return arguments.length?(c=e,h=null,s):c},s.ratio=function(e){return arguments.length?(p=e,s):p},lr(s,o)},d3.csv=Rr(",","text/csv"),d3.tsv=Rr("	","text/tab-separated-values"),d3.geo={};var mo=Math.PI/180;d3.geo.azimuthal=function(){function e(e){var n=e[0]*mo-s,o=e[1]*mo,f=Math.cos(n),l=Math.sin(n),c=Math.cos(o),h=Math.sin(o),p=t!=="orthographic"?a*h+u*c*f:null,d,v=t==="stereographic"?1/(1+p):t==="gnomonic"?1/p:t==="equidistant"?(d=Math.acos(p),d?d/Math.sin(d):0):t==="equalarea"?Math.sqrt(2/(1+p)):1,m=v*c*l,g=v*(a*c*f-u*h);return[r*m+i[0],r*g+i[1]]}var t="orthographic",n,r=200,i=[480,250],s,o,u,a;return e.invert=function(e){var n=(e[0]-i[0])/r,o=(e[1]-i[1])/r,f=Math.sqrt(n*n+o*o),l=t==="stereographic"?2*Math.atan(f):t==="gnomonic"?Math.atan(f):t==="equidistant"?f:t==="equalarea"?2*Math.asin(.5*f):Math.asin(f),c=Math.sin(l),h=Math.cos(l);return[(s+Math.atan2(n*c,f*u*h+o*a*c))/mo,Math.asin(h*a-(f?o*c*u/f:0))/mo]},e.mode=function(n){return arguments.length?(t=n+"",e):t},e.origin=function(t){return arguments.length?(n=t,s=n[0]*mo,o=n[1]*mo,u=Math.cos(o),a=Math.sin(o),e):n},e.scale=function(t){return arguments.length?(r=+t,e):r},e.translate=function(t){return arguments.length?(i=[+t[0],+t[1]],e):i},e.origin([0,0])},d3.geo.albers=function(){function e(e){var t=u*(mo*e[0]-o),n=Math.sqrt(a-2*u*Math.sin(mo*e[1]))/u;return[i*n*Math.sin(t)+s[0],i*(n*Math.cos(t)-f)+s[1]]}function t(){var t=mo*r[0],i=mo*r[1],s=mo*n[1],l=Math.sin(t),c=Math.cos(t);return o=mo*n[0],u=.5*(l+Math.sin(i)),a=c*c+2*u*l,f=Math.sqrt(a-2*u*Math.sin(s))/u,e}var n=[-98,38],r=[29.5,45.5],i=1e3,s=[480,250],o,u,a,f;return e.invert=function(e){var t=(e[0]-s[0])/i,n=(e[1]-s[1])/i,r=f+n,l=Math.atan2(t,r),c=Math.sqrt(t*t+r*r);return[(o+l/u)/mo,Math.asin((a-c*c*u*u)/(2*u))/mo]},e.origin=function(e){return arguments.length?(n=[+e[0],+e[1]],t()):n},e.parallels=function(e){return arguments.length?(r=[+e[0],+e[1]],t()):r},e.scale=function(t){return arguments.length?(i=+t,e):i},e.translate=function(t){return arguments.length?(s=[+t[0],+t[1]],e):s},t()},d3.geo.albersUsa=function(){function e(e){var s=e[0],o=e[1];return(o>50?n:s<-140?r:o<21?i:t)(e)}var t=d3.geo.albers(),n=d3.geo.albers().origin([-160,60]).parallels([55,65]),r=d3.geo.albers().origin([-160,20]).parallels([8,18]),i=d3.geo.albers().origin([-60,10]).parallels([8,18]);return e.scale=function(s){return arguments.length?(t.scale(s),n.scale(s*.6),r.scale(s),i.scale(s*1.5),e.translate(t.translate())):t.scale()},e.translate=function(s){if(!arguments.length)return t.translate();var o=t.scale()/1e3,u=s[0],a=s[1];return t.translate(s),n.translate([u-400*o,a+170*o]),r.translate([u-190*o,a+200*o]),i.translate([u+580*o,a+430*o]),e},e.scale(t.scale())},d3.geo.bonne=function(){function e(e){var u=e[0]*mo-r,a=e[1]*mo-i;if(s){var f=o+s-a,l=u*Math.cos(a)/f;u=f*Math.sin(l),a=f*Math.cos(l)-o}else u*=Math.cos(a),a*=-1;return[t*u+n[0],t*a+n[1]]}var t=200,n=[480,250],r,i,s,o;return e.invert=function(e){var i=(e[0]-n[0])/t,u=(e[1]-n[1])/t;if(s){var a=o+u,f=Math.sqrt(i*i+a*a);u=o+s-f,i=r+f*Math.atan2(i,a)/Math.cos(u)}else u*=-1,i/=Math.cos(u);return[i/mo,u/mo]},e.parallel=function(t){return arguments.length?(o=1/Math.tan(s=t*mo),e):s/mo},e.origin=function(t){return arguments.length?(r=t[0]*mo,i=t[1]*mo,e):[r/mo,i/mo]},e.scale=function(
n){return arguments.length?(t=+n,e):t},e.translate=function(t){return arguments.length?(n=[+t[0],+t[1]],e):n},e.origin([0,0]).parallel(45)},d3.geo.equirectangular=function(){function e(e){var r=e[0]/360,i=-e[1]/360;return[t*r+n[0],t*i+n[1]]}var t=500,n=[480,250];return e.invert=function(e){var r=(e[0]-n[0])/t,i=(e[1]-n[1])/t;return[360*r,-360*i]},e.scale=function(n){return arguments.length?(t=+n,e):t},e.translate=function(t){return arguments.length?(n=[+t[0],+t[1]],e):n},e},d3.geo.mercator=function(){function e(e){var r=e[0]/360,i=-(Math.log(Math.tan(Math.PI/4+e[1]*mo/2))/mo)/360;return[t*r+n[0],t*Math.max(-0.5,Math.min(.5,i))+n[1]]}var t=500,n=[480,250];return e.invert=function(e){var r=(e[0]-n[0])/t,i=(e[1]-n[1])/t;return[360*r,2*Math.atan(Math.exp(-360*i*mo))/mo-90]},e.scale=function(n){return arguments.length?(t=+n,e):t},e.translate=function(t){return arguments.length?(n=[+t[0],+t[1]],e):n},e},d3.geo.path=function(){function e(e,t){typeof s=="function"&&(o=zr(s.apply(this,arguments))),f(e);var n=a.length?a.join(""):null;return a=[],n}function t(e){return u(e).join(",")}function n(e){var t=i(e[0]),n=0,r=e.length;while(++n<r)t-=i(e[n]);return t}function r(e){var t=d3.geom.polygon(e[0].map(u)),n=t.area(),r=t.centroid(n<0?(n*=-1,1):-1),i=r[0],s=r[1],o=n,a=0,f=e.length;while(++a<f)t=d3.geom.polygon(e[a].map(u)),n=t.area(),r=t.centroid(n<0?(n*=-1,1):-1),i-=r[0],s-=r[1],o-=n;return[i,s,6*o]}function i(e){return Math.abs(d3.geom.polygon(e.map(u)).area())}var s=4.5,o=zr(s),u=d3.geo.albersUsa(),a=[],f=Ur({FeatureCollection:function(e){var t=e.features,n=-1,r=t.length;while(++n<r)a.push(f(t[n].geometry))},Feature:function(e){f(e.geometry)},Point:function(e){a.push("M",t(e.coordinates),o)},MultiPoint:function(e){var n=e.coordinates,r=-1,i=n.length;while(++r<i)a.push("M",t(n[r]),o)},LineString:function(e){var n=e.coordinates,r=-1,i=n.length;a.push("M");while(++r<i)a.push(t(n[r]),"L");a.pop()},MultiLineString:function(e){var n=e.coordinates,r=-1,i=n.length,s,o,u;while(++r<i){s=n[r],o=-1,u=s.length,a.push("M");while(++o<u)a.push(t(s[o]),"L");a.pop()}},Polygon:function(e){var n=e.coordinates,r=-1,i=n.length,s,o,u;while(++r<i){s=n[r],o=-1;if((u=s.length-1)>0){a.push("M");while(++o<u)a.push(t(s[o]),"L");a[a.length-1]="Z"}}},MultiPolygon:function(e){var n=e.coordinates,r=-1,i=n.length,s,o,u,f,l,c;while(++r<i){s=n[r],o=-1,u=s.length;while(++o<u){f=s[o],l=-1;if((c=f.length-1)>0){a.push("M");while(++l<c)a.push(t(f[l]),"L");a[a.length-1]="Z"}}}},GeometryCollection:function(e){var t=e.geometries,n=-1,r=t.length;while(++n<r)a.push(f(t[n]))}}),l=e.area=Ur({FeatureCollection:function(e){var t=0,n=e.features,r=-1,i=n.length;while(++r<i)t+=l(n[r]);return t},Feature:function(e){return l(e.geometry)},Polygon:function(e){return n(e.coordinates)},MultiPolygon:function(e){var t=0,r=e.coordinates,i=-1,s=r.length;while(++i<s)t+=n(r[i]);return t},GeometryCollection:function(e){var t=0,n=e.geometries,r=-1,i=n.length;while(++r<i)t+=l(n[r]);return t}},0),c=e.centroid=Ur({Feature:function(e){return c(e.geometry)},Polygon:function(e){var t=r(e.coordinates);return[t[0]/t[2],t[1]/t[2]]},MultiPolygon:function(e){var t=0,n=e.coordinates,i,s=0,o=0,u=0,a=-1,f=n.length;while(++a<f)i=r(n[a]),s+=i[0],o+=i[1],u+=i[2];return[s/u,o/u]}});return e.projection=function(t){return u=t,e},e.pointRadius=function(t){return typeof t=="function"?s=t:(s=+t,o=zr(s)),e},e},d3.geo.bounds=function(e){var t=Infinity,n=Infinity,r=-Infinity,i=-Infinity;return Wr(e,function(e,s){e<t&&(t=e),e>r&&(r=e),s<n&&(n=s),s>i&&(i=s)}),[[t,n],[r,i]]};var go={Feature:Xr,FeatureCollection:Vr,GeometryCollection:$r,LineString:Jr,MultiLineString:Kr,MultiPoint:Jr,MultiPolygon:Qr,Point:Gr,Polygon:Yr};d3.geo.circle=function(){function e(){}function t(e){return a.distance(e)<u}function n(e){var t=-1,n=e.length,i=[],s,o,f,l,c;while(++t<n)c=a.distance(f=e[t]),c<u?(o&&i.push(ni(o,f)((l-u)/(l-c))),i.push(f),s=o=null):(o=f,!s&&i.length&&(i.push(ni(i[i.length-1],o)((u-l)/(c-l))),s=o)),l=c;return s=e[0],o=i[0],o&&f[0]===s[0]&&f[1]===s[1]&&(f[0]!==o[0]||f[1]!==o[1])&&i.push(o),r(i)}function r(e){var t=0,n=e.length,r,i,s=n?[e[0]]:e,o,u=a.source();while(++t<n){o=a.source(e[t-1])(e[t]).coordinates;for(r=0,i=o.length;++r<i;)s.push(o[r])}return a.source(u),s}var s=[0,0],o=89.99,u=o*mo,a=d3.geo.greatArc().source(s).target(i);e.clip=function(e){return typeof s=="function"&&a.source(s.apply(this,arguments)),f(e)||null};var f=Ur({FeatureCollection:function(e){var t=e.features.map(f).filter(i);return t&&(e=Object.create(e),e.features=t,e)},Feature:function(e){var t=f(e.geometry);return t&&(e=Object.create(e),e.geometry=t,e)},Point:function(e){return t(e.coordinates)&&e},MultiPoint:function(e){var n=e.coordinates.filter(t);return n.length&&{type:e.type,coordinates:n}},LineString:function(e){var t=n(e.coordinates);return t.length&&(e=Object.create(e),e.coordinates=t,e)},MultiLineString:function(e){var t=e.coordinates.map(n).filter(function(e){return e.length});return t.length&&(e=Object.create(e),e.coordinates=t,e)},Polygon:function(e){var t=e.coordinates.map(n);return t[0].length&&(e=Object.create(e),e.coordinates=t,e)},MultiPolygon:function(e){var t=e.coordinates.map(function(e){return e.map(n)}).filter(function(e){return e[0].length});return t.length&&(e=Object.create(e),e.coordinates=t,e)},GeometryCollection:function(e){var t=e.geometries.map(f).filter(i);return t.length&&(e=Object.create(e),e.geometries=t,e)}});return e.origin=function(t){return arguments.length?(s=t,typeof s!="function"&&a.source(s),e):s},e.angle=function(t){return arguments.length?(u=(o=+t)*mo,e):o},d3.rebind(e,a,"precision")},d3.geo.greatArc=function(){function e(){var t=e.distance.apply(this,arguments),r=0,u=s/t,a=[n];while((r+=u)<1)a.push(o(r));return a.push(i),{type:"LineString",coordinates:a}}var t=Zr,n,r=ei,i,s=6*mo,o=ti();return e.distance=function(){return typeof t=="function"&&o.source(n=t.apply(this,arguments)),typeof r=="function"&&o.target(i=r.apply(this,arguments)),o.distance()},e.source=function(r){return arguments.length?(t=r,typeof t!="function"&&o.source(n=t),e):t},e.target=function(t){return arguments.length?(r=t,typeof r!="function"&&o.target(i=r),e):r},e.precision=function(t){return arguments.length?(s=t*mo,e):s/mo},e},d3.geo.greatCircle=d3.geo.circle,d3.geom={},d3.geom.contour=function(e,t){var n=t||ri(e),r=[],i=n[0],s=n[1],o=0,u=0,a=NaN,f=NaN,l=0;do l=0,e(i-1,s-1)&&(l+=1),e(i,s-1)&&(l+=2),e(i-1,s)&&(l+=4),e(i,s)&&(l+=8),l===6?(o=f===-1?-1:1,u=0):l===9?(o=0,u=a===1?-1:1):(o=yo[l],u=bo[l]),o!=a&&u!=f&&(r.push([i,s]),a=o,f=u),i+=o,s+=u;while(n[0]!=i||n[1]!=s);return r};var yo=[1,0,1,1,-1,0,-1,1,0,0,0,0,-1,0,-1,NaN],bo=[0,-1,0,0,0,-1,0,0,1,-1,1,1,0,-1,0,NaN];d3.geom.hull=function(e){if(e.length<3)return[];var t=e.length,n=t-1,r=[],i=[],s,o,u=0,a,f,l,c,h,p,d,v;for(s=1;s<t;++s)e[s][1]<e[u][1]?u=s:e[s][1]==e[u][1]&&(u=e[s][0]<e[u][0]?s:u);for(s=0;s<t;++s){if(s===u)continue;f=e[s][1]-e[u][1],a=e[s][0]-e[u][0],r.push({angle:Math.atan2(f,a),index:s})}r.sort(function(e,t){return e.angle-t.angle}),d=r[0].angle,p=r[0].index,h=0;for(s=1;s<n;++s)o=r[s].index,d==r[s].angle?(a=e[p][0]-e[u][0],f=e[p][1]-e[u][1],l=e[o][0]-e[u][0],c=e[o][1]-e[u][1],a*a+f*f>=l*l+c*c?r[s].index=-1:(r[h].index=-1,d=r[s].angle,h=s,p=o)):(d=r[s].angle,h=s,p=o);i.push(u);for(s=0,o=0;s<2;++o)r[o].index!==-1&&(i.push(r[o].index),s++);v=i.length;for(;o<n;++o){if(r[o].index===-1)continue;while(!ii(i[v-2],i[v-1],r[o].index,e))--v;i[v++]=r[o].index}var m=[];for(s=0;s<v;++s)m.push(e[i[s]]);return m},d3.geom.polygon=function(e){return e.area=function(){var t=0,n=e.length,r=e[n-1][0]*e[0][1],i=e[n-1][1]*e[0][0];while(++t<n)r+=e[t-1][0]*e[t][1],i+=e[t-1][1]*e[t][0];return(i-r)*.5},e.centroid=function(t){var n=-1,r=e.length,i=0,s=0,o,u=e[r-1],a;arguments.length||(t=-1/(6*e.area()));while(++n<r)o=u,u=e[n],a=o[0]*u[1]-u[0]*o[1],i+=(o[0]+u[0])*a,s+=(o[1]+u[1])*a;return[i*t,s*t]},e.clip=function(t){var n,r=-1,i=e.length,s,o,u=e[i-1],a,f,l;while(++r<i){n=t.slice(),t.length=0,a=e[r],f=n[(o=n.length)-1],s=-1;while(++s<o)l=n[s],si(l,u,a)?(si(f,u,a)||t.push(oi(f,l,u,a)),t.push(l)):si(f,u,a)&&t.push(oi(f,l,u,a)),f=l;u=a}return t},e},d3.geom.voronoi=function(e){var t=e.map(function(){return[]});return ui(e,function(e){var n,r,i,s,o,u;e.a===1&&e.b>=0?(n=e.ep.r,r=e.ep.l):(n=e.ep.l,r=e.ep.r),e.a===1?(o=n?n.y:-1e6,i=e.c-e.b*o,u=r?r.y:1e6,s=e.c-e.b*u):(i=n?n.x:-1e6,o=e.c-e.a*i,s=r?r.x:1e6,u=e.c-e.a*s);var a=[i,o],f=[s,u];t[e.region.l.index].push(a,f),t[e.region.r.index].push(a,f)}),t.map(function(t,n){var r=e[n][0],i=e[n][1];return t.forEach(function(e){e.angle=Math.atan2(e[0]-r,e[1]-i)}),t.sort(function(e,t){return e.angle-t.angle}).filter(function(e,n){return!n||e.angle-t[n-1].angle>1e-10})})};var wo={l:"r",r:"l"};d3.geom.delaunay=function(e){var t=e.map(function(){return[]}),n=[];return ui(e,function(n){t[n.region.l.index].push(e[n.region.r.index])}),t.forEach(function(t,r){var i=e[r],s=i[0],o=i[1];t.forEach(function(e){e.angle=Math.atan2(e[0]-s,e[1]-o)}),t.sort(function(e,t){return e.angle-t.angle});for(var u=0,a=t.length-1;u<a;u++)n.push([i,t[u],t[u+1]])}),n},d3.geom.quadtree=function(e,t,n,r,i){function s(e,t,n,r,i,s){if(isNaN(t.x)||isNaN(t.y))return;if(e.leaf){var u=e.point;u?Math.abs(u.x-t.x)+Math.abs(u.y-t.y)<.01?o(e,t,n,r,i,s):(e.point=null,o(e,u,n,r,i,s),o(e,t,n,r,i,s)):e.point=t}else o(e,t,n,r,i,s)}function o(e,t,n,r,i,o){var u=(n+i)*.5,a=(r+o)*.5,f=t.x>=u,l=t.y>=a,c=(l<<1)+f;e.leaf=!1,e=e.nodes[c]||(e.nodes[c]=ai()),f?n=u:i=u,l?r=a:o=a,s(e,t,n,r,i,o)}var u,a=-1,f=e.length;f&&isNaN(e[0].x)&&(e=e.map(li));if(arguments.length<5)if(arguments.length===3)i=r=n,n=t;else{t=n=Infinity,r=i=-Infinity;while(++a<f)u=e[a],u.x<t&&(t=u.x),u.y<n&&(n=u.y),u.x>r&&(r=u.x),u.y>i&&(i=u.y);var l=r-t,c=i-n;l>c?i=n+l:r=t+c}var h=ai();return h.add=function(e){s(h,e,t,n,r,i)},h.visit=function(e){fi(e,h,t,n,r,i)},e.forEach(h.add),h},d3.time={};var Eo=Date,So=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];ci.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){xo.setUTCDate.apply(this._,arguments)},setDay:function(){xo.setUTCDay.apply(this._,arguments)},setFullYear:function(){xo.setUTCFullYear.apply(this._,arguments)},setHours:function(){xo.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){xo.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){xo.setUTCMinutes.apply(this._,arguments)},setMonth:function(){xo.setUTCMonth.apply(this._,arguments)},setSeconds:function(){xo.setUTCSeconds.apply(this._,arguments)},setTime:function(){xo.setTime.apply(this._,arguments)}};var xo=Date.prototype,To="%a %b %e %H:%M:%S %Y",No="%m/%d/%y",Co="%H:%M:%S",ko=So,Lo=ko.map(hi),Ao=["January","February","March","April","May","June","July","August","September","October","November","December"],Oo=Ao.map(hi);d3.time.format=function(e){function t(t){var r=[],i=-1,s=0,o,u;while(++i<n)e.charCodeAt(i)==37&&(r.push(e.substring(s,i),(u=Ro[o=e.charAt(++i)])?u(t):o),s=i+1);return r.push(e.substring(s,i)),r.join("")}var n=e.length;return t.parse=function(t){var n={y:1900,m:0,d:1,H:0,M:0,S:0,L:0},r=pi(n,e,t,0);if(r!=t.length)return null;"p"in n&&(n.H=n.H%12+n.p*12);var i=new Eo;return i.setFullYear(n.y,n.m,n.d),i.setHours(n.H,n.M,n.S,n.L),i},t.toString=function(){return e},t};var Mo=d3.format("02d"),_o=d3.format("03d"),Do=d3.format("04d"),Po=d3.format("2d"),Ho=di(ko),Bo=di(Lo),jo=di(Ao),Fo=vi(Ao),Io=di(Oo),qo=vi(Oo),Ro={a:function(e){return Lo[e.getDay()]},A:function(e){return ko[e.getDay()]},b:function(e){return Oo[e.getMonth()]},B:function(e){return Ao[e.getMonth()]},c:d3.time.format(To),d:function(e){return Mo(e.getDate())},e:function(e){return Po(e.getDate())},H:function(e){return Mo(e.getHours())},I:function(e){return Mo(e.getHours()%12||12)},j:function(e){return _o(1+d3.time.dayOfYear(e))},L:function(e){return _o(e.getMilliseconds())},m:function(e){return Mo(e.getMonth()+1)},M:function(e){return Mo(e.getMinutes())},p:function(e){return e.getHours()>=12?"PM":"AM"},S:function(e){return Mo(e.getSeconds())},U:function(e){return Mo(d3.time.sundayOfYear(e))},w:function(e){return e.getDay()},W:function(e){return Mo(d3.time.mondayOfYear(e))},x:d3.time.format(No),X:d3.time.format(Co),y:function(e){return Mo(e.getFullYear()%100)},Y:function(e){return Do(e.getFullYear()%1e4)},Z:Di,"%":function(e){return"%"}},Uo={a:mi,A:gi,b:yi,B:bi,c:wi,d:ki,e:ki,H:Li,I:Li,L:Mi,m:Ci,M:Ai,p:_i,S:Oi,x:Ei,X:Si,y:Ti,Y:xi},zo=/^\s*\d+/,Wo=d3.map({am:0,pm:1});d3.time.format.utc=function(e){function t(e){try{Eo=ci;var t=new Eo;return t._=e,n(t)}finally{Eo=Date}}var n=d3.time.format(e);return t.parse=function(e){try{Eo=ci;var t=n.parse(e);return t&&t._}finally{Eo=Date}},t.toString=n.toString,t};var Xo=d3.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");d3.time.format.iso=Date.prototype.toISOString?Pi:Xo,Pi.parse=function(e){var t=new Date(e);return isNaN(t)?null:t},Pi.toString=Xo.toString,d3.time.second=Hi(function(e){return new Eo(Math.floor(e/1e3)*1e3)},function(e,t){e.setTime(e.getTime()+Math.floor(t)*1e3)},function(e){return e.getSeconds()}),d3.time.seconds=d3.time.second.range,d3.time.seconds.utc=d3.time.second.utc.range,d3.time.minute=Hi(function(e){return new Eo(Math.floor(e/6e4)*6e4)},function(e,t){e.setTime(e.getTime()+Math.floor(t)*6e4)},function(e){return e.getMinutes()}),d3.time.minutes=d3.time.minute.range,d3.time.minutes.utc=d3.time.minute.utc.range,d3.time.hour=Hi(function(e){var t=e.getTimezoneOffset()/60;return new Eo((Math.floor(e/36e5-t)+t)*36e5)},function(e,t){e.setTime(e.getTime()+Math.floor(t)*36e5)},function(e){return e.getHours()}),d3.time.hours=d3.time.hour.range,d3.time.hours.utc=d3.time.hour.utc.range,d3.time.day=Hi(function(e){var t=new Eo(1970,0);return t.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),t},function(e,t){e.setDate(e.getDate()+t)},function(e){return e.getDate()-1}),d3.time.days=d3.time.day.range,d3.time.days.utc=d3.time.day.utc.range,d3.time.dayOfYear=function(e){var t=d3.time.year(e);return Math.floor((e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*6e4)/864e5)},So.forEach(function(e,t){e=e.toLowerCase(),t=7-t;var n=d3.time[e]=Hi(function(e){return(e=d3.time.day(e)).setDate(e.getDate()-(e.getDay()+t)%7),e},function(e,t){e.setDate(e.getDate()+Math.floor(t)*7)},function(e){var n=d3.time.year(e).getDay();return Math.floor((d3.time.dayOfYear(e)+(n+t)%7)/7)-(n!==t)});d3.time[e+"s"]=n.range,d3.time[e+"s"].utc=n.utc.range,d3.time[e+"OfYear"]=function(e){var n=d3.time.year(e).getDay();return Math.floor((d3.time.dayOfYear(e)+(n+t)%7)/7)}}),d3.time.week=d3.time.sunday,d3.time.weeks=d3.time.sunday.range,d3.time.weeks.utc=d3.time.sunday.utc.range,d3.time.weekOfYear=d3.time.sundayOfYear,d3.time.month=Hi(function(e){return e=d3.time.day(e),e.setDate(1),e},function(e,t){e.setMonth(e.getMonth()+t)},function(e){return e.getMonth()}),d3.time.months=d3.time.month.range,d3.time.months.utc=d3.time.month.utc.range,d3.time.year=Hi(function(e){return e=d3.time.day(e),e.setMonth(0,1),e},function(e,t){e.setFullYear(e.getFullYear()+t)},function(e){return e.getFullYear()}),d3.time.years=d3.time.year.range,d3.time.years.utc=d3.time.year.utc.range;var Vo=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],$o=[[d3.time.second,1],[d3.time.second,5],[d3.time.second,15],[d3.time.second,30],[d3.time.minute,1],[d3.time.minute,5],[d3.time.minute,15],[d3.time.minute,30],[d3.time.hour,1],[d3.time.hour,3],[d3.time.hour,6],[d3.time.hour,12],[d3.time.day,1],[d3.time.day,2],[d3.time.week,1],[d3.time.month,1],[d3.time.month,3],[d3.time.year,1]],Jo=[[d3.time.format("%Y"),function(e){return!0}],[d3.time.format("%B"),function(e){return e.getMonth()}],[d3.time.format("%b %d"),function(e){return e.getDate()!=1}],[d3.time.format("%a %d"),function(e){return e.getDay()&&e.getDate()!=1}],[d3.time.format("%I %p"),function(e){return e.getHours()}],[d3.time.format("%I:%M"),function(e){return e.getMinutes()}],[d3.time.format(":%S"),function(e){return e.getSeconds()}],[d3.time.format(".%L"),function(e){return e.getMilliseconds()}]],Ko=d3.scale.linear(),Qo=qi(Jo);$o.year=function(e,t){return Ko.domain(e.map(Ui)).ticks(t).map(Ri)},d3.time.scale=function(){return ji(d3.scale.linear(),$o,Qo)};var Go=$o.map(function(e){return[e[0].utc,e[1]]}),Yo=[[d3.time.format.utc("%Y"),function(e){return!0}],[d3.time.format.utc("%B"),function(e){return e.getUTCMonth()}],[d3.time.format.utc("%b %d"),function(e){return e.getUTCDate()!=1}],[d3.time.format.utc("%a %d"),function(e){return e.getUTCDay()&&e.getUTCDate()!=1}],[d3.time.format.utc("%I %p"),function(e){return e.getUTCHours()}],[d3.time.format.utc("%I:%M"),function(e){return e.getUTCMinutes()}],[d3.time.format.utc(":%S"),function(e){return e.getUTCSeconds()}],[d3.time.format.utc(".%L"),function(e){return e.getUTCMilliseconds()}]],Zo=qi(Yo);Go.year=function(e,t){return Ko.domain(e.map(Wi)).ticks(t).map(zi)},d3.time.scale.utc=function(){return ji(d3.scale.linear(),Go,Zo)}})();
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
;(function(e){function r(t){var n=t||window.event,r=[].slice.call(arguments,1),i=0,s=true,o=0,u=0;t=e.event.fix(n);t.type="mousewheel";if(n.wheelDelta){i=n.wheelDelta/120}if(n.detail){i=-n.detail/3}u=i;if(n.axis!==undefined&&n.axis===n.HORIZONTAL_AXIS){u=0;o=-1*i}if(n.wheelDeltaY!==undefined){u=n.wheelDeltaY/120}if(n.wheelDeltaX!==undefined){o=-1*n.wheelDeltaX/120}r.unshift(t,i,o,u);return(e.event.dispatch||e.event.handle).apply(this,r)}var t=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks){for(var n=t.length;n;){e.event.fixHooks[t[--n]]=e.event.mouseHooks}}e.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var e=t.length;e;){this.addEventListener(t[--e],r,false)}}else{this.onmousewheel=r}},teardown:function(){if(this.removeEventListener){for(var e=t.length;e;){this.removeEventListener(t[--e],r,false)}}else{this.onmousewheel=null}}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})})(jQuery);
/*
 * tipsy, facebook style tooltips for jquery
 * version 1.0.0a
 * (c) 2008-2010 jason frame [jason@onehackoranother.com]
 * released under the MIT license
 *
 * ***** NOTE: This version of tipsy is a custom WP fork of standard tipsy. It adds:
 * - New gravity option -- 'c' -- to position a tooltip at the center of its element
 * - New option called fadeSpeed -- the duration of the fade in/out animation in ms 
 */

(function($) {
    
    function maybeCall(thing, ctx) {
        return (typeof thing == 'function') ? (thing.call(ctx)) : thing;
    }

    // CAUTION the current implementation does not allow for tipsied elements to stay out of DOM (in between events)
    // i.e. don't remove, store, then re-insert tipsied elements (and why would you want to do that anyway?)
    var garbageCollect = (function() {
        var currentInterval;
        var to = null;
        var tipsies = [];

        function _do() {
            for (var i = 0; i < tipsies.length;) {
                var t = tipsies[i];
                // FIXME? the 2nd (non-paranoid) check is from the link below, it should be replaced if a better way is found
                // http://stackoverflow.com/questions/4040715/check-if-cached-jquery-object-is-still-in-dom
                if (t.options.gcInterval === 0 || t.$element.closest('body').length === 0) {
                    t.hoverState = 'out';
                    t.hide();
                    tipsies.splice(i,1);
                } else {
                    i++;
                }
            }
        }
        function _loop() {
            to = setTimeout(function() { _do(); _loop(); }, currentInterval);
        }

        return function(t) {
            if (t.options.gcInterval === 0) return;

            if (to && t.options.gcInterval < currentInterval) {
                clearTimeout(to); to = null;
                currentInterval = t.options.gcInterval;
            }
            tipsies.push(t);
            if (!to) _loop();
        };
    })();

    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        this.fixTitle();
        garbageCollect(this);
    }

    
    Tipsy.prototype = {
        show: function() {
            var title = this.getTitle();
            if (title && this.enabled) {
                var $tip = this.tip();
                
                $tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'tipsy'; // reset classname in case of dynamic gravity
                $tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).prependTo(document.body);
                
                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth || 0,
                    height: this.$element[0].offsetHeight || 0
                });

                if (typeof this.$element[0].nearestViewportElement == 'object') {
                    // SVG
					var el = this.$element[0];
                    var rect = el.getBoundingClientRect();
					pos.width = rect.width;
					pos.height = rect.height;
                }

                
                var actualWidth = $tip[0].offsetWidth,
                    actualHeight = $tip[0].offsetHeight,
                    gravity = maybeCall(this.options.gravity, this.$element[0]);
                    
                var tp;
                switch (gravity.charAt(0)) {
                    case 'n':
                        tp = {
                            top: pos.top + pos.height + this.options.offset, 
                            left: pos.left + pos.width / 2 - actualWidth / 2
                        };
                        break;
                    case 's':
                        tp = {
                            top: pos.top - actualHeight - this.options.offset, 
                            left: pos.left + pos.width / 2 - actualWidth / 2
                        };
                        break;
                    case 'e':
                        tp = {
                            top: pos.top + pos.height / 2 - actualHeight / 2, 
                            left: pos.left - actualWidth - this.options.offset
                        };
                        break;
                    case 'w':
                        tp = {
                            top: pos.top + pos.height / 2 - actualHeight / 2, 
                            left: pos.left + pos.width + this.options.offset
                        };
                        break;
                    case 'c':
                        tp  = {
                            top: pos.top + pos.height / 2 - actualHeight - this.options.offset, 
                            left: pos.left + pos.width / 2
                        };
                        break;
                }
                
                if (gravity.length == 2) {
                    if (gravity.charAt(1) == 'w') {
                        tp.left = pos.left + pos.width / 2 - 15;
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15;
                    }
                }
                
                $tip.css(tp).addClass('tipsy-' + gravity);
                $tip.find('.tipsy-arrow')[0].className = 'tipsy-arrow tipsy-arrow-' + gravity.charAt(0);
                if (this.options.className) {
                    $tip.addClass(maybeCall(this.options.className, this.$element[0]));
                }
                
                if (this.options.fade) {
                    $tip.stop().css({opacity: 0, display: 'block', visibility: 'visible'}).animate(
                        {opacity: this.options.opacity},
                        this.options.fadeSpeed
                    );
                } else {
                    $tip.css({visibility: 'visible', opacity: this.options.opacity});
                }

                var t = this;
                var set_hovered  = function(set_hover){
                    return function(){
                        t.$tip.stop();
                        t.tipHovered = set_hover;
                        if (!set_hover){
                            if (t.options.delayOut === 0 && t.options.trigger != 'manual') {
                                t.hide();
                            } else {
                                setTimeout(function() { 
                                    if (t.hoverState == 'out') t.hide(); }, t.options.delayOut);
                            }
                        }
                    };
                };
               $tip.hover(set_hovered(true), set_hovered(false));
            }
        },
        
        hide: function() {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function() { $(this).remove(); });
            } else {
                this.tip().remove();
            }
        },
        
        fixTitle: function() {
            var $e = this.$element;
            
            if ($e.attr('title') || typeof($e.attr('original-title')) != 'string') {
                $e.attr('original-title', $e.attr('title') || '').removeAttr('title');
            }
            if (typeof $e.context.nearestViewportElement == 'object'){                                                        
                if ($e.children('title').length){
                    $e.append('<original-title>' + ($e.children('title').text() || '') + '</original-title>')
                        .children('title').remove();
                }
            }
        },
        
        getTitle: function() {
            
            var title, $e = this.$element, o = this.options;
            this.fixTitle();

            if (typeof o.title == 'string') {
                var title_name = o.title == 'title' ? 'original-title' : o.title;
                if ($e.children(title_name).length){
                    title = $e.children(title_name).html();
                } else{
                    title = $e.attr(title_name);
                    if (typeof title == 'undefined') title = ''
                }
                
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0]);
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback;
        },
        
        tip: function() {
            if (!this.$tip) {
                this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
            }
            return this.$tip;
        },
        
        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },
        
        enable: function() { this.enabled = true; },
        disable: function() { this.enabled = false; },
        toggleEnabled: function() { this.enabled = !this.enabled; }
    };
    
    $.fn.tipsy = function(options) {
        
        if (options === true) {
            return this.data('tipsy');
        } else if (typeof options == 'string') {
            $(this).each(function(i,el){
              if ($(el).data('tipsy')) {
                  tipsy = $(el).data('tipsy')
                  tipsy[options]();
              }
            });
            return this;
        }
        
        options = $.extend({}, $.fn.tipsy.defaults, options);

        if (options.hoverlock && options.delayOut === 0) {
            options.delayOut = 100;
        }
        
        function get(ele) {
            var tipsy = $.data(ele, 'tipsy');
            if (!tipsy) {
                tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
                $.data(ele, 'tipsy', tipsy);
            }
            return tipsy;
        }
        
        function enter() {
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn === 0) {
                tipsy.show();
            } else {
                tipsy.fixTitle();
                setTimeout(function() { if (tipsy.hoverState == 'in') tipsy.show(); }, options.delayIn);
            }
        }
        
        function leave() {
            var tipsy = get(this);
            tipsy.hoverState = 'out';
            if (options.delayOut === 0) {
                tipsy.hide();
            } else {
                var to = function() {
                    if (!tipsy.tipHovered || !options.hoverlock){
                        if (tipsy.hoverState == 'out') tipsy.hide(); 
                    }
                };
                setTimeout(to, options.delayOut);
            }    
        }
        
        if (!options.live) this.each(function() { get(this); });
        
        if (options.trigger != 'manual') {
            var binder = options.live ? 'live' : 'bind',
                eventIn = options.trigger == 'hover' ? 'mouseenter' : 'focus',
                eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[binder](eventIn, enter)[binder](eventOut, leave);
        }
        
        return this;
        
    };
    
    $.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fadeSpeed: 200,
        fallback: '',
        gcInterval: 0,
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 0.9,
        title: 'title',
        trigger: 'hover',
        hoverlock: false
    };
    
    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = function(ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };
    
    $.fn.tipsy.autoNS = function() {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };
    
    $.fn.tipsy.autoWE = function() {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    };
    
    /**
     * yields a closure of the supplied parameters, producing a function that takes
     * no arguments and is suitable for use as an autogravity function like so:
     *
     * @param margin (int) - distance from the viewable region edge that an
     *        element should be before setting its tooltip's gravity to be away
     *        from that edge.
     * @param prefer (string, e.g. 'n', 'sw', 'w') - the direction to prefer
     *        if there are no viewable region edges effecting the tooltip's
     *        gravity. It will try to vary from this minimally, for example,
     *        if 'sw' is preferred and an element is near the right viewable 
     *        region edge, but not the top edge, it will set the gravity for
     *        that element's tooltip to be 'se', preserving the southern
     *        component.
     */
     $.fn.tipsy.autoBounds = function(margin, prefer) {
		return function() {
			var dir = {ns: prefer[0], ew: (prefer.length > 1 ? prefer[1] : false)},
                boundTop = $(document).scrollTop() + margin,
                boundLeft = $(document).scrollLeft() + margin,
                $this = $(this);

			if ($this.offset().top < boundTop) dir.ns = 'n';
			if ($this.offset().left < boundLeft) dir.ew = 'w';
			if ($(window).width() + $(document).scrollLeft() - $this.offset().left < margin) dir.ew = 'e';
			if ($(window).height() + $(document).scrollTop() - $this.offset().top < margin) dir.ns = 's';

			return dir.ns + (dir.ew ? dir.ew : '');
		};
    };
})(jQuery);


/*! jQuery UI - v1.9.2 - 2012-12-29
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.slider.js
* Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().andSelf().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e(function(){var t=document.body,n=t.appendChild(n=document.createElement("div"));n.offsetHeight,e.extend(n.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=n.offsetHeight===100,e.support.selectstart="onselectstart"in n,t.removeChild(n).style.display="none"}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),function(){var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=parseFloat(t[1],10)===6}(),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},contains:e.contains,hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)},isOverAxis:function(e,t,n){return e>t&&e<t+n},isOver:function(t,n,r,i,s,o){return e.ui.isOverAxis(t,r,s)&&e.ui.isOverAxis(n,i,o)}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a=t.split(".")[0];t=t.split(".")[1],i=a+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[a]=e[a]||{},s=e[a][t],o=e[a][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,i){e.isFunction(i)&&(r[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},r=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=r,s=i.apply(this,arguments),this._super=t,this._superApply=n,s}}())}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},r,{constructor:o,namespace:a,widgetName:t,widgetBaseClass:i,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetName,this),e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&(e.effects.effect[u]||e.uiBackCompat!==!1&&e.effects[u])?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}}),e.uiBackCompat!==!1&&(e.Widget.prototype._getCreateOptions=function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]})})(jQuery);(function(e,t){var n=!1;e(document).mouseup(function(e){n=!1}),e.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return!e.ui.ie||document.documentMode>=9||!!t.button?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(e){return this.mouseDelayMet},_mouseStart:function(e){},_mouseDrag:function(e){},_mouseStop:function(e){},_mouseCapture:function(e){return!0}})})(jQuery);(function(e,t){function h(e,t,n){return[parseInt(e[0],10)*(l.test(e[0])?t/100:1),parseInt(e[1],10)*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}e.ui=e.ui||{};var n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(){if(n!==t)return n;var r,i,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return e("body").append(s),r=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,r===i&&(i=s[0].clientWidth),s.remove(),n=r-i},getScrollInfo:function(t){var n=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:i?e.position.scrollbarWidth():0,height:s?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]);return{element:n,isWindow:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return c.apply(this,arguments);t=e.extend({},t);var n,l,d,v,m,g=e(t.of),y=e.position.getWithinInfo(t.within),b=e.position.getScrollInfo(y),w=g[0],E=(t.collision||"flip").split(" "),S={};return w.nodeType===9?(l=g.width(),d=g.height(),v={top:0,left:0}):e.isWindow(w)?(l=g.width(),d=g.height(),v={top:g.scrollTop(),left:g.scrollLeft()}):w.preventDefault?(t.at="left top",l=d=0,v={top:w.pageY,left:w.pageX}):(l=g.outerWidth(),d=g.outerHeight(),v=g.offset()),m=e.extend({},v),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),S[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]}),E.length===1&&(E[1]=E[0]),t.at[0]==="right"?m.left+=l:t.at[0]==="center"&&(m.left+=l/2),t.at[1]==="bottom"?m.top+=d:t.at[1]==="center"&&(m.top+=d/2),n=h(S.at,l,d),m.left+=n[0],m.top+=n[1],this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),w=p(this,"marginLeft"),x=p(this,"marginTop"),T=f+w+p(this,"marginRight")+b.width,N=c+x+p(this,"marginBottom")+b.height,C=e.extend({},m),k=h(S.my,a.outerWidth(),a.outerHeight());t.my[0]==="right"?C.left-=f:t.my[0]==="center"&&(C.left-=f/2),t.my[1]==="bottom"?C.top-=c:t.my[1]==="center"&&(C.top-=c/2),C.left+=k[0],C.top+=k[1],e.support.offsetFractions||(C.left=s(C.left),C.top=s(C.top)),o={marginLeft:w,marginTop:x},e.each(["left","top"],function(r,i){e.ui.position[E[r]]&&e.ui.position[E[r]][i](C,{targetWidth:l,targetHeight:d,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:T,collisionHeight:N,offset:[n[0]+k[0],n[1]+k[1]],my:t.my,at:t.at,within:y,elem:a})}),e.fn.bgiframe&&a.bgiframe(),t.using&&(u=function(e){var n=v.left-C.left,s=n+l-f,o=v.top-C.top,u=o+d-c,h={target:{element:g,left:v.left,top:v.top,width:l,height:d},element:{element:a,left:C.left,top:C.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};l<f&&i(n+s)<l&&(h.horizontal="center"),d<c&&i(o+u)<d&&(h.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?h.important="horizontal":h.important="vertical",t.using.call(this,e,h)}),a.offset(e.extend(C,{using:u}))})},e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f)e.left+=l+c+h}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;a<0?(v=e.top+c+h+p+t.collisionHeight-s-r,e.top+c+h+p>a&&(v<0||v<i(a))&&(e.top+=c+h+p)):f>0&&(d=e.top-t.collisionPosition.marginTop+c+h+p-o,e.top+c+h+p>f&&(d>0||i(d)<f)&&(e.top+=c+h+p))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,r,i,s,o=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(o?"div":"body"),r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in r)t.style[s]=r[s];t.appendChild(u),n=o||document.documentElement,n.insertBefore(t,n.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",i=e(u).offset().left,e.support.offsetFractions=i>10&&i<11,t.innerHTML="",n.removeChild(t)}(),e.uiBackCompat!==!1&&function(e){var n=e.fn.position;e.fn.position=function(r){if(!r||!r.offset)return n.call(this,r);var i=r.offset.split(" "),s=r.at.split(" ");return i.length===1&&(i[1]=i[0]),/^\d/.test(i[0])&&(i[0]="+"+i[0]),/^\d/.test(i[1])&&(i[1]="+"+i[1]),s.length===1&&(/left|center|right/.test(s[0])?s[1]="center":(s[1]=s[0],s[0]="center")),n.call(this,e.extend(r,{at:s[0]+i[0]+" "+s[1]+i[1],offset:t}))}}(jQuery)})(jQuery);(function(e,t){var n=5;e.widget("ui.slider",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var t,r,i=this.options,s=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),o="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",u=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(i.disabled?" ui-slider-disabled ui-disabled":"")),this.range=e([]),i.range&&(i.range===!0&&(i.values||(i.values=[this._valueMin(),this._valueMin()]),i.values.length&&i.values.length!==2&&(i.values=[i.values[0],i.values[0]])),this.range=e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(i.range==="min"||i.range==="max"?" ui-slider-range-"+i.range:""))),r=i.values&&i.values.length||1;for(t=s.length;t<r;t++)u.push(o);this.handles=s.add(e(u.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(e){e.preventDefault()}).mouseenter(function(){i.disabled||e(this).addClass("ui-state-hover")}).mouseleave(function(){e(this).removeClass("ui-state-hover")}).focus(function(){i.disabled?e(this).blur():(e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),e(this).addClass("ui-state-focus"))}).blur(function(){e(this).removeClass("ui-state-focus")}),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)}),this._on(this.handles,{keydown:function(t){var r,i,s,o,u=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:t.preventDefault();if(!this._keySliding){this._keySliding=!0,e(t.target).addClass("ui-state-active"),r=this._start(t,u);if(r===!1)return}}o=this.options.step,this.options.values&&this.options.values.length?i=s=this.values(u):i=s=this.value();switch(t.keyCode){case e.ui.keyCode.HOME:s=this._valueMin();break;case e.ui.keyCode.END:s=this._valueMax();break;case e.ui.keyCode.PAGE_UP:s=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(i===this._valueMax())return;s=this._trimAlignValue(i+o);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i===this._valueMin())return;s=this._trimAlignValue(i-o)}this._slide(t,u,s)},keyup:function(t){var n=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,n),this._change(t,n),e(t.target).removeClass("ui-state-active"))}}),this._refreshValue(),this._animateOff=!1},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var n,r,i,s,o,u,a,f,l=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),n={x:t.pageX,y:t.pageY},r=this._normValueFromMouse(n),i=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var n=Math.abs(r-l.values(t));i>n&&(i=n,s=e(this),o=t)}),c.range===!0&&this.values(1)===c.min&&(o+=1,s=e(this.handles[o])),u=this._start(t,o),u===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,s.addClass("ui-state-active").focus(),a=s.offset(),f=!e(t.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=f?{left:0,top:0}:{left:t.pageX-a.left-s.width()/2,top:t.pageY-a.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,r),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,n),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,n,r,i,s;return this.orientation==="horizontal"?(t=this.elementSize.width,n=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,n=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),r=n/t,r>1&&(r=1),r<0&&(r=0),this.orientation==="vertical"&&(r=1-r),i=this._valueMax()-this._valueMin(),s=this._valueMin()+r*i,this._trimAlignValue(s)},_start:function(e,t){var n={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("start",e,n)},_slide:function(e,t,n){var r,i,s;this.options.values&&this.options.values.length?(r=this.values(t?0:1),this.options.values.length===2&&this.options.range===!0&&(t===0&&n>r||t===1&&n<r)&&(n=r),n!==this.values(t)&&(i=this.values(),i[t]=n,s=this._trigger("slide",e,{handle:this.handles[t],value:n,values:i}),r=this.values(t?0:1),s!==!1&&this.values(t,n,!0))):n!==this.value()&&(s=this._trigger("slide",e,{handle:this.handles[t],value:n}),s!==!1&&this.value(n))},_stop:function(e,t){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("stop",e,n)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("change",e,n)}},value:function(e){if(arguments.length){this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(t,n){var r,i,s;if(arguments.length>1){this.options.values[t]=this._trimAlignValue(n),this._refreshValue(),this._change(null,t);return}if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();r=this.options.values,i=arguments[0];for(s=0;s<r.length;s+=1)r[s]=this._trimAlignValue(i[s]),this._change(null,s);this._refreshValue()},_setOption:function(t,n){var r,i=0;e.isArray(this.options.values)&&(i=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments);switch(t){case"disabled":n?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.prop("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.prop("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(r=0;r<i;r+=1)this._change(null,r);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e),e},_values:function(e){var t,n,r;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t),t;n=this.options.values.slice();for(r=0;r<n.length;r+=1)n[r]=this._trimAlignValue(n[r]);return n},_trimAlignValue:function(e){if(e<=this._valueMin())return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,n=(e-this._valueMin())%t,r=e-n;return Math.abs(n)*2>=t&&(r+=n>0?t:-t),parseFloat(r.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,n,r,i,s,o=this.options.range,u=this.options,a=this,f=this._animateOff?!1:u.animate,l={};this.options.values&&this.options.values.length?this.handles.each(function(r){n=(a.values(r)-a._valueMin())/(a._valueMax()-a._valueMin())*100,l[a.orientation==="horizontal"?"left":"bottom"]=n+"%",e(this).stop(1,1)[f?"animate":"css"](l,u.animate),a.options.range===!0&&(a.orientation==="horizontal"?(r===0&&a.range.stop(1,1)[f?"animate":"css"]({left:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({width:n-t+"%"},{queue:!1,duration:u.animate})):(r===0&&a.range.stop(1,1)[f?"animate":"css"]({bottom:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({height:n-t+"%"},{queue:!1,duration:u.animate}))),t=n}):(r=this.value(),i=this._valueMin(),s=this._valueMax(),n=s!==i?(r-i)/(s-i)*100:0,l[this.orientation==="horizontal"?"left":"bottom"]=n+"%",this.handle.stop(1,1)[f?"animate":"css"](l,u.animate),o==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[f?"animate":"css"]({width:n+"%"},u.animate),o==="max"&&this.orientation==="horizontal"&&this.range[f?"animate":"css"]({width:100-n+"%"},{queue:!1,duration:u.animate}),o==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[f?"animate":"css"]({height:n+"%"},u.animate),o==="max"&&this.orientation==="vertical"&&this.range[f?"animate":"css"]({height:100-n+"%"},{queue:!1,duration:u.animate}))}})})(jQuery);
/*
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function(b){b.support.touch="ontouchend" in document;if(!b.support.touch){return;}var c=b.ui.mouse.prototype,e=c._mouseInit,a;function d(g,h){if(g.originalEvent.touches.length>1){return;}g.preventDefault();var i=g.originalEvent.changedTouches[0],f=document.createEvent("MouseEvents");f.initMouseEvent(h,true,true,window,1,i.screenX,i.screenY,i.clientX,i.clientY,false,false,false,false,0,null);g.target.dispatchEvent(f);}c._touchStart=function(g){var f=this;if(a||!f._mouseCapture(g.originalEvent.changedTouches[0])){return;}a=true;f._touchMoved=false;d(g,"mouseover");d(g,"mousemove");d(g,"mousedown");};c._touchMove=function(f){if(!a){return;}this._touchMoved=true;d(f,"mousemove");};c._touchEnd=function(f){if(!a){return;}d(f,"mouseup");d(f,"mouseout");if(!this._touchMoved){d(f,"click");}a=false;};c._mouseInit=function(){var f=this;f.element.bind("touchstart",b.proxy(f,"_touchStart")).bind("touchmove",b.proxy(f,"_touchMove")).bind("touchend",b.proxy(f,"_touchEnd"));e.call(f);};})(jQuery);
/*!
    jQuery.kinetic v1.7.0
    Dave Taylor http://the-taylors.org/jquery.kinetic
    

    The MIT License (MIT)
    Copyright (c) <2011> <Dave Taylor http://the-taylors.org>
*/

/*
 *  Modification by Dan Thomson
    jQuery.kinetic plugin modified to allow drag listener to operate on
    separate element than that being scrolled.
 */

/*global define,require */
(function($){
	'use strict';

    var DEFAULT_SETTINGS = {
            cursor: 'arrow',
            decelerate: true,
            triggerHardware: false,
            y: false,
            x: true,
            slowdown: .8,
            maxvelocity: 600,
            throttleFPS: 100,
            movingClass: {
                up: 'kinetic-moving-up',
                down: 'kinetic-moving-down',
                left: 'kinetic-moving-left',
                right: 'kinetic-moving-right'
            },
            deceleratingClass: {
                up: 'kinetic-decelerating-up',
                down: 'kinetic-decelerating-down',
                left: 'kinetic-decelerating-left',
                right: 'kinetic-decelerating-right'
            }
        },
        SETTINGS_KEY = 'kinetic-settings',
        ACTIVE_CLASS = 'kinetic-active';
    /**
     * Provides requestAnimationFrame in a cross browser way.
     * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
     */
    if ( !window.requestAnimationFrame ) {

        window.requestAnimationFrame = ( function() {

            return window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {
                window.setTimeout( callback, 1000 / 60 );
            };

        }());

    }

    // add touch checker to jQuery.support
    $.support = $.support || {};
    $.extend($.support, {
        touch: "ontouchend" in document
    });
    var selectStart = function() { return false; };

    var decelerateVelocity = function(velocity, slowdown) {
        return Math.floor(Math.abs(velocity)) === 0 ? 0 // is velocity less than 1?
               : velocity * slowdown; // reduce slowdown
    };

    var capVelocity = function(velocity, max) {
        var newVelocity = velocity * 2;
        if (velocity > 0) {
            if (velocity > max) {
                newVelocity = max;
            }
        } else {
            if (velocity < (0 - max)) {
                newVelocity = (0 - max);
            }
        }
        return newVelocity;
    };

    var setMoveClasses = function(settings, classes) {
        this.removeClass(settings.movingClass.up)
            .removeClass(settings.movingClass.down)
            .removeClass(settings.movingClass.left)
            .removeClass(settings.movingClass.right)
            .removeClass(settings.deceleratingClass.up)
            .removeClass(settings.deceleratingClass.down)
            .removeClass(settings.deceleratingClass.left)
            .removeClass(settings.deceleratingClass.right);

        if (settings.velocity > 0) {
            this.addClass(classes.right);
        }
        if (settings.velocity < 0) {
            this.addClass(classes.left);
        }
        if (settings.velocityY > 0) {
            this.addClass(classes.down);
        }
        if (settings.velocityY < 0) {
            this.addClass(classes.up);
        }
        
    };

    var stop = function($scroller, settings) {
        settings.velocity = 0;
        settings.velocityY = 0;
        settings.decelerate = true;
        if (typeof settings.stopped === 'function') {
            settings.stopped.call($scroller, settings);
        }
    };

    /** do the actual kinetic movement */
    var move = function($scroller, settings) {
        var scroller = $scroller[0];
        // set scrollLeft
        if (settings.x && scroller.scrollWidth > 0){
            scroller.scrollLeft = settings.scrollLeft = scroller.scrollLeft + settings.velocity;
            if (Math.abs(settings.velocity) > 0) {
                settings.velocity = settings.decelerate ?
                    decelerateVelocity(settings.velocity, settings.slowdown) : settings.velocity;
            }
        } else {
            settings.velocity = 0;
        }

        // set scrollTop
        if (settings.y && scroller.scrollHeight > 0){
            scroller.scrollTop = settings.scrollTop = scroller.scrollTop + settings.velocityY;
            if (Math.abs(settings.velocityY) > 0) {
                settings.velocityY = settings.decelerate ?
                    decelerateVelocity(settings.velocityY, settings.slowdown) : settings.velocityY;
            }
        } else {
            settings.velocityY = 0;
        }

        //Unneccessary for our purposes - dan
        //setMoveClasses.call($scroller, settings, settings.deceleratingClass);

        if (typeof settings.moved === 'function') {
            settings.moved.call($scroller, settings);
        }

        if (Math.abs(settings.velocity) > 0 || Math.abs(settings.velocityY) > 0) {
            // tick for next movement
            window.requestAnimationFrame(function(){ move($scroller, settings); });
        } else {
            stop($scroller, settings);
        }
    };

    var callOption = function(method, options) {
        var methodFn = $.kinetic.callMethods[method],
            args = Array.prototype.slice.call(arguments)
        ;
        if (methodFn) {
            this.each(function(){
                var opts = args.slice(1), settings = $(this).data(SETTINGS_KEY);
                opts.unshift(settings);
                methodFn.apply(this, opts);
            });
        }
    };

    var attachListeners = function($this, settings) {
        var element = $this[0];
        if ($.support.touch) {
            $this.bind('touchstart', settings.events.touchStart)
                .bind('touchend', settings.events.inputEnd)
                .bind('touchmove', settings.events.touchMove);
        } else {
            $this
            .mousedown(settings.events.inputDown)
            .mouseup(settings.events.inputEnd)
            .mousemove(settings.events.inputMove);
        }
        $this.click(settings.events.inputClick)
        .bind("selectstart", selectStart); // prevent selection when dragging
        $this.bind('dragstart', settings.events.dragStart);
    };
    var detachListeners = function($this, settings) {
        var element = $this[0];
        if ($.support.touch) {
            $this.unbind('touchstart', settings.events.touchStart)
                .unbind('touchend', settings.events.inputEnd)
                .unbind('touchmove', settings.events.touchMove);
        } else {
            $this
            .unbind('mousedown', settings.events.inputDown)
            .unbind('mouseup', settings.events.inputEnd)
            .unbind('mousemove', settings.events.inputMove);
        }
        $this.unbind('click', settings.events.inputClick)
        .unbind("selectstart", selectStart); // prevent selection when dragging
        $this.unbind('dragstart', settings.events.dragStart);
    };

    var initElements = function(options) {
        this
        .addClass(ACTIVE_CLASS)
        .each(function(){

            var settings = $.extend({}, DEFAULT_SETTINGS, options);

            var self = this,
                $this = $(this),
                $slider = ($(settings.slider).length===0 ? $this : $(settings.slider)),
                xpos,
                prevXPos = false,
                ypos,
                prevYPos = false,
                mouseDown = false,
                scrollLeft,
                scrollTop,
                throttleTimeout = 1000 / settings.throttleFPS,
                lastMove,
                elementFocused
            ;
            

            settings.velocity = 0;
            settings.velocityY = 0;

            // make sure we reset everything when mouse up
            var resetMouse = function() {
                xpos = false;
                ypos = false;
                mouseDown = false;
            };
            $(document).mouseup(resetMouse).click(resetMouse);

            var calculateVelocities = function() {
                settings.velocity    = capVelocity(prevXPos - xpos, settings.maxvelocity);
                settings.velocityY   = capVelocity(prevYPos - ypos, settings.maxvelocity);
            };
            var useTarget = function(target) {
                if ($.isFunction(settings.filterTarget)) {
                    return settings.filterTarget.call(self, target) !== false;
                }
                return true;
            };
            var start = function(clientX, clientY) {
                mouseDown = true;
                settings.velocity = prevXPos = 0;
                settings.velocityY = prevYPos = 0;
                xpos = clientX;
                ypos = clientY;
            };
            var end = function() {
                if (xpos && prevXPos && settings.decelerate === false) {
                    settings.decelerate = true;
                    calculateVelocities();
                    xpos = prevXPos = mouseDown = false;
                    move($slider, settings);
                }
            };
            var inputmove = function(clientX, clientY) {
                if (!lastMove || new Date() > new Date(lastMove.getTime() + throttleTimeout)) {
                    lastMove = new Date();

                    if (mouseDown && (xpos || ypos)) {
                        if (elementFocused) {
                            $(elementFocused).blur();
                            elementFocused = null;
                            $this.focus();
                        }
                        settings.decelerate = false;
                        settings.velocity   = settings.velocityY  = 0;
                        $slider[0].scrollLeft = settings.scrollLeft = settings.x ? $slider[0].scrollLeft - (clientX - xpos) : $slider[0].scrollLeft;
                        $slider[0].scrollTop  = settings.scrollTop  = settings.y ? $slider[0].scrollTop - (clientY - ypos)  : $slider[0].scrollTop;
                        
                        prevXPos = xpos;
                        prevYPos = ypos;
                        xpos = clientX;
                        ypos = clientY;

                        calculateVelocities();
                        // Unneccessary - Dan
                        //setMoveClasses.call($this, settings, settings.movingClass);

                        if (typeof settings.moved === 'function') {
                            settings.moved.call($this, settings);
                        }
                    }
                }
            };

            // Events
            settings.events = {
                touchStart: function(e){
                    var touch;
                    if (useTarget(e.target)) {
                        touch = e.originalEvent.touches[0];
                        start(touch.clientX, touch.clientY);
                        e.stopPropagation();
                    }
                },
                touchMove: function(e){
                    var touch;
                    if (mouseDown) {
                        touch = e.originalEvent.touches[0];
                        inputmove(touch.clientX, touch.clientY);
                        if (e.preventDefault) {e.preventDefault();}
                    }
                },
                inputDown: function(e){
                    if (useTarget(e.target) && e.which === 1) {
                        start(e.clientX, e.clientY);
                        elementFocused = e.target;
                        if (e.target.nodeName === 'IMG'){
                            e.preventDefault();
                        }
                        e.stopPropagation();
                    }
                },
                inputEnd: function(e){
                    end();
                    elementFocused = null;
                    if (e.preventDefault) {e.preventDefault();}
                },
                inputMove: function(e) {
                    if (mouseDown){
                        inputmove(e.clientX, e.clientY);
                        if (e.preventDefault) {e.preventDefault();}
                    }
                },
                inputClick: function(e){
                    if (Math.abs(settings.velocity) > 0) {
                        e.preventDefault();
                        return false;
                    }
                },
                // prevent drag and drop images in ie
                dragStart: function(e) {
                    if (elementFocused) {
                        return false;
                    }
                }
            };

            attachListeners($this, settings);
            $this.data(SETTINGS_KEY, settings)
                .css("cursor", settings.cursor);

            if (settings.triggerHardware) {
                $this.css('-webkit-transform', 'translate3d(0,0,0)');
            }
        });
    };

    $.kinetic = {
        settingsKey: SETTINGS_KEY,
        callMethods: {
            start: function(settings, options){
                var $this = $slider;
                    settings = $.extend(settings, options);
                if (settings) {
                    settings.decelerate = false;
                    move($this, settings);
                }
            },
            end: function(settings, options){
                var $this = $slider;
                if (settings) {
                    settings.decelerate = true;
                }
            },
            stop: function(settings, options){
                var $this = $slider;
                stop($this, settings);
            },
            detach: function(settings, options) {
                var $this = $(this);
                detachListeners($this, settings);
                $this
                .removeClass(ACTIVE_CLASS)
                .css("cursor", "");
            },
            attach: function(settings, options) {
                var $this = $(this);
                attachListeners($this, settings);
                $this
                .addClass(ACTIVE_CLASS)
                .css("cursor", "move");
            }
        }
    };
    $.fn.kinetic = function(options) {
        if (typeof options === 'string') {
            callOption.apply(this, arguments);
        } else {
            initElements.call(this, options);
        }
        return this;
    };

}(window.jQuery || window.Zepto));

// ColorBox v1.3.17.2 - a full featured, light-weight, customizable lightbox based on jQuery 1.3+
// Copyright (c) 2011 Jack Moore - jack@colorpowered.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php

(function ($, document, window) {
	var
	// ColorBox Default Settings.	
	// See http://colorpowered.com/colorbox for details.
	defaults = {
		transition: "elastic",
		speed: 300,
		width: false,
		initialWidth: "600",
		innerWidth: false,
		maxWidth: "880",
		height: false,
		initialHeight: "450",
		innerHeight: false,
		maxHeight: false,
		scalePhotos: true,
		scrolling: false,
		inline: false,
		html: true,
		iframe: false,
		fastIframe: false,
		photo: false,
		href: false,
		title: false,
		rel: false,
		opacity: 0.4,
		preloading: true,
		current: "image {current} of {total}",
		previous: "previous",
		next: "next",
		close: "close",
		open: false,
		returnFocus: true,
		loop: true,
		slideshow: false,
		slideshowAuto: true,
		slideshowSpeed: 2500,
		slideshowStart: "start slideshow",
		slideshowStop: "stop slideshow",
		onOpen: false,
		onLoad: false,
		onComplete: false,
		onCleanup: false,
		onClosed: false,
		overlayClose: true,		
		escKey: true,
		arrowKey: true,
        top: false,
        bottom: false,
        left: false,
        right: false,
        fixed: false,
        data: false
	},
	
	// Abstracting the HTML and event identifiers for easy rebranding
	colorbox = 'colorbox',
	prefix = 'cbox',
    boxElement = prefix + 'Element',
	
	// Events	
	event_open = prefix + '_open',
	event_load = prefix + '_load',
	event_complete = prefix + '_complete',
	event_cleanup = prefix + '_cleanup',
	event_closed = prefix + '_closed',
	event_purge = prefix + '_purge',
	
	// Special Handling for IE
	isIE = $.browser.msie && !$.support.opacity, // Detects IE6,7,8.  IE9 supports opacity.  Feature detection alone gave a false positive on at least one phone browser and on some development versions of Chrome, hence the user-agent test.
	isIE6 = isIE && $.browser.version < 7,
	event_ie6 = prefix + '_IE6',

	// Cached jQuery Object Variables
	$overlay,
	$box,
	$wrap,
	$content,
	$topBorder,
	$leftBorder,
	$rightBorder,
	$bottomBorder,
	$related,
	$window,
	$loaded,
	$loadingBay,
	$loadingOverlay,
	$title,
	$current,
	$slideshow,
	$next,
	$prev,
	$close,
	$groupControls,

	// Variables for cached values or use across multiple functions
	settings,
	interfaceHeight,
	interfaceWidth,
	loadedHeight,
	loadedWidth,
	element,
	index,
	photo,
	open,
	active,
	closing,
    handler,
    loadingTimer,
    publicMethod;
	
	// ****************
	// HELPER FUNCTIONS
	// ****************

	// jQuery object generator to reduce code size
	function $div(id, cssText, div) { 
		div = document.createElement('div');
		if (id) {
            div.id = prefix + id;
        }
		div.style.cssText = cssText || '';
		return $(div);
	}

	// Convert '%' and 'px' values to integers
	function setSize(size, dimension) {
		return Math.round((/%/.test(size) ? ((dimension === 'x' ? $window.width() : $window.height()) / 100) : 1) * parseInt(size, 10));
	}
	
	// Checks an href to see if it is a photo.
	// There is a force photo option (photo: true) for hrefs that cannot be matched by this regex.
	function isImage(url) {
		return settings.photo || /\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i.test(url);
	}
	
	// Assigns function results to their respective settings.  This allows functions to be used as values.
	function makeSettings(i) {
        settings = $.extend({}, $.data(element, colorbox));
        
		for (i in settings) {
			if ($.isFunction(settings[i]) && i.substring(0, 2) !== 'on') { // checks to make sure the function isn't one of the callbacks, they will be handled at the appropriate time.
			    settings[i] = settings[i].call(element);
			}
		}
        
		settings.rel = settings.rel || element.rel || 'nofollow';
		settings.href = settings.href || $(element).attr('href');
		settings.title = settings.title || element.title;
        
        if (typeof settings.href === "string") {
            settings.href = $.trim(settings.href);
        }
	}

	function trigger(event, callback) {
		if (callback) {
			callback.call(element);
		}
		$.event.trigger(event);
	}

	// Slideshow functionality
	function slideshow() {
		var
		timeOut,
		className = prefix + "Slideshow_",
		click = "click." + prefix,
		start,
		stop,
		clear;
		
		if (settings.slideshow && $related[1]) {
			start = function () {
				$slideshow
					.text(settings.slideshowStop)
					.unbind(click)
					.bind(event_complete, function () {
						if (index < $related.length - 1 || settings.loop) {
							timeOut = setTimeout(publicMethod.next, settings.slideshowSpeed);
						}
					})
					.bind(event_load, function () {
						clearTimeout(timeOut);
					})
					.one(click + ' ' + event_cleanup, stop);
				$box.removeClass(className + "off").addClass(className + "on");
				timeOut = setTimeout(publicMethod.next, settings.slideshowSpeed);
			};
			
			stop = function () {
				clearTimeout(timeOut);
				$slideshow
					.text(settings.slideshowStart)
					.unbind([event_complete, event_load, event_cleanup, click].join(' '))
					.one(click, start);
				$box.removeClass(className + "on").addClass(className + "off");
			};
			
			if (settings.slideshowAuto) {
				start();
			} else {
				stop();
			}
		} else {
            $box.removeClass(className + "off " + className + "on");
        }
	}

	function launch(target) {
		if (!closing) {
			
			element = target;
			
			makeSettings();
			
			$related = $(element);
			
			index = 0;
			
			if (settings.rel !== 'nofollow') {
				$related = $('.' + boxElement).filter(function () {
					var relRelated = $.data(this, colorbox).rel || this.rel;
					return (relRelated === settings.rel);
				});
				index = $related.index(element);
				
				// Check direct calls to ColorBox.
				if (index === -1) {
					$related = $related.add(element);
					index = $related.length - 1;
				}
			}
			
			if (!open) {
				open = active = true; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.
				
				$box.show();
				
				if (settings.returnFocus) {
					try {
						element.blur();
						$(element).one(event_closed, function () {
							try {
								this.focus();
							} catch (e) {
								// do nothing
							}
						});
					} catch (e) {
						// do nothing
					}
				}
				
				// +settings.opacity avoids a problem in IE when using non-zero-prefixed-string-values, like '.5'
				$overlay.css({"opacity": +settings.opacity, "cursor": settings.overlayClose ? "pointer" : "auto"}).show();
				
				// Opens inital empty ColorBox prior to content being loaded.
				settings.w = setSize(settings.initialWidth, 'x');
				settings.h = setSize(settings.initialHeight, 'y');
				publicMethod.position();
				
				if (isIE6) {
					$window.bind('resize.' + event_ie6 + ' scroll.' + event_ie6, function () {
						$overlay.css({width: $window.width(), height: $window.height(), top: $window.scrollTop(), left: $window.scrollLeft()});
					}).trigger('resize.' + event_ie6);
				}
				
				trigger(event_open, settings.onOpen);
				
				$groupControls.add($title).hide();
				
				$close.html(settings.close).show();
			}
			
			publicMethod.load(true);
		}
	}

	// ****************
	// PUBLIC FUNCTIONS
	// Usage format: $.fn.colorbox.close();
	// Usage from within an iframe: parent.$.fn.colorbox.close();
	// ****************
	
	publicMethod = $.fn[colorbox] = $[colorbox] = function (options, callback) {
		var $this = this;
		
        options = options || {};
        
		if (!$this[0]) {
			if ($this.selector) { // if a selector was given and it didn't match any elements, go ahead and exit.
                return $this;
            }
            // if no selector was given (ie. $.colorbox()), create a temporary element to work with
			$this = $('<a/>');
			options.open = true; // assume an immediate open
		}
		
		if (callback) {
			options.onComplete = callback;
		}
		
		$this.each(function () {
			$.data(this, colorbox, $.extend({}, $.data(this, colorbox) || defaults, options));
			$(this).addClass(boxElement);
		});
		
        if (($.isFunction(options.open) && options.open.call($this)) || options.open) {
			launch($this[0]);
		}
        
		return $this;
	};

	// Initialize ColorBox: store common calculations, preload the interface graphics, append the html.
	// This preps ColorBox for a speedy open when clicked, and minimizes the burdon on the browser by only
	// having to run once, instead of each time colorbox is opened.
	publicMethod.init = function () {
		// Make sure this doesn't get run more than once
		if($("#" + prefix + "Wrapper").length > 0) {
		return;
		}
		// Create & Append jQuery Objects
		$window = $(window);
		$box = $div().attr({id: colorbox, 'class': isIE ? prefix + (isIE6 ? 'IE6' : 'IE') : ''});
		$overlay = $div("Overlay", isIE6 ? 'position:absolute' : '').hide();
		
		$wrap = $div("Wrapper");
		$content = $div("Content").append(
			$loaded = $div("LoadedContent", 'width:0; height:0; overflow:hidden'),
			$loadingOverlay = $div("LoadingOverlay").add($div("LoadingGraphic")),
			$title = $div("Title"),
			$current = $div("Current"),
			$next = $div("Next"),
			$prev = $div("Previous"),
			$slideshow = $div("Slideshow").bind(event_open, slideshow),
			$close = $div("Close")
		);
		$wrap.append( // The 3x3 Grid that makes up ColorBox
			$div().append(
				$div("TopLeft"),
				$topBorder = $div("TopCenter"),
				$div("TopRight")
			),
			$div(false, 'clear:left').append(
				$leftBorder = $div("MiddleLeft"),
				$content,
				$rightBorder = $div("MiddleRight")
			),
			$div(false, 'clear:left').append(
				$div("BottomLeft"),
				$bottomBorder = $div("BottomCenter"),
				$div("BottomRight")
			)
		).children().children().css({'float': 'left'});
		
		$loadingBay = $div(false, 'position:absolute; width:9999px; visibility:hidden; display:none');
		
		$('body').prepend($overlay, $box.append($wrap, $loadingBay));
		
		$content.children()
		.hover(function () {
			$(this).addClass('hover');
		}, function () {
			$(this).removeClass('hover');
		}).addClass('hover');
		
		// Cache values needed for size calculations
		interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height();//Subtraction needed for IE6
		interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
		loadedHeight = $loaded.outerHeight(true);
		loadedWidth = $loaded.outerWidth(true);
		
		// Setting padding to remove the need to do size conversions during the animation step.
		$box.css({"padding-bottom": interfaceHeight, "padding-right": interfaceWidth}).hide();
		
        // Setup button events.
        // Anonymous functions here keep the public method from being cached, thereby allowing them to be redefined on the fly.
        $next.click(function () {
            publicMethod.next();
        });
        $prev.click(function () {
            publicMethod.prev();
        });
        $close.click(function () {
            publicMethod.close();
        });
		
		$groupControls = $next.add($prev).add($current).add($slideshow);
		
		// Adding the 'hover' class allowed the browser to load the hover-state
		// background graphics in case the images were not part of a sprite.  The class can now can be removed.
		$content.children().removeClass('hover');
		
		$overlay.click(function () {
			if (settings.overlayClose) {
				publicMethod.close();
			}
		});
		
		// Set Navigation Key Bindings
		$(document).bind('keydown.' + prefix, function (e) {
            var key = e.keyCode;
			if (open && settings.escKey && key === 27) {
				e.preventDefault();
				publicMethod.close();
			}
			if (open && settings.arrowKey && $related[1]) {
				if (key === 37) {
					e.preventDefault();
					$prev.click();
				} else if (key === 39) {
					e.preventDefault();
					$next.click();
				}
			}
		});
	};
	
	publicMethod.remove = function () {
		$box.add($overlay).remove();
		$('.' + boxElement).removeData(colorbox).removeClass(boxElement);
	};

	publicMethod.position = function (speed, loadedCallback) {
        var top = 0, left = 0;
        
        $window.unbind('resize.' + prefix);
        
        // remove the modal so that it doesn't influence the document width/height        
        $box.hide();
        
        if (settings.fixed && !isIE6) {
            $box.css({position: 'fixed'});
        } else {
            top = $window.scrollTop();
            left = $window.scrollLeft();
            $box.css({position: 'absolute'});
        }
        
		// keeps the top and left positions within the browser's viewport.
        if (settings.right !== false) {
            left += Math.max($window.width() - settings.w - loadedWidth - interfaceWidth - setSize(settings.right, 'x'), 0);
        } else if (settings.left !== false) {
            left += setSize(settings.left, 'x');
        } else {
            left += Math.round(Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2);
        }
        
        if (settings.bottom !== false) {
            top += Math.max(document.documentElement.clientHeight - settings.h - loadedHeight - interfaceHeight - setSize(settings.bottom, 'y'), 0);
        } else if (settings.top !== false) {
            top += setSize(settings.top, 'y');
        } else {
            top += Math.round(Math.max(document.documentElement.clientHeight - settings.h - loadedHeight - interfaceHeight, 0) / 2);
        }
        
        $box.show();
        
		// setting the speed to 0 to reduce the delay between same-sized content.
		speed = ($box.width() === settings.w + loadedWidth && $box.height() === settings.h + loadedHeight) ? 0 : speed || 0;
        
		// this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
		// but it has to be shrank down around the size of div#colorbox when it's done.  If not,
		// it can invoke an obscure IE bug when using iframes.
		$wrap[0].style.width = $wrap[0].style.height = "9999px";
		
		function modalDimensions(that) {
			// loading overlay height has to be explicitly set for IE6.
			
			/* ACOOKE : 2011 07 19 : MODIFIED THIS SO THAT SHADOWBOX WOULD PROPERLY HANDLE MARGINS AND PADDING 
			$topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = that.style.width;
			$loadingOverlay[0].style.height = $loadingOverlay[1].style.height = $content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = that.style.height; */

			/*if (typeof(that) == "undefinded")
			{
				debug.append("that was undefined");
			}
			else if (typeof(that.id) == "undefined")
			{
				debug.append("that.id was undefined");
			}
			else
			{
				debug.append(that.id);
			}
			
			if (typeof(that.style.width) == "undefined")
			{
				debug.append("   that.style.width : UNDEFINED");
			}
			else
			{
				if (that.style.width == "")
				{
					debug.append("   that.style.width : EMPTY");
				}
				else
				{
					debug.append("   that.style.width : " + that.style.width.toString());
				}
			}
			
			if (typeof(that.style.height) == "undefined")
			{
				debug.line("   that.style.height : UNDEFINED");
			}
			else
			{
				if (that.style.height == "")
				{
					debug.line("   that.style.height : EMPTY");
				}
				else
				{
					debug.line("   that.style.height : " + that.style.height.toString());
				}
			}*/
			
			var widthText = "";
			var heightText = "";
			if ((typeof(that.style.width) == "string") && (that.style.width.length > 1))
			{
				widthText = that.style.width.substr(0, that.style.width.length - 2);
				var widthValue = parseInt(widthText) + 22;
				if (widthValue != NaN)
				{
					widthText = widthValue.toString() + "px";
				}
			}
			if ((typeof(that.style.height) == "string") && (that.style.height.length > 1))
			{
				heightText = that.style.height.substr(0, that.style.height.length - 2);	
				var heightValue = parseInt(heightText) + 22;
				if (heightValue != NaN)
				{
					heightText = heightValue.toString() + "px";
				}
			}

			$topBorder[0].style.width = widthText;
			$bottomBorder[0].style.width = widthText;
			$rightBorder[0].style.height = heightText;
			$leftBorder[0].style.height = heightText;

			$content[0].style.width = that.style.width;						
			$content[0].style.height = that.style.height;
			$loadingOverlay[1].style.height = that.style.height;
			$loadingOverlay[0].style.height = that.style.height;
		}
		
		$box.dequeue().animate({width: settings.w + loadedWidth, height: settings.h + loadedHeight, top: top, left: left}, {
			duration: speed,
			complete: function () {
				modalDimensions(this);
				
				active = false;
				
				// shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
				$wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + "px";
				$wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + "px";
				
				if (loadedCallback) {
					loadedCallback();
				}
                
                setTimeout(function(){  // small delay before binding onresize due to an IE8 bug.
                    $window.bind('resize.' + prefix, publicMethod.position);
                }, 1);
			},
			step: function () {
				modalDimensions(this);
			}
		});
	};

	publicMethod.resize = function (options) {
		if (open) {
			options = options || {};
			
			if (options.width) {
				settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
			}
			if (options.innerWidth) {
				settings.w = setSize(options.innerWidth, 'x');
			}
			$loaded.css({width: settings.w});
			
			if (options.height) {
				settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
			}
			if (options.innerHeight) {
				settings.h = setSize(options.innerHeight, 'y');
			}
			if (!options.innerHeight && !options.height) {				
				var $child = $loaded.wrapInner("<div style='overflow:auto'></div>").children(); // temporary wrapper to get an accurate estimate of just how high the total content should be.
				settings.h = $child.height();
				$child.replaceWith($child.children()); // ditch the temporary wrapper div used in height calculation
			}
			$loaded.css({height: settings.h});
			
			publicMethod.position(settings.transition === "none" ? 0 : settings.speed);
		}
	};

	publicMethod.prep = function (object) {
		if (!open) {
			return;
		}
		
		var callback, speed = settings.transition === "none" ? 0 : settings.speed;
		
		$loaded.remove();
		$loaded = $div('LoadedContent').append(object);
		
		function getWidth() {
			settings.w = settings.w || $loaded.width();
			settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
			return settings.w;
		}
		function getHeight() {
			settings.h = settings.h || $loaded.height();
			settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
			return settings.h;
		}
		
		$loaded.hide()
		.appendTo($loadingBay.show())// content has to be appended to the DOM for accurate size calculations.
		.css({width: getWidth(), overflow: settings.scrolling ? 'auto' : 'hidden'})
		.css({height: getHeight()})// sets the height independently from the width in case the new width influences the value of height.
		.prependTo($content);
		
		$loadingBay.hide();
		
		// floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.
		//$(photo).css({'float': 'none', marginLeft: 'auto', marginRight: 'auto'});
		
        $(photo).css({'float': 'none'});
        
		// Hides SELECT elements in IE6 because they would otherwise sit on top of the overlay.
		if (isIE6) {
			$('select').not($box.find('select')).filter(function () {
				return this.style.visibility !== 'hidden';
			}).css({'visibility': 'hidden'}).one(event_cleanup, function () {
				this.style.visibility = 'inherit';
			});
		}
		
		callback = function () {
            var prev, prevSrc, next, nextSrc, total = $related.length, iframe, complete;
            
            if (!open) {
                return;
            }
            
            function removeFilter() {
                if (isIE) {
                    $box[0].style.removeAttribute('filter');
                }
            }
            
            complete = function () {
                clearTimeout(loadingTimer);
                $loadingOverlay.hide();
                trigger(event_complete, settings.onComplete);
            };
            
            if (isIE) {
                //This fadeIn helps the bicubic resampling to kick-in.
                if (photo) {
                    $loaded.fadeIn(100);
                }
            }
            
            $title.html(settings.title).add($loaded).show();
            
            if (total > 1) { // handle grouping
                if (typeof settings.current === "string") {
                    $current.html(settings.current.replace('{current}', index + 1).replace('{total}', total)).show();
                }
                
                $next[(settings.loop || index < total - 1) ? "show" : "hide"]().html(settings.next);
                $prev[(settings.loop || index) ? "show" : "hide"]().html(settings.previous);
                
                prev = index ? $related[index - 1] : $related[total - 1];
                next = index < total - 1 ? $related[index + 1] : $related[0];
                
                if (settings.slideshow) {
                    $slideshow.show();
                }
                
                // Preloads images within a rel group
                if (settings.preloading) {
                    nextSrc = $.data(next, colorbox).href || next.href;
                    prevSrc = $.data(prev, colorbox).href || prev.href;
                    
                    nextSrc = $.isFunction(nextSrc) ? nextSrc.call(next) : nextSrc;
                    prevSrc = $.isFunction(prevSrc) ? prevSrc.call(prev) : prevSrc;
                    
                    if (isImage(nextSrc)) {
                        $('<img/>')[0].src = nextSrc;
                    }
                    
                    if (isImage(prevSrc)) {
                        $('<img/>')[0].src = prevSrc;
                    }
                }
            } else {
                $groupControls.hide();
            }
            
            if (settings.iframe) {
                iframe = $('<iframe/>').addClass(prefix + 'Iframe')[0];
                
                if (settings.fastIframe) {
                    complete();
                } else {
                    $(iframe).one('load', complete);
                }
                iframe.name = prefix + (+new Date());
                iframe.src = settings.href;
                
                if (!settings.scrolling) {
                    iframe.scrolling = "no";
                }
                
                if (isIE) {
                    iframe.frameBorder = 0;
                    iframe.allowTransparency = "true";
                }
                
                $(iframe).appendTo($loaded).one(event_purge, function () {
                    iframe.src = "//about:blank";
                });
            } else {
                complete();
            }
            
            if (settings.transition === 'fade') {
                $box.fadeTo(speed, 1, removeFilter);
            } else {
                removeFilter();
            }
		};
		
		if (settings.transition === 'fade') {
			$box.fadeTo(speed, 0, function () {
				publicMethod.position(0, callback);
			});
		} else {
			publicMethod.position(speed, callback);
		}
	};

	publicMethod.load = function (launched) {
		var href, setResize, prep = publicMethod.prep;
		
		active = true;
		
		photo = false;
		
		element = $related[index];
		
		if (!launched) {
			makeSettings();
		}
		
		trigger(event_purge);
		
		trigger(event_load, settings.onLoad);
		
		settings.h = settings.height ?
				setSize(settings.height, 'y') - loadedHeight - interfaceHeight :
				settings.innerHeight && setSize(settings.innerHeight, 'y');
		
		settings.w = settings.width ?
				setSize(settings.width, 'x') - loadedWidth - interfaceWidth :
				settings.innerWidth && setSize(settings.innerWidth, 'x');
		
		// Sets the minimum dimensions for use in image scaling
		settings.mw = settings.w;
		settings.mh = settings.h;
		
		// Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
		// If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
		if (settings.maxWidth) {
			settings.mw = setSize(settings.maxWidth, 'x') - loadedWidth - interfaceWidth;
			settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
		}
		if (settings.maxHeight) {
			settings.mh = setSize(settings.maxHeight, 'y') - loadedHeight - interfaceHeight;
			settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
		}
		
		href = settings.href;
		
        loadingTimer = setTimeout(function () {
            $loadingOverlay.show();
        }, 100);
        
		if (settings.inline) {
			// Inserts an empty placeholder where inline content is being pulled from.
			// An event is bound to put inline content back when ColorBox closes or loads new content.
			$div().hide().insertBefore($(href)[0]).one(event_purge, function () {
				$(this).replaceWith($loaded.children());
			});
			prep($(href));
		} else if (settings.iframe) {
			// IFrame element won't be added to the DOM until it is ready to be displayed,
			// to avoid problems with DOM-ready JS that might be trying to run in that iframe.
			prep(" ");
		} else if (settings.html) {
			prep(settings.html);
		} else if (isImage(href)) {
			$(photo = new Image())
			.addClass(prefix + 'Photo')
			.error(function () {
				settings.title = false;
				prep($div('Error').text('This image could not be loaded'));
			})
			.load(function () {
				var percent;
				photo.onload = null; //stops animated gifs from firing the onload repeatedly.
				
				if (settings.scalePhotos) {
					setResize = function () {
						photo.height -= photo.height * percent;
						photo.width -= photo.width * percent;	
					};
					if (settings.mw && photo.width > settings.mw) {
						percent = (photo.width - settings.mw) / photo.width;
						setResize();
					}
					
					if (settings.mh && photo.height > settings.mh) {
						percent = (photo.height - settings.mh) / photo.height;
						setResize();
					}
				}
				
				if (settings.h) {
					photo.style.marginTop = Math.max(settings.h - photo.height, 0) / 2 + 'px';
				}
				
				if ($related[1] && (index < $related.length - 1 || settings.loop)) {
					photo.style.cursor = 'pointer';
					photo.onclick = function () {
                        publicMethod.next();
                    };
				}
				
				if (isIE) {
					photo.style.msInterpolationMode = 'bicubic';
				}
				
				setTimeout(function () { // A pause because Chrome will sometimes report a 0 by 0 size otherwise.
					prep(photo);
				}, 1);
			});
			
			setTimeout(function () { // A pause because Opera 10.6+ will sometimes not run the onload function otherwise.
				photo.src = href;
			}, 1);
		} else if (href) {
			$loadingBay.load(href, settings.data, function (data, status, xhr) {
				prep(status === 'error' ? $div('Error').text('Request unsuccessful: ' + xhr.statusText) : $(this).contents());
			});
		}
	};
        
	// Navigates to the next page/image in a set.
	publicMethod.next = function () {
		if (!active && $related[1] && (index < $related.length - 1 || settings.loop)) {
			index = index < $related.length - 1 ? index + 1 : 0;
			publicMethod.load();
		}
	};
	
	publicMethod.prev = function () {
		if (!active && $related[1] && (index || settings.loop)) {
			index = index ? index - 1 : $related.length - 1;
			publicMethod.load();
		}
	};

	// Note: to use this within an iframe use the following format: parent.$.fn.colorbox.close();
	publicMethod.close = function () {
		if (open && !closing) {
			
			closing = true;
			
			open = false;
			
			trigger(event_cleanup, settings.onCleanup);
			
			$window.unbind('.' + prefix + ' .' + event_ie6);
			
			$overlay.fadeTo(200, 0);
			
			$box.stop().fadeTo(300, 0, function () {
                 
				$box.add($overlay).css({'opacity': 1, cursor: 'auto'}).hide();
				
				trigger(event_purge);
				
				$loaded.remove();
				
				setTimeout(function () {
					closing = false;
					trigger(event_closed, settings.onClosed);
				}, 1);
			});
		}
		//debug.show("browser");
	};

	// A method for fetching the current element ColorBox is referencing.
	// returns a jQuery object.
	publicMethod.element = function () {
		return $(element);
	};

	publicMethod.settings = defaults;
    
	// Bind the live event before DOM-ready for maximum performance in IE6 & 7.
    handler = function (e) {
        // checks to see if it was a non-left mouse-click and for clicks modified with ctrl, shift, or alt.
        if (!((e.button !== 0 && typeof e.button !== 'undefined') || e.ctrlKey || e.shiftKey || e.altKey)) {
            e.preventDefault();
            launch(this);
        }
    };
    
    if ($.fn.delegate) {
        $(document).delegate('.' + boxElement, 'click', handler);
    } else {
        $('.' + boxElement).live('click', handler);
    }
    
	// Initializes ColorBox when the DOM has loaded
	$(publicMethod.init);

}(jQuery, document, this));
