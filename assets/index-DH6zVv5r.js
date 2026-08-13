function Sc(e,n){for(var t=0;t<n.length;t++){const o=n[t];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(o,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function Cc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bl={exports:{}},xr={},Kl={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var co=Symbol.for("react.element"),xc=Symbol.for("react.portal"),Mc=Symbol.for("react.fragment"),Tc=Symbol.for("react.strict_mode"),Ac=Symbol.for("react.profiler"),Vc=Symbol.for("react.provider"),Lc=Symbol.for("react.context"),jc=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),Nc=Symbol.for("react.memo"),Oc=Symbol.for("react.lazy"),vs=Symbol.iterator;function Rc(e){return e===null||typeof e!="object"?null:(e=vs&&e[vs]||e["@@iterator"],typeof e=="function"?e:null)}var Zl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$l=Object.assign,ql={};function kt(e,n,t){this.props=e,this.context=n,this.refs=ql,this.updater=t||Zl}kt.prototype.isReactComponent={};kt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};kt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ql(){}Ql.prototype=kt.prototype;function wa(e,n,t){this.props=e,this.context=n,this.refs=ql,this.updater=t||Zl}var ka=wa.prototype=new Ql;ka.constructor=wa;$l(ka,kt.prototype);ka.isPureReactComponent=!0;var ws=Array.isArray,Jl=Object.prototype.hasOwnProperty,Pa={current:null},Xl={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,n,t){var o,r={},i=null,a=null;if(n!=null)for(o in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)Jl.call(n,o)&&!Xl.hasOwnProperty(o)&&(r[o]=n[o]);var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}if(e&&e.defaultProps)for(o in s=e.defaultProps,s)r[o]===void 0&&(r[o]=s[o]);return{$$typeof:co,type:e,key:i,ref:a,props:r,_owner:Pa.current}}function Ic(e,n){return{$$typeof:co,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ba(e){return typeof e=="object"&&e!==null&&e.$$typeof===co}function Wc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ks=/\/+/g;function Br(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Wc(""+e.key):n.toString(36)}function Go(e,n,t,o,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case co:case xc:a=!0}}if(a)return a=e,r=r(a),e=o===""?"."+Br(a,0):o,ws(r)?(t="",e!=null&&(t=e.replace(ks,"$&/")+"/"),Go(r,n,t,"",function(u){return u})):r!=null&&(ba(r)&&(r=Ic(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(ks,"$&/")+"/")+e)),n.push(r)),1;if(a=0,o=o===""?".":o+":",ws(e))for(var s=0;s<e.length;s++){i=e[s];var l=o+Br(i,s);a+=Go(i,n,t,l,r)}else if(l=Rc(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=o+Br(i,s++),a+=Go(i,n,t,l,r);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function ko(e,n,t){if(e==null)return e;var o=[],r=0;return Go(e,o,"","",function(i){return n.call(t,i,r++)}),o}function zc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Do={transition:null},Uc={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Do,ReactCurrentOwner:Pa};function nu(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:ko,forEach:function(e,n,t){ko(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ko(e,function(){n++}),n},toArray:function(e){return ko(e,function(n){return n})||[]},only:function(e){if(!ba(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=kt;N.Fragment=Mc;N.Profiler=Ac;N.PureComponent=wa;N.StrictMode=Tc;N.Suspense=Ec;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uc;N.act=nu;N.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=$l({},e.props),r=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=Pa.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in n)Jl.call(n,l)&&!Xl.hasOwnProperty(l)&&(o[l]=n[l]===void 0&&s!==void 0?s[l]:n[l])}var l=arguments.length-2;if(l===1)o.children=t;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:co,type:e.type,key:r,ref:i,props:o,_owner:a}};N.createContext=function(e){return e={$$typeof:Lc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Vc,_context:e},e.Consumer=e};N.createElement=eu;N.createFactory=function(e){var n=eu.bind(null,e);return n.type=e,n};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:jc,render:e}};N.isValidElement=ba;N.lazy=function(e){return{$$typeof:Oc,_payload:{_status:-1,_result:e},_init:zc}};N.memo=function(e,n){return{$$typeof:Nc,type:e,compare:n===void 0?null:n}};N.startTransition=function(e){var n=Do.transition;Do.transition={};try{e()}finally{Do.transition=n}};N.unstable_act=nu;N.useCallback=function(e,n){return pe.current.useCallback(e,n)};N.useContext=function(e){return pe.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};N.useEffect=function(e,n){return pe.current.useEffect(e,n)};N.useId=function(){return pe.current.useId()};N.useImperativeHandle=function(e,n,t){return pe.current.useImperativeHandle(e,n,t)};N.useInsertionEffect=function(e,n){return pe.current.useInsertionEffect(e,n)};N.useLayoutEffect=function(e,n){return pe.current.useLayoutEffect(e,n)};N.useMemo=function(e,n){return pe.current.useMemo(e,n)};N.useReducer=function(e,n,t){return pe.current.useReducer(e,n,t)};N.useRef=function(e){return pe.current.useRef(e)};N.useState=function(e){return pe.current.useState(e)};N.useSyncExternalStore=function(e,n,t){return pe.current.useSyncExternalStore(e,n,t)};N.useTransition=function(){return pe.current.useTransition()};N.version="18.3.1";Kl.exports=N;var P=Kl.exports;const Sa=Cc(P),Gc=Sc({__proto__:null,default:Sa},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc=P,Fc=Symbol.for("react.element"),_c=Symbol.for("react.fragment"),Hc=Object.prototype.hasOwnProperty,Yc=Dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bc={key:!0,ref:!0,__self:!0,__source:!0};function tu(e,n,t){var o,r={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(o in n)Hc.call(n,o)&&!Bc.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps,n)r[o]===void 0&&(r[o]=n[o]);return{$$typeof:Fc,type:e,key:i,ref:a,props:r,_owner:Yc.current}}xr.Fragment=_c;xr.jsx=tu;xr.jsxs=tu;Bl.exports=xr;var h=Bl.exports,bi={},ou={exports:{}},xe={},ru={exports:{}},iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(M,L){var j=M.length;M.push(L);e:for(;0<j;){var D=j-1>>>1,ee=M[D];if(0<r(ee,L))M[D]=L,M[j]=ee,j=D;else break e}}function t(M){return M.length===0?null:M[0]}function o(M){if(M.length===0)return null;var L=M[0],j=M.pop();if(j!==L){M[0]=j;e:for(var D=0,ee=M.length,vo=ee>>>1;D<vo;){var Vn=2*(D+1)-1,Yr=M[Vn],Ln=Vn+1,wo=M[Ln];if(0>r(Yr,j))Ln<ee&&0>r(wo,Yr)?(M[D]=wo,M[Ln]=j,D=Ln):(M[D]=Yr,M[Vn]=j,D=Vn);else if(Ln<ee&&0>r(wo,j))M[D]=wo,M[Ln]=j,D=Ln;else break e}}return L}function r(M,L){var j=M.sortIndex-L.sortIndex;return j!==0?j:M.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],f=1,c=null,m=3,y=!1,v=!1,k=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(M){for(var L=t(u);L!==null;){if(L.callback===null)o(u);else if(L.startTime<=M)o(u),L.sortIndex=L.expirationTime,n(l,L);else break;L=t(u)}}function w(M){if(k=!1,g(M),!v)if(t(l)!==null)v=!0,Kn(C);else{var L=t(u);L!==null&&Oe(w,L.startTime-M)}}function C(M,L){v=!1,k&&(k=!1,p(V),V=-1),y=!0;var j=m;try{for(g(L),c=t(l);c!==null&&(!(c.expirationTime>L)||M&&!$());){var D=c.callback;if(typeof D=="function"){c.callback=null,m=c.priorityLevel;var ee=D(c.expirationTime<=L);L=e.unstable_now(),typeof ee=="function"?c.callback=ee:c===t(l)&&o(l),g(L)}else o(l);c=t(l)}if(c!==null)var vo=!0;else{var Vn=t(u);Vn!==null&&Oe(w,Vn.startTime-L),vo=!1}return vo}finally{c=null,m=j,y=!1}}var S=!1,A=null,V=-1,I=5,E=-1;function $(){return!(e.unstable_now()-E<I)}function q(){if(A!==null){var M=e.unstable_now();E=M;var L=!0;try{L=A(!0,M)}finally{L?Ne():(S=!1,A=null)}}else S=!1}var Ne;if(typeof d=="function")Ne=function(){d(q)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Ke=X.port2;X.port1.onmessage=q,Ne=function(){Ke.postMessage(null)}}else Ne=function(){x(q,0)};function Kn(M){A=M,S||(S=!0,Ne())}function Oe(M,L){V=x(function(){M(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,Kn(C))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(M){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var j=m;m=L;try{return M()}finally{m=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,L){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var j=m;m=M;try{return L()}finally{m=j}},e.unstable_scheduleCallback=function(M,L,j){var D=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?D+j:D):j=D,M){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=j+ee,M={id:f++,callback:L,priorityLevel:M,startTime:j,expirationTime:ee,sortIndex:-1},j>D?(M.sortIndex=j,n(u,M),t(l)===null&&M===t(u)&&(k?(p(V),V=-1):k=!0,Oe(w,j-D))):(M.sortIndex=ee,n(l,M),v||y||(v=!0,Kn(C))),M},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(M){var L=m;return function(){var j=m;m=L;try{return M.apply(this,arguments)}finally{m=j}}}})(iu);ru.exports=iu;var Kc=ru.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zc=P,Ce=Kc;function b(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var au=new Set,Yt={};function _n(e,n){pt(e,n),pt(e+"Capture",n)}function pt(e,n){for(Yt[e]=n,e=0;e<n.length;e++)au.add(n[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Si=Object.prototype.hasOwnProperty,$c=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ps={},bs={};function qc(e){return Si.call(bs,e)?!0:Si.call(Ps,e)?!1:$c.test(e)?bs[e]=!0:(Ps[e]=!0,!1)}function Qc(e,n,t,o){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jc(e,n,t,o){if(n===null||typeof n>"u"||Qc(e,n,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function fe(e,n,t,o,r,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ie[n]=new fe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ca=/[\-:]([a-z])/g;function xa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ca,xa);ie[n]=new fe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ca,xa);ie[n]=new fe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ca,xa);ie[n]=new fe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ma(e,n,t,o){var r=ie.hasOwnProperty(n)?ie[n]:null;(r!==null?r.type!==0:o||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Jc(n,t,r,o)&&(t=null),o||r===null?qc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,o=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,o?e.setAttributeNS(o,n,t):e.setAttribute(n,t))))}var on=Zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Po=Symbol.for("react.element"),$n=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),Ta=Symbol.for("react.strict_mode"),Ci=Symbol.for("react.profiler"),su=Symbol.for("react.provider"),lu=Symbol.for("react.context"),Aa=Symbol.for("react.forward_ref"),xi=Symbol.for("react.suspense"),Mi=Symbol.for("react.suspense_list"),Va=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),uu=Symbol.for("react.offscreen"),Ss=Symbol.iterator;function Ct(e){return e===null||typeof e!="object"?null:(e=Ss&&e[Ss]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Kr;function Et(e){if(Kr===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Kr=n&&n[1]||""}return`
`+Kr+e}var Zr=!1;function $r(e,n){if(!e||Zr)return"";Zr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var o=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){o=u}e.call(n.prototype)}else{try{throw Error()}catch(u){o=u}e()}}catch(u){if(u&&o&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),i=o.stack.split(`
`),a=r.length-1,s=i.length-1;1<=a&&0<=s&&r[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(r[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||r[a]!==i[s]){var l=`
`+r[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Zr=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Et(e):""}function Xc(e){switch(e.tag){case 5:return Et(e.type);case 16:return Et("Lazy");case 13:return Et("Suspense");case 19:return Et("SuspenseList");case 0:case 2:case 15:return e=$r(e.type,!1),e;case 11:return e=$r(e.type.render,!1),e;case 1:return e=$r(e.type,!0),e;default:return""}}function Ti(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qn:return"Fragment";case $n:return"Portal";case Ci:return"Profiler";case Ta:return"StrictMode";case xi:return"Suspense";case Mi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lu:return(e.displayName||"Context")+".Consumer";case su:return(e._context.displayName||"Context")+".Provider";case Aa:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Va:return n=e.displayName||null,n!==null?n:Ti(e.type)||"Memo";case an:n=e._payload,e=e._init;try{return Ti(e(n))}catch{}}return null}function eh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ti(n);case 8:return n===Ta?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function du(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nh(e){var n=du(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(a){o=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(a){o=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function bo(e){e._valueTracker||(e._valueTracker=nh(e))}function cu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),o="";return e&&(o=du(e)?e.checked?"true":"false":e.value),e=o,e!==t?(n.setValue(e),!0):!1}function Xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ai(e,n){var t=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Cs(e,n){var t=n.defaultValue==null?"":n.defaultValue,o=n.checked!=null?n.checked:n.defaultChecked;t=bn(n.value!=null?n.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function hu(e,n){n=n.checked,n!=null&&Ma(e,"checked",n,!1)}function Vi(e,n){hu(e,n);var t=bn(n.value),o=n.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Li(e,n.type,t):n.hasOwnProperty("defaultValue")&&Li(e,n.type,bn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function xs(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!(o!=="submit"&&o!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Li(e,n,t){(n!=="number"||Xo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Nt=Array.isArray;function st(e,n,t,o){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&o&&(e[t].defaultSelected=!0)}else{for(t=""+bn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function ji(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(b(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ms(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(b(92));if(Nt(t)){if(1<t.length)throw Error(b(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:bn(t)}}function pu(e,n){var t=bn(n.value),o=bn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function Ts(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function fu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ei(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?fu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var So,gu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,o,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,o,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(So=So||document.createElement("div"),So.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=So.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Bt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var It={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},th=["Webkit","ms","Moz","O"];Object.keys(It).forEach(function(e){th.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),It[n]=It[e]})});function mu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||It.hasOwnProperty(e)&&It[e]?(""+n).trim():n+"px"}function yu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var o=t.indexOf("--")===0,r=mu(t,n[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,r):e[t]=r}}var oh=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ni(e,n){if(n){if(oh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(b(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(b(61))}if(n.style!=null&&typeof n.style!="object")throw Error(b(62))}}function Oi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ri=null;function La(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ii=null,lt=null,ut=null;function As(e){if(e=fo(e)){if(typeof Ii!="function")throw Error(b(280));var n=e.stateNode;n&&(n=Lr(n),Ii(e.stateNode,e.type,n))}}function vu(e){lt?ut?ut.push(e):ut=[e]:lt=e}function wu(){if(lt){var e=lt,n=ut;if(ut=lt=null,As(e),n)for(e=0;e<n.length;e++)As(n[e])}}function ku(e,n){return e(n)}function Pu(){}var qr=!1;function bu(e,n,t){if(qr)return e(n,t);qr=!0;try{return ku(e,n,t)}finally{qr=!1,(lt!==null||ut!==null)&&(Pu(),wu())}}function Kt(e,n){var t=e.stateNode;if(t===null)return null;var o=Lr(t);if(o===null)return null;t=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(b(231,n,typeof t));return t}var Wi=!1;if(Xe)try{var xt={};Object.defineProperty(xt,"passive",{get:function(){Wi=!0}}),window.addEventListener("test",xt,xt),window.removeEventListener("test",xt,xt)}catch{Wi=!1}function rh(e,n,t,o,r,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(f){this.onError(f)}}var Wt=!1,er=null,nr=!1,zi=null,ih={onError:function(e){Wt=!0,er=e}};function ah(e,n,t,o,r,i,a,s,l){Wt=!1,er=null,rh.apply(ih,arguments)}function sh(e,n,t,o,r,i,a,s,l){if(ah.apply(this,arguments),Wt){if(Wt){var u=er;Wt=!1,er=null}else throw Error(b(198));nr||(nr=!0,zi=u)}}function Hn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Su(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Vs(e){if(Hn(e)!==e)throw Error(b(188))}function lh(e){var n=e.alternate;if(!n){if(n=Hn(e),n===null)throw Error(b(188));return n!==e?null:e}for(var t=e,o=n;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(o=r.return,o!==null){t=o;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return Vs(r),e;if(i===o)return Vs(r),n;i=i.sibling}throw Error(b(188))}if(t.return!==o.return)t=r,o=i;else{for(var a=!1,s=r.child;s;){if(s===t){a=!0,t=r,o=i;break}if(s===o){a=!0,o=r,t=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===t){a=!0,t=i,o=r;break}if(s===o){a=!0,o=i,t=r;break}s=s.sibling}if(!a)throw Error(b(189))}}if(t.alternate!==o)throw Error(b(190))}if(t.tag!==3)throw Error(b(188));return t.stateNode.current===t?e:n}function Cu(e){return e=lh(e),e!==null?xu(e):null}function xu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=xu(e);if(n!==null)return n;e=e.sibling}return null}var Mu=Ce.unstable_scheduleCallback,Ls=Ce.unstable_cancelCallback,uh=Ce.unstable_shouldYield,dh=Ce.unstable_requestPaint,B=Ce.unstable_now,ch=Ce.unstable_getCurrentPriorityLevel,ja=Ce.unstable_ImmediatePriority,Tu=Ce.unstable_UserBlockingPriority,tr=Ce.unstable_NormalPriority,hh=Ce.unstable_LowPriority,Au=Ce.unstable_IdlePriority,Mr=null,Ye=null;function ph(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Mr,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:mh,fh=Math.log,gh=Math.LN2;function mh(e){return e>>>=0,e===0?32:31-(fh(e)/gh|0)|0}var Co=64,xo=4194304;function Ot(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function or(e,n){var t=e.pendingLanes;if(t===0)return 0;var o=0,r=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var s=a&~r;s!==0?o=Ot(s):(i&=a,i!==0&&(o=Ot(i)))}else a=t&~r,a!==0?o=Ot(a):i!==0&&(o=Ot(i));if(o===0)return 0;if(n!==0&&n!==o&&!(n&r)&&(r=o&-o,i=n&-n,r>=i||r===16&&(i&4194240)!==0))return n;if(o&4&&(o|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=o;0<n;)t=31-Ue(n),r=1<<t,o|=e[t],n&=~r;return o}function yh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vh(e,n){for(var t=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ue(i),s=1<<a,l=r[a];l===-1?(!(s&t)||s&o)&&(r[a]=yh(s,n)):l<=n&&(e.expiredLanes|=s),i&=~s}}function Ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vu(){var e=Co;return Co<<=1,!(Co&4194240)&&(Co=64),e}function Qr(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ho(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ue(n),e[n]=t}function wh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-Ue(t),i=1<<r;n[r]=0,o[r]=-1,e[r]=-1,t&=~i}}function Ea(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var o=31-Ue(t),r=1<<o;r&n|e[o]&n&&(e[o]|=n),t&=~r}}var R=0;function Lu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ju,Na,Eu,Nu,Ou,Gi=!1,Mo=[],pn=null,fn=null,gn=null,Zt=new Map,$t=new Map,ln=[],kh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function js(e,n){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":Zt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":$t.delete(n.pointerId)}}function Mt(e,n,t,o,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:o,nativeEvent:i,targetContainers:[r]},n!==null&&(n=fo(n),n!==null&&Na(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Ph(e,n,t,o,r){switch(n){case"focusin":return pn=Mt(pn,e,n,t,o,r),!0;case"dragenter":return fn=Mt(fn,e,n,t,o,r),!0;case"mouseover":return gn=Mt(gn,e,n,t,o,r),!0;case"pointerover":var i=r.pointerId;return Zt.set(i,Mt(Zt.get(i)||null,e,n,t,o,r)),!0;case"gotpointercapture":return i=r.pointerId,$t.set(i,Mt($t.get(i)||null,e,n,t,o,r)),!0}return!1}function Ru(e){var n=Nn(e.target);if(n!==null){var t=Hn(n);if(t!==null){if(n=t.tag,n===13){if(n=Su(t),n!==null){e.blockedOn=n,Ou(e.priority,function(){Eu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Di(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);Ri=o,t.target.dispatchEvent(o),Ri=null}else return n=fo(t),n!==null&&Na(n),e.blockedOn=t,!1;n.shift()}return!0}function Es(e,n,t){Fo(e)&&t.delete(n)}function bh(){Gi=!1,pn!==null&&Fo(pn)&&(pn=null),fn!==null&&Fo(fn)&&(fn=null),gn!==null&&Fo(gn)&&(gn=null),Zt.forEach(Es),$t.forEach(Es)}function Tt(e,n){e.blockedOn===n&&(e.blockedOn=null,Gi||(Gi=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,bh)))}function qt(e){function n(r){return Tt(r,e)}if(0<Mo.length){Tt(Mo[0],e);for(var t=1;t<Mo.length;t++){var o=Mo[t];o.blockedOn===e&&(o.blockedOn=null)}}for(pn!==null&&Tt(pn,e),fn!==null&&Tt(fn,e),gn!==null&&Tt(gn,e),Zt.forEach(n),$t.forEach(n),t=0;t<ln.length;t++)o=ln[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<ln.length&&(t=ln[0],t.blockedOn===null);)Ru(t),t.blockedOn===null&&ln.shift()}var dt=on.ReactCurrentBatchConfig,rr=!0;function Sh(e,n,t,o){var r=R,i=dt.transition;dt.transition=null;try{R=1,Oa(e,n,t,o)}finally{R=r,dt.transition=i}}function Ch(e,n,t,o){var r=R,i=dt.transition;dt.transition=null;try{R=4,Oa(e,n,t,o)}finally{R=r,dt.transition=i}}function Oa(e,n,t,o){if(rr){var r=Di(e,n,t,o);if(r===null)si(e,n,o,ir,t),js(e,o);else if(Ph(r,e,n,t,o))o.stopPropagation();else if(js(e,o),n&4&&-1<kh.indexOf(e)){for(;r!==null;){var i=fo(r);if(i!==null&&ju(i),i=Di(e,n,t,o),i===null&&si(e,n,o,ir,t),i===r)break;r=i}r!==null&&o.stopPropagation()}else si(e,n,o,null,t)}}var ir=null;function Di(e,n,t,o){if(ir=null,e=La(o),e=Nn(e),e!==null)if(n=Hn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Su(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ir=e,null}function Iu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ch()){case ja:return 1;case Tu:return 4;case tr:case hh:return 16;case Au:return 536870912;default:return 16}default:return 16}}var dn=null,Ra=null,_o=null;function Wu(){if(_o)return _o;var e,n=Ra,t=n.length,o,r="value"in dn?dn.value:dn.textContent,i=r.length;for(e=0;e<t&&n[e]===r[e];e++);var a=t-e;for(o=1;o<=a&&n[t-o]===r[i-o];o++);return _o=r.slice(e,1<o?1-o:void 0)}function Ho(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function To(){return!0}function Ns(){return!1}function Me(e){function n(t,o,r,i,a){this._reactName=t,this._targetInst=r,this.type=o,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?To:Ns,this.isPropagationStopped=Ns,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),n}var Pt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ia=Me(Pt),po=H({},Pt,{view:0,detail:0}),xh=Me(po),Jr,Xr,At,Tr=H({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==At&&(At&&e.type==="mousemove"?(Jr=e.screenX-At.screenX,Xr=e.screenY-At.screenY):Xr=Jr=0,At=e),Jr)},movementY:function(e){return"movementY"in e?e.movementY:Xr}}),Os=Me(Tr),Mh=H({},Tr,{dataTransfer:0}),Th=Me(Mh),Ah=H({},po,{relatedTarget:0}),ei=Me(Ah),Vh=H({},Pt,{animationName:0,elapsedTime:0,pseudoElement:0}),Lh=Me(Vh),jh=H({},Pt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Eh=Me(jh),Nh=H({},Pt,{data:0}),Rs=Me(Nh),Oh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ih={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ih[e])?!!n[e]:!1}function Wa(){return Wh}var zh=H({},po,{key:function(e){if(e.key){var n=Oh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wa,charCode:function(e){return e.type==="keypress"?Ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uh=Me(zh),Gh=H({},Tr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Is=Me(Gh),Dh=H({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wa}),Fh=Me(Dh),_h=H({},Pt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hh=Me(_h),Yh=H({},Tr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bh=Me(Yh),Kh=[9,13,27,32],za=Xe&&"CompositionEvent"in window,zt=null;Xe&&"documentMode"in document&&(zt=document.documentMode);var Zh=Xe&&"TextEvent"in window&&!zt,zu=Xe&&(!za||zt&&8<zt&&11>=zt),Ws=" ",zs=!1;function Uu(e,n){switch(e){case"keyup":return Kh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function $h(e,n){switch(e){case"compositionend":return Gu(n);case"keypress":return n.which!==32?null:(zs=!0,Ws);case"textInput":return e=n.data,e===Ws&&zs?null:e;default:return null}}function qh(e,n){if(Qn)return e==="compositionend"||!za&&Uu(e,n)?(e=Wu(),_o=Ra=dn=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return zu&&n.locale!=="ko"?null:n.data;default:return null}}var Qh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Us(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Qh[e.type]:n==="textarea"}function Du(e,n,t,o){vu(o),n=ar(n,"onChange"),0<n.length&&(t=new Ia("onChange","change",null,t,o),e.push({event:t,listeners:n}))}var Ut=null,Qt=null;function Jh(e){Ju(e,0)}function Ar(e){var n=et(e);if(cu(n))return e}function Xh(e,n){if(e==="change")return n}var Fu=!1;if(Xe){var ni;if(Xe){var ti="oninput"in document;if(!ti){var Gs=document.createElement("div");Gs.setAttribute("oninput","return;"),ti=typeof Gs.oninput=="function"}ni=ti}else ni=!1;Fu=ni&&(!document.documentMode||9<document.documentMode)}function Ds(){Ut&&(Ut.detachEvent("onpropertychange",_u),Qt=Ut=null)}function _u(e){if(e.propertyName==="value"&&Ar(Qt)){var n=[];Du(n,Qt,e,La(e)),bu(Jh,n)}}function ep(e,n,t){e==="focusin"?(Ds(),Ut=n,Qt=t,Ut.attachEvent("onpropertychange",_u)):e==="focusout"&&Ds()}function np(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ar(Qt)}function tp(e,n){if(e==="click")return Ar(n)}function op(e,n){if(e==="input"||e==="change")return Ar(n)}function rp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var De=typeof Object.is=="function"?Object.is:rp;function Jt(e,n){if(De(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var r=t[o];if(!Si.call(n,r)||!De(e[r],n[r]))return!1}return!0}function Fs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _s(e,n){var t=Fs(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=n&&o>=n)return{node:t,offset:n-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Fs(t)}}function Hu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Yu(){for(var e=window,n=Xo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Xo(e.document)}return n}function Ua(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ip(e){var n=Yu(),t=e.focusedElem,o=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Hu(t.ownerDocument.documentElement,t)){if(o!==null&&Ua(t)){if(n=o.start,e=o.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,i=Math.min(o.start,r);o=o.end===void 0?i:Math.min(o.end,r),!e.extend&&i>o&&(r=o,o=i,i=r),r=_s(t,i);var a=_s(t,o);r&&a&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),i>o?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ap=Xe&&"documentMode"in document&&11>=document.documentMode,Jn=null,Fi=null,Gt=null,_i=!1;function Hs(e,n,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;_i||Jn==null||Jn!==Xo(o)||(o=Jn,"selectionStart"in o&&Ua(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Gt&&Jt(Gt,o)||(Gt=o,o=ar(Fi,"onSelect"),0<o.length&&(n=new Ia("onSelect","select",null,n,t),e.push({event:n,listeners:o}),n.target=Jn)))}function Ao(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Xn={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},oi={},Bu={};Xe&&(Bu=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Vr(e){if(oi[e])return oi[e];if(!Xn[e])return e;var n=Xn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Bu)return oi[e]=n[t];return e}var Ku=Vr("animationend"),Zu=Vr("animationiteration"),$u=Vr("animationstart"),qu=Vr("transitionend"),Qu=new Map,Ys="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(e,n){Qu.set(e,n),_n(n,[e])}for(var ri=0;ri<Ys.length;ri++){var ii=Ys[ri],sp=ii.toLowerCase(),lp=ii[0].toUpperCase()+ii.slice(1);Cn(sp,"on"+lp)}Cn(Ku,"onAnimationEnd");Cn(Zu,"onAnimationIteration");Cn($u,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(qu,"onTransitionEnd");pt("onMouseEnter",["mouseout","mouseover"]);pt("onMouseLeave",["mouseout","mouseover"]);pt("onPointerEnter",["pointerout","pointerover"]);pt("onPointerLeave",["pointerout","pointerover"]);_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_n("onBeforeInput",["compositionend","keypress","textInput","paste"]);_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),up=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rt));function Bs(e,n,t){var o=e.type||"unknown-event";e.currentTarget=t,sh(o,n,void 0,e),e.currentTarget=null}function Ju(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],r=o.event;o=o.listeners;e:{var i=void 0;if(n)for(var a=o.length-1;0<=a;a--){var s=o[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&r.isPropagationStopped())break e;Bs(r,s,u),i=l}else for(a=0;a<o.length;a++){if(s=o[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&r.isPropagationStopped())break e;Bs(r,s,u),i=l}}}if(nr)throw e=zi,nr=!1,zi=null,e}function z(e,n){var t=n[Zi];t===void 0&&(t=n[Zi]=new Set);var o=e+"__bubble";t.has(o)||(Xu(n,e,2,!1),t.add(o))}function ai(e,n,t){var o=0;n&&(o|=4),Xu(t,e,o,n)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function Xt(e){if(!e[Vo]){e[Vo]=!0,au.forEach(function(t){t!=="selectionchange"&&(up.has(t)||ai(t,!1,e),ai(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vo]||(n[Vo]=!0,ai("selectionchange",!1,n))}}function Xu(e,n,t,o){switch(Iu(n)){case 1:var r=Sh;break;case 4:r=Ch;break;default:r=Oa}t=r.bind(null,n,t,e),r=void 0,!Wi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function si(e,n,t,o,r){var i=o;if(!(n&1)&&!(n&2)&&o!==null)e:for(;;){if(o===null)return;var a=o.tag;if(a===3||a===4){var s=o.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(a===4)for(a=o.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;s!==null;){if(a=Nn(s),a===null)return;if(l=a.tag,l===5||l===6){o=i=a;continue e}s=s.parentNode}}o=o.return}bu(function(){var u=i,f=La(t),c=[];e:{var m=Qu.get(e);if(m!==void 0){var y=Ia,v=e;switch(e){case"keypress":if(Ho(t)===0)break e;case"keydown":case"keyup":y=Uh;break;case"focusin":v="focus",y=ei;break;case"focusout":v="blur",y=ei;break;case"beforeblur":case"afterblur":y=ei;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Fh;break;case Ku:case Zu:case $u:y=Lh;break;case qu:y=Hh;break;case"scroll":y=xh;break;case"wheel":y=Bh;break;case"copy":case"cut":case"paste":y=Eh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Is}var k=(n&4)!==0,x=!k&&e==="scroll",p=k?m!==null?m+"Capture":null:m;k=[];for(var d=u,g;d!==null;){g=d;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,p!==null&&(w=Kt(d,p),w!=null&&k.push(eo(d,w,g)))),x)break;d=d.return}0<k.length&&(m=new y(m,v,null,t,f),c.push({event:m,listeners:k}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&t!==Ri&&(v=t.relatedTarget||t.fromElement)&&(Nn(v)||v[en]))break e;if((y||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,y?(v=t.relatedTarget||t.toElement,y=u,v=v?Nn(v):null,v!==null&&(x=Hn(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(k=Os,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=Is,w="onPointerLeave",p="onPointerEnter",d="pointer"),x=y==null?m:et(y),g=v==null?m:et(v),m=new k(w,d+"leave",y,t,f),m.target=x,m.relatedTarget=g,w=null,Nn(f)===u&&(k=new k(p,d+"enter",v,t,f),k.target=g,k.relatedTarget=x,w=k),x=w,y&&v)n:{for(k=y,p=v,d=0,g=k;g;g=Zn(g))d++;for(g=0,w=p;w;w=Zn(w))g++;for(;0<d-g;)k=Zn(k),d--;for(;0<g-d;)p=Zn(p),g--;for(;d--;){if(k===p||p!==null&&k===p.alternate)break n;k=Zn(k),p=Zn(p)}k=null}else k=null;y!==null&&Ks(c,m,y,k,!1),v!==null&&x!==null&&Ks(c,x,v,k,!0)}}e:{if(m=u?et(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var C=Xh;else if(Us(m))if(Fu)C=op;else{C=np;var S=ep}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=tp);if(C&&(C=C(e,u))){Du(c,C,t,f);break e}S&&S(e,m,u),e==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&Li(m,"number",m.value)}switch(S=u?et(u):window,e){case"focusin":(Us(S)||S.contentEditable==="true")&&(Jn=S,Fi=u,Gt=null);break;case"focusout":Gt=Fi=Jn=null;break;case"mousedown":_i=!0;break;case"contextmenu":case"mouseup":case"dragend":_i=!1,Hs(c,t,f);break;case"selectionchange":if(ap)break;case"keydown":case"keyup":Hs(c,t,f)}var A;if(za)e:{switch(e){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Qn?Uu(e,t)&&(V="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(V="onCompositionStart");V&&(zu&&t.locale!=="ko"&&(Qn||V!=="onCompositionStart"?V==="onCompositionEnd"&&Qn&&(A=Wu()):(dn=f,Ra="value"in dn?dn.value:dn.textContent,Qn=!0)),S=ar(u,V),0<S.length&&(V=new Rs(V,e,null,t,f),c.push({event:V,listeners:S}),A?V.data=A:(A=Gu(t),A!==null&&(V.data=A)))),(A=Zh?$h(e,t):qh(e,t))&&(u=ar(u,"onBeforeInput"),0<u.length&&(f=new Rs("onBeforeInput","beforeinput",null,t,f),c.push({event:f,listeners:u}),f.data=A))}Ju(c,n)})}function eo(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ar(e,n){for(var t=n+"Capture",o=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=Kt(e,t),i!=null&&o.unshift(eo(e,i,r)),i=Kt(e,n),i!=null&&o.push(eo(e,i,r))),e=e.return}return o}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ks(e,n,t,o,r){for(var i=n._reactName,a=[];t!==null&&t!==o;){var s=t,l=s.alternate,u=s.stateNode;if(l!==null&&l===o)break;s.tag===5&&u!==null&&(s=u,r?(l=Kt(t,i),l!=null&&a.unshift(eo(t,l,s))):r||(l=Kt(t,i),l!=null&&a.push(eo(t,l,s)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var dp=/\r\n?/g,cp=/\u0000|\uFFFD/g;function Zs(e){return(typeof e=="string"?e:""+e).replace(dp,`
`).replace(cp,"")}function Lo(e,n,t){if(n=Zs(n),Zs(e)!==n&&t)throw Error(b(425))}function sr(){}var Hi=null,Yi=null;function Bi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ki=typeof setTimeout=="function"?setTimeout:void 0,hp=typeof clearTimeout=="function"?clearTimeout:void 0,$s=typeof Promise=="function"?Promise:void 0,pp=typeof queueMicrotask=="function"?queueMicrotask:typeof $s<"u"?function(e){return $s.resolve(null).then(e).catch(fp)}:Ki;function fp(e){setTimeout(function(){throw e})}function li(e,n){var t=n,o=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(o===0){e.removeChild(r),qt(n);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=r}while(t);qt(n)}function mn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function qs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var bt=Math.random().toString(36).slice(2),He="__reactFiber$"+bt,no="__reactProps$"+bt,en="__reactContainer$"+bt,Zi="__reactEvents$"+bt,gp="__reactListeners$"+bt,mp="__reactHandles$"+bt;function Nn(e){var n=e[He];if(n)return n;for(var t=e.parentNode;t;){if(n=t[en]||t[He]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=qs(e);e!==null;){if(t=e[He])return t;e=qs(e)}return n}e=t,t=e.parentNode}return null}function fo(e){return e=e[He]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function et(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Lr(e){return e[no]||null}var $i=[],nt=-1;function xn(e){return{current:e}}function U(e){0>nt||(e.current=$i[nt],$i[nt]=null,nt--)}function W(e,n){nt++,$i[nt]=e.current,e.current=n}var Sn={},ue=xn(Sn),ve=xn(!1),zn=Sn;function ft(e,n){var t=e.type.contextTypes;if(!t)return Sn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=n[i];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function we(e){return e=e.childContextTypes,e!=null}function lr(){U(ve),U(ue)}function Qs(e,n,t){if(ue.current!==Sn)throw Error(b(168));W(ue,n),W(ve,t)}function ed(e,n,t){var o=e.stateNode;if(n=n.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var r in o)if(!(r in n))throw Error(b(108,eh(e)||"Unknown",r));return H({},t,o)}function ur(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,zn=ue.current,W(ue,e),W(ve,ve.current),!0}function Js(e,n,t){var o=e.stateNode;if(!o)throw Error(b(169));t?(e=ed(e,n,zn),o.__reactInternalMemoizedMergedChildContext=e,U(ve),U(ue),W(ue,e)):U(ve),W(ve,t)}var $e=null,jr=!1,ui=!1;function nd(e){$e===null?$e=[e]:$e.push(e)}function yp(e){jr=!0,nd(e)}function Mn(){if(!ui&&$e!==null){ui=!0;var e=0,n=R;try{var t=$e;for(R=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}$e=null,jr=!1}catch(r){throw $e!==null&&($e=$e.slice(e+1)),Mu(ja,Mn),r}finally{R=n,ui=!1}}return null}var tt=[],ot=0,dr=null,cr=0,Te=[],Ae=0,Un=null,qe=1,Qe="";function jn(e,n){tt[ot++]=cr,tt[ot++]=dr,dr=e,cr=n}function td(e,n,t){Te[Ae++]=qe,Te[Ae++]=Qe,Te[Ae++]=Un,Un=e;var o=qe;e=Qe;var r=32-Ue(o)-1;o&=~(1<<r),t+=1;var i=32-Ue(n)+r;if(30<i){var a=r-r%5;i=(o&(1<<a)-1).toString(32),o>>=a,r-=a,qe=1<<32-Ue(n)+r|t<<r|o,Qe=i+e}else qe=1<<i|t<<r|o,Qe=e}function Ga(e){e.return!==null&&(jn(e,1),td(e,1,0))}function Da(e){for(;e===dr;)dr=tt[--ot],tt[ot]=null,cr=tt[--ot],tt[ot]=null;for(;e===Un;)Un=Te[--Ae],Te[Ae]=null,Qe=Te[--Ae],Te[Ae]=null,qe=Te[--Ae],Te[Ae]=null}var Se=null,be=null,G=!1,ze=null;function od(e,n){var t=Ve(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Xs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Se=e,be=mn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Se=e,be=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Un!==null?{id:qe,overflow:Qe}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ve(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Se=e,be=null,!0):!1;default:return!1}}function qi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qi(e){if(G){var n=be;if(n){var t=n;if(!Xs(e,n)){if(qi(e))throw Error(b(418));n=mn(t.nextSibling);var o=Se;n&&Xs(e,n)?od(o,t):(e.flags=e.flags&-4097|2,G=!1,Se=e)}}else{if(qi(e))throw Error(b(418));e.flags=e.flags&-4097|2,G=!1,Se=e}}}function el(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function jo(e){if(e!==Se)return!1;if(!G)return el(e),G=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Bi(e.type,e.memoizedProps)),n&&(n=be)){if(qi(e))throw rd(),Error(b(418));for(;n;)od(e,n),n=mn(n.nextSibling)}if(el(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){be=mn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}be=null}}else be=Se?mn(e.stateNode.nextSibling):null;return!0}function rd(){for(var e=be;e;)e=mn(e.nextSibling)}function gt(){be=Se=null,G=!1}function Fa(e){ze===null?ze=[e]:ze.push(e)}var vp=on.ReactCurrentBatchConfig;function Vt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(b(309));var o=t.stateNode}if(!o)throw Error(b(147,e));var r=o,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var s=r.refs;a===null?delete s[i]:s[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(b(284));if(!t._owner)throw Error(b(290,e))}return e}function Eo(e,n){throw e=Object.prototype.toString.call(n),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function nl(e){var n=e._init;return n(e._payload)}function id(e){function n(p,d){if(e){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function t(p,d){if(!e)return null;for(;d!==null;)n(p,d),d=d.sibling;return null}function o(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function r(p,d){return p=kn(p,d),p.index=0,p.sibling=null,p}function i(p,d,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,g,w){return d===null||d.tag!==6?(d=mi(g,p.mode,w),d.return=p,d):(d=r(d,g),d.return=p,d)}function l(p,d,g,w){var C=g.type;return C===qn?f(p,d,g.props.children,w,g.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===an&&nl(C)===d.type)?(w=r(d,g.props),w.ref=Vt(p,d,g),w.return=p,w):(w=Qo(g.type,g.key,g.props,null,p.mode,w),w.ref=Vt(p,d,g),w.return=p,w)}function u(p,d,g,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=yi(g,p.mode,w),d.return=p,d):(d=r(d,g.children||[]),d.return=p,d)}function f(p,d,g,w,C){return d===null||d.tag!==7?(d=Wn(g,p.mode,w,C),d.return=p,d):(d=r(d,g),d.return=p,d)}function c(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=mi(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Po:return g=Qo(d.type,d.key,d.props,null,p.mode,g),g.ref=Vt(p,null,d),g.return=p,g;case $n:return d=yi(d,p.mode,g),d.return=p,d;case an:var w=d._init;return c(p,w(d._payload),g)}if(Nt(d)||Ct(d))return d=Wn(d,p.mode,g,null),d.return=p,d;Eo(p,d)}return null}function m(p,d,g,w){var C=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:s(p,d,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Po:return g.key===C?l(p,d,g,w):null;case $n:return g.key===C?u(p,d,g,w):null;case an:return C=g._init,m(p,d,C(g._payload),w)}if(Nt(g)||Ct(g))return C!==null?null:f(p,d,g,w,null);Eo(p,g)}return null}function y(p,d,g,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(g)||null,s(d,p,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Po:return p=p.get(w.key===null?g:w.key)||null,l(d,p,w,C);case $n:return p=p.get(w.key===null?g:w.key)||null,u(d,p,w,C);case an:var S=w._init;return y(p,d,g,S(w._payload),C)}if(Nt(w)||Ct(w))return p=p.get(g)||null,f(d,p,w,C,null);Eo(d,w)}return null}function v(p,d,g,w){for(var C=null,S=null,A=d,V=d=0,I=null;A!==null&&V<g.length;V++){A.index>V?(I=A,A=null):I=A.sibling;var E=m(p,A,g[V],w);if(E===null){A===null&&(A=I);break}e&&A&&E.alternate===null&&n(p,A),d=i(E,d,V),S===null?C=E:S.sibling=E,S=E,A=I}if(V===g.length)return t(p,A),G&&jn(p,V),C;if(A===null){for(;V<g.length;V++)A=c(p,g[V],w),A!==null&&(d=i(A,d,V),S===null?C=A:S.sibling=A,S=A);return G&&jn(p,V),C}for(A=o(p,A);V<g.length;V++)I=y(A,p,V,g[V],w),I!==null&&(e&&I.alternate!==null&&A.delete(I.key===null?V:I.key),d=i(I,d,V),S===null?C=I:S.sibling=I,S=I);return e&&A.forEach(function($){return n(p,$)}),G&&jn(p,V),C}function k(p,d,g,w){var C=Ct(g);if(typeof C!="function")throw Error(b(150));if(g=C.call(g),g==null)throw Error(b(151));for(var S=C=null,A=d,V=d=0,I=null,E=g.next();A!==null&&!E.done;V++,E=g.next()){A.index>V?(I=A,A=null):I=A.sibling;var $=m(p,A,E.value,w);if($===null){A===null&&(A=I);break}e&&A&&$.alternate===null&&n(p,A),d=i($,d,V),S===null?C=$:S.sibling=$,S=$,A=I}if(E.done)return t(p,A),G&&jn(p,V),C;if(A===null){for(;!E.done;V++,E=g.next())E=c(p,E.value,w),E!==null&&(d=i(E,d,V),S===null?C=E:S.sibling=E,S=E);return G&&jn(p,V),C}for(A=o(p,A);!E.done;V++,E=g.next())E=y(A,p,V,E.value,w),E!==null&&(e&&E.alternate!==null&&A.delete(E.key===null?V:E.key),d=i(E,d,V),S===null?C=E:S.sibling=E,S=E);return e&&A.forEach(function(q){return n(p,q)}),G&&jn(p,V),C}function x(p,d,g,w){if(typeof g=="object"&&g!==null&&g.type===qn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Po:e:{for(var C=g.key,S=d;S!==null;){if(S.key===C){if(C=g.type,C===qn){if(S.tag===7){t(p,S.sibling),d=r(S,g.props.children),d.return=p,p=d;break e}}else if(S.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===an&&nl(C)===S.type){t(p,S.sibling),d=r(S,g.props),d.ref=Vt(p,S,g),d.return=p,p=d;break e}t(p,S);break}else n(p,S);S=S.sibling}g.type===qn?(d=Wn(g.props.children,p.mode,w,g.key),d.return=p,p=d):(w=Qo(g.type,g.key,g.props,null,p.mode,w),w.ref=Vt(p,d,g),w.return=p,p=w)}return a(p);case $n:e:{for(S=g.key;d!==null;){if(d.key===S)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){t(p,d.sibling),d=r(d,g.children||[]),d.return=p,p=d;break e}else{t(p,d);break}else n(p,d);d=d.sibling}d=yi(g,p.mode,w),d.return=p,p=d}return a(p);case an:return S=g._init,x(p,d,S(g._payload),w)}if(Nt(g))return v(p,d,g,w);if(Ct(g))return k(p,d,g,w);Eo(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(t(p,d.sibling),d=r(d,g),d.return=p,p=d):(t(p,d),d=mi(g,p.mode,w),d.return=p,p=d),a(p)):t(p,d)}return x}var mt=id(!0),ad=id(!1),hr=xn(null),pr=null,rt=null,_a=null;function Ha(){_a=rt=pr=null}function Ya(e){var n=hr.current;U(hr),e._currentValue=n}function Ji(e,n,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===t)break;e=e.return}}function ct(e,n){pr=e,_a=rt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(me=!0),e.firstContext=null)}function je(e){var n=e._currentValue;if(_a!==e)if(e={context:e,memoizedValue:n,next:null},rt===null){if(pr===null)throw Error(b(308));rt=e,pr.dependencies={lanes:0,firstContext:e}}else rt=rt.next=e;return n}var On=null;function Ba(e){On===null?On=[e]:On.push(e)}function sd(e,n,t,o){var r=n.interleaved;return r===null?(t.next=t,Ba(n)):(t.next=r.next,r.next=t),n.interleaved=t,nn(e,o)}function nn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var sn=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ld(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function yn(e,n,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,O&2){var r=o.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),o.pending=n,nn(e,t)}return r=o.interleaved,r===null?(n.next=n,Ba(o)):(n.next=r.next,r.next=n),o.interleaved=n,nn(e,t)}function Yo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,Ea(e,t)}}function tl(e,n){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?r=i=n:i=i.next=n}else r=i=n;t={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function fr(e,n,t,o){var r=e.updateQueue;sn=!1;var i=r.firstBaseUpdate,a=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=l))}if(i!==null){var c=r.baseState;a=0,f=u=l=null,s=i;do{var m=s.lane,y=s.eventTime;if((o&m)===m){f!==null&&(f=f.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,k=s;switch(m=n,y=t,k.tag){case 1:if(v=k.payload,typeof v=="function"){c=v.call(y,c,m);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,m=typeof v=="function"?v.call(y,c,m):v,m==null)break e;c=H({},c,m);break e;case 2:sn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=r.effects,m===null?r.effects=[s]:m.push(s))}else y={eventTime:y,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=y,l=c):f=f.next=y,a|=m;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;m=s,s=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(f===null&&(l=c),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,n=r.shared.interleaved,n!==null){r=n;do a|=r.lane,r=r.next;while(r!==n)}else i===null&&(r.shared.lanes=0);Dn|=a,e.lanes=a,e.memoizedState=c}}function ol(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var o=e[n],r=o.callback;if(r!==null){if(o.callback=null,o=t,typeof r!="function")throw Error(b(191,r));r.call(o)}}}var go={},Be=xn(go),to=xn(go),oo=xn(go);function Rn(e){if(e===go)throw Error(b(174));return e}function Za(e,n){switch(W(oo,n),W(to,e),W(Be,go),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ei(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ei(n,e)}U(Be),W(Be,n)}function yt(){U(Be),U(to),U(oo)}function ud(e){Rn(oo.current);var n=Rn(Be.current),t=Ei(n,e.type);n!==t&&(W(to,e),W(Be,t))}function $a(e){to.current===e&&(U(Be),U(to))}var F=xn(0);function gr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var di=[];function qa(){for(var e=0;e<di.length;e++)di[e]._workInProgressVersionPrimary=null;di.length=0}var Bo=on.ReactCurrentDispatcher,ci=on.ReactCurrentBatchConfig,Gn=0,_=null,Q=null,ne=null,mr=!1,Dt=!1,ro=0,wp=0;function ae(){throw Error(b(321))}function Qa(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!De(e[t],n[t]))return!1;return!0}function Ja(e,n,t,o,r,i){if(Gn=i,_=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Bo.current=e===null||e.memoizedState===null?Sp:Cp,e=t(o,r),Dt){i=0;do{if(Dt=!1,ro=0,25<=i)throw Error(b(301));i+=1,ne=Q=null,n.updateQueue=null,Bo.current=xp,e=t(o,r)}while(Dt)}if(Bo.current=yr,n=Q!==null&&Q.next!==null,Gn=0,ne=Q=_=null,mr=!1,n)throw Error(b(300));return e}function Xa(){var e=ro!==0;return ro=0,e}function _e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?_.memoizedState=ne=e:ne=ne.next=e,ne}function Ee(){if(Q===null){var e=_.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var n=ne===null?_.memoizedState:ne.next;if(n!==null)ne=n,Q=e;else{if(e===null)throw Error(b(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},ne===null?_.memoizedState=ne=e:ne=ne.next=e}return ne}function io(e,n){return typeof n=="function"?n(e):n}function hi(e){var n=Ee(),t=n.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=e;var o=Q,r=o.baseQueue,i=t.pending;if(i!==null){if(r!==null){var a=r.next;r.next=i.next,i.next=a}o.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,o=o.baseState;var s=a=null,l=null,u=i;do{var f=u.lane;if((Gn&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),o=u.hasEagerState?u.eagerState:e(o,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=c,a=o):l=l.next=c,_.lanes|=f,Dn|=f}u=u.next}while(u!==null&&u!==i);l===null?a=o:l.next=s,De(o,n.memoizedState)||(me=!0),n.memoizedState=o,n.baseState=a,n.baseQueue=l,t.lastRenderedState=o}if(e=t.interleaved,e!==null){r=e;do i=r.lane,_.lanes|=i,Dn|=i,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function pi(e){var n=Ee(),t=n.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=e;var o=t.dispatch,r=t.pending,i=n.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do i=e(i,a.action),a=a.next;while(a!==r);De(i,n.memoizedState)||(me=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,o]}function dd(){}function cd(e,n){var t=_,o=Ee(),r=n(),i=!De(o.memoizedState,r);if(i&&(o.memoizedState=r,me=!0),o=o.queue,es(fd.bind(null,t,o,e),[e]),o.getSnapshot!==n||i||ne!==null&&ne.memoizedState.tag&1){if(t.flags|=2048,ao(9,pd.bind(null,t,o,r,n),void 0,null),te===null)throw Error(b(349));Gn&30||hd(t,n,r)}return r}function hd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=_.updateQueue,n===null?(n={lastEffect:null,stores:null},_.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function pd(e,n,t,o){n.value=t,n.getSnapshot=o,gd(n)&&md(e)}function fd(e,n,t){return t(function(){gd(n)&&md(e)})}function gd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!De(e,t)}catch{return!0}}function md(e){var n=nn(e,1);n!==null&&Ge(n,e,1,-1)}function rl(e){var n=_e();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:e},n.queue=e,e=e.dispatch=bp.bind(null,_,e),[n.memoizedState,e]}function ao(e,n,t,o){return e={tag:e,create:n,destroy:t,deps:o,next:null},n=_.updateQueue,n===null?(n={lastEffect:null,stores:null},_.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,n.lastEffect=e)),e}function yd(){return Ee().memoizedState}function Ko(e,n,t,o){var r=_e();_.flags|=e,r.memoizedState=ao(1|n,t,void 0,o===void 0?null:o)}function Er(e,n,t,o){var r=Ee();o=o===void 0?null:o;var i=void 0;if(Q!==null){var a=Q.memoizedState;if(i=a.destroy,o!==null&&Qa(o,a.deps)){r.memoizedState=ao(n,t,i,o);return}}_.flags|=e,r.memoizedState=ao(1|n,t,i,o)}function il(e,n){return Ko(8390656,8,e,n)}function es(e,n){return Er(2048,8,e,n)}function vd(e,n){return Er(4,2,e,n)}function wd(e,n){return Er(4,4,e,n)}function kd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Pd(e,n,t){return t=t!=null?t.concat([e]):null,Er(4,4,kd.bind(null,n,e),t)}function ns(){}function bd(e,n){var t=Ee();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&Qa(n,o[1])?o[0]:(t.memoizedState=[e,n],e)}function Sd(e,n){var t=Ee();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&Qa(n,o[1])?o[0]:(e=e(),t.memoizedState=[e,n],e)}function Cd(e,n,t){return Gn&21?(De(t,n)||(t=Vu(),_.lanes|=t,Dn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=t)}function kp(e,n){var t=R;R=t!==0&&4>t?t:4,e(!0);var o=ci.transition;ci.transition={};try{e(!1),n()}finally{R=t,ci.transition=o}}function xd(){return Ee().memoizedState}function Pp(e,n,t){var o=wn(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},Md(e))Td(n,t);else if(t=sd(e,n,t,o),t!==null){var r=he();Ge(t,e,o,r),Ad(t,n,o)}}function bp(e,n,t){var o=wn(e),r={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(Md(e))Td(n,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,s=i(a,t);if(r.hasEagerState=!0,r.eagerState=s,De(s,a)){var l=n.interleaved;l===null?(r.next=r,Ba(n)):(r.next=l.next,l.next=r),n.interleaved=r;return}}catch{}finally{}t=sd(e,n,r,o),t!==null&&(r=he(),Ge(t,e,o,r),Ad(t,n,o))}}function Md(e){var n=e.alternate;return e===_||n!==null&&n===_}function Td(e,n){Dt=mr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ad(e,n,t){if(t&4194240){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,Ea(e,t)}}var yr={readContext:je,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Sp={readContext:je,useCallback:function(e,n){return _e().memoizedState=[e,n===void 0?null:n],e},useContext:je,useEffect:il,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ko(4194308,4,kd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ko(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ko(4,2,e,n)},useMemo:function(e,n){var t=_e();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var o=_e();return n=t!==void 0?t(n):n,o.memoizedState=o.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=Pp.bind(null,_,e),[o.memoizedState,e]},useRef:function(e){var n=_e();return e={current:e},n.memoizedState=e},useState:rl,useDebugValue:ns,useDeferredValue:function(e){return _e().memoizedState=e},useTransition:function(){var e=rl(!1),n=e[0];return e=kp.bind(null,e[1]),_e().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var o=_,r=_e();if(G){if(t===void 0)throw Error(b(407));t=t()}else{if(t=n(),te===null)throw Error(b(349));Gn&30||hd(o,n,t)}r.memoizedState=t;var i={value:t,getSnapshot:n};return r.queue=i,il(fd.bind(null,o,i,e),[e]),o.flags|=2048,ao(9,pd.bind(null,o,i,t,n),void 0,null),t},useId:function(){var e=_e(),n=te.identifierPrefix;if(G){var t=Qe,o=qe;t=(o&~(1<<32-Ue(o)-1)).toString(32)+t,n=":"+n+"R"+t,t=ro++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=wp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Cp={readContext:je,useCallback:bd,useContext:je,useEffect:es,useImperativeHandle:Pd,useInsertionEffect:vd,useLayoutEffect:wd,useMemo:Sd,useReducer:hi,useRef:yd,useState:function(){return hi(io)},useDebugValue:ns,useDeferredValue:function(e){var n=Ee();return Cd(n,Q.memoizedState,e)},useTransition:function(){var e=hi(io)[0],n=Ee().memoizedState;return[e,n]},useMutableSource:dd,useSyncExternalStore:cd,useId:xd,unstable_isNewReconciler:!1},xp={readContext:je,useCallback:bd,useContext:je,useEffect:es,useImperativeHandle:Pd,useInsertionEffect:vd,useLayoutEffect:wd,useMemo:Sd,useReducer:pi,useRef:yd,useState:function(){return pi(io)},useDebugValue:ns,useDeferredValue:function(e){var n=Ee();return Q===null?n.memoizedState=e:Cd(n,Q.memoizedState,e)},useTransition:function(){var e=pi(io)[0],n=Ee().memoizedState;return[e,n]},useMutableSource:dd,useSyncExternalStore:cd,useId:xd,unstable_isNewReconciler:!1};function Ie(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Xi(e,n,t,o){n=e.memoizedState,t=t(o,n),t=t==null?n:H({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Nr={isMounted:function(e){return(e=e._reactInternals)?Hn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var o=he(),r=wn(e),i=Je(o,r);i.payload=n,t!=null&&(i.callback=t),n=yn(e,i,r),n!==null&&(Ge(n,e,r,o),Yo(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var o=he(),r=wn(e),i=Je(o,r);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=yn(e,i,r),n!==null&&(Ge(n,e,r,o),Yo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=he(),o=wn(e),r=Je(t,o);r.tag=2,n!=null&&(r.callback=n),n=yn(e,r,o),n!==null&&(Ge(n,e,o,t),Yo(n,e,o))}};function al(e,n,t,o,r,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,a):n.prototype&&n.prototype.isPureReactComponent?!Jt(t,o)||!Jt(r,i):!0}function Vd(e,n,t){var o=!1,r=Sn,i=n.contextType;return typeof i=="object"&&i!==null?i=je(i):(r=we(n)?zn:ue.current,o=n.contextTypes,i=(o=o!=null)?ft(e,r):Sn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Nr,e.stateNode=n,n._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),n}function sl(e,n,t,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,o),n.state!==e&&Nr.enqueueReplaceState(n,n.state,null)}function ea(e,n,t,o){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},Ka(e);var i=n.contextType;typeof i=="object"&&i!==null?r.context=je(i):(i=we(n)?zn:ue.current,r.context=ft(e,i)),r.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Xi(e,n,i,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&Nr.enqueueReplaceState(r,r.state,null),fr(e,t,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function vt(e,n){try{var t="",o=n;do t+=Xc(o),o=o.return;while(o);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:r,digest:null}}function fi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function na(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Mp=typeof WeakMap=="function"?WeakMap:Map;function Ld(e,n,t){t=Je(-1,t),t.tag=3,t.payload={element:null};var o=n.value;return t.callback=function(){wr||(wr=!0,ca=o),na(e,n)},t}function jd(e,n,t){t=Je(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=n.value;t.payload=function(){return o(r)},t.callback=function(){na(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){na(e,n),typeof o!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function ll(e,n,t){var o=e.pingCache;if(o===null){o=e.pingCache=new Mp;var r=new Set;o.set(n,r)}else r=o.get(n),r===void 0&&(r=new Set,o.set(n,r));r.has(t)||(r.add(t),e=Gp.bind(null,e,n,t),n.then(e,e))}function ul(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function dl(e,n,t,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Je(-1,1),n.tag=2,yn(t,n,1))),t.lanes|=1),e)}var Tp=on.ReactCurrentOwner,me=!1;function ce(e,n,t,o){n.child=e===null?ad(n,null,t,o):mt(n,e.child,t,o)}function cl(e,n,t,o,r){t=t.render;var i=n.ref;return ct(n,r),o=Ja(e,n,t,o,i,r),t=Xa(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,tn(e,n,r)):(G&&t&&Ga(n),n.flags|=1,ce(e,n,o,r),n.child)}function hl(e,n,t,o,r){if(e===null){var i=t.type;return typeof i=="function"&&!us(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Ed(e,n,i,o,r)):(e=Qo(t.type,null,o,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&r)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:Jt,t(a,o)&&e.ref===n.ref)return tn(e,n,r)}return n.flags|=1,e=kn(i,o),e.ref=n.ref,e.return=n,n.child=e}function Ed(e,n,t,o,r){if(e!==null){var i=e.memoizedProps;if(Jt(i,o)&&e.ref===n.ref)if(me=!1,n.pendingProps=o=i,(e.lanes&r)!==0)e.flags&131072&&(me=!0);else return n.lanes=e.lanes,tn(e,n,r)}return ta(e,n,t,o,r)}function Nd(e,n,t){var o=n.pendingProps,r=o.children,i=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(at,Pe),Pe|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,W(at,Pe),Pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:t,W(at,Pe),Pe|=o}else i!==null?(o=i.baseLanes|t,n.memoizedState=null):o=t,W(at,Pe),Pe|=o;return ce(e,n,r,t),n.child}function Od(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ta(e,n,t,o,r){var i=we(t)?zn:ue.current;return i=ft(n,i),ct(n,r),t=Ja(e,n,t,o,i,r),o=Xa(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,tn(e,n,r)):(G&&o&&Ga(n),n.flags|=1,ce(e,n,t,r),n.child)}function pl(e,n,t,o,r){if(we(t)){var i=!0;ur(n)}else i=!1;if(ct(n,r),n.stateNode===null)Zo(e,n),Vd(n,t,o),ea(n,t,o,r),o=!0;else if(e===null){var a=n.stateNode,s=n.memoizedProps;a.props=s;var l=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=je(u):(u=we(t)?zn:ue.current,u=ft(n,u));var f=t.getDerivedStateFromProps,c=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==o||l!==u)&&sl(n,a,o,u),sn=!1;var m=n.memoizedState;a.state=m,fr(n,o,a,r),l=n.memoizedState,s!==o||m!==l||ve.current||sn?(typeof f=="function"&&(Xi(n,t,f,o),l=n.memoizedState),(s=sn||al(n,t,s,o,m,l,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=l),a.props=o,a.state=l,a.context=u,o=s):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{a=n.stateNode,ld(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:Ie(n.type,s),a.props=u,c=n.pendingProps,m=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=je(l):(l=we(t)?zn:ue.current,l=ft(n,l));var y=t.getDerivedStateFromProps;(f=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==c||m!==l)&&sl(n,a,o,l),sn=!1,m=n.memoizedState,a.state=m,fr(n,o,a,r);var v=n.memoizedState;s!==c||m!==v||ve.current||sn?(typeof y=="function"&&(Xi(n,t,y,o),v=n.memoizedState),(u=sn||al(n,t,u,o,m,v,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(o,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(o,v,l)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=v),a.props=o,a.state=v,a.context=l,o=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),o=!1)}return oa(e,n,t,o,i,r)}function oa(e,n,t,o,r,i){Od(e,n);var a=(n.flags&128)!==0;if(!o&&!a)return r&&Js(n,t,!1),tn(e,n,i);o=n.stateNode,Tp.current=n;var s=a&&typeof t.getDerivedStateFromError!="function"?null:o.render();return n.flags|=1,e!==null&&a?(n.child=mt(n,e.child,null,i),n.child=mt(n,null,s,i)):ce(e,n,s,i),n.memoizedState=o.state,r&&Js(n,t,!0),n.child}function Rd(e){var n=e.stateNode;n.pendingContext?Qs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Qs(e,n.context,!1),Za(e,n.containerInfo)}function fl(e,n,t,o,r){return gt(),Fa(r),n.flags|=256,ce(e,n,t,o),n.child}var ra={dehydrated:null,treeContext:null,retryLane:0};function ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function Id(e,n,t){var o=n.pendingProps,r=F.current,i=!1,a=(n.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),W(F,r&1),e===null)return Qi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=o.children,e=o.fallback,i?(o=n.mode,i=n.child,a={mode:"hidden",children:a},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ir(a,o,0,null),e=Wn(e,o,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=ia(t),n.memoizedState=ra,e):ts(n,a));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return Ap(e,n,a,o,s,r,t);if(i){i=o.fallback,a=n.mode,r=e.child,s=r.sibling;var l={mode:"hidden",children:o.children};return!(a&1)&&n.child!==r?(o=n.child,o.childLanes=0,o.pendingProps=l,n.deletions=null):(o=kn(r,l),o.subtreeFlags=r.subtreeFlags&14680064),s!==null?i=kn(s,i):(i=Wn(i,a,t,null),i.flags|=2),i.return=n,o.return=n,o.sibling=i,n.child=o,o=i,i=n.child,a=e.child.memoizedState,a=a===null?ia(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=ra,o}return i=e.child,e=i.sibling,o=kn(i,{mode:"visible",children:o.children}),!(n.mode&1)&&(o.lanes=t),o.return=n,o.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=o,n.memoizedState=null,o}function ts(e,n){return n=Ir({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function No(e,n,t,o){return o!==null&&Fa(o),mt(n,e.child,null,t),e=ts(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ap(e,n,t,o,r,i,a){if(t)return n.flags&256?(n.flags&=-257,o=fi(Error(b(422))),No(e,n,a,o)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=o.fallback,r=n.mode,o=Ir({mode:"visible",children:o.children},r,0,null),i=Wn(i,r,a,null),i.flags|=2,o.return=n,i.return=n,o.sibling=i,n.child=o,n.mode&1&&mt(n,e.child,null,a),n.child.memoizedState=ia(a),n.memoizedState=ra,i);if(!(n.mode&1))return No(e,n,a,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var s=o.dgst;return o=s,i=Error(b(419)),o=fi(i,o,void 0),No(e,n,a,o)}if(s=(a&e.childLanes)!==0,me||s){if(o=te,o!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|a)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,nn(e,r),Ge(o,e,r,-1))}return ls(),o=fi(Error(b(421))),No(e,n,a,o)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=Dp.bind(null,e),r._reactRetry=n,null):(e=i.treeContext,be=mn(r.nextSibling),Se=n,G=!0,ze=null,e!==null&&(Te[Ae++]=qe,Te[Ae++]=Qe,Te[Ae++]=Un,qe=e.id,Qe=e.overflow,Un=n),n=ts(n,o.children),n.flags|=4096,n)}function gl(e,n,t){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ji(e.return,n,t)}function gi(e,n,t,o,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:r}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=t,i.tailMode=r)}function Wd(e,n,t){var o=n.pendingProps,r=o.revealOrder,i=o.tail;if(ce(e,n,o.children,t),o=F.current,o&2)o=o&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gl(e,t,n);else if(e.tag===19)gl(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(W(F,o),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&gr(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),gi(n,!1,r,t,i);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&gr(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}gi(n,!0,t,null,i);break;case"together":gi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Zo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function tn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Dn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(b(153));if(n.child!==null){for(e=n.child,t=kn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=kn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Vp(e,n,t){switch(n.tag){case 3:Rd(n),gt();break;case 5:ud(n);break;case 1:we(n.type)&&ur(n);break;case 4:Za(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,r=n.memoizedProps.value;W(hr,o._currentValue),o._currentValue=r;break;case 13:if(o=n.memoizedState,o!==null)return o.dehydrated!==null?(W(F,F.current&1),n.flags|=128,null):t&n.child.childLanes?Id(e,n,t):(W(F,F.current&1),e=tn(e,n,t),e!==null?e.sibling:null);W(F,F.current&1);break;case 19:if(o=(t&n.childLanes)!==0,e.flags&128){if(o)return Wd(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),W(F,F.current),o)break;return null;case 22:case 23:return n.lanes=0,Nd(e,n,t)}return tn(e,n,t)}var zd,aa,Ud,Gd;zd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};aa=function(){};Ud=function(e,n,t,o){var r=e.memoizedProps;if(r!==o){e=n.stateNode,Rn(Be.current);var i=null;switch(t){case"input":r=Ai(e,r),o=Ai(e,o),i=[];break;case"select":r=H({},r,{value:void 0}),o=H({},o,{value:void 0}),i=[];break;case"textarea":r=ji(e,r),o=ji(e,o),i=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=sr)}Ni(t,o);var a;t=null;for(u in r)if(!o.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var s=r[u];for(a in s)s.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yt.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in o){var l=o[u];if(s=r!=null?r[u]:void 0,o.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(i||(i=[]),i.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yt.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&z("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};Gd=function(e,n,t,o){t!==o&&(n.flags|=4)};function Lt(e,n){if(!G)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=t,n}function Lp(e,n,t){var o=n.pendingProps;switch(Da(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return we(n.type)&&lr(),se(n),null;case 3:return o=n.stateNode,yt(),U(ve),U(ue),qa(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(jo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,ze!==null&&(fa(ze),ze=null))),aa(e,n),se(n),null;case 5:$a(n);var r=Rn(oo.current);if(t=n.type,e!==null&&n.stateNode!=null)Ud(e,n,t,o,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(n.stateNode===null)throw Error(b(166));return se(n),null}if(e=Rn(Be.current),jo(n)){o=n.stateNode,t=n.type;var i=n.memoizedProps;switch(o[He]=n,o[no]=i,e=(n.mode&1)!==0,t){case"dialog":z("cancel",o),z("close",o);break;case"iframe":case"object":case"embed":z("load",o);break;case"video":case"audio":for(r=0;r<Rt.length;r++)z(Rt[r],o);break;case"source":z("error",o);break;case"img":case"image":case"link":z("error",o),z("load",o);break;case"details":z("toggle",o);break;case"input":Cs(o,i),z("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},z("invalid",o);break;case"textarea":Ms(o,i),z("invalid",o)}Ni(t,i),r=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?o.textContent!==s&&(i.suppressHydrationWarning!==!0&&Lo(o.textContent,s,e),r=["children",s]):typeof s=="number"&&o.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Lo(o.textContent,s,e),r=["children",""+s]):Yt.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&z("scroll",o)}switch(t){case"input":bo(o),xs(o,i,!0);break;case"textarea":bo(o),Ts(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=sr)}o=r,n.updateQueue=o,o!==null&&(n.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=a.createElement(t,{is:o.is}):(e=a.createElement(t),t==="select"&&(a=e,o.multiple?a.multiple=!0:o.size&&(a.size=o.size))):e=a.createElementNS(e,t),e[He]=n,e[no]=o,zd(e,n,!1,!1),n.stateNode=e;e:{switch(a=Oi(t,o),t){case"dialog":z("cancel",e),z("close",e),r=o;break;case"iframe":case"object":case"embed":z("load",e),r=o;break;case"video":case"audio":for(r=0;r<Rt.length;r++)z(Rt[r],e);r=o;break;case"source":z("error",e),r=o;break;case"img":case"image":case"link":z("error",e),z("load",e),r=o;break;case"details":z("toggle",e),r=o;break;case"input":Cs(e,o),r=Ai(e,o),z("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=H({},o,{value:void 0}),z("invalid",e);break;case"textarea":Ms(e,o),r=ji(e,o),z("invalid",e);break;default:r=o}Ni(t,r),s=r;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?yu(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gu(e,l)):i==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Bt(e,l):typeof l=="number"&&Bt(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Yt.hasOwnProperty(i)?l!=null&&i==="onScroll"&&z("scroll",e):l!=null&&Ma(e,i,l,a))}switch(t){case"input":bo(e),xs(e,o,!1);break;case"textarea":bo(e),Ts(e);break;case"option":o.value!=null&&e.setAttribute("value",""+bn(o.value));break;case"select":e.multiple=!!o.multiple,i=o.value,i!=null?st(e,!!o.multiple,i,!1):o.defaultValue!=null&&st(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=sr)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)Gd(e,n,e.memoizedProps,o);else{if(typeof o!="string"&&n.stateNode===null)throw Error(b(166));if(t=Rn(oo.current),Rn(Be.current),jo(n)){if(o=n.stateNode,t=n.memoizedProps,o[He]=n,(i=o.nodeValue!==t)&&(e=Se,e!==null))switch(e.tag){case 3:Lo(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lo(o.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[He]=n,n.stateNode=o}return se(n),null;case 13:if(U(F),o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&be!==null&&n.mode&1&&!(n.flags&128))rd(),gt(),n.flags|=98560,i=!1;else if(i=jo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(b(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(b(317));i[He]=n}else gt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),i=!1}else ze!==null&&(fa(ze),ze=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(n.child.flags|=8192,n.mode&1&&(e===null||F.current&1?J===0&&(J=3):ls())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return yt(),aa(e,n),e===null&&Xt(n.stateNode.containerInfo),se(n),null;case 10:return Ya(n.type._context),se(n),null;case 17:return we(n.type)&&lr(),se(n),null;case 19:if(U(F),i=n.memoizedState,i===null)return se(n),null;if(o=(n.flags&128)!==0,a=i.rendering,a===null)if(o)Lt(i,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=gr(e),a!==null){for(n.flags|=128,Lt(i,!1),o=a.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=t,t=n.child;t!==null;)i=t,e=o,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return W(F,F.current&1|2),n.child}e=e.sibling}i.tail!==null&&B()>wt&&(n.flags|=128,o=!0,Lt(i,!1),n.lanes=4194304)}else{if(!o)if(e=gr(a),e!==null){if(n.flags|=128,o=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Lt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!G)return se(n),null}else 2*B()-i.renderingStartTime>wt&&t!==1073741824&&(n.flags|=128,o=!0,Lt(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=B(),n.sibling=null,t=F.current,W(F,o?t&1|2:t&1),n):(se(n),null);case 22:case 23:return ss(),o=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(n.flags|=8192),o&&n.mode&1?Pe&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(b(156,n.tag))}function jp(e,n){switch(Da(n),n.tag){case 1:return we(n.type)&&lr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return yt(),U(ve),U(ue),qa(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return $a(n),null;case 13:if(U(F),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(b(340));gt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(F),null;case 4:return yt(),null;case 10:return Ya(n.type._context),null;case 22:case 23:return ss(),null;case 24:return null;default:return null}}var Oo=!1,le=!1,Ep=typeof WeakSet=="function"?WeakSet:Set,T=null;function it(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){Y(e,n,o)}else t.current=null}function sa(e,n,t){try{t()}catch(o){Y(e,n,o)}}var ml=!1;function Np(e,n){if(Hi=rr,e=Yu(),Ua(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var r=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,s=-1,l=-1,u=0,f=0,c=e,m=null;n:for(;;){for(var y;c!==t||r!==0&&c.nodeType!==3||(s=a+r),c!==i||o!==0&&c.nodeType!==3||(l=a+o),c.nodeType===3&&(a+=c.nodeValue.length),(y=c.firstChild)!==null;)m=c,c=y;for(;;){if(c===e)break n;if(m===t&&++u===r&&(s=a),m===i&&++f===o&&(l=a),(y=c.nextSibling)!==null)break;c=m,m=c.parentNode}c=y}t=s===-1||l===-1?null:{start:s,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Yi={focusedElem:e,selectionRange:t},rr=!1,T=n;T!==null;)if(n=T,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,T=e;else for(;T!==null;){n=T;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,x=v.memoizedState,p=n.stateNode,d=p.getSnapshotBeforeUpdate(n.elementType===n.type?k:Ie(n.type,k),x);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(w){Y(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,T=e;break}T=n.return}return v=ml,ml=!1,v}function Ft(e,n,t){var o=n.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&sa(n,t,i)}r=r.next}while(r!==o)}}function Or(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==n)}}function la(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Dd(e){var n=e.alternate;n!==null&&(e.alternate=null,Dd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[He],delete n[no],delete n[Zi],delete n[gp],delete n[mp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fd(e){return e.tag===5||e.tag===3||e.tag===4}function yl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ua(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=sr));else if(o!==4&&(e=e.child,e!==null))for(ua(e,n,t),e=e.sibling;e!==null;)ua(e,n,t),e=e.sibling}function da(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(da(e,n,t),e=e.sibling;e!==null;)da(e,n,t),e=e.sibling}var oe=null,We=!1;function rn(e,n,t){for(t=t.child;t!==null;)_d(e,n,t),t=t.sibling}function _d(e,n,t){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Mr,t)}catch{}switch(t.tag){case 5:le||it(t,n);case 6:var o=oe,r=We;oe=null,rn(e,n,t),oe=o,We=r,oe!==null&&(We?(e=oe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):oe.removeChild(t.stateNode));break;case 18:oe!==null&&(We?(e=oe,t=t.stateNode,e.nodeType===8?li(e.parentNode,t):e.nodeType===1&&li(e,t),qt(e)):li(oe,t.stateNode));break;case 4:o=oe,r=We,oe=t.stateNode.containerInfo,We=!0,rn(e,n,t),oe=o,We=r;break;case 0:case 11:case 14:case 15:if(!le&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var i=r,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&sa(t,n,a),r=r.next}while(r!==o)}rn(e,n,t);break;case 1:if(!le&&(it(t,n),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(s){Y(t,n,s)}rn(e,n,t);break;case 21:rn(e,n,t);break;case 22:t.mode&1?(le=(o=le)||t.memoizedState!==null,rn(e,n,t),le=o):rn(e,n,t);break;default:rn(e,n,t)}}function vl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Ep),n.forEach(function(o){var r=Fp.bind(null,e,o);t.has(o)||(t.add(o),o.then(r,r))})}}function Re(e,n){var t=n.deletions;if(t!==null)for(var o=0;o<t.length;o++){var r=t[o];try{var i=e,a=n,s=a;e:for(;s!==null;){switch(s.tag){case 5:oe=s.stateNode,We=!1;break e;case 3:oe=s.stateNode.containerInfo,We=!0;break e;case 4:oe=s.stateNode.containerInfo,We=!0;break e}s=s.return}if(oe===null)throw Error(b(160));_d(i,a,r),oe=null,We=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Y(r,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Hd(n,e),n=n.sibling}function Hd(e,n){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(n,e),Fe(e),o&4){try{Ft(3,e,e.return),Or(3,e)}catch(k){Y(e,e.return,k)}try{Ft(5,e,e.return)}catch(k){Y(e,e.return,k)}}break;case 1:Re(n,e),Fe(e),o&512&&t!==null&&it(t,t.return);break;case 5:if(Re(n,e),Fe(e),o&512&&t!==null&&it(t,t.return),e.flags&32){var r=e.stateNode;try{Bt(r,"")}catch(k){Y(e,e.return,k)}}if(o&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&hu(r,i),Oi(s,a);var u=Oi(s,i);for(a=0;a<l.length;a+=2){var f=l[a],c=l[a+1];f==="style"?yu(r,c):f==="dangerouslySetInnerHTML"?gu(r,c):f==="children"?Bt(r,c):Ma(r,f,c,u)}switch(s){case"input":Vi(r,i);break;case"textarea":pu(r,i);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?st(r,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?st(r,!!i.multiple,i.defaultValue,!0):st(r,!!i.multiple,i.multiple?[]:"",!1))}r[no]=i}catch(k){Y(e,e.return,k)}}break;case 6:if(Re(n,e),Fe(e),o&4){if(e.stateNode===null)throw Error(b(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(k){Y(e,e.return,k)}}break;case 3:if(Re(n,e),Fe(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{qt(n.containerInfo)}catch(k){Y(e,e.return,k)}break;case 4:Re(n,e),Fe(e);break;case 13:Re(n,e),Fe(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(is=B())),o&4&&vl(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(le=(u=le)||f,Re(n,e),le=u):Re(n,e),Fe(e),o&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(T=e,f=e.child;f!==null;){for(c=T=f;T!==null;){switch(m=T,y=m.child,m.tag){case 0:case 11:case 14:case 15:Ft(4,m,m.return);break;case 1:it(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){o=m,t=m.return;try{n=o,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(k){Y(o,t,k)}}break;case 5:it(m,m.return);break;case 22:if(m.memoizedState!==null){kl(c);continue}}y!==null?(y.return=m,T=y):kl(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{r=c.stateNode,u?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=c.stateNode,l=c.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=mu("display",a))}catch(k){Y(e,e.return,k)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(k){Y(e,e.return,k)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Re(n,e),Fe(e),o&4&&vl(e);break;case 21:break;default:Re(n,e),Fe(e)}}function Fe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Fd(t)){var o=t;break e}t=t.return}throw Error(b(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(Bt(r,""),o.flags&=-33);var i=yl(e);da(e,i,r);break;case 3:case 4:var a=o.stateNode.containerInfo,s=yl(e);ua(e,s,a);break;default:throw Error(b(161))}}catch(l){Y(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Op(e,n,t){T=e,Yd(e)}function Yd(e,n,t){for(var o=(e.mode&1)!==0;T!==null;){var r=T,i=r.child;if(r.tag===22&&o){var a=r.memoizedState!==null||Oo;if(!a){var s=r.alternate,l=s!==null&&s.memoizedState!==null||le;s=Oo;var u=le;if(Oo=a,(le=l)&&!u)for(T=r;T!==null;)a=T,l=a.child,a.tag===22&&a.memoizedState!==null?Pl(r):l!==null?(l.return=a,T=l):Pl(r);for(;i!==null;)T=i,Yd(i),i=i.sibling;T=r,Oo=s,le=u}wl(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,T=i):wl(e)}}function wl(e){for(;T!==null;){var n=T;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||Or(5,n);break;case 1:var o=n.stateNode;if(n.flags&4&&!le)if(t===null)o.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Ie(n.type,t.memoizedProps);o.componentDidUpdate(r,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&ol(n,i,o);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ol(n,a,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&qt(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}le||n.flags&512&&la(n)}catch(m){Y(n,n.return,m)}}if(n===e){T=null;break}if(t=n.sibling,t!==null){t.return=n.return,T=t;break}T=n.return}}function kl(e){for(;T!==null;){var n=T;if(n===e){T=null;break}var t=n.sibling;if(t!==null){t.return=n.return,T=t;break}T=n.return}}function Pl(e){for(;T!==null;){var n=T;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Or(4,n)}catch(l){Y(n,t,l)}break;case 1:var o=n.stateNode;if(typeof o.componentDidMount=="function"){var r=n.return;try{o.componentDidMount()}catch(l){Y(n,r,l)}}var i=n.return;try{la(n)}catch(l){Y(n,i,l)}break;case 5:var a=n.return;try{la(n)}catch(l){Y(n,a,l)}}}catch(l){Y(n,n.return,l)}if(n===e){T=null;break}var s=n.sibling;if(s!==null){s.return=n.return,T=s;break}T=n.return}}var Rp=Math.ceil,vr=on.ReactCurrentDispatcher,os=on.ReactCurrentOwner,Le=on.ReactCurrentBatchConfig,O=0,te=null,K=null,re=0,Pe=0,at=xn(0),J=0,so=null,Dn=0,Rr=0,rs=0,_t=null,ge=null,is=0,wt=1/0,Ze=null,wr=!1,ca=null,vn=null,Ro=!1,cn=null,kr=0,Ht=0,ha=null,$o=-1,qo=0;function he(){return O&6?B():$o!==-1?$o:$o=B()}function wn(e){return e.mode&1?O&2&&re!==0?re&-re:vp.transition!==null?(qo===0&&(qo=Vu()),qo):(e=R,e!==0||(e=window.event,e=e===void 0?16:Iu(e.type)),e):1}function Ge(e,n,t,o){if(50<Ht)throw Ht=0,ha=null,Error(b(185));ho(e,t,o),(!(O&2)||e!==te)&&(e===te&&(!(O&2)&&(Rr|=t),J===4&&un(e,re)),ke(e,o),t===1&&O===0&&!(n.mode&1)&&(wt=B()+500,jr&&Mn()))}function ke(e,n){var t=e.callbackNode;vh(e,n);var o=or(e,e===te?re:0);if(o===0)t!==null&&Ls(t),e.callbackNode=null,e.callbackPriority=0;else if(n=o&-o,e.callbackPriority!==n){if(t!=null&&Ls(t),n===1)e.tag===0?yp(bl.bind(null,e)):nd(bl.bind(null,e)),pp(function(){!(O&6)&&Mn()}),t=null;else{switch(Lu(o)){case 1:t=ja;break;case 4:t=Tu;break;case 16:t=tr;break;case 536870912:t=Au;break;default:t=tr}t=Xd(t,Bd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Bd(e,n){if($o=-1,qo=0,O&6)throw Error(b(327));var t=e.callbackNode;if(ht()&&e.callbackNode!==t)return null;var o=or(e,e===te?re:0);if(o===0)return null;if(o&30||o&e.expiredLanes||n)n=Pr(e,o);else{n=o;var r=O;O|=2;var i=Zd();(te!==e||re!==n)&&(Ze=null,wt=B()+500,In(e,n));do try{zp();break}catch(s){Kd(e,s)}while(!0);Ha(),vr.current=i,O=r,K!==null?n=0:(te=null,re=0,n=J)}if(n!==0){if(n===2&&(r=Ui(e),r!==0&&(o=r,n=pa(e,r))),n===1)throw t=so,In(e,0),un(e,o),ke(e,B()),t;if(n===6)un(e,o);else{if(r=e.current.alternate,!(o&30)&&!Ip(r)&&(n=Pr(e,o),n===2&&(i=Ui(e),i!==0&&(o=i,n=pa(e,i))),n===1))throw t=so,In(e,0),un(e,o),ke(e,B()),t;switch(e.finishedWork=r,e.finishedLanes=o,n){case 0:case 1:throw Error(b(345));case 2:En(e,ge,Ze);break;case 3:if(un(e,o),(o&130023424)===o&&(n=is+500-B(),10<n)){if(or(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){he(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Ki(En.bind(null,e,ge,Ze),n);break}En(e,ge,Ze);break;case 4:if(un(e,o),(o&4194240)===o)break;for(n=e.eventTimes,r=-1;0<o;){var a=31-Ue(o);i=1<<a,a=n[a],a>r&&(r=a),o&=~i}if(o=r,o=B()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Rp(o/1960))-o,10<o){e.timeoutHandle=Ki(En.bind(null,e,ge,Ze),o);break}En(e,ge,Ze);break;case 5:En(e,ge,Ze);break;default:throw Error(b(329))}}}return ke(e,B()),e.callbackNode===t?Bd.bind(null,e):null}function pa(e,n){var t=_t;return e.current.memoizedState.isDehydrated&&(In(e,n).flags|=256),e=Pr(e,n),e!==2&&(n=ge,ge=t,n!==null&&fa(n)),e}function fa(e){ge===null?ge=e:ge.push.apply(ge,e)}function Ip(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var r=t[o],i=r.getSnapshot;r=r.value;try{if(!De(i(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function un(e,n){for(n&=~rs,n&=~Rr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ue(n),o=1<<t;e[t]=-1,n&=~o}}function bl(e){if(O&6)throw Error(b(327));ht();var n=or(e,0);if(!(n&1))return ke(e,B()),null;var t=Pr(e,n);if(e.tag!==0&&t===2){var o=Ui(e);o!==0&&(n=o,t=pa(e,o))}if(t===1)throw t=so,In(e,0),un(e,n),ke(e,B()),t;if(t===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,En(e,ge,Ze),ke(e,B()),null}function as(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(wt=B()+500,jr&&Mn())}}function Fn(e){cn!==null&&cn.tag===0&&!(O&6)&&ht();var n=O;O|=1;var t=Le.transition,o=R;try{if(Le.transition=null,R=1,e)return e()}finally{R=o,Le.transition=t,O=n,!(O&6)&&Mn()}}function ss(){Pe=at.current,U(at)}function In(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,hp(t)),K!==null)for(t=K.return;t!==null;){var o=t;switch(Da(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&lr();break;case 3:yt(),U(ve),U(ue),qa();break;case 5:$a(o);break;case 4:yt();break;case 13:U(F);break;case 19:U(F);break;case 10:Ya(o.type._context);break;case 22:case 23:ss()}t=t.return}if(te=e,K=e=kn(e.current,null),re=Pe=n,J=0,so=null,rs=Rr=Dn=0,ge=_t=null,On!==null){for(n=0;n<On.length;n++)if(t=On[n],o=t.interleaved,o!==null){t.interleaved=null;var r=o.next,i=t.pending;if(i!==null){var a=i.next;i.next=r,o.next=a}t.pending=o}On=null}return e}function Kd(e,n){do{var t=K;try{if(Ha(),Bo.current=yr,mr){for(var o=_.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}mr=!1}if(Gn=0,ne=Q=_=null,Dt=!1,ro=0,os.current=null,t===null||t.return===null){J=1,so=n,K=null;break}e:{var i=e,a=t.return,s=t,l=n;if(n=re,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=s,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=ul(a);if(y!==null){y.flags&=-257,dl(y,a,s,i,n),y.mode&1&&ll(i,u,n),n=y,l=u;var v=n.updateQueue;if(v===null){var k=new Set;k.add(l),n.updateQueue=k}else v.add(l);break e}else{if(!(n&1)){ll(i,u,n),ls();break e}l=Error(b(426))}}else if(G&&s.mode&1){var x=ul(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),dl(x,a,s,i,n),Fa(vt(l,s));break e}}i=l=vt(l,s),J!==4&&(J=2),_t===null?_t=[i]:_t.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var p=Ld(i,l,n);tl(i,p);break e;case 1:s=l;var d=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(vn===null||!vn.has(g)))){i.flags|=65536,n&=-n,i.lanes|=n;var w=jd(i,s,n);tl(i,w);break e}}i=i.return}while(i!==null)}qd(t)}catch(C){n=C,K===t&&t!==null&&(K=t=t.return);continue}break}while(!0)}function Zd(){var e=vr.current;return vr.current=yr,e===null?yr:e}function ls(){(J===0||J===3||J===2)&&(J=4),te===null||!(Dn&268435455)&&!(Rr&268435455)||un(te,re)}function Pr(e,n){var t=O;O|=2;var o=Zd();(te!==e||re!==n)&&(Ze=null,In(e,n));do try{Wp();break}catch(r){Kd(e,r)}while(!0);if(Ha(),O=t,vr.current=o,K!==null)throw Error(b(261));return te=null,re=0,J}function Wp(){for(;K!==null;)$d(K)}function zp(){for(;K!==null&&!uh();)$d(K)}function $d(e){var n=Jd(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,n===null?qd(e):K=n,os.current=null}function qd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=jp(t,n),t!==null){t.flags&=32767,K=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,K=null;return}}else if(t=Lp(t,n,Pe),t!==null){K=t;return}if(n=n.sibling,n!==null){K=n;return}K=n=e}while(n!==null);J===0&&(J=5)}function En(e,n,t){var o=R,r=Le.transition;try{Le.transition=null,R=1,Up(e,n,t,o)}finally{Le.transition=r,R=o}return null}function Up(e,n,t,o){do ht();while(cn!==null);if(O&6)throw Error(b(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(wh(e,i),e===te&&(K=te=null,re=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ro||(Ro=!0,Xd(tr,function(){return ht(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Le.transition,Le.transition=null;var a=R;R=1;var s=O;O|=4,os.current=null,Np(e,t),Hd(t,e),ip(Yi),rr=!!Hi,Yi=Hi=null,e.current=t,Op(t),dh(),O=s,R=a,Le.transition=i}else e.current=t;if(Ro&&(Ro=!1,cn=e,kr=r),i=e.pendingLanes,i===0&&(vn=null),ph(t.stateNode),ke(e,B()),n!==null)for(o=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],o(r.value,{componentStack:r.stack,digest:r.digest});if(wr)throw wr=!1,e=ca,ca=null,e;return kr&1&&e.tag!==0&&ht(),i=e.pendingLanes,i&1?e===ha?Ht++:(Ht=0,ha=e):Ht=0,Mn(),null}function ht(){if(cn!==null){var e=Lu(kr),n=Le.transition,t=R;try{if(Le.transition=null,R=16>e?16:e,cn===null)var o=!1;else{if(e=cn,cn=null,kr=0,O&6)throw Error(b(331));var r=O;for(O|=4,T=e.current;T!==null;){var i=T,a=i.child;if(T.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(T=u;T!==null;){var f=T;switch(f.tag){case 0:case 11:case 15:Ft(8,f,i)}var c=f.child;if(c!==null)c.return=f,T=c;else for(;T!==null;){f=T;var m=f.sibling,y=f.return;if(Dd(f),f===u){T=null;break}if(m!==null){m.return=y,T=m;break}T=y}}}var v=i.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var x=k.sibling;k.sibling=null,k=x}while(k!==null)}}T=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,T=a;else e:for(;T!==null;){if(i=T,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ft(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,T=p;break e}T=i.return}}var d=e.current;for(T=d;T!==null;){a=T;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,T=g;else e:for(a=d;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Or(9,s)}}catch(C){Y(s,s.return,C)}if(s===a){T=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,T=w;break e}T=s.return}}if(O=r,Mn(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Mr,e)}catch{}o=!0}return o}finally{R=t,Le.transition=n}}return!1}function Sl(e,n,t){n=vt(t,n),n=Ld(e,n,1),e=yn(e,n,1),n=he(),e!==null&&(ho(e,1,n),ke(e,n))}function Y(e,n,t){if(e.tag===3)Sl(e,e,t);else for(;n!==null;){if(n.tag===3){Sl(n,e,t);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(vn===null||!vn.has(o))){e=vt(t,e),e=jd(n,e,1),n=yn(n,e,1),e=he(),n!==null&&(ho(n,1,e),ke(n,e));break}}n=n.return}}function Gp(e,n,t){var o=e.pingCache;o!==null&&o.delete(n),n=he(),e.pingedLanes|=e.suspendedLanes&t,te===e&&(re&t)===t&&(J===4||J===3&&(re&130023424)===re&&500>B()-is?In(e,0):rs|=t),ke(e,n)}function Qd(e,n){n===0&&(e.mode&1?(n=xo,xo<<=1,!(xo&130023424)&&(xo=4194304)):n=1);var t=he();e=nn(e,n),e!==null&&(ho(e,n,t),ke(e,t))}function Dp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Qd(e,t)}function Fp(e,n){var t=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(b(314))}o!==null&&o.delete(n),Qd(e,t)}var Jd;Jd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ve.current)me=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return me=!1,Vp(e,n,t);me=!!(e.flags&131072)}else me=!1,G&&n.flags&1048576&&td(n,cr,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;Zo(e,n),e=n.pendingProps;var r=ft(n,ue.current);ct(n,t),r=Ja(null,n,o,e,r,t);var i=Xa();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,we(o)?(i=!0,ur(n)):i=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ka(n),r.updater=Nr,n.stateNode=r,r._reactInternals=n,ea(n,o,e,t),n=oa(null,n,o,!0,i,t)):(n.tag=0,G&&i&&Ga(n),ce(null,n,r,t),n=n.child),n;case 16:o=n.elementType;e:{switch(Zo(e,n),e=n.pendingProps,r=o._init,o=r(o._payload),n.type=o,r=n.tag=Hp(o),e=Ie(o,e),r){case 0:n=ta(null,n,o,e,t);break e;case 1:n=pl(null,n,o,e,t);break e;case 11:n=cl(null,n,o,e,t);break e;case 14:n=hl(null,n,o,Ie(o.type,e),t);break e}throw Error(b(306,o,""))}return n;case 0:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:Ie(o,r),ta(e,n,o,r,t);case 1:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:Ie(o,r),pl(e,n,o,r,t);case 3:e:{if(Rd(n),e===null)throw Error(b(387));o=n.pendingProps,i=n.memoizedState,r=i.element,ld(e,n),fr(n,o,null,t);var a=n.memoizedState;if(o=a.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){r=vt(Error(b(423)),n),n=fl(e,n,o,t,r);break e}else if(o!==r){r=vt(Error(b(424)),n),n=fl(e,n,o,t,r);break e}else for(be=mn(n.stateNode.containerInfo.firstChild),Se=n,G=!0,ze=null,t=ad(n,null,o,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(gt(),o===r){n=tn(e,n,t);break e}ce(e,n,o,t)}n=n.child}return n;case 5:return ud(n),e===null&&Qi(n),o=n.type,r=n.pendingProps,i=e!==null?e.memoizedProps:null,a=r.children,Bi(o,r)?a=null:i!==null&&Bi(o,i)&&(n.flags|=32),Od(e,n),ce(e,n,a,t),n.child;case 6:return e===null&&Qi(n),null;case 13:return Id(e,n,t);case 4:return Za(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=mt(n,null,o,t):ce(e,n,o,t),n.child;case 11:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:Ie(o,r),cl(e,n,o,r,t);case 7:return ce(e,n,n.pendingProps,t),n.child;case 8:return ce(e,n,n.pendingProps.children,t),n.child;case 12:return ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(o=n.type._context,r=n.pendingProps,i=n.memoizedProps,a=r.value,W(hr,o._currentValue),o._currentValue=a,i!==null)if(De(i.value,a)){if(i.children===r.children&&!ve.current){n=tn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===o){if(i.tag===1){l=Je(-1,t&-t),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),Ji(i.return,t,n),s.lanes|=t;break}l=l.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(b(341));a.lanes|=t,s=a.alternate,s!==null&&(s.lanes|=t),Ji(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ce(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,o=n.pendingProps.children,ct(n,t),r=je(r),o=o(r),n.flags|=1,ce(e,n,o,t),n.child;case 14:return o=n.type,r=Ie(o,n.pendingProps),r=Ie(o.type,r),hl(e,n,o,r,t);case 15:return Ed(e,n,n.type,n.pendingProps,t);case 17:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:Ie(o,r),Zo(e,n),n.tag=1,we(o)?(e=!0,ur(n)):e=!1,ct(n,t),Vd(n,o,r),ea(n,o,r,t),oa(null,n,o,!0,e,t);case 19:return Wd(e,n,t);case 22:return Nd(e,n,t)}throw Error(b(156,n.tag))};function Xd(e,n){return Mu(e,n)}function _p(e,n,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(e,n,t,o){return new _p(e,n,t,o)}function us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hp(e){if(typeof e=="function")return us(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Aa)return 11;if(e===Va)return 14}return 2}function kn(e,n){var t=e.alternate;return t===null?(t=Ve(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Qo(e,n,t,o,r,i){var a=2;if(o=e,typeof e=="function")us(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case qn:return Wn(t.children,r,i,n);case Ta:a=8,r|=8;break;case Ci:return e=Ve(12,t,n,r|2),e.elementType=Ci,e.lanes=i,e;case xi:return e=Ve(13,t,n,r),e.elementType=xi,e.lanes=i,e;case Mi:return e=Ve(19,t,n,r),e.elementType=Mi,e.lanes=i,e;case uu:return Ir(t,r,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case su:a=10;break e;case lu:a=9;break e;case Aa:a=11;break e;case Va:a=14;break e;case an:a=16,o=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return n=Ve(a,t,n,r),n.elementType=e,n.type=o,n.lanes=i,n}function Wn(e,n,t,o){return e=Ve(7,e,o,n),e.lanes=t,e}function Ir(e,n,t,o){return e=Ve(22,e,o,n),e.elementType=uu,e.lanes=t,e.stateNode={isHidden:!1},e}function mi(e,n,t){return e=Ve(6,e,null,n),e.lanes=t,e}function yi(e,n,t){return n=Ve(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Yp(e,n,t,o,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qr(0),this.expirationTimes=Qr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qr(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ds(e,n,t,o,r,i,a,s,l){return e=new Yp(e,n,t,s,l),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ve(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ka(i),e}function Bp(e,n,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:o==null?null:""+o,children:e,containerInfo:n,implementation:t}}function ec(e){if(!e)return Sn;e=e._reactInternals;e:{if(Hn(e)!==e||e.tag!==1)throw Error(b(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(we(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(b(171))}if(e.tag===1){var t=e.type;if(we(t))return ed(e,t,n)}return n}function nc(e,n,t,o,r,i,a,s,l){return e=ds(t,o,!0,e,r,i,a,s,l),e.context=ec(null),t=e.current,o=he(),r=wn(t),i=Je(o,r),i.callback=n??null,yn(t,i,r),e.current.lanes=r,ho(e,r,o),ke(e,o),e}function Wr(e,n,t,o){var r=n.current,i=he(),a=wn(r);return t=ec(t),n.context===null?n.context=t:n.pendingContext=t,n=Je(i,a),n.payload={element:e},o=o===void 0?null:o,o!==null&&(n.callback=o),e=yn(r,n,a),e!==null&&(Ge(e,r,a,i),Yo(e,r,a)),a}function br(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cl(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function cs(e,n){Cl(e,n),(e=e.alternate)&&Cl(e,n)}function Kp(){return null}var tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function hs(e){this._internalRoot=e}zr.prototype.render=hs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(b(409));Wr(e,n,null,null)};zr.prototype.unmount=hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Fn(function(){Wr(null,e,null,null)}),n[en]=null}};function zr(e){this._internalRoot=e}zr.prototype.unstable_scheduleHydration=function(e){if(e){var n=Nu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ln.length&&n!==0&&n<ln[t].priority;t++);ln.splice(t,0,e),t===0&&Ru(e)}};function ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ur(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xl(){}function Zp(e,n,t,o,r){if(r){if(typeof o=="function"){var i=o;o=function(){var u=br(a);i.call(u)}}var a=nc(n,o,e,0,null,!1,!1,"",xl);return e._reactRootContainer=a,e[en]=a.current,Xt(e.nodeType===8?e.parentNode:e),Fn(),a}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var s=o;o=function(){var u=br(l);s.call(u)}}var l=ds(e,0,!1,null,null,!1,!1,"",xl);return e._reactRootContainer=l,e[en]=l.current,Xt(e.nodeType===8?e.parentNode:e),Fn(function(){Wr(n,l,t,o)}),l}function Gr(e,n,t,o,r){var i=t._reactRootContainer;if(i){var a=i;if(typeof r=="function"){var s=r;r=function(){var l=br(a);s.call(l)}}Wr(n,a,e,r)}else a=Zp(t,n,e,r,o);return br(a)}ju=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ot(n.pendingLanes);t!==0&&(Ea(n,t|1),ke(n,B()),!(O&6)&&(wt=B()+500,Mn()))}break;case 13:Fn(function(){var o=nn(e,1);if(o!==null){var r=he();Ge(o,e,1,r)}}),cs(e,1)}};Na=function(e){if(e.tag===13){var n=nn(e,134217728);if(n!==null){var t=he();Ge(n,e,134217728,t)}cs(e,134217728)}};Eu=function(e){if(e.tag===13){var n=wn(e),t=nn(e,n);if(t!==null){var o=he();Ge(t,e,n,o)}cs(e,n)}};Nu=function(){return R};Ou=function(e,n){var t=R;try{return R=e,n()}finally{R=t}};Ii=function(e,n,t){switch(n){case"input":if(Vi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var o=t[n];if(o!==e&&o.form===e.form){var r=Lr(o);if(!r)throw Error(b(90));cu(o),Vi(o,r)}}}break;case"textarea":pu(e,t);break;case"select":n=t.value,n!=null&&st(e,!!t.multiple,n,!1)}};ku=as;Pu=Fn;var $p={usingClientEntryPoint:!1,Events:[fo,et,Lr,vu,wu,as]},jt={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qp={bundleType:jt.bundleType,version:jt.version,rendererPackageName:jt.rendererPackageName,rendererConfig:jt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cu(e),e===null?null:e.stateNode},findFiberByHostInstance:jt.findFiberByHostInstance||Kp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{Mr=Io.inject(qp),Ye=Io}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$p;xe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ps(n))throw Error(b(200));return Bp(e,n,null,t)};xe.createRoot=function(e,n){if(!ps(e))throw Error(b(299));var t=!1,o="",r=tc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=ds(e,1,!1,null,null,t,!1,o,r),e[en]=n.current,Xt(e.nodeType===8?e.parentNode:e),new hs(n)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Cu(n),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Fn(e)};xe.hydrate=function(e,n,t){if(!Ur(n))throw Error(b(200));return Gr(null,e,n,!0,t)};xe.hydrateRoot=function(e,n,t){if(!ps(e))throw Error(b(405));var o=t!=null&&t.hydratedSources||null,r=!1,i="",a=tc;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=nc(n,null,e,1,t??null,r,!1,i,a),e[en]=n.current,Xt(e),o)for(e=0;e<o.length;e++)t=o[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new zr(n)};xe.render=function(e,n,t){if(!Ur(n))throw Error(b(200));return Gr(null,e,n,!1,t)};xe.unmountComponentAtNode=function(e){if(!Ur(e))throw Error(b(40));return e._reactRootContainer?(Fn(function(){Gr(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};xe.unstable_batchedUpdates=as;xe.unstable_renderSubtreeIntoContainer=function(e,n,t,o){if(!Ur(t))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Gr(e,n,t,!1,o)};xe.version="18.3.1-next-f1338f8080-20240426";function oc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oc)}catch(e){console.error(e)}}oc(),ou.exports=xe;var Qp=ou.exports,Ml=Qp;bi.createRoot=Ml.createRoot,bi.hydrateRoot=Ml.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lo(){return lo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},lo.apply(null,arguments)}var hn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(hn||(hn={}));const Tl="popstate";function Jp(e){e===void 0&&(e={});function n(o,r){let{pathname:i,search:a,hash:s}=o.location;return ga("",{pathname:i,search:a,hash:s},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(o,r){return typeof r=="string"?r:Sr(r)}return ef(n,t,null,e)}function Z(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function fs(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Xp(){return Math.random().toString(36).substr(2,8)}function Al(e,n){return{usr:e.state,key:e.key,idx:n}}function ga(e,n,t,o){return t===void 0&&(t=null),lo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?St(n):n,{state:t,key:n&&n.key||o||Xp()})}function Sr(e){let{pathname:n="/",search:t="",hash:o=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function St(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let o=e.indexOf("?");o>=0&&(n.search=e.substr(o),e=e.substr(0,o)),e&&(n.pathname=e)}return n}function ef(e,n,t,o){o===void 0&&(o={});let{window:r=document.defaultView,v5Compat:i=!1}=o,a=r.history,s=hn.Pop,l=null,u=f();u==null&&(u=0,a.replaceState(lo({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function c(){s=hn.Pop;let x=f(),p=x==null?null:x-u;u=x,l&&l({action:s,location:k.location,delta:p})}function m(x,p){s=hn.Push;let d=ga(k.location,x,p);u=f()+1;let g=Al(d,u),w=k.createHref(d);try{a.pushState(g,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(w)}i&&l&&l({action:s,location:k.location,delta:1})}function y(x,p){s=hn.Replace;let d=ga(k.location,x,p);u=f();let g=Al(d,u),w=k.createHref(d);a.replaceState(g,"",w),i&&l&&l({action:s,location:k.location,delta:0})}function v(x){let p=r.location.origin!=="null"?r.location.origin:r.location.href,d=typeof x=="string"?x:Sr(x);return d=d.replace(/ $/,"%20"),Z(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let k={get action(){return s},get location(){return e(r,a)},listen(x){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Tl,c),l=x,()=>{r.removeEventListener(Tl,c),l=null}},createHref(x){return n(r,x)},createURL:v,encodeLocation(x){let p=v(x);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:y,go(x){return a.go(x)}};return k}var Vl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Vl||(Vl={}));function nf(e,n,t){return t===void 0&&(t="/"),tf(e,n,t)}function tf(e,n,t,o){let r=typeof n=="string"?St(n):n,i=gs(r.pathname||"/",t);if(i==null)return null;let a=rc(e);of(a);let s=null,l=mf(i);for(let u=0;s==null&&u<a.length;++u)s=pf(a[u],l);return s}function rc(e,n,t,o){n===void 0&&(n=[]),t===void 0&&(t=[]),o===void 0&&(o="");let r=(i,a,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&(Z(l.relativePath.startsWith(o),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(o.length));let u=Pn([o,l.relativePath]),f=t.concat(l);i.children&&i.children.length>0&&(Z(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),rc(i.children,n,f,u)),!(i.path==null&&!i.index)&&n.push({path:u,score:cf(u,i.index),routesMeta:f})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))r(i,a);else for(let l of ic(i.path))r(i,a,l)}),n}function ic(e){let n=e.split("/");if(n.length===0)return[];let[t,...o]=n,r=t.endsWith("?"),i=t.replace(/\?$/,"");if(o.length===0)return r?[i,""]:[i];let a=ic(o.join("/")),s=[];return s.push(...a.map(l=>l===""?i:[i,l].join("/"))),r&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function of(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:hf(n.routesMeta.map(o=>o.childrenIndex),t.routesMeta.map(o=>o.childrenIndex)))}const rf=/^:[\w-]+$/,af=3,sf=2,lf=1,uf=10,df=-2,Ll=e=>e==="*";function cf(e,n){let t=e.split("/"),o=t.length;return t.some(Ll)&&(o+=df),n&&(o+=sf),t.filter(r=>!Ll(r)).reduce((r,i)=>r+(rf.test(i)?af:i===""?lf:uf),o)}function hf(e,n){return e.length===n.length&&e.slice(0,-1).every((o,r)=>o===n[r])?e[e.length-1]-n[n.length-1]:0}function pf(e,n,t){let{routesMeta:o}=e,r={},i="/",a=[];for(let s=0;s<o.length;++s){let l=o[s],u=s===o.length-1,f=i==="/"?n:n.slice(i.length)||"/",c=ff({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),m=l.route;if(!c)return null;Object.assign(r,c.params),a.push({params:r,pathname:Pn([i,c.pathname]),pathnameBase:Pf(Pn([i,c.pathnameBase])),route:m}),c.pathnameBase!=="/"&&(i=Pn([i,c.pathnameBase]))}return a}function ff(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,o]=gf(e.path,e.caseSensitive,e.end),r=n.match(t);if(!r)return null;let i=r[0],a=i.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:o.reduce((u,f,c)=>{let{paramName:m,isOptional:y}=f;if(m==="*"){let k=s[c]||"";a=i.slice(0,i.length-k.length).replace(/(.)\/+$/,"$1")}const v=s[c];return y&&!v?u[m]=void 0:u[m]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function gf(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),fs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(o.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,n?void 0:"i"),o]}function mf(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return fs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function gs(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,o=e.charAt(t);return o&&o!=="/"?null:e.slice(t)||"/"}const yf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vf=e=>yf.test(e);function wf(e,n){n===void 0&&(n="/");let{pathname:t,search:o="",hash:r=""}=typeof e=="string"?St(e):e,i;if(t)if(vf(t))i=t;else{if(t.includes("//")){let a=t;t=lc(t),fs(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?i=jl(t.substring(1),"/"):i=jl(t,n)}else i=n;return{pathname:i,search:bf(o),hash:Sf(r)}}function jl(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function vi(e,n,t,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kf(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function ac(e,n){let t=kf(e);return n?t.map((o,r)=>r===t.length-1?o.pathname:o.pathnameBase):t.map(o=>o.pathnameBase)}function sc(e,n,t,o){o===void 0&&(o=!1);let r;typeof e=="string"?r=St(e):(r=lo({},e),Z(!r.pathname||!r.pathname.includes("?"),vi("?","pathname","search",r)),Z(!r.pathname||!r.pathname.includes("#"),vi("#","pathname","hash",r)),Z(!r.search||!r.search.includes("#"),vi("#","search","hash",r)));let i=e===""||r.pathname==="",a=i?"/":r.pathname,s;if(a==null)s=t;else{let c=n.length-1;if(!o&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),c-=1;r.pathname=m.join("/")}s=c>=0?n[c]:"/"}let l=wf(r,s),u=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const lc=e=>e.replace(/\/\/+/g,"/"),Pn=e=>lc(e.join("/")),Pf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),bf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Sf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Cf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const uc=["post","put","patch","delete"];new Set(uc);const xf=["get",...uc];new Set(xf);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},uo.apply(null,arguments)}const ms=P.createContext(null),Mf=P.createContext(null),Yn=P.createContext(null),Dr=P.createContext(null),Bn=P.createContext({outlet:null,matches:[],isDataRoute:!1}),dc=P.createContext(null);function Tf(e,n){let{relative:t}=n===void 0?{}:n;mo()||Z(!1);let{basename:o,navigator:r}=P.useContext(Yn),{hash:i,pathname:a,search:s}=hc(e,{relative:t}),l=a;return o!=="/"&&(l=a==="/"?o:Pn([o,a])),r.createHref({pathname:l,search:s,hash:i})}function mo(){return P.useContext(Dr)!=null}function Fr(){return mo()||Z(!1),P.useContext(Dr).location}function cc(e){P.useContext(Yn).static||P.useLayoutEffect(e)}function _r(){let{isDataRoute:e}=P.useContext(Bn);return e?Gf():Af()}function Af(){mo()||Z(!1);let e=P.useContext(ms),{basename:n,future:t,navigator:o}=P.useContext(Yn),{matches:r}=P.useContext(Bn),{pathname:i}=Fr(),a=JSON.stringify(ac(r,t.v7_relativeSplatPath)),s=P.useRef(!1);return cc(()=>{s.current=!0}),P.useCallback(function(u,f){if(f===void 0&&(f={}),!s.current)return;if(typeof u=="number"){o.go(u);return}let c=sc(u,JSON.parse(a),i,f.relative==="path");e==null&&n!=="/"&&(c.pathname=c.pathname==="/"?n:Pn([n,c.pathname])),(f.replace?o.replace:o.push)(c,f.state,f)},[n,o,a,i,e])}function hc(e,n){let{relative:t}=n===void 0?{}:n,{future:o}=P.useContext(Yn),{matches:r}=P.useContext(Bn),{pathname:i}=Fr(),a=JSON.stringify(ac(r,o.v7_relativeSplatPath));return P.useMemo(()=>sc(e,JSON.parse(a),i,t==="path"),[e,a,i,t])}function Vf(e,n){return Lf(e,n)}function Lf(e,n,t,o){mo()||Z(!1);let{navigator:r}=P.useContext(Yn),{matches:i}=P.useContext(Bn),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Fr(),f;if(n){var c;let x=typeof n=="string"?St(n):n;l==="/"||(c=x.pathname)!=null&&c.startsWith(l)||Z(!1),f=x}else f=u;let m=f.pathname||"/",y=m;if(l!=="/"){let x=l.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let v=nf(e,{pathname:y}),k=Rf(v&&v.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:Pn([l,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Pn([l,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,t,o);return n&&k?P.createElement(Dr.Provider,{value:{location:uo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:hn.Pop}},k):k}function jf(){let e=Uf(),n=Cf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},n),t?P.createElement("pre",{style:r},t):null,null)}const Ef=P.createElement(jf,null);class Nf extends P.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?P.createElement(Bn.Provider,{value:this.props.routeContext},P.createElement(dc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Of(e){let{routeContext:n,match:t,children:o}=e,r=P.useContext(ms);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),P.createElement(Bn.Provider,{value:n},o)}function Rf(e,n,t,o){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),o===void 0&&(o=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=o)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,s=(r=t)==null?void 0:r.errors;if(s!=null){let f=a.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);f>=0||Z(!1),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,u=-1;if(t&&o&&o.v7_partialHydration)for(let f=0;f<a.length;f++){let c=a[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.id){let{loaderData:m,errors:y}=t,v=c.route.loader&&m[c.route.id]===void 0&&(!y||y[c.route.id]===void 0);if(c.route.lazy||v){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((f,c,m)=>{let y,v=!1,k=null,x=null;t&&(y=s&&c.route.id?s[c.route.id]:void 0,k=c.route.errorElement||Ef,l&&(u<0&&m===0?(Df("route-fallback"),v=!0,x=null):u===m&&(v=!0,x=c.route.hydrateFallbackElement||null)));let p=n.concat(a.slice(0,m+1)),d=()=>{let g;return y?g=k:v?g=x:c.route.Component?g=P.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=f,P.createElement(Of,{match:c,routeContext:{outlet:f,matches:p,isDataRoute:t!=null},children:g})};return t&&(c.route.ErrorBoundary||c.route.errorElement||m===0)?P.createElement(Nf,{location:t.location,revalidation:t.revalidation,component:k,error:y,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var pc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(pc||{}),fc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(fc||{});function If(e){let n=P.useContext(ms);return n||Z(!1),n}function Wf(e){let n=P.useContext(Mf);return n||Z(!1),n}function zf(e){let n=P.useContext(Bn);return n||Z(!1),n}function gc(e){let n=zf(),t=n.matches[n.matches.length-1];return t.route.id||Z(!1),t.route.id}function Uf(){var e;let n=P.useContext(dc),t=Wf(),o=gc();return n!==void 0?n:(e=t.errors)==null?void 0:e[o]}function Gf(){let{router:e}=If(pc.UseNavigateStable),n=gc(fc.UseNavigateStable),t=P.useRef(!1);return cc(()=>{t.current=!0}),P.useCallback(function(r,i){i===void 0&&(i={}),t.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,uo({fromRouteId:n},i)))},[e,n])}const El={};function Df(e,n,t){El[e]||(El[e]=!0)}function Ff(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function de(e){Z(!1)}function _f(e){let{basename:n="/",children:t=null,location:o,navigationType:r=hn.Pop,navigator:i,static:a=!1,future:s}=e;mo()&&Z(!1);let l=n.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:l,navigator:i,static:a,future:uo({v7_relativeSplatPath:!1},s)}),[l,s,i,a]);typeof o=="string"&&(o=St(o));let{pathname:f="/",search:c="",hash:m="",state:y=null,key:v="default"}=o,k=P.useMemo(()=>{let x=gs(f,l);return x==null?null:{location:{pathname:x,search:c,hash:m,state:y,key:v},navigationType:r}},[l,f,c,m,y,v,r]);return k==null?null:P.createElement(Yn.Provider,{value:u},P.createElement(Dr.Provider,{children:t,value:k}))}function Hf(e){let{children:n,location:t}=e;return Vf(ma(n),t)}new Promise(()=>{});function ma(e,n){n===void 0&&(n=[]);let t=[];return P.Children.forEach(e,(o,r)=>{if(!P.isValidElement(o))return;let i=[...n,r];if(o.type===P.Fragment){t.push.apply(t,ma(o.props.children,i));return}o.type!==de&&Z(!1),!o.props.index||!o.props.children||Z(!1);let a={id:o.props.id||i.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(a.children=ma(o.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ya.apply(null,arguments)}function Yf(e,n){if(e==null)return{};var t={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)!==-1)continue;t[o]=e[o]}return t}function Bf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Kf(e,n){return e.button===0&&(!n||n==="_self")&&!Bf(e)}const Zf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],$f="6";try{window.__reactRouterVersion=$f}catch{}const qf="startTransition",Nl=Gc[qf];function Qf(e){let{basename:n,children:t,future:o,window:r}=e,i=P.useRef();i.current==null&&(i.current=Jp({window:r,v5Compat:!0}));let a=i.current,[s,l]=P.useState({action:a.action,location:a.location}),{v7_startTransition:u}=o||{},f=P.useCallback(c=>{u&&Nl?Nl(()=>l(c)):l(c)},[l,u]);return P.useLayoutEffect(()=>a.listen(f),[a,f]),P.useEffect(()=>Ff(o),[o]),P.createElement(_f,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:a,future:o})}const Jf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jo=P.forwardRef(function(n,t){let{onClick:o,relative:r,reloadDocument:i,replace:a,state:s,target:l,to:u,preventScrollReset:f,viewTransition:c}=n,m=Yf(n,Zf),{basename:y}=P.useContext(Yn),v,k=!1;if(typeof u=="string"&&Xf.test(u)&&(v=u,Jf))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),C=gs(w.pathname,y);w.origin===g.origin&&C!=null?u=C+w.search+w.hash:k=!0}catch{}let x=Tf(u,{relative:r}),p=eg(u,{replace:a,state:s,target:l,preventScrollReset:f,relative:r,viewTransition:c});function d(g){o&&o(g),g.defaultPrevented||p(g)}return P.createElement("a",ya({},m,{href:v||x,onClick:k||i?o:d,ref:t,target:l}))});var Ol;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ol||(Ol={}));var Rl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rl||(Rl={}));function eg(e,n){let{target:t,replace:o,state:r,preventScrollReset:i,relative:a,viewTransition:s}=n===void 0?{}:n,l=_r(),u=Fr(),f=hc(e,{relative:a});return P.useCallback(c=>{if(Kf(c,t)){c.preventDefault();let m=o!==void 0?o:Sr(u)===Sr(f);l(e,{replace:m,state:r,preventScrollReset:i,relative:a,viewTransition:s})}},[u,l,f,o,r,t,e,i,a,s])}function ng(){const e=_r();return h.jsx("div",{className:"welcome-page",children:h.jsxs("div",{className:"welcome-content",children:[h.jsx("div",{className:"welcome-icon-box",children:h.jsx("img",{src:"/welcomepageimage.png",alt:"VolunteerHigh",className:"welcome-image"})}),h.jsx("h1",{className:"welcome-title",children:"Welcome to VolunteerHigh"}),h.jsx("button",{className:"welcome-next-btn",onClick:()=>e("/home"),children:"Get Started"})]})})}const tg="/assets/VolunteerHighLogo-BnGChIAc.png";function wi(e,n,t=1500,o=!1){const[r,i]=P.useState(o?e:0),a=P.useRef(!1),s=P.useRef(null);return P.useEffect(()=>{if(o){i(e);return}if(!n||a.current)return;a.current=!0;const l=performance.now(),u=f=>{const c=f-l,m=Math.min(c/t,1);i(Math.floor(m*e)),m<1&&(s.current=requestAnimationFrame(u))};return s.current=requestAnimationFrame(u),()=>{s.current&&cancelAnimationFrame(s.current)}},[n,o]),r}function Il(e=.5){const n=P.useRef(null),[t,o]=P.useState(!1);return P.useEffect(()=>{const r=n.current;if(!r)return;const i=new IntersectionObserver(([a])=>{a.isIntersecting&&a.intersectionRatio>=e&&o(!0)},{threshold:e});return i.observe(r),()=>i.disconnect()},[e]),[n,t]}function Wl(e=.35){const n=P.useRef(null),[t,o]=P.useState(!1);return P.useEffect(()=>{const r=n.current;if(!r)return;const i=new IntersectionObserver(([a])=>{o(a.isIntersecting&&a.intersectionRatio>=e)},{threshold:e});return i.observe(r),()=>i.disconnect()},[e]),[n,t]}const ys="volunteerhigh_home_animations_played";function og(){return sessionStorage.getItem(ys)!=="true"}function rg(){sessionStorage.setItem(ys,"true")}function ig(){sessionStorage.removeItem(ys)}const ag=[{label:"HandsOn Greater Phoenix",to:"/org/hands-on-greater-phoenix"},{label:"Arizona State Parks and Trails",to:"/org/arizona-state-parks"},{label:"City of Flagstaff",to:"/org/city-of-flagstaff"},{label:"Junior Achievement of Arizona",to:"/org/junior-achievement"},{label:"Feed My Starving Children",to:"/org/feed-my-starving-children"},{label:"Arizona Sustainability Alliance",to:"/org/az-sustainability-alliance"},{label:"Bureau of Land Management Arizona",to:"/org/bureau-of-land-management"},{label:"Lost Our Home Pet Rescue",to:"/org/lost-our-homes-pet-rescue"}];function yo({current:e}){const[n,t]=P.useState(!1),o=P.useRef(null),r=[{key:"quest",label:"Quest AI",to:"/quest"},{key:"maps",label:"Maps",to:"/maps"},{key:"about",label:"About",to:"/about"},{key:"faq",label:"FAQ's",to:"/faq"}];function i(){o.current&&clearTimeout(o.current),t(!0)}function a(){o.current=setTimeout(()=>t(!1),150)}return h.jsxs("div",{className:"navbar",children:[h.jsx(Jo,{to:"/home",className:"navbar-logo-link",onClick:ig,children:h.jsx("img",{src:tg,alt:"VolunteerHigh",className:"navbar-logo"})}),h.jsx("div",{className:"navbar-spacer"}),r.map(s=>e===s.key?h.jsx("span",{className:"navbar-current",children:s.label},s.key):h.jsx(Jo,{to:s.to,className:"navbar-link",children:s.label},s.key)),h.jsxs("div",{className:"navbar-org-dropdown",onMouseEnter:i,onMouseLeave:a,children:[h.jsxs("button",{className:`navbar-link navbar-org-trigger${e==="organizations"?" navbar-current":""}`,onClick:()=>t(s=>!s),"aria-expanded":n,children:["Organizations ",h.jsx("span",{className:"navbar-org-caret",children:"▾"})]}),n&&h.jsx("div",{className:"navbar-org-menu navbar-org-menu-right",children:ag.map(s=>h.jsx(Jo,{to:s.to,className:"navbar-org-menu-item",onClick:()=>t(!1),children:s.label},s.to))})]})]})}const sg="/assets/Image-DgsHldMx.png",lg="/assets/HandsOnGreaterPhoenixLogo-t_QkNJAt.jpg",ug="/assets/AZStateParksandTrailsLogo-bjg6v4ly.jpg",dg="/assets/CityOfFlagstaffLogo-DLqi0ajI.jpg",cg="/assets/JuniorAchievementOfArizonaLogo-phlbKpa8.jpg",hg="/assets/FMSCLogo-BcUhIjKK.jpg",pg="/assets/AZSustainabilityAllianceLogo-Gt_x0TzN.jpg",fg="/assets/BureauOfLandManagement-BaEZUK12.jpg",gg="/assets/LostOurHomesPetRescueImageLogo-BENexxV-.jpg",mg=[{to:"/org/hands-on-greater-phoenix",img:lg,name:"HandsOn Greater Phoenix",circular:!0},{to:"/org/arizona-state-parks",img:ug,name:"Arizona State Parks and Trails",circular:!1},{to:"/org/city-of-flagstaff",img:dg,name:"City of Flagstaff",circular:!0},{to:"/org/junior-achievement",img:cg,name:"Junior Achievement of Arizona",circular:!0}],yg=[{to:"/org/feed-my-starving-children",img:hg,name:"Feed My Starving Children",circular:!1},{to:"/org/az-sustainability-alliance",img:pg,name:"Arizona Sustainability Alliance",circular:!0},{to:"/org/bureau-of-land-management",img:fg,name:"Bureau of Land Management Arizona",circular:!1},{to:"/org/lost-our-homes-pet-rescue",img:gg,name:"Lost Our Home Pet Rescue",circular:!1}];function zl({to:e,img:n,name:t,circular:o,isVisible:r,index:i,animationsEnabled:a}){const s=!a||r;return h.jsxs(Jo,{to:e,className:`partner-box${s?" visible":""}${a?"":" no-anim"}`,style:a?{transitionDelay:`${i*.28}s`}:void 0,children:[h.jsx("img",{src:n,alt:t,className:o?"circular":""}),h.jsx("span",{className:"org-name",children:t})]})}function vg(){const e=_r(),[n,t]=Il(.3),[o,r]=Il(.6),[i,a]=Wl(.35),[s,l]=Wl(.35),[u]=P.useState(()=>og());P.useEffect(()=>{u&&rg()},[u]);const f=wi(90,t,1500,!u),c=wi(100,t,1500,!u),m=wi(92,t,1500,!u);return h.jsxs("div",{className:"main-screen",children:[h.jsx(yo,{current:null}),h.jsxs("div",{className:"main-scroll",children:[h.jsx("div",{className:"hero-section",style:{backgroundImage:`url(${sg})`},children:h.jsxs("div",{className:"hero-text",children:[h.jsx("p",{className:"hero-brand",children:"VolunteerHigh"}),h.jsx("h1",{className:"hero-line1",children:"Discover High School"}),h.jsx("h1",{className:"hero-line2 blue",children:"Volunteer Opportunities"}),h.jsx("p",{className:"hero-sub",children:`Find community service in Arizona.
Together, we can make a lasting
impact and build a better tomorrow
for those in need`})]})}),h.jsxs("div",{className:"project-section",children:[h.jsx("h2",{className:"project-title",children:"The VolunteerHigh Project"}),h.jsx("p",{className:"project-sub",children:"A platform that empowers students to find, explore, and engage in"}),h.jsx("p",{className:"project-sub second",children:"meaningful local volunteer opportunities while creating lasting community impact."}),h.jsxs("div",{className:"stats-row",ref:n,children:[h.jsxs("div",{className:"stat-block",children:[h.jsx("div",{className:"stat-rule",children:"――――――"}),h.jsxs("p",{className:"stat-number",children:[f,"%+"]}),h.jsx("p",{className:"stat-caption",children:`of students participated in volunteer
work before entering
college`})]}),h.jsxs("div",{className:"stat-block",children:[h.jsx("div",{className:"stat-rule",children:"――――――"}),h.jsxs("p",{className:"stat-number",children:[c,"+"]}),h.jsx("p",{className:"stat-caption",children:`volunteering hours by the
average high schooler before
graduating.`})]}),h.jsxs("div",{className:"stat-block",children:[h.jsx("div",{className:"stat-rule",children:"――――――"}),h.jsxs("p",{className:"stat-number",children:[m,"%+"]}),h.jsx("p",{className:"stat-caption",children:`of admissions officers
value 4-year volunteering`})]})]})]}),h.jsxs("div",{className:"partners-divider-row",ref:o,children:[h.jsx("div",{className:"rule"}),h.jsx("span",{className:"label",children:"Our Partner Organizations"}),h.jsx("div",{className:"rule"})]}),h.jsxs("div",{className:"partners-grid-wrap",children:[h.jsx("div",{className:"partners-row",children:mg.map((y,v)=>h.jsx(zl,{...y,isVisible:r,index:v,animationsEnabled:u},y.to))}),h.jsx("div",{className:"partners-row",children:yg.map((y,v)=>h.jsx(zl,{...y,isVisible:r,index:v+4,animationsEnabled:u},y.to))})]}),h.jsx("div",{className:"quest-section",children:h.jsxs("div",{className:`scroll-transition${a?" identity":""}`,ref:i,children:[h.jsx("h2",{className:"quest-heading",children:"Quest - Our Volunteering Recommendation Engine"}),h.jsx("p",{className:"quest-body-text",children:`Quest in an intelligent Volunteer Recommendation engine helps you to find the best volunteering opportunities tailored to your
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
`+n),ki.push({role:"user",parts:[{text:e}]});const t=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${wg}:generateContent?key=${mc}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system_instruction:{parts:[{text:Pi}]},contents:ki,generationConfig:{maxOutputTokens:1e3,temperature:.7}})});if(!t.ok){const c=await t.json().catch(()=>({}));throw new Error(((i=c==null?void 0:c.error)==null?void 0:i.message)||`API error ${t.status}`)}const r=((f=(u=(l=(s=(a=(await t.json()).candidates)==null?void 0:a[0])==null?void 0:s.content)==null?void 0:l.parts)==null?void 0:u[0])==null?void 0:f.text)??"";return ki.push({role:"model",parts:[{text:r}]}),r}const bg={title:"HandsOn Greater Phoenix",note:null,opportunities:[{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-08-13 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EsINKMA3",date:"2026-08-13"},{name:"Donation Packing with The Welcome to America Project",description:`Join us to pack donations for the refugee families that will be welcomed the following Saturday. Donations range from clothing, household items, books, and kitchen items. We need your help to ensure incoming families have everything they need to begin their lives in Arizona!

The minimum age for this volunteer opportunity is 10 with a parent or guardian. All volunteers under the age of 18 must be accompanied by a parent/guardian. 

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

If you have questions, Contact Pam at 602-361-7058

2026-08-13 | 9:00 AM - 11:00 AM

Location: Tempe, AZ, 85281

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000089olUiMAI",date:"2026-08-13"},{name:"Game Night at MANA House",description:`Bring your A-game for this fun social event at MANA House, a peer-support organization of homeless and formerly homeless veterans! Volunteers will facilitate Bingo for the Veterans residing at the facility. Join us to help bring joy to those who have valiantly served our country.

The minimum age for this volunteer opportunity is 18.

2026-08-13 | 6:00 PM - 7:30 PM

Location: Phoenix, AZ, 85009

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007xAmEsMAK",date:"2026-08-13"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-08-14 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EsINLMA3",date:"2026-08-14"},{name:"Community Market (Referral)",description:`Come join YWCA Metropolitan Phoenix at our monthly Community Market food distribution! In partnership with St. Mary's Food Bank, we are able to distribute fresh produce, pantry essentials and household goods to community members. 

As we are in our hotter months, we want to limit folks' time outdoors. We will be conducting this Community Market as a walk-up market. Participants will check in at the table and then volunteers will help bring food boxes to the cars.

Some things to note:

	
You will be mostly indoors for assembly of the food packages. However, we will be walking between inside and outside to deliver the food to participants. Make sure you are protected from the sun.

	
Sneakers or comfortable closed-toe shoes required. 

	
If you have it, wear persimmon orange or YWCA gear.

	
YWCA shirts will be available for a donation of $20, but are not required

	
Water and snacks will be provided.

	
Breaks are encouraged all day.

	
Volunteers are allowed to take food from the market only after community members have been served. Please do not take any of the food until a YWCA team member has let you know it is okay.

2026-08-14 | 9:00 AM - 1:00 PM

Location: Glendale, AZ, 85302

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008E7cWbMAJ",date:"2026-08-14"},{name:"Lunch Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-08-14 | 10:00 AM - 1:30 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EqU8QMAV",date:"2026-08-14"},{name:"Chef&#39;s Night Off at HomeBase Surprise",description:`Roll up your sleeves and help chop, slice, and dice with love as you prepare and serve dinner for homeless youth and young adults (ages 18-26) at HomeBase Youth Services in Surprise. You can also help pack lunches that will be distributed throughout the week to homeless youth and young adults. Allow the busy chef to have a nice evening off.

Volunteers must wear closed-toe shoes, and long hair should be pulled back.

The minimum age for this project is 11 with a parent/guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-08-14 | 3:00 PM - 5:00 PM

Location: Surprise, AZ, 85378

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007u7BUwMAM",date:"2026-08-14"},{name:"Evening Meal Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-08-14 | 3:00 PM - 6:00 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008Ery81MAB",date:"2026-08-14"},{name:"August 2026 Monthly Park Cleanup and Stinknet Removal – Kiwanis Park (Referral)",description:`Join Keep Tempe Beautiful on Saturday, August 15th to clean up Kiwanis Park and remove invasive stinknet.

We will be by the Kiwanis Recreation Center (6111 S All America Way, Tempe, AZ 85283).

Here is more information on what we will be working on:

o Trash and litter removal

o Stinknet removal

If you need additional support in identifying stinknet, we recommend the iNaturalist app (press + to create a new observation, take a photo, then review suggestions).

If you would like to support larger efforts to stop the spread, please report your findings on Stinknet.org (push the red button, input the details, then submit).

Bring water, sunscreen, and hat. Your time slot will start and end on time; we won’t ask you to stay longer.

There is no minimum age to participate in this event and we will have staff on-site to sign any documents for community service requirements.

1 Hour Shifts – 2 Shifts in Total: 7am-8am, 8am-9am.

You are welcome to sign up for one session or multiple.

We are also looking for Day Chairs to assist in managing the event!

Day Chairs are the lifeblood of our operations and are the first step to greater leadership opportunities within Keep Tempe Beautiful. Some of the things Day Chairs are tasked with are event setup, teardown, sign-in, sign-out, event raffles (if applicable), parking lot attendance, diverting trash from recyclables, photo/video taker, and more (these aren’t things that you choose; rather, everyone does a little of each depending where the needs are during the event)!

Click express interset below to be redirected to our sign up page!

2026-08-15 | 7:00 AM - 9:00 AM

Location: Tempe, AZ, 85283

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00006oU7nNMAS",date:"2026-08-15"},{name:"Rise and Dine at HomeBase",description:`Start your morning off right by providing a warm, wholesome breakfast for homeless youth and young adults (ages 18-24) at HomeBase Youth Services. Serve up pancakes, bacon, eggs and toast with a smile, while giving the residents energy to start their day off right!

Volunteers must wear closed-toe shoes, and long hair must be pulled back.

The minimum age for this volunteer opportunity is 11 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project. 

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

**Please check your Email Junk/Spam folders the week of the event for instructions from the Volunteer Leader.**

2026-08-15 | 8:00 AM - 10:00 AM

Location: Phoenix, AZ, 85014

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007WbVhGMAV",date:"2026-08-15"},{name:"Bowling with Civitan House",description:`Put on some bowling shoes and head to the alley to bowl with volunteers and residents of Civitan House, home for adults with developmental disabilities. Just make sure to bring socks to the bowling alley!!

This is a family friendly volunteer opportunity and volunteers must be at least 8 years old. All volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who wish to attend without a parent MUST bring a signed Youth Waiver.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-08-15 | 10:00 AM - 12:00 PM

Location: Phoenix, AZ, 85020

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007cjRNEMA2",date:"2026-08-15"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards Roosevelt",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at the Roosevelt Mini Park. Simply check the water temperature & water flow and wipe down the unit!

Do you walk by the mini park every morning? Do you ride your bike down Roosevelt Row once a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleaning. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-08-16 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007ekD5ZMAU",date:"2026-08-16"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards Desert West",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the two drinking stations at Desert West Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Desert West Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-08-16 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85035

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007eldWSMAY",date:"2026-08-16"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Lindo Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Lindo Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-08-16 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85041

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007ektDaMAI",date:"2026-08-16"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Grant Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Grant Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Grant Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-08-16 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007ek9PvMAI",date:"2026-08-16"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-08-17 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EsINMMA3",date:"2026-08-17"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards-Cave Creek",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Cave Creek-Larkspur Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-08-17 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85029

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007x8wRAMAY",date:"2026-08-17"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-08-18 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EsINNMA3",date:"2026-08-18"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-08-19 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EsINOMA3",date:"2026-08-19"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-08-20 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EsINPMA3",date:"2026-08-20"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-08-21 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EsINQMA3",date:"2026-08-21"},{name:"Lunch Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-08-21 | 10:00 AM - 1:30 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008Eqi2XMAR",date:"2026-08-21"},{name:"Site Beautification at YWCA",description:`Part of YWCA's mission is to mitigate aging’s most harmful threats through home-delivered meals and senior centers. The organization provides safe spaces where older adults can congregate, share a meal, crack a smile, and create community.

Do you have a knack for organizing, labeling, decluttering, kit asssembly, or decorating? Then this volunteer opportunity is for you! Help YWCA maintain a warm and welcoming environment for senior guests at their main location in Glendale. Tasks will vary each month. A hot lunch will be provided if desired!

Volunteers must be 18 years or older to participate in this volunteer opportunity.

2026-08-21 | 10:30 AM - 12:30 PM

Location: Glendale, AZ, 85302

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007iPY3xMAG",date:"2026-08-21"},{name:"Evening Meal Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-08-21 | 3:00 PM - 6:00 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008Er8kjMAB",date:"2026-08-21"},{name:"From the Ground Up: Volunteer Day at the Ranch (Referral)",description:`Join us for a meaningful day of giving back at Wildcat Ranch Phoenix! This in-person volunteer event is a wonderful opportunity to roll up your sleeves, enjoy the outdoors, and make a direct impact on the ranch and the horses who call it home.

Volunteers will work together on a variety of hands-on projects, including fence repairs, stall cleaning and refreshing, barn organization, and general facility beautification. These improvements help create a safer, more welcoming environment for our horses and the individuals who participate in our therapy programs.

No ranch experience is necessary—whether you’re a seasoned ranch hand or simply eager to help, your time and effort truly make a difference. Connect with nature, meet fellow community members, and be part of something meaningful.

2026-08-22 | 7:00 AM - 9:30 AM

Location: PHOENIX, AZ, AZ, 85042

Volunteers still needed: 50`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007QT15DMAT",date:"2026-08-22"},{name:"August 2026 #TrashTag Cleanup and Stinknet Removal – Tempe Town Lake (Referral)",description:`Join Keep Tempe Beautiful on Saturday, August 22nd to clean up Tempe Town Lake and remove invasive stinknet. We will be in the area in between the Mill Ave bridges right next to North Shore Beach Tempe AZ 85288.

Here is more information on what we will be working on:

o Trash and litter removal

o Stinknet removal

If you need additional support in identifying stinknet, we recommend the iNaturalist app (press + to create a new observation, take a photo, then review suggestions). If you would like to support larger efforts to stop the spread, please report your findings on Stinknet.org (push the red button, input the details, then submit).

Bring water, sunscreen, hat and gloves. Your time slot will start and end on time; we won’t ask you to stay longer. There is no minimum age to participate in this event and we will have staff on-site to sign any documents for community service requirements. 1 Hour Shifts – 3 Shifts in Total: 8am-9am, 9am-10am, 10am-11am. You are welcome to sign up for one session or multiple.We are also looking for Day Chairs to assist in managing the event! Day Chairs are the lifeblood of our operations and are the first step to greater leadership opportunities within Keep Tempe Beautiful. Some of the things Day Chairs are tasked with are event setup, teardown, sign-in, sign-out, event raffles (if applicable), parking lot attendance, diverting trash from recyclables, photo/video taker, and more (these aren’t things that you choose; rather, everyone does a little of each depending where the needs are during the event)!

Click express interest below to be redirected to our sign up page!

2026-08-22 | 8:00 AM - 11:00 AM

Location: Tempe, AZ, 85281

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00006oRBUKMA4",date:"2026-08-22"},{name:"Nature Nurturers at Escalante Community Garden",description:`The Escalante Community Garden is a garden that follows a communal model with healthy growing practices. A portion of the garden’s harvest is given to Tempe Community Action Agency's Food Pantry to supplement emergency food boxes. The garden features a children's area, as well as a desert and herb garden.

Volunteers will help care for the garden. Duties may include weeding, planting, pruning, and harvesting!Please wear closed-toe shoes, and clothes that can get dirty. Bring SPF and water!

The minimum age for this volunteer opportunity is 8 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

The map below shows the best way to enter the garden off River Dr. Call Rhonda at 480-510-8085 if you have trouble finding it.

2026-08-22 | 8:00 AM - 11:00 AM

Location: Tempe, AZ, 85281

Volunteers still needed: 7`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000082oQrpMAE",date:"2026-08-22"},{name:"Classroom Prep Pros at Southwest Autism Research & Resource Center",description:`SARRC's mission is to advance research and provide a lifetime of support for individuals with autism and their families.

Join SARRC’s Classroom Prep Pros and help create a welcoming, organized, and engaging learning environment for students! Volunteers will assist with preparing classroom materials, organizing supplies, and completing prep projects that support teachers and staff in providing high-quality programming for individuals with autism. This is a great opportunity for volunteers to make a meaningful behind-the-scenes impact while supporting SARRC’s mission. We will also be cleaning the classrooms!

The minimum age for this project is 6 with a parent/guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-08-22 | 9:00 AM - 12:00 PM

Location: Phoenix, AZ, 85006

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008FOpvxMAD",date:"2026-08-22"},{name:"Thrift Shop Assistants at Hope&#39;s Closet",description:`Hope's Closet is New Life Center's social enterprise thrift store, open to both the organization's emergency shelter residents and the local community. Join us at Hope's Closet to collect and sort through clothing donations, move items to the sales floor, and organize clothing racks.

New Life Center's mission is “Helping to eliminate domestic and sexual violence through support services, education, and expertise.” New Life Center provides services to over 1,100 adults and children each year. In addition to a safe place to stay, they provide advocacy, employment services, legal assistance, comprehensive children's services, transportation and outreach services to individual survivors and their families who have experienced domestic violence, sexual abuse, or human trafficking. All proceeds from Hope's Closet go back to our participating families and help to fund shelter operations. 

The minimum age for this volunteer opportunity is 14. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-08-22 | 10:00 AM - 12:00 PM

Location: Goodyear, AZ, 85338

Volunteers still needed: 6`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007S4OluMAF",date:"2026-08-22"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards Roosevelt",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at the Roosevelt Mini Park. Simply check the water temperature & water flow and wipe down the unit!

Do you walk by the mini park every morning? Do you ride your bike down Roosevelt Row once a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleaning. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-08-23 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007ekD5aMAE",date:"2026-08-23"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards Desert West",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the two drinking stations at Desert West Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Desert West Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-08-23 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85035

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007eldWTMAY",date:"2026-08-23"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Lindo Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Lindo Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-08-23 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85041

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007ektDbMAI",date:"2026-08-23"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Grant Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Grant Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Grant Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-08-23 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007ek9PwMAI",date:"2026-08-23"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-08-24 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EsINRMA3",date:"2026-08-24"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards-Cave Creek",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Cave Creek-Larkspur Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-08-24 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85029

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007x8wRBMAY",date:"2026-08-24"},{name:"Chef&#39;s Night Off at HomeBase",description:`Roll up your sleeves and help chop, slice, and dice with love as you prepare and serve dinner for homeless youth and young adults (ages 18-21) at HomeBase Youth Services. You can also help pack lunches that will be distributed throughout the week to homeless youth and young adults. Allow the busy chef to have a nice evening off.

Volunteers must wear closed-toe shoes, and long hair should be pulled back.

The minimum age for this project is 11 with a parent/guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-08-24 | 4:00 PM - 6:00 PM

Location: Phoenix, AZ, 85014

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007RzJCaMAN",date:"2026-08-24"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-08-25 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EsINSMA3",date:"2026-08-25"},{name:"Stove to Table - Kitchen volunteers needed (Referral)",description:`Advance's Stove to Table program delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package 360 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal. There are two shifts available each Tuesday and Wednesday. Volunteers are welcome to stay for one or more shifts as their schedule allows.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
Meal Prep - 9:00 AM to 12:00 PM

	
Packaging & Clean Up - 12:00 PM to 2:00 PM

We ask that you come dressed to work in a kitchen; please no open toed shoes. Volunteers under the age of 18 are welcome with a parent or guardian.

2026-08-25 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cDaKhMAK",date:"2026-08-25"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-08-26 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EsINTMA3",date:"2026-08-26"},{name:"Stove to Table - Kitchen volunteers needed (Referral)",description:`Advance's Stove to Table program delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package 360 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal. There are two shifts available each Tuesday and Wednesday. Volunteers are welcome to stay for one or more shifts as their schedule allows.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
Meal Prep - 9:00 AM to 12:00 PM

	
Packaging & Clean Up - 12:00 PM to 2:00 PM

We ask that you come dressed to work in a kitchen; please no open toed shoes. Volunteers under the age of 18 are welcome with a parent or guardian.

2026-08-26 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cCS4bMAG",date:"2026-08-26"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-08-27 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EsINUMA3",date:"2026-08-27"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-08-28 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EsINVMA3",date:"2026-08-28"},{name:"Garden Volunteers at Mesa Urban Farm",description:`The 3,000 square-foot Mesa Urban Farm provides about 500lbs of fresh produce monthly for St. Vincent de Paul's Mesa Dining Room. Spend your morning fertilizing soil, composting, planting, harvesting, and observing the produce that helps feed the local community. Please note, the dining room is adjacent to the farm. Clients who enjoy St. Vincent's daily meal services are likely to be present on site, many of whom are unsheltered.

Please wear Closed-toe shoes, and clothes that can get dirty. Bring SPF and a reusable water bottle. There are shade structures, but be prepared to be in the sun. An air-conditioned area is available if you need to cool off!

Please Note: Volunteers serving court-ordered hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 8 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-08-28 | 7:00 AM - 10:00 AM

Location: Mesa, AZ, 85210

Volunteers still needed: 6`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007Ye69EMAR",date:"2026-08-28"},{name:"Lunch Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-08-28 | 10:00 AM - 1:30 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008ErmR1MAJ",date:"2026-08-28"},{name:"Pizza Making with St. Vincent de Paul",description:`Help prepare 150 pizzas for the Friday night dinner service at St. Vincent de Paul. Volunteers will roll out dough, spread out the sauce, layer on toppings, and get the pizzas into the ovens to cook.

Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts). Hairnets, gloves, and aprons will be provided, but pizza making can get messy, so dress accordingly!

This is a fun and fast-paced volunteer opportunity that requires a team effort. If you sign up for this opportunity, please be sure to show up, or remove yourself in a timely manner if you can no longer attend so another volunteer can take your spot.

The minimum age for this volunteer opportunity is 12 with a parent or guardian. All volunteers under the age of 16 must be accompanied by a parent/guardian with a 1:1 child to adult ratio given the tasks involved. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

Please Note: Volunteers serving court-ordered or any kind of required volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

The project calendar is designed for individuals and families looking to volunteer in the community. If you are a corporate group interested in giving back, please visit our Corporate Volunteering page for ways to engage through HandsOn.

2026-08-28 | 12:45 PM - 3:30 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 15`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007U1jGMMAZ",date:"2026-08-28"},{name:"BINGO! at Osborn Pointe",description:`Osborn Pointe is a 48-unit supportive housing community designed to serve individuals 55 and over.

Join the residents of Osborn Pointe for a fun game of BINGO! Volunteers will help run the game, read the winning numbers, and hand out prizes. Bring your smile and a positive attitude to set residents up for a wonderful weekend!

Please arrive at least 5 minutes early. The game will begin promptly at 3pm.

The minimum age for this project is 12 with a parent or guardian. All volunteers under the age of 18 must be accompanied by an adult.

2026-08-28 | 3:00 PM - 4:00 PM

Location: Phoenix, AZ, 85012

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008QMzGLMA1",date:"2026-08-28"},{name:"Evening Meal Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-08-28 | 3:00 PM - 6:00 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008ErCRyMAN",date:"2026-08-28"},{name:"Mountain Area Swim Competition in Cottonwood (Referral)",description:`Join Special Olympics Arizona for a Mountain Area Swim Competition in Cottonwood.

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-08-29 | 7:00 AM - 1:00 PM

Location: Cottonwood, AZ, 86326

Volunteers still needed: 25`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000089milVMAQ",date:"2026-08-29"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards Roosevelt",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at the Roosevelt Mini Park. Simply check the water temperature & water flow and wipe down the unit!

Do you walk by the mini park every morning? Do you ride your bike down Roosevelt Row once a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleaning. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-08-30 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007ekD5bMAE",date:"2026-08-30"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards Desert West",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the two drinking stations at Desert West Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Desert West Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-08-30 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85035

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007eldWUMAY",date:"2026-08-30"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Lindo Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Lindo Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-08-30 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85041

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007ektDcMAI",date:"2026-08-30"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Grant Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Grant Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Grant Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-08-30 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007ek9PxMAI",date:"2026-08-30"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-08-31 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EsINWMA3",date:"2026-08-31"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards-Cave Creek",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Cave Creek-Larkspur Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-08-31 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85029

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007x8wRCMAY",date:"2026-08-31"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-01 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGKjyMAG",date:"2026-09-01"},{name:"Stove to Table - Kitchen volunteers needed (Referral)",description:`Advance's Stove to Table program delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package 360 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal. There are two shifts available each Tuesday and Wednesday. Volunteers are welcome to stay for one or more shifts as their schedule allows.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
Meal Prep - 9:00 AM to 12:00 PM

	
Packaging & Clean Up - 12:00 PM to 2:00 PM

We ask that you come dressed to work in a kitchen; please no open toed shoes. Volunteers under the age of 18 are welcome with a parent or guardian.

2026-09-01 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cG6qfMAC",date:"2026-09-01"},{name:"Grant Writer (Referral)",description:`Our organization is seeking experienced writers, researchers, and data analysts to assist with storytelling and securing funding that aligns with our mission and vision. We are offering key opportunities for both remote and on-site roles. Specifically, the Grant Writer will be responsible for researching potential funders, drafting proposals, and managing the fundraising calendar. If you are interested in supporting our organization’s advancement, please reach out to us for inquiry and signup via email at dure45@sbuagphx.org. Commitment for at least a year is required and we also welcome negotiation in the terms to be served.

2026-09-01 | 9:00 AM - 2:00 PM

Location: Phoenix, AZ, 85018

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007TTOFbMAP",date:"2026-09-01"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-02 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGKjzMAG",date:"2026-09-02"},{name:"Stove to Table - Kitchen volunteers needed (Referral)",description:`Advance's Stove to Table program delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package 360 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal. There are two shifts available each Tuesday and Wednesday. Volunteers are welcome to stay for one or more shifts as their schedule allows.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
Meal Prep - 9:00 AM to 12:00 PM

	
Packaging & Clean Up - 12:00 PM to 2:00 PM

We ask that you come dressed to work in a kitchen; please no open toed shoes. Volunteers under the age of 18 are welcome with a parent or guardian.

2026-09-02 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cFgMlMAK",date:"2026-09-02"},{name:"BINGO! with St. Vincent de Paul",description:`Join the residents of St. Vincent de Paul's Washington Street Shelter for a fun game of BINGO! Volunteers will help run the game, read the winning numbers, and hand out prizes.

Please arrive at least 5 minutes early. The game will begin promptly at 4pm.

The minimum age for this project is 18 (adults only).

2026-09-02 | 4:00 PM - 5:00 PM

Location: Phoenix, AZ, 85034

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007iOb3jMAC",date:"2026-09-02"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-03 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGKk0MAG",date:"2026-09-03"},{name:"Kid Connection at The Salvation Army",description:`Volunteers will spend quality time with children at the Salvation Army Emergency Family Shelter. Arts & crafts, reading, games, and sports are par for the course at this volunteer opportunity. Volunteers will get to meet new people and make a difference in a child's day!

The minimum age for this volunteer opportunity is 18.

If this is your first time volunteering at this project, please send a copy of your driver's license to Brittany.Scott-Membrila@usw.salvationarmy.org at least two days before the project date. The Salvation Army will conduct a National Sex Offender search to ensure the safety of the children at the shelter. We appreciate your cooperation! Court-ordered volunteers cannot attend this event.

Volunteers will be asked to sign the Salvation Army's volunteer forms upon their arrival.  They can be reviewed here.

2026-09-03 | 4:45 PM - 6:00 PM

Location: Phoenix, AZ, 85008

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi0000829XqkMAE",date:"2026-09-03"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-04 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGKk1MAG",date:"2026-09-04"},{name:"Lunch Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-04 | 10:00 AM - 1:30 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008WOCmTMAX",date:"2026-09-04"},{name:"Evening Meal Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-04 | 3:00 PM - 6:00 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008WPNFrMAP",date:"2026-09-04"},{name:"Garden Volunteers with St. Vincent de Paul (Main Campus)",description:`St. Vincent de Paul's three urban farms produce nutritionally dense food for those who do not have access to proper vitamins and nutrients. Annually, they grow 27,000 pounds of produce, which goes directly to SVdP's kitchens to be prepared for individuals and families experiencing homelessness and food insecurity, or delivered directly to families’ doors.

Spend your morning fertilizing soil, composting, planting, and harvesting the produce that helps feed the local community!

Please wear Closed-toe shoes, and clothes that can get dirty. Bring SPF and a reusable water bottle. There are shade structures, but be prepared to be in the sun.

Please Note: Volunteers serving court-ordered hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 8 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-09-05 | 7:00 AM - 10:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 26`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000080x2vZMAQ",date:"2026-09-05"},{name:"From the Ground Up: Volunteer Day at the Ranch (Referral)",description:`Join us for a meaningful day of giving back at Wildcat Ranch Phoenix! This in-person volunteer event is a wonderful opportunity to roll up your sleeves, enjoy the outdoors, and make a direct impact on the ranch and the horses who call it home.

Volunteers will work together on a variety of hands-on projects, including fence repairs, stall cleaning and refreshing, barn organization, and general facility beautification. These improvements help create a safer, more welcoming environment for our horses and the individuals who participate in our therapy programs.

No ranch experience is necessary—whether you’re a seasoned ranch hand or simply eager to help, your time and effort truly make a difference. Connect with nature, meet fellow community members, and be part of something meaningful.

2026-09-05 | 7:00 AM - 9:30 AM

Location: PHOENIX, AZ, AZ, 85042

Volunteers still needed: 50`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007QT15EMAT",date:"2026-09-05"},{name:"Palo Verde Area Swim Competition (Referral)",description:`Join Special Olympics Arizona for a Palo Verde area swim competition!

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on. 

Please click 'Express Interest' below to move forward. 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-09-05 | 7:30 AM - 1:30 PM

Location: Avondale, AZ, 85323

Volunteers still needed: 35`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008DYZ6UMAX",date:"2026-09-05"},{name:"Maggie&#39;s Place Spruce Up",description:`Maggie’s Place provides safe housing and a nurturing community for homeless pregnant women, empowering them to thrive throughout their lifetime.

Work alongside the moms residing at The Michael House in Glendale to help clean and maintain their home.

The minimum age for this volunteer opportunity is 12 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-09-05 | 10:00 AM - 12:00 PM

Location: Glendale, AZ, 85302

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007U1OsjMAF",date:"2026-09-05"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards Desert West",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the two drinking stations at Desert West Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Desert West Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-09-06 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85035

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGHXZMA4",date:"2026-09-06"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Lindo Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Lindo Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-09-06 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85041

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cG8u6MAC",date:"2026-09-06"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Grant Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Grant Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Grant Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-09-06 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cERV6MAO",date:"2026-09-06"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-07 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGKk2MAG",date:"2026-09-07"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards Roosevelt",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at the Roosevelt Mini Park. Simply check the water temperature & water flow and wipe down the unit!

Do you walk by the mini park every morning? Do you ride your bike down Roosevelt Row once a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleaning. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-09-07 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGG9KMAW",date:"2026-09-07"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards-Cave Creek",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Cave Creek-Larkspur Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-09-07 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85029

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007x8wRDMAY",date:"2026-09-07"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-08 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGKk3MAG",date:"2026-09-08"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-09 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGKk4MAG",date:"2026-09-09"},{name:"Stove to Table - Kitchen volunteers needed (Referral)",description:`Advance's Stove to Table program delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package 360 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal. There are two shifts available each Tuesday and Wednesday. Volunteers are welcome to stay for one or more shifts as their schedule allows.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
Meal Prep - 9:00 AM to 12:00 PM

	
Packaging & Clean Up - 12:00 PM to 2:00 PM

We ask that you come dressed to work in a kitchen; please no open toed shoes. Volunteers under the age of 18 are welcome with a parent or guardian.

2026-09-09 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cEibvMAC",date:"2026-09-09"},{name:"Picking and Packing Support with Arizona Diaper Bank",description:`Join us at the Arizona Diaper Bank to help with order picking and packing! Arizona Diaper promotes dignity through community partnerships by making diapers, period products, and incontinence supplies accessible.

Volunteers will help prepare diaper orders for distribution to families and partner agencies. You will pack up diaper order based on specific requests as well as organize and label packed orders for easy distribution. Your efforts will directly contribute to ensuring that essential supplies reach those in need efficiently and on time!

Please wear closed-toe shoes. This opportunity takes place in a warehouse which can get warm in the summer months!

The minimum age for this project is 10 with a parent/guardian. All Volunteers under the age of 18 must be accompanied by a parent/guardian.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-09-09 | 9:00 AM - 12:00 PM

Location: Phoenix, AZ, 85043

Volunteers still needed: 7`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000081AtPzMAK",date:"2026-09-09"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-10 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGKk5MAG",date:"2026-09-10"},{name:"Stove to Table - Kitchen volunteers needed (Referral)",description:`Advance's Stove to Table program delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package 360 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal. There are two shifts available each Tuesday and Wednesday. Volunteers are welcome to stay for one or more shifts as their schedule allows.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
Meal Prep - 9:00 AM to 12:00 PM

	
Packaging & Clean Up - 12:00 PM to 2:00 PM

We ask that you come dressed to work in a kitchen; please no open toed shoes. Volunteers under the age of 18 are welcome with a parent or guardian.

2026-09-10 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cFxsFMAS",date:"2026-09-10"},{name:"Donation Packing with The Welcome to America Project",description:`Join us to pack donations for the refugee families that will be welcomed the following Saturday. Donations range from clothing, household items, books, and kitchen items. We need your help to ensure incoming families have everything they need to begin their lives in Arizona!

The minimum age for this volunteer opportunity is 10 with a parent or guardian. All volunteers under the age of 18 must be accompanied by a parent/guardian. 

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

If you have questions, Contact Pam at 602-361-7058

2026-09-10 | 9:00 AM - 11:00 AM

Location: Tempe, AZ, 85281

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000089mzHmMAI",date:"2026-09-10"},{name:"Game Night at MANA House",description:`Bring your A-game for this fun social event at MANA House, a peer-support organization of homeless and formerly homeless veterans! Volunteers will facilitate Bingo for the Veterans residing at the facility. Join us to help bring joy to those who have valiantly served our country.

The minimum age for this volunteer opportunity is 18.

2026-09-10 | 6:00 PM - 7:30 PM

Location: Phoenix, AZ, 85009

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007xAfquMAC",date:"2026-09-10"},{name:"Coronado Area Golf Tournament in Tucson (Referral)",description:`Join Special Olympics Arizona for a Coronado Area Golf Tournament Fundraiser. 

Volunteers are needed for event set up and registration. 

Please click 'Express Interest' below to move forward. 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-09-11 | 6:00 AM - 8:00 AM

Location: Tucson, AZ, 85757

Volunteers still needed: 15`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008DXNLlMAP",date:"2026-09-11"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-11 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGKk6MAG",date:"2026-09-11"},{name:"Community Market (Referral)",description:`Come join YWCA Metropolitan Phoenix at our monthly Community Market food distribution! In partnership with St. Mary's Food Bank, we are able to distribute fresh produce, pantry essentials and household goods to community members. 

As we are in our hotter months, we want to limit folks' time outdoors. We will be conducting this Community Market as a walk-up market. Participants will check in at the table and then volunteers will help bring food boxes to the cars.

Some things to note:

	
You will be mostly indoors for assembly of the food packages. However, we will be walking between inside and outside to deliver the food to participants. Make sure you are protected from the sun.

	
Sneakers or comfortable closed-toe shoes required. 

	
If you have it, wear persimmon orange or YWCA gear.

	
YWCA shirts will be available for a donation of $20, but are not required

	
Water and snacks will be provided.

	
Breaks are encouraged all day.

	
Volunteers are allowed to take food from the market only after community members have been served. Please do not take any of the food until a YWCA team member has let you know it is okay.

2026-09-11 | 9:00 AM - 1:00 PM

Location: Glendale, AZ, 85302

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008E9dh7MAB",date:"2026-09-11"},{name:"9/11 Service Weekend: Lunch Service at St. Vincent de Paul- Phoenix",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-11 | 10:00 AM - 1:30 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008Y8WESMA3",date:"2026-09-11"},{name:"9/11 Weekend of Service: Evening Meal Service at St. Vincent de Paul- Phoenix",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-11 | 3:00 PM - 6:00 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008Y7FlsMAF",date:"2026-09-11"},{name:"9/11 Service Weekend: Chef&#39;s Night Off at HomeBase Surprise",description:`Roll up your sleeves and help chop, slice, and dice with love as you prepare and serve dinner for homeless youth and young adults (ages 18-26) at HomeBase Youth Services in Surprise. You can also help pack lunches that will be distributed throughout the week to homeless youth and young adults. Allow the busy chef to have a nice evening off.

Volunteers must wear closed-toe shoes, and long hair should be pulled back.

The minimum age for this project is 11 with a parent/guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-09-11 | 3:00 PM - 5:00 PM

Location: Surprise, AZ, 85378

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007u69dfMAA",date:"2026-09-11"},{name:"Four Peaks Swim Competition in Mesa- Multiple Shifts (Referral)",description:`Join Special Olympics Arizona for a Four Peaks Area Swim Competition in Mesa! 

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-09-11 | 4:00 PM - 9:00 PM

Location: Mesa, AZ, 85208

Volunteers still needed: 80`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008DYBcHMAX",date:"2026-09-11"},{name:"River Area Swim Competition in Bullhead City (referral)",description:`Join Special Olympics Arizona for a River Area Swim Competition in Bullhead City!

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

Please click 'Express Interest' below to move forward. 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-09-12 | 8:00 AM - 12:00 PM

Location: Bullhead City, AZ, 86442

Volunteers still needed: 15`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008DXcKlMAL",date:"2026-09-12"},{name:"9/11 Service Weekend: Community Garden Workers with Keep Phoenix Beautiful",description:`Keep Phoenix Beautiful envisions a vibrant Phoenix where each neighborhood is a healthy, beautiful place to live. Every day, Keep Phoenix Beautiful provides tools to empower our diverse communities to improve overall quality of life.

Spend your morning at KPB's Pierson Street Garden and help maintain and enhance this amazing resource for the local community! Volunteers will help with a variety of tasks which may include planting flowers & produce, building compost bins, revamping the chicken coop, painting tables and garden beds, spreading mulch, clearing trash, and removing weeds. Lighter duties may include organizing the barn, wiping down recycling bins, folding t-shirts, organizing gloves, and prepping cleanup kits.

Please wear sturdy closed-toe shoes, and comfy clothes that can get dirty. Bring SPF and a hat. Water and snacks will be provided on site, but bringing water is always recommended!

Please park behind the garden in the Metro Light Rail – Park and Ride parking lot and enter through the gate at the back entrance of the garden!

The minimum age for this volunteer opportunity is 7 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-09-12 | 8:00 AM - 10:00 AM

Location: Phoenix, AZ, 85015

Volunteers still needed: 7`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007U23E7MAJ",date:"2026-09-12"},{name:"Four Peaks Swim Competition in Mesa- Multiple Shifts (Referral)",description:`Join Special Olympics Arizona for a Four Peaks Area Swim Competition in Mesa! 

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-09-12 | 8:00 AM - 1:00 PM

Location: Mesa, AZ, 85208

Volunteers still needed: 55`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008DYBcKMAX",date:"2026-09-12"},{name:"9/11 Service Weekend: Furry Friends with Forever Loved Pet Sanctuary",description:`Forever Loved's mission is to help overlooked senior dogs in Arizona find their forever homes. Help care for these furry friends while they wait for adoption!

Volunteer duties may include feeding, cleaning, grooming, walking, and socializing with the dogs.

The minimum age for this opportunity is 16. All volunteers aged 16 & 17 attending without a parent/guardian MUST bring a signed Youth Waiver to each project.

Volunteers must show up at 8:30am. No one will be present to let you through the gates if you are more than 5 minutes late.

Please wear closed-toe shoes and long pants that can get dirty! We recommend bringing a water bottle and wearing sunscreen. The sanctuary is located on a private residence. Please park on the street in front of the house without blocking any driveways. Your volunteer leader will meet you out front!

2026-09-12 | 8:30 AM - 10:00 AM

Location: Scottsdale, AZ, 85254

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007U2JAdMAN",date:"2026-09-12"},{name:"9/11 Service Weekend: Classroom Prep Pros at SARRC",description:`SARRC's mission is to advance research and provide a lifetime of support for individuals with autism and their families.

Join us at SARRC's main campus to help the teachers & therapists who work directly with autistic students prepare their lessons and activities for the week! Duties will vary each month, but may include cutting, laminating, and assembling supplies for craft projects.

The minimum age for this project is 6 with a parent/guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-09-12 | 9:00 AM - 12:00 PM

Location: Phoenix, AZ, 85006

Volunteers still needed: 18`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008GJAtGMAX",date:"2026-09-12"},{name:"9/11 Service Weekend: Community Crafters with HandsOn Greater Phoenix",description:`Bring the family to this fun and engaging volunteer event at the HandsOn Greater Phoenix office in Mesa! Each month, volunteers will be doing crafty projects to benefit our nonprofit partners. Whether it's creating fleece capes for foster kids, making no-sew blankets for Veterans, or decorating canvas bags/bookmarks to supplement our kitted projects for youth, we'll have an activity for you to get creative for a cause!

The minimum age for participation is 6. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child/children, please email the opportunity coordinator listed below and ask to reserve a guest slot(s). Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-09-12 | 10:00 AM - 11:30 AM

Location: Mesa, AZ, 85204

Volunteers still needed: 14`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007xGltbMAC",date:"2026-09-12"},{name:"9/11 Service Weekend: Afternoon Sort and Pack at St. Mary&#39;s Food Bank- Phoenix",description:`Bring your helping hands to sort, pack, and distribute food that will go to other nonprofits and families in crisis at St. Mary's Food Bank Alliance. You will have a blast meeting new people while working the assembly line!

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

2026-09-12 | 12:00 PM - 2:00 PM

Location: Phoenix, AZ, 85009

Volunteers still needed: 15`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007U1facMAB",date:"2026-09-12"},{name:"River Area Swim Competition in Yuma (referral)",description:`Join Special Olympics Arizona for a River Area Swim Compeition in Yuma!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-09-12 | 5:00 PM - 8:00 PM

Location: Yuma, AZ, 85364

Volunteers still needed: 25`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008DYXR6MAP",date:"2026-09-12"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards Desert West",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the two drinking stations at Desert West Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Desert West Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-09-13 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85035

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGHXaMAO",date:"2026-09-13"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Lindo Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Lindo Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-09-13 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85041

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cG8u7MAC",date:"2026-09-13"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Grant Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Grant Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Grant Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-09-13 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cERV7MAO",date:"2026-09-13"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-14 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGKk7MAG",date:"2026-09-14"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards Roosevelt",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at the Roosevelt Mini Park. Simply check the water temperature & water flow and wipe down the unit!

Do you walk by the mini park every morning? Do you ride your bike down Roosevelt Row once a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleaning. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-09-14 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGG9LMAW",date:"2026-09-14"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards-Cave Creek",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Cave Creek-Larkspur Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-09-14 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85029

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007x8wREMAY",date:"2026-09-14"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-15 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGKk8MAG",date:"2026-09-15"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-16 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGKk9MAG",date:"2026-09-16"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-17 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGKkAMAW",date:"2026-09-17"},{name:"Stove to Table - Kitchen volunteers needed (Referral)",description:`Advance's Stove to Table program delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package 360 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal. There are two shifts available each Tuesday and Wednesday. Volunteers are welcome to stay for one or more shifts as their schedule allows.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
Meal Prep - 9:00 AM to 12:00 PM

	
Packaging & Clean Up - 12:00 PM to 2:00 PM

We ask that you come dressed to work in a kitchen; please no open toed shoes. Volunteers under the age of 18 are welcome with a parent or guardian.

2026-09-17 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGDDpMAO",date:"2026-09-17"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-18 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGKkBMAW",date:"2026-09-18"},{name:"Lunch Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-18 | 10:00 AM - 1:30 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008WN3InMAL",date:"2026-09-18"},{name:"Site Beautification at YWCA",description:`Part of YWCA's mission is to mitigate aging’s most harmful threats through home-delivered meals and senior centers. The organization provides safe spaces where older adults can congregate, share a meal, crack a smile, and create community.

Do you have a knack for organizing, labeling, decluttering, kit asssembly, or decorating? Then this volunteer opportunity is for you! Help YWCA maintain a warm and welcoming environment for senior guests at their main location in Glendale. Tasks will vary each month. A hot lunch will be provided if desired!

Volunteers must be 18 years or older to participate in this volunteer opportunity.

2026-09-18 | 10:30 AM - 12:30 PM

Location: Glendale, AZ, 85302

Volunteers still needed: 6`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007iQRHFMA4",date:"2026-09-18"},{name:"Evening Meal Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-18 | 3:00 PM - 6:00 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008WOb6QMAT",date:"2026-09-18"},{name:"From the Ground Up: Volunteer Day at the Ranch (Referral)",description:`Join us for a meaningful day of giving back at Wildcat Ranch Phoenix! This in-person volunteer event is a wonderful opportunity to roll up your sleeves, enjoy the outdoors, and make a direct impact on the ranch and the horses who call it home.

Volunteers will work together on a variety of hands-on projects, including fence repairs, stall cleaning and refreshing, barn organization, and general facility beautification. These improvements help create a safer, more welcoming environment for our horses and the individuals who participate in our therapy programs.

No ranch experience is necessary—whether you’re a seasoned ranch hand or simply eager to help, your time and effort truly make a difference. Connect with nature, meet fellow community members, and be part of something meaningful.

2026-09-19 | 7:00 AM - 9:30 AM

Location: PHOENIX, AZ, AZ, 85042

Volunteers still needed: 50`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007QT15FMAT",date:"2026-09-19"},{name:"Coronado Area Swim Competition in Tucson (Referral)",description:`Join Special Olympics Arizona for a Coronado Area Swim Competition in Tucson!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-09-19 | 8:00 AM - 12:00 PM

Location: Tucson, AZ, 85716

Volunteers still needed: 25`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008DX3RtMAL",date:"2026-09-19"},{name:"Coronado Area Swim Competition in Tucson (Referral)",description:`Join Special Olympics Arizona for a Coronado Area Swim Competition in Tucson!

 

Volunteers are needed for event support to keep the competition running smoothly, timing, and as always, cheering the athletes on!

 

Please click 'Express Interest' below to move forward. 

 

We have a new volunteer registration system so please email volunteer@specialolympicsarizona.org for questions or assistance getting registered.

2026-09-19 | 11:30 AM - 3:30 PM

Location: Tucson, AZ, 85716

Volunteers still needed: 25`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008DX3RuMAL",date:"2026-09-19"},{name:"September 2026 Monthly Park Cleanup and Stinknet Removal–Hayden Butte (Referral)",description:`Join Keep Tempe Beautiful on Saturday, September 19th to clean up Hayden Butte (A Mountain) and remove invasive stinknet.

We will be in the parking lot next to Mill and 3rd Street (281 S Mill Ave, Tempe, AZ 85281).

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

2026-09-19 | 8:00 AM - 11:00 AM

Location: Tempe, AZ, 85281

Volunteers still needed: 20`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00006oUXI4MAO",date:"2026-09-19"},{name:"Sort and Pack at St. Mary&#39;s Food Bank - Phoenix",description:`Bring your helping hands to sort, pack, and distribute food that will go to other nonprofits and families in crisis at St. Mary's Food Bank Alliance. You will have a blast meeting new people while working the conveyer belt!

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

2026-09-19 | 8:00 AM - 10:00 AM

Location: Phoenix, AZ, 85009

Volunteers still needed: 8`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007Ffst4MAB",date:"2026-09-19"},{name:"Rise and Dine at HomeBase",description:`Start your morning off right by providing a warm, wholesome breakfast for homeless youth and young adults (ages 18-24) at HomeBase Youth Services. Serve up pancakes, bacon, eggs and toast with a smile, while giving the residents energy to start their day off right!

Volunteers must wear closed-toe shoes, and long hair must be pulled back.

The minimum age for this volunteer opportunity is 11 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project. 

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

**Please check your Email Junk/Spam folders the week of the event for instructions from the Volunteer Leader.**

2026-09-19 | 8:00 AM - 10:00 AM

Location: Phoenix, AZ, 85014

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007WbyFPMAZ",date:"2026-09-19"},{name:"Medical Sort and Pack at Project C.U.R.E.",description:`Bring hope and health to the world with Project C.U.R.E., a national faith-based organization! Join us as we sort and pack desperately needed medical supplies that are shipped to hospitals, clinics, and orphanages in over 100 poverty stricken countries worldwide! Volunteers will meet new people and learn a lot about medical supplies and the urgent needs of them in under-resourced countries around the world.

The minimum age for this volunteer opportunity is 14 with a parent or guardian. All volunteers under the age of 18 must be accompanied by a parent/guardian.

Volunteers must create an account with Project C.U.R.E. and sign in through their system at the warehouse. To make this process faster, please register here to set up your account before the project date.

Note: The building is a warehouse, so please wear close-toed shoes, appropriate clothing and bring water. You may be packing in either the warehouse or the sorting center. Please be prepared to do some lifting (up to 30 pounds). 

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-09-19 | 9:00 AM - 12:00 PM

Location: Phoenix, AZ, 85009

Volunteers still needed: 6`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007U02aBMAR",date:"2026-09-19"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards Desert West",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the two drinking stations at Desert West Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Desert West Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-09-20 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85035

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGHXbMAO",date:"2026-09-20"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Lindo Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Lindo Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-09-20 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85041

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cG8u8MAC",date:"2026-09-20"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Grant Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Grant Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Grant Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-09-20 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cERV8MAO",date:"2026-09-20"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-21 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGKkCMAW",date:"2026-09-21"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards Roosevelt",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at the Roosevelt Mini Park. Simply check the water temperature & water flow and wipe down the unit!

Do you walk by the mini park every morning? Do you ride your bike down Roosevelt Row once a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleaning. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-09-21 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGG9MMAW",date:"2026-09-21"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards-Cave Creek",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Cave Creek-Larkspur Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-09-21 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85029

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00007x8wRFMAY",date:"2026-09-21"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-22 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGKkDMAW",date:"2026-09-22"},{name:"Stove to Table - Kitchen volunteers needed (Referral)",description:`Advance's Stove to Table program delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package 360 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal. There are two shifts available each Tuesday and Wednesday. Volunteers are welcome to stay for one or more shifts as their schedule allows.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
Meal Prep - 9:00 AM to 12:00 PM

	
Packaging & Clean Up - 12:00 PM to 2:00 PM

We ask that you come dressed to work in a kitchen; please no open toed shoes. Volunteers under the age of 18 are welcome with a parent or guardian.

2026-09-22 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cCYdYMAW",date:"2026-09-22"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-23 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGKkEMAW",date:"2026-09-23"},{name:"Stove to Table - Kitchen volunteers needed (Referral)",description:`Advance's Stove to Table program delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package 360 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal. There are two shifts available each Tuesday and Wednesday. Volunteers are welcome to stay for one or more shifts as their schedule allows.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
Meal Prep - 9:00 AM to 12:00 PM

	
Packaging & Clean Up - 12:00 PM to 2:00 PM

We ask that you come dressed to work in a kitchen; please no open toed shoes. Volunteers under the age of 18 are welcome with a parent or guardian.

2026-09-23 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cFnw7MAC",date:"2026-09-23"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-09-24 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cGKkFMAW",date:"2026-09-24"},{name:"Stove to Table - Kitchen volunteers needed (Referral)",description:`Advance's Stove to Table program delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package 360 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal. There are two shifts available each Tuesday and Wednesday. Volunteers are welcome to stay for one or more shifts as their schedule allows.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
Meal Prep - 9:00 AM to 12:00 PM

	
Packaging & Clean Up - 12:00 PM to 2:00 PM

We ask that you come dressed to work in a kitchen; please no open toed shoes. Volunteers under the age of 18 are welcome with a parent or guardian.

2026-09-24 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008cFgnhMAC",date:"2026-09-24"}]},Sg={title:"City of Flagstaff",note:null,opportunities:[{name:"Invasive Weed Identification, Removal & Reseeding (1/9)",description:`Come help us manage invasive weeds at Picture Canyon, to keep it the beautiful place that it is!  Learn about invasive weeds, learn to identify them and the best ways to remove them, and help us spread native grass/flower seed to crowd out the invasives. This event is (almost) every other Wednesday morning from June-September, 7-10am. We meet at the Picture Canyon trail head, 3920 N El Paso Flagstaff Rd. Come join the fun!

2026-05-13 | 7:00 AM - 10:00 AM

Location: Picture Canyon Natural & Cultural Preserve

Category: Gardening

• ALL Parks, Recreation, Open Space & Events Volunt - Invasive Weed Identification, Removal & Reseeding (8 spots available)
• ALL Parks, Recreation, Open Space & Events Volunt - Invasive Weed Identification, Removal & Reseeding (12 spots available)`,date:"2026-05-13",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Invasive Weed Identification, Removal & Reseeding (2/9)",description:`Come help us manage invasive weeds at Picture Canyon, to keep it the beautiful place that it is!  Learn about invasive weeds, learn to identify them and the best ways to remove them, and help us spread native grass/flower seed to crowd out the invasives. This event is (almost) every other Wednesday morning from June-September, 7-10am. We meet at the Picture Canyon trail head, 3920 N El Paso Flagstaff Rd. Come join the fun!

2026-05-27 | 7:00 AM - 10:00 AM

Location: Picture Canyon Natural & Cultural Preserve

Category: Gardening

• ALL Parks, Recreation, Open Space & Events Volunt - Invasive Weed Identification, Removal & Reseeding (8 spots available)
• ALL Parks, Recreation, Open Space & Events Volunt - Invasive Weed Identification, Removal & Reseeding (12 spots available)`,date:"2026-05-27",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Invasive Weed Identification, Removal & Reseeding (3/9)",description:`Come help us manage invasive weeds at Picture Canyon, to keep it the beautiful place that it is!  Learn about invasive weeds, learn to identify them and the best ways to remove them, and help us spread native grass/flower seed to crowd out the invasives. This event is (almost) every other Wednesday morning from June-September, 7-10am. We meet at the Picture Canyon trail head, 3920 N El Paso Flagstaff Rd. Come join the fun!

2026-06-10 | 7:00 AM - 10:00 AM

Location: Picture Canyon Natural & Cultural Preserve

Category: Gardening

• ALL Parks, Recreation, Open Space & Events Volunt - Invasive Weed Identification, Removal & Reseeding (8 spots available)
• ALL Parks, Recreation, Open Space & Events Volunt - Invasive Weed Identification, Removal & Reseeding (12 spots available)`,date:"2026-06-10",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Invasive Weed Identification, Removal & Reseeding (4/9)",description:`Come help us manage invasive weeds at Picture Canyon, to keep it the beautiful place that it is!  Learn about invasive weeds, learn to identify them and the best ways to remove them, and help us spread native grass/flower seed to crowd out the invasives. This event is (almost) every other Wednesday morning from June-September, 7-10am. We meet at the Picture Canyon trail head, 3920 N El Paso Flagstaff Rd. Come join the fun!

2026-06-24 | 7:00 AM - 10:00 AM

Location: Picture Canyon Natural & Cultural Preserve

Category: Gardening

• ALL Parks, Recreation, Open Space & Events Volunt - Invasive Weed Identification, Removal & Reseeding (8 spots available)
• ALL Parks, Recreation, Open Space & Events Volunt - Invasive Weed Identification, Removal & Reseeding (12 spots available)`,date:"2026-06-24",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Invasive Weed Identification, Removal & Reseeding (5/9)",description:`Come help us manage invasive weeds at Picture Canyon, to keep it the beautiful place that it is!  Learn about invasive weeds, learn to identify them and the best ways to remove them, and help us spread native grass/flower seed to crowd out the invasives. This event is (almost) every other Wednesday morning from June-September, 7-10am. We meet at the Picture Canyon trail head, 3920 N El Paso Flagstaff Rd. Come join the fun!

2026-07-08 | 7:00 AM - 10:00 AM

Location: Picture Canyon Natural & Cultural Preserve

Category: Gardening

• ALL Parks, Recreation, Open Space & Events Volunt - Invasive Weed Identification, Removal & Reseeding (8 spots available)
• ALL Parks, Recreation, Open Space & Events Volunt - Invasive Weed Identification, Removal & Reseeding (12 spots available)`,date:"2026-07-08",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Invasive Weed Identification, Removal & Reseeding (6/9)",description:`Come help us manage invasive weeds at Picture Canyon, to keep it the beautiful place that it is!  Learn about invasive weeds, learn to identify them and the best ways to remove them, and help us spread native grass/flower seed to crowd out the invasives. This event is (almost) every other Wednesday morning from June-September, 7-10am. We meet at the Picture Canyon trail head, 3920 N El Paso Flagstaff Rd. Come join the fun!

2026-07-22 | 7:00 AM - 10:00 AM

Location: Picture Canyon Natural & Cultural Preserve

Category: Gardening

• ALL Parks, Recreation, Open Space & Events Volunt - Invasive Weed Identification, Removal & Reseeding (8 spots available)
• ALL Parks, Recreation, Open Space & Events Volunt - Invasive Weed Identification, Removal & Reseeding (12 spots available)`,date:"2026-07-22",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Invasive Weed Identification, Removal & Reseeding (7/9)",description:`Come help us manage invasive weeds at Picture Canyon, to keep it the beautiful place that it is!  Learn about invasive weeds, learn to identify them and the best ways to remove them, and help us spread native grass/flower seed to crowd out the invasives. This event is (almost) every other Wednesday morning from June-September, 7-10am. We meet at the Picture Canyon trail head, 3920 N El Paso Flagstaff Rd. Come join the fun!

2026-08-05 | 7:00 AM - 10:00 AM

Location: Picture Canyon Natural & Cultural Preserve

Category: Gardening

• ALL Parks, Recreation, Open Space & Events Volunt - Invasive Weed Identification, Removal & Reseeding (8 spots available)
• ALL Parks, Recreation, Open Space & Events Volunt - Invasive Weed Identification, Removal & Reseeding (12 spots available)`,date:"2026-08-05",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Invasive Weed Identification, Removal & Reseeding (8/9)",description:`Come help us manage invasive weeds at Picture Canyon, to keep it the beautiful place that it is!  Learn about invasive weeds, learn to identify them and the best ways to remove them, and help us spread native grass/flower seed to crowd out the invasives. This event is (almost) every other Wednesday morning from June-September, 7-10am. We meet at the Picture Canyon trail head, 3920 N El Paso Flagstaff Rd. Come join the fun!

2026-08-19 | 7:00 AM - 10:00 AM

Location: Picture Canyon Natural & Cultural Preserve

Category: Gardening

• ALL Parks, Recreation, Open Space & Events Volunt - Invasive Weed Identification, Removal & Reseeding (8 spots available)
• ALL Parks, Recreation, Open Space & Events Volunt - Invasive Weed Identification, Removal & Reseeding (12 spots available)`,date:"2026-08-19",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Invasive Weed Identification, Removal & Reseeding (9/9)",description:`Come help us manage invasive weeds at Picture Canyon, to keep it the beautiful place that it is!  Learn about invasive weeds, learn to identify them and the best ways to remove them, and help us spread native grass/flower seed to crowd out the invasives. This event is (almost) every other Wednesday morning from June-September, 7-10am. We meet at the Picture Canyon trail head, 3920 N El Paso Flagstaff Rd. Come join the fun!

2026-09-02 | 7:00 AM - 10:00 AM

Location: Picture Canyon Natural & Cultural Preserve

Category: Gardening

• ALL Parks, Recreation, Open Space & Events Volunt - Invasive Weed Identification, Removal & Reseeding (8 spots available)
• ALL Parks, Recreation, Open Space & Events Volunt - Invasive Weed Identification, Removal & Reseeding (12 spots available)`,date:"2026-09-02",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Full Moon Hike--Mars Hill Trail (meet at Thorpe Park dog park)",description:`PROSE - Open Space hosts a full moon walk (and sometimes bike ride) on one of our beautiful Open Space properties--a different spot each month. We start about a half-hour before the moon rises, walk on either a loop trail or out-and-back, and watch the full moon rise. Come check out your open spaces, and meet new people! Check each month for specific starting time, meeting place, and what trail we'll walk/ride for that full moon. Wear sturdy shoes, dress for the weather, and bring a red-light flashlight and hiking poles, but we'll have extras! This month, we'll walk the Mars Hill Trail, starting at the Thorpe Park "Bark Park." This is an out-and-back hike; it is about 3 miles, but steep uphill on the way up; not for the faint of heart!

2026-08-27 | 6:15 PM - 8:15 PM

Location: Observatory Mesa - Mars Hill Trail

Category: Full  Moon Hike Winter`,date:"2026-08-27",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Bonito (1/6)",description:`Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!

2026-06-02 | 4:00 PM - 6:00 PM

Location: Bonito Community Garden

Category: Gardening

• ALL Flagstaff Volunteers - Garden Volunteer (0 spots available)
• ALL Flagstaff Volunteers - Garden Volunteer (0 spots available)
• ALL Flagstaff Volunteers - Garden Volunteer (0 spots available)`,date:"2026-06-02",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Bonito (2/6)",description:`Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!

2026-07-07 | 4:00 PM - 6:00 PM

Location: Bonito Community Garden

Category: Gardening

• ALL Flagstaff Volunteers - Garden Volunteer (0 spots available)
• ALL Flagstaff Volunteers - Garden Volunteer (0 spots available)
• ALL Flagstaff Volunteers - Garden Volunteer (0 spots available)`,date:"2026-07-07",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Bonito (3/6)",description:`Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!

2026-08-04 | 4:00 PM - 6:00 PM

Location: Bonito Community Garden

Category: Gardening

• ALL Flagstaff Volunteers - Garden Volunteer (0 spots available)
• ALL Flagstaff Volunteers - Garden Volunteer (0 spots available)
• ALL Flagstaff Volunteers - Garden Volunteer (0 spots available)`,date:"2026-08-04",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Bonito (4/6)",description:`Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!

2026-09-01 | 4:00 PM - 6:00 PM

Location: Bonito Community Garden

Category: Gardening

• ALL Flagstaff Volunteers - Garden Volunteer (0 spots available)
• ALL Flagstaff Volunteers - Garden Volunteer (0 spots available)
• ALL Flagstaff Volunteers - Garden Volunteer (0 spots available)`,date:"2026-09-01",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Bonito (5/6)",description:`Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!

2026-10-06 | 4:00 PM - 6:00 PM

Location: Bonito Community Garden

Category: Gardening

• ALL Flagstaff Volunteers - Garden Volunteer (0 spots available)
• ALL Flagstaff Volunteers - Garden Volunteer (0 spots available)
• ALL Flagstaff Volunteers - Garden Volunteer (0 spots available)`,date:"2026-10-06",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Bonito (6/6)",description:`Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!

2026-11-03 | 4:00 PM - 6:00 PM

Location: Bonito Community Garden

Category: Gardening

• ALL Flagstaff Volunteers - Garden Volunteer (0 spots available)
• ALL Flagstaff Volunteers - Garden Volunteer (0 spots available)
• ALL Flagstaff Volunteers - Garden Volunteer (0 spots available)`,date:"2026-11-03",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Fix-it Clinic (1/4)",description:`At Fix-it Clinics, we support sustainable consumption and divert waste from landfills by repairing items that would otherwise end up in the trash. Our incredible team of volunteers can help you fix almost anything, including electronics, jewelry, clothing, bicycles, and more! \r
\r
Our Fix-it Clinic Lead Volunteers will:\r
• Use hand tools and small power tools to repair everyday household items such as electronics, bicycles, kitchen appliances, jewelry, clothing, furniture, lamps, and more.\r
• Wear appropriate personal protective equipment (PPE).\r
• Ensure workstations are maintained in a clean and organized manner to reduce exposure to chemicals, open electric circuits, and sharp objects or projections.\r
\r
Our Fix-it Clinic Assist Volunteers will:\r
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

• Fix-It Clinic Assist - See "Activity Description" (17 spots available)
• Fix-It Clinic Lead - See "Activity Description" (16 spots available)`,date:"2026-08-22",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Fix-it Clinic (2/4)",description:`At Fix-it Clinics, we support sustainable consumption and divert waste from landfills by repairing items that would otherwise end up in the trash. Our incredible team of volunteers can help you fix almost anything, including electronics, jewelry, clothing, bicycles, and more! \r
\r
Our Fix-it Clinic Lead Volunteers will:\r
• Use hand tools and small power tools to repair everyday household items such as electronics, bicycles, kitchen appliances, jewelry, clothing, furniture, lamps, and more.\r
• Wear appropriate personal protective equipment (PPE).\r
• Ensure workstations are maintained in a clean and organized manner to reduce exposure to chemicals, open electric circuits, and sharp objects or projections.\r
\r
Our Fix-it Clinic Assist Volunteers will:\r
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

• Fix-It Clinic Assist - See "Activity Description" (17 spots available)
• Fix-It Clinic Lead - See "Activity Description" (16 spots available)`,date:"2026-11-07",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Fix-it Clinic (3/4)",description:`At Fix-it Clinics, we support sustainable consumption and divert waste from landfills by repairing items that would otherwise end up in the trash. Our incredible team of volunteers can help you fix almost anything, including electronics, jewelry, clothing, bicycles, and more! \r
\r
Our Fix-it Clinic Lead Volunteers will:\r
• Use hand tools and small power tools to repair everyday household items such as electronics, bicycles, kitchen appliances, jewelry, clothing, furniture, lamps, and more.\r
• Wear appropriate personal protective equipment (PPE).\r
• Ensure workstations are maintained in a clean and organized manner to reduce exposure to chemicals, open electric circuits, and sharp objects or projections.\r
\r
Our Fix-it Clinic Assist Volunteers will:\r
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

• Fix-It Clinic Assist - See "Activity Description" (17 spots available)
• Fix-It Clinic Lead - See "Activity Description" (16 spots available)`,date:"2027-02-06",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Fix-it Clinic (4/4)",description:`At Fix-it Clinics, we support sustainable consumption and divert waste from landfills by repairing items that would otherwise end up in the trash. Our incredible team of volunteers can help you fix almost anything, including electronics, jewelry, clothing, bicycles, and more! \r
\r
Our Fix-it Clinic Lead Volunteers will:\r
• Use hand tools and small power tools to repair everyday household items such as electronics, bicycles, kitchen appliances, jewelry, clothing, furniture, lamps, and more.\r
• Wear appropriate personal protective equipment (PPE).\r
• Ensure workstations are maintained in a clean and organized manner to reduce exposure to chemicals, open electric circuits, and sharp objects or projections.\r
\r
Our Fix-it Clinic Assist Volunteers will:\r
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

• Fix-It Clinic Assist - See "Activity Description" (17 spots available)
• Fix-It Clinic Lead - See "Activity Description" (16 spots available)`,date:"2027-05-08",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Mushroom Walk!",description:`Join mushroom enthusiasts for the AZ Watchable Wildlife Experience’s morning mushroom walk!\r
\r
We will gather folks, have an initial talk about mushrooms, related news and safety, and then hike-and-seek for an hour. “Basket checks” will be offered at the end to confirm the fungi people find. This is a free event but is limited to 20 people and pre-registration is required. The location will be revealed after you register.

2026-08-29 | 11:30 AM - 1:30 PM

Location: Kachina Trail

Category: Special Event`,date:"2026-08-29",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Hal Jensen (1/6)",description:`7/21/26 has been cancelled due to rain\r
Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!\r


2026-06-16 | 4:00 PM - 6:00 PM

Location: Hal Jensen Recreation Center Garden

Category: Gardening

• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Steward - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)`,date:"2026-06-16",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Hal Jensen (2/6)",description:`7/21/26 has been cancelled due to rain\r
Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!\r


2026-07-21 | 4:00 PM - 6:00 PM

Location: Hal Jensen Recreation Center Garden

Category: Gardening

• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Steward - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)`,date:"2026-07-21",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Hal Jensen (3/6)",description:`7/21/26 has been cancelled due to rain\r
Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!\r


2026-08-18 | 4:00 PM - 6:00 PM

Location: Hal Jensen Recreation Center Garden

Category: Gardening

• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Steward - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)`,date:"2026-08-18",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Hal Jensen (4/6)",description:`7/21/26 has been cancelled due to rain\r
Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!\r


2026-09-15 | 4:00 PM - 6:00 PM

Location: Hal Jensen Recreation Center Garden

Category: Gardening

• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Steward - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)`,date:"2026-09-15",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Hal Jensen (5/6)",description:`7/21/26 has been cancelled due to rain\r
Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!\r


2026-10-20 | 4:00 PM - 6:00 PM

Location: Hal Jensen Recreation Center Garden

Category: Gardening

• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Steward - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)`,date:"2026-10-20",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Hal Jensen (6/6)",description:`7/21/26 has been cancelled due to rain\r
Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!\r


2026-11-17 | 4:00 PM - 6:00 PM

Location: Hal Jensen Recreation Center Garden

Category: Gardening

• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Steward - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)`,date:"2026-11-17",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Invasive Weed Work",description:`A spot that has many invasive weeds (Knapweed and Scotch Thistle) has come to our attention...the FUTS trail that starts at the southeast corner of Butler Ave & Fourth St, going up to Dog Pound Road. Since things are in full flower, we need to try to deal with it pretty quickly.  All volunteers are welcome on Tuesday 8/11, Thursday 8/13, and/or Friday 8/14 from 7-9am. Wear sturdy shoes, long pants and sleeves, a sunhat and sunscreen. Bring work gloves and drinking water, but we'll have extras! We'll supply tools and lawn bags.

2026-08-14 | 7:00 AM - 9:00 AM

Location: Dog Pound Rd - on the way to Coconino Humane Assoc

Category: Gardening

• ALL Flagstaff Volunteers - Knapweed and Scotch Thistle removal (6 spots available)`,date:"2026-08-14",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Open Space Working Group meeting",description:`Come meet with Open Space Stewards, and get updates on Flagstaff Open Space's projects at Picture Canyon, McMillan Mesa, and Observatory Mesa Natural Preserves!

2026-08-19 | 10:30 AM - 12:00 PM

Location: White Dove Coffee Shop

Category: Stewardship`,date:"2026-08-19",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Invasive Weed Work",description:`A spot that has many invasive weeds (Knapweed and Scotch Thistle) has come to our attention...the FUTS trail that starts at the southeast corner of Butler Ave & Fourth St, going up to Dog Pound Road. Since things are in full flower, we need to try to deal with it pretty quickly.  All volunteers are welcome on Tuesday 8/11, Thursday 8/13, and/or Friday 8/14 from 7-9am. Wear sturdy shoes, long pants and sleeves, a sunhat and sunscreen. Bring work gloves and drinking water, but we'll have extras! We'll supply tools and lawn bags.

2026-08-13 | 7:00 AM - 9:00 AM

Location: Dog Pound Rd - on the way to Coconino Humane Assoc

Category: Gardening

• ALL Flagstaff Volunteers - Knapweed and Scotch Thistle removal (10 spots available)`,date:"2026-08-13",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Arbor Day tree planting!",description:`Arbor Day in Flagstaff is August 25th! (We know, National Arbor Day is in April, but that's a terrible time to plant a tree in Flagstaff.)  Join Open Space and Audubon as we plant trees along the Rio de Flag at Picture Canyon!  Wear sturdy shoes and a sunhat (well, other clothing too...), and bring work gloves, drinking water, and snacks, but we'll have extras!  

2026-08-25 | 8:00 AM - 12:00 PM

Location: Picture Canyon Natural & Cultural Preserve

Category: Gardening

• ALL Flagstaff Volunteers - Tree planting and building tree enclosures (24 spots available)`,date:"2026-08-25",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Mushroom Walk!",description:`Join mushroom enthusiasts for the AZ Watchable Wildlife Experience’s afternoon mushroom walk!\r
\r
We will gather folks, have an initial talk about mushrooms, related news and safety, and then hike-and-seek for an hour. “Basket checks” will be offered at the end to confirm the fungi people find. This is a free event but is limited to 20 people and pre-registration is required. The location will be revealed after you register.

2026-08-29 | 9:00 AM - 11:00 AM

Location: Kachina Trail

Category: Special Event`,date:"2026-08-29",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Southside (1/6)",description:`Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!

2026-06-09 | 4:00 PM - 6:00 PM

Location: Southside Community Garden

Category: Gardening

• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Steward - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)`,date:"2026-06-09",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Southside (2/6)",description:`Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!

2026-07-14 | 4:00 PM - 6:00 PM

Location: Southside Community Garden

Category: Gardening

• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Steward - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)`,date:"2026-07-14",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Southside (3/6)",description:`Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!

2026-08-11 | 4:00 PM - 6:00 PM

Location: Southside Community Garden

Category: Gardening

• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Steward - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)`,date:"2026-08-11",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Southside (4/6)",description:`Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!

2026-09-08 | 4:00 PM - 6:00 PM

Location: Southside Community Garden

Category: Gardening

• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Steward - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)`,date:"2026-09-08",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Southside (5/6)",description:`Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!

2026-10-13 | 4:00 PM - 6:00 PM

Location: Southside Community Garden

Category: Gardening

• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Steward - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)`,date:"2026-10-13",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Garden Maintenance Volunteer Day - Southside (6/6)",description:`Garden volunteer days are a great way to become directly involved in your local community garden, interact with other gardeners, and ensure the gardens continue to thrive in further years. Each volunteer day includes a variety of activities that support the overall health of the gardens. These may range from essential maintenance tasks such as turning compost, weeding, and caring for communal plots to hands-on learning experiences and creative, garden inspired projects. Whether you're looking to build gardening skills, meet new people, or simply spend time outdoors giving back to your community, volunteer days provide something for everyone!

2026-11-10 | 4:00 PM - 6:00 PM

Location: Southside Community Garden

Category: Gardening

• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Steward - Maintenance Steward Lead (0 spots available)
• Community Gardens - Garden Volunteer (0 spots available)
• Community Gardens - Maintenance Steward Lead (0 spots available)`,date:"2026-11-10",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Watershed Cleanup Series",description:`Join us for the September 2026 Watershed Cleanup Series in partnership with Dark Sky Brewing!\r
Be part of a hands-on effort to increase the health of our Watershed. Together, we’ll tackle litter, remove invasive plants, and clear out debris that blocks natural water flow—helping our watershed thrive.\r
Bring water, sun protection, and sturdy clothing so you’re ready for an active day outdoors.\r
We can’t wait to see you out there making a difference!\r
\r
Location: Corner of N Fremont Blvd and N Boldt Dr in the Cheshire Neighborhood. 

2026-09-12 | 9:00 AM - 11:00 AM

• ALL Flagstaff Volunteers - Watershed Volunteers (28 spots available)`,date:"2026-09-12",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Open Spaces Commission meeting",description:`This is a regularly-scheduled Open Spaces Commission meeting, to which the public is involved. Click "Volunteer" if you're a Commissioner, or click on "Sign Up" if you'd like to participate. For more information and for a link to the agenda, visit https://www.flagstaff.az.gov/3327/Open-Spaces-Commission. The place is to be determined; it may be a field visit--we will update!

2026-08-24 | 4:00 PM - 6:00 PM

Location: The Aquaplex

• ALL Parks, Recreation, Open Space & Events Volunt - Open Spaces Commission meeting (12 spots available)`,date:"2026-08-24",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"US Forest Service & Ecoculture: Tree planting on Fire Scars",description:`Help Celebrate Arbor Day in Flagstaff!  Coconino National Forest, along with partner Ecoculture, will be hosting this community volunteer planting event, where tree planting will begin on approximately 700 acres across various fire scars on the Flagstaff Ranger District. These fire scars include the Schultz Fire (2010), Pipe Fire (2000), Horseshoe Fire (1996), Hochderffer Fire (1996), and White Horse Fire (1951). These plantings will help reforest areas that may not naturally regenerate for hundreds of years, which will help reduce soil erosion and improve wildlife habitat, while also restoring some of the timber base that was lost in these fires. Please RSVP to Wade Gibson, wade.gibson@ecoculture.us to get more information about the meeting place, and to sign their volunteer waiver.

2026-08-16 | 8:30 AM - 3:00 PM`,date:"2026-08-16",link:"https://volunteer.flagstaffaz.gov/Calendar"}]},Cr={handsOnGreaterPhoenix:bg,cityOfFlagstaff:Sg};function Ul(e){return e&&e.replace(/&#39;/g,"'").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#8217;/g,"’").replace(/&#8216;/g,"‘").replace(/&#8220;/g,"“").replace(/&#8221;/g,"”").replace(/&nbsp;/g," ")}function Hr(e,n){let t=e;if(!t&&n){const i=n.match(/(\d{4}-\d{2}-\d{2})\s*\|/);i&&(t=i[1])}if(!t)return!0;const o=new Date(t+"T23:59:59");if(isNaN(o.getTime()))return!0;const r=new Date;return r.setHours(0,0,0,0),o>=r}function vc(e){return e.map(n=>({...n,name:Ul(n.name),description:Ul(n.description)})).filter(n=>Hr(n.date,n.description))}const wc={title:"HandsOn Greater Phoenix",note:'For referral volunteer opportunities (marked "Referral" in the title), please contact the listed volunteer coordinator directly to confirm whether service hours can be verified, since HandsOn cannot sign off on hours for projects run by partner organizations.',opportunities:[{name:"TopGolf Competition - Gilbert",link:"https://www.handsonphoenix.org/calendar",description:`Volunteers are needed for event support.
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

Time: 6:15 PM - 8:15 PM`}]};var Fl,_l;const Wo=((_l=(Fl=Cr.handsOnGreaterPhoenix)==null?void 0:Fl.opportunities)==null?void 0:_l.length)>0?Cr.handsOnGreaterPhoenix:wc,Cg={...Wo,note:'For referral volunteer opportunities (marked "Referral" in the title), please contact HandsOn Greater Phoenix to confirm whether volunteer hours can be verified for that project before signing up.',opportunities:Wo===wc?Wo.opportunities.filter(e=>Hr(e.date)):vc(Wo.opportunities).map(e=>({...e,link:e.link||"https://www.handsonphoenix.org/calendar"}))};var Hl,Yl;const zo=((Yl=(Hl=Cr.cityOfFlagstaff)==null?void 0:Hl.opportunities)==null?void 0:Yl.length)>0?Cr.cityOfFlagstaff:kc,xg={...zo,opportunities:zo===kc?zo.opportunities.filter(e=>Hr(e.date)):vc(zo.opportunities).map(e=>({...e,link:e.link||"https://volunteer.flagstaffaz.gov/Calendar"}))},ye={handsOnGreaterPhoenix:Cg,arizonaStateParks:{title:"Arizona State Parks and Trails",note:`Note: The following opportunities require an application, which can be done through this link:
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

•Visitor Services - Welcome guests, assist in the Park Store with retail sales, and provide general park information.`}]},cityOfFlagstaff:xg,juniorAchievement:{title:"Junior Achievement of Arizona",note:`                                               Fill out the Youth Consent here:
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
Tempe, AZ  85282`}]}};Object.keys(ye).forEach(e=>{ye[e]={...ye[e],opportunities:ye[e].opportunities.filter(n=>Hr(n.date,n.description))}});const Mg=Object.freeze(Object.defineProperty({__proto__:null,organizations:ye},Symbol.toStringTag,{value:"Module"}));function Tg(){const[e,n]=P.useState([{sender:"ai",text:"Hi! I'm Quest AI. Tell me your interests and location, and I will find the best volunteer opportunity near you!"}]),[t,o]=P.useState(""),[r,i]=P.useState(!1),a=P.useRef(null);P.useEffect(()=>{a.current&&(a.current.scrollTop=a.current.scrollHeight)},[e]);const s=JSON.stringify(ye);async function l(){if(!t.trim()||r)return;const f=t;o(""),i(!0),n(c=>[...c,{sender:"user",text:f}]);try{const c=await Pg(f,s);n(m=>[...m,{sender:"ai",text:c}])}catch(c){n(m=>[...m,{sender:"ai",text:`Error: ${c.message}`}])}finally{i(!1)}}function u(f){f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),l())}return h.jsxs("div",{className:"quest-page-wrap",children:[h.jsx(yo,{current:"quest"}),h.jsxs("div",{className:"quest-page",children:[h.jsx("h1",{className:"quest-title",children:"Quest AI"}),!yc()&&h.jsxs("div",{className:"quest-config-banner",children:["Quest AI isn't connected yet. Add your Firebase API key in ",h.jsx("code",{children:"src/config/firebaseConfig.js"})," to enable live responses."]}),h.jsx("div",{className:"quest-chat-scroll",ref:a,children:e.map((f,c)=>h.jsxs("div",{className:`quest-message-row ${f.sender}`,children:[f.sender==="ai"&&h.jsx("span",{className:`quest-avatar ai${r&&c===e.length-1?" loading":""}`,children:"✨"}),h.jsx("div",{className:`quest-bubble ${f.sender}`,children:f.text}),f.sender==="user"&&h.jsx("span",{className:"quest-avatar user",children:"👤"})]},c))}),h.jsxs("div",{className:"quest-input-bar",children:[h.jsxs("div",{className:"quest-input-wrap",children:[h.jsx("input",{className:"quest-input",value:t,onChange:f=>o(f.target.value),onKeyDown:u}),!t&&h.jsx("span",{className:"quest-input-placeholder",children:"Ask Quest AI..."})]}),h.jsx("button",{className:"quest-send-btn",onClick:l,children:r?"⋯":"➤"})]})]})]})}const Ag="modulepreload",Vg=function(e){return"/"+e},Gl={},Lg=function(n,t,o){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=Vg(l),l in Gl)return;Gl[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":Ag,u||(c.as="script"),c.crossOrigin="",c.href=l,s&&c.setAttribute("nonce",s),document.head.appendChild(c),u)return new Promise((m,y)=>{c.addEventListener("load",m),c.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return r.then(a=>{for(const s of a||[])s.status==="rejected"&&i(s.reason);return n().catch(i)})},Pc="AIzaSyDyePdZI22sIGwZ84yK5mwOzjhtrVwq8us";function Dl(){return!!Pc}const jg={handsOnGreaterPhoenix:"/org/hands-on-greater-phoenix",arizonaStateParks:"/org/arizona-state-parks",azSustainabilityAlliance:"/org/az-sustainability-alliance",bureauOfLandManagement:"/org/bureau-of-land-management",cityOfFlagstaff:"/org/city-of-flagstaff",feedMyStarvingChildren:"/org/feed-my-starving-children",lostOurHomesPetRescue:"/org/lost-our-homes-pet-rescue",juniorAchievement:"/org/junior-achievement"},bc="vh_geocode_cache_v5";let Uo=null;function Eg(e){var n;return(n=window.google)!=null&&n.maps?Promise.resolve(window.google):Uo||(Uo=new Promise((t,o)=>{const r=document.createElement("script");r.src=`https://maps.googleapis.com/maps/api/js?key=${e}&libraries=places,geometry`,r.async=!0,r.onload=()=>{const i=document.createElement("script");i.src="https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js",i.onload=()=>t(window.google),i.onerror=()=>t(window.google),document.head.appendChild(i)},r.onerror=o,document.head.appendChild(r)}),Uo)}function Ng(e){if(!e)return null;const n=e.match(/Location:\s*([^\n]+)/i);if(!n)return null;let t=n[1].trim();return t=t.replace(/,?\s*AZ,\s*AZ/i,", AZ"),t.toLowerCase().includes("details")||t.toLowerCase().includes("provided after")||t.toLowerCase().includes("provided upon")||t.toLowerCase().includes("contact")||t.toLowerCase().includes("various")||t.toLowerCase().includes("multiple")||t.toLowerCase().includes("tbd")||t.length<4?null:/^\d{5}$/.test(t)?`${t}, AZ`:t}function Og(){try{const e=localStorage.getItem(bc);return e?JSON.parse(e):{}}catch{return{}}}function Rg(e){try{localStorage.setItem(bc,JSON.stringify(e))}catch{}}async function Ig(e,n,t){const o=n.toLowerCase().trim();return t[o]?t[o]:new Promise(r=>{new e.maps.Geocoder().geocode({address:n+", Arizona",componentRestrictions:{country:"us"},bounds:new e.maps.LatLngBounds(new e.maps.LatLng(31.3,-114.8),new e.maps.LatLng(37,-109))},(a,s)=>{if(s==="OK"&&a[0]){const{lat:l,lng:u}=a[0].geometry.location,f={lat:l(),lng:u()};t[o]=f,r(f)}else t[o]=null,r(null)})})}async function Wg(e,n,t){const o=Og(),r=[],i=[];for(const[s,l]of Object.entries(n))for(const u of l.opportunities){const f=Ng(u.description);f&&i.push({name:u.name,orgKey:s,loc:f})}t(`Locating ${i.length} opportunities...`);let a=0;for(const s of i){const l=await Ig(e,s.loc,o);l&&r.push({name:s.name,orgKey:s.orgKey,lat:l.lat,lng:l.lng}),a++,a%10===0&&t(`Locating opportunities... (${a}/${i.length})`),await new Promise(u=>setTimeout(u,60))}return Rg(o),r}function zg(){const e=_r(),n=P.useRef(null),t=P.useRef(null),o=P.useRef([]),[r,i]=P.useState(""),[a,s]=P.useState(""),[l,u]=P.useState(null),[f,c]=P.useState(!1),[m,y]=P.useState(""),[v,k]=P.useState(""),[x,p]=P.useState("Loading map..."),[d,g]=P.useState([]);P.useEffect(()=>{if(!Dl())return;let S=!1;return Eg(Pc).then(async A=>{var Ne;if(S||!n.current)return;const V=new A.maps.Map(n.current,{center:{lat:33.4484,lng:-111.95},zoom:9,mapTypeControl:!1});if(t.current=V,p("Locating opportunities..."),await new Promise(X=>setTimeout(X,150)),S)return;const{organizations:I}=await Lg(async()=>{const{organizations:X}=await Promise.resolve().then(()=>Mg);return{organizations:X}},void 0);if(S)return;const E=Object.values(I).reduce((X,Ke)=>X+Ke.opportunities.length,0);console.log(`MapsPage: loaded ${E} opportunities`);const $=await Wg(A,I,p);if(S)return;g($),o.current.forEach(X=>X.setMap(null));const q=$.map(X=>{const Ke=new A.maps.Marker({position:{lat:X.lat,lng:X.lng},title:X.name});return Ke.addListener("click",()=>u(X)),Ke});o.current=q,(Ne=window.markerClusterer)!=null&&Ne.MarkerClusterer?new window.markerClusterer.MarkerClusterer({map:V,markers:q}):q.forEach(X=>X.setMap(V)),c(!0),p("")}).catch(()=>{S||(y("Google Maps failed to load. Check your API key in src/config/googleMapsConfig.js."),p(""))}),()=>{S=!0}},[]);function w(){var V;if(k(""),s(""),!f){k("The map is still loading — try again in a moment.");return}if(!r.trim()){k("Enter an address first.");return}const S=window.google;if(!((V=S==null?void 0:S.maps)!=null&&V.Geocoder)){k("Geocoding not available. Try reloading.");return}new S.maps.Geocoder().geocode({address:r,componentRestrictions:{country:"us"},bounds:new S.maps.LatLngBounds(new S.maps.LatLng(31.3,-114.8),new S.maps.LatLng(37,-109))},(I,E)=>{var Ke,Kn;if(E!=="OK"||!I[0]){k(`Couldn't find that address. Try adding a city, e.g. "1110 W Washington, Phoenix".`);return}const $=I[0].geometry.location;let q=null,Ne=1/0;for(const Oe of d){const M=(Kn=(Ke=S.maps.geometry)==null?void 0:Ke.spherical)!=null&&Kn.computeDistanceBetween?S.maps.geometry.spherical.computeDistanceBetween($,new S.maps.LatLng(Oe.lat,Oe.lng)):Ug($.lat(),$.lng(),Oe.lat,Oe.lng);M<Ne&&(Ne=M,q=Oe)}if(!q){k("No mapped opportunities found.");return}u(q),t.current.panTo({lat:q.lat,lng:q.lng}),t.current.setZoom(13),new S.maps.DirectionsService().route({origin:$,destination:{lat:q.lat,lng:q.lng},travelMode:S.maps.TravelMode.DRIVING},(Oe,M)=>{if(M==="OK"){const L=Oe.routes[0].legs[0],j=Math.round(L.duration.value/60),D=(L.distance.value/1609.34).toFixed(1);s(`📍 ${q.name} — ${D} mi · ${j} min away`)}else k(`Found nearest opportunity (${q.name}) but couldn't calculate drive time.`)})})}function C(){if(!l)return;const S=jg[l.orgKey];S&&e(S),u(null)}return h.jsxs("div",{className:"maps-page",children:[h.jsx(yo,{current:"maps"}),h.jsxs("div",{className:"maps-map-wrap",children:[Dl()?h.jsx("div",{className:"maps-map-canvas",ref:n}):h.jsx("div",{className:"maps-not-configured",children:h.jsxs("p",{children:["Add your Google Maps API key in ",h.jsx("code",{children:"src/config/googleMapsConfig.js"})]})}),m&&h.jsx("div",{className:"maps-not-configured",style:{background:"rgba(40,0,0,0.85)"},children:h.jsx("p",{children:m})}),x&&h.jsxs("div",{className:"maps-loading-banner",children:[h.jsx("span",{className:"maps-loading-spinner"})," ",x]}),h.jsxs("div",{className:"maps-search-panel",children:[h.jsx("input",{className:"maps-address-input",placeholder:"Address",value:r,onChange:S=>i(S.target.value),onKeyDown:S=>S.key==="Enter"&&w()}),h.jsx("button",{className:"maps-find-btn",onClick:w,children:"Find Nearest Opportunity"}),v&&h.jsx("span",{className:"maps-find-error",children:v}),a&&h.jsx("span",{className:"maps-travel-time",children:a}),h.jsx("p",{className:"maps-location-note",children:"📌 Some pin locations are approximate based on the area listed. Register with the organization for exact details."})]})]}),l&&h.jsx("div",{className:"maps-sheet-overlay",onClick:()=>u(null),children:h.jsxs("div",{className:"maps-sheet",onClick:S=>S.stopPropagation(),children:[h.jsx("span",{className:"maps-sheet-name",children:l.name}),h.jsx("button",{className:"maps-sheet-btn",onClick:C,children:"Click to View Organization"})]})})]})}function Ug(e,n,t,o){const i=u=>u*Math.PI/180,a=i(t-e),s=i(o-n),l=Math.sin(a/2)**2+Math.cos(i(e))*Math.cos(i(t))*Math.sin(s/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))}const Gg="/assets/Image2-DbNKlkYW.png";function Dg(){return h.jsxs("div",{className:"about-page",children:[h.jsx(yo,{current:"about"}),h.jsxs("div",{className:"about-scroll",children:[h.jsx("div",{className:"about-hero",style:{backgroundImage:`url(${Gg})`},children:h.jsxs("div",{className:"about-hero-text",children:[h.jsx("h1",{className:"about-mission-title",children:"Our Mission"}),h.jsx("p",{className:"about-mission-body",children:`With the right tools and access to meaningful opportunities,
any student can make a difference. VolunteerHigh empowers
students to connect with
causes they care about, building lasting community
impact and growing service.`})]})}),h.jsxs("div",{className:"about-section",children:[h.jsxs("div",{className:"about-divider-row",children:[h.jsx("div",{className:"rule"}),h.jsx("span",{className:"label",children:"About VolunteerHigh"}),h.jsx("div",{className:"rule"})]}),h.jsx("p",{className:"about-body-text",children:`Created By A Student, for Students.

VolunteerHigh is a platform designed to help high school students in Arizona discover meaningful volunteer opportunities
 in their lcoal communities. Finding volunteer work can be difficult, with opportunities scattered across different websites and organizations.
VolunteerHigh simplifies this process by displaying various organizations in one place.`})]})]})]})}function va(e){const n=/(https?:\/\/[^\s]+)/g;return e.split(n).map((o,r)=>n.test(o)&&o.startsWith("http")?h.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",children:o},r):h.jsx(Sa.Fragment,{children:o},r))}const Fg=[{question:"Is VolunteerHigh Free?",answer:"Yes! VolunteerHigh is a completely free tool that can be used by anybody in Arizona."},{question:"Do I have to sign up to use VolunteerHigh?",answer:"No. VolunteerHigh requires no sign ups, though some opportunities require an account or aplication."},{question:"What organizations is VolunteerHigh partnered with?",answer:"VolunteerHigh is partnered with 8 organizations across the valley as of now."},{question:"Can I use VolunteerHigh in California?",answer:"No. VolunteerHigh is currently a platform designed only for students in Arizona."},{question:"How can I contact VolunteerHigh",answer:"Email VolunteerHighSupport@gmail.com"},{question:"Where can I contact the organizations?",answer:`Here are our following partner organizations, and their contact information:

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
Email: Volunteering@lostourhome.org`}];function _g({question:e,answer:n}){const[t,o]=P.useState(!1);return h.jsxs("div",{className:"faq-row",children:[h.jsxs("button",{className:"faq-question-row",onClick:()=>o(r=>!r),children:[h.jsx("span",{children:e}),h.jsx("span",{className:"faq-toggle-icon",children:t?"−":"+"})]}),t&&h.jsx("p",{className:"faq-answer",children:va(n)})]})}function Hg(){return h.jsxs("div",{className:"faq-page",children:[h.jsx(yo,{current:"faq"}),h.jsx("div",{className:"faq-scroll",children:h.jsxs("div",{className:"faq-inner",children:[h.jsxs("div",{className:"faq-divider-row",children:[h.jsx("div",{className:"rule"}),h.jsx("span",{className:"label",children:"FAQ's"}),h.jsx("div",{className:"rule"})]}),Fg.map((e,n)=>h.jsx(_g,{question:e.question,answer:e.answer},n))]})})]})}function Tn({title:e,note:n,opportunities:t,centerTitle:o,bannerImage:r,contactEmail:i}){const[a,s]=P.useState(null),[l,u]=P.useState(""),f=P.useMemo(()=>{if(!l.trim())return t;const y=l.toLowerCase();return t.filter(v=>v.name.toLowerCase().includes(y)||v.description.toLowerCase().includes(y))},[t,l]),c=a!==null?t[a]:null;function m(y){if(!i)return null;const v=`Volunteering Inquiry — ${y}`,k=`Hi,

I'm interested in the "${y}" volunteer opportunity with ${e}, and I'd like to learn more.

Thank you!`;return`mailto:${i}?subject=${encodeURIComponent(v)}&body=${encodeURIComponent(k)}`}return h.jsxs("div",{className:"org-page",children:[r&&h.jsx("div",{className:"org-banner",style:{backgroundImage:`url(${r})`}}),h.jsxs("div",{className:`org-header${o?" center-title":""}`,children:[h.jsx("h1",{className:"org-title",children:e}),n&&h.jsx("p",{className:"org-note",children:va(n)})]}),h.jsxs("div",{className:"org-body",children:[h.jsxs("div",{className:"org-list-pane",children:[h.jsx("h2",{className:"org-list-heading",children:"Opportunities Near You 📍"}),h.jsx("input",{className:"org-search-input",type:"text",placeholder:"Search opportunities...",value:l,onChange:y=>u(y.target.value)}),h.jsx("div",{className:"org-list-scroll",children:f.length===0?h.jsx("p",{className:"org-list-empty",children:"No opportunities match your search."}):f.map(y=>{const v=t.indexOf(y);return h.jsx("button",{className:`org-list-item${a===v?" selected":""}`,onClick:()=>s(v),children:y.name},v)})})]}),h.jsx("div",{className:"org-divider"}),h.jsx("div",{className:"org-detail-pane",children:h.jsx("div",{className:"org-detail-scroll",children:c?h.jsxs(h.Fragment,{children:[h.jsx("h3",{className:"org-detail-name",children:c.name}),h.jsx("p",{className:"org-detail-description",children:va(c.description)}),h.jsxs("div",{className:"org-detail-actions",children:[c.link&&h.jsx("a",{className:"org-apply-button",href:c.link,target:"_blank",rel:"noopener noreferrer",children:"View Official Listing ↗"}),i&&h.jsxs("a",{className:"org-apply-button org-apply-button-secondary",href:m(c.name),children:["✉ Email ",e]})]})]}):h.jsx("p",{className:"org-detail-placeholder",children:"Select an opportunity on the left to view details"})})})]})]})}const An={arizonaStateParks:"crichards@azstateparks.gov",handsOnGreaterPhoenix:"info@handsonphoenix.org",cityOfFlagstaff:"Blake.Commisso@flagstaffaz.gov",juniorAchievement:"taylors@jaaz.org",feedMyStarvingChildren:"info@fmsc.org",azSustainabilityAlliance:"info@azsustain.org",bureauOfLandManagement:"elitchfield@az.go",lostOurHomesPetRescue:"Volunteering@lostourhome.org"};function Yg(){const e=ye.handsOnGreaterPhoenix;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:An.handsOnGreaterPhoenix})}function Bg(){const e=ye.arizonaStateParks;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,centerTitle:!0,contactEmail:An.arizonaStateParks})}function Kg(){const e=ye.cityOfFlagstaff;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:An.cityOfFlagstaff})}function Zg(){const e=ye.juniorAchievement;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,centerTitle:!0,contactEmail:An.juniorAchievement})}function $g(){const e=ye.feedMyStarvingChildren;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:An.feedMyStarvingChildren})}function qg(){const e=ye.azSustainabilityAlliance;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:An.azSustainabilityAlliance})}function Qg(){const e=ye.bureauOfLandManagement;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:An.bureauOfLandManagement})}function Jg(){const e=ye.lostOurHomesPetRescue;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:An.lostOurHomesPetRescue})}function Xg(){return h.jsx(Qf,{children:h.jsxs(Hf,{children:[h.jsx(de,{path:"/",element:h.jsx(ng,{})}),h.jsx(de,{path:"/home",element:h.jsx(vg,{})}),h.jsx(de,{path:"/quest",element:h.jsx(Tg,{})}),h.jsx(de,{path:"/maps",element:h.jsx(zg,{})}),h.jsx(de,{path:"/about",element:h.jsx(Dg,{})}),h.jsx(de,{path:"/faq",element:h.jsx(Hg,{})}),h.jsx(de,{path:"/org/hands-on-greater-phoenix",element:h.jsx(Yg,{})}),h.jsx(de,{path:"/org/arizona-state-parks",element:h.jsx(Bg,{})}),h.jsx(de,{path:"/org/city-of-flagstaff",element:h.jsx(Kg,{})}),h.jsx(de,{path:"/org/junior-achievement",element:h.jsx(Zg,{})}),h.jsx(de,{path:"/org/feed-my-starving-children",element:h.jsx($g,{})}),h.jsx(de,{path:"/org/az-sustainability-alliance",element:h.jsx(qg,{})}),h.jsx(de,{path:"/org/bureau-of-land-management",element:h.jsx(Qg,{})}),h.jsx(de,{path:"/org/lost-our-homes-pet-rescue",element:h.jsx(Jg,{})})]})})}bi.createRoot(document.getElementById("root")).render(h.jsx(Sa.StrictMode,{children:h.jsx(Xg,{})}));
