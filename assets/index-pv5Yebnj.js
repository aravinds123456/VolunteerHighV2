function Sd(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function xd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zl={exports:{}},Ao={},Yl={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cr=Symbol.for("react.element"),Ad=Symbol.for("react.portal"),Md=Symbol.for("react.fragment"),Cd=Symbol.for("react.strict_mode"),Td=Symbol.for("react.profiler"),Vd=Symbol.for("react.provider"),Ed=Symbol.for("react.context"),jd=Symbol.for("react.forward_ref"),Nd=Symbol.for("react.suspense"),Ld=Symbol.for("react.memo"),Od=Symbol.for("react.lazy"),vs=Symbol.iterator;function Rd(e){return e===null||typeof e!="object"?null:(e=vs&&e[vs]||e["@@iterator"],typeof e=="function"?e:null)}var ql={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$l=Object.assign,Jl={};function kt(e,n,t){this.props=e,this.context=n,this.refs=Jl,this.updater=t||ql}kt.prototype.isReactComponent={};kt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};kt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kl(){}Kl.prototype=kt.prototype;function wa(e,n,t){this.props=e,this.context=n,this.refs=Jl,this.updater=t||ql}var ka=wa.prototype=new Kl;ka.constructor=wa;$l(ka,kt.prototype);ka.isPureReactComponent=!0;var ws=Array.isArray,Ql=Object.prototype.hasOwnProperty,ba={current:null},Xl={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,n,t){var r,o={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)Ql.call(n,r)&&!Xl.hasOwnProperty(r)&&(o[r]=n[r]);var s=arguments.length-2;if(s===1)o.children=t;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:cr,type:e,key:i,ref:a,props:o,_owner:ba.current}}function zd(e,n){return{$$typeof:cr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Pa(e){return typeof e=="object"&&e!==null&&e.$$typeof===cr}function Id(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ks=/\/+/g;function Zo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Id(""+e.key):n.toString(36)}function Fr(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case cr:case Ad:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Zo(a,0):r,ws(o)?(t="",e!=null&&(t=e.replace(ks,"$&/")+"/"),Fr(o,n,t,"",function(u){return u})):o!=null&&(Pa(o)&&(o=zd(o,t+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(ks,"$&/")+"/")+e)),n.push(o)),1;if(a=0,r=r===""?".":r+":",ws(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+Zo(i,s);a+=Fr(i,n,t,l,o)}else if(l=Rd(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+Zo(i,s++),a+=Fr(i,n,t,l,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function wr(e,n,t){if(e==null)return e;var r=[],o=0;return Fr(e,r,"","",function(i){return n.call(t,i,o++)}),r}function Ud(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Wr={transition:null},Fd={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Wr,ReactCurrentOwner:ba};function nu(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:wr,forEach:function(e,n,t){wr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return wr(e,function(){n++}),n},toArray:function(e){return wr(e,function(n){return n})||[]},only:function(e){if(!Pa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=kt;L.Fragment=Md;L.Profiler=Td;L.PureComponent=wa;L.StrictMode=Cd;L.Suspense=Nd;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fd;L.act=nu;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$l({},e.props),o=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=ba.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in n)Ql.call(n,l)&&!Xl.hasOwnProperty(l)&&(r[l]=n[l]===void 0&&s!==void 0?s[l]:n[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:cr,type:e.type,key:o,ref:i,props:r,_owner:a}};L.createContext=function(e){return e={$$typeof:Ed,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Vd,_context:e},e.Consumer=e};L.createElement=eu;L.createFactory=function(e){var n=eu.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:jd,render:e}};L.isValidElement=Pa;L.lazy=function(e){return{$$typeof:Od,_payload:{_status:-1,_result:e},_init:Ud}};L.memo=function(e,n){return{$$typeof:Ld,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=Wr.transition;Wr.transition={};try{e()}finally{Wr.transition=n}};L.unstable_act=nu;L.useCallback=function(e,n){return he.current.useCallback(e,n)};L.useContext=function(e){return he.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return he.current.useDeferredValue(e)};L.useEffect=function(e,n){return he.current.useEffect(e,n)};L.useId=function(){return he.current.useId()};L.useImperativeHandle=function(e,n,t){return he.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return he.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return he.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return he.current.useMemo(e,n)};L.useReducer=function(e,n,t){return he.current.useReducer(e,n,t)};L.useRef=function(e){return he.current.useRef(e)};L.useState=function(e){return he.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return he.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return he.current.useTransition()};L.version="18.3.1";Yl.exports=L;var b=Yl.exports;const Sa=xd(b),Wd=Sd({__proto__:null,default:Sa},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd=b,_d=Symbol.for("react.element"),Hd=Symbol.for("react.fragment"),Bd=Object.prototype.hasOwnProperty,Gd=Dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zd={key:!0,ref:!0,__self:!0,__source:!0};function tu(e,n,t){var r,o={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Bd.call(n,r)&&!Zd.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:_d,type:e,key:i,ref:a,props:o,_owner:Gd.current}}Ao.Fragment=Hd;Ao.jsx=tu;Ao.jsxs=tu;Zl.exports=Ao;var p=Zl.exports,Pi={},ru={exports:{}},Ae={},ou={exports:{}},iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(M,E){var j=M.length;M.push(E);e:for(;0<j;){var D=j-1>>>1,ee=M[D];if(0<o(ee,E))M[D]=E,M[j]=ee,j=D;else break e}}function t(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var E=M[0],j=M.pop();if(j!==E){M[0]=j;e:for(var D=0,ee=M.length,yr=ee>>>1;D<yr;){var Vn=2*(D+1)-1,Go=M[Vn],En=Vn+1,vr=M[En];if(0>o(Go,j))En<ee&&0>o(vr,Go)?(M[D]=vr,M[En]=j,D=En):(M[D]=Go,M[Vn]=j,D=Vn);else if(En<ee&&0>o(vr,j))M[D]=vr,M[En]=j,D=En;else break e}}return E}function o(M,E){var j=M.sortIndex-E.sortIndex;return j!==0?j:M.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],f=1,d=null,m=3,y=!1,v=!1,k=!1,A=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(M){for(var E=t(u);E!==null;){if(E.callback===null)r(u);else if(E.startTime<=M)r(u),E.sortIndex=E.expirationTime,n(l,E);else break;E=t(u)}}function w(M){if(k=!1,g(M),!v)if(t(l)!==null)v=!0,Yn(x);else{var E=t(u);E!==null&&Oe(w,E.startTime-M)}}function x(M,E){v=!1,k&&(k=!1,h(V),V=-1),y=!0;var j=m;try{for(g(E),d=t(l);d!==null&&(!(d.expirationTime>E)||M&&!$());){var D=d.callback;if(typeof D=="function"){d.callback=null,m=d.priorityLevel;var ee=D(d.expirationTime<=E);E=e.unstable_now(),typeof ee=="function"?d.callback=ee:d===t(l)&&r(l),g(E)}else r(l);d=t(l)}if(d!==null)var yr=!0;else{var Vn=t(u);Vn!==null&&Oe(w,Vn.startTime-E),yr=!1}return yr}finally{d=null,m=j,y=!1}}var S=!1,T=null,V=-1,z=5,N=-1;function $(){return!(e.unstable_now()-N<z)}function J(){if(T!==null){var M=e.unstable_now();N=M;var E=!0;try{E=T(!0,M)}finally{E?Le():(S=!1,T=null)}}else S=!1}var Le;if(typeof c=="function")Le=function(){c(J)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Ye=X.port2;X.port1.onmessage=J,Le=function(){Ye.postMessage(null)}}else Le=function(){A(J,0)};function Yn(M){T=M,S||(S=!0,Le())}function Oe(M,E){V=A(function(){M(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,Yn(x))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(M){switch(m){case 1:case 2:case 3:var E=3;break;default:E=m}var j=m;m=E;try{return M()}finally{m=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,E){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var j=m;m=M;try{return E()}finally{m=j}},e.unstable_scheduleCallback=function(M,E,j){var D=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?D+j:D):j=D,M){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=j+ee,M={id:f++,callback:E,priorityLevel:M,startTime:j,expirationTime:ee,sortIndex:-1},j>D?(M.sortIndex=j,n(u,M),t(l)===null&&M===t(u)&&(k?(h(V),V=-1):k=!0,Oe(w,j-D))):(M.sortIndex=ee,n(l,M),v||y||(v=!0,Yn(x))),M},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(M){var E=m;return function(){var j=m;m=E;try{return M.apply(this,arguments)}finally{m=j}}}})(iu);ou.exports=iu;var Yd=ou.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd=b,xe=Yd;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var au=new Set,Gt={};function Hn(e,n){ht(e,n),ht(e+"Capture",n)}function ht(e,n){for(Gt[e]=n,e=0;e<n.length;e++)au.add(n[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Si=Object.prototype.hasOwnProperty,$d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bs={},Ps={};function Jd(e){return Si.call(Ps,e)?!0:Si.call(bs,e)?!1:$d.test(e)?Ps[e]=!0:(bs[e]=!0,!1)}function Kd(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qd(e,n,t,r){if(n===null||typeof n>"u"||Kd(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function fe(e,n,t,r,o,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ie[n]=new fe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var xa=/[\-:]([a-z])/g;function Aa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(xa,Aa);ie[n]=new fe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(xa,Aa);ie[n]=new fe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(xa,Aa);ie[n]=new fe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ma(e,n,t,r){var o=ie.hasOwnProperty(n)?ie[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Qd(n,t,o,r)&&(t=null),r||o===null?Jd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var rn=qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kr=Symbol.for("react.element"),$n=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),Ca=Symbol.for("react.strict_mode"),xi=Symbol.for("react.profiler"),su=Symbol.for("react.provider"),lu=Symbol.for("react.context"),Ta=Symbol.for("react.forward_ref"),Ai=Symbol.for("react.suspense"),Mi=Symbol.for("react.suspense_list"),Va=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),uu=Symbol.for("react.offscreen"),Ss=Symbol.iterator;function xt(e){return e===null||typeof e!="object"?null:(e=Ss&&e[Ss]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,Yo;function Nt(e){if(Yo===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Yo=n&&n[1]||""}return`
`+Yo+e}var qo=!1;function $o(e,n){if(!e||qo)return"";qo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{qo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Nt(e):""}function Xd(e){switch(e.tag){case 5:return Nt(e.type);case 16:return Nt("Lazy");case 13:return Nt("Suspense");case 19:return Nt("SuspenseList");case 0:case 2:case 15:return e=$o(e.type,!1),e;case 11:return e=$o(e.type.render,!1),e;case 1:return e=$o(e.type,!0),e;default:return""}}function Ci(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case $n:return"Portal";case xi:return"Profiler";case Ca:return"StrictMode";case Ai:return"Suspense";case Mi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lu:return(e.displayName||"Context")+".Consumer";case su:return(e._context.displayName||"Context")+".Provider";case Ta:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Va:return n=e.displayName||null,n!==null?n:Ci(e.type)||"Memo";case an:n=e._payload,e=e._init;try{return Ci(e(n))}catch{}}return null}function ep(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ci(n);case 8:return n===Ca?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function np(e){var n=cu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function br(e){e._valueTracker||(e._valueTracker=np(e))}function du(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=cu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ti(e,n){var t=n.checked;return B({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function xs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Pn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function pu(e,n){n=n.checked,n!=null&&Ma(e,"checked",n,!1)}function Vi(e,n){pu(e,n);var t=Pn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ei(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ei(e,n.type,Pn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function As(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ei(e,n,t){(n!=="number"||Qr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Lt=Array.isArray;function st(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Pn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function ji(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return B({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ms(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(Lt(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Pn(t)}}function hu(e,n){var t=Pn(n.value),r=Pn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Cs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function fu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ni(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?fu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pr,gu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Pr=Pr||document.createElement("div"),Pr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Pr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Zt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var zt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tp=["Webkit","ms","Moz","O"];Object.keys(zt).forEach(function(e){tp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),zt[n]=zt[e]})});function mu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||zt.hasOwnProperty(e)&&zt[e]?(""+n).trim():n+"px"}function yu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=mu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var rp=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Li(e,n){if(n){if(rp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function Oi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ri=null;function Ea(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zi=null,lt=null,ut=null;function Ts(e){if(e=hr(e)){if(typeof zi!="function")throw Error(P(280));var n=e.stateNode;n&&(n=Eo(n),zi(e.stateNode,e.type,n))}}function vu(e){lt?ut?ut.push(e):ut=[e]:lt=e}function wu(){if(lt){var e=lt,n=ut;if(ut=lt=null,Ts(e),n)for(e=0;e<n.length;e++)Ts(n[e])}}function ku(e,n){return e(n)}function bu(){}var Jo=!1;function Pu(e,n,t){if(Jo)return e(n,t);Jo=!0;try{return ku(e,n,t)}finally{Jo=!1,(lt!==null||ut!==null)&&(bu(),wu())}}function Yt(e,n){var t=e.stateNode;if(t===null)return null;var r=Eo(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var Ii=!1;if(Xe)try{var At={};Object.defineProperty(At,"passive",{get:function(){Ii=!0}}),window.addEventListener("test",At,At),window.removeEventListener("test",At,At)}catch{Ii=!1}function op(e,n,t,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(f){this.onError(f)}}var It=!1,Xr=null,eo=!1,Ui=null,ip={onError:function(e){It=!0,Xr=e}};function ap(e,n,t,r,o,i,a,s,l){It=!1,Xr=null,op.apply(ip,arguments)}function sp(e,n,t,r,o,i,a,s,l){if(ap.apply(this,arguments),It){if(It){var u=Xr;It=!1,Xr=null}else throw Error(P(198));eo||(eo=!0,Ui=u)}}function Bn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Su(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Vs(e){if(Bn(e)!==e)throw Error(P(188))}function lp(e){var n=e.alternate;if(!n){if(n=Bn(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return Vs(o),e;if(i===r)return Vs(o),n;i=i.sibling}throw Error(P(188))}if(t.return!==r.return)t=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===t){a=!0,t=o,r=i;break}if(s===r){a=!0,r=o,t=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===t){a=!0,t=i,r=o;break}if(s===r){a=!0,r=i,t=o;break}s=s.sibling}if(!a)throw Error(P(189))}}if(t.alternate!==r)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function xu(e){return e=lp(e),e!==null?Au(e):null}function Au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Au(e);if(n!==null)return n;e=e.sibling}return null}var Mu=xe.unstable_scheduleCallback,Es=xe.unstable_cancelCallback,up=xe.unstable_shouldYield,cp=xe.unstable_requestPaint,Z=xe.unstable_now,dp=xe.unstable_getCurrentPriorityLevel,ja=xe.unstable_ImmediatePriority,Cu=xe.unstable_UserBlockingPriority,no=xe.unstable_NormalPriority,pp=xe.unstable_LowPriority,Tu=xe.unstable_IdlePriority,Mo=null,Ge=null;function hp(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Mo,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:mp,fp=Math.log,gp=Math.LN2;function mp(e){return e>>>=0,e===0?32:31-(fp(e)/gp|0)|0}var Sr=64,xr=4194304;function Ot(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function to(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var s=a&~o;s!==0?r=Ot(s):(i&=a,i!==0&&(r=Ot(i)))}else a=t&~o,a!==0?r=Ot(a):i!==0&&(r=Ot(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Fe(n),o=1<<t,r|=e[t],n&=~o;return r}function yp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Fe(i),s=1<<a,l=o[a];l===-1?(!(s&t)||s&r)&&(o[a]=yp(s,n)):l<=n&&(e.expiredLanes|=s),i&=~s}}function Fi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vu(){var e=Sr;return Sr<<=1,!(Sr&4194240)&&(Sr=64),e}function Ko(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function dr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Fe(n),e[n]=t}function wp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Fe(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function Na(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Fe(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var R=0;function Eu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ju,La,Nu,Lu,Ou,Wi=!1,Ar=[],hn=null,fn=null,gn=null,qt=new Map,$t=new Map,ln=[],kp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function js(e,n){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":qt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":$t.delete(n.pointerId)}}function Mt(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=hr(n),n!==null&&La(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function bp(e,n,t,r,o){switch(n){case"focusin":return hn=Mt(hn,e,n,t,r,o),!0;case"dragenter":return fn=Mt(fn,e,n,t,r,o),!0;case"mouseover":return gn=Mt(gn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return qt.set(i,Mt(qt.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,$t.set(i,Mt($t.get(i)||null,e,n,t,r,o)),!0}return!1}function Ru(e){var n=Ln(e.target);if(n!==null){var t=Bn(n);if(t!==null){if(n=t.tag,n===13){if(n=Su(t),n!==null){e.blockedOn=n,Ou(e.priority,function(){Nu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Di(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ri=r,t.target.dispatchEvent(r),Ri=null}else return n=hr(t),n!==null&&La(n),e.blockedOn=t,!1;n.shift()}return!0}function Ns(e,n,t){Dr(e)&&t.delete(n)}function Pp(){Wi=!1,hn!==null&&Dr(hn)&&(hn=null),fn!==null&&Dr(fn)&&(fn=null),gn!==null&&Dr(gn)&&(gn=null),qt.forEach(Ns),$t.forEach(Ns)}function Ct(e,n){e.blockedOn===n&&(e.blockedOn=null,Wi||(Wi=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,Pp)))}function Jt(e){function n(o){return Ct(o,e)}if(0<Ar.length){Ct(Ar[0],e);for(var t=1;t<Ar.length;t++){var r=Ar[t];r.blockedOn===e&&(r.blockedOn=null)}}for(hn!==null&&Ct(hn,e),fn!==null&&Ct(fn,e),gn!==null&&Ct(gn,e),qt.forEach(n),$t.forEach(n),t=0;t<ln.length;t++)r=ln[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<ln.length&&(t=ln[0],t.blockedOn===null);)Ru(t),t.blockedOn===null&&ln.shift()}var ct=rn.ReactCurrentBatchConfig,ro=!0;function Sp(e,n,t,r){var o=R,i=ct.transition;ct.transition=null;try{R=1,Oa(e,n,t,r)}finally{R=o,ct.transition=i}}function xp(e,n,t,r){var o=R,i=ct.transition;ct.transition=null;try{R=4,Oa(e,n,t,r)}finally{R=o,ct.transition=i}}function Oa(e,n,t,r){if(ro){var o=Di(e,n,t,r);if(o===null)si(e,n,r,oo,t),js(e,r);else if(bp(o,e,n,t,r))r.stopPropagation();else if(js(e,r),n&4&&-1<kp.indexOf(e)){for(;o!==null;){var i=hr(o);if(i!==null&&ju(i),i=Di(e,n,t,r),i===null&&si(e,n,r,oo,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else si(e,n,r,null,t)}}var oo=null;function Di(e,n,t,r){if(oo=null,e=Ea(r),e=Ln(e),e!==null)if(n=Bn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Su(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return oo=e,null}function zu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dp()){case ja:return 1;case Cu:return 4;case no:case pp:return 16;case Tu:return 536870912;default:return 16}default:return 16}}var cn=null,Ra=null,_r=null;function Iu(){if(_r)return _r;var e,n=Ra,t=n.length,r,o="value"in cn?cn.value:cn.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===o[i-r];r++);return _r=o.slice(e,1<r?1-r:void 0)}function Hr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Mr(){return!0}function Ls(){return!1}function Me(e){function n(t,r,o,i,a){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Mr:Ls,this.isPropagationStopped=Ls,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Mr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Mr)},persist:function(){},isPersistent:Mr}),n}var bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},za=Me(bt),pr=B({},bt,{view:0,detail:0}),Ap=Me(pr),Qo,Xo,Tt,Co=B({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ia,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tt&&(Tt&&e.type==="mousemove"?(Qo=e.screenX-Tt.screenX,Xo=e.screenY-Tt.screenY):Xo=Qo=0,Tt=e),Qo)},movementY:function(e){return"movementY"in e?e.movementY:Xo}}),Os=Me(Co),Mp=B({},Co,{dataTransfer:0}),Cp=Me(Mp),Tp=B({},pr,{relatedTarget:0}),ei=Me(Tp),Vp=B({},bt,{animationName:0,elapsedTime:0,pseudoElement:0}),Ep=Me(Vp),jp=B({},bt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Np=Me(jp),Lp=B({},bt,{data:0}),Rs=Me(Lp),Op={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ip(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zp[e])?!!n[e]:!1}function Ia(){return Ip}var Up=B({},pr,{key:function(e){if(e.key){var n=Op[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ia,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fp=Me(Up),Wp=B({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zs=Me(Wp),Dp=B({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ia}),_p=Me(Dp),Hp=B({},bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bp=Me(Hp),Gp=B({},Co,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zp=Me(Gp),Yp=[9,13,27,32],Ua=Xe&&"CompositionEvent"in window,Ut=null;Xe&&"documentMode"in document&&(Ut=document.documentMode);var qp=Xe&&"TextEvent"in window&&!Ut,Uu=Xe&&(!Ua||Ut&&8<Ut&&11>=Ut),Is=" ",Us=!1;function Fu(e,n){switch(e){case"keyup":return Yp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kn=!1;function $p(e,n){switch(e){case"compositionend":return Wu(n);case"keypress":return n.which!==32?null:(Us=!0,Is);case"textInput":return e=n.data,e===Is&&Us?null:e;default:return null}}function Jp(e,n){if(Kn)return e==="compositionend"||!Ua&&Fu(e,n)?(e=Iu(),_r=Ra=cn=null,Kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Uu&&n.locale!=="ko"?null:n.data;default:return null}}var Kp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Kp[e.type]:n==="textarea"}function Du(e,n,t,r){vu(r),n=io(n,"onChange"),0<n.length&&(t=new za("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Ft=null,Kt=null;function Qp(e){Qu(e,0)}function To(e){var n=et(e);if(du(n))return e}function Xp(e,n){if(e==="change")return n}var _u=!1;if(Xe){var ni;if(Xe){var ti="oninput"in document;if(!ti){var Ws=document.createElement("div");Ws.setAttribute("oninput","return;"),ti=typeof Ws.oninput=="function"}ni=ti}else ni=!1;_u=ni&&(!document.documentMode||9<document.documentMode)}function Ds(){Ft&&(Ft.detachEvent("onpropertychange",Hu),Kt=Ft=null)}function Hu(e){if(e.propertyName==="value"&&To(Kt)){var n=[];Du(n,Kt,e,Ea(e)),Pu(Qp,n)}}function eh(e,n,t){e==="focusin"?(Ds(),Ft=n,Kt=t,Ft.attachEvent("onpropertychange",Hu)):e==="focusout"&&Ds()}function nh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return To(Kt)}function th(e,n){if(e==="click")return To(n)}function rh(e,n){if(e==="input"||e==="change")return To(n)}function oh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var De=typeof Object.is=="function"?Object.is:oh;function Qt(e,n){if(De(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Si.call(n,o)||!De(e[o],n[o]))return!1}return!0}function _s(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hs(e,n){var t=_s(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=_s(t)}}function Bu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Bu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gu(){for(var e=window,n=Qr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Qr(e.document)}return n}function Fa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ih(e){var n=Gu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Bu(t.ownerDocument.documentElement,t)){if(r!==null&&Fa(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Hs(t,i);var a=Hs(t,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ah=Xe&&"documentMode"in document&&11>=document.documentMode,Qn=null,_i=null,Wt=null,Hi=!1;function Bs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Hi||Qn==null||Qn!==Qr(r)||(r=Qn,"selectionStart"in r&&Fa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wt&&Qt(Wt,r)||(Wt=r,r=io(_i,"onSelect"),0<r.length&&(n=new za("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Qn)))}function Cr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Xn={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionend:Cr("Transition","TransitionEnd")},ri={},Zu={};Xe&&(Zu=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Vo(e){if(ri[e])return ri[e];if(!Xn[e])return e;var n=Xn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Zu)return ri[e]=n[t];return e}var Yu=Vo("animationend"),qu=Vo("animationiteration"),$u=Vo("animationstart"),Ju=Vo("transitionend"),Ku=new Map,Gs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,n){Ku.set(e,n),Hn(n,[e])}for(var oi=0;oi<Gs.length;oi++){var ii=Gs[oi],sh=ii.toLowerCase(),lh=ii[0].toUpperCase()+ii.slice(1);xn(sh,"on"+lh)}xn(Yu,"onAnimationEnd");xn(qu,"onAnimationIteration");xn($u,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(Ju,"onTransitionEnd");ht("onMouseEnter",["mouseout","mouseover"]);ht("onMouseLeave",["mouseout","mouseover"]);ht("onPointerEnter",["pointerout","pointerover"]);ht("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rt));function Zs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,sp(r,n,void 0,e),e.currentTarget=null}function Qu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;Zs(o,s,u),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;Zs(o,s,u),i=l}}}if(eo)throw e=Ui,eo=!1,Ui=null,e}function U(e,n){var t=n[qi];t===void 0&&(t=n[qi]=new Set);var r=e+"__bubble";t.has(r)||(Xu(n,e,2,!1),t.add(r))}function ai(e,n,t){var r=0;n&&(r|=4),Xu(t,e,r,n)}var Tr="_reactListening"+Math.random().toString(36).slice(2);function Xt(e){if(!e[Tr]){e[Tr]=!0,au.forEach(function(t){t!=="selectionchange"&&(uh.has(t)||ai(t,!1,e),ai(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Tr]||(n[Tr]=!0,ai("selectionchange",!1,n))}}function Xu(e,n,t,r){switch(zu(n)){case 1:var o=Sp;break;case 4:o=xp;break;default:o=Oa}t=o.bind(null,n,t,e),o=void 0,!Ii||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function si(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Ln(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Pu(function(){var u=i,f=Ea(t),d=[];e:{var m=Ku.get(e);if(m!==void 0){var y=za,v=e;switch(e){case"keypress":if(Hr(t)===0)break e;case"keydown":case"keyup":y=Fp;break;case"focusin":v="focus",y=ei;break;case"focusout":v="blur",y=ei;break;case"beforeblur":case"afterblur":y=ei;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=_p;break;case Yu:case qu:case $u:y=Ep;break;case Ju:y=Bp;break;case"scroll":y=Ap;break;case"wheel":y=Zp;break;case"copy":case"cut":case"paste":y=Np;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=zs}var k=(n&4)!==0,A=!k&&e==="scroll",h=k?m!==null?m+"Capture":null:m;k=[];for(var c=u,g;c!==null;){g=c;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,h!==null&&(w=Yt(c,h),w!=null&&k.push(er(c,w,g)))),A)break;c=c.return}0<k.length&&(m=new y(m,v,null,t,f),d.push({event:m,listeners:k}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&t!==Ri&&(v=t.relatedTarget||t.fromElement)&&(Ln(v)||v[en]))break e;if((y||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,y?(v=t.relatedTarget||t.toElement,y=u,v=v?Ln(v):null,v!==null&&(A=Bn(v),v!==A||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(k=Os,w="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=zs,w="onPointerLeave",h="onPointerEnter",c="pointer"),A=y==null?m:et(y),g=v==null?m:et(v),m=new k(w,c+"leave",y,t,f),m.target=A,m.relatedTarget=g,w=null,Ln(f)===u&&(k=new k(h,c+"enter",v,t,f),k.target=g,k.relatedTarget=A,w=k),A=w,y&&v)n:{for(k=y,h=v,c=0,g=k;g;g=qn(g))c++;for(g=0,w=h;w;w=qn(w))g++;for(;0<c-g;)k=qn(k),c--;for(;0<g-c;)h=qn(h),g--;for(;c--;){if(k===h||h!==null&&k===h.alternate)break n;k=qn(k),h=qn(h)}k=null}else k=null;y!==null&&Ys(d,m,y,k,!1),v!==null&&A!==null&&Ys(d,A,v,k,!0)}}e:{if(m=u?et(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var x=Xp;else if(Fs(m))if(_u)x=rh;else{x=nh;var S=eh}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(x=th);if(x&&(x=x(e,u))){Du(d,x,t,f);break e}S&&S(e,m,u),e==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&Ei(m,"number",m.value)}switch(S=u?et(u):window,e){case"focusin":(Fs(S)||S.contentEditable==="true")&&(Qn=S,_i=u,Wt=null);break;case"focusout":Wt=_i=Qn=null;break;case"mousedown":Hi=!0;break;case"contextmenu":case"mouseup":case"dragend":Hi=!1,Bs(d,t,f);break;case"selectionchange":if(ah)break;case"keydown":case"keyup":Bs(d,t,f)}var T;if(Ua)e:{switch(e){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Kn?Fu(e,t)&&(V="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(V="onCompositionStart");V&&(Uu&&t.locale!=="ko"&&(Kn||V!=="onCompositionStart"?V==="onCompositionEnd"&&Kn&&(T=Iu()):(cn=f,Ra="value"in cn?cn.value:cn.textContent,Kn=!0)),S=io(u,V),0<S.length&&(V=new Rs(V,e,null,t,f),d.push({event:V,listeners:S}),T?V.data=T:(T=Wu(t),T!==null&&(V.data=T)))),(T=qp?$p(e,t):Jp(e,t))&&(u=io(u,"onBeforeInput"),0<u.length&&(f=new Rs("onBeforeInput","beforeinput",null,t,f),d.push({event:f,listeners:u}),f.data=T))}Qu(d,n)})}function er(e,n,t){return{instance:e,listener:n,currentTarget:t}}function io(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Yt(e,t),i!=null&&r.unshift(er(e,i,o)),i=Yt(e,n),i!=null&&r.push(er(e,i,o))),e=e.return}return r}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ys(e,n,t,r,o){for(var i=n._reactName,a=[];t!==null&&t!==r;){var s=t,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=Yt(t,i),l!=null&&a.unshift(er(t,l,s))):o||(l=Yt(t,i),l!=null&&a.push(er(t,l,s)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var ch=/\r\n?/g,dh=/\u0000|\uFFFD/g;function qs(e){return(typeof e=="string"?e:""+e).replace(ch,`
`).replace(dh,"")}function Vr(e,n,t){if(n=qs(n),qs(e)!==n&&t)throw Error(P(425))}function ao(){}var Bi=null,Gi=null;function Zi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yi=typeof setTimeout=="function"?setTimeout:void 0,ph=typeof clearTimeout=="function"?clearTimeout:void 0,$s=typeof Promise=="function"?Promise:void 0,hh=typeof queueMicrotask=="function"?queueMicrotask:typeof $s<"u"?function(e){return $s.resolve(null).then(e).catch(fh)}:Yi;function fh(e){setTimeout(function(){throw e})}function li(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Jt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Jt(n)}function mn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Js(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Pt=Math.random().toString(36).slice(2),Be="__reactFiber$"+Pt,nr="__reactProps$"+Pt,en="__reactContainer$"+Pt,qi="__reactEvents$"+Pt,gh="__reactListeners$"+Pt,mh="__reactHandles$"+Pt;function Ln(e){var n=e[Be];if(n)return n;for(var t=e.parentNode;t;){if(n=t[en]||t[Be]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Js(e);e!==null;){if(t=e[Be])return t;e=Js(e)}return n}e=t,t=e.parentNode}return null}function hr(e){return e=e[Be]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function et(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Eo(e){return e[nr]||null}var $i=[],nt=-1;function An(e){return{current:e}}function F(e){0>nt||(e.current=$i[nt],$i[nt]=null,nt--)}function I(e,n){nt++,$i[nt]=e.current,e.current=n}var Sn={},ue=An(Sn),ve=An(!1),Un=Sn;function ft(e,n){var t=e.type.contextTypes;if(!t)return Sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function we(e){return e=e.childContextTypes,e!=null}function so(){F(ve),F(ue)}function Ks(e,n,t){if(ue.current!==Sn)throw Error(P(168));I(ue,n),I(ve,t)}function ec(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(P(108,ep(e)||"Unknown",o));return B({},t,r)}function lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,Un=ue.current,I(ue,e),I(ve,ve.current),!0}function Qs(e,n,t){var r=e.stateNode;if(!r)throw Error(P(169));t?(e=ec(e,n,Un),r.__reactInternalMemoizedMergedChildContext=e,F(ve),F(ue),I(ue,e)):F(ve),I(ve,t)}var $e=null,jo=!1,ui=!1;function nc(e){$e===null?$e=[e]:$e.push(e)}function yh(e){jo=!0,nc(e)}function Mn(){if(!ui&&$e!==null){ui=!0;var e=0,n=R;try{var t=$e;for(R=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}$e=null,jo=!1}catch(o){throw $e!==null&&($e=$e.slice(e+1)),Mu(ja,Mn),o}finally{R=n,ui=!1}}return null}var tt=[],rt=0,uo=null,co=0,Ce=[],Te=0,Fn=null,Je=1,Ke="";function jn(e,n){tt[rt++]=co,tt[rt++]=uo,uo=e,co=n}function tc(e,n,t){Ce[Te++]=Je,Ce[Te++]=Ke,Ce[Te++]=Fn,Fn=e;var r=Je;e=Ke;var o=32-Fe(r)-1;r&=~(1<<o),t+=1;var i=32-Fe(n)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Je=1<<32-Fe(n)+o|t<<o|r,Ke=i+e}else Je=1<<i|t<<o|r,Ke=e}function Wa(e){e.return!==null&&(jn(e,1),tc(e,1,0))}function Da(e){for(;e===uo;)uo=tt[--rt],tt[rt]=null,co=tt[--rt],tt[rt]=null;for(;e===Fn;)Fn=Ce[--Te],Ce[Te]=null,Ke=Ce[--Te],Ce[Te]=null,Je=Ce[--Te],Ce[Te]=null}var Se=null,Pe=null,W=!1,Ue=null;function rc(e,n){var t=Ve(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Xs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Se=e,Pe=mn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Se=e,Pe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Fn!==null?{id:Je,overflow:Ke}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ve(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Se=e,Pe=null,!0):!1;default:return!1}}function Ji(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ki(e){if(W){var n=Pe;if(n){var t=n;if(!Xs(e,n)){if(Ji(e))throw Error(P(418));n=mn(t.nextSibling);var r=Se;n&&Xs(e,n)?rc(r,t):(e.flags=e.flags&-4097|2,W=!1,Se=e)}}else{if(Ji(e))throw Error(P(418));e.flags=e.flags&-4097|2,W=!1,Se=e}}}function el(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Er(e){if(e!==Se)return!1;if(!W)return el(e),W=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Zi(e.type,e.memoizedProps)),n&&(n=Pe)){if(Ji(e))throw oc(),Error(P(418));for(;n;)rc(e,n),n=mn(n.nextSibling)}if(el(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Pe=mn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Pe=null}}else Pe=Se?mn(e.stateNode.nextSibling):null;return!0}function oc(){for(var e=Pe;e;)e=mn(e.nextSibling)}function gt(){Pe=Se=null,W=!1}function _a(e){Ue===null?Ue=[e]:Ue.push(e)}var vh=rn.ReactCurrentBatchConfig;function Vt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var r=t.stateNode}if(!r)throw Error(P(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function jr(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function nl(e){var n=e._init;return n(e._payload)}function ic(e){function n(h,c){if(e){var g=h.deletions;g===null?(h.deletions=[c],h.flags|=16):g.push(c)}}function t(h,c){if(!e)return null;for(;c!==null;)n(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function o(h,c){return h=kn(h,c),h.index=0,h.sibling=null,h}function i(h,c,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<c?(h.flags|=2,c):g):(h.flags|=2,c)):(h.flags|=1048576,c)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,c,g,w){return c===null||c.tag!==6?(c=mi(g,h.mode,w),c.return=h,c):(c=o(c,g),c.return=h,c)}function l(h,c,g,w){var x=g.type;return x===Jn?f(h,c,g.props.children,w,g.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===an&&nl(x)===c.type)?(w=o(c,g.props),w.ref=Vt(h,c,g),w.return=h,w):(w=Jr(g.type,g.key,g.props,null,h.mode,w),w.ref=Vt(h,c,g),w.return=h,w)}function u(h,c,g,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==g.containerInfo||c.stateNode.implementation!==g.implementation?(c=yi(g,h.mode,w),c.return=h,c):(c=o(c,g.children||[]),c.return=h,c)}function f(h,c,g,w,x){return c===null||c.tag!==7?(c=In(g,h.mode,w,x),c.return=h,c):(c=o(c,g),c.return=h,c)}function d(h,c,g){if(typeof c=="string"&&c!==""||typeof c=="number")return c=mi(""+c,h.mode,g),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case kr:return g=Jr(c.type,c.key,c.props,null,h.mode,g),g.ref=Vt(h,null,c),g.return=h,g;case $n:return c=yi(c,h.mode,g),c.return=h,c;case an:var w=c._init;return d(h,w(c._payload),g)}if(Lt(c)||xt(c))return c=In(c,h.mode,g,null),c.return=h,c;jr(h,c)}return null}function m(h,c,g,w){var x=c!==null?c.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:s(h,c,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case kr:return g.key===x?l(h,c,g,w):null;case $n:return g.key===x?u(h,c,g,w):null;case an:return x=g._init,m(h,c,x(g._payload),w)}if(Lt(g)||xt(g))return x!==null?null:f(h,c,g,w,null);jr(h,g)}return null}function y(h,c,g,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(g)||null,s(c,h,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case kr:return h=h.get(w.key===null?g:w.key)||null,l(c,h,w,x);case $n:return h=h.get(w.key===null?g:w.key)||null,u(c,h,w,x);case an:var S=w._init;return y(h,c,g,S(w._payload),x)}if(Lt(w)||xt(w))return h=h.get(g)||null,f(c,h,w,x,null);jr(c,w)}return null}function v(h,c,g,w){for(var x=null,S=null,T=c,V=c=0,z=null;T!==null&&V<g.length;V++){T.index>V?(z=T,T=null):z=T.sibling;var N=m(h,T,g[V],w);if(N===null){T===null&&(T=z);break}e&&T&&N.alternate===null&&n(h,T),c=i(N,c,V),S===null?x=N:S.sibling=N,S=N,T=z}if(V===g.length)return t(h,T),W&&jn(h,V),x;if(T===null){for(;V<g.length;V++)T=d(h,g[V],w),T!==null&&(c=i(T,c,V),S===null?x=T:S.sibling=T,S=T);return W&&jn(h,V),x}for(T=r(h,T);V<g.length;V++)z=y(T,h,V,g[V],w),z!==null&&(e&&z.alternate!==null&&T.delete(z.key===null?V:z.key),c=i(z,c,V),S===null?x=z:S.sibling=z,S=z);return e&&T.forEach(function($){return n(h,$)}),W&&jn(h,V),x}function k(h,c,g,w){var x=xt(g);if(typeof x!="function")throw Error(P(150));if(g=x.call(g),g==null)throw Error(P(151));for(var S=x=null,T=c,V=c=0,z=null,N=g.next();T!==null&&!N.done;V++,N=g.next()){T.index>V?(z=T,T=null):z=T.sibling;var $=m(h,T,N.value,w);if($===null){T===null&&(T=z);break}e&&T&&$.alternate===null&&n(h,T),c=i($,c,V),S===null?x=$:S.sibling=$,S=$,T=z}if(N.done)return t(h,T),W&&jn(h,V),x;if(T===null){for(;!N.done;V++,N=g.next())N=d(h,N.value,w),N!==null&&(c=i(N,c,V),S===null?x=N:S.sibling=N,S=N);return W&&jn(h,V),x}for(T=r(h,T);!N.done;V++,N=g.next())N=y(T,h,V,N.value,w),N!==null&&(e&&N.alternate!==null&&T.delete(N.key===null?V:N.key),c=i(N,c,V),S===null?x=N:S.sibling=N,S=N);return e&&T.forEach(function(J){return n(h,J)}),W&&jn(h,V),x}function A(h,c,g,w){if(typeof g=="object"&&g!==null&&g.type===Jn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case kr:e:{for(var x=g.key,S=c;S!==null;){if(S.key===x){if(x=g.type,x===Jn){if(S.tag===7){t(h,S.sibling),c=o(S,g.props.children),c.return=h,h=c;break e}}else if(S.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===an&&nl(x)===S.type){t(h,S.sibling),c=o(S,g.props),c.ref=Vt(h,S,g),c.return=h,h=c;break e}t(h,S);break}else n(h,S);S=S.sibling}g.type===Jn?(c=In(g.props.children,h.mode,w,g.key),c.return=h,h=c):(w=Jr(g.type,g.key,g.props,null,h.mode,w),w.ref=Vt(h,c,g),w.return=h,h=w)}return a(h);case $n:e:{for(S=g.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===g.containerInfo&&c.stateNode.implementation===g.implementation){t(h,c.sibling),c=o(c,g.children||[]),c.return=h,h=c;break e}else{t(h,c);break}else n(h,c);c=c.sibling}c=yi(g,h.mode,w),c.return=h,h=c}return a(h);case an:return S=g._init,A(h,c,S(g._payload),w)}if(Lt(g))return v(h,c,g,w);if(xt(g))return k(h,c,g,w);jr(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,c!==null&&c.tag===6?(t(h,c.sibling),c=o(c,g),c.return=h,h=c):(t(h,c),c=mi(g,h.mode,w),c.return=h,h=c),a(h)):t(h,c)}return A}var mt=ic(!0),ac=ic(!1),po=An(null),ho=null,ot=null,Ha=null;function Ba(){Ha=ot=ho=null}function Ga(e){var n=po.current;F(po),e._currentValue=n}function Qi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function dt(e,n){ho=e,Ha=ot=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(me=!0),e.firstContext=null)}function je(e){var n=e._currentValue;if(Ha!==e)if(e={context:e,memoizedValue:n,next:null},ot===null){if(ho===null)throw Error(P(308));ot=e,ho.dependencies={lanes:0,firstContext:e}}else ot=ot.next=e;return n}var On=null;function Za(e){On===null?On=[e]:On.push(e)}function sc(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Za(n)):(t.next=o.next,o.next=t),n.interleaved=t,nn(e,r)}function nn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var sn=!1;function Ya(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function yn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,nn(e,t)}return o=r.interleaved,o===null?(n.next=n,Za(r)):(n.next=o.next,o.next=n),r.interleaved=n,nn(e,t)}function Br(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Na(e,t)}}function tl(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function fo(e,n,t,r){var o=e.updateQueue;sn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=l))}if(i!==null){var d=o.baseState;a=0,f=u=l=null,s=i;do{var m=s.lane,y=s.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,k=s;switch(m=n,y=t,k.tag){case 1:if(v=k.payload,typeof v=="function"){d=v.call(y,d,m);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,m=typeof v=="function"?v.call(y,d,m):v,m==null)break e;d=B({},d,m);break e;case 2:sn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else y={eventTime:y,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=y,l=d):f=f.next=y,a|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(f===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=f,n=o.shared.interleaved,n!==null){o=n;do a|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);Dn|=a,e.lanes=a,e.memoizedState=d}}function rl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var fr={},Ze=An(fr),tr=An(fr),rr=An(fr);function Rn(e){if(e===fr)throw Error(P(174));return e}function qa(e,n){switch(I(rr,n),I(tr,e),I(Ze,fr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ni(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ni(n,e)}F(Ze),I(Ze,n)}function yt(){F(Ze),F(tr),F(rr)}function uc(e){Rn(rr.current);var n=Rn(Ze.current),t=Ni(n,e.type);n!==t&&(I(tr,e),I(Ze,t))}function $a(e){tr.current===e&&(F(Ze),F(tr))}var _=An(0);function go(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ci=[];function Ja(){for(var e=0;e<ci.length;e++)ci[e]._workInProgressVersionPrimary=null;ci.length=0}var Gr=rn.ReactCurrentDispatcher,di=rn.ReactCurrentBatchConfig,Wn=0,H=null,K=null,ne=null,mo=!1,Dt=!1,or=0,wh=0;function ae(){throw Error(P(321))}function Ka(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!De(e[t],n[t]))return!1;return!0}function Qa(e,n,t,r,o,i){if(Wn=i,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Gr.current=e===null||e.memoizedState===null?Sh:xh,e=t(r,o),Dt){i=0;do{if(Dt=!1,or=0,25<=i)throw Error(P(301));i+=1,ne=K=null,n.updateQueue=null,Gr.current=Ah,e=t(r,o)}while(Dt)}if(Gr.current=yo,n=K!==null&&K.next!==null,Wn=0,ne=K=H=null,mo=!1,n)throw Error(P(300));return e}function Xa(){var e=or!==0;return or=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?H.memoizedState=ne=e:ne=ne.next=e,ne}function Ne(){if(K===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var n=ne===null?H.memoizedState:ne.next;if(n!==null)ne=n,K=e;else{if(e===null)throw Error(P(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},ne===null?H.memoizedState=ne=e:ne=ne.next=e}return ne}function ir(e,n){return typeof n=="function"?n(e):n}function pi(e){var n=Ne(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=K,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,u=i;do{var f=u.lane;if((Wn&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,H.lanes|=f,Dn|=f}u=u.next}while(u!==null&&u!==i);l===null?a=r:l.next=s,De(r,n.memoizedState)||(me=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=l,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,H.lanes|=i,Dn|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function hi(e){var n=Ne(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);De(i,n.memoizedState)||(me=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function cc(){}function dc(e,n){var t=H,r=Ne(),o=n(),i=!De(r.memoizedState,o);if(i&&(r.memoizedState=o,me=!0),r=r.queue,es(fc.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ne!==null&&ne.memoizedState.tag&1){if(t.flags|=2048,ar(9,hc.bind(null,t,r,o,n),void 0,null),te===null)throw Error(P(349));Wn&30||pc(t,n,o)}return o}function pc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function hc(e,n,t,r){n.value=t,n.getSnapshot=r,gc(n)&&mc(e)}function fc(e,n,t){return t(function(){gc(n)&&mc(e)})}function gc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!De(e,t)}catch{return!0}}function mc(e){var n=nn(e,1);n!==null&&We(n,e,1,-1)}function ol(e){var n=He();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},n.queue=e,e=e.dispatch=Ph.bind(null,H,e),[n.memoizedState,e]}function ar(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function yc(){return Ne().memoizedState}function Zr(e,n,t,r){var o=He();H.flags|=e,o.memoizedState=ar(1|n,t,void 0,r===void 0?null:r)}function No(e,n,t,r){var o=Ne();r=r===void 0?null:r;var i=void 0;if(K!==null){var a=K.memoizedState;if(i=a.destroy,r!==null&&Ka(r,a.deps)){o.memoizedState=ar(n,t,i,r);return}}H.flags|=e,o.memoizedState=ar(1|n,t,i,r)}function il(e,n){return Zr(8390656,8,e,n)}function es(e,n){return No(2048,8,e,n)}function vc(e,n){return No(4,2,e,n)}function wc(e,n){return No(4,4,e,n)}function kc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function bc(e,n,t){return t=t!=null?t.concat([e]):null,No(4,4,kc.bind(null,n,e),t)}function ns(){}function Pc(e,n){var t=Ne();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ka(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Sc(e,n){var t=Ne();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ka(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function xc(e,n,t){return Wn&21?(De(t,n)||(t=Vu(),H.lanes|=t,Dn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=t)}function kh(e,n){var t=R;R=t!==0&&4>t?t:4,e(!0);var r=di.transition;di.transition={};try{e(!1),n()}finally{R=t,di.transition=r}}function Ac(){return Ne().memoizedState}function bh(e,n,t){var r=wn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Mc(e))Cc(n,t);else if(t=sc(e,n,t,r),t!==null){var o=pe();We(t,e,r,o),Tc(t,n,r)}}function Ph(e,n,t){var r=wn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Mc(e))Cc(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,s=i(a,t);if(o.hasEagerState=!0,o.eagerState=s,De(s,a)){var l=n.interleaved;l===null?(o.next=o,Za(n)):(o.next=l.next,l.next=o),n.interleaved=o;return}}catch{}finally{}t=sc(e,n,o,r),t!==null&&(o=pe(),We(t,e,r,o),Tc(t,n,r))}}function Mc(e){var n=e.alternate;return e===H||n!==null&&n===H}function Cc(e,n){Dt=mo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Tc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Na(e,t)}}var yo={readContext:je,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Sh={readContext:je,useCallback:function(e,n){return He().memoizedState=[e,n===void 0?null:n],e},useContext:je,useEffect:il,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Zr(4194308,4,kc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Zr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Zr(4,2,e,n)},useMemo:function(e,n){var t=He();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=He();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=bh.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=He();return e={current:e},n.memoizedState=e},useState:ol,useDebugValue:ns,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=ol(!1),n=e[0];return e=kh.bind(null,e[1]),He().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,o=He();if(W){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),te===null)throw Error(P(349));Wn&30||pc(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,il(fc.bind(null,r,i,e),[e]),r.flags|=2048,ar(9,hc.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=He(),n=te.identifierPrefix;if(W){var t=Ke,r=Je;t=(r&~(1<<32-Fe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=or++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=wh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},xh={readContext:je,useCallback:Pc,useContext:je,useEffect:es,useImperativeHandle:bc,useInsertionEffect:vc,useLayoutEffect:wc,useMemo:Sc,useReducer:pi,useRef:yc,useState:function(){return pi(ir)},useDebugValue:ns,useDeferredValue:function(e){var n=Ne();return xc(n,K.memoizedState,e)},useTransition:function(){var e=pi(ir)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:cc,useSyncExternalStore:dc,useId:Ac,unstable_isNewReconciler:!1},Ah={readContext:je,useCallback:Pc,useContext:je,useEffect:es,useImperativeHandle:bc,useInsertionEffect:vc,useLayoutEffect:wc,useMemo:Sc,useReducer:hi,useRef:yc,useState:function(){return hi(ir)},useDebugValue:ns,useDeferredValue:function(e){var n=Ne();return K===null?n.memoizedState=e:xc(n,K.memoizedState,e)},useTransition:function(){var e=hi(ir)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:cc,useSyncExternalStore:dc,useId:Ac,unstable_isNewReconciler:!1};function ze(e,n){if(e&&e.defaultProps){n=B({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Xi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:B({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Lo={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=pe(),o=wn(e),i=Qe(r,o);i.payload=n,t!=null&&(i.callback=t),n=yn(e,i,o),n!==null&&(We(n,e,o,r),Br(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=pe(),o=wn(e),i=Qe(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=yn(e,i,o),n!==null&&(We(n,e,o,r),Br(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=pe(),r=wn(e),o=Qe(t,r);o.tag=2,n!=null&&(o.callback=n),n=yn(e,o,r),n!==null&&(We(n,e,r,t),Br(n,e,r))}};function al(e,n,t,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!Qt(t,r)||!Qt(o,i):!0}function Vc(e,n,t){var r=!1,o=Sn,i=n.contextType;return typeof i=="object"&&i!==null?i=je(i):(o=we(n)?Un:ue.current,r=n.contextTypes,i=(r=r!=null)?ft(e,o):Sn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Lo,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function sl(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Lo.enqueueReplaceState(n,n.state,null)}function ea(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Ya(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=je(i):(i=we(n)?Un:ue.current,o.context=ft(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Xi(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Lo.enqueueReplaceState(o,o.state,null),fo(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function vt(e,n){try{var t="",r=n;do t+=Xd(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function fi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function na(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Mh=typeof WeakMap=="function"?WeakMap:Map;function Ec(e,n,t){t=Qe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){wo||(wo=!0,da=r),na(e,n)},t}function jc(e,n,t){t=Qe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){na(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){na(e,n),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function ll(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Mh;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Wh.bind(null,e,n,t),n.then(e,e))}function ul(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function cl(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Qe(-1,1),n.tag=2,yn(t,n,1))),t.lanes|=1),e)}var Ch=rn.ReactCurrentOwner,me=!1;function de(e,n,t,r){n.child=e===null?ac(n,null,t,r):mt(n,e.child,t,r)}function dl(e,n,t,r,o){t=t.render;var i=n.ref;return dt(n,o),r=Qa(e,n,t,r,i,o),t=Xa(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,tn(e,n,o)):(W&&t&&Wa(n),n.flags|=1,de(e,n,r,o),n.child)}function pl(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!us(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Nc(e,n,i,r,o)):(e=Jr(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:Qt,t(a,r)&&e.ref===n.ref)return tn(e,n,o)}return n.flags|=1,e=kn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Nc(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(Qt(i,r)&&e.ref===n.ref)if(me=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(me=!0);else return n.lanes=e.lanes,tn(e,n,o)}return ta(e,n,t,r,o)}function Lc(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(at,be),be|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,I(at,be),be|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,I(at,be),be|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,I(at,be),be|=r;return de(e,n,o,t),n.child}function Oc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ta(e,n,t,r,o){var i=we(t)?Un:ue.current;return i=ft(n,i),dt(n,o),t=Qa(e,n,t,r,i,o),r=Xa(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,tn(e,n,o)):(W&&r&&Wa(n),n.flags|=1,de(e,n,t,o),n.child)}function hl(e,n,t,r,o){if(we(t)){var i=!0;lo(n)}else i=!1;if(dt(n,o),n.stateNode===null)Yr(e,n),Vc(n,t,r),ea(n,t,r,o),r=!0;else if(e===null){var a=n.stateNode,s=n.memoizedProps;a.props=s;var l=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=je(u):(u=we(t)?Un:ue.current,u=ft(n,u));var f=t.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&sl(n,a,r,u),sn=!1;var m=n.memoizedState;a.state=m,fo(n,r,a,o),l=n.memoizedState,s!==r||m!==l||ve.current||sn?(typeof f=="function"&&(Xi(n,t,f,r),l=n.memoizedState),(s=sn||al(n,t,s,r,m,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,lc(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:ze(n.type,s),a.props=u,d=n.pendingProps,m=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=je(l):(l=we(t)?Un:ue.current,l=ft(n,l));var y=t.getDerivedStateFromProps;(f=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||m!==l)&&sl(n,a,r,l),sn=!1,m=n.memoizedState,a.state=m,fo(n,r,a,o);var v=n.memoizedState;s!==d||m!==v||ve.current||sn?(typeof y=="function"&&(Xi(n,t,y,r),v=n.memoizedState),(u=sn||al(n,t,u,r,m,v,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,l)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),a.props=r,a.state=v,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return ra(e,n,t,r,i,o)}function ra(e,n,t,r,o,i){Oc(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return o&&Qs(n,t,!1),tn(e,n,i);r=n.stateNode,Ch.current=n;var s=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=mt(n,e.child,null,i),n.child=mt(n,null,s,i)):de(e,n,s,i),n.memoizedState=r.state,o&&Qs(n,t,!0),n.child}function Rc(e){var n=e.stateNode;n.pendingContext?Ks(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ks(e,n.context,!1),qa(e,n.containerInfo)}function fl(e,n,t,r,o){return gt(),_a(o),n.flags|=256,de(e,n,t,r),n.child}var oa={dehydrated:null,treeContext:null,retryLane:0};function ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function zc(e,n,t){var r=n.pendingProps,o=_.current,i=!1,a=(n.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),I(_,o&1),e===null)return Ki(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=zo(a,r,0,null),e=In(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=ia(t),n.memoizedState=oa,e):ts(n,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Th(e,n,a,r,s,o,t);if(i){i=r.fallback,a=n.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=l,n.deletions=null):(r=kn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=kn(s,i):(i=In(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?ia(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=oa,r}return i=e.child,e=i.sibling,r=kn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ts(e,n){return n=zo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Nr(e,n,t,r){return r!==null&&_a(r),mt(n,e.child,null,t),e=ts(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Th(e,n,t,r,o,i,a){if(t)return n.flags&256?(n.flags&=-257,r=fi(Error(P(422))),Nr(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=zo({mode:"visible",children:r.children},o,0,null),i=In(i,o,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&mt(n,e.child,null,a),n.child.memoizedState=ia(a),n.memoizedState=oa,i);if(!(n.mode&1))return Nr(e,n,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(P(419)),r=fi(i,r,void 0),Nr(e,n,a,r)}if(s=(a&e.childLanes)!==0,me||s){if(r=te,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,nn(e,o),We(r,e,o,-1))}return ls(),r=fi(Error(P(421))),Nr(e,n,a,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Dh.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,Pe=mn(o.nextSibling),Se=n,W=!0,Ue=null,e!==null&&(Ce[Te++]=Je,Ce[Te++]=Ke,Ce[Te++]=Fn,Je=e.id,Ke=e.overflow,Fn=n),n=ts(n,r.children),n.flags|=4096,n)}function gl(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Qi(e.return,n,t)}function gi(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function Ic(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(de(e,n,r.children,t),r=_.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gl(e,t,n);else if(e.tag===19)gl(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(_,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&go(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),gi(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&go(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}gi(n,!0,t,null,i);break;case"together":gi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Yr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function tn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Dn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=kn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=kn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Vh(e,n,t){switch(n.tag){case 3:Rc(n),gt();break;case 5:uc(n);break;case 1:we(n.type)&&lo(n);break;case 4:qa(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;I(po,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(I(_,_.current&1),n.flags|=128,null):t&n.child.childLanes?zc(e,n,t):(I(_,_.current&1),e=tn(e,n,t),e!==null?e.sibling:null);I(_,_.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ic(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),I(_,_.current),r)break;return null;case 22:case 23:return n.lanes=0,Lc(e,n,t)}return tn(e,n,t)}var Uc,aa,Fc,Wc;Uc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};aa=function(){};Fc=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Rn(Ze.current);var i=null;switch(t){case"input":o=Ti(e,o),r=Ti(e,r),i=[];break;case"select":o=B({},o,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":o=ji(e,o),r=ji(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ao)}Li(t,r);var a;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Gt.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(i||(i=[]),i.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Gt.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&U("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};Wc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Et(e,n){if(!W)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Eh(e,n,t){var r=n.pendingProps;switch(Da(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return we(n.type)&&so(),se(n),null;case 3:return r=n.stateNode,yt(),F(ve),F(ue),Ja(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ue!==null&&(fa(Ue),Ue=null))),aa(e,n),se(n),null;case 5:$a(n);var o=Rn(rr.current);if(t=n.type,e!==null&&n.stateNode!=null)Fc(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(P(166));return se(n),null}if(e=Rn(Ze.current),Er(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Be]=n,r[nr]=i,e=(n.mode&1)!==0,t){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(o=0;o<Rt.length;o++)U(Rt[o],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":xs(r,i),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},U("invalid",r);break;case"textarea":Ms(r,i),U("invalid",r)}Li(t,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Vr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Vr(r.textContent,s,e),o=["children",""+s]):Gt.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&U("scroll",r)}switch(t){case"input":br(r),As(r,i,!0);break;case"textarea":br(r),Cs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ao)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[Be]=n,e[nr]=r,Uc(e,n,!1,!1),n.stateNode=e;e:{switch(a=Oi(t,r),t){case"dialog":U("cancel",e),U("close",e),o=r;break;case"iframe":case"object":case"embed":U("load",e),o=r;break;case"video":case"audio":for(o=0;o<Rt.length;o++)U(Rt[o],e);o=r;break;case"source":U("error",e),o=r;break;case"img":case"image":case"link":U("error",e),U("load",e),o=r;break;case"details":U("toggle",e),o=r;break;case"input":xs(e,r),o=Ti(e,r),U("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=B({},r,{value:void 0}),U("invalid",e);break;case"textarea":Ms(e,r),o=ji(e,r),U("invalid",e);break;default:o=r}Li(t,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?yu(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gu(e,l)):i==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Zt(e,l):typeof l=="number"&&Zt(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Gt.hasOwnProperty(i)?l!=null&&i==="onScroll"&&U("scroll",e):l!=null&&Ma(e,i,l,a))}switch(t){case"input":br(e),As(e,r,!1);break;case"textarea":br(e),Cs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?st(e,!!r.multiple,i,!1):r.defaultValue!=null&&st(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ao)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)Wc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(P(166));if(t=Rn(rr.current),Rn(Ze.current),Er(n)){if(r=n.stateNode,t=n.memoizedProps,r[Be]=n,(i=r.nodeValue!==t)&&(e=Se,e!==null))switch(e.tag){case 3:Vr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Be]=n,n.stateNode=r}return se(n),null;case 13:if(F(_),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Pe!==null&&n.mode&1&&!(n.flags&128))oc(),gt(),n.flags|=98560,i=!1;else if(i=Er(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[Be]=n}else gt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),i=!1}else Ue!==null&&(fa(Ue),Ue=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||_.current&1?Q===0&&(Q=3):ls())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return yt(),aa(e,n),e===null&&Xt(n.stateNode.containerInfo),se(n),null;case 10:return Ga(n.type._context),se(n),null;case 17:return we(n.type)&&so(),se(n),null;case 19:if(F(_),i=n.memoizedState,i===null)return se(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)Et(i,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=go(e),a!==null){for(n.flags|=128,Et(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return I(_,_.current&1|2),n.child}e=e.sibling}i.tail!==null&&Z()>wt&&(n.flags|=128,r=!0,Et(i,!1),n.lanes=4194304)}else{if(!r)if(e=go(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Et(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!W)return se(n),null}else 2*Z()-i.renderingStartTime>wt&&t!==1073741824&&(n.flags|=128,r=!0,Et(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Z(),n.sibling=null,t=_.current,I(_,r?t&1|2:t&1),n):(se(n),null);case 22:case 23:return ss(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?be&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function jh(e,n){switch(Da(n),n.tag){case 1:return we(n.type)&&so(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return yt(),F(ve),F(ue),Ja(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return $a(n),null;case 13:if(F(_),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));gt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return F(_),null;case 4:return yt(),null;case 10:return Ga(n.type._context),null;case 22:case 23:return ss(),null;case 24:return null;default:return null}}var Lr=!1,le=!1,Nh=typeof WeakSet=="function"?WeakSet:Set,C=null;function it(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){G(e,n,r)}else t.current=null}function sa(e,n,t){try{t()}catch(r){G(e,n,r)}}var ml=!1;function Lh(e,n){if(Bi=ro,e=Gu(),Fa(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,s=-1,l=-1,u=0,f=0,d=e,m=null;n:for(;;){for(var y;d!==t||o!==0&&d.nodeType!==3||(s=a+o),d!==i||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(y=d.firstChild)!==null;)m=d,d=y;for(;;){if(d===e)break n;if(m===t&&++u===o&&(s=a),m===i&&++f===r&&(l=a),(y=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=y}t=s===-1||l===-1?null:{start:s,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Gi={focusedElem:e,selectionRange:t},ro=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,A=v.memoizedState,h=n.stateNode,c=h.getSnapshotBeforeUpdate(n.elementType===n.type?k:ze(n.type,k),A);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){G(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return v=ml,ml=!1,v}function _t(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&sa(n,t,i)}o=o.next}while(o!==r)}}function Oo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function la(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Dc(e){var n=e.alternate;n!==null&&(e.alternate=null,Dc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Be],delete n[nr],delete n[qi],delete n[gh],delete n[mh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _c(e){return e.tag===5||e.tag===3||e.tag===4}function yl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ua(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ao));else if(r!==4&&(e=e.child,e!==null))for(ua(e,n,t),e=e.sibling;e!==null;)ua(e,n,t),e=e.sibling}function ca(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ca(e,n,t),e=e.sibling;e!==null;)ca(e,n,t),e=e.sibling}var re=null,Ie=!1;function on(e,n,t){for(t=t.child;t!==null;)Hc(e,n,t),t=t.sibling}function Hc(e,n,t){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Mo,t)}catch{}switch(t.tag){case 5:le||it(t,n);case 6:var r=re,o=Ie;re=null,on(e,n,t),re=r,Ie=o,re!==null&&(Ie?(e=re,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):re.removeChild(t.stateNode));break;case 18:re!==null&&(Ie?(e=re,t=t.stateNode,e.nodeType===8?li(e.parentNode,t):e.nodeType===1&&li(e,t),Jt(e)):li(re,t.stateNode));break;case 4:r=re,o=Ie,re=t.stateNode.containerInfo,Ie=!0,on(e,n,t),re=r,Ie=o;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&sa(t,n,a),o=o.next}while(o!==r)}on(e,n,t);break;case 1:if(!le&&(it(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){G(t,n,s)}on(e,n,t);break;case 21:on(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,on(e,n,t),le=r):on(e,n,t);break;default:on(e,n,t)}}function vl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Nh),n.forEach(function(r){var o=_h.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function Re(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,a=n,s=a;e:for(;s!==null;){switch(s.tag){case 5:re=s.stateNode,Ie=!1;break e;case 3:re=s.stateNode.containerInfo,Ie=!0;break e;case 4:re=s.stateNode.containerInfo,Ie=!0;break e}s=s.return}if(re===null)throw Error(P(160));Hc(i,a,o),re=null,Ie=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){G(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Bc(n,e),n=n.sibling}function Bc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(n,e),_e(e),r&4){try{_t(3,e,e.return),Oo(3,e)}catch(k){G(e,e.return,k)}try{_t(5,e,e.return)}catch(k){G(e,e.return,k)}}break;case 1:Re(n,e),_e(e),r&512&&t!==null&&it(t,t.return);break;case 5:if(Re(n,e),_e(e),r&512&&t!==null&&it(t,t.return),e.flags&32){var o=e.stateNode;try{Zt(o,"")}catch(k){G(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&pu(o,i),Oi(s,a);var u=Oi(s,i);for(a=0;a<l.length;a+=2){var f=l[a],d=l[a+1];f==="style"?yu(o,d):f==="dangerouslySetInnerHTML"?gu(o,d):f==="children"?Zt(o,d):Ma(o,f,d,u)}switch(s){case"input":Vi(o,i);break;case"textarea":hu(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?st(o,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?st(o,!!i.multiple,i.defaultValue,!0):st(o,!!i.multiple,i.multiple?[]:"",!1))}o[nr]=i}catch(k){G(e,e.return,k)}}break;case 6:if(Re(n,e),_e(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){G(e,e.return,k)}}break;case 3:if(Re(n,e),_e(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Jt(n.containerInfo)}catch(k){G(e,e.return,k)}break;case 4:Re(n,e),_e(e);break;case 13:Re(n,e),_e(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(is=Z())),r&4&&vl(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(le=(u=le)||f,Re(n,e),le=u):Re(n,e),_e(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(C=e,f=e.child;f!==null;){for(d=C=f;C!==null;){switch(m=C,y=m.child,m.tag){case 0:case 11:case 14:case 15:_t(4,m,m.return);break;case 1:it(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(k){G(r,t,k)}}break;case 5:it(m,m.return);break;case 22:if(m.memoizedState!==null){kl(d);continue}}y!==null?(y.return=m,C=y):kl(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=mu("display",a))}catch(k){G(e,e.return,k)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(k){G(e,e.return,k)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Re(n,e),_e(e),r&4&&vl(e);break;case 21:break;default:Re(n,e),_e(e)}}function _e(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(_c(t)){var r=t;break e}t=t.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Zt(o,""),r.flags&=-33);var i=yl(e);ca(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=yl(e);ua(e,s,a);break;default:throw Error(P(161))}}catch(l){G(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Oh(e,n,t){C=e,Gc(e)}function Gc(e,n,t){for(var r=(e.mode&1)!==0;C!==null;){var o=C,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Lr;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||le;s=Lr;var u=le;if(Lr=a,(le=l)&&!u)for(C=o;C!==null;)a=C,l=a.child,a.tag===22&&a.memoizedState!==null?bl(o):l!==null?(l.return=a,C=l):bl(o);for(;i!==null;)C=i,Gc(i),i=i.sibling;C=o,Lr=s,le=u}wl(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,C=i):wl(e)}}function wl(e){for(;C!==null;){var n=C;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||Oo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:ze(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&rl(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}rl(n,a,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Jt(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}le||n.flags&512&&la(n)}catch(m){G(n,n.return,m)}}if(n===e){C=null;break}if(t=n.sibling,t!==null){t.return=n.return,C=t;break}C=n.return}}function kl(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var t=n.sibling;if(t!==null){t.return=n.return,C=t;break}C=n.return}}function bl(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Oo(4,n)}catch(l){G(n,t,l)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(l){G(n,o,l)}}var i=n.return;try{la(n)}catch(l){G(n,i,l)}break;case 5:var a=n.return;try{la(n)}catch(l){G(n,a,l)}}}catch(l){G(n,n.return,l)}if(n===e){C=null;break}var s=n.sibling;if(s!==null){s.return=n.return,C=s;break}C=n.return}}var Rh=Math.ceil,vo=rn.ReactCurrentDispatcher,rs=rn.ReactCurrentOwner,Ee=rn.ReactCurrentBatchConfig,O=0,te=null,Y=null,oe=0,be=0,at=An(0),Q=0,sr=null,Dn=0,Ro=0,os=0,Ht=null,ge=null,is=0,wt=1/0,qe=null,wo=!1,da=null,vn=null,Or=!1,dn=null,ko=0,Bt=0,pa=null,qr=-1,$r=0;function pe(){return O&6?Z():qr!==-1?qr:qr=Z()}function wn(e){return e.mode&1?O&2&&oe!==0?oe&-oe:vh.transition!==null?($r===0&&($r=Vu()),$r):(e=R,e!==0||(e=window.event,e=e===void 0?16:zu(e.type)),e):1}function We(e,n,t,r){if(50<Bt)throw Bt=0,pa=null,Error(P(185));dr(e,t,r),(!(O&2)||e!==te)&&(e===te&&(!(O&2)&&(Ro|=t),Q===4&&un(e,oe)),ke(e,r),t===1&&O===0&&!(n.mode&1)&&(wt=Z()+500,jo&&Mn()))}function ke(e,n){var t=e.callbackNode;vp(e,n);var r=to(e,e===te?oe:0);if(r===0)t!==null&&Es(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Es(t),n===1)e.tag===0?yh(Pl.bind(null,e)):nc(Pl.bind(null,e)),hh(function(){!(O&6)&&Mn()}),t=null;else{switch(Eu(r)){case 1:t=ja;break;case 4:t=Cu;break;case 16:t=no;break;case 536870912:t=Tu;break;default:t=no}t=Xc(t,Zc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Zc(e,n){if(qr=-1,$r=0,O&6)throw Error(P(327));var t=e.callbackNode;if(pt()&&e.callbackNode!==t)return null;var r=to(e,e===te?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=bo(e,r);else{n=r;var o=O;O|=2;var i=qc();(te!==e||oe!==n)&&(qe=null,wt=Z()+500,zn(e,n));do try{Uh();break}catch(s){Yc(e,s)}while(!0);Ba(),vo.current=i,O=o,Y!==null?n=0:(te=null,oe=0,n=Q)}if(n!==0){if(n===2&&(o=Fi(e),o!==0&&(r=o,n=ha(e,o))),n===1)throw t=sr,zn(e,0),un(e,r),ke(e,Z()),t;if(n===6)un(e,r);else{if(o=e.current.alternate,!(r&30)&&!zh(o)&&(n=bo(e,r),n===2&&(i=Fi(e),i!==0&&(r=i,n=ha(e,i))),n===1))throw t=sr,zn(e,0),un(e,r),ke(e,Z()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(P(345));case 2:Nn(e,ge,qe);break;case 3:if(un(e,r),(r&130023424)===r&&(n=is+500-Z(),10<n)){if(to(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Yi(Nn.bind(null,e,ge,qe),n);break}Nn(e,ge,qe);break;case 4:if(un(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var a=31-Fe(r);i=1<<a,a=n[a],a>o&&(o=a),r&=~i}if(r=o,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rh(r/1960))-r,10<r){e.timeoutHandle=Yi(Nn.bind(null,e,ge,qe),r);break}Nn(e,ge,qe);break;case 5:Nn(e,ge,qe);break;default:throw Error(P(329))}}}return ke(e,Z()),e.callbackNode===t?Zc.bind(null,e):null}function ha(e,n){var t=Ht;return e.current.memoizedState.isDehydrated&&(zn(e,n).flags|=256),e=bo(e,n),e!==2&&(n=ge,ge=t,n!==null&&fa(n)),e}function fa(e){ge===null?ge=e:ge.push.apply(ge,e)}function zh(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!De(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function un(e,n){for(n&=~os,n&=~Ro,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Fe(n),r=1<<t;e[t]=-1,n&=~r}}function Pl(e){if(O&6)throw Error(P(327));pt();var n=to(e,0);if(!(n&1))return ke(e,Z()),null;var t=bo(e,n);if(e.tag!==0&&t===2){var r=Fi(e);r!==0&&(n=r,t=ha(e,r))}if(t===1)throw t=sr,zn(e,0),un(e,n),ke(e,Z()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Nn(e,ge,qe),ke(e,Z()),null}function as(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(wt=Z()+500,jo&&Mn())}}function _n(e){dn!==null&&dn.tag===0&&!(O&6)&&pt();var n=O;O|=1;var t=Ee.transition,r=R;try{if(Ee.transition=null,R=1,e)return e()}finally{R=r,Ee.transition=t,O=n,!(O&6)&&Mn()}}function ss(){be=at.current,F(at)}function zn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,ph(t)),Y!==null)for(t=Y.return;t!==null;){var r=t;switch(Da(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&so();break;case 3:yt(),F(ve),F(ue),Ja();break;case 5:$a(r);break;case 4:yt();break;case 13:F(_);break;case 19:F(_);break;case 10:Ga(r.type._context);break;case 22:case 23:ss()}t=t.return}if(te=e,Y=e=kn(e.current,null),oe=be=n,Q=0,sr=null,os=Ro=Dn=0,ge=Ht=null,On!==null){for(n=0;n<On.length;n++)if(t=On[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}t.pending=r}On=null}return e}function Yc(e,n){do{var t=Y;try{if(Ba(),Gr.current=yo,mo){for(var r=H.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}mo=!1}if(Wn=0,ne=K=H=null,Dt=!1,or=0,rs.current=null,t===null||t.return===null){Q=1,sr=n,Y=null;break}e:{var i=e,a=t.return,s=t,l=n;if(n=oe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=s,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=ul(a);if(y!==null){y.flags&=-257,cl(y,a,s,i,n),y.mode&1&&ll(i,u,n),n=y,l=u;var v=n.updateQueue;if(v===null){var k=new Set;k.add(l),n.updateQueue=k}else v.add(l);break e}else{if(!(n&1)){ll(i,u,n),ls();break e}l=Error(P(426))}}else if(W&&s.mode&1){var A=ul(a);if(A!==null){!(A.flags&65536)&&(A.flags|=256),cl(A,a,s,i,n),_a(vt(l,s));break e}}i=l=vt(l,s),Q!==4&&(Q=2),Ht===null?Ht=[i]:Ht.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var h=Ec(i,l,n);tl(i,h);break e;case 1:s=l;var c=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(vn===null||!vn.has(g)))){i.flags|=65536,n&=-n,i.lanes|=n;var w=jc(i,s,n);tl(i,w);break e}}i=i.return}while(i!==null)}Jc(t)}catch(x){n=x,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(!0)}function qc(){var e=vo.current;return vo.current=yo,e===null?yo:e}function ls(){(Q===0||Q===3||Q===2)&&(Q=4),te===null||!(Dn&268435455)&&!(Ro&268435455)||un(te,oe)}function bo(e,n){var t=O;O|=2;var r=qc();(te!==e||oe!==n)&&(qe=null,zn(e,n));do try{Ih();break}catch(o){Yc(e,o)}while(!0);if(Ba(),O=t,vo.current=r,Y!==null)throw Error(P(261));return te=null,oe=0,Q}function Ih(){for(;Y!==null;)$c(Y)}function Uh(){for(;Y!==null&&!up();)$c(Y)}function $c(e){var n=Qc(e.alternate,e,be);e.memoizedProps=e.pendingProps,n===null?Jc(e):Y=n,rs.current=null}function Jc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=jh(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,Y=null;return}}else if(t=Eh(t,n,be),t!==null){Y=t;return}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);Q===0&&(Q=5)}function Nn(e,n,t){var r=R,o=Ee.transition;try{Ee.transition=null,R=1,Fh(e,n,t,r)}finally{Ee.transition=o,R=r}return null}function Fh(e,n,t,r){do pt();while(dn!==null);if(O&6)throw Error(P(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(wp(e,i),e===te&&(Y=te=null,oe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Or||(Or=!0,Xc(no,function(){return pt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ee.transition,Ee.transition=null;var a=R;R=1;var s=O;O|=4,rs.current=null,Lh(e,t),Bc(t,e),ih(Gi),ro=!!Bi,Gi=Bi=null,e.current=t,Oh(t),cp(),O=s,R=a,Ee.transition=i}else e.current=t;if(Or&&(Or=!1,dn=e,ko=o),i=e.pendingLanes,i===0&&(vn=null),hp(t.stateNode),ke(e,Z()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(wo)throw wo=!1,e=da,da=null,e;return ko&1&&e.tag!==0&&pt(),i=e.pendingLanes,i&1?e===pa?Bt++:(Bt=0,pa=e):Bt=0,Mn(),null}function pt(){if(dn!==null){var e=Eu(ko),n=Ee.transition,t=R;try{if(Ee.transition=null,R=16>e?16:e,dn===null)var r=!1;else{if(e=dn,dn=null,ko=0,O&6)throw Error(P(331));var o=O;for(O|=4,C=e.current;C!==null;){var i=C,a=i.child;if(C.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(C=u;C!==null;){var f=C;switch(f.tag){case 0:case 11:case 15:_t(8,f,i)}var d=f.child;if(d!==null)d.return=f,C=d;else for(;C!==null;){f=C;var m=f.sibling,y=f.return;if(Dc(f),f===u){C=null;break}if(m!==null){m.return=y,C=m;break}C=y}}}var v=i.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var A=k.sibling;k.sibling=null,k=A}while(k!==null)}}C=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,C=a;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:_t(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,C=h;break e}C=i.return}}var c=e.current;for(C=c;C!==null;){a=C;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,C=g;else e:for(a=c;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Oo(9,s)}}catch(x){G(s,s.return,x)}if(s===a){C=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,C=w;break e}C=s.return}}if(O=o,Mn(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Mo,e)}catch{}r=!0}return r}finally{R=t,Ee.transition=n}}return!1}function Sl(e,n,t){n=vt(t,n),n=Ec(e,n,1),e=yn(e,n,1),n=pe(),e!==null&&(dr(e,1,n),ke(e,n))}function G(e,n,t){if(e.tag===3)Sl(e,e,t);else for(;n!==null;){if(n.tag===3){Sl(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){e=vt(t,e),e=jc(n,e,1),n=yn(n,e,1),e=pe(),n!==null&&(dr(n,1,e),ke(n,e));break}}n=n.return}}function Wh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=pe(),e.pingedLanes|=e.suspendedLanes&t,te===e&&(oe&t)===t&&(Q===4||Q===3&&(oe&130023424)===oe&&500>Z()-is?zn(e,0):os|=t),ke(e,n)}function Kc(e,n){n===0&&(e.mode&1?(n=xr,xr<<=1,!(xr&130023424)&&(xr=4194304)):n=1);var t=pe();e=nn(e,n),e!==null&&(dr(e,n,t),ke(e,t))}function Dh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Kc(e,t)}function _h(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(n),Kc(e,t)}var Qc;Qc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ve.current)me=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return me=!1,Vh(e,n,t);me=!!(e.flags&131072)}else me=!1,W&&n.flags&1048576&&tc(n,co,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Yr(e,n),e=n.pendingProps;var o=ft(n,ue.current);dt(n,t),o=Qa(null,n,r,e,o,t);var i=Xa();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,we(r)?(i=!0,lo(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ya(n),o.updater=Lo,n.stateNode=o,o._reactInternals=n,ea(n,r,e,t),n=ra(null,n,r,!0,i,t)):(n.tag=0,W&&i&&Wa(n),de(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Yr(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Bh(r),e=ze(r,e),o){case 0:n=ta(null,n,r,e,t);break e;case 1:n=hl(null,n,r,e,t);break e;case 11:n=dl(null,n,r,e,t);break e;case 14:n=pl(null,n,r,ze(r.type,e),t);break e}throw Error(P(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:ze(r,o),ta(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:ze(r,o),hl(e,n,r,o,t);case 3:e:{if(Rc(n),e===null)throw Error(P(387));r=n.pendingProps,i=n.memoizedState,o=i.element,lc(e,n),fo(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=vt(Error(P(423)),n),n=fl(e,n,r,t,o);break e}else if(r!==o){o=vt(Error(P(424)),n),n=fl(e,n,r,t,o);break e}else for(Pe=mn(n.stateNode.containerInfo.firstChild),Se=n,W=!0,Ue=null,t=ac(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(gt(),r===o){n=tn(e,n,t);break e}de(e,n,r,t)}n=n.child}return n;case 5:return uc(n),e===null&&Ki(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Zi(r,o)?a=null:i!==null&&Zi(r,i)&&(n.flags|=32),Oc(e,n),de(e,n,a,t),n.child;case 6:return e===null&&Ki(n),null;case 13:return zc(e,n,t);case 4:return qa(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=mt(n,null,r,t):de(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:ze(r,o),dl(e,n,r,o,t);case 7:return de(e,n,n.pendingProps,t),n.child;case 8:return de(e,n,n.pendingProps.children,t),n.child;case 12:return de(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,a=o.value,I(po,r._currentValue),r._currentValue=a,i!==null)if(De(i.value,a)){if(i.children===o.children&&!ve.current){n=tn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Qe(-1,t&-t),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),Qi(i.return,t,n),s.lanes|=t;break}l=l.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(P(341));a.lanes|=t,s=a.alternate,s!==null&&(s.lanes|=t),Qi(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}de(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,dt(n,t),o=je(o),r=r(o),n.flags|=1,de(e,n,r,t),n.child;case 14:return r=n.type,o=ze(r,n.pendingProps),o=ze(r.type,o),pl(e,n,r,o,t);case 15:return Nc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:ze(r,o),Yr(e,n),n.tag=1,we(r)?(e=!0,lo(n)):e=!1,dt(n,t),Vc(n,r,o),ea(n,r,o,t),ra(null,n,r,!0,e,t);case 19:return Ic(e,n,t);case 22:return Lc(e,n,t)}throw Error(P(156,n.tag))};function Xc(e,n){return Mu(e,n)}function Hh(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(e,n,t,r){return new Hh(e,n,t,r)}function us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bh(e){if(typeof e=="function")return us(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ta)return 11;if(e===Va)return 14}return 2}function kn(e,n){var t=e.alternate;return t===null?(t=Ve(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Jr(e,n,t,r,o,i){var a=2;if(r=e,typeof e=="function")us(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Jn:return In(t.children,o,i,n);case Ca:a=8,o|=8;break;case xi:return e=Ve(12,t,n,o|2),e.elementType=xi,e.lanes=i,e;case Ai:return e=Ve(13,t,n,o),e.elementType=Ai,e.lanes=i,e;case Mi:return e=Ve(19,t,n,o),e.elementType=Mi,e.lanes=i,e;case uu:return zo(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case su:a=10;break e;case lu:a=9;break e;case Ta:a=11;break e;case Va:a=14;break e;case an:a=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=Ve(a,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function In(e,n,t,r){return e=Ve(7,e,r,n),e.lanes=t,e}function zo(e,n,t,r){return e=Ve(22,e,r,n),e.elementType=uu,e.lanes=t,e.stateNode={isHidden:!1},e}function mi(e,n,t){return e=Ve(6,e,null,n),e.lanes=t,e}function yi(e,n,t){return n=Ve(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Gh(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ko(0),this.expirationTimes=Ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ko(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function cs(e,n,t,r,o,i,a,s,l){return e=new Gh(e,n,t,s,l),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ve(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ya(i),e}function Zh(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ed(e){if(!e)return Sn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(we(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(we(t))return ec(e,t,n)}return n}function nd(e,n,t,r,o,i,a,s,l){return e=cs(t,r,!0,e,o,i,a,s,l),e.context=ed(null),t=e.current,r=pe(),o=wn(t),i=Qe(r,o),i.callback=n??null,yn(t,i,o),e.current.lanes=o,dr(e,o,r),ke(e,r),e}function Io(e,n,t,r){var o=n.current,i=pe(),a=wn(o);return t=ed(t),n.context===null?n.context=t:n.pendingContext=t,n=Qe(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=yn(o,n,a),e!==null&&(We(e,o,a,i),Br(e,o,a)),a}function Po(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xl(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ds(e,n){xl(e,n),(e=e.alternate)&&xl(e,n)}function Yh(){return null}var td=typeof reportError=="function"?reportError:function(e){console.error(e)};function ps(e){this._internalRoot=e}Uo.prototype.render=ps.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));Io(e,n,null,null)};Uo.prototype.unmount=ps.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_n(function(){Io(null,e,null,null)}),n[en]=null}};function Uo(e){this._internalRoot=e}Uo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Lu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ln.length&&n!==0&&n<ln[t].priority;t++);ln.splice(t,0,e),t===0&&Ru(e)}};function hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Al(){}function qh(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Po(a);i.call(u)}}var a=nd(n,r,e,0,null,!1,!1,"",Al);return e._reactRootContainer=a,e[en]=a.current,Xt(e.nodeType===8?e.parentNode:e),_n(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Po(l);s.call(u)}}var l=cs(e,0,!1,null,null,!1,!1,"",Al);return e._reactRootContainer=l,e[en]=l.current,Xt(e.nodeType===8?e.parentNode:e),_n(function(){Io(n,l,t,r)}),l}function Wo(e,n,t,r,o){var i=t._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=Po(a);s.call(l)}}Io(n,a,e,o)}else a=qh(t,n,e,o,r);return Po(a)}ju=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ot(n.pendingLanes);t!==0&&(Na(n,t|1),ke(n,Z()),!(O&6)&&(wt=Z()+500,Mn()))}break;case 13:_n(function(){var r=nn(e,1);if(r!==null){var o=pe();We(r,e,1,o)}}),ds(e,1)}};La=function(e){if(e.tag===13){var n=nn(e,134217728);if(n!==null){var t=pe();We(n,e,134217728,t)}ds(e,134217728)}};Nu=function(e){if(e.tag===13){var n=wn(e),t=nn(e,n);if(t!==null){var r=pe();We(t,e,n,r)}ds(e,n)}};Lu=function(){return R};Ou=function(e,n){var t=R;try{return R=e,n()}finally{R=t}};zi=function(e,n,t){switch(n){case"input":if(Vi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Eo(r);if(!o)throw Error(P(90));du(r),Vi(r,o)}}}break;case"textarea":hu(e,t);break;case"select":n=t.value,n!=null&&st(e,!!t.multiple,n,!1)}};ku=as;bu=_n;var $h={usingClientEntryPoint:!1,Events:[hr,et,Eo,vu,wu,as]},jt={findFiberByHostInstance:Ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jh={bundleType:jt.bundleType,version:jt.version,rendererPackageName:jt.rendererPackageName,rendererConfig:jt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xu(e),e===null?null:e.stateNode},findFiberByHostInstance:jt.findFiberByHostInstance||Yh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rr.isDisabled&&Rr.supportsFiber)try{Mo=Rr.inject(Jh),Ge=Rr}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$h;Ae.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hs(n))throw Error(P(200));return Zh(e,n,null,t)};Ae.createRoot=function(e,n){if(!hs(e))throw Error(P(299));var t=!1,r="",o=td;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=cs(e,1,!1,null,null,t,!1,r,o),e[en]=n.current,Xt(e.nodeType===8?e.parentNode:e),new ps(n)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=xu(n),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return _n(e)};Ae.hydrate=function(e,n,t){if(!Fo(n))throw Error(P(200));return Wo(null,e,n,!0,t)};Ae.hydrateRoot=function(e,n,t){if(!hs(e))throw Error(P(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",a=td;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=nd(n,null,e,1,t??null,o,!1,i,a),e[en]=n.current,Xt(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Uo(n)};Ae.render=function(e,n,t){if(!Fo(n))throw Error(P(200));return Wo(null,e,n,!1,t)};Ae.unmountComponentAtNode=function(e){if(!Fo(e))throw Error(P(40));return e._reactRootContainer?(_n(function(){Wo(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};Ae.unstable_batchedUpdates=as;Ae.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Fo(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Wo(e,n,t,!1,r)};Ae.version="18.3.1-next-f1338f8080-20240426";function rd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rd)}catch(e){console.error(e)}}rd(),ru.exports=Ae;var Kh=ru.exports,Ml=Kh;Pi.createRoot=Ml.createRoot,Pi.hydrateRoot=Ml.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lr(){return lr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},lr.apply(null,arguments)}var pn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pn||(pn={}));const Cl="popstate";function Qh(e){e===void 0&&(e={});function n(r,o){let{pathname:i,search:a,hash:s}=r.location;return ga("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:So(o)}return ef(n,t,null,e)}function q(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function fs(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Xh(){return Math.random().toString(36).substr(2,8)}function Tl(e,n){return{usr:e.state,key:e.key,idx:n}}function ga(e,n,t,r){return t===void 0&&(t=null),lr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?St(n):n,{state:t,key:n&&n.key||r||Xh()})}function So(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function St(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function ef(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=pn.Pop,l=null,u=f();u==null&&(u=0,a.replaceState(lr({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function d(){s=pn.Pop;let A=f(),h=A==null?null:A-u;u=A,l&&l({action:s,location:k.location,delta:h})}function m(A,h){s=pn.Push;let c=ga(k.location,A,h);u=f()+1;let g=Tl(c,u),w=k.createHref(c);try{a.pushState(g,"",w)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;o.location.assign(w)}i&&l&&l({action:s,location:k.location,delta:1})}function y(A,h){s=pn.Replace;let c=ga(k.location,A,h);u=f();let g=Tl(c,u),w=k.createHref(c);a.replaceState(g,"",w),i&&l&&l({action:s,location:k.location,delta:0})}function v(A){let h=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof A=="string"?A:So(A);return c=c.replace(/ $/,"%20"),q(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let k={get action(){return s},get location(){return e(o,a)},listen(A){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Cl,d),l=A,()=>{o.removeEventListener(Cl,d),l=null}},createHref(A){return n(o,A)},createURL:v,encodeLocation(A){let h=v(A);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:y,go(A){return a.go(A)}};return k}var Vl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Vl||(Vl={}));function nf(e,n,t){return t===void 0&&(t="/"),tf(e,n,t)}function tf(e,n,t,r){let o=typeof n=="string"?St(n):n,i=gs(o.pathname||"/",t);if(i==null)return null;let a=od(e);rf(a);let s=null,l=mf(i);for(let u=0;s==null&&u<a.length;++u)s=hf(a[u],l);return s}function od(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(i,a,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&(q(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=bn([r,l.relativePath]),f=t.concat(l);i.children&&i.children.length>0&&(q(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),od(i.children,n,f,u)),!(i.path==null&&!i.index)&&n.push({path:u,score:df(u,i.index),routesMeta:f})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let l of id(i.path))o(i,a,l)}),n}function id(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=id(r.join("/")),s=[];return s.push(...a.map(l=>l===""?i:[i,l].join("/"))),o&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function rf(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:pf(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const of=/^:[\w-]+$/,af=3,sf=2,lf=1,uf=10,cf=-2,El=e=>e==="*";function df(e,n){let t=e.split("/"),r=t.length;return t.some(El)&&(r+=cf),n&&(r+=sf),t.filter(o=>!El(o)).reduce((o,i)=>o+(of.test(i)?af:i===""?lf:uf),r)}function pf(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function hf(e,n,t){let{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,f=i==="/"?n:n.slice(i.length)||"/",d=ff({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),m=l.route;if(!d)return null;Object.assign(o,d.params),a.push({params:o,pathname:bn([i,d.pathname]),pathnameBase:bf(bn([i,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(i=bn([i,d.pathnameBase]))}return a}function ff(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=gf(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:m,isOptional:y}=f;if(m==="*"){let k=s[d]||"";a=i.slice(0,i.length-k.length).replace(/(.)\/+$/,"$1")}const v=s[d];return y&&!v?u[m]=void 0:u[m]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function gf(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),fs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function mf(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return fs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function gs(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const yf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vf=e=>yf.test(e);function wf(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?St(e):e,i;if(t)if(vf(t))i=t;else{if(t.includes("//")){let a=t;t=ld(t),fs(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?i=jl(t.substring(1),"/"):i=jl(t,n)}else i=n;return{pathname:i,search:Pf(r),hash:Sf(o)}}function jl(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function vi(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kf(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function ad(e,n){let t=kf(e);return n?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function sd(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=St(e):(o=lr({},e),q(!o.pathname||!o.pathname.includes("?"),vi("?","pathname","search",o)),q(!o.pathname||!o.pathname.includes("#"),vi("#","pathname","hash",o)),q(!o.search||!o.search.includes("#"),vi("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=t;else{let d=n.length-1;if(!r&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),d-=1;o.pathname=m.join("/")}s=d>=0?n[d]:"/"}let l=wf(o,s),u=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const ld=e=>e.replace(/\/\/+/g,"/"),bn=e=>ld(e.join("/")),bf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Pf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Sf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function xf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ud=["post","put","patch","delete"];new Set(ud);const Af=["get",...ud];new Set(Af);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ur(){return ur=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ur.apply(null,arguments)}const ms=b.createContext(null),Mf=b.createContext(null),Gn=b.createContext(null),Do=b.createContext(null),Zn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),cd=b.createContext(null);function Cf(e,n){let{relative:t}=n===void 0?{}:n;gr()||q(!1);let{basename:r,navigator:o}=b.useContext(Gn),{hash:i,pathname:a,search:s}=pd(e,{relative:t}),l=a;return r!=="/"&&(l=a==="/"?r:bn([r,a])),o.createHref({pathname:l,search:s,hash:i})}function gr(){return b.useContext(Do)!=null}function _o(){return gr()||q(!1),b.useContext(Do).location}function dd(e){b.useContext(Gn).static||b.useLayoutEffect(e)}function Ho(){let{isDataRoute:e}=b.useContext(Zn);return e?Wf():Tf()}function Tf(){gr()||q(!1);let e=b.useContext(ms),{basename:n,future:t,navigator:r}=b.useContext(Gn),{matches:o}=b.useContext(Zn),{pathname:i}=_o(),a=JSON.stringify(ad(o,t.v7_relativeSplatPath)),s=b.useRef(!1);return dd(()=>{s.current=!0}),b.useCallback(function(u,f){if(f===void 0&&(f={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let d=sd(u,JSON.parse(a),i,f.relative==="path");e==null&&n!=="/"&&(d.pathname=d.pathname==="/"?n:bn([n,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[n,r,a,i,e])}function pd(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=b.useContext(Gn),{matches:o}=b.useContext(Zn),{pathname:i}=_o(),a=JSON.stringify(ad(o,r.v7_relativeSplatPath));return b.useMemo(()=>sd(e,JSON.parse(a),i,t==="path"),[e,a,i,t])}function Vf(e,n){return Ef(e,n)}function Ef(e,n,t,r){gr()||q(!1);let{navigator:o}=b.useContext(Gn),{matches:i}=b.useContext(Zn),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=_o(),f;if(n){var d;let A=typeof n=="string"?St(n):n;l==="/"||(d=A.pathname)!=null&&d.startsWith(l)||q(!1),f=A}else f=u;let m=f.pathname||"/",y=m;if(l!=="/"){let A=l.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(A.length).join("/")}let v=nf(e,{pathname:y}),k=Rf(v&&v.map(A=>Object.assign({},A,{params:Object.assign({},s,A.params),pathname:bn([l,o.encodeLocation?o.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?l:bn([l,o.encodeLocation?o.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),i,t,r);return n&&k?b.createElement(Do.Provider,{value:{location:ur({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:pn.Pop}},k):k}function jf(){let e=Ff(),n=xf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},n),t?b.createElement("pre",{style:o},t):null,null)}const Nf=b.createElement(jf,null);class Lf extends b.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?b.createElement(Zn.Provider,{value:this.props.routeContext},b.createElement(cd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Of(e){let{routeContext:n,match:t,children:r}=e,o=b.useContext(ms);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(Zn.Provider,{value:n},r)}function Rf(e,n,t,r){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,s=(o=t)==null?void 0:o.errors;if(s!=null){let f=a.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);f>=0||q(!1),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let d=a[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:m,errors:y}=t,v=d.route.loader&&m[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((f,d,m)=>{let y,v=!1,k=null,A=null;t&&(y=s&&d.route.id?s[d.route.id]:void 0,k=d.route.errorElement||Nf,l&&(u<0&&m===0?(Df("route-fallback"),v=!0,A=null):u===m&&(v=!0,A=d.route.hydrateFallbackElement||null)));let h=n.concat(a.slice(0,m+1)),c=()=>{let g;return y?g=k:v?g=A:d.route.Component?g=b.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=f,b.createElement(Of,{match:d,routeContext:{outlet:f,matches:h,isDataRoute:t!=null},children:g})};return t&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?b.createElement(Lf,{location:t.location,revalidation:t.revalidation,component:k,error:y,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):c()},null)}var hd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(hd||{}),fd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(fd||{});function zf(e){let n=b.useContext(ms);return n||q(!1),n}function If(e){let n=b.useContext(Mf);return n||q(!1),n}function Uf(e){let n=b.useContext(Zn);return n||q(!1),n}function gd(e){let n=Uf(),t=n.matches[n.matches.length-1];return t.route.id||q(!1),t.route.id}function Ff(){var e;let n=b.useContext(cd),t=If(),r=gd();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Wf(){let{router:e}=zf(hd.UseNavigateStable),n=gd(fd.UseNavigateStable),t=b.useRef(!1);return dd(()=>{t.current=!0}),b.useCallback(function(o,i){i===void 0&&(i={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ur({fromRouteId:n},i)))},[e,n])}const Nl={};function Df(e,n,t){Nl[e]||(Nl[e]=!0)}function _f(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ce(e){q(!1)}function Hf(e){let{basename:n="/",children:t=null,location:r,navigationType:o=pn.Pop,navigator:i,static:a=!1,future:s}=e;gr()&&q(!1);let l=n.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:i,static:a,future:ur({v7_relativeSplatPath:!1},s)}),[l,s,i,a]);typeof r=="string"&&(r=St(r));let{pathname:f="/",search:d="",hash:m="",state:y=null,key:v="default"}=r,k=b.useMemo(()=>{let A=gs(f,l);return A==null?null:{location:{pathname:A,search:d,hash:m,state:y,key:v},navigationType:o}},[l,f,d,m,y,v,o]);return k==null?null:b.createElement(Gn.Provider,{value:u},b.createElement(Do.Provider,{children:t,value:k}))}function Bf(e){let{children:n,location:t}=e;return Vf(ma(n),t)}new Promise(()=>{});function ma(e,n){n===void 0&&(n=[]);let t=[];return b.Children.forEach(e,(r,o)=>{if(!b.isValidElement(r))return;let i=[...n,o];if(r.type===b.Fragment){t.push.apply(t,ma(r.props.children,i));return}r.type!==ce&&q(!1),!r.props.index||!r.props.children||q(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ma(r.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ya.apply(null,arguments)}function Gf(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function Zf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Yf(e,n){return e.button===0&&(!n||n==="_self")&&!Zf(e)}const qf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],$f="6";try{window.__reactRouterVersion=$f}catch{}const Jf="startTransition",Ll=Wd[Jf];function Kf(e){let{basename:n,children:t,future:r,window:o}=e,i=b.useRef();i.current==null&&(i.current=Qh({window:o,v5Compat:!0}));let a=i.current,[s,l]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},f=b.useCallback(d=>{u&&Ll?Ll(()=>l(d)):l(d)},[l,u]);return b.useLayoutEffect(()=>a.listen(f),[a,f]),b.useEffect(()=>_f(r),[r]),b.createElement(Hf,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:a,future:r})}const Qf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kr=b.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:l,to:u,preventScrollReset:f,viewTransition:d}=n,m=Gf(n,qf),{basename:y}=b.useContext(Gn),v,k=!1;if(typeof u=="string"&&Xf.test(u)&&(v=u,Qf))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),x=gs(w.pathname,y);w.origin===g.origin&&x!=null?u=x+w.search+w.hash:k=!0}catch{}let A=Cf(u,{relative:o}),h=eg(u,{replace:a,state:s,target:l,preventScrollReset:f,relative:o,viewTransition:d});function c(g){r&&r(g),g.defaultPrevented||h(g)}return b.createElement("a",ya({},m,{href:v||A,onClick:k||i?r:c,ref:t,target:l}))});var Ol;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ol||(Ol={}));var Rl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rl||(Rl={}));function eg(e,n){let{target:t,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:s}=n===void 0?{}:n,l=Ho(),u=_o(),f=pd(e,{relative:a});return b.useCallback(d=>{if(Yf(d,t)){d.preventDefault();let m=r!==void 0?r:So(u)===So(f);l(e,{replace:m,state:o,preventScrollReset:i,relative:a,viewTransition:s})}},[u,l,f,r,o,t,e,i,a,s])}function ng(){const e=Ho();return p.jsx("div",{className:"welcome-page",children:p.jsxs("div",{className:"welcome-content",children:[p.jsx("div",{className:"welcome-icon-box",children:p.jsx("img",{src:"/welcomepageimage.png",alt:"VolunteerHigh",className:"welcome-image"})}),p.jsx("h1",{className:"welcome-title",children:"Welcome to VolunteerHigh"}),p.jsx("button",{className:"welcome-next-btn",onClick:()=>e("/home"),children:"Get Started"})]})})}const tg="/assets/VolunteerHighLogo-BnGChIAc.png";function wi(e,n,t=1500,r=!1){const[o,i]=b.useState(r?e:0),a=b.useRef(!1),s=b.useRef(null);return b.useEffect(()=>{if(r){i(e);return}if(!n||a.current)return;a.current=!0;const l=performance.now(),u=f=>{const d=f-l,m=Math.min(d/t,1);i(Math.floor(m*e)),m<1&&(s.current=requestAnimationFrame(u))};return s.current=requestAnimationFrame(u),()=>{s.current&&cancelAnimationFrame(s.current)}},[n,r]),o}function zl(e=.5){const n=b.useRef(null),[t,r]=b.useState(!1);return b.useEffect(()=>{const o=n.current;if(!o)return;const i=new IntersectionObserver(([a])=>{a.isIntersecting&&a.intersectionRatio>=e&&r(!0)},{threshold:e});return i.observe(o),()=>i.disconnect()},[e]),[n,t]}function Il(e=.35){const n=b.useRef(null),[t,r]=b.useState(!1);return b.useEffect(()=>{const o=n.current;if(!o)return;const i=new IntersectionObserver(([a])=>{r(a.isIntersecting&&a.intersectionRatio>=e)},{threshold:e});return i.observe(o),()=>i.disconnect()},[e]),[n,t]}const ys="volunteerhigh_home_animations_played";function rg(){return sessionStorage.getItem(ys)!=="true"}function og(){sessionStorage.setItem(ys,"true")}function ig(){sessionStorage.removeItem(ys)}const ag=[{label:"HandsOn Greater Phoenix",to:"/org/hands-on-greater-phoenix"},{label:"Arizona State Parks and Trails",to:"/org/arizona-state-parks"},{label:"City of Flagstaff",to:"/org/city-of-flagstaff"},{label:"Junior Achievement of Arizona",to:"/org/junior-achievement"},{label:"Feed My Starving Children",to:"/org/feed-my-starving-children"},{label:"Arizona Sustainability Alliance",to:"/org/az-sustainability-alliance"},{label:"Bureau of Land Management Arizona",to:"/org/bureau-of-land-management"},{label:"Lost Our Home Pet Rescue",to:"/org/lost-our-homes-pet-rescue"}];function mr({current:e}){const[n,t]=b.useState(!1),r=b.useRef(null),o=[{key:"quest",label:"Quest AI",to:"/quest"},{key:"maps",label:"Maps",to:"/maps"},{key:"about",label:"About",to:"/about"},{key:"faq",label:"FAQ's",to:"/faq"}];function i(){r.current&&clearTimeout(r.current),t(!0)}function a(){r.current=setTimeout(()=>t(!1),150)}return p.jsxs("div",{className:"navbar",children:[p.jsx(Kr,{to:"/home",className:"navbar-logo-link",onClick:ig,children:p.jsx("img",{src:tg,alt:"VolunteerHigh",className:"navbar-logo"})}),p.jsx("div",{className:"navbar-spacer"}),o.map(s=>e===s.key?p.jsx("span",{className:"navbar-current",children:s.label},s.key):p.jsx(Kr,{to:s.to,className:"navbar-link",children:s.label},s.key)),p.jsxs("div",{className:"navbar-org-dropdown",onMouseEnter:i,onMouseLeave:a,children:[p.jsxs("button",{className:`navbar-link navbar-org-trigger${e==="organizations"?" navbar-current":""}`,onClick:()=>t(s=>!s),"aria-expanded":n,children:["Organizations ",p.jsx("span",{className:"navbar-org-caret",children:"▾"})]}),n&&p.jsx("div",{className:"navbar-org-menu navbar-org-menu-right",children:ag.map(s=>p.jsx(Kr,{to:s.to,className:"navbar-org-menu-item",onClick:()=>t(!1),children:s.label},s.to))})]})]})}const sg="/assets/Image-DgsHldMx.png",lg="/assets/HandsOnGreaterPhoenixLogo-t_QkNJAt.jpg",ug="/assets/AZStateParksandTrailsLogo-bjg6v4ly.jpg",cg="/assets/CityOfFlagstaffLogo-DLqi0ajI.jpg",dg="/assets/JuniorAchievementOfArizonaLogo-phlbKpa8.jpg",pg="/assets/FMSCLogo-BcUhIjKK.jpg",hg="/assets/AZSustainabilityAllianceLogo-Gt_x0TzN.jpg",fg="/assets/BureauOfLandManagement-BaEZUK12.jpg",gg="/assets/LostOurHomesPetRescueImageLogo-BENexxV-.jpg",mg=[{to:"/org/hands-on-greater-phoenix",img:lg,name:"HandsOn Greater Phoenix",circular:!0},{to:"/org/arizona-state-parks",img:ug,name:"Arizona State Parks and Trails",circular:!1},{to:"/org/city-of-flagstaff",img:cg,name:"City of Flagstaff",circular:!0},{to:"/org/junior-achievement",img:dg,name:"Junior Achievement of Arizona",circular:!0}],yg=[{to:"/org/feed-my-starving-children",img:pg,name:"Feed My Starving Children",circular:!1},{to:"/org/az-sustainability-alliance",img:hg,name:"Arizona Sustainability Alliance",circular:!0},{to:"/org/bureau-of-land-management",img:fg,name:"Bureau of Land Management Arizona",circular:!1},{to:"/org/lost-our-homes-pet-rescue",img:gg,name:"Lost Our Home Pet Rescue",circular:!1}];function Ul({to:e,img:n,name:t,circular:r,isVisible:o,index:i,animationsEnabled:a}){const s=!a||o;return p.jsxs(Kr,{to:e,className:`partner-box${s?" visible":""}${a?"":" no-anim"}`,style:a?{transitionDelay:`${i*.28}s`}:void 0,children:[p.jsx("img",{src:n,alt:t,className:r?"circular":""}),p.jsx("span",{className:"org-name",children:t})]})}function vg(){const e=Ho(),[n,t]=zl(.3),[r,o]=zl(.6),[i,a]=Il(.35),[s,l]=Il(.35),[u]=b.useState(()=>rg());b.useEffect(()=>{u&&og()},[u]);const f=wi(90,t,1500,!u),d=wi(100,t,1500,!u),m=wi(92,t,1500,!u);return p.jsxs("div",{className:"main-screen",children:[p.jsx(mr,{current:null}),p.jsxs("div",{className:"main-scroll",children:[p.jsx("div",{className:"hero-section",style:{backgroundImage:`url(${sg})`},children:p.jsxs("div",{className:"hero-text",children:[p.jsx("p",{className:"hero-brand",children:"VolunteerHigh"}),p.jsx("h1",{className:"hero-line1",children:"Discover High School"}),p.jsx("h1",{className:"hero-line2 blue",children:"Volunteer Opportunities"}),p.jsx("p",{className:"hero-sub",children:`Find community service in Arizona.
Together, we can make a lasting
impact and build a better tomorrow
for those in need`})]})}),p.jsxs("div",{className:"project-section",children:[p.jsx("h2",{className:"project-title",children:"The VolunteerHigh Project"}),p.jsx("p",{className:"project-sub",children:"A platform that empowers students to find, explore, and engage in"}),p.jsx("p",{className:"project-sub second",children:"meaningful local volunteer opportunities while creating lasting community impact."}),p.jsxs("div",{className:"stats-row",ref:n,children:[p.jsxs("div",{className:"stat-block",children:[p.jsx("div",{className:"stat-rule",children:"――――――"}),p.jsxs("p",{className:"stat-number",children:[f,"%+"]}),p.jsx("p",{className:"stat-caption",children:`of students participated in volunteer
work before entering
college`})]}),p.jsxs("div",{className:"stat-block",children:[p.jsx("div",{className:"stat-rule",children:"――――――"}),p.jsxs("p",{className:"stat-number",children:[d,"+"]}),p.jsx("p",{className:"stat-caption",children:`volunteering hours by the
average high schooler before
graduating.`})]}),p.jsxs("div",{className:"stat-block",children:[p.jsx("div",{className:"stat-rule",children:"――――――"}),p.jsxs("p",{className:"stat-number",children:[m,"%+"]}),p.jsx("p",{className:"stat-caption",children:`of admissions officers
value 4-year volunteering`})]})]})]}),p.jsxs("div",{className:"partners-divider-row",ref:r,children:[p.jsx("div",{className:"rule"}),p.jsx("span",{className:"label",children:"Our Partner Organizations"}),p.jsx("div",{className:"rule"})]}),p.jsxs("div",{className:"partners-grid-wrap",children:[p.jsx("div",{className:"partners-row",children:mg.map((y,v)=>p.jsx(Ul,{...y,isVisible:o,index:v,animationsEnabled:u},y.to))}),p.jsx("div",{className:"partners-row",children:yg.map((y,v)=>p.jsx(Ul,{...y,isVisible:o,index:v+4,animationsEnabled:u},y.to))})]}),p.jsx("div",{className:"quest-section",children:p.jsxs("div",{className:`scroll-transition${a?" identity":""}`,ref:i,children:[p.jsx("h2",{className:"quest-heading",children:"Quest - Our Volunteering Recommendation Engine"}),p.jsx("p",{className:"quest-body-text",children:`Quest in an intelligent Volunteer Recommendation engine helps you to find the best volunteering opportunities tailored to your
interests and location. By analyzing your preferences and matching them with relevant organizations, Quest simplifies the search process and makes
community involvement more accessible. Quest is designed to help you find the best volunteer opportunities where you can
make the greatest impact while supporting a cause that geniunely matters to you.`}),p.jsx("button",{className:"quest-cta",onClick:()=>e("/quest"),children:"Use Quest"})]})}),p.jsx("div",{className:"maps-section",children:p.jsxs("div",{className:`scroll-transition${l?" identity":""}`,ref:s,children:[p.jsx("h2",{className:"maps-heading",children:"Maps"}),p.jsx("p",{className:"maps-body-text",children:`Want to find the nearest opportunity, and fast? Maps is our location-based volunteer discovery tool that helps
you to find the nearest opportunity. By displaying nearby opportunities on an interactive map, Maps makes it easy
to explore opportunities based on your current location and identify places where you can get involved. Maps simplifies
the process of finding local volunteer opportunities, helping you connect with organizations in your community and make a
meaningful impact close to your home, while earning verified hours.`}),p.jsx("button",{className:"maps-cta",onClick:()=>e("/maps"),children:"Use Maps"})]})})]})]})}const md="AQ.Ab8RN6ILQtJe2eUTlbveerBT6rJDhIghmyXY_hgBSSADpad49A",wg="gemini-2.5-flash-lite";function yd(){return!!md}const kg=`You are Quest AI, a friendly volunteer recommendation engine for VolunteerHigh, a platform helping Arizona high school students find volunteer opportunities.

Rules:
1. The UI already shows a greeting, so jump straight to helping when the user sends their first message.
2. When the user shares their interests and/or location, search the provided opportunity database and recommend the single best match. Include the name, a brief reason why it fits, and key details like date, time, and location.
3. Answer follow-up questions accurately using the database.
4. Keep responses conversational, warm, and concise.
5. If no opportunities match well, say so honestly and suggest they check back soon as new opportunities are added daily.`;let ki=[],bi=null;async function bg(e,n){var i,a,s,l,u,f;if(!yd())throw new Error("Quest AI isn't configured yet. Add your Gemini API key in src/config/firebaseConfig.js.");bi||(bi=kg+`

Volunteer opportunities database:
`+n),ki.push({role:"user",parts:[{text:e}]});const t=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${wg}:generateContent?key=${md}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system_instruction:{parts:[{text:bi}]},contents:ki,generationConfig:{maxOutputTokens:1e3,temperature:.7}})});if(!t.ok){const d=await t.json().catch(()=>({}));throw new Error(((i=d==null?void 0:d.error)==null?void 0:i.message)||`API error ${t.status}`)}const o=((f=(u=(l=(s=(a=(await t.json()).candidates)==null?void 0:a[0])==null?void 0:s.content)==null?void 0:l.parts)==null?void 0:u[0])==null?void 0:f.text)??"";return ki.push({role:"model",parts:[{text:o}]}),o}const Pg={title:"HandsOn Greater Phoenix",note:null,opportunities:[{name:"From the Ground Up: Volunteer Day at the Ranch (Referral)",description:`Join us for a meaningful day of giving back at Wildcat Ranch Phoenix! This in-person volunteer event is a wonderful opportunity to roll up your sleeves, enjoy the outdoors, and make a direct impact on the ranch and the horses who call it home.

Volunteers will work together on a variety of hands-on projects, including fence repairs, stall cleaning and refreshing, barn organization, and general facility beautification. These improvements help create a safer, more welcoming environment for our horses and the individuals who participate in our therapy programs.

No ranch experience is necessary—whether you’re a seasoned ranch hand or simply eager to help, your time and effort truly make a difference. Connect with nature, meet fellow community members, and be part of something meaningful.

2026-10-31 | 7:00 AM - 10:00 AM

Location: PHOENIX, AZ, AZ, 85042

Volunteers still needed: 48`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008oZje7MAC",date:"2026-10-31"},{name:"G.A.I.N. Trick-o-Treat on 13th St (Referral)",description:`We need volunteers to help with our 6th annual Getting Arizona Involved in Neighborhoods Trick-o-Treat block party. The event is held on 13th Street from Dunlap to Hatcher in Phoenix. We need hands to put up string lights, monitor the black light bounce house, and sit along the block to hand out candy. This is a fun, easy volunteer event for all ages and abilities.

2026-10-31 | 4:00 PM - 9:00 PM

Location: Phoenix, AZ, 85020

Volunteers still needed: 17`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009JXoktMAD",date:"2026-10-31"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-02 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3wuMAC",date:"2026-11-02"},{name:"Coronado Area Bowling Competition in Tucson (Referral)",description:`Join Special Olympics Arizona for a Coronado Area Bowling Competition in Tucson!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-11-02 | 9:30 AM - 12:30 PM

Location: Tucson, AZ, 85704

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EF2GpMAL",date:"2026-11-02"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-03 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3wvMAC",date:"2026-11-03"},{name:"Grant Writer (Referral)",description:`Our organization is seeking experienced writers, researchers, and data analysts to assist with storytelling and securing funding that aligns with our mission and vision. We are offering key opportunities for both remote and on-site roles. Specifically, the Grant Writer will be responsible for researching potential funders, drafting proposals, and managing the fundraising calendar. If you are interested in supporting our organization’s advancement, please reach out to us for inquiry and signup via email at dure45@sbuagphx.org. Commitment for at least a year is required and we also welcome negotiation in the terms to be served.

2026-11-03 | 9:00 AM - 2:00 PM

Location: Phoenix, AZ, 85018

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007TSrxLMAT",date:"2026-11-03"},{name:"Nutrition Program Volunteer (Referral)",description:`Advance Community's Nutrition Program offers 2 separate volunteer opportunities. Our first program, Stove to Table delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package over 500 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal.

Our second program is Mercado Fresh where we provide monthly nutritious food boxes to individuals facing food insecurity and chronic health conditions—because giving food is giving dignity.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
9:00 AM to 1:00 PM

You will be placed where the need is the greatest that day (either the kitchen or warehouse)

We ask that you come dressed appropriately; please no open toed shoes. Volunteers under the age of 16 are welcome with a parent or guardian.

2026-11-03 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fGP6MMAW",date:"2026-11-03"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-04 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3wwMAC",date:"2026-11-04"},{name:"BINGO! with St. Vincent de Paul",description:`Join the residents of St. Vincent de Paul's Washington Street Shelter for a fun game of BINGO! Volunteers will help run the game, read the winning numbers, and hand out prizes.

Please arrive at least 5 minutes early. The game will begin promptly at 4pm.

The minimum age for this project is 18 (adults only).

2026-11-04 | 4:00 PM - 5:00 PM

Location: Phoenix, AZ, 85034

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008jtNMwMAM",date:"2026-11-04"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-05 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3wxMAC",date:"2026-11-05"},{name:"El Rancho Del Sol Community Garden - Mesa (Referral)",description:`Volunteers are one of the most powerful ways Local First Arizona mobilizes communities across the state. By supporting our food access and community initiatives, volunteers help connect residents to fresh, nourishing foods while creating welcoming spaces that celebrate local food and the people who grow, make and share it.

Depending on the season, volunteers will help with watering, weeding, planting, harvesting and general garden maintenance.

Volunteers should bring plenty of water, sun protection & gardening gloves (if you have them). Parking available in the lot behind the El Rancho Del Sol apartments or on the street (on Ashland, off Main Street). The garden is behind the dumpsters in the back of the parking lot, surrounded by an orange gate. You’ll be performing plant maintenance, composting and harvesting.

Shift times vary with the seasons:

7 a.m. - 9 a.m. May - September

8 a.m. - 10 a.m. October - April

Located behind Del Sol Apartments

701 E Main St

Mesa, AZ 85203

Please click express interest below to be redirected to our sign up page!

2026-11-05 | 8:00 AM - 10:00 AM

Location: Mesa, AZ, 85203

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000092itd1MAA",date:"2026-11-05"},{name:"El Rancho Del Sol Community Garden (Referral)",description:`Volunteers are one of the most powerful ways Local First Arizona mobilizes communities across the state. By supporting our food access and community initiatives, volunteers help connect residents to fresh, nourishing foods while creating welcoming spaces that celebrate local food and the people who grow, make and share it.

Depending on the season, volunteers will help with watering, weeding, planting, harvesting and general garden maintenance.

Volunteers should bring plenty of water, sun protection & gardening gloves (if you have them). Parking available in the lot behind the El Rancho Del Sol apartments or on the street (on Ashland, off Main Street). The garden is behind the dumpsters in the back of the parking lot, surrounded by an orange gate. You’ll be performing plant maintenance, composting and harvesting.

Shifts are the 1st and 3rd Thursday of each month.

Shift times vary with the seasons:

7 a.m. - 9 a.m. May - September

8 a.m. - 10 a.m. October - April

Located behind Del Sol Apartments

701 E Main St

Mesa, AZ 85203

To sign up, click express interest below and you will be redirected to our registration page!

2026-11-05 | 8:00 AM - 10:00 AM

Location: Mesa, AZ, 85203

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000093rC81MAE",date:"2026-11-05"},{name:"Coronado Area Bowling Competition in Tucson (Referral)",description:`Join Special Olympics Arizona for a Coronado Area Bowling Competition in Tucson!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-11-05 | 9:30 AM - 12:30 PM

Location: Tucson, AZ, 85704

Volunteers still needed: 20`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EF2GqMAL",date:"2026-11-05"},{name:"Kid Connection at The Salvation Army",description:`Volunteers will spend quality time with children at the Salvation Army Emergency Family Shelter. Arts & crafts, reading, games, and sports are par for the course at this volunteer opportunity. Volunteers will get to meet new people and make a difference in a child's day!

The minimum age for this volunteer opportunity is 18.

If this is your first time volunteering at this project, please send a copy of your driver's license to Jose.E.Ramirez@usw.salvationarmy.org at least two days before the project date. The Salvation Army will conduct a National Sex Offender search to ensure the safety of the children at the shelter. We appreciate your cooperation! Court-ordered volunteers cannot attend this event.

Volunteers will be asked to sign the Salvation Army's volunteer forms upon their arrival.  They can be reviewed here.

2026-11-05 | 4:45 PM - 6:00 PM

Location: Phoenix, AZ, 85008

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008mWoabMAC",date:"2026-11-05"},{name:"Adaptive Pickleball- Coach/Unified Partner (Referral)",description:`Dates: Thursdays, November 5, 2026 - January 28, 2027 + Tournament on Saturday, January 30, 2027

Location: Mesa Tennis & Pickleball Center - 4125 E McKellips Rd, Mesa, AZ 85215

	
5pm-6pm (Youth)

	
6pm-7pm (Adult – Beginner)

	
7pm-8pm (Adult – Intermediate)

Activity Description:

	
This program is for individuals with intellectual disabilities to prepare them for Special Olympics pickleball competitions. The youth and adult beginner sessions focus on learning pickleball skills, while the adult intermediate session will mainly focus on game play.

Job Description:

	
Coach: will be at practices and if available, play as a Unified Partner in the Special Olympics Pickleball Competition

	
Unified Partner: commit to attending 2-3 practices in January and play in the Special Olympics Pickleball Competition. Must have prior pickleball playing experience and knowledge of pickleball rules

	
Assist with set up and clean up 15-30 minutes before and after practice

	
Assist coaches in running a court or run a court independently if needed with the guidance of a head coach

	
Gathering balls for each court throughout practice

	
Be encouraging and cheer on participants while they practice!

	
Experience is preferred but not required but volunteers must engage in the activity

Volunteer Number Requesting:

	
Volunteers: 1-5

	
Coaches: 2-5

	
Unified Partners: 5-10

Click express interest below to be redirected to our volunteer application.

2026-11-05 | 5:00 PM - 8:00 PM

Location: Mesa, AZ, 85205

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fiGIYMA2",date:"2026-11-05"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-06 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3wyMAC",date:"2026-11-06"},{name:"Surprise Smoke Alarm Walk (Referral)",description:`Why Your Involvement Matters: With your support, we aim to install smoke alarms at no cost to residents in low-income or high-risk homes, with a goal of reaching hundreds of residents in just one morning! This is an opportunity to directly impact our community and contribute to creating safer living environments for those who need it most.

What's In It for You:

	
Meaningful Impact: Contribute to reducing the risk of house fires, saving lives, and fostering safer communities through education.

	
Training and Tools: No experience is necessary! We provide all the tools and training beforehand to ensure you feel confident and prepared.

	
Community Spirit: Connect with like-minded individuals who share your passion for giving back, volunteer alongside a group of colleagues, friends and family, and invest in your local community!

	
Free Breakfast: Start your day right with a complimentary breakfast to energize you for the day!

How to Get Involved: Sign-up through this online portal or email tess.robaina@azburn.org so we know you’re coming! This is a great opportunity for groups or families to volunteer alongside one another. Then, simply show up at the meeting location ready to make a positive impact. Together, we can create change and build a safer, stronger community.

Have Questions? We're here to help! Reach out to us anytime if you have questions or want additional details.

Thank you for choosing to volunteer and being a force for good in our community!

2026-11-06 | 8:00 AM - 12:00 PM

Location: Surprise, AZ, 85378

Volunteers still needed: 100`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009NlHdYMAV",date:"2026-11-06"},{name:"Coronado Area Bowling Competition in Tucson (Referral)",description:`Join Special Olympics Arizona for a Coronado Area Bowling Competition in Tucson!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-11-06 | 8:30 AM - 11:30 AM

Location: Tucson, AZ, 85704

Volunteers still needed: 20`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EF2GrMAL",date:"2026-11-06"},{name:"Coronado Area Bowling Competition in Tucson (Referral)",description:`Join Special Olympics Arizona for a Coronado Area Bowling Competition in Tucson!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-11-06 | 11:30 AM - 2:30 PM

Location: Tucson, AZ, 85704

Volunteers still needed: 20`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EF2GsMAL",date:"2026-11-06"},{name:"Lunch Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-06 | 10:00 AM - 1:30 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009i9TzVMAU",date:"2026-11-06"},{name:"Evening Meal Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-06 | 3:00 PM - 6:00 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009iDPvaMAG",date:"2026-11-06"},{name:"Arizona Fall Festival-Multiple Shifts! (Referral)",description:`Be part of the crew that makes Arizona’s biggest celebration of local happen!

Celebrating the Copper State’s finest flavors and showcasing 200+ local vendors, the 20th annual Arizona Fall Fest is on Saturday, November 7, 2026. 

Volunteer shifts range from early morning all the way through 5:00 p.m. and include Setup, Beverage Garden Ticket Sales, Beverage Garden Greeter, General Event Support, and Toward Zero Waste sustainability super heros! 

Volunteers are vital to the event’s success and are the heart of the festival.

Each volunteer will receive an exclusive Fall Festival T-shirt. If you are 21 years and older, you will receive 5 Beverage Garden sample tickets (early morning shifts receive a few extra tickets and full-day volunteers receive a sack lunch).

Shifts are 3 hours long and you are welcome to enjoy the festival before and/or after your shift.

TO LEARN MORE ABOUT VOLUNTEER SHIFTS AND TO SIGN UP, VISIT localfirstaz.com/fall-festival-volunteers

2026-11-07 | 6:00 AM - 5:00 PM

Location: Phoenix, AZ, 85004

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008ydQqsMAE",date:"2026-11-07"},{name:"Coronado Area Bowling Competition in Tucson (Referral)",description:`Join Special Olympics Arizona for a Coronado Area Bowling Competition in Tucson!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-11-07 | 8:00 AM - 11:00 AM

Location: Tucson, AZ, 85704

Volunteers still needed: 20`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EF2GtMAL",date:"2026-11-07"},{name:"Coronado Area Bowling Competition in Tucson (Referral)",description:`Join Special Olympics Arizona for a Coronado Area Bowling Competition in Tucson!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-11-07 | 11:00 AM - 2:00 PM

Location: Tucson, AZ, 85704

Volunteers still needed: 20`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EF2GuMAL",date:"2026-11-07"},{name:"Tempe Smoke Alarm Walk (Referral)",description:`Why Your Involvement Matters: With your support, we aim to install smoke alarms at no cost to residents in low-income or high-risk homes, with a goal of reaching hundreds of residents in just one morning! This is an opportunity to directly impact our community and contribute to creating safer living environments for those who need it most.

What's In It for You:

	
Meaningful Impact: Contribute to reducing the risk of house fires, saving lives, and fostering safer communities through education.

	
Training and Tools: No experience is necessary! We provide all the tools and training beforehand to ensure you feel confident and prepared.

	
Community Spirit: Connect with like-minded individuals who share your passion for giving back, volunteer alongside a group of colleagues, friends and family, and invest in your local community!

	
Free Breakfast: Start your day right with a complimentary breakfast to energize you for the day!

How to Get Involved: Sign-up through this online portal or email tess.robaina@azburn.org so we know you’re coming! This is a great opportunity for groups or families to volunteer alongside one another. Then, simply show up at the meeting location ready to make a positive impact. Together, we can create change and build a safer, stronger community.

Have Questions? We're here to help! Reach out to us anytime if you have questions or want additional details.

Thank you for choosing to volunteer and being a force for good in our community!

2026-11-07 | 8:00 AM - 12:00 PM

Location: Tempe, AZ, 85281

Volunteers still needed: 100`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009b6eDlMAI",date:"2026-11-07"},{name:"Food Box Distribution with Creighton Community Foundation",description:`Creighton Community Foundation (CCF) works in east-central Phoenix to cultivate a sense of school-centered identity, foster neighborhood interaction, increase social capacity, and improve adult supportive relationships within vibrant communities. Our ultimate goal is to improve youth life outcomes and create multi-generational in-community transformation.

Join us at Excelencia School to distribute food boxes to families through a mobile delivery line. Spend your morning making sure the Phoenix community has plenty of food for the week ahead!

There is no minimum age for this opportunity if youth are attending with a parent or guardian. Volunteers under 16 must attend with a parent/guardian. Volunteers aged 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-07 | 8:00 AM - 12:00 PM

Location: Phoenix, AZ, 85006

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008mYrbgMAC",date:"2026-11-07"},{name:"Garden Volunteers with St. Vincent de Paul (Main Campus)",description:`St. Vincent de Paul's three urban farms produce nutritionally dense food for those who do not have access to proper vitamins and nutrients. Annually, they grow 27,000 pounds of produce, which goes directly to SVdP's kitchens to be prepared for individuals and families experiencing homelessness and food insecurity, or delivered directly to families’ doors.

Spend your morning fertilizing soil, composting, planting, and harvesting the produce that helps feed the local community!

Please wear Closed-toe shoes, and clothes that can get dirty. Bring SPF and a reusable water bottle. There are shade structures, but be prepared to be in the sun.

Please Note: Volunteers serving court-ordered hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 8 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-07 | 8:00 AM - 11:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 8`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008qwjfZMAQ",date:"2026-11-07"},{name:"Mountain Area Golf Competition in Prescott (Referral)",description:`Join Special Olympics Arizona for a Mountain Area Golf Competition in Prescott!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-11-07 | 9:30 AM - 4:00 PM

Location: Prescott, AZ, 86301

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EFZz2MAH",date:"2026-11-07"},{name:"Mountain Area Golf Competition in Prescott (Referral)",description:`Join Special Olympics Arizona for a Mountain Area Golf Competition in Prescott!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-11-07 | 10:00 AM - 1:00 PM

Location: Prescott, AZ, 86301

Volunteers still needed: 15`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EFZz3MAH",date:"2026-11-07"},{name:"Maggie&#39;s Place Spruce Up",description:`Maggie’s Place provides safe housing and a nurturing community for homeless pregnant women, empowering them to thrive throughout their lifetime.

Work alongside the moms residing at The Michael House in Glendale to help clean and maintain their home.

The minimum age for this volunteer opportunity is 12 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-07 | 10:00 AM - 12:00 PM

Location: Glendale, AZ, 85302

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008mVanWMAS",date:"2026-11-07"},{name:"New Way Academy&#39;s Fall Kickoff (Referral)",description:`We are in need of volunteers for our biggest community event of the year, our annual Fall Kickoff on Saturday, November 7th from 11-2. Our community is comprised of students in grades K-12 with learning disabilities from all across the valley. Our families come from 75 different zip codes, making traditional school community gatherings difficult for our families to attend. Our Fall Kickoff is our highest attended event each year, with last year 520 tickets sold. Traditionally, we ask our parents and staff to help at various volunteer stations at the event, but this has resulted in volunteers not being able to fully enjoy the day with their families. We would be so grateful to partner with outside volunteers so our families and teachers can fully enjoy the event!

Volunteer stations include:

	
Cake Walk  (3 volunteers needed) - call numbers, manage the line, and replenish the cake table as needed

	
Bingo (2 volunteers needed) - call numbers, give out prizes

	
Face paint (3 volunteers needed) - paint faces

	
Concessions (4-5 volunteers needed) - manage stock, handle cash/card payments

	
Inflatable (5 volunteers needed) - manage lines for the 5 different inflatables, ensure no roughhousing inside inflatables  

All materials and supplies will be provided, all volunteers need to do is run their station during the event. All activities inside the event (except for concessions) are free, so no tickets need to be collected by the volunteers.

Thank you for your interest in volunteering during Fall Kickoff!

A background check will be required; we will reach out to you to get that done before the event.

2026-11-07 | 11:00 AM - 2:00 PM

Location: Phoenix, AZ, 85008

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009A4RaaMAF",date:"2026-11-07"},{name:"Valley Area Golf Competition in Phoenix (Referral)",description:`Join Special Olympics Arizona for a Valley Area Golf Competition in Phoenix!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-11-07 | 11:00 AM - 2:00 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 12`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EE7FGMA1",date:"2026-11-07"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-09 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3wzMAC",date:"2026-11-09"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-10 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3x0MAC",date:"2026-11-10"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-11 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3x1MAC",date:"2026-11-11"},{name:"Picking and Packing Support with Arizona Diaper Bank",description:`Join us at the Arizona Diaper Bank to help with order picking and packing! Arizona Diaper promotes dignity through community partnerships by making diapers, period products, and incontinence supplies accessible.

Volunteers will help prepare diaper orders for distribution to families and partner agencies. You will pack up diaper order based on specific requests as well as organize and label packed orders for easy distribution. Your efforts will directly contribute to ensuring that essential supplies reach those in need efficiently and on time!

Please wear closed-toe shoes. This opportunity takes place in a warehouse which can get warm in the summer months!

The minimum age for this project is 10 with a parent/guardian. All Volunteers under the age of 18 must be accompanied by a parent/guardian.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-11 | 9:00 AM - 12:00 PM

Location: Phoenix, AZ, 85043

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008q2Bt7MAE",date:"2026-11-11"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-12 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3x2MAC",date:"2026-11-12"},{name:"Valley Area Softball Competition (Referral)",description:`Join Special Olympics Arizona for a Valley Area Softball Competition in Peoria!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-11-12 | 8:30 AM - 2:15 PM

Location: Peoria, AZ, 85345

Volunteers still needed: 18`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EF7tCMAT",date:"2026-11-12"},{name:"Nutrition Program Volunteer (Referral)",description:`Advance Community's Nutrition Program offers 2 separate volunteer opportunities. Our first program, Stove to Table delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package over 500 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal.

Our second program is Mercado Fresh where we provide monthly nutritious food boxes to individuals facing food insecurity and chronic health conditions—because giving food is giving dignity.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
9:00 AM to 1:00 PM

You will be placed where the need is the greatest that day (either the kitchen or warehouse)

We ask that you come dressed appropriately; please no open toed shoes. Volunteers under the age of 16 are welcome with a parent or guardian.

2026-11-12 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fGJXDMA4",date:"2026-11-12"},{name:"Adaptive Pickleball- Coach/Unified Partner (Referral)",description:`Dates: Thursdays, November 5, 2026 - January 28, 2027 + Tournament on Saturday, January 30, 2027

Location: Mesa Tennis & Pickleball Center - 4125 E McKellips Rd, Mesa, AZ 85215

	
5pm-6pm (Youth)

	
6pm-7pm (Adult – Beginner)

	
7pm-8pm (Adult – Intermediate)

Activity Description:

	
This program is for individuals with intellectual disabilities to prepare them for Special Olympics pickleball competitions. The youth and adult beginner sessions focus on learning pickleball skills, while the adult intermediate session will mainly focus on game play.

Job Description:

	
Coach: will be at practices and if available, play as a Unified Partner in the Special Olympics Pickleball Competition

	
Unified Partner: commit to attending 2-3 practices in January and play in the Special Olympics Pickleball Competition. Must have prior pickleball playing experience and knowledge of pickleball rules

	
Assist with set up and clean up 15-30 minutes before and after practice

	
Assist coaches in running a court or run a court independently if needed with the guidance of a head coach

	
Gathering balls for each court throughout practice

	
Be encouraging and cheer on participants while they practice!

	
Experience is preferred but not required but volunteers must engage in the activity

Volunteer Number Requesting:

	
Volunteers: 1-5

	
Coaches: 2-5

	
Unified Partners: 5-10

Click express interest below to be redirected to our volunteer application.

2026-11-12 | 5:00 PM - 8:00 PM

Location: Mesa, AZ, 85205

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009filgXMAQ",date:"2026-11-12"},{name:"Game Night at MANA House",description:`Bring your A-game for this fun social event at MANA House, a peer-support organization of homeless and formerly homeless veterans! Volunteers will facilitate Bingo for the Veterans residing at the facility. Join us to help bring joy to those who have valiantly served our country.

The minimum age for this volunteer opportunity is 18.

2026-11-12 | 6:00 PM - 7:30 PM

Location: Phoenix, AZ, 85009

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008ju63BMAQ",date:"2026-11-12"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-13 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3x3MAC",date:"2026-11-13"},{name:"Community Market (Referral)",description:`Come join YWCA Metropolitan Phoenix at our monthly Community Market food distribution! In partnership with St. Mary's Food Bank, we are able to distribute fresh produce, pantry essentials and household goods to community members. 

As we are in our hotter months, we want to limit folks' time outdoors. We will be conducting this Community Market as a walk-up market. Participants will check in at the table and then volunteers will help bring food boxes to the cars.

Some things to note:

	
You will be mostly indoors for assembly of the food packages. However, we will be walking between inside and outside to deliver the food to participants. Make sure you are protected from the sun.

	
Sneakers or comfortable closed-toe shoes required. 

	
If you have it, wear persimmon orange or YWCA gear.

	
YWCA shirts will be available for a donation of $20, but are not required

	
Water and snacks will be provided.

	
Breaks are encouraged all day.

	
Volunteers are allowed to take food from the market only after community members have been served. Please do not take any of the food until a YWCA team member has let you know it is okay.

2026-11-13 | 9:00 AM - 1:00 PM

Location: Glendale, AZ, 85302

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008E7r38MAB",date:"2026-11-13"},{name:"Lunch Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-13 | 10:00 AM - 1:30 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009iInHFMA0",date:"2026-11-13"},{name:"Chef&#39;s Night Off at HomeBase Surprise",description:`Roll up your sleeves and help chop, slice, and dice with love as you prepare and serve dinner for homeless youth and young adults (ages 18-26) at HomeBase Youth Services in Surprise. You can also help pack lunches that will be distributed throughout the week to homeless youth and young adults. Allow the busy chef to have a nice evening off.

Volunteers must wear closed-toe shoes, and long hair should be pulled back.

The minimum age for this project is 11 with a parent/guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-13 | 3:00 PM - 5:00 PM

Location: Surprise, AZ, 85378

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000093DennMAC",date:"2026-11-13"},{name:"Evening Meal Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-13 | 3:00 PM - 6:00 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009iJcTRMA0",date:"2026-11-13"},{name:"Nature Nurturers at Escalante Community Garden",description:`The Escalante Community Garden is a garden that follows a communal model with healthy growing practices. A portion of the garden’s harvest is given to Tempe Community Action Agency's Food Pantry to supplement emergency food boxes. The garden features a children's area, as well as a desert and herb garden.

Volunteers will help care for the garden. Duties may include weeding, planting, pruning, and harvesting!Please wear closed-toe shoes, and clothes that can get dirty. Bring SPF and water!

The minimum age for this volunteer opportunity is 8 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

The map below shows the best way to enter the garden off River Dr.

2026-11-14 | 8:00 AM - 11:00 AM

Location: Tempe, AZ, 85281

Volunteers still needed: 8`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009UHv2UMAT",date:"2026-11-14"},{name:"Tucson Smoke Alarm Walk (Referral)",description:`Why Your Involvement Matters: With your support, we aim to install smoke alarms at no cost to residents in low-income or high-risk homes, with a goal of reaching hundreds of residents in just one morning! This is an opportunity to directly impact our community and contribute to creating safer living environments for those who need it most.

What's In It for You:

	
Meaningful Impact: Contribute to reducing the risk of house fires, saving lives, and fostering safer communities through education.

	
Training and Tools: No experience is necessary! We provide all the tools and training beforehand to ensure you feel confident and prepared.

	
Community Spirit: Connect with like-minded individuals who share your passion for giving back, volunteer alongside a group of colleagues, friends and family, and invest in your local community!

	
Free Breakfast: Start your day right with a complimentary breakfast to energize you for the day!

How to Get Involved: Sign-up through this online portal or email tess.robaina@azburn.org so we know you’re coming! This is a great opportunity for groups or families to volunteer alongside one another. Then, simply show up at the meeting location ready to make a positive impact. Together, we can create change and build a safer, stronger community.

Have Questions? We're here to help! Reach out to us anytime if you have questions or want additional details.

Thank you for choosing to volunteer and being a force for good in our community!

2026-11-14 | 8:00 AM - 12:00 PM

Location: Tucson, AZ, 85710

Volunteers still needed: 100`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009b5e9bMAA",date:"2026-11-14"},{name:"Community Garden Workers with Keep Phoenix Beautiful",description:`Keep Phoenix Beautiful envisions a vibrant Phoenix where each neighborhood is a healthy, beautiful place to live. Every day, Keep Phoenix Beautiful provides tools to empower our diverse communities to improve overall quality of life.

Spend your morning at KPB's Pierson Street Garden and help maintain and enhance this amazing resource for the local community! Volunteers will help with a variety of tasks which may include planting flowers & produce, building compost bins, revamping the chicken coop, painting tables and garden beds, spreading mulch, clearing trash, and removing weeds. Lighter duties may include organizing the barn, wiping down recycling bins, folding t-shirts, organizing gloves, and prepping cleanup kits.

Please wear sturdy closed-toe shoes, and comfy clothes that can get dirty. Bring SPF and a hat. Water and snacks will be provided on site, but bringing water is always recommended!

Please park behind the garden in the Metro Light Rail – Park and Ride parking lot and enter through the gate at the back entrance of the garden!

The minimum age for this volunteer opportunity is 7 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-14 | 8:00 AM - 10:00 AM

Location: Phoenix, AZ, 85015

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008mZ6cIMAS",date:"2026-11-14"},{name:"Stuff-The-Sleigh: Help Collect Donations for Operation Santa! (Referral)",description:`Help us kick off the holiday season by volunteering at SARRC's (Southwest Autism Research & Resource Center) Operation Santa Claus Toy Drive!

We're looking for volunteers to staff Walmart locations across the Valley on Saturday, November 14th, where you'll greet shoppers and encourage them to donate new, unwrapped toys to help make the holidays brighter for local families.

If you're registering multiple people (such as a parent/child team), please enter the total number of attendees in the quantity field. Volunteers under the age of 16 must be accompanied by a parent or guardian.

If you have any questions, please contact Serenity Mitchell. If your plans change and you're no longer able to attend, please let Serenity know as soon as possible so we can offer your spot to another volunteer. You will be recieving additonal details closer to the event!

Thank you for helping us spread holiday cheer and make a difference for the families we serve!

Click express interest below to be redirected to our volunteer registration page!

2026-11-14 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85006

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009bbqvTMAQ",date:"2026-11-14"},{name:"Community Crafters at HandsOn Greater Phoenix",description:`Bring the family to this fun and engaging volunteer event at the HandsOn Greater Phoenix office in Mesa! Each month, volunteers will be doing crafty projects to benefit our nonprofit partners. Whether it's creating fleece capes for foster kids, making no-sew blankets for Veterans, or decorating canvas bags/bookmarks to supplement our kitted projects for youth, we'll have an activity for you to get creative for a cause!

The minimum age for participation is 6. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child/children, please email the opportunity coordinator listed below and ask to reserve a guest slot(s). Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-14 | 10:00 AM - 11:30 AM

Location: Mesa, AZ, 85204

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008pOAETMA4",date:"2026-11-14"},{name:"Afternoon Sort and Pack at St. Mary&#39;s Food Bank - Phoenix",description:`Bring your helping hands to sort, pack, and distribute food that will go to other nonprofits and families in crisis at St. Mary's Food Bank Alliance. You will have a blast meeting new people while working the assembly line!

St. Mary's Food Bank is always in need of donations. Items such as cereal, canned goods, packages of bottled water, sports drinks, as well as dog and cat food are greatly appreciated. Feel free to bring donations with you to the project.

Due to health codes and safety reasons, a volunteer dress code is in effect. Volunteers MUST wear:

 

	
Closed Toe Shoes (sneakers or boots only)

	
Shirts need to be short or long sleeved (No tank tops, spaghetti straps, sleeveless,  midriff or low-cut tops)

	
Pants, jeans preferred.  Shorts are okay at a respectable length. (Must be no shorter than 7” above the knee).

The minimum age for this volunteer opportunity is 12 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

To speed up the check-in process all volunteers can create an account by clicking the link below. 

Upon arrival, volunteers first need to check in with the Volunteer Leader listed below and sign our check-in sheet, then sign in on St. Mary's tablets to acknowledge the waiver and designate the company/organization you are associated with (HandsOn Greater Phoenix). 

http://stmarysfoodbank.volunteerhub.com/

	
Create account. 

	
Affiliate yourself with HandsOn Greater Phoenix under company name (list is not alphabetized)

	
Sign up for the shift.

	
Please note that all volunteers will need to be affiliated with group name to sign up and view the shift.

New volunteers under 18 attending the project without an adult must complete this waiver of liability for St. Mary's Food Bank Alliance and bring it with them to the project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-14 | 12:00 PM - 2:00 PM

Location: Phoenix, AZ, 85009

Volunteers still needed: 6`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008WyK29MAF",date:"2026-11-14"},{name:"Game Room Nights (Referral)",description:`Game Room Nights

Upcoming dates:

	
Saturday, November 14, 5-9pm at Jefferson Recreation Center - 120 S Jefferson Ave, Mesa, AZ 85208

	
Saturday, December 19, from 4-8pm at Eagles Community Center - 828 E Broadway Rd, Mesa, AZ 85204

Volunteer job description:

	
Assist with set up and clean up 30 minutes before and after event

	
Play video games or board games with participants (may need to assist with teaching how to play the game)

	
Serving pizza and drinks

Please express interest below to be redirected to our volunteer application.

2026-11-14 | 5:00 PM - 9:00 PM

Location: Mesa, AZ, 85208

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fhw3CMAQ",date:"2026-11-14"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-16 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3x4MAC",date:"2026-11-16"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-17 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3x5MAC",date:"2026-11-17"},{name:"Nutrition Program Volunteer (Referral)",description:`Advance Community's Nutrition Program offers 2 separate volunteer opportunities. Our first program, Stove to Table delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package over 500 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal.

Our second program is Mercado Fresh where we provide monthly nutritious food boxes to individuals facing food insecurity and chronic health conditions—because giving food is giving dignity.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
9:00 AM to 1:00 PM

You will be placed where the need is the greatest that day (either the kitchen or warehouse)

We ask that you come dressed appropriately; please no open toed shoes. Volunteers under the age of 16 are welcome with a parent or guardian.

2026-11-17 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fGfW2MAK",date:"2026-11-17"},{name:"HeARTsy (Peoria) Art Class Volunteer Adaptive Adults (Referral)",description:`During COVID, in 2020, Heartsy started working with adaptive adults with disabilities here in AZ including the Arc of Tempe, Tempe Pathway to Work, Treasure House and city park and recreation groups in Peoria, Surprise, Mesa, and Phoenix.  We love to have FUN so bring your silly side, your best sence of humor and a joke or two if that's your style! EVERYONE IS ACCEPTED HERE! 

After 4 years of experience specifically teaching this special group of individuals, we know their attention span, we know what arts materials they are able to safely manipulate and how to keep them moving successfully through a 2 hour program. ( While laughing, smiling, and having FUN!) 

As a volunteer in the classroom we sometimes have a student who would benefit from one on one assistance. No arts experience is necessary, just patience, kindness and a smile.

These students have a variety of intellectual, physical and mental disabilities. They sometimes find it hard to fit into a typical public group arts class and therefore need a special program, such as this, which is catered to their special style of learning. You will be AMAZED at what they create! 

We are looking for (5) volunteers MAXIMUM to help us in class. Verifying by phone is mandatory to confirm your enrollment for this class. Please call Tina upon registration at 651-334-3997. Let's meet outside in the parking lot or at the front door 15 minutes early ( I often could use a helping hand carrying materials inside.) Please wait there until we arrive as we are often coming from other classes/locations and timing is a bit flexible within 10-15 minutes. 

The minimum age for this volunteer opportunity is 16 with a parent/guardian. Please let us know if you plan to bring a child under the age of 18.

This is a casual, relaxed atmosphere. Please wear comfortable close-toed shoes, and feel free to wear jeans and a solid black T-shirt so the students know who Heartsy helpers are. (Please no shirts with words on them as they are distracting to this population) 

If you have questions, please call or email Tina Ferguson @ (651) 334-3997 or Tina@beHeARTsy.com

Please note: We are generally not reachable the day of class, during class time or in transit to classes. Questions or comments must be emailed or texted to Tina 24 hours in advance. Pleasr respect our prep time.

Thank you so much for your support! Your assistance in our classes or at 3rd Monday art material preparation day has been absolutely key to our success as a volunteer based NonProfit 501.c3 organization.

2026-11-17 | 10:30 AM - 12:30 PM

Location: Peoria, AZ, 85345

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000099zdeeMAA",date:"2026-11-17"},{name:"HeARTsy (Peoria) Art Class Volunteer-Senior Citizens (Referral)",description:`HeARTsy's Executive director, artist and architect, Tina Ferguson, has worked with Seniors since 2009 when she closed her Architectural Fitm to start a for profit arts education business inspired by her own Nana after her grandfathers unexpected death.  Before COVID, Artsy Smartsy was Minnesota and Arizonas largest Senior arts education provider specializing in the fine arts education of seniors with Alzheimer's, Dementia and Parkinson's Disease. She won the Phoenix Major's Art Award in 2018 for her work with these populations. 

 

Because many low income senior communities in Phoenix could not afford arts classes, Tina founded a non profit 501.C3 in 2018 and Heartsy has now taught classes specifically dedicated to this population in Scottsdale, Phoenix, Peoria, Surprise, Tempe and Sun Lakes! 

Each class teaches different arts mediums including clay, decoupage, weaving, alcohol inks, silk and glass painting, puzzle and umbrella painting and so much more! 

We love to have FUN so bring your silly side, your best sence of humor and a joke or two if that's your style! EVERYONE IS ACCEPTED HERE! 

After 15 total years of experience specifically teaching this special group of individuals, we know their attention span, we know what arts materials they are able to safely manipulate and how to keep them moving successfully through a 2 hour program. ( While laughing, singing, smiling, and having FUN!) 

As a volunteer in the classroom we sometimes have a student who would benefit from one on one assistance. No arts experience is necessary, just patience, kindness and a smile.

These senior students' art abilities vary from independent seniors to those with a care giver and significant cognitive decline (Alzheimer's and Parkinson's Disease). They sometimes find it hard to fit into a typical public group arts class and therefore need a special program, such as this, which is catered to their special style of learning. You will be AMAZED at what they create! 

We are looking for (5) volunteers MAXIMUM to help us in class. Verifying by phone is mandatory to confirm your enrollment for this class. Please call Tina upon registration at 651-334-3997. This is our second class in Peoria on this day (please feel free to volunteer for our adaptive arts class which starts at 12:30-2) so please come in and the staff at the front desk will direct you to our classroom. (I park on the West side of the building by the little park and can always use a helping hand loading up after class if you'd like to park on that side as well!)

The minimum age for this volunteer opportunity is 16 with a parent/guardian. Please let us know if you plan to bring a child under the age of 18.

This is a casual, relaxed atmosphere. Please wear comfortable close-toed shoes, and feel free to wear jeans and a solid black T-shirt so the students know who Heartsy helpers are. (Please no shirts with words on them as they are distracting to this population) 

If you have questions, please call or email Tina Ferguson @ (651) 334-3997 or Tina@beHeARTsy.com

Please note: We are generally not reachable the day of class, during class time or in transit to classes. Questions or comments must be emailed or texted to Tina 24 hours in advance. Pleasr respect our prep time.

Thank you so much for your support! Your assistance in our classes or at 3rd Monday art material preparation day has been absolutely key to our success as a volunteer based NonProfit 501.c3 organization.

2026-11-17 | 12:45 PM - 2:45 PM

Location: Peoria, AZ, 85345

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009A1ns9MAB",date:"2026-11-17"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-18 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3x6MAC",date:"2026-11-18"},{name:"Nutrition Program Volunteer (Referral)",description:`Advance Community's Nutrition Program offers 2 separate volunteer opportunities. Our first program, Stove to Table delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package over 500 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal.

Our second program is Mercado Fresh where we provide monthly nutritious food boxes to individuals facing food insecurity and chronic health conditions—because giving food is giving dignity.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
9:00 AM to 1:00 PM

You will be placed where the need is the greatest that day (either the kitchen or warehouse)

We ask that you come dressed appropriately; please no open toed shoes. Volunteers under the age of 16 are welcome with a parent or guardian.

2026-11-18 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fFZUNMA4",date:"2026-11-18"},{name:"HeARTsy (Phoenix) Art Class Volunteer - Senior Citizens (Referral)",description:`-

2026-11-18 | 12:00 PM - 2:00 PM

Location: Phoenix, AZ, 85042

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009A3MHpMAN",date:"2026-11-18"},{name:"HeARTsy (Phoenix) Art Class Volunteer-Adaptive Adults (Referral)",description:`During COVID, in 2020, Heartsy started working with adaptive adults with disabilities here in AZ including the Arc of Tempe, Tempe Pathway to Work, Treasure House and city park and recreation groups in Peoria, Surprise, Mesa, and Phoenix.  We love to have FUN so bring your silly side, your best sence of humor and a joke or two if that's your style! EVERYONE IS ACCEPTED HERE! 

After 6 years of experience specifically teaching this special group of individuals, we know their attention span, we know what arts materials they are able to safely manipulate and how to keep them moving successfully through a 2 hour program. ( While laughing, smiling, and having FUN!) 

As a volunteer in the classroom we sometimes have a student who would benefit from one on one assistance. No arts experience is necessary, just patience, kindness and a smile.

These students have a variety of intellectual, physical and mental disabilities. They sometimes find it hard to fit into a typical public group arts class and therefore need a special program, such as this, which is catered to their special style of learning. You will be AMAZED at what they create! 

We are looking for (5) volunteers MAXIMUM to help us in class. Verifying by email is mandatory to confirm your enrollment for this class. Let's meet outside in the parking lot or at the front door 15 minutes early ( I often could use a helping hand carrying materials inside.) Please wait there until we arrive as we are often coming from other classes/locations and timing is a bit flexible within 10-15 minutes. 

The minimum age for this volunteer opportunity is 16 with a parent/guardian. Please let us know if you plan to bring a child under the age of 18.

This is a casual, relaxed atmosphere. Please wear comfortable close-toed shoes, and feel free to wear jeans and a solid black T-shirt so the students know who Heartsy helpers are. (Please no shirts with words on them as they are distracting to this population) 

If you have questions, please email Tina Ferguson @ Tina@beHeARTsy.com

Please note: We are generally not reachable the day of class, during class time or in transit to classes. Questions or comments must be emailed or texted to Tina 24 hours in advance. Pleasr respect our prep time.

Thank you so much for your support! Your assistance in our classes or at 3rd Monday art material preparation day has been absolutely key to our success as a volunteer based NonProfit 501.c3 organization.

2026-11-18 | 12:00 PM - 2:00 PM

Location: Phoenix, AZ, 85042

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000099qLxrMAE",date:"2026-11-18"},{name:"HeARTsy (Tempe) Art Class Volunteer - Adaptive Adults (Referral)",description:`During COVID, in 2020, Heartsy started working with adaptive adults with disabilities here in AZ including the Arc of Tempe, Tempe Pathway to Work, Treasure House and city park and recreation groups in Peoria, Surprise, Mesa, and Phoenix.  We love to have FUN so bring your silly side, your best sence of humor and a joke or two if that's your style! EVERYONE IS ACCEPTED HERE! 

After 4 years of experience specifically teaching this special group of individuals, we know their attention span, we know what arts materials they are able to safely manipulate and how to keep them moving successfully through a 2 hour program. ( While laughing, smiling, and having FUN!) 

As a volunteer in the classroom we sometimes have a student who would benefit from one on one assistance. No arts experience is necessary, just patience, kindness and a smile.

These students have a variety of intellectual, physical and mental disabilities. They sometimes find it hard to fit into a typical public group arts class and therefore need a special program, such as this, which is catered to their special style of learning. You will be AMAZED at what they create! 

We are looking for (5) volunteers MAXIMUM to help us in class. Verifying by phone is mandatory to confirm your enrollment for this class. Please call Tina upon registration at 651-334-3997. Let's meet outside in the parking lot or at the front door 15 minutes early ( I often could use a helping hand carrying materials inside.) Please wait there until we arrive as we are often coming from other classes/locations and timing is a bit flexible within 10-15 minutes. 

The minimum age for this volunteer opportunity is 16 with a parent/guardian. Please let us know if you plan to bring a child under the age of 18.

This is a casual, relaxed atmosphere. Please wear comfortable close-toed shoes, and feel free to wear jeans and a solid black T-shirt so the students know who Heartsy helpers are. (Please no shirts with words on them as they are distracting to this population) 

If you have questions, please call or email Tina Ferguson @ (651) 334-3997 or Tina@beHeARTsy.com

Please note: We are generally not reachable the day of class, during class time or in transit to classes. Questions or comments must be emailed or texted to Tina 24 hours in advance. Pleasr respect our prep time.

Thank you so much for your support! Your assistance in our classes or at 3rd Monday art material preparation day has been absolutely key to our success as a volunteer based NonProfit 501.c3 organization.

2026-11-18 | 6:00 PM - 8:00 PM

Location: Tempe, AZ, 85281

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009A2cqAMAR",date:"2026-11-18"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-19 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3x7MAC",date:"2026-11-19"},{name:"El Rancho Del Sol Community Garden (Referral)",description:`Volunteers are one of the most powerful ways Local First Arizona mobilizes communities across the state. By supporting our food access and community initiatives, volunteers help connect residents to fresh, nourishing foods while creating welcoming spaces that celebrate local food and the people who grow, make and share it.

Depending on the season, volunteers will help with watering, weeding, planting, harvesting and general garden maintenance.

Volunteers should bring plenty of water, sun protection & gardening gloves (if you have them). Parking available in the lot behind the El Rancho Del Sol apartments or on the street (on Ashland, off Main Street). The garden is behind the dumpsters in the back of the parking lot, surrounded by an orange gate. You’ll be performing plant maintenance, composting and harvesting.

Shifts are the 1st and 3rd Thursday of each month.

Shift times vary with the seasons:

7 a.m. - 9 a.m. May - September

8 a.m. - 10 a.m. October - April

Located behind Del Sol Apartments

701 E Main St

Mesa, AZ 85203

To sign up, click express interest below and you will be redirected to our registration page!

2026-11-19 | 8:00 AM - 10:00 AM

Location: Mesa, AZ, 85203

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000093rC82MAE",date:"2026-11-19"},{name:"HeARTsy (Phoenix) Art Class Volunteer-Adaptive Adults (Referral)",description:`During COVID, in 2020, Heartsy started working with adaptive adults with disabilities here in AZ including the Arc of Tempe, Tempe Pathway to Work, Treasure House and city park and recreation groups in Peoria, Surprise, Mesa, and Phoenix.  We love to have FUN so bring your silly side, your best sence of humor and a joke or two if that's your style! EVERYONE IS ACCEPTED HERE! 

After 6 years of experience specifically teaching this special group of individuals, we know their attention span, we know what arts materials they are able to safely manipulate and how to keep them moving successfully through a 2 hour program. ( While laughing, smiling, and having FUN!) 

As a volunteer in the classroom we sometimes have a student who would benefit from one on one assistance. No arts experience is necessary, just patience, kindness and a smile.

These students have a variety of intellectual, physical and mental disabilities. They sometimes find it hard to fit into a typical public group arts class and therefore need a special program, such as this, which is catered to their special style of learning. You will be AMAZED at what they create! 

We are looking for (5) volunteers MAXIMUM to help us in class. Verifying by email is mandatory to confirm your enrollment for this class. Let's meet outside in the parking lot or at the front door 15 minutes early ( I often could use a helping hand carrying materials inside.) Please wait there until we arrive as we are often coming from other classes/locations and timing is a bit flexible within 10-15 minutes. 

The minimum age for this volunteer opportunity is 16 with a parent/guardian. Please let us know if you plan to bring a child under the age of 18.

This is a casual, relaxed atmosphere. Please wear comfortable close-toed shoes, and feel free to wear jeans and a solid black T-shirt so the students know who Heartsy helpers are. (Please no shirts with words on them as they are distracting to this population) 

If you have questions, please email Tina Ferguson @ Tina@beHeARTsy.com

Please note: We are generally not reachable the day of class, during class time or in transit to classes. Questions or comments must be emailed or texted to Tina 24 hours in advance. Pleasr respect our prep time.

Thank you so much for your support! Your assistance in our classes or at 3rd Monday art material preparation day has been absolutely key to our success as a volunteer based NonProfit 501.c3 organization.

2026-11-19 | 9:45 AM - 11:45 AM

Location: Phoenix, AZ, 85042

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009A3yWwMAJ",date:"2026-11-19"},{name:"Adaptive Pickleball- Coach/Unified Partner (Referral)",description:`Dates: Thursdays, November 5, 2026 - January 28, 2027 + Tournament on Saturday, January 30, 2027

Location: Mesa Tennis & Pickleball Center - 4125 E McKellips Rd, Mesa, AZ 85215

	
5pm-6pm (Youth)

	
6pm-7pm (Adult – Beginner)

	
7pm-8pm (Adult – Intermediate)

Activity Description:

	
This program is for individuals with intellectual disabilities to prepare them for Special Olympics pickleball competitions. The youth and adult beginner sessions focus on learning pickleball skills, while the adult intermediate session will mainly focus on game play.

Job Description:

	
Coach: will be at practices and if available, play as a Unified Partner in the Special Olympics Pickleball Competition

	
Unified Partner: commit to attending 2-3 practices in January and play in the Special Olympics Pickleball Competition. Must have prior pickleball playing experience and knowledge of pickleball rules

	
Assist with set up and clean up 15-30 minutes before and after practice

	
Assist coaches in running a court or run a court independently if needed with the guidance of a head coach

	
Gathering balls for each court throughout practice

	
Be encouraging and cheer on participants while they practice!

	
Experience is preferred but not required but volunteers must engage in the activity

Volunteer Number Requesting:

	
Volunteers: 1-5

	
Coaches: 2-5

	
Unified Partners: 5-10

Click express interest below to be redirected to our volunteer application.

2026-11-19 | 5:00 PM - 8:00 PM

Location: Mesa, AZ, 85205

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009filgYMAQ",date:"2026-11-19"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-20 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3x8MAC",date:"2026-11-20"},{name:"Lunch Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-20 | 10:00 AM - 1:30 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009iCMtIMAW",date:"2026-11-20"},{name:"Site Beautification at YWCA",description:`Part of YWCA's mission is to mitigate aging’s most harmful threats through home-delivered meals and senior centers. The organization provides safe spaces where older adults can congregate, share a meal, crack a smile, and create community.

Do you have a knack for organizing, labeling, decluttering, kit asssembly, or decorating? Then this volunteer opportunity is for you! Help YWCA maintain a warm and welcoming environment for senior guests at their main location in Glendale. Tasks will vary each month. A hot lunch will be provided if desired!

Volunteers must be 18 years or older to participate in this volunteer opportunity.

2026-11-20 | 10:30 AM - 12:30 PM

Location: Glendale, AZ, 85302

Volunteers still needed: 6`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000092exPYMAY",date:"2026-11-20"},{name:"Evening Meal Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-20 | 3:00 PM - 6:00 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009iJhphMAC",date:"2026-11-20"},{name:"From the Ground Up: Volunteer Day at the Ranch (Referral)",description:`Join us for a meaningful day of giving back at Wildcat Ranch Phoenix! This in-person volunteer event is a wonderful opportunity to roll up your sleeves, enjoy the outdoors, and make a direct impact on the ranch and the horses who call it home.

Volunteers will work together on a variety of hands-on projects, including fence repairs, stall cleaning and refreshing, barn organization, and general facility beautification. These improvements help create a safer, more welcoming environment for our horses and the individuals who participate in our therapy programs.

No ranch experience is necessary—whether you’re a seasoned ranch hand or simply eager to help, your time and effort truly make a difference. Connect with nature, meet fellow community members, and be part of something meaningful.

2026-11-21 | 7:00 AM - 10:00 AM

Location: PHOENIX, AZ, AZ, 85042

Volunteers still needed: 50`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008oZRu7MAG",date:"2026-11-21"},{name:"Coronado Area Softball Competition in Tucson (Referral)",description:`Join Special Olympics Arizona for a Coronado Area Softball Competition in Tucson!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

 

Lunch will be provided for this shift.

2026-11-21 | 8:00 AM - 2:00 PM

Location: Tucson, AZ, 85713

Volunteers still needed: 20`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EEiPNMA1",date:"2026-11-21"},{name:"Maricopa Smoke Alarm Walk (Referral)",description:`Why Your Involvement Matters: With your support, we aim to install smoke alarms at no cost to residents in low-income or high-risk homes, with a goal of reaching hundreds of residents in just one morning! This is an opportunity to directly impact our community and contribute to creating safer living environments for those who need it most.

What's In It for You:

	
Meaningful Impact: Contribute to reducing the risk of house fires, saving lives, and fostering safer communities through education.

	
Training and Tools: No experience is necessary! We provide all the tools and training beforehand to ensure you feel confident and prepared.

	
Community Spirit: Connect with like-minded individuals who share your passion for giving back, volunteer alongside a group of colleagues, friends and family, and invest in your local community!

	
Free Breakfast: Start your day right with a complimentary breakfast to energize you for the day!

How to Get Involved: Sign-up through this online portal or email tess.robaina@azburn.org so we know you’re coming! This is a great opportunity for groups or families to volunteer alongside one another. Then, simply show up at the meeting location ready to make a positive impact. Together, we can create change and build a safer, stronger community.

Have Questions? We're here to help! Reach out to us anytime if you have questions or want additional details.

Thank you for choosing to volunteer and being a force for good in our community!

2026-11-21 | 8:00 AM - 12:00 PM

Location: Maricopa, AZ, 85138

Volunteers still needed: 100`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008xqimzMAA",date:"2026-11-21"},{name:"November 2026 Monthly Park Cleanup and Stinknet Removal–LoPiano Park East (Ref)",description:`Join Keep Tempe Beautiful on Saturday, November 21st to clean up LoPiano Park East and remove invasive stinknet.

We will be at the Public Tempe Town Lake Parking near the Town Lake Marina Boat Launch (550 E Tempe Town Lake, Tempe, AZ 85288).

Here is more information on what we will be working on:

o Trash and litter removal

o Stinknet removal

If you need additional support in identifying stinknet, we recommend the iNaturalist app (press + to create a new observation, take a photo, then review suggestions).

If you would like to support larger efforts to stop the spread, please report your findings on Stinknet.org (push the red button, input the details, then submit).

Bring water, sunscreen, hat and gloves. Your time slot will start and end on time; we won’t ask you to stay longer.

There is no minimum age to participate in this event and we will have staff on-site to sign any documents for community service requirements.

1 Hour Shifts – 3 Shifts in Total: 8am-9am, 9am-10am, 10am-11am.

You are welcome to sign up for one session or multiple.

We are also looking for Day Chairs to assist in managing the event!

Day Chairs are the lifeblood of our operations and are the first step to greater leadership opportunities within Keep Tempe Beautiful. Some of the things Day Chairs are tasked with are event setup, teardown, sign-in, sign-out, event raffles (if applicable), parking lot attendance, diverting trash from recyclables, photo/video taker, and more (these aren’t things that you choose; rather, everyone does a little of each depending where the needs are during the event)!

Click express interest below to be redirected to our sign up page!

2026-11-21 | 8:00 AM - 11:00 AM

Location: Tempe, AZ, 85281

Volunteers still needed: 20`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00006oUtMSMA0",date:"2026-11-21"},{name:"Sort and Pack at St. Mary&#39;s Food Bank - Phoenix",description:`Bring your helping hands to sort, pack, and distribute food that will go to other nonprofits and families in crisis at St. Mary's Food Bank Alliance. You will have a blast meeting new people while working the conveyer belt!

St. Mary's Food Bank is always in need of donations. Items such as cereal, canned goods, packages of bottled water, sports drinks, as well as dog and cat food are greatly appreciated. Feel free to bring donations with you to the project.

Due to health codes and safety reasons, a volunteer dress code is in effect. Volunteers MUST wear:

 

	
Closed Toe Shoes (sneakers or boots only)

	
Shirts need to be short or long sleeved (No tank tops, spaghetti straps, sleeveless,  midriff or low-cut tops)

	
Pants, jeans preferred.  Shorts are okay at a respectable length. (Must be no shorter than 7” above the knee).

The minimum age for this volunteer opportunity is 12 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

To speed up the check-in process all volunteers can create an account by clicking the link below. 

Upon arrival, volunteers first need to check in with the Volunteer Leader listed below and sign our check-in sheet, then sign in on St. Mary's tablets to acknowledge the waiver and designate the company/organization you are associated with (HandsOn Greater Phoenix). 

http://stmarysfoodbank.volunteerhub.com/

	
Create account. 

	
Affiliate yourself with HandsOn Greater Phoenix under company name (list is not alphabetized)

	
Sign up for the shift.

	
Please note that all volunteers will need to be affiliated with group name to sign up and view the shift.

New volunteers under 18 attending the project without an adult must complete this Waiver of Liability for St. Mary's Food Bank Alliance and bring it with them to the project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-21 | 8:00 AM - 10:00 AM

Location: Phoenix, AZ, 85009

Volunteers still needed: 6`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008WwhZNMAZ",date:"2026-11-21"},{name:"Furry Friends at Forever Loved Pet Sanctuary",description:`Forever Loved's mission is to help overlooked senior dogs in Arizona find their forever homes. Help care for these furry friends while they wait for adoption!

Volunteer duties may include feeding, cleaning, grooming, walking, and socializing with the dogs.

The minimum age for this opportunity is 16. All volunteers aged 16 & 17 attending without a parent/guardian MUST bring a signed Youth Waiver to each project.

Volunteers must show up at 8:30am. No one will be present to let you through the gates if you are more than 5 minutes late.

Please wear closed-toe shoes and long pants that can get dirty! We recommend bringing a water bottle and wearing sunscreen. The sanctuary is located on a private residence. Please park on the street in front of the house without blocking any driveways. Your volunteer leader will meet you out front!

2026-11-21 | 8:30 AM - 10:00 AM

Location: Scottsdale, AZ, 85254

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008lVZDlMAO",date:"2026-11-21"},{name:"The People&#39;s Garden (Referral)",description:`Volunteers are one of the most powerful ways Local First Arizona mobilizes communities across the state. By supporting our food access and community initiatives, volunteers help connect residents to fresh, nourishing foods while creating welcoming spaces that celebrate local food and the people who grow, make and share it.

Dig in at The People’s Garden, a thriving Central Phoenix space uplifting community growers and entrepreneurs while fostering environmental sustainability and connection.

Depending on the season, volunteers will help with:

	
Watering, weeding, planting and harvesting

	
Performing general garden maintenance and beautification

	
Composting and site cleanup

	 

Shift times vary with the seasons:

7 a.m. - 10 a.m. May - October

9 a.m. - 12 p.m.  November - February

8 a.m. - 11 a.m. March - April

 

Located in south Phoenix

123 E Durango St

Phoenix, AZ 85004

 

Please express interest below to be redirected to our sign up page!

2026-11-21 | 9:00 AM - 12:00 PM

Location: Phoenix, AZ, 85004

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000092jIHgMAM",date:"2026-11-21"},{name:"Yard Games with Civitan House",description:`Join the residents of Civitan House, a home for adults with developmental disabilities, in a morning of fun! Play classic yard games like corn hole, bocci ball, croquet, and more in this social volunteer opportunity.

This opportunity will take place outside. In the event of rain, we will move inside and play Bingo.

The minimum age for this volunteer opportunity is 8 with a parent or guardian. All volunteers under the age of 18 must be accompanied by a parent/guardian.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-21 | 9:00 AM - 11:00 AM

Location: Phoenix, AZ, 85015

Volunteers still needed: 7`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009TUPgtMAH",date:"2026-11-21"},{name:"2026 Family Volunteer Day at HandsOn Greater Phoenix",description:`Saturday, November 21st, is National Family Volunteer Day! Bring the family to this fun and engaging volunteer event at the HandsOn Greater Phoenix office in Mesa!

Families can expect to complete small construction builds and crafty projects to benefit our nonprofit partners. Whether it's wrapping presents for the holiday season, assembling kitted projects for youth, or building outdoor furniture for local direct service organizations, we'll have an activity for you to get creative for a cause!

This year's activities will include:

	
mural painting

	
dog bed contruction

	
no-sew blankets

	
gift wrapping

	
cleaning and organizing

	
cricut stencil cutting

We will wrap up the day with pizza and raffle prizes!

The minimum age for participation is 6. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child/children, please email the opportunity coordinator listed below and ask to reserve a guest slot(s). Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-21 | 9:00 AM - 12:00 PM

Location: Mesa, AZ, 85204

Volunteers still needed: 20`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009TZHqHMAX",date:"2026-11-21"},{name:"Medical Sort and Pack at Project C.U.R.E.",description:`Bring hope and health to the world with Project C.U.R.E., a national faith-based organization! Join us as we sort and pack desperately needed medical supplies that are shipped to hospitals, clinics, and orphanages in over 100 poverty stricken countries worldwide! Volunteers will meet new people and learn a lot about medical supplies and the urgent needs of them in under-resourced countries around the world.

The minimum age for this volunteer opportunity is 14 with a parent or guardian. All volunteers under the age of 18 must be accompanied by a parent/guardian.

Volunteers must create an account with Project C.U.R.E. and sign in through their system at the warehouse. To make this process faster, please register here to set up your account before the project date.

Note: The building is a warehouse, so please wear close-toed shoes, appropriate clothing and bring water. You may be packing in either the warehouse or the sorting center. Please be prepared to do some lifting (up to 30 pounds). 

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-21 | 9:00 AM - 12:00 PM

Location: Phoenix, AZ, 85009

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008l05qTMAQ",date:"2026-11-21"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-23 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3x9MAC",date:"2026-11-23"},{name:"Chef&#39;s Night Off at HomeBase",description:`Roll up your sleeves and help chop, slice, and dice with love as you prepare and serve dinner for homeless youth and young adults (ages 18-21) at HomeBase Youth Services. You can also help pack lunches that will be distributed throughout the week to homeless youth and young adults. Allow the busy chef to have a nice evening off.

Volunteers must wear closed-toe shoes, and long hair should be pulled back.

The minimum age for this project is 11 with a parent/guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-23 | 4:00 PM - 6:00 PM

Location: Phoenix, AZ, 85014

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008qxBLxMAM",date:"2026-11-23"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-24 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3xAMAS",date:"2026-11-24"},{name:"Nutrition Program Volunteer (Referral)",description:`Advance Community's Nutrition Program offers 2 separate volunteer opportunities. Our first program, Stove to Table delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package over 500 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal.

Our second program is Mercado Fresh where we provide monthly nutritious food boxes to individuals facing food insecurity and chronic health conditions—because giving food is giving dignity.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
9:00 AM to 1:00 PM

You will be placed where the need is the greatest that day (either the kitchen or warehouse)

We ask that you come dressed appropriately; please no open toed shoes. Volunteers under the age of 16 are welcome with a parent or guardian.

2026-11-24 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fGgofMAC",date:"2026-11-24"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-25 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3xBMAS",date:"2026-11-25"},{name:"Nutrition Program Volunteer (Referral)",description:`Advance Community's Nutrition Program offers 2 separate volunteer opportunities. Our first program, Stove to Table delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package over 500 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal.

Our second program is Mercado Fresh where we provide monthly nutritious food boxes to individuals facing food insecurity and chronic health conditions—because giving food is giving dignity.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
9:00 AM to 1:00 PM

You will be placed where the need is the greatest that day (either the kitchen or warehouse)

We ask that you come dressed appropriately; please no open toed shoes. Volunteers under the age of 16 are welcome with a parent or guardian.

2026-11-25 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fGJXEMA4",date:"2026-11-25"},{name:"Salvation Army Thanksgiving Meal- MULTIPLE SHIFTS",description:`PLEASE NOTE: This year, all volunteers must select a shift and register directly through the Salvation Army's website. You are not officially signed up until you have completed the Salvations Army's registration! DUE TO SECURITY REQUIREMENTS, IF A NAME IS NOT ON THE LIST, YOU WILL NOT BE ALLOWED TO STAY AND VOLUNTEER.

This year, The Salvation Army will provide approximately 2,000 hot sit-down plated meals at the South Building of the Phoenix Convention Center. In addition, our volunteers will home deliver approximately 3,000 meals and prepare additional meals to be distributed throughout the Valley.

Volunteers are needed to help in a variety of ways to make the holidays memorable for our neighbors in need. Your assistance is essential in helping us prepare and serve meals, decorate the Phoenix Convention Center South Building to create a festive atmosphere, organize engaging activities such as hair styling, games, coloring, and family photos, set up various guest areas prior to arrival, and deliver meals to homebound individuals.

PLEASE NOTE: This year, all volunteers must select a shift and register directly through the Salvation Army's website. You are not officially signed up until you have completed the Salvations Army's registration! DUE TO SECURITY REQUIREMENTS, IF A NAME IS NOT ON THE LIST, YOU WILL NOT BE ALLOWED TO STAY AND VOLUNTEER.

Click "Sign Up" below to be redirected to The Salvation Army's volunteer registration site. Enter the zip code 85004 and select the "Thanksgiving Meal-Phoenix Convention Center" opportunity to view and sign up for available shifts.

2026-11-26 | 7:00 AM - 3:00 PM

Location: Phoenix, AZ, 85004

Volunteers still needed: 22`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009VgQXYMA3",date:"2026-11-26"},{name:"Adaptive Pickleball- Coach/Unified Partner (Referral)",description:`Dates: Thursdays, November 5, 2026 - January 28, 2027 + Tournament on Saturday, January 30, 2027

Location: Mesa Tennis & Pickleball Center - 4125 E McKellips Rd, Mesa, AZ 85215

	
5pm-6pm (Youth)

	
6pm-7pm (Adult – Beginner)

	
7pm-8pm (Adult – Intermediate)

Activity Description:

	
This program is for individuals with intellectual disabilities to prepare them for Special Olympics pickleball competitions. The youth and adult beginner sessions focus on learning pickleball skills, while the adult intermediate session will mainly focus on game play.

Job Description:

	
Coach: will be at practices and if available, play as a Unified Partner in the Special Olympics Pickleball Competition

	
Unified Partner: commit to attending 2-3 practices in January and play in the Special Olympics Pickleball Competition. Must have prior pickleball playing experience and knowledge of pickleball rules

	
Assist with set up and clean up 15-30 minutes before and after practice

	
Assist coaches in running a court or run a court independently if needed with the guidance of a head coach

	
Gathering balls for each court throughout practice

	
Be encouraging and cheer on participants while they practice!

	
Experience is preferred but not required but volunteers must engage in the activity

Volunteer Number Requesting:

	
Volunteers: 1-5

	
Coaches: 2-5

	
Unified Partners: 5-10

Click express interest below to be redirected to our volunteer application.

2026-11-26 | 5:00 PM - 8:00 PM

Location: Mesa, AZ, 85205

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009filgZMAQ",date:"2026-11-26"},{name:"Lunch Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-27 | 10:00 AM - 1:30 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009iCaudMAC",date:"2026-11-27"},{name:"Evening Meal Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-27 | 3:00 PM - 6:00 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009iBYdBMAW",date:"2026-11-27"},{name:"Rise and Dine at HomeBase",description:`Start your morning off right by providing a warm, wholesome breakfast for homeless youth and young adults (ages 18-24) at HomeBase Youth Services. Serve up pancakes, bacon, eggs and toast with a smile, while giving the residents energy to start their day off right!

Volunteers must wear closed-toe shoes, and long hair must be pulled back.

The minimum age for this volunteer opportunity is 11 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project. 

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

**Please check your Email Junk/Spam folders the week of the event for instructions from the Volunteer Leader.**

2026-11-28 | 8:00 AM - 10:00 AM

Location: Phoenix, AZ, 85014

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008pJ9irMAC",date:"2026-11-28"},{name:"Thrift Shop Assistants at Hope&#39;s Closet",description:`Hope's Closet is New Life Center's social enterprise thrift store, open to both the organization's emergency shelter residents and the local community. Join us at Hope's Closet to collect and sort through clothing donations, move items to the sales floor, and organize clothing racks.

New Life Center's mission is “Helping to eliminate domestic and sexual violence through support services, education, and expertise.” New Life Center provides services to over 1,100 adults and children each year. In addition to a safe place to stay, they provide advocacy, employment services, legal assistance, comprehensive children's services, transportation and outreach services to individual survivors and their families who have experienced domestic violence, sexual abuse, or human trafficking. All proceeds from Hope's Closet go back to our participating families and help to fund shelter operations. 

The minimum age for this volunteer opportunity is 14. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-28 | 10:00 AM - 12:00 PM

Location: Goodyear, AZ, 85338

Volunteers still needed: 6`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008lZ4j8MAC",date:"2026-11-28"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-30 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3xEMAS",date:"2026-11-30"},{name:"Grant Writer (Referral)",description:`Our organization is seeking experienced writers, researchers, and data analysts to assist with storytelling and securing funding that aligns with our mission and vision. We are offering key opportunities for both remote and on-site roles. Specifically, the Grant Writer will be responsible for researching potential funders, drafting proposals, and managing the fundraising calendar. If you are interested in supporting our organization’s advancement, please reach out to us for inquiry and signup via email at dure45@sbuagphx.org. Commitment for at least a year is required and we also welcome negotiation in the terms to be served.

2026-12-01 | 9:00 AM - 2:00 PM

Location: Phoenix, AZ, 85018

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007TTSACMA5",date:"2026-12-01"},{name:"Nutrition Program Volunteer (Referral)",description:`Advance Community's Nutrition Program offers 2 separate volunteer opportunities. Our first program, Stove to Table delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package over 500 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal.

Our second program is Mercado Fresh where we provide monthly nutritious food boxes to individuals facing food insecurity and chronic health conditions—because giving food is giving dignity.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
9:00 AM to 1:00 PM

You will be placed where the need is the greatest that day (either the kitchen or warehouse)

We ask that you come dressed appropriately; please no open toed shoes. Volunteers under the age of 16 are welcome with a parent or guardian.

2026-12-01 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fFx9SMAS",date:"2026-12-01"},{name:"Adaptive Cheer (Referral)",description:`Dates: Tuesdays, December 1, 2026-March 2, 2027

Location: Jefferson Recreation Center - 120 S Jefferson Ave, Mesa, AZ 85208

	
6:30pm-7:30pm (Youth)

	
7:30pm-8:30pm (Adult)

Activity Description:

	
This program is for individuals with intellectual disabilities to prepare them for Special Olympics cheer competitions. Participants are placed on teams based on age and ability to practice cheer routines for competitions.

Job Description:

	
Assist with set up and clean up 15-30 minutes before and after practice

	
Practice the cheer routines with the athletes and help participants who are struggling with the choreography

	
Be encouraging and cheer on participants while they practice!

	
Experience is cheer, dance, gymnastics or another related area is preferred

Volunteer Number Requesting: 1-4

Please click express interest to be redirected to our volunteer application.

2026-12-01 | 6:30 PM - 8:30 PM

Location: Mesa, AZ, 85208

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fhx7HMAQ",date:"2026-12-01"},{name:"Palo Verde Area Soccer Competition (Referral)",description:`Join Special Olympics Arizona for a Palo Verde Area Soccer Competition in Goodyear!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-12-02 | 8:00 AM - 1:30 PM

Location: Goodyear, AZ, 85338

Volunteers still needed: 20`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EEfRiMAL",date:"2026-12-02"},{name:"Nutrition Program Volunteer (Referral)",description:`Advance Community's Nutrition Program offers 2 separate volunteer opportunities. Our first program, Stove to Table delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package over 500 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal.

Our second program is Mercado Fresh where we provide monthly nutritious food boxes to individuals facing food insecurity and chronic health conditions—because giving food is giving dignity.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
9:00 AM to 1:00 PM

You will be placed where the need is the greatest that day (either the kitchen or warehouse)

We ask that you come dressed appropriately; please no open toed shoes. Volunteers under the age of 16 are welcome with a parent or guardian.

2026-12-02 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fGQ41MAG",date:"2026-12-02"},{name:"BINGO! with St. Vincent de Paul",description:`Join the residents of St. Vincent de Paul's Washington Street Shelter for a fun game of BINGO! Volunteers will help run the game, read the winning numbers, and hand out prizes.

Please arrive at least 5 minutes early. The game will begin promptly at 4pm.

The minimum age for this project is 18 (adults only).

2026-12-02 | 4:00 PM - 5:00 PM

Location: Phoenix, AZ, 85034

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008jupwHMAQ",date:"2026-12-02"},{name:"Adaptive Basketball- Adult (Referral)",description:`Dates: Wednesdays, December 2, 2026 – March 3, 2027

Location: Eagles Community Center – 828 E Broadway Rd, Mesa, AZ 85204

	
Volunteer time will depend on team but they either practice between 6pm-7pm or 7pm-8pm

Activity Description:

	
This program is for individuals with intellectual disabilities to prepare them for Special Olympics basketball competitions. Participants are placed in teams to practice various basketball skills and play basketball games. Beginning end of January, teams will play games with other cities instead of practice.

Job Description:

	
Assist with set up and clean up 15-30 minutes before and after practice

	
Assist coaches or independently coach a group on specific basketball skills

	
Be encouraging and cheer on participants while they practice!

	
Experience is preferred but not required but volunteers must engage in the activity

Volunteer Number Requesting: 1-4

Please click express interest below to be redirected to our volunteer application.

2026-12-02 | 6:00 PM - 8:00 PM

Location: Mesa, AZ, 85204

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fkxM1MAI",date:"2026-12-02"},{name:"Adaptive Basketball - Youth (Referral)",description:`Dates: Wednesdays, December 2, 2026 – March 3, 2027

Location: Jefferson Recreation Center - 120 S Jefferson Ave, Mesa, AZ 85208

	
6pm-7pm (Ages 6-11)

	
7pm-8pm (Ages 12-15)

Activity Description:

	
This program is for individuals with intellectual disabilities to prepare them for Special Olympics basketball competitions. Participants are placed in groups to practice various basketball skills and play basketball games.

Job Description:

	
Assist with set up and clean up 15-30 minutes before and after practice

	
Assist coaches or independently coach a group on a specific basketball skill

	
Be encouraging and cheer on participants while they practice!

	
Experience is preferred but not required but volunteers must engage in the activity

Volunteer Number Requesting: 1-4

Additional committed volunteer option- Unified Partner:

 

Activity Description:

	
This program is for individuals with intellectual disabilities to prepare them for Special Olympics basketball competitions and play with non-disabled peers. Participants practice various basketball drills and play basketball games with teammates. Beginning in February, teams will play games with other cities instead of practice. Games are typically held on Monday or Wednesday nights in either Tempe or Chandler.

Job Description:

	
Assist with set up and clean up 15-30 minutes before and after practice

	
Attend and participate in basketball practices

	
Learn rules of a Unified Partner in Special Olympics basketball games

	
Play in local and Special Olympics competitions/games

	
Prior experience in playing basketball and knowledge of general basketball rules is required

Volunteer Number Requesting: 1-4

Please express interest below to be redirected to our volunteer application.

2026-12-02 | 6:00 PM - 8:00 PM

Location: Mesa, AZ, 85208

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fl2TaMAI",date:"2026-12-02"},{name:"Palo Verde Area Soccer Competition (Referral)",description:`Join Special Olympics Arizona for a Palo Verde Area Soccer Competition in Goodyear!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-12-03 | 8:00 AM - 1:30 PM

Location: Goodyear, AZ, 85338

Volunteers still needed: 40`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EEfRjMAL",date:"2026-12-03"},{name:"El Rancho Del Sol Community Garden - Mesa (Referral)",description:`Volunteers are one of the most powerful ways Local First Arizona mobilizes communities across the state. By supporting our food access and community initiatives, volunteers help connect residents to fresh, nourishing foods while creating welcoming spaces that celebrate local food and the people who grow, make and share it.

Depending on the season, volunteers will help with watering, weeding, planting, harvesting and general garden maintenance.

Volunteers should bring plenty of water, sun protection & gardening gloves (if you have them). Parking available in the lot behind the El Rancho Del Sol apartments or on the street (on Ashland, off Main Street). The garden is behind the dumpsters in the back of the parking lot, surrounded by an orange gate. You’ll be performing plant maintenance, composting and harvesting.

Shift times vary with the seasons:

7 a.m. - 9 a.m. May - September

8 a.m. - 10 a.m. October - April

Located behind Del Sol Apartments

701 E Main St

Mesa, AZ 85203

Please click express interest below to be redirected to our sign up page!

2026-12-03 | 8:00 AM - 10:00 AM

Location: Mesa, AZ, 85203

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000092joPXMAY",date:"2026-12-03"},{name:"El Rancho Del Sol Community Garden (Referral)",description:`Volunteers are one of the most powerful ways Local First Arizona mobilizes communities across the state. By supporting our food access and community initiatives, volunteers help connect residents to fresh, nourishing foods while creating welcoming spaces that celebrate local food and the people who grow, make and share it.

Depending on the season, volunteers will help with watering, weeding, planting, harvesting and general garden maintenance.

Volunteers should bring plenty of water, sun protection & gardening gloves (if you have them). Parking available in the lot behind the El Rancho Del Sol apartments or on the street (on Ashland, off Main Street). The garden is behind the dumpsters in the back of the parking lot, surrounded by an orange gate. You’ll be performing plant maintenance, composting and harvesting.

Shifts are the 1st and 3rd Thursday of each month.

Shift times vary with the seasons:

7 a.m. - 9 a.m. May - September

8 a.m. - 10 a.m. October - April

Located behind Del Sol Apartments

701 E Main St

Mesa, AZ 85203

To sign up, click express interest below and you will be redirected to our registration page!

2026-12-03 | 8:00 AM - 10:00 AM

Location: Mesa, AZ, 85203

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000093rC83MAE",date:"2026-12-03"},{name:"Kid Connection at The Salvation Army",description:`Volunteers will spend quality time with children at the Salvation Army Emergency Family Shelter. Arts & crafts, reading, games, and sports are par for the course at this volunteer opportunity. Volunteers will get to meet new people and make a difference in a child's day!

The minimum age for this volunteer opportunity is 18.

If this is your first time volunteering at this project, please send a copy of your driver's license to Jose.E.Ramirez@usw.salvationarmy.org at least two days before the project date. The Salvation Army will conduct a National Sex Offender search to ensure the safety of the children at the shelter. We appreciate your cooperation! Court-ordered volunteers cannot attend this event.

Volunteers will be asked to sign the Salvation Army's volunteer forms upon their arrival.  They can be reviewed here.

2026-12-03 | 4:45 PM - 6:00 PM

Location: Phoenix, AZ, 85008

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008mZHBUMA4",date:"2026-12-03"},{name:"Adaptive Pickleball- Coach/Unified Partner (Referral)",description:`Dates: Thursdays, November 5, 2026 - January 28, 2027 + Tournament on Saturday, January 30, 2027

Location: Mesa Tennis & Pickleball Center - 4125 E McKellips Rd, Mesa, AZ 85215

	
5pm-6pm (Youth)

	
6pm-7pm (Adult – Beginner)

	
7pm-8pm (Adult – Intermediate)

Activity Description:

	
This program is for individuals with intellectual disabilities to prepare them for Special Olympics pickleball competitions. The youth and adult beginner sessions focus on learning pickleball skills, while the adult intermediate session will mainly focus on game play.

Job Description:

	
Coach: will be at practices and if available, play as a Unified Partner in the Special Olympics Pickleball Competition

	
Unified Partner: commit to attending 2-3 practices in January and play in the Special Olympics Pickleball Competition. Must have prior pickleball playing experience and knowledge of pickleball rules

	
Assist with set up and clean up 15-30 minutes before and after practice

	
Assist coaches in running a court or run a court independently if needed with the guidance of a head coach

	
Gathering balls for each court throughout practice

	
Be encouraging and cheer on participants while they practice!

	
Experience is preferred but not required but volunteers must engage in the activity

Volunteer Number Requesting:

	
Volunteers: 1-5

	
Coaches: 2-5

	
Unified Partners: 5-10

Click express interest below to be redirected to our volunteer application.

2026-12-03 | 5:00 PM - 8:00 PM

Location: Mesa, AZ, 85205

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009filgaMAA",date:"2026-12-03"},{name:"Palo Verde Area Soccer Competition (Referral)",description:`Join Special Olympics Arizona for a Palo Verde Area Soccer Competition in Goodyear!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-12-04 | 8:00 AM - 1:30 PM

Location: Goodyear, AZ, 85338

Volunteers still needed: 40`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EEfRkMAL",date:"2026-12-04"},{name:"Fall 2026 Tempe Festival of Arts (Referral)",description:`Individuals and groups are welcome as volunteers at the Tempe Festivals of the Arts. Each festival requires about 350 volunteers to help manage on-site functions important to the conduct of the event. Sign up solo to meet new people. Or, sign up with your group to fulfill employers’ and organizations’ volunteer commitments while having fun! (Please note that all volunteers must have their own volunteer profile) There are several opportunties to sign up for festival prep before the event weekend, too!

			
Volunteering is a fun way to see the Festival from a different perspective, meet new people, and promote art in the community. Volunteering is a great way to serve the event and also the greater community, as well as being a source of enjoyment and pride. Meet a variety of people from all walks of life, see what happens behind the scenes and, through your service, help make the event possible.

2026-12-04 | 9:30 AM - 5:00 PM

Location: Tempe, AZ, 85281

Volunteers still needed: 50`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008bhCqzMAE",date:"2026-12-04"},{name:"Lunch Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-12-04 | 10:00 AM - 1:30 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009iIk6UMAS",date:"2026-12-04"},{name:"Evening Meal Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-12-04 | 3:00 PM - 6:00 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009iEhQaMAK",date:"2026-12-04"},{name:"Sensory Santa (Referral)",description:`Join us for Sensory Santa Night, a magical and sensory-friendly holiday experience designed for individuals with disabilities and their families. This inclusive evening features lower lighting, no music, adaptive letter writing, and festive activities to enjoy at your own pace. Volunteers are needed to provide support and help create a calm, joyful atmosphere for all.

Volunteer Details:

	
Must be 16 years or older

	
Experience working with individuals with disabilities is recommended but not required

	
Assist children with varying abilities during holiday-themed activities and a sensory-friendly Santa meet-and-greet

	
Support families with photo opportunities, guide them through the event, and ensure a positive, welcoming experience while they wait

	
Everyone is encouraged to dress in fun holiday attire to add to the festive spirit!

Click express interest below to be redirected to our registration page!

2026-12-05 | 7:30 AM - 1:00 PM

Location: Mesa, AZ, 85201

Volunteers still needed: 20`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009bbfrxMAA",date:"2026-12-05"},{name:"Food Box Distribution with Creighton Community Foundation",description:`Creighton Community Foundation (CCF) works in east-central Phoenix to cultivate a sense of school-centered identity, foster neighborhood interaction, increase social capacity, and improve adult supportive relationships within vibrant communities. Our ultimate goal is to improve youth life outcomes and create multi-generational in-community transformation.

Join us at Excelencia School to distribute food boxes to families through a mobile delivery line. Spend your morning making sure the Phoenix community has plenty of food for the week ahead!

There is no minimum age for this opportunity if youth are attending with a parent or guardian. Volunteers under 16 must attend with a parent/guardian. Volunteers aged 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-12-05 | 8:00 AM - 12:00 PM

Location: Phoenix, AZ, 85006

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008mX3YIMA0",date:"2026-12-05"},{name:"Garden Volunteers with St. Vincent de Paul (Main Campus)",description:`St. Vincent de Paul's three urban farms produce nutritionally dense food for those who do not have access to proper vitamins and nutrients. Annually, they grow 27,000 pounds of produce, which goes directly to SVdP's kitchens to be prepared for individuals and families experiencing homelessness and food insecurity, or delivered directly to families’ doors.

Spend your morning fertilizing soil, composting, planting, and harvesting the produce that helps feed the local community!

Please wear Closed-toe shoes, and clothes that can get dirty. Bring SPF and a reusable water bottle. There are shade structures, but be prepared to be in the sun.

Please Note: Volunteers serving court-ordered hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 8 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-12-05 | 8:00 AM - 11:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 29`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008qwYk6MAE",date:"2026-12-05"},{name:"Furry Friends at Forever Loved Pet Sanctuary",description:`Forever Loved's mission is to help overlooked senior dogs in Arizona find their forever homes. Help care for these furry friends while they wait for adoption!

Volunteer duties may include feeding, cleaning, grooming, walking, and socializing with the dogs.

The minimum age for this opportunity is 16. All volunteers aged 16 & 17 attending without a parent/guardian MUST bring a signed Youth Waiver to each project.

Volunteers must show up at 8:30am. No one will be present to let you through the gates if you are more than 5 minutes late.

Please wear closed-toe shoes and long pants that can get dirty! We recommend bringing a water bottle and wearing sunscreen. The sanctuary is located on a private residence. Please park on the street in front of the house without blocking any driveways. Your volunteer leader will meet you out front!

2026-12-05 | 8:30 AM - 10:00 AM

Location: Scottsdale, AZ, 85254

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008lYcwfMAC",date:"2026-12-05"},{name:"Fall 2026 Tempe Festival of Arts (Referral)",description:`Individuals and groups are welcome as volunteers at the Tempe Festivals of the Arts. Each festival requires about 350 volunteers to help manage on-site functions important to the conduct of the event. Sign up solo to meet new people. Or, sign up with your group to fulfill employers’ and organizations’ volunteer commitments while having fun! (Please note that all volunteers must have their own volunteer profile) There are several opportunties to sign up for festival prep before the event weekend, too!

			
Volunteering is a fun way to see the Festival from a different perspective, meet new people, and promote art in the community. Volunteering is a great way to serve the event and also the greater community, as well as being a source of enjoyment and pride. Meet a variety of people from all walks of life, see what happens behind the scenes and, through your service, help make the event possible.

2026-12-05 | 9:30 AM - 5:00 PM

Location: Tempe, AZ, 85281

Volunteers still needed: 50`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008bhCqyMAE",date:"2026-12-05"},{name:"Fall 2026 Tempe Festival of Arts (Referral)",description:`Individuals and groups are welcome as volunteers at the Tempe Festivals of the Arts. Each festival requires about 350 volunteers to help manage on-site functions important to the conduct of the event. Sign up solo to meet new people. Or, sign up with your group to fulfill employers’ and organizations’ volunteer commitments while having fun! (Please note that all volunteers must have their own volunteer profile) There are several opportunties to sign up for festival prep before the event weekend, too!

			
Volunteering is a fun way to see the Festival from a different perspective, meet new people, and promote art in the community. Volunteering is a great way to serve the event and also the greater community, as well as being a source of enjoyment and pride. Meet a variety of people from all walks of life, see what happens behind the scenes and, through your service, help make the event possible.

2026-12-06 | 9:30 AM - 5:00 PM

Location: Tempe, AZ, 85281

Volunteers still needed: 50`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008bhCr0MAE",date:"2026-12-06"},{name:"Maggie&#39;s Place Spruce Up",description:`Maggie’s Place provides safe housing and a nurturing community for homeless pregnant women, empowering them to thrive throughout their lifetime.

Work alongside the moms residing at The Michael House in Glendale to help clean and maintain their home.

The minimum age for this volunteer opportunity is 12 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-12-06 | 10:00 AM - 12:00 PM

Location: Glendale, AZ, 85302

Volunteers still needed: 7`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008mYDWpMAO",date:"2026-12-06"},{name:"Nutrition Program Volunteer (Referral)",description:`Advance Community's Nutrition Program offers 2 separate volunteer opportunities. Our first program, Stove to Table delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package over 500 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal.

Our second program is Mercado Fresh where we provide monthly nutritious food boxes to individuals facing food insecurity and chronic health conditions—because giving food is giving dignity.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
9:00 AM to 1:00 PM

You will be placed where the need is the greatest that day (either the kitchen or warehouse)

We ask that you come dressed appropriately; please no open toed shoes. Volunteers under the age of 16 are welcome with a parent or guardian.

2026-12-08 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fGBqEMAW",date:"2026-12-08"},{name:"Adaptive Cheer (Referral)",description:`Dates: Tuesdays, December 1, 2026-March 2, 2027

Location: Jefferson Recreation Center - 120 S Jefferson Ave, Mesa, AZ 85208

	
6:30pm-7:30pm (Youth)

	
7:30pm-8:30pm (Adult)

Activity Description:

	
This program is for individuals with intellectual disabilities to prepare them for Special Olympics cheer competitions. Participants are placed on teams based on age and ability to practice cheer routines for competitions.

Job Description:

	
Assist with set up and clean up 15-30 minutes before and after practice

	
Practice the cheer routines with the athletes and help participants who are struggling with the choreography

	
Be encouraging and cheer on participants while they practice!

	
Experience is cheer, dance, gymnastics or another related area is preferred

Volunteer Number Requesting: 1-4

Please click express interest to be redirected to our volunteer application.

2026-12-08 | 6:30 PM - 8:30 PM

Location: Mesa, AZ, 85208

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fhoWsMAI",date:"2026-12-08"},{name:"Nutrition Program Volunteer (Referral)",description:`Advance Community's Nutrition Program offers 2 separate volunteer opportunities. Our first program, Stove to Table delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package over 500 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal.

Our second program is Mercado Fresh where we provide monthly nutritious food boxes to individuals facing food insecurity and chronic health conditions—because giving food is giving dignity.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
9:00 AM to 1:00 PM

You will be placed where the need is the greatest that day (either the kitchen or warehouse)

We ask that you come dressed appropriately; please no open toed shoes. Volunteers under the age of 16 are welcome with a parent or guardian.

2026-12-09 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fG8X0MAK",date:"2026-12-09"},{name:"Picking and Packing Support with Arizona Diaper Bank",description:`Join us at the Arizona Diaper Bank to help with order picking and packing! Arizona Diaper promotes dignity through community partnerships by making diapers, period products, and incontinence supplies accessible.

Volunteers will help prepare diaper orders for distribution to families and partner agencies. You will pack up diaper order based on specific requests as well as organize and label packed orders for easy distribution. Your efforts will directly contribute to ensuring that essential supplies reach those in need efficiently and on time!

Please wear closed-toe shoes. This opportunity takes place in a warehouse which can get warm in the summer months!

The minimum age for this project is 10 with a parent/guardian. All Volunteers under the age of 18 must be accompanied by a parent/guardian.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-12-09 | 9:00 AM - 12:00 PM

Location: Phoenix, AZ, 85043

Volunteers still needed: 7`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008pzWm4MAE",date:"2026-12-09"},{name:"Adaptive Basketball- Adult (Referral)",description:`Dates: Wednesdays, December 2, 2026 – March 3, 2027

Location: Eagles Community Center – 828 E Broadway Rd, Mesa, AZ 85204

	
Volunteer time will depend on team but they either practice between 6pm-7pm or 7pm-8pm

Activity Description:

	
This program is for individuals with intellectual disabilities to prepare them for Special Olympics basketball competitions. Participants are placed in teams to practice various basketball skills and play basketball games. Beginning end of January, teams will play games with other cities instead of practice.

Job Description:

	
Assist with set up and clean up 15-30 minutes before and after practice

	
Assist coaches or independently coach a group on specific basketball skills

	
Be encouraging and cheer on participants while they practice!

	
Experience is preferred but not required but volunteers must engage in the activity

Volunteer Number Requesting: 1-4

Please click express interest below to be redirected to our volunteer application.

2026-12-09 | 6:00 PM - 8:00 PM

Location: Mesa, AZ, 85204

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fkzqgMAA",date:"2026-12-09"},{name:"Adaptive Basketball - Youth (Referral)",description:`Dates: Wednesdays, December 2, 2026 – March 3, 2027

Location: Jefferson Recreation Center - 120 S Jefferson Ave, Mesa, AZ 85208

	
6pm-7pm (Ages 6-11)

	
7pm-8pm (Ages 12-15)

Activity Description:

	
This program is for individuals with intellectual disabilities to prepare them for Special Olympics basketball competitions. Participants are placed in groups to practice various basketball skills and play basketball games.

Job Description:

	
Assist with set up and clean up 15-30 minutes before and after practice

	
Assist coaches or independently coach a group on a specific basketball skill

	
Be encouraging and cheer on participants while they practice!

	
Experience is preferred but not required but volunteers must engage in the activity

Volunteer Number Requesting: 1-4

Additional committed volunteer option- Unified Partner:

 

Activity Description:

	
This program is for individuals with intellectual disabilities to prepare them for Special Olympics basketball competitions and play with non-disabled peers. Participants practice various basketball drills and play basketball games with teammates. Beginning in February, teams will play games with other cities instead of practice. Games are typically held on Monday or Wednesday nights in either Tempe or Chandler.

Job Description:

	
Assist with set up and clean up 15-30 minutes before and after practice

	
Attend and participate in basketball practices

	
Learn rules of a Unified Partner in Special Olympics basketball games

	
Play in local and Special Olympics competitions/games

	
Prior experience in playing basketball and knowledge of general basketball rules is required

Volunteer Number Requesting: 1-4

Please express interest below to be redirected to our volunteer application.

2026-12-09 | 6:00 PM - 8:00 PM

Location: Mesa, AZ, 85208

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009flBARMA2",date:"2026-12-09"},{name:"Nutrition Program Volunteer (Referral)",description:`Advance Community's Nutrition Program offers 2 separate volunteer opportunities. Our first program, Stove to Table delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package over 500 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal.

Our second program is Mercado Fresh where we provide monthly nutritious food boxes to individuals facing food insecurity and chronic health conditions—because giving food is giving dignity.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
9:00 AM to 1:00 PM

You will be placed where the need is the greatest that day (either the kitchen or warehouse)

We ask that you come dressed appropriately; please no open toed shoes. Volunteers under the age of 16 are welcome with a parent or guardian.

2026-12-10 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fG4A8MAK",date:"2026-12-10"},{name:"Adaptive Pickleball- Coach/Unified Partner (Referral)",description:`Dates: Thursdays, November 5, 2026 - January 28, 2027 + Tournament on Saturday, January 30, 2027

Location: Mesa Tennis & Pickleball Center - 4125 E McKellips Rd, Mesa, AZ 85215

	
5pm-6pm (Youth)

	
6pm-7pm (Adult – Beginner)

	
7pm-8pm (Adult – Intermediate)

Activity Description:

	
This program is for individuals with intellectual disabilities to prepare them for Special Olympics pickleball competitions. The youth and adult beginner sessions focus on learning pickleball skills, while the adult intermediate session will mainly focus on game play.

Job Description:

	
Coach: will be at practices and if available, play as a Unified Partner in the Special Olympics Pickleball Competition

	
Unified Partner: commit to attending 2-3 practices in January and play in the Special Olympics Pickleball Competition. Must have prior pickleball playing experience and knowledge of pickleball rules

	
Assist with set up and clean up 15-30 minutes before and after practice

	
Assist coaches in running a court or run a court independently if needed with the guidance of a head coach

	
Gathering balls for each court throughout practice

	
Be encouraging and cheer on participants while they practice!

	
Experience is preferred but not required but volunteers must engage in the activity

Volunteer Number Requesting:

	
Volunteers: 1-5

	
Coaches: 2-5

	
Unified Partners: 5-10

Click express interest below to be redirected to our volunteer application.

2026-12-10 | 5:00 PM - 8:00 PM

Location: Mesa, AZ, 85205

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009filgbMAA",date:"2026-12-10"},{name:"Game Night at MANA House",description:`Bring your A-game for this fun social event at MANA House, a peer-support organization of homeless and formerly homeless veterans! Volunteers will facilitate Bingo for the Veterans residing at the facility. Join us to help bring joy to those who have valiantly served our country.

The minimum age for this volunteer opportunity is 18.

2026-12-10 | 6:00 PM - 7:30 PM

Location: Phoenix, AZ, 85009

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008jt28FMAQ",date:"2026-12-10"},{name:"State Softball Competition in Peoria-MULTIPLE SHIFTS  (Referral)",description:`Join Special Olympics Arizona for State Softball in Peoria!

 

Volunteers are needed for event support to keep the competition running smoothly and scorekeeping!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-12-11 | 8:45 AM - 9:00 PM

Location: Peoria, AZ, 85383

Volunteers still needed: 28`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EF4VWMA1",date:"2026-12-11"},{name:"Community Market (Referral)",description:`Come join YWCA Metropolitan Phoenix at our monthly Community Market food distribution! In partnership with St. Mary's Food Bank, we are able to distribute fresh produce, pantry essentials and household goods to community members. 

As we are in our hotter months, we want to limit folks' time outdoors. We will be conducting this Community Market as a walk-up market. Participants will check in at the table and then volunteers will help bring food boxes to the cars.

Some things to note:

	
You will be mostly indoors for assembly of the food packages. However, we will be walking between inside and outside to deliver the food to participants. Make sure you are protected from the sun.

	
Sneakers or comfortable closed-toe shoes required. 

	
If you have it, wear persimmon orange or YWCA gear.

	
YWCA shirts will be available for a donation of $20, but are not required

	
Water and snacks will be provided.

	
Breaks are encouraged all day.

	
Volunteers are allowed to take food from the market only after community members have been served. Please do not take any of the food until a YWCA team member has let you know it is okay.

2026-12-11 | 9:00 AM - 1:00 PM

Location: Glendale, AZ, 85302

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008E8c67MAB",date:"2026-12-11"},{name:"Lunch Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-12-11 | 10:00 AM - 1:30 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009iBIAPMA4",date:"2026-12-11"},{name:"Chef&#39;s Night Off at HomeBase Surprise",description:`Roll up your sleeves and help chop, slice, and dice with love as you prepare and serve dinner for homeless youth and young adults (ages 18-26) at HomeBase Youth Services in Surprise. You can also help pack lunches that will be distributed throughout the week to homeless youth and young adults. Allow the busy chef to have a nice evening off.

Volunteers must wear closed-toe shoes, and long hair should be pulled back.

The minimum age for this project is 11 with a parent/guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-12-11 | 3:00 PM - 5:00 PM

Location: Surprise, AZ, 85378

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000093Co2lMAC",date:"2026-12-11"},{name:"Evening Meal Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-12-11 | 3:00 PM - 6:00 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009iHNf0MAG",date:"2026-12-11"},{name:"State Softball Competition in Peoria-MULTIPLE SHIFTS  (Referral)",description:`Join Special Olympics Arizona for State Softball in Peoria!

 

Volunteers are needed for event support to keep the competition running smoothly and scorekeeping!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-12-12 | 7:30 AM - 6:00 PM

Location: Peoria, AZ, 85383

Volunteers still needed: 28`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EF4VZMA1",date:"2026-12-12"},{name:"Nature Nurturers at Escalante Community Garden",description:`The Escalante Community Garden is a garden that follows a communal model with healthy growing practices. A portion of the garden’s harvest is given to Tempe Community Action Agency's Food Pantry to supplement emergency food boxes. The garden features a children's area, as well as a desert and herb garden.

Volunteers will help care for the garden. Duties may include weeding, planting, pruning, and harvesting!Please wear closed-toe shoes, and clothes that can get dirty. Bring SPF and water!

The minimum age for this volunteer opportunity is 8 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

The map below shows the best way to enter the garden off River Dr.

2026-12-12 | 8:00 AM - 11:00 AM

Location: Tempe, AZ, 85281

Volunteers still needed: 8`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009UHXc6MAH",date:"2026-12-12"},{name:"Community Garden Workers with Keep Phoenix Beautiful",description:`Keep Phoenix Beautiful envisions a vibrant Phoenix where each neighborhood is a healthy, beautiful place to live. Every day, Keep Phoenix Beautiful provides tools to empower our diverse communities to improve overall quality of life.

Spend your morning at KPB's Pierson Street Garden and help maintain and enhance this amazing resource for the local community! Volunteers will help with a variety of tasks which may include planting flowers & produce, building compost bins, revamping the chicken coop, painting tables and garden beds, spreading mulch, clearing trash, and removing weeds. Lighter duties may include organizing the barn, wiping down recycling bins, folding t-shirts, organizing gloves, and prepping cleanup kits.

Please wear sturdy closed-toe shoes, and comfy clothes that can get dirty. Bring SPF and a hat. Water and snacks will be provided on site, but bringing water is always recommended!

Please park behind the garden in the Metro Light Rail – Park and Ride parking lot and enter through the gate at the back entrance of the garden!

The minimum age for this volunteer opportunity is 7 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-12-12 | 8:00 AM - 10:00 AM

Location: Phoenix, AZ, 85015

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008mYr3nMAC",date:"2026-12-12"},{name:"Community Crafters at HandsOn Greater Phoenix",description:`Bring the family to this fun and engaging volunteer event at the HandsOn Greater Phoenix office in Mesa! Each month, volunteers will be doing crafty projects to benefit our nonprofit partners. Whether it's creating fleece capes for foster kids, making no-sew blankets for Veterans, or decorating canvas bags/bookmarks to supplement our kitted projects for youth, we'll have an activity for you to get creative for a cause!

The minimum age for participation is 6. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child/children, please email the opportunity coordinator listed below and ask to reserve a guest slot(s). Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-12-12 | 10:00 AM - 11:30 AM

Location: Mesa, AZ, 85204

Volunteers still needed: 18`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008pLmU6MAK",date:"2026-12-12"},{name:"Afternoon Sort and Pack at St. Mary&#39;s Food Bank - Phoenix",description:`Bring your helping hands to sort, pack, and distribute food that will go to other nonprofits and families in crisis at St. Mary's Food Bank Alliance. You will have a blast meeting new people while working the assembly line!

St. Mary's Food Bank is always in need of donations. Items such as cereal, canned goods, packages of bottled water, sports drinks, as well as dog and cat food are greatly appreciated. Feel free to bring donations with you to the project.

Due to health codes and safety reasons, a volunteer dress code is in effect. Volunteers MUST wear:

 

	
Closed Toe Shoes (sneakers or boots only)

	
Shirts need to be short or long sleeved (No tank tops, spaghetti straps, sleeveless,  midriff or low-cut tops)

	
Pants, jeans preferred.  Shorts are okay at a respectable length. (Must be no shorter than 7” above the knee).

The minimum age for this volunteer opportunity is 12 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

To speed up the check-in process all volunteers can create an account by clicking the link below. 

Upon arrival, volunteers first need to check in with the Volunteer Leader listed below and sign our check-in sheet, then sign in on St. Mary's tablets to acknowledge the waiver and designate the company/organization you are associated with (HandsOn Greater Phoenix). 

http://stmarysfoodbank.volunteerhub.com/

	
Create account. 

	
Affiliate yourself with HandsOn Greater Phoenix under company name (list is not alphabetized)

	
Sign up for the shift.

	
Please note that all volunteers will need to be affiliated with group name to sign up and view the shift.

New volunteers under 18 attending the project without an adult must complete this waiver of liability for St. Mary's Food Bank Alliance and bring it with them to the project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-12-12 | 12:00 PM - 2:00 PM

Location: Phoenix, AZ, 85009

Volunteers still needed: 12`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008WxXpTMAV",date:"2026-12-12"}]},Sg={title:"City of Flagstaff",note:null,opportunities:[{name:"Open Space Working Group meeting",description:`Come meet with Open Space Stewards, and get updates on Flagstaff Open Space's projects at Picture Canyon, McMillan Mesa, and Observatory Mesa Natural Preserves!

2026-11-10 | 10:30 AM - 12:00 PM

Location: Campus Coffee Bean

Category: Stewardship`,date:"2026-11-10",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Fix-it Clinic (1/4)",description:`At Fix-it Clinics, we support sustainable consumption and divert waste from landfills by repairing items that would otherwise end up in the trash. Our incredible team of volunteers can help you fix almost anything, including electronics, jewelry, clothing, bicycles, and more! \r
\r
Lead Volunteers will:\r
• Use hand tools and small power tools to repair everyday household items such as electronics, bicycles, kitchen appliances, jewelry, clothing, furniture, lamps, and more.\r
• Wear appropriate personal protective equipment (PPE).\r
• Ensure workstations are maintained in a clean and organized manner to reduce exposure to chemicals, open electric circuits, and sharp objects or projections.\r
\r
Other Volunteers will:\r
• Assist with the community member check-in process.\r
• Complete necessary “Fix-It” paperwork, which identifies if an item was fixed or was unrepairable.\r
• Assist with diagnosing items. \r
\r
Fix-It Clinics reduce the amount of waste going to the landfill, encourage responsible consumption, teach community members real-world skills, and build connections between Flagstaff residents.\r
\r
If you are looking to bring in items to be repaired, please find more information along with the appointment signup link on the official Fix-It Clinic webpage: https://www.flagstaff.az.gov/3231/Fix-it-Clinic

2026-08-22 | 10:00 AM - 2:00 PM

Location: Joe C Montoya Community & Senior Center

Category: Special Event

• Fix-It Clinic Assist - See "Activity Description" (11 spots available)
• Fix-It Clinic Lead - See "Activity Description" (10 spots available)`,date:"2026-08-22",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Fix-it Clinic (2/4)",description:`At Fix-it Clinics, we support sustainable consumption and divert waste from landfills by repairing items that would otherwise end up in the trash. Our incredible team of volunteers can help you fix almost anything, including electronics, jewelry, clothing, bicycles, and more! \r
\r
Lead Volunteers will:\r
• Use hand tools and small power tools to repair everyday household items such as electronics, bicycles, kitchen appliances, jewelry, clothing, furniture, lamps, and more.\r
• Wear appropriate personal protective equipment (PPE).\r
• Ensure workstations are maintained in a clean and organized manner to reduce exposure to chemicals, open electric circuits, and sharp objects or projections.\r
\r
Other Volunteers will:\r
• Assist with the community member check-in process.\r
• Complete necessary “Fix-It” paperwork, which identifies if an item was fixed or was unrepairable.\r
• Assist with diagnosing items. \r
\r
Fix-It Clinics reduce the amount of waste going to the landfill, encourage responsible consumption, teach community members real-world skills, and build connections between Flagstaff residents.\r
\r
If you are looking to bring in items to be repaired, please find more information along with the appointment signup link on the official Fix-It Clinic webpage: https://www.flagstaff.az.gov/3231/Fix-it-Clinic

2026-11-07 | 10:00 AM - 2:00 PM

Location: Joe C Montoya Community & Senior Center

Category: Special Event

• Fix-It Clinic Assist - See "Activity Description" (11 spots available)
• Fix-It Clinic Lead - See "Activity Description" (10 spots available)`,date:"2026-11-07",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Fix-it Clinic (3/4)",description:`At Fix-it Clinics, we support sustainable consumption and divert waste from landfills by repairing items that would otherwise end up in the trash. Our incredible team of volunteers can help you fix almost anything, including electronics, jewelry, clothing, bicycles, and more! \r
\r
Lead Volunteers will:\r
• Use hand tools and small power tools to repair everyday household items such as electronics, bicycles, kitchen appliances, jewelry, clothing, furniture, lamps, and more.\r
• Wear appropriate personal protective equipment (PPE).\r
• Ensure workstations are maintained in a clean and organized manner to reduce exposure to chemicals, open electric circuits, and sharp objects or projections.\r
\r
Other Volunteers will:\r
• Assist with the community member check-in process.\r
• Complete necessary “Fix-It” paperwork, which identifies if an item was fixed or was unrepairable.\r
• Assist with diagnosing items. \r
\r
Fix-It Clinics reduce the amount of waste going to the landfill, encourage responsible consumption, teach community members real-world skills, and build connections between Flagstaff residents.\r
\r
If you are looking to bring in items to be repaired, please find more information along with the appointment signup link on the official Fix-It Clinic webpage: https://www.flagstaff.az.gov/3231/Fix-it-Clinic

2027-02-06 | 10:00 AM - 2:00 PM

Location: Joe C Montoya Community & Senior Center

Category: Special Event

• Fix-It Clinic Assist - See "Activity Description" (11 spots available)
• Fix-It Clinic Lead - See "Activity Description" (10 spots available)`,date:"2027-02-06",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Fix-it Clinic (4/4)",description:`At Fix-it Clinics, we support sustainable consumption and divert waste from landfills by repairing items that would otherwise end up in the trash. Our incredible team of volunteers can help you fix almost anything, including electronics, jewelry, clothing, bicycles, and more! \r
\r
Lead Volunteers will:\r
• Use hand tools and small power tools to repair everyday household items such as electronics, bicycles, kitchen appliances, jewelry, clothing, furniture, lamps, and more.\r
• Wear appropriate personal protective equipment (PPE).\r
• Ensure workstations are maintained in a clean and organized manner to reduce exposure to chemicals, open electric circuits, and sharp objects or projections.\r
\r
Other Volunteers will:\r
• Assist with the community member check-in process.\r
• Complete necessary “Fix-It” paperwork, which identifies if an item was fixed or was unrepairable.\r
• Assist with diagnosing items. \r
\r
Fix-It Clinics reduce the amount of waste going to the landfill, encourage responsible consumption, teach community members real-world skills, and build connections between Flagstaff residents.\r
\r
If you are looking to bring in items to be repaired, please find more information along with the appointment signup link on the official Fix-It Clinic webpage: https://www.flagstaff.az.gov/3231/Fix-it-Clinic

2027-05-08 | 10:00 AM - 2:00 PM

Location: Joe C Montoya Community & Senior Center

Category: Special Event

• Fix-It Clinic Assist - See "Activity Description" (11 spots available)
• Fix-It Clinic Lead - See "Activity Description" (10 spots available)`,date:"2027-05-08",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Tourism Service Day - Fall",description:`Join the City of Flagstaff, Discover Flagstaff, and the Sustainability Office for our Fall 2026 Tourism Service Day! Meet at the Milligan House (323 W Aspen Ave) to check in, receive supplies, and attend a brief safety talk before walking to the site to begin our clean-up. Supplies will be provided, please come prepared with sun protection, water, close toed shoes, and anything else you need to have a successful event. After the clean-up, join us for a thank you lunch provided by Discover Flagstaff!

2026-11-02 | 10:00 AM - 11:30 AM

Location: Milligan House (323 W Aspen Ave)

Category: Trash Clean-Up

• ALL Flagstaff Volunteers - Tourism Service Day Cleanup Volunteers (24 spots available)`,date:"2026-11-02",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Full Moon Hike--Tunnel Springs Trail",description:`PROSE - Open Space hosts a full moon walk (and sometimes bike ride) on one of our beautiful Open Space properties--a different spot each month. We start about a half-hour before the moon rises, walk on either a loop trail or out-and-back, and watch the full moon rise. Come check out your open spaces, and meet new people! Check each month for specific starting time, meeting place, and what trail we'll walk/ride for that full moon. Wear sturdy shoes, dress for the weather, and bring a red-light flashlight and hiking poles, but we'll have extras! This month, we'll walk Observatory Mesa Natural Area's Tunnel Springs Trail. It is about 3 miles out and back, and is steep, but all on the wide FUTS trail. Meet at the intersection of Railroad Springs Blvd & Adirondack Ave.

2026-11-24 | 4:45 PM - 6:45 PM

Location: Observatory Mesa-Tunnel Springs (RR Springs Blvd)

Category: Special Event`,date:"2026-11-24",link:"https://volunteer.flagstaffaz.gov/Calendar"}]},xo={handsOnGreaterPhoenix:Pg,cityOfFlagstaff:Sg};function Fl(e){return e&&e.replace(/&#39;/g,"'").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#8217;/g,"’").replace(/&#8216;/g,"‘").replace(/&#8220;/g,"“").replace(/&#8221;/g,"”").replace(/&nbsp;/g," ")}function Bo(e,n){let t=e;if(!t&&n){const i=n.match(/(\d{4}-\d{2}-\d{2})\s*\|/);i&&(t=i[1])}if(!t)return!0;const r=new Date(t+"T23:59:59");if(isNaN(r.getTime()))return!0;const o=new Date;return o.setHours(0,0,0,0),r>=o}function vd(e){return e.map(n=>({...n,name:Fl(n.name),description:Fl(n.description)})).filter(n=>Bo(n.date,n.description))}const wd={title:"HandsOn Greater Phoenix",note:'For referral volunteer opportunities (marked "Referral" in the title), please contact the listed volunteer coordinator directly to confirm whether service hours can be verified, since HandsOn cannot sign off on hours for projects run by partner organizations.',opportunities:[{name:"TopGolf Competition - Gilbert",link:"https://www.handsonphoenix.org/calendar",description:`Volunteers are needed for event support.
In addition, cheer and support the athletes at the Gilbert TopGolf Competition! 


Time: 8:45 AM- 1:00 PM

Date: Saturday, August 1, 2026

Location: 1689 S Santan Village Pkwy, Gilbert, AZ 85295

Age: 8+

Interests: Sports & Recreation`},{name:"Maggie's Place Spruce Up",link:"https://www.handsonphoenix.org/calendar",description:`Maggie's Place provides safe housing and community for homeless pregnant women. 
Work alongside the moms residing at The Michael House in Glendale to help clean and maintain their home.


Time: 10:00 AM - 12:00 PM

Date: Saturday, August 1, 2026

Location: Details about location will be provided after registration

Age: 12+ 
The minimum age for this volunteer opportunity is 12 with a parent or guardian. Any volunteer UNDER the age of 16 MUST be accompanied by a parent/gaurdian. Volunteers 16 and 17 MUST bring a Youth Waiver signed by a parent or guardian, to each project.

Interests: Family Services`},{name:"Grief Peer Support Group Facilitators for Kids & Caregivers",link:"https://www.handsonphoenix.org/calendar",description:`Seeking volunteers who enjoy helping grieving kids and families and can facilitate a peer support group. 
Note: Training and orientations are required (Provided).
This opportunity is great for students who want to explore the mental health field or individuals who have lost a loved one and want to support others.


Time: 5:30 PM - 8:15 PM

Date: Tuesday, August 4, 2026

Location: 21505 N 78th Ave #120, Peoria, AZ 85382

Age: 14+ 
The minimum age to volunteer is 14, however, an adult is required. Any volunteers 18+ don't need a parent /guardian.

Interests: Mental Health, colleges`},{name:"Heart of Isaac Community Center - Food Distribution",link:"https://www.handsonphoenix.org/calendar",description:`Seeking for volunteers to support families in communities. Help to create a safe and welcoming place where families can quickly access food.


Time: 8:00 AM - 11:00 AM

Date: Thursday, August 6, 2026

Location: Heart of Isaac, 1403 N 32nd Avenue, Phoenix, AZ, 85009

Age: 18+

Interests: Help the homeless, passionate about helping others`},{name:"From the Ground Up: Volunteeer Day at the Ranch",link:"https://www.handsonphoenix.org/calendar",description:`Interested in helping animals? Then this opportunitiy is for you! Seeking for volunteers who enjoy the outdoors and want to make an impact on the ranch and the horses who call it home. Volunteers will work together on multiple hands-on projects, such as: Fence repairs, stall cleaning and refreshing, barn organization, and general facility beautification. Voluunteers wil help to create a safer and more welcoming environment for horses and animals. In addition, no experience is needed! Connect with nature and be part of something meaningful.


Time: 7:00 AM - 9:30 AM

Date: Saturday, August 8, 2026
August 22, 2026

Location: Wildcat Ranch Phoenix, AZ, 85042

Age: 12+
The minimum age to volunteer for this opportunity is 12, however, an adult is required. Any volunteers 18+ don't need a parent/guardian

Interests: Animals, outdoors`},{name:"August 2026 Monthly Park Cleanup and Stinknet Removal - Kiwanis Park",link:"https://www.handsonphoenix.org/calendar",description:`Join Keep Tempe Beautiful to clean up Kiwanis Park and remove invasive stinknet. Volunteers will help to remove trash, litter, and stinknet. In addition, volunteers can also do shifts anywhere from 1 hour - 2 hours. Volunteers can also expect to help with event setup, teardwon, event raffles, parking lot attendence, taking photos, and more.


Time: 7:00 AM - 9:00 AM

Date: Saturday, August 15, 2026

Location: Kiwanis Park (6111 S All America Way, Tempe, AZ 85283); More location details will be provided upon registration.

Age: There is NO MINIMUM AGE TO VOLUNTEER!!!`},{name:"Chef's Night Off at HomeBase",link:"https://www.handsonphoenix.org/calendar",description:`Enjoy cooking? Then this opportunitiy is for you. Seeking for volutneers who want to help prepare and serve dinner for homeless youth and young adults. In addition, volunteers will also help pack lunches that willl be distributed to homeless youth and young adults. Volunteers must wear closed-toed shoes to every project, and long hair should be pulled back.


Time: 4:00 PM - 6:00 PM

Date: Monday, August 10, 2026

Location: HomeBase Youth Services, Phoenix, AZ, 85014

11+ 
The minimum age for this opportunitiy is 11+, however, a parent/guardian is required. Ages 16-17 can volunteer without a parent or guardian, but they MUST bring a youth waiver signed by a parent/guardian.

Interests: Cooking, Helping the homeless`},{name:"Rise and Dine at HomeBase",link:"https://www.handsonphoenix.org/calendar",description:`Seeking for volunteers who  will provide a warm, wholesome breakfast for homeless youth and young adults at HomeBase Youth Services. Sere up pancakes, bacon, eggs and toast with a smile! Volunteers must wear closed-toe shoes, and long hair must be pulled back.


Location: HomeBase Youth Services, Phoenix, AZ, 85014
Date: Saturday, August 15, 2026Time: 8:00 AM - 10:00 AM

Age: 11+ 
The minimum age for this opportunitiy is 11+, however, a parent/guardian is required. Ages 16-17 can volunteer without a parent or guardian, but they MUST bring a youth waiver.

Interests: Cooking, Helping the homeless`},{name:"Afternoon Sort and Pack at St. Mary's Food Bank-Phoenix",link:"https://www.handsonphoenix.org/calendar",description:`Seeking for volunteers to sort, pack, and distribute food that will go to other nonprofits and families in crisis. Volunteers MUST wear closed toe shoes, short/long sleeved shirts, and pants/jeans.


Location: Full details will be proided after registration.

Date: Saturday, August 15, 2026

Time: 12:00 PM - 2:00 PM

Age: 12+ 
The minimum age for this opportunitiy is 12+, however,a parent/guardian is required. Ages 16-17 can volunteer without a parent or guardian, but they MUST bring a youth waiver.

Interests: Helping the homeless`},{name:"August 2026 #TrashTag Cleanup and Stinknet Removal - Tempe Town Lake",link:"https://www.handsonphoenix.org/calendar",description:`Enjoy helping our enviornment? Join Keep Tempe Beautiful to clean up Tempe Town Lake and remove invasive stinknet. You'll be in the area between the Mill Ave Bridges next to North Shore Beach Tempe, AZ, 85288. While volunteering, you will work on Trash and litter removal, along with stinknet removal. You can spend anywhere from 1 hour shifts to even 3 hour shifts. Volunteers can also expect to help with event setup, teardwon, event raffles, parking lot attendence, taking photos, and more.


Location: Tempe, AZ, 85288; Further details about location will be provided after registering.
Date: Monday, August 24, 2026

Time: 4:00 PM - 6:00 PM

Age: 14+ 
The minimum age to volunteer for this opportunitiy is 14, however, a parent/guardian is required. Ages 16-17 can volunteer without a parent or guardian, but they MUST bring a youth waiver.

Interests: Helping the environment, Cleaning`},{name:"Thrift Shop Assistants at Hope's Closet",link:"https://www.handsonphoenix.org/opportunity/a0CUi00006H5HDeMAN/thrift-shop-assistants-at-hopes-closet",description:`Hope's Closet is a New Life Center's social enterprise thrift store, and are seeking for volunteers who can collect and sort clothing donations, move items to the sales floor, and organize clothing racks.


Location: Hope's Closet, Goodyear, AZ, 85338

Date: Saturday, August 22, 2026

Time: 10:00 AM - 12:00 PM

Age: 14+ 
The minimum age to volunteer for this opportunitiy is 14, however, a parent/guardian is required. Ages 16 to 17 can volunteer without a parent.guardian, but they MUST bring a youth waiver.

Interests: Cleaning, Helping the community`},{name:"Administrative Tasks - Tempe Office",link:"https://www.handsonphoenix.org/calendar",description:`Help with administrative tasks at the Tempe office.

Date: Various dates available.

Location: Tempe, AZ

Age: 14+`},{name:"Pizza Maing with St. Vincent de Paul",link:"https://www.handsonphoenix.org/calendar",description:`Do you enjoy cooking? Help prepare 150 pizzas for Friday night dinner service at St. Vincent de Paul. Volunteers will help roll out dough, spread out the sauce, layer on toppings, and get the pizzas into the ovens to cook. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved skirts. Hairnets, gloves, and aprons will be provided, but pizza making ccan get messy, so ensure to dress accordingly!


Location: Full details will be provided after registration.

Date: August 28, 2026

Time: 1:00 PM - 3:00 PMAge 12+ 
The minimum age for this opportunity is 12, however, a parent or guardian is required. Ages 16 to 17 can volunteer without a parent.guardian, but they MUST bring a youth waiver.

Interests: Cooking, helping the homeless`}]},kd={title:"City of Flagstaff",note:null,opportunities:[{name:"Full Moon Bike Ride/Hike!",link:"https://volunteer.flagstaffaz.gov/Calendar",description:`Enjoy outdoor activites? Then this opportunitiy is for you! Enjoy a night out walking on a trail or out and back, and watch the full moon rise. You can meet new people, bike, and hike during this event. You will go on the Karen Cooper FUTS trail, which lasts about 6 miles.


Age: 0+
Any age can participate.

Location: Frances Short Pond

Date: July 29, 2026

Time: 7:30 PM - 9:30 PM`},{name:"Garden Maintenance Volunteer Day - Bonito",link:"https://volunteer.flagstaffaz.gov/Calendar",description:`Enjoy nature and plants? Then this opportunitiy is for you.

**Note: The Garden Maintenance Volunteer Opportunitiy is available in multiple locations across Flagstaff. Scroll down for more locations.**

Garden Volunteer days are a great way to become directly involved in a community garden, interact with other gardeners, and ensure the gardens continue to thrive in the future. As a volunteer, here are the things you might do:

•Turning compost
•Weeding
•Caring for communal plots
•Hands-on learning expereinces and creative, garden inspired projects.

This opportunitiy is wonderful if you are looking to build gardening skills, meet new people, or simply spend time giving back to the community.


Age: 0+
Any age can participate.

Location: Bonito Community Garden Pond

Date: August 04, 2026  

Time: 7:30 PM - 9:30 PM`},{name:"Garden Maintenance Volunteer Day - Southside",link:"https://volunteer.flagstaffaz.gov/Calendar",description:`Enjoy nature and plants? Then this opportunitiy is for you.

Garden Volunteer days are a great way to become directly involved in a community garden, interact with other gardeners, and ensure the gardens continue to thrive in the future. As a volunteer, here are the things you might do: 

•Turning compost
•Weeding
•Caring for communal plots
•Hands-on learning expereinces and creative, garden inspired projects.


Age: 0+
Any age can participate.

Location: Southside Community Garden

Date: August 04, 2026  

Time: 4:00 PM - 6:00 PM`},{name:"Garden Maintenance Volunteer Day - Hal Jensen",link:"https://volunteer.flagstaffaz.gov/Calendar",description:`Enjoy nature and plants? Then this opportunitiy is for you.

Garden Volunteer days are a great way to become directly involved in a community garden, interact with other gardeners, and ensure the gardens continue to thrive in the future. As a volunteer, here are the things you might do: 

•Turning compost
•Weeding
•Caring for communal plots
•Hands-on learning expereinces and creative, garden inspired projects.


Age: 0+
Any age can participate.

Location: Hal Jensen Recreation Center Garden

Date: August 21, 2026

Time: 4:00 PM - 6:00 PM`},{name:"Invasive Weed Identification, Removal & Reseeding",link:"https://volunteer.flagstaffaz.gov/Calendar",description:`Volunteers are requested to help manage invasive weeds at Picture Canyon. In addition to helping the enviornment, you will also learn valuable information on gardening skills, such as how to remove weeds, and plant flowers. This event is on every other Wednesday.

Age: 0+
Any Age can participate.

Location: Picture Canyon Natural & Cultural Preserve

Dates: Every other Wednesday morning.

Time: 7:00 AM - 10:00 AM`},{name:"Mushroom Walk!",link:"https://volunteer.flagstaffaz.gov/Calendar",description:`Join mushroom enthusiasts for the Arizona Watchable Wildlife Experience's afternoon mushroom walk! During this event, you will assist with finding fungi and mushrooms. The event is free, but participation is limited to 20.

Age: 0+
Any age can participate. 

Location: Location details will be revealed after registration.

Date: August 22, 2026

Times:
•9:00 AM - 11:00 AM
•11:30 AM - 1:30 PM`},{name:"Full Moon Hike -- Mars Hill Trail",link:"https://volunteer.flagstaffaz.gov/Calendar",description:`Enjoy outdoor activites? Then this opportunitiy is for you! Enjoy a night out walking on a trail or out and back, and watch the full moon rise. You can meet new people and hike during this event. You will go on the Mars Hill Trail, which lasts about 3 miles.


Age: 0+
Any age can participate.

Location: Observatory Mesa - Mars Hill Trail

Date: July 29, 2026

Time: 6:15 PM - 8:15 PM`}]};var _l,Hl;const zr=((Hl=(_l=xo.handsOnGreaterPhoenix)==null?void 0:_l.opportunities)==null?void 0:Hl.length)>0?xo.handsOnGreaterPhoenix:wd,xg={...zr,note:'For referral volunteer opportunities (marked "Referral" in the title), please contact HandsOn Greater Phoenix to confirm whether volunteer hours can be verified for that project before signing up.',opportunities:zr===wd?zr.opportunities.filter(e=>Bo(e.date)):vd(zr.opportunities).map(e=>({...e,link:e.link||"https://www.handsonphoenix.org/calendar"}))};var Bl,Gl;const Ir=((Gl=(Bl=xo.cityOfFlagstaff)==null?void 0:Bl.opportunities)==null?void 0:Gl.length)>0?xo.cityOfFlagstaff:kd,Ag={...Ir,opportunities:Ir===kd?Ir.opportunities.filter(e=>Bo(e.date)):vd(Ir.opportunities).map(e=>({...e,link:e.link||"https://volunteer.flagstaffaz.gov/Calendar"}))},ye={handsOnGreaterPhoenix:xg,arizonaStateParks:{title:"Arizona State Parks and Trails",note:`Note: The following opportunities require an application, which can be done through this link:
                                 https://azstateparks.com/Open-Volunteer-Positions
                                         Apply to learn more about dates and times.`,opportunities:[{name:"Fort Verde State Historic Park",link:"https://azstateparks.com/Open-Volunteer-Positions",description:`Seeking volunteers for the following positions:

•Special Event Ambassador: Assist with various event duties throughout the year during many fun events.

•Front Desk/Visitor Services - Greet park visitors at the park's first point of contact and collect park entry fees, assist in the Visitor Center with retail sales, and provide general park information.

•Interpretive Services - Assist park staff in communicating information relating to the history of Fort Verde State Historic Park, the town of Camp Verde, and surrounding areas.`},{name:"Jerome State Historic Park",link:"https://azstateparks.com/Open-Volunteer-Positions",description:`Seeking volunteers for the following positions:

•Interpretive Services - Assist park staff in communicating information relating to Jerome State Historic Park, the Douglas family, mining, geology, and the town of Jerome.

•Visitor Services - Welcome guests, assist in the Park Store with retail sales, and provide general park information.`},{name:"Picacho Peak State Park",link:"https://azstateparks.com/Open-Volunteer-Positions",description:`Seeking volunteers for the following positions: 

•Trail Maintenance - General trail maintenance and litter removal

•Visitor Services - Welcome guests, assist in the Visitor Center with retail sales, and provide general park information`},{name:"Rockin' River Ranch State Park",link:"https://azstateparks.com/Open-Volunteer-Positions",description:`Seeking volunteers for the following positions: 

•Trail Ambassador - Welcome and guide guests along our beautiful trail system.

•Visitor Services - Greet park visitors at the park's first point of contact and collect park entry fees, assist in the Visitor Center with retail sales, and provide general park information.`},{name:"Red Rock State Park",link:"https://azstateparks.com/Open-Volunteer-Positions",description:`Seeking volunteers for the following positions:

•Entry Station Attendant - Greet park visitors at the park's first point of contact and collect park entry fees. Must be friendly, patient, and willing to answer basic visitor questions about the park and surrounding Sedona area. Volunteer shifts are typically 3.5 hours (afternoon shift) or 4 hours (morning shift) but shorter shifts on a weekly or every other week basis may be considered.`},{name:"Catalina State Park",link:"https://azstateparks.com/Open-Volunteer-Positions",description:`Seeking volunteers for the following positions:

•Visitor Services - Welcome guests, assist in the Park Store with retail sales, and provide general park information.`}]},cityOfFlagstaff:Ag,juniorAchievement:{title:"Junior Achievement of Arizona",note:`                                               Fill out the Youth Consent here:
 https://drive.google.com/file/d/1bXq56e-_GomNSrz1bKU4tejfmIB1fouD/view?usp=sharing`,opportunities:[{name:"Administrative Tasks-Tempe Office",link:"https://www.jaaz.org/volunteer/admin-tasks/",description:`Help Junior Achievement with various tasks while helping students. This opportunitiy requires a positive attitude and good attention. 

Dates: Thursdays, but contact taylors@jaaz.org in order to reschedule if needed.

Time: 2:00 PM - 4:00 PM, but contact taylors@jaaz.org to reschedule if needed. 

Ages: Any age can generally volunteer, but contact taylors@jaaz.org to confirm. 


Location:
Junior Achievement Tempe Office
636 W. Southern Ave., Tempe, AZ 85282`},{name:"JA High School Heroes",link:"https://www.jaaz.org/program/ja-high-school-heroes/",description:`JA High School Heroes provides exciting leadership opportunities to high school students. You will help students in elementary schools as well. 

After participation in this program, you will not only gain leadership, but will also:
 •Identify qualities of a leader and recognize the role of civic leadership in a community.
•Use strong presentation skills to communicate effectively.
•Recognize and use techniques that further teamwork and achieve group goals.
•Use a problem-solving technique to solve personal and professional problems.
• Apply critical-thinking skills to work-based problems.
•Recognize that decisions have consequences.
•Recognize the value of constructive feedback and the growth mind-set.
•Develop a personal action plan. 

Date: Contact taylors@jaaz.org for more information on upcoming dates. 

Time: Contact taylors@jaaz.org for more information on upcoming times.

Location: Contact taylors@jaaz.org for more information on upcoming location.`}]},feedMyStarvingChildren:{title:"Feed My Starving Children",note:null,opportunities:[{name:"FMSC MobilePack",link:"https://www.fmsc.org/volunteer-listing/?search_term=85260&search_start=2026-06-28&search_end=2026-07-31&miles=150&chosen_mode=Near%20Location&users_zip=85260",description:`Seeking volunteers to measure and pack dry meals, such as rice, soy, dried vegetables, and vitamins. This opportunitiy takes just two hours of your time!

Location: Multiple locations, register to find all locations.

Times: Multiple times, register to view all times.

Age: 5+`}]},azSustainabilityAlliance:{title:"Arizona Sustainability Alliance",note:null,opportunities:[{name:"",link:"https://www.azsustain.org/volunteer",description:""}]},bureauOfLandManagement:{title:"Bureau Of Land Management Arizona",note:null,opportunities:[{name:"Preserving History: A Freedom 250 Volunteer Day",link:"https://www.blm.gov/get-involved/resource-advisory-councils/near-you/oregon-washington/klamath-falls/volunteer",date:"2026-06-20",description:`Join the Bureau of Land Management's Klamath Falls Field Office to take part in hands-on projects that support future generations.

Volunteers are requested to help remove invasive weeds to help the wetland ecosystem.

The BLM will provide tools and supplies, though volunteers are still encouraged to bring lunch, water, hats, gloves, sturdy shoes, long-sleeved clothing, and a camera to capture the experience!

Date: June 20, 2026

Time: 10 AM - 2 PM

Location: Wood River Wetland`}]},lostOurHomesPetRescue:{title:"Lost Our Homes Pet Rescue",note:null,opportunities:[{name:"Shadow Shift",link:"https://lostourhome.galaxydigital.com/calendar/2026/08?",description:`This opportunity is mainly for new volunteers at Lost Our Homes Pet Rescue.

During this opportunitiy, you will tour the Lost Our Homes Facility go over proper Shelter Care, procedures, and other volunteer growth opportunities. After this opportunitiy, you will not only be confident and ready, but will also be eligible for independent Shelter Care shifts and more!

To proceed with this opportunity, specific orientations are needed. 


Age: 8+ 
The minimum age to volunteer for this opportunitiy is 8, however, anyone 8-15 require a parent/guardian. Ages 16-17 can volunteer without a parent, but require a parental waiver. Anyone above the age of 18 can volunteer alone.


Dates and Times: There are numerous dates and times to volunteer for this opportunitiy. Each session is 2 hours long. Visit Lost Our Homes Pet Rescue to learn more information.


Location: 
2323 S Hardy Dr 
Tempe, AZ  85282`},{name:"Shelter Care",link:"https://lostourhome.galaxydigital.com/calendar/2026/08?",description:`Shelter Care is a wonderful opportunity to help pets in need.

Volunteers are requeted for the following: 

•Laundry and dishes 

•Cleaning kennels 

•Logging donations, 

•Sweeping and mopping 

•Restocking and organizing supplies

•Other special projects. 

This opportunity is VERY family friendly and wonderful for animal lovers. 

To proceed with this opportunity, specific orientations are needed. 


Age: 8+ 
The minimum age to volunteer for this opportunitiy is 8, however, anyone 8-15 require a parent/guardian. Ages 16-17 can volunteer without a parent, but require a parental waiver. Anyone above the age of 18 can volunteer alone.


Dates and Times: There are numerous dates and times to volunteer for this opportunitiy. Each session is 2 hours long. Visit Lost Our Homes Pet Rescue to learn more information.


Location: 
2323 S Hardy Dr 
Tempe, AZ  85282`}]}};Object.keys(ye).forEach(e=>{ye[e]={...ye[e],opportunities:ye[e].opportunities.filter(n=>Bo(n.date,n.description))}});const Mg=Object.freeze(Object.defineProperty({__proto__:null,organizations:ye},Symbol.toStringTag,{value:"Module"}));function Cg(){const[e,n]=b.useState([{sender:"ai",text:"Hi! I'm Quest AI. Tell me your interests and location, and I will find the best volunteer opportunity near you!"}]),[t,r]=b.useState(""),[o,i]=b.useState(!1),a=b.useRef(null);b.useEffect(()=>{a.current&&(a.current.scrollTop=a.current.scrollHeight)},[e]);const s=JSON.stringify(ye);async function l(){if(!t.trim()||o)return;const f=t;r(""),i(!0),n(d=>[...d,{sender:"user",text:f}]);try{const d=await bg(f,s);n(m=>[...m,{sender:"ai",text:d}])}catch(d){n(m=>[...m,{sender:"ai",text:`Error: ${d.message}`}])}finally{i(!1)}}function u(f){f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),l())}return p.jsxs("div",{className:"quest-page-wrap",children:[p.jsx(mr,{current:"quest"}),p.jsxs("div",{className:"quest-page",children:[p.jsx("h1",{className:"quest-title",children:"Quest AI"}),!yd()&&p.jsxs("div",{className:"quest-config-banner",children:["Quest AI isn't connected yet. Add your Firebase API key in ",p.jsx("code",{children:"src/config/firebaseConfig.js"})," to enable live responses."]}),p.jsx("div",{className:"quest-chat-scroll",ref:a,children:e.map((f,d)=>p.jsxs("div",{className:`quest-message-row ${f.sender}`,children:[f.sender==="ai"&&p.jsx("span",{className:`quest-avatar ai${o&&d===e.length-1?" loading":""}`,children:"✨"}),p.jsx("div",{className:`quest-bubble ${f.sender}`,children:f.text}),f.sender==="user"&&p.jsx("span",{className:"quest-avatar user",children:"👤"})]},d))}),p.jsxs("div",{className:"quest-input-bar",children:[p.jsxs("div",{className:"quest-input-wrap",children:[p.jsx("input",{className:"quest-input",value:t,onChange:f=>r(f.target.value),onKeyDown:u}),!t&&p.jsx("span",{className:"quest-input-placeholder",children:"Ask Quest AI..."})]}),p.jsx("button",{className:"quest-send-btn",onClick:l,children:o?"⋯":"➤"})]})]})]})}const Tg="modulepreload",Vg=function(e){return"/"+e},Wl={},Eg=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(t.map(l=>{if(l=Vg(l),l in Wl)return;Wl[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Tg,u||(d.as="script"),d.crossOrigin="",d.href=l,s&&d.setAttribute("nonce",s),document.head.appendChild(d),u)return new Promise((m,y)=>{d.addEventListener("load",m),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return o.then(a=>{for(const s of a||[])s.status==="rejected"&&i(s.reason);return n().catch(i)})},bd="AIzaSyDyePdZI22sIGwZ84yK5mwOzjhtrVwq8us";function Dl(){return!!bd}const jg={handsOnGreaterPhoenix:"/org/hands-on-greater-phoenix",arizonaStateParks:"/org/arizona-state-parks",azSustainabilityAlliance:"/org/az-sustainability-alliance",bureauOfLandManagement:"/org/bureau-of-land-management",cityOfFlagstaff:"/org/city-of-flagstaff",feedMyStarvingChildren:"/org/feed-my-starving-children",lostOurHomesPetRescue:"/org/lost-our-homes-pet-rescue",juniorAchievement:"/org/junior-achievement"},Pd="vh_geocode_cache_v5";let Ur=null;function Ng(e){var n;return(n=window.google)!=null&&n.maps?Promise.resolve(window.google):Ur||(Ur=new Promise((t,r)=>{const o=document.createElement("script");o.src=`https://maps.googleapis.com/maps/api/js?key=${e}&libraries=places,geometry`,o.async=!0,o.onload=()=>{const i=document.createElement("script");i.src="https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js",i.onload=()=>t(window.google),i.onerror=()=>t(window.google),document.head.appendChild(i)},o.onerror=r,document.head.appendChild(o)}),Ur)}function Lg(e){if(!e)return null;const n=e.match(/Location:\s*([^\n]+)/i);if(!n)return null;let t=n[1].trim();return t=t.replace(/,?\s*AZ,\s*AZ/i,", AZ"),t.toLowerCase().includes("details")||t.toLowerCase().includes("provided after")||t.toLowerCase().includes("provided upon")||t.toLowerCase().includes("contact")||t.toLowerCase().includes("various")||t.toLowerCase().includes("multiple")||t.toLowerCase().includes("tbd")||t.length<4?null:/^\d{5}$/.test(t)?`${t}, AZ`:t}function Og(){try{const e=localStorage.getItem(Pd);return e?JSON.parse(e):{}}catch{return{}}}function Rg(e){try{localStorage.setItem(Pd,JSON.stringify(e))}catch{}}async function zg(e,n,t){const r=n.toLowerCase().trim();return t[r]?t[r]:new Promise(o=>{new e.maps.Geocoder().geocode({address:n+", Arizona",componentRestrictions:{country:"us"},bounds:new e.maps.LatLngBounds(new e.maps.LatLng(31.3,-114.8),new e.maps.LatLng(37,-109))},(a,s)=>{if(s==="OK"&&a[0]){const{lat:l,lng:u}=a[0].geometry.location,f={lat:l(),lng:u()};t[r]=f,o(f)}else t[r]=null,o(null)})})}async function Ig(e,n,t){const r=Og(),o=[],i=[];for(const[s,l]of Object.entries(n))for(const u of l.opportunities){const f=Lg(u.description);f&&i.push({name:u.name,orgKey:s,loc:f})}t(`Locating ${i.length} opportunities...`);let a=0;for(const s of i){const l=await zg(e,s.loc,r);l&&o.push({name:s.name,orgKey:s.orgKey,lat:l.lat,lng:l.lng}),a++,a%10===0&&t(`Locating opportunities... (${a}/${i.length})`),await new Promise(u=>setTimeout(u,60))}return Rg(r),o}function Ug(){const e=Ho(),n=b.useRef(null),t=b.useRef(null),r=b.useRef([]),[o,i]=b.useState(""),[a,s]=b.useState(""),[l,u]=b.useState(null),[f,d]=b.useState(!1),[m,y]=b.useState(""),[v,k]=b.useState(""),[A,h]=b.useState("Loading map..."),[c,g]=b.useState([]);b.useEffect(()=>{if(!Dl())return;let S=!1;return Ng(bd).then(async T=>{var Le;if(S||!n.current)return;const V=new T.maps.Map(n.current,{center:{lat:33.4484,lng:-111.95},zoom:9,mapTypeControl:!1});if(t.current=V,h("Locating opportunities..."),await new Promise(X=>setTimeout(X,150)),S)return;const{organizations:z}=await Eg(async()=>{const{organizations:X}=await Promise.resolve().then(()=>Mg);return{organizations:X}},void 0);if(S)return;const N=Object.values(z).reduce((X,Ye)=>X+Ye.opportunities.length,0);console.log(`MapsPage: loaded ${N} opportunities`);const $=await Ig(T,z,h);if(S)return;g($),r.current.forEach(X=>X.setMap(null));const J=$.map(X=>{const Ye=new T.maps.Marker({position:{lat:X.lat,lng:X.lng},title:X.name});return Ye.addListener("click",()=>u(X)),Ye});r.current=J,(Le=window.markerClusterer)!=null&&Le.MarkerClusterer?new window.markerClusterer.MarkerClusterer({map:V,markers:J}):J.forEach(X=>X.setMap(V)),d(!0),h("")}).catch(()=>{S||(y("Google Maps failed to load. Check your API key in src/config/googleMapsConfig.js."),h(""))}),()=>{S=!0}},[]);function w(){var V;if(k(""),s(""),!f){k("The map is still loading — try again in a moment.");return}if(!o.trim()){k("Enter an address first.");return}const S=window.google;if(!((V=S==null?void 0:S.maps)!=null&&V.Geocoder)){k("Geocoding not available. Try reloading.");return}new S.maps.Geocoder().geocode({address:o,componentRestrictions:{country:"us"},bounds:new S.maps.LatLngBounds(new S.maps.LatLng(31.3,-114.8),new S.maps.LatLng(37,-109))},(z,N)=>{var Ye,Yn;if(N!=="OK"||!z[0]){k(`Couldn't find that address. Try adding a city, e.g. "1110 W Washington, Phoenix".`);return}const $=z[0].geometry.location;let J=null,Le=1/0;for(const Oe of c){const M=(Yn=(Ye=S.maps.geometry)==null?void 0:Ye.spherical)!=null&&Yn.computeDistanceBetween?S.maps.geometry.spherical.computeDistanceBetween($,new S.maps.LatLng(Oe.lat,Oe.lng)):Fg($.lat(),$.lng(),Oe.lat,Oe.lng);M<Le&&(Le=M,J=Oe)}if(!J){k("No mapped opportunities found.");return}u(J),t.current.panTo({lat:J.lat,lng:J.lng}),t.current.setZoom(13),new S.maps.DirectionsService().route({origin:$,destination:{lat:J.lat,lng:J.lng},travelMode:S.maps.TravelMode.DRIVING},(Oe,M)=>{if(M==="OK"){const E=Oe.routes[0].legs[0],j=Math.round(E.duration.value/60),D=(E.distance.value/1609.34).toFixed(1);s(`📍 ${J.name} — ${D} mi · ${j} min away`)}else k(`Found nearest opportunity (${J.name}) but couldn't calculate drive time.`)})})}function x(){if(!l)return;const S=jg[l.orgKey];S&&e(S),u(null)}return p.jsxs("div",{className:"maps-page",children:[p.jsx(mr,{current:"maps"}),p.jsxs("div",{className:"maps-map-wrap",children:[Dl()?p.jsx("div",{className:"maps-map-canvas",ref:n}):p.jsx("div",{className:"maps-not-configured",children:p.jsxs("p",{children:["Add your Google Maps API key in ",p.jsx("code",{children:"src/config/googleMapsConfig.js"})]})}),m&&p.jsx("div",{className:"maps-not-configured",style:{background:"rgba(40,0,0,0.85)"},children:p.jsx("p",{children:m})}),A&&p.jsxs("div",{className:"maps-loading-banner",children:[p.jsx("span",{className:"maps-loading-spinner"})," ",A]}),p.jsxs("div",{className:"maps-search-panel",children:[p.jsx("input",{className:"maps-address-input",placeholder:"Address",value:o,onChange:S=>i(S.target.value),onKeyDown:S=>S.key==="Enter"&&w()}),p.jsx("button",{className:"maps-find-btn",onClick:w,children:"Find Nearest Opportunity"}),v&&p.jsx("span",{className:"maps-find-error",children:v}),a&&p.jsx("span",{className:"maps-travel-time",children:a}),p.jsx("p",{className:"maps-location-note",children:"📌 Some pin locations are approximate based on the area listed. Register with the organization for exact details."})]})]}),l&&p.jsx("div",{className:"maps-sheet-overlay",onClick:()=>u(null),children:p.jsxs("div",{className:"maps-sheet",onClick:S=>S.stopPropagation(),children:[p.jsx("span",{className:"maps-sheet-name",children:l.name}),p.jsx("button",{className:"maps-sheet-btn",onClick:x,children:"Click to View Organization"})]})})]})}function Fg(e,n,t,r){const i=u=>u*Math.PI/180,a=i(t-e),s=i(r-n),l=Math.sin(a/2)**2+Math.cos(i(e))*Math.cos(i(t))*Math.sin(s/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))}const Wg="/assets/Image2-DbNKlkYW.png";function Dg(){return p.jsxs("div",{className:"about-page",children:[p.jsx(mr,{current:"about"}),p.jsxs("div",{className:"about-scroll",children:[p.jsx("div",{className:"about-hero",style:{backgroundImage:`url(${Wg})`},children:p.jsxs("div",{className:"about-hero-text",children:[p.jsx("h1",{className:"about-mission-title",children:"Our Mission"}),p.jsx("p",{className:"about-mission-body",children:`With the right tools and access to meaningful opportunities,
any student can make a difference. VolunteerHigh empowers
students to connect with
causes they care about, building lasting community
impact and growing service.`})]})}),p.jsxs("div",{className:"about-section",children:[p.jsxs("div",{className:"about-divider-row",children:[p.jsx("div",{className:"rule"}),p.jsx("span",{className:"label",children:"About VolunteerHigh"}),p.jsx("div",{className:"rule"})]}),p.jsx("p",{className:"about-body-text",children:`Created By A Student, for Students.

VolunteerHigh is a platform designed to help high school students in Arizona discover meaningful volunteer opportunities
 in their lcoal communities. Finding volunteer work can be difficult, with opportunities scattered across different websites and organizations.
VolunteerHigh simplifies this process by displaying various organizations in one place.`})]})]})]})}function va(e){const n=/(https?:\/\/[^\s]+)/g;return e.split(n).map((r,o)=>n.test(r)&&r.startsWith("http")?p.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:r},o):p.jsx(Sa.Fragment,{children:r},o))}const _g=[{question:"Is VolunteerHigh Free?",answer:"Yes! VolunteerHigh is a completely free tool that can be used by anybody in Arizona."},{question:"Do I have to sign up to use VolunteerHigh?",answer:"No. VolunteerHigh requires no sign ups, though some opportunities require an account or aplication."},{question:"What organizations is VolunteerHigh partnered with?",answer:"VolunteerHigh is partnered with 8 organizations across the valley as of now."},{question:"Can I use VolunteerHigh in California?",answer:"No. VolunteerHigh is currently a platform designed only for students in Arizona."},{question:"How can I contact VolunteerHigh",answer:"Email VolunteerHighSupport@gmail.com"},{question:"Where can I contact the organizations?",answer:`Here are our following partner organizations, and their contact information:

Arizona State Parks and Trails:
Phone: (602) 542-7152
Email: crichards@azstateparks.gov

HandsOnGreaterPhoenix:
Main: 602.973.2212
Email: info@handsonphoenix.org

City of Flagstaff:
Email: Blake.Commisso@flagstaffaz.gov

Junior Achievement of Arizona:
Email: taylors@jaaz.org

Feed My Starving Children:
Email: info@fmsc.org

Arizona Sustainability Alliance:
Email: info@azsustain.org

Bureau of Land Management:
Email: elitchfield@az.go

Lost Our Home Pet Rescue:
Email: Volunteering@lostourhome.org`}];function Hg({question:e,answer:n}){const[t,r]=b.useState(!1);return p.jsxs("div",{className:"faq-row",children:[p.jsxs("button",{className:"faq-question-row",onClick:()=>r(o=>!o),children:[p.jsx("span",{children:e}),p.jsx("span",{className:"faq-toggle-icon",children:t?"−":"+"})]}),t&&p.jsx("p",{className:"faq-answer",children:va(n)})]})}function Bg(){return p.jsxs("div",{className:"faq-page",children:[p.jsx(mr,{current:"faq"}),p.jsx("div",{className:"faq-scroll",children:p.jsxs("div",{className:"faq-inner",children:[p.jsxs("div",{className:"faq-divider-row",children:[p.jsx("div",{className:"rule"}),p.jsx("span",{className:"label",children:"FAQ's"}),p.jsx("div",{className:"rule"})]}),_g.map((e,n)=>p.jsx(Hg,{question:e.question,answer:e.answer},n))]})})]})}function Cn({title:e,note:n,opportunities:t,centerTitle:r,bannerImage:o,contactEmail:i}){const[a,s]=b.useState(null),[l,u]=b.useState(""),f=b.useMemo(()=>{if(!l.trim())return t;const y=l.toLowerCase();return t.filter(v=>v.name.toLowerCase().includes(y)||v.description.toLowerCase().includes(y))},[t,l]),d=a!==null?t[a]:null;function m(y){if(!i)return null;const v=`Volunteering Inquiry — ${y}`,k=`Hi,

I'm interested in the "${y}" volunteer opportunity with ${e}, and I'd like to learn more.

Thank you!`;return`mailto:${i}?subject=${encodeURIComponent(v)}&body=${encodeURIComponent(k)}`}return p.jsxs("div",{className:"org-page",children:[o&&p.jsx("div",{className:"org-banner",style:{backgroundImage:`url(${o})`}}),p.jsxs("div",{className:`org-header${r?" center-title":""}`,children:[p.jsx("h1",{className:"org-title",children:e}),n&&p.jsx("p",{className:"org-note",children:va(n)})]}),p.jsxs("div",{className:"org-body",children:[p.jsxs("div",{className:"org-list-pane",children:[p.jsx("h2",{className:"org-list-heading",children:"Opportunities Near You 📍"}),p.jsx("input",{className:"org-search-input",type:"text",placeholder:"Search opportunities...",value:l,onChange:y=>u(y.target.value)}),p.jsx("div",{className:"org-list-scroll",children:f.length===0?p.jsx("p",{className:"org-list-empty",children:"No opportunities match your search."}):f.map(y=>{const v=t.indexOf(y);return p.jsx("button",{className:`org-list-item${a===v?" selected":""}`,onClick:()=>s(v),children:y.name},v)})})]}),p.jsx("div",{className:"org-divider"}),p.jsx("div",{className:"org-detail-pane",children:p.jsx("div",{className:"org-detail-scroll",children:d?p.jsxs(p.Fragment,{children:[p.jsx("h3",{className:"org-detail-name",children:d.name}),p.jsx("p",{className:"org-detail-description",children:va(d.description)}),p.jsxs("div",{className:"org-detail-actions",children:[d.link&&p.jsx("a",{className:"org-apply-button",href:d.link,target:"_blank",rel:"noopener noreferrer",children:"View Official Listing ↗"}),i&&p.jsxs("a",{className:"org-apply-button org-apply-button-secondary",href:m(d.name),children:["✉ Email ",e]})]})]}):p.jsx("p",{className:"org-detail-placeholder",children:"Select an opportunity on the left to view details"})})})]})]})}const Tn={arizonaStateParks:"crichards@azstateparks.gov",handsOnGreaterPhoenix:"info@handsonphoenix.org",cityOfFlagstaff:"Blake.Commisso@flagstaffaz.gov",juniorAchievement:"taylors@jaaz.org",feedMyStarvingChildren:"info@fmsc.org",azSustainabilityAlliance:"info@azsustain.org",bureauOfLandManagement:"elitchfield@az.go",lostOurHomesPetRescue:"Volunteering@lostourhome.org"};function Gg(){const e=ye.handsOnGreaterPhoenix;return p.jsx(Cn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Tn.handsOnGreaterPhoenix})}function Zg(){const e=ye.arizonaStateParks;return p.jsx(Cn,{title:e.title,note:e.note,opportunities:e.opportunities,centerTitle:!0,contactEmail:Tn.arizonaStateParks})}function Yg(){const e=ye.cityOfFlagstaff;return p.jsx(Cn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Tn.cityOfFlagstaff})}function qg(){const e=ye.juniorAchievement;return p.jsx(Cn,{title:e.title,note:e.note,opportunities:e.opportunities,centerTitle:!0,contactEmail:Tn.juniorAchievement})}function $g(){const e=ye.feedMyStarvingChildren;return p.jsx(Cn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Tn.feedMyStarvingChildren})}function Jg(){const e=ye.azSustainabilityAlliance;return p.jsx(Cn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Tn.azSustainabilityAlliance})}function Kg(){const e=ye.bureauOfLandManagement;return p.jsx(Cn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Tn.bureauOfLandManagement})}function Qg(){const e=ye.lostOurHomesPetRescue;return p.jsx(Cn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Tn.lostOurHomesPetRescue})}function Xg(){return p.jsx(Kf,{children:p.jsxs(Bf,{children:[p.jsx(ce,{path:"/",element:p.jsx(ng,{})}),p.jsx(ce,{path:"/home",element:p.jsx(vg,{})}),p.jsx(ce,{path:"/quest",element:p.jsx(Cg,{})}),p.jsx(ce,{path:"/maps",element:p.jsx(Ug,{})}),p.jsx(ce,{path:"/about",element:p.jsx(Dg,{})}),p.jsx(ce,{path:"/faq",element:p.jsx(Bg,{})}),p.jsx(ce,{path:"/org/hands-on-greater-phoenix",element:p.jsx(Gg,{})}),p.jsx(ce,{path:"/org/arizona-state-parks",element:p.jsx(Zg,{})}),p.jsx(ce,{path:"/org/city-of-flagstaff",element:p.jsx(Yg,{})}),p.jsx(ce,{path:"/org/junior-achievement",element:p.jsx(qg,{})}),p.jsx(ce,{path:"/org/feed-my-starving-children",element:p.jsx($g,{})}),p.jsx(ce,{path:"/org/az-sustainability-alliance",element:p.jsx(Jg,{})}),p.jsx(ce,{path:"/org/bureau-of-land-management",element:p.jsx(Kg,{})}),p.jsx(ce,{path:"/org/lost-our-homes-pet-rescue",element:p.jsx(Qg,{})})]})})}Pi.createRoot(document.getElementById("root")).render(p.jsx(Sa.StrictMode,{children:p.jsx(Xg,{})}));
