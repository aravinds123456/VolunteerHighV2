function xc(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function bc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yl={exports:{}},Ao={},Zl={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dr=Symbol.for("react.element"),Ac=Symbol.for("react.portal"),Cc=Symbol.for("react.fragment"),Mc=Symbol.for("react.strict_mode"),Tc=Symbol.for("react.profiler"),Ec=Symbol.for("react.provider"),Vc=Symbol.for("react.context"),jc=Symbol.for("react.forward_ref"),Nc=Symbol.for("react.suspense"),Lc=Symbol.for("react.memo"),Oc=Symbol.for("react.lazy"),vs=Symbol.iterator;function zc(e){return e===null||typeof e!="object"?null:(e=vs&&e[vs]||e["@@iterator"],typeof e=="function"?e:null)}var $l={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ql=Object.assign,Kl={};function kt(e,n,t){this.props=e,this.context=n,this.refs=Kl,this.updater=t||$l}kt.prototype.isReactComponent={};kt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};kt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ql(){}Ql.prototype=kt.prototype;function wa(e,n,t){this.props=e,this.context=n,this.refs=Kl,this.updater=t||$l}var ka=wa.prototype=new Ql;ka.constructor=wa;ql(ka,kt.prototype);ka.isPureReactComponent=!0;var ws=Array.isArray,Jl=Object.prototype.hasOwnProperty,Pa={current:null},Xl={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,n,t){var r,o={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)Jl.call(n,r)&&!Xl.hasOwnProperty(r)&&(o[r]=n[r]);var s=arguments.length-2;if(s===1)o.children=t;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:dr,type:e,key:i,ref:a,props:o,_owner:Pa.current}}function Ic(e,n){return{$$typeof:dr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Sa(e){return typeof e=="object"&&e!==null&&e.$$typeof===dr}function Rc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ks=/\/+/g;function Yo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Rc(""+e.key):n.toString(36)}function Wr(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case dr:case Ac:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Yo(a,0):r,ws(o)?(t="",e!=null&&(t=e.replace(ks,"$&/")+"/"),Wr(o,n,t,"",function(u){return u})):o!=null&&(Sa(o)&&(o=Ic(o,t+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(ks,"$&/")+"/")+e)),n.push(o)),1;if(a=0,r=r===""?".":r+":",ws(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+Yo(i,s);a+=Wr(i,n,t,l,o)}else if(l=zc(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+Yo(i,s++),a+=Wr(i,n,t,l,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function wr(e,n,t){if(e==null)return e;var r=[],o=0;return Wr(e,r,"","",function(i){return n.call(t,i,o++)}),r}function Uc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Hr={transition:null},Wc={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Hr,ReactCurrentOwner:Pa};function nu(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:wr,forEach:function(e,n,t){wr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return wr(e,function(){n++}),n},toArray:function(e){return wr(e,function(n){return n})||[]},only:function(e){if(!Sa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=kt;L.Fragment=Cc;L.Profiler=Tc;L.PureComponent=wa;L.StrictMode=Mc;L.Suspense=Nc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wc;L.act=nu;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ql({},e.props),o=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=Pa.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in n)Jl.call(n,l)&&!Xl.hasOwnProperty(l)&&(r[l]=n[l]===void 0&&s!==void 0?s[l]:n[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:dr,type:e.type,key:o,ref:i,props:r,_owner:a}};L.createContext=function(e){return e={$$typeof:Vc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ec,_context:e},e.Consumer=e};L.createElement=eu;L.createFactory=function(e){var n=eu.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:jc,render:e}};L.isValidElement=Sa;L.lazy=function(e){return{$$typeof:Oc,_payload:{_status:-1,_result:e},_init:Uc}};L.memo=function(e,n){return{$$typeof:Lc,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=Hr.transition;Hr.transition={};try{e()}finally{Hr.transition=n}};L.unstable_act=nu;L.useCallback=function(e,n){return pe.current.useCallback(e,n)};L.useContext=function(e){return pe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};L.useEffect=function(e,n){return pe.current.useEffect(e,n)};L.useId=function(){return pe.current.useId()};L.useImperativeHandle=function(e,n,t){return pe.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return pe.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return pe.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return pe.current.useMemo(e,n)};L.useReducer=function(e,n,t){return pe.current.useReducer(e,n,t)};L.useRef=function(e){return pe.current.useRef(e)};L.useState=function(e){return pe.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return pe.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return pe.current.useTransition()};L.version="18.3.1";Zl.exports=L;var P=Zl.exports;const xa=bc(P),Hc=xc({__proto__:null,default:xa},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc=P,Dc=Symbol.for("react.element"),_c=Symbol.for("react.fragment"),Bc=Object.prototype.hasOwnProperty,Gc=Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yc={key:!0,ref:!0,__self:!0,__source:!0};function tu(e,n,t){var r,o={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Bc.call(n,r)&&!Yc.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:Dc,type:e,key:i,ref:a,props:o,_owner:Gc.current}}Ao.Fragment=_c;Ao.jsx=tu;Ao.jsxs=tu;Yl.exports=Ao;var h=Yl.exports,Si={},ru={exports:{}},Ae={},ou={exports:{}},iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,V){var j=C.length;C.push(V);e:for(;0<j;){var F=j-1>>>1,ee=C[F];if(0<o(ee,V))C[F]=V,C[j]=ee,j=F;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var V=C[0],j=C.pop();if(j!==V){C[0]=j;e:for(var F=0,ee=C.length,yr=ee>>>1;F<yr;){var En=2*(F+1)-1,Go=C[En],Vn=En+1,vr=C[Vn];if(0>o(Go,j))Vn<ee&&0>o(vr,Go)?(C[F]=vr,C[Vn]=j,F=Vn):(C[F]=Go,C[En]=j,F=En);else if(Vn<ee&&0>o(vr,j))C[F]=vr,C[Vn]=j,F=Vn;else break e}}return V}function o(C,V){var j=C.sortIndex-V.sortIndex;return j!==0?j:C.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],f=1,c=null,m=3,y=!1,v=!1,k=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var V=t(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=C)r(u),V.sortIndex=V.expirationTime,n(l,V);else break;V=t(u)}}function w(C){if(k=!1,g(C),!v)if(t(l)!==null)v=!0,Zn(b);else{var V=t(u);V!==null&&Oe(w,V.startTime-C)}}function b(C,V){v=!1,k&&(k=!1,p(E),E=-1),y=!0;var j=m;try{for(g(V),c=t(l);c!==null&&(!(c.expirationTime>V)||C&&!q());){var F=c.callback;if(typeof F=="function"){c.callback=null,m=c.priorityLevel;var ee=F(c.expirationTime<=V);V=e.unstable_now(),typeof ee=="function"?c.callback=ee:c===t(l)&&r(l),g(V)}else r(l);c=t(l)}if(c!==null)var yr=!0;else{var En=t(u);En!==null&&Oe(w,En.startTime-V),yr=!1}return yr}finally{c=null,m=j,y=!1}}var x=!1,T=null,E=-1,I=5,N=-1;function q(){return!(e.unstable_now()-N<I)}function K(){if(T!==null){var C=e.unstable_now();N=C;var V=!0;try{V=T(!0,C)}finally{V?Le():(x=!1,T=null)}}else x=!1}var Le;if(typeof d=="function")Le=function(){d(K)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Ze=X.port2;X.port1.onmessage=K,Le=function(){Ze.postMessage(null)}}else Le=function(){A(K,0)};function Zn(C){T=C,x||(x=!0,Le())}function Oe(C,V){E=A(function(){C(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,Zn(b))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var V=3;break;default:V=m}var j=m;m=V;try{return C()}finally{m=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,V){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var j=m;m=C;try{return V()}finally{m=j}},e.unstable_scheduleCallback=function(C,V,j){var F=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?F+j:F):j=F,C){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=j+ee,C={id:f++,callback:V,priorityLevel:C,startTime:j,expirationTime:ee,sortIndex:-1},j>F?(C.sortIndex=j,n(u,C),t(l)===null&&C===t(u)&&(k?(p(E),E=-1):k=!0,Oe(w,j-F))):(C.sortIndex=ee,n(l,C),v||y||(v=!0,Zn(b))),C},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(C){var V=m;return function(){var j=m;m=V;try{return C.apply(this,arguments)}finally{m=j}}}})(iu);ou.exports=iu;var Zc=ou.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c=P,be=Zc;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var au=new Set,Gt={};function _n(e,n){pt(e,n),pt(e+"Capture",n)}function pt(e,n){for(Gt[e]=n,e=0;e<n.length;e++)au.add(n[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xi=Object.prototype.hasOwnProperty,qc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ps={},Ss={};function Kc(e){return xi.call(Ss,e)?!0:xi.call(Ps,e)?!1:qc.test(e)?Ss[e]=!0:(Ps[e]=!0,!1)}function Qc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jc(e,n,t,r){if(n===null||typeof n>"u"||Qc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function fe(e,n,t,r,o,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ie[n]=new fe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ba=/[\-:]([a-z])/g;function Aa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ba,Aa);ie[n]=new fe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ba,Aa);ie[n]=new fe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ba,Aa);ie[n]=new fe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ca(e,n,t,r){var o=ie.hasOwnProperty(n)?ie[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Jc(n,t,o,r)&&(t=null),r||o===null?Kc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var rn=$c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kr=Symbol.for("react.element"),qn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),Ma=Symbol.for("react.strict_mode"),bi=Symbol.for("react.profiler"),su=Symbol.for("react.provider"),lu=Symbol.for("react.context"),Ta=Symbol.for("react.forward_ref"),Ai=Symbol.for("react.suspense"),Ci=Symbol.for("react.suspense_list"),Ea=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),uu=Symbol.for("react.offscreen"),xs=Symbol.iterator;function bt(e){return e===null||typeof e!="object"?null:(e=xs&&e[xs]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,Zo;function Nt(e){if(Zo===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Zo=n&&n[1]||""}return`
`+Zo+e}var $o=!1;function qo(e,n){if(!e||$o)return"";$o=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{$o=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Nt(e):""}function Xc(e){switch(e.tag){case 5:return Nt(e.type);case 16:return Nt("Lazy");case 13:return Nt("Suspense");case 19:return Nt("SuspenseList");case 0:case 2:case 15:return e=qo(e.type,!1),e;case 11:return e=qo(e.type.render,!1),e;case 1:return e=qo(e.type,!0),e;default:return""}}function Mi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case qn:return"Portal";case bi:return"Profiler";case Ma:return"StrictMode";case Ai:return"Suspense";case Ci:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lu:return(e.displayName||"Context")+".Consumer";case su:return(e._context.displayName||"Context")+".Provider";case Ta:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ea:return n=e.displayName||null,n!==null?n:Mi(e.type)||"Memo";case an:n=e._payload,e=e._init;try{return Mi(e(n))}catch{}}return null}function eh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mi(n);case 8:return n===Ma?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function du(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nh(e){var n=du(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Pr(e){e._valueTracker||(e._valueTracker=nh(e))}function cu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=du(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ti(e,n){var t=n.checked;return B({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function bs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Sn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function hu(e,n){n=n.checked,n!=null&&Ca(e,"checked",n,!1)}function Ei(e,n){hu(e,n);var t=Sn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Vi(e,n.type,t):n.hasOwnProperty("defaultValue")&&Vi(e,n.type,Sn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function As(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Vi(e,n,t){(n!=="number"||Jr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Lt=Array.isArray;function st(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Sn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function ji(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return B({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(Lt(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Sn(t)}}function pu(e,n){var t=Sn(n.value),r=Sn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ms(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function fu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ni(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?fu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,gu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Yt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var It={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},th=["Webkit","ms","Moz","O"];Object.keys(It).forEach(function(e){th.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),It[n]=It[e]})});function mu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||It.hasOwnProperty(e)&&It[e]?(""+n).trim():n+"px"}function yu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=mu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var rh=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Li(e,n){if(n){if(rh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function Oi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=null;function Va(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ii=null,lt=null,ut=null;function Ts(e){if(e=pr(e)){if(typeof Ii!="function")throw Error(S(280));var n=e.stateNode;n&&(n=Vo(n),Ii(e.stateNode,e.type,n))}}function vu(e){lt?ut?ut.push(e):ut=[e]:lt=e}function wu(){if(lt){var e=lt,n=ut;if(ut=lt=null,Ts(e),n)for(e=0;e<n.length;e++)Ts(n[e])}}function ku(e,n){return e(n)}function Pu(){}var Ko=!1;function Su(e,n,t){if(Ko)return e(n,t);Ko=!0;try{return ku(e,n,t)}finally{Ko=!1,(lt!==null||ut!==null)&&(Pu(),wu())}}function Zt(e,n){var t=e.stateNode;if(t===null)return null;var r=Vo(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var Ri=!1;if(Xe)try{var At={};Object.defineProperty(At,"passive",{get:function(){Ri=!0}}),window.addEventListener("test",At,At),window.removeEventListener("test",At,At)}catch{Ri=!1}function oh(e,n,t,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(f){this.onError(f)}}var Rt=!1,Xr=null,eo=!1,Ui=null,ih={onError:function(e){Rt=!0,Xr=e}};function ah(e,n,t,r,o,i,a,s,l){Rt=!1,Xr=null,oh.apply(ih,arguments)}function sh(e,n,t,r,o,i,a,s,l){if(ah.apply(this,arguments),Rt){if(Rt){var u=Xr;Rt=!1,Xr=null}else throw Error(S(198));eo||(eo=!0,Ui=u)}}function Bn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function xu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Es(e){if(Bn(e)!==e)throw Error(S(188))}function lh(e){var n=e.alternate;if(!n){if(n=Bn(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return Es(o),e;if(i===r)return Es(o),n;i=i.sibling}throw Error(S(188))}if(t.return!==r.return)t=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===t){a=!0,t=o,r=i;break}if(s===r){a=!0,r=o,t=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===t){a=!0,t=i,r=o;break}if(s===r){a=!0,r=i,t=o;break}s=s.sibling}if(!a)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function bu(e){return e=lh(e),e!==null?Au(e):null}function Au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Au(e);if(n!==null)return n;e=e.sibling}return null}var Cu=be.unstable_scheduleCallback,Vs=be.unstable_cancelCallback,uh=be.unstable_shouldYield,dh=be.unstable_requestPaint,Y=be.unstable_now,ch=be.unstable_getCurrentPriorityLevel,ja=be.unstable_ImmediatePriority,Mu=be.unstable_UserBlockingPriority,no=be.unstable_NormalPriority,hh=be.unstable_LowPriority,Tu=be.unstable_IdlePriority,Co=null,Ge=null;function ph(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Co,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:mh,fh=Math.log,gh=Math.LN2;function mh(e){return e>>>=0,e===0?32:31-(fh(e)/gh|0)|0}var xr=64,br=4194304;function Ot(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function to(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var s=a&~o;s!==0?r=Ot(s):(i&=a,i!==0&&(r=Ot(i)))}else a=t&~o,a!==0?r=Ot(a):i!==0&&(r=Ot(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-We(n),o=1<<t,r|=e[t],n&=~o;return r}function yh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vh(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-We(i),s=1<<a,l=o[a];l===-1?(!(s&t)||s&r)&&(o[a]=yh(s,n)):l<=n&&(e.expiredLanes|=s),i&=~s}}function Wi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Eu(){var e=xr;return xr<<=1,!(xr&4194240)&&(xr=64),e}function Qo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function cr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-We(n),e[n]=t}function wh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-We(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function Na(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-We(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var z=0;function Vu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ju,La,Nu,Lu,Ou,Hi=!1,Ar=[],pn=null,fn=null,gn=null,$t=new Map,qt=new Map,ln=[],kh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function js(e,n){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":$t.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":qt.delete(n.pointerId)}}function Ct(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=pr(n),n!==null&&La(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Ph(e,n,t,r,o){switch(n){case"focusin":return pn=Ct(pn,e,n,t,r,o),!0;case"dragenter":return fn=Ct(fn,e,n,t,r,o),!0;case"mouseover":return gn=Ct(gn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return $t.set(i,Ct($t.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,qt.set(i,Ct(qt.get(i)||null,e,n,t,r,o)),!0}return!1}function zu(e){var n=Ln(e.target);if(n!==null){var t=Bn(n);if(t!==null){if(n=t.tag,n===13){if(n=xu(t),n!==null){e.blockedOn=n,Ou(e.priority,function(){Nu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Fi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);zi=r,t.target.dispatchEvent(r),zi=null}else return n=pr(t),n!==null&&La(n),e.blockedOn=t,!1;n.shift()}return!0}function Ns(e,n,t){Fr(e)&&t.delete(n)}function Sh(){Hi=!1,pn!==null&&Fr(pn)&&(pn=null),fn!==null&&Fr(fn)&&(fn=null),gn!==null&&Fr(gn)&&(gn=null),$t.forEach(Ns),qt.forEach(Ns)}function Mt(e,n){e.blockedOn===n&&(e.blockedOn=null,Hi||(Hi=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Sh)))}function Kt(e){function n(o){return Mt(o,e)}if(0<Ar.length){Mt(Ar[0],e);for(var t=1;t<Ar.length;t++){var r=Ar[t];r.blockedOn===e&&(r.blockedOn=null)}}for(pn!==null&&Mt(pn,e),fn!==null&&Mt(fn,e),gn!==null&&Mt(gn,e),$t.forEach(n),qt.forEach(n),t=0;t<ln.length;t++)r=ln[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<ln.length&&(t=ln[0],t.blockedOn===null);)zu(t),t.blockedOn===null&&ln.shift()}var dt=rn.ReactCurrentBatchConfig,ro=!0;function xh(e,n,t,r){var o=z,i=dt.transition;dt.transition=null;try{z=1,Oa(e,n,t,r)}finally{z=o,dt.transition=i}}function bh(e,n,t,r){var o=z,i=dt.transition;dt.transition=null;try{z=4,Oa(e,n,t,r)}finally{z=o,dt.transition=i}}function Oa(e,n,t,r){if(ro){var o=Fi(e,n,t,r);if(o===null)si(e,n,r,oo,t),js(e,r);else if(Ph(o,e,n,t,r))r.stopPropagation();else if(js(e,r),n&4&&-1<kh.indexOf(e)){for(;o!==null;){var i=pr(o);if(i!==null&&ju(i),i=Fi(e,n,t,r),i===null&&si(e,n,r,oo,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else si(e,n,r,null,t)}}var oo=null;function Fi(e,n,t,r){if(oo=null,e=Va(r),e=Ln(e),e!==null)if(n=Bn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=xu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return oo=e,null}function Iu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ch()){case ja:return 1;case Mu:return 4;case no:case hh:return 16;case Tu:return 536870912;default:return 16}default:return 16}}var dn=null,za=null,Dr=null;function Ru(){if(Dr)return Dr;var e,n=za,t=n.length,r,o="value"in dn?dn.value:dn.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===o[i-r];r++);return Dr=o.slice(e,1<r?1-r:void 0)}function _r(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function Ls(){return!1}function Ce(e){function n(t,r,o,i,a){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Cr:Ls,this.isPropagationStopped=Ls,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),n}var Pt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ia=Ce(Pt),hr=B({},Pt,{view:0,detail:0}),Ah=Ce(hr),Jo,Xo,Tt,Mo=B({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ra,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tt&&(Tt&&e.type==="mousemove"?(Jo=e.screenX-Tt.screenX,Xo=e.screenY-Tt.screenY):Xo=Jo=0,Tt=e),Jo)},movementY:function(e){return"movementY"in e?e.movementY:Xo}}),Os=Ce(Mo),Ch=B({},Mo,{dataTransfer:0}),Mh=Ce(Ch),Th=B({},hr,{relatedTarget:0}),ei=Ce(Th),Eh=B({},Pt,{animationName:0,elapsedTime:0,pseudoElement:0}),Vh=Ce(Eh),jh=B({},Pt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nh=Ce(jh),Lh=B({},Pt,{data:0}),zs=Ce(Lh),Oh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ih={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ih[e])?!!n[e]:!1}function Ra(){return Rh}var Uh=B({},hr,{key:function(e){if(e.key){var n=Oh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ra,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wh=Ce(Uh),Hh=B({},Mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Is=Ce(Hh),Fh=B({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ra}),Dh=Ce(Fh),_h=B({},Pt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bh=Ce(_h),Gh=B({},Mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yh=Ce(Gh),Zh=[9,13,27,32],Ua=Xe&&"CompositionEvent"in window,Ut=null;Xe&&"documentMode"in document&&(Ut=document.documentMode);var $h=Xe&&"TextEvent"in window&&!Ut,Uu=Xe&&(!Ua||Ut&&8<Ut&&11>=Ut),Rs=" ",Us=!1;function Wu(e,n){switch(e){case"keyup":return Zh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function qh(e,n){switch(e){case"compositionend":return Hu(n);case"keypress":return n.which!==32?null:(Us=!0,Rs);case"textInput":return e=n.data,e===Rs&&Us?null:e;default:return null}}function Kh(e,n){if(Qn)return e==="compositionend"||!Ua&&Wu(e,n)?(e=Ru(),Dr=za=dn=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Uu&&n.locale!=="ko"?null:n.data;default:return null}}var Qh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ws(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Qh[e.type]:n==="textarea"}function Fu(e,n,t,r){vu(r),n=io(n,"onChange"),0<n.length&&(t=new Ia("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Wt=null,Qt=null;function Jh(e){Ju(e,0)}function To(e){var n=et(e);if(cu(n))return e}function Xh(e,n){if(e==="change")return n}var Du=!1;if(Xe){var ni;if(Xe){var ti="oninput"in document;if(!ti){var Hs=document.createElement("div");Hs.setAttribute("oninput","return;"),ti=typeof Hs.oninput=="function"}ni=ti}else ni=!1;Du=ni&&(!document.documentMode||9<document.documentMode)}function Fs(){Wt&&(Wt.detachEvent("onpropertychange",_u),Qt=Wt=null)}function _u(e){if(e.propertyName==="value"&&To(Qt)){var n=[];Fu(n,Qt,e,Va(e)),Su(Jh,n)}}function ep(e,n,t){e==="focusin"?(Fs(),Wt=n,Qt=t,Wt.attachEvent("onpropertychange",_u)):e==="focusout"&&Fs()}function np(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return To(Qt)}function tp(e,n){if(e==="click")return To(n)}function rp(e,n){if(e==="input"||e==="change")return To(n)}function op(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fe=typeof Object.is=="function"?Object.is:op;function Jt(e,n){if(Fe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!xi.call(n,o)||!Fe(e[o],n[o]))return!1}return!0}function Ds(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _s(e,n){var t=Ds(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ds(t)}}function Bu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Bu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gu(){for(var e=window,n=Jr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Jr(e.document)}return n}function Wa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ip(e){var n=Gu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Bu(t.ownerDocument.documentElement,t)){if(r!==null&&Wa(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=_s(t,i);var a=_s(t,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ap=Xe&&"documentMode"in document&&11>=document.documentMode,Jn=null,Di=null,Ht=null,_i=!1;function Bs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;_i||Jn==null||Jn!==Jr(r)||(r=Jn,"selectionStart"in r&&Wa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ht&&Jt(Ht,r)||(Ht=r,r=io(Di,"onSelect"),0<r.length&&(n=new Ia("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Jn)))}function Mr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Xn={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionend:Mr("Transition","TransitionEnd")},ri={},Yu={};Xe&&(Yu=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Eo(e){if(ri[e])return ri[e];if(!Xn[e])return e;var n=Xn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Yu)return ri[e]=n[t];return e}var Zu=Eo("animationend"),$u=Eo("animationiteration"),qu=Eo("animationstart"),Ku=Eo("transitionend"),Qu=new Map,Gs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,n){Qu.set(e,n),_n(n,[e])}for(var oi=0;oi<Gs.length;oi++){var ii=Gs[oi],sp=ii.toLowerCase(),lp=ii[0].toUpperCase()+ii.slice(1);bn(sp,"on"+lp)}bn(Zu,"onAnimationEnd");bn($u,"onAnimationIteration");bn(qu,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(Ku,"onTransitionEnd");pt("onMouseEnter",["mouseout","mouseover"]);pt("onMouseLeave",["mouseout","mouseover"]);pt("onPointerEnter",["pointerout","pointerover"]);pt("onPointerLeave",["pointerout","pointerover"]);_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_n("onBeforeInput",["compositionend","keypress","textInput","paste"]);_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),up=new Set("cancel close invalid load scroll toggle".split(" ").concat(zt));function Ys(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,sh(r,n,void 0,e),e.currentTarget=null}function Ju(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;Ys(o,s,u),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;Ys(o,s,u),i=l}}}if(eo)throw e=Ui,eo=!1,Ui=null,e}function U(e,n){var t=n[$i];t===void 0&&(t=n[$i]=new Set);var r=e+"__bubble";t.has(r)||(Xu(n,e,2,!1),t.add(r))}function ai(e,n,t){var r=0;n&&(r|=4),Xu(t,e,r,n)}var Tr="_reactListening"+Math.random().toString(36).slice(2);function Xt(e){if(!e[Tr]){e[Tr]=!0,au.forEach(function(t){t!=="selectionchange"&&(up.has(t)||ai(t,!1,e),ai(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Tr]||(n[Tr]=!0,ai("selectionchange",!1,n))}}function Xu(e,n,t,r){switch(Iu(n)){case 1:var o=xh;break;case 4:o=bh;break;default:o=Oa}t=o.bind(null,n,t,e),o=void 0,!Ri||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function si(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Ln(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Su(function(){var u=i,f=Va(t),c=[];e:{var m=Qu.get(e);if(m!==void 0){var y=Ia,v=e;switch(e){case"keypress":if(_r(t)===0)break e;case"keydown":case"keyup":y=Wh;break;case"focusin":v="focus",y=ei;break;case"focusout":v="blur",y=ei;break;case"beforeblur":case"afterblur":y=ei;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Mh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Dh;break;case Zu:case $u:case qu:y=Vh;break;case Ku:y=Bh;break;case"scroll":y=Ah;break;case"wheel":y=Yh;break;case"copy":case"cut":case"paste":y=Nh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Is}var k=(n&4)!==0,A=!k&&e==="scroll",p=k?m!==null?m+"Capture":null:m;k=[];for(var d=u,g;d!==null;){g=d;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,p!==null&&(w=Zt(d,p),w!=null&&k.push(er(d,w,g)))),A)break;d=d.return}0<k.length&&(m=new y(m,v,null,t,f),c.push({event:m,listeners:k}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&t!==zi&&(v=t.relatedTarget||t.fromElement)&&(Ln(v)||v[en]))break e;if((y||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,y?(v=t.relatedTarget||t.toElement,y=u,v=v?Ln(v):null,v!==null&&(A=Bn(v),v!==A||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(k=Os,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=Is,w="onPointerLeave",p="onPointerEnter",d="pointer"),A=y==null?m:et(y),g=v==null?m:et(v),m=new k(w,d+"leave",y,t,f),m.target=A,m.relatedTarget=g,w=null,Ln(f)===u&&(k=new k(p,d+"enter",v,t,f),k.target=g,k.relatedTarget=A,w=k),A=w,y&&v)n:{for(k=y,p=v,d=0,g=k;g;g=$n(g))d++;for(g=0,w=p;w;w=$n(w))g++;for(;0<d-g;)k=$n(k),d--;for(;0<g-d;)p=$n(p),g--;for(;d--;){if(k===p||p!==null&&k===p.alternate)break n;k=$n(k),p=$n(p)}k=null}else k=null;y!==null&&Zs(c,m,y,k,!1),v!==null&&A!==null&&Zs(c,A,v,k,!0)}}e:{if(m=u?et(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var b=Xh;else if(Ws(m))if(Du)b=rp;else{b=np;var x=ep}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=tp);if(b&&(b=b(e,u))){Fu(c,b,t,f);break e}x&&x(e,m,u),e==="focusout"&&(x=m._wrapperState)&&x.controlled&&m.type==="number"&&Vi(m,"number",m.value)}switch(x=u?et(u):window,e){case"focusin":(Ws(x)||x.contentEditable==="true")&&(Jn=x,Di=u,Ht=null);break;case"focusout":Ht=Di=Jn=null;break;case"mousedown":_i=!0;break;case"contextmenu":case"mouseup":case"dragend":_i=!1,Bs(c,t,f);break;case"selectionchange":if(ap)break;case"keydown":case"keyup":Bs(c,t,f)}var T;if(Ua)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Qn?Wu(e,t)&&(E="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(Uu&&t.locale!=="ko"&&(Qn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Qn&&(T=Ru()):(dn=f,za="value"in dn?dn.value:dn.textContent,Qn=!0)),x=io(u,E),0<x.length&&(E=new zs(E,e,null,t,f),c.push({event:E,listeners:x}),T?E.data=T:(T=Hu(t),T!==null&&(E.data=T)))),(T=$h?qh(e,t):Kh(e,t))&&(u=io(u,"onBeforeInput"),0<u.length&&(f=new zs("onBeforeInput","beforeinput",null,t,f),c.push({event:f,listeners:u}),f.data=T))}Ju(c,n)})}function er(e,n,t){return{instance:e,listener:n,currentTarget:t}}function io(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Zt(e,t),i!=null&&r.unshift(er(e,i,o)),i=Zt(e,n),i!=null&&r.push(er(e,i,o))),e=e.return}return r}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zs(e,n,t,r,o){for(var i=n._reactName,a=[];t!==null&&t!==r;){var s=t,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=Zt(t,i),l!=null&&a.unshift(er(t,l,s))):o||(l=Zt(t,i),l!=null&&a.push(er(t,l,s)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var dp=/\r\n?/g,cp=/\u0000|\uFFFD/g;function $s(e){return(typeof e=="string"?e:""+e).replace(dp,`
`).replace(cp,"")}function Er(e,n,t){if(n=$s(n),$s(e)!==n&&t)throw Error(S(425))}function ao(){}var Bi=null,Gi=null;function Yi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zi=typeof setTimeout=="function"?setTimeout:void 0,hp=typeof clearTimeout=="function"?clearTimeout:void 0,qs=typeof Promise=="function"?Promise:void 0,pp=typeof queueMicrotask=="function"?queueMicrotask:typeof qs<"u"?function(e){return qs.resolve(null).then(e).catch(fp)}:Zi;function fp(e){setTimeout(function(){throw e})}function li(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Kt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Kt(n)}function mn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ks(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var St=Math.random().toString(36).slice(2),Be="__reactFiber$"+St,nr="__reactProps$"+St,en="__reactContainer$"+St,$i="__reactEvents$"+St,gp="__reactListeners$"+St,mp="__reactHandles$"+St;function Ln(e){var n=e[Be];if(n)return n;for(var t=e.parentNode;t;){if(n=t[en]||t[Be]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ks(e);e!==null;){if(t=e[Be])return t;e=Ks(e)}return n}e=t,t=e.parentNode}return null}function pr(e){return e=e[Be]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function et(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Vo(e){return e[nr]||null}var qi=[],nt=-1;function An(e){return{current:e}}function W(e){0>nt||(e.current=qi[nt],qi[nt]=null,nt--)}function R(e,n){nt++,qi[nt]=e.current,e.current=n}var xn={},ue=An(xn),ve=An(!1),Un=xn;function ft(e,n){var t=e.type.contextTypes;if(!t)return xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function we(e){return e=e.childContextTypes,e!=null}function so(){W(ve),W(ue)}function Qs(e,n,t){if(ue.current!==xn)throw Error(S(168));R(ue,n),R(ve,t)}function ed(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(S(108,eh(e)||"Unknown",o));return B({},t,r)}function lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xn,Un=ue.current,R(ue,e),R(ve,ve.current),!0}function Js(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=ed(e,n,Un),r.__reactInternalMemoizedMergedChildContext=e,W(ve),W(ue),R(ue,e)):W(ve),R(ve,t)}var qe=null,jo=!1,ui=!1;function nd(e){qe===null?qe=[e]:qe.push(e)}function yp(e){jo=!0,nd(e)}function Cn(){if(!ui&&qe!==null){ui=!0;var e=0,n=z;try{var t=qe;for(z=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}qe=null,jo=!1}catch(o){throw qe!==null&&(qe=qe.slice(e+1)),Cu(ja,Cn),o}finally{z=n,ui=!1}}return null}var tt=[],rt=0,uo=null,co=0,Me=[],Te=0,Wn=null,Ke=1,Qe="";function jn(e,n){tt[rt++]=co,tt[rt++]=uo,uo=e,co=n}function td(e,n,t){Me[Te++]=Ke,Me[Te++]=Qe,Me[Te++]=Wn,Wn=e;var r=Ke;e=Qe;var o=32-We(r)-1;r&=~(1<<o),t+=1;var i=32-We(n)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Ke=1<<32-We(n)+o|t<<o|r,Qe=i+e}else Ke=1<<i|t<<o|r,Qe=e}function Ha(e){e.return!==null&&(jn(e,1),td(e,1,0))}function Fa(e){for(;e===uo;)uo=tt[--rt],tt[rt]=null,co=tt[--rt],tt[rt]=null;for(;e===Wn;)Wn=Me[--Te],Me[Te]=null,Qe=Me[--Te],Me[Te]=null,Ke=Me[--Te],Me[Te]=null}var xe=null,Se=null,H=!1,Ue=null;function rd(e,n){var t=Ee(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Xs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,xe=e,Se=mn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,xe=e,Se=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Wn!==null?{id:Ke,overflow:Qe}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ee(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,xe=e,Se=null,!0):!1;default:return!1}}function Ki(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qi(e){if(H){var n=Se;if(n){var t=n;if(!Xs(e,n)){if(Ki(e))throw Error(S(418));n=mn(t.nextSibling);var r=xe;n&&Xs(e,n)?rd(r,t):(e.flags=e.flags&-4097|2,H=!1,xe=e)}}else{if(Ki(e))throw Error(S(418));e.flags=e.flags&-4097|2,H=!1,xe=e}}}function el(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function Vr(e){if(e!==xe)return!1;if(!H)return el(e),H=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Yi(e.type,e.memoizedProps)),n&&(n=Se)){if(Ki(e))throw od(),Error(S(418));for(;n;)rd(e,n),n=mn(n.nextSibling)}if(el(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Se=mn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Se=null}}else Se=xe?mn(e.stateNode.nextSibling):null;return!0}function od(){for(var e=Se;e;)e=mn(e.nextSibling)}function gt(){Se=xe=null,H=!1}function Da(e){Ue===null?Ue=[e]:Ue.push(e)}var vp=rn.ReactCurrentBatchConfig;function Et(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function jr(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function nl(e){var n=e._init;return n(e._payload)}function id(e){function n(p,d){if(e){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function t(p,d){if(!e)return null;for(;d!==null;)n(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function o(p,d){return p=kn(p,d),p.index=0,p.sibling=null,p}function i(p,d,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,g,w){return d===null||d.tag!==6?(d=mi(g,p.mode,w),d.return=p,d):(d=o(d,g),d.return=p,d)}function l(p,d,g,w){var b=g.type;return b===Kn?f(p,d,g.props.children,w,g.key):d!==null&&(d.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===an&&nl(b)===d.type)?(w=o(d,g.props),w.ref=Et(p,d,g),w.return=p,w):(w=Kr(g.type,g.key,g.props,null,p.mode,w),w.ref=Et(p,d,g),w.return=p,w)}function u(p,d,g,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=yi(g,p.mode,w),d.return=p,d):(d=o(d,g.children||[]),d.return=p,d)}function f(p,d,g,w,b){return d===null||d.tag!==7?(d=Rn(g,p.mode,w,b),d.return=p,d):(d=o(d,g),d.return=p,d)}function c(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=mi(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case kr:return g=Kr(d.type,d.key,d.props,null,p.mode,g),g.ref=Et(p,null,d),g.return=p,g;case qn:return d=yi(d,p.mode,g),d.return=p,d;case an:var w=d._init;return c(p,w(d._payload),g)}if(Lt(d)||bt(d))return d=Rn(d,p.mode,g,null),d.return=p,d;jr(p,d)}return null}function m(p,d,g,w){var b=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:s(p,d,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case kr:return g.key===b?l(p,d,g,w):null;case qn:return g.key===b?u(p,d,g,w):null;case an:return b=g._init,m(p,d,b(g._payload),w)}if(Lt(g)||bt(g))return b!==null?null:f(p,d,g,w,null);jr(p,g)}return null}function y(p,d,g,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(g)||null,s(d,p,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case kr:return p=p.get(w.key===null?g:w.key)||null,l(d,p,w,b);case qn:return p=p.get(w.key===null?g:w.key)||null,u(d,p,w,b);case an:var x=w._init;return y(p,d,g,x(w._payload),b)}if(Lt(w)||bt(w))return p=p.get(g)||null,f(d,p,w,b,null);jr(d,w)}return null}function v(p,d,g,w){for(var b=null,x=null,T=d,E=d=0,I=null;T!==null&&E<g.length;E++){T.index>E?(I=T,T=null):I=T.sibling;var N=m(p,T,g[E],w);if(N===null){T===null&&(T=I);break}e&&T&&N.alternate===null&&n(p,T),d=i(N,d,E),x===null?b=N:x.sibling=N,x=N,T=I}if(E===g.length)return t(p,T),H&&jn(p,E),b;if(T===null){for(;E<g.length;E++)T=c(p,g[E],w),T!==null&&(d=i(T,d,E),x===null?b=T:x.sibling=T,x=T);return H&&jn(p,E),b}for(T=r(p,T);E<g.length;E++)I=y(T,p,E,g[E],w),I!==null&&(e&&I.alternate!==null&&T.delete(I.key===null?E:I.key),d=i(I,d,E),x===null?b=I:x.sibling=I,x=I);return e&&T.forEach(function(q){return n(p,q)}),H&&jn(p,E),b}function k(p,d,g,w){var b=bt(g);if(typeof b!="function")throw Error(S(150));if(g=b.call(g),g==null)throw Error(S(151));for(var x=b=null,T=d,E=d=0,I=null,N=g.next();T!==null&&!N.done;E++,N=g.next()){T.index>E?(I=T,T=null):I=T.sibling;var q=m(p,T,N.value,w);if(q===null){T===null&&(T=I);break}e&&T&&q.alternate===null&&n(p,T),d=i(q,d,E),x===null?b=q:x.sibling=q,x=q,T=I}if(N.done)return t(p,T),H&&jn(p,E),b;if(T===null){for(;!N.done;E++,N=g.next())N=c(p,N.value,w),N!==null&&(d=i(N,d,E),x===null?b=N:x.sibling=N,x=N);return H&&jn(p,E),b}for(T=r(p,T);!N.done;E++,N=g.next())N=y(T,p,E,N.value,w),N!==null&&(e&&N.alternate!==null&&T.delete(N.key===null?E:N.key),d=i(N,d,E),x===null?b=N:x.sibling=N,x=N);return e&&T.forEach(function(K){return n(p,K)}),H&&jn(p,E),b}function A(p,d,g,w){if(typeof g=="object"&&g!==null&&g.type===Kn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case kr:e:{for(var b=g.key,x=d;x!==null;){if(x.key===b){if(b=g.type,b===Kn){if(x.tag===7){t(p,x.sibling),d=o(x,g.props.children),d.return=p,p=d;break e}}else if(x.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===an&&nl(b)===x.type){t(p,x.sibling),d=o(x,g.props),d.ref=Et(p,x,g),d.return=p,p=d;break e}t(p,x);break}else n(p,x);x=x.sibling}g.type===Kn?(d=Rn(g.props.children,p.mode,w,g.key),d.return=p,p=d):(w=Kr(g.type,g.key,g.props,null,p.mode,w),w.ref=Et(p,d,g),w.return=p,p=w)}return a(p);case qn:e:{for(x=g.key;d!==null;){if(d.key===x)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){t(p,d.sibling),d=o(d,g.children||[]),d.return=p,p=d;break e}else{t(p,d);break}else n(p,d);d=d.sibling}d=yi(g,p.mode,w),d.return=p,p=d}return a(p);case an:return x=g._init,A(p,d,x(g._payload),w)}if(Lt(g))return v(p,d,g,w);if(bt(g))return k(p,d,g,w);jr(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(t(p,d.sibling),d=o(d,g),d.return=p,p=d):(t(p,d),d=mi(g,p.mode,w),d.return=p,p=d),a(p)):t(p,d)}return A}var mt=id(!0),ad=id(!1),ho=An(null),po=null,ot=null,_a=null;function Ba(){_a=ot=po=null}function Ga(e){var n=ho.current;W(ho),e._currentValue=n}function Ji(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ct(e,n){po=e,_a=ot=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(me=!0),e.firstContext=null)}function je(e){var n=e._currentValue;if(_a!==e)if(e={context:e,memoizedValue:n,next:null},ot===null){if(po===null)throw Error(S(308));ot=e,po.dependencies={lanes:0,firstContext:e}}else ot=ot.next=e;return n}var On=null;function Ya(e){On===null?On=[e]:On.push(e)}function sd(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Ya(n)):(t.next=o.next,o.next=t),n.interleaved=t,nn(e,r)}function nn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var sn=!1;function Za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ld(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function yn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,nn(e,t)}return o=r.interleaved,o===null?(n.next=n,Ya(r)):(n.next=o.next,o.next=n),r.interleaved=n,nn(e,t)}function Br(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Na(e,t)}}function tl(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function fo(e,n,t,r){var o=e.updateQueue;sn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=l))}if(i!==null){var c=o.baseState;a=0,f=u=l=null,s=i;do{var m=s.lane,y=s.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,k=s;switch(m=n,y=t,k.tag){case 1:if(v=k.payload,typeof v=="function"){c=v.call(y,c,m);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,m=typeof v=="function"?v.call(y,c,m):v,m==null)break e;c=B({},c,m);break e;case 2:sn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else y={eventTime:y,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=y,l=c):f=f.next=y,a|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(f===null&&(l=c),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=f,n=o.shared.interleaved,n!==null){o=n;do a|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);Fn|=a,e.lanes=a,e.memoizedState=c}}function rl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var fr={},Ye=An(fr),tr=An(fr),rr=An(fr);function zn(e){if(e===fr)throw Error(S(174));return e}function $a(e,n){switch(R(rr,n),R(tr,e),R(Ye,fr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ni(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ni(n,e)}W(Ye),R(Ye,n)}function yt(){W(Ye),W(tr),W(rr)}function ud(e){zn(rr.current);var n=zn(Ye.current),t=Ni(n,e.type);n!==t&&(R(tr,e),R(Ye,t))}function qa(e){tr.current===e&&(W(Ye),W(tr))}var D=An(0);function go(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var di=[];function Ka(){for(var e=0;e<di.length;e++)di[e]._workInProgressVersionPrimary=null;di.length=0}var Gr=rn.ReactCurrentDispatcher,ci=rn.ReactCurrentBatchConfig,Hn=0,_=null,Q=null,ne=null,mo=!1,Ft=!1,or=0,wp=0;function ae(){throw Error(S(321))}function Qa(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Fe(e[t],n[t]))return!1;return!0}function Ja(e,n,t,r,o,i){if(Hn=i,_=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Gr.current=e===null||e.memoizedState===null?xp:bp,e=t(r,o),Ft){i=0;do{if(Ft=!1,or=0,25<=i)throw Error(S(301));i+=1,ne=Q=null,n.updateQueue=null,Gr.current=Ap,e=t(r,o)}while(Ft)}if(Gr.current=yo,n=Q!==null&&Q.next!==null,Hn=0,ne=Q=_=null,mo=!1,n)throw Error(S(300));return e}function Xa(){var e=or!==0;return or=0,e}function _e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?_.memoizedState=ne=e:ne=ne.next=e,ne}function Ne(){if(Q===null){var e=_.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var n=ne===null?_.memoizedState:ne.next;if(n!==null)ne=n,Q=e;else{if(e===null)throw Error(S(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},ne===null?_.memoizedState=ne=e:ne=ne.next=e}return ne}function ir(e,n){return typeof n=="function"?n(e):n}function hi(e){var n=Ne(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=Q,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,u=i;do{var f=u.lane;if((Hn&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=c,a=r):l=l.next=c,_.lanes|=f,Fn|=f}u=u.next}while(u!==null&&u!==i);l===null?a=r:l.next=s,Fe(r,n.memoizedState)||(me=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=l,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,_.lanes|=i,Fn|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function pi(e){var n=Ne(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Fe(i,n.memoizedState)||(me=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function dd(){}function cd(e,n){var t=_,r=Ne(),o=n(),i=!Fe(r.memoizedState,o);if(i&&(r.memoizedState=o,me=!0),r=r.queue,es(fd.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ne!==null&&ne.memoizedState.tag&1){if(t.flags|=2048,ar(9,pd.bind(null,t,r,o,n),void 0,null),te===null)throw Error(S(349));Hn&30||hd(t,n,o)}return o}function hd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=_.updateQueue,n===null?(n={lastEffect:null,stores:null},_.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function pd(e,n,t,r){n.value=t,n.getSnapshot=r,gd(n)&&md(e)}function fd(e,n,t){return t(function(){gd(n)&&md(e)})}function gd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Fe(e,t)}catch{return!0}}function md(e){var n=nn(e,1);n!==null&&He(n,e,1,-1)}function ol(e){var n=_e();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},n.queue=e,e=e.dispatch=Sp.bind(null,_,e),[n.memoizedState,e]}function ar(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=_.updateQueue,n===null?(n={lastEffect:null,stores:null},_.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function yd(){return Ne().memoizedState}function Yr(e,n,t,r){var o=_e();_.flags|=e,o.memoizedState=ar(1|n,t,void 0,r===void 0?null:r)}function No(e,n,t,r){var o=Ne();r=r===void 0?null:r;var i=void 0;if(Q!==null){var a=Q.memoizedState;if(i=a.destroy,r!==null&&Qa(r,a.deps)){o.memoizedState=ar(n,t,i,r);return}}_.flags|=e,o.memoizedState=ar(1|n,t,i,r)}function il(e,n){return Yr(8390656,8,e,n)}function es(e,n){return No(2048,8,e,n)}function vd(e,n){return No(4,2,e,n)}function wd(e,n){return No(4,4,e,n)}function kd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Pd(e,n,t){return t=t!=null?t.concat([e]):null,No(4,4,kd.bind(null,n,e),t)}function ns(){}function Sd(e,n){var t=Ne();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Qa(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function xd(e,n){var t=Ne();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Qa(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function bd(e,n,t){return Hn&21?(Fe(t,n)||(t=Eu(),_.lanes|=t,Fn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=t)}function kp(e,n){var t=z;z=t!==0&&4>t?t:4,e(!0);var r=ci.transition;ci.transition={};try{e(!1),n()}finally{z=t,ci.transition=r}}function Ad(){return Ne().memoizedState}function Pp(e,n,t){var r=wn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Cd(e))Md(n,t);else if(t=sd(e,n,t,r),t!==null){var o=he();He(t,e,r,o),Td(t,n,r)}}function Sp(e,n,t){var r=wn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Cd(e))Md(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,s=i(a,t);if(o.hasEagerState=!0,o.eagerState=s,Fe(s,a)){var l=n.interleaved;l===null?(o.next=o,Ya(n)):(o.next=l.next,l.next=o),n.interleaved=o;return}}catch{}finally{}t=sd(e,n,o,r),t!==null&&(o=he(),He(t,e,r,o),Td(t,n,r))}}function Cd(e){var n=e.alternate;return e===_||n!==null&&n===_}function Md(e,n){Ft=mo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Td(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Na(e,t)}}var yo={readContext:je,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},xp={readContext:je,useCallback:function(e,n){return _e().memoizedState=[e,n===void 0?null:n],e},useContext:je,useEffect:il,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Yr(4194308,4,kd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Yr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Yr(4,2,e,n)},useMemo:function(e,n){var t=_e();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=_e();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Pp.bind(null,_,e),[r.memoizedState,e]},useRef:function(e){var n=_e();return e={current:e},n.memoizedState=e},useState:ol,useDebugValue:ns,useDeferredValue:function(e){return _e().memoizedState=e},useTransition:function(){var e=ol(!1),n=e[0];return e=kp.bind(null,e[1]),_e().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=_,o=_e();if(H){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),te===null)throw Error(S(349));Hn&30||hd(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,il(fd.bind(null,r,i,e),[e]),r.flags|=2048,ar(9,pd.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=_e(),n=te.identifierPrefix;if(H){var t=Qe,r=Ke;t=(r&~(1<<32-We(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=or++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=wp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},bp={readContext:je,useCallback:Sd,useContext:je,useEffect:es,useImperativeHandle:Pd,useInsertionEffect:vd,useLayoutEffect:wd,useMemo:xd,useReducer:hi,useRef:yd,useState:function(){return hi(ir)},useDebugValue:ns,useDeferredValue:function(e){var n=Ne();return bd(n,Q.memoizedState,e)},useTransition:function(){var e=hi(ir)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:dd,useSyncExternalStore:cd,useId:Ad,unstable_isNewReconciler:!1},Ap={readContext:je,useCallback:Sd,useContext:je,useEffect:es,useImperativeHandle:Pd,useInsertionEffect:vd,useLayoutEffect:wd,useMemo:xd,useReducer:pi,useRef:yd,useState:function(){return pi(ir)},useDebugValue:ns,useDeferredValue:function(e){var n=Ne();return Q===null?n.memoizedState=e:bd(n,Q.memoizedState,e)},useTransition:function(){var e=pi(ir)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:dd,useSyncExternalStore:cd,useId:Ad,unstable_isNewReconciler:!1};function Ie(e,n){if(e&&e.defaultProps){n=B({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Xi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:B({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Lo={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=he(),o=wn(e),i=Je(r,o);i.payload=n,t!=null&&(i.callback=t),n=yn(e,i,o),n!==null&&(He(n,e,o,r),Br(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=he(),o=wn(e),i=Je(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=yn(e,i,o),n!==null&&(He(n,e,o,r),Br(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=he(),r=wn(e),o=Je(t,r);o.tag=2,n!=null&&(o.callback=n),n=yn(e,o,r),n!==null&&(He(n,e,r,t),Br(n,e,r))}};function al(e,n,t,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!Jt(t,r)||!Jt(o,i):!0}function Ed(e,n,t){var r=!1,o=xn,i=n.contextType;return typeof i=="object"&&i!==null?i=je(i):(o=we(n)?Un:ue.current,r=n.contextTypes,i=(r=r!=null)?ft(e,o):xn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Lo,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function sl(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Lo.enqueueReplaceState(n,n.state,null)}function ea(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Za(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=je(i):(i=we(n)?Un:ue.current,o.context=ft(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Xi(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Lo.enqueueReplaceState(o,o.state,null),fo(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function vt(e,n){try{var t="",r=n;do t+=Xc(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function fi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function na(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Cp=typeof WeakMap=="function"?WeakMap:Map;function Vd(e,n,t){t=Je(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){wo||(wo=!0,ca=r),na(e,n)},t}function jd(e,n,t){t=Je(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){na(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){na(e,n),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function ll(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Cp;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Hp.bind(null,e,n,t),n.then(e,e))}function ul(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function dl(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Je(-1,1),n.tag=2,yn(t,n,1))),t.lanes|=1),e)}var Mp=rn.ReactCurrentOwner,me=!1;function ce(e,n,t,r){n.child=e===null?ad(n,null,t,r):mt(n,e.child,t,r)}function cl(e,n,t,r,o){t=t.render;var i=n.ref;return ct(n,o),r=Ja(e,n,t,r,i,o),t=Xa(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,tn(e,n,o)):(H&&t&&Ha(n),n.flags|=1,ce(e,n,r,o),n.child)}function hl(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!us(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Nd(e,n,i,r,o)):(e=Kr(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:Jt,t(a,r)&&e.ref===n.ref)return tn(e,n,o)}return n.flags|=1,e=kn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Nd(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(Jt(i,r)&&e.ref===n.ref)if(me=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(me=!0);else return n.lanes=e.lanes,tn(e,n,o)}return ta(e,n,t,r,o)}function Ld(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(at,Pe),Pe|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,R(at,Pe),Pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,R(at,Pe),Pe|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,R(at,Pe),Pe|=r;return ce(e,n,o,t),n.child}function Od(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ta(e,n,t,r,o){var i=we(t)?Un:ue.current;return i=ft(n,i),ct(n,o),t=Ja(e,n,t,r,i,o),r=Xa(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,tn(e,n,o)):(H&&r&&Ha(n),n.flags|=1,ce(e,n,t,o),n.child)}function pl(e,n,t,r,o){if(we(t)){var i=!0;lo(n)}else i=!1;if(ct(n,o),n.stateNode===null)Zr(e,n),Ed(n,t,r),ea(n,t,r,o),r=!0;else if(e===null){var a=n.stateNode,s=n.memoizedProps;a.props=s;var l=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=je(u):(u=we(t)?Un:ue.current,u=ft(n,u));var f=t.getDerivedStateFromProps,c=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&sl(n,a,r,u),sn=!1;var m=n.memoizedState;a.state=m,fo(n,r,a,o),l=n.memoizedState,s!==r||m!==l||ve.current||sn?(typeof f=="function"&&(Xi(n,t,f,r),l=n.memoizedState),(s=sn||al(n,t,s,r,m,l,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,ld(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:Ie(n.type,s),a.props=u,c=n.pendingProps,m=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=je(l):(l=we(t)?Un:ue.current,l=ft(n,l));var y=t.getDerivedStateFromProps;(f=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==c||m!==l)&&sl(n,a,r,l),sn=!1,m=n.memoizedState,a.state=m,fo(n,r,a,o);var v=n.memoizedState;s!==c||m!==v||ve.current||sn?(typeof y=="function"&&(Xi(n,t,y,r),v=n.memoizedState),(u=sn||al(n,t,u,r,m,v,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,l)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),a.props=r,a.state=v,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return ra(e,n,t,r,i,o)}function ra(e,n,t,r,o,i){Od(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return o&&Js(n,t,!1),tn(e,n,i);r=n.stateNode,Mp.current=n;var s=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=mt(n,e.child,null,i),n.child=mt(n,null,s,i)):ce(e,n,s,i),n.memoizedState=r.state,o&&Js(n,t,!0),n.child}function zd(e){var n=e.stateNode;n.pendingContext?Qs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Qs(e,n.context,!1),$a(e,n.containerInfo)}function fl(e,n,t,r,o){return gt(),Da(o),n.flags|=256,ce(e,n,t,r),n.child}var oa={dehydrated:null,treeContext:null,retryLane:0};function ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function Id(e,n,t){var r=n.pendingProps,o=D.current,i=!1,a=(n.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),R(D,o&1),e===null)return Qi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Io(a,r,0,null),e=Rn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=ia(t),n.memoizedState=oa,e):ts(n,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Tp(e,n,a,r,s,o,t);if(i){i=r.fallback,a=n.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=l,n.deletions=null):(r=kn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=kn(s,i):(i=Rn(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?ia(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=oa,r}return i=e.child,e=i.sibling,r=kn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ts(e,n){return n=Io({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Nr(e,n,t,r){return r!==null&&Da(r),mt(n,e.child,null,t),e=ts(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Tp(e,n,t,r,o,i,a){if(t)return n.flags&256?(n.flags&=-257,r=fi(Error(S(422))),Nr(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=Io({mode:"visible",children:r.children},o,0,null),i=Rn(i,o,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&mt(n,e.child,null,a),n.child.memoizedState=ia(a),n.memoizedState=oa,i);if(!(n.mode&1))return Nr(e,n,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(S(419)),r=fi(i,r,void 0),Nr(e,n,a,r)}if(s=(a&e.childLanes)!==0,me||s){if(r=te,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,nn(e,o),He(r,e,o,-1))}return ls(),r=fi(Error(S(421))),Nr(e,n,a,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Fp.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,Se=mn(o.nextSibling),xe=n,H=!0,Ue=null,e!==null&&(Me[Te++]=Ke,Me[Te++]=Qe,Me[Te++]=Wn,Ke=e.id,Qe=e.overflow,Wn=n),n=ts(n,r.children),n.flags|=4096,n)}function gl(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ji(e.return,n,t)}function gi(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function Rd(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(ce(e,n,r.children,t),r=D.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gl(e,t,n);else if(e.tag===19)gl(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(D,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&go(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),gi(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&go(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}gi(n,!0,t,null,i);break;case"together":gi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Zr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function tn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Fn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=kn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=kn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ep(e,n,t){switch(n.tag){case 3:zd(n),gt();break;case 5:ud(n);break;case 1:we(n.type)&&lo(n);break;case 4:$a(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;R(ho,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(R(D,D.current&1),n.flags|=128,null):t&n.child.childLanes?Id(e,n,t):(R(D,D.current&1),e=tn(e,n,t),e!==null?e.sibling:null);R(D,D.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Rd(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),R(D,D.current),r)break;return null;case 22:case 23:return n.lanes=0,Ld(e,n,t)}return tn(e,n,t)}var Ud,aa,Wd,Hd;Ud=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};aa=function(){};Wd=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,zn(Ye.current);var i=null;switch(t){case"input":o=Ti(e,o),r=Ti(e,r),i=[];break;case"select":o=B({},o,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":o=ji(e,o),r=ji(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ao)}Li(t,r);var a;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Gt.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(i||(i=[]),i.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Gt.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&U("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};Hd=function(e,n,t,r){t!==r&&(n.flags|=4)};function Vt(e,n){if(!H)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Vp(e,n,t){var r=n.pendingProps;switch(Fa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return we(n.type)&&so(),se(n),null;case 3:return r=n.stateNode,yt(),W(ve),W(ue),Ka(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ue!==null&&(fa(Ue),Ue=null))),aa(e,n),se(n),null;case 5:qa(n);var o=zn(rr.current);if(t=n.type,e!==null&&n.stateNode!=null)Wd(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return se(n),null}if(e=zn(Ye.current),Vr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Be]=n,r[nr]=i,e=(n.mode&1)!==0,t){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(o=0;o<zt.length;o++)U(zt[o],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":bs(r,i),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},U("invalid",r);break;case"textarea":Cs(r,i),U("invalid",r)}Li(t,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Er(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Er(r.textContent,s,e),o=["children",""+s]):Gt.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&U("scroll",r)}switch(t){case"input":Pr(r),As(r,i,!0);break;case"textarea":Pr(r),Ms(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ao)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[Be]=n,e[nr]=r,Ud(e,n,!1,!1),n.stateNode=e;e:{switch(a=Oi(t,r),t){case"dialog":U("cancel",e),U("close",e),o=r;break;case"iframe":case"object":case"embed":U("load",e),o=r;break;case"video":case"audio":for(o=0;o<zt.length;o++)U(zt[o],e);o=r;break;case"source":U("error",e),o=r;break;case"img":case"image":case"link":U("error",e),U("load",e),o=r;break;case"details":U("toggle",e),o=r;break;case"input":bs(e,r),o=Ti(e,r),U("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=B({},r,{value:void 0}),U("invalid",e);break;case"textarea":Cs(e,r),o=ji(e,r),U("invalid",e);break;default:o=r}Li(t,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?yu(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gu(e,l)):i==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Yt(e,l):typeof l=="number"&&Yt(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Gt.hasOwnProperty(i)?l!=null&&i==="onScroll"&&U("scroll",e):l!=null&&Ca(e,i,l,a))}switch(t){case"input":Pr(e),As(e,r,!1);break;case"textarea":Pr(e),Ms(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?st(e,!!r.multiple,i,!1):r.defaultValue!=null&&st(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ao)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)Hd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=zn(rr.current),zn(Ye.current),Vr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Be]=n,(i=r.nodeValue!==t)&&(e=xe,e!==null))switch(e.tag){case 3:Er(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Er(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Be]=n,n.stateNode=r}return se(n),null;case 13:if(W(D),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Se!==null&&n.mode&1&&!(n.flags&128))od(),gt(),n.flags|=98560,i=!1;else if(i=Vr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[Be]=n}else gt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),i=!1}else Ue!==null&&(fa(Ue),Ue=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||D.current&1?J===0&&(J=3):ls())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return yt(),aa(e,n),e===null&&Xt(n.stateNode.containerInfo),se(n),null;case 10:return Ga(n.type._context),se(n),null;case 17:return we(n.type)&&so(),se(n),null;case 19:if(W(D),i=n.memoizedState,i===null)return se(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)Vt(i,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=go(e),a!==null){for(n.flags|=128,Vt(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return R(D,D.current&1|2),n.child}e=e.sibling}i.tail!==null&&Y()>wt&&(n.flags|=128,r=!0,Vt(i,!1),n.lanes=4194304)}else{if(!r)if(e=go(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Vt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!H)return se(n),null}else 2*Y()-i.renderingStartTime>wt&&t!==1073741824&&(n.flags|=128,r=!0,Vt(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Y(),n.sibling=null,t=D.current,R(D,r?t&1|2:t&1),n):(se(n),null);case 22:case 23:return ss(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Pe&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function jp(e,n){switch(Fa(n),n.tag){case 1:return we(n.type)&&so(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return yt(),W(ve),W(ue),Ka(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return qa(n),null;case 13:if(W(D),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));gt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return W(D),null;case 4:return yt(),null;case 10:return Ga(n.type._context),null;case 22:case 23:return ss(),null;case 24:return null;default:return null}}var Lr=!1,le=!1,Np=typeof WeakSet=="function"?WeakSet:Set,M=null;function it(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){G(e,n,r)}else t.current=null}function sa(e,n,t){try{t()}catch(r){G(e,n,r)}}var ml=!1;function Lp(e,n){if(Bi=ro,e=Gu(),Wa(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,s=-1,l=-1,u=0,f=0,c=e,m=null;n:for(;;){for(var y;c!==t||o!==0&&c.nodeType!==3||(s=a+o),c!==i||r!==0&&c.nodeType!==3||(l=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(y=c.firstChild)!==null;)m=c,c=y;for(;;){if(c===e)break n;if(m===t&&++u===o&&(s=a),m===i&&++f===r&&(l=a),(y=c.nextSibling)!==null)break;c=m,m=c.parentNode}c=y}t=s===-1||l===-1?null:{start:s,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Gi={focusedElem:e,selectionRange:t},ro=!1,M=n;M!==null;)if(n=M,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,M=e;else for(;M!==null;){n=M;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,A=v.memoizedState,p=n.stateNode,d=p.getSnapshotBeforeUpdate(n.elementType===n.type?k:Ie(n.type,k),A);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){G(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,M=e;break}M=n.return}return v=ml,ml=!1,v}function Dt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&sa(n,t,i)}o=o.next}while(o!==r)}}function Oo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function la(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Fd(e){var n=e.alternate;n!==null&&(e.alternate=null,Fd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Be],delete n[nr],delete n[$i],delete n[gp],delete n[mp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dd(e){return e.tag===5||e.tag===3||e.tag===4}function yl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ua(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ao));else if(r!==4&&(e=e.child,e!==null))for(ua(e,n,t),e=e.sibling;e!==null;)ua(e,n,t),e=e.sibling}function da(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(da(e,n,t),e=e.sibling;e!==null;)da(e,n,t),e=e.sibling}var re=null,Re=!1;function on(e,n,t){for(t=t.child;t!==null;)_d(e,n,t),t=t.sibling}function _d(e,n,t){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Co,t)}catch{}switch(t.tag){case 5:le||it(t,n);case 6:var r=re,o=Re;re=null,on(e,n,t),re=r,Re=o,re!==null&&(Re?(e=re,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):re.removeChild(t.stateNode));break;case 18:re!==null&&(Re?(e=re,t=t.stateNode,e.nodeType===8?li(e.parentNode,t):e.nodeType===1&&li(e,t),Kt(e)):li(re,t.stateNode));break;case 4:r=re,o=Re,re=t.stateNode.containerInfo,Re=!0,on(e,n,t),re=r,Re=o;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&sa(t,n,a),o=o.next}while(o!==r)}on(e,n,t);break;case 1:if(!le&&(it(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){G(t,n,s)}on(e,n,t);break;case 21:on(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,on(e,n,t),le=r):on(e,n,t);break;default:on(e,n,t)}}function vl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Np),n.forEach(function(r){var o=Dp.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function ze(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,a=n,s=a;e:for(;s!==null;){switch(s.tag){case 5:re=s.stateNode,Re=!1;break e;case 3:re=s.stateNode.containerInfo,Re=!0;break e;case 4:re=s.stateNode.containerInfo,Re=!0;break e}s=s.return}if(re===null)throw Error(S(160));_d(i,a,o),re=null,Re=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){G(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Bd(n,e),n=n.sibling}function Bd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(n,e),De(e),r&4){try{Dt(3,e,e.return),Oo(3,e)}catch(k){G(e,e.return,k)}try{Dt(5,e,e.return)}catch(k){G(e,e.return,k)}}break;case 1:ze(n,e),De(e),r&512&&t!==null&&it(t,t.return);break;case 5:if(ze(n,e),De(e),r&512&&t!==null&&it(t,t.return),e.flags&32){var o=e.stateNode;try{Yt(o,"")}catch(k){G(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&hu(o,i),Oi(s,a);var u=Oi(s,i);for(a=0;a<l.length;a+=2){var f=l[a],c=l[a+1];f==="style"?yu(o,c):f==="dangerouslySetInnerHTML"?gu(o,c):f==="children"?Yt(o,c):Ca(o,f,c,u)}switch(s){case"input":Ei(o,i);break;case"textarea":pu(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?st(o,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?st(o,!!i.multiple,i.defaultValue,!0):st(o,!!i.multiple,i.multiple?[]:"",!1))}o[nr]=i}catch(k){G(e,e.return,k)}}break;case 6:if(ze(n,e),De(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){G(e,e.return,k)}}break;case 3:if(ze(n,e),De(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Kt(n.containerInfo)}catch(k){G(e,e.return,k)}break;case 4:ze(n,e),De(e);break;case 13:ze(n,e),De(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(is=Y())),r&4&&vl(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(le=(u=le)||f,ze(n,e),le=u):ze(n,e),De(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(M=e,f=e.child;f!==null;){for(c=M=f;M!==null;){switch(m=M,y=m.child,m.tag){case 0:case 11:case 14:case 15:Dt(4,m,m.return);break;case 1:it(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(k){G(r,t,k)}}break;case 5:it(m,m.return);break;case 22:if(m.memoizedState!==null){kl(c);continue}}y!==null?(y.return=m,M=y):kl(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=c.stateNode,l=c.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=mu("display",a))}catch(k){G(e,e.return,k)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(k){G(e,e.return,k)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:ze(n,e),De(e),r&4&&vl(e);break;case 21:break;default:ze(n,e),De(e)}}function De(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Dd(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Yt(o,""),r.flags&=-33);var i=yl(e);da(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=yl(e);ua(e,s,a);break;default:throw Error(S(161))}}catch(l){G(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Op(e,n,t){M=e,Gd(e)}function Gd(e,n,t){for(var r=(e.mode&1)!==0;M!==null;){var o=M,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Lr;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||le;s=Lr;var u=le;if(Lr=a,(le=l)&&!u)for(M=o;M!==null;)a=M,l=a.child,a.tag===22&&a.memoizedState!==null?Pl(o):l!==null?(l.return=a,M=l):Pl(o);for(;i!==null;)M=i,Gd(i),i=i.sibling;M=o,Lr=s,le=u}wl(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,M=i):wl(e)}}function wl(e){for(;M!==null;){var n=M;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||Oo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:Ie(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&rl(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}rl(n,a,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&Kt(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}le||n.flags&512&&la(n)}catch(m){G(n,n.return,m)}}if(n===e){M=null;break}if(t=n.sibling,t!==null){t.return=n.return,M=t;break}M=n.return}}function kl(e){for(;M!==null;){var n=M;if(n===e){M=null;break}var t=n.sibling;if(t!==null){t.return=n.return,M=t;break}M=n.return}}function Pl(e){for(;M!==null;){var n=M;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Oo(4,n)}catch(l){G(n,t,l)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(l){G(n,o,l)}}var i=n.return;try{la(n)}catch(l){G(n,i,l)}break;case 5:var a=n.return;try{la(n)}catch(l){G(n,a,l)}}}catch(l){G(n,n.return,l)}if(n===e){M=null;break}var s=n.sibling;if(s!==null){s.return=n.return,M=s;break}M=n.return}}var zp=Math.ceil,vo=rn.ReactCurrentDispatcher,rs=rn.ReactCurrentOwner,Ve=rn.ReactCurrentBatchConfig,O=0,te=null,Z=null,oe=0,Pe=0,at=An(0),J=0,sr=null,Fn=0,zo=0,os=0,_t=null,ge=null,is=0,wt=1/0,$e=null,wo=!1,ca=null,vn=null,Or=!1,cn=null,ko=0,Bt=0,ha=null,$r=-1,qr=0;function he(){return O&6?Y():$r!==-1?$r:$r=Y()}function wn(e){return e.mode&1?O&2&&oe!==0?oe&-oe:vp.transition!==null?(qr===0&&(qr=Eu()),qr):(e=z,e!==0||(e=window.event,e=e===void 0?16:Iu(e.type)),e):1}function He(e,n,t,r){if(50<Bt)throw Bt=0,ha=null,Error(S(185));cr(e,t,r),(!(O&2)||e!==te)&&(e===te&&(!(O&2)&&(zo|=t),J===4&&un(e,oe)),ke(e,r),t===1&&O===0&&!(n.mode&1)&&(wt=Y()+500,jo&&Cn()))}function ke(e,n){var t=e.callbackNode;vh(e,n);var r=to(e,e===te?oe:0);if(r===0)t!==null&&Vs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Vs(t),n===1)e.tag===0?yp(Sl.bind(null,e)):nd(Sl.bind(null,e)),pp(function(){!(O&6)&&Cn()}),t=null;else{switch(Vu(r)){case 1:t=ja;break;case 4:t=Mu;break;case 16:t=no;break;case 536870912:t=Tu;break;default:t=no}t=Xd(t,Yd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Yd(e,n){if($r=-1,qr=0,O&6)throw Error(S(327));var t=e.callbackNode;if(ht()&&e.callbackNode!==t)return null;var r=to(e,e===te?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Po(e,r);else{n=r;var o=O;O|=2;var i=$d();(te!==e||oe!==n)&&($e=null,wt=Y()+500,In(e,n));do try{Up();break}catch(s){Zd(e,s)}while(!0);Ba(),vo.current=i,O=o,Z!==null?n=0:(te=null,oe=0,n=J)}if(n!==0){if(n===2&&(o=Wi(e),o!==0&&(r=o,n=pa(e,o))),n===1)throw t=sr,In(e,0),un(e,r),ke(e,Y()),t;if(n===6)un(e,r);else{if(o=e.current.alternate,!(r&30)&&!Ip(o)&&(n=Po(e,r),n===2&&(i=Wi(e),i!==0&&(r=i,n=pa(e,i))),n===1))throw t=sr,In(e,0),un(e,r),ke(e,Y()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:Nn(e,ge,$e);break;case 3:if(un(e,r),(r&130023424)===r&&(n=is+500-Y(),10<n)){if(to(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Zi(Nn.bind(null,e,ge,$e),n);break}Nn(e,ge,$e);break;case 4:if(un(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var a=31-We(r);i=1<<a,a=n[a],a>o&&(o=a),r&=~i}if(r=o,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zp(r/1960))-r,10<r){e.timeoutHandle=Zi(Nn.bind(null,e,ge,$e),r);break}Nn(e,ge,$e);break;case 5:Nn(e,ge,$e);break;default:throw Error(S(329))}}}return ke(e,Y()),e.callbackNode===t?Yd.bind(null,e):null}function pa(e,n){var t=_t;return e.current.memoizedState.isDehydrated&&(In(e,n).flags|=256),e=Po(e,n),e!==2&&(n=ge,ge=t,n!==null&&fa(n)),e}function fa(e){ge===null?ge=e:ge.push.apply(ge,e)}function Ip(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!Fe(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function un(e,n){for(n&=~os,n&=~zo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-We(n),r=1<<t;e[t]=-1,n&=~r}}function Sl(e){if(O&6)throw Error(S(327));ht();var n=to(e,0);if(!(n&1))return ke(e,Y()),null;var t=Po(e,n);if(e.tag!==0&&t===2){var r=Wi(e);r!==0&&(n=r,t=pa(e,r))}if(t===1)throw t=sr,In(e,0),un(e,n),ke(e,Y()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Nn(e,ge,$e),ke(e,Y()),null}function as(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(wt=Y()+500,jo&&Cn())}}function Dn(e){cn!==null&&cn.tag===0&&!(O&6)&&ht();var n=O;O|=1;var t=Ve.transition,r=z;try{if(Ve.transition=null,z=1,e)return e()}finally{z=r,Ve.transition=t,O=n,!(O&6)&&Cn()}}function ss(){Pe=at.current,W(at)}function In(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,hp(t)),Z!==null)for(t=Z.return;t!==null;){var r=t;switch(Fa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&so();break;case 3:yt(),W(ve),W(ue),Ka();break;case 5:qa(r);break;case 4:yt();break;case 13:W(D);break;case 19:W(D);break;case 10:Ga(r.type._context);break;case 22:case 23:ss()}t=t.return}if(te=e,Z=e=kn(e.current,null),oe=Pe=n,J=0,sr=null,os=zo=Fn=0,ge=_t=null,On!==null){for(n=0;n<On.length;n++)if(t=On[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}t.pending=r}On=null}return e}function Zd(e,n){do{var t=Z;try{if(Ba(),Gr.current=yo,mo){for(var r=_.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}mo=!1}if(Hn=0,ne=Q=_=null,Ft=!1,or=0,rs.current=null,t===null||t.return===null){J=1,sr=n,Z=null;break}e:{var i=e,a=t.return,s=t,l=n;if(n=oe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=s,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=ul(a);if(y!==null){y.flags&=-257,dl(y,a,s,i,n),y.mode&1&&ll(i,u,n),n=y,l=u;var v=n.updateQueue;if(v===null){var k=new Set;k.add(l),n.updateQueue=k}else v.add(l);break e}else{if(!(n&1)){ll(i,u,n),ls();break e}l=Error(S(426))}}else if(H&&s.mode&1){var A=ul(a);if(A!==null){!(A.flags&65536)&&(A.flags|=256),dl(A,a,s,i,n),Da(vt(l,s));break e}}i=l=vt(l,s),J!==4&&(J=2),_t===null?_t=[i]:_t.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var p=Vd(i,l,n);tl(i,p);break e;case 1:s=l;var d=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(vn===null||!vn.has(g)))){i.flags|=65536,n&=-n,i.lanes|=n;var w=jd(i,s,n);tl(i,w);break e}}i=i.return}while(i!==null)}Kd(t)}catch(b){n=b,Z===t&&t!==null&&(Z=t=t.return);continue}break}while(!0)}function $d(){var e=vo.current;return vo.current=yo,e===null?yo:e}function ls(){(J===0||J===3||J===2)&&(J=4),te===null||!(Fn&268435455)&&!(zo&268435455)||un(te,oe)}function Po(e,n){var t=O;O|=2;var r=$d();(te!==e||oe!==n)&&($e=null,In(e,n));do try{Rp();break}catch(o){Zd(e,o)}while(!0);if(Ba(),O=t,vo.current=r,Z!==null)throw Error(S(261));return te=null,oe=0,J}function Rp(){for(;Z!==null;)qd(Z)}function Up(){for(;Z!==null&&!uh();)qd(Z)}function qd(e){var n=Jd(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,n===null?Kd(e):Z=n,rs.current=null}function Kd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=jp(t,n),t!==null){t.flags&=32767,Z=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,Z=null;return}}else if(t=Vp(t,n,Pe),t!==null){Z=t;return}if(n=n.sibling,n!==null){Z=n;return}Z=n=e}while(n!==null);J===0&&(J=5)}function Nn(e,n,t){var r=z,o=Ve.transition;try{Ve.transition=null,z=1,Wp(e,n,t,r)}finally{Ve.transition=o,z=r}return null}function Wp(e,n,t,r){do ht();while(cn!==null);if(O&6)throw Error(S(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(wh(e,i),e===te&&(Z=te=null,oe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Or||(Or=!0,Xd(no,function(){return ht(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ve.transition,Ve.transition=null;var a=z;z=1;var s=O;O|=4,rs.current=null,Lp(e,t),Bd(t,e),ip(Gi),ro=!!Bi,Gi=Bi=null,e.current=t,Op(t),dh(),O=s,z=a,Ve.transition=i}else e.current=t;if(Or&&(Or=!1,cn=e,ko=o),i=e.pendingLanes,i===0&&(vn=null),ph(t.stateNode),ke(e,Y()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(wo)throw wo=!1,e=ca,ca=null,e;return ko&1&&e.tag!==0&&ht(),i=e.pendingLanes,i&1?e===ha?Bt++:(Bt=0,ha=e):Bt=0,Cn(),null}function ht(){if(cn!==null){var e=Vu(ko),n=Ve.transition,t=z;try{if(Ve.transition=null,z=16>e?16:e,cn===null)var r=!1;else{if(e=cn,cn=null,ko=0,O&6)throw Error(S(331));var o=O;for(O|=4,M=e.current;M!==null;){var i=M,a=i.child;if(M.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(M=u;M!==null;){var f=M;switch(f.tag){case 0:case 11:case 15:Dt(8,f,i)}var c=f.child;if(c!==null)c.return=f,M=c;else for(;M!==null;){f=M;var m=f.sibling,y=f.return;if(Fd(f),f===u){M=null;break}if(m!==null){m.return=y,M=m;break}M=y}}}var v=i.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var A=k.sibling;k.sibling=null,k=A}while(k!==null)}}M=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,M=a;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Dt(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,M=p;break e}M=i.return}}var d=e.current;for(M=d;M!==null;){a=M;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,M=g;else e:for(a=d;M!==null;){if(s=M,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Oo(9,s)}}catch(b){G(s,s.return,b)}if(s===a){M=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,M=w;break e}M=s.return}}if(O=o,Cn(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Co,e)}catch{}r=!0}return r}finally{z=t,Ve.transition=n}}return!1}function xl(e,n,t){n=vt(t,n),n=Vd(e,n,1),e=yn(e,n,1),n=he(),e!==null&&(cr(e,1,n),ke(e,n))}function G(e,n,t){if(e.tag===3)xl(e,e,t);else for(;n!==null;){if(n.tag===3){xl(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){e=vt(t,e),e=jd(n,e,1),n=yn(n,e,1),e=he(),n!==null&&(cr(n,1,e),ke(n,e));break}}n=n.return}}function Hp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=he(),e.pingedLanes|=e.suspendedLanes&t,te===e&&(oe&t)===t&&(J===4||J===3&&(oe&130023424)===oe&&500>Y()-is?In(e,0):os|=t),ke(e,n)}function Qd(e,n){n===0&&(e.mode&1?(n=br,br<<=1,!(br&130023424)&&(br=4194304)):n=1);var t=he();e=nn(e,n),e!==null&&(cr(e,n,t),ke(e,t))}function Fp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Qd(e,t)}function Dp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),Qd(e,t)}var Jd;Jd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ve.current)me=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return me=!1,Ep(e,n,t);me=!!(e.flags&131072)}else me=!1,H&&n.flags&1048576&&td(n,co,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Zr(e,n),e=n.pendingProps;var o=ft(n,ue.current);ct(n,t),o=Ja(null,n,r,e,o,t);var i=Xa();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,we(r)?(i=!0,lo(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Za(n),o.updater=Lo,n.stateNode=o,o._reactInternals=n,ea(n,r,e,t),n=ra(null,n,r,!0,i,t)):(n.tag=0,H&&i&&Ha(n),ce(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Zr(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Bp(r),e=Ie(r,e),o){case 0:n=ta(null,n,r,e,t);break e;case 1:n=pl(null,n,r,e,t);break e;case 11:n=cl(null,n,r,e,t);break e;case 14:n=hl(null,n,r,Ie(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ie(r,o),ta(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ie(r,o),pl(e,n,r,o,t);case 3:e:{if(zd(n),e===null)throw Error(S(387));r=n.pendingProps,i=n.memoizedState,o=i.element,ld(e,n),fo(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=vt(Error(S(423)),n),n=fl(e,n,r,t,o);break e}else if(r!==o){o=vt(Error(S(424)),n),n=fl(e,n,r,t,o);break e}else for(Se=mn(n.stateNode.containerInfo.firstChild),xe=n,H=!0,Ue=null,t=ad(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(gt(),r===o){n=tn(e,n,t);break e}ce(e,n,r,t)}n=n.child}return n;case 5:return ud(n),e===null&&Qi(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Yi(r,o)?a=null:i!==null&&Yi(r,i)&&(n.flags|=32),Od(e,n),ce(e,n,a,t),n.child;case 6:return e===null&&Qi(n),null;case 13:return Id(e,n,t);case 4:return $a(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=mt(n,null,r,t):ce(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ie(r,o),cl(e,n,r,o,t);case 7:return ce(e,n,n.pendingProps,t),n.child;case 8:return ce(e,n,n.pendingProps.children,t),n.child;case 12:return ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,a=o.value,R(ho,r._currentValue),r._currentValue=a,i!==null)if(Fe(i.value,a)){if(i.children===o.children&&!ve.current){n=tn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Je(-1,t&-t),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),Ji(i.return,t,n),s.lanes|=t;break}l=l.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(S(341));a.lanes|=t,s=a.alternate,s!==null&&(s.lanes|=t),Ji(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ce(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,ct(n,t),o=je(o),r=r(o),n.flags|=1,ce(e,n,r,t),n.child;case 14:return r=n.type,o=Ie(r,n.pendingProps),o=Ie(r.type,o),hl(e,n,r,o,t);case 15:return Nd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ie(r,o),Zr(e,n),n.tag=1,we(r)?(e=!0,lo(n)):e=!1,ct(n,t),Ed(n,r,o),ea(n,r,o,t),ra(null,n,r,!0,e,t);case 19:return Rd(e,n,t);case 22:return Ld(e,n,t)}throw Error(S(156,n.tag))};function Xd(e,n){return Cu(e,n)}function _p(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,n,t,r){return new _p(e,n,t,r)}function us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bp(e){if(typeof e=="function")return us(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ta)return 11;if(e===Ea)return 14}return 2}function kn(e,n){var t=e.alternate;return t===null?(t=Ee(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Kr(e,n,t,r,o,i){var a=2;if(r=e,typeof e=="function")us(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Kn:return Rn(t.children,o,i,n);case Ma:a=8,o|=8;break;case bi:return e=Ee(12,t,n,o|2),e.elementType=bi,e.lanes=i,e;case Ai:return e=Ee(13,t,n,o),e.elementType=Ai,e.lanes=i,e;case Ci:return e=Ee(19,t,n,o),e.elementType=Ci,e.lanes=i,e;case uu:return Io(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case su:a=10;break e;case lu:a=9;break e;case Ta:a=11;break e;case Ea:a=14;break e;case an:a=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=Ee(a,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function Rn(e,n,t,r){return e=Ee(7,e,r,n),e.lanes=t,e}function Io(e,n,t,r){return e=Ee(22,e,r,n),e.elementType=uu,e.lanes=t,e.stateNode={isHidden:!1},e}function mi(e,n,t){return e=Ee(6,e,null,n),e.lanes=t,e}function yi(e,n,t){return n=Ee(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Gp(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qo(0),this.expirationTimes=Qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ds(e,n,t,r,o,i,a,s,l){return e=new Gp(e,n,t,s,l),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ee(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Za(i),e}function Yp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ec(e){if(!e)return xn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(we(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(we(t))return ed(e,t,n)}return n}function nc(e,n,t,r,o,i,a,s,l){return e=ds(t,r,!0,e,o,i,a,s,l),e.context=ec(null),t=e.current,r=he(),o=wn(t),i=Je(r,o),i.callback=n??null,yn(t,i,o),e.current.lanes=o,cr(e,o,r),ke(e,r),e}function Ro(e,n,t,r){var o=n.current,i=he(),a=wn(o);return t=ec(t),n.context===null?n.context=t:n.pendingContext=t,n=Je(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=yn(o,n,a),e!==null&&(He(e,o,a,i),Br(e,o,a)),a}function So(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bl(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function cs(e,n){bl(e,n),(e=e.alternate)&&bl(e,n)}function Zp(){return null}var tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function hs(e){this._internalRoot=e}Uo.prototype.render=hs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));Ro(e,n,null,null)};Uo.prototype.unmount=hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Dn(function(){Ro(null,e,null,null)}),n[en]=null}};function Uo(e){this._internalRoot=e}Uo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Lu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ln.length&&n!==0&&n<ln[t].priority;t++);ln.splice(t,0,e),t===0&&zu(e)}};function ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Al(){}function $p(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=So(a);i.call(u)}}var a=nc(n,r,e,0,null,!1,!1,"",Al);return e._reactRootContainer=a,e[en]=a.current,Xt(e.nodeType===8?e.parentNode:e),Dn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=So(l);s.call(u)}}var l=ds(e,0,!1,null,null,!1,!1,"",Al);return e._reactRootContainer=l,e[en]=l.current,Xt(e.nodeType===8?e.parentNode:e),Dn(function(){Ro(n,l,t,r)}),l}function Ho(e,n,t,r,o){var i=t._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=So(a);s.call(l)}}Ro(n,a,e,o)}else a=$p(t,n,e,o,r);return So(a)}ju=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ot(n.pendingLanes);t!==0&&(Na(n,t|1),ke(n,Y()),!(O&6)&&(wt=Y()+500,Cn()))}break;case 13:Dn(function(){var r=nn(e,1);if(r!==null){var o=he();He(r,e,1,o)}}),cs(e,1)}};La=function(e){if(e.tag===13){var n=nn(e,134217728);if(n!==null){var t=he();He(n,e,134217728,t)}cs(e,134217728)}};Nu=function(e){if(e.tag===13){var n=wn(e),t=nn(e,n);if(t!==null){var r=he();He(t,e,n,r)}cs(e,n)}};Lu=function(){return z};Ou=function(e,n){var t=z;try{return z=e,n()}finally{z=t}};Ii=function(e,n,t){switch(n){case"input":if(Ei(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Vo(r);if(!o)throw Error(S(90));cu(r),Ei(r,o)}}}break;case"textarea":pu(e,t);break;case"select":n=t.value,n!=null&&st(e,!!t.multiple,n,!1)}};ku=as;Pu=Dn;var qp={usingClientEntryPoint:!1,Events:[pr,et,Vo,vu,wu,as]},jt={findFiberByHostInstance:Ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kp={bundleType:jt.bundleType,version:jt.version,rendererPackageName:jt.rendererPackageName,rendererConfig:jt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bu(e),e===null?null:e.stateNode},findFiberByHostInstance:jt.findFiberByHostInstance||Zp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zr.isDisabled&&zr.supportsFiber)try{Co=zr.inject(Kp),Ge=zr}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qp;Ae.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ps(n))throw Error(S(200));return Yp(e,n,null,t)};Ae.createRoot=function(e,n){if(!ps(e))throw Error(S(299));var t=!1,r="",o=tc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=ds(e,1,!1,null,null,t,!1,r,o),e[en]=n.current,Xt(e.nodeType===8?e.parentNode:e),new hs(n)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=bu(n),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return Dn(e)};Ae.hydrate=function(e,n,t){if(!Wo(n))throw Error(S(200));return Ho(null,e,n,!0,t)};Ae.hydrateRoot=function(e,n,t){if(!ps(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",a=tc;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=nc(n,null,e,1,t??null,o,!1,i,a),e[en]=n.current,Xt(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Uo(n)};Ae.render=function(e,n,t){if(!Wo(n))throw Error(S(200));return Ho(null,e,n,!1,t)};Ae.unmountComponentAtNode=function(e){if(!Wo(e))throw Error(S(40));return e._reactRootContainer?(Dn(function(){Ho(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};Ae.unstable_batchedUpdates=as;Ae.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Wo(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Ho(e,n,t,!1,r)};Ae.version="18.3.1-next-f1338f8080-20240426";function rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc)}catch(e){console.error(e)}}rc(),ru.exports=Ae;var Qp=ru.exports,Cl=Qp;Si.createRoot=Cl.createRoot,Si.hydrateRoot=Cl.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lr(){return lr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},lr.apply(null,arguments)}var hn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(hn||(hn={}));const Ml="popstate";function Jp(e){e===void 0&&(e={});function n(r,o){let{pathname:i,search:a,hash:s}=r.location;return ga("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:xo(o)}return ef(n,t,null,e)}function $(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function fs(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Xp(){return Math.random().toString(36).substr(2,8)}function Tl(e,n){return{usr:e.state,key:e.key,idx:n}}function ga(e,n,t,r){return t===void 0&&(t=null),lr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?xt(n):n,{state:t,key:n&&n.key||r||Xp()})}function xo(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function xt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function ef(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=hn.Pop,l=null,u=f();u==null&&(u=0,a.replaceState(lr({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function c(){s=hn.Pop;let A=f(),p=A==null?null:A-u;u=A,l&&l({action:s,location:k.location,delta:p})}function m(A,p){s=hn.Push;let d=ga(k.location,A,p);u=f()+1;let g=Tl(d,u),w=k.createHref(d);try{a.pushState(g,"",w)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;o.location.assign(w)}i&&l&&l({action:s,location:k.location,delta:1})}function y(A,p){s=hn.Replace;let d=ga(k.location,A,p);u=f();let g=Tl(d,u),w=k.createHref(d);a.replaceState(g,"",w),i&&l&&l({action:s,location:k.location,delta:0})}function v(A){let p=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof A=="string"?A:xo(A);return d=d.replace(/ $/,"%20"),$(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let k={get action(){return s},get location(){return e(o,a)},listen(A){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Ml,c),l=A,()=>{o.removeEventListener(Ml,c),l=null}},createHref(A){return n(o,A)},createURL:v,encodeLocation(A){let p=v(A);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:y,go(A){return a.go(A)}};return k}var El;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(El||(El={}));function nf(e,n,t){return t===void 0&&(t="/"),tf(e,n,t)}function tf(e,n,t,r){let o=typeof n=="string"?xt(n):n,i=gs(o.pathname||"/",t);if(i==null)return null;let a=oc(e);rf(a);let s=null,l=mf(i);for(let u=0;s==null&&u<a.length;++u)s=pf(a[u],l);return s}function oc(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(i,a,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&($(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Pn([r,l.relativePath]),f=t.concat(l);i.children&&i.children.length>0&&($(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),oc(i.children,n,f,u)),!(i.path==null&&!i.index)&&n.push({path:u,score:cf(u,i.index),routesMeta:f})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let l of ic(i.path))o(i,a,l)}),n}function ic(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=ic(r.join("/")),s=[];return s.push(...a.map(l=>l===""?i:[i,l].join("/"))),o&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function rf(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:hf(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const of=/^:[\w-]+$/,af=3,sf=2,lf=1,uf=10,df=-2,Vl=e=>e==="*";function cf(e,n){let t=e.split("/"),r=t.length;return t.some(Vl)&&(r+=df),n&&(r+=sf),t.filter(o=>!Vl(o)).reduce((o,i)=>o+(of.test(i)?af:i===""?lf:uf),r)}function hf(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function pf(e,n,t){let{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,f=i==="/"?n:n.slice(i.length)||"/",c=ff({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),m=l.route;if(!c)return null;Object.assign(o,c.params),a.push({params:o,pathname:Pn([i,c.pathname]),pathnameBase:Pf(Pn([i,c.pathnameBase])),route:m}),c.pathnameBase!=="/"&&(i=Pn([i,c.pathnameBase]))}return a}function ff(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=gf(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:m,isOptional:y}=f;if(m==="*"){let k=s[c]||"";a=i.slice(0,i.length-k.length).replace(/(.)\/+$/,"$1")}const v=s[c];return y&&!v?u[m]=void 0:u[m]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function gf(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),fs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function mf(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return fs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function gs(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const yf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vf=e=>yf.test(e);function wf(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?xt(e):e,i;if(t)if(vf(t))i=t;else{if(t.includes("//")){let a=t;t=lc(t),fs(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?i=jl(t.substring(1),"/"):i=jl(t,n)}else i=n;return{pathname:i,search:Sf(r),hash:xf(o)}}function jl(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function vi(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kf(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function ac(e,n){let t=kf(e);return n?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function sc(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=xt(e):(o=lr({},e),$(!o.pathname||!o.pathname.includes("?"),vi("?","pathname","search",o)),$(!o.pathname||!o.pathname.includes("#"),vi("#","pathname","hash",o)),$(!o.search||!o.search.includes("#"),vi("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=t;else{let c=n.length-1;if(!r&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),c-=1;o.pathname=m.join("/")}s=c>=0?n[c]:"/"}let l=wf(o,s),u=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const lc=e=>e.replace(/\/\/+/g,"/"),Pn=e=>lc(e.join("/")),Pf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Sf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function bf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const uc=["post","put","patch","delete"];new Set(uc);const Af=["get",...uc];new Set(Af);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ur(){return ur=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ur.apply(null,arguments)}const ms=P.createContext(null),Cf=P.createContext(null),Gn=P.createContext(null),Fo=P.createContext(null),Yn=P.createContext({outlet:null,matches:[],isDataRoute:!1}),dc=P.createContext(null);function Mf(e,n){let{relative:t}=n===void 0?{}:n;gr()||$(!1);let{basename:r,navigator:o}=P.useContext(Gn),{hash:i,pathname:a,search:s}=hc(e,{relative:t}),l=a;return r!=="/"&&(l=a==="/"?r:Pn([r,a])),o.createHref({pathname:l,search:s,hash:i})}function gr(){return P.useContext(Fo)!=null}function Do(){return gr()||$(!1),P.useContext(Fo).location}function cc(e){P.useContext(Gn).static||P.useLayoutEffect(e)}function _o(){let{isDataRoute:e}=P.useContext(Yn);return e?Hf():Tf()}function Tf(){gr()||$(!1);let e=P.useContext(ms),{basename:n,future:t,navigator:r}=P.useContext(Gn),{matches:o}=P.useContext(Yn),{pathname:i}=Do(),a=JSON.stringify(ac(o,t.v7_relativeSplatPath)),s=P.useRef(!1);return cc(()=>{s.current=!0}),P.useCallback(function(u,f){if(f===void 0&&(f={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let c=sc(u,JSON.parse(a),i,f.relative==="path");e==null&&n!=="/"&&(c.pathname=c.pathname==="/"?n:Pn([n,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[n,r,a,i,e])}function hc(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=P.useContext(Gn),{matches:o}=P.useContext(Yn),{pathname:i}=Do(),a=JSON.stringify(ac(o,r.v7_relativeSplatPath));return P.useMemo(()=>sc(e,JSON.parse(a),i,t==="path"),[e,a,i,t])}function Ef(e,n){return Vf(e,n)}function Vf(e,n,t,r){gr()||$(!1);let{navigator:o}=P.useContext(Gn),{matches:i}=P.useContext(Yn),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Do(),f;if(n){var c;let A=typeof n=="string"?xt(n):n;l==="/"||(c=A.pathname)!=null&&c.startsWith(l)||$(!1),f=A}else f=u;let m=f.pathname||"/",y=m;if(l!=="/"){let A=l.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(A.length).join("/")}let v=nf(e,{pathname:y}),k=zf(v&&v.map(A=>Object.assign({},A,{params:Object.assign({},s,A.params),pathname:Pn([l,o.encodeLocation?o.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?l:Pn([l,o.encodeLocation?o.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),i,t,r);return n&&k?P.createElement(Fo.Provider,{value:{location:ur({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:hn.Pop}},k):k}function jf(){let e=Wf(),n=bf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},n),t?P.createElement("pre",{style:o},t):null,null)}const Nf=P.createElement(jf,null);class Lf extends P.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?P.createElement(Yn.Provider,{value:this.props.routeContext},P.createElement(dc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Of(e){let{routeContext:n,match:t,children:r}=e,o=P.useContext(ms);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),P.createElement(Yn.Provider,{value:n},r)}function zf(e,n,t,r){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,s=(o=t)==null?void 0:o.errors;if(s!=null){let f=a.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);f>=0||$(!1),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let c=a[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.id){let{loaderData:m,errors:y}=t,v=c.route.loader&&m[c.route.id]===void 0&&(!y||y[c.route.id]===void 0);if(c.route.lazy||v){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((f,c,m)=>{let y,v=!1,k=null,A=null;t&&(y=s&&c.route.id?s[c.route.id]:void 0,k=c.route.errorElement||Nf,l&&(u<0&&m===0?(Ff("route-fallback"),v=!0,A=null):u===m&&(v=!0,A=c.route.hydrateFallbackElement||null)));let p=n.concat(a.slice(0,m+1)),d=()=>{let g;return y?g=k:v?g=A:c.route.Component?g=P.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=f,P.createElement(Of,{match:c,routeContext:{outlet:f,matches:p,isDataRoute:t!=null},children:g})};return t&&(c.route.ErrorBoundary||c.route.errorElement||m===0)?P.createElement(Lf,{location:t.location,revalidation:t.revalidation,component:k,error:y,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var pc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(pc||{}),fc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(fc||{});function If(e){let n=P.useContext(ms);return n||$(!1),n}function Rf(e){let n=P.useContext(Cf);return n||$(!1),n}function Uf(e){let n=P.useContext(Yn);return n||$(!1),n}function gc(e){let n=Uf(),t=n.matches[n.matches.length-1];return t.route.id||$(!1),t.route.id}function Wf(){var e;let n=P.useContext(dc),t=Rf(),r=gc();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Hf(){let{router:e}=If(pc.UseNavigateStable),n=gc(fc.UseNavigateStable),t=P.useRef(!1);return cc(()=>{t.current=!0}),P.useCallback(function(o,i){i===void 0&&(i={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ur({fromRouteId:n},i)))},[e,n])}const Nl={};function Ff(e,n,t){Nl[e]||(Nl[e]=!0)}function Df(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function de(e){$(!1)}function _f(e){let{basename:n="/",children:t=null,location:r,navigationType:o=hn.Pop,navigator:i,static:a=!1,future:s}=e;gr()&&$(!1);let l=n.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:l,navigator:i,static:a,future:ur({v7_relativeSplatPath:!1},s)}),[l,s,i,a]);typeof r=="string"&&(r=xt(r));let{pathname:f="/",search:c="",hash:m="",state:y=null,key:v="default"}=r,k=P.useMemo(()=>{let A=gs(f,l);return A==null?null:{location:{pathname:A,search:c,hash:m,state:y,key:v},navigationType:o}},[l,f,c,m,y,v,o]);return k==null?null:P.createElement(Gn.Provider,{value:u},P.createElement(Fo.Provider,{children:t,value:k}))}function Bf(e){let{children:n,location:t}=e;return Ef(ma(n),t)}new Promise(()=>{});function ma(e,n){n===void 0&&(n=[]);let t=[];return P.Children.forEach(e,(r,o)=>{if(!P.isValidElement(r))return;let i=[...n,o];if(r.type===P.Fragment){t.push.apply(t,ma(r.props.children,i));return}r.type!==de&&$(!1),!r.props.index||!r.props.children||$(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ma(r.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ya.apply(null,arguments)}function Gf(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function Yf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Zf(e,n){return e.button===0&&(!n||n==="_self")&&!Yf(e)}const $f=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],qf="6";try{window.__reactRouterVersion=qf}catch{}const Kf="startTransition",Ll=Hc[Kf];function Qf(e){let{basename:n,children:t,future:r,window:o}=e,i=P.useRef();i.current==null&&(i.current=Jp({window:o,v5Compat:!0}));let a=i.current,[s,l]=P.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},f=P.useCallback(c=>{u&&Ll?Ll(()=>l(c)):l(c)},[l,u]);return P.useLayoutEffect(()=>a.listen(f),[a,f]),P.useEffect(()=>Df(r),[r]),P.createElement(_f,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:a,future:r})}const Jf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qr=P.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:l,to:u,preventScrollReset:f,viewTransition:c}=n,m=Gf(n,$f),{basename:y}=P.useContext(Gn),v,k=!1;if(typeof u=="string"&&Xf.test(u)&&(v=u,Jf))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),b=gs(w.pathname,y);w.origin===g.origin&&b!=null?u=b+w.search+w.hash:k=!0}catch{}let A=Mf(u,{relative:o}),p=eg(u,{replace:a,state:s,target:l,preventScrollReset:f,relative:o,viewTransition:c});function d(g){r&&r(g),g.defaultPrevented||p(g)}return P.createElement("a",ya({},m,{href:v||A,onClick:k||i?r:d,ref:t,target:l}))});var Ol;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ol||(Ol={}));var zl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zl||(zl={}));function eg(e,n){let{target:t,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:s}=n===void 0?{}:n,l=_o(),u=Do(),f=hc(e,{relative:a});return P.useCallback(c=>{if(Zf(c,t)){c.preventDefault();let m=r!==void 0?r:xo(u)===xo(f);l(e,{replace:m,state:o,preventScrollReset:i,relative:a,viewTransition:s})}},[u,l,f,r,o,t,e,i,a,s])}function ng(){const e=_o();return h.jsx("div",{className:"welcome-page",children:h.jsxs("div",{className:"welcome-content",children:[h.jsx("div",{className:"welcome-icon-box",children:h.jsx("img",{src:"/welcomepageimage.png",alt:"VolunteerHigh",className:"welcome-image"})}),h.jsx("h1",{className:"welcome-title",children:"Welcome to VolunteerHigh"}),h.jsx("button",{className:"welcome-next-btn",onClick:()=>e("/home"),children:"Get Started"})]})})}const tg="/assets/VolunteerHighLogo-BnGChIAc.png";function wi(e,n,t=1500,r=!1){const[o,i]=P.useState(r?e:0),a=P.useRef(!1),s=P.useRef(null);return P.useEffect(()=>{if(r){i(e);return}if(!n||a.current)return;a.current=!0;const l=performance.now(),u=f=>{const c=f-l,m=Math.min(c/t,1);i(Math.floor(m*e)),m<1&&(s.current=requestAnimationFrame(u))};return s.current=requestAnimationFrame(u),()=>{s.current&&cancelAnimationFrame(s.current)}},[n,r]),o}function Il(e=.5){const n=P.useRef(null),[t,r]=P.useState(!1);return P.useEffect(()=>{const o=n.current;if(!o)return;const i=new IntersectionObserver(([a])=>{a.isIntersecting&&a.intersectionRatio>=e&&r(!0)},{threshold:e});return i.observe(o),()=>i.disconnect()},[e]),[n,t]}function Rl(e=.35){const n=P.useRef(null),[t,r]=P.useState(!1);return P.useEffect(()=>{const o=n.current;if(!o)return;const i=new IntersectionObserver(([a])=>{r(a.isIntersecting&&a.intersectionRatio>=e)},{threshold:e});return i.observe(o),()=>i.disconnect()},[e]),[n,t]}const ys="volunteerhigh_home_animations_played";function rg(){return sessionStorage.getItem(ys)!=="true"}function og(){sessionStorage.setItem(ys,"true")}function ig(){sessionStorage.removeItem(ys)}const ag=[{label:"HandsOn Greater Phoenix",to:"/org/hands-on-greater-phoenix"},{label:"Arizona State Parks and Trails",to:"/org/arizona-state-parks"},{label:"City of Flagstaff",to:"/org/city-of-flagstaff"},{label:"Junior Achievement of Arizona",to:"/org/junior-achievement"},{label:"Feed My Starving Children",to:"/org/feed-my-starving-children"},{label:"Arizona Sustainability Alliance",to:"/org/az-sustainability-alliance"},{label:"Bureau of Land Management Arizona",to:"/org/bureau-of-land-management"},{label:"Lost Our Home Pet Rescue",to:"/org/lost-our-homes-pet-rescue"}];function mr({current:e}){const[n,t]=P.useState(!1),r=P.useRef(null),o=[{key:"quest",label:"Quest AI",to:"/quest"},{key:"maps",label:"Maps",to:"/maps"},{key:"about",label:"About",to:"/about"},{key:"faq",label:"FAQ's",to:"/faq"}];function i(){r.current&&clearTimeout(r.current),t(!0)}function a(){r.current=setTimeout(()=>t(!1),150)}return h.jsxs("div",{className:"navbar",children:[h.jsx(Qr,{to:"/home",className:"navbar-logo-link",onClick:ig,children:h.jsx("img",{src:tg,alt:"VolunteerHigh",className:"navbar-logo"})}),h.jsx("div",{className:"navbar-spacer"}),o.map(s=>e===s.key?h.jsx("span",{className:"navbar-current",children:s.label},s.key):h.jsx(Qr,{to:s.to,className:"navbar-link",children:s.label},s.key)),h.jsxs("div",{className:"navbar-org-dropdown",onMouseEnter:i,onMouseLeave:a,children:[h.jsxs("button",{className:`navbar-link navbar-org-trigger${e==="organizations"?" navbar-current":""}`,onClick:()=>t(s=>!s),"aria-expanded":n,children:["Organizations ",h.jsx("span",{className:"navbar-org-caret",children:"▾"})]}),n&&h.jsx("div",{className:"navbar-org-menu navbar-org-menu-right",children:ag.map(s=>h.jsx(Qr,{to:s.to,className:"navbar-org-menu-item",onClick:()=>t(!1),children:s.label},s.to))})]})]})}const sg="/assets/Image-DgsHldMx.png",lg="/assets/HandsOnGreaterPhoenixLogo-t_QkNJAt.jpg",ug="/assets/AZStateParksandTrailsLogo-bjg6v4ly.jpg",dg="/assets/CityOfFlagstaffLogo-DLqi0ajI.jpg",cg="/assets/JuniorAchievementOfArizonaLogo-phlbKpa8.jpg",hg="/assets/FMSCLogo-BcUhIjKK.jpg",pg="/assets/AZSustainabilityAllianceLogo-Gt_x0TzN.jpg",fg="/assets/BureauOfLandManagement-BaEZUK12.jpg",gg="/assets/LostOurHomesPetRescueImageLogo-BENexxV-.jpg",mg=[{to:"/org/hands-on-greater-phoenix",img:lg,name:"HandsOn Greater Phoenix",circular:!0},{to:"/org/arizona-state-parks",img:ug,name:"Arizona State Parks and Trails",circular:!1},{to:"/org/city-of-flagstaff",img:dg,name:"City of Flagstaff",circular:!0},{to:"/org/junior-achievement",img:cg,name:"Junior Achievement of Arizona",circular:!0}],yg=[{to:"/org/feed-my-starving-children",img:hg,name:"Feed My Starving Children",circular:!1},{to:"/org/az-sustainability-alliance",img:pg,name:"Arizona Sustainability Alliance",circular:!0},{to:"/org/bureau-of-land-management",img:fg,name:"Bureau of Land Management Arizona",circular:!1},{to:"/org/lost-our-homes-pet-rescue",img:gg,name:"Lost Our Home Pet Rescue",circular:!1}];function Ul({to:e,img:n,name:t,circular:r,isVisible:o,index:i,animationsEnabled:a}){const s=!a||o;return h.jsxs(Qr,{to:e,className:`partner-box${s?" visible":""}${a?"":" no-anim"}`,style:a?{transitionDelay:`${i*.28}s`}:void 0,children:[h.jsx("img",{src:n,alt:t,className:r?"circular":""}),h.jsx("span",{className:"org-name",children:t})]})}function vg(){const e=_o(),[n,t]=Il(.3),[r,o]=Il(.6),[i,a]=Rl(.35),[s,l]=Rl(.35),[u]=P.useState(()=>rg());P.useEffect(()=>{u&&og()},[u]);const f=wi(90,t,1500,!u),c=wi(100,t,1500,!u),m=wi(92,t,1500,!u);return h.jsxs("div",{className:"main-screen",children:[h.jsx(mr,{current:null}),h.jsxs("div",{className:"main-scroll",children:[h.jsx("div",{className:"hero-section",style:{backgroundImage:`url(${sg})`},children:h.jsxs("div",{className:"hero-text",children:[h.jsx("p",{className:"hero-brand",children:"VolunteerHigh"}),h.jsx("h1",{className:"hero-line1",children:"Discover High School"}),h.jsx("h1",{className:"hero-line2 blue",children:"Volunteer Opportunities"}),h.jsx("p",{className:"hero-sub",children:`Find community service in Arizona.
Together, we can make a lasting
impact and build a better tomorrow
for those in need`})]})}),h.jsxs("div",{className:"project-section",children:[h.jsx("h2",{className:"project-title",children:"The VolunteerHigh Project"}),h.jsx("p",{className:"project-sub",children:"A platform that empowers students to find, explore, and engage in"}),h.jsx("p",{className:"project-sub second",children:"meaningful local volunteer opportunities while creating lasting community impact."}),h.jsxs("div",{className:"stats-row",ref:n,children:[h.jsxs("div",{className:"stat-block",children:[h.jsx("div",{className:"stat-rule",children:"――――――"}),h.jsxs("p",{className:"stat-number",children:[f,"%+"]}),h.jsx("p",{className:"stat-caption",children:`of students participated in volunteer
work before entering
college`})]}),h.jsxs("div",{className:"stat-block",children:[h.jsx("div",{className:"stat-rule",children:"――――――"}),h.jsxs("p",{className:"stat-number",children:[c,"+"]}),h.jsx("p",{className:"stat-caption",children:`volunteering hours by the
average high schooler before
graduating.`})]}),h.jsxs("div",{className:"stat-block",children:[h.jsx("div",{className:"stat-rule",children:"――――――"}),h.jsxs("p",{className:"stat-number",children:[m,"%+"]}),h.jsx("p",{className:"stat-caption",children:`of admissions officers
value 4-year volunteering`})]})]})]}),h.jsxs("div",{className:"partners-divider-row",ref:r,children:[h.jsx("div",{className:"rule"}),h.jsx("span",{className:"label",children:"Our Partner Organizations"}),h.jsx("div",{className:"rule"})]}),h.jsxs("div",{className:"partners-grid-wrap",children:[h.jsx("div",{className:"partners-row",children:mg.map((y,v)=>h.jsx(Ul,{...y,isVisible:o,index:v,animationsEnabled:u},y.to))}),h.jsx("div",{className:"partners-row",children:yg.map((y,v)=>h.jsx(Ul,{...y,isVisible:o,index:v+4,animationsEnabled:u},y.to))})]}),h.jsx("div",{className:"quest-section",children:h.jsxs("div",{className:`scroll-transition${a?" identity":""}`,ref:i,children:[h.jsx("h2",{className:"quest-heading",children:"Quest - Our Volunteering Recommendation Engine"}),h.jsx("p",{className:"quest-body-text",children:`Quest in an intelligent Volunteer Recommendation engine helps you to find the best volunteering opportunities tailored to your
interests and location. By analyzing your preferences and matching them with relevant organizations, Quest simplifies the search process and makes
community involvement more accessible. Quest is designed to help you find the best volunteer opportunities where you can
make the greatest impact while supporting a cause that geniunely matters to you.`}),h.jsx("button",{className:"quest-cta",onClick:()=>e("/quest"),children:"Use Quest"})]})}),h.jsx("div",{className:"maps-section",children:h.jsxs("div",{className:`scroll-transition${l?" identity":""}`,ref:s,children:[h.jsx("h2",{className:"maps-heading",children:"Maps"}),h.jsx("p",{className:"maps-body-text",children:`Want to find the nearest opportunity, and fast? Maps is our location-based volunteer discovery tool that helps
you to find the nearest opportunity. By displaying nearby opportunities on an interactive map, Maps makes it easy
to explore opportunities based on your current location and identify places where you can get involved. Maps simplifies
the process of finding local volunteer opportunities, helping you connect with organizations in your community and make a
meaningful impact close to your home, while earning verified hours.`}),h.jsx("button",{className:"maps-cta",onClick:()=>e("/maps"),children:"Use Maps"})]})})]})]})}const mc="AQ.Ab8RN6ILQtJe2eUTlbveerBT6rJDhIghmyXY_hgBSSADpad49A",wg="gemini-2.5-flash-lite";function yc(){return!!mc}const kg=`You are Quest AI, a friendly volunteer recommendation engine for VolunteerHigh, a platform helping Arizona high school students find volunteer opportunities.

Rules:
1. The UI already shows a greeting, so jump straight to helping when the user sends their first message.
2. When the user shares their interests and/or location, search the provided opportunity database and recommend the single best match. Include the name, a brief reason why it fits, and key details like date, time, and location.
3. Answer follow-up questions accurately using the database.
4. Keep responses conversational, warm, and concise.
5. If no opportunities match well, say so honestly and suggest they check back soon as new opportunities are added daily.`;let ki=[],Pi=null;async function Pg(e,n){var i,a,s,l,u,f;if(!yc())throw new Error("Quest AI isn't configured yet. Add your Gemini API key in src/config/firebaseConfig.js.");Pi||(Pi=kg+`

Volunteer opportunities database:
`+n),ki.push({role:"user",parts:[{text:e}]});const t=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${wg}:generateContent?key=${mc}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system_instruction:{parts:[{text:Pi}]},contents:ki,generationConfig:{maxOutputTokens:1e3,temperature:.7}})});if(!t.ok){const c=await t.json().catch(()=>({}));throw new Error(((i=c==null?void 0:c.error)==null?void 0:i.message)||`API error ${t.status}`)}const o=((f=(u=(l=(s=(a=(await t.json()).candidates)==null?void 0:a[0])==null?void 0:s.content)==null?void 0:l.parts)==null?void 0:u[0])==null?void 0:f.text)??"";return ki.push({role:"model",parts:[{text:o}]}),o}const Sg={title:"HandsOn Greater Phoenix",note:null,opportunities:[{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-10-20 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009CujX3MAJ",date:"2026-10-20"},{name:"HeARTsy (Peoria) Art Class Volunteer Adaptive Adults (Referral)",description:`During COVID, in 2020, Heartsy started working with adaptive adults with disabilities here in AZ including the Arc of Tempe, Tempe Pathway to Work, Treasure House and city park and recreation groups in Peoria, Surprise, Mesa, and Phoenix.  We love to have FUN so bring your silly side, your best sence of humor and a joke or two if that's your style! EVERYONE IS ACCEPTED HERE! 

After 4 years of experience specifically teaching this special group of individuals, we know their attention span, we know what arts materials they are able to safely manipulate and how to keep them moving successfully through a 2 hour program. ( While laughing, smiling, and having FUN!) 

As a volunteer in the classroom we sometimes have a student who would benefit from one on one assistance. No arts experience is necessary, just patience, kindness and a smile.

These students have a variety of intellectual, physical and mental disabilities. They sometimes find it hard to fit into a typical public group arts class and therefore need a special program, such as this, which is catered to their special style of learning. You will be AMAZED at what they create! 

We are looking for (5) volunteers MAXIMUM to help us in class. Verifying by phone is mandatory to confirm your enrollment for this class. Please call Tina upon registration at 651-334-3997. Let's meet outside in the parking lot or at the front door 15 minutes early ( I often could use a helping hand carrying materials inside.) Please wait there until we arrive as we are often coming from other classes/locations and timing is a bit flexible within 10-15 minutes. 

The minimum age for this volunteer opportunity is 16 with a parent/guardian. Please let us know if you plan to bring a child under the age of 18.

This is a casual, relaxed atmosphere. Please wear comfortable close-toed shoes, and feel free to wear jeans and a solid black T-shirt so the students know who Heartsy helpers are. (Please no shirts with words on them as they are distracting to this population) 

If you have questions, please call or email Tina Ferguson @ (651) 334-3997 or Tina@beHeARTsy.com

Please note: We are generally not reachable the day of class, during class time or in transit to classes. Questions or comments must be emailed or texted to Tina 24 hours in advance. Pleasr respect our prep time.

Thank you so much for your support! Your assistance in our classes or at 3rd Monday art material preparation day has been absolutely key to our success as a volunteer based NonProfit 501.c3 organization.

2026-10-20 | 10:30 AM - 12:30 PM

Location: Peoria, AZ, 85345

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000099zzMiMAI",date:"2026-10-20"},{name:"HeARTsy (Peoria) Art Class Volunteer-Senior Citizens (Referral)",description:`HeARTsy's Executive director, artist and architect, Tina Ferguson, has worked with Seniors since 2009 when she closed her Architectural Fitm to start a for profit arts education business inspired by her own Nana after her grandfathers unexpected death.  Before COVID, Artsy Smartsy was Minnesota and Arizonas largest Senior arts education provider specializing in the fine arts education of seniors with Alzheimer's, Dementia and Parkinson's Disease. She won the Phoenix Major's Art Award in 2018 for her work with these populations. 

 

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

2026-10-20 | 12:45 PM - 2:45 PM

Location: Peoria, AZ, 85345

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009A2hVQMAZ",date:"2026-10-20"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-10-21 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009CujX4MAJ",date:"2026-10-21"},{name:"HeARTsy (Phoenix) Art Class Volunteer-Adaptive Adults (Referral)",description:`During COVID, in 2020, Heartsy started working with adaptive adults with disabilities here in AZ including the Arc of Tempe, Tempe Pathway to Work, Treasure House and city park and recreation groups in Peoria, Surprise, Mesa, and Phoenix.  We love to have FUN so bring your silly side, your best sence of humor and a joke or two if that's your style! EVERYONE IS ACCEPTED HERE! 

After 4 years of experience specifically teaching this special group of individuals, we know their attention span, we know what arts materials they are able to safely manipulate and how to keep them moving successfully through a 2 hour program. ( While laughing, smiling, and having FUN!) 

As a volunteer in the classroom we sometimes have a student who would benefit from one on one assistance. No arts experience is necessary, just patience, kindness and a smile.

These students have a variety of intellectual, physical and mental disabilities. They sometimes find it hard to fit into a typical public group arts class and therefore need a special program, such as this, which is catered to their special style of learning. You will be AMAZED at what they create! 

We are looking for (5) volunteers MAXIMUM to help us in class. Verifying by phone is mandatory to confirm your enrollment for this class. Please call Tina upon registration at 651-334-3997. Let's meet outside in the parking lot or at the front door 15 minutes early ( I often could use a helping hand carrying materials inside.) Please wait there until we arrive as we are often coming from other classes/locations and timing is a bit flexible within 10-15 minutes. 

The minimum age for this volunteer opportunity is 16 with a parent/guardian. Please let us know if you plan to bring a child under the age of 18.

This is a casual, relaxed atmosphere. Please wear comfortable close-toed shoes, and feel free to wear jeans and a solid black T-shirt so the students know who Heartsy helpers are. (Please no shirts with words on them as they are distracting to this population) 

If you have questions, please call or email Tina Ferguson @ (651) 334-3997 or Tina@beHeARTsy.com

Please note: We are generally not reachable the day of class, during class time or in transit to classes. Questions or comments must be emailed or texted to Tina 24 hours in advance. Pleasr respect our prep time.

Thank you so much for your support! Your assistance in our classes or at 3rd Monday art material preparation day has been absolutely key to our success as a volunteer based NonProfit 501.c3 organization.

2026-10-21 | 9:45 AM - 11:45 AM

Location: Phoenix, AZ, 85042

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000099wrPPMAY",date:"2026-10-21"},{name:"HeARTsy (Phoenix) Art Class Volunteer - Senior Citizens (Referral)",description:`-

2026-10-21 | 12:00 PM - 2:00 PM

Location: Phoenix, AZ, 85042

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009A37rVMAR",date:"2026-10-21"},{name:"HeARTsy (Tempe) Art Class Volunteer - Adaptive Adults (Referral)",description:`During COVID, in 2020, Heartsy started working with adaptive adults with disabilities here in AZ including the Arc of Tempe, Tempe Pathway to Work, Treasure House and city park and recreation groups in Peoria, Surprise, Mesa, and Phoenix.  We love to have FUN so bring your silly side, your best sence of humor and a joke or two if that's your style! EVERYONE IS ACCEPTED HERE! 

After 4 years of experience specifically teaching this special group of individuals, we know their attention span, we know what arts materials they are able to safely manipulate and how to keep them moving successfully through a 2 hour program. ( While laughing, smiling, and having FUN!) 

As a volunteer in the classroom we sometimes have a student who would benefit from one on one assistance. No arts experience is necessary, just patience, kindness and a smile.

These students have a variety of intellectual, physical and mental disabilities. They sometimes find it hard to fit into a typical public group arts class and therefore need a special program, such as this, which is catered to their special style of learning. You will be AMAZED at what they create! 

We are looking for (5) volunteers MAXIMUM to help us in class. Verifying by phone is mandatory to confirm your enrollment for this class. Please call Tina upon registration at 651-334-3997. Let's meet outside in the parking lot or at the front door 15 minutes early ( I often could use a helping hand carrying materials inside.) Please wait there until we arrive as we are often coming from other classes/locations and timing is a bit flexible within 10-15 minutes. 

The minimum age for this volunteer opportunity is 16 with a parent/guardian. Please let us know if you plan to bring a child under the age of 18.

This is a casual, relaxed atmosphere. Please wear comfortable close-toed shoes, and feel free to wear jeans and a solid black T-shirt so the students know who Heartsy helpers are. (Please no shirts with words on them as they are distracting to this population) 

If you have questions, please call or email Tina Ferguson @ (651) 334-3997 or Tina@beHeARTsy.com

Please note: We are generally not reachable the day of class, during class time or in transit to classes. Questions or comments must be emailed or texted to Tina 24 hours in advance. Pleasr respect our prep time.

Thank you so much for your support! Your assistance in our classes or at 3rd Monday art material preparation day has been absolutely key to our success as a volunteer based NonProfit 501.c3 organization.

2026-10-21 | 6:00 PM - 8:00 PM

Location: Tempe, AZ, 85281

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009A2k68MAB",date:"2026-10-21"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-10-22 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009CujX5MAJ",date:"2026-10-22"},{name:"Nutrition Program Volunteer (Referral)",description:`Advance Community's Nutrition Program offers 2 separate volunteer opportunities. Our first program, Stove to Table delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package over 500 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal.

Our second program is Mercado Fresh where we provide monthly nutritious food boxes to individuals facing food insecurity and chronic health conditions—because giving food is giving dignity.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
9:00 AM to 1:00 PM

You will be placed where the need is the greatest that day (either the kitchen or warehouse)

We ask that you come dressed appropriately; please no open toed shoes. Volunteers under the age of 16 are welcome with a parent or guardian.

2026-10-22 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fFvMmMAK",date:"2026-10-22"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-10-23 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009CujX6MAJ",date:"2026-10-23"},{name:"Garden Volunteers at Mesa Urban Farm",description:`The 3,000 square-foot Mesa Urban Farm provides about 500lbs of fresh produce monthly for St. Vincent de Paul's Mesa Dining Room. Spend your morning fertilizing soil, composting, planting, harvesting, and observing the produce that helps feed the local community. Please note, the dining room is adjacent to the farm. Clients who enjoy St. Vincent's daily meal services are likely to be present on site, many of whom are unsheltered.

Please wear Closed-toe shoes, and clothes that can get dirty. Bring SPF and a reusable water bottle. There are shade structures, but be prepared to be in the sun. An air-conditioned area is available if you need to cool off!

Please Note: Volunteers serving court-ordered hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 8 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-10-23 | 7:00 AM - 10:00 AM

Location: Mesa, AZ, 85210

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008lDYuNMAW",date:"2026-10-23"},{name:"Fall Games 2026 (Referral)",description:`Join Special Olympics Arizona for Fall Games 2026 in Surprise!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below for more information or follow this link to move forward: https://portals.specialolympics.org/event-details/?id=9185bae7-1e65-f111-a825-6045bd074692

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

 

NOTE: There are shifts over two days with various shift times and two locations!

2026-10-23 | 8:00 AM - 5:00 PM

Location: Surprise, AZ, 85388

Volunteers still needed: 100`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EGUZ5MAP",date:"2026-10-23"},{name:"HeARTsy (Phoenix) Art Class Volunteer-Adaptive Adults (Referral)",description:`During COVID, in 2020, Heartsy started working with adaptive adults with disabilities here in AZ including the Arc of Tempe, Tempe Pathway to Work, Treasure House and city park and recreation groups in Peoria, Surprise, Mesa, and Phoenix.  We love to have FUN so bring your silly side, your best sence of humor and a joke or two if that's your style! EVERYONE IS ACCEPTED HERE! 

After 4 years of experience specifically teaching this special group of individuals, we know their attention span, we know what arts materials they are able to safely manipulate and how to keep them moving successfully through a 2 hour program. ( While laughing, smiling, and having FUN!) 

As a volunteer in the classroom we sometimes have a student who would benefit from one on one assistance. No arts experience is necessary, just patience, kindness and a smile.

These students have a variety of intellectual, physical and mental disabilities. They sometimes find it hard to fit into a typical public group arts class and therefore need a special program, such as this, which is catered to their special style of learning. You will be AMAZED at what they create! 

We are looking for (5) volunteers MAXIMUM to help us in class. Verifying by phone is mandatory to confirm your enrollment for this class. Please call Tina upon registration at 651-334-3997. Let's meet outside in the parking lot or at the front door 15 minutes early ( I often could use a helping hand carrying materials inside.) Please wait there until we arrive as we are often coming from other classes/locations and timing is a bit flexible within 10-15 minutes. 

The minimum age for this volunteer opportunity is 16 with a parent/guardian. Please let us know if you plan to bring a child under the age of 18.

This is a casual, relaxed atmosphere. Please wear comfortable close-toed shoes, and feel free to wear jeans and a solid black T-shirt so the students know who Heartsy helpers are. (Please no shirts with words on them as they are distracting to this population) 

If you have questions, please call or email Tina Ferguson @ (651) 334-3997 or Tina@beHeARTsy.com

Please note: We are generally not reachable the day of class, during class time or in transit to classes. Questions or comments must be emailed or texted to Tina 24 hours in advance. Pleasr respect our prep time.

Thank you so much for your support! Your assistance in our classes or at 3rd Monday art material preparation day has been absolutely key to our success as a volunteer based NonProfit 501.c3 organization.

2026-10-23 | 9:45 AM - 11:45 AM

Location: Phoenix, AZ, 85042

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009A40f1MAB",date:"2026-10-23"},{name:"Lunch Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-10-23 | 10:00 AM - 1:30 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009OoPlOMAV",date:"2026-10-23"},{name:"Pizza Making with St. Vincent de Paul",description:`Help prepare 150 pizzas for the Friday night dinner service at St. Vincent de Paul. Volunteers will roll out dough, spread out the sauce, layer on toppings, and get the pizzas into the ovens to cook.

Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts). Hairnets, gloves, and aprons will be provided, but pizza making can get messy, so dress accordingly!

This is a fun and fast-paced volunteer opportunity that requires a team effort. If you sign up for this opportunity, please be sure to show up, or remove yourself in a timely manner if you can no longer attend so another volunteer can take your spot.

The minimum age for this volunteer opportunity is 12 with a parent or guardian. All volunteers under the age of 16 must be accompanied by a parent/guardian with a 1:1 child to adult ratio given the tasks involved. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

Please Note: Volunteers serving court-ordered or any kind of required volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

The project calendar is designed for individuals and families looking to volunteer in the community. If you are a corporate group interested in giving back, please visit our Corporate Volunteering page for ways to engage through HandsOn.

2026-10-23 | 12:45 PM - 3:30 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008mT9BbMAK",date:"2026-10-23"},{name:"BINGO! at Osborn Pointe",description:`Osborn Pointe is a 48-unit supportive housing community designed to serve individuals 55 and over.

Join the residents of Osborn Pointe for a fun game of BINGO! Volunteers will help run the game, read the winning numbers, and hand out prizes. Bring your smile and a positive attitude to set residents up for a wonderful weekend!

Please arrive at least 5 minutes early. The game will begin promptly at 3pm.

The minimum age for this project is 12 with a parent or guardian. All volunteers under the age of 18 must be accompanied by an adult.

2026-10-23 | 3:00 PM - 4:00 PM

Location: Phoenix, AZ, 85012

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000093l3iVMAQ",date:"2026-10-23"},{name:"Evening Meal Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-10-23 | 3:00 PM - 6:00 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009Op9aTMAR",date:"2026-10-23"},{name:"Mesa Shade Tree Event at Pioneer Park! (Referral)",description:`Mesa Shade Tree Event at Pioneer Park

Join us at Pioneer Park on Saturday, October 24th for a community tree distribution and education event as part of the City of Mesa’s Neighborhood Shade Tree Program. This program helps Mesa residents select and plant the right trees in the right places to provide shade, reduce urban heat, and grow the neighborhood tree canopy.

 

Volunteers will help with tasks such as welcoming and directing participants, assisting with tree distribution, helping residents load their trees, and providing general event support. No previous tree or gardening experience is required—just a willingness to help and work with the community!

Please express interest below to be redirected to our volunteer sign up!

\uFEFFVolunteer Roles 

Volunteer shift time varies depending on the role!

	
Tree Unloader

	

		
Volunteers will assist taking trees off the truck and staging them in the tree corral area. *Trees weigh approximately 10-15 lbs 

	

	

	
Event Set-Up
	

		
Volunteers help set up the event by staging tables, chairs, and other event materials

	

	

	
Group Ambassador
	

		
Volunteers will guide a group from one learning station to the next, helping keep the groups organized

	

	

	
Event Entrance Volunteer
	

		
The entrance volunteer will help participants sign-in and provide their materials.

	

	

	
Tree Corral Entrance Volunteer
	

		
Volunteers will help at the entrance of the tree corral after participants have gone through the learning stations and are ready to pick out their trees

	

	

	
Tree Corral Exit Volunteer
	

		
Volunteers will gather tree order forms and assist participants after they have picked out their trees

	

	

	
Tree Runner
	

		
Volunteers will assist participants getting the trees from the tree corral area to their vehicles. *Trees weigh approximately 10-15 lbs

	

	

	
Ask an Expert
	

		
This role is for arborists or master gardeners with knowledge on tree care. Experts will answer questions participants may have about their trees

2026-10-24 | 6:00 AM - 2:00 PM

Location: Mesa, AZ, 85203

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fCjuGMAS",date:"2026-10-24"},{name:"Fall Games 2026 (Referral)",description:`Join Special Olympics Arizona for Fall Games 2026 in Surprise!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below for more information or follow this link to move forward: https://portals.specialolympics.org/event-details/?id=9185bae7-1e65-f111-a825-6045bd074692

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

 

NOTE: There are shifts over two days with various shift times and two locations!

2026-10-24 | 7:30 AM - 4:00 PM

Location: Surprise, AZ, 85388

Volunteers still needed: 100`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EGUZ6MAP",date:"2026-10-24"},{name:"Glendale Smoke Alarm Walk (Referral)",description:`Why Your Involvement Matters: With your support, we aim to install smoke alarms at no cost to residents in low-income or high-risk homes, with a goal of reaching hundreds of residents in just one morning! This is an opportunity to directly impact our community and contribute to creating safer living environments for those who need it most.

What's In It for You:

	
Meaningful Impact: Contribute to reducing the risk of house fires, saving lives, and fostering safer communities through education.

	
Training and Tools: No experience is necessary! We provide all the tools and training beforehand to ensure you feel confident and prepared.

	
Community Spirit: Connect with like-minded individuals who share your passion for giving back, volunteer alongside a group of colleagues, friends and family, and invest in your local community!

	
Free Breakfast: Start your day right with a complimentary breakfast to energize you for the day!

How to Get Involved: Sign-up through this online portal or email tess.robaina@azburn.org so we know you’re coming! This is a great opportunity for groups or families to volunteer alongside one another. Then, simply show up at the meeting location ready to make a positive impact. Together, we can create change and build a safer, stronger community.

Have Questions? We're here to help! Reach out to us anytime if you have questions or want additional details.

Thank you for choosing to volunteer and being a force for good in our community!

2026-10-24 | 8:00 AM - 12:00 PM

Location: Glendale, AZ, 85301

Volunteers still needed: 100`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009bBs6QMAS",date:"2026-10-24"},{name:"Rise and Dine at HomeBase",description:`Start your morning off right by providing a warm, wholesome breakfast for homeless youth and young adults (ages 18-24) at HomeBase Youth Services. Serve up pancakes, bacon, eggs and toast with a smile, while giving the residents energy to start their day off right!

Volunteers must wear closed-toe shoes, and long hair must be pulled back.

The minimum age for this volunteer opportunity is 11 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project. 

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

**Please check your Email Junk/Spam folders the week of the event for instructions from the Volunteer Leader.**

2026-10-24 | 8:00 AM - 10:00 AM

Location: Phoenix, AZ, 85014

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008lQL0UMAW",date:"2026-10-24"},{name:"Thrift Shop Assistants at Hope&#39;s Closet",description:`Hope's Closet is New Life Center's social enterprise thrift store, open to both the organization's emergency shelter residents and the local community. Join us at Hope's Closet to collect and sort through clothing donations, move items to the sales floor, and organize clothing racks.

New Life Center's mission is “Helping to eliminate domestic and sexual violence through support services, education, and expertise.” New Life Center provides services to over 1,100 adults and children each year. In addition to a safe place to stay, they provide advocacy, employment services, legal assistance, comprehensive children's services, transportation and outreach services to individual survivors and their families who have experienced domestic violence, sexual abuse, or human trafficking. All proceeds from Hope's Closet go back to our participating families and help to fund shelter operations. 

The minimum age for this volunteer opportunity is 14. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-10-24 | 10:00 AM - 12:00 PM

Location: Goodyear, AZ, 85338

Volunteers still needed: 6`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008lSukuMAC",date:"2026-10-24"},{name:"15th Annual MIKIZTLI: Dia de los Muertos Festival Volunteers (Referral)",description:`Join the Cultural Coalition team for the 15th Annual MIKIZTLI: Día de los Muertos PHX Festival at the Arizona Center on Saturday 10/24/2026 for an unforgettable evening of culture, art, and community.

There are a variety of different volunteer roles available to choose from. Please select one from the list. 

Volunteers must be at least 16 years old or accompanied by an adult. Questions? Email candy@CulturalCoalition.com

Please express interest below to be redirected to our registration page!

2026-10-24 | 11:00 AM - 9:00 PM

Location: Phoenix, AZ, 85012

Volunteers still needed: 100`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fCcbbMAC",date:"2026-10-24"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards Desert West",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the two drinking stations at Desert West Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Desert West Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-10-25 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85035

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009JWwDVMA1",date:"2026-10-25"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Lindo Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Lindo Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-10-25 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85041

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009JWx5iMAD",date:"2026-10-25"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-10-26 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009CujX7MAJ",date:"2026-10-26"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Grant Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Grant Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Grant Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-10-26 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009JXwtkMAD",date:"2026-10-26"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards-Cave Creek",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Cave Creek-Larkspur Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-10-26 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85029

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009JX3HQMA1",date:"2026-10-26"},{name:"Chef&#39;s Night Off at HomeBase",description:`Roll up your sleeves and help chop, slice, and dice with love as you prepare and serve dinner for homeless youth and young adults (ages 18-21) at HomeBase Youth Services. You can also help pack lunches that will be distributed throughout the week to homeless youth and young adults. Allow the busy chef to have a nice evening off.

Volunteers must wear closed-toe shoes, and long hair should be pulled back.

The minimum age for this project is 11 with a parent/guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-10-26 | 4:00 PM - 6:00 PM

Location: Phoenix, AZ, 85014

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008qx81EMAQ",date:"2026-10-26"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-10-27 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009CujX8MAJ",date:"2026-10-27"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-10-28 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009CujX9MAJ",date:"2026-10-28"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-10-29 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009CujXAMAZ",date:"2026-10-29"},{name:"Nutrition Program Volunteer (Referral)",description:`Advance Community's Nutrition Program offers 2 separate volunteer opportunities. Our first program, Stove to Table delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package over 500 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal.

Our second program is Mercado Fresh where we provide monthly nutritious food boxes to individuals facing food insecurity and chronic health conditions—because giving food is giving dignity.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
9:00 AM to 1:00 PM

You will be placed where the need is the greatest that day (either the kitchen or warehouse)

We ask that you come dressed appropriately; please no open toed shoes. Volunteers under the age of 16 are welcome with a parent or guardian.

2026-10-29 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fG4yVMAS",date:"2026-10-29"},{name:"Coronado Area Bowling Competition in Tucson (Referral)",description:`Join Special Olympics Arizona for a Coronado Area Bowling Competition in Tucson!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-10-29 | 9:30 AM - 12:30 PM

Location: Tucson, AZ, 85704

Volunteers still needed: 20`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EF2GoMAL",date:"2026-10-29"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-10-30 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009CujXBMAZ",date:"2026-10-30"},{name:"Lunch Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-10-30 | 10:00 AM - 1:30 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009OrAOfMAN",date:"2026-10-30"},{name:"Evening Meal Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-10-30 | 3:00 PM - 6:00 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009OqflRMAR",date:"2026-10-30"},{name:"From the Ground Up: Volunteer Day at the Ranch (Referral)",description:`Join us for a meaningful day of giving back at Wildcat Ranch Phoenix! This in-person volunteer event is a wonderful opportunity to roll up your sleeves, enjoy the outdoors, and make a direct impact on the ranch and the horses who call it home.

Volunteers will work together on a variety of hands-on projects, including fence repairs, stall cleaning and refreshing, barn organization, and general facility beautification. These improvements help create a safer, more welcoming environment for our horses and the individuals who participate in our therapy programs.

No ranch experience is necessary—whether you’re a seasoned ranch hand or simply eager to help, your time and effort truly make a difference. Connect with nature, meet fellow community members, and be part of something meaningful.

2026-10-31 | 7:00 AM - 10:00 AM

Location: PHOENIX, AZ, AZ, 85042

Volunteers still needed: 50`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008oZje7MAC",date:"2026-10-31"},{name:"G.A.I.N. Trick-o-Treat on 13th St (Referral)",description:`We need volunteers to help with our 6th annual Getting Arizona Involved in Neighborhoods Trick-o-Treat block party. The event is held on 13th Street from Dunlap to Hatcher in Phoenix. We need hands to put up string lights, monitor the black light bounce house, and sit along the block to hand out candy. This is a fun, easy volunteer event for all ages and abilities.

2026-10-31 | 4:00 PM - 9:00 PM

Location: Phoenix, AZ, 85020

Volunteers still needed: 20`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009JXoktMAD",date:"2026-10-31"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

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

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008jtNMwMAM",date:"2026-11-04"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

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

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008mWoabMAC",date:"2026-11-05"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

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

Volunteers still needed: 20`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EF2GsMAL",date:"2026-11-06"},{name:"Arizona Fall Festival-Multiple Shifts! (Referral)",description:`Be part of the crew that makes Arizona’s biggest celebration of local happen!

Celebrating the Copper State’s finest flavors and showcasing 200+ local vendors, the 20th annual Arizona Fall Fest is on Saturday, November 7, 2026. 

Volunteer shifts range from early morning all the way through 5:00 p.m. and include Setup, Beverage Garden Ticket Sales, Beverage Garden Greeter, General Event Support, and Toward Zero Waste sustainability super heros! 

Volunteers are vital to the event’s success and are the heart of the festival.

Each volunteer will receive an exclusive Fall Festival T-shirt. If you are 21 years and older, you will receive 5 Beverage Garden sample tickets (early morning shifts receive a few extra tickets and full-day volunteers receive a sack lunch).

Shifts are 3 hours long and you are welcome to enjoy the festival before and/or after your shift.

TO LEARN MORE ABOUT VOLUNTEER SHIFTS AND TO SIGN UP, VISIT localfirstaz.com/fall-festival-volunteers

2026-11-07 | 6:00 AM - 5:00 PM

Location: Phoenix, AZ, 85004

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008ydQqsMAE",date:"2026-11-07"},{name:"Coronado Area Bowling Competition in Tucson (Referral)",description:`Join Special Olympics Arizona for a Coronado Area Bowling Competition in Tucson!

 

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

Volunteers still needed: 12`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008qwjfZMAQ",date:"2026-11-07"},{name:"Mountain Area Golf Competition in Prescott (Referral)",description:`Join Special Olympics Arizona for a Mountain Area Golf Competition in Prescott!

 

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

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008mVanWMAS",date:"2026-11-07"},{name:"Valley Area Golf Competition in Phoenix (Referral)",description:`Join Special Olympics Arizona for a Valley Area Golf Competition in Phoenix!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-11-07 | 11:00 AM - 2:00 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 12`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EE7FGMA1",date:"2026-11-07"},{name:"New Way Academy&#39;s Fall Kickoff (Referral)",description:`We are in need of volunteers for our biggest community event of the year, our annual Fall Kickoff on Saturday, November 7th from 11-2. Our community is comprised of students in grades K-12 with learning disabilities from all across the valley. Our families come from 75 different zip codes, making traditional school community gatherings difficult for our families to attend. Our Fall Kickoff is our highest attended event each year, with last year 520 tickets sold. Traditionally, we ask our parents and staff to help at various volunteer stations at the event, but this has resulted in volunteers not being able to fully enjoy the day with their families. We would be so grateful to partner with outside volunteers so our families and teachers can fully enjoy the event!

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

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009A4RaaMAF",date:"2026-11-07"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

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

Volunteers still needed: 6`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008q2Bt7MAE",date:"2026-11-11"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

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

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fGJXDMA4",date:"2026-11-12"},{name:"Game Night at MANA House",description:`Bring your A-game for this fun social event at MANA House, a peer-support organization of homeless and formerly homeless veterans! Volunteers will facilitate Bingo for the Veterans residing at the facility. Join us to help bring joy to those who have valiantly served our country.

The minimum age for this volunteer opportunity is 18.

2026-11-12 | 6:00 PM - 7:30 PM

Location: Phoenix, AZ, 85009

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008ju63BMAQ",date:"2026-11-12"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

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

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008E7r38MAB",date:"2026-11-13"},{name:"Chef&#39;s Night Off at HomeBase Surprise",description:`Roll up your sleeves and help chop, slice, and dice with love as you prepare and serve dinner for homeless youth and young adults (ages 18-26) at HomeBase Youth Services in Surprise. You can also help pack lunches that will be distributed throughout the week to homeless youth and young adults. Allow the busy chef to have a nice evening off.

Volunteers must wear closed-toe shoes, and long hair should be pulled back.

The minimum age for this project is 11 with a parent/guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-13 | 3:00 PM - 5:00 PM

Location: Surprise, AZ, 85378

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000093DennMAC",date:"2026-11-13"},{name:"Nature Nurturers at Escalante Community Garden",description:`The Escalante Community Garden is a garden that follows a communal model with healthy growing practices. A portion of the garden’s harvest is given to Tempe Community Action Agency's Food Pantry to supplement emergency food boxes. The garden features a children's area, as well as a desert and herb garden.

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

Volunteers still needed: 8`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008pOAETMA4",date:"2026-11-14"},{name:"Afternoon Sort and Pack at St. Mary&#39;s Food Bank - Phoenix",description:`Bring your helping hands to sort, pack, and distribute food that will go to other nonprofits and families in crisis at St. Mary's Food Bank Alliance. You will have a blast meeting new people while working the assembly line!

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

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008WyK29MAF",date:"2026-11-14"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

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

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fFZUNMA4",date:"2026-11-18"},{name:"HeARTsy (Phoenix) Art Class Volunteer-Adaptive Adults (Referral)",description:`During COVID, in 2020, Heartsy started working with adaptive adults with disabilities here in AZ including the Arc of Tempe, Tempe Pathway to Work, Treasure House and city park and recreation groups in Peoria, Surprise, Mesa, and Phoenix.  We love to have FUN so bring your silly side, your best sence of humor and a joke or two if that's your style! EVERYONE IS ACCEPTED HERE! 

After 4 years of experience specifically teaching this special group of individuals, we know their attention span, we know what arts materials they are able to safely manipulate and how to keep them moving successfully through a 2 hour program. ( While laughing, smiling, and having FUN!) 

As a volunteer in the classroom we sometimes have a student who would benefit from one on one assistance. No arts experience is necessary, just patience, kindness and a smile.

These students have a variety of intellectual, physical and mental disabilities. They sometimes find it hard to fit into a typical public group arts class and therefore need a special program, such as this, which is catered to their special style of learning. You will be AMAZED at what they create! 

We are looking for (5) volunteers MAXIMUM to help us in class. Verifying by phone is mandatory to confirm your enrollment for this class. Please call Tina upon registration at 651-334-3997. Let's meet outside in the parking lot or at the front door 15 minutes early ( I often could use a helping hand carrying materials inside.) Please wait there until we arrive as we are often coming from other classes/locations and timing is a bit flexible within 10-15 minutes. 

The minimum age for this volunteer opportunity is 16 with a parent/guardian. Please let us know if you plan to bring a child under the age of 18.

This is a casual, relaxed atmosphere. Please wear comfortable close-toed shoes, and feel free to wear jeans and a solid black T-shirt so the students know who Heartsy helpers are. (Please no shirts with words on them as they are distracting to this population) 

If you have questions, please call or email Tina Ferguson @ (651) 334-3997 or Tina@beHeARTsy.com

Please note: We are generally not reachable the day of class, during class time or in transit to classes. Questions or comments must be emailed or texted to Tina 24 hours in advance. Pleasr respect our prep time.

Thank you so much for your support! Your assistance in our classes or at 3rd Monday art material preparation day has been absolutely key to our success as a volunteer based NonProfit 501.c3 organization.

2026-11-18 | 9:45 AM - 11:45 AM

Location: Phoenix, AZ, 85042

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000099qLxrMAE",date:"2026-11-18"},{name:"HeARTsy (Phoenix) Art Class Volunteer - Senior Citizens (Referral)",description:`-

2026-11-18 | 12:00 PM - 2:00 PM

Location: Phoenix, AZ, 85042

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009A3MHpMAN",date:"2026-11-18"},{name:"HeARTsy (Tempe) Art Class Volunteer - Adaptive Adults (Referral)",description:`During COVID, in 2020, Heartsy started working with adaptive adults with disabilities here in AZ including the Arc of Tempe, Tempe Pathway to Work, Treasure House and city park and recreation groups in Peoria, Surprise, Mesa, and Phoenix.  We love to have FUN so bring your silly side, your best sence of humor and a joke or two if that's your style! EVERYONE IS ACCEPTED HERE! 

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

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000093rC82MAE",date:"2026-11-19"},{name:"Nutrition Program Volunteer (Referral)",description:`Advance Community's Nutrition Program offers 2 separate volunteer opportunities. Our first program, Stove to Table delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package over 500 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal.

Our second program is Mercado Fresh where we provide monthly nutritious food boxes to individuals facing food insecurity and chronic health conditions—because giving food is giving dignity.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
9:00 AM to 1:00 PM

You will be placed where the need is the greatest that day (either the kitchen or warehouse)

We ask that you come dressed appropriately; please no open toed shoes. Volunteers under the age of 16 are welcome with a parent or guardian.

2026-11-19 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fGgYXMA0",date:"2026-11-19"},{name:"HeARTsy (Phoenix) Art Class Volunteer-Adaptive Adults (Referral)",description:`During COVID, in 2020, Heartsy started working with adaptive adults with disabilities here in AZ including the Arc of Tempe, Tempe Pathway to Work, Treasure House and city park and recreation groups in Peoria, Surprise, Mesa, and Phoenix.  We love to have FUN so bring your silly side, your best sence of humor and a joke or two if that's your style! EVERYONE IS ACCEPTED HERE! 

After 4 years of experience specifically teaching this special group of individuals, we know their attention span, we know what arts materials they are able to safely manipulate and how to keep them moving successfully through a 2 hour program. ( While laughing, smiling, and having FUN!) 

As a volunteer in the classroom we sometimes have a student who would benefit from one on one assistance. No arts experience is necessary, just patience, kindness and a smile.

These students have a variety of intellectual, physical and mental disabilities. They sometimes find it hard to fit into a typical public group arts class and therefore need a special program, such as this, which is catered to their special style of learning. You will be AMAZED at what they create! 

We are looking for (5) volunteers MAXIMUM to help us in class. Verifying by phone is mandatory to confirm your enrollment for this class. Please call Tina upon registration at 651-334-3997. Let's meet outside in the parking lot or at the front door 15 minutes early ( I often could use a helping hand carrying materials inside.) Please wait there until we arrive as we are often coming from other classes/locations and timing is a bit flexible within 10-15 minutes. 

The minimum age for this volunteer opportunity is 16 with a parent/guardian. Please let us know if you plan to bring a child under the age of 18.

This is a casual, relaxed atmosphere. Please wear comfortable close-toed shoes, and feel free to wear jeans and a solid black T-shirt so the students know who Heartsy helpers are. (Please no shirts with words on them as they are distracting to this population) 

If you have questions, please call or email Tina Ferguson @ (651) 334-3997 or Tina@beHeARTsy.com

Please note: We are generally not reachable the day of class, during class time or in transit to classes. Questions or comments must be emailed or texted to Tina 24 hours in advance. Pleasr respect our prep time.

Thank you so much for your support! Your assistance in our classes or at 3rd Monday art material preparation day has been absolutely key to our success as a volunteer based NonProfit 501.c3 organization.

2026-11-19 | 9:45 AM - 11:45 AM

Location: Phoenix, AZ, 85042

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009A3yWwMAJ",date:"2026-11-19"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-20 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3x8MAC",date:"2026-11-20"},{name:"Site Beautification at YWCA",description:`Part of YWCA's mission is to mitigate aging’s most harmful threats through home-delivered meals and senior centers. The organization provides safe spaces where older adults can congregate, share a meal, crack a smile, and create community.

Do you have a knack for organizing, labeling, decluttering, kit asssembly, or decorating? Then this volunteer opportunity is for you! Help YWCA maintain a warm and welcoming environment for senior guests at their main location in Glendale. Tasks will vary each month. A hot lunch will be provided if desired!

Volunteers must be 18 years or older to participate in this volunteer opportunity.

2026-11-20 | 10:30 AM - 12:30 PM

Location: Glendale, AZ, 85302

Volunteers still needed: 6`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000092exPYMAY",date:"2026-11-20"},{name:"From the Ground Up: Volunteer Day at the Ranch (Referral)",description:`Join us for a meaningful day of giving back at Wildcat Ranch Phoenix! This in-person volunteer event is a wonderful opportunity to roll up your sleeves, enjoy the outdoors, and make a direct impact on the ranch and the horses who call it home.

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

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008lVZDlMAO",date:"2026-11-21"},{name:"2026 Family Volunteer Day at HandsOn Greater Phoenix",description:`Saturday, November 21st, is National Family Volunteer Day! Bring the family to this fun and engaging volunteer event at the HandsOn Greater Phoenix office in Mesa!

Families can expect to complete small construction builds and crafty projects to benefit our nonprofit partners. Whether it's wrapping presents for the holiday season, assembling kitted projects for youth, or building outdoor furniture for local direct service organizations, we'll have an activity for you to get creative for a cause!

This year's activities will include:

	
mural painting

	
dog bed contruction

	
no-sew blankets

	
gift wrapping

	
cleaning and organizing

	
cricut stencil cutting

The minimum age for participation is 6. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child/children, please email the opportunity coordinator listed below and ask to reserve a guest slot(s). Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-21 | 9:00 AM - 12:00 PM

Location: Phoenix, AZ, 85008

Volunteers still needed: 38`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009TZHqHMAX",date:"2026-11-21"},{name:"Yard Games with Civitan House",description:`Join the residents of Civitan House, a home for adults with developmental disabilities, in a morning of fun! Play classic yard games like corn hole, bocci ball, croquet, and more in this social volunteer opportunity.

This opportunity will take place outside. In the event of rain, we will move inside and play Bingo.

The minimum age for this volunteer opportunity is 8 with a parent or guardian. All volunteers under the age of 18 must be accompanied by a parent/guardian.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-21 | 9:00 AM - 11:00 AM

Location: Phoenix, AZ, 85015

Volunteers still needed: 7`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009TUPgtMAH",date:"2026-11-21"},{name:"The People&#39;s Garden (Referral)",description:`Volunteers are one of the most powerful ways Local First Arizona mobilizes communities across the state. By supporting our food access and community initiatives, volunteers help connect residents to fresh, nourishing foods while creating welcoming spaces that celebrate local food and the people who grow, make and share it.

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

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000092jIHgMAM",date:"2026-11-21"},{name:"Medical Sort and Pack at Project C.U.R.E.",description:`Bring hope and health to the world with Project C.U.R.E., a national faith-based organization! Join us as we sort and pack desperately needed medical supplies that are shipped to hospitals, clinics, and orphanages in over 100 poverty stricken countries worldwide! Volunteers will meet new people and learn a lot about medical supplies and the urgent needs of them in under-resourced countries around the world.

The minimum age for this volunteer opportunity is 14 with a parent or guardian. All volunteers under the age of 18 must be accompanied by a parent/guardian.

Volunteers must create an account with Project C.U.R.E. and sign in through their system at the warehouse. To make this process faster, please register here to set up your account before the project date.

Note: The building is a warehouse, so please wear close-toed shoes, appropriate clothing and bring water. You may be packing in either the warehouse or the sorting center. Please be prepared to do some lifting (up to 30 pounds). 

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-21 | 9:00 AM - 12:00 PM

Location: Phoenix, AZ, 85009

Volunteers still needed: 6`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008l05qTMAQ",date:"2026-11-21"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

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

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008qxBLxMAM",date:"2026-11-23"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

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

Volunteers still needed: 27`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009VgQXYMA3",date:"2026-11-26"},{name:"Rise and Dine at HomeBase",description:`Start your morning off right by providing a warm, wholesome breakfast for homeless youth and young adults (ages 18-24) at HomeBase Youth Services. Serve up pancakes, bacon, eggs and toast with a smile, while giving the residents energy to start their day off right!

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

Volunteers still needed: 7`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008lZ4j8MAC",date:"2026-11-28"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

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

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fFx9SMAS",date:"2026-12-01"}]},xg={title:"City of Flagstaff",note:null,opportunities:[{name:"Open Space Working Group meeting",description:`Come meet with Open Space Stewards, and get updates on Flagstaff Open Space's projects at Picture Canyon, McMillan Mesa, and Observatory Mesa Natural Preserves!

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

• Fix-It Clinic Assist - See "Activity Description" (13 spots available)
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

• Fix-It Clinic Assist - See "Activity Description" (13 spots available)
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

• Fix-It Clinic Assist - See "Activity Description" (13 spots available)
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

• Fix-It Clinic Assist - See "Activity Description" (13 spots available)
• Fix-It Clinic Lead - See "Activity Description" (10 spots available)`,date:"2027-05-08",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Drop-Off Day",description:`Drop-Off Day connects residents with safe, free, and convenient disposal and recycling services for household hazardous waste and other hard-to-recycle materials. Through community partnerships, the events divert waste from the landfill, protect public health and the environment, and makes responsible disposal more accessible. We need help from volunteers to help keep the event running smoothly. \r
\r
Volunteer position and roles include:\r
(1) Greeters:\r
- Count the number of vehicles (using a clicker),  \r
- Provide directions to community members based on the items they brought. (Example: the e-waste vendor is at the fourth station around the bend.)   \r
- Provide community members with waste diversion outreach materials.  \r
- Help answer any questions if time allows. \r
\r
(2) Material Collection\r
- Assist with lifting items out of vehicles and placing them in the correct bin/area, as directed by station lead.\r
\r
(3) Traffic Control\r
- Keep traffic moving safely.\r
- Direct vehicles to drop-off location.\r
\r
(4) Rover/Floater\r
- Collect small drop-off items from vehicles to reduce traffic.\r
- Relieve other volunteers for breaks.

2026-10-24 | 10:00 AM - 2:00 PM

Location: Coconino County Health and Human Services

Category: Special Event

• Drop-Off Day - Rover/Floater (2 spots available)
• Drop-Off Day - Material Collection (7 spots available)
• Drop-Off Day - Traffic Control (3 spots available)`,date:"2026-10-24",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Open Spaces Commission meeting",description:`This is a regularly-scheduled Open Spaces Commission meeting, to which the public is involved. Click "Volunteer" if you're a Commissioner, or click on "Sign Up" if you'd like to participate. For more information and for a link to the agenda, visit https://www.flagstaff.az.gov/3327/Open-Spaces-Commission. This meeting is a field visit, and we'll meet at the Thorpe Bark Park and carpool up to Observatory Mesa Natural Preserve.

2026-10-26 | 3:30 PM - 6:00 PM

Location: Thorpe Park

• ALL Parks, Recreation, Open Space & Events Volunt - Open Spaces Commission meeting (12 spots available)`,date:"2026-10-26",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Hal Jensen (1/5)",description:`7/21/26 has been cancelled due to rain\r
Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!

2026-06-16 | 4:00 PM - 6:00 PM

Location: Hal Jensen Recreation Center Garden

Category: Gardening

• Community Gardens - Garden Volunteer (0 spots available)
• Community Steward - Maintenance Steward Lead (0 spots available)`,date:"2026-06-16",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Hal Jensen (2/5)",description:`7/21/26 has been cancelled due to rain\r
Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!

2026-07-21 | 4:00 PM - 6:00 PM

Location: Hal Jensen Recreation Center Garden

Category: Gardening

• Community Gardens - Garden Volunteer (0 spots available)
• Community Steward - Maintenance Steward Lead (0 spots available)`,date:"2026-07-21",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Hal Jensen (3/5)",description:`7/21/26 has been cancelled due to rain\r
Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!

2026-08-18 | 4:00 PM - 6:00 PM

Location: Hal Jensen Recreation Center Garden

Category: Gardening

• Community Gardens - Garden Volunteer (0 spots available)
• Community Steward - Maintenance Steward Lead (0 spots available)`,date:"2026-08-18",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Hal Jensen (4/5)",description:`7/21/26 has been cancelled due to rain\r
Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!

2026-09-15 | 4:00 PM - 6:00 PM

Location: Hal Jensen Recreation Center Garden

Category: Gardening

• Community Gardens - Garden Volunteer (0 spots available)
• Community Steward - Maintenance Steward Lead (0 spots available)`,date:"2026-09-15",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Hal Jensen (5/5)",description:`7/21/26 has been cancelled due to rain\r
Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!

2026-10-20 | 4:00 PM - 6:00 PM

Location: Hal Jensen Recreation Center Garden

Category: Gardening

• Community Gardens - Garden Volunteer (0 spots available)
• Community Steward - Maintenance Steward Lead (0 spots available)`,date:"2026-10-20",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Tourism Service Day - Fall",description:`Join the City of Flagstaff, Discover Flagstaff, and the Sustainability Office for our Fall 2026 Tourism Service Day! Meet at the Milligan House (323 W Aspen Ave) to check in, receive supplies, and attend a brief safety talk before walking to the site to begin our clean-up. Supplies will be provided, please come prepared with sun protection, water, close toed shoes, and anything else you need to have a successful event. After the clean-up, join us for a thank you lunch provided by Discover Flagstaff!

2026-10-21 | 10:00 AM - 11:30 AM

Location: Milligan House (323 W Aspen Ave)

Category: Trash Clean-Up

• ALL Flagstaff Volunteers - Tourism Service Day Cleanup Volunteers (35 spots available)`,date:"2026-10-21",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Full Moon Hike",description:`PROSE - Open Space hosts a full moon walk (and sometimes bike ride) on one of our beautiful Open Space properties--a different spot each month. We start about a half-hour before the moon rises, walk on either a loop trail or out-and-back, and watch the full moon rise. Come check out your open spaces, and meet new people! Check each month for specific starting time, meeting place, and what trail we'll walk/ride for that full moon. Wear sturdy shoes, dress for the weather, and bring a red-light flashlight and hiking poles, but we'll have extras! This month, we'll walk the McMillan Mesa Loop Trail, starting at the buffalo statue at Buffalo Park, and hiking counter-clockwise (down toward Jay Lively, cross Forest Ave, join the Sunset Trail toward BASIS school, then onto the McMillan Mesa Loop trail back to Buffalo Park. It is about 2.5 miles with one uphill but mostly flat.

2026-10-25 | 4:45 PM - 7:00 PM

Location: McMillan Mesa Natural Area

Category: Full  Moon Hike Winter

• ALL Flagstaff Volunteers - Help keeping the group together (1 spots available)`,date:"2026-10-25",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Full Moon Hike--Tunnel Springs Trail",description:`PROSE - Open Space hosts a full moon walk (and sometimes bike ride) on one of our beautiful Open Space properties--a different spot each month. We start about a half-hour before the moon rises, walk on either a loop trail or out-and-back, and watch the full moon rise. Come check out your open spaces, and meet new people! Check each month for specific starting time, meeting place, and what trail we'll walk/ride for that full moon. Wear sturdy shoes, dress for the weather, and bring a red-light flashlight and hiking poles, but we'll have extras! This month, we'll walk Observatory Mesa Natural Area's Tunnel Springs Trail. It is about 3 miles out and back, and is steep, but all on the wide FUTS trail. Meet at the intersection of Railroad Springs Blvd & Adirondack Ave.

2026-11-24 | 4:45 PM - 6:45 PM

Location: Observatory Mesa-Tunnel Springs (RR Springs Blvd)

Category: Special Event`,date:"2026-11-24",link:"https://volunteer.flagstaffaz.gov/Calendar"}]},bo={handsOnGreaterPhoenix:Sg,cityOfFlagstaff:xg};function Wl(e){return e&&e.replace(/&#39;/g,"'").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#8217;/g,"’").replace(/&#8216;/g,"‘").replace(/&#8220;/g,"“").replace(/&#8221;/g,"”").replace(/&nbsp;/g," ")}function Bo(e,n){let t=e;if(!t&&n){const i=n.match(/(\d{4}-\d{2}-\d{2})\s*\|/);i&&(t=i[1])}if(!t)return!0;const r=new Date(t+"T23:59:59");if(isNaN(r.getTime()))return!0;const o=new Date;return o.setHours(0,0,0,0),r>=o}function vc(e){return e.map(n=>({...n,name:Wl(n.name),description:Wl(n.description)})).filter(n=>Bo(n.date,n.description))}const wc={title:"HandsOn Greater Phoenix",note:'For referral volunteer opportunities (marked "Referral" in the title), please contact the listed volunteer coordinator directly to confirm whether service hours can be verified, since HandsOn cannot sign off on hours for projects run by partner organizations.',opportunities:[{name:"TopGolf Competition - Gilbert",link:"https://www.handsonphoenix.org/calendar",description:`Volunteers are needed for event support.
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

Interests: Cooking, helping the homeless`}]},kc={title:"City of Flagstaff",note:null,opportunities:[{name:"Full Moon Bike Ride/Hike!",link:"https://volunteer.flagstaffaz.gov/Calendar",description:`Enjoy outdoor activites? Then this opportunitiy is for you! Enjoy a night out walking on a trail or out and back, and watch the full moon rise. You can meet new people, bike, and hike during this event. You will go on the Karen Cooper FUTS trail, which lasts about 6 miles.


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

Time: 6:15 PM - 8:15 PM`}]};var Dl,_l;const Ir=((_l=(Dl=bo.handsOnGreaterPhoenix)==null?void 0:Dl.opportunities)==null?void 0:_l.length)>0?bo.handsOnGreaterPhoenix:wc,bg={...Ir,note:'For referral volunteer opportunities (marked "Referral" in the title), please contact HandsOn Greater Phoenix to confirm whether volunteer hours can be verified for that project before signing up.',opportunities:Ir===wc?Ir.opportunities.filter(e=>Bo(e.date)):vc(Ir.opportunities).map(e=>({...e,link:e.link||"https://www.handsonphoenix.org/calendar"}))};var Bl,Gl;const Rr=((Gl=(Bl=bo.cityOfFlagstaff)==null?void 0:Bl.opportunities)==null?void 0:Gl.length)>0?bo.cityOfFlagstaff:kc,Ag={...Rr,opportunities:Rr===kc?Rr.opportunities.filter(e=>Bo(e.date)):vc(Rr.opportunities).map(e=>({...e,link:e.link||"https://volunteer.flagstaffaz.gov/Calendar"}))},ye={handsOnGreaterPhoenix:bg,arizonaStateParks:{title:"Arizona State Parks and Trails",note:`Note: The following opportunities require an application, which can be done through this link:
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
Tempe, AZ  85282`}]}};Object.keys(ye).forEach(e=>{ye[e]={...ye[e],opportunities:ye[e].opportunities.filter(n=>Bo(n.date,n.description))}});const Cg=Object.freeze(Object.defineProperty({__proto__:null,organizations:ye},Symbol.toStringTag,{value:"Module"}));function Mg(){const[e,n]=P.useState([{sender:"ai",text:"Hi! I'm Quest AI. Tell me your interests and location, and I will find the best volunteer opportunity near you!"}]),[t,r]=P.useState(""),[o,i]=P.useState(!1),a=P.useRef(null);P.useEffect(()=>{a.current&&(a.current.scrollTop=a.current.scrollHeight)},[e]);const s=JSON.stringify(ye);async function l(){if(!t.trim()||o)return;const f=t;r(""),i(!0),n(c=>[...c,{sender:"user",text:f}]);try{const c=await Pg(f,s);n(m=>[...m,{sender:"ai",text:c}])}catch(c){n(m=>[...m,{sender:"ai",text:`Error: ${c.message}`}])}finally{i(!1)}}function u(f){f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),l())}return h.jsxs("div",{className:"quest-page-wrap",children:[h.jsx(mr,{current:"quest"}),h.jsxs("div",{className:"quest-page",children:[h.jsx("h1",{className:"quest-title",children:"Quest AI"}),!yc()&&h.jsxs("div",{className:"quest-config-banner",children:["Quest AI isn't connected yet. Add your Firebase API key in ",h.jsx("code",{children:"src/config/firebaseConfig.js"})," to enable live responses."]}),h.jsx("div",{className:"quest-chat-scroll",ref:a,children:e.map((f,c)=>h.jsxs("div",{className:`quest-message-row ${f.sender}`,children:[f.sender==="ai"&&h.jsx("span",{className:`quest-avatar ai${o&&c===e.length-1?" loading":""}`,children:"✨"}),h.jsx("div",{className:`quest-bubble ${f.sender}`,children:f.text}),f.sender==="user"&&h.jsx("span",{className:"quest-avatar user",children:"👤"})]},c))}),h.jsxs("div",{className:"quest-input-bar",children:[h.jsxs("div",{className:"quest-input-wrap",children:[h.jsx("input",{className:"quest-input",value:t,onChange:f=>r(f.target.value),onKeyDown:u}),!t&&h.jsx("span",{className:"quest-input-placeholder",children:"Ask Quest AI..."})]}),h.jsx("button",{className:"quest-send-btn",onClick:l,children:o?"⋯":"➤"})]})]})]})}const Tg="modulepreload",Eg=function(e){return"/"+e},Hl={},Vg=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(t.map(l=>{if(l=Eg(l),l in Hl)return;Hl[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":Tg,u||(c.as="script"),c.crossOrigin="",c.href=l,s&&c.setAttribute("nonce",s),document.head.appendChild(c),u)return new Promise((m,y)=>{c.addEventListener("load",m),c.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return o.then(a=>{for(const s of a||[])s.status==="rejected"&&i(s.reason);return n().catch(i)})},Pc="AIzaSyDyePdZI22sIGwZ84yK5mwOzjhtrVwq8us";function Fl(){return!!Pc}const jg={handsOnGreaterPhoenix:"/org/hands-on-greater-phoenix",arizonaStateParks:"/org/arizona-state-parks",azSustainabilityAlliance:"/org/az-sustainability-alliance",bureauOfLandManagement:"/org/bureau-of-land-management",cityOfFlagstaff:"/org/city-of-flagstaff",feedMyStarvingChildren:"/org/feed-my-starving-children",lostOurHomesPetRescue:"/org/lost-our-homes-pet-rescue",juniorAchievement:"/org/junior-achievement"},Sc="vh_geocode_cache_v5";let Ur=null;function Ng(e){var n;return(n=window.google)!=null&&n.maps?Promise.resolve(window.google):Ur||(Ur=new Promise((t,r)=>{const o=document.createElement("script");o.src=`https://maps.googleapis.com/maps/api/js?key=${e}&libraries=places,geometry`,o.async=!0,o.onload=()=>{const i=document.createElement("script");i.src="https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js",i.onload=()=>t(window.google),i.onerror=()=>t(window.google),document.head.appendChild(i)},o.onerror=r,document.head.appendChild(o)}),Ur)}function Lg(e){if(!e)return null;const n=e.match(/Location:\s*([^\n]+)/i);if(!n)return null;let t=n[1].trim();return t=t.replace(/,?\s*AZ,\s*AZ/i,", AZ"),t.toLowerCase().includes("details")||t.toLowerCase().includes("provided after")||t.toLowerCase().includes("provided upon")||t.toLowerCase().includes("contact")||t.toLowerCase().includes("various")||t.toLowerCase().includes("multiple")||t.toLowerCase().includes("tbd")||t.length<4?null:/^\d{5}$/.test(t)?`${t}, AZ`:t}function Og(){try{const e=localStorage.getItem(Sc);return e?JSON.parse(e):{}}catch{return{}}}function zg(e){try{localStorage.setItem(Sc,JSON.stringify(e))}catch{}}async function Ig(e,n,t){const r=n.toLowerCase().trim();return t[r]?t[r]:new Promise(o=>{new e.maps.Geocoder().geocode({address:n+", Arizona",componentRestrictions:{country:"us"},bounds:new e.maps.LatLngBounds(new e.maps.LatLng(31.3,-114.8),new e.maps.LatLng(37,-109))},(a,s)=>{if(s==="OK"&&a[0]){const{lat:l,lng:u}=a[0].geometry.location,f={lat:l(),lng:u()};t[r]=f,o(f)}else t[r]=null,o(null)})})}async function Rg(e,n,t){const r=Og(),o=[],i=[];for(const[s,l]of Object.entries(n))for(const u of l.opportunities){const f=Lg(u.description);f&&i.push({name:u.name,orgKey:s,loc:f})}t(`Locating ${i.length} opportunities...`);let a=0;for(const s of i){const l=await Ig(e,s.loc,r);l&&o.push({name:s.name,orgKey:s.orgKey,lat:l.lat,lng:l.lng}),a++,a%10===0&&t(`Locating opportunities... (${a}/${i.length})`),await new Promise(u=>setTimeout(u,60))}return zg(r),o}function Ug(){const e=_o(),n=P.useRef(null),t=P.useRef(null),r=P.useRef([]),[o,i]=P.useState(""),[a,s]=P.useState(""),[l,u]=P.useState(null),[f,c]=P.useState(!1),[m,y]=P.useState(""),[v,k]=P.useState(""),[A,p]=P.useState("Loading map..."),[d,g]=P.useState([]);P.useEffect(()=>{if(!Fl())return;let x=!1;return Ng(Pc).then(async T=>{var Le;if(x||!n.current)return;const E=new T.maps.Map(n.current,{center:{lat:33.4484,lng:-111.95},zoom:9,mapTypeControl:!1});if(t.current=E,p("Locating opportunities..."),await new Promise(X=>setTimeout(X,150)),x)return;const{organizations:I}=await Vg(async()=>{const{organizations:X}=await Promise.resolve().then(()=>Cg);return{organizations:X}},void 0);if(x)return;const N=Object.values(I).reduce((X,Ze)=>X+Ze.opportunities.length,0);console.log(`MapsPage: loaded ${N} opportunities`);const q=await Rg(T,I,p);if(x)return;g(q),r.current.forEach(X=>X.setMap(null));const K=q.map(X=>{const Ze=new T.maps.Marker({position:{lat:X.lat,lng:X.lng},title:X.name});return Ze.addListener("click",()=>u(X)),Ze});r.current=K,(Le=window.markerClusterer)!=null&&Le.MarkerClusterer?new window.markerClusterer.MarkerClusterer({map:E,markers:K}):K.forEach(X=>X.setMap(E)),c(!0),p("")}).catch(()=>{x||(y("Google Maps failed to load. Check your API key in src/config/googleMapsConfig.js."),p(""))}),()=>{x=!0}},[]);function w(){var E;if(k(""),s(""),!f){k("The map is still loading — try again in a moment.");return}if(!o.trim()){k("Enter an address first.");return}const x=window.google;if(!((E=x==null?void 0:x.maps)!=null&&E.Geocoder)){k("Geocoding not available. Try reloading.");return}new x.maps.Geocoder().geocode({address:o,componentRestrictions:{country:"us"},bounds:new x.maps.LatLngBounds(new x.maps.LatLng(31.3,-114.8),new x.maps.LatLng(37,-109))},(I,N)=>{var Ze,Zn;if(N!=="OK"||!I[0]){k(`Couldn't find that address. Try adding a city, e.g. "1110 W Washington, Phoenix".`);return}const q=I[0].geometry.location;let K=null,Le=1/0;for(const Oe of d){const C=(Zn=(Ze=x.maps.geometry)==null?void 0:Ze.spherical)!=null&&Zn.computeDistanceBetween?x.maps.geometry.spherical.computeDistanceBetween(q,new x.maps.LatLng(Oe.lat,Oe.lng)):Wg(q.lat(),q.lng(),Oe.lat,Oe.lng);C<Le&&(Le=C,K=Oe)}if(!K){k("No mapped opportunities found.");return}u(K),t.current.panTo({lat:K.lat,lng:K.lng}),t.current.setZoom(13),new x.maps.DirectionsService().route({origin:q,destination:{lat:K.lat,lng:K.lng},travelMode:x.maps.TravelMode.DRIVING},(Oe,C)=>{if(C==="OK"){const V=Oe.routes[0].legs[0],j=Math.round(V.duration.value/60),F=(V.distance.value/1609.34).toFixed(1);s(`📍 ${K.name} — ${F} mi · ${j} min away`)}else k(`Found nearest opportunity (${K.name}) but couldn't calculate drive time.`)})})}function b(){if(!l)return;const x=jg[l.orgKey];x&&e(x),u(null)}return h.jsxs("div",{className:"maps-page",children:[h.jsx(mr,{current:"maps"}),h.jsxs("div",{className:"maps-map-wrap",children:[Fl()?h.jsx("div",{className:"maps-map-canvas",ref:n}):h.jsx("div",{className:"maps-not-configured",children:h.jsxs("p",{children:["Add your Google Maps API key in ",h.jsx("code",{children:"src/config/googleMapsConfig.js"})]})}),m&&h.jsx("div",{className:"maps-not-configured",style:{background:"rgba(40,0,0,0.85)"},children:h.jsx("p",{children:m})}),A&&h.jsxs("div",{className:"maps-loading-banner",children:[h.jsx("span",{className:"maps-loading-spinner"})," ",A]}),h.jsxs("div",{className:"maps-search-panel",children:[h.jsx("input",{className:"maps-address-input",placeholder:"Address",value:o,onChange:x=>i(x.target.value),onKeyDown:x=>x.key==="Enter"&&w()}),h.jsx("button",{className:"maps-find-btn",onClick:w,children:"Find Nearest Opportunity"}),v&&h.jsx("span",{className:"maps-find-error",children:v}),a&&h.jsx("span",{className:"maps-travel-time",children:a}),h.jsx("p",{className:"maps-location-note",children:"📌 Some pin locations are approximate based on the area listed. Register with the organization for exact details."})]})]}),l&&h.jsx("div",{className:"maps-sheet-overlay",onClick:()=>u(null),children:h.jsxs("div",{className:"maps-sheet",onClick:x=>x.stopPropagation(),children:[h.jsx("span",{className:"maps-sheet-name",children:l.name}),h.jsx("button",{className:"maps-sheet-btn",onClick:b,children:"Click to View Organization"})]})})]})}function Wg(e,n,t,r){const i=u=>u*Math.PI/180,a=i(t-e),s=i(r-n),l=Math.sin(a/2)**2+Math.cos(i(e))*Math.cos(i(t))*Math.sin(s/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))}const Hg="/assets/Image2-DbNKlkYW.png";function Fg(){return h.jsxs("div",{className:"about-page",children:[h.jsx(mr,{current:"about"}),h.jsxs("div",{className:"about-scroll",children:[h.jsx("div",{className:"about-hero",style:{backgroundImage:`url(${Hg})`},children:h.jsxs("div",{className:"about-hero-text",children:[h.jsx("h1",{className:"about-mission-title",children:"Our Mission"}),h.jsx("p",{className:"about-mission-body",children:`With the right tools and access to meaningful opportunities,
any student can make a difference. VolunteerHigh empowers
students to connect with
causes they care about, building lasting community
impact and growing service.`})]})}),h.jsxs("div",{className:"about-section",children:[h.jsxs("div",{className:"about-divider-row",children:[h.jsx("div",{className:"rule"}),h.jsx("span",{className:"label",children:"About VolunteerHigh"}),h.jsx("div",{className:"rule"})]}),h.jsx("p",{className:"about-body-text",children:`Created By A Student, for Students.

VolunteerHigh is a platform designed to help high school students in Arizona discover meaningful volunteer opportunities
 in their lcoal communities. Finding volunteer work can be difficult, with opportunities scattered across different websites and organizations.
VolunteerHigh simplifies this process by displaying various organizations in one place.`})]})]})]})}function va(e){const n=/(https?:\/\/[^\s]+)/g;return e.split(n).map((r,o)=>n.test(r)&&r.startsWith("http")?h.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:r},o):h.jsx(xa.Fragment,{children:r},o))}const Dg=[{question:"Is VolunteerHigh Free?",answer:"Yes! VolunteerHigh is a completely free tool that can be used by anybody in Arizona."},{question:"Do I have to sign up to use VolunteerHigh?",answer:"No. VolunteerHigh requires no sign ups, though some opportunities require an account or aplication."},{question:"What organizations is VolunteerHigh partnered with?",answer:"VolunteerHigh is partnered with 8 organizations across the valley as of now."},{question:"Can I use VolunteerHigh in California?",answer:"No. VolunteerHigh is currently a platform designed only for students in Arizona."},{question:"How can I contact VolunteerHigh",answer:"Email VolunteerHighSupport@gmail.com"},{question:"Where can I contact the organizations?",answer:`Here are our following partner organizations, and their contact information:

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
Email: Volunteering@lostourhome.org`}];function _g({question:e,answer:n}){const[t,r]=P.useState(!1);return h.jsxs("div",{className:"faq-row",children:[h.jsxs("button",{className:"faq-question-row",onClick:()=>r(o=>!o),children:[h.jsx("span",{children:e}),h.jsx("span",{className:"faq-toggle-icon",children:t?"−":"+"})]}),t&&h.jsx("p",{className:"faq-answer",children:va(n)})]})}function Bg(){return h.jsxs("div",{className:"faq-page",children:[h.jsx(mr,{current:"faq"}),h.jsx("div",{className:"faq-scroll",children:h.jsxs("div",{className:"faq-inner",children:[h.jsxs("div",{className:"faq-divider-row",children:[h.jsx("div",{className:"rule"}),h.jsx("span",{className:"label",children:"FAQ's"}),h.jsx("div",{className:"rule"})]}),Dg.map((e,n)=>h.jsx(_g,{question:e.question,answer:e.answer},n))]})})]})}function Mn({title:e,note:n,opportunities:t,centerTitle:r,bannerImage:o,contactEmail:i}){const[a,s]=P.useState(null),[l,u]=P.useState(""),f=P.useMemo(()=>{if(!l.trim())return t;const y=l.toLowerCase();return t.filter(v=>v.name.toLowerCase().includes(y)||v.description.toLowerCase().includes(y))},[t,l]),c=a!==null?t[a]:null;function m(y){if(!i)return null;const v=`Volunteering Inquiry — ${y}`,k=`Hi,

I'm interested in the "${y}" volunteer opportunity with ${e}, and I'd like to learn more.

Thank you!`;return`mailto:${i}?subject=${encodeURIComponent(v)}&body=${encodeURIComponent(k)}`}return h.jsxs("div",{className:"org-page",children:[o&&h.jsx("div",{className:"org-banner",style:{backgroundImage:`url(${o})`}}),h.jsxs("div",{className:`org-header${r?" center-title":""}`,children:[h.jsx("h1",{className:"org-title",children:e}),n&&h.jsx("p",{className:"org-note",children:va(n)})]}),h.jsxs("div",{className:"org-body",children:[h.jsxs("div",{className:"org-list-pane",children:[h.jsx("h2",{className:"org-list-heading",children:"Opportunities Near You 📍"}),h.jsx("input",{className:"org-search-input",type:"text",placeholder:"Search opportunities...",value:l,onChange:y=>u(y.target.value)}),h.jsx("div",{className:"org-list-scroll",children:f.length===0?h.jsx("p",{className:"org-list-empty",children:"No opportunities match your search."}):f.map(y=>{const v=t.indexOf(y);return h.jsx("button",{className:`org-list-item${a===v?" selected":""}`,onClick:()=>s(v),children:y.name},v)})})]}),h.jsx("div",{className:"org-divider"}),h.jsx("div",{className:"org-detail-pane",children:h.jsx("div",{className:"org-detail-scroll",children:c?h.jsxs(h.Fragment,{children:[h.jsx("h3",{className:"org-detail-name",children:c.name}),h.jsx("p",{className:"org-detail-description",children:va(c.description)}),h.jsxs("div",{className:"org-detail-actions",children:[c.link&&h.jsx("a",{className:"org-apply-button",href:c.link,target:"_blank",rel:"noopener noreferrer",children:"View Official Listing ↗"}),i&&h.jsxs("a",{className:"org-apply-button org-apply-button-secondary",href:m(c.name),children:["✉ Email ",e]})]})]}):h.jsx("p",{className:"org-detail-placeholder",children:"Select an opportunity on the left to view details"})})})]})]})}const Tn={arizonaStateParks:"crichards@azstateparks.gov",handsOnGreaterPhoenix:"info@handsonphoenix.org",cityOfFlagstaff:"Blake.Commisso@flagstaffaz.gov",juniorAchievement:"taylors@jaaz.org",feedMyStarvingChildren:"info@fmsc.org",azSustainabilityAlliance:"info@azsustain.org",bureauOfLandManagement:"elitchfield@az.go",lostOurHomesPetRescue:"Volunteering@lostourhome.org"};function Gg(){const e=ye.handsOnGreaterPhoenix;return h.jsx(Mn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Tn.handsOnGreaterPhoenix})}function Yg(){const e=ye.arizonaStateParks;return h.jsx(Mn,{title:e.title,note:e.note,opportunities:e.opportunities,centerTitle:!0,contactEmail:Tn.arizonaStateParks})}function Zg(){const e=ye.cityOfFlagstaff;return h.jsx(Mn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Tn.cityOfFlagstaff})}function $g(){const e=ye.juniorAchievement;return h.jsx(Mn,{title:e.title,note:e.note,opportunities:e.opportunities,centerTitle:!0,contactEmail:Tn.juniorAchievement})}function qg(){const e=ye.feedMyStarvingChildren;return h.jsx(Mn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Tn.feedMyStarvingChildren})}function Kg(){const e=ye.azSustainabilityAlliance;return h.jsx(Mn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Tn.azSustainabilityAlliance})}function Qg(){const e=ye.bureauOfLandManagement;return h.jsx(Mn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Tn.bureauOfLandManagement})}function Jg(){const e=ye.lostOurHomesPetRescue;return h.jsx(Mn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Tn.lostOurHomesPetRescue})}function Xg(){return h.jsx(Qf,{children:h.jsxs(Bf,{children:[h.jsx(de,{path:"/",element:h.jsx(ng,{})}),h.jsx(de,{path:"/home",element:h.jsx(vg,{})}),h.jsx(de,{path:"/quest",element:h.jsx(Mg,{})}),h.jsx(de,{path:"/maps",element:h.jsx(Ug,{})}),h.jsx(de,{path:"/about",element:h.jsx(Fg,{})}),h.jsx(de,{path:"/faq",element:h.jsx(Bg,{})}),h.jsx(de,{path:"/org/hands-on-greater-phoenix",element:h.jsx(Gg,{})}),h.jsx(de,{path:"/org/arizona-state-parks",element:h.jsx(Yg,{})}),h.jsx(de,{path:"/org/city-of-flagstaff",element:h.jsx(Zg,{})}),h.jsx(de,{path:"/org/junior-achievement",element:h.jsx($g,{})}),h.jsx(de,{path:"/org/feed-my-starving-children",element:h.jsx(qg,{})}),h.jsx(de,{path:"/org/az-sustainability-alliance",element:h.jsx(Kg,{})}),h.jsx(de,{path:"/org/bureau-of-land-management",element:h.jsx(Qg,{})}),h.jsx(de,{path:"/org/lost-our-homes-pet-rescue",element:h.jsx(Jg,{})})]})})}Si.createRoot(document.getElementById("root")).render(h.jsx(xa.StrictMode,{children:h.jsx(Xg,{})}));
