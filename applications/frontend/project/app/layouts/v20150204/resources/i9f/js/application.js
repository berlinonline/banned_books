(function(c,j){function s(b){var h=ea[b]={},d,a,b=b.split(/\s+/);for(d=0,a=b.length;d<a;d++)h[b[d]]=!0;return h}function n(b,h,a){if(a===j&&1===b.nodeType)if(a="data-"+h.replace(ia,"-$1").toLowerCase(),a=b.getAttribute(a),"string"===typeof a){try{a="true"===a?!0:"false"===a?!1:"null"===a?null:d.isNumeric(a)?+a:ca.test(a)?d.parseJSON(a):a}catch(o){}d.data(b,h,a)}else a=j;return a}function N(b){for(var h in b)if(!("data"===h&&d.isEmptyObject(b[h]))&&"toJSON"!==h)return!1;return!0}function p(b,h,a){var o=
h+"defer",c=h+"queue",e=h+"mark",f=d._data(b,o);f&&("queue"===a||!d._data(b,c))&&("mark"===a||!d._data(b,e))&&setTimeout(function(){!d._data(b,c)&&!d._data(b,e)&&(d.removeData(b,o,!0),f.fire())},0)}function a(){return!1}function e(){return!0}function f(b,h,a){h=h||0;if(d.isFunction(h))return d.grep(b,function(b,d){return!!h.call(b,d,b)===a});if(h.nodeType)return d.grep(b,function(b){return b===h===a});if("string"===typeof h){var o=d.grep(b,function(b){return 1===b.nodeType});if(Ga.test(h))return d.filter(h,
o,!a);h=d.filter(h,o)}return d.grep(b,function(b){return 0<=d.inArray(b,h)===a})}function g(b){var h=u.split("|"),b=b.createDocumentFragment();if(b.createElement)for(;h.length;)b.createElement(h.pop());return b}function k(b,h){if(1===h.nodeType&&d.hasData(b)){var a,o,c;o=d._data(b);var e=d._data(h,o),f=o.events;if(f)for(a in delete e.handle,e.events={},f)for(o=0,c=f[a].length;o<c;o++)d.event.add(h,a,f[a][o]);if(e.data)e.data=d.extend({},e.data)}}function x(b,h){var a;if(1===h.nodeType){h.clearAttributes&&
h.clearAttributes();h.mergeAttributes&&h.mergeAttributes(b);a=h.nodeName.toLowerCase();if("object"===a)h.outerHTML=b.outerHTML;else if("input"===a&&("checkbox"===b.type||"radio"===b.type)){if(b.checked)h.defaultChecked=h.checked=b.checked;if(h.value!==b.value)h.value=b.value}else if("option"===a)h.selected=b.defaultSelected;else if("input"===a||"textarea"===a)h.defaultValue=b.defaultValue;else if("script"===a&&h.text!==b.text)h.text=b.text;h.removeAttribute(d.expando);h.removeAttribute("_submit_attached");
h.removeAttribute("_change_attached")}}function D(b){return"undefined"!==typeof b.getElementsByTagName?b.getElementsByTagName("*"):"undefined"!==typeof b.querySelectorAll?b.querySelectorAll("*"):[]}function K(b){if("checkbox"===b.type||"radio"===b.type)b.defaultChecked=b.checked}function T(b){var h=(b.nodeName||"").toLowerCase();"input"===h?K(b):"script"!==h&&"undefined"!==typeof b.getElementsByTagName&&d.grep(b.getElementsByTagName("input"),K)}function B(b,h,a){var o="width"===h?b.offsetWidth:b.offsetHeight,
c="width"===h?1:0;if(0<o){if("border"!==a)for(;4>c;c+=2)a||(o-=parseFloat(d.css(b,"padding"+ra[c]))||0),o="margin"===a?o+(parseFloat(d.css(b,a+ra[c]))||0):o-(parseFloat(d.css(b,"border"+ra[c]+"Width"))||0);return o+"px"}o=xa(b,h);if(0>o||null==o)o=b.style[h];if(La.test(o))return o;o=parseFloat(o)||0;if(a)for(;4>c;c+=2)o+=parseFloat(d.css(b,"padding"+ra[c]))||0,"padding"!==a&&(o+=parseFloat(d.css(b,"border"+ra[c]+"Width"))||0),"margin"===a&&(o+=parseFloat(d.css(b,a+ra[c]))||0);return o+"px"}function w(b){return function(h,
a){var q;"string"!==typeof h&&(a=h,h="*");if(d.isFunction(a))for(var o=h.toLowerCase().split(Ua),c=0,e=o.length,f,l;c<e;c++)f=o[c],(l=/^\+/.test(f))&&(f=f.substr(1)||"*"),q=b[f]=b[f]||[],f=q,f[l?"unshift":"push"](a)}}function A(b,h,d,a,c,e){c=c||h.dataTypes[0];e=e||{};e[c]=!0;for(var c=b[c],f=0,l=c?c.length:0,Na=b===Ma,g;f<l&&(Na||!g);f++)g=c[f](h,d,a),"string"===typeof g&&(!Na||e[g]?g=j:(h.dataTypes.unshift(g),g=A(b,h,d,a,g,e)));if((Na||!g)&&!e["*"])g=A(b,h,d,a,"*",e);return g}function pa(b,h){var a,
o,c=d.ajaxSettings.flatOptions||{};for(a in h)h[a]!==j&&((c[a]?b:o||(o={}))[a]=h[a]);o&&d.extend(!0,b,o)}function O(b,h,a,o){if(d.isArray(h))d.each(h,function(h,d){a||lb.test(b)?o(b,d):O(b+"["+("object"===typeof d?h:"")+"]",d,a,o)});else if(!a&&"object"===d.type(h))for(var c in h)O(b+"["+c+"]",h[c],a,o);else o(b,h)}function y(){try{return new c.XMLHttpRequest}catch(b){}}function C(){setTimeout(R,0);return Ha=d.now()}function R(){Ha=j}function Q(b,h){var a={};d.each(Ia.concat.apply([],Ia.slice(0,h)),
function(){a[this]=b});return a}function L(b){if(!Oa[b]){var h=m.body,a=d("<"+b+">").appendTo(h),o=a.css("display");a.remove();if("none"===o||""===o){if(!ja)ja=m.createElement("iframe"),ja.frameBorder=ja.width=ja.height=0;h.appendChild(ja);if(!ya||!ja.createElement)ya=(ja.contentWindow||ja.contentDocument).document,ya.write((d.support.boxModel?"<!doctype html>":"")+"<html><body>"),ya.close();a=ya.createElement(b);ya.body.appendChild(a);o=d.css(a,"display");h.removeChild(ja)}Oa[b]=o}return Oa[b]}function U(b){return d.isWindow(b)?
b:9===b.nodeType?b.defaultView||b.parentWindow:!1}var m=c.document,r=c.navigator,z=c.location,d=function(){function b(){if(!h.isReady){try{m.documentElement.doScroll("left")}catch(a){setTimeout(b,1);return}h.ready()}}var h=function(b,a){return new h.fn.init(b,a,e)},a=c.jQuery,d=c.$,e,f=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/\S/,l=/^\s+/,g=/\s+$/,i=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,k=/^[\],:{}\s]*$/,t=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,D=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
ka=/(?:^|:|,)(?:\s*\[)+/g,x=/(webkit)[ \/]([\w.]+)/,K=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,n=/(mozilla)(?:.*? rv:([\w.]+))?/,w=/-([a-z]|[0-9])/ig,p=/^-ms-/,B=function(b,h){return(h+"").toUpperCase()},z=r.userAgent,fa,za,nb=Object.prototype.toString,Pa=Object.prototype.hasOwnProperty,Qa=Array.prototype.push,Da=Array.prototype.slice,Va=String.prototype.trim,Wa=Array.prototype.indexOf,y={};h.fn=h.prototype={constructor:h,init:function(b,a,d){var c;if(!b)return this;if(b.nodeType)return this.context=
this[0]=b,this.length=1,this;if("body"===b&&!a&&m.body)return this.context=m,this[0]=m.body,this.selector=b,this.length=1,this;if("string"===typeof b){if((c="<"===b.charAt(0)&&">"===b.charAt(b.length-1)&&3<=b.length?[null,b,null]:f.exec(b))&&(c[1]||!a)){if(c[1])return d=(a=a instanceof h?a[0]:a)?a.ownerDocument||a:m,(b=i.exec(b))?h.isPlainObject(a)?(b=[m.createElement(b[1])],h.fn.attr.call(b,a,!0)):b=[d.createElement(b[1])]:(b=h.buildFragment([c[1]],[d]),b=(b.cacheable?h.clone(b.fragment):b.fragment).childNodes),
h.merge(this,b);if((a=m.getElementById(c[2]))&&a.parentNode){if(a.id!==c[2])return d.find(b);this.length=1;this[0]=a}this.context=m;this.selector=b;return this}return!a||a.jquery?(a||d).find(b):this.constructor(a).find(b)}if(h.isFunction(b))return d.ready(b);if(b.selector!==j)this.selector=b.selector,this.context=b.context;return h.makeArray(b,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return Da.call(this,0)},get:function(b){return null==b?this.toArray():
0>b?this[this.length+b]:this[b]},pushStack:function(b,a,d){var c=this.constructor();h.isArray(b)?Qa.apply(c,b):h.merge(c,b);c.prevObject=this;c.context=this.context;if("find"===a)c.selector=this.selector+(this.selector?" ":"")+d;else if(a)c.selector=this.selector+"."+a+"("+d+")";return c},each:function(b,a){return h.each(this,b,a)},ready:function(b){h.bindReady();fa.add(b);return this},eq:function(b){b=+b;return-1===b?this.slice(b):this.slice(b,b+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},
slice:function(){return this.pushStack(Da.apply(this,arguments),"slice",Da.call(arguments).join(","))},map:function(b){return this.pushStack(h.map(this,function(h,a){return b.call(h,a,h)}))},end:function(){return this.prevObject||this.constructor(null)},push:Qa,sort:[].sort,splice:[].splice};h.fn.init.prototype=h.fn;h.extend=h.fn.extend=function(){var b,a,d,c,o,q=arguments[0]||{},e=1,S=arguments.length,fa=!1;"boolean"===typeof q&&(fa=q,q=arguments[1]||{},e=2);"object"!==typeof q&&!h.isFunction(q)&&
(q={});S===e&&(q=this,--e);for(;e<S;e++)if(null!=(b=arguments[e]))for(a in b)d=q[a],c=b[a],q!==c&&(fa&&c&&(h.isPlainObject(c)||(o=h.isArray(c)))?(o?(o=!1,d=d&&h.isArray(d)?d:[]):d=d&&h.isPlainObject(d)?d:{},q[a]=h.extend(fa,d,c)):c!==j&&(q[a]=c));return q};h.extend({noConflict:function(b){if(c.$===h)c.$=d;if(b&&c.jQuery===h)c.jQuery=a;return h},isReady:!1,readyWait:1,holdReady:function(b){b?h.readyWait++:h.ready(!0)},ready:function(b){if(!0===b&&!--h.readyWait||!0!==b&&!h.isReady){if(!m.body)return setTimeout(h.ready,
1);h.isReady=!0;!0!==b&&0<--h.readyWait||(fa.fireWith(m,[h]),h.fn.trigger&&h(m).trigger("ready").off("ready"))}},bindReady:function(){if(!fa){fa=h.Callbacks("once memory");if("complete"===m.readyState)return setTimeout(h.ready,1);if(m.addEventListener)m.addEventListener("DOMContentLoaded",za,!1),c.addEventListener("load",h.ready,!1);else if(m.attachEvent){m.attachEvent("onreadystatechange",za);c.attachEvent("onload",h.ready);var a=!1;try{a=null==c.frameElement}catch(d){}m.documentElement.doScroll&&
a&&b()}}},isFunction:function(b){return"function"===h.type(b)},isArray:Array.isArray||function(b){return"array"===h.type(b)},isWindow:function(b){return null!=b&&b==b.window},isNumeric:function(b){return!isNaN(parseFloat(b))&&isFinite(b)},type:function(b){return null==b?""+b:y[nb.call(b)]||"object"},isPlainObject:function(b){if(!b||"object"!==h.type(b)||b.nodeType||h.isWindow(b))return!1;try{if(b.constructor&&!Pa.call(b,"constructor")&&!Pa.call(b.constructor.prototype,"isPrototypeOf"))return!1}catch(a){return!1}for(var d in b);
return d===j||Pa.call(b,d)},isEmptyObject:function(b){for(var h in b)return!1;return!0},error:function(b){throw Error(b);},parseJSON:function(b){if("string"!==typeof b||!b)return null;b=h.trim(b);if(c.JSON&&c.JSON.parse)return c.JSON.parse(b);if(k.test(b.replace(t,"@").replace(D,"]").replace(ka,"")))return(new Function("return "+b))();h.error("Invalid JSON: "+b)},parseXML:function(b){if("string"!==typeof b||!b)return null;var a,d;try{c.DOMParser?(d=new DOMParser,a=d.parseFromString(b,"text/xml")):
(a=new ActiveXObject("Microsoft.XMLDOM"),a.async="false",a.loadXML(b))}catch(q){a=j}(!a||!a.documentElement||a.getElementsByTagName("parsererror").length)&&h.error("Invalid XML: "+b);return a},noop:function(){},globalEval:function(b){b&&v.test(b)&&(c.execScript||function(b){c.eval.call(c,b)})(b)},camelCase:function(b){return b.replace(p,"ms-").replace(w,B)},nodeName:function(b,h){return b.nodeName&&b.nodeName.toUpperCase()===h.toUpperCase()},each:function(b,a,d){var c,q=0,o=b.length,e=o===j||h.isFunction(b);
if(d)if(e)for(c in b){if(!1===a.apply(b[c],d))break}else for(;q<o&&!(!1===a.apply(b[q++],d)););else if(e)for(c in b){if(!1===a.call(b[c],c,b[c]))break}else for(;q<o&&!(!1===a.call(b[q],q,b[q++])););return b},trim:Va?function(b){return null==b?"":Va.call(b)}:function(b){return null==b?"":b.toString().replace(l,"").replace(g,"")},makeArray:function(b,a){var d=a||[];if(null!=b){var c=h.type(b);null==b.length||"string"===c||"function"===c||"regexp"===c||h.isWindow(b)?Qa.call(d,b):h.merge(d,b)}return d},
inArray:function(b,h,a){var d;if(h){if(Wa)return Wa.call(h,b,a);d=h.length;for(a=a?0>a?Math.max(0,d+a):a:0;a<d;a++)if(a in h&&h[a]===b)return a}return-1},merge:function(b,h){var a=b.length,d=0;if("number"===typeof h.length)for(var c=h.length;d<c;d++)b[a++]=h[d];else for(;h[d]!==j;)b[a++]=h[d++];b.length=a;return b},grep:function(b,h,a){for(var d=[],c,a=!!a,q=0,o=b.length;q<o;q++)c=!!h(b[q],q),a!==c&&d.push(b[q]);return d},map:function(b,a,d){var c,q,o=[],e=0,S=b.length;if(b instanceof h||S!==j&&"number"===
typeof S&&(0<S&&b[0]&&b[S-1]||0===S||h.isArray(b)))for(;e<S;e++)c=a(b[e],e,d),null!=c&&(o[o.length]=c);else for(q in b)c=a(b[q],q,d),null!=c&&(o[o.length]=c);return o.concat.apply([],o)},guid:1,proxy:function(b,a){if("string"===typeof a)var d=b[a],a=b,b=d;if(!h.isFunction(b))return j;var c=Da.call(arguments,2),d=function(){return b.apply(a,c.concat(Da.call(arguments)))};d.guid=b.guid=b.guid||d.guid||h.guid++;return d},access:function(b,a,d,c,q,o,e){var S,fa=null==d,f=0,Fa=b.length;if(d&&"object"===
typeof d){for(f in d)h.access(b,a,f,d[f],1,o,c);q=1}else if(c!==j){S=e===j&&h.isFunction(c);fa&&(S?(S=a,a=function(b,a,d){return S.call(h(b),d)}):(a.call(b,c),a=null));if(a)for(;f<Fa;f++)a(b[f],d,S?c.call(b[f],f,a(b[f],d)):c,e);q=1}return q?b:fa?a.call(b):Fa?a(b[0],d):o},now:function(){return(new Date).getTime()},uaMatch:function(b){b=b.toLowerCase();b=x.exec(b)||K.exec(b)||u.exec(b)||0>b.indexOf("compatible")&&n.exec(b)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function b(h,
a){return new b.fn.init(h,a)}h.extend(!0,b,this);b.superclass=this;b.fn=b.prototype=this();b.fn.constructor=b;b.sub=this.sub;b.fn.init=function(d,c){c&&c instanceof h&&!(c instanceof b)&&(c=b(c));return h.fn.init.call(this,d,c,a)};b.fn.init.prototype=b.fn;var a=b(m);return b},browser:{}});h.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(b,h){y["[object "+h+"]"]=h.toLowerCase()});z=h.uaMatch(z);if(z.browser)h.browser[z.browser]=!0,h.browser.version=z.version;if(h.browser.webkit)h.browser.safari=
!0;v.test("\u00a0")&&(l=/^[\s\xA0]+/,g=/[\s\xA0]+$/);e=h(m);m.addEventListener?za=function(){m.removeEventListener("DOMContentLoaded",za,!1);h.ready()}:m.attachEvent&&(za=function(){"complete"===m.readyState&&(m.detachEvent("onreadystatechange",za),h.ready())});return h}(),ea={};d.Callbacks=function(b){var b=b?ea[b]||s(b):{},h=[],a=[],c,e,f,v,l,g,i=function(a){var c,q,o,e;for(c=0,q=a.length;c<q;c++)o=a[c],e=d.type(o),"array"===e?i(o):"function"===e&&(!b.unique||!t.has(o))&&h.push(o)},k=function(d,
i){i=i||[];c=!b.memory||[d,i];f=e=!0;g=v||0;v=0;for(l=h.length;h&&g<l;g++)if(!1===h[g].apply(d,i)&&b.stopOnFalse){c=!0;break}f=!1;h&&(b.once?!0===c?t.disable():h=[]:a&&a.length&&(c=a.shift(),t.fireWith(c[0],c[1])))},t={add:function(){if(h){var b=h.length;i(arguments);f?l=h.length:c&&!0!==c&&(v=b,k(c[0],c[1]))}return this},remove:function(){if(h)for(var a=arguments,d=0,c=a.length;d<c;d++)for(var q=0;q<h.length&&!(a[d]===h[q]&&(f&&q<=l&&(l--,q<=g&&g--),h.splice(q--,1),b.unique));q++);return this},has:function(b){if(h)for(var a=
0,d=h.length;a<d;a++)if(b===h[a])return!0;return!1},empty:function(){h=[];return this},disable:function(){h=a=c=j;return this},disabled:function(){return!h},lock:function(){a=j;(!c||!0===c)&&t.disable();return this},locked:function(){return!a},fireWith:function(h,d){a&&(f?b.once||a.push([h,d]):(!b.once||!c)&&k(h,d));return this},fire:function(){t.fireWith(this,arguments);return this},fired:function(){return!!e}};return t};var Z=[].slice;d.extend({Deferred:function(b){var h=d.Callbacks("once memory"),
a=d.Callbacks("once memory"),c=d.Callbacks("memory"),e="pending",f={resolve:h,reject:a,notify:c},v={done:h.add,fail:a.add,progress:c.add,state:function(){return e},isResolved:h.fired,isRejected:a.fired,then:function(b,h,a){l.done(b).fail(h).progress(a);return this},always:function(){l.done.apply(l,arguments).fail.apply(l,arguments);return this},pipe:function(b,h,a){return d.Deferred(function(c){d.each({done:[b,"resolve"],fail:[h,"reject"],progress:[a,"notify"]},function(b,h){var a=h[0],q=h[1],o;if(d.isFunction(a))l[b](function(){if((o=
a.apply(this,arguments))&&d.isFunction(o.promise))o.promise().then(c.resolve,c.reject,c.notify);else c[q+"With"](this===l?c:this,[o])});else l[b](c[q])})}).promise()},promise:function(b){if(null==b)b=v;else for(var h in v)b[h]=v[h];return b}},l=v.promise({}),g;for(g in f)l[g]=f[g].fire,l[g+"With"]=f[g].fireWith;l.done(function(){e="resolved"},a.disable,c.lock).fail(function(){e="rejected"},h.disable,c.lock);b&&b.call(l,l);return l},when:function(b){function h(b){return function(h){c[b]=1<arguments.length?
Z.call(arguments,0):h;--l||g.resolveWith(g,c)}}function a(b){return function(h){v[b]=1<arguments.length?Z.call(arguments,0):h;g.notifyWith(i,v)}}var c=Z.call(arguments,0),e=0,f=c.length,v=Array(f),l=f,g=1>=f&&b&&d.isFunction(b.promise)?b:d.Deferred(),i=g.promise();if(1<f){for(;e<f;e++)c[e]&&c[e].promise&&d.isFunction(c[e].promise)?c[e].promise().then(h(e),g.reject,a(e)):--l;l||g.resolveWith(g,c)}else g!==b&&g.resolveWith(g,f?[b]:[]);return i}});d.support=function(){var b,h,a,o,e,f,v,l,g=m.createElement("div");
g.setAttribute("className","t");g.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";h=g.getElementsByTagName("*");a=g.getElementsByTagName("a")[0];if(!h||!h.length||!a)return{};o=m.createElement("select");e=o.appendChild(m.createElement("option"));h=g.getElementsByTagName("input")[0];b={leadingWhitespace:3===g.firstChild.nodeType,tbody:!g.getElementsByTagName("tbody").length,htmlSerialize:!!g.getElementsByTagName("link").length,
style:/top/.test(a.getAttribute("style")),hrefNormalized:"/a"===a.getAttribute("href"),opacity:/^0.55/.test(a.style.opacity),cssFloat:!!a.style.cssFloat,checkOn:"on"===h.value,optSelected:e.selected,getSetAttribute:"t"!==g.className,enctype:!!m.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==m.createElement("nav").cloneNode(!0).outerHTML,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,
pixelMargin:!0};d.boxModel=b.boxModel="CSS1Compat"===m.compatMode;h.checked=!0;b.noCloneChecked=h.cloneNode(!0).checked;o.disabled=!0;b.optDisabled=!e.disabled;try{delete g.test}catch(i){b.deleteExpando=!1}!g.addEventListener&&g.attachEvent&&g.fireEvent&&(g.attachEvent("onclick",function(){b.noCloneEvent=!1}),g.cloneNode(!0).fireEvent("onclick"));h=m.createElement("input");h.value="t";h.setAttribute("type","radio");b.radioValue="t"===h.value;h.setAttribute("checked","checked");h.setAttribute("name",
"t");g.appendChild(h);a=m.createDocumentFragment();a.appendChild(g.lastChild);b.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked;b.appendChecked=h.checked;a.removeChild(h);a.appendChild(g);if(g.attachEvent)for(v in{submit:1,change:1,focusin:1})h="on"+v,l=h in g,l||(g.setAttribute(h,"return;"),l="function"===typeof g[h]),b[v+"Bubbles"]=l;a.removeChild(g);a=o=e=g=h=null;d(function(){var h,a,q,o,e=m.getElementsByTagName("body")[0];if(e){h=m.createElement("div");h.style.cssText="padding:0;margin:0;border:0;visibility:hidden;width:0;height:0;position:static;top:0;margin-top:1px";
e.insertBefore(h,e.firstChild);g=m.createElement("div");h.appendChild(g);g.innerHTML="<table><tr><td style='padding:0;margin:0;border:0;display:none'></td><td>t</td></tr></table>";f=g.getElementsByTagName("td");l=0===f[0].offsetHeight;f[0].style.display="";f[1].style.display="none";b.reliableHiddenOffsets=l&&0===f[0].offsetHeight;if(c.getComputedStyle)g.innerHTML="",a=m.createElement("div"),a.style.width="0",a.style.marginRight="0",g.style.width="2px",g.appendChild(a),b.reliableMarginRight=0===(parseInt((c.getComputedStyle(a,
null)||{marginRight:0}).marginRight,10)||0);if("undefined"!==typeof g.style.zoom)g.innerHTML="",g.style.width=g.style.padding="1px",g.style.border=0,g.style.overflow="hidden",g.style.display="inline",g.style.zoom=1,b.inlineBlockNeedsLayout=3===g.offsetWidth,g.style.display="block",g.style.overflow="visible",g.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=3!==g.offsetWidth;g.style.cssText="position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:0;visibility:hidden;";
g.innerHTML="<div style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;display:block;'><div style='padding:0;margin:0;border:0;display:block;overflow:hidden;'></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";a=g.firstChild;q=a.firstChild;o={doesNotAddBorder:5!==q.offsetTop,doesAddBorderForTableAndCells:5===a.nextSibling.firstChild.firstChild.offsetTop};
q.style.position="fixed";q.style.top="20px";o.fixedPosition=20===q.offsetTop||15===q.offsetTop;q.style.position=q.style.top="";a.style.overflow="hidden";a.style.position="relative";o.subtractsBorderForOverflowNotVisible=-5===q.offsetTop;o.doesNotIncludeMarginInBodyOffset=1!==e.offsetTop;if(c.getComputedStyle)g.style.marginTop="1%",b.pixelMargin="1%"!==(c.getComputedStyle(g,null)||{marginTop:0}).marginTop;if("undefined"!==typeof h.style.zoom)h.style.zoom=1;e.removeChild(h);g=null;d.extend(b,o)}});
return b}();var ca=/^(?:\{.*\}|\[.*\])$/,ia=/([A-Z])/g;d.extend({cache:{},uuid:0,expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(b){b=b.nodeType?d.cache[b[d.expando]]:b[d.expando];return!!b&&!N(b)},data:function(b,h,a,c){if(d.acceptData(b)){var e;e=d.expando;var f="string"===typeof h,g=b.nodeType,l=g?d.cache:b,i=g?b[e]:b[e]&&e,k="events"===h;if(i&&l[i]&&(k||c||l[i].data)||!(f&&a===j)){i||
(g?b[e]=i=++d.uuid:i=e);if(!l[i]&&(l[i]={},!g))l[i].toJSON=d.noop;if("object"===typeof h||"function"===typeof h)c?l[i]=d.extend(l[i],h):l[i].data=d.extend(l[i].data,h);e=b=l[i];if(!c){if(!b.data)b.data={};b=b.data}a!==j&&(b[d.camelCase(h)]=a);if(k&&!b[h])return e.events;f?(a=b[h],null==a&&(a=b[d.camelCase(h)])):a=b;return a}}},removeData:function(b,h,a){if(d.acceptData(b)){var c,e,f,g=d.expando,l=b.nodeType,i=l?d.cache:b,j=l?b[g]:g;if(i[j]){if(h&&(c=a?i[j]:i[j].data)){d.isArray(h)||(h in c?h=[h]:
(h=d.camelCase(h),h=h in c?[h]:h.split(" ")));for(e=0,f=h.length;e<f;e++)delete c[h[e]];if(!(a?N:d.isEmptyObject)(c))return}if(!a&&(delete i[j].data,!N(i[j])))return;d.support.deleteExpando||!i.setInterval?delete i[j]:i[j]=null;l&&(d.support.deleteExpando?delete b[g]:b.removeAttribute?b.removeAttribute(g):b[g]=null)}}},_data:function(b,h,a){return d.data(b,h,a,!0)},acceptData:function(b){if(b.nodeName){var h=d.noData[b.nodeName.toLowerCase()];if(h)return!(!0===h||b.getAttribute("classid")!==h)}return!0}});
d.fn.extend({data:function(b,h){var a,c,e,f,g,l=this[0],i=0,k=null;if(b===j){if(this.length&&(k=d.data(l),1===l.nodeType&&!d._data(l,"parsedAttrs"))){e=l.attributes;for(g=e.length;i<g;i++)f=e[i].name,0===f.indexOf("data-")&&(f=d.camelCase(f.substring(5)),n(l,f,k[f]));d._data(l,"parsedAttrs",!0)}return k}if("object"===typeof b)return this.each(function(){d.data(this,b)});a=b.split(".",2);a[1]=a[1]?"."+a[1]:"";c=a[1]+"!";return d.access(this,function(h){if(h===j)return k=this.triggerHandler("getData"+
c,[a[0]]),k===j&&l&&(k=d.data(l,b),k=n(l,b,k)),k===j&&a[1]?this.data(a[0]):k;a[1]=h;this.each(function(){var e=d(this);e.triggerHandler("setData"+c,a);d.data(this,b,h);e.triggerHandler("changeData"+c,a)})},null,h,1<arguments.length,null,!1)},removeData:function(b){return this.each(function(){d.removeData(this,b)})}});d.extend({_mark:function(b,h){b&&(h=(h||"fx")+"mark",d._data(b,h,(d._data(b,h)||0)+1))},_unmark:function(b,h,a){!0!==b&&(a=h,h=b,b=!1);if(h){var a=a||"fx",c=a+"mark";(b=b?0:(d._data(h,
c)||1)-1)?d._data(h,c,b):(d.removeData(h,c,!0),p(h,a,"mark"))}},queue:function(b,h,a){var c;if(b)return h=(h||"fx")+"queue",c=d._data(b,h),a&&(!c||d.isArray(a)?c=d._data(b,h,d.makeArray(a)):c.push(a)),c||[]},dequeue:function(b,h){var h=h||"fx",a=d.queue(b,h),c=a.shift(),e={};"inprogress"===c&&(c=a.shift());c&&("fx"===h&&a.unshift("inprogress"),d._data(b,h+".run",e),c.call(b,function(){d.dequeue(b,h)},e));a.length||(d.removeData(b,h+"queue "+h+".run",!0),p(b,h,"queue"))}});d.fn.extend({queue:function(b,
h){var a=2;"string"!==typeof b&&(h=b,b="fx",a--);return arguments.length<a?d.queue(this[0],b):h===j?this:this.each(function(){var a=d.queue(this,b,h);"fx"===b&&"inprogress"!==a[0]&&d.dequeue(this,b)})},dequeue:function(b){return this.each(function(){d.dequeue(this,b)})},delay:function(b,h){b=d.fx?d.fx.speeds[b]||b:b;return this.queue(h||"fx",function(h,a){var d=setTimeout(h,b);a.stop=function(){clearTimeout(d)}})},clearQueue:function(b){return this.queue(b||"fx",[])},promise:function(b,h){function a(){--g||
c.resolveWith(e,[e])}"string"!==typeof b&&(h=b,b=j);for(var b=b||"fx",c=d.Deferred(),e=this,f=e.length,g=1,l=b+"defer",i=b+"queue",k=b+"mark",m;f--;)if(m=d.data(e[f],l,j,!0)||(d.data(e[f],i,j,!0)||d.data(e[f],k,j,!0))&&d.data(e[f],l,d.Callbacks("once memory"),!0))g++,m.add(a);a();return c.promise(h)}});var P=/[\n\t\r]/g,F=/\s+/,G=/\r/g,H=/^(?:button|input)$/i,na=/^(?:button|input|object|select|textarea)$/i,oa=/^a(?:rea)?$/i,aa=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
X=d.support.getSetAttribute,I,qa,Aa;d.fn.extend({attr:function(b,h){return d.access(this,d.attr,b,h,1<arguments.length)},removeAttr:function(b){return this.each(function(){d.removeAttr(this,b)})},prop:function(b,h){return d.access(this,d.prop,b,h,1<arguments.length)},removeProp:function(b){b=d.propFix[b]||b;return this.each(function(){try{this[b]=j,delete this[b]}catch(h){}})},addClass:function(b){var h,a,c,e,f,g,l;if(d.isFunction(b))return this.each(function(h){d(this).addClass(b.call(this,h,this.className))});
if(b&&"string"===typeof b){h=b.split(F);for(a=0,c=this.length;a<c;a++)if(e=this[a],1===e.nodeType)if(!e.className&&1===h.length)e.className=b;else{f=" "+e.className+" ";for(g=0,l=h.length;g<l;g++)~f.indexOf(" "+h[g]+" ")||(f+=h[g]+" ");e.className=d.trim(f)}}return this},removeClass:function(b){var h,a,c,e,f,g,l;if(d.isFunction(b))return this.each(function(a){d(this).removeClass(b.call(this,a,this.className))});if(b&&"string"===typeof b||b===j){h=(b||"").split(F);for(a=0,c=this.length;a<c;a++)if(e=
this[a],1===e.nodeType&&e.className)if(b){f=(" "+e.className+" ").replace(P," ");for(g=0,l=h.length;g<l;g++)f=f.replace(" "+h[g]+" "," ");e.className=d.trim(f)}else e.className=""}return this},toggleClass:function(b,a){var c=typeof b,o="boolean"===typeof a;return d.isFunction(b)?this.each(function(c){d(this).toggleClass(b.call(this,c,this.className,a),a)}):this.each(function(){if("string"===c)for(var e,f=0,g=d(this),l=a,i=b.split(F);e=i[f++];)l=o?l:!g.hasClass(e),g[l?"addClass":"removeClass"](e);
else if("undefined"===c||"boolean"===c)this.className&&d._data(this,"__className__",this.className),this.className=this.className||!1===b?"":d._data(this,"__className__")||""})},hasClass:function(b){for(var b=" "+b+" ",a=0,d=this.length;a<d;a++)if(1===this[a].nodeType&&-1<(" "+this[a].className+" ").replace(P," ").indexOf(b))return!0;return!1},val:function(b){var a,c,e,f=this[0];if(arguments.length)return e=d.isFunction(b),this.each(function(c){var q=d(this);if(1===this.nodeType&&(c=e?b.call(this,
c,q.val()):b,null==c?c="":"number"===typeof c?c+="":d.isArray(c)&&(c=d.map(c,function(b){return null==b?"":b+""})),a=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()],!a||!("set"in a)||a.set(this,c,"value")===j))this.value=c});if(f){if((a=d.valHooks[f.type]||d.valHooks[f.nodeName.toLowerCase()])&&"get"in a&&(c=a.get(f,"value"))!==j)return c;c=f.value;return"string"===typeof c?c.replace(G,""):null==c?"":c}}});d.extend({valHooks:{option:{get:function(b){var a=b.attributes.value;return!a||
a.specified?b.value:b.text}},select:{get:function(b){var a,c,e=b.selectedIndex,f=[],g=b.options,v="select-one"===b.type;if(0>e)return null;b=v?e:0;for(c=v?e+1:g.length;b<c;b++)if(a=g[b],a.selected&&(d.support.optDisabled?!a.disabled:null===a.getAttribute("disabled"))&&(!a.parentNode.disabled||!d.nodeName(a.parentNode,"optgroup"))){a=d(a).val();if(v)return a;f.push(a)}return v&&!f.length&&g.length?d(g[e]).val():f},set:function(b,a){var c=d.makeArray(a);d(b).find("option").each(function(){this.selected=
0<=d.inArray(d(this).val(),c)});if(!c.length)b.selectedIndex=-1;return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(b,a,c,e){var f,g,v=b.nodeType;if(b&&!(3===v||8===v||2===v)){if(e&&a in d.attrFn)return d(b)[a](c);if("undefined"===typeof b.getAttribute)return d.prop(b,a,c);if(e=1!==v||!d.isXMLDoc(b))a=a.toLowerCase(),g=d.attrHooks[a]||(aa.test(a)?qa:I);if(c!==j)if(null===c)d.removeAttr(b,a);else{if(g&&"set"in g&&e&&(f=g.set(b,c,a))!==j)return f;b.setAttribute(a,
""+c);return c}else{if(g&&"get"in g&&e&&null!==(f=g.get(b,a)))return f;f=b.getAttribute(a);return null===f?j:f}}},removeAttr:function(b,a){var c,e,f,g,v,l=0;if(a&&1===b.nodeType){e=a.toLowerCase().split(F);for(g=e.length;l<g;l++)if(f=e[l])c=d.propFix[f]||f,(v=aa.test(f))||d.attr(b,f,""),b.removeAttribute(X?f:c),v&&c in b&&(b[c]=!1)}},attrHooks:{type:{set:function(b,a){if(H.test(b.nodeName)&&b.parentNode)d.error("type property can't be changed");else if(!d.support.radioValue&&"radio"===a&&d.nodeName(b,
"input")){var c=b.value;b.setAttribute("type",a);if(c)b.value=c;return a}}},value:{get:function(b,a){return I&&d.nodeName(b,"button")?I.get(b,a):a in b?b.value:null},set:function(b,a,c){if(I&&d.nodeName(b,"button"))return I.set(b,a,c);b.value=a}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},
prop:function(b,a,c){var e,f,g=b.nodeType;if(b&&!(3===g||8===g||2===g)){if(1!==g||!d.isXMLDoc(b))a=d.propFix[a]||a,f=d.propHooks[a];return c!==j?f&&"set"in f&&(e=f.set(b,c,a))!==j?e:b[a]=c:f&&"get"in f&&null!==(e=f.get(b,a))?e:b[a]}},propHooks:{tabIndex:{get:function(b){var a=b.getAttributeNode("tabindex");return a&&a.specified?parseInt(a.value,10):na.test(b.nodeName)||oa.test(b.nodeName)&&b.href?0:j}}}});d.attrHooks.tabindex=d.propHooks.tabIndex;qa={get:function(b,a){var c,e=d.prop(b,a);return!0===
e||"boolean"!==typeof e&&(c=b.getAttributeNode(a))&&!1!==c.nodeValue?a.toLowerCase():j},set:function(b,a,c){!1===a?d.removeAttr(b,c):(a=d.propFix[c]||c,a in b&&(b[a]=!0),b.setAttribute(c,c.toLowerCase()));return c}};if(!X)Aa={name:!0,id:!0,coords:!0},I=d.valHooks.button={get:function(b,a){var d;return(d=b.getAttributeNode(a))&&(Aa[a]?""!==d.nodeValue:d.specified)?d.nodeValue:j},set:function(b,a,d){var c=b.getAttributeNode(d);c||(c=m.createAttribute(d),b.setAttributeNode(c));return c.nodeValue=a+""}},
d.attrHooks.tabindex.set=I.set,d.each(["width","height"],function(b,a){d.attrHooks[a]=d.extend(d.attrHooks[a],{set:function(b,d){if(""===d)return b.setAttribute(a,"auto"),d}})}),d.attrHooks.contenteditable={get:I.get,set:function(b,a,d){""===a&&(a="false");I.set(b,a,d)}};d.support.hrefNormalized||d.each(["href","src","width","height"],function(b,a){d.attrHooks[a]=d.extend(d.attrHooks[a],{get:function(b){b=b.getAttribute(a,2);return null===b?j:b}})});if(!d.support.style)d.attrHooks.style={get:function(b){return b.style.cssText.toLowerCase()||
j},set:function(b,a){return b.style.cssText=""+a}};if(!d.support.optSelected)d.propHooks.selected=d.extend(d.propHooks.selected,{get:function(){return null}});if(!d.support.enctype)d.propFix.enctype="encoding";d.support.checkOn||d.each(["radio","checkbox"],function(){d.valHooks[this]={get:function(b){return null===b.getAttribute("value")?"on":b.value}}});d.each(["radio","checkbox"],function(){d.valHooks[this]=d.extend(d.valHooks[this],{set:function(b,a){if(d.isArray(a))return b.checked=0<=d.inArray(d(b).val(),
a)}})});var sa=/^(?:textarea|input|select)$/i,i=/^([^\.]*)?(?:\.(.+))?$/,la=/(?:^|\s)hover(\.\S+)?\b/,ma=/^key/,ga=/^(?:mouse|contextmenu)|click/,da=/^(?:focusinfocus|focusoutblur)$/,Y=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,V=function(b){if(b=Y.exec(b))b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)");return b},M=function(b){return d.event.special.hover?b:b.replace(la,"mouseenter$1 mouseleave$1")};d.event={add:function(b,a,c,e,f){var g,v,l,k,m,D,t,x,ka;if(!(3===b.nodeType||
8===b.nodeType||!a||!c||!(g=d._data(b)))){if(c.handler)t=c,c=t.handler,f=t.selector;if(!c.guid)c.guid=d.guid++;l=g.events;if(!l)g.events=l={};v=g.handle;if(!v)g.handle=v=function(b){return"undefined"!==typeof d&&(!b||d.event.triggered!==b.type)?d.event.dispatch.apply(v.elem,arguments):j},v.elem=b;a=d.trim(M(a)).split(" ");for(g=0;g<a.length;g++){k=i.exec(a[g])||[];m=k[1];D=(k[2]||"").split(".").sort();ka=d.event.special[m]||{};m=(f?ka.delegateType:ka.bindType)||m;ka=d.event.special[m]||{};k=d.extend({type:m,
origType:k[1],data:e,handler:c,guid:c.guid,selector:f,quick:f&&V(f),namespace:D.join(".")},t);x=l[m];if(!x&&(x=l[m]=[],x.delegateCount=0,!ka.setup||!1===ka.setup.call(b,e,D,v)))b.addEventListener?b.addEventListener(m,v,!1):b.attachEvent&&b.attachEvent("on"+m,v);if(ka.add&&(ka.add.call(b,k),!k.handler.guid))k.handler.guid=c.guid;f?x.splice(x.delegateCount++,0,k):x.push(k);d.event.global[m]=!0}b=null}},global:{},remove:function(b,a,c,e,f){var g=d.hasData(b)&&d._data(b),v,l,k,j,m,t,D,x,K,u;if(g&&(D=
g.events)){a=d.trim(M(a||"")).split(" ");for(v=0;v<a.length;v++)if(l=i.exec(a[v])||[],k=j=l[1],l=l[2],k){x=d.event.special[k]||{};k=(e?x.delegateType:x.bindType)||k;K=D[k]||[];m=K.length;l=l?RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(t=0;t<K.length;t++)if(u=K[t],(f||j===u.origType)&&(!c||c.guid===u.guid)&&(!l||l.test(u.namespace))&&(!e||e===u.selector||"**"===e&&u.selector))K.splice(t--,1),u.selector&&K.delegateCount--,x.remove&&x.remove.call(b,u);0===K.length&&
m!==K.length&&((!x.teardown||!1===x.teardown.call(b,l))&&d.removeEvent(b,k,g.handle),delete D[k])}else for(k in D)d.event.remove(b,k+a[v],c,e,!0);if(d.isEmptyObject(D)){if(a=g.handle)a.elem=null;d.removeData(b,["events","handle"],!0)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(b,a,e,o){if(!e||!(3===e.nodeType||8===e.nodeType)){var f=b.type||b,g=[],v,l,i,k,m;if(!da.test(f+d.event.triggered)&&(0<=f.indexOf("!")&&(f=f.slice(0,-1),v=!0),0<=f.indexOf(".")&&(g=f.split("."),f=g.shift(),
g.sort()),e&&!d.event.customEvent[f]||d.event.global[f]))if(b="object"===typeof b?b[d.expando]?b:new d.Event(f,b):new d.Event(f),b.type=f,b.isTrigger=!0,b.exclusive=v,b.namespace=g.join("."),b.namespace_re=b.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,v=0>f.indexOf(":")?"on"+f:"",e){b.result=j;if(!b.target)b.target=e;a=null!=a?d.makeArray(a):[];a.unshift(b);i=d.event.special[f]||{};if(!(i.trigger&&!1===i.trigger.apply(e,a))){m=[[e,i.bindType||f]];if(!o&&!i.noBubble&&!d.isWindow(e)){k=
i.delegateType||f;g=da.test(k+f)?e:e.parentNode;for(l=null;g;g=g.parentNode)m.push([g,k]),l=g;l&&l===e.ownerDocument&&m.push([l.defaultView||l.parentWindow||c,k])}for(l=0;l<m.length&&!b.isPropagationStopped();l++)g=m[l][0],b.type=m[l][1],(k=(d._data(g,"events")||{})[b.type]&&d._data(g,"handle"))&&k.apply(g,a),(k=v&&g[v])&&d.acceptData(g)&&!1===k.apply(g,a)&&b.preventDefault();b.type=f;if(!o&&!b.isDefaultPrevented()&&(!i._default||!1===i._default.apply(e.ownerDocument,a))&&!("click"===f&&d.nodeName(e,
"a"))&&d.acceptData(e))if(v&&e[f]&&("focus"!==f&&"blur"!==f||0!==b.target.offsetWidth)&&!d.isWindow(e))(l=e[v])&&(e[v]=null),d.event.triggered=f,e[f](),d.event.triggered=j,l&&(e[v]=l);return b.result}}else for(l in e=d.cache,e)e[l].events&&e[l].events[f]&&d.event.trigger(b,a,e[l].handle.elem,!0)}},dispatch:function(b){var b=d.event.fix(b||c.event),a=(d._data(this,"events")||{})[b.type]||[],e=a.delegateCount,o=[].slice.call(arguments,0),f=!b.exclusive&&!b.namespace,g=d.event.special[b.type]||{},v=
[],l,i,k,m,t,x,D;o[0]=b;b.delegateTarget=this;if(!(g.preDispatch&&!1===g.preDispatch.call(this,b))){if(e&&!(b.button&&"click"===b.type)){k=d(this);k.context=this.ownerDocument||this;for(i=b.target;i!=this;i=i.parentNode||this)if(!0!==i.disabled){t={};x=[];k[0]=i;for(l=0;l<e;l++){m=a[l];D=m.selector;if(t[D]===j){var K=t,u=D,n;if(m.quick){n=m.quick;var w=i.attributes||{};n=(!n[1]||i.nodeName.toLowerCase()===n[1])&&(!n[2]||(w.id||{}).value===n[2])&&(!n[3]||n[3].test((w["class"]||{}).value))}else n=k.is(D);
K[u]=n}t[D]&&x.push(m)}x.length&&v.push({elem:i,matches:x})}}a.length>e&&v.push({elem:this,matches:a.slice(e)});for(l=0;l<v.length&&!b.isPropagationStopped();l++){e=v[l];b.currentTarget=e.elem;for(a=0;a<e.matches.length&&!b.isImmediatePropagationStopped();a++)if(m=e.matches[a],f||!b.namespace&&!m.namespace||b.namespace_re&&b.namespace_re.test(m.namespace))if(b.data=m.data,b.handleObj=m,m=((d.event.special[m.origType]||{}).handle||m.handler).apply(e.elem,o),m!==j)b.result=m,!1===m&&(b.preventDefault(),
b.stopPropagation())}g.postDispatch&&g.postDispatch.call(this,b);return b.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(b,a){if(null==b.which)b.which=null!=a.charCode?a.charCode:a.keyCode;return b}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
filter:function(b,a){var d,c,e=a.button,f=a.fromElement;if(null==b.pageX&&null!=a.clientX)d=b.target.ownerDocument||m,c=d.documentElement,d=d.body,b.pageX=a.clientX+(c&&c.scrollLeft||d&&d.scrollLeft||0)-(c&&c.clientLeft||d&&d.clientLeft||0),b.pageY=a.clientY+(c&&c.scrollTop||d&&d.scrollTop||0)-(c&&c.clientTop||d&&d.clientTop||0);if(!b.relatedTarget&&f)b.relatedTarget=f===b.target?a.toElement:f;if(!b.which&&e!==j)b.which=e&1?1:e&2?3:e&4?2:0;return b}},fix:function(b){if(b[d.expando])return b;var a,
c,e=b,f=d.event.fixHooks[b.type]||{},g=f.props?this.props.concat(f.props):this.props,b=d.Event(e);for(a=g.length;a;)c=g[--a],b[c]=e[c];if(!b.target)b.target=e.srcElement||m;if(3===b.target.nodeType)b.target=b.target.parentNode;if(b.metaKey===j)b.metaKey=b.ctrlKey;return f.filter?f.filter(b,e):b},special:{ready:{setup:d.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(b,a,c){if(d.isWindow(this))this.onbeforeunload=c},teardown:function(b,
a){if(this.onbeforeunload===a)this.onbeforeunload=null}}},simulate:function(b,a,c,e){b=d.extend(new d.Event,c,{type:b,isSimulated:!0,originalEvent:{}});e?d.event.trigger(b,null,a):d.event.dispatch.call(a,b);b.isDefaultPrevented()&&c.preventDefault()}};d.event.handle=d.event.dispatch;d.removeEvent=m.removeEventListener?function(b,a,d){b.removeEventListener&&b.removeEventListener(a,d,!1)}:function(b,a,d){b.detachEvent&&b.detachEvent("on"+a,d)};d.Event=function(b,c){if(!(this instanceof d.Event))return new d.Event(b,
c);b&&b.type?(this.originalEvent=b,this.type=b.type,this.isDefaultPrevented=b.defaultPrevented||!1===b.returnValue||b.getPreventDefault&&b.getPreventDefault()?e:a):this.type=b;c&&d.extend(this,c);this.timeStamp=b&&b.timeStamp||d.now();this[d.expando]=!0};d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=e;var b=this.originalEvent;if(b)b.preventDefault?b.preventDefault():b.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=e;var b=this.originalEvent;if(b)b.stopPropagation&&
b.stopPropagation(),b.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=e;this.stopPropagation()},isDefaultPrevented:a,isPropagationStopped:a,isImmediatePropagationStopped:a};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(b,a){d.event.special[b]={delegateType:a,bindType:a,handle:function(b){var c=b.relatedTarget,e=b.handleObj,f;if(!c||c!==this&&!d.contains(this,c))b.type=e.origType,f=e.handler.apply(this,arguments),b.type=a;return f}}});if(!d.support.submitBubbles)d.event.special.submit=
{setup:function(){if(d.nodeName(this,"form"))return!1;d.event.add(this,"click._submit keypress._submit",function(b){b=b.target;if((b=d.nodeName(b,"input")||d.nodeName(b,"button")?b.form:j)&&!b._submit_attached)d.event.add(b,"submit._submit",function(b){b._submit_bubble=!0}),b._submit_attached=!0})},postDispatch:function(b){b._submit_bubble&&(delete b._submit_bubble,this.parentNode&&!b.isTrigger&&d.event.simulate("submit",this.parentNode,b,!0))},teardown:function(){if(d.nodeName(this,"form"))return!1;
d.event.remove(this,"._submit")}};if(!d.support.changeBubbles)d.event.special.change={setup:function(){if(sa.test(this.nodeName)){if("checkbox"===this.type||"radio"===this.type)d.event.add(this,"propertychange._change",function(b){if("checked"===b.originalEvent.propertyName)this._just_changed=!0}),d.event.add(this,"click._change",function(b){if(this._just_changed&&!b.isTrigger)this._just_changed=!1,d.event.simulate("change",this,b,!0)});return!1}d.event.add(this,"beforeactivate._change",function(b){b=
b.target;if(sa.test(b.nodeName)&&!b._change_attached)d.event.add(b,"change._change",function(b){this.parentNode&&!b.isSimulated&&!b.isTrigger&&d.event.simulate("change",this.parentNode,b,!0)}),b._change_attached=!0})},handle:function(b){var a=b.target;if(this!==a||b.isSimulated||b.isTrigger||"radio"!==a.type&&"checkbox"!==a.type)return b.handleObj.handler.apply(this,arguments)},teardown:function(){d.event.remove(this,"._change");return sa.test(this.nodeName)}};d.support.focusinBubbles||d.each({focus:"focusin",
blur:"focusout"},function(b,a){var c=0,e=function(b){d.event.simulate(a,b.target,d.event.fix(b),!0)};d.event.special[a]={setup:function(){0===c++&&m.addEventListener(b,e,!0)},teardown:function(){0===--c&&m.removeEventListener(b,e,!0)}}});d.fn.extend({on:function(b,c,e,f,g){var i,v;if("object"===typeof b){"string"!==typeof c&&(e=e||c,c=j);for(v in b)this.on(v,c,e,b[v],g);return this}null==e&&null==f?(f=c,e=c=j):null==f&&("string"===typeof c?(f=e,e=j):(f=e,e=c,c=j));if(!1===f)f=a;else if(!f)return this;
if(1===g)i=f,f=function(b){d().off(b);return i.apply(this,arguments)},f.guid=i.guid||(i.guid=d.guid++);return this.each(function(){d.event.add(this,b,f,e,c)})},one:function(b,a,d,c){return this.on(b,a,d,c,1)},off:function(b,c,e){if(b&&b.preventDefault&&b.handleObj){var f=b.handleObj;d(b.delegateTarget).off(f.namespace?f.origType+"."+f.namespace:f.origType,f.selector,f.handler);return this}if("object"===typeof b){for(f in b)this.off(f,c,b[f]);return this}if(!1===c||"function"===typeof c)e=c,c=j;!1===
e&&(e=a);return this.each(function(){d.event.remove(this,b,e,c)})},bind:function(b,a,c){return this.on(b,null,a,c)},unbind:function(b,a){return this.off(b,null,a)},live:function(b,a,c){d(this.context).on(b,this.selector,a,c);return this},die:function(b,a){d(this.context).off(b,this.selector||"**",a);return this},delegate:function(b,a,c,d){return this.on(a,b,c,d)},undelegate:function(b,a,c){return 1==arguments.length?this.off(b,"**"):this.off(a,b,c)},trigger:function(b,a){return this.each(function(){d.event.trigger(b,
a,this)})},triggerHandler:function(b,a){if(this[0])return d.event.trigger(b,a,this[0],!0)},toggle:function(b){var a=arguments,c=b.guid||d.guid++,e=0,f=function(c){var f=(d._data(this,"lastToggle"+b.guid)||0)%e;d._data(this,"lastToggle"+b.guid,f+1);c.preventDefault();return a[f].apply(this,arguments)||!1};for(f.guid=c;e<a.length;)a[e++].guid=c;return this.click(f)},hover:function(b,a){return this.mouseenter(b).mouseleave(a||b)}});d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
function(b,a){d.fn[a]=function(b,c){null==c&&(c=b,b=null);return 0<arguments.length?this.on(a,null,b,c):this.trigger(a)};d.attrFn&&(d.attrFn[a]=!0);if(ma.test(a))d.event.fixHooks[a]=d.event.keyHooks;if(ga.test(a))d.event.fixHooks[a]=d.event.mouseHooks});(function(){function b(b,a,c,d,h,f){for(var h=0,g=d.length;h<g;h++){var q=d[h];if(q){for(var l=!1,q=q[b];q;){if(q[e]===c){l=d[q.sizset];break}if(1===q.nodeType&&!f)q[e]=c,q.sizset=h;if(q.nodeName.toLowerCase()===a){l=q;break}q=q[b]}d[h]=l}}}function a(b,
c,d,h,f,g){for(var f=0,q=h.length;f<q;f++){var l=h[f];if(l){for(var i=!1,l=l[b];l;){if(l[e]===d){i=h[l.sizset];break}if(1===l.nodeType){if(!g)l[e]=d,l.sizset=f;if("string"!==typeof c){if(l===c){i=!0;break}}else if(0<t.filter(c,[l]).length){i=l;break}}l=l[b]}h[f]=i}}}var c=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e="sizcache"+(Math.random()+"").replace(".",""),f=0,g=Object.prototype.toString,i=!1,l=!0,k=/\\/g,
D=/\r\n/g,x=/\W/;[0,0].sort(function(){l=!1;return 0});var t=function(b,a,d,h){var d=d||[],e=a=a||m;if(1!==a.nodeType&&9!==a.nodeType)return[];if(!b||"string"!==typeof b)return d;var f,o,l,i,S,v=!0,k=t.isXML(a),j=[],x=b;do if(c.exec(""),f=c.exec(x))if(x=f[3],j.push(f[1]),f[2]){i=f[3];break}while(f);if(1<j.length&&n.exec(b))if(2===j.length&&u.relative[j[0]])o=W(j[0]+j[1],a,h);else for(o=u.relative[j[0]]?[a]:t(j.shift(),a);j.length;)b=j.shift(),u.relative[b]&&(b+=j.shift()),o=W(b,o,h);else if(!h&&1<
j.length&&9===a.nodeType&&!k&&u.match.ID.test(j[0])&&!u.match.ID.test(j[j.length-1])&&(f=t.find(j.shift(),a,k),a=f.expr?t.filter(f.expr,f.set)[0]:f.set[0]),a){f=h?{expr:j.pop(),set:z(h)}:t.find(j.pop(),1===j.length&&("~"===j[0]||"+"===j[0])&&a.parentNode?a.parentNode:a,k);o=f.expr?t.filter(f.expr,f.set):f.set;for(0<j.length?l=z(o):v=!1;j.length;)f=S=j.pop(),u.relative[S]?f=j.pop():S="",null==f&&(f=a),u.relative[S](l,f,k)}else l=[];l||(l=o);l||t.error(S||b);if("[object Array]"===g.call(l))if(v)if(a&&
1===a.nodeType)for(b=0;null!=l[b];b++)l[b]&&(!0===l[b]||1===l[b].nodeType&&t.contains(a,l[b]))&&d.push(o[b]);else for(b=0;null!=l[b];b++)l[b]&&1===l[b].nodeType&&d.push(o[b]);else d.push.apply(d,l);else z(l,d);i&&(t(i,e,d,h),t.uniqueSort(d));return d};t.uniqueSort=function(b){if(B&&(i=l,b.sort(B),i))for(var a=1;a<b.length;a++)b[a]===b[a-1]&&b.splice(a--,1);return b};t.matches=function(b,a){return t(b,null,null,a)};t.matchesSelector=function(b,a){return 0<t(a,null,null,[b]).length};t.find=function(b,
a,c){var d,h,e,f,o,g;if(!b)return[];for(h=0,e=u.order.length;h<e;h++)if(o=u.order[h],f=u.leftMatch[o].exec(b))if(g=f[1],f.splice(1,1),"\\"!==g.substr(g.length-1)&&(f[1]=(f[1]||"").replace(k,""),d=u.find[o](f,a,c),null!=d)){b=b.replace(u.match[o],"");break}d||(d="undefined"!==typeof a.getElementsByTagName?a.getElementsByTagName("*"):[]);return{set:d,expr:b}};t.filter=function(b,a,c,d){for(var h,e,f,o,g,q,l,i,S=b,v=[],k=a,Fa=a&&a[0]&&t.isXML(a[0]);b&&a.length;){for(f in u.filter)if(null!=(h=u.leftMatch[f].exec(b))&&
h[2])if(q=u.filter[f],g=h[1],e=!1,h.splice(1,1),"\\"!==g.substr(g.length-1)){k===v&&(v=[]);if(u.preFilter[f])if(h=u.preFilter[f](h,k,c,v,d,Fa)){if(!0===h)continue}else e=o=!0;if(h)for(l=0;null!=(g=k[l]);l++)g&&(o=q(g,h,l,k),i=d^o,c&&null!=o?i?e=!0:k[l]=!1:i&&(v.push(g),e=!0));if(o!==j){c||(k=v);b=b.replace(u.match[f],"");if(!e)return[];break}}if(b===S)if(null==e)t.error(b);else break;S=b}return k};t.error=function(b){throw Error("Syntax error, unrecognized expression: "+b);};var K=t.getText=function(b){var a,
c;a=b.nodeType;var d="";if(a)if(1===a||9===a||11===a){if("string"===typeof b.textContent)return b.textContent;if("string"===typeof b.innerText)return b.innerText.replace(D,"");for(b=b.firstChild;b;b=b.nextSibling)d+=K(b)}else{if(3===a||4===a)return b.nodeValue}else for(a=0;c=b[a];a++)8!==c.nodeType&&(d+=K(c));return d},u=t.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(b){return b.getAttribute("href")},
type:function(b){return b.getAttribute("type")}},relative:{"+":function(b,a){var c="string"===typeof a,d=c&&!x.test(a),c=c&&!d;d&&(a=a.toLowerCase());for(var d=0,h=b.length,e;d<h;d++)if(e=b[d]){for(;(e=e.previousSibling)&&1!==e.nodeType;);b[d]=c||e&&e.nodeName.toLowerCase()===a?e||!1:e===a}c&&t.filter(a,b,!0)},">":function(b,a){var d,c="string"===typeof a,h=0,e=b.length;if(c&&!x.test(a))for(a=a.toLowerCase();h<e;h++){if(d=b[h])d=d.parentNode,b[h]=d.nodeName.toLowerCase()===a?d:!1}else{for(;h<e;h++)(d=
b[h])&&(b[h]=c?d.parentNode:d.parentNode===a);c&&t.filter(a,b,!0)}},"":function(d,c,e){var o,g=f++,q=a;"string"===typeof c&&!x.test(c)&&(o=c=c.toLowerCase(),q=b);q("parentNode",c,g,d,o,e)},"~":function(d,c,e){var o,g=f++,q=a;"string"===typeof c&&!x.test(c)&&(o=c=c.toLowerCase(),q=b);q("previousSibling",c,g,d,o,e)}},find:{ID:function(b,a,c){if("undefined"!==typeof a.getElementById&&!c)return(b=a.getElementById(b[1]))&&b.parentNode?[b]:[]},NAME:function(b,a){if("undefined"!==typeof a.getElementsByName){for(var c=
[],d=a.getElementsByName(b[1]),h=0,e=d.length;h<e;h++)d[h].getAttribute("name")===b[1]&&c.push(d[h]);return 0===c.length?null:c}},TAG:function(b,a){if("undefined"!==typeof a.getElementsByTagName)return a.getElementsByTagName(b[1])}},preFilter:{CLASS:function(b,a,c,d,h,e){b=" "+b[1].replace(k,"")+" ";if(e)return b;for(var e=0,f;null!=(f=a[e]);e++)f&&(h^(f.className&&0<=(" "+f.className+" ").replace(/[\t\n\r]/g," ").indexOf(b))?c||d.push(f):c&&(a[e]=!1));return!1},ID:function(b){return b[1].replace(k,
"")},TAG:function(b){return b[1].replace(k,"").toLowerCase()},CHILD:function(b){if("nth"===b[1]){b[2]||t.error(b[0]);b[2]=b[2].replace(/^\+|\s*/g,"");var a=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even"===b[2]&&"2n"||"odd"===b[2]&&"2n+1"||!/\D/.test(b[2])&&"0n+"+b[2]||b[2]);b[2]=a[1]+(a[2]||1)-0;b[3]=a[3]-0}else b[2]&&t.error(b[0]);b[0]=f++;return b},ATTR:function(b,a,c,d,h,e){a=b[1]=b[1].replace(k,"");!e&&u.attrMap[a]&&(b[1]=u.attrMap[a]);b[4]=(b[4]||b[5]||"").replace(k,"");"~="===b[2]&&(b[4]=" "+b[4]+
" ");return b},PSEUDO:function(b,a,d,h,e){if("not"===b[1])if(1<(c.exec(b[3])||"").length||/^\w/.test(b[3]))b[3]=t(b[3],null,null,a);else return b=t.filter(b[3],a,d,1^e),d||h.push.apply(h,b),!1;else if(u.match.POS.test(b[0])||u.match.CHILD.test(b[0]))return!0;return b},POS:function(b){b.unshift(!0);return b}},filters:{enabled:function(b){return!1===b.disabled&&"hidden"!==b.type},disabled:function(b){return!0===b.disabled},checked:function(b){return!0===b.checked},selected:function(b){return!0===b.selected},
parent:function(b){return!!b.firstChild},empty:function(b){return!b.firstChild},has:function(b,a,c){return!!t(c[3],b).length},header:function(b){return/h\d/i.test(b.nodeName)},text:function(b){var a=b.getAttribute("type"),c=b.type;return"input"===b.nodeName.toLowerCase()&&"text"===c&&(a===c||null===a)},radio:function(b){return"input"===b.nodeName.toLowerCase()&&"radio"===b.type},checkbox:function(b){return"input"===b.nodeName.toLowerCase()&&"checkbox"===b.type},file:function(b){return"input"===b.nodeName.toLowerCase()&&
"file"===b.type},password:function(b){return"input"===b.nodeName.toLowerCase()&&"password"===b.type},submit:function(b){var a=b.nodeName.toLowerCase();return("input"===a||"button"===a)&&"submit"===b.type},image:function(b){return"input"===b.nodeName.toLowerCase()&&"image"===b.type},reset:function(b){var a=b.nodeName.toLowerCase();return("input"===a||"button"===a)&&"reset"===b.type},button:function(b){var a=b.nodeName.toLowerCase();return"input"===a&&"button"===b.type||"button"===a},input:function(b){return/input|select|textarea|button/i.test(b.nodeName)},
focus:function(b){return b===b.ownerDocument.activeElement}},setFilters:{first:function(b,a){return 0===a},last:function(b,a,c,d){return a===d.length-1},even:function(b,a){return 0===a%2},odd:function(b,a){return 1===a%2},lt:function(b,a,c){return a<c[3]-0},gt:function(b,a,c){return a>c[3]-0},nth:function(b,a,c){return c[3]-0===a},eq:function(b,a,c){return c[3]-0===a}},filter:{PSEUDO:function(b,a,c,d){var h=a[1],e=u.filters[h];if(e)return e(b,c,a,d);if("contains"===h)return 0<=(b.textContent||b.innerText||
K([b])||"").indexOf(a[3]);if("not"===h){a=a[3];c=0;for(d=a.length;c<d;c++)if(a[c]===b)return!1;return!0}t.error(h)},CHILD:function(b,a){var c,d,h,f,g,q;c=a[1];q=b;switch(c){case "only":case "first":for(;q=q.previousSibling;)if(1===q.nodeType)return!1;if("first"===c)return!0;q=b;case "last":for(;q=q.nextSibling;)if(1===q.nodeType)return!1;return!0;case "nth":c=a[2];d=a[3];if(1===c&&0===d)return!0;h=a[0];if((f=b.parentNode)&&(f[e]!==h||!b.nodeIndex)){g=0;for(q=f.firstChild;q;q=q.nextSibling)if(1===
q.nodeType)q.nodeIndex=++g;f[e]=h}q=b.nodeIndex-d;return 0===c?0===q:0===q%c&&0<=q/c}},ID:function(b,a){return 1===b.nodeType&&b.getAttribute("id")===a},TAG:function(b,a){return"*"===a&&1===b.nodeType||!!b.nodeName&&b.nodeName.toLowerCase()===a},CLASS:function(b,a){return-1<(" "+(b.className||b.getAttribute("class"))+" ").indexOf(a)},ATTR:function(b,a){var c=a[1],c=t.attr?t.attr(b,c):u.attrHandle[c]?u.attrHandle[c](b):null!=b[c]?b[c]:b.getAttribute(c),d=c+"",h=a[2],e=a[4];return null==c?"!="===h:
!h&&t.attr?null!=c:"="===h?d===e:"*="===h?0<=d.indexOf(e):"~="===h?0<=(" "+d+" ").indexOf(e):!e?d&&!1!==c:"!="===h?d!==e:"^="===h?0===d.indexOf(e):"$="===h?d.substr(d.length-e.length)===e:"|="===h?d===e||d.substr(0,e.length+1)===e+"-":!1},POS:function(b,a,c,d){var h=u.setFilters[a[2]];if(h)return h(b,c,a,d)}}},n=u.match.POS,w=function(b,a){return"\\"+(a-0+1)},p;for(p in u.match)u.match[p]=RegExp(u.match[p].source+/(?![^\[]*\])(?![^\(]*\))/.source),u.leftMatch[p]=RegExp(/(^(?:.|\r|\n)*?)/.source+u.match[p].source.replace(/\\(\d+)/g,
w));u.match.globalPOS=n;var z=function(b,a){b=Array.prototype.slice.call(b,0);return a?(a.push.apply(a,b),a):b};try{Array.prototype.slice.call(m.documentElement.childNodes,0)}catch(r){z=function(b,a){var c=0,d=a||[];if("[object Array]"===g.call(b))Array.prototype.push.apply(d,b);else if("number"===typeof b.length)for(var h=b.length;c<h;c++)d.push(b[c]);else for(;b[c];c++)d.push(b[c]);return d}}var B,y;m.documentElement.compareDocumentPosition?B=function(b,a){return b===a?(i=!0,0):!b.compareDocumentPosition||
!a.compareDocumentPosition?b.compareDocumentPosition?-1:1:b.compareDocumentPosition(a)&4?-1:1}:(B=function(b,a){if(b===a)return i=!0,0;if(b.sourceIndex&&a.sourceIndex)return b.sourceIndex-a.sourceIndex;var c,d,h=[],e=[];c=b.parentNode;d=a.parentNode;var f=c;if(c===d)return y(b,a);if(c){if(!d)return 1}else return-1;for(;f;)h.unshift(f),f=f.parentNode;for(f=d;f;)e.unshift(f),f=f.parentNode;c=h.length;d=e.length;for(f=0;f<c&&f<d;f++)if(h[f]!==e[f])return y(h[f],e[f]);return f===c?y(b,e[f],-1):y(h[f],
a,1)},y=function(b,a,c){if(b===a)return c;for(b=b.nextSibling;b;){if(b===a)return-1;b=b.nextSibling}return 1});(function(){var b=m.createElement("div"),a="script"+(new Date).getTime(),c=m.documentElement;b.innerHTML="<a name='"+a+"'/>";c.insertBefore(b,c.firstChild);if(m.getElementById(a))u.find.ID=function(b,a,c){if("undefined"!==typeof a.getElementById&&!c)return(a=a.getElementById(b[1]))?a.id===b[1]||"undefined"!==typeof a.getAttributeNode&&a.getAttributeNode("id").nodeValue===b[1]?[a]:j:[]},u.filter.ID=
function(b,a){var c="undefined"!==typeof b.getAttributeNode&&b.getAttributeNode("id");return 1===b.nodeType&&c&&c.nodeValue===a};c.removeChild(b);c=b=null})();(function(){var b=m.createElement("div");b.appendChild(m.createComment(""));if(0<b.getElementsByTagName("*").length)u.find.TAG=function(b,a){var c=a.getElementsByTagName(b[1]);if("*"===b[1]){for(var d=[],h=0;c[h];h++)1===c[h].nodeType&&d.push(c[h]);c=d}return c};b.innerHTML="<a href='#'></a>";if(b.firstChild&&"undefined"!==typeof b.firstChild.getAttribute&&
"#"!==b.firstChild.getAttribute("href"))u.attrHandle.href=function(b){return b.getAttribute("href",2)};b=null})();m.querySelectorAll&&function(){var b=t,a=m.createElement("div");a.innerHTML="<p class='TEST'></p>";if(!(a.querySelectorAll&&0===a.querySelectorAll(".TEST").length)){t=function(a,c,d,h){c=c||m;if(!h&&!t.isXML(c)){var e=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(a);if(e&&(1===c.nodeType||9===c.nodeType)){if(e[1])return z(c.getElementsByTagName(a),d);if(e[2]&&u.find.CLASS&&c.getElementsByClassName)return z(c.getElementsByClassName(e[2]),
d)}if(9===c.nodeType){if("body"===a&&c.body)return z([c.body],d);if(e&&e[3]){var f=c.getElementById(e[3]);if(f&&f.parentNode){if(f.id===e[3])return z([f],d)}else return z([],d)}try{return z(c.querySelectorAll(a),d)}catch(o){}}else if(1===c.nodeType&&"object"!==c.nodeName.toLowerCase()){var e=c,g=(f=c.getAttribute("id"))||"__sizzle__",q=c.parentNode,l=/^\s*[+~]/.test(a);f?g=g.replace(/'/g,"\\$&"):c.setAttribute("id",g);if(l&&q)c=c.parentNode;try{if(!l||q)return z(c.querySelectorAll("[id='"+g+"'] "+
a),d)}catch(i){}finally{f||e.removeAttribute("id")}}}return b(a,c,d,h)};for(var c in b)t[c]=b[c];a=null}}();(function(){var b=m.documentElement,a=b.matchesSelector||b.mozMatchesSelector||b.webkitMatchesSelector||b.msMatchesSelector;if(a){var c=!a.call(m.createElement("div"),"div"),d=!1;try{a.call(m.documentElement,"[test!='']:sizzle")}catch(h){d=!0}t.matchesSelector=function(b,h){h=h.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!t.isXML(b))try{if(d||!u.match.PSEUDO.test(h)&&!/!=/.test(h)){var e=a.call(b,
h);if(e||!c||b.document&&11!==b.document.nodeType)return e}}catch(f){}return 0<t(h,null,null,[b]).length}}})();(function(){var b=m.createElement("div");b.innerHTML="<div class='test e'></div><div class='test'></div>";if(b.getElementsByClassName&&0!==b.getElementsByClassName("e").length&&(b.lastChild.className="e",1!==b.getElementsByClassName("e").length))u.order.splice(1,0,"CLASS"),u.find.CLASS=function(b,a,c){if("undefined"!==typeof a.getElementsByClassName&&!c)return a.getElementsByClassName(b[1])},
b=null})();t.contains=m.documentElement.contains?function(b,a){return b!==a&&(b.contains?b.contains(a):!0)}:m.documentElement.compareDocumentPosition?function(b,a){return!!(b.compareDocumentPosition(a)&16)}:function(){return!1};t.isXML=function(b){return(b=(b?b.ownerDocument||b:0).documentElement)?"HTML"!==b.nodeName:!1};var W=function(b,a,c){for(var d,h=[],e="",a=a.nodeType?[a]:a;d=u.match.PSEUDO.exec(b);)e+=d[0],b=b.replace(u.match.PSEUDO,"");b=u.relative[b]?b+"*":b;d=0;for(var f=a.length;d<f;d++)t(b,
a[d],h,c);return t.filter(e,h)};t.attr=d.attr;t.selectors.attrMap={};d.find=t;d.expr=t.selectors;d.expr[":"]=d.expr.filters;d.unique=t.uniqueSort;d.text=t.getText;d.isXMLDoc=t.isXML;d.contains=t.contains})();var ha=/Until$/,ta=/^(?:parents|prevUntil|prevAll)/,Ba=/,/,Ga=/^.[^:#\[\.,]*$/,E=Array.prototype.slice,J=d.expr.match.globalPOS,Ea={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(b){var a=this,c,e;if("string"!==typeof b)return d(b).filter(function(){for(c=0,e=a.length;c<e;c++)if(d.contains(a[c],
this))return!0});var f=this.pushStack("","find",b),g,i,l;for(c=0,e=this.length;c<e;c++)if(g=f.length,d.find(b,this[c],f),0<c)for(i=g;i<f.length;i++)for(l=0;l<g;l++)if(f[l]===f[i]){f.splice(i--,1);break}return f},has:function(b){var a=d(b);return this.filter(function(){for(var b=0,c=a.length;b<c;b++)if(d.contains(this,a[b]))return!0})},not:function(b){return this.pushStack(f(this,b,!1),"not",b)},filter:function(b){return this.pushStack(f(this,b,!0),"filter",b)},is:function(b){return!!b&&("string"===
typeof b?J.test(b)?0<=d(b,this.context).index(this[0]):0<d.filter(b,this).length:0<this.filter(b).length)},closest:function(b,a){var c=[],e,f,g=this[0];if(d.isArray(b)){for(f=1;g&&g.ownerDocument&&g!==a;){for(e=0;e<b.length;e++)d(g).is(b[e])&&c.push({selector:b[e],elem:g,level:f});g=g.parentNode;f++}return c}var i=J.test(b)||"string"!==typeof b?d(b,a||this.context):0;for(e=0,f=this.length;e<f;e++)for(g=this[e];g;)if(i?-1<i.index(g):d.find.matchesSelector(g,b)){c.push(g);break}else if(g=g.parentNode,
!g||!g.ownerDocument||g===a||11===g.nodeType)break;c=1<c.length?d.unique(c):c;return this.pushStack(c,"closest",b)},index:function(b){return!b?this[0]&&this[0].parentNode?this.prevAll().length:-1:"string"===typeof b?d.inArray(this[0],d(b)):d.inArray(b.jquery?b[0]:b,this)},add:function(b,a){var c="string"===typeof b?d(b,a):d.makeArray(b&&b.nodeType?[b]:b),e=d.merge(this.get(),c);return this.pushStack(!c[0]||!c[0].parentNode||11===c[0].parentNode.nodeType||!e[0]||!e[0].parentNode||11===e[0].parentNode.nodeType?
e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}});d.each({parent:function(b){return(b=b.parentNode)&&11!==b.nodeType?b:null},parents:function(b){return d.dir(b,"parentNode")},parentsUntil:function(b,a,c){return d.dir(b,"parentNode",c)},next:function(b){return d.nth(b,2,"nextSibling")},prev:function(b){return d.nth(b,2,"previousSibling")},nextAll:function(b){return d.dir(b,"nextSibling")},prevAll:function(b){return d.dir(b,"previousSibling")},nextUntil:function(b,a,c){return d.dir(b,
"nextSibling",c)},prevUntil:function(b,a,c){return d.dir(b,"previousSibling",c)},siblings:function(b){return d.sibling((b.parentNode||{}).firstChild,b)},children:function(b){return d.sibling(b.firstChild)},contents:function(b){return d.nodeName(b,"iframe")?b.contentDocument||b.contentWindow.document:d.makeArray(b.childNodes)}},function(b,a){d.fn[b]=function(c,e){var f=d.map(this,a,c);ha.test(b)||(e=c);e&&"string"===typeof e&&(f=d.filter(e,f));f=1<this.length&&!Ea[b]?d.unique(f):f;if((1<this.length||
Ba.test(e))&&ta.test(b))f=f.reverse();return this.pushStack(f,b,E.call(arguments).join(","))}});d.extend({filter:function(b,a,c){c&&(b=":not("+b+")");return 1===a.length?d.find.matchesSelector(a[0],b)?[a[0]]:[]:d.find.matches(b,a)},dir:function(b,a,c){for(var e=[],b=b[a];b&&9!==b.nodeType&&(c===j||1!==b.nodeType||!d(b).is(c));)1===b.nodeType&&e.push(b),b=b[a];return e},nth:function(b,a,c){for(var a=a||1,d=0;b&&!(1===b.nodeType&&++d===a);b=b[c]);return b},sibling:function(b,a){for(var c=[];b;b=b.nextSibling)1===
b.nodeType&&b!==a&&c.push(b);return c}});var u="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,ua=/^\s+/,Xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Ya=/<([\w:]+)/,ob=/<tbody/i,pb=/<|&#?\w+;/,qb=/<(?:script|style)/i,rb=/<(?:script|object|embed|option|style)/i,Za=RegExp("<(?:"+u+")[\\s/>]","i"),$a=/checked\s*(?:[^=]|=\s*.checked.)/i,
ab=/\/(java|ecma)script/i,sb=/^\s*<!(?:\[CDATA\[|\-\-)/,ba={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ra=g(m);ba.optgroup=ba.option;ba.tbody=ba.tfoot=ba.colgroup=ba.caption=ba.thead;ba.th=ba.td;if(!d.support.htmlSerialize)ba._default=
[1,"div<div>","</div>"];d.fn.extend({text:function(b){return d.access(this,function(b){return b===j?d.text(this):this.empty().append((this[0]&&this[0].ownerDocument||m).createTextNode(b))},null,b,arguments.length)},wrapAll:function(b){if(d.isFunction(b))return this.each(function(a){d(this).wrapAll(b.call(this,a))});if(this[0]){var a=d(b,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&a.insertBefore(this[0]);a.map(function(){for(var b=this;b.firstChild&&1===b.firstChild.nodeType;)b=b.firstChild;
return b}).append(this)}return this},wrapInner:function(b){return d.isFunction(b)?this.each(function(a){d(this).wrapInner(b.call(this,a))}):this.each(function(){var a=d(this),c=a.contents();c.length?c.wrapAll(b):a.append(b)})},wrap:function(b){var a=d.isFunction(b);return this.each(function(c){d(this).wrapAll(a?b.call(this,c):b)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,
!0,function(b){1===this.nodeType&&this.appendChild(b)})},prepend:function(){return this.domManip(arguments,!0,function(b){1===this.nodeType&&this.insertBefore(b,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(b){this.parentNode.insertBefore(b,this)});if(arguments.length){var b=d.clean(arguments);b.push.apply(b,this.toArray());return this.pushStack(b,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,
!1,function(b){this.parentNode.insertBefore(b,this.nextSibling)});if(arguments.length){var b=this.pushStack(this,"after",arguments);b.push.apply(b,d.clean(arguments));return b}},remove:function(b,a){for(var c=0,e;null!=(e=this[c]);c++)if(!b||d.filter(b,[e]).length)!a&&1===e.nodeType&&(d.cleanData(e.getElementsByTagName("*")),d.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var b=0,a;null!=(a=this[b]);b++)for(1===a.nodeType&&d.cleanData(a.getElementsByTagName("*"));a.firstChild;)a.removeChild(a.firstChild);
return this},clone:function(b,a){b=null==b?!1:b;a=null==a?b:a;return this.map(function(){return d.clone(this,b,a)})},html:function(b){return d.access(this,function(b){var a=this[0]||{},c=0,e=this.length;if(b===j)return 1===a.nodeType?a.innerHTML.replace(W,""):null;if("string"===typeof b&&!qb.test(b)&&(d.support.leadingWhitespace||!ua.test(b))&&!ba[(Ya.exec(b)||["",""])[1].toLowerCase()]){b=b.replace(Xa,"<$1></$2>");try{for(;c<e;c++)if(a=this[c]||{},1===a.nodeType)d.cleanData(a.getElementsByTagName("*")),
a.innerHTML=b;a=0}catch(f){}}a&&this.empty().append(b)},null,b,arguments.length)},replaceWith:function(b){if(this[0]&&this[0].parentNode){if(d.isFunction(b))return this.each(function(a){var c=d(this),e=c.html();c.replaceWith(b.call(this,a,e))});"string"!==typeof b&&(b=d(b).detach());return this.each(function(){var a=this.nextSibling,c=this.parentNode;d(this).remove();a?d(a).before(b):d(c).append(b)})}return this.length?this.pushStack(d(d.isFunction(b)?b():b),"replaceWith",b):this},detach:function(b){return this.remove(b,
!0)},domManip:function(b,a,c){var e,f,g,i=b[0],l=[];if(!d.support.checkClone&&3===arguments.length&&"string"===typeof i&&$a.test(i))return this.each(function(){d(this).domManip(b,a,c,!0)});if(d.isFunction(i))return this.each(function(e){var f=d(this);b[0]=i.call(this,e,a?f.html():j);f.domManip(b,a,c)});if(this[0]){e=i&&i.parentNode;e=d.support.parentNode&&e&&11===e.nodeType&&e.childNodes.length===this.length?{fragment:e}:d.buildFragment(b,this,l);g=e.fragment;if(f=1===g.childNodes.length?g=g.firstChild:
g.firstChild){a=a&&d.nodeName(f,"tr");f=0;for(var k=this.length,m=k-1;f<k;f++)c.call(a?d.nodeName(this[f],"table")?this[f].getElementsByTagName("tbody")[0]||this[f].appendChild(this[f].ownerDocument.createElement("tbody")):this[f]:this[f],e.cacheable||1<k&&f<m?d.clone(g,!0,!0):g)}l.length&&d.each(l,function(b,a){a.src?d.ajax({type:"GET",global:!1,url:a.src,async:!1,dataType:"script"}):d.globalEval((a.text||a.textContent||a.innerHTML||"").replace(sb,"/*$0*/"));a.parentNode&&a.parentNode.removeChild(a)})}return this}});
d.buildFragment=function(b,a,c){var e,f,g,i,l=b[0];a&&a[0]&&(i=a[0].ownerDocument||a[0]);i.createDocumentFragment||(i=m);if(1===b.length&&"string"===typeof l&&512>l.length&&i===m&&"<"===l.charAt(0)&&!rb.test(l)&&(d.support.checkClone||!$a.test(l))&&(d.support.html5Clone||!Za.test(l)))f=!0,(g=d.fragments[l])&&1!==g&&(e=g);e||(e=i.createDocumentFragment(),d.clean(b,i,e,c));f&&(d.fragments[l]=g?e:1);return{fragment:e,cacheable:f}};d.fragments={};d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",
insertAfter:"after",replaceAll:"replaceWith"},function(b,a){d.fn[b]=function(c){var e=[],c=d(c),f=1===this.length&&this[0].parentNode;if(f&&11===f.nodeType&&1===f.childNodes.length&&1===c.length)return c[a](this[0]),this;for(var f=0,g=c.length;f<g;f++){var i=(0<f?this.clone(!0):this).get();d(c[f])[a](i);e=e.concat(i)}return this.pushStack(e,b,c.selector)}});d.extend({clone:function(b,a,c){var e,f,g;d.support.html5Clone||d.isXMLDoc(b)||!Za.test("<"+b.nodeName+">")?e=b.cloneNode(!0):(e=m.createElement("div"),
Ra.appendChild(e),e.innerHTML=b.outerHTML,e=e.firstChild);var i=e;if((!d.support.noCloneEvent||!d.support.noCloneChecked)&&(1===b.nodeType||11===b.nodeType)&&!d.isXMLDoc(b)){x(b,i);e=D(b);f=D(i);for(g=0;e[g];++g)f[g]&&x(e[g],f[g])}if(a&&(k(b,i),c)){e=D(b);f=D(i);for(g=0;e[g];++g)k(e[g],f[g])}return i},clean:function(b,a,c,e){var f,i=[],a=a||m;"undefined"===typeof a.createElement&&(a=a.ownerDocument||a[0]&&a[0].ownerDocument||m);for(var k=0,l;null!=(l=b[k]);k++)if("number"===typeof l&&(l+=""),l){if("string"===
typeof l)if(pb.test(l)){l=l.replace(Xa,"<$1></$2>");f=(Ya.exec(l)||["",""])[1].toLowerCase();var j=ba[f]||ba._default,u=j[0],x=a.createElement("div"),D=Ra.childNodes;a===m?Ra.appendChild(x):g(a).appendChild(x);for(x.innerHTML=j[1]+l+j[2];u--;)x=x.lastChild;if(!d.support.tbody){u=ob.test(l);j="table"===f&&!u?x.firstChild&&x.firstChild.childNodes:"<table>"===j[1]&&!u?x.childNodes:[];for(f=j.length-1;0<=f;--f)d.nodeName(j[f],"tbody")&&!j[f].childNodes.length&&j[f].parentNode.removeChild(j[f])}!d.support.leadingWhitespace&&
ua.test(l)&&x.insertBefore(a.createTextNode(ua.exec(l)[0]),x.firstChild);l=x.childNodes;x&&(x.parentNode.removeChild(x),0<D.length&&(x=D[D.length-1])&&x.parentNode&&x.parentNode.removeChild(x))}else l=a.createTextNode(l);var K;if(!d.support.appendChecked)if(l[0]&&"number"===typeof(K=l.length))for(f=0;f<K;f++)T(l[f]);else T(l);l.nodeType?i.push(l):i=d.merge(i,l)}if(c){b=function(b){return!b.type||ab.test(b.type)};for(k=0;i[k];k++)a=i[k],e&&d.nodeName(a,"script")&&(!a.type||ab.test(a.type))?e.push(a.parentNode?
a.parentNode.removeChild(a):a):(1===a.nodeType&&(l=d.grep(a.getElementsByTagName("script"),b),i.splice.apply(i,[k+1,0].concat(l))),c.appendChild(a))}return i},cleanData:function(b){for(var a,c,e=d.cache,f=d.event.special,g=d.support.deleteExpando,i=0,l;null!=(l=b[i]);i++)if(!l.nodeName||!d.noData[l.nodeName.toLowerCase()])if(c=l[d.expando]){if((a=e[c])&&a.events){for(var k in a.events)f[k]?d.event.remove(l,k):d.removeEvent(l,k,a.handle);if(a.handle)a.handle.elem=null}g?delete l[d.expando]:l.removeAttribute&&
l.removeAttribute(d.expando);delete e[c]}}});var Sa=/alpha\([^)]*\)/i,tb=/opacity=([^)]*)/,ub=/([A-Z]|^ms)/g,vb=/^[\-+]?(?:\d*\.)?\d+$/i,La=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,wb=/^([\-+])=([\-+.\de]+)/,xb=/^margin/,yb={position:"absolute",visibility:"hidden",display:"block"},ra=["Top","Right","Bottom","Left"],xa,bb,cb;d.fn.css=function(b,a){return d.access(this,function(b,a,c){return c!==j?d.style(b,a,c):d.css(b,a)},b,a,1<arguments.length)};d.extend({cssHooks:{opacity:{get:function(b,a){if(a){var c=
xa(b,"opacity");return""===c?"1":c}return b.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(b,a,c,e){if(b&&!(3===b.nodeType||8===b.nodeType||!b.style)){var f,g=d.camelCase(a),i=b.style,l=d.cssHooks[g],a=d.cssProps[g]||g;if(c!==j){e=typeof c;if("string"===e&&(f=wb.exec(c)))c=+(f[1]+1)*+f[2]+parseFloat(d.css(b,a)),e="number";if(!(null==c||"number"===
e&&isNaN(c)))if("number"===e&&!d.cssNumber[g]&&(c+="px"),!l||!("set"in l)||(c=l.set(b,c))!==j)try{i[a]=c}catch(k){}}else return l&&"get"in l&&(f=l.get(b,!1,e))!==j?f:i[a]}},css:function(b,a,c){var e,f,a=d.camelCase(a);f=d.cssHooks[a];a=d.cssProps[a]||a;"cssFloat"===a&&(a="float");if(f&&"get"in f&&(e=f.get(b,!0,c))!==j)return e;if(xa)return xa(b,a)},swap:function(b,a,c){var d={},e;for(e in a)d[e]=b.style[e],b.style[e]=a[e];c=c.call(b);for(e in a)b.style[e]=d[e];return c}});d.curCSS=d.css;m.defaultView&&
m.defaultView.getComputedStyle&&(bb=function(b,a){var c,e,f,g=b.style,a=a.replace(ub,"-$1").toLowerCase();if((e=b.ownerDocument.defaultView)&&(f=e.getComputedStyle(b,null)))c=f.getPropertyValue(a),""===c&&!d.contains(b.ownerDocument.documentElement,b)&&(c=d.style(b,a));if(!d.support.pixelMargin&&f&&xb.test(a)&&La.test(c))e=g.width,g.width=c,c=f.width,g.width=e;return c});m.documentElement.currentStyle&&(cb=function(b,a){var c,d,e=b.currentStyle&&b.currentStyle[a],f=b.style;if(null==e&&f&&(c=f[a]))e=
c;if(La.test(e)){c=f.left;if(d=b.runtimeStyle&&b.runtimeStyle.left)b.runtimeStyle.left=b.currentStyle.left;f.left="fontSize"===a?"1em":e;e=f.pixelLeft+"px";f.left=c;if(d)b.runtimeStyle.left=d}return""===e?"auto":e});xa=bb||cb;d.each(["height","width"],function(b,a){d.cssHooks[a]={get:function(b,c,e){if(c)return 0!==b.offsetWidth?B(b,a,e):d.swap(b,yb,function(){return B(b,a,e)})},set:function(b,a){return vb.test(a)?a+"px":a}}});if(!d.support.opacity)d.cssHooks.opacity={get:function(b,a){return tb.test((a&&
b.currentStyle?b.currentStyle.filter:b.style.filter)||"")?parseFloat(RegExp.$1)/100+"":a?"1":""},set:function(b,a){var c=b.style,e=b.currentStyle,f=d.isNumeric(a)?"alpha(opacity="+100*a+")":"",g=e&&e.filter||c.filter||"";c.zoom=1;if(1<=a&&""===d.trim(g.replace(Sa,""))&&(c.removeAttribute("filter"),e&&!e.filter))return;c.filter=Sa.test(g)?g.replace(Sa,f):g+" "+f}};d(function(){if(!d.support.reliableMarginRight)d.cssHooks.marginRight={get:function(b,a){return d.swap(b,{display:"inline-block"},function(){return a?
xa(b,"margin-right"):b.style.marginRight})}}});if(d.expr&&d.expr.filters)d.expr.filters.hidden=function(b){var a=b.offsetHeight;return 0===b.offsetWidth&&0===a||!d.support.reliableHiddenOffsets&&"none"===(b.style&&b.style.display||d.css(b,"display"))},d.expr.filters.visible=function(b){return!d.expr.filters.hidden(b)};d.each({margin:"",padding:"",border:"Width"},function(b,a){d.cssHooks[b+a]={expand:function(c){for(var d="string"===typeof c?c.split(" "):[c],e={},c=0;4>c;c++)e[b+ra[c]+a]=d[c]||d[c-
2]||d[0];return e}}});var zb=/%20/g,lb=/\[\]$/,db=/\r?\n/g,Ab=/#.*$/,Bb=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,Cb=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,eb=/\?/,Fb=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Gb=/^(?:select|textarea)/i,Ua=/\s+/,Hb=/([?&])_=[^&]*/,fb=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,gb=d.fn.load,Ma={},hb={},va,wa,ib=["*/"]+["*"];try{va=z.href}catch(Nb){va=m.createElement("a"),
va.href="",va=va.href}wa=fb.exec(va.toLowerCase())||[];d.fn.extend({load:function(b,a,c){if("string"!==typeof b&&gb)return gb.apply(this,arguments);if(!this.length)return this;var e=b.indexOf(" ");if(0<=e)var f=b.slice(e,b.length),b=b.slice(0,e);e="GET";a&&(d.isFunction(a)?(c=a,a=j):"object"===typeof a&&(a=d.param(a,d.ajaxSettings.traditional),e="POST"));var g=this;d.ajax({url:b,type:e,dataType:"html",data:a,complete:function(b,a,e){e=b.responseText;b.isResolved()&&(b.done(function(b){e=b}),g.html(f?
d("<div>").append(e.replace(Fb,"")).find(f):e));c&&g.each(c,[e,a,b])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||Gb.test(this.nodeName)||Cb.test(this.type))}).map(function(b,a){var c=d(this).val();return null==c?null:d.isArray(c)?d.map(c,function(b){return{name:a.name,value:b.replace(db,"\r\n")}}):
{name:a.name,value:c.replace(db,"\r\n")}}).get()}});d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(b,a){d.fn[a]=function(b){return this.on(a,b)}});d.each(["get","post"],function(b,a){d[a]=function(b,c,e,f){d.isFunction(c)&&(f=f||e,e=c,c=j);return d.ajax({type:a,url:b,data:c,success:e,dataType:f})}});d.extend({getScript:function(b,a){return d.get(b,j,a,"script")},getJSON:function(b,a,c){return d.get(b,a,c,"json")},ajaxSetup:function(b,a){a?pa(b,d.ajaxSettings):
(a=b,b=d.ajaxSettings);pa(b,a);return b},ajaxSettings:{url:va,isLocal:/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(wa[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":ib},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":c.String,
"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:w(Ma),ajaxTransport:w(hb),ajax:function(b,a){function c(b,a,h,q){if(2!==p){p=2;w&&clearTimeout(w);n=j;D=q||"";r.readyState=0<b?4:0;var u,x,K,q=a;if(h){var t=e,z=r,y=t.contents,W=t.dataTypes,C=t.responseFields,A,s,T,U;for(s in C)s in h&&(z[C[s]]=h[s]);for(;"*"===W[0];)W.shift(),A===j&&(A=t.mimeType||z.getResponseHeader("content-type"));if(A)for(s in y)if(y[s]&&y[s].test(A)){W.unshift(s);break}if(W[0]in
h)T=W[0];else{for(s in h){if(!W[0]||t.converters[s+" "+W[0]]){T=s;break}U||(U=s)}T=T||U}T?(T!==W[0]&&W.unshift(T),h=h[T]):h=void 0}else h=j;if(200<=b&&300>b||304===b){if(e.ifModified){if(A=r.getResponseHeader("Last-Modified"))d.lastModified[m]=A;if(A=r.getResponseHeader("Etag"))d.etag[m]=A}if(304===b)q="notmodified",u=!0;else try{A=e;A.dataFilter&&(h=A.dataFilter(h,A.dataType));var ua=A.dataTypes;s={};var F,H,R=ua.length,J,O=ua[0],I,M,E,G,L;for(F=1;F<R;F++){if(1===F)for(H in A.converters)"string"===
typeof H&&(s[H.toLowerCase()]=A.converters[H]);I=O;O=ua[F];if("*"===O)O=I;else if("*"!==I&&I!==O){M=I+" "+O;E=s[M]||s["* "+O];if(!E)for(G in L=j,s)if(J=G.split(" "),J[0]===I||"*"===J[0])if(L=s[J[1]+" "+O]){G=s[G];!0===G?E=L:!0===L&&(E=G);break}!E&&!L&&d.error("No conversion from "+M.replace(" "," to "));!0!==E&&(h=E?E(h):L(G(h)))}}x=h;q="success";u=!0}catch(mb){q="parsererror",K=mb}}else if(K=q,!q||b)q="error",0>b&&(b=0);r.status=b;r.statusText=""+(a||q);u?i.resolveWith(f,[x,q,r]):i.rejectWith(f,
[r,q,K]);r.statusCode(k);k=j;B&&g.trigger("ajax"+(u?"Success":"Error"),[r,e,u?x:K]);l.fireWith(f,[r,q]);B&&(g.trigger("ajaxComplete",[r,e]),--d.active||d.event.trigger("ajaxStop"))}}"object"===typeof b&&(a=b,b=j);var a=a||{},e=d.ajaxSetup({},a),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof d)?d(f):d.event,i=d.Deferred(),l=d.Callbacks("once memory"),k=e.statusCode||{},m,u={},x={},D,K,n,w,z,p=0,B,y,r={readyState:0,setRequestHeader:function(b,a){if(!p){var c=b.toLowerCase(),b=x[c]=x[c]||b;u[b]=a}return this},
getAllResponseHeaders:function(){return 2===p?D:null},getResponseHeader:function(b){var a;if(2===p){if(!K)for(K={};a=Bb.exec(D);)K[a[1].toLowerCase()]=a[2];a=K[b.toLowerCase()]}return a===j?null:a},overrideMimeType:function(b){if(!p)e.mimeType=b;return this},abort:function(b){b=b||"abort";n&&n.abort(b);c(0,b);return this}};i.promise(r);r.success=r.done;r.error=r.fail;r.complete=l.add;r.statusCode=function(b){if(b){var a;if(2>p)for(a in b)k[a]=[k[a],b[a]];else a=b[r.status],r.then(a,a)}return this};
e.url=((b||e.url)+"").replace(Ab,"").replace(Eb,wa[1]+"//");e.dataTypes=d.trim(e.dataType||"*").toLowerCase().split(Ua);if(null==e.crossDomain)z=fb.exec(e.url.toLowerCase()),e.crossDomain=!(!z||!(z[1]!=wa[1]||z[2]!=wa[2]||(z[3]||("http:"===z[1]?80:443))!=(wa[3]||("http:"===wa[1]?80:443))));if(e.data&&e.processData&&"string"!==typeof e.data)e.data=d.param(e.data,e.traditional);A(Ma,e,a,r);if(2===p)return!1;B=e.global;e.type=e.type.toUpperCase();e.hasContent=!Db.test(e.type);B&&0===d.active++&&d.event.trigger("ajaxStart");
if(!e.hasContent&&(e.data&&(e.url+=(eb.test(e.url)?"&":"?")+e.data,delete e.data),m=e.url,!1===e.cache)){z=d.now();var W=e.url.replace(Hb,"$1_="+z);e.url=W+(W===e.url?(eb.test(e.url)?"&":"?")+"_="+z:"")}(e.data&&e.hasContent&&!1!==e.contentType||a.contentType)&&r.setRequestHeader("Content-Type",e.contentType);e.ifModified&&(m=m||e.url,d.lastModified[m]&&r.setRequestHeader("If-Modified-Since",d.lastModified[m]),d.etag[m]&&r.setRequestHeader("If-None-Match",d.etag[m]));r.setRequestHeader("Accept",e.dataTypes[0]&&
e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+("*"!==e.dataTypes[0]?", "+ib+"; q=0.01":""):e.accepts["*"]);for(y in e.headers)r.setRequestHeader(y,e.headers[y]);if(e.beforeSend&&(!1===e.beforeSend.call(f,r,e)||2===p))return r.abort(),!1;for(y in{success:1,error:1,complete:1})r[y](e[y]);if(n=A(hb,e,a,r)){r.readyState=1;B&&g.trigger("ajaxSend",[r,e]);e.async&&0<e.timeout&&(w=setTimeout(function(){r.abort("timeout")},e.timeout));try{p=1,n.send(u,c)}catch(C){if(2>p)c(-1,C);else throw C;}}else c(-1,
"No Transport");return r},param:function(b,a){var c=[],e=function(b,a){a=d.isFunction(a)?a():a;c[c.length]=encodeURIComponent(b)+"="+encodeURIComponent(a)};if(a===j)a=d.ajaxSettings.traditional;if(d.isArray(b)||b.jquery&&!d.isPlainObject(b))d.each(b,function(){e(this.name,this.value)});else for(var f in b)O(f,b[f],a,e);return c.join("&").replace(zb,"+")}});d.extend({active:0,lastModified:{},etag:{}});var Ib=d.now(),Ja=/(\=)\?(&|$)|\?\?/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+
"_"+Ib++}});d.ajaxPrefilter("json jsonp",function(b,a,e){a="string"===typeof b.data&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if("jsonp"===b.dataTypes[0]||!1!==b.jsonp&&(Ja.test(b.url)||a&&Ja.test(b.data))){var f,g=b.jsonpCallback=d.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=c[g],k=b.url,l=b.data,j="$1"+g+"$2";!1!==b.jsonp&&(k=k.replace(Ja,j),b.url===k&&(a&&(l=l.replace(Ja,j)),b.data===l&&(k+=(/\?/.test(k)?"&":"?")+b.jsonp+"="+g)));b.url=k;b.data=l;c[g]=function(b){f=
[b]};e.always(function(){c[g]=i;if(f&&d.isFunction(i))c[g](f[0])});b.converters["script json"]=function(){f||d.error(g+" was not called");return f[0]};b.dataTypes[0]="json";return"script"}});d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(b){d.globalEval(b);return b}}});d.ajaxPrefilter("script",function(b){if(b.cache===j)b.cache=!1;if(b.crossDomain)b.type=
"GET",b.global=!1});d.ajaxTransport("script",function(b){if(b.crossDomain){var a,c=m.head||m.getElementsByTagName("head")[0]||m.documentElement;return{send:function(d,e){a=m.createElement("script");a.async="async";if(b.scriptCharset)a.charset=b.scriptCharset;a.src=b.url;a.onload=a.onreadystatechange=function(b,d){if(d||!a.readyState||/loaded|complete/.test(a.readyState))a.onload=a.onreadystatechange=null,c&&a.parentNode&&c.removeChild(a),a=j,d||e(200,"success")};c.insertBefore(a,c.firstChild)},abort:function(){if(a)a.onload(0,
1)}}}});var Ta=c.ActiveXObject?function(){for(var b in Ca)Ca[b](0,1)}:!1,Jb=0,Ca;d.ajaxSettings.xhr=c.ActiveXObject?function(){var b;if(!(b=!this.isLocal&&y()))a:{try{b=new c.ActiveXObject("Microsoft.XMLHTTP");break a}catch(a){}b=void 0}return b}:y;(function(b){d.extend(d.support,{ajax:!!b,cors:!!b&&"withCredentials"in b})})(d.ajaxSettings.xhr());d.support.ajax&&d.ajaxTransport(function(b){if(!b.crossDomain||d.support.cors){var a;return{send:function(e,f){var g=b.xhr(),i,k;b.username?g.open(b.type,
b.url,b.async,b.username,b.password):g.open(b.type,b.url,b.async);if(b.xhrFields)for(k in b.xhrFields)g[k]=b.xhrFields[k];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType);!b.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(k in e)g.setRequestHeader(k,e[k])}catch(l){}g.send(b.hasContent&&b.data||null);a=function(c,e){var l,k,q,m,u;try{if(a&&(e||4===g.readyState)){a=j;if(i)g.onreadystatechange=d.noop,Ta&&delete Ca[i];if(e)4!==g.readyState&&g.abort();
else{l=g.status;q=g.getAllResponseHeaders();m={};if((u=g.responseXML)&&u.documentElement)m.xml=u;try{m.text=g.responseText}catch(x){}try{k=g.statusText}catch(v){k=""}!l&&b.isLocal&&!b.crossDomain?l=m.text?200:404:1223===l&&(l=204)}}}catch(D){e||f(-1,D)}m&&f(l,k,m,q)};!b.async||4===g.readyState?a():(i=++Jb,Ta&&(Ca||(Ca={},d(c).unload(Ta)),Ca[i]=a),g.onreadystatechange=a)},abort:function(){a&&a(0,1)}}}});var Oa={},ja,ya,Kb=/^(?:toggle|show|hide)$/,Lb=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,Ka,Ia=[["height",
"marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],Ha;d.fn.extend({show:function(b,a,c){if(b||0===b)return this.animate(Q("show",3),b,a,c);for(var c=0,e=this.length;c<e;c++)if(b=this[c],b.style){a=b.style.display;if(!d._data(b,"olddisplay")&&"none"===a)a=b.style.display="";(""===a&&"none"===d.css(b,"display")||!d.contains(b.ownerDocument.documentElement,b))&&d._data(b,"olddisplay",L(b.nodeName))}for(c=0;c<e;c++)if(b=
this[c],b.style&&(a=b.style.display,""===a||"none"===a))b.style.display=d._data(b,"olddisplay")||"";return this},hide:function(b,a,c){if(b||0===b)return this.animate(Q("hide",3),b,a,c);for(var c=0,e=this.length;c<e;c++)b=this[c],b.style&&(a=d.css(b,"display"),"none"!==a&&!d._data(b,"olddisplay")&&d._data(b,"olddisplay",a));for(c=0;c<e;c++)if(this[c].style)this[c].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(b,a,c){var e="boolean"===typeof b;d.isFunction(b)&&d.isFunction(a)?
this._toggle.apply(this,arguments):null==b||e?this.each(function(){var a=e?b:d(this).is(":hidden");d(this)[a?"show":"hide"]()}):this.animate(Q("toggle",3),b,a,c);return this},fadeTo:function(b,a,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:a},b,c,d)},animate:function(b,a,c,e){function f(){var l;!1===g.queue&&d._mark(this);var a=d.extend({},g),c=1===this.nodeType,e=c&&d(this).is(":hidden"),h,i,k,o,j;a.animatedProperties={};for(k in b)if(h=d.camelCase(k),k!==h&&
(b[h]=b[k],delete b[k]),(i=d.cssHooks[h])&&"expand"in i)for(k in o=i.expand(b[h]),delete b[h],o)k in b||(b[k]=o[k]);for(h in b){i=b[h];d.isArray(i)?(a.animatedProperties[h]=i[1],l=b[h]=i[0],i=l):a.animatedProperties[h]=a.specialEasing&&a.specialEasing[h]||a.easing||"swing";if("hide"===i&&e||"show"===i&&!e)return a.complete.call(this);if(c&&("height"===h||"width"===h))if(a.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],"inline"===d.css(this,"display")&&"none"===d.css(this,
"float"))!d.support.inlineBlockNeedsLayout||"inline"===L(this.nodeName)?this.style.display="inline-block":this.style.zoom=1}if(null!=a.overflow)this.style.overflow="hidden";for(k in b)if(c=new d.fx(this,a,k),i=b[k],Kb.test(i))if(h=d._data(this,"toggle"+k)||("toggle"===i?e?"show":"hide":0))d._data(this,"toggle"+k,"show"===h?"hide":"show"),c[h]();else c[i]();else h=Lb.exec(i),o=c.cur(),h?(i=parseFloat(h[2]),j=h[3]||(d.cssNumber[k]?"":"px"),"px"!==j&&(d.style(this,k,(i||1)+j),o*=(i||1)/c.cur(),d.style(this,
k,o+j)),h[1]&&(i=("-="===h[1]?-1:1)*i+o),c.custom(o,i,j)):c.custom(o,i,"");return!0}var g=d.speed(a,c,e);if(d.isEmptyObject(b))return this.each(g.complete,[!1]);b=d.extend({},b);return!1===g.queue?this.each(f):this.queue(g.queue,f)},stop:function(b,a,c){"string"!==typeof b&&(c=a,a=b,b=j);a&&!1!==b&&this.queue(b||"fx",[]);return this.each(function(){var a,e=!1,f=d.timers,h=d._data(this);c||d._unmark(!0,this);if(null==b)for(a in h){if(h[a]&&h[a].stop&&a.indexOf(".run")===a.length-4){var g=h[a];d.removeData(this,
a,!0);g.stop(c)}}else if(h[a=b+".run"]&&h[a].stop)h=h[a],d.removeData(this,a,!0),h.stop(c);for(a=f.length;a--;)if(f[a].elem===this&&(null==b||f[a].queue===b)){if(c)f[a](!0);else f[a].saveState();e=!0;f.splice(a,1)}(!c||!e)&&d.dequeue(this,b)})}});d.each({slideDown:Q("show",1),slideUp:Q("hide",1),slideToggle:Q("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(b,a){d.fn[b]=function(b,c,d){return this.animate(a,b,c,d)}});d.extend({speed:function(b,a,
c){var e=b&&"object"===typeof b?d.extend({},b):{complete:c||!c&&a||d.isFunction(b)&&b,duration:b,easing:c&&a||a&&!d.isFunction(a)&&a};e.duration=d.fx.off?0:"number"===typeof e.duration?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default;if(null==e.queue||!0===e.queue)e.queue="fx";e.old=e.complete;e.complete=function(b){d.isFunction(e.old)&&e.old.call(this);e.queue?d.dequeue(this,e.queue):!1!==b&&d._unmark(this)};return e},easing:{linear:function(b){return b},swing:function(b){return-Math.cos(b*
Math.PI)/2+0.5}},timers:[],fx:function(b,a,c){this.options=a;this.elem=b;this.prop=c;a.orig=a.orig||{}}});d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(null!=this.elem[this.prop]&&(!this.elem.style||null==this.elem.style[this.prop]))return this.elem[this.prop];var b,a=d.css(this.elem,this.prop);return isNaN(b=parseFloat(a))?!a||"auto"===a?0:a:b},custom:function(b,a,c){function e(b){return f.step(b)}
var f=this,g=d.fx;this.startTime=Ha||C();this.end=a;this.now=this.start=b;this.pos=this.state=0;this.unit=c||this.unit||(d.cssNumber[this.prop]?"":"px");e.queue=this.options.queue;e.elem=this.elem;e.saveState=function(){d._data(f.elem,"fxshow"+f.prop)===j&&(f.options.hide?d._data(f.elem,"fxshow"+f.prop,f.start):f.options.show&&d._data(f.elem,"fxshow"+f.prop,f.end))};e()&&d.timers.push(e)&&!Ka&&(Ka=setInterval(g.tick,g.interval))},show:function(){var b=d._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=
b||d.style(this.elem,this.prop);this.options.show=!0;b!==j?this.custom(this.cur(),b):this.custom("width"===this.prop||"height"===this.prop?1:0,this.cur());d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d._data(this.elem,"fxshow"+this.prop)||d.style(this.elem,this.prop);this.options.hide=!0;this.custom(this.cur(),0)},step:function(b){var a,c=Ha||C(),e=!0,f=this.elem,g=this.options;if(b||c>=g.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();g.animatedProperties[this.prop]=
!0;for(a in g.animatedProperties)!0!==g.animatedProperties[a]&&(e=!1);if(e){null!=g.overflow&&!d.support.shrinkWrapBlocks&&d.each(["","X","Y"],function(b,a){f.style["overflow"+a]=g.overflow[b]});g.hide&&d(f).hide();if(g.hide||g.show)for(a in g.animatedProperties)d.style(f,a,g.orig[a]),d.removeData(f,"fxshow"+a,!0),d.removeData(f,"toggle"+a,!0);if(b=g.complete)g.complete=!1,b.call(f)}return!1}Infinity==g.duration?this.now=c:(b=c-this.startTime,this.state=b/g.duration,this.pos=d.easing[g.animatedProperties[this.prop]](this.state,
b,0,1,g.duration),this.now=this.start+(this.end-this.start)*this.pos);this.update();return!0}};d.extend(d.fx,{tick:function(){for(var b,a=d.timers,c=0;c<a.length;c++)b=a[c],!b()&&a[c]===b&&a.splice(c--,1);a.length||d.fx.stop()},interval:13,stop:function(){clearInterval(Ka);Ka=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(b){d.style(b.elem,"opacity",b.now)},_default:function(b){b.elem.style&&null!=b.elem.style[b.prop]?b.elem.style[b.prop]=b.now+b.unit:b.elem[b.prop]=b.now}}});
d.each(Ia.concat.apply([],Ia),function(b,a){a.indexOf("margin")&&(d.fx.step[a]=function(b){d.style(b.elem,a,Math.max(0,b.now)+b.unit)})});if(d.expr&&d.expr.filters)d.expr.filters.animated=function(b){return d.grep(d.timers,function(a){return b===a.elem}).length};var jb,Mb=/^t(?:able|d|h)$/i,kb=/^(?:body|html)$/i;jb="getBoundingClientRect"in m.documentElement?function(b,a,c,e){try{e=b.getBoundingClientRect()}catch(f){}if(!e||!d.contains(c,b))return e?{top:e.top,left:e.left}:{top:0,left:0};b=a.body;
a=U(a);return{top:e.top+(a.pageYOffset||d.support.boxModel&&c.scrollTop||b.scrollTop)-(c.clientTop||b.clientTop||0),left:e.left+(a.pageXOffset||d.support.boxModel&&c.scrollLeft||b.scrollLeft)-(c.clientLeft||b.clientLeft||0)}}:function(b,a,c){var e,f=b.offsetParent,g=a.body;e=(a=a.defaultView)?a.getComputedStyle(b,null):b.currentStyle;for(var i=b.offsetTop,l=b.offsetLeft;(b=b.parentNode)&&b!==g&&b!==c&&!(d.support.fixedPosition&&"fixed"===e.position);){e=a?a.getComputedStyle(b,null):b.currentStyle;
i-=b.scrollTop;l-=b.scrollLeft;if(b===f){i+=b.offsetTop;l+=b.offsetLeft;if(d.support.doesNotAddBorder&&(!d.support.doesAddBorderForTableAndCells||!Mb.test(b.nodeName)))i+=parseFloat(e.borderTopWidth)||0,l+=parseFloat(e.borderLeftWidth)||0;f=b.offsetParent}d.support.subtractsBorderForOverflowNotVisible&&"visible"!==e.overflow&&(i+=parseFloat(e.borderTopWidth)||0,l+=parseFloat(e.borderLeftWidth)||0)}if("relative"===e.position||"static"===e.position)i+=g.offsetTop,l+=g.offsetLeft;d.support.fixedPosition&&
"fixed"===e.position&&(i+=Math.max(c.scrollTop,g.scrollTop),l+=Math.max(c.scrollLeft,g.scrollLeft));return{top:i,left:l}};d.fn.offset=function(b){if(arguments.length)return b===j?this:this.each(function(a){d.offset.setOffset(this,b,a)});var a=this[0],c=a&&a.ownerDocument;return!c?null:a===c.body?d.offset.bodyOffset(a):jb(a,c,c.documentElement)};d.offset={bodyOffset:function(b){var a=b.offsetTop,c=b.offsetLeft;d.support.doesNotIncludeMarginInBodyOffset&&(a+=parseFloat(d.css(b,"marginTop"))||0,c+=parseFloat(d.css(b,
"marginLeft"))||0);return{top:a,left:c}},setOffset:function(b,a,c){var e=d.css(b,"position");if("static"===e)b.style.position="relative";var f=d(b),g=f.offset(),i=d.css(b,"top"),l=d.css(b,"left"),k={},j={};("absolute"===e||"fixed"===e)&&-1<d.inArray("auto",[i,l])?(j=f.position(),e=j.top,l=j.left):(e=parseFloat(i)||0,l=parseFloat(l)||0);d.isFunction(a)&&(a=a.call(b,c,g));if(null!=a.top)k.top=a.top-g.top+e;if(null!=a.left)k.left=a.left-g.left+l;"using"in a?a.using.call(b,k):f.css(k)}};d.fn.extend({position:function(){if(!this[0])return null;
var b=this[0],a=this.offsetParent(),c=this.offset(),e=kb.test(a[0].nodeName)?{top:0,left:0}:a.offset();c.top-=parseFloat(d.css(b,"marginTop"))||0;c.left-=parseFloat(d.css(b,"marginLeft"))||0;e.top+=parseFloat(d.css(a[0],"borderTopWidth"))||0;e.left+=parseFloat(d.css(a[0],"borderLeftWidth"))||0;return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){for(var b=this.offsetParent||m.body;b&&!kb.test(b.nodeName)&&"static"===d.css(b,"position");)b=b.offsetParent;return b})}});
d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,a){var c=/Y/.test(a);d.fn[b]=function(e){return d.access(this,function(b,e,f){var g=U(b);if(f===j)return g?a in g?g[a]:d.support.boxModel&&g.document.documentElement[e]||g.document.body[e]:b[e];g?g.scrollTo(!c?f:d(g).scrollLeft(),c?f:d(g).scrollTop()):b[e]=f},b,e,arguments.length,null)}});d.each({Height:"height",Width:"width"},function(b,a){var c="client"+b,e="scroll"+b,f="offset"+b;d.fn["inner"+b]=function(){var b=this[0];return b?
b.style?parseFloat(d.css(b,a,"padding")):this[a]():null};d.fn["outer"+b]=function(b){var c=this[0];return c?c.style?parseFloat(d.css(c,a,b?"margin":"border")):this[a]():null};d.fn[a]=function(b){return d.access(this,function(b,a,g){if(d.isWindow(b))return a=b.document,b=a.documentElement[c],d.support.boxModel&&b||a.body&&a.body[c]||b;if(9===b.nodeType)return a=b.documentElement,a[c]>=a[e]?a[c]:Math.max(b.body[e],a[e],b.body[f],a[f]);if(g===j)return b=d.css(b,a),a=parseFloat(b),d.isNumeric(a)?a:b;
d(b).css(a,g)},a,b,arguments.length,null)}});c.jQuery=c.$=d;"function"===typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return d})})(window);(function(c,j){function s(a,e){var f,g;f=a.nodeName.toLowerCase();if("area"===f){f=a.parentNode;g=f.name;if(!a.href||!g||"map"!==f.nodeName.toLowerCase())return!1;f=c("img[usemap=#"+g+"]")[0];return!!f&&n(f)}return(/input|select|textarea|button|object/.test(f)?!a.disabled:"a"===f?a.href||e:e)&&n(a)}function n(a){return c.expr.filters.visible(a)&&!c(a).parents().addBack().filter(function(){return"hidden"===c.css(this,"visibility")}).length}var N=0,p=/^ui-id-\d+$/;c.ui=c.ui||{};c.extend(c.ui,{version:"1.10.3",
keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});c.fn.extend({focus:function(a){return function(e,f){return"number"===typeof e?this.each(function(){var a=this;setTimeout(function(){c(a).focus();f&&f.call(a)},e)}):a.apply(this,arguments)}}(c.fn.focus),scrollParent:function(){var a;a=
c.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.css(this,"position"))&&/(auto|scroll)/.test(c.css(this,"overflow")+c.css(this,"overflow-y")+c.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.css(this,"overflow")+c.css(this,"overflow-y")+c.css(this,"overflow-x"))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):
a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length)for(var a=c(this[0]),e;a.length&&a[0]!==document;){e=a.css("position");if("absolute"===e||"relative"===e||"fixed"===e)if(e=parseInt(a.css("zIndex"),10),!isNaN(e)&&0!==e)return e;a=a.parent()}return 0},uniqueId:function(){return this.each(function(){if(!this.id)this.id="ui-id-"+ ++N})},removeUniqueId:function(){return this.each(function(){p.test(this.id)&&c(this).removeAttr("id")})}});c.extend(c.expr[":"],{data:c.expr.createPseudo?
c.expr.createPseudo(function(a){return function(e){return!!c.data(e,a)}}):function(a,e,f){return!!c.data(a,f[3])},focusable:function(a){return s(a,!isNaN(c.attr(a,"tabindex")))},tabbable:function(a){var e=c.attr(a,"tabindex"),f=isNaN(e);return(f||0<=e)&&s(a,!f)}});c("<a>").outerWidth(1).jquery||c.each(["Width","Height"],function(a,e){function f(a,e,f,k){c.each(g,function(){e-=parseFloat(c.css(a,"padding"+this))||0;f&&(e-=parseFloat(c.css(a,"border"+this+"Width"))||0);k&&(e-=parseFloat(c.css(a,"margin"+
this))||0)});return e}var g="Width"===e?["Left","Right"]:["Top","Bottom"],k=e.toLowerCase(),x={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+e]=function(a){return a===j?x["inner"+e].call(this):this.each(function(){c(this).css(k,f(this,a)+"px")})};c.fn["outer"+e]=function(a,g){return"number"!==typeof a?x["outer"+e].call(this,a):this.each(function(){c(this).css(k,f(this,a,!0,g)+"px")})}});if(!c.fn.addBack)c.fn.addBack=function(a){return this.add(null==
a?this.prevObject:this.prevObject.filter(a))};if(c("<a>").data("a-b","a").removeData("a-b").data("a-b"))c.fn.removeData=function(a){return function(e){return arguments.length?a.call(this,c.camelCase(e)):a.call(this)}}(c.fn.removeData);c.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());c.support.selectstart="onselectstart"in document.createElement("div");c.fn.extend({disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},
enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.extend(c.ui,{plugin:{add:function(a,e,f){var g,a=c.ui[a].prototype;for(g in f)a.plugins[g]=a.plugins[g]||[],a.plugins[g].push([e,f[g]])},call:function(a,c,f){var g=a.plugins[c];if(g&&a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType)for(c=0;c<g.length;c++)a.options[g[c][0]]&&g[c][1].apply(a.element,f)}},hasScroll:function(a,e){if("hidden"===c(a).css("overflow"))return!1;var f=e&&"left"===e?"scrollLeft":"scrollTop",
g=!1;if(0<a[f])return!0;a[f]=1;g=0<a[f];a[f]=0;return g}})})(jQuery);
(function(c,j){function s(){this._curInst=null;this._keyEvent=!1;this._disabledInputs=[];this._inDialog=this._datepickerShowing=!1;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";
this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),monthNamesShort:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),dayNames:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),dayNamesShort:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),dayNamesMin:"Su,Mo,Tu,We,Th,Fr,Sa".split(","),weekHeader:"Wk",dateFormat:"mm/dd/yy",
firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,
onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1};c.extend(this._defaults,this.regional[""]);this.dpDiv=n(c("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function n(a){return a.delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a","mouseout",function(){c(this).removeClass("ui-state-hover");
-1!==this.className.indexOf("ui-datepicker-prev")&&c(this).removeClass("ui-datepicker-prev-hover");-1!==this.className.indexOf("ui-datepicker-next")&&c(this).removeClass("ui-datepicker-next-hover")}).delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a","mouseover",function(){if(!c.datepicker._isDisabledDatepicker(p.inline?a.parent()[0]:p.input[0]))c(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),c(this).addClass("ui-state-hover"),
-1!==this.className.indexOf("ui-datepicker-prev")&&c(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&c(this).addClass("ui-datepicker-next-hover")})}function N(a,e){c.extend(a,e);for(var f in e)null==e[f]&&(a[f]=e[f]);return a}c.extend(c.ui,{datepicker:{version:"1.10.3"}});var p;c.extend(s.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){N(this._defaults,a||{});return this},_attachDatepicker:function(a,
e){var f,g,k;f=a.nodeName.toLowerCase();g="div"===f||"span"===f;if(!a.id)this.uuid+=1,a.id="dp"+this.uuid;k=this._newInst(c(a),g);k.settings=c.extend({},e||{});"input"===f?this._connectDatepicker(a,k):g&&this._inlineDatepicker(a,k)},_newInst:function(a,e){return{id:a[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:e,dpDiv:!e?this.dpDiv:n(c("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}},
_connectDatepicker:function(a,e){var f=c(a);e.append=c([]);e.trigger=c([]);f.hasClass(this.markerClassName)||(this._attachments(f,e),f.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(e),c.data(a,"datepicker",e),e.settings.disabled&&this._disableDatepicker(a))},_attachments:function(a,e){var f,g;f=this._get(e,"appendText");var k=this._get(e,"isRTL");e.append&&e.append.remove();if(f)e.append=c("<span class='"+this._appendClass+"'>"+
f+"</span>"),a[k?"before":"after"](e.append);a.unbind("focus",this._showDatepicker);e.trigger&&e.trigger.remove();f=this._get(e,"showOn");("focus"===f||"both"===f)&&a.focus(this._showDatepicker);if("button"===f||"both"===f)f=this._get(e,"buttonText"),g=this._get(e,"buttonImage"),e.trigger=c(this._get(e,"buttonImageOnly")?c("<img/>").addClass(this._triggerClass).attr({src:g,alt:f,title:f}):c("<button type='button'></button>").addClass(this._triggerClass).html(!g?f:c("<img/>").attr({src:g,alt:f,title:f}))),
a[k?"before":"after"](e.trigger),e.trigger.click(function(){c.datepicker._datepickerShowing&&c.datepicker._lastInput===a[0]?c.datepicker._hideDatepicker():(c.datepicker._datepickerShowing&&c.datepicker._lastInput!==a[0]&&c.datepicker._hideDatepicker(),c.datepicker._showDatepicker(a[0]));return!1})},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var c,f,g,k,j=new Date(2009,11,20),D=this._get(a,"dateFormat");D.match(/[DM]/)&&(c=function(a){for(k=g=f=0;k<a.length;k++)if(a[k].length>f)f=
a[k].length,g=k;return g},j.setMonth(c(this._get(a,D.match(/MM/)?"monthNames":"monthNamesShort"))),j.setDate(c(this._get(a,D.match(/DD/)?"dayNames":"dayNamesShort"))+20-j.getDay()));a.input.attr("size",this._formatDate(a,j).length)}},_inlineDatepicker:function(a,e){var f=c(a);f.hasClass(this.markerClassName)||(f.addClass(this.markerClassName).append(e.dpDiv),c.data(a,"datepicker",e),this._setDate(e,this._getDefaultDate(e),!0),this._updateDatepicker(e),this._updateAlternate(e),e.settings.disabled&&
this._disableDatepicker(a),e.dpDiv.css("display","block"))},_dialogDatepicker:function(a,e,f,g,k){var j,a=this._dialogInst;if(!a)this.uuid+=1,a="dp"+this.uuid,this._dialogInput=c("<input type='text' id='"+a+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),c("body").append(this._dialogInput),a=this._dialogInst=this._newInst(this._dialogInput,!1),a.settings={},c.data(this._dialogInput[0],"datepicker",a);N(a.settings,g||{});e=e&&e.constructor===Date?
this._formatDate(a,e):e;this._dialogInput.val(e);this._pos=k?k.length?k:[k.pageX,k.pageY]:null;if(!this._pos)e=document.documentElement.clientWidth,g=document.documentElement.clientHeight,k=document.documentElement.scrollLeft||document.body.scrollLeft,j=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[e/2-100+k,g/2-150+j];this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");a.settings.onSelect=f;this._inDialog=!0;this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);c.blockUI&&c.blockUI(this.dpDiv);c.data(this._dialogInput[0],"datepicker",a);return this},_destroyDatepicker:function(a){var e,f=c(a),g=c.data(a,"datepicker");f.hasClass(this.markerClassName)&&(e=a.nodeName.toLowerCase(),c.removeData(a,"datepicker"),"input"===e?(g.append.remove(),g.trigger.remove(),f.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",
this._doKeyUp)):("div"===e||"span"===e)&&f.removeClass(this.markerClassName).empty())},_enableDatepicker:function(a){var e,f=c(a),g=c.data(a,"datepicker");if(f.hasClass(this.markerClassName)){e=a.nodeName.toLowerCase();if("input"===e)a.disabled=!1,g.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if("div"===e||"span"===e)e=f.children("."+this._inlineClass),e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",
!1);this._disabledInputs=c.map(this._disabledInputs,function(c){return c===a?null:c})}},_disableDatepicker:function(a){var e,f=c(a),g=c.data(a,"datepicker");if(f.hasClass(this.markerClassName)){e=a.nodeName.toLowerCase();if("input"===e)a.disabled=!0,g.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if("div"===e||"span"===e)e=f.children("."+this._inlineClass),e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",
!0);this._disabledInputs=c.map(this._disabledInputs,function(c){return c===a?null:c});this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return!1;for(var c=0;c<this._disabledInputs.length;c++)if(this._disabledInputs[c]===a)return!0;return!1},_getInst:function(a){try{return c.data(a,"datepicker")}catch(e){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(a,e,f){var g,k,x,D,n=this._getInst(a);if(2===arguments.length&&"string"===
typeof e)return"defaults"===e?c.extend({},c.datepicker._defaults):n?"all"===e?c.extend({},n.settings):this._get(n,e):null;g=e||{};"string"===typeof e&&(g={},g[e]=f);if(n){this._curInst===n&&this._hideDatepicker();k=this._getDateDatepicker(a,!0);x=this._getMinMaxDate(n,"min");D=this._getMinMaxDate(n,"max");N(n.settings,g);if(null!==x&&g.dateFormat!==j&&g.minDate===j)n.settings.minDate=this._formatDate(n,x);if(null!==D&&g.dateFormat!==j&&g.maxDate===j)n.settings.maxDate=this._formatDate(n,D);"disabled"in
g&&(g.disabled?this._disableDatepicker(a):this._enableDatepicker(a));this._attachments(c(a),n);this._autoSize(n);this._setDate(n,k);this._updateAlternate(n);this._updateDatepicker(n)}},_changeDatepicker:function(a,c,f){this._optionDatepicker(a,c,f)},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)},_setDateDatepicker:function(a,c){var f=this._getInst(a);f&&(this._setDate(f,c),this._updateDatepicker(f),this._updateAlternate(f))},_getDateDatepicker:function(a,c){var f=
this._getInst(a);f&&!f.inline&&this._setDateFromField(f,c);return f?this._getDate(f):null},_doKeyDown:function(a){var e,f=c.datepicker._getInst(a.target);e=!0;var g=f.dpDiv.is(".ui-datepicker-rtl");f._keyEvent=!0;if(c.datepicker._datepickerShowing)switch(a.keyCode){case 9:c.datepicker._hideDatepicker();e=!1;break;case 13:return e=c("td."+c.datepicker._dayOverClass+":not(."+c.datepicker._currentClass+")",f.dpDiv),e[0]&&c.datepicker._selectDay(a.target,f.selectedMonth,f.selectedYear,e[0]),(a=c.datepicker._get(f,
"onSelect"))?(e=c.datepicker._formatDate(f),a.apply(f.input?f.input[0]:null,[e,f])):c.datepicker._hideDatepicker(),!1;case 27:c.datepicker._hideDatepicker();break;case 33:c.datepicker._adjustDate(a.target,a.ctrlKey?-c.datepicker._get(f,"stepBigMonths"):-c.datepicker._get(f,"stepMonths"),"M");break;case 34:c.datepicker._adjustDate(a.target,a.ctrlKey?+c.datepicker._get(f,"stepBigMonths"):+c.datepicker._get(f,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&c.datepicker._clearDate(a.target);
e=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&c.datepicker._gotoToday(a.target);e=a.ctrlKey||a.metaKey;break;case 37:if(a.ctrlKey||a.metaKey)c.datepicker._adjustDate(a.target,g?1:-1,"D");e=a.ctrlKey||a.metaKey;a.originalEvent.altKey&&c.datepicker._adjustDate(a.target,a.ctrlKey?-c.datepicker._get(f,"stepBigMonths"):-c.datepicker._get(f,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&c.datepicker._adjustDate(a.target,-7,"D");e=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||
a.metaKey)c.datepicker._adjustDate(a.target,g?-1:1,"D");e=a.ctrlKey||a.metaKey;a.originalEvent.altKey&&c.datepicker._adjustDate(a.target,a.ctrlKey?+c.datepicker._get(f,"stepBigMonths"):+c.datepicker._get(f,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&c.datepicker._adjustDate(a.target,7,"D");e=a.ctrlKey||a.metaKey;break;default:e=!1}else 36===a.keyCode&&a.ctrlKey?c.datepicker._showDatepicker(this):e=!1;e&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var e,f;e=c.datepicker._getInst(a.target);
if(c.datepicker._get(e,"constrainInput"))return e=c.datepicker._possibleChars(c.datepicker._get(e,"dateFormat")),f=String.fromCharCode(null==a.charCode?a.keyCode:a.charCode),a.ctrlKey||a.metaKey||" ">f||!e||-1<e.indexOf(f)},_doKeyUp:function(a){var e,a=c.datepicker._getInst(a.target);if(a.input.val()!==a.lastVal)try{if(e=c.datepicker.parseDate(c.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,c.datepicker._getFormatConfig(a)))c.datepicker._setDateFromField(a),c.datepicker._updateAlternate(a),
c.datepicker._updateDatepicker(a)}catch(f){}return!0},_showDatepicker:function(a){a=a.target||a;"input"!==a.nodeName.toLowerCase()&&(a=c("input",a.parentNode)[0]);if(!(c.datepicker._isDisabledDatepicker(a)||c.datepicker._lastInput===a)){var e,f,g,k;e=c.datepicker._getInst(a);c.datepicker._curInst&&c.datepicker._curInst!==e&&(c.datepicker._curInst.dpDiv.stop(!0,!0),e&&c.datepicker._datepickerShowing&&c.datepicker._hideDatepicker(c.datepicker._curInst.input[0]));f=(f=c.datepicker._get(e,"beforeShow"))?
f.apply(a,[a,e]):{};if(!1!==f){N(e.settings,f);e.lastVal=null;c.datepicker._lastInput=a;c.datepicker._setDateFromField(e);if(c.datepicker._inDialog)a.value="";if(!c.datepicker._pos)c.datepicker._pos=c.datepicker._findPos(a),c.datepicker._pos[1]+=a.offsetHeight;g=!1;c(a).parents().each(function(){g|="fixed"===c(this).css("position");return!g});f={left:c.datepicker._pos[0],top:c.datepicker._pos[1]};c.datepicker._pos=null;e.dpDiv.empty();e.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});
c.datepicker._updateDatepicker(e);f=c.datepicker._checkOffset(e,f,g);e.dpDiv.css({position:c.datepicker._inDialog&&c.blockUI?"static":g?"fixed":"absolute",display:"none",left:f.left+"px",top:f.top+"px"});if(!e.inline){f=c.datepicker._get(e,"showAnim");k=c.datepicker._get(e,"duration");e.dpDiv.zIndex(c(a).zIndex()+1);c.datepicker._datepickerShowing=!0;if(c.effects&&c.effects.effect[f])e.dpDiv.show(f,c.datepicker._get(e,"showOptions"),k);else e.dpDiv[f||"show"](f?k:null);c.datepicker._shouldFocusInput(e)&&
e.input.focus();c.datepicker._curInst=e}}}},_updateDatepicker:function(a){this.maxRows=4;p=a;a.dpDiv.empty().append(this._generateHTML(a));this._attachHandlers(a);a.dpDiv.find("."+this._dayOverClass+" a").mouseover();var e,f=this._getNumberOfMonths(a),g=f[1];a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");1<g&&a.dpDiv.addClass("ui-datepicker-multi-"+g).css("width",17*g+"em");a.dpDiv[(1!==f[0]||1!==f[1]?"add":"remove")+"Class"]("ui-datepicker-multi");
a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");a===c.datepicker._curInst&&c.datepicker._datepickerShowing&&c.datepicker._shouldFocusInput(a)&&a.input.focus();if(a.yearshtml)e=a.yearshtml,setTimeout(function(){e===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);e=a.yearshtml=null},0)},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")},_checkOffset:function(a,
e,f){var g=a.dpDiv.outerWidth(),k=a.dpDiv.outerHeight(),j=a.input?a.input.outerWidth():0,n=a.input?a.input.outerHeight():0,p=document.documentElement.clientWidth+(f?0:c(document).scrollLeft()),s=document.documentElement.clientHeight+(f?0:c(document).scrollTop());e.left-=this._get(a,"isRTL")?g-j:0;e.left-=f&&e.left===a.input.offset().left?c(document).scrollLeft():0;e.top-=f&&e.top===a.input.offset().top+n?c(document).scrollTop():0;e.left-=Math.min(e.left,e.left+g>p&&p>g?Math.abs(e.left+g-p):0);e.top-=
Math.min(e.top,e.top+k>s&&s>k?Math.abs(k+n):0);return e},_findPos:function(a){for(var e=this._get(this._getInst(a),"isRTL");a&&("hidden"===a.type||1!==a.nodeType||c.expr.filters.hidden(a));)a=a[e?"previousSibling":"nextSibling"];a=c(a).offset();return[a.left,a.top]},_hideDatepicker:function(a){var e,f,g=this._curInst;if(g&&!(a&&g!==c.data(a,"datepicker"))&&this._datepickerShowing){a=this._get(g,"showAnim");e=this._get(g,"duration");f=function(){c.datepicker._tidyDialog(g)};if(c.effects&&(c.effects.effect[a]||
c.effects[a]))g.dpDiv.hide(a,c.datepicker._get(g,"showOptions"),e,f);else g.dpDiv["slideDown"===a?"slideUp":"fadeIn"===a?"fadeOut":"hide"](a?e:null,f);a||f();this._datepickerShowing=!1;(a=this._get(g,"onClose"))&&a.apply(g.input?g.input[0]:null,[g.input?g.input.val():"",g]);this._lastInput=null;this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),c.blockUI&&(c.unblockUI(),c("body").append(this.dpDiv)));this._inDialog=!1}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},
_checkExternalClick:function(a){if(c.datepicker._curInst){var a=c(a.target),e=c.datepicker._getInst(a[0]);(a[0].id!==c.datepicker._mainDivId&&0===a.parents("#"+c.datepicker._mainDivId).length&&!a.hasClass(c.datepicker.markerClassName)&&!a.closest("."+c.datepicker._triggerClass).length&&c.datepicker._datepickerShowing&&(!c.datepicker._inDialog||!c.blockUI)||a.hasClass(c.datepicker.markerClassName)&&c.datepicker._curInst!==e)&&c.datepicker._hideDatepicker()}},_adjustDate:function(a,e,f){var a=c(a),
g=this._getInst(a[0]);this._isDisabledDatepicker(a[0])||(this._adjustInstDate(g,e+("M"===f?this._get(g,"showCurrentAtPos"):0),f),this._updateDatepicker(g))},_gotoToday:function(a){var e=c(a),f=this._getInst(e[0]);this._get(f,"gotoCurrent")&&f.currentDay?(f.selectedDay=f.currentDay,f.drawMonth=f.selectedMonth=f.currentMonth,f.drawYear=f.selectedYear=f.currentYear):(a=new Date,f.selectedDay=a.getDate(),f.drawMonth=f.selectedMonth=a.getMonth(),f.drawYear=f.selectedYear=a.getFullYear());this._notifyChange(f);
this._adjustDate(e)},_selectMonthYear:function(a,e,f){var a=c(a),g=this._getInst(a[0]);g["selected"+("M"===f?"Month":"Year")]=g["draw"+("M"===f?"Month":"Year")]=parseInt(e.options[e.selectedIndex].value,10);this._notifyChange(g);this._adjustDate(a)},_selectDay:function(a,e,f,g){var k;k=c(a);if(!c(g).hasClass(this._unselectableClass)&&!this._isDisabledDatepicker(k[0]))k=this._getInst(k[0]),k.selectedDay=k.currentDay=c("a",g).html(),k.selectedMonth=k.currentMonth=e,k.selectedYear=k.currentYear=f,this._selectDate(a,
this._formatDate(k,k.currentDay,k.currentMonth,k.currentYear))},_clearDate:function(a){this._selectDate(c(a),"")},_selectDate:function(a,e){var f,g=this._getInst(c(a)[0]),e=null!=e?e:this._formatDate(g);g.input&&g.input.val(e);this._updateAlternate(g);(f=this._get(g,"onSelect"))?f.apply(g.input?g.input[0]:null,[e,g]):g.input&&g.input.trigger("change");g.inline?this._updateDatepicker(g):(this._hideDatepicker(),this._lastInput=g.input[0],"object"!==typeof g.input[0]&&g.input.focus(),this._lastInput=
null)},_updateAlternate:function(a){var e,f,g,k=this._get(a,"altField");k&&(e=this._get(a,"altFormat")||this._get(a,"dateFormat"),f=this._getDate(a),g=this.formatDate(e,f,this._getFormatConfig(a)),c(k).each(function(){c(this).val(g)}))},noWeekends:function(a){a=a.getDay();return[0<a&&6>a,""]},iso8601Week:function(a){var c=new Date(a.getTime());c.setDate(c.getDate()+4-(c.getDay()||7));a=c.getTime();c.setMonth(0);c.setDate(1);return Math.floor(Math.round((a-c)/864E5)/7)+1},parseDate:function(a,e,f){if(null==
a||null==e)throw"Invalid arguments";e="object"===typeof e?e.toString():e+"";if(""===e)return null;var g,k,j,n=0;k=(f?f.shortYearCutoff:null)||this._defaults.shortYearCutoff;k="string"!==typeof k?k:(new Date).getFullYear()%100+parseInt(k,10);j=(f?f.dayNamesShort:null)||this._defaults.dayNamesShort;var p=(f?f.dayNames:null)||this._defaults.dayNames,s=(f?f.monthNamesShort:null)||this._defaults.monthNamesShort,B=(f?f.monthNames:null)||this._defaults.monthNames,w=f=-1,A=-1,N=-1,O=!1,y,C=function(c){(c=
g+1<a.length&&a.charAt(g+1)===c)&&g++;return c},R=function(a){var c=C(a),a=e.substring(n).match(RegExp("^\\d{1,"+("@"===a?14:"!"===a?20:"y"===a&&c?4:"o"===a?3:2)+"}"));if(!a)throw"Missing number at position "+n;n+=a[0].length;return parseInt(a[0],10)},Q=function(a,f,g){var k=-1,a=c.map(C(a)?g:f,function(a,c){return[[c,a]]}).sort(function(a,c){return-(a[1].length-c[1].length)});c.each(a,function(a,c){var f=c[1];if(e.substr(n,f.length).toLowerCase()===f.toLowerCase())return k=c[0],n+=f.length,!1});
if(-1!==k)return k+1;throw"Unknown name at position "+n;},L=function(){if(e.charAt(n)!==a.charAt(g))throw"Unexpected literal at position "+n;n++};for(g=0;g<a.length;g++)if(O)"'"===a.charAt(g)&&!C("'")?O=!1:L();else switch(a.charAt(g)){case "d":A=R("d");break;case "D":Q("D",j,p);break;case "o":N=R("o");break;case "m":w=R("m");break;case "M":w=Q("M",s,B);break;case "y":f=R("y");break;case "@":y=new Date(R("@"));f=y.getFullYear();w=y.getMonth()+1;A=y.getDate();break;case "!":y=new Date((R("!")-this._ticksTo1970)/
1E4);f=y.getFullYear();w=y.getMonth()+1;A=y.getDate();break;case "'":C("'")?L():O=!0;break;default:L()}if(n<e.length&&(j=e.substr(n),!/^\s+/.test(j)))throw"Extra/unparsed characters found in date: "+j;-1===f?f=(new Date).getFullYear():100>f&&(f+=(new Date).getFullYear()-(new Date).getFullYear()%100+(f<=k?0:-100));if(-1<N){w=1;A=N;do{k=this._getDaysInMonth(f,w-1);if(A<=k)break;w++;A-=k}while(1)}y=this._daylightSavingAdjust(new Date(f,w-1,A));if(y.getFullYear()!==f||y.getMonth()+1!==w||y.getDate()!==
A)throw"Invalid date";return y},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:864E9*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(a,c,f){if(!c)return"";var g,k=(f?f.dayNamesShort:null)||this._defaults.dayNamesShort,j=(f?f.dayNames:null)||this._defaults.dayNames,n=(f?f.monthNamesShort:null)||
this._defaults.monthNamesShort,f=(f?f.monthNames:null)||this._defaults.monthNames,p=function(c){(c=g+1<a.length&&a.charAt(g+1)===c)&&g++;return c},s=function(a,c,e){c=""+c;if(p(a))for(;c.length<e;)c="0"+c;return c},B=function(a,c,e,f){return p(a)?f[c]:e[c]},w="",A=!1;if(c)for(g=0;g<a.length;g++)if(A)"'"===a.charAt(g)&&!p("'")?A=!1:w+=a.charAt(g);else switch(a.charAt(g)){case "d":w+=s("d",c.getDate(),2);break;case "D":w+=B("D",c.getDay(),k,j);break;case "o":w+=s("o",Math.round(((new Date(c.getFullYear(),
c.getMonth(),c.getDate())).getTime()-(new Date(c.getFullYear(),0,0)).getTime())/864E5),3);break;case "m":w+=s("m",c.getMonth()+1,2);break;case "M":w+=B("M",c.getMonth(),n,f);break;case "y":w+=p("y")?c.getFullYear():(10>c.getYear()%100?"0":"")+c.getYear()%100;break;case "@":w+=c.getTime();break;case "!":w+=1E4*c.getTime()+this._ticksTo1970;break;case "'":p("'")?w+="'":A=!0;break;default:w+=a.charAt(g)}return w},_possibleChars:function(a){var c,f="",g=!1,k=function(f){(f=c+1<a.length&&a.charAt(c+1)===
f)&&c++;return f};for(c=0;c<a.length;c++)if(g)"'"===a.charAt(c)&&!k("'")?g=!1:f+=a.charAt(c);else switch(a.charAt(c)){case "d":case "m":case "y":case "@":f+="0123456789";break;case "D":case "M":return null;case "'":k("'")?f+="'":g=!0;break;default:f+=a.charAt(c)}return f},_get:function(a,c){return a.settings[c]!==j?a.settings[c]:this._defaults[c]},_setDateFromField:function(a,c){if(a.input.val()!==a.lastVal){var f=this._get(a,"dateFormat"),g=a.lastVal=a.input?a.input.val():null,k=this._getDefaultDate(a),
j=k,n=this._getFormatConfig(a);try{j=this.parseDate(f,g,n)||k}catch(p){g=c?"":g}a.selectedDay=j.getDate();a.drawMonth=a.selectedMonth=j.getMonth();a.drawYear=a.selectedYear=j.getFullYear();a.currentDay=g?j.getDate():0;a.currentMonth=g?j.getMonth():0;a.currentYear=g?j.getFullYear():0;this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,e,f){var b;var g=function(a){var c=new Date;c.setDate(c.getDate()+
a);return c};if(b=(e=null==e||""===e?f:"string"===typeof e?function(e){try{return c.datepicker.parseDate(c.datepicker._get(a,"dateFormat"),e,c.datepicker._getFormatConfig(a))}catch(f){}for(var g=(e.toLowerCase().match(/^c/)?c.datepicker._getDate(a):null)||new Date,j=g.getFullYear(),n=g.getMonth(),g=g.getDate(),p=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,w=p.exec(e);w;){switch(w[2]||"d"){case "d":case "D":g+=parseInt(w[1],10);break;case "w":case "W":g+=7*parseInt(w[1],10);break;case "m":case "M":n+=parseInt(w[1],
10);g=Math.min(g,c.datepicker._getDaysInMonth(j,n));break;case "y":case "Y":j+=parseInt(w[1],10),g=Math.min(g,c.datepicker._getDaysInMonth(j,n))}w=p.exec(e)}return new Date(j,n,g)}(e):"number"===typeof e?isNaN(e)?f:g(e):new Date(e.getTime()))&&"Invalid Date"===e.toString()?f:e,e=b)e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0);return this._daylightSavingAdjust(e)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(12<a.getHours()?a.getHours()+2:0);return a},_setDate:function(a,
c,f){var g=!c,k=a.selectedMonth,j=a.selectedYear,c=this._restrictMinMax(a,this._determineDate(a,c,new Date));a.selectedDay=a.currentDay=c.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=c.getMonth();a.drawYear=a.selectedYear=a.currentYear=c.getFullYear();(k!==a.selectedMonth||j!==a.selectedYear)&&!f&&this._notifyChange(a);this._adjustInstDate(a);a.input&&a.input.val(g?"":this._formatDate(a))},_getDate:function(a){return!a.currentYear||a.input&&""===a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,
a.currentMonth,a.currentDay))},_attachHandlers:function(a){var e=this._get(a,"stepMonths"),f="#"+a.id.replace(/\\\\/g,"\\");a.dpDiv.find("[data-handler]").map(function(){c(this).bind(this.getAttribute("data-event"),{prev:function(){c.datepicker._adjustDate(f,-e,"M")},next:function(){c.datepicker._adjustDate(f,+e,"M")},hide:function(){c.datepicker._hideDatepicker()},today:function(){c.datepicker._gotoToday(f)},selectDay:function(){c.datepicker._selectDay(f,+this.getAttribute("data-month"),+this.getAttribute("data-year"),
this);return!1},selectMonth:function(){c.datepicker._selectMonthYear(f,this,"M");return!1},selectYear:function(){c.datepicker._selectMonthYear(f,this,"Y");return!1}}[this.getAttribute("data-handler")])})},_generateHTML:function(a){var c,f,g,k,j,n,p,s,B,w,A,N,O,y,C,R,Q,L,U,m,r,z,d,ea,Z,ca,ia,P=new Date,P=this._daylightSavingAdjust(new Date(P.getFullYear(),P.getMonth(),P.getDate())),F=this._get(a,"isRTL");n=this._get(a,"showButtonPanel");g=this._get(a,"hideIfNoPrevNext");j=this._get(a,"navigationAsDateFormat");
var G=this._getNumberOfMonths(a),H=this._get(a,"showCurrentAtPos");k=this._get(a,"stepMonths");var na=1!==G[0]||1!==G[1],oa=this._daylightSavingAdjust(!a.currentDay?new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),aa=this._getMinMaxDate(a,"min"),X=this._getMinMaxDate(a,"max"),H=a.drawMonth-H,I=a.drawYear;0>H&&(H+=12,I--);if(X){c=this._daylightSavingAdjust(new Date(X.getFullYear(),X.getMonth()-G[0]*G[1]+1,X.getDate()));for(c=aa&&c<aa?aa:c;this._daylightSavingAdjust(new Date(I,
H,1))>c;)H--,0>H&&(H=11,I--)}a.drawMonth=H;a.drawYear=I;c=this._get(a,"prevText");c=!j?c:this.formatDate(c,this._daylightSavingAdjust(new Date(I,H-k,1)),this._getFormatConfig(a));c=this._canAdjustMonth(a,-1,I,H)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(F?"e":"w")+"'>"+c+"</span></a>":g?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+
(F?"e":"w")+"'>"+c+"</span></a>";f=this._get(a,"nextText");f=!j?f:this.formatDate(f,this._daylightSavingAdjust(new Date(I,H+k,1)),this._getFormatConfig(a));g=this._canAdjustMonth(a,1,I,H)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+f+"'><span class='ui-icon ui-icon-circle-triangle-"+(F?"w":"e")+"'>"+f+"</span></a>":g?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+f+"'><span class='ui-icon ui-icon-circle-triangle-"+(F?"w":
"e")+"'>"+f+"</span></a>";k=this._get(a,"currentText");f=this._get(a,"gotoCurrent")&&a.currentDay?oa:P;k=!j?k:this.formatDate(k,f,this._getFormatConfig(a));j=!a.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(a,"closeText")+"</button>":"";n=n?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(F?j:"")+(this._isInRange(a,f)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+
k+"</button>":"")+(F?"":j)+"</div>":"";j=parseInt(this._get(a,"firstDay"),10);j=isNaN(j)?0:j;k=this._get(a,"showWeek");f=this._get(a,"dayNames");p=this._get(a,"dayNamesMin");s=this._get(a,"monthNames");B=this._get(a,"monthNamesShort");w=this._get(a,"beforeShowDay");A=this._get(a,"showOtherMonths");N=this._get(a,"selectOtherMonths");O=this._getDefaultDate(a);y="";for(R=0;R<G[0];R++){Q="";this.maxRows=4;for(L=0;L<G[1];L++){U=this._daylightSavingAdjust(new Date(I,H,a.selectedDay));C=" ui-corner-all";
m="";if(na){m+="<div class='ui-datepicker-group";if(1<G[1])switch(L){case 0:m+=" ui-datepicker-group-first";C=" ui-corner-"+(F?"right":"left");break;case G[1]-1:m+=" ui-datepicker-group-last";C=" ui-corner-"+(F?"left":"right");break;default:m+=" ui-datepicker-group-middle",C=""}m+="'>"}m+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+C+"'>"+(/all|left/.test(C)&&0===R?F?g:c:"")+(/all|right/.test(C)&&0===R?F?c:g:"")+this._generateMonthYearHeader(a,H,I,aa,X,0<R||0<L,s,B)+"</div><table class='ui-datepicker-calendar'><thead><tr>";
r=k?"<th class='ui-datepicker-week-col'>"+this._get(a,"weekHeader")+"</th>":"";for(C=0;7>C;C++)z=(C+j)%7,r+="<th"+(5<=(C+j+6)%7?" class='ui-datepicker-week-end'":"")+"><span title='"+f[z]+"'>"+p[z]+"</span></th>";m+=r+"</tr></thead><tbody>";r=this._getDaysInMonth(I,H);if(I===a.selectedYear&&H===a.selectedMonth)a.selectedDay=Math.min(a.selectedDay,r);C=(this._getFirstDayOfMonth(I,H)-j+7)%7;r=Math.ceil((C+r)/7);this.maxRows=r=na?this.maxRows>r?this.maxRows:r:r;z=this._daylightSavingAdjust(new Date(I,
H,1-C));for(d=0;d<r;d++){m+="<tr>";ea=!k?"":"<td class='ui-datepicker-week-col'>"+this._get(a,"calculateWeek")(z)+"</td>";for(C=0;7>C;C++)Z=w?w.apply(a.input?a.input[0]:null,[z]):[!0,""],ia=(ca=z.getMonth()!==H)&&!N||!Z[0]||aa&&z<aa||X&&z>X,ea+="<td class='"+(5<=(C+j+6)%7?" ui-datepicker-week-end":"")+(ca?" ui-datepicker-other-month":"")+(z.getTime()===U.getTime()&&H===a.selectedMonth&&a._keyEvent||O.getTime()===z.getTime()&&O.getTime()===U.getTime()?" "+this._dayOverClass:"")+(ia?" "+this._unselectableClass+
" ui-state-disabled":"")+(ca&&!A?"":" "+Z[1]+(z.getTime()===oa.getTime()?" "+this._currentClass:"")+(z.getTime()===P.getTime()?" ui-datepicker-today":""))+"'"+((!ca||A)&&Z[2]?" title='"+Z[2].replace(/'/g,"&#39;")+"'":"")+(ia?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(ca&&!A?"&#xa0;":ia?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===P.getTime()?" ui-state-highlight":"")+(z.getTime()===
oa.getTime()?" ui-state-active":"")+(ca?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>")+"</td>",z.setDate(z.getDate()+1),z=this._daylightSavingAdjust(z);m+=ea+"</tr>"}H++;11<H&&(H=0,I++);m+="</tbody></table>"+(na?"</div>"+(0<G[0]&&L===G[1]-1?"<div class='ui-datepicker-row-break'></div>":""):"");Q+=m}y+=Q}a._keyEvent=!1;return y+n},_generateMonthYearHeader:function(a,c,f,g,k,j,n,p){var s,B,w,A=this._get(a,"changeMonth"),N=this._get(a,"changeYear"),O=this._get(a,"showMonthAfterYear"),
y="<div class='ui-datepicker-title'>",C="";if(j||!A)C+="<span class='ui-datepicker-month'>"+n[c]+"</span>";else{n=g&&g.getFullYear()===f;s=k&&k.getFullYear()===f;C+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";for(B=0;12>B;B++)if((!n||B>=g.getMonth())&&(!s||B<=k.getMonth()))C+="<option value='"+B+"'"+(B===c?" selected='selected'":"")+">"+p[B]+"</option>";C+="</select>"}O||(y+=C+(j||!A||!N?"&#xa0;":""));if(!a.yearshtml)if(a.yearshtml="",j||!N)y+="<span class='ui-datepicker-year'>"+
f+"</span>";else{p=this._get(a,"yearRange").split(":");w=(new Date).getFullYear();n=function(a){a=a.match(/c[+\-].*/)?f+parseInt(a.substring(1),10):a.match(/[+\-].*/)?w+parseInt(a,10):parseInt(a,10);return isNaN(a)?w:a};c=n(p[0]);p=Math.max(c,n(p[1]||""));c=g?Math.max(c,g.getFullYear()):c;p=k?Math.min(p,k.getFullYear()):p;for(a.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";c<=p;c++)a.yearshtml+="<option value='"+c+"'"+(c===f?" selected='selected'":
"")+">"+c+"</option>";a.yearshtml+="</select>";y+=a.yearshtml;a.yearshtml=null}y+=this._get(a,"yearSuffix");O&&(y+=(j||!A||!N?"&#xa0;":"")+C);return y+"</div>"},_adjustInstDate:function(a,c,f){var g=a.drawYear+("Y"===f?c:0),k=a.drawMonth+("M"===f?c:0),c=Math.min(a.selectedDay,this._getDaysInMonth(g,k))+("D"===f?c:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(g,k,c)));a.selectedDay=g.getDate();a.drawMonth=a.selectedMonth=g.getMonth();a.drawYear=a.selectedYear=g.getFullYear();("M"===
f||"Y"===f)&&this._notifyChange(a)},_restrictMinMax:function(a,c){var f=this._getMinMaxDate(a,"min"),g=this._getMinMaxDate(a,"max"),f=f&&c<f?f:c;return g&&f>g?g:f},_notifyChange:function(a){var c=this._get(a,"onChangeMonthYear");c&&c.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){a=this._get(a,"numberOfMonths");return null==a?[1,1]:"number"===typeof a?[1,a]:a},_getMinMaxDate:function(a,c){return this._determineDate(a,this._get(a,c+"Date"),null)},
_getDaysInMonth:function(a,c){return 32-this._daylightSavingAdjust(new Date(a,c,32)).getDate()},_getFirstDayOfMonth:function(a,c){return(new Date(a,c,1)).getDay()},_canAdjustMonth:function(a,c,f,g){var k=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(f,g+(0>c?c:k[0]*k[1]),1));0>c&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth()));return this._isInRange(a,f)},_isInRange:function(a,c){var f,g,k=this._getMinMaxDate(a,"min"),j=this._getMinMaxDate(a,"max"),n=null,p=null;if(f=
this._get(a,"yearRange"))f=f.split(":"),g=(new Date).getFullYear(),n=parseInt(f[0],10),p=parseInt(f[1],10),f[0].match(/[+\-].*/)&&(n+=g),f[1].match(/[+\-].*/)&&(p+=g);return(!k||c.getTime()>=k.getTime())&&(!j||c.getTime()<=j.getTime())&&(!n||c.getFullYear()>=n)&&(!p||c.getFullYear()<=p)},_getFormatConfig:function(a){var c=this._get(a,"shortYearCutoff"),c="string"!==typeof c?c:(new Date).getFullYear()%100+parseInt(c,10);return{shortYearCutoff:c,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,
"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,c,f,g){if(!c)a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear;c=c?"object"===typeof c?c:this._daylightSavingAdjust(new Date(g,f,c)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),c,this._getFormatConfig(a))}});c.fn.datepicker=function(a){if(!this.length)return this;
if(!c.datepicker.initialized)c(document).mousedown(c.datepicker._checkExternalClick),c.datepicker.initialized=!0;0===c("#"+c.datepicker._mainDivId).length&&c("body").append(c.datepicker.dpDiv);var e=Array.prototype.slice.call(arguments,1);return"string"===typeof a&&("isDisabled"===a||"getDate"===a||"widget"===a)||"option"===a&&2===arguments.length&&"string"===typeof arguments[1]?c.datepicker["_"+a+"Datepicker"].apply(c.datepicker,[this[0]].concat(e)):this.each(function(){"string"===typeof a?c.datepicker["_"+
a+"Datepicker"].apply(c.datepicker,[this].concat(e)):c.datepicker._attachDatepicker(this,a)})};c.datepicker=new s;c.datepicker.initialized=!1;c.datepicker.uuid=(new Date).getTime();c.datepicker.version="1.10.3"})(jQuery);(function(c,j,s){function n(a,d,e){a=j.createElement(a);if(d)a.id=B+d;if(e)a.style.cssText=e;return c(a)}function N(a){var c=P.length,a=(V+a)%c;return 0>a?c+a:a}function p(a,c){return Math.round((/%/.test(a)?("x"===c?F.width():F.height())/100:1)*parseInt(a,10))}function a(a){return i.photo||/\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(a)}function e(){var a,d=c.data(Y,T);null==d?(i=c.extend({},K),console&&console.log&&console.log("Error: cboxElement missing settings object")):i=c.extend({},d);for(a in i)c.isFunction(i[a])&&
"on"!==a.slice(0,2)&&(i[a]=i[a].call(Y));i.rel=i.rel||Y.rel||"nofollow";i.href=i.href||c(Y).attr("href");i.title=i.title||Y.title;if("string"===typeof i.href)i.href=c.trim(i.href)}function f(a,d){c.event.trigger(a);d&&d.call(Y)}function g(){var a,c=B+"Slideshow_",d="click."+B,e,f;i.slideshow&&P[1]?(e=function(){X.text(i.slideshowStop).unbind(d).bind(O,function(){if(i.loop||P[V+1])a=setTimeout(E.next,i.slideshowSpeed)}).bind(pa,function(){clearTimeout(a)}).one(d+" "+y,f);r.removeClass(c+"off").addClass(c+
"on");a=setTimeout(E.next,i.slideshowSpeed)},f=function(){clearTimeout(a);X.text(i.slideshowStart).unbind([O,pa,y,d].join(" ")).one(d,function(){E.next();e()});r.removeClass(c+"on").addClass(c+"off")},i.slideshowAuto?e():f()):r.removeClass(c+"off "+c+"on")}function k(a){if(!Ba){Y=a;e();P=c(Y);V=0;"nofollow"!==i.rel&&(P=c("."+w).filter(function(){var a=c.data(this,T),d;a&&(d=a.rel||this.rel);return d===i.rel}),V=P.index(Y),-1===V&&(P=P.add(Y),V=P.length-1));if(!ha){ha=ta=!0;r.show();if(i.returnFocus)c(Y).blur().one(C,
function(){c(this).focus()});m.css({opacity:+i.opacity,cursor:i.overlayClose?"pointer":"auto"}).show();i.w=p(i.initialWidth,"x");i.h=p(i.initialHeight,"y");E.position();L&&F.bind("resize."+U+" scroll."+U,function(){m.css({width:F.width(),height:F.height(),top:F.scrollTop(),left:F.scrollLeft()})}).trigger("resize."+U);f(A,i.onOpen);sa.add(oa).hide();Aa.html(i.close).show()}E.load(!0)}}function x(){!r&&j.body&&(Ea=!1,F=c(s),r=n(J).attr({id:T,"class":Q?B+(L?"IE6":"IE"):""}).hide(),m=n(J,"Overlay",L?
"position:absolute":"").hide(),z=n(J,"Wrapper"),d=n(J,"Content").append(G=n(J,"LoadedContent","width:0; height:0; overflow:hidden"),na=n(J,"LoadingOverlay").add(n(J,"LoadingGraphic")),oa=n(J,"Title"),aa=n(J,"Current"),I=n(J,"Next"),qa=n(J,"Previous"),X=n(J,"Slideshow").bind(A,g),Aa=n(J,"Close")),z.append(n(J).append(n(J,"TopLeft"),ea=n(J,"TopCenter"),n(J,"TopRight")),n(J,!1,"clear:left").append(Z=n(J,"MiddleLeft"),d,ca=n(J,"MiddleRight")),n(J,!1,"clear:left").append(n(J,"BottomLeft"),ia=n(J,"BottomCenter"),
n(J,"BottomRight"))).find("div div").css({"float":"left"}),H=n(J,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),sa=I.add(qa).add(aa).add(X),c(j.body).append(m,r.append(z,H)))}function D(){return r?(Ea||(Ea=!0,la=ea.height()+ia.height()+d.outerHeight(!0)-d.height(),ma=Z.width()+ca.width()+d.outerWidth(!0)-d.width(),ga=G.outerHeight(!0),da=G.outerWidth(!0),r.css({"padding-bottom":la,"padding-right":ma}),I.click(function(){E.next()}),qa.click(function(){E.prev()}),Aa.click(function(){E.close()}),
m.click(function(){i.overlayClose&&E.close()}),c(j).bind("keydown."+B,function(a){var c=a.keyCode;ha&&i.escKey&&27===c&&(a.preventDefault(),E.close());ha&&i.arrowKey&&P[1]&&(37===c?(a.preventDefault(),qa.click()):39===c&&(a.preventDefault(),I.click()))}),c("."+w,j).live("click",function(a){1<a.which||a.shiftKey||a.altKey||a.metaKey||(a.preventDefault(),k(this))})),!0):!1}var K={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,
maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:0.9,preloading:!0,current:"Bild {current} von {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,
onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0},T="colorbox",B="cbox",w=B+"Element",A=B+"_open",pa=B+"_load",O=B+"_complete",y=B+"_cleanup",C=B+"_closed",R=B+"_purge",Q=!c.support.opacity&&!c.support.style,L=Q&&!s.XMLHttpRequest,U=B+"_IE6",m,r,z,d,ea,Z,ca,ia,P,F,G,H,na,oa,aa,X,I,qa,Aa,sa,i,la,ma,ga,da,Y,V,M,ha,ta,Ba,Ga,E,J="div",Ea;if(!c.colorbox)c(x),E=c.fn[T]=c[T]=function(a,d){var e=this,a=a||{};x();if(D()){if(!e[0]){if(e.selector)return e;
e=c("<a/>");a.open=!0}if(d)a.onComplete=d;e.each(function(){c.data(this,T,c.extend({},c.data(this,T)||K,a))}).addClass(w);(c.isFunction(a.open)&&a.open.call(e)||a.open)&&k(e[0])}return e},E.position=function(a,c){function e(a){ea[0].style.width=ia[0].style.width=d[0].style.width=a.style.width;d[0].style.height=Z[0].style.height=ca[0].style.height=a.style.height}var f=0,g=0,k=r.offset(),j,m;F.unbind("resize."+B);r.css({top:-9E4,left:-9E4});j=F.scrollTop();m=F.scrollLeft();i.fixed&&!L?(k.top-=j,k.left-=
m,r.css({position:"fixed"})):(f=j,g=m,r.css({position:"absolute"}));g=!1!==i.right?g+Math.max(F.width()-i.w-da-ma-p(i.right,"x"),0):!1!==i.left?g+p(i.left,"x"):g+Math.round(Math.max(F.width()-i.w-da-ma,0)/2);f=!1!==i.bottom?f+Math.max(F.height()-i.h-ga-la-p(i.bottom,"y"),0):!1!==i.top?f+p(i.top,"y"):f+Math.round(Math.max(F.height()-i.h-ga-la,0)/2);r.css({top:k.top,left:k.left});a=r.width()===i.w+da&&r.height()===i.h+ga?0:a||0;z[0].style.width=z[0].style.height="9999px";r.dequeue().animate({width:i.w+
da,height:i.h+ga,top:f,left:g},{duration:a,complete:function(){e(this);ta=!1;z[0].style.width=i.w+da+ma+"px";z[0].style.height=i.h+ga+la+"px";i.reposition&&setTimeout(function(){F.bind("resize."+B,E.position)},1);c&&c()},step:function(){e(this)}})},E.resize=function(a){if(ha){a=a||{};if(a.width)i.w=p(a.width,"x")-da-ma;if(a.innerWidth)i.w=p(a.innerWidth,"x");G.css({width:i.w});if(a.height)i.h=p(a.height,"y")-ga-la;if(a.innerHeight)i.h=p(a.innerHeight,"y");if(!a.innerHeight&&!a.height)G.css({height:"auto"}),
i.h=G.height();G.css({height:i.h});E.position("none"===i.transition?0:i.speed)}},E.prep=function(e){if(ha){var g,k="none"===i.transition?0:i.speed;G.remove();G=n(J,"LoadedContent").append(e);G.hide().appendTo(H.show()).css({width:function(){i.w=i.w||G.width();i.w=i.mw&&i.mw<i.w?i.mw:i.w;return i.w}(),overflow:i.scrolling?"auto":"hidden"}).css({height:function(){i.h=i.h||G.height();i.h=i.mh&&i.mh<i.h?i.mh:i.h;return i.h}()}).prependTo(d);H.hide();c(M).css({"float":"none"});if(L)c("select").not(r.find("select")).filter(function(){return"hidden"!==
this.style.visibility}).css({visibility:"hidden"}).one(y,function(){this.style.visibility="inherit"});g=function(){function d(){Q&&r[0].style.removeAttribute("filter")}var e,g;e=P.length;var j,m,p;if(ha){m=function(){clearTimeout(Ga);na.hide();f(O,i.onComplete)};Q&&M&&G.fadeIn(100);oa.html(i.title).add(G).show();if(1<e){if("string"===typeof i.current&&aa.html(i.current.replace("{current}",V+1).replace("{total}",e)).show(),I[i.loop||V<e-1?"show":"hide"]().html(i.next),qa[i.loop||V?"show":"hide"]().html(i.previous),
i.slideshow&&X.show(),i.preloading)for(e=[N(-1),N(1)];g=P[e.pop()];)if((p=c.data(g,T))&&p.href?(p=p.href,c.isFunction(p)&&(p=p.call(g))):p=g.href,a(p))g=new Image,g.src=p}else sa.hide();if(i.iframe){j=n("iframe")[0];"frameBorder"in j&&(j.frameBorder=0);"allowTransparency"in j&&(j.allowTransparency="true");j.name=B+ +new Date;if(i.fastIframe)m();else c(j).one("load",m);j.src=i.href;if(!i.scrolling)j.scrolling="no";c(j).addClass(B+"Iframe").appendTo(G).one(R,function(){j.src="//about:blank"})}else m();
"fade"===i.transition?r.fadeTo(k,1,d):d()}};"fade"===i.transition?r.fadeTo(k,0,function(){E.position(0,g)}):E.position(k,g)}},E.load=function(d){var g,j,k=E.prep;ta=!0;M=!1;Y=P[V];d||e();f(R);f(pa,i.onLoad);i.h=i.height?p(i.height,"y")-ga-la:i.innerHeight&&p(i.innerHeight,"y");i.w=i.width?p(i.width,"x")-da-ma:i.innerWidth&&p(i.innerWidth,"x");i.mw=i.w;i.mh=i.h;if(i.maxWidth)i.mw=p(i.maxWidth,"x")-da-ma,i.mw=i.w&&i.w<i.mw?i.w:i.mw;if(i.maxHeight)i.mh=p(i.maxHeight,"y")-ga-la,i.mh=i.h&&i.h<i.mh?i.h:
i.mh;g=i.href;Ga=setTimeout(function(){na.show()},100);i.inline?(n(J).hide().insertBefore(c(g)[0]).one(R,function(){c(this).replaceWith(G.children())}),k(c(g))):i.iframe?k(" "):i.html?k(i.html):a(g)?(c(M=new Image).addClass(B+"Photo").error(function(){i.title=!1;k(n(J,"Error").html(i.imgError))}).load(function(){var a;M.onload=null;i.scalePhotos&&(j=function(){M.height-=M.height*a;M.width-=M.width*a;M.style.width=M.width+"px";M.style.height=M.height+"px"},i.mw&&M.width>i.mw&&(a=(M.width-i.mw)/M.width,
j()),i.mh&&M.height>i.mh&&(a=(M.height-i.mh)/M.height,j()));if(i.h)M.style.marginTop=Math.max(i.h-M.height,0)/2+"px";if(P[1]&&(i.loop||P[V+1]))M.style.cursor="pointer",M.onclick=function(){E.next()};if(Q)M.style.msInterpolationMode="bicubic";setTimeout(function(){k(M)},1)}),setTimeout(function(){M.src=g},1)):g&&H.load(g,i.data,function(a,d){k("error"===d?n(J,"Error").html(i.xhrError):c(this).contents())})},E.next=function(){if(!ta&&P[1]&&(i.loop||P[V+1]))V=N(1),E.load()},E.prev=function(){if(!ta&&
P[1]&&(i.loop||V))V=N(-1),E.load()},E.close=function(){ha&&!Ba&&(Ba=!0,ha=!1,f(y,i.onCleanup),F.unbind("."+B+" ."+U),m.fadeTo(200,0),r.stop().fadeTo(300,0,function(){r.add(m).css({opacity:1,cursor:"auto"}).hide();f(R);G.remove();setTimeout(function(){Ba=!1;f(C,i.onClosed)},1)}))},E.remove=function(){c([]).add(r).add(m).remove();r=null;c("."+w).removeData(T).removeClass(w).die()},E.element=function(){return c(Y)},E.settings=K})(jQuery,document,this);(function(c){function j(c,a){var e=decodeURIComponent(c);if(e.length<=a)return c;var f=e.substring(0,a-1).lastIndexOf(" ");return e=encodeURIComponent(e.substring(0,f))+"\u2026"}function s(j){return c('meta[name="'+j+'"]').attr("content")||""}function n(){var j=s("DC.title"),a=s("DC.creator"),j=0<j.length&&0<a.length?j+(" - "+a):c("title").text();return encodeURIComponent(j)}function N(){var j=document.location.href,a=c("link[rel=canonical]").attr("href");a&&0<a.length&&(0>a.indexOf("http")&&(a=document.location.protocol+
"//"+document.location.host+a),j=a);return j}c.fn.socialSharePrivacy=function(p){var a=c.extend(!0,{services:{facebook:{status:"on",dummy_img:"socialshareprivacy/images/dummy_facebook.png",txt_info:"2 Klicks f&uuml;r mehr Datenschutz: Erst wenn Sie hier klicken, wird der Button aktiv und Sie k&ouml;nnen Ihre Empfehlung an Facebook senden. Schon beim Aktivieren werden Daten an Dritte &uuml;bertragen &ndash; siehe <em>i</em>.",txt_fb_off:"nicht mit Facebook verbunden",txt_fb_on:"mit Facebook verbunden",
perma_option:"on",display_name:"Facebook",referrer_track:"",language:"de_DE",action:"recommend"},twitter:{status:"on",dummy_img:"socialshareprivacy/images/dummy_twitter.png",txt_info:"2 Klicks f&uuml;r mehr Datenschutz: Erst wenn Sie hier klicken, wird der Button aktiv und Sie k&ouml;nnen Ihre Empfehlung an Twitter senden. Schon beim Aktivieren werden Daten an Dritte &uuml;bertragen &ndash; siehe <em>i</em>.",txt_twitter_off:"nicht mit Twitter verbunden",txt_twitter_on:"mit Twitter verbunden",perma_option:"on",
display_name:"Twitter",referrer_track:"",tweet_text:n,language:"en"},gplus:{status:"on",dummy_img:"socialshareprivacy/images/dummy_gplus.png",txt_info:"2 Klicks f&uuml;r mehr Datenschutz: Erst wenn Sie hier klicken, wird der Button aktiv und Sie k&ouml;nnen Ihre Empfehlung an Google+ senden. Schon beim Aktivieren werden Daten an Dritte &uuml;bertragen &ndash; siehe <em>i</em>.",txt_gplus_off:"nicht mit Google+ verbunden",txt_gplus_on:"mit Google+ verbunden",perma_option:"on",display_name:"Google+",
referrer_track:"",language:"de"}},info_link:"http://www.heise.de/ct/artikel/2-Klicks-fuer-mehr-Datenschutz-1333879.html",txt_help:"Wenn Sie diese Felder durch einen Klick aktivieren, werden Informationen an Facebook, Twitter oder Google in die USA &uuml;bertragen und unter Umst&auml;nden auch dort gespeichert. N&auml;heres erfahren Sie durch einen Klick auf das <em>i</em>.",settings_perma:"Dauerhaft aktivieren und Daten&uuml;ber&shy;tragung zustimmen:",cookie_path:"/",cookie_domain:document.location.host,
cookie_expires:"365",css_path:"socialshareprivacy/socialshareprivacy.css",uri:N},p),e="on"===a.services.facebook.status,f="on"===a.services.twitter.status,g="on"===a.services.gplus.status;if(e||f||g)return 0<a.css_path.length&&(document.createStyleSheet?document.createStyleSheet(a.css_path):c("head").append('<link rel="stylesheet" type="text/css" href="'+a.css_path+'" />')),this.each(function(){c(this).prepend('<ul class="social_share_privacy_area"></ul>');var k=c(".social_share_privacy_area",this),
n=a.uri;"function"===typeof n&&(n=n(k));if(e){var p=encodeURIComponent(n+a.services.facebook.referrer_track),s='<iframe src="http://www.facebook.com/plugins/like.php?locale='+a.services.facebook.language+"&amp;href="+p+"&amp;send=false&amp;layout=button_count&amp;width=120&amp;show_faces=false&amp;action="+a.services.facebook.action+'&amp;colorscheme=light&amp;font&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:145px; height:21px;" allowTransparency="true"></iframe>',
N='<img src="'+a.services.facebook.dummy_img+'" alt="Facebook &quot;Like&quot;-Dummy" class="fb_like_privacy_dummy" />';k.append('<li class="facebook help_info"><span class="info">'+a.services.facebook.txt_info+'</span><span class="switch off">'+a.services.facebook.txt_fb_off+'</span><div class="fb_like dummy_btn">'+N+"</div></li>");var B=c("li.facebook",k);c("li.facebook div.fb_like img.fb_like_privacy_dummy,li.facebook span.switch",k).live("click",function(){B.find("span.switch").hasClass("off")?
(B.addClass("info_off"),B.find("span.switch").addClass("on").removeClass("off").html(a.services.facebook.txt_fb_on),B.find("img.fb_like_privacy_dummy").replaceWith(s)):(B.removeClass("info_off"),B.find("span.switch").addClass("off").removeClass("on").html(a.services.facebook.txt_fb_off),B.find(".fb_like").html(N))})}if(f){p=a.services.twitter.tweet_text;"function"===typeof p&&(p=p());var p=j(p,"120"),w=encodeURIComponent(n+a.services.twitter.referrer_track),A=encodeURIComponent(n),pa='<iframe allowtransparency="true" frameborder="0" scrolling="no" src="http://platform.twitter.com/widgets/tweet_button.html?url='+
w+"&amp;counturl="+A+"&amp;text="+p+"&amp;count=horizontal&amp;lang="+a.services.twitter.language+'" style="width:130px; height:25px;"></iframe>',O='<img src="'+a.services.twitter.dummy_img+'" alt="&quot;Tweet this&quot;-Dummy" class="tweet_this_dummy" />';k.append('<li class="twitter help_info"><span class="info">'+a.services.twitter.txt_info+'</span><span class="switch off">'+a.services.twitter.txt_twitter_off+'</span><div class="tweet dummy_btn">'+O+"</div></li>");var y=c("li.twitter",k);c("li.twitter div.tweet img,li.twitter span.switch",
k).live("click",function(){y.find("span.switch").hasClass("off")?(y.addClass("info_off"),y.find("span.switch").addClass("on").removeClass("off").html(a.services.twitter.txt_twitter_on),y.find("img.tweet_this_dummy").replaceWith(pa)):(y.removeClass("info_off"),y.find("span.switch").addClass("off").removeClass("on").html(a.services.twitter.txt_twitter_off),y.find(".tweet").html(O))})}if(g){var C='<div class="g-plusone" data-size="medium" data-href="'+(n+a.services.gplus.referrer_track)+'"></div><script type="text/javascript">window.___gcfg = {lang: "'+
a.services.gplus.language+'"}; (function() { var po = document.createElement("script"); po.type = "text/javascript"; po.async = true; po.src = "https://apis.google.com/js/plusone.js"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(po, s); })(); <\/script>',R='<img src="'+a.services.gplus.dummy_img+'" alt="&quot;Google+1&quot;-Dummy" class="gplus_one_dummy" />';k.append('<li class="gplus help_info"><span class="info">'+a.services.gplus.txt_info+'</span><span class="switch off">'+
a.services.gplus.txt_gplus_off+'</span><div class="gplusone dummy_btn">'+R+"</div></li>");var Q=c("li.gplus",k);c("li.gplus div.gplusone img,li.gplus span.switch",k).live("click",function(){Q.find("span.switch").hasClass("off")?(Q.addClass("info_off"),Q.find("span.switch").addClass("on").removeClass("off").html(a.services.gplus.txt_gplus_on),Q.find("img.gplus_one_dummy").replaceWith(C)):(Q.removeClass("info_off"),Q.find("span.switch").addClass("off").removeClass("on").html(a.services.gplus.txt_gplus_off),
Q.find(".gplusone").html(R))})}k.append('<li class="settings_info"><div class="settings_info_menu off perma_option_off"><a href="'+a.info_link+'"><span class="help_info icon"><span class="info">'+a.txt_help+"</span></span></a></div></li>");c(".help_info:not(.info_off)",k).live("mouseenter",function(){var a=c(this),d=window.setTimeout(function(){c(a).addClass("display")},500);c(this).data("timeout_id",d)});c(".help_info",k).live("mouseleave",function(){var a=c(this).data("timeout_id");window.clearTimeout(a);
c(this).hasClass("display")&&c(this).removeClass("display")});n="on"===a.services.facebook.perma_option;p="on"===a.services.twitter.perma_option;w="on"===a.services.gplus.perma_option;if((e&&n||f&&p||g&&w)&&(!c.browser.msie||c.browser.msie&&7<c.browser.version)){for(var L=document.cookie.split(";"),A="{",U=0;U<L.length;U+=1){var m=L[U].split("="),A=A+('"'+c.trim(m[0])+'":"'+c.trim(m[1])+'"');U<L.length-1&&(A+=",")}var A=JSON.parse(A+"}"),r=c("li.settings_info",k);r.find(".settings_info_menu").removeClass("perma_option_off");
r.find(".settings_info_menu").append('<span class="settings">Einstellungen</span><form><fieldset><legend>'+a.settings_perma+"</legend></fieldset></form>");e&&n&&(L="perma_on"===A.socialSharePrivacy_facebook?' checked="checked"':"",r.find("form fieldset").append('<input type="checkbox" name="perma_status_facebook" id="perma_status_facebook"'+L+' /><label for="perma_status_facebook">'+a.services.facebook.display_name+"</label>"));f&&p&&(L="perma_on"===A.socialSharePrivacy_twitter?' checked="checked"':
"",r.find("form fieldset").append('<input type="checkbox" name="perma_status_twitter" id="perma_status_twitter"'+L+' /><label for="perma_status_twitter">'+a.services.twitter.display_name+"</label>"));g&&w&&(L="perma_on"===A.socialSharePrivacy_gplus?' checked="checked"':"",r.find("form fieldset").append('<input type="checkbox" name="perma_status_gplus" id="perma_status_gplus"'+L+' /><label for="perma_status_gplus">'+a.services.gplus.display_name+"</label>"));r.find("span.settings").css("cursor","pointer");
c(r.find("span.settings"),k).live("mouseenter",function(){var a=window.setTimeout(function(){r.find(".settings_info_menu").removeClass("off").addClass("on")},500);c(this).data("timeout_id",a)});c(r,k).live("mouseleave",function(){var a=c(this).data("timeout_id");window.clearTimeout(a);r.find(".settings_info_menu").removeClass("on").addClass("off")});c(r.find("fieldset input")).live("click",function(e){var d=e.target.id,f="socialSharePrivacy_"+d.substr(d.lastIndexOf("_")+1,d.length);if(c("#"+e.target.id+
":checked").length){var e=a.cookie_expires,g=a.cookie_path,j=a.cookie_domain,m=new Date;m.setTime(m.getTime()+864E5*e);document.cookie=f+"=perma_on; expires="+m.toUTCString()+"; path="+g+"; domain="+j;c("form fieldset label[for="+d+"]",k).addClass("checked")}else e=a.cookie_path,g=a.cookie_domain,j=new Date,j.setTime(j.getTime()-100),document.cookie=f+"=perma_on; expires="+j.toUTCString()+"; path="+e+"; domain="+g,c("form fieldset label[for="+d+"]",k).removeClass("checked")});e&&n&&"perma_on"===A.socialSharePrivacy_facebook&&
c("li.facebook span.switch",k).click();f&&p&&"perma_on"===A.socialSharePrivacy_twitter&&c("li.twitter span.switch",k).click();g&&w&&"perma_on"===A.socialSharePrivacy_gplus&&c("li.gplus span.switch",k).click()}})}})(jQuery);(function(c){var j=function(j){this.element=c(j)};j.prototype={constructor:j,show:function(){var j=this.element,s=j.closest("ul:not(.dropdown-menu)"),p=j.attr("data-target"),a,e;p||(p=(p=j.attr("href"))&&p.replace(/.*(?=#[^\s]*$)/,""));j.parent("li").hasClass("active")||(a=s.find(".active:last a")[0],e=c.Event("show",{relatedTarget:a}),j.trigger(e),e.isDefaultPrevented()||(p=c(p),this.activate(j.parent("li"),s),this.activate(p,p.parent(),function(){j.trigger({type:"shown",relatedTarget:a})})))},activate:function(j,
s,p){function a(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");j.addClass("active");f?j.addClass("in"):j.removeClass("fade");j.parent(".dropdown-menu")&&j.closest("li.dropdown").addClass("active");p&&p()}var e=s.find("> .active"),f=p&&c.support.transition&&e.hasClass("fade");f?e.one(c.support.transition.end,a):a();e.removeClass("in")}};var s=c.fn.tab;c.fn.tab=function(n){return this.each(function(){var s=c(this),p=s.data("tab");p||s.data("tab",p=new j(this));if("string"==
typeof n)p[n]()})};c.fn.tab.Constructor=j;c.fn.tab.noConflict=function(){c.fn.tab=s;return this};c(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(j){j.preventDefault();c(this).tab("show")})})(window.jQuery);var BO={init:{}};jQuery(function(c){for(var j in BO.init)BO.init[j].apply(window,[c])});BO.init.horizontal_navi=function(c){c(".content-navi-top ul.level1 li").hover(function(){c(this).addClass("hover");c("ul:first",this).css("visibility","visible")},function(){c(this).removeClass("hover");c("ul:first",this).css("visibility","hidden")})};BO.init.balcony=function(c){c(".balconycontainer").each(function(){var c=BO.balcony.container();$(this).find(".nav li a").each(function(){var s=BO.balcony.link({Element:this});c.add(s)});c.start();c.mainStatus="on";c.initToggler($(this).find(".toggle-play"))})};BO.balcony={};BO.balcony.fadeTime=400;BO.balcony.intervalTime=5E3;
BO.balcony.container=function(c){c=c||{};c.activeElement=null;c.timer=null;c.Elements=[];c.toggleElement=null;c.mainStatus=null;c.toggleMainstatus=function(){"off"===c.mainStatus?(c.mainStatus="on",c.start()):(c.stop(),c.mainStatus="off");return c.mainStatus};c.setTogglerStatus=function(j){"on"===j?(c.toggleElement.addClass("status-on"),c.toggleElement.removeClass("status-off"),c.toggleElement.html("Animation unterbrechen"),c.toggleElement.attr("title","Animation unterbrechen")):(c.toggleElement.addClass("status-off"),
c.toggleElement.removeClass("status-on"),c.toggleElement.html("Animation abspielen"),c.toggleElement.attr("title","Animation abspielen"))};c.initToggler=function(j){c.toggleElement=j;c.setTogglerStatus(c.mainStatus);j.on("click",function(){var j=c.toggleMainstatus();c.setTogglerStatus(j)})};c.add=function(j){null===c.activeElement?(c.activeElement=BO.balcony.link({Element:jQuery('<a href="#balconydummy"></a>')[0]}),c.activate(j)):c.deactivate(j);c.Elements.push(j);jQuery(j.Element).on("click",function(){c.activate(j);
return!1}).on("mouseout",c.start).on("mouseover",c.stop);j.$teaser.on("mouseout",c.start).on("mouseover",c.stop)};c.activate=function(j){c.stop();c.deactivate(c.activeElement);c.activeElement=j;"undefined"!=typeof j&&j.activate();c.start()};c.deactivate=function(c){"undefined"!=typeof c&&c.deactivate()};c.next=function(){for(var j=c.Elements.slice(0),s=c.Elements.slice(0,1).pop(),n;n=j.shift();)if(n===c.activeElement)return(n=j.shift())?n:s;return s};c.rotate=function(){c.activate(c.next())};c.start=
function(){if("off"!=c.mainStatus)c.stop(),c.timer=setTimeout(c.rotate,BO.balcony.intervalTime)};c.stop=function(){if("off"!=c.mainStatus)null!==c.timer&&clearTimeout(c.timer),c.timer=null};return c};
BO.balcony.link=function(c){c=c||{};c.hidden=!1;c.id=c.Element.href.match(/#(.*)/)[1];c.$teaser=jQuery("#"+c.id);c.activate=function(){jQuery(c.Element).parents("li").addClass("active");c.hidden&&c.$teaser.stop().fadeIn(BO.balcony.fadeTime).addClass("active");c.hidden=!1};c.deactivate=function(){jQuery(c.Element).parents("li").removeClass("active");c.hidden||c.$teaser.stop().fadeOut(BO.balcony.fadeTime).removeClass("active");c.hidden=!0};return c};BO.init.socialshare=function(c){var j={services:{facebook:{status:"on",dummy_img:"/i9f/css/images/dummy_facebook.png"},twitter:{status:"on",dummy_img:"/i9f/css/images/dummy_twitter.png"},gplus:{status:"on",dummy_img:"/i9f/css/images/dummy_gplus.png"}},info_link:"http://www.berlin.de/wir-ueber-uns-be/agb/pp/#socialplugins",css_path:""};0<c("#socialshare").length&&c("#socialshare").socialSharePrivacy(j)};BO.init.mediaelement=function(c){"undefined"!=typeof jQuery.fn.mediaelementplayer&&jQuery("audio,video").mediaelementplayer({success:function(j,s){c("#"+s.id+"-mode").attr("title","play mode: "+j.pluginType)}})};BO.init.colorbox=function(c){c("a.gallery").each(function(j,s){c(s).colorbox({preload:"false",transition:"none",innerWidth:"800px",innerHeight:"600px",rel:c(this).attr("rel"),onComplete:function(){c("#cboxTitle").css({"background-color":"#FFFFFF"})},fixed:!0})});c("a.picsgallery").each(function(j,s){c(s).colorbox({preload:"false",transition:"none",innerWidth:"800px",innerHeight:"600px",rel:c(this).attr("rel"),fixed:"true",onComplete:function(){var j=c("#cboxCurrent").text().replace("Bild"," ").replace("von",
"/");c("#cboxCurrent").text(j);c("#cboxTitle").css({"background-color":"#FFFFFF",width:"600px","padding-left":"100px","padding-right":"100px"});var j=c(".cboxPhoto").css("width"),s=c(".cboxPhoto").css("height");c(".cboxPhoto").attr("width",j);c(".cboxPhoto").attr("height",s);j=c(this).closest(".bildergalerie").find(".title").text();c("#cboxContent .gal-title").length?c("#cboxContent .gal-title").text(j):c("#cboxContent").prepend('<h1 class="gal-title">'+j+"</h1>")}})})};BO.init.carousel=function(c){c(".carousel").carousel({interval:!1})};BO.init.mypopover=function(c){c("#zentral-popover-link").popover({html:!0,placement:"bottom",toggle:"popover",title:"",content:function(){return c("#popover-login-content").html()}});c(":not(.container)").on("click",function(j){c(".popover-link").each(function(){!c(this).is(j.target)&&0===c(this).has(j.target).length&&0===c(".popover").has(j.target).length&&c(this).popover("hide")})});c(".popover-container .event-popover").popover({html:!0,trigger:"hover",placement:"bottom",animation:!1}).on({show:function(j){var s=
c(this);s.data("hoveringPopover",!0);s.data("waitingForPopoverTO")&&j.stopImmediatePropagation()},hide:function(j){var s=c(this);if(s.data("forceHidePopover"))return s.data("forceHidePopover",!1),!0;j.stopImmediatePropagation();clearTimeout(s.data("popoverTO"));s.data("hoveringPopover",!1);s.data("waitingForPopoverTO",!0);s.data("popoverTO",setTimeout(function(){s.data("hoveringPopover")||(s.data("forceHidePopover",!0),s.data("waitingForPopoverTO",!1),s.popover("hide"))},50));return!1}}).on({show:function(){},
hide:function(){}})};BO.init.datepicker=function(c){jQuery(function(c){c.datepicker.regional.de={closeText:"Schlie\u00dfen",prevText:"&#x3C;Zur\u00fcck",nextText:"Vor&#x3E;",currentText:"Heute",monthNames:"Januar,Februar,M\u00e4rz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember".split(","),monthNamesShort:"Jan,Feb,M\u00e4r,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez".split(","),dayNames:"Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag".split(","),dayNamesShort:"So,Mo,Di,Mi,Do,Fr,Sa".split(","),dayNamesMin:"So,Mo,Di,Mi,Do,Fr,Sa".split(","),
weekHeader:"KW",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""};c.datepicker.setDefaults(c.datepicker.regional.de)});c(".datepicker").datepicker({dateFormat:"dd.mm.yy"})};

