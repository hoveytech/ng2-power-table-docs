/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

!function(){function a(b){if(!(this instanceof a))return null==b?new a:new a(b);if("function"==typeof b)return this.random=b,this;arguments.length&&(this.seed=0);for(var c=0;c<arguments.length;c++){var d=0;if("[object String]"===Object.prototype.toString.call(arguments[c]))for(var e=0;e<arguments[c].length;e++){for(var f=0,g=0;g<arguments[c].length;g++)f=arguments[c].charCodeAt(g)+(f<<6)+(f<<16)-f;d+=f}else d=arguments[c];this.seed+=(arguments.length-c)*d}return this.mt=this.mersenne_twister(this.seed),this.bimd5=this.blueimp_md5(),this.random=function(){return this.mt.random(this.seed)},this}function b(a,b){if(a||(a={}),b)for(var c in b)"undefined"==typeof a[c]&&(a[c]=b[c]);return a}function c(a,b){if(a)throw new RangeError(b)}function d(a){return function(){return this.natural(a)}}function e(a,b){for(var c,d=r(a),e=0,f=d.length;f>e;e++)c=d[e],b[c]=a[c]||b[c]}function f(a,b){for(var c=0,d=a.length;d>c;c++)b[c]=a[c]}function g(a,b){var c=Array.isArray(a),d=b||(c?new Array(a.length):{});return c?f(a,d):e(a,d),d}var h=9007199254740992,i=-h,j="0123456789",k="abcdefghijklmnopqrstuvwxyz",l=k.toUpperCase(),m=j+"abcdef",n=Array.prototype.slice;a.prototype.VERSION="1.0.2";var o=function(){throw new Error("No Base64 encoder available.")};!function(){"function"==typeof btoa?o=btoa:"function"==typeof Buffer&&(o=function(a){return new Buffer(a).toString("base64")})}(),a.prototype.bool=function(a){return a=b(a,{likelihood:50}),c(a.likelihood<0||a.likelihood>100,"Chance: Likelihood accepts values from 0 to 100."),100*this.random()<a.likelihood},a.prototype.character=function(a){a=b(a),c(a.alpha&&a.symbols,"Chance: Cannot specify both alpha and symbols.");var d,e,f="!@#$%^&*()[]";return d="lower"===a.casing?k:"upper"===a.casing?l:k+l,e=a.pool?a.pool:a.alpha?d:a.symbols?f:d+j+f,e.charAt(this.natural({max:e.length-1}))},a.prototype.floating=function(a){a=b(a,{fixed:4}),c(a.fixed&&a.precision,"Chance: Cannot specify both fixed and precision.");var d,e=Math.pow(10,a.fixed),f=h/e,g=-f;c(a.min&&a.fixed&&a.min<g,"Chance: Min specified is out of range with fixed. Min should be, at least, "+g),c(a.max&&a.fixed&&a.max>f,"Chance: Max specified is out of range with fixed. Max should be, at most, "+f),a=b(a,{min:g,max:f}),d=this.integer({min:a.min*e,max:a.max*e});var i=(d/e).toFixed(a.fixed);return parseFloat(i)},a.prototype.integer=function(a){return a=b(a,{min:i,max:h}),c(a.min>a.max,"Chance: Min cannot be greater than Max."),Math.floor(this.random()*(a.max-a.min+1)+a.min)},a.prototype.natural=function(a){return a=b(a,{min:0,max:h}),c(a.min<0,"Chance: Min cannot be less than zero."),this.integer(a)},a.prototype.string=function(a){a=b(a,{length:this.natural({min:5,max:20})}),c(a.length<0,"Chance: Length cannot be less than zero.");var d=a.length,e=this.n(this.character,d,a);return e.join("")},a.prototype.capitalize=function(a){return a.charAt(0).toUpperCase()+a.substr(1)},a.prototype.mixin=function(b){for(var c in b)a.prototype[c]=b[c];return this},a.prototype.unique=function(a,b,d){c("function"!=typeof a,"Chance: The first argument must be a function.");for(var e,f=d.comparator||function(a,b){return-1!==a.indexOf(b)},g=[],h=0,i=50*b,j=n.call(arguments,2);g.length<b;){var k=JSON.parse(JSON.stringify(j));if(e=a.apply(this,k),f(g,e)||(g.push(e),h=0),++h>i)throw new RangeError("Chance: num is likely too large for sample set")}return g},a.prototype.n=function(a,b){c("function"!=typeof a,"Chance: The first argument must be a function."),"undefined"==typeof b&&(b=1);var d=b,e=[],f=n.call(arguments,2);for(d=Math.max(0,d),null;d--;null)e.push(a.apply(this,f));return e},a.prototype.pad=function(a,b,c){return c=c||"0",a+="",a.length>=b?a:new Array(b-a.length+1).join(c)+a},a.prototype.pick=function(a,b){if(0===a.length)throw new RangeError("Chance: Cannot pick() from an empty array");return b&&1!==b?this.shuffle(a).slice(0,b):a[this.natural({max:a.length-1})]},a.prototype.pickone=function(a){if(0===a.length)throw new RangeError("Chance: Cannot pickone() from an empty array");return a[this.natural({max:a.length-1})]},a.prototype.pickset=function(a,b){if(0===b)return[];if(0===a.length)throw new RangeError("Chance: Cannot pickset() from an empty array");if(0>b)throw new RangeError("Chance: count must be positive number");return b&&1!==b?this.shuffle(a).slice(0,b):[this.pickone(a)]},a.prototype.shuffle=function(a){for(var b=a.slice(0),c=[],d=0,e=Number(b.length),f=0;e>f;f++)d=this.natural({max:b.length-1}),c[f]=b[d],b.splice(d,1);return c},a.prototype.weighted=function(a,b){if(a.length!==b.length)throw new RangeError("Chance: length of array and weights must match");for(var c=b.length-1;c>=0;--c)b[c]<=0&&(a.splice(c,1),b.splice(c,1));var d,e=b.reduce(function(a,b){return a+b},0),f=this.random()*e,g=0;return b.some(function(b,c){return g+b>=f?(d=a[c],!0):(g+=b,!1)}),d},a.prototype.paragraph=function(a){a=b(a);var c=a.sentences||this.natural({min:3,max:7}),d=this.n(this.sentence,c);return d.join(" ")},a.prototype.sentence=function(a){a=b(a);var c,d=a.words||this.natural({min:12,max:18}),e=a.punctuation,f=this.n(this.word,d);return c=f.join(" "),c=this.capitalize(c),e===!1||/^[\.\?;!:]$/.test(e)||(e="."),e&&(c+=e),c},a.prototype.syllable=function(a){a=b(a);for(var c,d=a.length||this.natural({min:2,max:3}),e="bcdfghjklmnprstvwz",f="aeiou",g=e+f,h="",i=0;d>i;i++)c=0===i?this.character({pool:g}):-1===e.indexOf(c)?this.character({pool:e}):this.character({pool:f}),h+=c;return a.capitalize&&(h=this.capitalize(h)),h},a.prototype.word=function(a){a=b(a),c(a.syllables&&a.length,"Chance: Cannot specify both syllables AND length.");var d=a.syllables||this.natural({min:1,max:3}),e="";if(a.length){do e+=this.syllable();while(e.length<a.length);e=e.substring(0,a.length)}else for(var f=0;d>f;f++)e+=this.syllable();return a.capitalize&&(e=this.capitalize(e)),e},a.prototype.age=function(a){a=b(a);var c;switch(a.type){case"child":c={min:1,max:12};break;case"teen":c={min:13,max:19};break;case"adult":c={min:18,max:65};break;case"senior":c={min:65,max:100};break;case"all":c={min:1,max:100};break;default:c={min:18,max:65}}return this.natural(c)},a.prototype.birthday=function(a){return a=b(a,{year:(new Date).getFullYear()-this.age(a)}),this.date(a)},a.prototype.cpf=function(){var a=this.n(this.natural,9,{max:9}),b=2*a[8]+3*a[7]+4*a[6]+5*a[5]+6*a[4]+7*a[3]+8*a[2]+9*a[1]+10*a[0];b=11-b%11,b>=10&&(b=0);var c=2*b+3*a[8]+4*a[7]+5*a[6]+6*a[5]+7*a[4]+8*a[3]+9*a[2]+10*a[1]+11*a[0];return c=11-c%11,c>=10&&(c=0),""+a[0]+a[1]+a[2]+"."+a[3]+a[4]+a[5]+"."+a[6]+a[7]+a[8]+"-"+b+c},a.prototype.cnpj=function(){var a=this.n(this.natural,12,{max:12}),b=2*a[11]+3*a[10]+4*a[9]+5*a[8]+6*a[7]+7*a[6]+8*a[5]+9*a[4]+2*a[3]+3*a[2]+4*a[1]+5*a[0];b=11-b%11,2>b&&(b=0);var c=2*b+3*a[11]+4*a[10]+5*a[9]+6*a[8]+7*a[7]+8*a[6]+9*a[5]+2*a[4]+3*a[3]+4*a[2]+5*a[1]+6*a[0];return c=11-c%11,2>c&&(c=0),""+a[0]+a[1]+"."+a[2]+a[3]+a[4]+"."+a[5]+a[6]+a[7]+"/"+a[8]+a[9]+a[10]+a[11]+"-"+b+c},a.prototype.first=function(a){return a=b(a,{gender:this.gender(),nationality:"en"}),this.pick(this.get("firstNames")[a.gender.toLowerCase()][a.nationality.toLowerCase()])},a.prototype.gender=function(){return this.pick(["Male","Female"])},a.prototype.last=function(a){return a=b(a,{nationality:"en"}),this.pick(this.get("lastNames")[a.nationality.toLowerCase()])},a.prototype.israelId=function(){for(var a=this.string({pool:"0123456789",length:8}),b=0,c=0;c<a.length;c++){var d=a[c]*(c/2===parseInt(c/2)?1:2);d=this.pad(d,2).toString(),d=parseInt(d[0])+parseInt(d[1]),b+=d}return a+=(10-parseInt(b.toString().slice(-1))).toString().slice(-1)},a.prototype.mrz=function(a){var c=function(a){var b="<ABCDEFGHIJKLMNOPQRSTUVWXYXZ".split(""),c=[7,3,1],d=0;return"string"!=typeof a&&(a=a.toString()),a.split("").forEach(function(a,e){var f=b.indexOf(a);a=-1!==f?0===f?0:f+9:parseInt(a,10),a*=c[e%c.length],d+=a}),d%10},d=function(a){var b=function(a){return new Array(a+1).join("<")},d=["P<",a.issuer,a.last.toUpperCase(),"<<",a.first.toUpperCase(),b(39-(a.last.length+a.first.length+2)),a.passportNumber,c(a.passportNumber),a.nationality,a.dob,c(a.dob),a.gender,a.expiry,c(a.expiry),b(14),c(b(14))].join("");return d+c(d.substr(44,10)+d.substr(57,7)+d.substr(65,7))},e=this;return a=b(a,{first:this.first(),last:this.last(),passportNumber:this.integer({min:1e8,max:999999999}),dob:function(){var a=e.birthday({type:"adult"});return[a.getFullYear().toString().substr(2),e.pad(a.getMonth()+1,2),e.pad(a.getDate(),2)].join("")}(),expiry:function(){var a=new Date;return[(a.getFullYear()+5).toString().substr(2),e.pad(a.getMonth()+1,2),e.pad(a.getDate(),2)].join("")}(),gender:"Female"===this.gender()?"F":"M",issuer:"GBR",nationality:"GBR"}),d(a)},a.prototype.name=function(a){a=b(a);var c,d=this.first(a),e=this.last(a);return c=a.middle?d+" "+this.first(a)+" "+e:a.middle_initial?d+" "+this.character({alpha:!0,casing:"upper"})+". "+e:d+" "+e,a.prefix&&(c=this.prefix(a)+" "+c),a.suffix&&(c=c+" "+this.suffix(a)),c},a.prototype.name_prefixes=function(a){a=a||"all",a=a.toLowerCase();var b=[{name:"Doctor",abbreviation:"Dr."}];return("male"===a||"all"===a)&&b.push({name:"Mister",abbreviation:"Mr."}),("female"===a||"all"===a)&&(b.push({name:"Miss",abbreviation:"Miss"}),b.push({name:"Misses",abbreviation:"Mrs."})),b},a.prototype.prefix=function(a){return this.name_prefix(a)},a.prototype.name_prefix=function(a){return a=b(a,{gender:"all"}),a.full?this.pick(this.name_prefixes(a.gender)).name:this.pick(this.name_prefixes(a.gender)).abbreviation},a.prototype.ssn=function(a){a=b(a,{ssnFour:!1,dashes:!0});var c,d="1234567890",e=a.dashes?"-":"";return c=a.ssnFour?this.string({pool:d,length:4}):this.string({pool:d,length:3})+e+this.string({pool:d,length:2})+e+this.string({pool:d,length:4})},a.prototype.name_suffixes=function(){var a=[{name:"Doctor of Osteopathic Medicine",abbreviation:"D.O."},{name:"Doctor of Philosophy",abbreviation:"Ph.D."},{name:"Esquire",abbreviation:"Esq."},{name:"Junior",abbreviation:"Jr."},{name:"Juris Doctor",abbreviation:"J.D."},{name:"Master of Arts",abbreviation:"M.A."},{name:"Master of Business Administration",abbreviation:"M.B.A."},{name:"Master of Science",abbreviation:"M.S."},{name:"Medical Doctor",abbreviation:"M.D."},{name:"Senior",abbreviation:"Sr."},{name:"The Third",abbreviation:"III"},{name:"The Fourth",abbreviation:"IV"},{name:"Bachelor of Engineering",abbreviation:"B.E"},{name:"Bachelor of Technology",abbreviation:"B.TECH"}];return a},a.prototype.suffix=function(a){return this.name_suffix(a)},a.prototype.name_suffix=function(a){return a=b(a),a.full?this.pick(this.name_suffixes()).name:this.pick(this.name_suffixes()).abbreviation},a.prototype.nationalities=function(){return this.get("nationalities")},a.prototype.nationality=function(){var a=this.pick(this.nationalities());return a.name},a.prototype.android_id=function(){return"APA91"+this.string({pool:"0123456789abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_",length:178})},a.prototype.apple_token=function(){return this.string({pool:"abcdef1234567890",length:64})},a.prototype.wp8_anid2=function(){return o(this.hash({length:32}))},a.prototype.wp7_anid=function(){return"A="+this.guid().replace(/-/g,"").toUpperCase()+"&E="+this.hash({length:3})+"&W="+this.integer({min:0,max:9})},a.prototype.bb_pin=function(){return this.hash({length:8})},a.prototype.avatar=function(a){var c=null,d="//www.gravatar.com/avatar/",e={http:"http",https:"https"},f={bmp:"bmp",gif:"gif",jpg:"jpg",png:"png"},g={404:"404",mm:"mm",identicon:"identicon",monsterid:"monsterid",wavatar:"wavatar",retro:"retro",blank:"blank"},h={g:"g",pg:"pg",r:"r",x:"x"},i={protocol:null,email:null,fileExtension:null,size:null,fallback:null,rating:null};if(a)if("string"==typeof a)i.email=a,a={};else{if("object"!=typeof a)return null;if("Array"===a.constructor)return null}else i.email=this.email(),a={};return i=b(a,i),i.email||(i.email=this.email()),i.protocol=e[i.protocol]?i.protocol+":":"",i.size=parseInt(i.size,0)?i.size:"",i.rating=h[i.rating]?i.rating:"",i.fallback=g[i.fallback]?i.fallback:"",i.fileExtension=f[i.fileExtension]?i.fileExtension:"",c=i.protocol+d+this.bimd5.md5(i.email)+(i.fileExtension?"."+i.fileExtension:"")+(i.size||i.rating||i.fallback?"?":"")+(i.size?"&s="+i.size.toString():"")+(i.rating?"&r="+i.rating:"")+(i.fallback?"&d="+i.fallback:"")},a.prototype.color=function(a){function c(a,b){return[a,a,a].join(b||"")}function d(a){var b=a?"rgba":"rgb",d=a?","+this.floating({min:0,max:1}):"",e=g?c(this.natural({max:255}),","):this.natural({max:255})+","+this.natural({max:255})+","+this.natural({max:255});return b+"("+e+d+")"}function e(a,b,d){var e=d?"#":"",f=g?c(this.hash({length:a})):this.hash({length:b});return e+f}a=b(a,{format:this.pick(["hex","shorthex","rgb","rgba","0x","name"]),grayscale:!1,casing:"lower"});var f,g=a.grayscale;if("hex"===a.format)f=e.call(this,2,6,!0);else if("shorthex"===a.format)f=e.call(this,1,3,!0);else if("rgb"===a.format)f=d.call(this,!1);else if("rgba"===a.format)f=d.call(this,!0);else{if("0x"!==a.format){if("name"===a.format)return this.pick(this.get("colorNames"));throw new RangeError('Invalid format provided. Please provide one of "hex", "shorthex", "rgb", "rgba", "0x" or "name".')}f="0x"+e.call(this,2,6)}return"upper"===a.casing&&(f=f.toUpperCase()),f},a.prototype.domain=function(a){return a=b(a),this.word()+"."+(a.tld||this.tld())},a.prototype.email=function(a){return a=b(a),this.word({length:a.length})+"@"+(a.domain||this.domain())},a.prototype.fbid=function(){return parseInt("10000"+this.natural({max:1e11}),10)},a.prototype.google_analytics=function(){var a=this.pad(this.natural({max:999999}),6),b=this.pad(this.natural({max:99}),2);return"UA-"+a+"-"+b},a.prototype.hashtag=function(){return"#"+this.word()},a.prototype.ip=function(){return this.natural({min:1,max:254})+"."+this.natural({max:255})+"."+this.natural({max:255})+"."+this.natural({min:1,max:254})},a.prototype.ipv6=function(){var a=this.n(this.hash,8,{length:4});return a.join(":")},a.prototype.klout=function(){return this.natural({min:1,max:99})},a.prototype.semver=function(a){a=b(a,{include_prerelease:!0});var c=this.pickone(["^","~","<",">","<=",">=","="]);a.range&&(c=a.range);var d="";return a.include_prerelease&&(d=this.weighted(["","-dev","-beta","-alpha"],[50,10,5,1])),c+this.rpg("3d10").join(".")+d},a.prototype.tlds=function(){return["com","org","edu","gov","co.uk","net","io","ac","ad","ae","af","ag","ai","al","am","an","ao","aq","ar","as","at","au","aw","ax","az","ba","bb","bd","be","bf","bg","bh","bi","bj","bm","bn","bo","bq","br","bs","bt","bv","bw","by","bz","ca","cc","cd","cf","cg","ch","ci","ck","cl","cm","cn","co","cr","cu","cv","cw","cx","cy","cz","de","dj","dk","dm","do","dz","ec","ee","eg","eh","er","es","et","eu","fi","fj","fk","fm","fo","fr","ga","gb","gd","ge","gf","gg","gh","gi","gl","gm","gn","gp","gq","gr","gs","gt","gu","gw","gy","hk","hm","hn","hr","ht","hu","id","ie","il","im","in","io","iq","ir","is","it","je","jm","jo","jp","ke","kg","kh","ki","km","kn","kp","kr","kw","ky","kz","la","lb","lc","li","lk","lr","ls","lt","lu","lv","ly","ma","mc","md","me","mg","mh","mk","ml","mm","mn","mo","mp","mq","mr","ms","mt","mu","mv","mw","mx","my","mz","na","nc","ne","nf","ng","ni","nl","no","np","nr","nu","nz","om","pa","pe","pf","pg","ph","pk","pl","pm","pn","pr","ps","pt","pw","py","qa","re","ro","rs","ru","rw","sa","sb","sc","sd","se","sg","sh","si","sj","sk","sl","sm","sn","so","sr","ss","st","su","sv","sx","sy","sz","tc","td","tf","tg","th","tj","tk","tl","tm","tn","to","tp","tr","tt","tv","tw","tz","ua","ug","uk","us","uy","uz","va","vc","ve","vg","vi","vn","vu","wf","ws","ye","yt","za","zm","zw"]},a.prototype.tld=function(){return this.pick(this.tlds())},a.prototype.twitter=function(){return"@"+this.word()},a.prototype.url=function(a){a=b(a,{protocol:"http",domain:this.domain(a),domain_prefix:"",path:this.word(),extensions:[]});var c=a.extensions.length>0?"."+this.pick(a.extensions):"",d=a.domain_prefix?a.domain_prefix+"."+a.domain:a.domain;return a.protocol+"://"+d+"/"+a.path+c},a.prototype.address=function(a){return a=b(a),this.natural({min:5,max:2e3})+" "+this.street(a)},a.prototype.altitude=function(a){return a=b(a,{fixed:5,min:0,max:8848}),this.floating({min:a.min,max:a.max,fixed:a.fixed})},a.prototype.areacode=function(a){a=b(a,{parens:!0});var c=this.natural({min:2,max:9}).toString()+this.natural({min:0,max:8}).toString()+this.natural({min:0,max:9}).toString();return a.parens?"("+c+")":c},a.prototype.city=function(){return this.capitalize(this.word({syllables:3}))},a.prototype.coordinates=function(a){return this.latitude(a)+", "+this.longitude(a)},a.prototype.countries=function(){return this.get("countries")},a.prototype.country=function(a){a=b(a);var c=this.pick(this.countries());return a.full?c.name:c.abbreviation},a.prototype.depth=function(a){return a=b(a,{fixed:5,min:-10994,max:0}),this.floating({min:a.min,max:a.max,fixed:a.fixed})},a.prototype.geohash=function(a){return a=b(a,{length:7}),this.string({length:a.length,pool:"0123456789bcdefghjkmnpqrstuvwxyz"})},a.prototype.geojson=function(a){return this.latitude(a)+", "+this.longitude(a)+", "+this.altitude(a)},a.prototype.latitude=function(a){return a=b(a,{fixed:5,min:-90,max:90}),this.floating({min:a.min,max:a.max,fixed:a.fixed})},a.prototype.longitude=function(a){return a=b(a,{fixed:5,min:-180,max:180}),this.floating({min:a.min,max:a.max,fixed:a.fixed})},a.prototype.phone=function(a){var c,d=this,e=function(a){var b=[];return a.sections.forEach(function(a){b.push(d.string({pool:"0123456789",length:a}))}),a.area+b.join(" ")};a=b(a,{formatted:!0,country:"us",mobile:!1}),a.formatted||(a.parens=!1);var f;switch(a.country){case"fr":a.mobile?(c=this.pick(["06","07"])+d.string({pool:"0123456789",length:8}),f=a.formatted?c.match(/../g).join(" "):c):(c=this.pick(["01"+this.pick(["30","34","39","40","41","42","43","44","45","46","47","48","49","53","55","56","58","60","64","69","70","72","73","74","75","76","77","78","79","80","81","82","83"])+d.string({pool:"0123456789",length:6}),"02"+this.pick(["14","18","22","23","28","29","30","31","32","33","34","35","36","37","38","40","41","43","44","45","46","47","48","49","50","51","52","53","54","56","57","61","62","69","72","76","77","78","85","90","96","97","98","99"])+d.string({pool:"0123456789",length:6}),"03"+this.pick(["10","20","21","22","23","24","25","26","27","28","29","39","44","45","51","52","54","55","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","80","81","82","83","84","85","86","87","88","89","90"])+d.string({pool:"0123456789",length:6}),"04"+this.pick(["11","13","15","20","22","26","27","30","32","34","37","42","43","44","50","56","57","63","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","88","89","90","91","92","93","94","95","97","98"])+d.string({pool:"0123456789",length:6}),"05"+this.pick(["08","16","17","19","24","31","32","33","34","35","40","45","46","47","49","53","55","56","57","58","59","61","62","63","64","65","67","79","81","82","86","87","90","94"])+d.string({pool:"0123456789",length:6}),"09"+d.string({pool:"0123456789",length:8})]),f=a.formatted?c.match(/../g).join(" "):c);break;case"uk":a.mobile?(c=this.pick([{area:"07"+this.pick(["4","5","7","8","9"]),sections:[2,6]},{area:"07624 ",sections:[6]}]),f=a.formatted?e(c):e(c).replace(" ","")):(c=this.pick([{area:"01"+this.character({pool:"234569"})+"1 ",sections:[3,4]},{area:"020 "+this.character({pool:"378"}),sections:[3,4]},{area:"023 "+this.character({pool:"89"}),sections:[3,4]},{area:"024 7",sections:[3,4]},{area:"028 "+this.pick(["25","28","37","71","82","90","92","95"]),sections:[2,4]},{area:"012"+this.pick(["04","08","54","76","97","98"])+" ",sections:[5]},{area:"013"+this.pick(["63","64","84","86"])+" ",sections:[5]},{area:"014"+this.pick(["04","20","60","61","80","88"])+" ",sections:[5]},{area:"015"+this.pick(["24","27","62","66"])+" ",sections:[5]},{area:"016"+this.pick(["06","29","35","47","59","95"])+" ",sections:[5]},{area:"017"+this.pick(["26","44","50","68"])+" ",sections:[5]},{area:"018"+this.pick(["27","37","84","97"])+" ",sections:[5]},{area:"019"+this.pick(["00","05","35","46","49","63","95"])+" ",sections:[5]}]),f=a.formatted?e(c):e(c).replace(" ","","g"));break;case"us":var g=this.areacode(a).toString(),h=this.natural({min:2,max:9}).toString()+this.natural({min:0,max:9}).toString()+this.natural({min:0,max:9}).toString(),i=this.natural({min:1e3,max:9999}).toString();f=a.formatted?g+" "+h+"-"+i:g+h+i}return f},a.prototype.postal=function(){var a=this.character({pool:"XVTSRPNKLMHJGECBA"}),b=a+this.natural({max:9})+this.character({alpha:!0,casing:"upper"}),c=this.natural({max:9})+this.character({alpha:!0,casing:"upper"})+this.natural({max:9});return b+" "+c},a.prototype.provinces=function(a){return a=b(a,{country:"ca"}),this.get("provinces")[a.country.toLowerCase()]},a.prototype.province=function(a){return a&&a.full?this.pick(this.provinces(a)).name:this.pick(this.provinces(a)).abbreviation},a.prototype.state=function(a){return a&&a.full?this.pick(this.states(a)).name:this.pick(this.states(a)).abbreviation},a.prototype.states=function(a){a=b(a,{country:"us",us_states_and_dc:!0});var c;switch(a.country.toLowerCase()){case"us":var d=this.get("us_states_and_dc"),e=this.get("territories"),f=this.get("armed_forces");c=[],a.us_states_and_dc&&(c=c.concat(d)),a.territories&&(c=c.concat(e)),a.armed_forces&&(c=c.concat(f));break;case"it":c=this.get("country_regions")[a.country.toLowerCase()]}return c},a.prototype.street=function(a){a=b(a,{country:"us",syllables:2});var c;switch(a.country.toLowerCase()){case"us":c=this.word({syllables:a.syllables}),c=this.capitalize(c),c+=" ",c+=a.short_suffix?this.street_suffix(a).abbreviation:this.street_suffix(a).name;break;case"it":c=this.word({syllables:a.syllables}),c=this.capitalize(c),c=(a.short_suffix?this.street_suffix(a).abbreviation:this.street_suffix(a).name)+" "+c}return c},a.prototype.street_suffix=function(a){return a=b(a,{country:"us"}),this.pick(this.street_suffixes(a))},a.prototype.street_suffixes=function(a){return a=b(a,{country:"us"}),this.get("street_suffixes")[a.country.toLowerCase()]},a.prototype.zip=function(a){var b=this.n(this.natural,5,{max:9});return a&&a.plusfour===!0&&(b.push("-"),b=b.concat(this.n(this.natural,4,{max:9}))),b.join("")},a.prototype.ampm=function(){return this.bool()?"am":"pm"},a.prototype.date=function(a){var c,d;if(a&&(a.min||a.max)){a=b(a,{american:!0,string:!1});var e="undefined"!=typeof a.min?a.min.getTime():1,f="undefined"!=typeof a.max?a.max.getTime():864e13;d=new Date(this.natural({min:e,max:f}))}else{var g=this.month({raw:!0}),h=g.days;a&&a.month&&(h=this.get("months")[(a.month%12+12)%12].days),a=b(a,{year:parseInt(this.year(),10),month:g.numeric-1,day:this.natural({min:1,max:h}),hour:this.hour(),minute:this.minute(),second:this.second(),millisecond:this.millisecond(),american:!0,string:!1}),d=new Date(a.year,a.month,a.day,a.hour,a.minute,a.second,a.millisecond)}return c=a.american?d.getMonth()+1+"/"+d.getDate()+"/"+d.getFullYear():d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear(),a.string?c:d},a.prototype.hammertime=function(a){return this.date(a).getTime()},a.prototype.hour=function(a){return a=b(a,{min:a&&a.twentyfour?0:1,max:a&&a.twentyfour?23:12}),c(a.min<0,"Chance: Min cannot be less than 0."),c(a.twentyfour&&a.max>23,"Chance: Max cannot be greater than 23 for twentyfour option."),c(!a.twentyfour&&a.max>12,"Chance: Max cannot be greater than 12."),c(a.min>a.max,"Chance: Min cannot be greater than Max."),this.natural({min:a.min,max:a.max})},a.prototype.millisecond=function(){return this.natural({max:999})},a.prototype.minute=a.prototype.second=function(a){return a=b(a,{min:0,max:59}),c(a.min<0,"Chance: Min cannot be less than 0."),c(a.max>59,"Chance: Max cannot be greater than 59."),c(a.min>a.max,"Chance: Min cannot be greater than Max."),this.natural({min:a.min,max:a.max})},a.prototype.month=function(a){a=b(a,{min:1,max:12}),c(a.min<1,"Chance: Min cannot be less than 1."),c(a.max>12,"Chance: Max cannot be greater than 12."),c(a.min>a.max,"Chance: Min cannot be greater than Max.");var d=this.pick(this.months().slice(a.min-1,a.max));return a.raw?d:d.name},a.prototype.months=function(){return this.get("months")},a.prototype.second=function(){return this.natural({max:59})},a.prototype.timestamp=function(){return this.natural({min:1,max:parseInt((new Date).getTime()/1e3,10)})},a.prototype.weekday=function(a){a=b(a,{weekday_only:!1});var c=["Monday","Tuesday","Wednesday","Thursday","Friday"];return a.weekday_only||(c.push("Saturday"),c.push("Sunday")),this.pickone(c)},a.prototype.year=function(a){return a=b(a,{min:(new Date).getFullYear()}),a.max="undefined"!=typeof a.max?a.max:a.min+100,this.natural(a).toString()},a.prototype.cc=function(a){a=b(a);var c,d,e;return c=a.type?this.cc_type({name:a.type,raw:!0}):this.cc_type({raw:!0}),d=c.prefix.split(""),e=c.length-c.prefix.length-1,d=d.concat(this.n(this.integer,e,{min:0,max:9})),d.push(this.luhn_calculate(d.join(""))),d.join("")},a.prototype.cc_types=function(){return this.get("cc_types")},a.prototype.cc_type=function(a){a=b(a);var c=this.cc_types(),d=null;if(a.name){for(var e=0;e<c.length;e++)if(c[e].name===a.name||c[e].short_name===a.name){d=c[e];break}if(null===d)throw new RangeError("Credit card type '"+a.name+"'' is not supported")}else d=this.pick(c);return a.raw?d:d.name},a.prototype.currency_types=function(){return this.get("currency_types")},a.prototype.currency=function(){return this.pick(this.currency_types())},a.prototype.currency_pair=function(a){var b=this.unique(this.currency,2,{comparator:function(a,b){return a.reduce(function(a,c){return a||c.code===b.code},!1)}});return a?b[0].code+"/"+b[1].code:b},a.prototype.dollar=function(a){a=b(a,{max:1e4,min:0});var c=this.floating({min:a.min,max:a.max,fixed:2}).toString(),d=c.split(".")[1];return void 0===d?c+=".00":d.length<2&&(c+="0"),0>c?"-$"+c.replace("-",""):"$"+c},a.prototype.euro=function(a){return Number(this.dollar(a).replace("$","")).toLocaleString()+"€"},a.prototype.exp=function(a){a=b(a);var c={};return c.year=this.exp_year(),c.year===(new Date).getFullYear().toString()?c.month=this.exp_month({future:!0}):c.month=this.exp_month(),a.raw?c:c.month+"/"+c.year},a.prototype.exp_month=function(a){a=b(a);var c,d,e=(new Date).getMonth()+1;if(a.future&&12!==e){do c=this.month({raw:!0}).numeric,d=parseInt(c,10);while(e>=d)}else c=this.month({raw:!0}).numeric;return c},a.prototype.exp_year=function(){var a=(new Date).getMonth()+1,b=(new Date).getFullYear();return this.year({min:12===a?b+1:b,max:b+10})},a.prototype.vat=function(a){switch(a=b(a,{country:"it"}),a.country.toLowerCase()){case"it":return this.it_vat()}},a.prototype.it_vat=function(){var a=this.natural({min:1,max:18e5});return a=this.pad(a,7)+this.pad(this.pick(this.provinces({country:"it"})).code,3),a+this.luhn_calculate(a)},a.prototype.cf=function(a){a=a||{};var b=a.gender?a.gender:this.gender(),c=a.first?a.first:this.first({gender:b,nationality:"it"}),d=a.last?a.last:this.last({nationality:"it"}),e=a.birthday?a.birthday:this.birthday(),f=a.city?a.city:this.pickone(["A","B","C","D","E","F","G","H","I","L","M","Z"])+this.pad(this.natural({max:999}),3),g=[],h=function(a,b){var c,d=[];return a.length<3?d=a.split("").concat("XXX".split("")).splice(0,3):(c=a.toUpperCase().split("").map(function(a){return-1!=="BCDFGHJKLMNPRSTVWZ".indexOf(a)?a:void 0}).join(""),c.length>3&&(c=b?c.substr(0,3):c[0]+c.substr(2,2)),c.length<3&&(d=c,c=a.toUpperCase().split("").map(function(a){return-1!=="AEIOU".indexOf(a)?a:void 0}).join("").substr(0,3-d.length)),d+=c),d},i=function(a,b,c){var d=["A","B","C","D","E","H","L","M","P","R","S","T"];return a.getFullYear().toString().substr(2)+d[a.getMonth()]+c.pad(a.getDate()+("female"===b.toLowerCase()?40:0),2)},j=function(a){for(var b="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",c="ABCDEFGHIJABCDEFGHIJKLMNOPQRSTUVWXYZ",d="ABCDEFGHIJKLMNOPQRSTUVWXYZ",e="BAKPLCQDREVOSFTGUHMINJWZYX",f=0,g=0;15>g;g++)f+=g%2!==0?d.indexOf(c[b.indexOf(a[g])]):e.indexOf(c[b.indexOf(a[g])]);return d[f%26]};return g=g.concat(h(d,!0),h(c),i(e,b,this),f.toUpperCase().split("")).join(""),g+=j(g.toUpperCase(),this),g.toUpperCase()},a.prototype.pl_pesel=function(){for(var a=this.natural({min:1,max:9999999999}),b=this.pad(a,10).split(""),c=0;c<b.length;c++)b[c]=parseInt(b[c]);var d=(1*b[0]+3*b[1]+7*b[2]+9*b[3]+1*b[4]+3*b[5]+7*b[6]+9*b[7]+1*b[8]+3*b[9])%10;return 0!==d&&(d=10-d),b.join("")+d},a.prototype.pl_nip=function(){for(var a=this.natural({min:1,max:999999999}),b=this.pad(a,9).split(""),c=0;c<b.length;c++)b[c]=parseInt(b[c]);var d=(6*b[0]+5*b[1]+7*b[2]+2*b[3]+3*b[4]+4*b[5]+5*b[6]+6*b[7]+7*b[8])%11;return 10===d?this.pl_nip():b.join("")+d},a.prototype.pl_regon=function(){for(var a=this.natural({min:1,max:99999999}),b=this.pad(a,8).split(""),c=0;c<b.length;c++)b[c]=parseInt(b[c]);var d=(8*b[0]+9*b[1]+2*b[2]+3*b[3]+4*b[4]+5*b[5]+6*b[6]+7*b[7])%11;return 10===d&&(d=0),b.join("")+d},a.prototype.d4=d({min:1,max:4}),a.prototype.d6=d({min:1,max:6}),a.prototype.d8=d({min:1,max:8}),a.prototype.d10=d({min:1,max:10}),a.prototype.d12=d({min:1,max:12}),a.prototype.d20=d({min:1,max:20}),a.prototype.d30=d({min:1,max:30}),a.prototype.d100=d({min:1,max:100}),a.prototype.rpg=function(a,c){if(c=b(c),a){var d=a.toLowerCase().split("d"),e=[];if(2!==d.length||!parseInt(d[0],10)||!parseInt(d[1],10))throw new Error("Invalid format provided. Please provide #d# where the first # is the number of dice to roll, the second # is the max of each die");for(var f=d[0];f>0;f--)e[f-1]=this.natural({min:1,max:d[1]});return"undefined"!=typeof c.sum&&c.sum?e.reduce(function(a,b){return a+b}):e}throw new RangeError("A type of die roll must be included")},a.prototype.guid=function(a){a=b(a,{version:5});var c="abcdef1234567890",d="ab89",e=this.string({pool:c,length:8})+"-"+this.string({pool:c,length:4})+"-"+a.version+this.string({pool:c,length:3})+"-"+this.string({pool:d,length:1})+this.string({pool:c,length:3})+"-"+this.string({pool:c,length:12});return e},a.prototype.hash=function(a){a=b(a,{length:40,casing:"lower"});var c="upper"===a.casing?m.toUpperCase():m;return this.string({pool:c,length:a.length})},a.prototype.luhn_check=function(a){var b=a.toString(),c=+b.substring(b.length-1);return c===this.luhn_calculate(+b.substring(0,b.length-1))},a.prototype.luhn_calculate=function(a){for(var b,c=a.toString().split("").reverse(),d=0,e=0,f=c.length;f>e;++e)b=+c[e],e%2===0&&(b*=2,b>9&&(b-=9)),d+=b;return 9*d%10},a.prototype.md5=function(a){var c={str:"",key:null,raw:!1};if(a)if("string"==typeof a)c.str=a,a={};else{if("object"!=typeof a)return null;if("Array"===a.constructor)return null}else c.str=this.string(),a={};if(c=b(a,c),!c.str)throw new Error("A parameter is required to return an md5 hash.");return this.bimd5.md5(c.str,c.key,c.raw)},a.prototype.file=function(a){var b,c,d=a||{},e="fileExtension",f=Object.keys(this.get("fileExtension"));if(b=this.word({length:d.length}),d.extention)return c=d.extention,b+"."+c;if(d.extentions){if(Array.isArray(d.extentions))return c=this.pickone(d.extentions),b+"."+c;if(d.extentions.constructor===Object){var g=d.extentions,h=Object.keys(g);return c=this.pickone(g[this.pickone(h)]),b+"."+c}throw new Error("Expect collection of type Array or Object to be passed as an argument ")}if(d.fileType){var i=d.fileType;if(-1!==f.indexOf(i))return c=this.pickone(this.get(e)[i]),b+"."+c;throw new Error("Expect file type value to be 'raster', 'vector', '3d' or 'document' ")}return c=this.pickone(this.get(e)[this.pickone(f)]),b+"."+c};var p={firstNames:{male:{en:["James","John","Robert","Michael","William","David","Richard","Joseph","Charles","Thomas","Christopher","Daniel","Matthew","George","Donald","Anthony","Paul","Mark","Edward","Steven","Kenneth","Andrew","Brian","Joshua","Kevin","Ronald","Timothy","Jason","Jeffrey","Frank","Gary","Ryan","Nicholas","Eric","Stephen","Jacob","Larry","Jonathan","Scott","Raymond","Justin","Brandon","Gregory","Samuel","Benjamin","Patrick","Jack","Henry","Walter","Dennis","Jerry","Alexander","Peter","Tyler","Douglas","Harold","Aaron","Jose","Adam","Arthur","Zachary","Carl","Nathan","Albert","Kyle","Lawrence","Joe","Willie","Gerald","Roger","Keith","Jeremy","Terry","Harry","Ralph","Sean","Jesse","Roy","Louis","Billy","Austin","Bruce","Eugene","Christian","Bryan","Wayne","Russell","Howard","Fred","Ethan","Jordan","Philip","Alan","Juan","Randy","Vincent","Bobby","Dylan","Johnny","Phillip","Victor","Clarence","Ernest","Martin","Craig","Stanley","Shawn","Travis","Bradley","Leonard","Earl","Gabriel","Jimmy","Francis","Todd","Noah","Danny","Dale","Cody","Carlos","Allen","Frederick","Logan","Curtis","Alex","Joel","Luis","Norman","Marvin","Glenn","Tony","Nathaniel","Rodney","Melvin","Alfred","Steve","Cameron","Chad","Edwin","Caleb","Evan","Antonio","Lee","Herbert","Jeffery","Isaac","Derek","Ricky","Marcus","Theodore","Elijah","Luke","Jesus","Eddie","Troy","Mike","Dustin","Ray","Adrian","Bernard","Leroy","Angel","Randall","Wesley","Ian","Jared","Mason","Hunter","Calvin","Oscar","Clifford","Jay","Shane","Ronnie","Barry","Lucas","Corey","Manuel","Leo","Tommy","Warren","Jackson","Isaiah","Connor","Don","Dean","Jon","Julian","Miguel","Bill","Lloyd","Charlie","Mitchell","Leon","Jerome","Darrell","Jeremiah","Alvin","Brett","Seth","Floyd","Jim","Blake","Micheal","Gordon","Trevor","Lewis","Erik","Edgar","Vernon","Devin","Gavin","Jayden","Chris","Clyde","Tom","Derrick","Mario","Brent","Marc","Herman","Chase","Dominic","Ricardo","Franklin","Maurice","Max","Aiden","Owen","Lester","Gilbert","Elmer","Gene","Francisco","Glen","Cory","Garrett","Clayton","Sam","Jorge","Chester","Alejandro","Jeff","Harvey","Milton","Cole","Ivan","Andre","Duane","Landon"],
it:["Adolfo","Alberto","Aldo","Alessandro","Alessio","Alfredo","Alvaro","Andrea","Angelo","Angiolo","Antonino","Antonio","Attilio","Benito","Bernardo","Bruno","Carlo","Cesare","Christian","Claudio","Corrado","Cosimo","Cristian","Cristiano","Daniele","Dario","David","Davide","Diego","Dino","Domenico","Duccio","Edoardo","Elia","Elio","Emanuele","Emiliano","Emilio","Enrico","Enzo","Ettore","Fabio","Fabrizio","Federico","Ferdinando","Fernando","Filippo","Francesco","Franco","Gabriele","Giacomo","Giampaolo","Giampiero","Giancarlo","Gianfranco","Gianluca","Gianmarco","Gianni","Gino","Giorgio","Giovanni","Giuliano","Giulio","Giuseppe","Graziano","Gregorio","Guido","Iacopo","Jacopo","Lapo","Leonardo","Lorenzo","Luca","Luciano","Luigi","Manuel","Marcello","Marco","Marino","Mario","Massimiliano","Massimo","Matteo","Mattia","Maurizio","Mauro","Michele","Mirko","Mohamed","Nello","Neri","Niccolò","Nicola","Osvaldo","Otello","Paolo","Pier Luigi","Piero","Pietro","Raffaele","Remo","Renato","Renzo","Riccardo","Roberto","Rolando","Romano","Salvatore","Samuele","Sandro","Sergio","Silvano","Simone","Stefano","Thomas","Tommaso","Ubaldo","Ugo","Umberto","Valerio","Valter","Vasco","Vincenzo","Vittorio"]},female:{en:["Mary","Emma","Elizabeth","Minnie","Margaret","Ida","Alice","Bertha","Sarah","Annie","Clara","Ella","Florence","Cora","Martha","Laura","Nellie","Grace","Carrie","Maude","Mabel","Bessie","Jennie","Gertrude","Julia","Hattie","Edith","Mattie","Rose","Catherine","Lillian","Ada","Lillie","Helen","Jessie","Louise","Ethel","Lula","Myrtle","Eva","Frances","Lena","Lucy","Edna","Maggie","Pearl","Daisy","Fannie","Josephine","Dora","Rosa","Katherine","Agnes","Marie","Nora","May","Mamie","Blanche","Stella","Ellen","Nancy","Effie","Sallie","Nettie","Della","Lizzie","Flora","Susie","Maud","Mae","Etta","Harriet","Sadie","Caroline","Katie","Lydia","Elsie","Kate","Susan","Mollie","Alma","Addie","Georgia","Eliza","Lulu","Nannie","Lottie","Amanda","Belle","Charlotte","Rebecca","Ruth","Viola","Olive","Amelia","Hannah","Jane","Virginia","Emily","Matilda","Irene","Kathryn","Esther","Willie","Henrietta","Ollie","Amy","Rachel","Sara","Estella","Theresa","Augusta","Ora","Pauline","Josie","Lola","Sophia","Leona","Anne","Mildred","Ann","Beulah","Callie","Lou","Delia","Eleanor","Barbara","Iva","Louisa","Maria","Mayme","Evelyn","Estelle","Nina","Betty","Marion","Bettie","Dorothy","Luella","Inez","Lela","Rosie","Allie","Millie","Janie","Cornelia","Victoria","Ruby","Winifred","Alta","Celia","Christine","Beatrice","Birdie","Harriett","Mable","Myra","Sophie","Tillie","Isabel","Sylvia","Carolyn","Isabelle","Leila","Sally","Ina","Essie","Bertie","Nell","Alberta","Katharine","Lora","Rena","Mina","Rhoda","Mathilda","Abbie","Eula","Dollie","Hettie","Eunice","Fanny","Ola","Lenora","Adelaide","Christina","Lelia","Nelle","Sue","Johanna","Lilly","Lucinda","Minerva","Lettie","Roxie","Cynthia","Helena","Hilda","Hulda","Bernice","Genevieve","Jean","Cordelia","Marian","Francis","Jeanette","Adeline","Gussie","Leah","Lois","Lura","Mittie","Hallie","Isabella","Olga","Phoebe","Teresa","Hester","Lida","Lina","Winnie","Claudia","Marguerite","Vera","Cecelia","Bess","Emilie","John","Rosetta","Verna","Myrtie","Cecilia","Elva","Olivia","Ophelia","Georgie","Elnora","Violet","Adele","Lily","Linnie","Loretta","Madge","Polly","Virgie","Eugenia","Lucile","Lucille","Mabelle","Rosalie"],it:["Ada","Adriana","Alessandra","Alessia","Alice","Angela","Anna","Anna Maria","Annalisa","Annita","Annunziata","Antonella","Arianna","Asia","Assunta","Aurora","Barbara","Beatrice","Benedetta","Bianca","Bruna","Camilla","Carla","Carlotta","Carmela","Carolina","Caterina","Catia","Cecilia","Chiara","Cinzia","Clara","Claudia","Costanza","Cristina","Daniela","Debora","Diletta","Dina","Donatella","Elena","Eleonora","Elisa","Elisabetta","Emanuela","Emma","Eva","Federica","Fernanda","Fiorella","Fiorenza","Flora","Franca","Francesca","Gabriella","Gaia","Gemma","Giada","Gianna","Gina","Ginevra","Giorgia","Giovanna","Giulia","Giuliana","Giuseppa","Giuseppina","Grazia","Graziella","Greta","Ida","Ilaria","Ines","Iolanda","Irene","Irma","Isabella","Jessica","Laura","Leda","Letizia","Licia","Lidia","Liliana","Lina","Linda","Lisa","Livia","Loretta","Luana","Lucia","Luciana","Lucrezia","Luisa","Manuela","Mara","Marcella","Margherita","Maria","Maria Cristina","Maria Grazia","Maria Luisa","Maria Pia","Maria Teresa","Marina","Marisa","Marta","Martina","Marzia","Matilde","Melissa","Michela","Milena","Mirella","Monica","Natalina","Nella","Nicoletta","Noemi","Olga","Paola","Patrizia","Piera","Pierina","Raffaella","Rebecca","Renata","Rina","Rita","Roberta","Rosa","Rosanna","Rossana","Rossella","Sabrina","Sandra","Sara","Serena","Silvana","Silvia","Simona","Simonetta","Sofia","Sonia","Stefania","Susanna","Teresa","Tina","Tiziana","Tosca","Valentina","Valeria","Vanda","Vanessa","Vanna","Vera","Veronica","Vilma","Viola","Virginia","Vittoria"]}},lastNames:{en:["Smith","Johnson","Williams","Jones","Brown","Davis","Miller","Wilson","Moore","Taylor","Anderson","Thomas","Jackson","White","Harris","Martin","Thompson","Garcia","Martinez","Robinson","Clark","Rodriguez","Lewis","Lee","Walker","Hall","Allen","Young","Hernandez","King","Wright","Lopez","Hill","Scott","Green","Adams","Baker","Gonzalez","Nelson","Carter","Mitchell","Perez","Roberts","Turner","Phillips","Campbell","Parker","Evans","Edwards","Collins","Stewart","Sanchez","Morris","Rogers","Reed","Cook","Morgan","Bell","Murphy","Bailey","Rivera","Cooper","Richardson","Cox","Howard","Ward","Torres","Peterson","Gray","Ramirez","James","Watson","Brooks","Kelly","Sanders","Price","Bennett","Wood","Barnes","Ross","Henderson","Coleman","Jenkins","Perry","Powell","Long","Patterson","Hughes","Flores","Washington","Butler","Simmons","Foster","Gonzales","Bryant","Alexander","Russell","Griffin","Diaz","Hayes","Myers","Ford","Hamilton","Graham","Sullivan","Wallace","Woods","Cole","West","Jordan","Owens","Reynolds","Fisher","Ellis","Harrison","Gibson","McDonald","Cruz","Marshall","Ortiz","Gomez","Murray","Freeman","Wells","Webb","Simpson","Stevens","Tucker","Porter","Hunter","Hicks","Crawford","Henry","Boyd","Mason","Morales","Kennedy","Warren","Dixon","Ramos","Reyes","Burns","Gordon","Shaw","Holmes","Rice","Robertson","Hunt","Black","Daniels","Palmer","Mills","Nichols","Grant","Knight","Ferguson","Rose","Stone","Hawkins","Dunn","Perkins","Hudson","Spencer","Gardner","Stephens","Payne","Pierce","Berry","Matthews","Arnold","Wagner","Willis","Ray","Watkins","Olson","Carroll","Duncan","Snyder","Hart","Cunningham","Bradley","Lane","Andrews","Ruiz","Harper","Fox","Riley","Armstrong","Carpenter","Weaver","Greene","Lawrence","Elliott","Chavez","Sims","Austin","Peters","Kelley","Franklin","Lawson","Fields","Gutierrez","Ryan","Schmidt","Carr","Vasquez","Castillo","Wheeler","Chapman","Oliver","Montgomery","Richards","Williamson","Johnston","Banks","Meyer","Bishop","McCoy","Howell","Alvarez","Morrison","Hansen","Fernandez","Garza","Harvey","Little","Burton","Stanley","Nguyen","George","Jacobs","Reid","Kim","Fuller","Lynch","Dean","Gilbert","Garrett","Romero","Welch","Larson","Frazier","Burke","Hanson","Day","Mendoza","Moreno","Bowman","Medina","Fowler","Brewer","Hoffman","Carlson","Silva","Pearson","Holland","Douglas","Fleming","Jensen","Vargas","Byrd","Davidson","Hopkins","May","Terry","Herrera","Wade","Soto","Walters","Curtis","Neal","Caldwell","Lowe","Jennings","Barnett","Graves","Jimenez","Horton","Shelton","Barrett","Obrien","Castro","Sutton","Gregory","McKinney","Lucas","Miles","Craig","Rodriquez","Chambers","Holt","Lambert","Fletcher","Watts","Bates","Hale","Rhodes","Pena","Beck","Newman","Haynes","McDaniel","Mendez","Bush","Vaughn","Parks","Dawson","Santiago","Norris","Hardy","Love","Steele","Curry","Powers","Schultz","Barker","Guzman","Page","Munoz","Ball","Keller","Chandler","Weber","Leonard","Walsh","Lyons","Ramsey","Wolfe","Schneider","Mullins","Benson","Sharp","Bowen","Daniel","Barber","Cummings","Hines","Baldwin","Griffith","Valdez","Hubbard","Salazar","Reeves","Warner","Stevenson","Burgess","Santos","Tate","Cross","Garner","Mann","Mack","Moss","Thornton","Dennis","McGee","Farmer","Delgado","Aguilar","Vega","Glover","Manning","Cohen","Harmon","Rodgers","Robbins","Newton","Todd","Blair","Higgins","Ingram","Reese","Cannon","Strickland","Townsend","Potter","Goodwin","Walton","Rowe","Hampton","Ortega","Patton","Swanson","Joseph","Francis","Goodman","Maldonado","Yates","Becker","Erickson","Hodges","Rios","Conner","Adkins","Webster","Norman","Malone","Hammond","Flowers","Cobb","Moody","Quinn","Blake","Maxwell","Pope","Floyd","Osborne","Paul","McCarthy","Guerrero","Lindsey","Estrada","Sandoval","Gibbs","Tyler","Gross","Fitzgerald","Stokes","Doyle","Sherman","Saunders","Wise","Colon","Gill","Alvarado","Greer","Padilla","Simon","Waters","Nunez","Ballard","Schwartz","McBride","Houston","Christensen","Klein","Pratt","Briggs","Parsons","McLaughlin","Zimmerman","French","Buchanan","Moran","Copeland","Roy","Pittman","Brady","McCormick","Holloway","Brock","Poole","Frank","Logan","Owen","Bass","Marsh","Drake","Wong","Jefferson","Park","Morton","Abbott","Sparks","Patrick","Norton","Huff","Clayton","Massey","Lloyd","Figueroa","Carson","Bowers","Roberson","Barton","Tran","Lamb","Harrington","Casey","Boone","Cortez","Clarke","Mathis","Singleton","Wilkins","Cain","Bryan","Underwood","Hogan","McKenzie","Collier","Luna","Phelps","McGuire","Allison","Bridges","Wilkerson","Nash","Summers","Atkins"],it:["Acciai","Aglietti","Agostini","Agresti","Ahmed","Aiazzi","Albanese","Alberti","Alessi","Alfani","Alinari","Alterini","Amato","Ammannati","Ancillotti","Andrei","Andreini","Andreoni","Angeli","Anichini","Antonelli","Antonini","Arena","Ariani","Arnetoli","Arrighi","Baccani","Baccetti","Bacci","Bacherini","Badii","Baggiani","Baglioni","Bagni","Bagnoli","Baldassini","Baldi","Baldini","Ballerini","Balli","Ballini","Balloni","Bambi","Banchi","Bandinelli","Bandini","Bani","Barbetti","Barbieri","Barchielli","Bardazzi","Bardelli","Bardi","Barducci","Bargellini","Bargiacchi","Barni","Baroncelli","Baroncini","Barone","Baroni","Baronti","Bartalesi","Bartoletti","Bartoli","Bartolini","Bartoloni","Bartolozzi","Basagni","Basile","Bassi","Batacchi","Battaglia","Battaglini","Bausi","Becagli","Becattini","Becchi","Becucci","Bellandi","Bellesi","Belli","Bellini","Bellucci","Bencini","Benedetti","Benelli","Beni","Benini","Bensi","Benucci","Benvenuti","Berlincioni","Bernacchioni","Bernardi","Bernardini","Berni","Bernini","Bertelli","Berti","Bertini","Bessi","Betti","Bettini","Biagi","Biagini","Biagioni","Biagiotti","Biancalani","Bianchi","Bianchini","Bianco","Biffoli","Bigazzi","Bigi","Biliotti","Billi","Binazzi","Bindi","Bini","Biondi","Bizzarri","Bocci","Bogani","Bolognesi","Bonaiuti","Bonanni","Bonciani","Boncinelli","Bondi","Bonechi","Bongini","Boni","Bonini","Borchi","Boretti","Borghi","Borghini","Borgioli","Borri","Borselli","Boschi","Bottai","Bracci","Braccini","Brandi","Braschi","Bravi","Brazzini","Breschi","Brilli","Brizzi","Brogelli","Brogi","Brogioni","Brunelli","Brunetti","Bruni","Bruno","Brunori","Bruschi","Bucci","Bucciarelli","Buccioni","Bucelli","Bulli","Burberi","Burchi","Burgassi","Burroni","Bussotti","Buti","Caciolli","Caiani","Calabrese","Calamai","Calamandrei","Caldini","Calo'","Calonaci","Calosi","Calvelli","Cambi","Camiciottoli","Cammelli","Cammilli","Campolmi","Cantini","Capanni","Capecchi","Caponi","Cappelletti","Cappelli","Cappellini","Cappugi","Capretti","Caputo","Carbone","Carboni","Cardini","Carlesi","Carletti","Carli","Caroti","Carotti","Carrai","Carraresi","Carta","Caruso","Casalini","Casati","Caselli","Casini","Castagnoli","Castellani","Castelli","Castellucci","Catalano","Catarzi","Catelani","Cavaciocchi","Cavallaro","Cavallini","Cavicchi","Cavini","Ceccarelli","Ceccatelli","Ceccherelli","Ceccherini","Cecchi","Cecchini","Cecconi","Cei","Cellai","Celli","Cellini","Cencetti","Ceni","Cenni","Cerbai","Cesari","Ceseri","Checcacci","Checchi","Checcucci","Cheli","Chellini","Chen","Cheng","Cherici","Cherubini","Chiaramonti","Chiarantini","Chiarelli","Chiari","Chiarini","Chiarugi","Chiavacci","Chiesi","Chimenti","Chini","Chirici","Chiti","Ciabatti","Ciampi","Cianchi","Cianfanelli","Cianferoni","Ciani","Ciapetti","Ciappi","Ciardi","Ciatti","Cicali","Ciccone","Cinelli","Cini","Ciobanu","Ciolli","Cioni","Cipriani","Cirillo","Cirri","Ciucchi","Ciuffi","Ciulli","Ciullini","Clemente","Cocchi","Cognome","Coli","Collini","Colombo","Colzi","Comparini","Conforti","Consigli","Conte","Conti","Contini","Coppini","Coppola","Corsi","Corsini","Corti","Cortini","Cosi","Costa","Costantini","Costantino","Cozzi","Cresci","Crescioli","Cresti","Crini","Curradi","D'Agostino","D'Alessandro","D'Amico","D'Angelo","Daddi","Dainelli","Dallai","Danti","Davitti","De Angelis","De Luca","De Marco","De Rosa","De Santis","De Simone","De Vita","Degl'Innocenti","Degli Innocenti","Dei","Del Lungo","Del Re","Di Marco","Di Stefano","Dini","Diop","Dobre","Dolfi","Donati","Dondoli","Dong","Donnini","Ducci","Dumitru","Ermini","Esposito","Evangelisti","Fabbri","Fabbrini","Fabbrizzi","Fabbroni","Fabbrucci","Fabiani","Facchini","Faggi","Fagioli","Failli","Faini","Falciani","Falcini","Falcone","Fallani","Falorni","Falsini","Falugiani","Fancelli","Fanelli","Fanetti","Fanfani","Fani","Fantappie'","Fantechi","Fanti","Fantini","Fantoni","Farina","Fattori","Favilli","Fedi","Fei","Ferrante","Ferrara","Ferrari","Ferraro","Ferretti","Ferri","Ferrini","Ferroni","Fiaschi","Fibbi","Fiesoli","Filippi","Filippini","Fini","Fioravanti","Fiore","Fiorentini","Fiorini","Fissi","Focardi","Foggi","Fontana","Fontanelli","Fontani","Forconi","Formigli","Forte","Forti","Fortini","Fossati","Fossi","Francalanci","Franceschi","Franceschini","Franchi","Franchini","Franci","Francini","Francioni","Franco","Frassineti","Frati","Fratini","Frilli","Frizzi","Frosali","Frosini","Frullini","Fusco","Fusi","Gabbrielli","Gabellini","Gagliardi","Galanti","Galardi","Galeotti","Galletti","Galli","Gallo","Gallori","Gambacciani","Gargani","Garofalo","Garuglieri","Gashi","Gasperini","Gatti","Gelli","Gensini","Gentile","Gentili","Geri","Gerini","Gheri","Ghini","Giachetti","Giachi","Giacomelli","Gianassi","Giani","Giannelli","Giannetti","Gianni","Giannini","Giannoni","Giannotti","Giannozzi","Gigli","Giordano","Giorgetti","Giorgi","Giovacchini","Giovannelli","Giovannetti","Giovannini","Giovannoni","Giuliani","Giunti","Giuntini","Giusti","Gonnelli","Goretti","Gori","Gradi","Gramigni","Grassi","Grasso","Graziani","Grazzini","Greco","Grifoni","Grillo","Grimaldi","Grossi","Gualtieri","Guarducci","Guarino","Guarnieri","Guasti","Guerra","Guerri","Guerrini","Guidi","Guidotti","He","Hoxha","Hu","Huang","Iandelli","Ignesti","Innocenti","Jin","La Rosa","Lai","Landi","Landini","Lanini","Lapi","Lapini","Lari","Lascialfari","Lastrucci","Latini","Lazzeri","Lazzerini","Lelli","Lenzi","Leonardi","Leoncini","Leone","Leoni","Lepri","Li","Liao","Lin","Linari","Lippi","Lisi","Livi","Lombardi","Lombardini","Lombardo","Longo","Lopez","Lorenzi","Lorenzini","Lorini","Lotti","Lu","Lucchesi","Lucherini","Lunghi","Lupi","Madiai","Maestrini","Maffei","Maggi","Maggini","Magherini","Magini","Magnani","Magnelli","Magni","Magnolfi","Magrini","Malavolti","Malevolti","Manca","Mancini","Manetti","Manfredi","Mangani","Mannelli","Manni","Mannini","Mannucci","Manuelli","Manzini","Marcelli","Marchese","Marchetti","Marchi","Marchiani","Marchionni","Marconi","Marcucci","Margheri","Mari","Mariani","Marilli","Marinai","Marinari","Marinelli","Marini","Marino","Mariotti","Marsili","Martelli","Martinelli","Martini","Martino","Marzi","Masi","Masini","Masoni","Massai","Materassi","Mattei","Matteini","Matteucci","Matteuzzi","Mattioli","Mattolini","Matucci","Mauro","Mazzanti","Mazzei","Mazzetti","Mazzi","Mazzini","Mazzocchi","Mazzoli","Mazzoni","Mazzuoli","Meacci","Mecocci","Meini","Melani","Mele","Meli","Mengoni","Menichetti","Meoni","Merlini","Messeri","Messina","Meucci","Miccinesi","Miceli","Micheli","Michelini","Michelozzi","Migliori","Migliorini","Milani","Miniati","Misuri","Monaco","Montagnani","Montagni","Montanari","Montelatici","Monti","Montigiani","Montini","Morandi","Morandini","Morelli","Moretti","Morganti","Mori","Morini","Moroni","Morozzi","Mugnai","Mugnaini","Mustafa","Naldi","Naldini","Nannelli","Nanni","Nannini","Nannucci","Nardi","Nardini","Nardoni","Natali","Ndiaye","Nencetti","Nencini","Nencioni","Neri","Nesi","Nesti","Niccolai","Niccoli","Niccolini","Nigi","Nistri","Nocentini","Noferini","Novelli","Nucci","Nuti","Nutini","Oliva","Olivieri","Olmi","Orlandi","Orlandini","Orlando","Orsini","Ortolani","Ottanelli","Pacciani","Pace","Paci","Pacini","Pagani","Pagano","Paggetti","Pagliai","Pagni","Pagnini","Paladini","Palagi","Palchetti","Palloni","Palmieri","Palumbo","Pampaloni","Pancani","Pandolfi","Pandolfini","Panerai","Panichi","Paoletti","Paoli","Paolini","Papi","Papini","Papucci","Parenti","Parigi","Parisi","Parri","Parrini","Pasquini","Passeri","Pecchioli","Pecorini","Pellegrini","Pepi","Perini","Perrone","Peruzzi","Pesci","Pestelli","Petri","Petrini","Petrucci","Pettini","Pezzati","Pezzatini","Piani","Piazza","Piazzesi","Piazzini","Piccardi","Picchi","Piccini","Piccioli","Pieraccini","Pieraccioni","Pieralli","Pierattini","Pieri","Pierini","Pieroni","Pietrini","Pini","Pinna","Pinto","Pinzani","Pinzauti","Piras","Pisani","Pistolesi","Poggesi","Poggi","Poggiali","Poggiolini","Poli","Pollastri","Porciani","Pozzi","Pratellesi","Pratesi","Prosperi","Pruneti","Pucci","Puccini","Puccioni","Pugi","Pugliese","Puliti","Querci","Quercioli","Raddi","Radu","Raffaelli","Ragazzini","Ranfagni","Ranieri","Rastrelli","Raugei","Raveggi","Renai","Renzi","Rettori","Ricci","Ricciardi","Ridi","Ridolfi","Rigacci","Righi","Righini","Rinaldi","Risaliti","Ristori","Rizzo","Rocchi","Rocchini","Rogai","Romagnoli","Romanelli","Romani","Romano","Romei","Romeo","Romiti","Romoli","Romolini","Rontini","Rosati","Roselli","Rosi","Rossetti","Rossi","Rossini","Rovai","Ruggeri","Ruggiero","Russo","Sabatini","Saccardi","Sacchetti","Sacchi","Sacco","Salerno","Salimbeni","Salucci","Salvadori","Salvestrini","Salvi","Salvini","Sanesi","Sani","Sanna","Santi","Santini","Santoni","Santoro","Santucci","Sardi","Sarri","Sarti","Sassi","Sbolci","Scali","Scarpelli","Scarselli","Scopetani","Secci","Selvi","Senatori","Senesi","Serafini","Sereni","Serra","Sestini","Sguanci","Sieni","Signorini","Silvestri","Simoncini","Simonetti","Simoni","Singh","Sodi","Soldi","Somigli","Sorbi","Sorelli","Sorrentino","Sottili","Spina","Spinelli","Staccioli","Staderini","Stefanelli","Stefani","Stefanini","Stella","Susini","Tacchi","Tacconi","Taddei","Tagliaferri","Tamburini","Tanganelli","Tani","Tanini","Tapinassi","Tarchi","Tarchiani","Targioni","Tassi","Tassini","Tempesti","Terzani","Tesi","Testa","Testi","Tilli","Tinti","Tirinnanzi","Toccafondi","Tofanari","Tofani","Tognaccini","Tonelli","Tonini","Torelli","Torrini","Tosi","Toti","Tozzi","Trambusti","Trapani","Tucci","Turchi","Ugolini","Ulivi","Valente","Valenti","Valentini","Vangelisti","Vanni","Vannini","Vannoni","Vannozzi","Vannucchi","Vannucci","Ventura","Venturi","Venturini","Vestri","Vettori","Vichi","Viciani","Vieri","Vigiani","Vignoli","Vignolini","Vignozzi","Villani","Vinci","Visani","Vitale","Vitali","Viti","Viviani","Vivoli","Volpe","Volpi","Wang","Wu","Xu","Yang","Ye","Zagli","Zani","Zanieri","Zanobini","Zecchi","Zetti","Zhang","Zheng","Zhou","Zhu","Zingoni","Zini","Zoppi"]},countries:[{name:"Afghanistan",abbreviation:"AF"},{name:"Albania",abbreviation:"AL"},{name:"Algeria",abbreviation:"DZ"},{name:"American Samoa",abbreviation:"AS"},{name:"Andorra",abbreviation:"AD"},{name:"Angola",abbreviation:"AO"},{name:"Anguilla",abbreviation:"AI"},{name:"Antarctica",abbreviation:"AQ"},{name:"Antigua and Barbuda",abbreviation:"AG"},{name:"Argentina",abbreviation:"AR"},{name:"Armenia",abbreviation:"AM"},{name:"Aruba",abbreviation:"AW"},{name:"Australia",abbreviation:"AU"},{name:"Austria",abbreviation:"AT"},{name:"Azerbaijan",abbreviation:"AZ"},{name:"Bahamas",abbreviation:"BS"},{name:"Bahrain",abbreviation:"BH"},{name:"Bangladesh",abbreviation:"BD"},{name:"Barbados",abbreviation:"BB"},{name:"Belarus",abbreviation:"BY"},{name:"Belgium",abbreviation:"BE"},{name:"Belize",abbreviation:"BZ"},{name:"Benin",abbreviation:"BJ"},{name:"Bermuda",abbreviation:"BM"},{name:"Bhutan",abbreviation:"BT"},{name:"Bolivia",abbreviation:"BO"},{name:"Bosnia and Herzegovina",abbreviation:"BA"},{name:"Botswana",abbreviation:"BW"},{name:"Bouvet Island",abbreviation:"BV"},{name:"Brazil",abbreviation:"BR"},{name:"British Antarctic Territory",abbreviation:"BQ"},{name:"British Indian Ocean Territory",abbreviation:"IO"},{name:"British Virgin Islands",abbreviation:"VG"},{name:"Brunei",abbreviation:"BN"},{name:"Bulgaria",abbreviation:"BG"},{name:"Burkina Faso",abbreviation:"BF"},{name:"Burundi",abbreviation:"BI"},{name:"Cambodia",abbreviation:"KH"},{name:"Cameroon",abbreviation:"CM"},{name:"Canada",abbreviation:"CA"},{name:"Canton and Enderbury Islands",abbreviation:"CT"},{name:"Cape Verde",abbreviation:"CV"},{name:"Cayman Islands",abbreviation:"KY"},{name:"Central African Republic",abbreviation:"CF"},{name:"Chad",abbreviation:"TD"},{name:"Chile",abbreviation:"CL"},{name:"China",abbreviation:"CN"},{name:"Christmas Island",abbreviation:"CX"},{name:"Cocos [Keeling] Islands",abbreviation:"CC"},{name:"Colombia",abbreviation:"CO"},{name:"Comoros",abbreviation:"KM"},{name:"Congo - Brazzaville",abbreviation:"CG"},{name:"Congo - Kinshasa",abbreviation:"CD"},{name:"Cook Islands",abbreviation:"CK"},{name:"Costa Rica",abbreviation:"CR"},{name:"Croatia",abbreviation:"HR"},{name:"Cuba",abbreviation:"CU"},{name:"Cyprus",abbreviation:"CY"},{name:"Czech Republic",abbreviation:"CZ"},{name:"Côte d’Ivoire",abbreviation:"CI"},{name:"Denmark",abbreviation:"DK"},{name:"Djibouti",abbreviation:"DJ"},{name:"Dominica",abbreviation:"DM"},{name:"Dominican Republic",abbreviation:"DO"},{name:"Dronning Maud Land",abbreviation:"NQ"},{name:"East Germany",abbreviation:"DD"},{name:"Ecuador",abbreviation:"EC"},{name:"Egypt",abbreviation:"EG"},{name:"El Salvador",abbreviation:"SV"},{name:"Equatorial Guinea",abbreviation:"GQ"},{name:"Eritrea",abbreviation:"ER"},{name:"Estonia",abbreviation:"EE"},{name:"Ethiopia",abbreviation:"ET"},{name:"Falkland Islands",abbreviation:"FK"},{name:"Faroe Islands",abbreviation:"FO"},{name:"Fiji",abbreviation:"FJ"},{name:"Finland",abbreviation:"FI"},{name:"France",abbreviation:"FR"},{name:"French Guiana",abbreviation:"GF"},{name:"French Polynesia",abbreviation:"PF"},{name:"French Southern Territories",abbreviation:"TF"},{name:"French Southern and Antarctic Territories",abbreviation:"FQ"},{name:"Gabon",abbreviation:"GA"},{name:"Gambia",abbreviation:"GM"},{name:"Georgia",abbreviation:"GE"},{name:"Germany",abbreviation:"DE"},{name:"Ghana",abbreviation:"GH"},{name:"Gibraltar",abbreviation:"GI"},{name:"Greece",abbreviation:"GR"},{name:"Greenland",abbreviation:"GL"},{name:"Grenada",abbreviation:"GD"},{name:"Guadeloupe",abbreviation:"GP"},{name:"Guam",abbreviation:"GU"},{name:"Guatemala",abbreviation:"GT"},{name:"Guernsey",abbreviation:"GG"},{name:"Guinea",abbreviation:"GN"},{name:"Guinea-Bissau",abbreviation:"GW"},{name:"Guyana",abbreviation:"GY"},{name:"Haiti",abbreviation:"HT"},{name:"Heard Island and McDonald Islands",abbreviation:"HM"},{name:"Honduras",abbreviation:"HN"},{name:"Hong Kong SAR China",abbreviation:"HK"},{name:"Hungary",abbreviation:"HU"},{name:"Iceland",abbreviation:"IS"},{name:"India",abbreviation:"IN"},{name:"Indonesia",abbreviation:"ID"},{name:"Iran",abbreviation:"IR"},{name:"Iraq",abbreviation:"IQ"},{name:"Ireland",abbreviation:"IE"},{name:"Isle of Man",abbreviation:"IM"},{name:"Israel",abbreviation:"IL"},{name:"Italy",abbreviation:"IT"},{name:"Jamaica",abbreviation:"JM"},{name:"Japan",abbreviation:"JP"},{name:"Jersey",abbreviation:"JE"},{name:"Johnston Island",abbreviation:"JT"},{name:"Jordan",abbreviation:"JO"},{name:"Kazakhstan",abbreviation:"KZ"},{name:"Kenya",abbreviation:"KE"},{name:"Kiribati",abbreviation:"KI"},{name:"Kuwait",abbreviation:"KW"},{name:"Kyrgyzstan",abbreviation:"KG"},{name:"Laos",abbreviation:"LA"},{name:"Latvia",abbreviation:"LV"},{name:"Lebanon",abbreviation:"LB"},{name:"Lesotho",abbreviation:"LS"},{name:"Liberia",abbreviation:"LR"},{name:"Libya",abbreviation:"LY"},{name:"Liechtenstein",abbreviation:"LI"},{name:"Lithuania",abbreviation:"LT"},{name:"Luxembourg",abbreviation:"LU"},{name:"Macau SAR China",abbreviation:"MO"},{name:"Macedonia",abbreviation:"MK"},{name:"Madagascar",abbreviation:"MG"},{name:"Malawi",abbreviation:"MW"},{name:"Malaysia",abbreviation:"MY"},{name:"Maldives",abbreviation:"MV"},{name:"Mali",abbreviation:"ML"},{name:"Malta",abbreviation:"MT"},{name:"Marshall Islands",abbreviation:"MH"},{name:"Martinique",abbreviation:"MQ"},{name:"Mauritania",abbreviation:"MR"},{name:"Mauritius",abbreviation:"MU"},{name:"Mayotte",abbreviation:"YT"},{name:"Metropolitan France",abbreviation:"FX"},{name:"Mexico",abbreviation:"MX"},{name:"Micronesia",abbreviation:"FM"},{name:"Midway Islands",abbreviation:"MI"},{name:"Moldova",abbreviation:"MD"},{name:"Monaco",abbreviation:"MC"},{name:"Mongolia",abbreviation:"MN"},{name:"Montenegro",abbreviation:"ME"},{name:"Montserrat",abbreviation:"MS"},{name:"Morocco",abbreviation:"MA"},{name:"Mozambique",abbreviation:"MZ"},{name:"Myanmar [Burma]",abbreviation:"MM"},{name:"Namibia",abbreviation:"NA"},{name:"Nauru",abbreviation:"NR"},{name:"Nepal",abbreviation:"NP"},{name:"Netherlands",abbreviation:"NL"},{name:"Netherlands Antilles",abbreviation:"AN"},{name:"Neutral Zone",abbreviation:"NT"},{name:"New Caledonia",abbreviation:"NC"},{name:"New Zealand",abbreviation:"NZ"},{name:"Nicaragua",abbreviation:"NI"},{name:"Niger",abbreviation:"NE"},{name:"Nigeria",abbreviation:"NG"},{name:"Niue",abbreviation:"NU"},{name:"Norfolk Island",abbreviation:"NF"},{name:"North Korea",abbreviation:"KP"},{name:"North Vietnam",abbreviation:"VD"},{name:"Northern Mariana Islands",abbreviation:"MP"},{name:"Norway",abbreviation:"NO"},{name:"Oman",abbreviation:"OM"},{name:"Pacific Islands Trust Territory",abbreviation:"PC"},{name:"Pakistan",abbreviation:"PK"},{name:"Palau",abbreviation:"PW"},{name:"Palestinian Territories",abbreviation:"PS"},{name:"Panama",abbreviation:"PA"},{name:"Panama Canal Zone",abbreviation:"PZ"},{name:"Papua New Guinea",abbreviation:"PG"},{name:"Paraguay",abbreviation:"PY"},{name:"People's Democratic Republic of Yemen",abbreviation:"YD"},{name:"Peru",abbreviation:"PE"},{name:"Philippines",abbreviation:"PH"},{name:"Pitcairn Islands",abbreviation:"PN"},{name:"Poland",abbreviation:"PL"},{name:"Portugal",abbreviation:"PT"},{name:"Puerto Rico",abbreviation:"PR"},{name:"Qatar",abbreviation:"QA"},{name:"Romania",abbreviation:"RO"},{name:"Russia",abbreviation:"RU"},{name:"Rwanda",abbreviation:"RW"},{name:"Réunion",abbreviation:"RE"},{name:"Saint Barthélemy",abbreviation:"BL"},{name:"Saint Helena",abbreviation:"SH"},{name:"Saint Kitts and Nevis",abbreviation:"KN"},{name:"Saint Lucia",abbreviation:"LC"},{name:"Saint Martin",abbreviation:"MF"},{name:"Saint Pierre and Miquelon",abbreviation:"PM"},{name:"Saint Vincent and the Grenadines",abbreviation:"VC"},{name:"Samoa",abbreviation:"WS"},{name:"San Marino",abbreviation:"SM"},{name:"Saudi Arabia",abbreviation:"SA"},{name:"Senegal",abbreviation:"SN"},{name:"Serbia",abbreviation:"RS"},{name:"Serbia and Montenegro",abbreviation:"CS"},{name:"Seychelles",abbreviation:"SC"},{name:"Sierra Leone",abbreviation:"SL"},{name:"Singapore",abbreviation:"SG"},{name:"Slovakia",abbreviation:"SK"},{name:"Slovenia",abbreviation:"SI"},{name:"Solomon Islands",abbreviation:"SB"},{name:"Somalia",abbreviation:"SO"},{name:"South Africa",abbreviation:"ZA"},{name:"South Georgia and the South Sandwich Islands",abbreviation:"GS"},{name:"South Korea",abbreviation:"KR"},{name:"Spain",abbreviation:"ES"},{name:"Sri Lanka",abbreviation:"LK"},{name:"Sudan",abbreviation:"SD"},{name:"Suriname",abbreviation:"SR"},{name:"Svalbard and Jan Mayen",abbreviation:"SJ"},{name:"Swaziland",abbreviation:"SZ"},{name:"Sweden",abbreviation:"SE"},{name:"Switzerland",abbreviation:"CH"},{name:"Syria",abbreviation:"SY"},{name:"São Tomé and Príncipe",abbreviation:"ST"},{name:"Taiwan",abbreviation:"TW"},{name:"Tajikistan",abbreviation:"TJ"},{name:"Tanzania",abbreviation:"TZ"},{name:"Thailand",abbreviation:"TH"},{name:"Timor-Leste",abbreviation:"TL"},{name:"Togo",abbreviation:"TG"},{name:"Tokelau",abbreviation:"TK"},{name:"Tonga",abbreviation:"TO"},{name:"Trinidad and Tobago",abbreviation:"TT"},{name:"Tunisia",abbreviation:"TN"},{name:"Turkey",abbreviation:"TR"},{name:"Turkmenistan",abbreviation:"TM"},{name:"Turks and Caicos Islands",abbreviation:"TC"},{name:"Tuvalu",abbreviation:"TV"},{name:"U.S. Minor Outlying Islands",abbreviation:"UM"},{name:"U.S. Miscellaneous Pacific Islands",abbreviation:"PU"},{name:"U.S. Virgin Islands",abbreviation:"VI"},{name:"Uganda",abbreviation:"UG"},{name:"Ukraine",abbreviation:"UA"},{name:"Union of Soviet Socialist Republics",abbreviation:"SU"},{name:"United Arab Emirates",abbreviation:"AE"},{name:"United Kingdom",abbreviation:"GB"},{name:"United States",abbreviation:"US"},{name:"Unknown or Invalid Region",abbreviation:"ZZ"},{name:"Uruguay",abbreviation:"UY"},{name:"Uzbekistan",abbreviation:"UZ"},{name:"Vanuatu",abbreviation:"VU"},{name:"Vatican City",abbreviation:"VA"},{name:"Venezuela",abbreviation:"VE"},{name:"Vietnam",abbreviation:"VN"},{name:"Wake Island",abbreviation:"WK"},{name:"Wallis and Futuna",abbreviation:"WF"},{name:"Western Sahara",abbreviation:"EH"},{name:"Yemen",abbreviation:"YE"},{name:"Zambia",abbreviation:"ZM"},{name:"Zimbabwe",abbreviation:"ZW"},{name:"Åland Islands",abbreviation:"AX"}],provinces:{ca:[{name:"Alberta",abbreviation:"AB"},{name:"British Columbia",abbreviation:"BC"},{name:"Manitoba",abbreviation:"MB"},{name:"New Brunswick",abbreviation:"NB"},{name:"Newfoundland and Labrador",abbreviation:"NL"},{name:"Nova Scotia",abbreviation:"NS"},{name:"Ontario",abbreviation:"ON"},{name:"Prince Edward Island",abbreviation:"PE"},{name:"Quebec",abbreviation:"QC"},{name:"Saskatchewan",abbreviation:"SK"},{name:"Northwest Territories",abbreviation:"NT"},{name:"Nunavut",abbreviation:"NU"},{name:"Yukon",abbreviation:"YT"}],it:[{name:"Agrigento",abbreviation:"AG",code:84},{name:"Alessandria",abbreviation:"AL",code:6},{name:"Ancona",abbreviation:"AN",code:42},{name:"Aosta",abbreviation:"AO",code:7},{name:"L'Aquila",abbreviation:"AQ",code:66},{name:"Arezzo",abbreviation:"AR",code:51},{name:"Ascoli-Piceno",abbreviation:"AP",code:44},{name:"Asti",abbreviation:"AT",code:5},{name:"Avellino",abbreviation:"AV",code:64},{name:"Bari",abbreviation:"BA",code:72},{name:"Barletta-Andria-Trani",abbreviation:"BT",code:72},{name:"Belluno",abbreviation:"BL",code:25},{name:"Benevento",abbreviation:"BN",code:62},{name:"Bergamo",abbreviation:"BG",code:16},{name:"Biella",abbreviation:"BI",code:96},{name:"Bologna",abbreviation:"BO",code:37},{name:"Bolzano",abbreviation:"BZ",code:21},{name:"Brescia",abbreviation:"BS",code:17},{name:"Brindisi",abbreviation:"BR",code:74},{name:"Cagliari",abbreviation:"CA",code:92},{name:"Caltanissetta",abbreviation:"CL",code:85},{name:"Campobasso",abbreviation:"CB",code:70},{name:"Carbonia Iglesias",abbreviation:"CI",code:70},{name:"Caserta",abbreviation:"CE",code:61},{name:"Catania",abbreviation:"CT",code:87},{name:"Catanzaro",abbreviation:"CZ",code:79},{name:"Chieti",abbreviation:"CH",code:69},{name:"Como",abbreviation:"CO",code:13},{name:"Cosenza",abbreviation:"CS",code:78},{name:"Cremona",abbreviation:"CR",code:19},{name:"Crotone",abbreviation:"KR",code:101},{name:"Cuneo",abbreviation:"CN",code:4},{name:"Enna",abbreviation:"EN",code:86},{name:"Fermo",abbreviation:"FM",code:86},{name:"Ferrara",abbreviation:"FE",code:38},{name:"Firenze",abbreviation:"FI",code:48},{name:"Foggia",abbreviation:"FG",code:71},{name:"Forli-Cesena",abbreviation:"FC",code:71},{name:"Frosinone",abbreviation:"FR",code:60},{name:"Genova",abbreviation:"GE",code:10},{name:"Gorizia",abbreviation:"GO",
code:31},{name:"Grosseto",abbreviation:"GR",code:53},{name:"Imperia",abbreviation:"IM",code:8},{name:"Isernia",abbreviation:"IS",code:94},{name:"La-Spezia",abbreviation:"SP",code:66},{name:"Latina",abbreviation:"LT",code:59},{name:"Lecce",abbreviation:"LE",code:75},{name:"Lecco",abbreviation:"LC",code:97},{name:"Livorno",abbreviation:"LI",code:49},{name:"Lodi",abbreviation:"LO",code:98},{name:"Lucca",abbreviation:"LU",code:46},{name:"Macerata",abbreviation:"MC",code:43},{name:"Mantova",abbreviation:"MN",code:20},{name:"Massa-Carrara",abbreviation:"MS",code:45},{name:"Matera",abbreviation:"MT",code:77},{name:"Medio Campidano",abbreviation:"VS",code:77},{name:"Messina",abbreviation:"ME",code:83},{name:"Milano",abbreviation:"MI",code:15},{name:"Modena",abbreviation:"MO",code:36},{name:"Monza-Brianza",abbreviation:"MB",code:36},{name:"Napoli",abbreviation:"NA",code:63},{name:"Novara",abbreviation:"NO",code:3},{name:"Nuoro",abbreviation:"NU",code:91},{name:"Ogliastra",abbreviation:"OG",code:91},{name:"Olbia Tempio",abbreviation:"OT",code:91},{name:"Oristano",abbreviation:"OR",code:95},{name:"Padova",abbreviation:"PD",code:28},{name:"Palermo",abbreviation:"PA",code:82},{name:"Parma",abbreviation:"PR",code:34},{name:"Pavia",abbreviation:"PV",code:18},{name:"Perugia",abbreviation:"PG",code:54},{name:"Pesaro-Urbino",abbreviation:"PU",code:41},{name:"Pescara",abbreviation:"PE",code:68},{name:"Piacenza",abbreviation:"PC",code:33},{name:"Pisa",abbreviation:"PI",code:50},{name:"Pistoia",abbreviation:"PT",code:47},{name:"Pordenone",abbreviation:"PN",code:93},{name:"Potenza",abbreviation:"PZ",code:76},{name:"Prato",abbreviation:"PO",code:100},{name:"Ragusa",abbreviation:"RG",code:88},{name:"Ravenna",abbreviation:"RA",code:39},{name:"Reggio-Calabria",abbreviation:"RC",code:35},{name:"Reggio-Emilia",abbreviation:"RE",code:35},{name:"Rieti",abbreviation:"RI",code:57},{name:"Rimini",abbreviation:"RN",code:99},{name:"Roma",abbreviation:"Roma",code:58},{name:"Rovigo",abbreviation:"RO",code:29},{name:"Salerno",abbreviation:"SA",code:65},{name:"Sassari",abbreviation:"SS",code:90},{name:"Savona",abbreviation:"SV",code:9},{name:"Siena",abbreviation:"SI",code:52},{name:"Siracusa",abbreviation:"SR",code:89},{name:"Sondrio",abbreviation:"SO",code:14},{name:"Taranto",abbreviation:"TA",code:73},{name:"Teramo",abbreviation:"TE",code:67},{name:"Terni",abbreviation:"TR",code:55},{name:"Torino",abbreviation:"TO",code:1},{name:"Trapani",abbreviation:"TP",code:81},{name:"Trento",abbreviation:"TN",code:22},{name:"Treviso",abbreviation:"TV",code:26},{name:"Trieste",abbreviation:"TS",code:32},{name:"Udine",abbreviation:"UD",code:30},{name:"Varese",abbreviation:"VA",code:12},{name:"Venezia",abbreviation:"VE",code:27},{name:"Verbania",abbreviation:"VB",code:27},{name:"Vercelli",abbreviation:"VC",code:2},{name:"Verona",abbreviation:"VR",code:23},{name:"Vibo-Valentia",abbreviation:"VV",code:102},{name:"Vicenza",abbreviation:"VI",code:24},{name:"Viterbo",abbreviation:"VT",code:56}]},nationalities:[{name:"Afghan"},{name:"Albanian"},{name:"Algerian"},{name:"American"},{name:"Andorran"},{name:"Angolan"},{name:"Antiguans"},{name:"Argentinean"},{name:"Armenian"},{name:"Australian"},{name:"Austrian"},{name:"Azerbaijani"},{name:"Bahami"},{name:"Bahraini"},{name:"Bangladeshi"},{name:"Barbadian"},{name:"Barbudans"},{name:"Batswana"},{name:"Belarusian"},{name:"Belgian"},{name:"Belizean"},{name:"Beninese"},{name:"Bhutanese"},{name:"Bolivian"},{name:"Bosnian"},{name:"Brazilian"},{name:"British"},{name:"Bruneian"},{name:"Bulgarian"},{name:"Burkinabe"},{name:"Burmese"},{name:"Burundian"},{name:"Cambodian"},{name:"Cameroonian"},{name:"Canadian"},{name:"Cape Verdean"},{name:"Central African"},{name:"Chadian"},{name:"Chilean"},{name:"Chinese"},{name:"Colombian"},{name:"Comoran"},{name:"Congolese"},{name:"Costa Rican"},{name:"Croatian"},{name:"Cuban"},{name:"Cypriot"},{name:"Czech"},{name:"Danish"},{name:"Djibouti"},{name:"Dominican"},{name:"Dutch"},{name:"East Timorese"},{name:"Ecuadorean"},{name:"Egyptian"},{name:"Emirian"},{name:"Equatorial Guinean"},{name:"Eritrean"},{name:"Estonian"},{name:"Ethiopian"},{name:"Fijian"},{name:"Filipino"},{name:"Finnish"},{name:"French"},{name:"Gabonese"},{name:"Gambian"},{name:"Georgian"},{name:"German"},{name:"Ghanaian"},{name:"Greek"},{name:"Grenadian"},{name:"Guatemalan"},{name:"Guinea-Bissauan"},{name:"Guinean"},{name:"Guyanese"},{name:"Haitian"},{name:"Herzegovinian"},{name:"Honduran"},{name:"Hungarian"},{name:"I-Kiribati"},{name:"Icelander"},{name:"Indian"},{name:"Indonesian"},{name:"Iranian"},{name:"Iraqi"},{name:"Irish"},{name:"Israeli"},{name:"Italian"},{name:"Ivorian"},{name:"Jamaican"},{name:"Japanese"},{name:"Jordanian"},{name:"Kazakhstani"},{name:"Kenyan"},{name:"Kittian and Nevisian"},{name:"Kuwaiti"},{name:"Kyrgyz"},{name:"Laotian"},{name:"Latvian"},{name:"Lebanese"},{name:"Liberian"},{name:"Libyan"},{name:"Liechtensteiner"},{name:"Lithuanian"},{name:"Luxembourger"},{name:"Macedonian"},{name:"Malagasy"},{name:"Malawian"},{name:"Malaysian"},{name:"Maldivan"},{name:"Malian"},{name:"Maltese"},{name:"Marshallese"},{name:"Mauritanian"},{name:"Mauritian"},{name:"Mexican"},{name:"Micronesian"},{name:"Moldovan"},{name:"Monacan"},{name:"Mongolian"},{name:"Moroccan"},{name:"Mosotho"},{name:"Motswana"},{name:"Mozambican"},{name:"Namibian"},{name:"Nauruan"},{name:"Nepalese"},{name:"New Zealander"},{name:"Nicaraguan"},{name:"Nigerian"},{name:"Nigerien"},{name:"North Korean"},{name:"Northern Irish"},{name:"Norwegian"},{name:"Omani"},{name:"Pakistani"},{name:"Palauan"},{name:"Panamanian"},{name:"Papua New Guinean"},{name:"Paraguayan"},{name:"Peruvian"},{name:"Polish"},{name:"Portuguese"},{name:"Qatari"},{name:"Romani"},{name:"Russian"},{name:"Rwandan"},{name:"Saint Lucian"},{name:"Salvadoran"},{name:"Samoan"},{name:"San Marinese"},{name:"Sao Tomean"},{name:"Saudi"},{name:"Scottish"},{name:"Senegalese"},{name:"Serbian"},{name:"Seychellois"},{name:"Sierra Leonean"},{name:"Singaporean"},{name:"Slovakian"},{name:"Slovenian"},{name:"Solomon Islander"},{name:"Somali"},{name:"South African"},{name:"South Korean"},{name:"Spanish"},{name:"Sri Lankan"},{name:"Sudanese"},{name:"Surinamer"},{name:"Swazi"},{name:"Swedish"},{name:"Swiss"},{name:"Syrian"},{name:"Taiwanese"},{name:"Tajik"},{name:"Tanzanian"},{name:"Thai"},{name:"Togolese"},{name:"Tongan"},{name:"Trinidadian or Tobagonian"},{name:"Tunisian"},{name:"Turkish"},{name:"Tuvaluan"},{name:"Ugandan"},{name:"Ukrainian"},{name:"Uruguaya"},{name:"Uzbekistani"},{name:"Venezuela"},{name:"Vietnamese"},{name:"Wels"},{name:"Yemenit"},{name:"Zambia"},{name:"Zimbabwe"}],us_states_and_dc:[{name:"Alabama",abbreviation:"AL"},{name:"Alaska",abbreviation:"AK"},{name:"Arizona",abbreviation:"AZ"},{name:"Arkansas",abbreviation:"AR"},{name:"California",abbreviation:"CA"},{name:"Colorado",abbreviation:"CO"},{name:"Connecticut",abbreviation:"CT"},{name:"Delaware",abbreviation:"DE"},{name:"District of Columbia",abbreviation:"DC"},{name:"Florida",abbreviation:"FL"},{name:"Georgia",abbreviation:"GA"},{name:"Hawaii",abbreviation:"HI"},{name:"Idaho",abbreviation:"ID"},{name:"Illinois",abbreviation:"IL"},{name:"Indiana",abbreviation:"IN"},{name:"Iowa",abbreviation:"IA"},{name:"Kansas",abbreviation:"KS"},{name:"Kentucky",abbreviation:"KY"},{name:"Louisiana",abbreviation:"LA"},{name:"Maine",abbreviation:"ME"},{name:"Maryland",abbreviation:"MD"},{name:"Massachusetts",abbreviation:"MA"},{name:"Michigan",abbreviation:"MI"},{name:"Minnesota",abbreviation:"MN"},{name:"Mississippi",abbreviation:"MS"},{name:"Missouri",abbreviation:"MO"},{name:"Montana",abbreviation:"MT"},{name:"Nebraska",abbreviation:"NE"},{name:"Nevada",abbreviation:"NV"},{name:"New Hampshire",abbreviation:"NH"},{name:"New Jersey",abbreviation:"NJ"},{name:"New Mexico",abbreviation:"NM"},{name:"New York",abbreviation:"NY"},{name:"North Carolina",abbreviation:"NC"},{name:"North Dakota",abbreviation:"ND"},{name:"Ohio",abbreviation:"OH"},{name:"Oklahoma",abbreviation:"OK"},{name:"Oregon",abbreviation:"OR"},{name:"Pennsylvania",abbreviation:"PA"},{name:"Rhode Island",abbreviation:"RI"},{name:"South Carolina",abbreviation:"SC"},{name:"South Dakota",abbreviation:"SD"},{name:"Tennessee",abbreviation:"TN"},{name:"Texas",abbreviation:"TX"},{name:"Utah",abbreviation:"UT"},{name:"Vermont",abbreviation:"VT"},{name:"Virginia",abbreviation:"VA"},{name:"Washington",abbreviation:"WA"},{name:"West Virginia",abbreviation:"WV"},{name:"Wisconsin",abbreviation:"WI"},{name:"Wyoming",abbreviation:"WY"}],territories:[{name:"American Samoa",abbreviation:"AS"},{name:"Federated States of Micronesia",abbreviation:"FM"},{name:"Guam",abbreviation:"GU"},{name:"Marshall Islands",abbreviation:"MH"},{name:"Northern Mariana Islands",abbreviation:"MP"},{name:"Puerto Rico",abbreviation:"PR"},{name:"Virgin Islands, U.S.",abbreviation:"VI"}],armed_forces:[{name:"Armed Forces Europe",abbreviation:"AE"},{name:"Armed Forces Pacific",abbreviation:"AP"},{name:"Armed Forces the Americas",abbreviation:"AA"}],country_regions:{it:[{name:"Valle d'Aosta",abbreviation:"VDA"},{name:"Piemonte",abbreviation:"PIE"},{name:"Lombardia",abbreviation:"LOM"},{name:"Veneto",abbreviation:"VEN"},{name:"Trentino Alto Adige",abbreviation:"TAA"},{name:"Friuli Venezia Giulia",abbreviation:"FVG"},{name:"Liguria",abbreviation:"LIG"},{name:"Emilia Romagna",abbreviation:"EMR"},{name:"Toscana",abbreviation:"TOS"},{name:"Umbria",abbreviation:"UMB"},{name:"Marche",abbreviation:"MAR"},{name:"Abruzzo",abbreviation:"ABR"},{name:"Lazio",abbreviation:"LAZ"},{name:"Campania",abbreviation:"CAM"},{name:"Puglia",abbreviation:"PUG"},{name:"Basilicata",abbreviation:"BAS"},{name:"Molise",abbreviation:"MOL"},{name:"Calabria",abbreviation:"CAL"},{name:"Sicilia",abbreviation:"SIC"},{name:"Sardegna",abbreviation:"SAR"}]},street_suffixes:{us:[{name:"Avenue",abbreviation:"Ave"},{name:"Boulevard",abbreviation:"Blvd"},{name:"Center",abbreviation:"Ctr"},{name:"Circle",abbreviation:"Cir"},{name:"Court",abbreviation:"Ct"},{name:"Drive",abbreviation:"Dr"},{name:"Extension",abbreviation:"Ext"},{name:"Glen",abbreviation:"Gln"},{name:"Grove",abbreviation:"Grv"},{name:"Heights",abbreviation:"Hts"},{name:"Highway",abbreviation:"Hwy"},{name:"Junction",abbreviation:"Jct"},{name:"Key",abbreviation:"Key"},{name:"Lane",abbreviation:"Ln"},{name:"Loop",abbreviation:"Loop"},{name:"Manor",abbreviation:"Mnr"},{name:"Mill",abbreviation:"Mill"},{name:"Park",abbreviation:"Park"},{name:"Parkway",abbreviation:"Pkwy"},{name:"Pass",abbreviation:"Pass"},{name:"Path",abbreviation:"Path"},{name:"Pike",abbreviation:"Pike"},{name:"Place",abbreviation:"Pl"},{name:"Plaza",abbreviation:"Plz"},{name:"Point",abbreviation:"Pt"},{name:"Ridge",abbreviation:"Rdg"},{name:"River",abbreviation:"Riv"},{name:"Road",abbreviation:"Rd"},{name:"Square",abbreviation:"Sq"},{name:"Street",abbreviation:"St"},{name:"Terrace",abbreviation:"Ter"},{name:"Trail",abbreviation:"Trl"},{name:"Turnpike",abbreviation:"Tpke"},{name:"View",abbreviation:"Vw"},{name:"Way",abbreviation:"Way"}],it:[{name:"Accesso",abbreviation:"Acc."},{name:"Alzaia",abbreviation:"Alz."},{name:"Arco",abbreviation:"Arco"},{name:"Archivolto",abbreviation:"Acv."},{name:"Arena",abbreviation:"Arena"},{name:"Argine",abbreviation:"Argine"},{name:"Bacino",abbreviation:"Bacino"},{name:"Banchi",abbreviation:"Banchi"},{name:"Banchina",abbreviation:"Ban."},{name:"Bastioni",abbreviation:"Bas."},{name:"Belvedere",abbreviation:"Belv."},{name:"Borgata",abbreviation:"B.ta"},{name:"Borgo",abbreviation:"B.go"},{name:"Calata",abbreviation:"Cal."},{name:"Calle",abbreviation:"Calle"},{name:"Campiello",abbreviation:"Cam."},{name:"Campo",abbreviation:"Cam."},{name:"Canale",abbreviation:"Can."},{name:"Carraia",abbreviation:"Carr."},{name:"Cascina",abbreviation:"Cascina"},{name:"Case sparse",abbreviation:"c.s."},{name:"Cavalcavia",abbreviation:"Cv."},{name:"Circonvallazione",abbreviation:"Cv."},{name:"Complanare",abbreviation:"C.re"},{name:"Contrada",abbreviation:"C.da"},{name:"Corso",abbreviation:"C.so"},{name:"Corte",abbreviation:"C.te"},{name:"Cortile",abbreviation:"C.le"},{name:"Diramazione",abbreviation:"Dir."},{name:"Fondaco",abbreviation:"F.co"},{name:"Fondamenta",abbreviation:"F.ta"},{name:"Fondo",abbreviation:"F.do"},{name:"Frazione",abbreviation:"Fr."},{name:"Isola",abbreviation:"Is."},{name:"Largo",abbreviation:"L.go"},{name:"Litoranea",abbreviation:"Lit."},{name:"Lungolago",abbreviation:"L.go lago"},{name:"Lungo Po",abbreviation:"l.go Po"},{name:"Molo",abbreviation:"Molo"},{name:"Mura",abbreviation:"Mura"},{name:"Passaggio privato",abbreviation:"pass. priv."},{name:"Passeggiata",abbreviation:"Pass."},{name:"Piazza",abbreviation:"P.zza"},{name:"Piazzale",abbreviation:"P.le"},{name:"Ponte",abbreviation:"P.te"},{name:"Portico",abbreviation:"P.co"},{name:"Rampa",abbreviation:"Rampa"},{name:"Regione",abbreviation:"Reg."},{name:"Rione",abbreviation:"R.ne"},{name:"Rio",abbreviation:"Rio"},{name:"Ripa",abbreviation:"Ripa"},{name:"Riva",abbreviation:"Riva"},{name:"Rondò",abbreviation:"Rondò"},{name:"Rotonda",abbreviation:"Rot."},{name:"Sagrato",abbreviation:"Sagr."},{name:"Salita",abbreviation:"Sal."},{name:"Scalinata",abbreviation:"Scal."},{name:"Scalone",abbreviation:"Scal."},{name:"Slargo",abbreviation:"Sl."},{name:"Sottoportico",abbreviation:"Sott."},{name:"Strada",abbreviation:"Str."},{name:"Stradale",abbreviation:"Str.le"},{name:"Strettoia",abbreviation:"Strett."},{name:"Traversa",abbreviation:"Trav."},{name:"Via",abbreviation:"V."},{name:"Viale",abbreviation:"V.le"},{name:"Vicinale",abbreviation:"Vic.le"},{name:"Vicolo",abbreviation:"Vic."}]},months:[{name:"January",short_name:"Jan",numeric:"01",days:31},{name:"February",short_name:"Feb",numeric:"02",days:28},{name:"March",short_name:"Mar",numeric:"03",days:31},{name:"April",short_name:"Apr",numeric:"04",days:30},{name:"May",short_name:"May",numeric:"05",days:31},{name:"June",short_name:"Jun",numeric:"06",days:30},{name:"July",short_name:"Jul",numeric:"07",days:31},{name:"August",short_name:"Aug",numeric:"08",days:31},{name:"September",short_name:"Sep",numeric:"09",days:30},{name:"October",short_name:"Oct",numeric:"10",days:31},{name:"November",short_name:"Nov",numeric:"11",days:30},{name:"December",short_name:"Dec",numeric:"12",days:31}],cc_types:[{name:"American Express",short_name:"amex",prefix:"34",length:15},{name:"Bankcard",short_name:"bankcard",prefix:"5610",length:16},{name:"China UnionPay",short_name:"chinaunion",prefix:"62",length:16},{name:"Diners Club Carte Blanche",short_name:"dccarte",prefix:"300",length:14},{name:"Diners Club enRoute",short_name:"dcenroute",prefix:"2014",length:15},{name:"Diners Club International",short_name:"dcintl",prefix:"36",length:14},{name:"Diners Club United States & Canada",short_name:"dcusc",prefix:"54",length:16},{name:"Discover Card",short_name:"discover",prefix:"6011",length:16},{name:"InstaPayment",short_name:"instapay",prefix:"637",length:16},{name:"JCB",short_name:"jcb",prefix:"3528",length:16},{name:"Laser",short_name:"laser",prefix:"6304",length:16},{name:"Maestro",short_name:"maestro",prefix:"5018",length:16},{name:"Mastercard",short_name:"mc",prefix:"51",length:16},{name:"Solo",short_name:"solo",prefix:"6334",length:16},{name:"Switch",short_name:"switch",prefix:"4903",length:16},{name:"Visa",short_name:"visa",prefix:"4",length:16},{name:"Visa Electron",short_name:"electron",prefix:"4026",length:16}],currency_types:[{code:"AED",name:"United Arab Emirates Dirham"},{code:"AFN",name:"Afghanistan Afghani"},{code:"ALL",name:"Albania Lek"},{code:"AMD",name:"Armenia Dram"},{code:"ANG",name:"Netherlands Antilles Guilder"},{code:"AOA",name:"Angola Kwanza"},{code:"ARS",name:"Argentina Peso"},{code:"AUD",name:"Australia Dollar"},{code:"AWG",name:"Aruba Guilder"},{code:"AZN",name:"Azerbaijan New Manat"},{code:"BAM",name:"Bosnia and Herzegovina Convertible Marka"},{code:"BBD",name:"Barbados Dollar"},{code:"BDT",name:"Bangladesh Taka"},{code:"BGN",name:"Bulgaria Lev"},{code:"BHD",name:"Bahrain Dinar"},{code:"BIF",name:"Burundi Franc"},{code:"BMD",name:"Bermuda Dollar"},{code:"BND",name:"Brunei Darussalam Dollar"},{code:"BOB",name:"Bolivia Boliviano"},{code:"BRL",name:"Brazil Real"},{code:"BSD",name:"Bahamas Dollar"},{code:"BTN",name:"Bhutan Ngultrum"},{code:"BWP",name:"Botswana Pula"},{code:"BYR",name:"Belarus Ruble"},{code:"BZD",name:"Belize Dollar"},{code:"CAD",name:"Canada Dollar"},{code:"CDF",name:"Congo/Kinshasa Franc"},{code:"CHF",name:"Switzerland Franc"},{code:"CLP",name:"Chile Peso"},{code:"CNY",name:"China Yuan Renminbi"},{code:"COP",name:"Colombia Peso"},{code:"CRC",name:"Costa Rica Colon"},{code:"CUC",name:"Cuba Convertible Peso"},{code:"CUP",name:"Cuba Peso"},{code:"CVE",name:"Cape Verde Escudo"},{code:"CZK",name:"Czech Republic Koruna"},{code:"DJF",name:"Djibouti Franc"},{code:"DKK",name:"Denmark Krone"},{code:"DOP",name:"Dominican Republic Peso"},{code:"DZD",name:"Algeria Dinar"},{code:"EGP",name:"Egypt Pound"},{code:"ERN",name:"Eritrea Nakfa"},{code:"ETB",name:"Ethiopia Birr"},{code:"EUR",name:"Euro Member Countries"},{code:"FJD",name:"Fiji Dollar"},{code:"FKP",name:"Falkland Islands (Malvinas) Pound"},{code:"GBP",name:"United Kingdom Pound"},{code:"GEL",name:"Georgia Lari"},{code:"GGP",name:"Guernsey Pound"},{code:"GHS",name:"Ghana Cedi"},{code:"GIP",name:"Gibraltar Pound"},{code:"GMD",name:"Gambia Dalasi"},{code:"GNF",name:"Guinea Franc"},{code:"GTQ",name:"Guatemala Quetzal"},{code:"GYD",name:"Guyana Dollar"},{code:"HKD",name:"Hong Kong Dollar"},{code:"HNL",name:"Honduras Lempira"},{code:"HRK",name:"Croatia Kuna"},{code:"HTG",name:"Haiti Gourde"},{code:"HUF",name:"Hungary Forint"},{code:"IDR",name:"Indonesia Rupiah"},{code:"ILS",name:"Israel Shekel"},{code:"IMP",name:"Isle of Man Pound"},{code:"INR",name:"India Rupee"},{code:"IQD",name:"Iraq Dinar"},{code:"IRR",name:"Iran Rial"},{code:"ISK",name:"Iceland Krona"},{code:"JEP",name:"Jersey Pound"},{code:"JMD",name:"Jamaica Dollar"},{code:"JOD",name:"Jordan Dinar"},{code:"JPY",name:"Japan Yen"},{code:"KES",name:"Kenya Shilling"},{code:"KGS",name:"Kyrgyzstan Som"},{code:"KHR",name:"Cambodia Riel"},{code:"KMF",name:"Comoros Franc"},{code:"KPW",name:"Korea (North) Won"},{code:"KRW",name:"Korea (South) Won"},{code:"KWD",name:"Kuwait Dinar"},{code:"KYD",name:"Cayman Islands Dollar"},{code:"KZT",name:"Kazakhstan Tenge"},{code:"LAK",name:"Laos Kip"},{code:"LBP",name:"Lebanon Pound"},{code:"LKR",name:"Sri Lanka Rupee"},{code:"LRD",name:"Liberia Dollar"},{code:"LSL",name:"Lesotho Loti"},{code:"LTL",name:"Lithuania Litas"},{code:"LYD",name:"Libya Dinar"},{code:"MAD",name:"Morocco Dirham"},{code:"MDL",name:"Moldova Leu"},{code:"MGA",name:"Madagascar Ariary"},{code:"MKD",name:"Macedonia Denar"},{code:"MMK",name:"Myanmar (Burma) Kyat"},{code:"MNT",name:"Mongolia Tughrik"},{code:"MOP",name:"Macau Pataca"},{code:"MRO",name:"Mauritania Ouguiya"},{code:"MUR",name:"Mauritius Rupee"},{code:"MVR",name:"Maldives (Maldive Islands) Rufiyaa"},{code:"MWK",name:"Malawi Kwacha"},{code:"MXN",name:"Mexico Peso"},{code:"MYR",name:"Malaysia Ringgit"},{code:"MZN",name:"Mozambique Metical"},{code:"NAD",name:"Namibia Dollar"},{code:"NGN",name:"Nigeria Naira"},{code:"NIO",name:"Nicaragua Cordoba"},{code:"NOK",name:"Norway Krone"},{code:"NPR",name:"Nepal Rupee"},{code:"NZD",name:"New Zealand Dollar"},{code:"OMR",name:"Oman Rial"},{code:"PAB",name:"Panama Balboa"},{code:"PEN",name:"Peru Nuevo Sol"},{code:"PGK",name:"Papua New Guinea Kina"},{code:"PHP",name:"Philippines Peso"},{code:"PKR",name:"Pakistan Rupee"},{code:"PLN",name:"Poland Zloty"},{code:"PYG",name:"Paraguay Guarani"},{code:"QAR",name:"Qatar Riyal"},{code:"RON",name:"Romania New Leu"},{code:"RSD",name:"Serbia Dinar"},{code:"RUB",name:"Russia Ruble"},{code:"RWF",name:"Rwanda Franc"},{code:"SAR",name:"Saudi Arabia Riyal"},{code:"SBD",name:"Solomon Islands Dollar"},{code:"SCR",name:"Seychelles Rupee"},{code:"SDG",name:"Sudan Pound"},{code:"SEK",name:"Sweden Krona"},{code:"SGD",name:"Singapore Dollar"},{code:"SHP",name:"Saint Helena Pound"},{code:"SLL",name:"Sierra Leone Leone"},{code:"SOS",name:"Somalia Shilling"},{code:"SPL",name:"Seborga Luigino"},{code:"SRD",name:"Suriname Dollar"},{code:"STD",name:"São Tomé and Príncipe Dobra"},{code:"SVC",name:"El Salvador Colon"},{code:"SYP",name:"Syria Pound"},{code:"SZL",name:"Swaziland Lilangeni"},{code:"THB",name:"Thailand Baht"},{code:"TJS",name:"Tajikistan Somoni"},{code:"TMT",name:"Turkmenistan Manat"},{code:"TND",name:"Tunisia Dinar"},{code:"TOP",name:"Tonga Pa'anga"},{code:"TRY",name:"Turkey Lira"},{code:"TTD",name:"Trinidad and Tobago Dollar"},{code:"TVD",name:"Tuvalu Dollar"},{code:"TWD",name:"Taiwan New Dollar"},{code:"TZS",name:"Tanzania Shilling"},{code:"UAH",name:"Ukraine Hryvnia"},{code:"UGX",name:"Uganda Shilling"},{code:"USD",name:"United States Dollar"},{code:"UYU",name:"Uruguay Peso"},{code:"UZS",name:"Uzbekistan Som"},{code:"VEF",name:"Venezuela Bolivar"},{code:"VND",name:"Viet Nam Dong"},{code:"VUV",name:"Vanuatu Vatu"},{code:"WST",name:"Samoa Tala"},{code:"XAF",name:"Communauté Financière Africaine (BEAC) CFA Franc BEAC"},{code:"XCD",name:"East Caribbean Dollar"},{code:"XDR",name:"International Monetary Fund (IMF) Special Drawing Rights"},{code:"XOF",name:"Communauté Financière Africaine (BCEAO) Franc"},{code:"XPF",name:"Comptoirs Français du Pacifique (CFP) Franc"},{code:"YER",name:"Yemen Rial"},{code:"ZAR",name:"South Africa Rand"},{code:"ZMW",name:"Zambia Kwacha"},{code:"ZWD",name:"Zimbabwe Dollar"}],colorNames:["AliceBlue","Black","Navy","DarkBlue","MediumBlue","Blue","DarkGreen","Green","Teal","DarkCyan","DeepSkyBlue","DarkTurquoise","MediumSpringGreen","Lime","SpringGreen","Aqua","Cyan","MidnightBlue","DodgerBlue","LightSeaGreen","ForestGreen","SeaGreen","DarkSlateGray","LimeGreen","MediumSeaGreen","Turquoise","RoyalBlue","SteelBlue","DarkSlateBlue","MediumTurquoise","Indigo","DarkOliveGreen","CadetBlue","CornflowerBlue","RebeccaPurple","MediumAquaMarine","DimGray","SlateBlue","OliveDrab","SlateGray","LightSlateGray","MediumSlateBlue","LawnGreen","Chartreuse","Aquamarine","Maroon","Purple","Olive","Gray","SkyBlue","LightSkyBlue","BlueViolet","DarkRed","DarkMagenta","SaddleBrown","Ivory","White","DarkSeaGreen","LightGreen","MediumPurple","DarkViolet","PaleGreen","DarkOrchid","YellowGreen","Sienna","Brown","DarkGray","LightBlue","GreenYellow","PaleTurquoise","LightSteelBlue","PowderBlue","FireBrick","DarkGoldenRod","MediumOrchid","RosyBrown","DarkKhaki","Silver","MediumVioletRed","IndianRed","Peru","Chocolate","Tan","LightGray","Thistle","Orchid","GoldenRod","PaleVioletRed","Crimson","Gainsboro","Plum","BurlyWood","LightCyan","Lavender","DarkSalmon","Violet","PaleGoldenRod","LightCoral","Khaki","AliceBlue","HoneyDew","Azure","SandyBrown","Wheat","Beige","WhiteSmoke","MintCream","GhostWhite","Salmon","AntiqueWhite","Linen","LightGoldenRodYellow","OldLace","Red","Fuchsia","Magenta","DeepPink","OrangeRed","Tomato","HotPink","Coral","DarkOrange","LightSalmon","Orange","LightPink","Pink","Gold","PeachPuff","NavajoWhite","Moccasin","Bisque","MistyRose","BlanchedAlmond","PapayaWhip","LavenderBlush","SeaShell","Cornsilk","LemonChiffon","FloralWhite","Snow","Yellow","LightYellow"],fileExtension:{raster:["bmp","gif","gpl","ico","jpeg","psd","png","psp","raw","tiff"],vector:["3dv","amf","awg","ai","cgm","cdr","cmx","dxf","e2d","egt","eps","fs","odg","svg","xar"],"3d":["3dmf","3dm","3mf","3ds","an8","aoi","blend","cal3d","cob","ctm","iob","jas","max","mb","mdx","obj","x","x3d"],document:["doc","docx","dot","html","xml","odt","odm","ott","csv","rtf","tex","xhtml","xps"]}},q=Object.prototype.hasOwnProperty,r=Object.keys||function(a){var b=[];for(var c in a)q.call(a,c)&&b.push(c);return b};a.prototype.get=function(a){return g(p[a])},a.prototype.mac_address=function(a){a=b(a),a.separator||(a.separator=a.networkVersion?".":":");var c="ABCDEF1234567890",d="";return d=a.networkVersion?this.n(this.string,3,{pool:c,length:4}).join(a.separator):this.n(this.string,6,{pool:c,length:2}).join(a.separator)},a.prototype.normal=function(a){if(a=b(a,{mean:0,dev:1,pool:[]}),c(a.pool.constructor!==Array,"Chance: The pool option must be a valid array."),a.pool.length>0)return this.normal_pool(a);var d,e,f,g,h=a.mean,i=a.dev;do e=2*this.random()-1,f=2*this.random()-1,d=e*e+f*f;while(d>=1);return g=e*Math.sqrt(-2*Math.log(d)/d),i*g+h},a.prototype.normal_pool=function(a){var b=0;do{var c=Math.round(this.normal({mean:a.mean,dev:a.dev}));if(c<a.pool.length&&c>=0)return a.pool[c];b++}while(100>b);throw new RangeError("Chance: Your pool is too small for the given mean and standard deviation. Please adjust.")},a.prototype.radio=function(a){a=b(a,{side:"?"});var c="";switch(a.side.toLowerCase()){case"east":case"e":c="W";break;case"west":case"w":c="K";break;default:c=this.character({pool:"KW"})}return c+this.character({alpha:!0,casing:"upper"})+this.character({alpha:!0,casing:"upper"})+this.character({alpha:!0,casing:"upper"})},a.prototype.set=function(a,b){"string"==typeof a?p[a]=b:p=g(a,p)},a.prototype.tv=function(a){return this.radio(a)},a.prototype.cnpj=function(){var a=this.n(this.natural,8,{max:9}),b=2+6*a[7]+7*a[6]+8*a[5]+9*a[4]+2*a[3]+3*a[2]+4*a[1]+5*a[0];b=11-b%11,b>=10&&(b=0);var c=2*b+3+7*a[7]+8*a[6]+9*a[5]+2*a[4]+3*a[3]+4*a[2]+5*a[1]+6*a[0];return c=11-c%11,c>=10&&(c=0),""+a[0]+a[1]+"."+a[2]+a[3]+a[4]+"."+a[5]+a[6]+a[7]+"/0001-"+b+c},a.prototype.mersenne_twister=function(a){return new s(a)},a.prototype.blueimp_md5=function(){return new t};var s=function(a){void 0===a&&(a=Math.floor(Math.random()*Math.pow(10,13))),this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=new Array(this.N),this.mti=this.N+1,this.init_genrand(a)};s.prototype.init_genrand=function(a){for(this.mt[0]=a>>>0,this.mti=1;this.mti<this.N;this.mti++)a=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30,this.mt[this.mti]=(1812433253*((4294901760&a)>>>16)<<16)+1812433253*(65535&a)+this.mti,this.mt[this.mti]>>>=0},s.prototype.init_by_array=function(a,b){var c,d,e=1,f=0;for(this.init_genrand(19650218),c=this.N>b?this.N:b;c;c--)d=this.mt[e-1]^this.mt[e-1]>>>30,this.mt[e]=(this.mt[e]^(1664525*((4294901760&d)>>>16)<<16)+1664525*(65535&d))+a[f]+f,this.mt[e]>>>=0,e++,f++,e>=this.N&&(this.mt[0]=this.mt[this.N-1],e=1),f>=b&&(f=0);for(c=this.N-1;c;c--)d=this.mt[e-1]^this.mt[e-1]>>>30,this.mt[e]=(this.mt[e]^(1566083941*((4294901760&d)>>>16)<<16)+1566083941*(65535&d))-e,this.mt[e]>>>=0,e++,e>=this.N&&(this.mt[0]=this.mt[this.N-1],e=1);this.mt[0]=2147483648},s.prototype.genrand_int32=function(){var a,b=new Array(0,this.MATRIX_A);if(this.mti>=this.N){var c;for(this.mti===this.N+1&&this.init_genrand(5489),c=0;c<this.N-this.M;c++)a=this.mt[c]&this.UPPER_MASK|this.mt[c+1]&this.LOWER_MASK,this.mt[c]=this.mt[c+this.M]^a>>>1^b[1&a];for(;c<this.N-1;c++)a=this.mt[c]&this.UPPER_MASK|this.mt[c+1]&this.LOWER_MASK,this.mt[c]=this.mt[c+(this.M-this.N)]^a>>>1^b[1&a];a=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^a>>>1^b[1&a],this.mti=0}return a=this.mt[this.mti++],a^=a>>>11,a^=a<<7&2636928640,a^=a<<15&4022730752,a^=a>>>18,a>>>0},s.prototype.genrand_int31=function(){return this.genrand_int32()>>>1},s.prototype.genrand_real1=function(){return this.genrand_int32()*(1/4294967295)},s.prototype.random=function(){return this.genrand_int32()*(1/4294967296)},s.prototype.genrand_real3=function(){return(this.genrand_int32()+.5)*(1/4294967296)},s.prototype.genrand_res53=function(){var a=this.genrand_int32()>>>5,b=this.genrand_int32()>>>6;return(67108864*a+b)*(1/9007199254740992)};var t=function(){};t.prototype.VERSION="1.0.1",t.prototype.safe_add=function(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c},t.prototype.bit_roll=function(a,b){return a<<b|a>>>32-b},t.prototype.md5_cmn=function(a,b,c,d,e,f){return this.safe_add(this.bit_roll(this.safe_add(this.safe_add(b,a),this.safe_add(d,f)),e),c)},t.prototype.md5_ff=function(a,b,c,d,e,f,g){return this.md5_cmn(b&c|~b&d,a,b,e,f,g)},t.prototype.md5_gg=function(a,b,c,d,e,f,g){return this.md5_cmn(b&d|c&~d,a,b,e,f,g)},t.prototype.md5_hh=function(a,b,c,d,e,f,g){return this.md5_cmn(b^c^d,a,b,e,f,g)},t.prototype.md5_ii=function(a,b,c,d,e,f,g){return this.md5_cmn(c^(b|~d),a,b,e,f,g)},t.prototype.binl_md5=function(a,b){a[b>>5]|=128<<b%32,a[(b+64>>>9<<4)+14]=b;var c,d,e,f,g,h=1732584193,i=-271733879,j=-1732584194,k=271733878;for(c=0;c<a.length;c+=16)d=h,e=i,f=j,g=k,h=this.md5_ff(h,i,j,k,a[c],7,-680876936),k=this.md5_ff(k,h,i,j,a[c+1],12,-389564586),j=this.md5_ff(j,k,h,i,a[c+2],17,606105819),i=this.md5_ff(i,j,k,h,a[c+3],22,-1044525330),h=this.md5_ff(h,i,j,k,a[c+4],7,-176418897),k=this.md5_ff(k,h,i,j,a[c+5],12,1200080426),j=this.md5_ff(j,k,h,i,a[c+6],17,-1473231341),i=this.md5_ff(i,j,k,h,a[c+7],22,-45705983),h=this.md5_ff(h,i,j,k,a[c+8],7,1770035416),k=this.md5_ff(k,h,i,j,a[c+9],12,-1958414417),j=this.md5_ff(j,k,h,i,a[c+10],17,-42063),i=this.md5_ff(i,j,k,h,a[c+11],22,-1990404162),h=this.md5_ff(h,i,j,k,a[c+12],7,1804603682),k=this.md5_ff(k,h,i,j,a[c+13],12,-40341101),j=this.md5_ff(j,k,h,i,a[c+14],17,-1502002290),i=this.md5_ff(i,j,k,h,a[c+15],22,1236535329),h=this.md5_gg(h,i,j,k,a[c+1],5,-165796510),k=this.md5_gg(k,h,i,j,a[c+6],9,-1069501632),j=this.md5_gg(j,k,h,i,a[c+11],14,643717713),i=this.md5_gg(i,j,k,h,a[c],20,-373897302),h=this.md5_gg(h,i,j,k,a[c+5],5,-701558691),k=this.md5_gg(k,h,i,j,a[c+10],9,38016083),j=this.md5_gg(j,k,h,i,a[c+15],14,-660478335),i=this.md5_gg(i,j,k,h,a[c+4],20,-405537848),h=this.md5_gg(h,i,j,k,a[c+9],5,568446438),k=this.md5_gg(k,h,i,j,a[c+14],9,-1019803690),j=this.md5_gg(j,k,h,i,a[c+3],14,-187363961),i=this.md5_gg(i,j,k,h,a[c+8],20,1163531501),h=this.md5_gg(h,i,j,k,a[c+13],5,-1444681467),k=this.md5_gg(k,h,i,j,a[c+2],9,-51403784),j=this.md5_gg(j,k,h,i,a[c+7],14,1735328473),i=this.md5_gg(i,j,k,h,a[c+12],20,-1926607734),h=this.md5_hh(h,i,j,k,a[c+5],4,-378558),k=this.md5_hh(k,h,i,j,a[c+8],11,-2022574463),j=this.md5_hh(j,k,h,i,a[c+11],16,1839030562),i=this.md5_hh(i,j,k,h,a[c+14],23,-35309556),h=this.md5_hh(h,i,j,k,a[c+1],4,-1530992060),k=this.md5_hh(k,h,i,j,a[c+4],11,1272893353),j=this.md5_hh(j,k,h,i,a[c+7],16,-155497632),i=this.md5_hh(i,j,k,h,a[c+10],23,-1094730640),h=this.md5_hh(h,i,j,k,a[c+13],4,681279174),k=this.md5_hh(k,h,i,j,a[c],11,-358537222),j=this.md5_hh(j,k,h,i,a[c+3],16,-722521979),i=this.md5_hh(i,j,k,h,a[c+6],23,76029189),h=this.md5_hh(h,i,j,k,a[c+9],4,-640364487),k=this.md5_hh(k,h,i,j,a[c+12],11,-421815835),j=this.md5_hh(j,k,h,i,a[c+15],16,530742520),i=this.md5_hh(i,j,k,h,a[c+2],23,-995338651),h=this.md5_ii(h,i,j,k,a[c],6,-198630844),k=this.md5_ii(k,h,i,j,a[c+7],10,1126891415),j=this.md5_ii(j,k,h,i,a[c+14],15,-1416354905),i=this.md5_ii(i,j,k,h,a[c+5],21,-57434055),h=this.md5_ii(h,i,j,k,a[c+12],6,1700485571),k=this.md5_ii(k,h,i,j,a[c+3],10,-1894986606),j=this.md5_ii(j,k,h,i,a[c+10],15,-1051523),i=this.md5_ii(i,j,k,h,a[c+1],21,-2054922799),h=this.md5_ii(h,i,j,k,a[c+8],6,1873313359),k=this.md5_ii(k,h,i,j,a[c+15],10,-30611744),j=this.md5_ii(j,k,h,i,a[c+6],15,-1560198380),i=this.md5_ii(i,j,k,h,a[c+13],21,1309151649),h=this.md5_ii(h,i,j,k,a[c+4],6,-145523070),k=this.md5_ii(k,h,i,j,a[c+11],10,-1120210379),j=this.md5_ii(j,k,h,i,a[c+2],15,718787259),i=this.md5_ii(i,j,k,h,a[c+9],21,-343485551),h=this.safe_add(h,d),i=this.safe_add(i,e),j=this.safe_add(j,f),k=this.safe_add(k,g);return[h,i,j,k]},t.prototype.binl2rstr=function(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c},t.prototype.rstr2binl=function(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c},t.prototype.rstr_md5=function(a){return this.binl2rstr(this.binl_md5(this.rstr2binl(a),8*a.length))},t.prototype.rstr_hmac_md5=function(a,b){var c,d,e=this.rstr2binl(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=this.binl_md5(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=this.binl_md5(f.concat(this.rstr2binl(b)),512+8*b.length),this.binl2rstr(this.binl_md5(g.concat(d),640))},t.prototype.rstr2hex=function(a){
var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e},t.prototype.str2rstr_utf8=function(a){return unescape(encodeURIComponent(a))},t.prototype.raw_md5=function(a){return this.rstr_md5(this.str2rstr_utf8(a))},t.prototype.hex_md5=function(a){return this.rstr2hex(this.raw_md5(a))},t.prototype.raw_hmac_md5=function(a,b){return this.rstr_hmac_md5(this.str2rstr_utf8(a),this.str2rstr_utf8(b))},t.prototype.hex_hmac_md5=function(a,b){return this.rstr2hex(this.raw_hmac_md5(a,b))},t.prototype.md5=function(a,b,c){return b?c?this.raw_hmac_md5(b,a):this.hex_hmac_md5(b,a):c?this.raw_md5(a):this.hex_md5(a)},"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(exports=module.exports=a),exports.Chance=a),"function"==typeof define&&define.amd&&define([],function(){return a}),"undefined"!=typeof importScripts&&(chance=new a),"object"==typeof window&&"object"==typeof window.document&&(window.Chance=a,window.chance=new a)}();
//# sourceMappingURL=chance.min.js.map
/**
 * @license
 * Lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */
;(function(){function n(n,t){return n.set(t[0],t[1]),n}function t(n,t){return n.add(t),n}function r(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function e(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&false!==t(n[r],r,n););return n}function i(n,t){for(var r=null==n?0:n.length;r--&&false!==t(n[r],r,n););
return n}function o(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function f(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function c(n,t){return!(null==n||!n.length)&&-1<d(n,t,0)}function a(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return true;return false}function l(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function s(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];
return n}function h(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);return r}function p(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function _(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return true;return false}function v(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,false}),e}function g(n,t,r,e){var u=n.length;for(r+=e?1:-1;e?r--:++r<u;)if(t(n[r],r,n))return r;return-1}function d(n,t,r){if(t===t)n:{
--r;for(var e=n.length;++r<e;)if(n[r]===t){n=r;break n}n=-1}else n=g(n,b,r);return n}function y(n,t,r,e){--r;for(var u=n.length;++r<u;)if(e(n[r],t))return r;return-1}function b(n){return n!==n}function x(n,t){var r=null==n?0:n.length;return r?k(n,t)/r:P}function j(n){return function(t){return null==t?F:t[n]}}function w(n){return function(t){return null==n?F:n[t]}}function m(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=false,n):t(r,n,u,i)}),r}function A(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;
return n}function k(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==F&&(r=r===F?i:r+i)}return r}function E(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function O(n,t){return l(t,function(t){return[t,n[t]]})}function S(n){return function(t){return n(t)}}function I(n,t){return l(t,function(t){return n[t]})}function R(n,t){return n.has(t)}function z(n,t){for(var r=-1,e=n.length;++r<e&&-1<d(t,n[r],0););return r}function W(n,t){for(var r=n.length;r--&&-1<d(t,n[r],0););return r}function B(n){
return"\\"+Tn[n]}function L(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function U(n,t){return function(r){return n(t(r))}}function C(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&"__lodash_placeholder__"!==o||(n[r]="__lodash_placeholder__",i[u++]=r)}return i}function D(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function M(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function T(n){if(Bn.test(n)){
for(var t=zn.lastIndex=0;zn.test(n);)++t;n=t}else n=tt(n);return n}function $(n){return Bn.test(n)?n.match(zn)||[]:n.split("")}var F,N=1/0,P=NaN,Z=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],q=/\b__p\+='';/g,V=/\b(__p\+=)''\+/g,K=/(__e\(.*?\)|\b__t\))\+'';/g,G=/&(?:amp|lt|gt|quot|#39);/g,H=/[&<>"']/g,J=RegExp(G.source),Y=RegExp(H.source),Q=/<%-([\s\S]+?)%>/g,X=/<%([\s\S]+?)%>/g,nn=/<%=([\s\S]+?)%>/g,tn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,rn=/^\w*$/,en=/^\./,un=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,on=/[\\^$.*+?()[\]{}|]/g,fn=RegExp(on.source),cn=/^\s+|\s+$/g,an=/^\s+/,ln=/\s+$/,sn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,hn=/\{\n\/\* \[wrapped with (.+)\] \*/,pn=/,? & /,_n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,vn=/\\(\\)?/g,gn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,dn=/\w*$/,yn=/^[-+]0x[0-9a-f]+$/i,bn=/^0b[01]+$/i,xn=/^\[object .+?Constructor\]$/,jn=/^0o[0-7]+$/i,wn=/^(?:0|[1-9]\d*)$/,mn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,An=/($^)/,kn=/['\n\r\u2028\u2029\\]/g,En="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",On="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+En,Sn="(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",In=RegExp("['\u2019]","g"),Rn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),zn=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+Sn+En,"g"),Wn=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)|\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)|\\d+",On].join("|"),"g"),Bn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Ln=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Un="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),Cn={};
Cn["[object Float32Array]"]=Cn["[object Float64Array]"]=Cn["[object Int8Array]"]=Cn["[object Int16Array]"]=Cn["[object Int32Array]"]=Cn["[object Uint8Array]"]=Cn["[object Uint8ClampedArray]"]=Cn["[object Uint16Array]"]=Cn["[object Uint32Array]"]=true,Cn["[object Arguments]"]=Cn["[object Array]"]=Cn["[object ArrayBuffer]"]=Cn["[object Boolean]"]=Cn["[object DataView]"]=Cn["[object Date]"]=Cn["[object Error]"]=Cn["[object Function]"]=Cn["[object Map]"]=Cn["[object Number]"]=Cn["[object Object]"]=Cn["[object RegExp]"]=Cn["[object Set]"]=Cn["[object String]"]=Cn["[object WeakMap]"]=false;
var Dn={};Dn["[object Arguments]"]=Dn["[object Array]"]=Dn["[object ArrayBuffer]"]=Dn["[object DataView]"]=Dn["[object Boolean]"]=Dn["[object Date]"]=Dn["[object Float32Array]"]=Dn["[object Float64Array]"]=Dn["[object Int8Array]"]=Dn["[object Int16Array]"]=Dn["[object Int32Array]"]=Dn["[object Map]"]=Dn["[object Number]"]=Dn["[object Object]"]=Dn["[object RegExp]"]=Dn["[object Set]"]=Dn["[object String]"]=Dn["[object Symbol]"]=Dn["[object Uint8Array]"]=Dn["[object Uint8ClampedArray]"]=Dn["[object Uint16Array]"]=Dn["[object Uint32Array]"]=true,
Dn["[object Error]"]=Dn["[object Function]"]=Dn["[object WeakMap]"]=false;var Mn,Tn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},$n=parseFloat,Fn=parseInt,Nn=typeof global=="object"&&global&&global.Object===Object&&global,Pn=typeof self=="object"&&self&&self.Object===Object&&self,Zn=Nn||Pn||Function("return this")(),qn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Vn=qn&&typeof module=="object"&&module&&!module.nodeType&&module,Kn=Vn&&Vn.exports===qn,Gn=Kn&&Nn.process;
n:{try{Mn=Gn&&Gn.binding&&Gn.binding("util");break n}catch(n){}Mn=void 0}var Hn=Mn&&Mn.isArrayBuffer,Jn=Mn&&Mn.isDate,Yn=Mn&&Mn.isMap,Qn=Mn&&Mn.isRegExp,Xn=Mn&&Mn.isSet,nt=Mn&&Mn.isTypedArray,tt=j("length"),rt=w({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I",
"\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C",
"\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i",
"\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S",
"\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe",
"\u0149":"'n","\u017f":"s"}),et=w({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),ut=w({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),it=function w(En){function On(n){if(xu(n)&&!af(n)&&!(n instanceof Mn)){if(n instanceof zn)return n;if(ci.call(n,"__wrapped__"))return Pe(n)}return new zn(n)}function Sn(){}function zn(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=F}function Mn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,
this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Tn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Nn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Pn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function qn(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new Pn;++t<r;)this.add(n[t])}function Vn(n){
this.size=(this.__data__=new Nn(n)).size}function Gn(n,t){var r,e=af(n),u=!e&&cf(n),i=!e&&!u&&sf(n),o=!e&&!u&&!i&&gf(n),u=(e=e||u||i||o)?E(n.length,ri):[],f=u.length;for(r in n)!t&&!ci.call(n,r)||e&&("length"==r||i&&("offset"==r||"parent"==r)||o&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Re(r,f))||u.push(r);return u}function tt(n){var t=n.length;return t?n[cr(0,t-1)]:F}function ot(n,t){return Te(Mr(n),gt(t,0,n.length))}function ft(n){return Te(Mr(n))}function ct(n,t,r){(r===F||hu(n[t],r))&&(r!==F||t in n)||_t(n,t,r);
}function at(n,t,r){var e=n[t];ci.call(n,t)&&hu(e,r)&&(r!==F||t in n)||_t(n,t,r)}function lt(n,t){for(var r=n.length;r--;)if(hu(n[r][0],t))return r;return-1}function st(n,t,r,e){return oo(n,function(n,u,i){t(e,n,r(n),i)}),e}function ht(n,t){return n&&Tr(t,Lu(t),n)}function pt(n,t){return n&&Tr(t,Uu(t),n)}function _t(n,t,r){"__proto__"==t&&Ei?Ei(n,t,{configurable:true,enumerable:true,value:r,writable:true}):n[t]=r}function vt(n,t){for(var r=-1,e=t.length,u=Hu(e),i=null==n;++r<e;)u[r]=i?F:Wu(n,t[r]);return u;
}function gt(n,t,r){return n===n&&(r!==F&&(n=n<=r?n:r),t!==F&&(n=n>=t?n:t)),n}function dt(n,t,r,e,i,o){var f,c=1&t,a=2&t,l=4&t;if(r&&(f=i?r(n,e,i,o):r(n)),f!==F)return f;if(!bu(n))return n;if(e=af(n)){if(f=Ee(n),!c)return Mr(n,f)}else{var s=yo(n),h="[object Function]"==s||"[object GeneratorFunction]"==s;if(sf(n))return Wr(n,c);if("[object Object]"==s||"[object Arguments]"==s||h&&!i){if(f=a||h?{}:Oe(n),!c)return a?Fr(n,pt(f,n)):$r(n,ht(f,n))}else{if(!Dn[s])return i?n:{};f=Se(n,s,dt,c)}}if(o||(o=new Vn),
i=o.get(n))return i;o.set(n,f);var a=l?a?ye:de:a?Uu:Lu,p=e?F:a(n);return u(p||n,function(e,u){p&&(u=e,e=n[u]),at(f,u,dt(e,t,r,u,n,o))}),f}function yt(n){var t=Lu(n);return function(r){return bt(r,n,t)}}function bt(n,t,r){var e=r.length;if(null==n)return!e;for(n=ni(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===F&&!(u in n)||!i(o))return false}return true}function xt(n,t,r){if(typeof n!="function")throw new ei("Expected a function");return jo(function(){n.apply(F,r)},t)}function jt(n,t,r,e){var u=-1,i=c,o=true,f=n.length,s=[],h=t.length;
if(!f)return s;r&&(t=l(t,S(r))),e?(i=a,o=false):200<=t.length&&(i=R,o=false,t=new qn(t));n:for(;++u<f;){var p=n[u],_=null==r?p:r(p),p=e||0!==p?p:0;if(o&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function wt(n,t){var r=true;return oo(n,function(n,e,u){return r=!!t(n,e,u)}),r}function mt(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===F?o===o&&!Au(o):r(o,f)))var f=o,c=i}return c}function At(n,t){var r=[];return oo(n,function(n,e,u){
t(n,e,u)&&r.push(n)}),r}function kt(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Ie),u||(u=[]);++i<o;){var f=n[i];0<t&&r(f)?1<t?kt(f,t-1,r,e,u):s(u,f):e||(u[u.length]=f)}return u}function Et(n,t){return n&&co(n,t,Lu)}function Ot(n,t){return n&&ao(n,t,Lu)}function St(n,t){return f(t,function(t){return gu(n[t])})}function It(n,t){t=Rr(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[$e(t[r++])];return r&&r==e?n:F}function Rt(n,t,r){return t=t(n),af(n)?t:s(t,r(n))}function zt(n){if(null==n)n=n===F?"[object Undefined]":"[object Null]";else if(ki&&ki in ni(n)){
var t=ci.call(n,ki),r=n[ki];try{n[ki]=F;var e=true}catch(n){}var u=si.call(n);e&&(t?n[ki]=r:delete n[ki]),n=u}else n=si.call(n);return n}function Wt(n,t){return n>t}function Bt(n,t){return null!=n&&ci.call(n,t)}function Lt(n,t){return null!=n&&t in ni(n)}function Ut(n,t,r){for(var e=r?a:c,u=n[0].length,i=n.length,o=i,f=Hu(i),s=1/0,h=[];o--;){var p=n[o];o&&t&&(p=l(p,S(t))),s=Mi(p.length,s),f[o]=!r&&(t||120<=u&&120<=p.length)?new qn(o&&p):F}var p=n[0],_=-1,v=f[0];n:for(;++_<u&&h.length<s;){var g=p[_],d=t?t(g):g,g=r||0!==g?g:0;
if(v?!R(v,d):!e(h,d,r)){for(o=i;--o;){var y=f[o];if(y?!R(y,d):!e(n[o],d,r))continue n}v&&v.push(d),h.push(g)}}return h}function Ct(n,t,r){var e={};return Et(n,function(n,u,i){t(e,r(n),u,i)}),e}function Dt(n,t,e){return t=Rr(t,n),n=2>t.length?n:It(n,vr(t,0,-1)),t=null==n?n:n[$e(Ge(t))],null==t?F:r(t,n,e)}function Mt(n){return xu(n)&&"[object Arguments]"==zt(n)}function Tt(n){return xu(n)&&"[object ArrayBuffer]"==zt(n)}function $t(n){return xu(n)&&"[object Date]"==zt(n)}function Ft(n,t,r,e,u){if(n===t)t=true;else if(null==n||null==t||!xu(n)&&!xu(t))t=n!==n&&t!==t;else n:{
var i=af(n),o=af(t),f=i?"[object Array]":yo(n),c=o?"[object Array]":yo(t),f="[object Arguments]"==f?"[object Object]":f,c="[object Arguments]"==c?"[object Object]":c,a="[object Object]"==f,o="[object Object]"==c;if((c=f==c)&&sf(n)){if(!sf(t)){t=false;break n}i=true,a=false}if(c&&!a)u||(u=new Vn),t=i||gf(n)?_e(n,t,r,e,Ft,u):ve(n,t,f,r,e,Ft,u);else{if(!(1&r)&&(i=a&&ci.call(n,"__wrapped__"),f=o&&ci.call(t,"__wrapped__"),i||f)){n=i?n.value():n,t=f?t.value():t,u||(u=new Vn),t=Ft(n,t,r,e,u);break n}if(c)t:if(u||(u=new Vn),
i=1&r,f=de(n),o=f.length,c=de(t).length,o==c||i){for(a=o;a--;){var l=f[a];if(!(i?l in t:ci.call(t,l))){t=false;break t}}if((c=u.get(n))&&u.get(t))t=c==t;else{c=true,u.set(n,t),u.set(t,n);for(var s=i;++a<o;){var l=f[a],h=n[l],p=t[l];if(e)var _=i?e(p,h,l,t,n,u):e(h,p,l,n,t,u);if(_===F?h!==p&&!Ft(h,p,r,e,u):!_){c=false;break}s||(s="constructor"==l)}c&&!s&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(c=false)),
u.delete(n),u.delete(t),t=c}}else t=false;else t=false}}return t}function Nt(n){return xu(n)&&"[object Map]"==yo(n)}function Pt(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=ni(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return false}for(;++u<i;){var f=r[u],c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===F&&!(c in n))return false}else{if(f=new Vn,e)var s=e(a,l,c,n,t,f);if(s===F?!Ft(l,a,3,e,f):!s)return false}}return true}function Zt(n){return!(!bu(n)||li&&li in n)&&(gu(n)?_i:xn).test(Fe(n))}function qt(n){
return xu(n)&&"[object RegExp]"==zt(n)}function Vt(n){return xu(n)&&"[object Set]"==yo(n)}function Kt(n){return xu(n)&&yu(n.length)&&!!Cn[zt(n)]}function Gt(n){return typeof n=="function"?n:null==n?Nu:typeof n=="object"?af(n)?Xt(n[0],n[1]):Qt(n):Vu(n)}function Ht(n){if(!Le(n))return Ci(n);var t,r=[];for(t in ni(n))ci.call(n,t)&&"constructor"!=t&&r.push(t);return r}function Jt(n,t){return n<t}function Yt(n,t){var r=-1,e=pu(n)?Hu(n.length):[];return oo(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function Qt(n){
var t=me(n);return 1==t.length&&t[0][2]?Ue(t[0][0],t[0][1]):function(r){return r===n||Pt(r,n,t)}}function Xt(n,t){return We(n)&&t===t&&!bu(t)?Ue($e(n),t):function(r){var e=Wu(r,n);return e===F&&e===t?Bu(r,n):Ft(t,e,3)}}function nr(n,t,r,e,u){n!==t&&co(t,function(i,o){if(bu(i)){u||(u=new Vn);var f=u,c=n[o],a=t[o],l=f.get(a);if(l)ct(n,o,l);else{var l=e?e(c,a,o+"",n,t,f):F,s=l===F;if(s){var h=af(a),p=!h&&sf(a),_=!h&&!p&&gf(a),l=a;h||p||_?af(c)?l=c:_u(c)?l=Mr(c):p?(s=false,l=Wr(a,true)):_?(s=false,l=Lr(a,true)):l=[]:wu(a)||cf(a)?(l=c,
cf(c)?l=Ru(c):(!bu(c)||r&&gu(c))&&(l=Oe(a))):s=false}s&&(f.set(a,l),nr(l,a,r,e,f),f.delete(a)),ct(n,o,l)}}else f=e?e(n[o],i,o+"",n,t,u):F,f===F&&(f=i),ct(n,o,f)},Uu)}function tr(n,t){var r=n.length;if(r)return t+=0>t?r:0,Re(t,r)?n[t]:F}function rr(n,t,r){var e=-1;return t=l(t.length?t:[Nu],S(je())),n=Yt(n,function(n){return{a:l(t,function(t){return t(n)}),b:++e,c:n}}),A(n,function(n,t){var e;n:{e=-1;for(var u=n.a,i=t.a,o=u.length,f=r.length;++e<o;){var c=Ur(u[e],i[e]);if(c){e=e>=f?c:c*("desc"==r[e]?-1:1);
break n}}e=n.b-t.b}return e})}function er(n,t){return ur(n,t,function(t,r){return Bu(n,r)})}function ur(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=It(n,o);r(f,o)&&pr(i,Rr(o,n),f)}return i}function ir(n){return function(t){return It(t,n)}}function or(n,t,r,e){var u=e?y:d,i=-1,o=t.length,f=n;for(n===t&&(t=Mr(t)),r&&(f=l(n,S(r)));++i<o;)for(var c=0,a=t[i],a=r?r(a):a;-1<(c=u(f,a,c,e));)f!==n&&wi.call(f,c,1),wi.call(n,c,1);return n}function fr(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];
if(r==e||u!==i){var i=u;Re(u)?wi.call(n,u,1):mr(n,u)}}}function cr(n,t){return n+zi(Fi()*(t-n+1))}function ar(n,t){var r="";if(!n||1>t||9007199254740991<t)return r;do t%2&&(r+=n),(t=zi(t/2))&&(n+=n);while(t);return r}function lr(n,t){return wo(Ce(n,t,Nu),n+"")}function sr(n){return tt(Du(n))}function hr(n,t){var r=Du(n);return Te(r,gt(t,0,r.length))}function pr(n,t,r,e){if(!bu(n))return n;t=Rr(t,n);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var c=$e(t[u]),a=r;if(u!=o){var l=f[c],a=e?e(l,c,f):F;
a===F&&(a=bu(l)?l:Re(t[u+1])?[]:{})}at(f,c,a),f=f[c]}return n}function _r(n){return Te(Du(n))}function vr(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Hu(u);++e<u;)r[e]=n[e+t];return r}function gr(n,t){var r;return oo(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function dr(n,t,r){var e=0,u=null==n?e:n.length;if(typeof t=="number"&&t===t&&2147483647>=u){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!Au(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return yr(n,t,Nu,r);
}function yr(n,t,r,e){t=r(t);for(var u=0,i=null==n?0:n.length,o=t!==t,f=null===t,c=Au(t),a=t===F;u<i;){var l=zi((u+i)/2),s=r(n[l]),h=s!==F,p=null===s,_=s===s,v=Au(s);(o?e||_:a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):p||v?0:e?s<=t:s<t)?u=l+1:i=l}return Mi(i,4294967294)}function br(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!hu(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function xr(n){return typeof n=="number"?n:Au(n)?P:+n}function jr(n){if(typeof n=="string")return n;
if(af(n))return l(n,jr)+"";if(Au(n))return uo?uo.call(n):"";var t=n+"";return"0"==t&&1/n==-N?"-0":t}function wr(n,t,r){var e=-1,u=c,i=n.length,o=true,f=[],l=f;if(r)o=false,u=a;else if(200<=i){if(u=t?null:po(n))return D(u);o=false,u=R,l=new qn}else l=t?[]:f;n:for(;++e<i;){var s=n[e],h=t?t(s):s,s=r||0!==s?s:0;if(o&&h===h){for(var p=l.length;p--;)if(l[p]===h)continue n;t&&l.push(h),f.push(s)}else u(l,h,r)||(l!==f&&l.push(h),f.push(s))}return f}function mr(n,t){return t=Rr(t,n),n=2>t.length?n:It(n,vr(t,0,-1)),
null==n||delete n[$e(Ge(t))]}function Ar(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?vr(n,e?0:i,e?i+1:u):vr(n,e?i+1:0,e?u:i)}function kr(n,t){var r=n;return r instanceof Mn&&(r=r.value()),h(t,function(n,t){return t.func.apply(t.thisArg,s([n],t.args))},r)}function Er(n,t,r){var e=n.length;if(2>e)return e?wr(n[0]):[];for(var u=-1,i=Hu(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=jt(i[u]||o,n[f],t,r));return wr(kt(i,1),t,r)}function Or(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;)r(o,n[e],e<i?t[e]:F);
return o}function Sr(n){return _u(n)?n:[]}function Ir(n){return typeof n=="function"?n:Nu}function Rr(n,t){return af(n)?n:We(n,t)?[n]:mo(zu(n))}function zr(n,t,r){var e=n.length;return r=r===F?e:r,!t&&r>=e?n:vr(n,t,r)}function Wr(n,t){if(t)return n.slice();var r=n.length,r=yi?yi(r):new n.constructor(r);return n.copy(r),r}function Br(n){var t=new n.constructor(n.byteLength);return new di(t).set(new di(n)),t}function Lr(n,t){return new n.constructor(t?Br(n.buffer):n.buffer,n.byteOffset,n.length)}function Ur(n,t){
if(n!==t){var r=n!==F,e=null===n,u=n===n,i=Au(n),o=t!==F,f=null===t,c=t===t,a=Au(t);if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Cr(n,t,r,e){var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Di(i-o,0),l=Hu(c+a);for(e=!e;++f<c;)l[f]=t[f];for(;++u<o;)(e||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];return l}function Dr(n,t,r,e){var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Di(i-f,0),s=Hu(l+a);
for(e=!e;++u<l;)s[u]=n[u];for(l=u;++c<a;)s[l+c]=t[c];for(;++o<f;)(e||u<i)&&(s[l+r[o]]=n[u++]);return s}function Mr(n,t){var r=-1,e=n.length;for(t||(t=Hu(e));++r<e;)t[r]=n[r];return t}function Tr(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):F;c===F&&(c=n[f]),u?_t(r,f,c):at(r,f,c)}return r}function $r(n,t){return Tr(n,vo(n),t)}function Fr(n,t){return Tr(n,go(n),t)}function Nr(n,t){return function(r,u){var i=af(r)?e:st,o=t?t():{};return i(r,n,je(u,2),o);
}}function Pr(n){return lr(function(t,r){var e=-1,u=r.length,i=1<u?r[u-1]:F,o=2<u?r[2]:F,i=3<n.length&&typeof i=="function"?(u--,i):F;for(o&&ze(r[0],r[1],o)&&(i=3>u?F:i,u=1),t=ni(t);++e<u;)(o=r[e])&&n(t,o,e,i);return t})}function Zr(n,t){return function(r,e){if(null==r)return r;if(!pu(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=ni(r);(t?i--:++i<u)&&false!==e(o[i],i,o););return r}}function qr(n){return function(t,r,e){var u=-1,i=ni(t);e=e(t);for(var o=e.length;o--;){var f=e[n?o:++u];if(false===r(i[f],f,i))break;
}return t}}function Vr(n,t,r){function e(){return(this&&this!==Zn&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=1&t,i=Hr(n);return e}function Kr(n){return function(t){t=zu(t);var r=Bn.test(t)?$(t):F,e=r?r[0]:t.charAt(0);return t=r?zr(r,1).join(""):t.slice(1),e[n]()+t}}function Gr(n){return function(t){return h($u(Tu(t).replace(In,"")),n,"")}}function Hr(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:
return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=io(n.prototype),t=n.apply(r,t);return bu(t)?t:r}}function Jr(n,t,e){function u(){for(var o=arguments.length,f=Hu(o),c=o,a=xe(u);c--;)f[c]=arguments[c];return c=3>o&&f[0]!==a&&f[o-1]!==a?[]:C(f,a),o-=c.length,o<e?fe(n,t,Xr,u.placeholder,F,f,c,F,F,e-o):r(this&&this!==Zn&&this instanceof u?i:n,this,f);
}var i=Hr(n);return u}function Yr(n){return function(t,r,e){var u=ni(t);if(!pu(t)){var i=je(r,3);t=Lu(t),r=function(n){return i(u[n],n,u)}}return r=n(t,r,e),-1<r?u[i?t[r]:r]:F}}function Qr(n){return ge(function(t){var r=t.length,e=r,u=zn.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if(typeof i!="function")throw new ei("Expected a function");if(u&&!o&&"wrapper"==be(i))var o=new zn([],true)}for(e=o?e:r;++e<r;)var i=t[e],u=be(i),f="wrapper"==u?_o(i):F,o=f&&Be(f[0])&&424==f[1]&&!f[4].length&&1==f[9]?o[be(f[0])].apply(o,f[3]):1==i.length&&Be(i)?o[u]():o.thru(i);
return function(){var n=arguments,e=n[0];if(o&&1==n.length&&af(e))return o.plant(e).value();for(var u=0,n=r?t[u].apply(this,n):e;++u<r;)n=t[u].call(this,n);return n}})}function Xr(n,t,r,e,u,i,o,f,c,a){function l(){for(var d=arguments.length,y=Hu(d),b=d;b--;)y[b]=arguments[b];if(_){var x,j=xe(l),b=y.length;for(x=0;b--;)y[b]===j&&++x}if(e&&(y=Cr(y,e,u,_)),i&&(y=Dr(y,i,o,_)),d-=x,_&&d<a)return j=C(y,j),fe(n,t,Xr,l.placeholder,r,y,j,f,c,a-d);if(j=h?r:this,b=p?j[n]:n,d=y.length,f){x=y.length;for(var w=Mi(f.length,x),m=Mr(y);w--;){
var A=f[w];y[w]=Re(A,x)?m[A]:F}}else v&&1<d&&y.reverse();return s&&c<d&&(y.length=c),this&&this!==Zn&&this instanceof l&&(b=g||Hr(b)),b.apply(j,y)}var s=128&t,h=1&t,p=2&t,_=24&t,v=512&t,g=p?F:Hr(n);return l}function ne(n,t){return function(r,e){return Ct(r,n,t(e))}}function te(n,t){return function(r,e){var u;if(r===F&&e===F)return t;if(r!==F&&(u=r),e!==F){if(u===F)return e;typeof r=="string"||typeof e=="string"?(r=jr(r),e=jr(e)):(r=xr(r),e=xr(e)),u=n(r,e)}return u}}function re(n){return ge(function(t){
return t=l(t,S(je())),lr(function(e){var u=this;return n(t,function(n){return r(n,u,e)})})})}function ee(n,t){t=t===F?" ":jr(t);var r=t.length;return 2>r?r?ar(t,n):t:(r=ar(t,Ri(n/T(t))),Bn.test(t)?zr($(r),0,n).join(""):r.slice(0,n))}function ue(n,t,e,u){function i(){for(var t=-1,c=arguments.length,a=-1,l=u.length,s=Hu(l+c),h=this&&this!==Zn&&this instanceof i?f:n;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++t];return r(h,o?e:this,s)}var o=1&t,f=Hr(n);return i}function ie(n){return function(t,r,e){
e&&typeof e!="number"&&ze(t,r,e)&&(r=e=F),t=Eu(t),r===F?(r=t,t=0):r=Eu(r),e=e===F?t<r?1:-1:Eu(e);var u=-1;r=Di(Ri((r-t)/(e||1)),0);for(var i=Hu(r);r--;)i[n?r:++u]=t,t+=e;return i}}function oe(n){return function(t,r){return typeof t=="string"&&typeof r=="string"||(t=Iu(t),r=Iu(r)),n(t,r)}}function fe(n,t,r,e,u,i,o,f,c,a){var l=8&t,s=l?o:F;o=l?F:o;var h=l?i:F;return i=l?F:i,t=(t|(l?32:64))&~(l?64:32),4&t||(t&=-4),u=[n,t,u,h,s,i,o,f,c,a],r=r.apply(F,u),Be(n)&&xo(r,u),r.placeholder=e,De(r,n,t)}function ce(n){
var t=Xu[n];return function(n,r){if(n=Iu(n),r=null==r?0:Mi(Ou(r),292)){var e=(zu(n)+"e").split("e"),e=t(e[0]+"e"+(+e[1]+r)),e=(zu(e)+"e").split("e");return+(e[0]+"e"+(+e[1]-r))}return t(n)}}function ae(n){return function(t){var r=yo(t);return"[object Map]"==r?L(t):"[object Set]"==r?M(t):O(t,n(t))}}function le(n,t,r,e,u,i,o,f){var c=2&t;if(!c&&typeof n!="function")throw new ei("Expected a function");var a=e?e.length:0;if(a||(t&=-97,e=u=F),o=o===F?o:Di(Ou(o),0),f=f===F?f:Ou(f),a-=u?u.length:0,64&t){
var l=e,s=u;e=u=F}var h=c?F:_o(n);return i=[n,t,r,e,u,l,s,i,o,f],h&&(r=i[1],n=h[1],t=r|n,e=128==n&&8==r||128==n&&256==r&&i[7].length<=h[8]||384==n&&h[7].length<=h[8]&&8==r,131>t||e)&&(1&n&&(i[2]=h[2],t|=1&r?0:4),(r=h[3])&&(e=i[3],i[3]=e?Cr(e,r,h[4]):r,i[4]=e?C(i[3],"__lodash_placeholder__"):h[4]),(r=h[5])&&(e=i[5],i[5]=e?Dr(e,r,h[6]):r,i[6]=e?C(i[5],"__lodash_placeholder__"):h[6]),(r=h[7])&&(i[7]=r),128&n&&(i[8]=null==i[8]?h[8]:Mi(i[8],h[8])),null==i[9]&&(i[9]=h[9]),i[0]=h[0],i[1]=t),n=i[0],t=i[1],
r=i[2],e=i[3],u=i[4],f=i[9]=i[9]===F?c?0:n.length:Di(i[9]-a,0),!f&&24&t&&(t&=-25),De((h?lo:xo)(t&&1!=t?8==t||16==t?Jr(n,t,f):32!=t&&33!=t||u.length?Xr.apply(F,i):ue(n,t,r,e):Vr(n,t,r),i),n,t)}function se(n,t,r,e){return n===F||hu(n,ii[r])&&!ci.call(e,r)?t:n}function he(n,t,r,e,u,i){return bu(n)&&bu(t)&&(i.set(t,n),nr(n,t,F,he,i),i.delete(t)),n}function pe(n){return wu(n)?F:n}function _e(n,t,r,e,u,i){var o=1&r,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return false;if((c=i.get(n))&&i.get(t))return c==t;var c=-1,a=true,l=2&r?new qn:F;
for(i.set(n,t),i.set(t,n);++c<f;){var s=n[c],h=t[c];if(e)var p=o?e(h,s,c,t,n,i):e(s,h,c,n,t,i);if(p!==F){if(p)continue;a=false;break}if(l){if(!_(t,function(n,t){if(!R(l,t)&&(s===n||u(s,n,r,e,i)))return l.push(t)})){a=false;break}}else if(s!==h&&!u(s,h,r,e,i)){a=false;break}}return i.delete(n),i.delete(t),a}function ve(n,t,r,e,u,i,o){switch(r){case"[object DataView]":if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)break;n=n.buffer,t=t.buffer;case"[object ArrayBuffer]":if(n.byteLength!=t.byteLength||!i(new di(n),new di(t)))break;
return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return hu(+n,+t);case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object RegExp]":case"[object String]":return n==t+"";case"[object Map]":var f=L;case"[object Set]":if(f||(f=D),n.size!=t.size&&!(1&e))break;return(r=o.get(n))?r==t:(e|=2,o.set(n,t),t=_e(f(n),f(t),e,u,i,o),o.delete(n),t);case"[object Symbol]":if(eo)return eo.call(n)==eo.call(t)}return false}function ge(n){return wo(Ce(n,F,Ve),n+"")}function de(n){
return Rt(n,Lu,vo)}function ye(n){return Rt(n,Uu,go)}function be(n){for(var t=n.name+"",r=Ji[t],e=ci.call(Ji,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function xe(n){return(ci.call(On,"placeholder")?On:n).placeholder}function je(){var n=On.iteratee||Pu,n=n===Pu?Gt:n;return arguments.length?n(arguments[0],arguments[1]):n}function we(n,t){var r=n.__data__,e=typeof t;return("string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t)?r[typeof t=="string"?"string":"hash"]:r.map;
}function me(n){for(var t=Lu(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,u===u&&!bu(u)]}return t}function Ae(n,t){var r=null==n?F:n[t];return Zt(r)?r:F}function ke(n,t,r){t=Rr(t,n);for(var e=-1,u=t.length,i=false;++e<u;){var o=$e(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&yu(u)&&Re(o,u)&&(af(n)||cf(n)))}function Ee(n){var t=n.length,r=n.constructor(t);return t&&"string"==typeof n[0]&&ci.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Oe(n){
return typeof n.constructor!="function"||Le(n)?{}:io(bi(n))}function Se(r,e,u,i){var o=r.constructor;switch(e){case"[object ArrayBuffer]":return Br(r);case"[object Boolean]":case"[object Date]":return new o(+r);case"[object DataView]":return e=i?Br(r.buffer):r.buffer,new r.constructor(e,r.byteOffset,r.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":
case"[object Uint16Array]":case"[object Uint32Array]":return Lr(r,i);case"[object Map]":return e=i?u(L(r),1):L(r),h(e,n,new r.constructor);case"[object Number]":case"[object String]":return new o(r);case"[object RegExp]":return e=new r.constructor(r.source,dn.exec(r)),e.lastIndex=r.lastIndex,e;case"[object Set]":return e=i?u(D(r),1):D(r),h(e,t,new r.constructor);case"[object Symbol]":return eo?ni(eo.call(r)):{}}}function Ie(n){return af(n)||cf(n)||!!(mi&&n&&n[mi])}function Re(n,t){return t=null==t?9007199254740991:t,
!!t&&(typeof n=="number"||wn.test(n))&&-1<n&&0==n%1&&n<t}function ze(n,t,r){if(!bu(r))return false;var e=typeof t;return!!("number"==e?pu(r)&&Re(t,r.length):"string"==e&&t in r)&&hu(r[t],n)}function We(n,t){if(af(n))return false;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!Au(n))||(rn.test(n)||!tn.test(n)||null!=t&&n in ni(t))}function Be(n){var t=be(n),r=On[t];return typeof r=="function"&&t in Mn.prototype&&(n===r||(t=_o(r),!!t&&n===t[0]))}function Le(n){var t=n&&n.constructor;
return n===(typeof t=="function"&&t.prototype||ii)}function Ue(n,t){return function(r){return null!=r&&(r[n]===t&&(t!==F||n in ni(r)))}}function Ce(n,t,e){return t=Di(t===F?n.length-1:t,0),function(){for(var u=arguments,i=-1,o=Di(u.length-t,0),f=Hu(o);++i<o;)f[i]=u[t+i];for(i=-1,o=Hu(t+1);++i<t;)o[i]=u[i];return o[t]=e(f),r(n,this,o)}}function De(n,t,r){var e=t+"";t=wo;var u,i=Ne;return u=(u=e.match(hn))?u[1].split(pn):[],r=i(u,r),(i=r.length)&&(u=i-1,r[u]=(1<i?"& ":"")+r[u],r=r.join(2<i?", ":" "),
e=e.replace(sn,"{\n/* [wrapped with "+r+"] */\n")),t(n,e)}function Me(n){var t=0,r=0;return function(){var e=Ti(),u=16-(e-r);if(r=e,0<u){if(800<=++t)return arguments[0]}else t=0;return n.apply(F,arguments)}}function Te(n,t){var r=-1,e=n.length,u=e-1;for(t=t===F?e:t;++r<t;){var e=cr(r,u),i=n[e];n[e]=n[r],n[r]=i}return n.length=t,n}function $e(n){if(typeof n=="string"||Au(n))return n;var t=n+"";return"0"==t&&1/n==-N?"-0":t}function Fe(n){if(null!=n){try{return fi.call(n)}catch(n){}return n+""}return"";
}function Ne(n,t){return u(Z,function(r){var e="_."+r[0];t&r[1]&&!c(n,e)&&n.push(e)}),n.sort()}function Pe(n){if(n instanceof Mn)return n.clone();var t=new zn(n.__wrapped__,n.__chain__);return t.__actions__=Mr(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Ze(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:Ou(r),0>r&&(r=Di(e+r,0)),g(n,je(t,3),r)):-1}function qe(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==F&&(u=Ou(r),u=0>r?Di(e+u,0):Mi(u,e-1)),
g(n,je(t,3),u,true)}function Ve(n){return(null==n?0:n.length)?kt(n,1):[]}function Ke(n){return n&&n.length?n[0]:F}function Ge(n){var t=null==n?0:n.length;return t?n[t-1]:F}function He(n,t){return n&&n.length&&t&&t.length?or(n,t):n}function Je(n){return null==n?n:Ni.call(n)}function Ye(n){if(!n||!n.length)return[];var t=0;return n=f(n,function(n){if(_u(n))return t=Di(n.length,t),true}),E(t,function(t){return l(n,j(t))})}function Qe(n,t){if(!n||!n.length)return[];var e=Ye(n);return null==t?e:l(e,function(n){
return r(t,F,n)})}function Xe(n){return n=On(n),n.__chain__=true,n}function nu(n,t){return t(n)}function tu(){return this}function ru(n,t){return(af(n)?u:oo)(n,je(t,3))}function eu(n,t){return(af(n)?i:fo)(n,je(t,3))}function uu(n,t){return(af(n)?l:Yt)(n,je(t,3))}function iu(n,t,r){return t=r?F:t,t=n&&null==t?n.length:t,le(n,128,F,F,F,F,t)}function ou(n,t){var r;if(typeof t!="function")throw new ei("Expected a function");return n=Ou(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=F),
r}}function fu(n,t,r){return t=r?F:t,n=le(n,8,F,F,F,F,F,t),n.placeholder=fu.placeholder,n}function cu(n,t,r){return t=r?F:t,n=le(n,16,F,F,F,F,F,t),n.placeholder=cu.placeholder,n}function au(n,t,r){function e(t){var r=c,e=a;return c=a=F,_=t,s=n.apply(e,r)}function u(n){var r=n-p;return n-=_,p===F||r>=t||0>r||g&&n>=l}function i(){var n=Jo();if(u(n))return o(n);var r,e=jo;r=n-_,n=t-(n-p),r=g?Mi(n,l-r):n,h=e(i,r)}function o(n){return h=F,d&&c?e(n):(c=a=F,s)}function f(){var n=Jo(),r=u(n);if(c=arguments,
a=this,p=n,r){if(h===F)return _=n=p,h=jo(i,t),v?e(n):s;if(g)return h=jo(i,t),e(p)}return h===F&&(h=jo(i,t)),s}var c,a,l,s,h,p,_=0,v=false,g=false,d=true;if(typeof n!="function")throw new ei("Expected a function");return t=Iu(t)||0,bu(r)&&(v=!!r.leading,l=(g="maxWait"in r)?Di(Iu(r.maxWait)||0,t):l,d="trailing"in r?!!r.trailing:d),f.cancel=function(){h!==F&&ho(h),_=0,c=p=a=h=F},f.flush=function(){return h===F?s:o(Jo())},f}function lu(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;return i.has(u)?i.get(u):(e=n.apply(this,e),
r.cache=i.set(u,e)||i,e)}if(typeof n!="function"||null!=t&&typeof t!="function")throw new ei("Expected a function");return r.cache=new(lu.Cache||Pn),r}function su(n){if(typeof n!="function")throw new ei("Expected a function");return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function hu(n,t){return n===t||n!==n&&t!==t}function pu(n){return null!=n&&yu(n.length)&&!gu(n);
}function _u(n){return xu(n)&&pu(n)}function vu(n){if(!xu(n))return false;var t=zt(n);return"[object Error]"==t||"[object DOMException]"==t||typeof n.message=="string"&&typeof n.name=="string"&&!wu(n)}function gu(n){return!!bu(n)&&(n=zt(n),"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n)}function du(n){return typeof n=="number"&&n==Ou(n)}function yu(n){return typeof n=="number"&&-1<n&&0==n%1&&9007199254740991>=n}function bu(n){var t=typeof n;return null!=n&&("object"==t||"function"==t);
}function xu(n){return null!=n&&typeof n=="object"}function ju(n){return typeof n=="number"||xu(n)&&"[object Number]"==zt(n)}function wu(n){return!(!xu(n)||"[object Object]"!=zt(n))&&(n=bi(n),null===n||(n=ci.call(n,"constructor")&&n.constructor,typeof n=="function"&&n instanceof n&&fi.call(n)==hi))}function mu(n){return typeof n=="string"||!af(n)&&xu(n)&&"[object String]"==zt(n)}function Au(n){return typeof n=="symbol"||xu(n)&&"[object Symbol]"==zt(n)}function ku(n){if(!n)return[];if(pu(n))return mu(n)?$(n):Mr(n);
if(Ai&&n[Ai]){n=n[Ai]();for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}return t=yo(n),("[object Map]"==t?L:"[object Set]"==t?D:Du)(n)}function Eu(n){return n?(n=Iu(n),n===N||n===-N?1.7976931348623157e308*(0>n?-1:1):n===n?n:0):0===n?n:0}function Ou(n){n=Eu(n);var t=n%1;return n===n?t?n-t:n:0}function Su(n){return n?gt(Ou(n),0,4294967295):0}function Iu(n){if(typeof n=="number")return n;if(Au(n))return P;if(bu(n)&&(n=typeof n.valueOf=="function"?n.valueOf():n,n=bu(n)?n+"":n),typeof n!="string")return 0===n?n:+n;
n=n.replace(cn,"");var t=bn.test(n);return t||jn.test(n)?Fn(n.slice(2),t?2:8):yn.test(n)?P:+n}function Ru(n){return Tr(n,Uu(n))}function zu(n){return null==n?"":jr(n)}function Wu(n,t,r){return n=null==n?F:It(n,t),n===F?r:n}function Bu(n,t){return null!=n&&ke(n,t,Lt)}function Lu(n){return pu(n)?Gn(n):Ht(n)}function Uu(n){if(pu(n))n=Gn(n,true);else if(bu(n)){var t,r=Le(n),e=[];for(t in n)("constructor"!=t||!r&&ci.call(n,t))&&e.push(t);n=e}else{if(t=[],null!=n)for(r in ni(n))t.push(r);n=t}return n}function Cu(n,t){
if(null==n)return{};var r=l(ye(n),function(n){return[n]});return t=je(t),ur(n,r,function(n,r){return t(n,r[0])})}function Du(n){return null==n?[]:I(n,Lu(n))}function Mu(n){return Nf(zu(n).toLowerCase())}function Tu(n){return(n=zu(n))&&n.replace(mn,rt).replace(Rn,"")}function $u(n,t,r){return n=zu(n),t=r?F:t,t===F?Ln.test(n)?n.match(Wn)||[]:n.match(_n)||[]:n.match(t)||[]}function Fu(n){return function(){return n}}function Nu(n){return n}function Pu(n){return Gt(typeof n=="function"?n:dt(n,1))}function Zu(n,t,r){
var e=Lu(t),i=St(t,e);null!=r||bu(t)&&(i.length||!e.length)||(r=t,t=n,n=this,i=St(t,Lu(t)));var o=!(bu(r)&&"chain"in r&&!r.chain),f=gu(n);return u(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Mr(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,s([this.value()],arguments))})}),n}function qu(){}function Vu(n){return We(n)?j($e(n)):ir(n)}function Ku(){return[]}function Gu(){
return false}En=null==En?Zn:it.defaults(Zn.Object(),En,it.pick(Zn,Un));var Hu=En.Array,Ju=En.Date,Yu=En.Error,Qu=En.Function,Xu=En.Math,ni=En.Object,ti=En.RegExp,ri=En.String,ei=En.TypeError,ui=Hu.prototype,ii=ni.prototype,oi=En["__core-js_shared__"],fi=Qu.prototype.toString,ci=ii.hasOwnProperty,ai=0,li=function(){var n=/[^.]+$/.exec(oi&&oi.keys&&oi.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),si=ii.toString,hi=fi.call(ni),pi=Zn._,_i=ti("^"+fi.call(ci).replace(on,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),vi=Kn?En.Buffer:F,gi=En.Symbol,di=En.Uint8Array,yi=vi?vi.f:F,bi=U(ni.getPrototypeOf,ni),xi=ni.create,ji=ii.propertyIsEnumerable,wi=ui.splice,mi=gi?gi.isConcatSpreadable:F,Ai=gi?gi.iterator:F,ki=gi?gi.toStringTag:F,Ei=function(){
try{var n=Ae(ni,"defineProperty");return n({},"",{}),n}catch(n){}}(),Oi=En.clearTimeout!==Zn.clearTimeout&&En.clearTimeout,Si=Ju&&Ju.now!==Zn.Date.now&&Ju.now,Ii=En.setTimeout!==Zn.setTimeout&&En.setTimeout,Ri=Xu.ceil,zi=Xu.floor,Wi=ni.getOwnPropertySymbols,Bi=vi?vi.isBuffer:F,Li=En.isFinite,Ui=ui.join,Ci=U(ni.keys,ni),Di=Xu.max,Mi=Xu.min,Ti=Ju.now,$i=En.parseInt,Fi=Xu.random,Ni=ui.reverse,Pi=Ae(En,"DataView"),Zi=Ae(En,"Map"),qi=Ae(En,"Promise"),Vi=Ae(En,"Set"),Ki=Ae(En,"WeakMap"),Gi=Ae(ni,"create"),Hi=Ki&&new Ki,Ji={},Yi=Fe(Pi),Qi=Fe(Zi),Xi=Fe(qi),no=Fe(Vi),to=Fe(Ki),ro=gi?gi.prototype:F,eo=ro?ro.valueOf:F,uo=ro?ro.toString:F,io=function(){
function n(){}return function(t){return bu(t)?xi?xi(t):(n.prototype=t,t=new n,n.prototype=F,t):{}}}();On.templateSettings={escape:Q,evaluate:X,interpolate:nn,variable:"",imports:{_:On}},On.prototype=Sn.prototype,On.prototype.constructor=On,zn.prototype=io(Sn.prototype),zn.prototype.constructor=zn,Mn.prototype=io(Sn.prototype),Mn.prototype.constructor=Mn,Tn.prototype.clear=function(){this.__data__=Gi?Gi(null):{},this.size=0},Tn.prototype.delete=function(n){return n=this.has(n)&&delete this.__data__[n],
this.size-=n?1:0,n},Tn.prototype.get=function(n){var t=this.__data__;return Gi?(n=t[n],"__lodash_hash_undefined__"===n?F:n):ci.call(t,n)?t[n]:F},Tn.prototype.has=function(n){var t=this.__data__;return Gi?t[n]!==F:ci.call(t,n)},Tn.prototype.set=function(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=Gi&&t===F?"__lodash_hash_undefined__":t,this},Nn.prototype.clear=function(){this.__data__=[],this.size=0},Nn.prototype.delete=function(n){var t=this.__data__;return n=lt(t,n),!(0>n)&&(n==t.length-1?t.pop():wi.call(t,n,1),
--this.size,true)},Nn.prototype.get=function(n){var t=this.__data__;return n=lt(t,n),0>n?F:t[n][1]},Nn.prototype.has=function(n){return-1<lt(this.__data__,n)},Nn.prototype.set=function(n,t){var r=this.__data__,e=lt(r,n);return 0>e?(++this.size,r.push([n,t])):r[e][1]=t,this},Pn.prototype.clear=function(){this.size=0,this.__data__={hash:new Tn,map:new(Zi||Nn),string:new Tn}},Pn.prototype.delete=function(n){return n=we(this,n).delete(n),this.size-=n?1:0,n},Pn.prototype.get=function(n){return we(this,n).get(n);
},Pn.prototype.has=function(n){return we(this,n).has(n)},Pn.prototype.set=function(n,t){var r=we(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this},qn.prototype.add=qn.prototype.push=function(n){return this.__data__.set(n,"__lodash_hash_undefined__"),this},qn.prototype.has=function(n){return this.__data__.has(n)},Vn.prototype.clear=function(){this.__data__=new Nn,this.size=0},Vn.prototype.delete=function(n){var t=this.__data__;return n=t.delete(n),this.size=t.size,n},Vn.prototype.get=function(n){
return this.__data__.get(n)},Vn.prototype.has=function(n){return this.__data__.has(n)},Vn.prototype.set=function(n,t){var r=this.__data__;if(r instanceof Nn){var e=r.__data__;if(!Zi||199>e.length)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new Pn(e)}return r.set(n,t),this.size=r.size,this};var oo=Zr(Et),fo=Zr(Ot,true),co=qr(),ao=qr(true),lo=Hi?function(n,t){return Hi.set(n,t),n}:Nu,so=Ei?function(n,t){return Ei(n,"toString",{configurable:true,enumerable:false,value:Fu(t),writable:true})}:Nu,ho=Oi||function(n){
return Zn.clearTimeout(n)},po=Vi&&1/D(new Vi([,-0]))[1]==N?function(n){return new Vi(n)}:qu,_o=Hi?function(n){return Hi.get(n)}:qu,vo=Wi?function(n){return null==n?[]:(n=ni(n),f(Wi(n),function(t){return ji.call(n,t)}))}:Ku,go=Wi?function(n){for(var t=[];n;)s(t,vo(n)),n=bi(n);return t}:Ku,yo=zt;(Pi&&"[object DataView]"!=yo(new Pi(new ArrayBuffer(1)))||Zi&&"[object Map]"!=yo(new Zi)||qi&&"[object Promise]"!=yo(qi.resolve())||Vi&&"[object Set]"!=yo(new Vi)||Ki&&"[object WeakMap]"!=yo(new Ki))&&(yo=function(n){
var t=zt(n);if(n=(n="[object Object]"==t?n.constructor:F)?Fe(n):"")switch(n){case Yi:return"[object DataView]";case Qi:return"[object Map]";case Xi:return"[object Promise]";case no:return"[object Set]";case to:return"[object WeakMap]"}return t});var bo=oi?gu:Gu,xo=Me(lo),jo=Ii||function(n,t){return Zn.setTimeout(n,t)},wo=Me(so),mo=function(n){n=lu(n,function(n){return 500===t.size&&t.clear(),n});var t=n.cache;return n}(function(n){var t=[];return en.test(n)&&t.push(""),n.replace(un,function(n,r,e,u){
t.push(e?u.replace(vn,"$1"):r||n)}),t}),Ao=lr(function(n,t){return _u(n)?jt(n,kt(t,1,_u,true)):[]}),ko=lr(function(n,t){var r=Ge(t);return _u(r)&&(r=F),_u(n)?jt(n,kt(t,1,_u,true),je(r,2)):[]}),Eo=lr(function(n,t){var r=Ge(t);return _u(r)&&(r=F),_u(n)?jt(n,kt(t,1,_u,true),F,r):[]}),Oo=lr(function(n){var t=l(n,Sr);return t.length&&t[0]===n[0]?Ut(t):[]}),So=lr(function(n){var t=Ge(n),r=l(n,Sr);return t===Ge(r)?t=F:r.pop(),r.length&&r[0]===n[0]?Ut(r,je(t,2)):[]}),Io=lr(function(n){var t=Ge(n),r=l(n,Sr);return(t=typeof t=="function"?t:F)&&r.pop(),
r.length&&r[0]===n[0]?Ut(r,F,t):[]}),Ro=lr(He),zo=ge(function(n,t){var r=null==n?0:n.length,e=vt(n,t);return fr(n,l(t,function(n){return Re(n,r)?+n:n}).sort(Ur)),e}),Wo=lr(function(n){return wr(kt(n,1,_u,true))}),Bo=lr(function(n){var t=Ge(n);return _u(t)&&(t=F),wr(kt(n,1,_u,true),je(t,2))}),Lo=lr(function(n){var t=Ge(n),t=typeof t=="function"?t:F;return wr(kt(n,1,_u,true),F,t)}),Uo=lr(function(n,t){return _u(n)?jt(n,t):[]}),Co=lr(function(n){return Er(f(n,_u))}),Do=lr(function(n){var t=Ge(n);return _u(t)&&(t=F),
Er(f(n,_u),je(t,2))}),Mo=lr(function(n){var t=Ge(n),t=typeof t=="function"?t:F;return Er(f(n,_u),F,t)}),To=lr(Ye),$o=lr(function(n){var t=n.length,t=1<t?n[t-1]:F,t=typeof t=="function"?(n.pop(),t):F;return Qe(n,t)}),Fo=ge(function(n){function t(t){return vt(t,n)}var r=n.length,e=r?n[0]:0,u=this.__wrapped__;return!(1<r||this.__actions__.length)&&u instanceof Mn&&Re(e)?(u=u.slice(e,+e+(r?1:0)),u.__actions__.push({func:nu,args:[t],thisArg:F}),new zn(u,this.__chain__).thru(function(n){return r&&!n.length&&n.push(F),
n})):this.thru(t)}),No=Nr(function(n,t,r){ci.call(n,r)?++n[r]:_t(n,r,1)}),Po=Yr(Ze),Zo=Yr(qe),qo=Nr(function(n,t,r){ci.call(n,r)?n[r].push(t):_t(n,r,[t])}),Vo=lr(function(n,t,e){var u=-1,i=typeof t=="function",o=pu(n)?Hu(n.length):[];return oo(n,function(n){o[++u]=i?r(t,n,e):Dt(n,t,e)}),o}),Ko=Nr(function(n,t,r){_t(n,r,t)}),Go=Nr(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),Ho=lr(function(n,t){if(null==n)return[];var r=t.length;return 1<r&&ze(n,t[0],t[1])?t=[]:2<r&&ze(t[0],t[1],t[2])&&(t=[t[0]]),
rr(n,kt(t,1),[])}),Jo=Si||function(){return Zn.Date.now()},Yo=lr(function(n,t,r){var e=1;if(r.length)var u=C(r,xe(Yo)),e=32|e;return le(n,e,t,r,u)}),Qo=lr(function(n,t,r){var e=3;if(r.length)var u=C(r,xe(Qo)),e=32|e;return le(t,e,n,r,u)}),Xo=lr(function(n,t){return xt(n,1,t)}),nf=lr(function(n,t,r){return xt(n,Iu(t)||0,r)});lu.Cache=Pn;var tf=lr(function(n,t){t=1==t.length&&af(t[0])?l(t[0],S(je())):l(kt(t,1),S(je()));var e=t.length;return lr(function(u){for(var i=-1,o=Mi(u.length,e);++i<o;)u[i]=t[i].call(this,u[i]);
return r(n,this,u)})}),rf=lr(function(n,t){return le(n,32,F,t,C(t,xe(rf)))}),ef=lr(function(n,t){return le(n,64,F,t,C(t,xe(ef)))}),uf=ge(function(n,t){return le(n,256,F,F,F,t)}),of=oe(Wt),ff=oe(function(n,t){return n>=t}),cf=Mt(function(){return arguments}())?Mt:function(n){return xu(n)&&ci.call(n,"callee")&&!ji.call(n,"callee")},af=Hu.isArray,lf=Hn?S(Hn):Tt,sf=Bi||Gu,hf=Jn?S(Jn):$t,pf=Yn?S(Yn):Nt,_f=Qn?S(Qn):qt,vf=Xn?S(Xn):Vt,gf=nt?S(nt):Kt,df=oe(Jt),yf=oe(function(n,t){return n<=t}),bf=Pr(function(n,t){
if(Le(t)||pu(t))Tr(t,Lu(t),n);else for(var r in t)ci.call(t,r)&&at(n,r,t[r])}),xf=Pr(function(n,t){Tr(t,Uu(t),n)}),jf=Pr(function(n,t,r,e){Tr(t,Uu(t),n,e)}),wf=Pr(function(n,t,r,e){Tr(t,Lu(t),n,e)}),mf=ge(vt),Af=lr(function(n){return n.push(F,se),r(jf,F,n)}),kf=lr(function(n){return n.push(F,he),r(Rf,F,n)}),Ef=ne(function(n,t,r){n[t]=r},Fu(Nu)),Of=ne(function(n,t,r){ci.call(n,t)?n[t].push(r):n[t]=[r]},je),Sf=lr(Dt),If=Pr(function(n,t,r){nr(n,t,r)}),Rf=Pr(function(n,t,r,e){nr(n,t,r,e)}),zf=ge(function(n,t){
var r={};if(null==n)return r;var e=false;t=l(t,function(t){return t=Rr(t,n),e||(e=1<t.length),t}),Tr(n,ye(n),r),e&&(r=dt(r,7,pe));for(var u=t.length;u--;)mr(r,t[u]);return r}),Wf=ge(function(n,t){return null==n?{}:er(n,t)}),Bf=ae(Lu),Lf=ae(Uu),Uf=Gr(function(n,t,r){return t=t.toLowerCase(),n+(r?Mu(t):t)}),Cf=Gr(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Df=Gr(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Mf=Kr("toLowerCase"),Tf=Gr(function(n,t,r){return n+(r?"_":"")+t.toLowerCase();
}),$f=Gr(function(n,t,r){return n+(r?" ":"")+Nf(t)}),Ff=Gr(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),Nf=Kr("toUpperCase"),Pf=lr(function(n,t){try{return r(n,F,t)}catch(n){return vu(n)?n:new Yu(n)}}),Zf=ge(function(n,t){return u(t,function(t){t=$e(t),_t(n,t,Yo(n[t],n))}),n}),qf=Qr(),Vf=Qr(true),Kf=lr(function(n,t){return function(r){return Dt(r,n,t)}}),Gf=lr(function(n,t){return function(r){return Dt(n,r,t)}}),Hf=re(l),Jf=re(o),Yf=re(_),Qf=ie(),Xf=ie(true),nc=te(function(n,t){return n+t},0),tc=ce("ceil"),rc=te(function(n,t){
return n/t},1),ec=ce("floor"),uc=te(function(n,t){return n*t},1),ic=ce("round"),oc=te(function(n,t){return n-t},0);return On.after=function(n,t){if(typeof t!="function")throw new ei("Expected a function");return n=Ou(n),function(){if(1>--n)return t.apply(this,arguments)}},On.ary=iu,On.assign=bf,On.assignIn=xf,On.assignInWith=jf,On.assignWith=wf,On.at=mf,On.before=ou,On.bind=Yo,On.bindAll=Zf,On.bindKey=Qo,On.castArray=function(){if(!arguments.length)return[];var n=arguments[0];return af(n)?n:[n]},
On.chain=Xe,On.chunk=function(n,t,r){if(t=(r?ze(n,t,r):t===F)?1:Di(Ou(t),0),r=null==n?0:n.length,!r||1>t)return[];for(var e=0,u=0,i=Hu(Ri(r/t));e<r;)i[u++]=vr(n,e,e+=t);return i},On.compact=function(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u},On.concat=function(){var n=arguments.length;if(!n)return[];for(var t=Hu(n-1),r=arguments[0];n--;)t[n-1]=arguments[n];return s(af(r)?Mr(r):[r],kt(t,1))},On.cond=function(n){var t=null==n?0:n.length,e=je();return n=t?l(n,function(n){
if("function"!=typeof n[1])throw new ei("Expected a function");return[e(n[0]),n[1]]}):[],lr(function(e){for(var u=-1;++u<t;){var i=n[u];if(r(i[0],this,e))return r(i[1],this,e)}})},On.conforms=function(n){return yt(dt(n,1))},On.constant=Fu,On.countBy=No,On.create=function(n,t){var r=io(n);return null==t?r:ht(r,t)},On.curry=fu,On.curryRight=cu,On.debounce=au,On.defaults=Af,On.defaultsDeep=kf,On.defer=Xo,On.delay=nf,On.difference=Ao,On.differenceBy=ko,On.differenceWith=Eo,On.drop=function(n,t,r){var e=null==n?0:n.length;
return e?(t=r||t===F?1:Ou(t),vr(n,0>t?0:t,e)):[]},On.dropRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===F?1:Ou(t),t=e-t,vr(n,0,0>t?0:t)):[]},On.dropRightWhile=function(n,t){return n&&n.length?Ar(n,je(t,3),true,true):[]},On.dropWhile=function(n,t){return n&&n.length?Ar(n,je(t,3),true):[]},On.fill=function(n,t,r,e){var u=null==n?0:n.length;if(!u)return[];for(r&&typeof r!="number"&&ze(n,t,r)&&(r=0,e=u),u=n.length,r=Ou(r),0>r&&(r=-r>u?0:u+r),e=e===F||e>u?u:Ou(e),0>e&&(e+=u),e=r>e?0:Su(e);r<e;)n[r++]=t;
return n},On.filter=function(n,t){return(af(n)?f:At)(n,je(t,3))},On.flatMap=function(n,t){return kt(uu(n,t),1)},On.flatMapDeep=function(n,t){return kt(uu(n,t),N)},On.flatMapDepth=function(n,t,r){return r=r===F?1:Ou(r),kt(uu(n,t),r)},On.flatten=Ve,On.flattenDeep=function(n){return(null==n?0:n.length)?kt(n,N):[]},On.flattenDepth=function(n,t){return null!=n&&n.length?(t=t===F?1:Ou(t),kt(n,t)):[]},On.flip=function(n){return le(n,512)},On.flow=qf,On.flowRight=Vf,On.fromPairs=function(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){
var u=n[t];e[u[0]]=u[1]}return e},On.functions=function(n){return null==n?[]:St(n,Lu(n))},On.functionsIn=function(n){return null==n?[]:St(n,Uu(n))},On.groupBy=qo,On.initial=function(n){return(null==n?0:n.length)?vr(n,0,-1):[]},On.intersection=Oo,On.intersectionBy=So,On.intersectionWith=Io,On.invert=Ef,On.invertBy=Of,On.invokeMap=Vo,On.iteratee=Pu,On.keyBy=Ko,On.keys=Lu,On.keysIn=Uu,On.map=uu,On.mapKeys=function(n,t){var r={};return t=je(t,3),Et(n,function(n,e,u){_t(r,t(n,e,u),n)}),r},On.mapValues=function(n,t){
var r={};return t=je(t,3),Et(n,function(n,e,u){_t(r,e,t(n,e,u))}),r},On.matches=function(n){return Qt(dt(n,1))},On.matchesProperty=function(n,t){return Xt(n,dt(t,1))},On.memoize=lu,On.merge=If,On.mergeWith=Rf,On.method=Kf,On.methodOf=Gf,On.mixin=Zu,On.negate=su,On.nthArg=function(n){return n=Ou(n),lr(function(t){return tr(t,n)})},On.omit=zf,On.omitBy=function(n,t){return Cu(n,su(je(t)))},On.once=function(n){return ou(2,n)},On.orderBy=function(n,t,r,e){return null==n?[]:(af(t)||(t=null==t?[]:[t]),
r=e?F:r,af(r)||(r=null==r?[]:[r]),rr(n,t,r))},On.over=Hf,On.overArgs=tf,On.overEvery=Jf,On.overSome=Yf,On.partial=rf,On.partialRight=ef,On.partition=Go,On.pick=Wf,On.pickBy=Cu,On.property=Vu,On.propertyOf=function(n){return function(t){return null==n?F:It(n,t)}},On.pull=Ro,On.pullAll=He,On.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?or(n,t,je(r,2)):n},On.pullAllWith=function(n,t,r){return n&&n.length&&t&&t.length?or(n,t,F,r):n},On.pullAt=zo,On.range=Qf,On.rangeRight=Xf,On.rearg=uf,On.reject=function(n,t){
return(af(n)?f:At)(n,su(je(t,3)))},On.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=je(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return fr(n,u),r},On.rest=function(n,t){if(typeof n!="function")throw new ei("Expected a function");return t=t===F?t:Ou(t),lr(n,t)},On.reverse=Je,On.sampleSize=function(n,t,r){return t=(r?ze(n,t,r):t===F)?1:Ou(t),(af(n)?ot:hr)(n,t)},On.set=function(n,t,r){return null==n?n:pr(n,t,r)},On.setWith=function(n,t,r,e){return e=typeof e=="function"?e:F,
null==n?n:pr(n,t,r,e)},On.shuffle=function(n){return(af(n)?ft:_r)(n)},On.slice=function(n,t,r){var e=null==n?0:n.length;return e?(r&&typeof r!="number"&&ze(n,t,r)?(t=0,r=e):(t=null==t?0:Ou(t),r=r===F?e:Ou(r)),vr(n,t,r)):[]},On.sortBy=Ho,On.sortedUniq=function(n){return n&&n.length?br(n):[]},On.sortedUniqBy=function(n,t){return n&&n.length?br(n,je(t,2)):[]},On.split=function(n,t,r){return r&&typeof r!="number"&&ze(n,t,r)&&(t=r=F),r=r===F?4294967295:r>>>0,r?(n=zu(n))&&(typeof t=="string"||null!=t&&!_f(t))&&(t=jr(t),
!t&&Bn.test(n))?zr($(n),0,r):n.split(t,r):[]},On.spread=function(n,t){if(typeof n!="function")throw new ei("Expected a function");return t=null==t?0:Di(Ou(t),0),lr(function(e){var u=e[t];return e=zr(e,0,t),u&&s(e,u),r(n,this,e)})},On.tail=function(n){var t=null==n?0:n.length;return t?vr(n,1,t):[]},On.take=function(n,t,r){return n&&n.length?(t=r||t===F?1:Ou(t),vr(n,0,0>t?0:t)):[]},On.takeRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===F?1:Ou(t),t=e-t,vr(n,0>t?0:t,e)):[]},On.takeRightWhile=function(n,t){
return n&&n.length?Ar(n,je(t,3),false,true):[]},On.takeWhile=function(n,t){return n&&n.length?Ar(n,je(t,3)):[]},On.tap=function(n,t){return t(n),n},On.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new ei("Expected a function");return bu(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),au(n,t,{leading:e,maxWait:t,trailing:u})},On.thru=nu,On.toArray=ku,On.toPairs=Bf,On.toPairsIn=Lf,On.toPath=function(n){return af(n)?l(n,$e):Au(n)?[n]:Mr(mo(zu(n)))},On.toPlainObject=Ru,
On.transform=function(n,t,r){var e=af(n),i=e||sf(n)||gf(n);if(t=je(t,4),null==r){var o=n&&n.constructor;r=i?e?new o:[]:bu(n)&&gu(o)?io(bi(n)):{}}return(i?u:Et)(n,function(n,e,u){return t(r,n,e,u)}),r},On.unary=function(n){return iu(n,1)},On.union=Wo,On.unionBy=Bo,On.unionWith=Lo,On.uniq=function(n){return n&&n.length?wr(n):[]},On.uniqBy=function(n,t){return n&&n.length?wr(n,je(t,2)):[]},On.uniqWith=function(n,t){return t=typeof t=="function"?t:F,n&&n.length?wr(n,F,t):[]},On.unset=function(n,t){return null==n||mr(n,t);
},On.unzip=Ye,On.unzipWith=Qe,On.update=function(n,t,r){return null==n?n:pr(n,t,Ir(r)(It(n,t)),void 0)},On.updateWith=function(n,t,r,e){return e=typeof e=="function"?e:F,null!=n&&(n=pr(n,t,Ir(r)(It(n,t)),e)),n},On.values=Du,On.valuesIn=function(n){return null==n?[]:I(n,Uu(n))},On.without=Uo,On.words=$u,On.wrap=function(n,t){return rf(Ir(t),n)},On.xor=Co,On.xorBy=Do,On.xorWith=Mo,On.zip=To,On.zipObject=function(n,t){return Or(n||[],t||[],at)},On.zipObjectDeep=function(n,t){return Or(n||[],t||[],pr);
},On.zipWith=$o,On.entries=Bf,On.entriesIn=Lf,On.extend=xf,On.extendWith=jf,Zu(On,On),On.add=nc,On.attempt=Pf,On.camelCase=Uf,On.capitalize=Mu,On.ceil=tc,On.clamp=function(n,t,r){return r===F&&(r=t,t=F),r!==F&&(r=Iu(r),r=r===r?r:0),t!==F&&(t=Iu(t),t=t===t?t:0),gt(Iu(n),t,r)},On.clone=function(n){return dt(n,4)},On.cloneDeep=function(n){return dt(n,5)},On.cloneDeepWith=function(n,t){return t=typeof t=="function"?t:F,dt(n,5,t)},On.cloneWith=function(n,t){return t=typeof t=="function"?t:F,dt(n,4,t)},
On.conformsTo=function(n,t){return null==t||bt(n,t,Lu(t))},On.deburr=Tu,On.defaultTo=function(n,t){return null==n||n!==n?t:n},On.divide=rc,On.endsWith=function(n,t,r){n=zu(n),t=jr(t);var e=n.length,e=r=r===F?e:gt(Ou(r),0,e);return r-=t.length,0<=r&&n.slice(r,e)==t},On.eq=hu,On.escape=function(n){return(n=zu(n))&&Y.test(n)?n.replace(H,et):n},On.escapeRegExp=function(n){return(n=zu(n))&&fn.test(n)?n.replace(on,"\\$&"):n},On.every=function(n,t,r){var e=af(n)?o:wt;return r&&ze(n,t,r)&&(t=F),e(n,je(t,3));
},On.find=Po,On.findIndex=Ze,On.findKey=function(n,t){return v(n,je(t,3),Et)},On.findLast=Zo,On.findLastIndex=qe,On.findLastKey=function(n,t){return v(n,je(t,3),Ot)},On.floor=ec,On.forEach=ru,On.forEachRight=eu,On.forIn=function(n,t){return null==n?n:co(n,je(t,3),Uu)},On.forInRight=function(n,t){return null==n?n:ao(n,je(t,3),Uu)},On.forOwn=function(n,t){return n&&Et(n,je(t,3))},On.forOwnRight=function(n,t){return n&&Ot(n,je(t,3))},On.get=Wu,On.gt=of,On.gte=ff,On.has=function(n,t){return null!=n&&ke(n,t,Bt);
},On.hasIn=Bu,On.head=Ke,On.identity=Nu,On.includes=function(n,t,r,e){return n=pu(n)?n:Du(n),r=r&&!e?Ou(r):0,e=n.length,0>r&&(r=Di(e+r,0)),mu(n)?r<=e&&-1<n.indexOf(t,r):!!e&&-1<d(n,t,r)},On.indexOf=function(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:Ou(r),0>r&&(r=Di(e+r,0)),d(n,t,r)):-1},On.inRange=function(n,t,r){return t=Eu(t),r===F?(r=t,t=0):r=Eu(r),n=Iu(n),n>=Mi(t,r)&&n<Di(t,r)},On.invoke=Sf,On.isArguments=cf,On.isArray=af,On.isArrayBuffer=lf,On.isArrayLike=pu,On.isArrayLikeObject=_u,
On.isBoolean=function(n){return true===n||false===n||xu(n)&&"[object Boolean]"==zt(n)},On.isBuffer=sf,On.isDate=hf,On.isElement=function(n){return xu(n)&&1===n.nodeType&&!wu(n)},On.isEmpty=function(n){if(null==n)return true;if(pu(n)&&(af(n)||typeof n=="string"||typeof n.splice=="function"||sf(n)||gf(n)||cf(n)))return!n.length;var t=yo(n);if("[object Map]"==t||"[object Set]"==t)return!n.size;if(Le(n))return!Ht(n).length;for(var r in n)if(ci.call(n,r))return false;return true},On.isEqual=function(n,t){return Ft(n,t);
},On.isEqualWith=function(n,t,r){var e=(r=typeof r=="function"?r:F)?r(n,t):F;return e===F?Ft(n,t,F,r):!!e},On.isError=vu,On.isFinite=function(n){return typeof n=="number"&&Li(n)},On.isFunction=gu,On.isInteger=du,On.isLength=yu,On.isMap=pf,On.isMatch=function(n,t){return n===t||Pt(n,t,me(t))},On.isMatchWith=function(n,t,r){return r=typeof r=="function"?r:F,Pt(n,t,me(t),r)},On.isNaN=function(n){return ju(n)&&n!=+n},On.isNative=function(n){if(bo(n))throw new Yu("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
return Zt(n)},On.isNil=function(n){return null==n},On.isNull=function(n){return null===n},On.isNumber=ju,On.isObject=bu,On.isObjectLike=xu,On.isPlainObject=wu,On.isRegExp=_f,On.isSafeInteger=function(n){return du(n)&&-9007199254740991<=n&&9007199254740991>=n},On.isSet=vf,On.isString=mu,On.isSymbol=Au,On.isTypedArray=gf,On.isUndefined=function(n){return n===F},On.isWeakMap=function(n){return xu(n)&&"[object WeakMap]"==yo(n)},On.isWeakSet=function(n){return xu(n)&&"[object WeakSet]"==zt(n)},On.join=function(n,t){
return null==n?"":Ui.call(n,t)},On.kebabCase=Cf,On.last=Ge,On.lastIndexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;if(r!==F&&(u=Ou(r),u=0>u?Di(e+u,0):Mi(u,e-1)),t===t){for(r=u+1;r--&&n[r]!==t;);n=r}else n=g(n,b,u,true);return n},On.lowerCase=Df,On.lowerFirst=Mf,On.lt=df,On.lte=yf,On.max=function(n){return n&&n.length?mt(n,Nu,Wt):F},On.maxBy=function(n,t){return n&&n.length?mt(n,je(t,2),Wt):F},On.mean=function(n){return x(n,Nu)},On.meanBy=function(n,t){return x(n,je(t,2))},On.min=function(n){
return n&&n.length?mt(n,Nu,Jt):F},On.minBy=function(n,t){return n&&n.length?mt(n,je(t,2),Jt):F},On.stubArray=Ku,On.stubFalse=Gu,On.stubObject=function(){return{}},On.stubString=function(){return""},On.stubTrue=function(){return true},On.multiply=uc,On.nth=function(n,t){return n&&n.length?tr(n,Ou(t)):F},On.noConflict=function(){return Zn._===this&&(Zn._=pi),this},On.noop=qu,On.now=Jo,On.pad=function(n,t,r){n=zu(n);var e=(t=Ou(t))?T(n):0;return!t||e>=t?n:(t=(t-e)/2,ee(zi(t),r)+n+ee(Ri(t),r))},On.padEnd=function(n,t,r){
n=zu(n);var e=(t=Ou(t))?T(n):0;return t&&e<t?n+ee(t-e,r):n},On.padStart=function(n,t,r){n=zu(n);var e=(t=Ou(t))?T(n):0;return t&&e<t?ee(t-e,r)+n:n},On.parseInt=function(n,t,r){return r||null==t?t=0:t&&(t=+t),$i(zu(n).replace(an,""),t||0)},On.random=function(n,t,r){if(r&&typeof r!="boolean"&&ze(n,t,r)&&(t=r=F),r===F&&(typeof t=="boolean"?(r=t,t=F):typeof n=="boolean"&&(r=n,n=F)),n===F&&t===F?(n=0,t=1):(n=Eu(n),t===F?(t=n,n=0):t=Eu(t)),n>t){var e=n;n=t,t=e}return r||n%1||t%1?(r=Fi(),Mi(n+r*(t-n+$n("1e-"+((r+"").length-1))),t)):cr(n,t);
},On.reduce=function(n,t,r){var e=af(n)?h:m,u=3>arguments.length;return e(n,je(t,4),r,u,oo)},On.reduceRight=function(n,t,r){var e=af(n)?p:m,u=3>arguments.length;return e(n,je(t,4),r,u,fo)},On.repeat=function(n,t,r){return t=(r?ze(n,t,r):t===F)?1:Ou(t),ar(zu(n),t)},On.replace=function(){var n=arguments,t=zu(n[0]);return 3>n.length?t:t.replace(n[1],n[2])},On.result=function(n,t,r){t=Rr(t,n);var e=-1,u=t.length;for(u||(u=1,n=F);++e<u;){var i=null==n?F:n[$e(t[e])];i===F&&(e=u,i=r),n=gu(i)?i.call(n):i;
}return n},On.round=ic,On.runInContext=w,On.sample=function(n){return(af(n)?tt:sr)(n)},On.size=function(n){if(null==n)return 0;if(pu(n))return mu(n)?T(n):n.length;var t=yo(n);return"[object Map]"==t||"[object Set]"==t?n.size:Ht(n).length},On.snakeCase=Tf,On.some=function(n,t,r){var e=af(n)?_:gr;return r&&ze(n,t,r)&&(t=F),e(n,je(t,3))},On.sortedIndex=function(n,t){return dr(n,t)},On.sortedIndexBy=function(n,t,r){return yr(n,t,je(r,2))},On.sortedIndexOf=function(n,t){var r=null==n?0:n.length;if(r){
var e=dr(n,t);if(e<r&&hu(n[e],t))return e}return-1},On.sortedLastIndex=function(n,t){return dr(n,t,true)},On.sortedLastIndexBy=function(n,t,r){return yr(n,t,je(r,2),true)},On.sortedLastIndexOf=function(n,t){if(null==n?0:n.length){var r=dr(n,t,true)-1;if(hu(n[r],t))return r}return-1},On.startCase=$f,On.startsWith=function(n,t,r){return n=zu(n),r=null==r?0:gt(Ou(r),0,n.length),t=jr(t),n.slice(r,r+t.length)==t},On.subtract=oc,On.sum=function(n){return n&&n.length?k(n,Nu):0},On.sumBy=function(n,t){return n&&n.length?k(n,je(t,2)):0;
},On.template=function(n,t,r){var e=On.templateSettings;r&&ze(n,t,r)&&(t=F),n=zu(n),t=jf({},t,e,se),r=jf({},t.imports,e.imports,se);var u,i,o=Lu(r),f=I(r,o),c=0;r=t.interpolate||An;var a="__p+='";r=ti((t.escape||An).source+"|"+r.source+"|"+(r===nn?gn:An).source+"|"+(t.evaluate||An).source+"|$","g");var l="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,o,f,l){return e||(e=o),a+=n.slice(c,l).replace(kn,B),r&&(u=true,a+="'+__e("+r+")+'"),f&&(i=true,a+="';"+f+";\n__p+='"),
e&&(a+="'+((__t=("+e+"))==null?'':__t)+'"),c=l+t.length,t}),a+="';",(t=t.variable)||(a="with(obj){"+a+"}"),a=(i?a.replace(q,""):a).replace(V,"$1").replace(K,"$1;"),a="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(u?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+a+"return __p}",t=Pf(function(){return Qu(o,l+"return "+a).apply(F,f)}),t.source=a,vu(t))throw t;return t},On.times=function(n,t){if(n=Ou(n),1>n||9007199254740991<n)return[];
var r=4294967295,e=Mi(n,4294967295);for(t=je(t),n-=4294967295,e=E(e,t);++r<n;)t(r);return e},On.toFinite=Eu,On.toInteger=Ou,On.toLength=Su,On.toLower=function(n){return zu(n).toLowerCase()},On.toNumber=Iu,On.toSafeInteger=function(n){return n?gt(Ou(n),-9007199254740991,9007199254740991):0===n?n:0},On.toString=zu,On.toUpper=function(n){return zu(n).toUpperCase()},On.trim=function(n,t,r){return(n=zu(n))&&(r||t===F)?n.replace(cn,""):n&&(t=jr(t))?(n=$(n),r=$(t),t=z(n,r),r=W(n,r)+1,zr(n,t,r).join("")):n;
},On.trimEnd=function(n,t,r){return(n=zu(n))&&(r||t===F)?n.replace(ln,""):n&&(t=jr(t))?(n=$(n),t=W(n,$(t))+1,zr(n,0,t).join("")):n},On.trimStart=function(n,t,r){return(n=zu(n))&&(r||t===F)?n.replace(an,""):n&&(t=jr(t))?(n=$(n),t=z(n,$(t)),zr(n,t).join("")):n},On.truncate=function(n,t){var r=30,e="...";if(bu(t))var u="separator"in t?t.separator:u,r="length"in t?Ou(t.length):r,e="omission"in t?jr(t.omission):e;n=zu(n);var i=n.length;if(Bn.test(n))var o=$(n),i=o.length;if(r>=i)return n;if(i=r-T(e),1>i)return e;
if(r=o?zr(o,0,i).join(""):n.slice(0,i),u===F)return r+e;if(o&&(i+=r.length-i),_f(u)){if(n.slice(i).search(u)){var f=r;for(u.global||(u=ti(u.source,zu(dn.exec(u))+"g")),u.lastIndex=0;o=u.exec(f);)var c=o.index;r=r.slice(0,c===F?i:c)}}else n.indexOf(jr(u),i)!=i&&(u=r.lastIndexOf(u),-1<u&&(r=r.slice(0,u)));return r+e},On.unescape=function(n){return(n=zu(n))&&J.test(n)?n.replace(G,ut):n},On.uniqueId=function(n){var t=++ai;return zu(n)+t},On.upperCase=Ff,On.upperFirst=Nf,On.each=ru,On.eachRight=eu,On.first=Ke,
Zu(On,function(){var n={};return Et(On,function(t,r){ci.call(On.prototype,r)||(n[r]=t)}),n}(),{chain:false}),On.VERSION="4.17.4",u("bind bindKey curry curryRight partial partialRight".split(" "),function(n){On[n].placeholder=On}),u(["drop","take"],function(n,t){Mn.prototype[n]=function(r){r=r===F?1:Di(Ou(r),0);var e=this.__filtered__&&!t?new Mn(this):this.clone();return e.__filtered__?e.__takeCount__=Mi(r,e.__takeCount__):e.__views__.push({size:Mi(r,4294967295),type:n+(0>e.__dir__?"Right":"")}),e},Mn.prototype[n+"Right"]=function(t){
return this.reverse()[n](t).reverse()}}),u(["filter","map","takeWhile"],function(n,t){var r=t+1,e=1==r||3==r;Mn.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:je(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),u(["head","last"],function(n,t){var r="take"+(t?"Right":"");Mn.prototype[n]=function(){return this[r](1).value()[0]}}),u(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Mn.prototype[n]=function(){return this.__filtered__?new Mn(this):this[r](1);
}}),Mn.prototype.compact=function(){return this.filter(Nu)},Mn.prototype.find=function(n){return this.filter(n).head()},Mn.prototype.findLast=function(n){return this.reverse().find(n)},Mn.prototype.invokeMap=lr(function(n,t){return typeof n=="function"?new Mn(this):this.map(function(r){return Dt(r,n,t)})}),Mn.prototype.reject=function(n){return this.filter(su(je(n)))},Mn.prototype.slice=function(n,t){n=Ou(n);var r=this;return r.__filtered__&&(0<n||0>t)?new Mn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),
t!==F&&(t=Ou(t),r=0>t?r.dropRight(-t):r.take(t-n)),r)},Mn.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Mn.prototype.toArray=function(){return this.take(4294967295)},Et(Mn.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=On[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);u&&(On.prototype[t]=function(){function t(n){return n=u.apply(On,s([n],f)),e&&h?n[0]:n}var o=this.__wrapped__,f=e?[1]:arguments,c=o instanceof Mn,a=f[0],l=c||af(o);
l&&r&&typeof a=="function"&&1!=a.length&&(c=l=false);var h=this.__chain__,p=!!this.__actions__.length,a=i&&!h,c=c&&!p;return!i&&l?(o=c?o:new Mn(this),o=n.apply(o,f),o.__actions__.push({func:nu,args:[t],thisArg:F}),new zn(o,h)):a&&c?n.apply(this,f):(o=this.thru(t),a?e?o.value()[0]:o.value():o)})}),u("pop push shift sort splice unshift".split(" "),function(n){var t=ui[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);On.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){
var u=this.value();return t.apply(af(u)?u:[],n)}return this[r](function(r){return t.apply(af(r)?r:[],n)})}}),Et(Mn.prototype,function(n,t){var r=On[t];if(r){var e=r.name+"";(Ji[e]||(Ji[e]=[])).push({name:t,func:r})}}),Ji[Xr(F,2).name]=[{name:"wrapper",func:F}],Mn.prototype.clone=function(){var n=new Mn(this.__wrapped__);return n.__actions__=Mr(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Mr(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Mr(this.__views__),
n},Mn.prototype.reverse=function(){if(this.__filtered__){var n=new Mn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},Mn.prototype.value=function(){var n,t=this.__wrapped__.value(),r=this.__dir__,e=af(t),u=0>r,i=e?t.length:0;n=i;for(var o=this.__views__,f=0,c=-1,a=o.length;++c<a;){var l=o[c],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=Mi(n,f+s);break;case"takeRight":f=Di(f,n-s)}}if(n={start:f,end:n},o=n.start,f=n.end,n=f-o,
o=u?f:o-1,f=this.__iteratees__,c=f.length,a=0,l=Mi(n,this.__takeCount__),!e||!u&&i==n&&l==n)return kr(t,this.__actions__);e=[];n:for(;n--&&a<l;){for(o+=r,u=-1,i=t[o];++u<c;){var h=f[u],s=h.type,h=(0,h.iteratee)(i);if(2==s)i=h;else if(!h){if(1==s)continue n;break n}}e[a++]=i}return e},On.prototype.at=Fo,On.prototype.chain=function(){return Xe(this)},On.prototype.commit=function(){return new zn(this.value(),this.__chain__)},On.prototype.next=function(){this.__values__===F&&(this.__values__=ku(this.value()));
var n=this.__index__>=this.__values__.length;return{done:n,value:n?F:this.__values__[this.__index__++]}},On.prototype.plant=function(n){for(var t,r=this;r instanceof Sn;){var e=Pe(r);e.__index__=0,e.__values__=F,t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},On.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof Mn?(this.__actions__.length&&(n=new Mn(this)),n=n.reverse(),n.__actions__.push({func:nu,args:[Je],thisArg:F}),new zn(n,this.__chain__)):this.thru(Je);
},On.prototype.toJSON=On.prototype.valueOf=On.prototype.value=function(){return kr(this.__wrapped__,this.__actions__)},On.prototype.first=On.prototype.head,Ai&&(On.prototype[Ai]=tu),On}();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Zn._=it, define(function(){return it})):Vn?((Vn.exports=it)._=it,qn._=it):Zn._=it}).call(this);
!function(){/*

 Copyright (C) 2006 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function T(a){function d(e){var b=e.charCodeAt(0);if(92!==b)return b;var a=e.charAt(1);return(b=w[a])?b:"0"<=a&&"7">=a?parseInt(e.substring(1),8):"u"===a||"x"===a?parseInt(e.substring(2),16):e.charCodeAt(1)}function f(e){if(32>e)return(16>e?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);return"\\"===e||"-"===e||"]"===e||"^"===e?"\\"+e:e}function b(e){var b=e.substring(1,e.length-1).match(/\\u[0-9A-Fa-f]{4}|\\x[0-9A-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\s\S]|-|[^-\\]/g);e=
[];var a="^"===b[0],c=["["];a&&c.push("^");for(var a=a?1:0,g=b.length;a<g;++a){var h=b[a];if(/\\[bdsw]/i.test(h))c.push(h);else{var h=d(h),k;a+2<g&&"-"===b[a+1]?(k=d(b[a+2]),a+=2):k=h;e.push([h,k]);65>k||122<h||(65>k||90<h||e.push([Math.max(65,h)|32,Math.min(k,90)|32]),97>k||122<h||e.push([Math.max(97,h)&-33,Math.min(k,122)&-33]))}}e.sort(function(e,a){return e[0]-a[0]||a[1]-e[1]});b=[];g=[];for(a=0;a<e.length;++a)h=e[a],h[0]<=g[1]+1?g[1]=Math.max(g[1],h[1]):b.push(g=h);for(a=0;a<b.length;++a)h=b[a],
c.push(f(h[0])),h[1]>h[0]&&(h[1]+1>h[0]&&c.push("-"),c.push(f(h[1])));c.push("]");return c.join("")}function v(e){for(var a=e.source.match(/(?:\[(?:[^\x5C\x5D]|\\[\s\S])*\]|\\u[A-Fa-f0-9]{4}|\\x[A-Fa-f0-9]{2}|\\[0-9]+|\\[^ux0-9]|\(\?[:!=]|[\(\)\^]|[^\x5B\x5C\(\)\^]+)/g),c=a.length,d=[],g=0,h=0;g<c;++g){var k=a[g];"("===k?++h:"\\"===k.charAt(0)&&(k=+k.substring(1))&&(k<=h?d[k]=-1:a[g]=f(k))}for(g=1;g<d.length;++g)-1===d[g]&&(d[g]=++A);for(h=g=0;g<c;++g)k=a[g],"("===k?(++h,d[h]||(a[g]="(?:")):"\\"===
k.charAt(0)&&(k=+k.substring(1))&&k<=h&&(a[g]="\\"+d[k]);for(g=0;g<c;++g)"^"===a[g]&&"^"!==a[g+1]&&(a[g]="");if(e.ignoreCase&&n)for(g=0;g<c;++g)k=a[g],e=k.charAt(0),2<=k.length&&"["===e?a[g]=b(k):"\\"!==e&&(a[g]=k.replace(/[a-zA-Z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return a.join("")}for(var A=0,n=!1,l=!1,m=0,c=a.length;m<c;++m){var p=a[m];if(p.ignoreCase)l=!0;else if(/[a-z]/i.test(p.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){n=!0;
l=!1;break}}for(var w={b:8,t:9,n:10,v:11,f:12,r:13},r=[],m=0,c=a.length;m<c;++m){p=a[m];if(p.global||p.multiline)throw Error(""+p);r.push("(?:"+v(p)+")")}return new RegExp(r.join("|"),l?"gi":"g")}function U(a,d){function f(a){var c=a.nodeType;if(1==c){if(!b.test(a.className)){for(c=a.firstChild;c;c=c.nextSibling)f(c);c=a.nodeName.toLowerCase();if("br"===c||"li"===c)v[l]="\n",n[l<<1]=A++,n[l++<<1|1]=a}}else if(3==c||4==c)c=a.nodeValue,c.length&&(c=d?c.replace(/\r\n?/g,"\n"):c.replace(/[ \t\r\n]+/g,
" "),v[l]=c,n[l<<1]=A,A+=c.length,n[l++<<1|1]=a)}var b=/(?:^|\s)nocode(?:\s|$)/,v=[],A=0,n=[],l=0;f(a);return{a:v.join("").replace(/\n$/,""),c:n}}function J(a,d,f,b,v){f&&(a={h:a,l:1,j:null,m:null,a:f,c:null,i:d,g:null},b(a),v.push.apply(v,a.g))}function V(a){for(var d=void 0,f=a.firstChild;f;f=f.nextSibling)var b=f.nodeType,d=1===b?d?a:f:3===b?W.test(f.nodeValue)?a:d:d;return d===a?void 0:d}function G(a,d){function f(a){for(var l=a.i,m=a.h,c=[l,"pln"],p=0,w=a.a.match(v)||[],r={},e=0,t=w.length;e<
t;++e){var z=w[e],q=r[z],g=void 0,h;if("string"===typeof q)h=!1;else{var k=b[z.charAt(0)];if(k)g=z.match(k[1]),q=k[0];else{for(h=0;h<A;++h)if(k=d[h],g=z.match(k[1])){q=k[0];break}g||(q="pln")}!(h=5<=q.length&&"lang-"===q.substring(0,5))||g&&"string"===typeof g[1]||(h=!1,q="src");h||(r[z]=q)}k=p;p+=z.length;if(h){h=g[1];var B=z.indexOf(h),D=B+h.length;g[2]&&(D=z.length-g[2].length,B=D-h.length);q=q.substring(5);J(m,l+k,z.substring(0,B),f,c);J(m,l+k+B,h,K(q,h),c);J(m,l+k+D,z.substring(D),f,c)}else c.push(l+
k,q)}a.g=c}var b={},v;(function(){for(var f=a.concat(d),l=[],m={},c=0,p=f.length;c<p;++c){var w=f[c],r=w[3];if(r)for(var e=r.length;0<=--e;)b[r.charAt(e)]=w;w=w[1];r=""+w;m.hasOwnProperty(r)||(l.push(w),m[r]=null)}l.push(/[\0-\uffff]/);v=T(l)})();var A=d.length;return f}function y(a){var d=[],f=[];a.tripleQuotedStrings?d.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
null,"'\""]):a.multiLineStrings?d.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):d.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]);a.verbatimStrings&&f.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var b=a.hashComments;b&&(a.cStyleComments?(1<b?d.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):d.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,
null,"#"]),f.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):d.push(["com",/^#[^\r\n]*/,null,"#"]));a.cStyleComments&&(f.push(["com",/^\/\/[^\r\n]*/,null]),f.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,null]));if(b=a.regexLiterals){var v=(b=1<b?"":"\n\r")?".":"[\\S\\s]";f.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+
("/(?=[^/*"+b+"])(?:[^/\\x5B\\x5C"+b+"]|\\x5C"+v+"|\\x5B(?:[^\\x5C\\x5D"+b+"]|\\x5C"+v+")*(?:\\x5D|$))+/")+")")])}(b=a.types)&&f.push(["typ",b]);b=(""+a.keywords).replace(/^ | $/g,"");b.length&&f.push(["kwd",new RegExp("^(?:"+b.replace(/[\s,]+/g,"|")+")\\b"),null]);d.push(["pln",/^\s+/,null," \r\n\t\u00a0"]);b="^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals&&(b+="(?!s*/)");f.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,null],["typ",/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],["pln",/^[a-z_$][a-z_$@0-9]*/i,
null],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,"0123456789"],["pln",/^\\[\s\S]?/,null],["pun",new RegExp(b),null]);return G(d,f)}function L(a,d,f){function b(a){var c=a.nodeType;if(1==c&&!A.test(a.className))if("br"===a.nodeName)v(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)b(a);else if((3==c||4==c)&&f){var d=a.nodeValue,q=d.match(n);q&&(c=d.substring(0,q.index),a.nodeValue=c,(d=d.substring(q.index+q[0].length))&&
a.parentNode.insertBefore(l.createTextNode(d),a.nextSibling),v(a),c||a.parentNode.removeChild(a))}}function v(a){function b(a,c){var d=c?a.cloneNode(!1):a,k=a.parentNode;if(k){var k=b(k,1),e=a.nextSibling;k.appendChild(d);for(var f=e;f;f=e)e=f.nextSibling,k.appendChild(f)}return d}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;a=b(a.nextSibling,0);for(var d;(d=a.parentNode)&&1===d.nodeType;)a=d;c.push(a)}for(var A=/(?:^|\s)nocode(?:\s|$)/,n=/\r\n?|\n/,l=a.ownerDocument,m=l.createElement("li");a.firstChild;)m.appendChild(a.firstChild);
for(var c=[m],p=0;p<c.length;++p)b(c[p]);d===(d|0)&&c[0].setAttribute("value",d);var w=l.createElement("ol");w.className="linenums";d=Math.max(0,d-1|0)||0;for(var p=0,r=c.length;p<r;++p)m=c[p],m.className="L"+(p+d)%10,m.firstChild||m.appendChild(l.createTextNode("\u00a0")),w.appendChild(m);a.appendChild(w)}function t(a,d){for(var f=d.length;0<=--f;){var b=d[f];I.hasOwnProperty(b)?E.console&&console.warn("cannot override language handler %s",b):I[b]=a}}function K(a,d){a&&I.hasOwnProperty(a)||(a=/^\s*</.test(d)?
"default-markup":"default-code");return I[a]}function M(a){var d=a.j;try{var f=U(a.h,a.l),b=f.a;a.a=b;a.c=f.c;a.i=0;K(d,b)(a);var v=/\bMSIE\s(\d+)/.exec(navigator.userAgent),v=v&&8>=+v[1],d=/\n/g,A=a.a,n=A.length,f=0,l=a.c,m=l.length,b=0,c=a.g,p=c.length,w=0;c[p]=n;var r,e;for(e=r=0;e<p;)c[e]!==c[e+2]?(c[r++]=c[e++],c[r++]=c[e++]):e+=2;p=r;for(e=r=0;e<p;){for(var t=c[e],z=c[e+1],q=e+2;q+2<=p&&c[q+1]===z;)q+=2;c[r++]=t;c[r++]=z;e=q}c.length=r;var g=a.h;a="";g&&(a=g.style.display,g.style.display="none");
try{for(;b<m;){var h=l[b+2]||n,k=c[w+2]||n,q=Math.min(h,k),B=l[b+1],D;if(1!==B.nodeType&&(D=A.substring(f,q))){v&&(D=D.replace(d,"\r"));B.nodeValue=D;var N=B.ownerDocument,u=N.createElement("span");u.className=c[w+1];var y=B.parentNode;y.replaceChild(u,B);u.appendChild(B);f<h&&(l[b+1]=B=N.createTextNode(A.substring(q,h)),y.insertBefore(B,u.nextSibling))}f=q;f>=h&&(b+=2);f>=k&&(w+=2)}}finally{g&&(g.style.display=a)}}catch(x){E.console&&console.log(x&&x.stack||x)}}var E=window,C=["break,continue,do,else,for,if,return,while"],
F=[[C,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],H=[F,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
O=[F,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],P=[F,"abstract,as,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],F=[F,"debugger,eval,export,function,get,instanceof,null,set,undefined,var,with,Infinity,NaN"],
Q=[C,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],R=[C,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],C=[C,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],S=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
W=/\S/,X=y({keywords:[H,P,O,F,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",Q,R,C],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),I={};t(X,["default-code"]);t(G([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",
/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup htm html mxml xhtml xml xsl".split(" "));t(G([["pln",/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);t(G([],[["atv",/^[\s\S]+/]]),["uq.val"]);t(y({keywords:H,hashComments:!0,cStyleComments:!0,types:S}),"c cc cpp cxx cyc m".split(" "));t(y({keywords:"null,true,false"}),["json"]);t(y({keywords:P,hashComments:!0,cStyleComments:!0,
verbatimStrings:!0,types:S}),["cs"]);t(y({keywords:O,cStyleComments:!0}),["java"]);t(y({keywords:C,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);t(y({keywords:Q,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);t(y({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),
["perl","pl","pm"]);t(y({keywords:R,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);t(y({keywords:F,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]);t(y({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);t(G([],[["str",/^[\s\S]+/]]),["regex"]);
var Y=E.PR={createSimpleLexer:G,registerLangHandler:t,sourceDecorator:y,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:E.prettyPrintOne=function(a,d,f){f=f||!1;d=d||null;var b=document.createElement("div");b.innerHTML="<pre>"+a+"</pre>";b=b.firstChild;f&&L(b,f,!0);M({j:d,m:f,h:b,l:1,a:null,i:null,c:null,
g:null});return b.innerHTML},prettyPrint:E.prettyPrint=function(a,d){function f(){for(var b=E.PR_SHOULD_USE_CONTINUATION?c.now()+250:Infinity;p<t.length&&c.now()<b;p++){for(var d=t[p],l=g,m=d;m=m.previousSibling;){var n=m.nodeType,u=(7===n||8===n)&&m.nodeValue;if(u?!/^\??prettify\b/.test(u):3!==n||/\S/.test(m.nodeValue))break;if(u){l={};u.replace(/\b(\w+)=([\w:.%+-]+)/g,function(a,b,c){l[b]=c});break}}m=d.className;if((l!==g||r.test(m))&&!e.test(m)){n=!1;for(u=d.parentNode;u;u=u.parentNode)if(q.test(u.tagName)&&
u.className&&r.test(u.className)){n=!0;break}if(!n){d.className+=" prettyprinted";n=l.lang;if(!n){var n=m.match(w),C;!n&&(C=V(d))&&z.test(C.tagName)&&(n=C.className.match(w));n&&(n=n[1])}if(y.test(d.tagName))u=1;else var u=d.currentStyle,x=v.defaultView,u=(u=u?u.whiteSpace:x&&x.getComputedStyle?x.getComputedStyle(d,null).getPropertyValue("white-space"):0)&&"pre"===u.substring(0,3);x=l.linenums;(x="true"===x||+x)||(x=(x=m.match(/\blinenums\b(?::(\d+))?/))?x[1]&&x[1].length?+x[1]:!0:!1);x&&L(d,x,u);
M({j:n,h:d,m:x,l:u,a:null,i:null,c:null,g:null})}}}p<t.length?E.setTimeout(f,250):"function"===typeof a&&a()}for(var b=d||document.body,v=b.ownerDocument||document,b=[b.getElementsByTagName("pre"),b.getElementsByTagName("code"),b.getElementsByTagName("xmp")],t=[],n=0;n<b.length;++n)for(var l=0,m=b[n].length;l<m;++l)t.push(b[n][l]);var b=null,c=Date;c.now||(c={now:function(){return+new Date}});var p=0,w=/\blang(?:uage)?-([\w.]+)(?!\S)/,r=/\bprettyprint\b/,e=/\bprettyprinted\b/,y=/pre|xmp/i,z=/^code$/i,
q=/^(?:pre|code|xmp)$/i,g={};f()}},H=E.define;"function"===typeof H&&H.amd&&H("google-code-prettify",[],function(){return Y})})();}()

/**
 * core-js 2.4.1
 * https://github.com/zloirock/core-js
 * License: http://rock.mit-license.org
 * © 2016 Denis Pushkarev
 */
!function(a,b,c){"use strict";!function(a){function __webpack_require__(c){if(b[c])return b[c].exports;var d=b[c]={exports:{},id:c,loaded:!1};return a[c].call(d.exports,d,d.exports,__webpack_require__),d.loaded=!0,d.exports}var b={};return __webpack_require__.m=a,__webpack_require__.c=b,__webpack_require__.p="",__webpack_require__(0)}([function(a,b,c){c(1),c(50),c(51),c(52),c(54),c(55),c(58),c(59),c(60),c(61),c(62),c(63),c(64),c(65),c(66),c(68),c(70),c(72),c(74),c(77),c(78),c(79),c(83),c(86),c(87),c(88),c(89),c(91),c(92),c(93),c(94),c(95),c(97),c(99),c(100),c(101),c(103),c(104),c(105),c(107),c(108),c(109),c(111),c(112),c(113),c(114),c(115),c(116),c(117),c(118),c(119),c(120),c(121),c(122),c(123),c(124),c(126),c(130),c(131),c(132),c(133),c(137),c(139),c(140),c(141),c(142),c(143),c(144),c(145),c(146),c(147),c(148),c(149),c(150),c(151),c(152),c(158),c(159),c(161),c(162),c(163),c(167),c(168),c(169),c(170),c(171),c(173),c(174),c(175),c(176),c(179),c(181),c(182),c(183),c(185),c(187),c(189),c(190),c(191),c(193),c(194),c(195),c(196),c(203),c(206),c(207),c(209),c(210),c(211),c(212),c(213),c(214),c(215),c(216),c(217),c(218),c(219),c(220),c(222),c(223),c(224),c(225),c(226),c(227),c(228),c(229),c(231),c(234),c(235),c(237),c(238),c(239),c(240),c(241),c(242),c(243),c(244),c(245),c(246),c(247),c(249),c(250),c(251),c(252),c(253),c(254),c(255),c(256),c(258),c(259),c(261),c(262),c(263),c(264),c(267),c(268),c(269),c(270),c(271),c(272),c(273),c(274),c(276),c(277),c(278),c(279),c(280),c(281),c(282),c(283),c(284),c(285),c(286),c(287),a.exports=c(288)},function(a,b,d){var e=d(2),f=d(3),g=d(4),h=d(6),i=d(16),j=d(20).KEY,k=d(5),l=d(21),m=d(22),n=d(17),o=d(23),p=d(24),q=d(25),r=d(27),s=d(40),t=d(43),u=d(10),v=d(30),w=d(14),x=d(15),y=d(44),z=d(47),A=d(49),B=d(9),C=d(28),D=A.f,E=B.f,F=z.f,G=e.Symbol,H=e.JSON,I=H&&H.stringify,J="prototype",K=o("_hidden"),L=o("toPrimitive"),M={}.propertyIsEnumerable,N=l("symbol-registry"),O=l("symbols"),P=l("op-symbols"),Q=Object[J],R="function"==typeof G,S=e.QObject,T=!S||!S[J]||!S[J].findChild,U=g&&k(function(){return 7!=y(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(a,b,c){var d=D(Q,b);d&&delete Q[b],E(a,b,c),d&&a!==Q&&E(Q,b,d)}:E,V=function(a){var b=O[a]=y(G[J]);return b._k=a,b},W=R&&"symbol"==typeof G.iterator?function(a){return"symbol"==typeof a}:function(a){return a instanceof G},X=function defineProperty(a,b,c){return a===Q&&X(P,b,c),u(a),b=w(b,!0),u(c),f(O,b)?(c.enumerable?(f(a,K)&&a[K][b]&&(a[K][b]=!1),c=y(c,{enumerable:x(0,!1)})):(f(a,K)||E(a,K,x(1,{})),a[K][b]=!0),U(a,b,c)):E(a,b,c)},Y=function defineProperties(a,b){u(a);for(var c,d=s(b=v(b)),e=0,f=d.length;f>e;)X(a,c=d[e++],b[c]);return a},Z=function create(a,b){return b===c?y(a):Y(y(a),b)},$=function propertyIsEnumerable(a){var b=M.call(this,a=w(a,!0));return!(this===Q&&f(O,a)&&!f(P,a))&&(!(b||!f(this,a)||!f(O,a)||f(this,K)&&this[K][a])||b)},_=function getOwnPropertyDescriptor(a,b){if(a=v(a),b=w(b,!0),a!==Q||!f(O,b)||f(P,b)){var c=D(a,b);return!c||!f(O,b)||f(a,K)&&a[K][b]||(c.enumerable=!0),c}},aa=function getOwnPropertyNames(a){for(var b,c=F(v(a)),d=[],e=0;c.length>e;)f(O,b=c[e++])||b==K||b==j||d.push(b);return d},ba=function getOwnPropertySymbols(a){for(var b,c=a===Q,d=F(c?P:v(a)),e=[],g=0;d.length>g;)!f(O,b=d[g++])||c&&!f(Q,b)||e.push(O[b]);return e};R||(G=function Symbol(){if(this instanceof G)throw TypeError("Symbol is not a constructor!");var a=n(arguments.length>0?arguments[0]:c),b=function(c){this===Q&&b.call(P,c),f(this,K)&&f(this[K],a)&&(this[K][a]=!1),U(this,a,x(1,c))};return g&&T&&U(Q,a,{configurable:!0,set:b}),V(a)},i(G[J],"toString",function toString(){return this._k}),A.f=_,B.f=X,d(48).f=z.f=aa,d(42).f=$,d(41).f=ba,g&&!d(26)&&i(Q,"propertyIsEnumerable",$,!0),p.f=function(a){return V(o(a))}),h(h.G+h.W+h.F*!R,{Symbol:G});for(var ca="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),da=0;ca.length>da;)o(ca[da++]);for(var ca=C(o.store),da=0;ca.length>da;)q(ca[da++]);h(h.S+h.F*!R,"Symbol",{"for":function(a){return f(N,a+="")?N[a]:N[a]=G(a)},keyFor:function keyFor(a){if(W(a))return r(N,a);throw TypeError(a+" is not a symbol!")},useSetter:function(){T=!0},useSimple:function(){T=!1}}),h(h.S+h.F*!R,"Object",{create:Z,defineProperty:X,defineProperties:Y,getOwnPropertyDescriptor:_,getOwnPropertyNames:aa,getOwnPropertySymbols:ba}),H&&h(h.S+h.F*(!R||k(function(){var a=G();return"[null]"!=I([a])||"{}"!=I({a:a})||"{}"!=I(Object(a))})),"JSON",{stringify:function stringify(a){if(a!==c&&!W(a)){for(var b,d,e=[a],f=1;arguments.length>f;)e.push(arguments[f++]);return b=e[1],"function"==typeof b&&(d=b),!d&&t(b)||(b=function(a,b){if(d&&(b=d.call(this,a,b)),!W(b))return b}),e[1]=b,I.apply(H,e)}}}),G[J][L]||d(8)(G[J],L,G[J].valueOf),m(G,"Symbol"),m(Math,"Math",!0),m(e.JSON,"JSON",!0)},function(a,c){var d=a.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof b&&(b=d)},function(a,b){var c={}.hasOwnProperty;a.exports=function(a,b){return c.call(a,b)}},function(a,b,c){a.exports=!c(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(a,b){a.exports=function(a){try{return!!a()}catch(b){return!0}}},function(a,b,d){var e=d(2),f=d(7),g=d(8),h=d(16),i=d(18),j="prototype",k=function(a,b,d){var l,m,n,o,p=a&k.F,q=a&k.G,r=a&k.S,s=a&k.P,t=a&k.B,u=q?e:r?e[b]||(e[b]={}):(e[b]||{})[j],v=q?f:f[b]||(f[b]={}),w=v[j]||(v[j]={});q&&(d=b);for(l in d)m=!p&&u&&u[l]!==c,n=(m?u:d)[l],o=t&&m?i(n,e):s&&"function"==typeof n?i(Function.call,n):n,u&&h(u,l,n,a&k.U),v[l]!=n&&g(v,l,o),s&&w[l]!=n&&(w[l]=n)};e.core=f,k.F=1,k.G=2,k.S=4,k.P=8,k.B=16,k.W=32,k.U=64,k.R=128,a.exports=k},function(b,c){var d=b.exports={version:"2.4.0"};"number"==typeof a&&(a=d)},function(a,b,c){var d=c(9),e=c(15);a.exports=c(4)?function(a,b,c){return d.f(a,b,e(1,c))}:function(a,b,c){return a[b]=c,a}},function(a,b,c){var d=c(10),e=c(12),f=c(14),g=Object.defineProperty;b.f=c(4)?Object.defineProperty:function defineProperty(a,b,c){if(d(a),b=f(b,!0),d(c),e)try{return g(a,b,c)}catch(h){}if("get"in c||"set"in c)throw TypeError("Accessors not supported!");return"value"in c&&(a[b]=c.value),a}},function(a,b,c){var d=c(11);a.exports=function(a){if(!d(a))throw TypeError(a+" is not an object!");return a}},function(a,b){a.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}},function(a,b,c){a.exports=!c(4)&&!c(5)(function(){return 7!=Object.defineProperty(c(13)("div"),"a",{get:function(){return 7}}).a})},function(a,b,c){var d=c(11),e=c(2).document,f=d(e)&&d(e.createElement);a.exports=function(a){return f?e.createElement(a):{}}},function(a,b,c){var d=c(11);a.exports=function(a,b){if(!d(a))return a;var c,e;if(b&&"function"==typeof(c=a.toString)&&!d(e=c.call(a)))return e;if("function"==typeof(c=a.valueOf)&&!d(e=c.call(a)))return e;if(!b&&"function"==typeof(c=a.toString)&&!d(e=c.call(a)))return e;throw TypeError("Can't convert object to primitive value")}},function(a,b){a.exports=function(a,b){return{enumerable:!(1&a),configurable:!(2&a),writable:!(4&a),value:b}}},function(a,b,c){var d=c(2),e=c(8),f=c(3),g=c(17)("src"),h="toString",i=Function[h],j=(""+i).split(h);c(7).inspectSource=function(a){return i.call(a)},(a.exports=function(a,b,c,h){var i="function"==typeof c;i&&(f(c,"name")||e(c,"name",b)),a[b]!==c&&(i&&(f(c,g)||e(c,g,a[b]?""+a[b]:j.join(String(b)))),a===d?a[b]=c:h?a[b]?a[b]=c:e(a,b,c):(delete a[b],e(a,b,c)))})(Function.prototype,h,function toString(){return"function"==typeof this&&this[g]||i.call(this)})},function(a,b){var d=0,e=Math.random();a.exports=function(a){return"Symbol(".concat(a===c?"":a,")_",(++d+e).toString(36))}},function(a,b,d){var e=d(19);a.exports=function(a,b,d){if(e(a),b===c)return a;switch(d){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}}},function(a,b){a.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a}},function(a,b,c){var d=c(17)("meta"),e=c(11),f=c(3),g=c(9).f,h=0,i=Object.isExtensible||function(){return!0},j=!c(5)(function(){return i(Object.preventExtensions({}))}),k=function(a){g(a,d,{value:{i:"O"+ ++h,w:{}}})},l=function(a,b){if(!e(a))return"symbol"==typeof a?a:("string"==typeof a?"S":"P")+a;if(!f(a,d)){if(!i(a))return"F";if(!b)return"E";k(a)}return a[d].i},m=function(a,b){if(!f(a,d)){if(!i(a))return!0;if(!b)return!1;k(a)}return a[d].w},n=function(a){return j&&o.NEED&&i(a)&&!f(a,d)&&k(a),a},o=a.exports={KEY:d,NEED:!1,fastKey:l,getWeak:m,onFreeze:n}},function(a,b,c){var d=c(2),e="__core-js_shared__",f=d[e]||(d[e]={});a.exports=function(a){return f[a]||(f[a]={})}},function(a,b,c){var d=c(9).f,e=c(3),f=c(23)("toStringTag");a.exports=function(a,b,c){a&&!e(a=c?a:a.prototype,f)&&d(a,f,{configurable:!0,value:b})}},function(a,b,c){var d=c(21)("wks"),e=c(17),f=c(2).Symbol,g="function"==typeof f,h=a.exports=function(a){return d[a]||(d[a]=g&&f[a]||(g?f:e)("Symbol."+a))};h.store=d},function(a,b,c){b.f=c(23)},function(a,b,c){var d=c(2),e=c(7),f=c(26),g=c(24),h=c(9).f;a.exports=function(a){var b=e.Symbol||(e.Symbol=f?{}:d.Symbol||{});"_"==a.charAt(0)||a in b||h(b,a,{value:g.f(a)})}},function(a,b){a.exports=!1},function(a,b,c){var d=c(28),e=c(30);a.exports=function(a,b){for(var c,f=e(a),g=d(f),h=g.length,i=0;h>i;)if(f[c=g[i++]]===b)return c}},function(a,b,c){var d=c(29),e=c(39);a.exports=Object.keys||function keys(a){return d(a,e)}},function(a,b,c){var d=c(3),e=c(30),f=c(34)(!1),g=c(38)("IE_PROTO");a.exports=function(a,b){var c,h=e(a),i=0,j=[];for(c in h)c!=g&&d(h,c)&&j.push(c);for(;b.length>i;)d(h,c=b[i++])&&(~f(j,c)||j.push(c));return j}},function(a,b,c){var d=c(31),e=c(33);a.exports=function(a){return d(e(a))}},function(a,b,c){var d=c(32);a.exports=Object("z").propertyIsEnumerable(0)?Object:function(a){return"String"==d(a)?a.split(""):Object(a)}},function(a,b){var c={}.toString;a.exports=function(a){return c.call(a).slice(8,-1)}},function(a,b){a.exports=function(a){if(a==c)throw TypeError("Can't call method on  "+a);return a}},function(a,b,c){var d=c(30),e=c(35),f=c(37);a.exports=function(a){return function(b,c,g){var h,i=d(b),j=e(i.length),k=f(g,j);if(a&&c!=c){for(;j>k;)if(h=i[k++],h!=h)return!0}else for(;j>k;k++)if((a||k in i)&&i[k]===c)return a||k||0;return!a&&-1}}},function(a,b,c){var d=c(36),e=Math.min;a.exports=function(a){return a>0?e(d(a),9007199254740991):0}},function(a,b){var c=Math.ceil,d=Math.floor;a.exports=function(a){return isNaN(a=+a)?0:(a>0?d:c)(a)}},function(a,b,c){var d=c(36),e=Math.max,f=Math.min;a.exports=function(a,b){return a=d(a),a<0?e(a+b,0):f(a,b)}},function(a,b,c){var d=c(21)("keys"),e=c(17);a.exports=function(a){return d[a]||(d[a]=e(a))}},function(a,b){a.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(a,b,c){var d=c(28),e=c(41),f=c(42);a.exports=function(a){var b=d(a),c=e.f;if(c)for(var g,h=c(a),i=f.f,j=0;h.length>j;)i.call(a,g=h[j++])&&b.push(g);return b}},function(a,b){b.f=Object.getOwnPropertySymbols},function(a,b){b.f={}.propertyIsEnumerable},function(a,b,c){var d=c(32);a.exports=Array.isArray||function isArray(a){return"Array"==d(a)}},function(a,b,d){var e=d(10),f=d(45),g=d(39),h=d(38)("IE_PROTO"),i=function(){},j="prototype",k=function(){var a,b=d(13)("iframe"),c=g.length,e="<",f=">";for(b.style.display="none",d(46).appendChild(b),b.src="javascript:",a=b.contentWindow.document,a.open(),a.write(e+"script"+f+"document.F=Object"+e+"/script"+f),a.close(),k=a.F;c--;)delete k[j][g[c]];return k()};a.exports=Object.create||function create(a,b){var d;return null!==a?(i[j]=e(a),d=new i,i[j]=null,d[h]=a):d=k(),b===c?d:f(d,b)}},function(a,b,c){var d=c(9),e=c(10),f=c(28);a.exports=c(4)?Object.defineProperties:function defineProperties(a,b){e(a);for(var c,g=f(b),h=g.length,i=0;h>i;)d.f(a,c=g[i++],b[c]);return a}},function(a,b,c){a.exports=c(2).document&&document.documentElement},function(a,b,c){var d=c(30),e=c(48).f,f={}.toString,g="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],h=function(a){try{return e(a)}catch(b){return g.slice()}};a.exports.f=function getOwnPropertyNames(a){return g&&"[object Window]"==f.call(a)?h(a):e(d(a))}},function(a,b,c){var d=c(29),e=c(39).concat("length","prototype");b.f=Object.getOwnPropertyNames||function getOwnPropertyNames(a){return d(a,e)}},function(a,b,c){var d=c(42),e=c(15),f=c(30),g=c(14),h=c(3),i=c(12),j=Object.getOwnPropertyDescriptor;b.f=c(4)?j:function getOwnPropertyDescriptor(a,b){if(a=f(a),b=g(b,!0),i)try{return j(a,b)}catch(c){}if(h(a,b))return e(!d.f.call(a,b),a[b])}},function(a,b,c){var d=c(6);d(d.S+d.F*!c(4),"Object",{defineProperty:c(9).f})},function(a,b,c){var d=c(6);d(d.S+d.F*!c(4),"Object",{defineProperties:c(45)})},function(a,b,c){var d=c(30),e=c(49).f;c(53)("getOwnPropertyDescriptor",function(){return function getOwnPropertyDescriptor(a,b){return e(d(a),b)}})},function(a,b,c){var d=c(6),e=c(7),f=c(5);a.exports=function(a,b){var c=(e.Object||{})[a]||Object[a],g={};g[a]=b(c),d(d.S+d.F*f(function(){c(1)}),"Object",g)}},function(a,b,c){var d=c(6);d(d.S,"Object",{create:c(44)})},function(a,b,c){var d=c(56),e=c(57);c(53)("getPrototypeOf",function(){return function getPrototypeOf(a){return e(d(a))}})},function(a,b,c){var d=c(33);a.exports=function(a){return Object(d(a))}},function(a,b,c){var d=c(3),e=c(56),f=c(38)("IE_PROTO"),g=Object.prototype;a.exports=Object.getPrototypeOf||function(a){return a=e(a),d(a,f)?a[f]:"function"==typeof a.constructor&&a instanceof a.constructor?a.constructor.prototype:a instanceof Object?g:null}},function(a,b,c){var d=c(56),e=c(28);c(53)("keys",function(){return function keys(a){return e(d(a))}})},function(a,b,c){c(53)("getOwnPropertyNames",function(){return c(47).f})},function(a,b,c){var d=c(11),e=c(20).onFreeze;c(53)("freeze",function(a){return function freeze(b){return a&&d(b)?a(e(b)):b}})},function(a,b,c){var d=c(11),e=c(20).onFreeze;c(53)("seal",function(a){return function seal(b){return a&&d(b)?a(e(b)):b}})},function(a,b,c){var d=c(11),e=c(20).onFreeze;c(53)("preventExtensions",function(a){return function preventExtensions(b){return a&&d(b)?a(e(b)):b}})},function(a,b,c){var d=c(11);c(53)("isFrozen",function(a){return function isFrozen(b){return!d(b)||!!a&&a(b)}})},function(a,b,c){var d=c(11);c(53)("isSealed",function(a){return function isSealed(b){return!d(b)||!!a&&a(b)}})},function(a,b,c){var d=c(11);c(53)("isExtensible",function(a){return function isExtensible(b){return!!d(b)&&(!a||a(b))}})},function(a,b,c){var d=c(6);d(d.S+d.F,"Object",{assign:c(67)})},function(a,b,c){var d=c(28),e=c(41),f=c(42),g=c(56),h=c(31),i=Object.assign;a.exports=!i||c(5)(function(){var a={},b={},c=Symbol(),d="abcdefghijklmnopqrst";return a[c]=7,d.split("").forEach(function(a){b[a]=a}),7!=i({},a)[c]||Object.keys(i({},b)).join("")!=d})?function assign(a,b){for(var c=g(a),i=arguments.length,j=1,k=e.f,l=f.f;i>j;)for(var m,n=h(arguments[j++]),o=k?d(n).concat(k(n)):d(n),p=o.length,q=0;p>q;)l.call(n,m=o[q++])&&(c[m]=n[m]);return c}:i},function(a,b,c){var d=c(6);d(d.S,"Object",{is:c(69)})},function(a,b){a.exports=Object.is||function is(a,b){return a===b?0!==a||1/a===1/b:a!=a&&b!=b}},function(a,b,c){var d=c(6);d(d.S,"Object",{setPrototypeOf:c(71).set})},function(a,b,d){var e=d(11),f=d(10),g=function(a,b){if(f(a),!e(b)&&null!==b)throw TypeError(b+": can't set as prototype!")};a.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(a,b,c){try{c=d(18)(Function.call,d(49).f(Object.prototype,"__proto__").set,2),c(a,[]),b=!(a instanceof Array)}catch(e){b=!0}return function setPrototypeOf(a,d){return g(a,d),b?a.__proto__=d:c(a,d),a}}({},!1):c),check:g}},function(a,b,c){var d=c(73),e={};e[c(23)("toStringTag")]="z",e+""!="[object z]"&&c(16)(Object.prototype,"toString",function toString(){return"[object "+d(this)+"]"},!0)},function(a,b,d){var e=d(32),f=d(23)("toStringTag"),g="Arguments"==e(function(){return arguments}()),h=function(a,b){try{return a[b]}catch(c){}};a.exports=function(a){var b,d,i;return a===c?"Undefined":null===a?"Null":"string"==typeof(d=h(b=Object(a),f))?d:g?e(b):"Object"==(i=e(b))&&"function"==typeof b.callee?"Arguments":i}},function(a,b,c){var d=c(6);d(d.P,"Function",{bind:c(75)})},function(a,b,c){var d=c(19),e=c(11),f=c(76),g=[].slice,h={},i=function(a,b,c){if(!(b in h)){for(var d=[],e=0;e<b;e++)d[e]="a["+e+"]";h[b]=Function("F,a","return new F("+d.join(",")+")")}return h[b](a,c)};a.exports=Function.bind||function bind(a){var b=d(this),c=g.call(arguments,1),h=function(){var d=c.concat(g.call(arguments));return this instanceof h?i(b,d.length,d):f(b,d,a)};return e(b.prototype)&&(h.prototype=b.prototype),h}},function(a,b){a.exports=function(a,b,d){var e=d===c;switch(b.length){case 0:return e?a():a.call(d);case 1:return e?a(b[0]):a.call(d,b[0]);case 2:return e?a(b[0],b[1]):a.call(d,b[0],b[1]);case 3:return e?a(b[0],b[1],b[2]):a.call(d,b[0],b[1],b[2]);case 4:return e?a(b[0],b[1],b[2],b[3]):a.call(d,b[0],b[1],b[2],b[3])}return a.apply(d,b)}},function(a,b,c){var d=c(9).f,e=c(15),f=c(3),g=Function.prototype,h=/^\s*function ([^ (]*)/,i="name",j=Object.isExtensible||function(){return!0};i in g||c(4)&&d(g,i,{configurable:!0,get:function(){try{var a=this,b=(""+a).match(h)[1];return f(a,i)||!j(a)||d(a,i,e(5,b)),b}catch(c){return""}}})},function(a,b,c){var d=c(11),e=c(57),f=c(23)("hasInstance"),g=Function.prototype;f in g||c(9).f(g,f,{value:function(a){if("function"!=typeof this||!d(a))return!1;if(!d(this.prototype))return a instanceof this;for(;a=e(a);)if(this.prototype===a)return!0;return!1}})},function(a,b,c){var d=c(2),e=c(3),f=c(32),g=c(80),h=c(14),i=c(5),j=c(48).f,k=c(49).f,l=c(9).f,m=c(81).trim,n="Number",o=d[n],p=o,q=o.prototype,r=f(c(44)(q))==n,s="trim"in String.prototype,t=function(a){var b=h(a,!1);if("string"==typeof b&&b.length>2){b=s?b.trim():m(b,3);var c,d,e,f=b.charCodeAt(0);if(43===f||45===f){if(c=b.charCodeAt(2),88===c||120===c)return NaN}else if(48===f){switch(b.charCodeAt(1)){case 66:case 98:d=2,e=49;break;case 79:case 111:d=8,e=55;break;default:return+b}for(var g,i=b.slice(2),j=0,k=i.length;j<k;j++)if(g=i.charCodeAt(j),g<48||g>e)return NaN;return parseInt(i,d)}}return+b};if(!o(" 0o1")||!o("0b1")||o("+0x1")){o=function Number(a){var b=arguments.length<1?0:a,c=this;return c instanceof o&&(r?i(function(){q.valueOf.call(c)}):f(c)!=n)?g(new p(t(b)),c,o):t(b)};for(var u,v=c(4)?j(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;v.length>w;w++)e(p,u=v[w])&&!e(o,u)&&l(o,u,k(p,u));o.prototype=q,q.constructor=o,c(16)(d,n,o)}},function(a,b,c){var d=c(11),e=c(71).set;a.exports=function(a,b,c){var f,g=b.constructor;return g!==c&&"function"==typeof g&&(f=g.prototype)!==c.prototype&&d(f)&&e&&e(a,f),a}},function(a,b,c){var d=c(6),e=c(33),f=c(5),g=c(82),h="["+g+"]",i="​",j=RegExp("^"+h+h+"*"),k=RegExp(h+h+"*$"),l=function(a,b,c){var e={},h=f(function(){return!!g[a]()||i[a]()!=i}),j=e[a]=h?b(m):g[a];c&&(e[c]=j),d(d.P+d.F*h,"String",e)},m=l.trim=function(a,b){return a=String(e(a)),1&b&&(a=a.replace(j,"")),2&b&&(a=a.replace(k,"")),a};a.exports=l},function(a,b){a.exports="\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff"},function(a,b,c){var d=c(6),e=c(36),f=c(84),g=c(85),h=1..toFixed,i=Math.floor,j=[0,0,0,0,0,0],k="Number.toFixed: incorrect invocation!",l="0",m=function(a,b){for(var c=-1,d=b;++c<6;)d+=a*j[c],j[c]=d%1e7,d=i(d/1e7)},n=function(a){for(var b=6,c=0;--b>=0;)c+=j[b],j[b]=i(c/a),c=c%a*1e7},o=function(){for(var a=6,b="";--a>=0;)if(""!==b||0===a||0!==j[a]){var c=String(j[a]);b=""===b?c:b+g.call(l,7-c.length)+c}return b},p=function(a,b,c){return 0===b?c:b%2===1?p(a,b-1,c*a):p(a*a,b/2,c)},q=function(a){for(var b=0,c=a;c>=4096;)b+=12,c/=4096;for(;c>=2;)b+=1,c/=2;return b};d(d.P+d.F*(!!h&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c(5)(function(){h.call({})})),"Number",{toFixed:function toFixed(a){var b,c,d,h,i=f(this,k),j=e(a),r="",s=l;if(j<0||j>20)throw RangeError(k);if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return String(i);if(i<0&&(r="-",i=-i),i>1e-21)if(b=q(i*p(2,69,1))-69,c=b<0?i*p(2,-b,1):i/p(2,b,1),c*=4503599627370496,b=52-b,b>0){for(m(0,c),d=j;d>=7;)m(1e7,0),d-=7;for(m(p(10,d,1),0),d=b-1;d>=23;)n(1<<23),d-=23;n(1<<d),m(1,1),n(2),s=o()}else m(0,c),m(1<<-b,0),s=o()+g.call(l,j);return j>0?(h=s.length,s=r+(h<=j?"0."+g.call(l,j-h)+s:s.slice(0,h-j)+"."+s.slice(h-j))):s=r+s,s}})},function(a,b,c){var d=c(32);a.exports=function(a,b){if("number"!=typeof a&&"Number"!=d(a))throw TypeError(b);return+a}},function(a,b,c){var d=c(36),e=c(33);a.exports=function repeat(a){var b=String(e(this)),c="",f=d(a);if(f<0||f==1/0)throw RangeError("Count can't be negative");for(;f>0;(f>>>=1)&&(b+=b))1&f&&(c+=b);return c}},function(a,b,d){var e=d(6),f=d(5),g=d(84),h=1..toPrecision;e(e.P+e.F*(f(function(){return"1"!==h.call(1,c)})||!f(function(){h.call({})})),"Number",{toPrecision:function toPrecision(a){var b=g(this,"Number#toPrecision: incorrect invocation!");return a===c?h.call(b):h.call(b,a)}})},function(a,b,c){var d=c(6);d(d.S,"Number",{EPSILON:Math.pow(2,-52)})},function(a,b,c){var d=c(6),e=c(2).isFinite;d(d.S,"Number",{isFinite:function isFinite(a){return"number"==typeof a&&e(a)}})},function(a,b,c){var d=c(6);d(d.S,"Number",{isInteger:c(90)})},function(a,b,c){var d=c(11),e=Math.floor;a.exports=function isInteger(a){return!d(a)&&isFinite(a)&&e(a)===a}},function(a,b,c){var d=c(6);d(d.S,"Number",{isNaN:function isNaN(a){return a!=a}})},function(a,b,c){var d=c(6),e=c(90),f=Math.abs;d(d.S,"Number",{isSafeInteger:function isSafeInteger(a){return e(a)&&f(a)<=9007199254740991}})},function(a,b,c){var d=c(6);d(d.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(a,b,c){var d=c(6);d(d.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(a,b,c){var d=c(6),e=c(96);d(d.S+d.F*(Number.parseFloat!=e),"Number",{parseFloat:e})},function(a,b,c){var d=c(2).parseFloat,e=c(81).trim;a.exports=1/d(c(82)+"-0")!==-(1/0)?function parseFloat(a){var b=e(String(a),3),c=d(b);return 0===c&&"-"==b.charAt(0)?-0:c}:d},function(a,b,c){var d=c(6),e=c(98);d(d.S+d.F*(Number.parseInt!=e),"Number",{parseInt:e})},function(a,b,c){var d=c(2).parseInt,e=c(81).trim,f=c(82),g=/^[\-+]?0[xX]/;a.exports=8!==d(f+"08")||22!==d(f+"0x16")?function parseInt(a,b){var c=e(String(a),3);return d(c,b>>>0||(g.test(c)?16:10))}:d},function(a,b,c){var d=c(6),e=c(98);d(d.G+d.F*(parseInt!=e),{parseInt:e})},function(a,b,c){var d=c(6),e=c(96);d(d.G+d.F*(parseFloat!=e),{parseFloat:e})},function(a,b,c){var d=c(6),e=c(102),f=Math.sqrt,g=Math.acosh;d(d.S+d.F*!(g&&710==Math.floor(g(Number.MAX_VALUE))&&g(1/0)==1/0),"Math",{acosh:function acosh(a){return(a=+a)<1?NaN:a>94906265.62425156?Math.log(a)+Math.LN2:e(a-1+f(a-1)*f(a+1))}})},function(a,b){a.exports=Math.log1p||function log1p(a){return(a=+a)>-1e-8&&a<1e-8?a-a*a/2:Math.log(1+a)}},function(a,b,c){function asinh(a){return isFinite(a=+a)&&0!=a?a<0?-asinh(-a):Math.log(a+Math.sqrt(a*a+1)):a}var d=c(6),e=Math.asinh;d(d.S+d.F*!(e&&1/e(0)>0),"Math",{asinh:asinh})},function(a,b,c){var d=c(6),e=Math.atanh;d(d.S+d.F*!(e&&1/e(-0)<0),"Math",{atanh:function atanh(a){return 0==(a=+a)?a:Math.log((1+a)/(1-a))/2}})},function(a,b,c){var d=c(6),e=c(106);d(d.S,"Math",{cbrt:function cbrt(a){return e(a=+a)*Math.pow(Math.abs(a),1/3)}})},function(a,b){a.exports=Math.sign||function sign(a){return 0==(a=+a)||a!=a?a:a<0?-1:1}},function(a,b,c){var d=c(6);d(d.S,"Math",{clz32:function clz32(a){return(a>>>=0)?31-Math.floor(Math.log(a+.5)*Math.LOG2E):32}})},function(a,b,c){var d=c(6),e=Math.exp;d(d.S,"Math",{cosh:function cosh(a){return(e(a=+a)+e(-a))/2}})},function(a,b,c){var d=c(6),e=c(110);d(d.S+d.F*(e!=Math.expm1),"Math",{expm1:e})},function(a,b){var c=Math.expm1;a.exports=!c||c(10)>22025.465794806718||c(10)<22025.465794806718||c(-2e-17)!=-2e-17?function expm1(a){return 0==(a=+a)?a:a>-1e-6&&a<1e-6?a+a*a/2:Math.exp(a)-1}:c},function(a,b,c){var d=c(6),e=c(106),f=Math.pow,g=f(2,-52),h=f(2,-23),i=f(2,127)*(2-h),j=f(2,-126),k=function(a){return a+1/g-1/g};d(d.S,"Math",{fround:function fround(a){var b,c,d=Math.abs(a),f=e(a);return d<j?f*k(d/j/h)*j*h:(b=(1+h/g)*d,c=b-(b-d),c>i||c!=c?f*(1/0):f*c)}})},function(a,b,c){var d=c(6),e=Math.abs;d(d.S,"Math",{hypot:function hypot(a,b){for(var c,d,f=0,g=0,h=arguments.length,i=0;g<h;)c=e(arguments[g++]),i<c?(d=i/c,f=f*d*d+1,i=c):c>0?(d=c/i,f+=d*d):f+=c;return i===1/0?1/0:i*Math.sqrt(f)}})},function(a,b,c){var d=c(6),e=Math.imul;d(d.S+d.F*c(5)(function(){return e(4294967295,5)!=-5||2!=e.length}),"Math",{imul:function imul(a,b){var c=65535,d=+a,e=+b,f=c&d,g=c&e;return 0|f*g+((c&d>>>16)*g+f*(c&e>>>16)<<16>>>0)}})},function(a,b,c){var d=c(6);d(d.S,"Math",{log10:function log10(a){return Math.log(a)/Math.LN10}})},function(a,b,c){var d=c(6);d(d.S,"Math",{log1p:c(102)})},function(a,b,c){var d=c(6);d(d.S,"Math",{log2:function log2(a){return Math.log(a)/Math.LN2}})},function(a,b,c){var d=c(6);d(d.S,"Math",{sign:c(106)})},function(a,b,c){var d=c(6),e=c(110),f=Math.exp;d(d.S+d.F*c(5)(function(){return!Math.sinh(-2e-17)!=-2e-17}),"Math",{sinh:function sinh(a){return Math.abs(a=+a)<1?(e(a)-e(-a))/2:(f(a-1)-f(-a-1))*(Math.E/2)}})},function(a,b,c){var d=c(6),e=c(110),f=Math.exp;d(d.S,"Math",{tanh:function tanh(a){var b=e(a=+a),c=e(-a);return b==1/0?1:c==1/0?-1:(b-c)/(f(a)+f(-a))}})},function(a,b,c){var d=c(6);d(d.S,"Math",{trunc:function trunc(a){return(a>0?Math.floor:Math.ceil)(a)}})},function(a,b,c){var d=c(6),e=c(37),f=String.fromCharCode,g=String.fromCodePoint;d(d.S+d.F*(!!g&&1!=g.length),"String",{fromCodePoint:function fromCodePoint(a){for(var b,c=[],d=arguments.length,g=0;d>g;){if(b=+arguments[g++],e(b,1114111)!==b)throw RangeError(b+" is not a valid code point");c.push(b<65536?f(b):f(((b-=65536)>>10)+55296,b%1024+56320))}return c.join("")}})},function(a,b,c){var d=c(6),e=c(30),f=c(35);d(d.S,"String",{raw:function raw(a){for(var b=e(a.raw),c=f(b.length),d=arguments.length,g=[],h=0;c>h;)g.push(String(b[h++])),h<d&&g.push(String(arguments[h]));return g.join("")}})},function(a,b,c){c(81)("trim",function(a){return function trim(){return a(this,3)}})},function(a,b,c){var d=c(6),e=c(125)(!1);d(d.P,"String",{codePointAt:function codePointAt(a){return e(this,a)}})},function(a,b,d){var e=d(36),f=d(33);a.exports=function(a){return function(b,d){var g,h,i=String(f(b)),j=e(d),k=i.length;return j<0||j>=k?a?"":c:(g=i.charCodeAt(j),g<55296||g>56319||j+1===k||(h=i.charCodeAt(j+1))<56320||h>57343?a?i.charAt(j):g:a?i.slice(j,j+2):(g-55296<<10)+(h-56320)+65536)}}},function(a,b,d){var e=d(6),f=d(35),g=d(127),h="endsWith",i=""[h];e(e.P+e.F*d(129)(h),"String",{endsWith:function endsWith(a){var b=g(this,a,h),d=arguments.length>1?arguments[1]:c,e=f(b.length),j=d===c?e:Math.min(f(d),e),k=String(a);return i?i.call(b,k,j):b.slice(j-k.length,j)===k}})},function(a,b,c){var d=c(128),e=c(33);a.exports=function(a,b,c){if(d(b))throw TypeError("String#"+c+" doesn't accept regex!");return String(e(a))}},function(a,b,d){var e=d(11),f=d(32),g=d(23)("match");a.exports=function(a){var b;return e(a)&&((b=a[g])!==c?!!b:"RegExp"==f(a))}},function(a,b,c){var d=c(23)("match");a.exports=function(a){var b=/./;try{"/./"[a](b)}catch(c){try{return b[d]=!1,!"/./"[a](b)}catch(e){}}return!0}},function(a,b,d){var e=d(6),f=d(127),g="includes";e(e.P+e.F*d(129)(g),"String",{includes:function includes(a){return!!~f(this,a,g).indexOf(a,arguments.length>1?arguments[1]:c)}})},function(a,b,c){var d=c(6);d(d.P,"String",{repeat:c(85)})},function(a,b,d){var e=d(6),f=d(35),g=d(127),h="startsWith",i=""[h];e(e.P+e.F*d(129)(h),"String",{startsWith:function startsWith(a){var b=g(this,a,h),d=f(Math.min(arguments.length>1?arguments[1]:c,b.length)),e=String(a);return i?i.call(b,e,d):b.slice(d,d+e.length)===e}})},function(a,b,d){var e=d(125)(!0);d(134)(String,"String",function(a){this._t=String(a),this._i=0},function(){var a,b=this._t,d=this._i;return d>=b.length?{value:c,done:!0}:(a=e(b,d),this._i+=a.length,{value:a,done:!1})})},function(a,b,d){var e=d(26),f=d(6),g=d(16),h=d(8),i=d(3),j=d(135),k=d(136),l=d(22),m=d(57),n=d(23)("iterator"),o=!([].keys&&"next"in[].keys()),p="@@iterator",q="keys",r="values",s=function(){return this};a.exports=function(a,b,d,t,u,v,w){k(d,b,t);var x,y,z,A=function(a){if(!o&&a in E)return E[a];switch(a){case q:return function keys(){return new d(this,a)};case r:return function values(){return new d(this,a)}}return function entries(){return new d(this,a)}},B=b+" Iterator",C=u==r,D=!1,E=a.prototype,F=E[n]||E[p]||u&&E[u],G=F||A(u),H=u?C?A("entries"):G:c,I="Array"==b?E.entries||F:F;if(I&&(z=m(I.call(new a)),z!==Object.prototype&&(l(z,B,!0),e||i(z,n)||h(z,n,s))),C&&F&&F.name!==r&&(D=!0,G=function values(){return F.call(this)}),e&&!w||!o&&!D&&E[n]||h(E,n,G),j[b]=G,j[B]=s,u)if(x={values:C?G:A(r),keys:v?G:A(q),entries:H},w)for(y in x)y in E||g(E,y,x[y]);else f(f.P+f.F*(o||D),b,x);return x}},function(a,b){a.exports={}},function(a,b,c){var d=c(44),e=c(15),f=c(22),g={};c(8)(g,c(23)("iterator"),function(){return this}),a.exports=function(a,b,c){a.prototype=d(g,{next:e(1,c)}),f(a,b+" Iterator")}},function(a,b,c){c(138)("anchor",function(a){return function anchor(b){return a(this,"a","name",b)}})},function(a,b,c){var d=c(6),e=c(5),f=c(33),g=/"/g,h=function(a,b,c,d){var e=String(f(a)),h="<"+b;return""!==c&&(h+=" "+c+'="'+String(d).replace(g,"&quot;")+'"'),h+">"+e+"</"+b+">"};a.exports=function(a,b){var c={};c[a]=b(h),d(d.P+d.F*e(function(){var b=""[a]('"');return b!==b.toLowerCase()||b.split('"').length>3}),"String",c)}},function(a,b,c){c(138)("big",function(a){return function big(){return a(this,"big","","")}})},function(a,b,c){c(138)("blink",function(a){return function blink(){return a(this,"blink","","")}})},function(a,b,c){c(138)("bold",function(a){return function bold(){return a(this,"b","","")}})},function(a,b,c){c(138)("fixed",function(a){return function fixed(){return a(this,"tt","","")}})},function(a,b,c){c(138)("fontcolor",function(a){return function fontcolor(b){return a(this,"font","color",b)}})},function(a,b,c){c(138)("fontsize",function(a){return function fontsize(b){return a(this,"font","size",b)}})},function(a,b,c){c(138)("italics",function(a){return function italics(){return a(this,"i","","")}})},function(a,b,c){c(138)("link",function(a){return function link(b){return a(this,"a","href",b)}})},function(a,b,c){c(138)("small",function(a){return function small(){return a(this,"small","","")}})},function(a,b,c){c(138)("strike",function(a){return function strike(){return a(this,"strike","","")}})},function(a,b,c){c(138)("sub",function(a){return function sub(){return a(this,"sub","","")}})},function(a,b,c){c(138)("sup",function(a){return function sup(){return a(this,"sup","","")}})},function(a,b,c){var d=c(6);d(d.S,"Array",{isArray:c(43)})},function(a,b,d){var e=d(18),f=d(6),g=d(56),h=d(153),i=d(154),j=d(35),k=d(155),l=d(156);f(f.S+f.F*!d(157)(function(a){Array.from(a)}),"Array",{from:function from(a){var b,d,f,m,n=g(a),o="function"==typeof this?this:Array,p=arguments.length,q=p>1?arguments[1]:c,r=q!==c,s=0,t=l(n);if(r&&(q=e(q,p>2?arguments[2]:c,2)),t==c||o==Array&&i(t))for(b=j(n.length),d=new o(b);b>s;s++)k(d,s,r?q(n[s],s):n[s]);else for(m=t.call(n),d=new o;!(f=m.next()).done;s++)k(d,s,r?h(m,q,[f.value,s],!0):f.value);return d.length=s,d}})},function(a,b,d){var e=d(10);a.exports=function(a,b,d,f){try{return f?b(e(d)[0],d[1]):b(d)}catch(g){var h=a["return"];throw h!==c&&e(h.call(a)),g}}},function(a,b,d){var e=d(135),f=d(23)("iterator"),g=Array.prototype;a.exports=function(a){return a!==c&&(e.Array===a||g[f]===a)}},function(a,b,c){var d=c(9),e=c(15);a.exports=function(a,b,c){b in a?d.f(a,b,e(0,c)):a[b]=c}},function(a,b,d){var e=d(73),f=d(23)("iterator"),g=d(135);a.exports=d(7).getIteratorMethod=function(a){if(a!=c)return a[f]||a["@@iterator"]||g[e(a)]}},function(a,b,c){var d=c(23)("iterator"),e=!1;
try{var f=[7][d]();f["return"]=function(){e=!0},Array.from(f,function(){throw 2})}catch(g){}a.exports=function(a,b){if(!b&&!e)return!1;var c=!1;try{var f=[7],g=f[d]();g.next=function(){return{done:c=!0}},f[d]=function(){return g},a(f)}catch(h){}return c}},function(a,b,c){var d=c(6),e=c(155);d(d.S+d.F*c(5)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{of:function of(){for(var a=0,b=arguments.length,c=new("function"==typeof this?this:Array)(b);b>a;)e(c,a,arguments[a++]);return c.length=b,c}})},function(a,b,d){var e=d(6),f=d(30),g=[].join;e(e.P+e.F*(d(31)!=Object||!d(160)(g)),"Array",{join:function join(a){return g.call(f(this),a===c?",":a)}})},function(a,b,c){var d=c(5);a.exports=function(a,b){return!!a&&d(function(){b?a.call(null,function(){},1):a.call(null)})}},function(a,b,d){var e=d(6),f=d(46),g=d(32),h=d(37),i=d(35),j=[].slice;e(e.P+e.F*d(5)(function(){f&&j.call(f)}),"Array",{slice:function slice(a,b){var d=i(this.length),e=g(this);if(b=b===c?d:b,"Array"==e)return j.call(this,a,b);for(var f=h(a,d),k=h(b,d),l=i(k-f),m=Array(l),n=0;n<l;n++)m[n]="String"==e?this.charAt(f+n):this[f+n];return m}})},function(a,b,d){var e=d(6),f=d(19),g=d(56),h=d(5),i=[].sort,j=[1,2,3];e(e.P+e.F*(h(function(){j.sort(c)})||!h(function(){j.sort(null)})||!d(160)(i)),"Array",{sort:function sort(a){return a===c?i.call(g(this)):i.call(g(this),f(a))}})},function(a,b,c){var d=c(6),e=c(164)(0),f=c(160)([].forEach,!0);d(d.P+d.F*!f,"Array",{forEach:function forEach(a){return e(this,a,arguments[1])}})},function(a,b,d){var e=d(18),f=d(31),g=d(56),h=d(35),i=d(165);a.exports=function(a,b){var d=1==a,j=2==a,k=3==a,l=4==a,m=6==a,n=5==a||m,o=b||i;return function(b,i,p){for(var q,r,s=g(b),t=f(s),u=e(i,p,3),v=h(t.length),w=0,x=d?o(b,v):j?o(b,0):c;v>w;w++)if((n||w in t)&&(q=t[w],r=u(q,w,s),a))if(d)x[w]=r;else if(r)switch(a){case 3:return!0;case 5:return q;case 6:return w;case 2:x.push(q)}else if(l)return!1;return m?-1:k||l?l:x}}},function(a,b,c){var d=c(166);a.exports=function(a,b){return new(d(a))(b)}},function(a,b,d){var e=d(11),f=d(43),g=d(23)("species");a.exports=function(a){var b;return f(a)&&(b=a.constructor,"function"!=typeof b||b!==Array&&!f(b.prototype)||(b=c),e(b)&&(b=b[g],null===b&&(b=c))),b===c?Array:b}},function(a,b,c){var d=c(6),e=c(164)(1);d(d.P+d.F*!c(160)([].map,!0),"Array",{map:function map(a){return e(this,a,arguments[1])}})},function(a,b,c){var d=c(6),e=c(164)(2);d(d.P+d.F*!c(160)([].filter,!0),"Array",{filter:function filter(a){return e(this,a,arguments[1])}})},function(a,b,c){var d=c(6),e=c(164)(3);d(d.P+d.F*!c(160)([].some,!0),"Array",{some:function some(a){return e(this,a,arguments[1])}})},function(a,b,c){var d=c(6),e=c(164)(4);d(d.P+d.F*!c(160)([].every,!0),"Array",{every:function every(a){return e(this,a,arguments[1])}})},function(a,b,c){var d=c(6),e=c(172);d(d.P+d.F*!c(160)([].reduce,!0),"Array",{reduce:function reduce(a){return e(this,a,arguments.length,arguments[1],!1)}})},function(a,b,c){var d=c(19),e=c(56),f=c(31),g=c(35);a.exports=function(a,b,c,h,i){d(b);var j=e(a),k=f(j),l=g(j.length),m=i?l-1:0,n=i?-1:1;if(c<2)for(;;){if(m in k){h=k[m],m+=n;break}if(m+=n,i?m<0:l<=m)throw TypeError("Reduce of empty array with no initial value")}for(;i?m>=0:l>m;m+=n)m in k&&(h=b(h,k[m],m,j));return h}},function(a,b,c){var d=c(6),e=c(172);d(d.P+d.F*!c(160)([].reduceRight,!0),"Array",{reduceRight:function reduceRight(a){return e(this,a,arguments.length,arguments[1],!0)}})},function(a,b,c){var d=c(6),e=c(34)(!1),f=[].indexOf,g=!!f&&1/[1].indexOf(1,-0)<0;d(d.P+d.F*(g||!c(160)(f)),"Array",{indexOf:function indexOf(a){return g?f.apply(this,arguments)||0:e(this,a,arguments[1])}})},function(a,b,c){var d=c(6),e=c(30),f=c(36),g=c(35),h=[].lastIndexOf,i=!!h&&1/[1].lastIndexOf(1,-0)<0;d(d.P+d.F*(i||!c(160)(h)),"Array",{lastIndexOf:function lastIndexOf(a){if(i)return h.apply(this,arguments)||0;var b=e(this),c=g(b.length),d=c-1;for(arguments.length>1&&(d=Math.min(d,f(arguments[1]))),d<0&&(d=c+d);d>=0;d--)if(d in b&&b[d]===a)return d||0;return-1}})},function(a,b,c){var d=c(6);d(d.P,"Array",{copyWithin:c(177)}),c(178)("copyWithin")},function(a,b,d){var e=d(56),f=d(37),g=d(35);a.exports=[].copyWithin||function copyWithin(a,b){var d=e(this),h=g(d.length),i=f(a,h),j=f(b,h),k=arguments.length>2?arguments[2]:c,l=Math.min((k===c?h:f(k,h))-j,h-i),m=1;for(j<i&&i<j+l&&(m=-1,j+=l-1,i+=l-1);l-- >0;)j in d?d[i]=d[j]:delete d[i],i+=m,j+=m;return d}},function(a,b,d){var e=d(23)("unscopables"),f=Array.prototype;f[e]==c&&d(8)(f,e,{}),a.exports=function(a){f[e][a]=!0}},function(a,b,c){var d=c(6);d(d.P,"Array",{fill:c(180)}),c(178)("fill")},function(a,b,d){var e=d(56),f=d(37),g=d(35);a.exports=function fill(a){for(var b=e(this),d=g(b.length),h=arguments.length,i=f(h>1?arguments[1]:c,d),j=h>2?arguments[2]:c,k=j===c?d:f(j,d);k>i;)b[i++]=a;return b}},function(a,b,d){var e=d(6),f=d(164)(5),g="find",h=!0;g in[]&&Array(1)[g](function(){h=!1}),e(e.P+e.F*h,"Array",{find:function find(a){return f(this,a,arguments.length>1?arguments[1]:c)}}),d(178)(g)},function(a,b,d){var e=d(6),f=d(164)(6),g="findIndex",h=!0;g in[]&&Array(1)[g](function(){h=!1}),e(e.P+e.F*h,"Array",{findIndex:function findIndex(a){return f(this,a,arguments.length>1?arguments[1]:c)}}),d(178)(g)},function(a,b,d){var e=d(178),f=d(184),g=d(135),h=d(30);a.exports=d(134)(Array,"Array",function(a,b){this._t=h(a),this._i=0,this._k=b},function(){var a=this._t,b=this._k,d=this._i++;return!a||d>=a.length?(this._t=c,f(1)):"keys"==b?f(0,d):"values"==b?f(0,a[d]):f(0,[d,a[d]])},"values"),g.Arguments=g.Array,e("keys"),e("values"),e("entries")},function(a,b){a.exports=function(a,b){return{value:b,done:!!a}}},function(a,b,c){c(186)("Array")},function(a,b,c){var d=c(2),e=c(9),f=c(4),g=c(23)("species");a.exports=function(a){var b=d[a];f&&b&&!b[g]&&e.f(b,g,{configurable:!0,get:function(){return this}})}},function(a,b,d){var e=d(2),f=d(80),g=d(9).f,h=d(48).f,i=d(128),j=d(188),k=e.RegExp,l=k,m=k.prototype,n=/a/g,o=/a/g,p=new k(n)!==n;if(d(4)&&(!p||d(5)(function(){return o[d(23)("match")]=!1,k(n)!=n||k(o)==o||"/a/i"!=k(n,"i")}))){k=function RegExp(a,b){var d=this instanceof k,e=i(a),g=b===c;return!d&&e&&a.constructor===k&&g?a:f(p?new l(e&&!g?a.source:a,b):l((e=a instanceof k)?a.source:a,e&&g?j.call(a):b),d?this:m,k)};for(var q=(function(a){a in k||g(k,a,{configurable:!0,get:function(){return l[a]},set:function(b){l[a]=b}})}),r=h(l),s=0;r.length>s;)q(r[s++]);m.constructor=k,k.prototype=m,d(16)(e,"RegExp",k)}d(186)("RegExp")},function(a,b,c){var d=c(10);a.exports=function(){var a=d(this),b="";return a.global&&(b+="g"),a.ignoreCase&&(b+="i"),a.multiline&&(b+="m"),a.unicode&&(b+="u"),a.sticky&&(b+="y"),b}},function(a,b,d){d(190);var e=d(10),f=d(188),g=d(4),h="toString",i=/./[h],j=function(a){d(16)(RegExp.prototype,h,a,!0)};d(5)(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?j(function toString(){var a=e(this);return"/".concat(a.source,"/","flags"in a?a.flags:!g&&a instanceof RegExp?f.call(a):c)}):i.name!=h&&j(function toString(){return i.call(this)})},function(a,b,c){c(4)&&"g"!=/./g.flags&&c(9).f(RegExp.prototype,"flags",{configurable:!0,get:c(188)})},function(a,b,d){d(192)("match",1,function(a,b,d){return[function match(d){var e=a(this),f=d==c?c:d[b];return f!==c?f.call(d,e):new RegExp(d)[b](String(e))},d]})},function(a,b,c){var d=c(8),e=c(16),f=c(5),g=c(33),h=c(23);a.exports=function(a,b,c){var i=h(a),j=c(g,i,""[a]),k=j[0],l=j[1];f(function(){var b={};return b[i]=function(){return 7},7!=""[a](b)})&&(e(String.prototype,a,k),d(RegExp.prototype,i,2==b?function(a,b){return l.call(a,this,b)}:function(a){return l.call(a,this)}))}},function(a,b,d){d(192)("replace",2,function(a,b,d){return[function replace(e,f){var g=a(this),h=e==c?c:e[b];return h!==c?h.call(e,g,f):d.call(String(g),e,f)},d]})},function(a,b,d){d(192)("search",1,function(a,b,d){return[function search(d){var e=a(this),f=d==c?c:d[b];return f!==c?f.call(d,e):new RegExp(d)[b](String(e))},d]})},function(a,b,d){d(192)("split",2,function(a,b,e){var f=d(128),g=e,h=[].push,i="split",j="length",k="lastIndex";if("c"=="abbc"[i](/(b)*/)[1]||4!="test"[i](/(?:)/,-1)[j]||2!="ab"[i](/(?:ab)*/)[j]||4!="."[i](/(.?)(.?)/)[j]||"."[i](/()()/)[j]>1||""[i](/.?/)[j]){var l=/()??/.exec("")[1]===c;e=function(a,b){var d=String(this);if(a===c&&0===b)return[];if(!f(a))return g.call(d,a,b);var e,i,m,n,o,p=[],q=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(a.sticky?"y":""),r=0,s=b===c?4294967295:b>>>0,t=new RegExp(a.source,q+"g");for(l||(e=new RegExp("^"+t.source+"$(?!\\s)",q));(i=t.exec(d))&&(m=i.index+i[0][j],!(m>r&&(p.push(d.slice(r,i.index)),!l&&i[j]>1&&i[0].replace(e,function(){for(o=1;o<arguments[j]-2;o++)arguments[o]===c&&(i[o]=c)}),i[j]>1&&i.index<d[j]&&h.apply(p,i.slice(1)),n=i[0][j],r=m,p[j]>=s)));)t[k]===i.index&&t[k]++;return r===d[j]?!n&&t.test("")||p.push(""):p.push(d.slice(r)),p[j]>s?p.slice(0,s):p}}else"0"[i](c,0)[j]&&(e=function(a,b){return a===c&&0===b?[]:g.call(this,a,b)});return[function split(d,f){var g=a(this),h=d==c?c:d[b];return h!==c?h.call(d,g,f):e.call(String(g),d,f)},e]})},function(a,b,d){var e,f,g,h=d(26),i=d(2),j=d(18),k=d(73),l=d(6),m=d(11),n=d(19),o=d(197),p=d(198),q=d(199),r=d(200).set,s=d(201)(),t="Promise",u=i.TypeError,v=i.process,w=i[t],v=i.process,x="process"==k(v),y=function(){},z=!!function(){try{var a=w.resolve(1),b=(a.constructor={})[d(23)("species")]=function(a){a(y,y)};return(x||"function"==typeof PromiseRejectionEvent)&&a.then(y)instanceof b}catch(c){}}(),A=function(a,b){return a===b||a===w&&b===g},B=function(a){var b;return!(!m(a)||"function"!=typeof(b=a.then))&&b},C=function(a){return A(w,a)?new D(a):new f(a)},D=f=function(a){var b,d;this.promise=new a(function(a,e){if(b!==c||d!==c)throw u("Bad Promise constructor");b=a,d=e}),this.resolve=n(b),this.reject=n(d)},E=function(a){try{a()}catch(b){return{error:b}}},F=function(a,b){if(!a._n){a._n=!0;var c=a._c;s(function(){for(var d=a._v,e=1==a._s,f=0,g=function(b){var c,f,g=e?b.ok:b.fail,h=b.resolve,i=b.reject,j=b.domain;try{g?(e||(2==a._h&&I(a),a._h=1),g===!0?c=d:(j&&j.enter(),c=g(d),j&&j.exit()),c===b.promise?i(u("Promise-chain cycle")):(f=B(c))?f.call(c,h,i):h(c)):i(d)}catch(k){i(k)}};c.length>f;)g(c[f++]);a._c=[],a._n=!1,b&&!a._h&&G(a)})}},G=function(a){r.call(i,function(){var b,d,e,f=a._v;if(H(a)&&(b=E(function(){x?v.emit("unhandledRejection",f,a):(d=i.onunhandledrejection)?d({promise:a,reason:f}):(e=i.console)&&e.error&&e.error("Unhandled promise rejection",f)}),a._h=x||H(a)?2:1),a._a=c,b)throw b.error})},H=function(a){if(1==a._h)return!1;for(var b,c=a._a||a._c,d=0;c.length>d;)if(b=c[d++],b.fail||!H(b.promise))return!1;return!0},I=function(a){r.call(i,function(){var b;x?v.emit("rejectionHandled",a):(b=i.onrejectionhandled)&&b({promise:a,reason:a._v})})},J=function(a){var b=this;b._d||(b._d=!0,b=b._w||b,b._v=a,b._s=2,b._a||(b._a=b._c.slice()),F(b,!0))},K=function(a){var b,c=this;if(!c._d){c._d=!0,c=c._w||c;try{if(c===a)throw u("Promise can't be resolved itself");(b=B(a))?s(function(){var d={_w:c,_d:!1};try{b.call(a,j(K,d,1),j(J,d,1))}catch(e){J.call(d,e)}}):(c._v=a,c._s=1,F(c,!1))}catch(d){J.call({_w:c,_d:!1},d)}}};z||(w=function Promise(a){o(this,w,t,"_h"),n(a),e.call(this);try{a(j(K,this,1),j(J,this,1))}catch(b){J.call(this,b)}},e=function Promise(a){this._c=[],this._a=c,this._s=0,this._d=!1,this._v=c,this._h=0,this._n=!1},e.prototype=d(202)(w.prototype,{then:function then(a,b){var d=C(q(this,w));return d.ok="function"!=typeof a||a,d.fail="function"==typeof b&&b,d.domain=x?v.domain:c,this._c.push(d),this._a&&this._a.push(d),this._s&&F(this,!1),d.promise},"catch":function(a){return this.then(c,a)}}),D=function(){var a=new e;this.promise=a,this.resolve=j(K,a,1),this.reject=j(J,a,1)}),l(l.G+l.W+l.F*!z,{Promise:w}),d(22)(w,t),d(186)(t),g=d(7)[t],l(l.S+l.F*!z,t,{reject:function reject(a){var b=C(this),c=b.reject;return c(a),b.promise}}),l(l.S+l.F*(h||!z),t,{resolve:function resolve(a){if(a instanceof w&&A(a.constructor,this))return a;var b=C(this),c=b.resolve;return c(a),b.promise}}),l(l.S+l.F*!(z&&d(157)(function(a){w.all(a)["catch"](y)})),t,{all:function all(a){var b=this,d=C(b),e=d.resolve,f=d.reject,g=E(function(){var d=[],g=0,h=1;p(a,!1,function(a){var i=g++,j=!1;d.push(c),h++,b.resolve(a).then(function(a){j||(j=!0,d[i]=a,--h||e(d))},f)}),--h||e(d)});return g&&f(g.error),d.promise},race:function race(a){var b=this,c=C(b),d=c.reject,e=E(function(){p(a,!1,function(a){b.resolve(a).then(c.resolve,d)})});return e&&d(e.error),c.promise}})},function(a,b){a.exports=function(a,b,d,e){if(!(a instanceof b)||e!==c&&e in a)throw TypeError(d+": incorrect invocation!");return a}},function(a,b,c){var d=c(18),e=c(153),f=c(154),g=c(10),h=c(35),i=c(156),j={},k={},b=a.exports=function(a,b,c,l,m){var n,o,p,q,r=m?function(){return a}:i(a),s=d(c,l,b?2:1),t=0;if("function"!=typeof r)throw TypeError(a+" is not iterable!");if(f(r)){for(n=h(a.length);n>t;t++)if(q=b?s(g(o=a[t])[0],o[1]):s(a[t]),q===j||q===k)return q}else for(p=r.call(a);!(o=p.next()).done;)if(q=e(p,s,o.value,b),q===j||q===k)return q};b.BREAK=j,b.RETURN=k},function(a,b,d){var e=d(10),f=d(19),g=d(23)("species");a.exports=function(a,b){var d,h=e(a).constructor;return h===c||(d=e(h)[g])==c?b:f(d)}},function(a,b,c){var d,e,f,g=c(18),h=c(76),i=c(46),j=c(13),k=c(2),l=k.process,m=k.setImmediate,n=k.clearImmediate,o=k.MessageChannel,p=0,q={},r="onreadystatechange",s=function(){var a=+this;if(q.hasOwnProperty(a)){var b=q[a];delete q[a],b()}},t=function(a){s.call(a.data)};m&&n||(m=function setImmediate(a){for(var b=[],c=1;arguments.length>c;)b.push(arguments[c++]);return q[++p]=function(){h("function"==typeof a?a:Function(a),b)},d(p),p},n=function clearImmediate(a){delete q[a]},"process"==c(32)(l)?d=function(a){l.nextTick(g(s,a,1))}:o?(e=new o,f=e.port2,e.port1.onmessage=t,d=g(f.postMessage,f,1)):k.addEventListener&&"function"==typeof postMessage&&!k.importScripts?(d=function(a){k.postMessage(a+"","*")},k.addEventListener("message",t,!1)):d=r in j("script")?function(a){i.appendChild(j("script"))[r]=function(){i.removeChild(this),s.call(a)}}:function(a){setTimeout(g(s,a,1),0)}),a.exports={set:m,clear:n}},function(a,b,d){var e=d(2),f=d(200).set,g=e.MutationObserver||e.WebKitMutationObserver,h=e.process,i=e.Promise,j="process"==d(32)(h);a.exports=function(){var a,b,d,k=function(){var e,f;for(j&&(e=h.domain)&&e.exit();a;){f=a.fn,a=a.next;try{f()}catch(g){throw a?d():b=c,g}}b=c,e&&e.enter()};if(j)d=function(){h.nextTick(k)};else if(g){var l=!0,m=document.createTextNode("");new g(k).observe(m,{characterData:!0}),d=function(){m.data=l=!l}}else if(i&&i.resolve){var n=i.resolve();d=function(){n.then(k)}}else d=function(){f.call(e,k)};return function(e){var f={fn:e,next:c};b&&(b.next=f),a||(a=f,d()),b=f}}},function(a,b,c){var d=c(16);a.exports=function(a,b,c){for(var e in b)d(a,e,b[e],c);return a}},function(a,b,d){var e=d(204);a.exports=d(205)("Map",function(a){return function Map(){return a(this,arguments.length>0?arguments[0]:c)}},{get:function get(a){var b=e.getEntry(this,a);return b&&b.v},set:function set(a,b){return e.def(this,0===a?0:a,b)}},e,!0)},function(a,b,d){var e=d(9).f,f=d(44),g=d(202),h=d(18),i=d(197),j=d(33),k=d(198),l=d(134),m=d(184),n=d(186),o=d(4),p=d(20).fastKey,q=o?"_s":"size",r=function(a,b){var c,d=p(b);if("F"!==d)return a._i[d];for(c=a._f;c;c=c.n)if(c.k==b)return c};a.exports={getConstructor:function(a,b,d,l){var m=a(function(a,e){i(a,m,b,"_i"),a._i=f(null),a._f=c,a._l=c,a[q]=0,e!=c&&k(e,d,a[l],a)});return g(m.prototype,{clear:function clear(){for(var a=this,b=a._i,d=a._f;d;d=d.n)d.r=!0,d.p&&(d.p=d.p.n=c),delete b[d.i];a._f=a._l=c,a[q]=0},"delete":function(a){var b=this,c=r(b,a);if(c){var d=c.n,e=c.p;delete b._i[c.i],c.r=!0,e&&(e.n=d),d&&(d.p=e),b._f==c&&(b._f=d),b._l==c&&(b._l=e),b[q]--}return!!c},forEach:function forEach(a){i(this,m,"forEach");for(var b,d=h(a,arguments.length>1?arguments[1]:c,3);b=b?b.n:this._f;)for(d(b.v,b.k,this);b&&b.r;)b=b.p},has:function has(a){return!!r(this,a)}}),o&&e(m.prototype,"size",{get:function(){return j(this[q])}}),m},def:function(a,b,d){var e,f,g=r(a,b);return g?g.v=d:(a._l=g={i:f=p(b,!0),k:b,v:d,p:e=a._l,n:c,r:!1},a._f||(a._f=g),e&&(e.n=g),a[q]++,"F"!==f&&(a._i[f]=g)),a},getEntry:r,setStrong:function(a,b,d){l(a,b,function(a,b){this._t=a,this._k=b,this._l=c},function(){for(var a=this,b=a._k,d=a._l;d&&d.r;)d=d.p;return a._t&&(a._l=d=d?d.n:a._t._f)?"keys"==b?m(0,d.k):"values"==b?m(0,d.v):m(0,[d.k,d.v]):(a._t=c,m(1))},d?"entries":"values",!d,!0),n(b)}}},function(a,b,d){var e=d(2),f=d(6),g=d(16),h=d(202),i=d(20),j=d(198),k=d(197),l=d(11),m=d(5),n=d(157),o=d(22),p=d(80);a.exports=function(a,b,d,q,r,s){var t=e[a],u=t,v=r?"set":"add",w=u&&u.prototype,x={},y=function(a){var b=w[a];g(w,a,"delete"==a?function(a){return!(s&&!l(a))&&b.call(this,0===a?0:a)}:"has"==a?function has(a){return!(s&&!l(a))&&b.call(this,0===a?0:a)}:"get"==a?function get(a){return s&&!l(a)?c:b.call(this,0===a?0:a)}:"add"==a?function add(a){return b.call(this,0===a?0:a),this}:function set(a,c){return b.call(this,0===a?0:a,c),this})};if("function"==typeof u&&(s||w.forEach&&!m(function(){(new u).entries().next()}))){var z=new u,A=z[v](s?{}:-0,1)!=z,B=m(function(){z.has(1)}),C=n(function(a){new u(a)}),D=!s&&m(function(){for(var a=new u,b=5;b--;)a[v](b,b);return!a.has(-0)});C||(u=b(function(b,d){k(b,u,a);var e=p(new t,b,u);return d!=c&&j(d,r,e[v],e),e}),u.prototype=w,w.constructor=u),(B||D)&&(y("delete"),y("has"),r&&y("get")),(D||A)&&y(v),s&&w.clear&&delete w.clear}else u=q.getConstructor(b,a,r,v),h(u.prototype,d),i.NEED=!0;return o(u,a),x[a]=u,f(f.G+f.W+f.F*(u!=t),x),s||q.setStrong(u,a,r),u}},function(a,b,d){var e=d(204);a.exports=d(205)("Set",function(a){return function Set(){return a(this,arguments.length>0?arguments[0]:c)}},{add:function add(a){return e.def(this,a=0===a?0:a,a)}},e)},function(a,b,d){var e,f=d(164)(0),g=d(16),h=d(20),i=d(67),j=d(208),k=d(11),l=h.getWeak,m=Object.isExtensible,n=j.ufstore,o={},p=function(a){return function WeakMap(){return a(this,arguments.length>0?arguments[0]:c)}},q={get:function get(a){if(k(a)){var b=l(a);return b===!0?n(this).get(a):b?b[this._i]:c}},set:function set(a,b){return j.def(this,a,b)}},r=a.exports=d(205)("WeakMap",p,q,j,!0,!0);7!=(new r).set((Object.freeze||Object)(o),7).get(o)&&(e=j.getConstructor(p),i(e.prototype,q),h.NEED=!0,f(["delete","has","get","set"],function(a){var b=r.prototype,c=b[a];g(b,a,function(b,d){if(k(b)&&!m(b)){this._f||(this._f=new e);var f=this._f[a](b,d);return"set"==a?this:f}return c.call(this,b,d)})}))},function(a,b,d){var e=d(202),f=d(20).getWeak,g=d(10),h=d(11),i=d(197),j=d(198),k=d(164),l=d(3),m=k(5),n=k(6),o=0,p=function(a){return a._l||(a._l=new q)},q=function(){this.a=[]},r=function(a,b){return m(a.a,function(a){return a[0]===b})};q.prototype={get:function(a){var b=r(this,a);if(b)return b[1]},has:function(a){return!!r(this,a)},set:function(a,b){var c=r(this,a);c?c[1]=b:this.a.push([a,b])},"delete":function(a){var b=n(this.a,function(b){return b[0]===a});return~b&&this.a.splice(b,1),!!~b}},a.exports={getConstructor:function(a,b,d,g){var k=a(function(a,e){i(a,k,b,"_i"),a._i=o++,a._l=c,e!=c&&j(e,d,a[g],a)});return e(k.prototype,{"delete":function(a){if(!h(a))return!1;var b=f(a);return b===!0?p(this)["delete"](a):b&&l(b,this._i)&&delete b[this._i]},has:function has(a){if(!h(a))return!1;var b=f(a);return b===!0?p(this).has(a):b&&l(b,this._i)}}),k},def:function(a,b,c){var d=f(g(b),!0);return d===!0?p(a).set(b,c):d[a._i]=c,a},ufstore:p}},function(a,b,d){var e=d(208);d(205)("WeakSet",function(a){return function WeakSet(){return a(this,arguments.length>0?arguments[0]:c)}},{add:function add(a){return e.def(this,a,!0)}},e,!1,!0)},function(a,b,c){var d=c(6),e=c(19),f=c(10),g=(c(2).Reflect||{}).apply,h=Function.apply;d(d.S+d.F*!c(5)(function(){g(function(){})}),"Reflect",{apply:function apply(a,b,c){var d=e(a),i=f(c);return g?g(d,b,i):h.call(d,b,i)}})},function(a,b,c){var d=c(6),e=c(44),f=c(19),g=c(10),h=c(11),i=c(5),j=c(75),k=(c(2).Reflect||{}).construct,l=i(function(){function F(){}return!(k(function(){},[],F)instanceof F)}),m=!i(function(){k(function(){})});d(d.S+d.F*(l||m),"Reflect",{construct:function construct(a,b){f(a),g(b);var c=arguments.length<3?a:f(arguments[2]);if(m&&!l)return k(a,b,c);if(a==c){switch(b.length){case 0:return new a;case 1:return new a(b[0]);case 2:return new a(b[0],b[1]);case 3:return new a(b[0],b[1],b[2]);case 4:return new a(b[0],b[1],b[2],b[3])}var d=[null];return d.push.apply(d,b),new(j.apply(a,d))}var i=c.prototype,n=e(h(i)?i:Object.prototype),o=Function.apply.call(a,n,b);return h(o)?o:n}})},function(a,b,c){var d=c(9),e=c(6),f=c(10),g=c(14);e(e.S+e.F*c(5)(function(){Reflect.defineProperty(d.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function defineProperty(a,b,c){f(a),b=g(b,!0),f(c);try{return d.f(a,b,c),!0}catch(e){return!1}}})},function(a,b,c){var d=c(6),e=c(49).f,f=c(10);d(d.S,"Reflect",{deleteProperty:function deleteProperty(a,b){var c=e(f(a),b);return!(c&&!c.configurable)&&delete a[b]}})},function(a,b,d){var e=d(6),f=d(10),g=function(a){this._t=f(a),this._i=0;var b,c=this._k=[];for(b in a)c.push(b)};d(136)(g,"Object",function(){var a,b=this,d=b._k;do if(b._i>=d.length)return{value:c,done:!0};while(!((a=d[b._i++])in b._t));return{value:a,done:!1}}),e(e.S,"Reflect",{enumerate:function enumerate(a){return new g(a)}})},function(a,b,d){function get(a,b){var d,h,k=arguments.length<3?a:arguments[2];return j(a)===k?a[b]:(d=e.f(a,b))?g(d,"value")?d.value:d.get!==c?d.get.call(k):c:i(h=f(a))?get(h,b,k):void 0}var e=d(49),f=d(57),g=d(3),h=d(6),i=d(11),j=d(10);h(h.S,"Reflect",{get:get})},function(a,b,c){var d=c(49),e=c(6),f=c(10);e(e.S,"Reflect",{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(a,b){return d.f(f(a),b)}})},function(a,b,c){var d=c(6),e=c(57),f=c(10);d(d.S,"Reflect",{getPrototypeOf:function getPrototypeOf(a){return e(f(a))}})},function(a,b,c){var d=c(6);d(d.S,"Reflect",{has:function has(a,b){return b in a}})},function(a,b,c){var d=c(6),e=c(10),f=Object.isExtensible;d(d.S,"Reflect",{isExtensible:function isExtensible(a){return e(a),!f||f(a)}})},function(a,b,c){var d=c(6);d(d.S,"Reflect",{ownKeys:c(221)})},function(a,b,c){var d=c(48),e=c(41),f=c(10),g=c(2).Reflect;a.exports=g&&g.ownKeys||function ownKeys(a){var b=d.f(f(a)),c=e.f;return c?b.concat(c(a)):b}},function(a,b,c){var d=c(6),e=c(10),f=Object.preventExtensions;d(d.S,"Reflect",{preventExtensions:function preventExtensions(a){e(a);try{return f&&f(a),!0}catch(b){return!1}}})},function(a,b,d){function set(a,b,d){var i,m,n=arguments.length<4?a:arguments[3],o=f.f(k(a),b);if(!o){if(l(m=g(a)))return set(m,b,d,n);o=j(0)}return h(o,"value")?!(o.writable===!1||!l(n))&&(i=f.f(n,b)||j(0),i.value=d,e.f(n,b,i),!0):o.set!==c&&(o.set.call(n,d),!0)}var e=d(9),f=d(49),g=d(57),h=d(3),i=d(6),j=d(15),k=d(10),l=d(11);i(i.S,"Reflect",{set:set})},function(a,b,c){var d=c(6),e=c(71);e&&d(d.S,"Reflect",{setPrototypeOf:function setPrototypeOf(a,b){e.check(a,b);try{return e.set(a,b),!0}catch(c){return!1}}})},function(a,b,c){var d=c(6);d(d.S,"Date",{now:function(){return(new Date).getTime()}})},function(a,b,c){var d=c(6),e=c(56),f=c(14);d(d.P+d.F*c(5)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function toJSON(a){var b=e(this),c=f(b);return"number"!=typeof c||isFinite(c)?b.toISOString():null}})},function(a,b,c){var d=c(6),e=c(5),f=Date.prototype.getTime,g=function(a){return a>9?a:"0"+a};d(d.P+d.F*(e(function(){return"0385-07-25T07:06:39.999Z"!=new Date(-5e13-1).toISOString()})||!e(function(){new Date(NaN).toISOString()})),"Date",{toISOString:function toISOString(){if(!isFinite(f.call(this)))throw RangeError("Invalid time value");var a=this,b=a.getUTCFullYear(),c=a.getUTCMilliseconds(),d=b<0?"-":b>9999?"+":"";return d+("00000"+Math.abs(b)).slice(d?-6:-4)+"-"+g(a.getUTCMonth()+1)+"-"+g(a.getUTCDate())+"T"+g(a.getUTCHours())+":"+g(a.getUTCMinutes())+":"+g(a.getUTCSeconds())+"."+(c>99?c:"0"+g(c))+"Z"}})},function(a,b,c){var d=Date.prototype,e="Invalid Date",f="toString",g=d[f],h=d.getTime;new Date(NaN)+""!=e&&c(16)(d,f,function toString(){var a=h.call(this);return a===a?g.call(this):e})},function(a,b,c){var d=c(23)("toPrimitive"),e=Date.prototype;d in e||c(8)(e,d,c(230))},function(a,b,c){var d=c(10),e=c(14),f="number";a.exports=function(a){if("string"!==a&&a!==f&&"default"!==a)throw TypeError("Incorrect hint");return e(d(this),a!=f)}},function(a,b,d){var e=d(6),f=d(232),g=d(233),h=d(10),i=d(37),j=d(35),k=d(11),l=d(2).ArrayBuffer,m=d(199),n=g.ArrayBuffer,o=g.DataView,p=f.ABV&&l.isView,q=n.prototype.slice,r=f.VIEW,s="ArrayBuffer";e(e.G+e.W+e.F*(l!==n),{ArrayBuffer:n}),e(e.S+e.F*!f.CONSTR,s,{isView:function isView(a){return p&&p(a)||k(a)&&r in a}}),e(e.P+e.U+e.F*d(5)(function(){return!new n(2).slice(1,c).byteLength}),s,{slice:function slice(a,b){if(q!==c&&b===c)return q.call(h(this),a);for(var d=h(this).byteLength,e=i(a,d),f=i(b===c?d:b,d),g=new(m(this,n))(j(f-e)),k=new o(this),l=new o(g),p=0;e<f;)l.setUint8(p++,k.getUint8(e++));return g}}),d(186)(s)},function(a,b,c){for(var d,e=c(2),f=c(8),g=c(17),h=g("typed_array"),i=g("view"),j=!(!e.ArrayBuffer||!e.DataView),k=j,l=0,m=9,n="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<m;)(d=e[n[l++]])?(f(d.prototype,h,!0),f(d.prototype,i,!0)):k=!1;a.exports={ABV:j,CONSTR:k,TYPED:h,VIEW:i}},function(a,b,d){var e=d(2),f=d(4),g=d(26),h=d(232),i=d(8),j=d(202),k=d(5),l=d(197),m=d(36),n=d(35),o=d(48).f,p=d(9).f,q=d(180),r=d(22),s="ArrayBuffer",t="DataView",u="prototype",v="Wrong length!",w="Wrong index!",x=e[s],y=e[t],z=e.Math,A=e.RangeError,B=e.Infinity,C=x,D=z.abs,E=z.pow,F=z.floor,G=z.log,H=z.LN2,I="buffer",J="byteLength",K="byteOffset",L=f?"_b":I,M=f?"_l":J,N=f?"_o":K,O=function(a,b,c){var d,e,f,g=Array(c),h=8*c-b-1,i=(1<<h)-1,j=i>>1,k=23===b?E(2,-24)-E(2,-77):0,l=0,m=a<0||0===a&&1/a<0?1:0;for(a=D(a),a!=a||a===B?(e=a!=a?1:0,d=i):(d=F(G(a)/H),a*(f=E(2,-d))<1&&(d--,f*=2),a+=d+j>=1?k/f:k*E(2,1-j),a*f>=2&&(d++,f/=2),d+j>=i?(e=0,d=i):d+j>=1?(e=(a*f-1)*E(2,b),d+=j):(e=a*E(2,j-1)*E(2,b),d=0));b>=8;g[l++]=255&e,e/=256,b-=8);for(d=d<<b|e,h+=b;h>0;g[l++]=255&d,d/=256,h-=8);return g[--l]|=128*m,g},P=function(a,b,c){var d,e=8*c-b-1,f=(1<<e)-1,g=f>>1,h=e-7,i=c-1,j=a[i--],k=127&j;for(j>>=7;h>0;k=256*k+a[i],i--,h-=8);for(d=k&(1<<-h)-1,k>>=-h,h+=b;h>0;d=256*d+a[i],i--,h-=8);if(0===k)k=1-g;else{if(k===f)return d?NaN:j?-B:B;d+=E(2,b),k-=g}return(j?-1:1)*d*E(2,k-b)},Q=function(a){return a[3]<<24|a[2]<<16|a[1]<<8|a[0]},R=function(a){return[255&a]},S=function(a){return[255&a,a>>8&255]},T=function(a){return[255&a,a>>8&255,a>>16&255,a>>24&255]},U=function(a){return O(a,52,8)},V=function(a){return O(a,23,4)},W=function(a,b,c){p(a[u],b,{get:function(){return this[c]}})},X=function(a,b,c,d){var e=+c,f=m(e);if(e!=f||f<0||f+b>a[M])throw A(w);var g=a[L]._b,h=f+a[N],i=g.slice(h,h+b);return d?i:i.reverse()},Y=function(a,b,c,d,e,f){var g=+c,h=m(g);if(g!=h||h<0||h+b>a[M])throw A(w);for(var i=a[L]._b,j=h+a[N],k=d(+e),l=0;l<b;l++)i[j+l]=k[f?l:b-l-1]},Z=function(a,b){l(a,x,s);var c=+b,d=n(c);if(c!=d)throw A(v);return d};if(h.ABV){if(!k(function(){new x})||!k(function(){new x(.5)})){x=function ArrayBuffer(a){return new C(Z(this,a))};for(var $,_=x[u]=C[u],aa=o(C),ba=0;aa.length>ba;)($=aa[ba++])in x||i(x,$,C[$]);g||(_.constructor=x)}var ca=new y(new x(2)),da=y[u].setInt8;ca.setInt8(0,2147483648),ca.setInt8(1,2147483649),!ca.getInt8(0)&&ca.getInt8(1)||j(y[u],{setInt8:function setInt8(a,b){da.call(this,a,b<<24>>24)},setUint8:function setUint8(a,b){da.call(this,a,b<<24>>24)}},!0)}else x=function ArrayBuffer(a){var b=Z(this,a);this._b=q.call(Array(b),0),this[M]=b},y=function DataView(a,b,d){l(this,y,t),l(a,x,t);var e=a[M],f=m(b);if(f<0||f>e)throw A("Wrong offset!");if(d=d===c?e-f:n(d),f+d>e)throw A(v);this[L]=a,this[N]=f,this[M]=d},f&&(W(x,J,"_l"),W(y,I,"_b"),W(y,J,"_l"),W(y,K,"_o")),j(y[u],{getInt8:function getInt8(a){return X(this,1,a)[0]<<24>>24},getUint8:function getUint8(a){return X(this,1,a)[0]},getInt16:function getInt16(a){var b=X(this,2,a,arguments[1]);return(b[1]<<8|b[0])<<16>>16},getUint16:function getUint16(a){var b=X(this,2,a,arguments[1]);return b[1]<<8|b[0]},getInt32:function getInt32(a){return Q(X(this,4,a,arguments[1]))},getUint32:function getUint32(a){return Q(X(this,4,a,arguments[1]))>>>0},getFloat32:function getFloat32(a){return P(X(this,4,a,arguments[1]),23,4)},getFloat64:function getFloat64(a){return P(X(this,8,a,arguments[1]),52,8)},setInt8:function setInt8(a,b){Y(this,1,a,R,b)},setUint8:function setUint8(a,b){Y(this,1,a,R,b)},setInt16:function setInt16(a,b){Y(this,2,a,S,b,arguments[2])},setUint16:function setUint16(a,b){Y(this,2,a,S,b,arguments[2])},setInt32:function setInt32(a,b){Y(this,4,a,T,b,arguments[2])},setUint32:function setUint32(a,b){Y(this,4,a,T,b,arguments[2])},setFloat32:function setFloat32(a,b){Y(this,4,a,V,b,arguments[2])},setFloat64:function setFloat64(a,b){Y(this,8,a,U,b,arguments[2])}});r(x,s),r(y,t),i(y[u],h.VIEW,!0),b[s]=x,b[t]=y},function(a,b,c){var d=c(6);d(d.G+d.W+d.F*!c(232).ABV,{DataView:c(233).DataView})},function(a,b,c){c(236)("Int8",1,function(a){return function Int8Array(b,c,d){return a(this,b,c,d)}})},function(a,b,d){if(d(4)){var e=d(26),f=d(2),g=d(5),h=d(6),i=d(232),j=d(233),k=d(18),l=d(197),m=d(15),n=d(8),o=d(202),p=d(36),q=d(35),r=d(37),s=d(14),t=d(3),u=d(69),v=d(73),w=d(11),x=d(56),y=d(154),z=d(44),A=d(57),B=d(48).f,C=d(156),D=d(17),E=d(23),F=d(164),G=d(34),H=d(199),I=d(183),J=d(135),K=d(157),L=d(186),M=d(180),N=d(177),O=d(9),P=d(49),Q=O.f,R=P.f,S=f.RangeError,T=f.TypeError,U=f.Uint8Array,V="ArrayBuffer",W="Shared"+V,X="BYTES_PER_ELEMENT",Y="prototype",Z=Array[Y],$=j.ArrayBuffer,_=j.DataView,aa=F(0),ba=F(2),ca=F(3),da=F(4),ea=F(5),fa=F(6),ga=G(!0),ha=G(!1),ia=I.values,ja=I.keys,ka=I.entries,la=Z.lastIndexOf,ma=Z.reduce,na=Z.reduceRight,oa=Z.join,pa=Z.sort,qa=Z.slice,ra=Z.toString,sa=Z.toLocaleString,ta=E("iterator"),ua=E("toStringTag"),va=D("typed_constructor"),wa=D("def_constructor"),xa=i.CONSTR,ya=i.TYPED,za=i.VIEW,Aa="Wrong length!",Ba=F(1,function(a,b){return Ha(H(a,a[wa]),b)}),Ca=g(function(){return 1===new U(new Uint16Array([1]).buffer)[0]}),Da=!!U&&!!U[Y].set&&g(function(){new U(1).set({})}),Ea=function(a,b){if(a===c)throw T(Aa);var d=+a,e=q(a);if(b&&!u(d,e))throw S(Aa);return e},Fa=function(a,b){var c=p(a);if(c<0||c%b)throw S("Wrong offset!");return c},Ga=function(a){if(w(a)&&ya in a)return a;throw T(a+" is not a typed array!")},Ha=function(a,b){if(!(w(a)&&va in a))throw T("It is not a typed array constructor!");return new a(b)},Ia=function(a,b){return Ja(H(a,a[wa]),b)},Ja=function(a,b){for(var c=0,d=b.length,e=Ha(a,d);d>c;)e[c]=b[c++];return e},Ka=function(a,b,c){Q(a,b,{get:function(){return this._d[c]}})},La=function from(a){var b,d,e,f,g,h,i=x(a),j=arguments.length,l=j>1?arguments[1]:c,m=l!==c,n=C(i);if(n!=c&&!y(n)){for(h=n.call(i),e=[],b=0;!(g=h.next()).done;b++)e.push(g.value);i=e}for(m&&j>2&&(l=k(l,arguments[2],2)),b=0,d=q(i.length),f=Ha(this,d);d>b;b++)f[b]=m?l(i[b],b):i[b];return f},Ma=function of(){for(var a=0,b=arguments.length,c=Ha(this,b);b>a;)c[a]=arguments[a++];return c},Na=!!U&&g(function(){sa.call(new U(1))}),Oa=function toLocaleString(){return sa.apply(Na?qa.call(Ga(this)):Ga(this),arguments)},Pa={copyWithin:function copyWithin(a,b){return N.call(Ga(this),a,b,arguments.length>2?arguments[2]:c)},every:function every(a){return da(Ga(this),a,arguments.length>1?arguments[1]:c)},fill:function fill(a){return M.apply(Ga(this),arguments)},filter:function filter(a){return Ia(this,ba(Ga(this),a,arguments.length>1?arguments[1]:c))},find:function find(a){return ea(Ga(this),a,arguments.length>1?arguments[1]:c)},findIndex:function findIndex(a){return fa(Ga(this),a,arguments.length>1?arguments[1]:c)},forEach:function forEach(a){aa(Ga(this),a,arguments.length>1?arguments[1]:c)},indexOf:function indexOf(a){return ha(Ga(this),a,arguments.length>1?arguments[1]:c)},includes:function includes(a){return ga(Ga(this),a,arguments.length>1?arguments[1]:c)},join:function join(a){return oa.apply(Ga(this),arguments)},lastIndexOf:function lastIndexOf(a){
return la.apply(Ga(this),arguments)},map:function map(a){return Ba(Ga(this),a,arguments.length>1?arguments[1]:c)},reduce:function reduce(a){return ma.apply(Ga(this),arguments)},reduceRight:function reduceRight(a){return na.apply(Ga(this),arguments)},reverse:function reverse(){for(var a,b=this,c=Ga(b).length,d=Math.floor(c/2),e=0;e<d;)a=b[e],b[e++]=b[--c],b[c]=a;return b},some:function some(a){return ca(Ga(this),a,arguments.length>1?arguments[1]:c)},sort:function sort(a){return pa.call(Ga(this),a)},subarray:function subarray(a,b){var d=Ga(this),e=d.length,f=r(a,e);return new(H(d,d[wa]))(d.buffer,d.byteOffset+f*d.BYTES_PER_ELEMENT,q((b===c?e:r(b,e))-f))}},Qa=function slice(a,b){return Ia(this,qa.call(Ga(this),a,b))},Ra=function set(a){Ga(this);var b=Fa(arguments[1],1),c=this.length,d=x(a),e=q(d.length),f=0;if(e+b>c)throw S(Aa);for(;f<e;)this[b+f]=d[f++]},Sa={entries:function entries(){return ka.call(Ga(this))},keys:function keys(){return ja.call(Ga(this))},values:function values(){return ia.call(Ga(this))}},Ta=function(a,b){return w(a)&&a[ya]&&"symbol"!=typeof b&&b in a&&String(+b)==String(b)},Ua=function getOwnPropertyDescriptor(a,b){return Ta(a,b=s(b,!0))?m(2,a[b]):R(a,b)},Va=function defineProperty(a,b,c){return!(Ta(a,b=s(b,!0))&&w(c)&&t(c,"value"))||t(c,"get")||t(c,"set")||c.configurable||t(c,"writable")&&!c.writable||t(c,"enumerable")&&!c.enumerable?Q(a,b,c):(a[b]=c.value,a)};xa||(P.f=Ua,O.f=Va),h(h.S+h.F*!xa,"Object",{getOwnPropertyDescriptor:Ua,defineProperty:Va}),g(function(){ra.call({})})&&(ra=sa=function toString(){return oa.call(this)});var Wa=o({},Pa);o(Wa,Sa),n(Wa,ta,Sa.values),o(Wa,{slice:Qa,set:Ra,constructor:function(){},toString:ra,toLocaleString:Oa}),Ka(Wa,"buffer","b"),Ka(Wa,"byteOffset","o"),Ka(Wa,"byteLength","l"),Ka(Wa,"length","e"),Q(Wa,ua,{get:function(){return this[ya]}}),a.exports=function(a,b,d,j){j=!!j;var k=a+(j?"Clamped":"")+"Array",m="Uint8Array"!=k,o="get"+a,p="set"+a,r=f[k],s=r||{},t=r&&A(r),u=!r||!i.ABV,x={},y=r&&r[Y],C=function(a,c){var d=a._d;return d.v[o](c*b+d.o,Ca)},D=function(a,c,d){var e=a._d;j&&(d=(d=Math.round(d))<0?0:d>255?255:255&d),e.v[p](c*b+e.o,d,Ca)},E=function(a,b){Q(a,b,{get:function(){return C(this,b)},set:function(a){return D(this,b,a)},enumerable:!0})};u?(r=d(function(a,d,e,f){l(a,r,k,"_d");var g,h,i,j,m=0,o=0;if(w(d)){if(!(d instanceof $||(j=v(d))==V||j==W))return ya in d?Ja(r,d):La.call(r,d);g=d,o=Fa(e,b);var p=d.byteLength;if(f===c){if(p%b)throw S(Aa);if(h=p-o,h<0)throw S(Aa)}else if(h=q(f)*b,h+o>p)throw S(Aa);i=h/b}else i=Ea(d,!0),h=i*b,g=new $(h);for(n(a,"_d",{b:g,o:o,l:h,e:i,v:new _(g)});m<i;)E(a,m++)}),y=r[Y]=z(Wa),n(y,"constructor",r)):K(function(a){new r(null),new r(a)},!0)||(r=d(function(a,d,e,f){l(a,r,k);var g;return w(d)?d instanceof $||(g=v(d))==V||g==W?f!==c?new s(d,Fa(e,b),f):e!==c?new s(d,Fa(e,b)):new s(d):ya in d?Ja(r,d):La.call(r,d):new s(Ea(d,m))}),aa(t!==Function.prototype?B(s).concat(B(t)):B(s),function(a){a in r||n(r,a,s[a])}),r[Y]=y,e||(y.constructor=r));var F=y[ta],G=!!F&&("values"==F.name||F.name==c),H=Sa.values;n(r,va,!0),n(y,ya,k),n(y,za,!0),n(y,wa,r),(j?new r(1)[ua]==k:ua in y)||Q(y,ua,{get:function(){return k}}),x[k]=r,h(h.G+h.W+h.F*(r!=s),x),h(h.S,k,{BYTES_PER_ELEMENT:b,from:La,of:Ma}),X in y||n(y,X,b),h(h.P,k,Pa),L(k),h(h.P+h.F*Da,k,{set:Ra}),h(h.P+h.F*!G,k,Sa),h(h.P+h.F*(y.toString!=ra),k,{toString:ra}),h(h.P+h.F*g(function(){new r(1).slice()}),k,{slice:Qa}),h(h.P+h.F*(g(function(){return[1,2].toLocaleString()!=new r([1,2]).toLocaleString()})||!g(function(){y.toLocaleString.call([1,2])})),k,{toLocaleString:Oa}),J[k]=G?F:H,e||G||n(y,ta,H)}}else a.exports=function(){}},function(a,b,c){c(236)("Uint8",1,function(a){return function Uint8Array(b,c,d){return a(this,b,c,d)}})},function(a,b,c){c(236)("Uint8",1,function(a){return function Uint8ClampedArray(b,c,d){return a(this,b,c,d)}},!0)},function(a,b,c){c(236)("Int16",2,function(a){return function Int16Array(b,c,d){return a(this,b,c,d)}})},function(a,b,c){c(236)("Uint16",2,function(a){return function Uint16Array(b,c,d){return a(this,b,c,d)}})},function(a,b,c){c(236)("Int32",4,function(a){return function Int32Array(b,c,d){return a(this,b,c,d)}})},function(a,b,c){c(236)("Uint32",4,function(a){return function Uint32Array(b,c,d){return a(this,b,c,d)}})},function(a,b,c){c(236)("Float32",4,function(a){return function Float32Array(b,c,d){return a(this,b,c,d)}})},function(a,b,c){c(236)("Float64",8,function(a){return function Float64Array(b,c,d){return a(this,b,c,d)}})},function(a,b,d){var e=d(6),f=d(34)(!0);e(e.P,"Array",{includes:function includes(a){return f(this,a,arguments.length>1?arguments[1]:c)}}),d(178)("includes")},function(a,b,c){var d=c(6),e=c(125)(!0);d(d.P,"String",{at:function at(a){return e(this,a)}})},function(a,b,d){var e=d(6),f=d(248);e(e.P,"String",{padStart:function padStart(a){return f(this,a,arguments.length>1?arguments[1]:c,!0)}})},function(a,b,d){var e=d(35),f=d(85),g=d(33);a.exports=function(a,b,d,h){var i=String(g(a)),j=i.length,k=d===c?" ":String(d),l=e(b);if(l<=j||""==k)return i;var m=l-j,n=f.call(k,Math.ceil(m/k.length));return n.length>m&&(n=n.slice(0,m)),h?n+i:i+n}},function(a,b,d){var e=d(6),f=d(248);e(e.P,"String",{padEnd:function padEnd(a){return f(this,a,arguments.length>1?arguments[1]:c,!1)}})},function(a,b,c){c(81)("trimLeft",function(a){return function trimLeft(){return a(this,1)}},"trimStart")},function(a,b,c){c(81)("trimRight",function(a){return function trimRight(){return a(this,2)}},"trimEnd")},function(a,b,c){var d=c(6),e=c(33),f=c(35),g=c(128),h=c(188),i=RegExp.prototype,j=function(a,b){this._r=a,this._s=b};c(136)(j,"RegExp String",function next(){var a=this._r.exec(this._s);return{value:a,done:null===a}}),d(d.P,"String",{matchAll:function matchAll(a){if(e(this),!g(a))throw TypeError(a+" is not a regexp!");var b=String(this),c="flags"in i?String(a.flags):h.call(a),d=new RegExp(a.source,~c.indexOf("g")?c:"g"+c);return d.lastIndex=f(a.lastIndex),new j(d,b)}})},function(a,b,c){c(25)("asyncIterator")},function(a,b,c){c(25)("observable")},function(a,b,c){var d=c(6),e=c(221),f=c(30),g=c(49),h=c(155);d(d.S,"Object",{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(a){for(var b,c=f(a),d=g.f,i=e(c),j={},k=0;i.length>k;)h(j,b=i[k++],d(c,b));return j}})},function(a,b,c){var d=c(6),e=c(257)(!1);d(d.S,"Object",{values:function values(a){return e(a)}})},function(a,b,c){var d=c(28),e=c(30),f=c(42).f;a.exports=function(a){return function(b){for(var c,g=e(b),h=d(g),i=h.length,j=0,k=[];i>j;)f.call(g,c=h[j++])&&k.push(a?[c,g[c]]:g[c]);return k}}},function(a,b,c){var d=c(6),e=c(257)(!0);d(d.S,"Object",{entries:function entries(a){return e(a)}})},function(a,b,c){var d=c(6),e=c(56),f=c(19),g=c(9);c(4)&&d(d.P+c(260),"Object",{__defineGetter__:function __defineGetter__(a,b){g.f(e(this),a,{get:f(b),enumerable:!0,configurable:!0})}})},function(a,b,c){a.exports=c(26)||!c(5)(function(){var a=Math.random();__defineSetter__.call(null,a,function(){}),delete c(2)[a]})},function(a,b,c){var d=c(6),e=c(56),f=c(19),g=c(9);c(4)&&d(d.P+c(260),"Object",{__defineSetter__:function __defineSetter__(a,b){g.f(e(this),a,{set:f(b),enumerable:!0,configurable:!0})}})},function(a,b,c){var d=c(6),e=c(56),f=c(14),g=c(57),h=c(49).f;c(4)&&d(d.P+c(260),"Object",{__lookupGetter__:function __lookupGetter__(a){var b,c=e(this),d=f(a,!0);do if(b=h(c,d))return b.get;while(c=g(c))}})},function(a,b,c){var d=c(6),e=c(56),f=c(14),g=c(57),h=c(49).f;c(4)&&d(d.P+c(260),"Object",{__lookupSetter__:function __lookupSetter__(a){var b,c=e(this),d=f(a,!0);do if(b=h(c,d))return b.set;while(c=g(c))}})},function(a,b,c){var d=c(6);d(d.P+d.R,"Map",{toJSON:c(265)("Map")})},function(a,b,c){var d=c(73),e=c(266);a.exports=function(a){return function toJSON(){if(d(this)!=a)throw TypeError(a+"#toJSON isn't generic");return e(this)}}},function(a,b,c){var d=c(198);a.exports=function(a,b){var c=[];return d(a,!1,c.push,c,b),c}},function(a,b,c){var d=c(6);d(d.P+d.R,"Set",{toJSON:c(265)("Set")})},function(a,b,c){var d=c(6);d(d.S,"System",{global:c(2)})},function(a,b,c){var d=c(6),e=c(32);d(d.S,"Error",{isError:function isError(a){return"Error"===e(a)}})},function(a,b,c){var d=c(6);d(d.S,"Math",{iaddh:function iaddh(a,b,c,d){var e=a>>>0,f=b>>>0,g=c>>>0;return f+(d>>>0)+((e&g|(e|g)&~(e+g>>>0))>>>31)|0}})},function(a,b,c){var d=c(6);d(d.S,"Math",{isubh:function isubh(a,b,c,d){var e=a>>>0,f=b>>>0,g=c>>>0;return f-(d>>>0)-((~e&g|~(e^g)&e-g>>>0)>>>31)|0}})},function(a,b,c){var d=c(6);d(d.S,"Math",{imulh:function imulh(a,b){var c=65535,d=+a,e=+b,f=d&c,g=e&c,h=d>>16,i=e>>16,j=(h*g>>>0)+(f*g>>>16);return h*i+(j>>16)+((f*i>>>0)+(j&c)>>16)}})},function(a,b,c){var d=c(6);d(d.S,"Math",{umulh:function umulh(a,b){var c=65535,d=+a,e=+b,f=d&c,g=e&c,h=d>>>16,i=e>>>16,j=(h*g>>>0)+(f*g>>>16);return h*i+(j>>>16)+((f*i>>>0)+(j&c)>>>16)}})},function(a,b,c){var d=c(275),e=c(10),f=d.key,g=d.set;d.exp({defineMetadata:function defineMetadata(a,b,c,d){g(a,b,e(c),f(d))}})},function(a,b,d){var e=d(203),f=d(6),g=d(21)("metadata"),h=g.store||(g.store=new(d(207))),i=function(a,b,d){var f=h.get(a);if(!f){if(!d)return c;h.set(a,f=new e)}var g=f.get(b);if(!g){if(!d)return c;f.set(b,g=new e)}return g},j=function(a,b,d){var e=i(b,d,!1);return e!==c&&e.has(a)},k=function(a,b,d){var e=i(b,d,!1);return e===c?c:e.get(a)},l=function(a,b,c,d){i(c,d,!0).set(a,b)},m=function(a,b){var c=i(a,b,!1),d=[];return c&&c.forEach(function(a,b){d.push(b)}),d},n=function(a){return a===c||"symbol"==typeof a?a:String(a)},o=function(a){f(f.S,"Reflect",a)};a.exports={store:h,map:i,has:j,get:k,set:l,keys:m,key:n,exp:o}},function(a,b,d){var e=d(275),f=d(10),g=e.key,h=e.map,i=e.store;e.exp({deleteMetadata:function deleteMetadata(a,b){var d=arguments.length<3?c:g(arguments[2]),e=h(f(b),d,!1);if(e===c||!e["delete"](a))return!1;if(e.size)return!0;var j=i.get(b);return j["delete"](d),!!j.size||i["delete"](b)}})},function(a,b,d){var e=d(275),f=d(10),g=d(57),h=e.has,i=e.get,j=e.key,k=function(a,b,d){var e=h(a,b,d);if(e)return i(a,b,d);var f=g(b);return null!==f?k(a,f,d):c};e.exp({getMetadata:function getMetadata(a,b){return k(a,f(b),arguments.length<3?c:j(arguments[2]))}})},function(a,b,d){var e=d(206),f=d(266),g=d(275),h=d(10),i=d(57),j=g.keys,k=g.key,l=function(a,b){var c=j(a,b),d=i(a);if(null===d)return c;var g=l(d,b);return g.length?c.length?f(new e(c.concat(g))):g:c};g.exp({getMetadataKeys:function getMetadataKeys(a){return l(h(a),arguments.length<2?c:k(arguments[1]))}})},function(a,b,d){var e=d(275),f=d(10),g=e.get,h=e.key;e.exp({getOwnMetadata:function getOwnMetadata(a,b){return g(a,f(b),arguments.length<3?c:h(arguments[2]))}})},function(a,b,d){var e=d(275),f=d(10),g=e.keys,h=e.key;e.exp({getOwnMetadataKeys:function getOwnMetadataKeys(a){return g(f(a),arguments.length<2?c:h(arguments[1]))}})},function(a,b,d){var e=d(275),f=d(10),g=d(57),h=e.has,i=e.key,j=function(a,b,c){var d=h(a,b,c);if(d)return!0;var e=g(b);return null!==e&&j(a,e,c)};e.exp({hasMetadata:function hasMetadata(a,b){return j(a,f(b),arguments.length<3?c:i(arguments[2]))}})},function(a,b,d){var e=d(275),f=d(10),g=e.has,h=e.key;e.exp({hasOwnMetadata:function hasOwnMetadata(a,b){return g(a,f(b),arguments.length<3?c:h(arguments[2]))}})},function(a,b,d){var e=d(275),f=d(10),g=d(19),h=e.key,i=e.set;e.exp({metadata:function metadata(a,b){return function decorator(d,e){i(a,b,(e!==c?f:g)(d),h(e))}}})},function(a,b,c){var d=c(6),e=c(201)(),f=c(2).process,g="process"==c(32)(f);d(d.G,{asap:function asap(a){var b=g&&f.domain;e(b?b.bind(a):a)}})},function(a,b,d){var e=d(6),f=d(2),g=d(7),h=d(201)(),i=d(23)("observable"),j=d(19),k=d(10),l=d(197),m=d(202),n=d(8),o=d(198),p=o.RETURN,q=function(a){return null==a?c:j(a)},r=function(a){var b=a._c;b&&(a._c=c,b())},s=function(a){return a._o===c},t=function(a){s(a)||(a._o=c,r(a))},u=function(a,b){k(a),this._c=c,this._o=a,a=new v(this);try{var d=b(a),e=d;null!=d&&("function"==typeof d.unsubscribe?d=function(){e.unsubscribe()}:j(d),this._c=d)}catch(f){return void a.error(f)}s(this)&&r(this)};u.prototype=m({},{unsubscribe:function unsubscribe(){t(this)}});var v=function(a){this._s=a};v.prototype=m({},{next:function next(a){var b=this._s;if(!s(b)){var c=b._o;try{var d=q(c.next);if(d)return d.call(c,a)}catch(e){try{t(b)}finally{throw e}}}},error:function error(a){var b=this._s;if(s(b))throw a;var d=b._o;b._o=c;try{var e=q(d.error);if(!e)throw a;a=e.call(d,a)}catch(f){try{r(b)}finally{throw f}}return r(b),a},complete:function complete(a){var b=this._s;if(!s(b)){var d=b._o;b._o=c;try{var e=q(d.complete);a=e?e.call(d,a):c}catch(f){try{r(b)}finally{throw f}}return r(b),a}}});var w=function Observable(a){l(this,w,"Observable","_f")._f=j(a)};m(w.prototype,{subscribe:function subscribe(a){return new u(a,this._f)},forEach:function forEach(a){var b=this;return new(g.Promise||f.Promise)(function(c,d){j(a);var e=b.subscribe({next:function(b){try{return a(b)}catch(c){d(c),e.unsubscribe()}},error:d,complete:c})})}}),m(w,{from:function from(a){var b="function"==typeof this?this:w,c=q(k(a)[i]);if(c){var d=k(c.call(a));return d.constructor===b?d:new b(function(a){return d.subscribe(a)})}return new b(function(b){var c=!1;return h(function(){if(!c){try{if(o(a,!1,function(a){if(b.next(a),c)return p})===p)return}catch(d){if(c)throw d;return void b.error(d)}b.complete()}}),function(){c=!0}})},of:function of(){for(var a=0,b=arguments.length,c=Array(b);a<b;)c[a]=arguments[a++];return new("function"==typeof this?this:w)(function(a){var b=!1;return h(function(){if(!b){for(var d=0;d<c.length;++d)if(a.next(c[d]),b)return;a.complete()}}),function(){b=!0}})}}),n(w.prototype,i,function(){return this}),e(e.G,{Observable:w}),d(186)("Observable")},function(a,b,c){var d=c(6),e=c(200);d(d.G+d.B,{setImmediate:e.set,clearImmediate:e.clear})},function(a,b,c){for(var d=c(183),e=c(16),f=c(2),g=c(8),h=c(135),i=c(23),j=i("iterator"),k=i("toStringTag"),l=h.Array,m=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],n=0;n<5;n++){var o,p=m[n],q=f[p],r=q&&q.prototype;if(r){r[j]||g(r,j,l),r[k]||g(r,k,p),h[p]=l;for(o in d)r[o]||e(r,o,d[o],!0)}}},function(a,b,c){var d=c(2),e=c(6),f=c(76),g=c(289),h=d.navigator,i=!!h&&/MSIE .\./.test(h.userAgent),j=function(a){return i?function(b,c){return a(f(g,[].slice.call(arguments,2),"function"==typeof b?b:Function(b)),c)}:a};e(e.G+e.B+e.F*i,{setTimeout:j(d.setTimeout),setInterval:j(d.setInterval)})},function(a,b,c){var d=c(290),e=c(76),f=c(19);a.exports=function(){for(var a=f(this),b=arguments.length,c=Array(b),g=0,h=d._,i=!1;b>g;)(c[g]=arguments[g++])===h&&(i=!0);return function(){var d,f=this,g=arguments.length,j=0,k=0;if(!i&&!g)return e(a,c,f);if(d=c.slice(),i)for(;b>j;j++)d[j]===h&&(d[j]=arguments[k++]);for(;g>k;)d.push(arguments[k++]);return e(a,d,f)}}},function(a,b,c){a.exports=c(2)}]),"undefined"!=typeof module&&module.exports?module.exports=a:"function"==typeof define&&define.amd?define(function(){return a}):b.core=a}(1,1);
//# sourceMappingURL=shim.min.js.map
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(this,function(){"use strict";function e(e,t){for(var n=e.length-1;n>=0;n--)"function"==typeof e[n]&&(e[n]=Zone.current.wrap(e[n],t+"_"+n));return e}function t(t,n){for(var r=t.constructor.name,o=function(o){var a=n[o],i=t[a];i&&(t[a]=function(t){return function(){return t.apply(this,e(arguments,r+"."+a))}}(i))},a=0;a<n.length;a++)o(a)}function n(e,t){var n=Object.getOwnPropertyDescriptor(e,t)||{enumerable:!0,configurable:!0},r=Object.getOwnPropertyDescriptor(e,"original"+t);!r&&n.get&&Object.defineProperty(e,"original"+t,{enumerable:!1,configurable:!0,get:n.get}),delete n.writable,delete n.value;var o=t.substr(2),a=O("_"+t);n.set=function(e){if(this[a]&&this.removeEventListener(o,this[a]),"function"==typeof e){var t=function(t){var n;return n=e.apply(this,arguments),void 0==n||n||t.preventDefault(),n};this[a]=t,this.addEventListener(o,t,!1)}else this[a]=null},n.get=function(){var e=this[a]||null;return null===e&&r&&r.get&&(e=r.get.apply(this,arguments),e&&(n.set.apply(this,[e]),"function"==typeof this.removeAttribute&&this.removeAttribute(t))),this[a]||null},Object.defineProperty(e,t,n)}function r(e,t){var r=[];for(var o in e)"on"==o.substr(0,2)&&r.push(o);for(var a=0;a<r.length;a++)n(e,r[a]);if(t)for(var i=0;i<t.length;i++)n(e,"on"+t[i])}function o(e,t,n,r,o){var a=e[I];if(a)for(var i=0;i<a.length;i++){var s=a[i],c=s.data,u=c.handler;if((c.handler===t||u.listener===t)&&c.useCapturing===r&&c.eventName===n)return o&&a.splice(i,1),s}return null}function a(e,t,n){var r=e[I];r||(r=e[I]=[]),n?r.unshift(t):r.push(t)}function i(e,t,n,r,i,s){function c(e){var t=e.data;return a(t.target,e,i),t.invokeAddFunc(l,e)}function u(e){var t=e.data;return o(t.target,e.invoke,t.eventName,t.useCapturing,!0),t.invokeRemoveFunc(h,e)}void 0===n&&(n=!0),void 0===r&&(r=!1),void 0===i&&(i=!1),void 0===s&&(s=F);var l=O(e),h=O(t),f=!n&&void 0;return function(t,n){var a=s(t,n);a.useCapturing=a.useCapturing||f;var i=null;"function"==typeof a.handler?i=a.handler:a.handler&&a.handler.handleEvent&&(i=function(e){return a.handler.handleEvent(e)});var h=!1;try{h=a.handler&&"[object FunctionWrapper]"===a.handler.toString()}catch(p){return}if(!i||h)return a.invokeAddFunc(l,a.handler);if(!r){var d=o(a.target,a.handler,a.eventName,a.useCapturing,!1);if(d)return a.invokeAddFunc(l,d)}var v=Zone.current,k=a.target.constructor.name+"."+e+":"+a.eventName;v.scheduleEventTask(k,i,a,c,u)}}function s(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=F);var r=O(e),a=!t&&void 0;return function(e,t){var i=n(e,t);i.useCapturing=i.useCapturing||a;var s=o(i.target,i.handler,i.eventName,i.useCapturing,!0);s?s.zone.cancelTask(s):i.invokeRemoveFunc(r,i.handler)}}function c(e,t,n,r){return void 0===t&&(t=L),void 0===n&&(n=M),void 0===r&&(r=F),!(!e||!e[t])&&(h(e,t,function(){return i(t,n,!0,!1,!1,r)}),h(e,n,function(){return s(n,!0,r)}),!0)}function u(t){var n=Z[t];if(n){Z[t]=function(){var r=e(arguments,t);switch(r.length){case 0:this[H]=new n;break;case 1:this[H]=new n(r[0]);break;case 2:this[H]=new n(r[0],r[1]);break;case 3:this[H]=new n(r[0],r[1],r[2]);break;case 4:this[H]=new n(r[0],r[1],r[2],r[3]);break;default:throw new Error("Arg list too long.")}};var r,o=new n(function(){});for(r in o)"XMLHttpRequest"===t&&"responseBlob"===r||!function(e){"function"==typeof o[e]?Z[t].prototype[e]=function(){return this[H][e].apply(this[H],arguments)}:Object.defineProperty(Z[t].prototype,e,{set:function(n){"function"==typeof n?this[H][e]=Zone.current.wrap(n,t+"."+e):this[H][e]=n},get:function(){return this[H][e]}})}(r);for(r in n)"prototype"!==r&&n.hasOwnProperty(r)&&(Z[t][r]=n[r])}}function l(e,t){try{return Function("f","return function "+e+"(){return f(this, arguments)}")(t)}catch(n){return function(){return t(this,arguments)}}}function h(e,t,n){for(var r=e;r&&Object.getOwnPropertyNames(r).indexOf(t)===-1;)r=Object.getPrototypeOf(r);!r&&e[t]&&(r=e);var o,a=O(t);return r&&!(o=r[a])&&(o=r[a]=r[t],r[t]=l(t,n(o,a,t))),o}function f(e,t){var n=e[O("eventTasks")],r=[];if(n)for(var o=0;o<n.length;o++){var a=n[o],i=a.data,s=i&&i.eventName;s===t&&r.push(a)}return r}function p(e,t,n,r){function o(t){function n(){try{t.invoke.apply(this,arguments)}finally{delete c[r.handleId]}}var r=t.data;return r.args[0]=n,r.handleId=i.apply(e,r.args),c[r.handleId]=t,t}function a(e){return delete c[e.data.handleId],s(e.data.handleId)}var i=null,s=null;t+=r,n+=r;var c={};i=h(e,t,function(n){return function(i,s){if("function"==typeof s[0]){var c=Zone.current,u={handleId:null,isPeriodic:"Interval"===r,delay:"Timeout"===r||"Interval"===r?s[1]||0:null,args:s},l=c.scheduleMacroTask(t,s[0],u,o,a);if(!l)return l;var h=l.data.handleId;return h&&h.ref&&h.unref&&"function"==typeof h.ref&&"function"==typeof h.unref&&(l.ref=h.ref.bind(h),l.unref=h.unref.bind(h)),l}return n.apply(e,s)}}),s=h(e,n,function(t){return function(n,r){var o="number"==typeof r[0]?c[r[0]]:r[0];o&&"string"==typeof o.type?"notScheduled"!==o.state&&(o.cancelFn&&o.data.isPeriodic||0===o.runCount)&&o.zone.cancelTask(o):t.apply(e,r)}})}function d(){Object.defineProperty=function(e,t,n){if(k(e,t))throw new TypeError("Cannot assign to read only property '"+t+"' of "+e);var r=n.configurable;return"prototype"!==t&&(n=g(e,t,n)),y(e,t,n,r)},Object.defineProperties=function(e,t){return Object.keys(t).forEach(function(n){Object.defineProperty(e,n,t[n])}),e},Object.create=function(e,t){return"object"!=typeof t||Object.isFrozen(t)||Object.keys(t).forEach(function(n){t[n]=g(e,n,t[n])}),x(e,t)},Object.getOwnPropertyDescriptor=function(e,t){var n=q(e,t);return k(e,t)&&(n.configurable=!1),n}}function v(e,t,n){var r=n.configurable;return n=g(e,t,n),y(e,t,n,r)}function k(e,t){return e&&e[A]&&e[A][t]}function g(e,t,n){return n.configurable=!0,n.configurable||(e[A]||R(e,A,{writable:!0,value:{}}),e[A][t]=!0),n}function y(e,t,n,r){try{return R(e,t,n)}catch(o){if(!n.configurable)throw o;"undefined"==typeof r?delete n.configurable:n.configurable=r;try{return R(e,t,n)}catch(o){var a=null;try{a=JSON.stringify(n)}catch(o){a=a.toString()}console.log("Attempting to configure '"+t+"' with descriptor '"+a+"' on object '"+e+"' and got error, giving up: "+o)}}}function T(e){var t=[],n=e.wtf;n?t=B.split(",").map(function(e){return"HTML"+e+"Element"}).concat(N):e[X]?t.push(X):t=N;for(var r=0;r<t.length;r++){var o=e[t[r]];c(o&&o.prototype)}}function m(e){var t=e.WebSocket;e.EventTarget||c(t.prototype),e.WebSocket=function(e,n){var o,a=arguments.length>1?new t(e,n):new t(e),i=Object.getOwnPropertyDescriptor(a,"onmessage");return i&&i.configurable===!1?(o=Object.create(a),["addEventListener","removeEventListener","send","close"].forEach(function(e){o[e]=function(){return a[e].apply(a,arguments)}})):o=a,r(o,["close","error","message","open"]),o};for(var n in t)e.WebSocket[n]=t[n]}function _(e){if(!C||j){var t="undefined"!=typeof WebSocket;b()?(P&&(r(window,W),r(Document.prototype,W),"undefined"!=typeof SVGElement&&r(SVGElement.prototype,W),r(HTMLElement.prototype,W)),r(XMLHttpRequest.prototype,null),"undefined"!=typeof IDBIndex&&(r(IDBIndex.prototype,null),r(IDBRequest.prototype,null),r(IDBOpenDBRequest.prototype,null),r(IDBDatabase.prototype,null),r(IDBTransaction.prototype,null),r(IDBCursor.prototype,null)),t&&r(WebSocket.prototype,null)):(w(),u("XMLHttpRequest"),t&&m(e))}}function b(){if((P||j)&&!Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onclick")&&"undefined"!=typeof Element){var e=Object.getOwnPropertyDescriptor(Element.prototype,"onclick");if(e&&!e.configurable)return!1}var t=Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype,"onreadystatechange");Object.defineProperty(XMLHttpRequest.prototype,"onreadystatechange",{enumerable:!0,configurable:!0,get:function(){return!0}});var n=new XMLHttpRequest,r=!!n.onreadystatechange;return Object.defineProperty(XMLHttpRequest.prototype,"onreadystatechange",t||{}),r}function w(){for(var e=function(e){var t=W[e],n="on"+t;self.addEventListener(t,function(e){var t,r,o=e.target;for(r=o?o.constructor.name+"."+n:"unknown."+n;o;)o[n]&&!o[n][G]&&(t=Zone.current.wrap(o[n],r),t[G]=o[n],o[n]=t),o=o.parentElement},!0)},t=0;t<W.length;t++)e(t)}function S(e){if((P||j)&&"registerElement"in e.document){var t=document.registerElement,n=["createdCallback","attachedCallback","detachedCallback","attributeChangedCallback"];document.registerElement=function(e,r){return r&&r.prototype&&n.forEach(function(e){var t="Document.registerElement::"+e;if(r.prototype.hasOwnProperty(e)){var n=Object.getOwnPropertyDescriptor(r.prototype,e);n&&n.value?(n.value=Zone.current.wrap(n.value,t),v(r.prototype,e,n)):r.prototype[e]=Zone.current.wrap(r.prototype[e],t)}else r.prototype[e]&&(r.prototype[e]=Zone.current.wrap(r.prototype[e],t))}),t.apply(document,[e,r])}}}function E(e){function t(e){var t=e[ee];return t}function n(e){XMLHttpRequest[re]=!1;var t=e.data,n=t.target[ne];n&&t.target.removeEventListener("readystatechange",n);var r=t.target[ne]=function(){t.target.readyState===t.target.DONE&&!t.aborted&&XMLHttpRequest[re]&&"scheduled"===e.state&&e.invoke()};t.target.addEventListener("readystatechange",r);var o=t.target[ee];return o||(t.target[ee]=e),i.apply(t.target,t.args),XMLHttpRequest[re]=!0,e}function r(){}function o(e){var t=e.data;return t.aborted=!0,s.apply(t.target,t.args)}var a=h(e.XMLHttpRequest.prototype,"open",function(){return function(e,t){return e[te]=0==t[2],a.apply(e,t)}}),i=h(e.XMLHttpRequest.prototype,"send",function(){return function(e,t){var a=Zone.current;if(e[te])return i.apply(e,t);var s={target:e,isPeriodic:!1,delay:null,args:t,aborted:!1};return a.scheduleMacroTask("XMLHttpRequest.send",r,s,n,o)}}),s=h(e.XMLHttpRequest.prototype,"abort",function(e){return function(e,n){var r=t(e);if(r&&"string"==typeof r.type){if(null==r.cancelFn||r.data&&r.data.aborted)return;r.zone.cancelTask(r)}}})}function D(e){return function(t){var n=f(J,e);n.forEach(function(n){var r=J.PromiseRejectionEvent;if(r){var o=new r(e,{promise:t.promise,reason:t.rejection});n.invoke(o)}})}}var O=(function(e){function t(e){return"__zone_symbol__"+e}function n(){0===x&&0===H.length&&(e[I]?e[I].resolve(0)[L](i):e[j](i,0))}function r(e){n(),H.push(e)}function o(e){if(!O[t("ignoreConsoleErrorUncaughtError")]){var n=e&&e.rejection;n&&console.error("Unhandled Promise rejection:",n instanceof Error?n.message:n,"; Zone:",e.zone.name,"; Task:",e.task&&e.task.source,"; Value:",n,n instanceof Error?n.stack:void 0),console.error(e)}}function a(e){o(e);try{var n=O[t("unhandledPromiseRejectionHandler")];n&&"function"==typeof n&&n.apply(this,[e])}catch(r){}}function i(){if(!R){for(R=!0;H.length;){var e=H;H=[];for(var t=0;t<e.length;t++){var n=e[t];try{n.zone.runTask(n,null,null)}catch(r){o(r)}}}for(;q.length;)for(var i=function(){var e=q.shift();try{e.zone.runGuarded(function(){throw e})}catch(t){a(t)}};q.length;)i();R=!1}}function s(e){return e&&e.then}function c(e){return e}function u(e){return K.reject(e)}function l(e,t){return function(n){try{h(e,t,n)}catch(r){h(e,!1,r)}}}function h(e,r,o){var a=V();if(e===o)throw new TypeError("Promise resolved with itself");if(e[A]===X){var i=null;try{"object"!=typeof o&&"function"!=typeof o||(i=o&&o.then)}catch(s){return a(function(){h(e,!1,s)})(),e}if(r!==G&&o instanceof K&&o.hasOwnProperty(A)&&o.hasOwnProperty(B)&&o[A]!==X)f(o),h(e,o[A],o[B]);else if(r!==G&&"function"==typeof i)try{i.apply(o,[a(l(e,r)),a(l(e,!1))])}catch(s){a(function(){h(e,!1,s)})()}else{e[A]=r;var c=e[B];e[B]=o,r===G&&o instanceof Error&&(o[t("currentTask")]=O.currentTask);for(var u=0;u<c.length;)p(e,c[u++],c[u++],c[u++],c[u++]);if(0==c.length&&r==G){e[A]=U;try{throw new Error("Uncaught (in promise): "+o+(o&&o.stack?"\n"+o.stack:""))}catch(s){var d=s;d.rejection=o,d.promise=e,d.zone=O.current,d.task=O.currentTask,q.push(d),n()}}}}return e}function f(e){if(e[A]===U){try{var n=O[t("rejectionHandledHandler")];n&&"function"==typeof n&&n.apply(this,[{rejection:e[B],promise:e}])}catch(r){}e[A]=G;for(var o=0;o<q.length;o++)e===q[o].promise&&q.splice(o,1)}}function p(e,t,n,r,o){f(e);var a=e[A]?"function"==typeof r?r:c:"function"==typeof o?o:u;t.scheduleMicroTask(N,function(){try{h(n,!0,t.run(a,void 0,[e[B]]))}catch(r){h(n,!1,r)}})}function d(e){var t=e.prototype,n=t.then;t[L]=n,e.prototype.then=function(e,t){var r=this,o=new K(function(e,t){n.call(r,e,t)});return o.then(e,t)},e[Q]=!0}function v(e){return function(){var t=e.apply(this,arguments);if(t instanceof K)return t;var n=t.constructor;return n[Q]||d(n),t}}function k(){var e=this,t=ne.apply(this,arguments);if(!t.stack)try{throw t}catch(n){t=n}var r=t.originalStack=t.stack;if(k[oe]&&r){for(var o=r.split("\n"),a=M,i=0;o[i]!==$&&o[i]!==ee&&i<o.length;)i++;for(;i<o.length&&a;i++){var s=o[i];if(s.trim())switch(re[s]){case 0:o.splice(i,1),i--;break;case 1:a.parent?(o[i]+=" ["+a.parent.zone.name+" => "+a.zone.name+"]",a=a.parent):a=null;break;default:o[i]+=" ["+a.zone.name+"]"}}try{t.stack=t.zoneAwareStack=o.join("\n")}catch(c){}}return this instanceof ne&&this.constructor!=ne?(Object.keys(t).concat("stack","message").forEach(function(n){if(void 0!==t[n])try{e[n]=t[n]}catch(r){}}),this):t}if(e.Zone)throw new Error("Zone already loaded.");var g={name:"NO ZONE"},y="notScheduled",T="scheduling",m="scheduled",_="running",b="canceling",w="unknown",S="microTask",E="macroTask",D="eventTask",O=function(){function t(e,t){this._properties=null,this._parent=e,this._name=t?t.name||"unnamed":"<root>",this._properties=t&&t.properties||{},this._zoneDelegate=new z(this,this._parent&&this._parent._zoneDelegate,t)}return t.assertZonePatched=function(){if(e.Promise!==K)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")},Object.defineProperty(t,"root",{get:function(){for(var e=t.current;e.parent;)e=e.parent;return e},enumerable:!0,configurable:!0}),Object.defineProperty(t,"current",{get:function(){return M.zone},enumerable:!0,configurable:!0}),Object.defineProperty(t,"currentTask",{get:function(){return F},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"parent",{get:function(){return this._parent},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),t.prototype.get=function(e){var t=this.getZoneWith(e);if(t)return t._properties[e]},t.prototype.getZoneWith=function(e){for(var t=this;t;){if(t._properties.hasOwnProperty(e))return t;t=t._parent}return null},t.prototype.fork=function(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)},t.prototype.wrap=function(e,t){if("function"!=typeof e)throw new Error("Expecting function got: "+e);var n=this._zoneDelegate.intercept(this,e,t),r=this;return function(){return r.runGuarded(n,this,arguments,t)}},t.prototype.run=function(e,t,n,r){void 0===t&&(t=void 0),void 0===n&&(n=null),void 0===r&&(r=null),M=new P(M,this);try{return this._zoneDelegate.invoke(this,e,t,n,r)}finally{M=M.parent}},t.prototype.runGuarded=function(e,t,n,r){void 0===t&&(t=null),void 0===n&&(n=null),void 0===r&&(r=null),M=new P(M,this);try{try{return this._zoneDelegate.invoke(this,e,t,n,r)}catch(o){if(this._zoneDelegate.handleError(this,o))throw o}}finally{M=M.parent}},t.prototype.runTask=function(e,t,n){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||g).name+"; Execution: "+this.name+")");var r=e.state!=_;r&&e._transitionTo(_,m),e.runCount++;var o=F;F=e,M=new P(M,this);try{e.type==E&&e.data&&!e.data.isPeriodic&&(e.cancelFn=null);try{return this._zoneDelegate.invokeTask(this,e,t,n)}catch(a){if(this._zoneDelegate.handleError(this,a))throw a}}finally{e.state!==y&&e.state!==w&&(e.type==D||e.data&&e.data.isPeriodic?r&&e._transitionTo(m,_):(e.runCount=0,this._updateTaskCount(e,-1),r&&e._transitionTo(y,_,y))),M=M.parent,F=o}},t.prototype.scheduleTask=function(e){if(e.zone&&e.zone!==this)for(var t=this;t;){if(t===e.zone)throw Error("can not reschedule task to "+this.name+" which is descendants of the original zone "+e.zone.name);t=t.parent}e._transitionTo(T,y);var n=[];e._zoneDelegates=n,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(r){throw e._transitionTo(w,T,y),this._zoneDelegate.handleError(this,r),r}return e._zoneDelegates===n&&this._updateTaskCount(e,1),e.state==T&&e._transitionTo(m,T),e},t.prototype.scheduleMicroTask=function(e,t,n,r){return this.scheduleTask(new C(S,e,t,n,r,null))},t.prototype.scheduleMacroTask=function(e,t,n,r,o){return this.scheduleTask(new C(E,e,t,n,r,o))},t.prototype.scheduleEventTask=function(e,t,n,r,o){return this.scheduleTask(new C(D,e,t,n,r,o))},t.prototype.cancelTask=function(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||g).name+"; Execution: "+this.name+")");e._transitionTo(b,m,_);try{this._zoneDelegate.cancelTask(this,e)}catch(t){throw e._transitionTo(w,b),this._zoneDelegate.handleError(this,t),t}return this._updateTaskCount(e,-1),e._transitionTo(y,b),e.runCount=0,e},t.prototype._updateTaskCount=function(e,t){var n=e._zoneDelegates;t==-1&&(e._zoneDelegates=null);for(var r=0;r<n.length;r++)n[r]._updateTaskCount(e.type,t)},t}();O.__symbol__=t;var Z={name:"",onHasTask:function(e,t,n,r){return e.hasTask(n,r)},onScheduleTask:function(e,t,n,r){return e.scheduleTask(n,r)},onInvokeTask:function(e,t,n,r,o,a){return e.invokeTask(n,r,o,a)},onCancelTask:function(e,t,n,r){return e.cancelTask(n,r)}},z=function(){function e(e,t,n){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=e,this._parentDelegate=t,this._forkZS=n&&(n&&n.onFork?n:t._forkZS),this._forkDlgt=n&&(n.onFork?t:t._forkDlgt),this._forkCurrZone=n&&(n.onFork?this.zone:t.zone),this._interceptZS=n&&(n.onIntercept?n:t._interceptZS),this._interceptDlgt=n&&(n.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=n&&(n.onIntercept?this.zone:t.zone),this._invokeZS=n&&(n.onInvoke?n:t._invokeZS),this._invokeDlgt=n&&(n.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=n&&(n.onInvoke?this.zone:t.zone),this._handleErrorZS=n&&(n.onHandleError?n:t._handleErrorZS),this._handleErrorDlgt=n&&(n.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=n&&(n.onHandleError?this.zone:t.zone),this._scheduleTaskZS=n&&(n.onScheduleTask?n:t._scheduleTaskZS),this._scheduleTaskDlgt=n&&(n.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=n&&(n.onScheduleTask?this.zone:t.zone),this._invokeTaskZS=n&&(n.onInvokeTask?n:t._invokeTaskZS),this._invokeTaskDlgt=n&&(n.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=n&&(n.onInvokeTask?this.zone:t.zone),this._cancelTaskZS=n&&(n.onCancelTask?n:t._cancelTaskZS),this._cancelTaskDlgt=n&&(n.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=n&&(n.onCancelTask?this.zone:t.zone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;var r=n&&n.onHasTask,o=t&&t._hasTaskZS;(r||o)&&(this._hasTaskZS=r?n:Z,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=e,n.onScheduleTask||(this._scheduleTaskZS=Z,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),n.onInvokeTask||(this._invokeTaskZS=Z,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),n.onCancelTask||(this._cancelTaskZS=Z,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}return e.prototype.fork=function(e,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,e,t):new O(e,t)},e.prototype.intercept=function(e,t,n){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,e,t,n):t},e.prototype.invoke=function(e,t,n,r,o){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,e,t,n,r,o):t.apply(n,r)},e.prototype.handleError=function(e,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,e,t)},e.prototype.scheduleTask=function(e,t){var n=t;if(this._scheduleTaskZS)this._hasTaskZS&&n._zoneDelegates.push(this._hasTaskDlgtOwner),n=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,e,t),n||(n=t);else if(t.scheduleFn)t.scheduleFn(t);else{if(t.type!=S)throw new Error("Task is missing scheduleFn.");r(t)}return n},e.prototype.invokeTask=function(e,t,n,r){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,e,t,n,r):t.callback.apply(n,r)},e.prototype.cancelTask=function(e,t){var n;if(this._cancelTaskZS)n=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,e,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");n=t.cancelFn(t)}return n},e.prototype.hasTask=function(e,t){try{return this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,e,t)}catch(n){}},e.prototype._updateTaskCount=function(e,t){var n=this._taskCounts,r=n[e],o=n[e]=r+t;if(o<0)throw new Error("More tasks executed then were scheduled.");if(0==r||0==o){var a={microTask:n.microTask>0,macroTask:n.macroTask>0,eventTask:n.eventTask>0,change:e};this.hasTask(this.zone,a)}},e}(),C=function(){function e(e,t,n,r,o,a){this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=e,this.source=t,this.data=r,this.scheduleFn=o,this.cancelFn=a,this.callback=n;var s=this;this.invoke=function(){x++;try{return s.runCount++,s.zone.runTask(s,this,arguments)}finally{1==x&&i(),x--}}}return Object.defineProperty(e.prototype,"zone",{get:function(){return this._zone},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"state",{get:function(){return this._state},enumerable:!0,configurable:!0}),e.prototype.cancelScheduleRequest=function(){this._transitionTo(y,T)},e.prototype._transitionTo=function(e,t,n){if(this._state!==t&&this._state!==n)throw new Error(this.type+" '"+this.source+"': can not transition to '"+e+"', expecting state '"+t+"'"+(n?" or '"+n+"'":"")+", was '"+this._state+"'.");this._state=e,e==y&&(this._zoneDelegates=null)},e.prototype.toString=function(){return this.data&&"undefined"!=typeof this.data.handleId?this.data.handleId:Object.prototype.toString.call(this)},e.prototype.toJSON=function(){return{type:this.type,state:this.state,source:this.source,data:this.data,zone:this.zone.name,invoke:this.invoke,scheduleFn:this.scheduleFn,cancelFn:this.cancelFn,runCount:this.runCount,callback:this.callback}},e}(),P=function(){function e(e,t){this.parent=e,this.zone=t}return e}(),j=t("setTimeout"),I=t("Promise"),L=t("then"),M=new P(null,new O(null,null)),F=null,H=[],R=!1,q=[],x=0,A=t("state"),B=t("value"),N="Promise.then",X=null,W=!0,G=!1,U=0,V=function(){var e=!1;return function(t){return function(){e||(e=!0,t.apply(null,arguments))}}},K=function(){function e(t){var n=this;if(!(n instanceof e))throw new Error("Must be an instanceof Promise.");n[A]=X,n[B]=[];try{t&&t(l(n,W),l(n,G))}catch(r){h(n,!1,r)}}return e.toString=function(){return"function ZoneAwarePromise() { [native code] }"},e.resolve=function(e){return h(new this(null),W,e)},e.reject=function(e){return h(new this(null),G,e)},e.race=function(e){function t(e){a&&(a=r(e))}function n(e){a&&(a=o(e))}for(var r,o,a=new this(function(e,t){n=[e,t],r=n[0],o=n[1];var n}),i=0,c=e;i<c.length;i++){var u=c[i];s(u)||(u=this.resolve(u)),u.then(t,n)}return a},e.all=function(e){for(var t,n,r=new this(function(e,r){t=e,n=r}),o=0,a=[],i=0,c=e;i<c.length;i++){var u=c[i];s(u)||(u=this.resolve(u)),u.then(function(e){return function(n){a[e]=n,o--,o||t(a)}}(o),n),o++}return o||t(a),r},e.prototype.then=function(e,t){var n=new this.constructor(null),r=O.current;return this[A]==X?this[B].push(r,n,e,t):p(this,r,n,e,t),n},e.prototype["catch"]=function(e){return this.then(null,e)},e}();K.resolve=K.resolve,K.reject=K.reject,K.race=K.race,K.all=K.all;var J=e[I]=e.Promise;e.Promise=K;var Q=t("thenPatched");if(J){d(J);var Y=e.fetch;"function"==typeof Y&&(e.fetch=v(Y))}Promise[O.__symbol__("uncaughtPromiseErrors")]=q;var $,ee,te=O.__symbol__("blacklistedStackFrames"),ne=e[t("Error")]=e.Error,re={};e.Error=k;var oe="stackRewrite";k.prototype=ne.prototype,k[te]=re,k[oe]=!1;var ae=["stackTraceLimit","captureStackTrace","prepareStackTrace"],ie=Object.keys(ne);ie&&ie.forEach(function(e){0===ae.filter(function(t){return t===e}).length&&Object.defineProperty(k,e,{get:function(){return ne[e]},set:function(t){ne[e]=t}})}),ne.hasOwnProperty("stackTraceLimit")&&(ne.stackTraceLimit=Math.max(ne.stackTraceLimit,15),Object.defineProperty(k,"stackTraceLimit",{get:function(){return ne.stackTraceLimit},set:function(e){return ne.stackTraceLimit=e}})),ne.hasOwnProperty("captureStackTrace")&&Object.defineProperty(k,"captureStackTrace",{value:function(e,t){ne.captureStackTrace(e,t)}}),Object.defineProperty(k,"prepareStackTrace",{get:function(){return ne.prepareStackTrace},set:function(e){return e&&"function"==typeof e?ne.prepareStackTrace=function(t,n){if(n)for(var r=0;r<n.length;r++){var o=n[r];if("zoneCaptureStackTrace"===o.getFunctionName()){n.splice(r,1);break}}return e.apply(this,[t,n])}:ne.prepareStackTrace=e}});var se=O.current.fork({name:"detect",onInvoke:function(e,t,n,r,o,a,i){return e.invoke(n,r,o,a,i)},onHandleError:function(e,t,n,r){if(r.originalStack&&Error===k)for(var o=r.originalStack.split(/\n/),a=!1,i=!1,s=!1;o.length;){var c=o.shift();if(/:\d+:\d+/.test(c)){var u=c.split("(")[0].split("@")[0],l=1;if(u.indexOf("ZoneAwareError")!==-1&&($=c,ee=c.replace("Error.",""),re[ee]=0),u.indexOf("runGuarded")!==-1?i=!0:u.indexOf("runTask")!==-1?s=!0:u.indexOf("run")!==-1?a=!0:l=0,re[c]=l,a&&i&&s){k[oe]=!0;break}}}return!1}}),ce=function(){se.run(function(){se.runGuarded(function(){throw new k(k,ne)})})};return se.runTask(se.scheduleMacroTask("detect",ce,null,function(){return null},null)),e.Zone=O}("undefined"!=typeof window&&window||"undefined"!=typeof self&&self||global),function(e){return"__zone_symbol__"+e}),Z="object"==typeof window&&window||"object"==typeof self&&self||global,z="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,C=!("nw"in Z)&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),P=!C&&!z&&!("undefined"==typeof window||!window.HTMLElement),j="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)&&!z&&!("undefined"==typeof window||!window.HTMLElement),I=O("eventTasks"),L="addEventListener",M="removeEventListener",F=function(e,t){return{useCapturing:t[2],eventName:t[0],handler:t[1],target:e||Z,name:t[0],invokeAddFunc:function(e,t){return t&&t.invoke?this.target[e](this.eventName,t.invoke,this.useCapturing):this.target[e](this.eventName,t,this.useCapturing)},invokeRemoveFunc:function(e,t){return t&&t.invoke?this.target[e](this.eventName,t.invoke,this.useCapturing):this.target[e](this.eventName,t,this.useCapturing)}}},H=(i(L,M),s(M),O("originalInstance"));Zone[O("patchEventTargetMethods")]=c,Zone[O("patchOnProperties")]=r;var R=Object[O("defineProperty")]=Object.defineProperty,q=Object[O("getOwnPropertyDescriptor")]=Object.getOwnPropertyDescriptor,x=Object.create,A=O("unconfigurables"),B="Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video",N="ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket".split(","),X="EventTarget",W="copy cut paste abort blur focus canplay canplaythrough change click contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange emptied ended input invalid keydown keypress keyup load loadeddata loadedmetadata loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup pause play playing progress ratechange reset scroll seeked seeking select show stalled submit suspend timeupdate volumechange waiting mozfullscreenchange mozfullscreenerror mozpointerlockchange mozpointerlockerror error webglcontextrestored webglcontextlost webglcontextcreationerror".split(" "),G=O("unbound"),U="set",V="clear",K=["alert","prompt","confirm"],J="undefined"!=typeof window&&window||"undefined"!=typeof self&&self||global;p(J,U,V,"Timeout"),p(J,U,V,"Interval"),p(J,U,V,"Immediate"),p(J,"request","cancel","AnimationFrame"),p(J,"mozRequest","mozCancel","AnimationFrame"),p(J,"webkitRequest","webkitCancel","AnimationFrame");for(var Q=0;Q<K.length;Q++){var Y=K[Q];h(J,Y,function(e,t,n){return function(t,r){return Zone.current.run(e,J,r,n)}})}T(J);var $=J.XMLHttpRequestEventTarget;$&&$.prototype&&c($.prototype),_(J),u("MutationObserver"),u("WebKitMutationObserver"),u("FileReader"),d(),S(J),E(J);var ee=O("xhrTask"),te=O("xhrSync"),ne=O("xhrListener"),re=O("xhrScheduled");J.navigator&&J.navigator.geolocation&&t(J.navigator.geolocation,["getCurrentPosition","watchPosition"]),J.PromiseRejectionEvent&&(Zone[O("unhandledPromiseRejectionHandler")]=D("unhandledrejection"),Zone[O("rejectionHandledHandler")]=D("rejectionhandled"))});
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    "use strict";
    var hasOwn = Object.prototype.hasOwnProperty;
    // feature test for Symbol support
    var supportsSymbol = typeof Symbol === "function";
    var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
    var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
    var HashMap;
    (function (HashMap) {
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        HashMap.create = supportsCreate
            ? function () { return MakeDictionary(Object.create(null)); }
            : supportsProto
                ? function () { return MakeDictionary({ __proto__: null }); }
                : function () { return MakeDictionary({}); };
        HashMap.has = downLevel
            ? function (map, key) { return hasOwn.call(map, key); }
            : function (map, key) { return key in map; };
        HashMap.get = downLevel
            ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
            : function (map, key) { return map[key]; };
    })(HashMap || (HashMap = {}));
    // Load global or shim versions of Map, Set, and WeakMap
    var functionPrototype = Object.getPrototypeOf(Function);
    var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
    var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
    var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
    var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
    // [[Metadata]] internal slot
    // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
    var Metadata = new _WeakMap();
    /**
      * Applies a set of decorators to a property of a target object.
      * @param decorators An array of decorators.
      * @param target The target object.
      * @param propertyKey (Optional) The property key to decorate.
      * @param attributes (Optional) The property descriptor for the target key.
      * @remarks Decorators are applied in reverse order.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     Example = Reflect.decorate(decoratorsArray, Example);
      *
      *     // property (on constructor)
      *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
      *
      *     // method (on constructor)
      *     Object.defineProperty(Example, "staticMethod",
      *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
      *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
      *
      *     // method (on prototype)
      *     Object.defineProperty(Example.prototype, "method",
      *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
      *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
      *
      */
    function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
            if (!IsArray(decorators))
                throw new TypeError();
            if (!IsObject(target))
                throw new TypeError();
            if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                throw new TypeError();
            if (IsNull(attributes))
                attributes = undefined;
            propertyKey = ToPropertyKey(propertyKey);
            return DecorateProperty(decorators, target, propertyKey, attributes);
        }
        else {
            if (!IsArray(decorators))
                throw new TypeError();
            if (!IsConstructor(target))
                throw new TypeError();
            return DecorateConstructor(decorators, target);
        }
    }
    Reflect.decorate = decorate;
    // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
    // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
    /**
      * A default metadata decorator factory that can be used on a class, class member, or parameter.
      * @param metadataKey The key for the metadata entry.
      * @param metadataValue The value for the metadata entry.
      * @returns A decorator function.
      * @remarks
      * If `metadataKey` is already defined for the target and target key, the
      * metadataValue for that key will be overwritten.
      * @example
      *
      *     // constructor
      *     @Reflect.metadata(key, value)
      *     class Example {
      *     }
      *
      *     // property (on constructor, TypeScript only)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         static staticProperty;
      *     }
      *
      *     // property (on prototype, TypeScript only)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         property;
      *     }
      *
      *     // method (on constructor)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         static staticMethod() { }
      *     }
      *
      *     // method (on prototype)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         method() { }
      *     }
      *
      */
    function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                throw new TypeError();
            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        return decorator;
    }
    Reflect.metadata = metadata;
    /**
      * Define a unique metadata entry on the target.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param metadataValue A value that contains attached metadata.
      * @param target The target object on which to define metadata.
      * @param propertyKey (Optional) The property key for the target.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     Reflect.defineMetadata("custom:annotation", options, Example);
      *
      *     // property (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
      *
      *     // method (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
      *
      *     // method (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
      *
      *     // decorator factory as metadata-producing annotation.
      *     function MyAnnotation(options): Decorator {
      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
      *     }
      *
      */
    function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
    }
    Reflect.defineMetadata = defineMetadata;
    /**
      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
    }
    Reflect.hasMetadata = hasMetadata;
    /**
      * Gets a value indicating whether the target object has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
    }
    Reflect.hasOwnMetadata = hasOwnMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
    }
    Reflect.getMetadata = getMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
    }
    Reflect.getOwnMetadata = getOwnMetadata;
    /**
      * Gets the metadata keys defined on the target object or its prototype chain.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadataKeys(Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadataKeys(Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadataKeys(Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadataKeys(Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadataKeys(Example.prototype, "method");
      *
      */
    function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
    }
    Reflect.getMetadataKeys = getMetadataKeys;
    /**
      * Gets the unique metadata keys defined on the target object.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadataKeys(Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
      *
      */
    function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
    }
    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
    /**
      * Deletes the metadata entry from the target object with the provided key.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.deleteMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return false;
        if (!metadataMap.delete(metadataKey))
            return false;
        if (metadataMap.size > 0)
            return true;
        var targetMetadata = Metadata.get(target);
        targetMetadata.delete(propertyKey);
        if (targetMetadata.size > 0)
            return true;
        Metadata.delete(target);
        return true;
    }
    Reflect.deleteMetadata = deleteMetadata;
    function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsConstructor(decorated))
                    throw new TypeError();
                target = decorated;
            }
        }
        return target;
    }
    function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target, propertyKey, descriptor);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsObject(decorated))
                    throw new TypeError();
                descriptor = decorated;
            }
        }
        return descriptor;
    }
    function GetOrCreateMetadataMap(O, P, Create) {
        var targetMetadata = Metadata.get(O);
        if (IsUndefined(targetMetadata)) {
            if (!Create)
                return undefined;
            targetMetadata = new _Map();
            Metadata.set(O, targetMetadata);
        }
        var metadataMap = targetMetadata.get(P);
        if (IsUndefined(metadataMap)) {
            if (!Create)
                return undefined;
            metadataMap = new _Map();
            targetMetadata.set(P, metadataMap);
        }
        return metadataMap;
    }
    // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
    function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn)
            return true;
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
            return OrdinaryHasMetadata(MetadataKey, parent, P);
        return false;
    }
    // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return false;
        return ToBoolean(metadataMap.has(MetadataKey));
    }
    // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
    function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn)
            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
            return OrdinaryGetMetadata(MetadataKey, parent, P);
        return undefined;
    }
    // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return undefined;
        return metadataMap.get(MetadataKey);
    }
    // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
        metadataMap.set(MetadataKey, MetadataValue);
    }
    // 3.1.6.1 OrdinaryMetadataKeys(O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
    function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (parent === null)
            return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0)
            return ownKeys;
        if (ownKeys.length <= 0)
            return parentKeys;
        var set = new _Set();
        var keys = [];
        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
            var key = ownKeys_1[_i];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
            var key = parentKeys_1[_a];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        return keys;
    }
    // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
    function OrdinaryOwnMetadataKeys(O, P) {
        var keys = [];
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return keys;
        var keysObj = metadataMap.keys();
        var iterator = GetIterator(keysObj);
        var k = 0;
        while (true) {
            var next = IteratorStep(iterator);
            if (!next) {
                keys.length = k;
                return keys;
            }
            var nextValue = IteratorValue(next);
            try {
                keys[k] = nextValue;
            }
            catch (e) {
                try {
                    IteratorClose(iterator);
                }
                finally {
                    throw e;
                }
            }
            k++;
        }
    }
    // 6 ECMAScript Data Typ0es and Values
    // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
    function Type(x) {
        if (x === null)
            return 1 /* Null */;
        switch (typeof x) {
            case "undefined": return 0 /* Undefined */;
            case "boolean": return 2 /* Boolean */;
            case "string": return 3 /* String */;
            case "symbol": return 4 /* Symbol */;
            case "number": return 5 /* Number */;
            case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
            default: return 6 /* Object */;
        }
    }
    // 6.1.1 The Undefined Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
    function IsUndefined(x) {
        return x === undefined;
    }
    // 6.1.2 The Null Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
    function IsNull(x) {
        return x === null;
    }
    // 6.1.5 The Symbol Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
    function IsSymbol(x) {
        return typeof x === "symbol";
    }
    // 6.1.7 The Object Type
    // https://tc39.github.io/ecma262/#sec-object-type
    function IsObject(x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
    }
    // 7.1 Type Conversion
    // https://tc39.github.io/ecma262/#sec-type-conversion
    // 7.1.1 ToPrimitive(input [, PreferredType])
    // https://tc39.github.io/ecma262/#sec-toprimitive
    function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
            case 0 /* Undefined */: return input;
            case 1 /* Null */: return input;
            case 2 /* Boolean */: return input;
            case 3 /* String */: return input;
            case 4 /* Symbol */: return input;
            case 5 /* Number */: return input;
        }
        var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
        if (exoticToPrim !== undefined) {
            var result = exoticToPrim.call(input, hint);
            if (IsObject(result))
                throw new TypeError();
            return result;
        }
        return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
    }
    // 7.1.1.1 OrdinaryToPrimitive(O, hint)
    // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
    function OrdinaryToPrimitive(O, hint) {
        if (hint === "string") {
            var toString_1 = O.toString;
            if (IsCallable(toString_1)) {
                var result = toString_1.call(O);
                if (!IsObject(result))
                    return result;
            }
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                    return result;
            }
        }
        else {
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                    return result;
            }
            var toString_2 = O.toString;
            if (IsCallable(toString_2)) {
                var result = toString_2.call(O);
                if (!IsObject(result))
                    return result;
            }
        }
        throw new TypeError();
    }
    // 7.1.2 ToBoolean(argument)
    // https://tc39.github.io/ecma262/2016/#sec-toboolean
    function ToBoolean(argument) {
        return !!argument;
    }
    // 7.1.12 ToString(argument)
    // https://tc39.github.io/ecma262/#sec-tostring
    function ToString(argument) {
        return "" + argument;
    }
    // 7.1.14 ToPropertyKey(argument)
    // https://tc39.github.io/ecma262/#sec-topropertykey
    function ToPropertyKey(argument) {
        var key = ToPrimitive(argument, 3 /* String */);
        if (IsSymbol(key))
            return key;
        return ToString(key);
    }
    // 7.2 Testing and Comparison Operations
    // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
    // 7.2.2 IsArray(argument)
    // https://tc39.github.io/ecma262/#sec-isarray
    function IsArray(argument) {
        return Array.isArray
            ? Array.isArray(argument)
            : argument instanceof Object
                ? argument instanceof Array
                : Object.prototype.toString.call(argument) === "[object Array]";
    }
    // 7.2.3 IsCallable(argument)
    // https://tc39.github.io/ecma262/#sec-iscallable
    function IsCallable(argument) {
        // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
        return typeof argument === "function";
    }
    // 7.2.4 IsConstructor(argument)
    // https://tc39.github.io/ecma262/#sec-isconstructor
    function IsConstructor(argument) {
        // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
        return typeof argument === "function";
    }
    // 7.2.7 IsPropertyKey(argument)
    // https://tc39.github.io/ecma262/#sec-ispropertykey
    function IsPropertyKey(argument) {
        switch (Type(argument)) {
            case 3 /* String */: return true;
            case 4 /* Symbol */: return true;
            default: return false;
        }
    }
    // 7.3 Operations on Objects
    // https://tc39.github.io/ecma262/#sec-operations-on-objects
    // 7.3.9 GetMethod(V, P)
    // https://tc39.github.io/ecma262/#sec-getmethod
    function GetMethod(V, P) {
        var func = V[P];
        if (func === undefined || func === null)
            return undefined;
        if (!IsCallable(func))
            throw new TypeError();
        return func;
    }
    // 7.4 Operations on Iterator Objects
    // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
    function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method))
            throw new TypeError(); // from Call
        var iterator = method.call(obj);
        if (!IsObject(iterator))
            throw new TypeError();
        return iterator;
    }
    // 7.4.4 IteratorValue(iterResult)
    // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
    function IteratorValue(iterResult) {
        return iterResult.value;
    }
    // 7.4.5 IteratorStep(iterator)
    // https://tc39.github.io/ecma262/#sec-iteratorstep
    function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
    }
    // 7.4.6 IteratorClose(iterator, completion)
    // https://tc39.github.io/ecma262/#sec-iteratorclose
    function IteratorClose(iterator) {
        var f = iterator["return"];
        if (f)
            f.call(iterator);
    }
    // 9.1 Ordinary Object Internal Methods and Internal Slots
    // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
    // 9.1.1.1 OrdinaryGetPrototypeOf(O)
    // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
    function OrdinaryGetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype)
            return proto;
        // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
        // Try to determine the superclass constructor. Compatible implementations
        // must either set __proto__ on a subclass constructor to the superclass constructor,
        // or ensure each class has a valid `constructor` property on its prototype that
        // points back to the constructor.
        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
        // This is the case when in ES6 or when using __proto__ in a compatible browser.
        if (proto !== functionPrototype)
            return proto;
        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
        var prototype = O.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype)
            return proto;
        // If the constructor was not a function, then we cannot determine the heritage.
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function")
            return proto;
        // If we have some kind of self-reference, then we cannot determine the heritage.
        if (constructor === O)
            return proto;
        // we have a pretty good guess at the heritage.
        return constructor;
    }
    // naive Map shim
    function CreateMapPolyfill() {
        var cacheSentinel = {};
        var arraySentinel = [];
        var MapIterator = (function () {
            function MapIterator(keys, values, selector) {
                this._index = 0;
                this._keys = keys;
                this._values = values;
                this._selector = selector;
            }
            MapIterator.prototype["@@iterator"] = function () { return this; };
            MapIterator.prototype[iteratorSymbol] = function () { return this; };
            MapIterator.prototype.next = function () {
                var index = this._index;
                if (index >= 0 && index < this._keys.length) {
                    var result = this._selector(this._keys[index], this._values[index]);
                    if (index + 1 >= this._keys.length) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    else {
                        this._index++;
                    }
                    return { value: result, done: false };
                }
                return { value: undefined, done: true };
            };
            MapIterator.prototype.throw = function (error) {
                if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                }
                throw error;
            };
            MapIterator.prototype.return = function (value) {
                if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                }
                return { value: value, done: true };
            };
            return MapIterator;
        }());
        return (function () {
            function Map() {
                this._keys = [];
                this._values = [];
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
            }
            Object.defineProperty(Map.prototype, "size", {
                get: function () { return this._keys.length; },
                enumerable: true,
                configurable: true
            });
            Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
            Map.prototype.get = function (key) {
                var index = this._find(key, /*insert*/ false);
                return index >= 0 ? this._values[index] : undefined;
            };
            Map.prototype.set = function (key, value) {
                var index = this._find(key, /*insert*/ true);
                this._values[index] = value;
                return this;
            };
            Map.prototype.delete = function (key) {
                var index = this._find(key, /*insert*/ false);
                if (index >= 0) {
                    var size = this._keys.length;
                    for (var i = index + 1; i < size; i++) {
                        this._keys[i - 1] = this._keys[i];
                        this._values[i - 1] = this._values[i];
                    }
                    this._keys.length--;
                    this._values.length--;
                    if (key === this._cacheKey) {
                        this._cacheKey = cacheSentinel;
                        this._cacheIndex = -2;
                    }
                    return true;
                }
                return false;
            };
            Map.prototype.clear = function () {
                this._keys.length = 0;
                this._values.length = 0;
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
            };
            Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
            Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
            Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
            Map.prototype["@@iterator"] = function () { return this.entries(); };
            Map.prototype[iteratorSymbol] = function () { return this.entries(); };
            Map.prototype._find = function (key, insert) {
                if (this._cacheKey !== key) {
                    this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                }
                if (this._cacheIndex < 0 && insert) {
                    this._cacheIndex = this._keys.length;
                    this._keys.push(key);
                    this._values.push(undefined);
                }
                return this._cacheIndex;
            };
            return Map;
        }());
        function getKey(key, _) {
            return key;
        }
        function getValue(_, value) {
            return value;
        }
        function getEntry(key, value) {
            return [key, value];
        }
    }
    // naive Set shim
    function CreateSetPolyfill() {
        return (function () {
            function Set() {
                this._map = new _Map();
            }
            Object.defineProperty(Set.prototype, "size", {
                get: function () { return this._map.size; },
                enumerable: true,
                configurable: true
            });
            Set.prototype.has = function (value) { return this._map.has(value); };
            Set.prototype.add = function (value) { return this._map.set(value, value), this; };
            Set.prototype.delete = function (value) { return this._map.delete(value); };
            Set.prototype.clear = function () { this._map.clear(); };
            Set.prototype.keys = function () { return this._map.keys(); };
            Set.prototype.values = function () { return this._map.values(); };
            Set.prototype.entries = function () { return this._map.entries(); };
            Set.prototype["@@iterator"] = function () { return this.keys(); };
            Set.prototype[iteratorSymbol] = function () { return this.keys(); };
            return Set;
        }());
    }
    // naive WeakMap shim
    function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var keys = HashMap.create();
        var rootKey = CreateUniqueKey();
        return (function () {
            function WeakMap() {
                this._key = CreateUniqueKey();
            }
            WeakMap.prototype.has = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? HashMap.has(table, this._key) : false;
            };
            WeakMap.prototype.get = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? HashMap.get(table, this._key) : undefined;
            };
            WeakMap.prototype.set = function (target, value) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                table[this._key] = value;
                return this;
            };
            WeakMap.prototype.delete = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? delete table[this._key] : false;
            };
            WeakMap.prototype.clear = function () {
                // NOTE: not a real clear, just makes the previous data unreachable
                this._key = CreateUniqueKey();
            };
            return WeakMap;
        }());
        function CreateUniqueKey() {
            var key;
            do
                key = "@@WeakMap@@" + CreateUUID();
            while (HashMap.has(keys, key));
            keys[key] = true;
            return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
            if (!hasOwn.call(target, rootKey)) {
                if (!create)
                    return undefined;
                Object.defineProperty(target, rootKey, { value: HashMap.create() });
            }
            return target[rootKey];
        }
        function FillRandomBytes(buffer, size) {
            for (var i = 0; i < size; ++i)
                buffer[i] = Math.random() * 0xff | 0;
            return buffer;
        }
        function GenRandomBytes(size) {
            if (typeof Uint8Array === "function") {
                if (typeof crypto !== "undefined")
                    return crypto.getRandomValues(new Uint8Array(size));
                if (typeof msCrypto !== "undefined")
                    return msCrypto.getRandomValues(new Uint8Array(size));
                return FillRandomBytes(new Uint8Array(size), size);
            }
            return FillRandomBytes(new Array(size), size);
        }
        function CreateUUID() {
            var data = GenRandomBytes(UUID_SIZE);
            // mark as random - RFC 4122 § 4.4
            data[6] = data[6] & 0x4f | 0x40;
            data[8] = data[8] & 0xbf | 0x80;
            var result = "";
            for (var offset = 0; offset < UUID_SIZE; ++offset) {
                var byte = data[offset];
                if (offset === 4 || offset === 6 || offset === 8)
                    result += "-";
                if (byte < 16)
                    result += "0";
                result += byte.toString(16).toLowerCase();
            }
            return result;
        }
    }
    // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
    function MakeDictionary(obj) {
        obj.__ = undefined;
        delete obj.__;
        return obj;
    }
    // patch global Reflect
    (function (__global) {
        if (typeof __global.Reflect !== "undefined") {
            if (__global.Reflect !== Reflect) {
                for (var p in Reflect) {
                    if (hasOwn.call(Reflect, p)) {
                        __global.Reflect[p] = Reflect[p];
                    }
                }
            }
        }
        else {
            __global.Reflect = Reflect;
        }
    })(typeof global !== "undefined" ? global :
        typeof self !== "undefined" ? self :
            Function("return this;")());
})(Reflect || (Reflect = {}));
//# sourceMappingURL=Reflect.js.map
/*
 * SystemJS v0.19.40
 */
(function() {
function bootstrap() {// from https://gist.github.com/Yaffle/1088850
(function(global) {
function URLPolyfill(url, baseURL) {
  if (typeof url != 'string')
    throw new TypeError('URL must be a string');
  var m = String(url).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
  if (!m)
    throw new RangeError('Invalid URL format');
  var protocol = m[1] || "";
  var username = m[2] || "";
  var password = m[3] || "";
  var host = m[4] || "";
  var hostname = m[5] || "";
  var port = m[6] || "";
  var pathname = m[7] || "";
  var search = m[8] || "";
  var hash = m[9] || "";
  if (baseURL !== undefined) {
    var base = baseURL instanceof URLPolyfill ? baseURL : new URLPolyfill(baseURL);
    var flag = !protocol && !host && !username;
    if (flag && !pathname && !search)
      search = base.search;
    if (flag && pathname[0] !== "/")
      pathname = (pathname ? (((base.host || base.username) && !base.pathname ? "/" : "") + base.pathname.slice(0, base.pathname.lastIndexOf("/") + 1) + pathname) : base.pathname);
    // dot segments removal
    var output = [];
    pathname.replace(/^(\.\.?(\/|$))+/, "")
      .replace(/\/(\.(\/|$))+/g, "/")
      .replace(/\/\.\.$/, "/../")
      .replace(/\/?[^\/]*/g, function (p) {
        if (p === "/..")
          output.pop();
        else
          output.push(p);
      });
    pathname = output.join("").replace(/^\//, pathname[0] === "/" ? "/" : "");
    if (flag) {
      port = base.port;
      hostname = base.hostname;
      host = base.host;
      password = base.password;
      username = base.username;
    }
    if (!protocol)
      protocol = base.protocol;
  }

  // convert URLs to use / always
  pathname = pathname.replace(/\\/g, '/');

  this.origin = host ? protocol + (protocol !== "" || host !== "" ? "//" : "") + host : "";
  this.href = protocol + (protocol && host || protocol == "file:" ? "//" : "") + (username !== "" ? username + (password !== "" ? ":" + password : "") + "@" : "") + host + pathname + search + hash;
  this.protocol = protocol;
  this.username = username;
  this.password = password;
  this.host = host;
  this.hostname = hostname;
  this.port = port;
  this.pathname = pathname;
  this.search = search;
  this.hash = hash;
}
global.URLPolyfill = URLPolyfill;
})(typeof self != 'undefined' ? self : global);(function(__global) {

  var isWorker = typeof window == 'undefined' && typeof self != 'undefined' && typeof importScripts != 'undefined';
  var isBrowser = typeof window != 'undefined' && typeof document != 'undefined';
  var isWindows = typeof process != 'undefined' && typeof process.platform != 'undefined' && !!process.platform.match(/^win/);

  if (!__global.console)
    __global.console = { assert: function() {} };

  // IE8 support
  var indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, thisLen = this.length; i < thisLen; i++) {
      if (this[i] === item) {
        return i;
      }
    }
    return -1;
  };
  
  var defineProperty;
  (function () {
    try {
      if (!!Object.defineProperty({}, 'a', {}))
        defineProperty = Object.defineProperty;
    }
    catch (e) {
      defineProperty = function(obj, prop, opt) {
        try {
          obj[prop] = opt.value || opt.get.call(obj);
        }
        catch(e) {}
      }
    }
  })();

  var errArgs = new Error(0, '_').fileName == '_';

  function addToError(err, msg) {
    // parse the stack removing loader code lines for simplification
    if (!err.originalErr) {
      var stack = ((err.message || err) + (err.stack ? '\n' + err.stack : '')).toString().split('\n');
      var newStack = [];
      for (var i = 0; i < stack.length; i++) {
        if (typeof $__curScript == 'undefined' || stack[i].indexOf($__curScript.src) == -1)
          newStack.push(stack[i]);
      }
    }

    var newMsg = '(SystemJS) ' + (newStack ? newStack.join('\n\t') : err.message.substr(11)) + '\n\t' + msg;

    // Convert file:/// URLs to paths in Node
    if (!isBrowser)
      newMsg = newMsg.replace(isWindows ? /file:\/\/\//g : /file:\/\//g, '');

    var newErr = errArgs ? new Error(newMsg, err.fileName, err.lineNumber) : new Error(newMsg);
    
    newErr.stack = newMsg;
        
    // track the original error
    newErr.originalErr = err.originalErr || err;

    return newErr;
  }

  function __eval(source, debugName, context) {
    try {
      new Function(source).call(context);
    }
    catch(e) {
      throw addToError(e, 'Evaluating ' + debugName);
    }
  }

  var baseURI;

  // environent baseURI detection
  if (typeof document != 'undefined' && document.getElementsByTagName) {
    baseURI = document.baseURI;

    if (!baseURI) {
      var bases = document.getElementsByTagName('base');
      baseURI = bases[0] && bases[0].href || window.location.href;
    }
  }
  else if (typeof location != 'undefined') {
    baseURI = __global.location.href;
  }

  // sanitize out the hash and querystring
  if (baseURI) {
    baseURI = baseURI.split('#')[0].split('?')[0];
    baseURI = baseURI.substr(0, baseURI.lastIndexOf('/') + 1);
  }
  else if (typeof process != 'undefined' && process.cwd) {
    baseURI = 'file://' + (isWindows ? '/' : '') + process.cwd() + '/';
    if (isWindows)
      baseURI = baseURI.replace(/\\/g, '/');
  }
  else {
    throw new TypeError('No environment baseURI');
  }

  try {
    var nativeURL = new __global.URL('test:///').protocol == 'test:';
  }
  catch(e) {}

  var URL = nativeURL ? __global.URL : __global.URLPolyfill;

/*
*********************************************************************************************

  Dynamic Module Loader Polyfill

    - Implemented exactly to the former 2014-08-24 ES6 Specification Draft Rev 27, Section 15
      http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts#august_24_2014_draft_rev_27

    - Functions are commented with their spec numbers, with spec differences commented.

    - Spec bugs are commented in this code with links.

    - Abstract functions have been combined where possible, and their associated functions
      commented.

    - Realm implementation is entirely omitted.

*********************************************************************************************
*/

function Module() {}
// http://www.ecma-international.org/ecma-262/6.0/#sec-@@tostringtag
defineProperty(Module.prototype, 'toString', {
  value: function() {
    return 'Module';
  }
});
function Loader(options) {
  this._loader = {
    loaderObj: this,
    loads: [],
    modules: {},
    importPromises: {},
    moduleRecords: {}
  };

  // 26.3.3.6
  defineProperty(this, 'global', {
    get: function() {
      return __global;
    }
  });

  // 26.3.3.13 realm not implemented
}

(function() {

// Some Helpers

// logs a linkset snapshot for debugging
/* function snapshot(loader) {
  console.log('---Snapshot---');
  for (var i = 0; i < loader.loads.length; i++) {
    var load = loader.loads[i];
    var linkSetLog = '  ' + load.name + ' (' + load.status + '): ';

    for (var j = 0; j < load.linkSets.length; j++) {
      linkSetLog += '{' + logloads(load.linkSets[j].loads) + '} ';
    }
    console.log(linkSetLog);
  }
  console.log('');
}
function logloads(loads) {
  var log = '';
  for (var k = 0; k < loads.length; k++)
    log += loads[k].name + (k != loads.length - 1 ? ' ' : '');
  return log;
} */


/* function checkInvariants() {
  // see https://bugs.ecmascript.org/show_bug.cgi?id=2603#c1

  var loads = System._loader.loads;
  var linkSets = [];

  for (var i = 0; i < loads.length; i++) {
    var load = loads[i];
    console.assert(load.status == 'loading' || load.status == 'loaded', 'Each load is loading or loaded');

    for (var j = 0; j < load.linkSets.length; j++) {
      var linkSet = load.linkSets[j];

      for (var k = 0; k < linkSet.loads.length; k++)
        console.assert(loads.indexOf(linkSet.loads[k]) != -1, 'linkSet loads are a subset of loader loads');

      if (linkSets.indexOf(linkSet) == -1)
        linkSets.push(linkSet);
    }
  }

  for (var i = 0; i < loads.length; i++) {
    var load = loads[i];
    for (var j = 0; j < linkSets.length; j++) {
      var linkSet = linkSets[j];

      if (linkSet.loads.indexOf(load) != -1)
        console.assert(load.linkSets.indexOf(linkSet) != -1, 'linkSet contains load -> load contains linkSet');

      if (load.linkSets.indexOf(linkSet) != -1)
        console.assert(linkSet.loads.indexOf(load) != -1, 'load contains linkSet -> linkSet contains load');
    }
  }

  for (var i = 0; i < linkSets.length; i++) {
    var linkSet = linkSets[i];
    for (var j = 0; j < linkSet.loads.length; j++) {
      var load = linkSet.loads[j];

      for (var k = 0; k < load.dependencies.length; k++) {
        var depName = load.dependencies[k].value;
        var depLoad;
        for (var l = 0; l < loads.length; l++) {
          if (loads[l].name != depName)
            continue;
          depLoad = loads[l];
          break;
        }

        // loading records are allowed not to have their dependencies yet
        // if (load.status != 'loading')
        //  console.assert(depLoad, 'depLoad found');

        // console.assert(linkSet.loads.indexOf(depLoad) != -1, 'linkset contains all dependencies');
      }
    }
  }
} */

  // 15.2.3 - Runtime Semantics: Loader State

  // 15.2.3.11
  function createLoaderLoad(object) {
    return {
      // modules is an object for ES5 implementation
      modules: {},
      loads: [],
      loaderObj: object
    };
  }

  // 15.2.3.2 Load Records and LoadRequest Objects

  var anonCnt = 0;

  // 15.2.3.2.1
  function createLoad(name) {
    return {
      status: 'loading',
      name: name || '<Anonymous' + ++anonCnt + '>',
      linkSets: [],
      dependencies: [],
      metadata: {}
    };
  }

  // 15.2.3.2.2 createLoadRequestObject, absorbed into calling functions

  // 15.2.4

  // 15.2.4.1
  function loadModule(loader, name, options) {
    return new Promise(asyncStartLoadPartwayThrough({
      step: options.address ? 'fetch' : 'locate',
      loader: loader,
      moduleName: name,
      // allow metadata for import https://bugs.ecmascript.org/show_bug.cgi?id=3091
      moduleMetadata: options && options.metadata || {},
      moduleSource: options.source,
      moduleAddress: options.address
    }));
  }

  // 15.2.4.2
  function requestLoad(loader, request, refererName, refererAddress) {
    // 15.2.4.2.1 CallNormalize
    return new Promise(function(resolve, reject) {
      resolve(loader.loaderObj.normalize(request, refererName, refererAddress));
    })
    // 15.2.4.2.2 GetOrCreateLoad
    .then(function(name) {
      var load;
      if (loader.modules[name]) {
        load = createLoad(name);
        load.status = 'linked';
        // https://bugs.ecmascript.org/show_bug.cgi?id=2795
        load.module = loader.modules[name];
        return load;
      }

      for (var i = 0, l = loader.loads.length; i < l; i++) {
        load = loader.loads[i];
        if (load.name != name)
          continue;
        return load;
      }

      load = createLoad(name);
      loader.loads.push(load);

      proceedToLocate(loader, load);

      return load;
    });
  }

  // 15.2.4.3
  function proceedToLocate(loader, load) {
    proceedToFetch(loader, load,
      Promise.resolve()
      // 15.2.4.3.1 CallLocate
      .then(function() {
        return loader.loaderObj.locate({ name: load.name, metadata: load.metadata });
      })
    );
  }

  // 15.2.4.4
  function proceedToFetch(loader, load, p) {
    proceedToTranslate(loader, load,
      p
      // 15.2.4.4.1 CallFetch
      .then(function(address) {
        // adjusted, see https://bugs.ecmascript.org/show_bug.cgi?id=2602
        if (load.status != 'loading')
          return;
        load.address = address;

        return loader.loaderObj.fetch({ name: load.name, metadata: load.metadata, address: address });
      })
    );
  }

  // 15.2.4.5
  function proceedToTranslate(loader, load, p) {
    p
    // 15.2.4.5.1 CallTranslate
    .then(function(source) {
      if (load.status != 'loading')
        return;

      load.address = load.address || load.name;

      return Promise.resolve(loader.loaderObj.translate({ name: load.name, metadata: load.metadata, address: load.address, source: source }))

      // 15.2.4.5.2 CallInstantiate
      .then(function(source) {
        load.source = source;
        return loader.loaderObj.instantiate({ name: load.name, metadata: load.metadata, address: load.address, source: source });
      })

      // 15.2.4.5.3 InstantiateSucceeded
      .then(function(instantiateResult) {
        if (instantiateResult === undefined)
          throw new TypeError('Declarative modules unsupported in the polyfill.');
        
        if (typeof instantiateResult != 'object')
          throw new TypeError('Invalid instantiate return value');

        load.depsList = instantiateResult.deps || [];
        load.execute = instantiateResult.execute;
      })
      // 15.2.4.6 ProcessLoadDependencies
      .then(function() {
        load.dependencies = [];
        var depsList = load.depsList;

        var loadPromises = [];
        for (var i = 0, l = depsList.length; i < l; i++) (function(request, index) {
          loadPromises.push(
            requestLoad(loader, request, load.name, load.address)

            // 15.2.4.6.1 AddDependencyLoad (load is parentLoad)
            .then(function(depLoad) {

              // adjusted from spec to maintain dependency order
              // this is due to the System.register internal implementation needs
              load.dependencies[index] = {
                key: request,
                value: depLoad.name
              };

              if (depLoad.status != 'linked') {
                var linkSets = load.linkSets.concat([]);
                for (var i = 0, l = linkSets.length; i < l; i++)
                  addLoadToLinkSet(linkSets[i], depLoad);
              }

              // console.log('AddDependencyLoad ' + depLoad.name + ' for ' + load.name);
              // snapshot(loader);
            })
          );
        })(depsList[i], i);

        return Promise.all(loadPromises);
      })

      // 15.2.4.6.2 LoadSucceeded
      .then(function() {
        // console.log('LoadSucceeded ' + load.name);
        // snapshot(loader);

        load.status = 'loaded';

        var linkSets = load.linkSets.concat([]);
        for (var i = 0, l = linkSets.length; i < l; i++)
          updateLinkSetOnLoad(linkSets[i], load);
      });
    })
    // 15.2.4.5.4 LoadFailed
    ['catch'](function(exc) {
      load.status = 'failed';
      load.exception = exc;

      var linkSets = load.linkSets.concat([]);
      for (var i = 0, l = linkSets.length; i < l; i++) {
        linkSetFailed(linkSets[i], load, exc);
      }

      console.assert(load.linkSets.length == 0, 'linkSets not removed');
    });
  }

  // 15.2.4.7 PromiseOfStartLoadPartwayThrough absorbed into calling functions

  // 15.2.4.7.1
  function asyncStartLoadPartwayThrough(stepState) {
    return function(resolve, reject) {
      var loader = stepState.loader;
      var name = stepState.moduleName;
      var step = stepState.step;

      if (loader.modules[name])
        throw new TypeError('"' + name + '" already exists in the module table');

      // adjusted to pick up existing loads
      var existingLoad;
      for (var i = 0, l = loader.loads.length; i < l; i++) {
        if (loader.loads[i].name == name) {
          existingLoad = loader.loads[i];

          if (step == 'translate' && !existingLoad.source) {
            existingLoad.address = stepState.moduleAddress;
            proceedToTranslate(loader, existingLoad, Promise.resolve(stepState.moduleSource));
          }

          // a primary load -> use that existing linkset if it is for the direct load here
          // otherwise create a new linkset unit
          if (existingLoad.linkSets.length && existingLoad.linkSets[0].loads[0].name == existingLoad.name)
            return existingLoad.linkSets[0].done.then(function() {
              resolve(existingLoad);
            });
        }
      }

      var load = existingLoad || createLoad(name);

      load.metadata = stepState.moduleMetadata;

      var linkSet = createLinkSet(loader, load);

      loader.loads.push(load);

      resolve(linkSet.done);

      if (step == 'locate')
        proceedToLocate(loader, load);

      else if (step == 'fetch')
        proceedToFetch(loader, load, Promise.resolve(stepState.moduleAddress));

      else {
        console.assert(step == 'translate', 'translate step');
        load.address = stepState.moduleAddress;
        proceedToTranslate(loader, load, Promise.resolve(stepState.moduleSource));
      }
    }
  }

  // Declarative linking functions run through alternative implementation:
  // 15.2.5.1.1 CreateModuleLinkageRecord not implemented
  // 15.2.5.1.2 LookupExport not implemented
  // 15.2.5.1.3 LookupModuleDependency not implemented

  // 15.2.5.2.1
  function createLinkSet(loader, startingLoad) {
    var linkSet = {
      loader: loader,
      loads: [],
      startingLoad: startingLoad, // added see spec bug https://bugs.ecmascript.org/show_bug.cgi?id=2995
      loadingCount: 0
    };
    linkSet.done = new Promise(function(resolve, reject) {
      linkSet.resolve = resolve;
      linkSet.reject = reject;
    });
    addLoadToLinkSet(linkSet, startingLoad);
    return linkSet;
  }
  // 15.2.5.2.2
  function addLoadToLinkSet(linkSet, load) {
    if (load.status == 'failed')
      return;

    for (var i = 0, l = linkSet.loads.length; i < l; i++)
      if (linkSet.loads[i] == load)
        return;

    linkSet.loads.push(load);
    load.linkSets.push(linkSet);

    // adjustment, see https://bugs.ecmascript.org/show_bug.cgi?id=2603
    if (load.status != 'loaded') {
      linkSet.loadingCount++;
    }

    var loader = linkSet.loader;

    for (var i = 0, l = load.dependencies.length; i < l; i++) {
      if (!load.dependencies[i])
        continue;

      var name = load.dependencies[i].value;

      if (loader.modules[name])
        continue;

      for (var j = 0, d = loader.loads.length; j < d; j++) {
        if (loader.loads[j].name != name)
          continue;

        addLoadToLinkSet(linkSet, loader.loads[j]);
        break;
      }
    }
    // console.log('add to linkset ' + load.name);
    // snapshot(linkSet.loader);
  }

  // linking errors can be generic or load-specific
  // this is necessary for debugging info
  function doLink(linkSet) {
    var error = false;
    try {
      link(linkSet, function(load, exc) {
        linkSetFailed(linkSet, load, exc);
        error = true;
      });
    }
    catch(e) {
      linkSetFailed(linkSet, null, e);
      error = true;
    }
    return error;
  }

  // 15.2.5.2.3
  function updateLinkSetOnLoad(linkSet, load) {
    // console.log('update linkset on load ' + load.name);
    // snapshot(linkSet.loader);

    console.assert(load.status == 'loaded' || load.status == 'linked', 'loaded or linked');

    linkSet.loadingCount--;

    if (linkSet.loadingCount > 0)
      return;

    // adjusted for spec bug https://bugs.ecmascript.org/show_bug.cgi?id=2995
    var startingLoad = linkSet.startingLoad;

    // non-executing link variation for loader tracing
    // on the server. Not in spec.
    /***/
    if (linkSet.loader.loaderObj.execute === false) {
      var loads = [].concat(linkSet.loads);
      for (var i = 0, l = loads.length; i < l; i++) {
        var load = loads[i];
        load.module = {
          name: load.name,
          module: _newModule({}),
          evaluated: true
        };
        load.status = 'linked';
        finishLoad(linkSet.loader, load);
      }
      return linkSet.resolve(startingLoad);
    }
    /***/

    var abrupt = doLink(linkSet);

    if (abrupt)
      return;

    console.assert(linkSet.loads.length == 0, 'loads cleared');

    linkSet.resolve(startingLoad);
  }

  // 15.2.5.2.4
  function linkSetFailed(linkSet, load, exc) {
    var loader = linkSet.loader;
    var requests;

    checkError: 
    if (load) {
      if (linkSet.loads[0].name == load.name) {
        exc = addToError(exc, 'Error loading ' + load.name);
      }
      else {
        for (var i = 0; i < linkSet.loads.length; i++) {
          var pLoad = linkSet.loads[i];
          for (var j = 0; j < pLoad.dependencies.length; j++) {
            var dep = pLoad.dependencies[j];
            if (dep.value == load.name) {
              exc = addToError(exc, 'Error loading ' + load.name + ' as "' + dep.key + '" from ' + pLoad.name);
              break checkError;
            }
          }
        }
        exc = addToError(exc, 'Error loading ' + load.name + ' from ' + linkSet.loads[0].name);
      }
    }
    else {
      exc = addToError(exc, 'Error linking ' + linkSet.loads[0].name);
    }


    var loads = linkSet.loads.concat([]);
    for (var i = 0, l = loads.length; i < l; i++) {
      var load = loads[i];

      // store all failed load records
      loader.loaderObj.failed = loader.loaderObj.failed || [];
      if (indexOf.call(loader.loaderObj.failed, load) == -1)
        loader.loaderObj.failed.push(load);

      var linkIndex = indexOf.call(load.linkSets, linkSet);
      console.assert(linkIndex != -1, 'link not present');
      load.linkSets.splice(linkIndex, 1);
      if (load.linkSets.length == 0) {
        var globalLoadsIndex = indexOf.call(linkSet.loader.loads, load);
        if (globalLoadsIndex != -1)
          linkSet.loader.loads.splice(globalLoadsIndex, 1);
      }
    }
    linkSet.reject(exc);
  }

  // 15.2.5.2.5
  function finishLoad(loader, load) {
    // add to global trace if tracing
    if (loader.loaderObj.trace) {
      if (!loader.loaderObj.loads)
        loader.loaderObj.loads = {};
      var depMap = {};
      load.dependencies.forEach(function(dep) {
        depMap[dep.key] = dep.value;
      });
      loader.loaderObj.loads[load.name] = {
        name: load.name,
        deps: load.dependencies.map(function(dep){ return dep.key }),
        depMap: depMap,
        address: load.address,
        metadata: load.metadata,
        source: load.source
      };
    }
    // if not anonymous, add to the module table
    if (load.name) {
      console.assert(!loader.modules[load.name] || loader.modules[load.name].module === load.module.module, 'load not in module table');
      loader.modules[load.name] = load.module;
    }
    var loadIndex = indexOf.call(loader.loads, load);
    if (loadIndex != -1)
      loader.loads.splice(loadIndex, 1);
    for (var i = 0, l = load.linkSets.length; i < l; i++) {
      loadIndex = indexOf.call(load.linkSets[i].loads, load);
      if (loadIndex != -1)
        load.linkSets[i].loads.splice(loadIndex, 1);
    }
    load.linkSets.splice(0, load.linkSets.length);
  }

  function doDynamicExecute(linkSet, load, linkError) {
    try {
      var module = load.execute();
    }
    catch(e) {
      linkError(load, e);
      return;
    }
    if (!module || !(module instanceof Module))
      linkError(load, new TypeError('Execution must define a Module instance'));
    else
      return module;
  }

  // 26.3 Loader

  // 26.3.1.1
  // defined at top

  // importPromises adds ability to import a module twice without error - https://bugs.ecmascript.org/show_bug.cgi?id=2601
  function createImportPromise(loader, name, promise) {
    var importPromises = loader._loader.importPromises;
    return importPromises[name] = promise.then(function(m) {
      importPromises[name] = undefined;
      return m;
    }, function(e) {
      importPromises[name] = undefined;
      throw e;
    });
  }

  Loader.prototype = {
    // 26.3.3.1
    constructor: Loader,
    // 26.3.3.2
    define: function(name, source, options) {
      // check if already defined
      if (this._loader.importPromises[name])
        throw new TypeError('Module is already loading.');
      return createImportPromise(this, name, new Promise(asyncStartLoadPartwayThrough({
        step: 'translate',
        loader: this._loader,
        moduleName: name,
        moduleMetadata: options && options.metadata || {},
        moduleSource: source,
        moduleAddress: options && options.address
      })));
    },
    // 26.3.3.3
    'delete': function(name) {
      var loader = this._loader;
      delete loader.importPromises[name];
      delete loader.moduleRecords[name];
      return loader.modules[name] ? delete loader.modules[name] : false;
    },
    // 26.3.3.4 entries not implemented
    // 26.3.3.5
    get: function(key) {
      if (!this._loader.modules[key])
        return;
      return this._loader.modules[key].module;
    },
    // 26.3.3.7
    has: function(name) {
      return !!this._loader.modules[name];
    },
    // 26.3.3.8
    'import': function(name, parentName, parentAddress) {
      if (typeof parentName == 'object')
        parentName = parentName.name;

      // run normalize first
      var loaderObj = this;

      // added, see https://bugs.ecmascript.org/show_bug.cgi?id=2659
      return Promise.resolve(loaderObj.normalize(name, parentName))
      .then(function(name) {
        var loader = loaderObj._loader;

        if (loader.modules[name])
          return loader.modules[name].module;

        return loader.importPromises[name] || createImportPromise(loaderObj, name,
          loadModule(loader, name, {})
          .then(function(load) {
            delete loader.importPromises[name];
            return load.module.module;
          }));
      });
    },
    // 26.3.3.9 keys not implemented
    // 26.3.3.10
    load: function(name) {
      var loader = this._loader;
      if (loader.modules[name])
        return Promise.resolve();
      return loader.importPromises[name] || createImportPromise(this, name, new Promise(asyncStartLoadPartwayThrough({
        step: 'locate',
        loader: loader,
        moduleName: name,
        moduleMetadata: {},
        moduleSource: undefined,
        moduleAddress: undefined
      }))
      .then(function() {
        delete loader.importPromises[name];
      }));
    },
    // 26.3.3.11
    module: function(source, options) {
      var load = createLoad();
      load.address = options && options.address;
      var linkSet = createLinkSet(this._loader, load);
      var sourcePromise = Promise.resolve(source);
      var loader = this._loader;
      var p = linkSet.done.then(function() {
        return load.module.module;
      });
      proceedToTranslate(loader, load, sourcePromise);
      return p;
    },
    // 26.3.3.12
    newModule: function (obj) {
      if (typeof obj != 'object')
        throw new TypeError('Expected object');

      var m = new Module();

      var pNames = [];
      if (Object.getOwnPropertyNames && obj != null)
        pNames = Object.getOwnPropertyNames(obj);
      else
        for (var key in obj)
          pNames.push(key);

      for (var i = 0; i < pNames.length; i++) (function(key) {
        defineProperty(m, key, {
          configurable: false,
          enumerable: true,
          get: function () {
            return obj[key];
          },
          set: function() {
            throw new Error('Module exports cannot be changed externally.');
          }
        });
      })(pNames[i]);

      if (Object.freeze)
        Object.freeze(m);

      return m;
    },
    // 26.3.3.14
    set: function(name, module) {
      if (!(module instanceof Module))
        throw new TypeError('Loader.set(' + name + ', module) must be a module');
      this._loader.modules[name] = {
        module: module
      };
    },
    // 26.3.3.15 values not implemented
    // 26.3.3.16 @@iterator not implemented
    // 26.3.3.17 @@toStringTag not implemented

    // 26.3.3.18.1
    normalize: function(name, referrerName, referrerAddress) {},
    // 26.3.3.18.2
    locate: function(load) {
      return load.name;
    },
    // 26.3.3.18.3
    fetch: function(load) {
    },
    // 26.3.3.18.4
    translate: function(load) {
      return load.source;
    },
    // 26.3.3.18.5
    instantiate: function(load) {
    }
  };

  var _newModule = Loader.prototype.newModule;

/*
 * ES6 Module Declarative Linking Code
 */
  function link(linkSet, linkError) {

    var loader = linkSet.loader;

    if (!linkSet.loads.length)
      return;

    var loads = linkSet.loads.concat([]);

    for (var i = 0; i < loads.length; i++) {
      var load = loads[i];

      var module = doDynamicExecute(linkSet, load, linkError);
      if (!module)
        return;
      load.module = {
        name: load.name,
        module: module
      };
      load.status = 'linked';

      finishLoad(loader, load);
    }
  }

})();

var System;

  var fetchTextFromURL;
  if (typeof XMLHttpRequest != 'undefined') {
    fetchTextFromURL = function(url, authorization, fulfill, reject) {
      var xhr = new XMLHttpRequest();
      var sameDomain = true;
      var doTimeout = false;
      if (!('withCredentials' in xhr)) {
        // check if same domain
        var domainCheck = /^(\w+:)?\/\/([^\/]+)/.exec(url);
        if (domainCheck) {
          sameDomain = domainCheck[2] === window.location.host;
          if (domainCheck[1])
            sameDomain &= domainCheck[1] === window.location.protocol;
        }
      }
      if (!sameDomain && typeof XDomainRequest != 'undefined') {
        xhr = new XDomainRequest();
        xhr.onload = load;
        xhr.onerror = error;
        xhr.ontimeout = error;
        xhr.onprogress = function() {};
        xhr.timeout = 0;
        doTimeout = true;
      }
      function load() {
        fulfill(xhr.responseText);
      }
      function error() {
        reject(new Error('XHR error' + (xhr.status ? ' (' + xhr.status + (xhr.statusText ? ' ' + xhr.statusText  : '') + ')' : '') + ' loading ' + url));
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          // in Chrome on file:/// URLs, status is 0
          if (xhr.status == 0) {
            if (xhr.responseText) {
              load();
            }
            else {
              // when responseText is empty, wait for load or error event
              // to inform if it is a 404 or empty file
              xhr.addEventListener('error', error);
              xhr.addEventListener('load', load);
            }
          }
          else if (xhr.status === 200) {
            load();
          }
          else {
            error();
          }
        }
      };
      xhr.open("GET", url, true);

      if (xhr.setRequestHeader) {
        xhr.setRequestHeader('Accept', 'application/x-es-module, */*');
        // can set "authorization: true" to enable withCredentials only
        if (authorization) {
          if (typeof authorization == 'string')
            xhr.setRequestHeader('Authorization', authorization);
          xhr.withCredentials = true;
        }
      }

      if (doTimeout) {
        setTimeout(function() {
          xhr.send();
        }, 0);
      } else {
        xhr.send(null);
      }
    };
  }
  else if (typeof require != 'undefined' && typeof process != 'undefined') {
    var fs;
    fetchTextFromURL = function(url, authorization, fulfill, reject) {
      if (url.substr(0, 8) != 'file:///')
        throw new Error('Unable to fetch "' + url + '". Only file URLs of the form file:/// allowed running in Node.');
      fs = fs || require('fs');
      if (isWindows)
        url = url.replace(/\//g, '\\').substr(8);
      else
        url = url.substr(7);
      return fs.readFile(url, function(err, data) {
        if (err) {
          return reject(err);
        }
        else {
          // Strip Byte Order Mark out if it's the leading char
          var dataString = data + '';
          if (dataString[0] === '\ufeff')
            dataString = dataString.substr(1);

          fulfill(dataString);
        }
      });
    };
  }
  else if (typeof self != 'undefined' && typeof self.fetch != 'undefined') {
    fetchTextFromURL = function(url, authorization, fulfill, reject) {
      var opts = {
        headers: {'Accept': 'application/x-es-module, */*'}
      };

      if (authorization) {
        if (typeof authorization == 'string')
          opts.headers['Authorization'] = authorization;
        opts.credentials = 'include';
      }

      fetch(url, opts)
        .then(function (r) {
          if (r.ok) {
            return r.text();
          } else {
            throw new Error('Fetch error: ' + r.status + ' ' + r.statusText);
          }
        })
        .then(fulfill, reject);
    }
  }
  else {
    throw new TypeError('No environment fetch API available.');
  }
/*
 * Traceur, Babel and TypeScript transpile hook for Loader
 */
var transpile = (function() {

  // use Traceur by default
  Loader.prototype.transpiler = 'traceur';

  function transpile(load) {
    var self = this;

    return Promise.resolve(__global[self.transpiler == 'typescript' ? 'ts' : self.transpiler]
        || (self.pluginLoader || self)['import'](self.transpiler))
    .then(function(transpiler) {
      if (transpiler.__useDefault)
        transpiler = transpiler['default'];

      var transpileFunction;
      if (transpiler.Compiler)
        transpileFunction = traceurTranspile;
      else if (transpiler.createLanguageService)
        transpileFunction = typescriptTranspile;
      else
        transpileFunction = babelTranspile;

      // note __moduleName will be part of the transformer meta in future when we have the spec for this
      return '(function(__moduleName){' + transpileFunction.call(self, load, transpiler) + '\n})("' + load.name + '");\n//# sourceURL=' + load.address + '!transpiled';
    });
  };

  function traceurTranspile(load, traceur) {
    var options = this.traceurOptions || {};
    options.modules = 'instantiate';
    options.script = false;
    if (options.sourceMaps === undefined)
      options.sourceMaps = 'inline';
    options.filename = load.address;
    options.inputSourceMap = load.metadata.sourceMap;
    options.moduleName = false;

    var compiler = new traceur.Compiler(options);

    return doTraceurCompile(load.source, compiler, options.filename);
  }
  function doTraceurCompile(source, compiler, filename) {
    try {
      return compiler.compile(source, filename);
    }
    catch(e) {
      // on older versions of traceur (<0.9.3), an array of errors is thrown
      // rather than a single error.
      if (e.length) {
        throw e[0];
      }
      throw e;
    }
  }

  function babelTranspile(load, babel) {
    var options = this.babelOptions || {};
    options.modules = 'system';
    if (options.sourceMap === undefined)
      options.sourceMap = 'inline';
    options.inputSourceMap = load.metadata.sourceMap;
    options.filename = load.address;
    options.code = true;
    options.ast = false;

    return babel.transform(load.source, options).code;
  }

  function typescriptTranspile(load, ts) {
    var options = this.typescriptOptions || {};
    options.target = options.target || ts.ScriptTarget.ES5;
    if (options.sourceMap === undefined)
      options.sourceMap = true;
    if (options.sourceMap && options.inlineSourceMap !== false)
      options.inlineSourceMap = true;

    options.module = ts.ModuleKind.System;

    return ts.transpile(load.source, options, load.address);
  }

  return transpile;
})();
// SystemJS Loader Class and Extension helpers
function SystemJSLoader() {
  Loader.call(this);

  this.paths = {};
  this._loader.paths = {};

  systemJSConstructor.call(this);
}

// inline Object.create-style class extension
function SystemProto() {};
SystemProto.prototype = Loader.prototype;
SystemJSLoader.prototype = new SystemProto();
SystemJSLoader.prototype.constructor = SystemJSLoader;

var systemJSConstructor;

function hook(name, hook) {
  SystemJSLoader.prototype[name] = hook(SystemJSLoader.prototype[name] || function() {});
}
function hookConstructor(hook) {
  systemJSConstructor = hook(systemJSConstructor || function() {});
}


var absURLRegEx = /^[^\/]+:\/\//;
function isAbsolute(name) {
  return name.match(absURLRegEx);
}
function isRel(name) {
  return (name[0] == '.' && (!name[1] || name[1] == '/' || name[1] == '.')) || name[0] == '/';
}
function isPlain(name) {
  return !isRel(name) && !isAbsolute(name);
}

var baseURIObj = new URL(baseURI);

function urlResolve(name, parent) {
  // url resolution shortpaths
  if (name[0] == '.') {
    // dot-relative url normalization
    if (name[1] == '/' && name[2] != '.')
      return (parent && parent.substr(0, parent.lastIndexOf('/') + 1) || baseURI) + name.substr(2);
  }
  else if (name[0] != '/' && name.indexOf(':') == -1) {
    // plain parent normalization
    return (parent && parent.substr(0, parent.lastIndexOf('/') + 1) || baseURI) + name;
  }

  return new URL(name, parent && parent.replace(/#/g, '%05') || baseURIObj).href.replace(/%05/g, '#');
}

// NB no specification provided for System.paths, used ideas discussed in https://github.com/jorendorff/js-loaders/issues/25
function applyPaths(loader, name) {
  // most specific (most number of slashes in path) match wins
  var pathMatch = '', wildcard, maxWildcardPrefixLen = 0;

  var paths = loader.paths;
  var pathsCache = loader._loader.paths;

  // check to see if we have a paths entry
  for (var p in paths) {
    if (paths.hasOwnProperty && !paths.hasOwnProperty(p))
      continue;

    // paths sanitization
    var path = paths[p];
    if (path !== pathsCache[p])
      path = paths[p] = pathsCache[p] = urlResolve(paths[p], isRel(paths[p]) ? baseURI : loader.baseURL);

    // exact path match
    if (p.indexOf('*') === -1) {
      if (name == p)
        return paths[p];
      
      // support trailing / in paths rules
      else if (name.substr(0, p.length - 1) == p.substr(0, p.length - 1) && (name.length < p.length || name[p.length - 1] == p[p.length - 1]) && (paths[p][paths[p].length - 1] == '/' || paths[p] == '')) {
        return paths[p].substr(0, paths[p].length - 1) + (name.length > p.length ? (paths[p] && '/' || '') + name.substr(p.length) : '');
      }
    }
    // wildcard path match
    else {
      var pathParts = p.split('*');
      if (pathParts.length > 2)
        throw new TypeError('Only one wildcard in a path is permitted');

      var wildcardPrefixLen = pathParts[0].length;
      if (wildcardPrefixLen >= maxWildcardPrefixLen &&
          name.substr(0, pathParts[0].length) == pathParts[0] &&
          name.substr(name.length - pathParts[1].length) == pathParts[1]) {
            maxWildcardPrefixLen = wildcardPrefixLen;
            pathMatch = p;
            wildcard = name.substr(pathParts[0].length, name.length - pathParts[1].length - pathParts[0].length);
          }
    }
  }

  var outPath = paths[pathMatch];
  if (typeof wildcard == 'string')
    outPath = outPath.replace('*', wildcard);

  return outPath;
}

function dedupe(deps) {
  var newDeps = [];
  for (var i = 0, l = deps.length; i < l; i++)
    if (indexOf.call(newDeps, deps[i]) == -1)
      newDeps.push(deps[i])
  return newDeps;
}

function group(deps) {
  var names = [];
  var indices = [];
  for (var i = 0, l = deps.length; i < l; i++) {
    var index = indexOf.call(names, deps[i]);
    if (index === -1) {
      names.push(deps[i]);
      indices.push([i]);
    }
    else {
      indices[index].push(i);
    }
  }
  return { names: names, indices: indices };
}

var getOwnPropertyDescriptor = true;
try {
  Object.getOwnPropertyDescriptor({ a: 0 }, 'a');
}
catch(e) {
  getOwnPropertyDescriptor = false;
}

// converts any module.exports object into an object ready for SystemJS.newModule
function getESModule(exports) {
  var esModule = {};
  // don't trigger getters/setters in environments that support them
  if ((typeof exports == 'object' || typeof exports == 'function') && exports !== __global) {
      if (getOwnPropertyDescriptor) {
        for (var p in exports) {
          // The default property is copied to esModule later on
          if (p === 'default')
            continue;
          defineOrCopyProperty(esModule, exports, p);
        }
      }
      else {
        extend(esModule, exports);
      }
  }
  esModule['default'] = exports;
  defineProperty(esModule, '__useDefault', {
    value: true
  });
  return esModule;
}

function defineOrCopyProperty(targetObj, sourceObj, propName) {
  try {
    var d;
    if (d = Object.getOwnPropertyDescriptor(sourceObj, propName))
      defineProperty(targetObj, propName, d);
  }
  catch (ex) {
    // Object.getOwnPropertyDescriptor threw an exception, fall back to normal set property
    // we dont need hasOwnProperty here because getOwnPropertyDescriptor would have returned undefined above
    targetObj[propName] = sourceObj[propName];
    return false;
  }
}

function extend(a, b, prepend) {
  var hasOwnProperty = b && b.hasOwnProperty;
  for (var p in b) {
    if (hasOwnProperty && !b.hasOwnProperty(p))
      continue;
    if (!prepend || !(p in a))
      a[p] = b[p];
  }
  return a;
}

// meta first-level extends where:
// array + array appends
// object + object extends
// other properties replace
function extendMeta(a, b, prepend) {
  var hasOwnProperty = b && b.hasOwnProperty;
  for (var p in b) {
    if (hasOwnProperty && !b.hasOwnProperty(p))
      continue;
    var val = b[p];
    if (!(p in a))
      a[p] = val;
    else if (val instanceof Array && a[p] instanceof Array)
      a[p] = [].concat(prepend ? val : a[p]).concat(prepend ? a[p] : val);
    else if (typeof val == 'object' && val !== null && typeof a[p] == 'object')
      a[p] = extend(extend({}, a[p]), val, prepend);
    else if (!prepend)
      a[p] = val;
  }
}

function extendPkgConfig(pkgCfgA, pkgCfgB, pkgName, loader, warnInvalidProperties) {
  for (var prop in pkgCfgB) {
    if (indexOf.call(['main', 'format', 'defaultExtension', 'basePath'], prop) != -1) {
      pkgCfgA[prop] = pkgCfgB[prop];
    }
    else if (prop == 'map') {
      extend(pkgCfgA.map = pkgCfgA.map || {}, pkgCfgB.map);
    }
    else if (prop == 'meta') {
      extend(pkgCfgA.meta = pkgCfgA.meta || {}, pkgCfgB.meta);
    }
    else if (prop == 'depCache') {
      for (var d in pkgCfgB.depCache) {
        var dNormalized;

        if (d.substr(0, 2) == './')
          dNormalized = pkgName + '/' + d.substr(2);
        else
          dNormalized = coreResolve.call(loader, d);
        loader.depCache[dNormalized] = (loader.depCache[dNormalized] || []).concat(pkgCfgB.depCache[d]);
      }
    }
    else if (warnInvalidProperties && indexOf.call(['browserConfig', 'nodeConfig', 'devConfig', 'productionConfig'], prop) == -1 && 
        (!pkgCfgB.hasOwnProperty || pkgCfgB.hasOwnProperty(prop))) {
      warn.call(loader, '"' + prop + '" is not a valid package configuration option in package ' + pkgName);
    }
  }
}

// deeply-merge (to first level) config with any existing package config
function setPkgConfig(loader, pkgName, cfg, prependConfig) {
  var pkg;

  // first package is config by reference for fast path, cloned after that
  if (!loader.packages[pkgName]) {
    pkg = loader.packages[pkgName] = cfg;
  }
  else {
    var basePkg = loader.packages[pkgName];
    pkg = loader.packages[pkgName] = {};

    extendPkgConfig(pkg, prependConfig ? cfg : basePkg, pkgName, loader, prependConfig);
    extendPkgConfig(pkg, prependConfig ? basePkg : cfg, pkgName, loader, !prependConfig);
  }
  
  // main object becomes main map
  if (typeof pkg.main == 'object') {
    pkg.map = pkg.map || {};
    pkg.map['./@main'] = pkg.main;
    pkg.main['default'] = pkg.main['default'] || './';
    pkg.main = '@main';
  }

  return pkg;
}

function warn(msg) {
  if (this.warnings && typeof console != 'undefined' && console.warn)
    console.warn(msg);
}
// we define a __exec for globally-scoped execution
// used by module format implementations
var __exec;

(function() {

  var hasBuffer = typeof Buffer != 'undefined';
  try {
    if (hasBuffer && new Buffer('a').toString('base64') != 'YQ==')
      hasBuffer = false;
  }
  catch(e) {
    hasBuffer = false;
  }

  var sourceMapPrefix = '\n//# sourceMappingURL=data:application/json;base64,';
  function inlineSourceMap(sourceMapString) {
    if (hasBuffer)
      return sourceMapPrefix + new Buffer(sourceMapString).toString('base64');
    else if (typeof btoa != 'undefined')
      return sourceMapPrefix + btoa(unescape(encodeURIComponent(sourceMapString)));
    else
      return '';
  }

  function getSource(load, wrap) {
    var lastLineIndex = load.source.lastIndexOf('\n');

    // wrap ES formats with a System closure for System global encapsulation
    if (load.metadata.format == 'global')
      wrap = false;

    var sourceMap = load.metadata.sourceMap;
    if (sourceMap) {
      if (typeof sourceMap != 'object')
        throw new TypeError('load.metadata.sourceMap must be set to an object.');

      sourceMap = JSON.stringify(sourceMap);
    }

    return (wrap ? '(function(System, SystemJS) {' : '') + load.source + (wrap ? '\n})(System, System);' : '')
        // adds the sourceURL comment if not already present
        + (load.source.substr(lastLineIndex, 15) != '\n//# sourceURL='
          ? '\n//# sourceURL=' + load.address + (sourceMap ? '!transpiled' : '') : '')
        // add sourceMappingURL if load.metadata.sourceMap is set
        + (sourceMap && inlineSourceMap(sourceMap) || '');
  }

  var curLoad;

  // System.register, System.registerDynamic, AMD define pipeline
  // if currently evalling code here, immediately reduce the registered entry against the load record
  hook('pushRegister_', function() {
    return function(register) {
      if (!curLoad)
        return false;

      this.reduceRegister_(curLoad, register);
      return true;
    };
  });

  // System clobbering protection (mostly for Traceur)
  var curSystem;
  var callCounter = 0;
  function preExec(loader, load) {
    curLoad = load;
    if (callCounter++ == 0)
      curSystem = __global.System;
    __global.System = __global.SystemJS = loader;
  }
  function postExec() {
    if (--callCounter == 0)
      __global.System = __global.SystemJS = curSystem;
    curLoad = undefined;
  }

  var useVm;
  var vm;
  __exec = function(load) {
    if (!load.source)
      return;
    if ((load.metadata.integrity || load.metadata.nonce) && supportsScriptExec)
      return scriptExec.call(this, load);
    try {
      preExec(this, load);
      curLoad = load;
      // global scoped eval for node (avoids require scope leak)
      if (!vm && this._nodeRequire) {
        vm = this._nodeRequire('vm');
        useVm = vm.runInThisContext("typeof System !== 'undefined' && System") === this;
      }
      if (useVm)
        vm.runInThisContext(getSource(load, true), { filename: load.address + (load.metadata.sourceMap ? '!transpiled' : '') });
      else
        (0, eval)(getSource(load, true));
      postExec();
    }
    catch(e) {
      postExec();
      throw addToError(e, 'Evaluating ' + load.address);
    }
  };

  var supportsScriptExec = false;
  if (isBrowser && typeof document != 'undefined' && document.getElementsByTagName) {
    if (!(window.chrome && window.chrome.extension || navigator.userAgent.match(/^Node\.js/)))
      supportsScriptExec = true;
  }

  // script execution via injecting a script tag into the page
  // this allows CSP integrity and nonce to be set for CSP environments
  var head;
  function scriptExec(load) {
    if (!head)
      head = document.head || document.body || document.documentElement;

    var script = document.createElement('script');
    script.text = getSource(load, false);
    var onerror = window.onerror;
    var e;
    window.onerror = function(_e) {
      e = addToError(_e, 'Evaluating ' + load.address);
      if (onerror)
        onerror.apply(this, arguments);
    }
    preExec(this, load);

    if (load.metadata.integrity)
      script.setAttribute('integrity', load.metadata.integrity);
    if (load.metadata.nonce)
      script.setAttribute('nonce', load.metadata.nonce);

    head.appendChild(script);
    head.removeChild(script);
    postExec();
    window.onerror = onerror;
    if (e)
      throw e;
  }

})();
function readMemberExpression(p, value) {
  var pParts = p.split('.');
  while (pParts.length)
    value = value[pParts.shift()];
  return value;
}

function getMapMatch(map, name) {
  var bestMatch, bestMatchLength = 0;

  for (var p in map) {
    if (name.substr(0, p.length) == p && (name.length == p.length || name[p.length] == '/')) {
      var curMatchLength = p.split('/').length;
      if (curMatchLength <= bestMatchLength)
        continue;
      bestMatch = p;
      bestMatchLength = curMatchLength;
    }
  }

  return bestMatch;
}

function prepareBaseURL(loader) {
  // ensure baseURl is fully normalized
  if (this._loader.baseURL !== this.baseURL) {
    if (this.baseURL[this.baseURL.length - 1] != '/')
      this.baseURL += '/';
    
    this._loader.baseURL = this.baseURL = new URL(this.baseURL, baseURIObj).href;
  }
}

var envModule;
function setProduction(isProduction, isBuilder) {
  this.set('@system-env', envModule = this.newModule({
    browser: isBrowser,
    node: !!this._nodeRequire,
    production: !isBuilder && isProduction,
    dev: isBuilder || !isProduction,
    build: isBuilder,
    'default': true
  }));
}

hookConstructor(function(constructor) {
  return function() {
    constructor.call(this);

    // support baseURL
    this.baseURL = baseURI;

    // support map and paths
    this.map = {};

    // make the location of the system.js script accessible
    if (typeof $__curScript != 'undefined')
      this.scriptSrc = $__curScript.src;

    // global behaviour flags
    this.warnings = false;
    this.defaultJSExtensions = false;
    this.pluginFirst = false;
    this.loaderErrorStack = false;

    // by default load ".json" files as json
    // leading * meta doesn't need normalization
    // NB add this in next breaking release
    // this.meta['*.json'] = { format: 'json' };

    // support the empty module, as a concept
    this.set('@empty', this.newModule({}));

    setProduction.call(this, false, false);
  };
});

// include the node require since we're overriding it
if (typeof require != 'undefined' && typeof process != 'undefined' && !process.browser)
  SystemJSLoader.prototype._nodeRequire = require;

/*
  Core SystemJS Normalization

  If a name is relative, we apply URL normalization to the page
  If a name is an absolute URL, we leave it as-is

  Plain names (neither of the above) run through the map and paths
  normalization phases.

  The paths normalization phase applies last (paths extension), which
  defines the `decanonicalize` function and normalizes everything into
  a URL.
 */

var parentModuleContext;
function getNodeModule(name, baseURL) {
  if (!isPlain(name))
    throw new Error('Node module ' + name + ' can\'t be loaded as it is not a package require.');

  if (!parentModuleContext) {
    var Module = this._nodeRequire('module');
    var base = baseURL.substr(isWindows ? 8 : 7);
    parentModuleContext = new Module(base);
    parentModuleContext.paths = Module._nodeModulePaths(base);
  }
  return parentModuleContext.require(name);
}

function coreResolve(name, parentName) {
  // standard URL resolution
  if (isRel(name))
    return urlResolve(name, parentName);
  else if (isAbsolute(name))
    return name;

  // plain names not starting with './', '://' and '/' go through custom resolution
  var mapMatch = getMapMatch(this.map, name);

  if (mapMatch) {
    name = this.map[mapMatch] + name.substr(mapMatch.length);

    if (isRel(name))
      return urlResolve(name);
    else if (isAbsolute(name))
      return name;
  }

  if (this.has(name))
    return name;
  
  // dynamically load node-core modules when requiring `@node/fs` for example
  if (name.substr(0, 6) == '@node/') {
    if (!this._nodeRequire)
      throw new TypeError('Error loading ' + name + '. Can only load node core modules in Node.');
    if (this.builder)
      this.set(name, this.newModule({}));
    else
      this.set(name, this.newModule(getESModule(getNodeModule.call(this, name.substr(6), this.baseURL))));
    return name;
  }

  // prepare the baseURL to ensure it is normalized
  prepareBaseURL.call(this);

  return applyPaths(this, name) || this.baseURL + name;
}

hook('normalize', function(normalize) {
  return function(name, parentName, skipExt) {
    var resolved = coreResolve.call(this, name, parentName);
    if (this.defaultJSExtensions && !skipExt && resolved.substr(resolved.length - 3, 3) != '.js' && !isPlain(resolved))
      resolved += '.js';
    return resolved;
  };
});

// percent encode just '#' in urls if using HTTP requests
var httpRequest = typeof XMLHttpRequest != 'undefined';
hook('locate', function(locate) {
  return function(load) {
    return Promise.resolve(locate.call(this, load))
    .then(function(address) {
      if (httpRequest)
        return address.replace(/#/g, '%23');
      return address;
    });
  };
});

/*
 * Fetch with authorization
 */
hook('fetch', function() {
  return function(load) {
    return new Promise(function(resolve, reject) {
      fetchTextFromURL(load.address, load.metadata.authorization, resolve, reject);
    });
  };
});

/*
  __useDefault
  
  When a module object looks like:
  newModule(
    __useDefault: true,
    default: 'some-module'
  })

  Then importing that module provides the 'some-module'
  result directly instead of the full module.

  Useful for eg module.exports = function() {}
*/
hook('import', function(systemImport) {
  return function(name, parentName, parentAddress) {
    if (parentName && parentName.name)
      warn.call(this, 'SystemJS.import(name, { name: parentName }) is deprecated for SystemJS.import(name, parentName), while importing ' + name + ' from ' + parentName.name);
    return systemImport.call(this, name, parentName, parentAddress).then(function(module) {
      return module.__useDefault ? module['default'] : module;
    });
  };
});

/*
 * Allow format: 'detect' meta to enable format detection
 */
hook('translate', function(systemTranslate) {
  return function(load) {
    if (load.metadata.format == 'detect')
      load.metadata.format = undefined;
    return systemTranslate.apply(this, arguments);
  };
});


/*
 * JSON format support
 *
 * Supports loading JSON files as a module format itself
 *
 * Usage:
 *
 * SystemJS.config({
 *   meta: {
 *     '*.json': { format: 'json' }
 *   }
 * });
 *
 * Module is returned as if written:
 *
 * export default {JSON}
 *
 * No named exports are provided
 *
 * Files ending in ".json" are treated as json automatically by SystemJS
 */
hook('instantiate', function(instantiate) {
  return function(load) {
    if (load.metadata.format == 'json' && !this.builder) {
      var entry = load.metadata.entry = createEntry();
      entry.deps = [];
      entry.execute = function() {
        try {
          return JSON.parse(load.source);
        }
        catch(e) {
          throw new Error("Invalid JSON file " + load.name);
        }
      };
    }
  };
})

/*
 Extend config merging one deep only

  loader.config({
    some: 'random',
    config: 'here',
    deep: {
      config: { too: 'too' }
    }
  });

  <=>

  loader.some = 'random';
  loader.config = 'here'
  loader.deep = loader.deep || {};
  loader.deep.config = { too: 'too' };


  Normalizes meta and package configs allowing for:

  SystemJS.config({
    meta: {
      './index.js': {}
    }
  });

  To become

  SystemJS.meta['https://thissite.com/index.js'] = {};

  For easy normalization canonicalization with latest URL support.

*/
function envSet(loader, cfg, envCallback) {
  if (envModule.browser && cfg.browserConfig)
    envCallback(cfg.browserConfig);
  if (envModule.node && cfg.nodeConfig)
    envCallback(cfg.nodeConfig);
  if (envModule.dev && cfg.devConfig)
    envCallback(cfg.devConfig);
  if (envModule.build && cfg.buildConfig)
    envCallback(cfg.buildConfig);
  if (envModule.production && cfg.productionConfig)
    envCallback(cfg.productionConfig);
}

SystemJSLoader.prototype.getConfig = function(name) {
  var cfg = {};
  var loader = this;
  for (var p in loader) {
    if (loader.hasOwnProperty && !loader.hasOwnProperty(p) || p in SystemJSLoader.prototype && p != 'transpiler')
      continue;
    if (indexOf.call(['_loader', 'amdDefine', 'amdRequire', 'defined', 'failed', 'version', 'loads'], p) == -1)
      cfg[p] = loader[p];
  }
  cfg.production = envModule.production;
  return cfg;
};

var curCurScript;
SystemJSLoader.prototype.config = function(cfg, isEnvConfig) {
  var loader = this;

  if ('loaderErrorStack' in cfg) {
    curCurScript = $__curScript;
    if (cfg.loaderErrorStack)
      $__curScript = undefined;
    else
      $__curScript = curCurScript;
  }

  if ('warnings' in cfg)
    loader.warnings = cfg.warnings;

  // transpiler deprecation path
  if (cfg.transpilerRuntime === false)
    loader._loader.loadedTranspilerRuntime = true;

  if ('production' in cfg || 'build' in cfg)
    setProduction.call(loader, !!cfg.production, !!(cfg.build || envModule && envModule.build));

  if (!isEnvConfig) {
    // if using nodeConfig / browserConfig / productionConfig, take baseURL from there
    // these exceptions will be unnecessary when we can properly implement config queuings
    var baseURL;
    envSet(loader, cfg, function(cfg) {
      baseURL = baseURL || cfg.baseURL;
    });
    baseURL = baseURL || cfg.baseURL;

    // always configure baseURL first
    if (baseURL) {
      var hasConfig = false;
      function checkHasConfig(obj) {
        for (var p in obj)
          if (obj.hasOwnProperty(p))
            return true;
      }
      if (checkHasConfig(loader.packages) || checkHasConfig(loader.meta) || checkHasConfig(loader.depCache) || checkHasConfig(loader.bundles) || checkHasConfig(loader.packageConfigPaths))
        throw new TypeError('Incorrect configuration order. The baseURL must be configured with the first SystemJS.config call.');

      this.baseURL = baseURL;
      prepareBaseURL.call(this);
    }

    if (cfg.paths)
      extend(loader.paths, cfg.paths);

    envSet(loader, cfg, function(cfg) {
      if (cfg.paths)
        extend(loader.paths, cfg.paths);
    });

    // warn on wildcard path deprecations
    if (this.warnings) {
      for (var p in loader.paths)
        if (p.indexOf('*') != -1)
          warn.call(loader, 'Paths configuration "' + p + '" -> "' + loader.paths[p] + '" uses wildcards which are being deprecated for simpler trailing "/" folder paths.');
    }
  }

  if (cfg.defaultJSExtensions) {
    loader.defaultJSExtensions = cfg.defaultJSExtensions;
    warn.call(loader, 'The defaultJSExtensions configuration option is deprecated, use packages configuration instead.');
  }

  if (cfg.pluginFirst)
    loader.pluginFirst = cfg.pluginFirst;

  if (cfg.map) {
    var objMaps = '';
    for (var p in cfg.map) {
      var v = cfg.map[p];

      // object map backwards-compat into packages configuration
      if (typeof v !== 'string') {
        objMaps += (objMaps.length ? ', ' : '') + '"' + p + '"';

        var defaultJSExtension = loader.defaultJSExtensions && p.substr(p.length - 3, 3) != '.js';
        var prop = loader.decanonicalize(p);
        if (defaultJSExtension && prop.substr(prop.length - 3, 3) == '.js')
          prop = prop.substr(0, prop.length - 3);

        // if a package main, revert it
        var pkgMatch = '';
        for (var pkg in loader.packages) {
          if (prop.substr(0, pkg.length) == pkg 
              && (!prop[pkg.length] || prop[pkg.length] == '/') 
              && pkgMatch.split('/').length < pkg.split('/').length)
            pkgMatch = pkg;
        }
        if (pkgMatch && loader.packages[pkgMatch].main)
          prop = prop.substr(0, prop.length - loader.packages[pkgMatch].main.length - 1);

        var pkg = loader.packages[prop] = loader.packages[prop] || {};
        pkg.map = v;
      }
      else {
        loader.map[p] = v;
      }
    }
    if (objMaps)
      warn.call(loader, 'The map configuration for ' + objMaps + ' uses object submaps, which is deprecated in global map.\nUpdate this to use package contextual map with configs like SystemJS.config({ packages: { "' + p + '": { map: {...} } } }).');
  }

  if (cfg.packageConfigPaths) {
    var packageConfigPaths = [];
    for (var i = 0; i < cfg.packageConfigPaths.length; i++) {
      var path = cfg.packageConfigPaths[i];
      var packageLength = Math.max(path.lastIndexOf('*') + 1, path.lastIndexOf('/'));
      var normalized = coreResolve.call(loader, path.substr(0, packageLength));
      packageConfigPaths[i] = normalized + path.substr(packageLength);
    }
    loader.packageConfigPaths = packageConfigPaths;
  }

  if (cfg.bundles) {
    for (var p in cfg.bundles) {
      var bundle = [];
      for (var i = 0; i < cfg.bundles[p].length; i++) {
        var defaultJSExtension = loader.defaultJSExtensions && cfg.bundles[p][i].substr(cfg.bundles[p][i].length - 3, 3) != '.js';
        var normalizedBundleDep = loader.decanonicalize(cfg.bundles[p][i]);
        if (defaultJSExtension && normalizedBundleDep.substr(normalizedBundleDep.length - 3, 3) == '.js')
          normalizedBundleDep = normalizedBundleDep.substr(0, normalizedBundleDep.length - 3);
        bundle.push(normalizedBundleDep);
      }
      loader.bundles[p] = bundle;
    }
  }

  if (cfg.packages) {
    for (var p in cfg.packages) {
      if (p.match(/^([^\/]+:)?\/\/$/))
        throw new TypeError('"' + p + '" is not a valid package name.');

      var prop = coreResolve.call(loader, p);

      // allow trailing slash in packages
      if (prop[prop.length - 1] == '/')
        prop = prop.substr(0, prop.length - 1);

      setPkgConfig(loader, prop, cfg.packages[p], false);
    }
  }

  for (var c in cfg) {
    var v = cfg[c];

    if (indexOf.call(['baseURL', 'map', 'packages', 'bundles', 'paths', 'warnings', 'packageConfigPaths', 
          'loaderErrorStack', 'browserConfig', 'nodeConfig', 'devConfig', 'buildConfig', 'productionConfig'], c) != -1)
      continue;

    if (typeof v != 'object' || v instanceof Array) {
      loader[c] = v;
    }
    else {
      loader[c] = loader[c] || {};

      for (var p in v) {
        // base-level wildcard meta does not normalize to retain catch-all quality
        if (c == 'meta' && p[0] == '*') {
          extend(loader[c][p] = loader[c][p] || {}, v[p]);
        }
        else if (c == 'meta') {
          // meta can go through global map, with defaultJSExtensions adding
          var resolved = coreResolve.call(loader, p);
          if (loader.defaultJSExtensions && resolved.substr(resolved.length - 3, 3) != '.js' && !isPlain(resolved))
            resolved += '.js';
          extend(loader[c][resolved] = loader[c][resolved] || {}, v[p]);
        }
        else if (c == 'depCache') {
          var defaultJSExtension = loader.defaultJSExtensions && p.substr(p.length - 3, 3) != '.js';
          var prop = loader.decanonicalize(p);
          if (defaultJSExtension && prop.substr(prop.length - 3, 3) == '.js')
            prop = prop.substr(0, prop.length - 3);
          loader[c][prop] = [].concat(v[p]);
        }
        else {
          loader[c][p] = v[p];
        }
      }
    }
  }

  envSet(loader, cfg, function(cfg) {
    loader.config(cfg, true);
  });
};/*
 * Package Configuration Extension
 *
 * Example:
 *
 * SystemJS.packages = {
 *   jquery: {
 *     main: 'index.js', // when not set, package name is requested directly
 *     format: 'amd',
 *     defaultExtension: 'ts', // defaults to 'js', can be set to false
 *     modules: {
 *       '*.ts': {
 *         loader: 'typescript'
 *       },
 *       'vendor/sizzle.js': {
 *         format: 'global'
 *       }
 *     },
 *     map: {
 *        // map internal require('sizzle') to local require('./vendor/sizzle')
 *        sizzle: './vendor/sizzle.js',
 *        // map any internal or external require of 'jquery/vendor/another' to 'another/index.js'
 *        './vendor/another.js': './another/index.js',
 *        // test.js / test -> lib/test.js
 *        './test.js': './lib/test.js',
 *
 *        // environment-specific map configurations
 *        './index.js': {
 *          '~browser': './index-node.js',
 *          './custom-condition.js|~export': './index-custom.js'
 *        }
 *     },
 *     // allows for setting package-prefixed depCache
 *     // keys are normalized module names relative to the package itself
 *     depCache: {
 *       // import 'package/index.js' loads in parallel package/lib/test.js,package/vendor/sizzle.js
 *       './index.js': ['./test'],
 *       './test.js': ['external-dep'],
 *       'external-dep/path.js': ['./another.js']
 *     }
 *   }
 * };
 *
 * Then:
 *   import 'jquery'                       -> jquery/index.js
 *   import 'jquery/submodule'             -> jquery/submodule.js
 *   import 'jquery/submodule.ts'          -> jquery/submodule.ts loaded as typescript
 *   import 'jquery/vendor/another'        -> another/index.js
 *
 * Detailed Behaviours
 * - main can have a leading "./" can be added optionally
 * - map and defaultExtension are applied to the main
 * - defaultExtension adds the extension only if the exact extension is not present
 * - defaultJSExtensions applies after map when defaultExtension is not set
 * - if a meta value is available for a module, map and defaultExtension are skipped
 * - like global map, package map also applies to subpaths (sizzle/x, ./vendor/another/sub)
 * - condition module map is '@env' module in package or '@system-env' globally
 * - map targets support conditional interpolation ('./x': './x.#{|env}.js')
 * - internal package map targets cannot use boolean conditionals
 *
 * Package Configuration Loading
 *
 * Not all packages may already have their configuration present in the System config
 * For these cases, a list of packageConfigPaths can be provided, which when matched against
 * a request, will first request a ".json" file by the package name to derive the package
 * configuration from. This allows dynamic loading of non-predetermined code, a key use
 * case in SystemJS.
 *
 * Example:
 *
 *   SystemJS.packageConfigPaths = ['packages/test/package.json', 'packages/*.json'];
 *
 *   // will first request 'packages/new-package/package.json' for the package config
 *   // before completing the package request to 'packages/new-package/path'
 *   SystemJS.import('packages/new-package/path');
 *
 *   // will first request 'packages/test/package.json' before the main
 *   SystemJS.import('packages/test');
 *
 * When a package matches packageConfigPaths, it will always send a config request for
 * the package configuration.
 * The package name itself is taken to be the match up to and including the last wildcard
 * or trailing slash.
 * The most specific package config path will be used.
 * Any existing package configurations for the package will deeply merge with the
 * package config, with the existing package configurations taking preference.
 * To opt-out of the package configuration request for a package that matches
 * packageConfigPaths, use the { configured: true } package config option.
 *
 */
(function() {

  hookConstructor(function(constructor) {
    return function() {
      constructor.call(this);
      this.packages = {};
      this.packageConfigPaths = [];
    };
  });

  function getPackage(loader, normalized) {
    // use most specific package
    var curPkg, curPkgLen = 0, pkgLen;
    for (var p in loader.packages) {
      if (normalized.substr(0, p.length) === p && (normalized.length === p.length || normalized[p.length] === '/')) {
        pkgLen = p.split('/').length;
        if (pkgLen > curPkgLen) {
          curPkg = p;
          curPkgLen = pkgLen;
        }
      }
    }
    return curPkg;
  }

  function addDefaultExtension(loader, pkg, pkgName, subPath, skipExtensions) {
    // don't apply extensions to folders or if defaultExtension = false
    if (!subPath || subPath[subPath.length - 1] == '/' || skipExtensions || pkg.defaultExtension === false)
      return subPath;

    var metaMatch = false;

    // exact meta or meta with any content after the last wildcard skips extension
    if (pkg.meta)
      getMetaMatches(pkg.meta, subPath, function(metaPattern, matchMeta, matchDepth) {
        if (matchDepth == 0 || metaPattern.lastIndexOf('*') != metaPattern.length - 1)
          return metaMatch = true;
      });

    // exact global meta or meta with any content after the last wildcard skips extension
    if (!metaMatch && loader.meta)
      getMetaMatches(loader.meta, pkgName + '/' + subPath, function(metaPattern, matchMeta, matchDepth) {
        if (matchDepth == 0 || metaPattern.lastIndexOf('*') != metaPattern.length - 1)
          return metaMatch = true;
      });

    if (metaMatch)
      return subPath;

    // work out what the defaultExtension is and add if not there already
    // NB reconsider if default should really be ".js"?
    var defaultExtension = '.' + (pkg.defaultExtension || 'js');
    if (subPath.substr(subPath.length - defaultExtension.length) != defaultExtension)
      return subPath + defaultExtension;
    else
      return subPath;
  }

  function applyPackageConfigSync(loader, pkg, pkgName, subPath, skipExtensions) {
    // main
    if (!subPath) {
      if (pkg.main)
        subPath = pkg.main.substr(0, 2) == './' ? pkg.main.substr(2) : pkg.main;
      // also no submap if name is package itself (import 'pkg' -> 'path/to/pkg.js')
      else
        // NB can add a default package main convention here when defaultJSExtensions is deprecated
        // if it becomes internal to the package then it would no longer be an exit path
        return pkgName + (loader.defaultJSExtensions ? '.js' : '');
    }

    // map config checking without then with extensions
    if (pkg.map) {
      var mapPath = './' + subPath;

      var mapMatch = getMapMatch(pkg.map, mapPath);

      // we then check map with the default extension adding
      if (!mapMatch) {
        mapPath = './' + addDefaultExtension(loader, pkg, pkgName, subPath, skipExtensions);
        if (mapPath != './' + subPath)
          mapMatch = getMapMatch(pkg.map, mapPath);
      }
      if (mapMatch) {
        var mapped = doMapSync(loader, pkg, pkgName, mapMatch, mapPath, skipExtensions);
        if (mapped)
          return mapped;
      }
    }

    // normal package resolution
    return pkgName + '/' + addDefaultExtension(loader, pkg, pkgName, subPath, skipExtensions);
  }

  function validMapping(mapMatch, mapped, pkgName, path) {
    // disallow internal to subpath maps
    if (mapMatch == '.')
      throw new Error('Package ' + pkgName + ' has a map entry for "." which is not permitted.');
    
    // allow internal ./x -> ./x/y or ./x/ -> ./x/y recursive maps
    // but only if the path is exactly ./x and not ./x/z
    if (mapped.substr(0, mapMatch.length) == mapMatch && path.length > mapMatch.length)
      return false;

    return true;
  }

  function doMapSync(loader, pkg, pkgName, mapMatch, path, skipExtensions) {
    if (path[path.length - 1] == '/')
      path = path.substr(0, path.length - 1);
    var mapped = pkg.map[mapMatch];

    if (typeof mapped == 'object')
      throw new Error('Synchronous conditional normalization not supported sync normalizing ' + mapMatch + ' in ' + pkgName);

    if (!validMapping(mapMatch, mapped, pkgName, path) || typeof mapped != 'string')
      return;

    // package map to main / base-level
    if (mapped == '.')
      mapped = pkgName;

    // internal package map
    else if (mapped.substr(0, 2) == './')
      return pkgName + '/' + addDefaultExtension(loader, pkg, pkgName, mapped.substr(2) + path.substr(mapMatch.length), skipExtensions);
    
    // external map reference
    return loader.normalizeSync(mapped + path.substr(mapMatch.length), pkgName + '/');
  }

  function applyPackageConfig(loader, pkg, pkgName, subPath, skipExtensions) {
    // main
    if (!subPath) {
      if (pkg.main)
        subPath = pkg.main.substr(0, 2) == './' ? pkg.main.substr(2) : pkg.main;
      // also no submap if name is package itself (import 'pkg' -> 'path/to/pkg.js')
      else
        // NB can add a default package main convention here when defaultJSExtensions is deprecated
        // if it becomes internal to the package then it would no longer be an exit path
        return Promise.resolve(pkgName + (loader.defaultJSExtensions ? '.js' : ''));
    }

    // map config checking without then with extensions
    var mapPath, mapMatch;

    if (pkg.map) {
      mapPath = './' + subPath;
      mapMatch = getMapMatch(pkg.map, mapPath);

      // we then check map with the default extension adding
      if (!mapMatch) {
        mapPath = './' + addDefaultExtension(loader, pkg, pkgName, subPath, skipExtensions);
        if (mapPath != './' + subPath)
          mapMatch = getMapMatch(pkg.map, mapPath);
      }
    }

    return (mapMatch ? doMap(loader, pkg, pkgName, mapMatch, mapPath, skipExtensions) : Promise.resolve())
    .then(function(mapped) {
      if (mapped)
        return Promise.resolve(mapped);

      // normal package resolution / fallback resolution for no conditional match
      return Promise.resolve(pkgName + '/' + addDefaultExtension(loader, pkg, pkgName, subPath, skipExtensions));
    });
  }

  function doStringMap(loader, pkg, pkgName, mapMatch, mapped, path, skipExtensions) {
    // NB the interpolation cases should strictly skip subsequent interpolation
    // package map to main / base-level
    if (mapped == '.')
      mapped = pkgName;
    
    // internal package map
    else if (mapped.substr(0, 2) == './')
      return Promise.resolve(pkgName + '/' + addDefaultExtension(loader, pkg, pkgName, mapped.substr(2) + path.substr(mapMatch.length), skipExtensions))
      .then(function(name) {
        return interpolateConditional.call(loader, name, pkgName + '/');
      });
    
    // external map reference
    return loader.normalize(mapped + path.substr(mapMatch.length), pkgName + '/');
  }

  function doMap(loader, pkg, pkgName, mapMatch, path, skipExtensions) {
    if (path[path.length - 1] == '/')
      path = path.substr(0, path.length - 1);

    var mapped = pkg.map[mapMatch];

    if (typeof mapped == 'string') {
      if (!validMapping(mapMatch, mapped, pkgName, path))
        return Promise.resolve();
      return doStringMap(loader, pkg, pkgName, mapMatch, mapped, path, skipExtensions);
    }

    // we use a special conditional syntax to allow the builder to handle conditional branch points further
    if (loader.builder)
      return Promise.resolve(pkgName + '/#:' + path);

    // we load all conditions upfront
    var conditionPromises = [];
    var conditions = [];
    for (var e in mapped) {
      var c = parseCondition(e);
      conditions.push({
        condition: c,
        map: mapped[e]
      });
      conditionPromises.push(loader['import'](c.module, pkgName));
    }

    // map object -> conditional map
    return Promise.all(conditionPromises)
    .then(function(conditionValues) {
      // first map condition to match is used
      for (var i = 0; i < conditions.length; i++) {
        var c = conditions[i].condition;
        var value = readMemberExpression(c.prop, conditionValues[i]);
        if (!c.negate && value || c.negate && !value)
          return conditions[i].map;
      }
    })
    .then(function(mapped) {
      if (mapped) {
        if (!validMapping(mapMatch, mapped, pkgName, path))
          return;
        return doStringMap(loader, pkg, pkgName, mapMatch, mapped, path, skipExtensions);
      }

      // no environment match -> fallback to original subPath by returning undefined
    });
  }

  // normalizeSync = decanonicalize + package resolution
  SystemJSLoader.prototype.normalizeSync = SystemJSLoader.prototype.decanonicalize = SystemJSLoader.prototype.normalize;

  // decanonicalize must JUST handle package defaultExtension: false case when defaultJSExtensions is set
  // to be deprecated!
  hook('decanonicalize', function(decanonicalize) {
    return function(name, parentName) {
      if (this.builder)
        return decanonicalize.call(this, name, parentName, true);

      var decanonicalized = decanonicalize.call(this, name, parentName, false);

      if (!this.defaultJSExtensions)
        return decanonicalized;
    
      var pkgName = getPackage(this, decanonicalized);

      var pkg = this.packages[pkgName];
      var defaultExtension = pkg && pkg.defaultExtension;

      if (defaultExtension == undefined && pkg && pkg.meta)
        getMetaMatches(pkg.meta, decanonicalized.substr(pkgName), function(metaPattern, matchMeta, matchDepth) {
          if (matchDepth == 0 || metaPattern.lastIndexOf('*') != metaPattern.length - 1) {
            defaultExtension = false;
            return true;
          }
        });
      
      if ((defaultExtension === false || defaultExtension && defaultExtension != '.js') && name.substr(name.length - 3, 3) != '.js' && decanonicalized.substr(decanonicalized.length - 3, 3) == '.js')
        decanonicalized = decanonicalized.substr(0, decanonicalized.length - 3);

      return decanonicalized;
    };
  });

  hook('normalizeSync', function(normalizeSync) {
    return function(name, parentName, isPlugin) {
      var loader = this;
      isPlugin = isPlugin === true;

      // apply contextual package map first
      // (we assume the parent package config has already been loaded)
      if (parentName)
        var parentPackageName = getPackage(loader, parentName) ||
            loader.defaultJSExtensions && parentName.substr(parentName.length - 3, 3) == '.js' &&
            getPackage(loader, parentName.substr(0, parentName.length - 3));

      var parentPackage = parentPackageName && loader.packages[parentPackageName];

      // ignore . since internal maps handled by standard package resolution
      if (parentPackage && name[0] != '.') {
        var parentMap = parentPackage.map;
        var parentMapMatch = parentMap && getMapMatch(parentMap, name);

        if (parentMapMatch && typeof parentMap[parentMapMatch] == 'string') {
          var mapped = doMapSync(loader, parentPackage, parentPackageName, parentMapMatch, name, isPlugin);      
          if (mapped)
            return mapped;
        }
      }

      var defaultJSExtension = loader.defaultJSExtensions && name.substr(name.length - 3, 3) != '.js';

      // apply map, core, paths, contextual package map
      var normalized = normalizeSync.call(loader, name, parentName, false);

      // undo defaultJSExtension
      if (defaultJSExtension && normalized.substr(normalized.length - 3, 3) != '.js')
        defaultJSExtension = false;
      if (defaultJSExtension)
        normalized = normalized.substr(0, normalized.length - 3);

      var pkgConfigMatch = getPackageConfigMatch(loader, normalized);
      var pkgName = pkgConfigMatch && pkgConfigMatch.packageName || getPackage(loader, normalized);

      if (!pkgName)
        return normalized + (defaultJSExtension ? '.js' : '');

      var subPath = normalized.substr(pkgName.length + 1);

      return applyPackageConfigSync(loader, loader.packages[pkgName] || {}, pkgName, subPath, isPlugin);
    };
  });

  hook('normalize', function(normalize) {
    return function(name, parentName, isPlugin) {
      var loader = this;
      isPlugin = isPlugin === true;

      return Promise.resolve()
      .then(function() {
        // apply contextual package map first
        // (we assume the parent package config has already been loaded)
        if (parentName)
          var parentPackageName = getPackage(loader, parentName) ||
              loader.defaultJSExtensions && parentName.substr(parentName.length - 3, 3) == '.js' &&
              getPackage(loader, parentName.substr(0, parentName.length - 3));

        var parentPackage = parentPackageName && loader.packages[parentPackageName];

        // ignore . since internal maps handled by standard package resolution
        if (parentPackage && name.substr(0, 2) != './') {
          var parentMap = parentPackage.map;
          var parentMapMatch = parentMap && getMapMatch(parentMap, name);

          if (parentMapMatch)
            return doMap(loader, parentPackage, parentPackageName, parentMapMatch, name, isPlugin);
        }

        return Promise.resolve();
      })
      .then(function(mapped) {
        if (mapped)
          return mapped;

        var defaultJSExtension = loader.defaultJSExtensions && name.substr(name.length - 3, 3) != '.js';

        // apply map, core, paths, contextual package map
        var normalized = normalize.call(loader, name, parentName, false);

        // undo defaultJSExtension
        if (defaultJSExtension && normalized.substr(normalized.length - 3, 3) != '.js')
          defaultJSExtension = false;
        if (defaultJSExtension)
          normalized = normalized.substr(0, normalized.length - 3);

        var pkgConfigMatch = getPackageConfigMatch(loader, normalized);
        var pkgName = pkgConfigMatch && pkgConfigMatch.packageName || getPackage(loader, normalized);

        if (!pkgName)
          return Promise.resolve(normalized + (defaultJSExtension ? '.js' : ''));

        var pkg = loader.packages[pkgName];

        // if package is already configured or not a dynamic config package, use existing package config
        var isConfigured = pkg && (pkg.configured || !pkgConfigMatch);
        return (isConfigured ? Promise.resolve(pkg) : loadPackageConfigPath(loader, pkgName, pkgConfigMatch.configPath))
        .then(function(pkg) {
          var subPath = normalized.substr(pkgName.length + 1);

          return applyPackageConfig(loader, pkg, pkgName, subPath, isPlugin);
        });
      });
    };
  });

  // check if the given normalized name matches a packageConfigPath
  // if so, loads the config
  var packageConfigPaths = {};

  // data object for quick checks against package paths
  function createPkgConfigPathObj(path) {
    var lastWildcard = path.lastIndexOf('*');
    var length = Math.max(lastWildcard + 1, path.lastIndexOf('/'));
    return {
      length: length,
      regEx: new RegExp('^(' + path.substr(0, length).replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '[^\\/]+') + ')(\\/|$)'),
      wildcard: lastWildcard != -1
    };
  }

  // most specific match wins
  function getPackageConfigMatch(loader, normalized) {
    var pkgName, exactMatch = false, configPath;
    for (var i = 0; i < loader.packageConfigPaths.length; i++) {
      var packageConfigPath = loader.packageConfigPaths[i];
      var p = packageConfigPaths[packageConfigPath] || (packageConfigPaths[packageConfigPath] = createPkgConfigPathObj(packageConfigPath));
      if (normalized.length < p.length)
        continue;
      var match = normalized.match(p.regEx);
      if (match && (!pkgName || (!(exactMatch && p.wildcard) && pkgName.length < match[1].length))) {
        pkgName = match[1];
        exactMatch = !p.wildcard;
        configPath = pkgName + packageConfigPath.substr(p.length);
      }
    }

    if (!pkgName)
      return;

    return {
      packageName: pkgName,
      configPath: configPath
    };
  }

  function loadPackageConfigPath(loader, pkgName, pkgConfigPath) {
    var configLoader = loader.pluginLoader || loader;

    // NB remove this when json is default
    (configLoader.meta[pkgConfigPath] = configLoader.meta[pkgConfigPath] || {}).format = 'json';
    configLoader.meta[pkgConfigPath].loader = null;

    return configLoader.load(pkgConfigPath)
    .then(function() {
      var cfg = configLoader.get(pkgConfigPath)['default'];

      // support "systemjs" prefixing
      if (cfg.systemjs)
        cfg = cfg.systemjs;

      // modules backwards compatibility
      if (cfg.modules) {
        cfg.meta = cfg.modules;
        warn.call(loader, 'Package config file ' + pkgConfigPath + ' is configured with "modules", which is deprecated as it has been renamed to "meta".');
      }

      return setPkgConfig(loader, pkgName, cfg, true);
    });
  }

  function getMetaMatches(pkgMeta, subPath, matchFn) {
    // wildcard meta
    var meta = {};
    var wildcardIndex;
    for (var module in pkgMeta) {
      // allow meta to start with ./ for flexibility
      var dotRel = module.substr(0, 2) == './' ? './' : '';
      if (dotRel)
        module = module.substr(2);

      wildcardIndex = module.indexOf('*');
      if (wildcardIndex === -1)
        continue;

      if (module.substr(0, wildcardIndex) == subPath.substr(0, wildcardIndex)
          && module.substr(wildcardIndex + 1) == subPath.substr(subPath.length - module.length + wildcardIndex + 1)) {
        // alow match function to return true for an exit path
        if (matchFn(module, pkgMeta[dotRel + module], module.split('/').length))
          return;
      }
    }
    // exact meta
    var exactMeta = pkgMeta[subPath] && pkgMeta.hasOwnProperty && pkgMeta.hasOwnProperty(subPath) ? pkgMeta[subPath] : pkgMeta['./' + subPath];
    if (exactMeta)
      matchFn(exactMeta, exactMeta, 0);
  }

  hook('locate', function(locate) {
    return function(load) {
      var loader = this;
      return Promise.resolve(locate.call(this, load))
      .then(function(address) {
        var pkgName = getPackage(loader, load.name);
        if (pkgName) {
          var pkg = loader.packages[pkgName];
          var subPath = load.name.substr(pkgName.length + 1);

          var meta = {};
          if (pkg.meta) {
            var bestDepth = 0;

            // NB support a main shorthand in meta here?
            getMetaMatches(pkg.meta, subPath, function(metaPattern, matchMeta, matchDepth) {
              if (matchDepth > bestDepth)
                bestDepth = matchDepth;
              extendMeta(meta, matchMeta, matchDepth && bestDepth > matchDepth);
            });

            extendMeta(load.metadata, meta);
          }

          // format
          if (pkg.format && !load.metadata.loader)
            load.metadata.format = load.metadata.format || pkg.format;
        }

        return address;
      });
    };
  });

})();
/*
 * Script tag fetch
 *
 * When load.metadata.scriptLoad is true, we load via script tag injection.
 */
(function() {

  if (typeof document != 'undefined')
    var head = document.getElementsByTagName('head')[0];

  var curSystem;
  var curRequire;

  // if doing worker executing, this is set to the load record being executed
  var workerLoad = null;
  
  // interactive mode handling method courtesy RequireJS
  var ieEvents = head && (function() {
    var s = document.createElement('script');
    var isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]';
    return s.attachEvent && !(s.attachEvent.toString && s.attachEvent.toString().indexOf('[native code') < 0) && !isOpera;
  })();

  // IE interactive-only part
  // we store loading scripts array as { script: <script>, load: {...} }
  var interactiveLoadingScripts = [];
  var interactiveScript;
  function getInteractiveScriptLoad() {
    if (interactiveScript && interactiveScript.script.readyState === 'interactive')
      return interactiveScript.load;

    for (var i = 0; i < interactiveLoadingScripts.length; i++)
      if (interactiveLoadingScripts[i].script.readyState == 'interactive') {
        interactiveScript = interactiveLoadingScripts[i];
        return interactiveScript.load;
      }
  }
  
  // System.register, System.registerDynamic, AMD define pipeline
  // this is called by the above methods when they execute
  // we then run the reduceRegister_ collection function either immediately
  // if we are in IE and know the currently executing script (interactive)
  // or later if we need to wait for the synchronous load callback to know the script
  var loadingCnt = 0;
  var registerQueue = [];
  hook('pushRegister_', function(pushRegister) {
    return function(register) {
      // if using eval-execution then skip
      if (pushRegister.call(this, register))
        return false;

      // if using worker execution, then we're done
      if (workerLoad)
        this.reduceRegister_(workerLoad, register);

      // detect if we know the currently executing load (IE)
      // if so, immediately call reduceRegister
      else if (ieEvents)
        this.reduceRegister_(getInteractiveScriptLoad(), register);

      // otherwise, add to our execution queue
      // to call reduceRegister on sync script load event
      else if (loadingCnt)
        registerQueue.push(register);

      // if we're not currently loading anything though
      // then do the reduction against a null load
      // (out of band named define or named register)
      // note even in non-script environments, this catch is used
      else
        this.reduceRegister_(null, register);

      return true;
    };
  });

  function webWorkerImport(loader, load) {
    return new Promise(function(resolve, reject) {
      if (load.metadata.integrity)
        reject(new Error('Subresource integrity checking is not supported in web workers.'));

      workerLoad = load;
      try {
        importScripts(load.address);
      }
      catch(e) {
        workerLoad = null;
        reject(e);
      }
      workerLoad = null;

      // if nothing registered, then something went wrong
      if (!load.metadata.entry)
        reject(new Error(load.address + ' did not call System.register or AMD define. If loading a global, ensure the meta format is set to global.'));

      resolve('');
    });
  }

  // override fetch to use script injection
  hook('fetch', function(fetch) {
    return function(load) {
      var loader = this;

      if (load.metadata.format == 'json' || !load.metadata.scriptLoad || (!isBrowser && !isWorker))
        return fetch.call(this, load);

      if (isWorker)
        return webWorkerImport(loader, load);

      return new Promise(function(resolve, reject) {
        var s = document.createElement('script');
        
        s.async = true;

        if (load.metadata.crossOrigin)
          s.crossOrigin = load.metadata.crossOrigin;

        if (load.metadata.integrity)
          s.setAttribute('integrity', load.metadata.integrity);

        if (ieEvents) {
          s.attachEvent('onreadystatechange', complete);
          interactiveLoadingScripts.push({
            script: s,
            load: load
          });
        }
        else {
          s.addEventListener('load', complete, false);
          s.addEventListener('error', error, false);
        }

        loadingCnt++;

        curSystem = __global.System;
        curRequire = __global.require;

        s.src = load.address;
        head.appendChild(s);

        function complete(evt) {
          if (s.readyState && s.readyState != 'loaded' && s.readyState != 'complete')
            return;

          loadingCnt--;

          // complete call is sync on execution finish
          // (in ie already done reductions)
          if (!load.metadata.entry && !registerQueue.length) {
            loader.reduceRegister_(load);
          }
          else if (!ieEvents) {
            for (var i = 0; i < registerQueue.length; i++)
              loader.reduceRegister_(load, registerQueue[i]);
            registerQueue = [];
          }

          cleanup();

          // if nothing registered, then something went wrong
          if (!load.metadata.entry && !load.metadata.bundle)
            reject(new Error(load.name + ' did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support.'));

          resolve('');
        }

        function error(evt) {
          cleanup();
          reject(new Error('Unable to load script ' + load.address));
        }

        function cleanup() {
          __global.System = curSystem;
          __global.require = curRequire;

          if (s.detachEvent) {
            s.detachEvent('onreadystatechange', complete);
            for (var i = 0; i < interactiveLoadingScripts.length; i++)
              if (interactiveLoadingScripts[i].script == s) {
                if (interactiveScript && interactiveScript.script == s)
                  interactiveScript = null;
                interactiveLoadingScripts.splice(i, 1);
              }
          }
          else {
            s.removeEventListener('load', complete, false);
            s.removeEventListener('error', error, false);
          }

          head.removeChild(s);
        }
      });
    };
  });
})();
/*
 * Instantiate registry extension
 *
 * Supports Traceur System.register 'instantiate' output for loading ES6 as ES5.
 *
 * - Creates the loader.register function
 * - Also supports metadata.format = 'register' in instantiate for anonymous register modules
 * - Also supports metadata.deps, metadata.execute and metadata.executingRequire
 *     for handling dynamic modules alongside register-transformed ES6 modules
 *
 *
 * The code here replicates the ES6 linking groups algorithm to ensure that
 * circular ES6 compiled into System.register can work alongside circular AMD 
 * and CommonJS, identically to the actual ES6 loader.
 *
 */


/*
 * Registry side table entries in loader.defined
 * Registry Entry Contains:
 *    - name
 *    - deps 
 *    - declare for declarative modules
 *    - execute for dynamic modules, different to declarative execute on module
 *    - executingRequire indicates require drives execution for circularity of dynamic modules
 *    - declarative optional boolean indicating which of the above
 *
 * Can preload modules directly on SystemJS.defined['my/module'] = { deps, execute, executingRequire }
 *
 * Then the entry gets populated with derived information during processing:
 *    - normalizedDeps derived from deps, created in instantiate
 *    - groupIndex used by group linking algorithm
 *    - evaluated indicating whether evaluation has happend
 *    - module the module record object, containing:
 *      - exports actual module exports
 *
 *    For dynamic we track the es module with:
 *    - esModule actual es module value
 *    - esmExports whether to extend the esModule with named exports
 *      
 *    Then for declarative only we track dynamic bindings with the 'module' records:
 *      - name
 *      - exports
 *      - setters declarative setter functions
 *      - dependencies, module records of dependencies
 *      - importers, module records of dependents
 *
 * After linked and evaluated, entries are removed, declarative module records remain in separate
 * module binding table
 *
 */

var leadingCommentAndMetaRegEx = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/;
function detectRegisterFormat(source) {
  var leadingCommentAndMeta = source.match(leadingCommentAndMetaRegEx);
  return leadingCommentAndMeta && source.substr(leadingCommentAndMeta[0].length, 15) == 'System.register';
}

function createEntry() {
  return {
    name: null,
    deps: null,
    originalIndices: null,
    declare: null,
    execute: null,
    executingRequire: false,
    declarative: false,
    normalizedDeps: null,
    groupIndex: null,
    evaluated: false,
    module: null,
    esModule: null,
    esmExports: false
  };
}

(function() {

  /*
   * There are two variations of System.register:
   * 1. System.register for ES6 conversion (2-3 params) - System.register([name, ]deps, declare)
   *    see https://github.com/ModuleLoader/es6-module-loader/wiki/System.register-Explained
   *
   * 2. System.registerDynamic for dynamic modules (3-4 params) - System.registerDynamic([name, ]deps, executingRequire, execute)
   * the true or false statement 
   *
   * this extension implements the linking algorithm for the two variations identical to the spec
   * allowing compiled ES6 circular references to work alongside AMD and CJS circular references.
   *
   */
  SystemJSLoader.prototype.register = function(name, deps, declare) {
    if (typeof name != 'string') {
      declare = deps;
      deps = name;
      name = null;
    }

    // dynamic backwards-compatibility
    // can be deprecated eventually
    if (typeof declare == 'boolean')
      return this.registerDynamic.apply(this, arguments);

    var entry = createEntry();
    // ideally wouldn't apply map config to bundle names but 
    // dependencies go through map regardless so we can't restrict
    // could reconsider in shift to new spec
    entry.name = name && (this.decanonicalize || this.normalize).call(this, name);
    entry.declarative = true;
    entry.deps = deps;
    entry.declare = declare;

    this.pushRegister_({
      amd: false,
      entry: entry
    });
  };
  SystemJSLoader.prototype.registerDynamic = function(name, deps, declare, execute) {
    if (typeof name != 'string') {
      execute = declare;
      declare = deps;
      deps = name;
      name = null;
    }

    // dynamic
    var entry = createEntry();
    entry.name = name && (this.decanonicalize || this.normalize).call(this, name);
    entry.deps = deps;
    entry.execute = execute;
    entry.executingRequire = declare;

    this.pushRegister_({
      amd: false,
      entry: entry
    });
  };
  hook('reduceRegister_', function() {
    return function(load, register) {
      if (!register)
        return;

      var entry = register.entry;
      var curMeta = load && load.metadata;

      // named register
      if (entry.name) {
        if (!(entry.name in this.defined))
          this.defined[entry.name] = entry;

        if (curMeta)
          curMeta.bundle = true;
      }
      // anonymous register
      if (!entry.name || load && !curMeta.entry && entry.name == load.name) {
        if (!curMeta)
          throw new TypeError('Invalid System.register call. Anonymous System.register calls can only be made by modules loaded by SystemJS.import and not via script tags.');
        if (curMeta.entry) {
          if (curMeta.format == 'register')
            throw new Error('Multiple anonymous System.register calls in module ' + load.name + '. If loading a bundle, ensure all the System.register calls are named.');
          else
            throw new Error('Module ' + load.name + ' interpreted as ' + curMeta.format + ' module format, but called System.register.');
        }
        if (!curMeta.format)
          curMeta.format = 'register';
        curMeta.entry = entry;
      }
    };
  });

  hookConstructor(function(constructor) {
    return function() {
      constructor.call(this);

      this.defined = {};
      this._loader.moduleRecords = {};
    };
  });

  function buildGroups(entry, loader, groups) {
    groups[entry.groupIndex] = groups[entry.groupIndex] || [];

    if (indexOf.call(groups[entry.groupIndex], entry) != -1)
      return;

    groups[entry.groupIndex].push(entry);

    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
      var depName = entry.normalizedDeps[i];
      var depEntry = loader.defined[depName];
      
      // not in the registry means already linked / ES6
      if (!depEntry || depEntry.evaluated)
        continue;
      
      // now we know the entry is in our unlinked linkage group
      var depGroupIndex = entry.groupIndex + (depEntry.declarative != entry.declarative);

      // the group index of an entry is always the maximum
      if (depEntry.groupIndex === null || depEntry.groupIndex < depGroupIndex) {
        
        // if already in a group, remove from the old group
        if (depEntry.groupIndex !== null) {
          groups[depEntry.groupIndex].splice(indexOf.call(groups[depEntry.groupIndex], depEntry), 1);

          // if the old group is empty, then we have a mixed depndency cycle
          if (groups[depEntry.groupIndex].length == 0)
            throw new Error("Mixed dependency cycle detected");
        }

        depEntry.groupIndex = depGroupIndex;
      }

      buildGroups(depEntry, loader, groups);
    }
  }

  function link(name, startEntry, loader) {
    // skip if already linked
    if (startEntry.module)
      return;

    startEntry.groupIndex = 0;

    var groups = [];

    buildGroups(startEntry, loader, groups);

    var curGroupDeclarative = !!startEntry.declarative == groups.length % 2;
    for (var i = groups.length - 1; i >= 0; i--) {
      var group = groups[i];
      for (var j = 0; j < group.length; j++) {
        var entry = group[j];

        // link each group
        if (curGroupDeclarative)
          linkDeclarativeModule(entry, loader);
        else
          linkDynamicModule(entry, loader);
      }
      curGroupDeclarative = !curGroupDeclarative; 
    }
  }

  // module binding records
  function ModuleRecord() {}
  defineProperty(ModuleRecord, 'toString', {
    value: function() {
      return 'Module';
    }
  });

  function getOrCreateModuleRecord(name, moduleRecords) {
    return moduleRecords[name] || (moduleRecords[name] = {
      name: name,
      dependencies: [],
      exports: new ModuleRecord(), // start from an empty module and extend
      importers: []
    });
  }

  function linkDeclarativeModule(entry, loader) {
    // only link if already not already started linking (stops at circular)
    if (entry.module)
      return;

    var moduleRecords = loader._loader.moduleRecords;
    var module = entry.module = getOrCreateModuleRecord(entry.name, moduleRecords);
    var exports = entry.module.exports;

    var declaration = entry.declare.call(__global, function(name, value) {
      module.locked = true;

      if (typeof name == 'object') {
        for (var p in name)
          exports[p] = name[p];
      }
      else {
        exports[name] = value;
      }

      for (var i = 0, l = module.importers.length; i < l; i++) {
        var importerModule = module.importers[i];
        if (!importerModule.locked) {
          var importerIndex = indexOf.call(importerModule.dependencies, module);
          var setter = importerModule.setters[importerIndex];
          if (setter)
            setter(exports);
        }
      }

      module.locked = false;
      return value;
    }, { id: entry.name });

    if (typeof declaration == 'function')
      declaration = { setters: [], execute: declaration };

    // allowing undefined declaration was a mistake! To be deprecated.
    declaration = declaration || { setters: [], execute: function() {} };
    
    module.setters = declaration.setters;
    module.execute = declaration.execute;

    if (!module.setters || !module.execute) {
      throw new TypeError('Invalid System.register form for ' + entry.name);
    }

    // now link all the module dependencies
    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
      var depName = entry.normalizedDeps[i];
      var depEntry = loader.defined[depName];
      var depModule = moduleRecords[depName];

      // work out how to set depExports based on scenarios...
      var depExports;

      if (depModule) {
        depExports = depModule.exports;
      }
      // dynamic, already linked in our registry
      else if (depEntry && !depEntry.declarative) {
        depExports = depEntry.esModule;
      }
      // in the loader registry
      else if (!depEntry) {
        depExports = loader.get(depName);
      }
      // we have an entry -> link
      else {
        linkDeclarativeModule(depEntry, loader);
        depModule = depEntry.module;
        depExports = depModule.exports;
      }

      // only declarative modules have dynamic bindings
      if (depModule && depModule.importers) {
        depModule.importers.push(module);
        module.dependencies.push(depModule);
      }
      else {
        module.dependencies.push(null);
      }
      
      // run setters for all entries with the matching dependency name
      var originalIndices = entry.originalIndices[i];
      for (var j = 0, len = originalIndices.length; j < len; ++j) {
        var index = originalIndices[j];
        if (module.setters[index]) {
          module.setters[index](depExports);
        }
      }
    }
  }

  // An analog to loader.get covering execution of all three layers (real declarative, simulated declarative, simulated dynamic)
  function getModule(name, loader) {
    var exports;
    var entry = loader.defined[name];

    if (!entry) {
      exports = loader.get(name);
      if (!exports)
        throw new Error('Unable to load dependency ' + name + '.');
    }

    else {
      if (entry.declarative)
        ensureEvaluated(name, entry, [], loader);
    
      else if (!entry.evaluated)
        linkDynamicModule(entry, loader);

      exports = entry.module.exports;
    }

    if ((!entry || entry.declarative) && exports && exports.__useDefault)
      return exports['default'];
    
    return exports;
  }

  function linkDynamicModule(entry, loader) {
    if (entry.module)
      return;

    var exports = {};

    var module = entry.module = { exports: exports, id: entry.name };

    // AMD requires execute the tree first
    if (!entry.executingRequire) {
      for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
        var depName = entry.normalizedDeps[i];
        // we know we only need to link dynamic due to linking algorithm
        var depEntry = loader.defined[depName];
        if (depEntry)
          linkDynamicModule(depEntry, loader);
      }
    }

    // now execute
    entry.evaluated = true;
    var output = entry.execute.call(__global, function(name) {
      for (var i = 0, l = entry.deps.length; i < l; i++) {
        if (entry.deps[i] != name)
          continue;
        return getModule(entry.normalizedDeps[i], loader);
      }
      // try and normalize the dependency to see if we have another form
      var nameNormalized = loader.normalizeSync(name, entry.name);
      if (indexOf.call(entry.normalizedDeps, nameNormalized) != -1)
        return getModule(nameNormalized, loader);

      throw new Error('Module ' + name + ' not declared as a dependency of ' + entry.name);
    }, exports, module);
    
    if (output !== undefined)
      module.exports = output;

    // create the esModule object, which allows ES6 named imports of dynamics
    exports = module.exports;

    // __esModule flag treats as already-named
    if (exports && (exports.__esModule || exports instanceof Module))
      entry.esModule = loader.newModule(exports);
    // set module as 'default' export, then fake named exports by iterating properties
    else if (entry.esmExports && exports !== __global)
      entry.esModule = loader.newModule(getESModule(exports));
    // just use the 'default' export
    else
      entry.esModule = loader.newModule({ 'default': exports, __useDefault: true });
  }

  /*
   * Given a module, and the list of modules for this current branch,
   *  ensure that each of the dependencies of this module is evaluated
   *  (unless one is a circular dependency already in the list of seen
   *  modules, in which case we execute it)
   *
   * Then we evaluate the module itself depth-first left to right 
   * execution to match ES6 modules
   */
  function ensureEvaluated(moduleName, entry, seen, loader) {
    // if already seen, that means it's an already-evaluated non circular dependency
    if (!entry || entry.evaluated || !entry.declarative)
      return;

    // this only applies to declarative modules which late-execute

    seen.push(moduleName);

    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
      var depName = entry.normalizedDeps[i];
      if (indexOf.call(seen, depName) == -1) {
        if (!loader.defined[depName])
          loader.get(depName);
        else
          ensureEvaluated(depName, loader.defined[depName], seen, loader);
      }
    }

    if (entry.evaluated)
      return;

    entry.evaluated = true;
    entry.module.execute.call(__global);
  }

  // override the delete method to also clear the register caches
  hook('delete', function(del) {
    return function(name) {
      delete this._loader.moduleRecords[name];
      delete this.defined[name];
      return del.call(this, name);
    };
  });

  hook('fetch', function(fetch) {
    return function(load) {
      if (this.defined[load.name]) {
        load.metadata.format = 'defined';
        return '';
      }

      load.metadata.deps = load.metadata.deps || [];
      
      return fetch.call(this, load);
    };
  });

  hook('translate', function(translate) {
    // we run the meta detection here (register is after meta)
    return function(load) {
      load.metadata.deps = load.metadata.deps || [];
      return Promise.resolve(translate.apply(this, arguments)).then(function(source) {
        // run detection for register format
        if (load.metadata.format == 'register' || !load.metadata.format && detectRegisterFormat(load.source))
          load.metadata.format = 'register';
        return source;
      });
    };
  });

  // implement a perforance shortpath for System.load with no deps
  hook('load', function(doLoad) {
    return function(normalized) {
      var loader = this;
      var entry = loader.defined[normalized];

      if (!entry || entry.deps.length)
        return doLoad.apply(this, arguments);

      entry.originalIndices = entry.normalizedDeps = [];

      // recursively ensure that the module and all its 
      // dependencies are linked (with dependency group handling)
      link(normalized, entry, loader);

      // now handle dependency execution in correct order
      ensureEvaluated(normalized, entry, [], loader);
      if (!entry.esModule)
        entry.esModule = loader.newModule(entry.module.exports);

      // remove from the registry
      if (!loader.trace)
        loader.defined[normalized] = undefined;

      // return the defined module object
      loader.set(normalized, entry.esModule);

      return Promise.resolve();
    };
  });

  hook('instantiate', function(instantiate) {
    return function(load) {
      if (load.metadata.format == 'detect')
        load.metadata.format = undefined;

      // assumes previous instantiate is sync
      // (core json support)
      instantiate.call(this, load);

      var loader = this;

      var entry;

      // first we check if this module has already been defined in the registry
      if (loader.defined[load.name]) {
        entry = loader.defined[load.name];
        // don't support deps for ES modules
        if (!entry.declarative)
          entry.deps = entry.deps.concat(load.metadata.deps);
        entry.deps = entry.deps.concat(load.metadata.deps);
      }

      // picked up already by an anonymous System.register script injection
      // or via the dynamic formats
      else if (load.metadata.entry) {
        entry = load.metadata.entry;
        entry.deps = entry.deps.concat(load.metadata.deps);
      }

      // Contains System.register calls
      // (dont run bundles in the builder)
      else if (!(loader.builder && load.metadata.bundle) 
          && (load.metadata.format == 'register' || load.metadata.format == 'esm' || load.metadata.format == 'es6')) {
        
        if (typeof __exec != 'undefined')
          __exec.call(loader, load);

        if (!load.metadata.entry && !load.metadata.bundle)
          throw new Error(load.name + ' detected as ' + load.metadata.format + ' but didn\'t execute.');

        entry = load.metadata.entry;

        // support metadata deps for System.register
        if (entry && load.metadata.deps)
          entry.deps = entry.deps.concat(load.metadata.deps);
      }

      // named bundles are just an empty module
      if (!entry) {
        entry = createEntry();
        entry.deps = load.metadata.deps;
        entry.execute = function() {};
      }

      // place this module onto defined for circular references
      loader.defined[load.name] = entry;
      
      var grouped = group(entry.deps);
      
      entry.deps = grouped.names;
      entry.originalIndices = grouped.indices;
      entry.name = load.name;
      entry.esmExports = load.metadata.esmExports !== false;

      // first, normalize all dependencies
      var normalizePromises = [];
      for (var i = 0, l = entry.deps.length; i < l; i++)
        normalizePromises.push(Promise.resolve(loader.normalize(entry.deps[i], load.name)));

      return Promise.all(normalizePromises).then(function(normalizedDeps) {

        entry.normalizedDeps = normalizedDeps;

        return {
          deps: entry.deps,
          execute: function() {
            // recursively ensure that the module and all its 
            // dependencies are linked (with dependency group handling)
            link(load.name, entry, loader);

            // now handle dependency execution in correct order
            ensureEvaluated(load.name, entry, [], loader);

            if (!entry.esModule)
              entry.esModule = loader.newModule(entry.module.exports);

            // remove from the registry
            if (!loader.trace)
              loader.defined[load.name] = undefined;

            // return the defined module object
            return entry.esModule;
          }
        };
      });
    };
  });
})();
/*
 * Extension to detect ES6 and auto-load Traceur or Babel for processing
 */
(function() {
  // good enough ES6 module detection regex - format detections not designed to be accurate, but to handle the 99% use case
  var esmRegEx = /(^\s*|[}\);\n]\s*)(import\s*(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s*from\s*['"]|\{)|export\s+\*\s+from\s+["']|export\s*(\{|default|function|class|var|const|let|async\s+function))/;

  var traceurRuntimeRegEx = /\$traceurRuntime\s*\./;
  var babelHelpersRegEx = /babelHelpers\s*\./;

  hook('translate', function(translate) {
    return function(load) {
      var loader = this;
      var args = arguments;
      return translate.apply(loader, args)
      .then(function(source) {
        // detect & transpile ES6
        if (load.metadata.format == 'esm' || load.metadata.format == 'es6' || !load.metadata.format && source.match(esmRegEx)) {
          if (load.metadata.format == 'es6')
            warn.call(loader, 'Module ' + load.name + ' has metadata setting its format to "es6", which is deprecated.\nThis should be updated to "esm".');

          load.metadata.format = 'esm';

          if (load.metadata.deps) {
            var depInject = '';
            for (var i = 0; i < load.metadata.deps.length; i++)
              depInject += 'import "' + load.metadata.deps[i] + '"; ';
            load.source = depInject + source;
          }

          if (loader.transpiler === false) {
            // we accept translation to esm for builds though to enable eg rollup optimizations
            if (loader.builder)
              return source;
            throw new TypeError('Unable to dynamically transpile ES module as SystemJS.transpiler set to false.');
          }

          // setting _loader.loadedTranspiler = false tells the next block to
          // do checks for setting transpiler metadata
          loader._loader.loadedTranspiler = loader._loader.loadedTranspiler || false;
          if (loader.pluginLoader)
            loader.pluginLoader._loader.loadedTranspiler = loader._loader.loadedTranspiler || false;

          // do transpilation
          return (loader._loader.transpilerPromise || (
            loader._loader.transpilerPromise = Promise.resolve(
              __global[loader.transpiler == 'typescript' ? 'ts' : loader.transpiler] || (loader.pluginLoader || loader).normalize(loader.transpiler)
              .then(function(normalized) {
                loader._loader.transpilerNormalized = normalized;
                return (loader.pluginLoader || loader).load(normalized)
                .then(function() {
                  return (loader.pluginLoader || loader).get(normalized);
                });
              })
          ))).then(function(transpiler) {
            loader._loader.loadedTranspilerRuntime = true;

            // translate hooks means this is a transpiler plugin instead of a raw implementation
            if (transpiler.translate) {
              // if transpiler is the same as the plugin loader, then don't run twice
              if (transpiler == load.metadata.loaderModule)
                return load.source;
              load.metadata.loaderModule = transpiler;
              load.metadata.loader = loader._loader.transpilerNormalized;

              // convert the source map into an object for transpilation chaining
              if (typeof load.metadata.sourceMap == 'string')
                load.metadata.sourceMap = JSON.parse(load.metadata.sourceMap);

              return Promise.resolve(transpiler.translate.apply(loader, args))
              .then(function(source) {
                // sanitize sourceMap if an object not a JSON string
                var sourceMap = load.metadata.sourceMap;
                if (sourceMap && typeof sourceMap == 'object') {
                  var originalName = load.address.split('!')[0];

                  // force set the filename of the original file
                  if (!sourceMap.file || sourceMap.file == load.address)
                    sourceMap.file = originalName + '!transpiled';

                  // force set the sources list if only one source
                  if (!sourceMap.sources || sourceMap.sources.length <= 1 && (!sourceMap.sources[0] || sourceMap.sources[0] == load.address))
                    sourceMap.sources = [originalName];
                }

                if (load.metadata.format == 'esm' && !loader.builder && detectRegisterFormat(source))
                  load.metadata.format = 'register';
                return source;
              });
            }

            // legacy builder support
            if (loader.builder)
              load.metadata.originalSource = load.source;

            // defined in es6-module-loader/src/transpile.js
            return transpile.call(loader, load)
            .then(function(source) {
              // clear sourceMap as transpiler embeds it
              load.metadata.sourceMap = undefined;
              return source;
            });
          }, function(err) {
            throw addToError(err, 'Unable to load transpiler to transpile ' + load.name);
          });
        }

        // skip transpiler and transpiler runtime loading when transpiler is disabled
        if (loader.transpiler === false)
          return source;

        // load the transpiler correctly
        if (loader._loader.loadedTranspiler === false && (loader.transpiler == 'traceur' || loader.transpiler == 'typescript' || loader.transpiler == 'babel')
            && load.name == loader.normalizeSync(loader.transpiler)) {

          // always load transpiler as a global
          if (source.length > 100 && !load.metadata.format) {
            load.metadata.format = 'global';

            if (loader.transpiler === 'traceur')
              load.metadata.exports = 'traceur';
            if (loader.transpiler === 'typescript')
              load.metadata.exports = 'ts';
          }

          loader._loader.loadedTranspiler = true;
        }

        // load the transpiler runtime correctly
        if (loader._loader.loadedTranspilerRuntime === false) {
          if (load.name == loader.normalizeSync('traceur-runtime')
              || load.name == loader.normalizeSync('babel/external-helpers*')) {
            if (source.length > 100)
              load.metadata.format = load.metadata.format || 'global';

            loader._loader.loadedTranspilerRuntime = true;
          }
        }

        // detect transpiler runtime usage to load runtimes
        if ((load.metadata.format == 'register' || load.metadata.bundle) && loader._loader.loadedTranspilerRuntime !== true) {
          if (loader.transpiler == 'traceur' && !__global.$traceurRuntime && load.source.match(traceurRuntimeRegEx)) {
            loader._loader.loadedTranspilerRuntime = loader._loader.loadedTranspilerRuntime || false;
            return loader['import']('traceur-runtime').then(function() {
              return source;
            });
          }
          if (loader.transpiler == 'babel' && !__global.babelHelpers && load.source.match(babelHelpersRegEx)) {
            loader._loader.loadedTranspilerRuntime = loader._loader.loadedTranspilerRuntime || false;
            return loader['import']('babel/external-helpers').then(function() {
              return source;
            });
          }
        }

        return source;
      });
    };
  });

})();
/*
  SystemJS Global Format

  Supports
    metadata.deps
    metadata.globals
    metadata.exports

  Without metadata.exports, detects writes to the global object.
*/
var __globalName = typeof self != 'undefined' ? 'self' : 'global';

hook('fetch', function(fetch) {
  return function(load) {
    if (load.metadata.exports && !load.metadata.format)
      load.metadata.format = 'global';
    return fetch.call(this, load);
  };
});

// ideally we could support script loading for globals, but the issue with that is that
// we can't do it with AMD support side-by-side since AMD support means defining the
// global define, and global support means not definining it, yet we don't have any hook
// into the "pre-execution" phase of a script tag being loaded to handle both cases
hook('instantiate', function(instantiate) {
  return function(load) {
    var loader = this;

    if (!load.metadata.format)
      load.metadata.format = 'global';

    // global is a fallback module format
    if (load.metadata.format == 'global' && !load.metadata.entry) {

      var entry = createEntry();

      load.metadata.entry = entry;

      entry.deps = [];

      for (var g in load.metadata.globals) {
        var gl = load.metadata.globals[g];
        if (gl)
          entry.deps.push(gl);
      }

      entry.execute = function(require, exports, module) {

        var globals;
        if (load.metadata.globals) {
          globals = {};
          for (var g in load.metadata.globals)
            if (load.metadata.globals[g])
              globals[g] = require(load.metadata.globals[g]);
        }
        
        var exportName = load.metadata.exports;

        if (exportName)
          load.source += '\n' + __globalName + '["' + exportName + '"] = ' + exportName + ';';

        var retrieveGlobal = loader.get('@@global-helpers').prepareGlobal(module.id, exportName, globals, !!load.metadata.encapsulateGlobal);
        __exec.call(loader, load);

        return retrieveGlobal();
      }
    }
    return instantiate.call(this, load);
  };
});


function getGlobalValue(exports) {
  if (typeof exports == 'string')
    return readMemberExpression(exports, __global);

  if (!(exports instanceof Array))
    throw new Error('Global exports must be a string or array.');

  var globalValue = {};
  var first = true;
  for (var i = 0; i < exports.length; i++) {
    var val = readMemberExpression(exports[i], __global);
    if (first) {
      globalValue['default'] = val;
      first = false;
    }
    globalValue[exports[i].split('.').pop()] = val;
  }
  return globalValue;
}

hook('reduceRegister_', function(reduceRegister) {
  return function(load, register) {
    if (register || (!load.metadata.exports && !(isWorker && load.metadata.format == 'global')))
      return reduceRegister.call(this, load, register);

    load.metadata.format = 'global';
    var entry = load.metadata.entry = createEntry();
    entry.deps = load.metadata.deps;
    var globalValue = getGlobalValue(load.metadata.exports);
    entry.execute = function() {
      return globalValue;
    };
  };
});

hookConstructor(function(constructor) {
  return function() {
    var loader = this;
    constructor.call(loader);

    var hasOwnProperty = Object.prototype.hasOwnProperty;

    // bare minimum ignores
    var ignoredGlobalProps = ['_g', 'sessionStorage', 'localStorage', 'clipboardData', 'frames', 'frameElement', 'external', 
      'mozAnimationStartTime', 'webkitStorageInfo', 'webkitIndexedDB', 'mozInnerScreenY', 'mozInnerScreenX'];

    var globalSnapshot;

    function forEachGlobal(callback) {
      if (Object.keys)
        Object.keys(__global).forEach(callback);
      else
        for (var g in __global) {
          if (!hasOwnProperty.call(__global, g))
            continue;
          callback(g);
        }
    }

    function forEachGlobalValue(callback) {
      forEachGlobal(function(globalName) {
        if (indexOf.call(ignoredGlobalProps, globalName) != -1)
          return;
        try {
          var value = __global[globalName];
        }
        catch (e) {
          ignoredGlobalProps.push(globalName);
        }
        callback(globalName, value);
      });
    }

    loader.set('@@global-helpers', loader.newModule({
      prepareGlobal: function(moduleName, exports, globals, encapsulate) {
        // disable module detection
        var curDefine = __global.define;
        
        __global.define = undefined;

        // set globals
        var oldGlobals;
        if (globals) {
          oldGlobals = {};
          for (var g in globals) {
            oldGlobals[g] = __global[g];
            __global[g] = globals[g];
          }
        }

        // store a complete copy of the global object in order to detect changes
        if (!exports) {
          globalSnapshot = {};

          forEachGlobalValue(function(name, value) {
            globalSnapshot[name] = value;
          });
        }

        // return function to retrieve global
        return function() {
          var globalValue = exports ? getGlobalValue(exports) : {};

          var singleGlobal;
          var multipleExports = !!exports;

          if (!exports || encapsulate)
            forEachGlobalValue(function(name, value) {
              if (globalSnapshot[name] === value)
                return;
              if (typeof value == 'undefined')
                return;
              
              // allow global encapsulation where globals are removed
              if (encapsulate)
                __global[name] = undefined;

              if (!exports) {
                globalValue[name] = value;

                if (typeof singleGlobal != 'undefined') {
                  if (!multipleExports && singleGlobal !== value)
                    multipleExports = true;
                }
                else {
                  singleGlobal = value;
                }
              }
            });

          globalValue = multipleExports ? globalValue : singleGlobal;

          // revert globals
          if (oldGlobals) {
            for (var g in oldGlobals)
              __global[g] = oldGlobals[g];
          }
          __global.define = curDefine;

          return globalValue;
        };
      }
    }));
  };
});
/*
  SystemJS CommonJS Format
*/
(function() {
  // CJS Module Format
  // require('...') || exports[''] = ... || exports.asd = ... || module.exports = ...
  var cjsExportsRegEx = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])(exports\s*(\[['"]|\.)|module(\.exports|\['exports'\]|\["exports"\])\s*(\[['"]|[=,\.]))/;
  // RegEx adjusted from https://github.com/jbrantly/yabble/blob/master/lib/yabble.js#L339
  var cjsRequireRegEx = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*')\s*\)/g;
  var commentRegEx = /(^|[^\\])(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg;

  var stringRegEx = /("[^"\\\n\r]*(\\.[^"\\\n\r]*)*"|'[^'\\\n\r]*(\\.[^'\\\n\r]*)*')/g;

  // used to support leading #!/usr/bin/env in scripts as supported in Node
  var hashBangRegEx = /^\#\!.*/;

  function getCJSDeps(source) {
    cjsRequireRegEx.lastIndex = commentRegEx.lastIndex = stringRegEx.lastIndex = 0;

    var deps = [];

    var match;

    // track string and comment locations for unminified source    
    var stringLocations = [], commentLocations = [];

    function inLocation(locations, match) {
      for (var i = 0; i < locations.length; i++)
        if (locations[i][0] < match.index && locations[i][1] > match.index)
          return true;
      return false;
    }

    if (source.length / source.split('\n').length < 200) {
      while (match = stringRegEx.exec(source))
        stringLocations.push([match.index, match.index + match[0].length]);

      // TODO: track template literals here before comments
      
      while (match = commentRegEx.exec(source)) {
        // only track comments not starting in strings
        if (!inLocation(stringLocations, match))
          commentLocations.push([match.index + match[1].length, match.index + match[0].length - 1]);
      }
    }

    while (match = cjsRequireRegEx.exec(source)) {
      // ensure we're not within a string or comment location
      if (!inLocation(stringLocations, match) && !inLocation(commentLocations, match)) {
        var dep = match[1].substr(1, match[1].length - 2);
        // skip cases like require('" + file + "')
        if (dep.match(/"|'/))
          continue;
        // trailing slash requires are removed as they don't map mains in SystemJS
        if (dep[dep.length - 1] == '/')
          dep = dep.substr(0, dep.length - 1);
        deps.push(dep);
      }
    }

    return deps;
  }

  hook('instantiate', function(instantiate) {
    return function(load) {
      var loader = this;
      if (!load.metadata.format) {
        cjsExportsRegEx.lastIndex = 0;
        cjsRequireRegEx.lastIndex = 0;
        if (cjsRequireRegEx.exec(load.source) || cjsExportsRegEx.exec(load.source))
          load.metadata.format = 'cjs';
      }

      if (load.metadata.format == 'cjs') {
        var metaDeps = load.metadata.deps;
        var deps = load.metadata.cjsRequireDetection === false ? [] : getCJSDeps(load.source);

        for (var g in load.metadata.globals)
          if (load.metadata.globals[g])
            deps.push(load.metadata.globals[g]);

        var entry = createEntry();

        load.metadata.entry = entry;

        entry.deps = deps;
        entry.executingRequire = true;
        entry.execute = function(_require, exports, module) {
          function require(name) {
            if (name[name.length - 1] == '/')
              name = name.substr(0, name.length - 1);
            return _require.apply(this, arguments);
          }
          require.resolve = function(name) {
            return loader.get('@@cjs-helpers').requireResolve(name, module.id);
          };
          // support module.paths ish
          module.paths = [];
          module.require = _require;

          // ensure meta deps execute first
          if (!load.metadata.cjsDeferDepsExecute)
            for (var i = 0; i < metaDeps.length; i++)
              require(metaDeps[i]);

          var pathVars = loader.get('@@cjs-helpers').getPathVars(module.id);
          var __cjsWrapper = {
            exports: exports,
            args: [require, exports, module, pathVars.filename, pathVars.dirname, __global, __global]
          };

          var cjsWrapper = "(function(require, exports, module, __filename, __dirname, global, GLOBAL";

          // add metadata.globals to the wrapper arguments
          if (load.metadata.globals)
            for (var g in load.metadata.globals) {
              __cjsWrapper.args.push(require(load.metadata.globals[g]));
              cjsWrapper += ", " + g;
            }

          // disable AMD detection
          var define = __global.define;
          __global.define = undefined;
          __global.__cjsWrapper = __cjsWrapper;

          load.source = cjsWrapper + ") {" + load.source.replace(hashBangRegEx, '') + "\n}).apply(__cjsWrapper.exports, __cjsWrapper.args);";

          __exec.call(loader, load);

          __global.__cjsWrapper = undefined;
          __global.define = define;
        };
      }

      return instantiate.call(loader, load);
    };
  });
})();
hookConstructor(function(constructor) {
  return function() {
    var loader = this;
    constructor.call(loader);

    if (typeof window != 'undefined' && typeof document != 'undefined' && window.location)
      var windowOrigin = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');

    function stripOrigin(path) {
      if (path.substr(0, 8) == 'file:///')
        return path.substr(7 + !!isWindows);
      
      if (windowOrigin && path.substr(0, windowOrigin.length) == windowOrigin)
        return path.substr(windowOrigin.length);

      return path;
    }

    loader.set('@@cjs-helpers', loader.newModule({
      requireResolve: function(request, parentId) {
        return stripOrigin(loader.normalizeSync(request, parentId));
      },
      getPathVars: function(moduleId) {
        // remove any plugin syntax
        var pluginIndex = moduleId.lastIndexOf('!');
        var filename;
        if (pluginIndex != -1)
          filename = moduleId.substr(0, pluginIndex);
        else
          filename = moduleId;

        var dirname = filename.split('/');
        dirname.pop();
        dirname = dirname.join('/');

        return {
          filename: stripOrigin(filename),
          dirname: stripOrigin(dirname)
        };
      }
    }))
  };
});/*
 * AMD Helper function module
 * Separated into its own file as this is the part needed for full AMD support in SFX builds
 * NB since implementations have now diverged this can be merged back with amd.js
 */

hook('fetch', function(fetch) {
  return function(load) {
    // script load implies define global leak
    if (load.metadata.scriptLoad && isBrowser)
      __global.define = this.amdDefine;
    return fetch.call(this, load);
  };
});
 
hookConstructor(function(constructor) {
  return function() {
    var loader = this;
    constructor.call(this);

    var commentRegEx = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg;
    var cjsRequirePre = "(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])";
    var cjsRequirePost = "\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)";
    var fnBracketRegEx = /\(([^\)]*)\)/;
    var wsRegEx = /^\s+|\s+$/g;
    
    var requireRegExs = {};

    function getCJSDeps(source, requireIndex) {

      // remove comments
      source = source.replace(commentRegEx, '');

      // determine the require alias
      var params = source.match(fnBracketRegEx);
      var requireAlias = (params[1].split(',')[requireIndex] || 'require').replace(wsRegEx, '');

      // find or generate the regex for this requireAlias
      var requireRegEx = requireRegExs[requireAlias] || (requireRegExs[requireAlias] = new RegExp(cjsRequirePre + requireAlias + cjsRequirePost, 'g'));

      requireRegEx.lastIndex = 0;

      var deps = [];

      var match;
      while (match = requireRegEx.exec(source))
        deps.push(match[2] || match[3]);

      return deps;
    }

    /*
      AMD-compatible require
      To copy RequireJS, set window.require = window.requirejs = loader.amdRequire
    */
    function require(names, callback, errback, referer) {
      // in amd, first arg can be a config object... we just ignore
      if (typeof names == 'object' && !(names instanceof Array))
        return require.apply(null, Array.prototype.splice.call(arguments, 1, arguments.length - 1));

      // amd require
      if (typeof names == 'string' && typeof callback == 'function')
        names = [names];
      if (names instanceof Array) {
        var dynamicRequires = [];
        for (var i = 0; i < names.length; i++)
          dynamicRequires.push(loader['import'](names[i], referer));
        Promise.all(dynamicRequires).then(function(modules) {
          if (callback)
            callback.apply(null, modules);
        }, errback);
      }

      // commonjs require
      else if (typeof names == 'string') {
        var defaultJSExtension = loader.defaultJSExtensions && names.substr(names.length - 3, 3) != '.js';
        var normalized = loader.decanonicalize(names, referer);
        if (defaultJSExtension && normalized.substr(normalized.length - 3, 3) == '.js')
          normalized = normalized.substr(0, normalized.length - 3);
        var module = loader.get(normalized);
        if (!module)
          throw new Error('Module not already loaded loading "' + names + '" as ' + normalized + (referer ? ' from "' + referer + '".' : '.'));
        return module.__useDefault ? module['default'] : module;
      }

      else
        throw new TypeError('Invalid require');
    }

    function define(name, deps, factory) {
      if (typeof name != 'string') {
        factory = deps;
        deps = name;
        name = null;
      }
      if (!(deps instanceof Array)) {
        factory = deps;
        deps = ['require', 'exports', 'module'].splice(0, factory.length);
      }

      if (typeof factory != 'function')
        factory = (function(factory) {
          return function() { return factory; }
        })(factory);

      // in IE8, a trailing comma becomes a trailing undefined entry
      if (deps[deps.length - 1] === undefined)
        deps.pop();

      // remove system dependencies
      var requireIndex, exportsIndex, moduleIndex;
      
      if ((requireIndex = indexOf.call(deps, 'require')) != -1) {
        
        deps.splice(requireIndex, 1);

        // only trace cjs requires for non-named
        // named defines assume the trace has already been done
        if (!name)
          deps = deps.concat(getCJSDeps(factory.toString(), requireIndex));
      }

      if ((exportsIndex = indexOf.call(deps, 'exports')) != -1)
        deps.splice(exportsIndex, 1);
      
      if ((moduleIndex = indexOf.call(deps, 'module')) != -1)
        deps.splice(moduleIndex, 1);

      function execute(req, exports, module) {
        var depValues = [];
        for (var i = 0; i < deps.length; i++)
          depValues.push(req(deps[i]));

        module.uri = module.id;

        module.config = function() {};

        // add back in system dependencies
        if (moduleIndex != -1)
          depValues.splice(moduleIndex, 0, module);
        
        if (exportsIndex != -1)
          depValues.splice(exportsIndex, 0, exports);
        
        if (requireIndex != -1) {
          function contextualRequire(names, callback, errback) {
            if (typeof names == 'string' && typeof callback != 'function')
              return req(names);
            return require.call(loader, names, callback, errback, module.id);
          }
          contextualRequire.toUrl = function(name) {
            // normalize without defaultJSExtensions
            var defaultJSExtension = loader.defaultJSExtensions && name.substr(name.length - 3, 3) != '.js';
            var url = loader.decanonicalize(name, module.id);
            if (defaultJSExtension && url.substr(url.length - 3, 3) == '.js')
              url = url.substr(0, url.length - 3);
            return url;
          };
          depValues.splice(requireIndex, 0, contextualRequire);
        }

        // set global require to AMD require
        var curRequire = __global.require;
        __global.require = require;

        var output = factory.apply(exportsIndex == -1 ? __global : exports, depValues);

        __global.require = curRequire;

        if (typeof output == 'undefined' && module)
          output = module.exports;

        if (typeof output != 'undefined')
          return output;
      }

      var entry = createEntry();
      entry.name = name && (loader.decanonicalize || loader.normalize).call(loader, name);
      entry.deps = deps;
      entry.execute = execute;

      loader.pushRegister_({
        amd: true,
        entry: entry
      });
    }
    define.amd = {};

    // reduction function to attach defines to a load record
    hook('reduceRegister_', function(reduceRegister) {
      return function(load, register) {
        // only handle AMD registers here
        if (!register || !register.amd)
          return reduceRegister.call(this, load, register);

        var curMeta = load && load.metadata;
        var entry = register.entry;

        if (curMeta) {
          if (!curMeta.format || curMeta.format == 'detect')
            curMeta.format = 'amd';
          else if (!entry.name && curMeta.format != 'amd')
            throw new Error('AMD define called while executing ' + curMeta.format + ' module ' + load.name);
        }

        // anonymous define
        if (!entry.name) {
          if (!curMeta)
            throw new TypeError('Unexpected anonymous AMD define.');

          if (curMeta.entry && !curMeta.entry.name)
            throw new Error('Multiple anonymous defines in module ' + load.name);
          
          curMeta.entry = entry;
        }
        // named define
        else {
          // if we don't have any other defines, 
          // then let this be an anonymous define
          // this is just to support single modules of the form:
          // define('jquery')
          // still loading anonymously
          // because it is done widely enough to be useful
          // as soon as there is more than one define, this gets removed though
          if (curMeta) {
            if (!curMeta.entry && !curMeta.bundle)
              curMeta.entry = entry;
            else if (curMeta.entry && curMeta.entry.name && curMeta.entry.name != load.name)
              curMeta.entry = undefined;

            // note this is now a bundle
            curMeta.bundle = true;
          }

          // define the module through the register registry
          if (!(entry.name in this.defined))
            this.defined[entry.name] = entry;
        }
      };
    });

    loader.amdDefine = define;
    loader.amdRequire = require;
  };
});/*
  SystemJS AMD Format
*/
(function() {
  // AMD Module Format Detection RegEx
  // define([.., .., ..], ...)
  // define(varName); || define(function(require, exports) {}); || define({})
  var amdRegEx = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/;

  hook('instantiate', function(instantiate) {
    return function(load) {
      var loader = this;
      
      if (load.metadata.format == 'amd' || !load.metadata.format && load.source.match(amdRegEx)) {
        load.metadata.format = 'amd';
        
        if (!loader.builder && loader.execute !== false) {
          var curDefine = __global.define;
          __global.define = this.amdDefine;

          try {
            __exec.call(loader, load);
          }
          finally {
            __global.define = curDefine;
          }

          if (!load.metadata.entry && !load.metadata.bundle)
            throw new TypeError('AMD module ' + load.name + ' did not define');
        }
        else {
          load.metadata.execute = function() {
            return load.metadata.builderExecute.apply(this, arguments);
          };
        }
      }

      return instantiate.call(loader, load);
    };
  });

})();
/*
  SystemJS Loader Plugin Support

  Supports plugin loader syntax with "!", or via metadata.loader

  The plugin name is loaded as a module itself, and can override standard loader hooks
  for the plugin resource. See the plugin section of the systemjs readme.
*/

(function() {
  function getParentName(loader, parentName) {
    // if parent is a plugin, normalize against the parent plugin argument only
    if (parentName) {
      var parentPluginIndex;
      if (loader.pluginFirst) {
        if ((parentPluginIndex = parentName.lastIndexOf('!')) != -1)
          return parentName.substr(parentPluginIndex + 1);
      }
      else {
        if ((parentPluginIndex = parentName.indexOf('!')) != -1)
          return parentName.substr(0, parentPluginIndex);
      }

      return parentName;
    }
  }

  function parsePlugin(loader, name) {
    var argumentName;
    var pluginName;

    var pluginIndex = name.lastIndexOf('!');

    if (pluginIndex == -1)
      return;

    if (loader.pluginFirst) {
      argumentName = name.substr(pluginIndex + 1);
      pluginName = name.substr(0, pluginIndex);
    }
    else {
      argumentName = name.substr(0, pluginIndex);
      pluginName = name.substr(pluginIndex + 1) || argumentName.substr(argumentName.lastIndexOf('.') + 1);
    }

    return {
      argument: argumentName,
      plugin: pluginName
    };
  }

  // put name back together after parts have been normalized
  function combinePluginParts(loader, argumentName, pluginName, defaultExtension) {
    if (defaultExtension && argumentName.substr(argumentName.length - 3, 3) == '.js')
      argumentName = argumentName.substr(0, argumentName.length - 3);

    if (loader.pluginFirst) {
      return pluginName + '!' + argumentName;
    }
    else {
      return argumentName + '!' + pluginName;
    }
  }

  // note if normalize will add a default js extension
  // if so, remove for backwards compat
  // this is strange and sucks, but will be deprecated
  function checkDefaultExtension(loader, arg) {
    return loader.defaultJSExtensions && arg.substr(arg.length - 3, 3) != '.js'; 
  }

  function createNormalizeSync(normalizeSync) {
    return function(name, parentName, isPlugin) {
      var loader = this;
      
      var parsed = parsePlugin(loader, name);
      parentName = getParentName(this, parentName);

      if (!parsed)
        return normalizeSync.call(this, name, parentName, isPlugin);

      // if this is a plugin, normalize the plugin name and the argument
      var argumentName = loader.normalizeSync(parsed.argument, parentName, true);
      var pluginName = loader.normalizeSync(parsed.plugin, parentName, true);
      return combinePluginParts(loader, argumentName, pluginName, checkDefaultExtension(loader, parsed.argument));
    };
  }
  
  hook('decanonicalize', createNormalizeSync);
  hook('normalizeSync', createNormalizeSync);

  hook('normalize', function(normalize) {
    return function(name, parentName, isPlugin) {
      var loader = this;

      parentName = getParentName(this, parentName);

      var parsed = parsePlugin(loader, name);

      if (!parsed)
        return normalize.call(loader, name, parentName, isPlugin);

      return Promise.all([
        loader.normalize(parsed.argument, parentName, true),
        loader.normalize(parsed.plugin, parentName, false)
      ])
      .then(function(normalized) {
        return combinePluginParts(loader, normalized[0], normalized[1], checkDefaultExtension(loader, parsed.argument));
      });
    }
  });

  hook('locate', function(locate) {
    return function(load) {
      var loader = this;

      var name = load.name;

      // plugin syntax
      var pluginSyntaxIndex;
      if (loader.pluginFirst) {
        if ((pluginSyntaxIndex = name.indexOf('!')) != -1) {
          load.metadata.loader = name.substr(0, pluginSyntaxIndex);
          load.name = name.substr(pluginSyntaxIndex + 1);
        }
      }
      else {
        if ((pluginSyntaxIndex = name.lastIndexOf('!')) != -1) {
          load.metadata.loader = name.substr(pluginSyntaxIndex + 1);
          load.name = name.substr(0, pluginSyntaxIndex);
        }
      }

      return locate.call(loader, load)
      .then(function(address) {
        if (pluginSyntaxIndex != -1 || !load.metadata.loader)
          return address;

        // normalize plugin relative to parent in locate here when
        // using plugin via loader metadata
        return (loader.pluginLoader || loader).normalize(load.metadata.loader, load.name)
        .then(function(loaderNormalized) {
          load.metadata.loader = loaderNormalized;
          return address;
        });
      })
      .then(function(address) {
        var plugin = load.metadata.loader;

        if (!plugin)
          return address;

        // don't allow a plugin to load itself
        if (load.name == plugin)
          throw new Error('Plugin ' + plugin + ' cannot load itself, make sure it is excluded from any wildcard meta configuration via a custom loader: false rule.');

        // only fetch the plugin itself if this name isn't defined
        if (loader.defined && loader.defined[name])
          return address;

        var pluginLoader = loader.pluginLoader || loader;

        // load the plugin module and run standard locate
        return pluginLoader['import'](plugin)
        .then(function(loaderModule) {
          // store the plugin module itself on the metadata
          load.metadata.loaderModule = loaderModule;

          load.address = address;
          if (loaderModule.locate)
            return loaderModule.locate.call(loader, load);

          return address;
        });
      });
    };
  });

  hook('fetch', function(fetch) {
    return function(load) {
      var loader = this;
      if (load.metadata.loaderModule && load.metadata.loaderModule.fetch && load.metadata.format != 'defined') {
        load.metadata.scriptLoad = false;
        return load.metadata.loaderModule.fetch.call(loader, load, function(load) {
          return fetch.call(loader, load);
        });
      }
      else {
        return fetch.call(loader, load);
      }
    };
  });

  hook('translate', function(translate) {
    return function(load) {
      var loader = this;
      var args = arguments;
      if (load.metadata.loaderModule && load.metadata.loaderModule.translate && load.metadata.format != 'defined') {
        return Promise.resolve(load.metadata.loaderModule.translate.apply(loader, args)).then(function(result) {
          var sourceMap = load.metadata.sourceMap;

          // sanitize sourceMap if an object not a JSON string
          if (sourceMap) {
            if (typeof sourceMap != 'object')
              throw new Error('load.metadata.sourceMap must be set to an object.');

            var originalName = load.address.split('!')[0];
            
            // force set the filename of the original file
            if (!sourceMap.file || sourceMap.file == load.address)
              sourceMap.file = originalName + '!transpiled';

            // force set the sources list if only one source
            if (!sourceMap.sources || sourceMap.sources.length <= 1 && (!sourceMap.sources[0] || sourceMap.sources[0] == load.address))
              sourceMap.sources = [originalName];
          }

          // if running on file:/// URLs, sourcesContent is necessary
          // load.metadata.sourceMap.sourcesContent = [load.source];

          if (typeof result == 'string')
            load.source = result;
          else
            warn.call(this, 'Plugin ' + load.metadata.loader + ' should return the source in translate, instead of setting load.source directly. This support will be deprecated.');

          return translate.apply(loader, args);
        });
      }
      else {
        return translate.apply(loader, args);
      }
    };
  });

  hook('instantiate', function(instantiate) {
    return function(load) {
      var loader = this;
      var calledInstantiate = false;

      if (load.metadata.loaderModule && load.metadata.loaderModule.instantiate && !loader.builder && load.metadata.format != 'defined')
        return Promise.resolve(load.metadata.loaderModule.instantiate.call(loader, load, function(load) {
          if (calledInstantiate)
            throw new Error('Instantiate must only be called once.');
          calledInstantiate = true;
          return instantiate.call(loader, load);
        })).then(function(result) {
          if (calledInstantiate)
            return result;

          load.metadata.entry = createEntry();
          load.metadata.entry.execute = function() {
            return result;
          }
          load.metadata.entry.deps = load.metadata.deps;
          load.metadata.format = 'defined';
          return instantiate.call(loader, load);
        });
      else
        return instantiate.call(loader, load);
    };
  });

})();/*
 * Conditions Extension
 *
 *   Allows a condition module to alter the resolution of an import via syntax:
 *
 *     import $ from 'jquery/#{browser}';
 *
 *   Will first load the module 'browser' via `SystemJS.import('browser')` and 
 *   take the default export of that module.
 *   If the default export is not a string, an error is thrown.
 * 
 *   We then substitute the string into the require to get the conditional resolution
 *   enabling environment-specific variations like:
 * 
 *     import $ from 'jquery/ie'
 *     import $ from 'jquery/firefox'
 *     import $ from 'jquery/chrome'
 *     import $ from 'jquery/safari'
 *
 *   It can be useful for a condition module to define multiple conditions.
 *   This can be done via the `|` modifier to specify an export member expression:
 *
 *     import 'jquery/#{./browser.js|grade.version}'
 *
 *   Where the `grade` export `version` member in the `browser.js` module  is substituted.
 *
 *
 * Boolean Conditionals
 *
 *   For polyfill modules, that are used as imports but have no module value,
 *   a binary conditional allows a module not to be loaded at all if not needed:
 *
 *     import 'es5-shim#?./conditions.js|needs-es5shim'
 *
 *   These conditions can also be negated via:
 *     
 *     import 'es5-shim#?./conditions.js|~es6'
 *
 */

  var sysConditions = ['browser', 'node', 'dev', 'build', 'production', 'default'];

  function parseCondition(condition) {
    var conditionExport, conditionModule, negation;

    var negation = condition[0] == '~';
    var conditionExportIndex = condition.lastIndexOf('|');
    if (conditionExportIndex != -1) {
      conditionExport = condition.substr(conditionExportIndex + 1);
      conditionModule = condition.substr(negation, conditionExportIndex - negation);
      
      if (negation)
        warn.call(this, 'Condition negation form "' + condition + '" is deprecated for "' + conditionModule + '|~' + conditionExport + '"');

      if (conditionExport[0] == '~') {
        negation = true;
        conditionExport = conditionExport.substr(1);
      }
    }
    else {
      conditionExport = 'default';
      conditionModule = condition.substr(negation);
      if (sysConditions.indexOf(conditionModule) != -1) {
        conditionExport = conditionModule;
        conditionModule = null;
      }
    }

    return {
      module: conditionModule || '@system-env',
      prop: conditionExport,
      negate: negation
    };
  }

  function serializeCondition(conditionObj) {
    return conditionObj.module + '|' + (conditionObj.negate ? '~' : '') + conditionObj.prop;
  }

  function resolveCondition(conditionObj, parentName, bool) {
    var self = this;
    return this.normalize(conditionObj.module, parentName)
    .then(function(normalizedCondition) {
      return self.load(normalizedCondition)
      .then(function(q) {
        var m = readMemberExpression(conditionObj.prop, self.get(normalizedCondition));

        if (bool && typeof m != 'boolean')
          throw new TypeError('Condition ' + serializeCondition(conditionObj) + ' did not resolve to a boolean.');

        return conditionObj.negate ? !m : m;
      });
    });
  }

  var interpolationRegEx = /#\{[^\}]+\}/;
  function interpolateConditional(name, parentName) {
    // first we normalize the conditional
    var conditionalMatch = name.match(interpolationRegEx);

    if (!conditionalMatch)
      return Promise.resolve(name);

    var conditionObj = parseCondition.call(this, conditionalMatch[0].substr(2, conditionalMatch[0].length - 3));

    // in builds, return normalized conditional
    if (this.builder)
      return this['normalize'](conditionObj.module, parentName)
      .then(function(conditionModule) {
        conditionObj.module = conditionModule;
        return name.replace(interpolationRegEx, '#{' + serializeCondition(conditionObj) + '}');
      });

    return resolveCondition.call(this, conditionObj, parentName, false)
    .then(function(conditionValue) {
      if (typeof conditionValue !== 'string')
        throw new TypeError('The condition value for ' + name + ' doesn\'t resolve to a string.');

      if (conditionValue.indexOf('/') != -1)
        throw new TypeError('Unabled to interpolate conditional ' + name + (parentName ? ' in ' + parentName : '') + '\n\tThe condition value ' + conditionValue + ' cannot contain a "/" separator.');

      return name.replace(interpolationRegEx, conditionValue);
    });
  }

  function booleanConditional(name, parentName) {
    // first we normalize the conditional
    var booleanIndex = name.lastIndexOf('#?');

    if (booleanIndex == -1)
      return Promise.resolve(name);

    var conditionObj = parseCondition.call(this, name.substr(booleanIndex + 2));

    // in builds, return normalized conditional
    if (this.builder)
      return this['normalize'](conditionObj.module, parentName)
      .then(function(conditionModule) {
        conditionObj.module = conditionModule;
        return name.substr(0, booleanIndex) + '#?' + serializeCondition(conditionObj);
      });

    return resolveCondition.call(this, conditionObj, parentName, true)
    .then(function(conditionValue) {
      return conditionValue ? name.substr(0, booleanIndex) : '@empty';
    });
  }

  // normalizeSync does not parse conditionals at all although it could
  hook('normalize', function(normalize) {
    return function(name, parentName, skipExt) {
      var loader = this;
      return booleanConditional.call(loader, name, parentName)
      .then(function(name) {
        return normalize.call(loader, name, parentName, skipExt);
      })
      .then(function(normalized) {
        return interpolateConditional.call(loader, normalized, parentName);
      });
    };
  });
/*
 * Alias Extension
 *
 * Allows a module to be a plain copy of another module by module name
 *
 * SystemJS.meta['mybootstrapalias'] = { alias: 'bootstrap' };
 *
 */
(function() {
  // aliases
  hook('fetch', function(fetch) {
    return function(load) {
      var alias = load.metadata.alias;
      var aliasDeps = load.metadata.deps || [];
      if (alias) {
        load.metadata.format = 'defined';
        var entry = createEntry();
        this.defined[load.name] = entry;
        entry.declarative = true;
        entry.deps = aliasDeps.concat([alias]);
        entry.declare = function(_export) {
          return {
            setters: [function(module) {
              for (var p in module)
                _export(p, module[p]);
              if (module.__useDefault)
                entry.module.exports.__useDefault = true;
            }],
            execute: function() {}
          };
        };
        return '';
      }

      return fetch.call(this, load);
    };
  });
})();/*
 * Meta Extension
 *
 * Sets default metadata on a load record (load.metadata) from
 * loader.metadata via SystemJS.meta function.
 *
 *
 * Also provides an inline meta syntax for module meta in source.
 *
 * Eg:
 *
 * loader.meta({
 *   'my/module': { deps: ['jquery'] }
 *   'my/*': { format: 'amd' }
 * });
 *
 * Which in turn populates loader.metadata.
 *
 * load.metadata.deps and load.metadata.format will then be set
 * for 'my/module'
 *
 * The same meta could be set with a my/module.js file containing:
 *
 * my/module.js
 *   "format amd";
 *   "deps[] jquery";
 *   "globals.some value"
 *   console.log('this is my/module');
 *
 * Configuration meta always takes preference to inline meta.
 *
 * Multiple matches in wildcards are supported and ammend the meta.
 *
 *
 * The benefits of the function form is that paths are URL-normalized
 * supporting say
 *
 * loader.meta({ './app': { format: 'cjs' } });
 *
 * Instead of needing to set against the absolute URL (https://site.com/app.js)
 *
 */

(function() {

  hookConstructor(function(constructor) {
    return function() {
      this.meta = {};
      constructor.call(this);
    };
  });

  hook('locate', function(locate) {
    return function(load) {
      var meta = this.meta;
      var name = load.name;

      // NB for perf, maybe introduce a fast-path wildcard lookup cache here
      // which is checked first

      // apply wildcard metas
      var bestDepth = 0;
      var wildcardIndex;
      for (var module in meta) {
        wildcardIndex = module.indexOf('*');
        if (wildcardIndex === -1)
          continue;
        if (module.substr(0, wildcardIndex) === name.substr(0, wildcardIndex)
            && module.substr(wildcardIndex + 1) === name.substr(name.length - module.length + wildcardIndex + 1)) {
          var depth = module.split('/').length;
          if (depth > bestDepth)
            bestDepth = depth;
          extendMeta(load.metadata, meta[module], bestDepth != depth);
        }
      }

      // apply exact meta
      if (meta[name])
        extendMeta(load.metadata, meta[name]);

      return locate.call(this, load);
    };
  });

  // detect any meta header syntax
  // only set if not already set
  var metaRegEx = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/;
  var metaPartRegEx = /\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;

  function setMetaProperty(target, p, value) {
    var pParts = p.split('.');
    var curPart;
    while (pParts.length > 1) {
      curPart = pParts.shift();
      target = target[curPart] = target[curPart] || {};
    }
    curPart = pParts.shift();
    if (!(curPart in target))
      target[curPart] = value;
  }

  hook('translate', function(translate) {
    return function(load) {
      // shortpath for bundled
      if (load.metadata.format == 'defined') {
        load.metadata.deps = load.metadata.deps || [];
        return Promise.resolve(load.source);
      }

      // NB meta will be post-translate pending transpiler conversion to plugins
      var meta = load.source.match(metaRegEx);
      if (meta) {
        var metaParts = meta[0].match(metaPartRegEx);

        for (var i = 0; i < metaParts.length; i++) {
          var curPart = metaParts[i];
          var len = curPart.length;

          var firstChar = curPart.substr(0, 1);
          if (curPart.substr(len - 1, 1) == ';')
            len--;

          if (firstChar != '"' && firstChar != "'")
            continue;

          var metaString = curPart.substr(1, curPart.length - 3);
          var metaName = metaString.substr(0, metaString.indexOf(' '));

          if (metaName) {
            var metaValue = metaString.substr(metaName.length + 1, metaString.length - metaName.length - 1);

            if (metaName.substr(metaName.length - 2, 2) == '[]') {
              metaName = metaName.substr(0, metaName.length - 2);
              load.metadata[metaName] = load.metadata[metaName] || [];
              load.metadata[metaName].push(metaValue);
            }
            else if (load.metadata[metaName] instanceof Array) {
              // temporary backwards compat for previous "deps" syntax
              warn.call(this, 'Module ' + load.name + ' contains deprecated "deps ' + metaValue + '" meta syntax.\nThis should be updated to "deps[] ' + metaValue + '" for pushing to array meta.');
              load.metadata[metaName].push(metaValue);
            }
            else {
              setMetaProperty(load.metadata, metaName, metaValue);
            }
          }
          else {
            load.metadata[metaString] = true;
          }
        }
      }

      return translate.apply(this, arguments);
    };
  });
})();
/*
  System bundles

  Allows a bundle module to be specified which will be dynamically 
  loaded before trying to load a given module.

  For example:
  SystemJS.bundles['mybundle'] = ['jquery', 'bootstrap/js/bootstrap']

  Will result in a load to "mybundle" whenever a load to "jquery"
  or "bootstrap/js/bootstrap" is made.

  In this way, the bundle becomes the request that provides the module
*/

(function() {
  // bundles support (just like RequireJS)
  // bundle name is module name of bundle itself
  // bundle is array of modules defined by the bundle
  // when a module in the bundle is requested, the bundle is loaded instead
  // of the form SystemJS.bundles['mybundle'] = ['jquery', 'bootstrap/js/bootstrap']
  hookConstructor(function(constructor) {
    return function() {
      constructor.call(this);
      this.bundles = {};
      this._loader.loadedBundles = {};
    };
  });

  // assign bundle metadata for bundle loads
  hook('locate', function(locate) {
    return function(load) {
      var loader = this;
      var matched = false;

      if (!(load.name in loader.defined))
        for (var b in loader.bundles) {
          for (var i = 0; i < loader.bundles[b].length; i++) {
            var curModule = loader.bundles[b][i];

            if (curModule == load.name) {
              matched = true;
              break;
            }

            // wildcard in bundles does not include / boundaries
            if (curModule.indexOf('*') != -1) {
              var parts = curModule.split('*');
              if (parts.length != 2) {
                loader.bundles[b].splice(i--, 1);
                continue;
              }
              
              if (load.name.substring(0, parts[0].length) == parts[0] &&
                  load.name.substr(load.name.length - parts[1].length, parts[1].length) == parts[1] &&
                  load.name.substr(parts[0].length, load.name.length - parts[1].length - parts[0].length).indexOf('/') == -1) {
                matched = true;
                break;
              }
            }
          }

          if (matched)
            return loader['import'](b)
            .then(function() {
              return locate.call(loader, load);
            });
        }

      return locate.call(loader, load);
    };
  });
})();
/*
 * Dependency Tree Cache
 * 
 * Allows a build to pre-populate a dependency trace tree on the loader of 
 * the expected dependency tree, to be loaded upfront when requesting the
 * module, avoinding the n round trips latency of module loading, where 
 * n is the dependency tree depth.
 *
 * eg:
 * SystemJS.depCache = {
 *  'app': ['normalized', 'deps'],
 *  'normalized': ['another'],
 *  'deps': ['tree']
 * };
 * 
 * SystemJS.import('app') 
 * // simultaneously starts loading all of:
 * // 'normalized', 'deps', 'another', 'tree'
 * // before "app" source is even loaded
 *
 */

(function() {
  hookConstructor(function(constructor) {
    return function() {
      constructor.call(this);
      this.depCache = {};
    }
  });

  hook('locate', function(locate) {
    return function(load) {
      var loader = this;
      // load direct deps, in turn will pick up their trace trees
      var deps = loader.depCache[load.name];
      if (deps)
        for (var i = 0; i < deps.length; i++)
          loader['import'](deps[i], load.name);

      return locate.call(loader, load);
    };
  });
})();
  
System = new SystemJSLoader();

__global.SystemJS = System;
System.version = '0.19.40 Standard';
  if (typeof module == 'object' && module.exports && typeof exports == 'object')
    module.exports = System;

  __global.System = System;

})(typeof self != 'undefined' ? self : global);}

// auto-load Promise polyfill if needed in the browser
var doPolyfill = typeof Promise === 'undefined';

// document.write
if (typeof document !== 'undefined') {
  var scripts = document.getElementsByTagName('script');
  $__curScript = scripts[scripts.length - 1];
  if (document.currentScript && ($__curScript.defer || $__curScript.async))
    $__curScript = document.currentScript;
  if (!$__curScript.src)
    $__curScript = undefined;
  if (doPolyfill) {
    var curPath = $__curScript.src;
    var basePath = curPath.substr(0, curPath.lastIndexOf('/') + 1);
    window.systemJSBootstrap = bootstrap;
    document.write(
      '<' + 'script type="text/javascript" src="' + basePath + 'system-polyfills.js">' + '<' + '/script>'
    );
  }
  else {
    bootstrap();
  }
}
// importScripts
else if (typeof importScripts !== 'undefined') {
  var basePath = '';
  try {
    throw new Error('_');
  } catch (e) {
    e.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/, function(m, url) {
      $__curScript = { src: url };
      basePath = url.replace(/\/[^\/]*$/, '/');
    });
  }
  if (doPolyfill)
    importScripts(basePath + 'system-polyfills.js');
  bootstrap();
}
else {
  $__curScript = typeof __filename != 'undefined' ? { src: __filename } : null;
  bootstrap();
}


})();