/* STS - gepatch für BO um auch transitions im IE7/8/9 zu unterstützen */

/* ========================================================================
* Bootstrap: transition.js v3.0.0
* http://twbs.github.com/bootstrap/javascript.html#transitions
* ========================================================================
* Copyright 2013 Twitter, Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* ======================================================================== */


+function ($) { "use strict";

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd'
    , 'MozTransition' : 'transitionend'
    , 'OTransition' : 'oTransitionEnd otransitionend'
    , 'transition' : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(window.jQuery);


/* STS - gepatch für BO um auch transitions im IE7/8/9 zu unterstützen */

/* ========================================================================
 * Bootstrap: carousel.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#carousel
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.DEFAULTS = {
    interval: 5000
  , pause: 'hover'
  }

  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active')
    this.$items  = this.$active.parent().children()

    return this.$items.index(this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if ($.support.transition && this.$element.find('.next, .prev').length && $.support.transition.end) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    this.sliding = true

    isCycling && this.pause()

    $next = $next.length ? $next : this.$element.find('.item')[fallback]()

    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })

    if ($next.hasClass('active')) return

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      this.$element.one('slid', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
        $nextIndicator && $nextIndicator.addClass('active')
      })
    }

    if ($.support.transition && this.$element.hasClass('slide')) {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
        .emulateTransitionEnd(600)
    } else if(this.$element.hasClass('slide')) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $active.animate({left: (direction == 'right' ? '100%' : '-100%')}, 600, function(){
            $active.removeClass('active')
            that.sliding = false
            setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
        $next.addClass(type).css({left: (direction == 'right' ? '-100%' : '100%')}).animate({left: 0}, 600,  function(){
            $next.removeClass(type).addClass('active')
        })
    } else {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger('slid')
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

}(window.jQuery);

/* ===========================================================
 * bootstrap-tooltip.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut
        , triggers
        , trigger
        , i

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      triggers = this.options.trigger.split(' ')

      for (i = triggers.length; i--;) {
        trigger = triggers[i]
        if (trigger == 'click') {
          this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
        } else if (trigger != 'manual') {
          eventIn = trigger == 'hover' ? 'mouseenter' : 'focus'
          eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'
          this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
          this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
        }
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, this.$element.data(), options)

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var defaults = $.fn[this.type].defaults
        , options = {}
        , self

      this._options && $.each(this._options, function (key, value) {
        if (defaults[key] != value) options[key] = value
      }, this)

      self = $(e.currentTarget)[this.type](options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $tip
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp
        , e = $.Event('show')

      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        $tip
          .detach()
          .css({ top: 0, left: 0, display: 'block' })

        this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

        pos = this.getPosition()

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        this.applyPlacement(tp, placement)
        this.$element.trigger('shown')
      }
    }

  , applyPlacement: function(offset, placement){
      var $tip = this.tip()
        , width = $tip[0].offsetWidth
        , height = $tip[0].offsetHeight
        , actualWidth
        , actualHeight
        , delta
        , replace

      $tip
        .offset(offset)
        .addClass(placement)
        .addClass('in')

      actualWidth = $tip[0].offsetWidth
      actualHeight = $tip[0].offsetHeight

      if (placement == 'top' && actualHeight != height) {
        offset.top = offset.top + height - actualHeight
        replace = true
      }

      if (placement == 'bottom' || placement == 'top') {
        delta = 0

        if (offset.left < 0){
          delta = offset.left * -2
          offset.left = 0
          $tip.offset(offset)
          actualWidth = $tip[0].offsetWidth
          actualHeight = $tip[0].offsetHeight
        }

        this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
      } else {
        this.replaceArrow(actualHeight - height, actualHeight, 'top')
      }

      if (replace) $tip.offset(offset)
    }

  , replaceArrow: function(delta, dimension, position){
      this
        .arrow()
        .css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
    }

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()

      $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()
        , e = $.Event('hide')

      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).detach()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.detach()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.detach()

      this.$element.trigger('hidden')

      return this
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function () {
      var el = this.$element[0]
      return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
        width: el.offsetWidth
      , height: el.offsetHeight
      }, this.$element.offset())
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , arrow: function(){
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function (e) {
      var self = e ? $(e.currentTarget)[this.type](this._options).data(this.type) : this
      self.tip().hasClass('in') ? self.hide() : self.show()
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  var old = $.fn.tooltip

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }


 /* TOOLTIP NO CONFLICT
  * =================== */

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);
/* ===========================================================
 * bootstrap-popover.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* POPOVER PUBLIC CLASS DEFINITION
  * =============================== */

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }


  /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

    constructor: Popover

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()
        , content = this.getContent()

      $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
      $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

      $tip.removeClass('fade top bottom left right in')
    }

  , hasContent: function () {
      return this.getTitle() || this.getContent()
    }

  , getContent: function () {
      var content
        , $e = this.$element
        , o = this.options

      content = (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)
        || $e.attr('data-content')

      return content
    }

  , tip: function () {
      if (!this.$tip) {
        this.$tip = $(this.options.template)
      }
      return this.$tip
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  })


 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('popover')
        , options = typeof option == 'object' && option
      if (!data) $this.data('popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover

  $.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


 /* POPOVER NO CONFLICT
  * =================== */

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(window.jQuery);
/* =============================================================
 * bootstrap-collapse.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* COLLAPSE PUBLIC CLASS DEFINITION
  * ================================ */

  var Collapse = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.collapse.defaults, options)

    if (this.options.parent) {
      this.$parent = $(this.options.parent)
    }

    this.options.toggle && this.toggle()
  }

  Collapse.prototype = {

    constructor: Collapse

  , dimension: function () {
      var hasWidth = this.$element.hasClass('width')
      return hasWidth ? 'width' : 'height'
    }

  , show: function () {
      var dimension
        , scroll
        , actives
        , hasData

      if (this.transitioning || this.$element.hasClass('in')) return

      dimension = this.dimension()
      scroll = $.camelCase(['scroll', dimension].join('-'))
      actives = this.$parent && this.$parent.find('> .accordion-group > .in')

      if (actives && actives.length) {
        hasData = actives.data('collapse')
        if (hasData && hasData.transitioning) return
        actives.collapse('hide')
        hasData || actives.data('collapse', null)
      }

      this.$element[dimension](0)
      this.transition('addClass', $.Event('show'), 'shown')
      $.support.transition && this.$element[dimension](this.$element[0][scroll])
    }

  , hide: function () {
      var dimension
      if (this.transitioning || !this.$element.hasClass('in')) return
      dimension = this.dimension()
      this.reset(this.$element[dimension]())
      this.transition('removeClass', $.Event('hide'), 'hidden')
      this.$element[dimension](0)
    }

  , reset: function (size) {
      var dimension = this.dimension()

      this.$element
        .removeClass('collapse')
        [dimension](size || 'auto')
        [0].offsetWidth

      this.$element[size !== null ? 'addClass' : 'removeClass']('collapse')

      return this
    }

  , transition: function (method, startEvent, completeEvent) {
      var that = this
        , complete = function () {
            if (startEvent.type == 'show') that.reset()
            that.transitioning = 0
            that.$element.trigger(completeEvent)
          }

      this.$element.trigger(startEvent)

      if (startEvent.isDefaultPrevented()) return

      this.transitioning = 1

      this.$element[method]('in')

      $.support.transition && this.$element.hasClass('collapse') ?
        this.$element.one($.support.transition.end, complete) :
        complete()
    }

  , toggle: function () {
      this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }

  }


 /* COLLAPSE PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('collapse')
        , options = $.extend({}, $.fn.collapse.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.defaults = {
    toggle: true
  }

  $.fn.collapse.Constructor = Collapse


 /* COLLAPSE NO CONFLICT
  * ==================== */

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


 /* COLLAPSE DATA-API
  * ================= */

  $(document).on('click.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this = $(this), href
      , target = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
      , option = $(target).data('collapse') ? 'toggle' : $this.data()
    $this[$(target).hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    $(target).collapse(option)
  })

}(window.jQuery);