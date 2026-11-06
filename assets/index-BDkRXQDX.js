function xc(e,n){for(var t=0;t<n.length;t++){const o=n[t];if(typeof o!="string"&&!Array.isArray(o)){for(const i in o)if(i!=="default"&&!(i in e)){const r=Object.getOwnPropertyDescriptor(o,i);r&&Object.defineProperty(e,i,r.get?r:{enumerable:!0,get:()=>o[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function Sc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zl={exports:{}},Ai={},Gl={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var co=Symbol.for("react.element"),Ac=Symbol.for("react.portal"),Mc=Symbol.for("react.fragment"),Tc=Symbol.for("react.strict_mode"),Cc=Symbol.for("react.profiler"),Vc=Symbol.for("react.provider"),Ec=Symbol.for("react.context"),jc=Symbol.for("react.forward_ref"),Lc=Symbol.for("react.suspense"),Nc=Symbol.for("react.memo"),Oc=Symbol.for("react.lazy"),ws=Symbol.iterator;function Rc(e){return e===null||typeof e!="object"?null:(e=ws&&e[ws]||e["@@iterator"],typeof e=="function"?e:null)}var ql={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$l=Object.assign,Kl={};function kt(e,n,t){this.props=e,this.context=n,this.refs=Kl,this.updater=t||ql}kt.prototype.isReactComponent={};kt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};kt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jl(){}Jl.prototype=kt.prototype;function va(e,n,t){this.props=e,this.context=n,this.refs=Kl,this.updater=t||ql}var ka=va.prototype=new Jl;ka.constructor=va;$l(ka,kt.prototype);ka.isPureReactComponent=!0;var vs=Array.isArray,Ql=Object.prototype.hasOwnProperty,ba={current:null},Xl={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,n,t){var o,i={},r=null,a=null;if(n!=null)for(o in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(r=""+n.key),n)Ql.call(n,o)&&!Xl.hasOwnProperty(o)&&(i[o]=n[o]);var s=arguments.length-2;if(s===1)i.children=t;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(o in s=e.defaultProps,s)i[o]===void 0&&(i[o]=s[o]);return{$$typeof:co,type:e,key:r,ref:a,props:i,_owner:ba.current}}function Ic(e,n){return{$$typeof:co,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Pa(e){return typeof e=="object"&&e!==null&&e.$$typeof===co}function Uc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ks=/\/+/g;function Zi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Uc(""+e.key):n.toString(36)}function Wo(e,n,t,o,i){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(r){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case co:case Ac:a=!0}}if(a)return a=e,i=i(a),e=o===""?"."+Zi(a,0):o,vs(i)?(t="",e!=null&&(t=e.replace(ks,"$&/")+"/"),Wo(i,n,t,"",function(u){return u})):i!=null&&(Pa(i)&&(i=Ic(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ks,"$&/")+"/")+e)),n.push(i)),1;if(a=0,o=o===""?".":o+":",vs(e))for(var s=0;s<e.length;s++){r=e[s];var l=o+Zi(r,s);a+=Wo(r,n,t,l,i)}else if(l=Rc(e),typeof l=="function")for(e=l.call(e),s=0;!(r=e.next()).done;)r=r.value,l=o+Zi(r,s++),a+=Wo(r,n,t,l,i);else if(r==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function ko(e,n,t){if(e==null)return e;var o=[],i=0;return Wo(e,o,"","",function(r){return n.call(t,r,i++)}),o}function Dc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Fo={transition:null},zc={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Fo,ReactCurrentOwner:ba};function nu(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:ko,forEach:function(e,n,t){ko(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ko(e,function(){n++}),n},toArray:function(e){return ko(e,function(n){return n})||[]},only:function(e){if(!Pa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=kt;N.Fragment=Mc;N.Profiler=Cc;N.PureComponent=va;N.StrictMode=Tc;N.Suspense=Lc;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zc;N.act=nu;N.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=$l({},e.props),i=e.key,r=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(r=n.ref,a=ba.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in n)Ql.call(n,l)&&!Xl.hasOwnProperty(l)&&(o[l]=n[l]===void 0&&s!==void 0?s[l]:n[l])}var l=arguments.length-2;if(l===1)o.children=t;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:co,type:e.type,key:i,ref:r,props:o,_owner:a}};N.createContext=function(e){return e={$$typeof:Ec,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Vc,_context:e},e.Consumer=e};N.createElement=eu;N.createFactory=function(e){var n=eu.bind(null,e);return n.type=e,n};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:jc,render:e}};N.isValidElement=Pa;N.lazy=function(e){return{$$typeof:Oc,_payload:{_status:-1,_result:e},_init:Dc}};N.memo=function(e,n){return{$$typeof:Nc,type:e,compare:n===void 0?null:n}};N.startTransition=function(e){var n=Fo.transition;Fo.transition={};try{e()}finally{Fo.transition=n}};N.unstable_act=nu;N.useCallback=function(e,n){return pe.current.useCallback(e,n)};N.useContext=function(e){return pe.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};N.useEffect=function(e,n){return pe.current.useEffect(e,n)};N.useId=function(){return pe.current.useId()};N.useImperativeHandle=function(e,n,t){return pe.current.useImperativeHandle(e,n,t)};N.useInsertionEffect=function(e,n){return pe.current.useInsertionEffect(e,n)};N.useLayoutEffect=function(e,n){return pe.current.useLayoutEffect(e,n)};N.useMemo=function(e,n){return pe.current.useMemo(e,n)};N.useReducer=function(e,n,t){return pe.current.useReducer(e,n,t)};N.useRef=function(e){return pe.current.useRef(e)};N.useState=function(e){return pe.current.useState(e)};N.useSyncExternalStore=function(e,n,t){return pe.current.useSyncExternalStore(e,n,t)};N.useTransition=function(){return pe.current.useTransition()};N.version="18.3.1";Gl.exports=N;var b=Gl.exports;const xa=Sc(b),Wc=xc({__proto__:null,default:xa},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc=b,Hc=Symbol.for("react.element"),_c=Symbol.for("react.fragment"),Yc=Object.prototype.hasOwnProperty,Bc=Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zc={key:!0,ref:!0,__self:!0,__source:!0};function tu(e,n,t){var o,i={},r=null,a=null;t!==void 0&&(r=""+t),n.key!==void 0&&(r=""+n.key),n.ref!==void 0&&(a=n.ref);for(o in n)Yc.call(n,o)&&!Zc.hasOwnProperty(o)&&(i[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps,n)i[o]===void 0&&(i[o]=n[o]);return{$$typeof:Hc,type:e,key:r,ref:a,props:i,_owner:Bc.current}}Ai.Fragment=_c;Ai.jsx=tu;Ai.jsxs=tu;Zl.exports=Ai;var h=Zl.exports,Pr={},ou={exports:{}},Ae={},iu={exports:{}},ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(M,E){var j=M.length;M.push(E);e:for(;0<j;){var F=j-1>>>1,ee=M[F];if(0<i(ee,E))M[F]=E,M[j]=ee,j=F;else break e}}function t(M){return M.length===0?null:M[0]}function o(M){if(M.length===0)return null;var E=M[0],j=M.pop();if(j!==E){M[0]=j;e:for(var F=0,ee=M.length,wo=ee>>>1;F<wo;){var Vn=2*(F+1)-1,Bi=M[Vn],En=Vn+1,vo=M[En];if(0>i(Bi,j))En<ee&&0>i(vo,Bi)?(M[F]=vo,M[En]=j,F=En):(M[F]=Bi,M[Vn]=j,F=Vn);else if(En<ee&&0>i(vo,j))M[F]=vo,M[En]=j,F=En;else break e}}return E}function i(M,E){var j=M.sortIndex-E.sortIndex;return j!==0?j:M.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],f=1,c=null,m=3,y=!1,w=!1,k=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(M){for(var E=t(u);E!==null;){if(E.callback===null)o(u);else if(E.startTime<=M)o(u),E.sortIndex=E.expirationTime,n(l,E);else break;E=t(u)}}function v(M){if(k=!1,g(M),!w)if(t(l)!==null)w=!0,Gn(S);else{var E=t(u);E!==null&&Oe(v,E.startTime-M)}}function S(M,E){w=!1,k&&(k=!1,p(V),V=-1),y=!0;var j=m;try{for(g(E),c=t(l);c!==null&&(!(c.expirationTime>E)||M&&!$());){var F=c.callback;if(typeof F=="function"){c.callback=null,m=c.priorityLevel;var ee=F(c.expirationTime<=E);E=e.unstable_now(),typeof ee=="function"?c.callback=ee:c===t(l)&&o(l),g(E)}else o(l);c=t(l)}if(c!==null)var wo=!0;else{var Vn=t(u);Vn!==null&&Oe(v,Vn.startTime-E),wo=!1}return wo}finally{c=null,m=j,y=!1}}var x=!1,C=null,V=-1,I=5,L=-1;function $(){return!(e.unstable_now()-L<I)}function K(){if(C!==null){var M=e.unstable_now();L=M;var E=!0;try{E=C(!0,M)}finally{E?Ne():(x=!1,C=null)}}else x=!1}var Ne;if(typeof d=="function")Ne=function(){d(K)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Ge=X.port2;X.port1.onmessage=K,Ne=function(){Ge.postMessage(null)}}else Ne=function(){A(K,0)};function Gn(M){C=M,x||(x=!0,Ne())}function Oe(M,E){V=A(function(){M(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,Gn(S))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(M){switch(m){case 1:case 2:case 3:var E=3;break;default:E=m}var j=m;m=E;try{return M()}finally{m=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,E){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var j=m;m=M;try{return E()}finally{m=j}},e.unstable_scheduleCallback=function(M,E,j){var F=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?F+j:F):j=F,M){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=j+ee,M={id:f++,callback:E,priorityLevel:M,startTime:j,expirationTime:ee,sortIndex:-1},j>F?(M.sortIndex=j,n(u,M),t(l)===null&&M===t(u)&&(k?(p(V),V=-1):k=!0,Oe(v,j-F))):(M.sortIndex=ee,n(l,M),w||y||(w=!0,Gn(S))),M},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(M){var E=m;return function(){var j=m;m=E;try{return M.apply(this,arguments)}finally{m=j}}}})(ru);iu.exports=ru;var Gc=iu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=b,Se=Gc;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var au=new Set,Bt={};function _n(e,n){pt(e,n),pt(e+"Capture",n)}function pt(e,n){for(Bt[e]=n,e=0;e<n.length;e++)au.add(n[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xr=Object.prototype.hasOwnProperty,$c=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bs={},Ps={};function Kc(e){return xr.call(Ps,e)?!0:xr.call(bs,e)?!1:$c.test(e)?Ps[e]=!0:(bs[e]=!0,!1)}function Jc(e,n,t,o){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qc(e,n,t,o){if(n===null||typeof n>"u"||Jc(e,n,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function fe(e,n,t,o,i,r,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=r,this.removeEmptyString=a}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];re[n]=new fe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sa=/[\-:]([a-z])/g;function Aa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Sa,Aa);re[n]=new fe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Sa,Aa);re[n]=new fe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Sa,Aa);re[n]=new fe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ma(e,n,t,o){var i=re.hasOwnProperty(n)?re[n]:null;(i!==null?i.type!==0:o||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Qc(n,t,i,o)&&(t=null),o||i===null?Kc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,o=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,o?e.setAttributeNS(o,n,t):e.setAttribute(n,t))))}var on=qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bo=Symbol.for("react.element"),$n=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),Ta=Symbol.for("react.strict_mode"),Sr=Symbol.for("react.profiler"),su=Symbol.for("react.provider"),lu=Symbol.for("react.context"),Ca=Symbol.for("react.forward_ref"),Ar=Symbol.for("react.suspense"),Mr=Symbol.for("react.suspense_list"),Va=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),uu=Symbol.for("react.offscreen"),xs=Symbol.iterator;function St(e){return e===null||typeof e!="object"?null:(e=xs&&e[xs]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Gi;function Lt(e){if(Gi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Gi=n&&n[1]||""}return`
`+Gi+e}var qi=!1;function $i(e,n){if(!e||qi)return"";qi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var o=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){o=u}e.call(n.prototype)}else{try{throw Error()}catch(u){o=u}e()}}catch(u){if(u&&o&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),r=o.stack.split(`
`),a=i.length-1,s=r.length-1;1<=a&&0<=s&&i[a]!==r[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==r[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==r[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{qi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Lt(e):""}function Xc(e){switch(e.tag){case 5:return Lt(e.type);case 16:return Lt("Lazy");case 13:return Lt("Suspense");case 19:return Lt("SuspenseList");case 0:case 2:case 15:return e=$i(e.type,!1),e;case 11:return e=$i(e.type.render,!1),e;case 1:return e=$i(e.type,!0),e;default:return""}}function Tr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case $n:return"Portal";case Sr:return"Profiler";case Ta:return"StrictMode";case Ar:return"Suspense";case Mr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lu:return(e.displayName||"Context")+".Consumer";case su:return(e._context.displayName||"Context")+".Provider";case Ca:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Va:return n=e.displayName||null,n!==null?n:Tr(e.type)||"Memo";case an:n=e._payload,e=e._init;try{return Tr(e(n))}catch{}}return null}function eh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tr(n);case 8:return n===Ta?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function du(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nh(e){var n=du(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,r=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){o=""+a,r.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(a){o=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Po(e){e._valueTracker||(e._valueTracker=nh(e))}function cu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),o="";return e&&(o=du(e)?e.checked?"true":"false":e.value),e=o,e!==t?(n.setValue(e),!0):!1}function Xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cr(e,n){var t=n.checked;return Y({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ss(e,n){var t=n.defaultValue==null?"":n.defaultValue,o=n.checked!=null?n.checked:n.defaultChecked;t=Pn(n.value!=null?n.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function hu(e,n){n=n.checked,n!=null&&Ma(e,"checked",n,!1)}function Vr(e,n){hu(e,n);var t=Pn(n.value),o=n.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Er(e,n.type,t):n.hasOwnProperty("defaultValue")&&Er(e,n.type,Pn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function As(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!(o!=="submit"&&o!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Er(e,n,t){(n!=="number"||Xo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Nt=Array.isArray;function st(e,n,t,o){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&o&&(e[t].defaultSelected=!0)}else{for(t=""+Pn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function jr(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return Y({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ms(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(Nt(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Pn(t)}}function pu(e,n){var t=Pn(n.value),o=Pn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function Ts(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function fu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lr(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?fu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xo,gu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,o,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,o,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(xo=xo||document.createElement("div"),xo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=xo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Zt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var It={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},th=["Webkit","ms","Moz","O"];Object.keys(It).forEach(function(e){th.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),It[n]=It[e]})});function mu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||It.hasOwnProperty(e)&&It[e]?(""+n).trim():n+"px"}function yu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var o=t.indexOf("--")===0,i=mu(t,n[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,i):e[t]=i}}var oh=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nr(e,n){if(n){if(oh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function Or(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rr=null;function Ea(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ir=null,lt=null,ut=null;function Cs(e){if(e=fo(e)){if(typeof Ir!="function")throw Error(P(280));var n=e.stateNode;n&&(n=Ei(n),Ir(e.stateNode,e.type,n))}}function wu(e){lt?ut?ut.push(e):ut=[e]:lt=e}function vu(){if(lt){var e=lt,n=ut;if(ut=lt=null,Cs(e),n)for(e=0;e<n.length;e++)Cs(n[e])}}function ku(e,n){return e(n)}function bu(){}var Ki=!1;function Pu(e,n,t){if(Ki)return e(n,t);Ki=!0;try{return ku(e,n,t)}finally{Ki=!1,(lt!==null||ut!==null)&&(bu(),vu())}}function Gt(e,n){var t=e.stateNode;if(t===null)return null;var o=Ei(t);if(o===null)return null;t=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var Ur=!1;if(Xe)try{var At={};Object.defineProperty(At,"passive",{get:function(){Ur=!0}}),window.addEventListener("test",At,At),window.removeEventListener("test",At,At)}catch{Ur=!1}function ih(e,n,t,o,i,r,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(f){this.onError(f)}}var Ut=!1,ei=null,ni=!1,Dr=null,rh={onError:function(e){Ut=!0,ei=e}};function ah(e,n,t,o,i,r,a,s,l){Ut=!1,ei=null,ih.apply(rh,arguments)}function sh(e,n,t,o,i,r,a,s,l){if(ah.apply(this,arguments),Ut){if(Ut){var u=ei;Ut=!1,ei=null}else throw Error(P(198));ni||(ni=!0,Dr=u)}}function Yn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function xu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Vs(e){if(Yn(e)!==e)throw Error(P(188))}function lh(e){var n=e.alternate;if(!n){if(n=Yn(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,o=n;;){var i=t.return;if(i===null)break;var r=i.alternate;if(r===null){if(o=i.return,o!==null){t=o;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===t)return Vs(i),e;if(r===o)return Vs(i),n;r=r.sibling}throw Error(P(188))}if(t.return!==o.return)t=i,o=r;else{for(var a=!1,s=i.child;s;){if(s===t){a=!0,t=i,o=r;break}if(s===o){a=!0,o=i,t=r;break}s=s.sibling}if(!a){for(s=r.child;s;){if(s===t){a=!0,t=r,o=i;break}if(s===o){a=!0,o=r,t=i;break}s=s.sibling}if(!a)throw Error(P(189))}}if(t.alternate!==o)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function Su(e){return e=lh(e),e!==null?Au(e):null}function Au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Au(e);if(n!==null)return n;e=e.sibling}return null}var Mu=Se.unstable_scheduleCallback,Es=Se.unstable_cancelCallback,uh=Se.unstable_shouldYield,dh=Se.unstable_requestPaint,Z=Se.unstable_now,ch=Se.unstable_getCurrentPriorityLevel,ja=Se.unstable_ImmediatePriority,Tu=Se.unstable_UserBlockingPriority,ti=Se.unstable_NormalPriority,hh=Se.unstable_LowPriority,Cu=Se.unstable_IdlePriority,Mi=null,Be=null;function ph(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(Mi,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:mh,fh=Math.log,gh=Math.LN2;function mh(e){return e>>>=0,e===0?32:31-(fh(e)/gh|0)|0}var So=64,Ao=4194304;function Ot(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function oi(e,n){var t=e.pendingLanes;if(t===0)return 0;var o=0,i=e.suspendedLanes,r=e.pingedLanes,a=t&268435455;if(a!==0){var s=a&~i;s!==0?o=Ot(s):(r&=a,r!==0&&(o=Ot(r)))}else a=t&~i,a!==0?o=Ot(a):r!==0&&(o=Ot(r));if(o===0)return 0;if(n!==0&&n!==o&&!(n&i)&&(i=o&-o,r=n&-n,i>=r||i===16&&(r&4194240)!==0))return n;if(o&4&&(o|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=o;0<n;)t=31-ze(n),i=1<<t,o|=e[t],n&=~i;return o}function yh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wh(e,n){for(var t=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes;0<r;){var a=31-ze(r),s=1<<a,l=i[a];l===-1?(!(s&t)||s&o)&&(i[a]=yh(s,n)):l<=n&&(e.expiredLanes|=s),r&=~s}}function zr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vu(){var e=So;return So<<=1,!(So&4194240)&&(So=64),e}function Ji(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ho(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-ze(n),e[n]=t}function vh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-ze(t),r=1<<i;n[i]=0,o[i]=-1,e[i]=-1,t&=~r}}function La(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var o=31-ze(t),i=1<<o;i&n|e[o]&n&&(e[o]|=n),t&=~i}}var R=0;function Eu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ju,Na,Lu,Nu,Ou,Wr=!1,Mo=[],pn=null,fn=null,gn=null,qt=new Map,$t=new Map,ln=[],kh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function js(e,n){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":qt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":$t.delete(n.pointerId)}}function Mt(e,n,t,o,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:t,eventSystemFlags:o,nativeEvent:r,targetContainers:[i]},n!==null&&(n=fo(n),n!==null&&Na(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function bh(e,n,t,o,i){switch(n){case"focusin":return pn=Mt(pn,e,n,t,o,i),!0;case"dragenter":return fn=Mt(fn,e,n,t,o,i),!0;case"mouseover":return gn=Mt(gn,e,n,t,o,i),!0;case"pointerover":var r=i.pointerId;return qt.set(r,Mt(qt.get(r)||null,e,n,t,o,i)),!0;case"gotpointercapture":return r=i.pointerId,$t.set(r,Mt($t.get(r)||null,e,n,t,o,i)),!0}return!1}function Ru(e){var n=Nn(e.target);if(n!==null){var t=Yn(n);if(t!==null){if(n=t.tag,n===13){if(n=xu(t),n!==null){e.blockedOn=n,Ou(e.priority,function(){Lu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ho(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Fr(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);Rr=o,t.target.dispatchEvent(o),Rr=null}else return n=fo(t),n!==null&&Na(n),e.blockedOn=t,!1;n.shift()}return!0}function Ls(e,n,t){Ho(e)&&t.delete(n)}function Ph(){Wr=!1,pn!==null&&Ho(pn)&&(pn=null),fn!==null&&Ho(fn)&&(fn=null),gn!==null&&Ho(gn)&&(gn=null),qt.forEach(Ls),$t.forEach(Ls)}function Tt(e,n){e.blockedOn===n&&(e.blockedOn=null,Wr||(Wr=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,Ph)))}function Kt(e){function n(i){return Tt(i,e)}if(0<Mo.length){Tt(Mo[0],e);for(var t=1;t<Mo.length;t++){var o=Mo[t];o.blockedOn===e&&(o.blockedOn=null)}}for(pn!==null&&Tt(pn,e),fn!==null&&Tt(fn,e),gn!==null&&Tt(gn,e),qt.forEach(n),$t.forEach(n),t=0;t<ln.length;t++)o=ln[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<ln.length&&(t=ln[0],t.blockedOn===null);)Ru(t),t.blockedOn===null&&ln.shift()}var dt=on.ReactCurrentBatchConfig,ii=!0;function xh(e,n,t,o){var i=R,r=dt.transition;dt.transition=null;try{R=1,Oa(e,n,t,o)}finally{R=i,dt.transition=r}}function Sh(e,n,t,o){var i=R,r=dt.transition;dt.transition=null;try{R=4,Oa(e,n,t,o)}finally{R=i,dt.transition=r}}function Oa(e,n,t,o){if(ii){var i=Fr(e,n,t,o);if(i===null)sr(e,n,o,ri,t),js(e,o);else if(bh(i,e,n,t,o))o.stopPropagation();else if(js(e,o),n&4&&-1<kh.indexOf(e)){for(;i!==null;){var r=fo(i);if(r!==null&&ju(r),r=Fr(e,n,t,o),r===null&&sr(e,n,o,ri,t),r===i)break;i=r}i!==null&&o.stopPropagation()}else sr(e,n,o,null,t)}}var ri=null;function Fr(e,n,t,o){if(ri=null,e=Ea(o),e=Nn(e),e!==null)if(n=Yn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=xu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ri=e,null}function Iu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ch()){case ja:return 1;case Tu:return 4;case ti:case hh:return 16;case Cu:return 536870912;default:return 16}default:return 16}}var dn=null,Ra=null,_o=null;function Uu(){if(_o)return _o;var e,n=Ra,t=n.length,o,i="value"in dn?dn.value:dn.textContent,r=i.length;for(e=0;e<t&&n[e]===i[e];e++);var a=t-e;for(o=1;o<=a&&n[t-o]===i[r-o];o++);return _o=i.slice(e,1<o?1-o:void 0)}function Yo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function To(){return!0}function Ns(){return!1}function Me(e){function n(t,o,i,r,a){this._reactName=t,this._targetInst=i,this.type=o,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?To:Ns,this.isPropagationStopped=Ns,this}return Y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),n}var bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ia=Me(bt),po=Y({},bt,{view:0,detail:0}),Ah=Me(po),Qi,Xi,Ct,Ti=Y({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ua,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ct&&(Ct&&e.type==="mousemove"?(Qi=e.screenX-Ct.screenX,Xi=e.screenY-Ct.screenY):Xi=Qi=0,Ct=e),Qi)},movementY:function(e){return"movementY"in e?e.movementY:Xi}}),Os=Me(Ti),Mh=Y({},Ti,{dataTransfer:0}),Th=Me(Mh),Ch=Y({},po,{relatedTarget:0}),er=Me(Ch),Vh=Y({},bt,{animationName:0,elapsedTime:0,pseudoElement:0}),Eh=Me(Vh),jh=Y({},bt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lh=Me(jh),Nh=Y({},bt,{data:0}),Rs=Me(Nh),Oh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ih={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ih[e])?!!n[e]:!1}function Ua(){return Uh}var Dh=Y({},po,{key:function(e){if(e.key){var n=Oh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ua,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zh=Me(Dh),Wh=Y({},Ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Is=Me(Wh),Fh=Y({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ua}),Hh=Me(Fh),_h=Y({},bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yh=Me(_h),Bh=Y({},Ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zh=Me(Bh),Gh=[9,13,27,32],Da=Xe&&"CompositionEvent"in window,Dt=null;Xe&&"documentMode"in document&&(Dt=document.documentMode);var qh=Xe&&"TextEvent"in window&&!Dt,Du=Xe&&(!Da||Dt&&8<Dt&&11>=Dt),Us=" ",Ds=!1;function zu(e,n){switch(e){case"keyup":return Gh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function $h(e,n){switch(e){case"compositionend":return Wu(n);case"keypress":return n.which!==32?null:(Ds=!0,Us);case"textInput":return e=n.data,e===Us&&Ds?null:e;default:return null}}function Kh(e,n){if(Jn)return e==="compositionend"||!Da&&zu(e,n)?(e=Uu(),_o=Ra=dn=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Du&&n.locale!=="ko"?null:n.data;default:return null}}var Jh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Jh[e.type]:n==="textarea"}function Fu(e,n,t,o){wu(o),n=ai(n,"onChange"),0<n.length&&(t=new Ia("onChange","change",null,t,o),e.push({event:t,listeners:n}))}var zt=null,Jt=null;function Qh(e){Qu(e,0)}function Ci(e){var n=et(e);if(cu(n))return e}function Xh(e,n){if(e==="change")return n}var Hu=!1;if(Xe){var nr;if(Xe){var tr="oninput"in document;if(!tr){var Ws=document.createElement("div");Ws.setAttribute("oninput","return;"),tr=typeof Ws.oninput=="function"}nr=tr}else nr=!1;Hu=nr&&(!document.documentMode||9<document.documentMode)}function Fs(){zt&&(zt.detachEvent("onpropertychange",_u),Jt=zt=null)}function _u(e){if(e.propertyName==="value"&&Ci(Jt)){var n=[];Fu(n,Jt,e,Ea(e)),Pu(Qh,n)}}function ep(e,n,t){e==="focusin"?(Fs(),zt=n,Jt=t,zt.attachEvent("onpropertychange",_u)):e==="focusout"&&Fs()}function np(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ci(Jt)}function tp(e,n){if(e==="click")return Ci(n)}function op(e,n){if(e==="input"||e==="change")return Ci(n)}function ip(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fe=typeof Object.is=="function"?Object.is:ip;function Qt(e,n){if(Fe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var i=t[o];if(!xr.call(n,i)||!Fe(e[i],n[i]))return!1}return!0}function Hs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _s(e,n){var t=Hs(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=n&&o>=n)return{node:t,offset:n-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Hs(t)}}function Yu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Yu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Bu(){for(var e=window,n=Xo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Xo(e.document)}return n}function za(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function rp(e){var n=Bu(),t=e.focusedElem,o=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Yu(t.ownerDocument.documentElement,t)){if(o!==null&&za(t)){if(n=o.start,e=o.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,r=Math.min(o.start,i);o=o.end===void 0?r:Math.min(o.end,i),!e.extend&&r>o&&(i=o,o=r,r=i),i=_s(t,r);var a=_s(t,o);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),r>o?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ap=Xe&&"documentMode"in document&&11>=document.documentMode,Qn=null,Hr=null,Wt=null,_r=!1;function Ys(e,n,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;_r||Qn==null||Qn!==Xo(o)||(o=Qn,"selectionStart"in o&&za(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Wt&&Qt(Wt,o)||(Wt=o,o=ai(Hr,"onSelect"),0<o.length&&(n=new Ia("onSelect","select",null,n,t),e.push({event:n,listeners:o}),n.target=Qn)))}function Co(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Xn={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},or={},Zu={};Xe&&(Zu=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Vi(e){if(or[e])return or[e];if(!Xn[e])return e;var n=Xn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Zu)return or[e]=n[t];return e}var Gu=Vi("animationend"),qu=Vi("animationiteration"),$u=Vi("animationstart"),Ku=Vi("transitionend"),Ju=new Map,Bs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,n){Ju.set(e,n),_n(n,[e])}for(var ir=0;ir<Bs.length;ir++){var rr=Bs[ir],sp=rr.toLowerCase(),lp=rr[0].toUpperCase()+rr.slice(1);Sn(sp,"on"+lp)}Sn(Gu,"onAnimationEnd");Sn(qu,"onAnimationIteration");Sn($u,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(Ku,"onTransitionEnd");pt("onMouseEnter",["mouseout","mouseover"]);pt("onMouseLeave",["mouseout","mouseover"]);pt("onPointerEnter",["pointerout","pointerover"]);pt("onPointerLeave",["pointerout","pointerover"]);_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_n("onBeforeInput",["compositionend","keypress","textInput","paste"]);_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),up=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rt));function Zs(e,n,t){var o=e.type||"unknown-event";e.currentTarget=t,sh(o,n,void 0,e),e.currentTarget=null}function Qu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],i=o.event;o=o.listeners;e:{var r=void 0;if(n)for(var a=o.length-1;0<=a;a--){var s=o[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==r&&i.isPropagationStopped())break e;Zs(i,s,u),r=l}else for(a=0;a<o.length;a++){if(s=o[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==r&&i.isPropagationStopped())break e;Zs(i,s,u),r=l}}}if(ni)throw e=Dr,ni=!1,Dr=null,e}function D(e,n){var t=n[qr];t===void 0&&(t=n[qr]=new Set);var o=e+"__bubble";t.has(o)||(Xu(n,e,2,!1),t.add(o))}function ar(e,n,t){var o=0;n&&(o|=4),Xu(t,e,o,n)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function Xt(e){if(!e[Vo]){e[Vo]=!0,au.forEach(function(t){t!=="selectionchange"&&(up.has(t)||ar(t,!1,e),ar(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vo]||(n[Vo]=!0,ar("selectionchange",!1,n))}}function Xu(e,n,t,o){switch(Iu(n)){case 1:var i=xh;break;case 4:i=Sh;break;default:i=Oa}t=i.bind(null,n,t,e),i=void 0,!Ur||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function sr(e,n,t,o,i){var r=o;if(!(n&1)&&!(n&2)&&o!==null)e:for(;;){if(o===null)return;var a=o.tag;if(a===3||a===4){var s=o.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=o.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Nn(s),a===null)return;if(l=a.tag,l===5||l===6){o=r=a;continue e}s=s.parentNode}}o=o.return}Pu(function(){var u=r,f=Ea(t),c=[];e:{var m=Ju.get(e);if(m!==void 0){var y=Ia,w=e;switch(e){case"keypress":if(Yo(t)===0)break e;case"keydown":case"keyup":y=zh;break;case"focusin":w="focus",y=er;break;case"focusout":w="blur",y=er;break;case"beforeblur":case"afterblur":y=er;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Hh;break;case Gu:case qu:case $u:y=Eh;break;case Ku:y=Yh;break;case"scroll":y=Ah;break;case"wheel":y=Zh;break;case"copy":case"cut":case"paste":y=Lh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Is}var k=(n&4)!==0,A=!k&&e==="scroll",p=k?m!==null?m+"Capture":null:m;k=[];for(var d=u,g;d!==null;){g=d;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,p!==null&&(v=Gt(d,p),v!=null&&k.push(eo(d,v,g)))),A)break;d=d.return}0<k.length&&(m=new y(m,w,null,t,f),c.push({event:m,listeners:k}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&t!==Rr&&(w=t.relatedTarget||t.fromElement)&&(Nn(w)||w[en]))break e;if((y||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,y?(w=t.relatedTarget||t.toElement,y=u,w=w?Nn(w):null,w!==null&&(A=Yn(w),w!==A||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(k=Os,v="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=Is,v="onPointerLeave",p="onPointerEnter",d="pointer"),A=y==null?m:et(y),g=w==null?m:et(w),m=new k(v,d+"leave",y,t,f),m.target=A,m.relatedTarget=g,v=null,Nn(f)===u&&(k=new k(p,d+"enter",w,t,f),k.target=g,k.relatedTarget=A,v=k),A=v,y&&w)n:{for(k=y,p=w,d=0,g=k;g;g=qn(g))d++;for(g=0,v=p;v;v=qn(v))g++;for(;0<d-g;)k=qn(k),d--;for(;0<g-d;)p=qn(p),g--;for(;d--;){if(k===p||p!==null&&k===p.alternate)break n;k=qn(k),p=qn(p)}k=null}else k=null;y!==null&&Gs(c,m,y,k,!1),w!==null&&A!==null&&Gs(c,A,w,k,!0)}}e:{if(m=u?et(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var S=Xh;else if(zs(m))if(Hu)S=op;else{S=np;var x=ep}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=tp);if(S&&(S=S(e,u))){Fu(c,S,t,f);break e}x&&x(e,m,u),e==="focusout"&&(x=m._wrapperState)&&x.controlled&&m.type==="number"&&Er(m,"number",m.value)}switch(x=u?et(u):window,e){case"focusin":(zs(x)||x.contentEditable==="true")&&(Qn=x,Hr=u,Wt=null);break;case"focusout":Wt=Hr=Qn=null;break;case"mousedown":_r=!0;break;case"contextmenu":case"mouseup":case"dragend":_r=!1,Ys(c,t,f);break;case"selectionchange":if(ap)break;case"keydown":case"keyup":Ys(c,t,f)}var C;if(Da)e:{switch(e){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Jn?zu(e,t)&&(V="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(V="onCompositionStart");V&&(Du&&t.locale!=="ko"&&(Jn||V!=="onCompositionStart"?V==="onCompositionEnd"&&Jn&&(C=Uu()):(dn=f,Ra="value"in dn?dn.value:dn.textContent,Jn=!0)),x=ai(u,V),0<x.length&&(V=new Rs(V,e,null,t,f),c.push({event:V,listeners:x}),C?V.data=C:(C=Wu(t),C!==null&&(V.data=C)))),(C=qh?$h(e,t):Kh(e,t))&&(u=ai(u,"onBeforeInput"),0<u.length&&(f=new Rs("onBeforeInput","beforeinput",null,t,f),c.push({event:f,listeners:u}),f.data=C))}Qu(c,n)})}function eo(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ai(e,n){for(var t=n+"Capture",o=[];e!==null;){var i=e,r=i.stateNode;i.tag===5&&r!==null&&(i=r,r=Gt(e,t),r!=null&&o.unshift(eo(e,r,i)),r=Gt(e,n),r!=null&&o.push(eo(e,r,i))),e=e.return}return o}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gs(e,n,t,o,i){for(var r=n._reactName,a=[];t!==null&&t!==o;){var s=t,l=s.alternate,u=s.stateNode;if(l!==null&&l===o)break;s.tag===5&&u!==null&&(s=u,i?(l=Gt(t,r),l!=null&&a.unshift(eo(t,l,s))):i||(l=Gt(t,r),l!=null&&a.push(eo(t,l,s)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var dp=/\r\n?/g,cp=/\u0000|\uFFFD/g;function qs(e){return(typeof e=="string"?e:""+e).replace(dp,`
`).replace(cp,"")}function Eo(e,n,t){if(n=qs(n),qs(e)!==n&&t)throw Error(P(425))}function si(){}var Yr=null,Br=null;function Zr(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gr=typeof setTimeout=="function"?setTimeout:void 0,hp=typeof clearTimeout=="function"?clearTimeout:void 0,$s=typeof Promise=="function"?Promise:void 0,pp=typeof queueMicrotask=="function"?queueMicrotask:typeof $s<"u"?function(e){return $s.resolve(null).then(e).catch(fp)}:Gr;function fp(e){setTimeout(function(){throw e})}function lr(e,n){var t=n,o=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(o===0){e.removeChild(i),Kt(n);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=i}while(t);Kt(n)}function mn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ks(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Pt=Math.random().toString(36).slice(2),Ye="__reactFiber$"+Pt,no="__reactProps$"+Pt,en="__reactContainer$"+Pt,qr="__reactEvents$"+Pt,gp="__reactListeners$"+Pt,mp="__reactHandles$"+Pt;function Nn(e){var n=e[Ye];if(n)return n;for(var t=e.parentNode;t;){if(n=t[en]||t[Ye]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ks(e);e!==null;){if(t=e[Ye])return t;e=Ks(e)}return n}e=t,t=e.parentNode}return null}function fo(e){return e=e[Ye]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function et(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Ei(e){return e[no]||null}var $r=[],nt=-1;function An(e){return{current:e}}function z(e){0>nt||(e.current=$r[nt],$r[nt]=null,nt--)}function U(e,n){nt++,$r[nt]=e.current,e.current=n}var xn={},ue=An(xn),we=An(!1),Dn=xn;function ft(e,n){var t=e.type.contextTypes;if(!t)return xn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var i={},r;for(r in t)i[r]=n[r];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function li(){z(we),z(ue)}function Js(e,n,t){if(ue.current!==xn)throw Error(P(168));U(ue,n),U(we,t)}function ed(e,n,t){var o=e.stateNode;if(n=n.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var i in o)if(!(i in n))throw Error(P(108,eh(e)||"Unknown",i));return Y({},t,o)}function ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xn,Dn=ue.current,U(ue,e),U(we,we.current),!0}function Qs(e,n,t){var o=e.stateNode;if(!o)throw Error(P(169));t?(e=ed(e,n,Dn),o.__reactInternalMemoizedMergedChildContext=e,z(we),z(ue),U(ue,e)):z(we),U(we,t)}var $e=null,ji=!1,ur=!1;function nd(e){$e===null?$e=[e]:$e.push(e)}function yp(e){ji=!0,nd(e)}function Mn(){if(!ur&&$e!==null){ur=!0;var e=0,n=R;try{var t=$e;for(R=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}$e=null,ji=!1}catch(i){throw $e!==null&&($e=$e.slice(e+1)),Mu(ja,Mn),i}finally{R=n,ur=!1}}return null}var tt=[],ot=0,di=null,ci=0,Te=[],Ce=0,zn=null,Ke=1,Je="";function jn(e,n){tt[ot++]=ci,tt[ot++]=di,di=e,ci=n}function td(e,n,t){Te[Ce++]=Ke,Te[Ce++]=Je,Te[Ce++]=zn,zn=e;var o=Ke;e=Je;var i=32-ze(o)-1;o&=~(1<<i),t+=1;var r=32-ze(n)+i;if(30<r){var a=i-i%5;r=(o&(1<<a)-1).toString(32),o>>=a,i-=a,Ke=1<<32-ze(n)+i|t<<i|o,Je=r+e}else Ke=1<<r|t<<i|o,Je=e}function Wa(e){e.return!==null&&(jn(e,1),td(e,1,0))}function Fa(e){for(;e===di;)di=tt[--ot],tt[ot]=null,ci=tt[--ot],tt[ot]=null;for(;e===zn;)zn=Te[--Ce],Te[Ce]=null,Je=Te[--Ce],Te[Ce]=null,Ke=Te[--Ce],Te[Ce]=null}var xe=null,Pe=null,W=!1,De=null;function od(e,n){var t=Ve(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Xs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,xe=e,Pe=mn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,xe=e,Pe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=zn!==null?{id:Ke,overflow:Je}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ve(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,xe=e,Pe=null,!0):!1;default:return!1}}function Kr(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jr(e){if(W){var n=Pe;if(n){var t=n;if(!Xs(e,n)){if(Kr(e))throw Error(P(418));n=mn(t.nextSibling);var o=xe;n&&Xs(e,n)?od(o,t):(e.flags=e.flags&-4097|2,W=!1,xe=e)}}else{if(Kr(e))throw Error(P(418));e.flags=e.flags&-4097|2,W=!1,xe=e}}}function el(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function jo(e){if(e!==xe)return!1;if(!W)return el(e),W=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Zr(e.type,e.memoizedProps)),n&&(n=Pe)){if(Kr(e))throw id(),Error(P(418));for(;n;)od(e,n),n=mn(n.nextSibling)}if(el(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Pe=mn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Pe=null}}else Pe=xe?mn(e.stateNode.nextSibling):null;return!0}function id(){for(var e=Pe;e;)e=mn(e.nextSibling)}function gt(){Pe=xe=null,W=!1}function Ha(e){De===null?De=[e]:De.push(e)}var wp=on.ReactCurrentBatchConfig;function Vt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var o=t.stateNode}if(!o)throw Error(P(147,e));var i=o,r=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===r?n.ref:(n=function(a){var s=i.refs;a===null?delete s[r]:s[r]=a},n._stringRef=r,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function Lo(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function nl(e){var n=e._init;return n(e._payload)}function rd(e){function n(p,d){if(e){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function t(p,d){if(!e)return null;for(;d!==null;)n(p,d),d=d.sibling;return null}function o(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=kn(p,d),p.index=0,p.sibling=null,p}function r(p,d,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,g,v){return d===null||d.tag!==6?(d=mr(g,p.mode,v),d.return=p,d):(d=i(d,g),d.return=p,d)}function l(p,d,g,v){var S=g.type;return S===Kn?f(p,d,g.props.children,v,g.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===an&&nl(S)===d.type)?(v=i(d,g.props),v.ref=Vt(p,d,g),v.return=p,v):(v=Jo(g.type,g.key,g.props,null,p.mode,v),v.ref=Vt(p,d,g),v.return=p,v)}function u(p,d,g,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=yr(g,p.mode,v),d.return=p,d):(d=i(d,g.children||[]),d.return=p,d)}function f(p,d,g,v,S){return d===null||d.tag!==7?(d=Un(g,p.mode,v,S),d.return=p,d):(d=i(d,g),d.return=p,d)}function c(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=mr(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case bo:return g=Jo(d.type,d.key,d.props,null,p.mode,g),g.ref=Vt(p,null,d),g.return=p,g;case $n:return d=yr(d,p.mode,g),d.return=p,d;case an:var v=d._init;return c(p,v(d._payload),g)}if(Nt(d)||St(d))return d=Un(d,p.mode,g,null),d.return=p,d;Lo(p,d)}return null}function m(p,d,g,v){var S=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:s(p,d,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case bo:return g.key===S?l(p,d,g,v):null;case $n:return g.key===S?u(p,d,g,v):null;case an:return S=g._init,m(p,d,S(g._payload),v)}if(Nt(g)||St(g))return S!==null?null:f(p,d,g,v,null);Lo(p,g)}return null}function y(p,d,g,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(g)||null,s(d,p,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case bo:return p=p.get(v.key===null?g:v.key)||null,l(d,p,v,S);case $n:return p=p.get(v.key===null?g:v.key)||null,u(d,p,v,S);case an:var x=v._init;return y(p,d,g,x(v._payload),S)}if(Nt(v)||St(v))return p=p.get(g)||null,f(d,p,v,S,null);Lo(d,v)}return null}function w(p,d,g,v){for(var S=null,x=null,C=d,V=d=0,I=null;C!==null&&V<g.length;V++){C.index>V?(I=C,C=null):I=C.sibling;var L=m(p,C,g[V],v);if(L===null){C===null&&(C=I);break}e&&C&&L.alternate===null&&n(p,C),d=r(L,d,V),x===null?S=L:x.sibling=L,x=L,C=I}if(V===g.length)return t(p,C),W&&jn(p,V),S;if(C===null){for(;V<g.length;V++)C=c(p,g[V],v),C!==null&&(d=r(C,d,V),x===null?S=C:x.sibling=C,x=C);return W&&jn(p,V),S}for(C=o(p,C);V<g.length;V++)I=y(C,p,V,g[V],v),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?V:I.key),d=r(I,d,V),x===null?S=I:x.sibling=I,x=I);return e&&C.forEach(function($){return n(p,$)}),W&&jn(p,V),S}function k(p,d,g,v){var S=St(g);if(typeof S!="function")throw Error(P(150));if(g=S.call(g),g==null)throw Error(P(151));for(var x=S=null,C=d,V=d=0,I=null,L=g.next();C!==null&&!L.done;V++,L=g.next()){C.index>V?(I=C,C=null):I=C.sibling;var $=m(p,C,L.value,v);if($===null){C===null&&(C=I);break}e&&C&&$.alternate===null&&n(p,C),d=r($,d,V),x===null?S=$:x.sibling=$,x=$,C=I}if(L.done)return t(p,C),W&&jn(p,V),S;if(C===null){for(;!L.done;V++,L=g.next())L=c(p,L.value,v),L!==null&&(d=r(L,d,V),x===null?S=L:x.sibling=L,x=L);return W&&jn(p,V),S}for(C=o(p,C);!L.done;V++,L=g.next())L=y(C,p,V,L.value,v),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?V:L.key),d=r(L,d,V),x===null?S=L:x.sibling=L,x=L);return e&&C.forEach(function(K){return n(p,K)}),W&&jn(p,V),S}function A(p,d,g,v){if(typeof g=="object"&&g!==null&&g.type===Kn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case bo:e:{for(var S=g.key,x=d;x!==null;){if(x.key===S){if(S=g.type,S===Kn){if(x.tag===7){t(p,x.sibling),d=i(x,g.props.children),d.return=p,p=d;break e}}else if(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===an&&nl(S)===x.type){t(p,x.sibling),d=i(x,g.props),d.ref=Vt(p,x,g),d.return=p,p=d;break e}t(p,x);break}else n(p,x);x=x.sibling}g.type===Kn?(d=Un(g.props.children,p.mode,v,g.key),d.return=p,p=d):(v=Jo(g.type,g.key,g.props,null,p.mode,v),v.ref=Vt(p,d,g),v.return=p,p=v)}return a(p);case $n:e:{for(x=g.key;d!==null;){if(d.key===x)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){t(p,d.sibling),d=i(d,g.children||[]),d.return=p,p=d;break e}else{t(p,d);break}else n(p,d);d=d.sibling}d=yr(g,p.mode,v),d.return=p,p=d}return a(p);case an:return x=g._init,A(p,d,x(g._payload),v)}if(Nt(g))return w(p,d,g,v);if(St(g))return k(p,d,g,v);Lo(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(t(p,d.sibling),d=i(d,g),d.return=p,p=d):(t(p,d),d=mr(g,p.mode,v),d.return=p,p=d),a(p)):t(p,d)}return A}var mt=rd(!0),ad=rd(!1),hi=An(null),pi=null,it=null,_a=null;function Ya(){_a=it=pi=null}function Ba(e){var n=hi.current;z(hi),e._currentValue=n}function Qr(e,n,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===t)break;e=e.return}}function ct(e,n){pi=e,_a=it=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(me=!0),e.firstContext=null)}function je(e){var n=e._currentValue;if(_a!==e)if(e={context:e,memoizedValue:n,next:null},it===null){if(pi===null)throw Error(P(308));it=e,pi.dependencies={lanes:0,firstContext:e}}else it=it.next=e;return n}var On=null;function Za(e){On===null?On=[e]:On.push(e)}function sd(e,n,t,o){var i=n.interleaved;return i===null?(t.next=t,Za(n)):(t.next=i.next,i.next=t),n.interleaved=t,nn(e,o)}function nn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var sn=!1;function Ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ld(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function yn(e,n,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,O&2){var i=o.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),o.pending=n,nn(e,t)}return i=o.interleaved,i===null?(n.next=n,Za(o)):(n.next=i.next,i.next=n),o.interleaved=n,nn(e,t)}function Bo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,La(e,t)}}function tl(e,n){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var i=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};r===null?i=r=a:r=r.next=a,t=t.next}while(t!==null);r===null?i=r=n:r=r.next=n}else i=r=n;t={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function fi(e,n,t,o){var i=e.updateQueue;sn=!1;var r=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?r=u:a.next=u,a=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=l))}if(r!==null){var c=i.baseState;a=0,f=u=l=null,s=r;do{var m=s.lane,y=s.eventTime;if((o&m)===m){f!==null&&(f=f.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(m=n,y=t,k.tag){case 1:if(w=k.payload,typeof w=="function"){c=w.call(y,c,m);break e}c=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(y,c,m):w,m==null)break e;c=Y({},c,m);break e;case 2:sn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[s]:m.push(s))}else y={eventTime:y,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=y,l=c):f=f.next=y,a|=m;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else r===null&&(i.shared.lanes=0);Fn|=a,e.lanes=a,e.memoizedState=c}}function ol(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var o=e[n],i=o.callback;if(i!==null){if(o.callback=null,o=t,typeof i!="function")throw Error(P(191,i));i.call(o)}}}var go={},Ze=An(go),to=An(go),oo=An(go);function Rn(e){if(e===go)throw Error(P(174));return e}function qa(e,n){switch(U(oo,n),U(to,e),U(Ze,go),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Lr(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Lr(n,e)}z(Ze),U(Ze,n)}function yt(){z(Ze),z(to),z(oo)}function ud(e){Rn(oo.current);var n=Rn(Ze.current),t=Lr(n,e.type);n!==t&&(U(to,e),U(Ze,t))}function $a(e){to.current===e&&(z(Ze),z(to))}var H=An(0);function gi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var dr=[];function Ka(){for(var e=0;e<dr.length;e++)dr[e]._workInProgressVersionPrimary=null;dr.length=0}var Zo=on.ReactCurrentDispatcher,cr=on.ReactCurrentBatchConfig,Wn=0,_=null,J=null,ne=null,mi=!1,Ft=!1,io=0,vp=0;function ae(){throw Error(P(321))}function Ja(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Fe(e[t],n[t]))return!1;return!0}function Qa(e,n,t,o,i,r){if(Wn=r,_=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Zo.current=e===null||e.memoizedState===null?xp:Sp,e=t(o,i),Ft){r=0;do{if(Ft=!1,io=0,25<=r)throw Error(P(301));r+=1,ne=J=null,n.updateQueue=null,Zo.current=Ap,e=t(o,i)}while(Ft)}if(Zo.current=yi,n=J!==null&&J.next!==null,Wn=0,ne=J=_=null,mi=!1,n)throw Error(P(300));return e}function Xa(){var e=io!==0;return io=0,e}function _e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?_.memoizedState=ne=e:ne=ne.next=e,ne}function Le(){if(J===null){var e=_.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=ne===null?_.memoizedState:ne.next;if(n!==null)ne=n,J=e;else{if(e===null)throw Error(P(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ne===null?_.memoizedState=ne=e:ne=ne.next=e}return ne}function ro(e,n){return typeof n=="function"?n(e):n}function hr(e){var n=Le(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var o=J,i=o.baseQueue,r=t.pending;if(r!==null){if(i!==null){var a=i.next;i.next=r.next,r.next=a}o.baseQueue=i=r,t.pending=null}if(i!==null){r=i.next,o=o.baseState;var s=a=null,l=null,u=r;do{var f=u.lane;if((Wn&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),o=u.hasEagerState?u.eagerState:e(o,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=c,a=o):l=l.next=c,_.lanes|=f,Fn|=f}u=u.next}while(u!==null&&u!==r);l===null?a=o:l.next=s,Fe(o,n.memoizedState)||(me=!0),n.memoizedState=o,n.baseState=a,n.baseQueue=l,t.lastRenderedState=o}if(e=t.interleaved,e!==null){i=e;do r=i.lane,_.lanes|=r,Fn|=r,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function pr(e){var n=Le(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var o=t.dispatch,i=t.pending,r=n.memoizedState;if(i!==null){t.pending=null;var a=i=i.next;do r=e(r,a.action),a=a.next;while(a!==i);Fe(r,n.memoizedState)||(me=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),t.lastRenderedState=r}return[r,o]}function dd(){}function cd(e,n){var t=_,o=Le(),i=n(),r=!Fe(o.memoizedState,i);if(r&&(o.memoizedState=i,me=!0),o=o.queue,es(fd.bind(null,t,o,e),[e]),o.getSnapshot!==n||r||ne!==null&&ne.memoizedState.tag&1){if(t.flags|=2048,ao(9,pd.bind(null,t,o,i,n),void 0,null),te===null)throw Error(P(349));Wn&30||hd(t,n,i)}return i}function hd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=_.updateQueue,n===null?(n={lastEffect:null,stores:null},_.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function pd(e,n,t,o){n.value=t,n.getSnapshot=o,gd(n)&&md(e)}function fd(e,n,t){return t(function(){gd(n)&&md(e)})}function gd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Fe(e,t)}catch{return!0}}function md(e){var n=nn(e,1);n!==null&&We(n,e,1,-1)}function il(e){var n=_e();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:e},n.queue=e,e=e.dispatch=Pp.bind(null,_,e),[n.memoizedState,e]}function ao(e,n,t,o){return e={tag:e,create:n,destroy:t,deps:o,next:null},n=_.updateQueue,n===null?(n={lastEffect:null,stores:null},_.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,n.lastEffect=e)),e}function yd(){return Le().memoizedState}function Go(e,n,t,o){var i=_e();_.flags|=e,i.memoizedState=ao(1|n,t,void 0,o===void 0?null:o)}function Li(e,n,t,o){var i=Le();o=o===void 0?null:o;var r=void 0;if(J!==null){var a=J.memoizedState;if(r=a.destroy,o!==null&&Ja(o,a.deps)){i.memoizedState=ao(n,t,r,o);return}}_.flags|=e,i.memoizedState=ao(1|n,t,r,o)}function rl(e,n){return Go(8390656,8,e,n)}function es(e,n){return Li(2048,8,e,n)}function wd(e,n){return Li(4,2,e,n)}function vd(e,n){return Li(4,4,e,n)}function kd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function bd(e,n,t){return t=t!=null?t.concat([e]):null,Li(4,4,kd.bind(null,n,e),t)}function ns(){}function Pd(e,n){var t=Le();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&Ja(n,o[1])?o[0]:(t.memoizedState=[e,n],e)}function xd(e,n){var t=Le();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&Ja(n,o[1])?o[0]:(e=e(),t.memoizedState=[e,n],e)}function Sd(e,n,t){return Wn&21?(Fe(t,n)||(t=Vu(),_.lanes|=t,Fn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=t)}function kp(e,n){var t=R;R=t!==0&&4>t?t:4,e(!0);var o=cr.transition;cr.transition={};try{e(!1),n()}finally{R=t,cr.transition=o}}function Ad(){return Le().memoizedState}function bp(e,n,t){var o=vn(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},Md(e))Td(n,t);else if(t=sd(e,n,t,o),t!==null){var i=he();We(t,e,o,i),Cd(t,n,o)}}function Pp(e,n,t){var o=vn(e),i={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(Md(e))Td(n,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var a=n.lastRenderedState,s=r(a,t);if(i.hasEagerState=!0,i.eagerState=s,Fe(s,a)){var l=n.interleaved;l===null?(i.next=i,Za(n)):(i.next=l.next,l.next=i),n.interleaved=i;return}}catch{}finally{}t=sd(e,n,i,o),t!==null&&(i=he(),We(t,e,o,i),Cd(t,n,o))}}function Md(e){var n=e.alternate;return e===_||n!==null&&n===_}function Td(e,n){Ft=mi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Cd(e,n,t){if(t&4194240){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,La(e,t)}}var yi={readContext:je,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},xp={readContext:je,useCallback:function(e,n){return _e().memoizedState=[e,n===void 0?null:n],e},useContext:je,useEffect:rl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Go(4194308,4,kd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Go(4194308,4,e,n)},useInsertionEffect:function(e,n){return Go(4,2,e,n)},useMemo:function(e,n){var t=_e();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var o=_e();return n=t!==void 0?t(n):n,o.memoizedState=o.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=bp.bind(null,_,e),[o.memoizedState,e]},useRef:function(e){var n=_e();return e={current:e},n.memoizedState=e},useState:il,useDebugValue:ns,useDeferredValue:function(e){return _e().memoizedState=e},useTransition:function(){var e=il(!1),n=e[0];return e=kp.bind(null,e[1]),_e().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var o=_,i=_e();if(W){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),te===null)throw Error(P(349));Wn&30||hd(o,n,t)}i.memoizedState=t;var r={value:t,getSnapshot:n};return i.queue=r,rl(fd.bind(null,o,r,e),[e]),o.flags|=2048,ao(9,pd.bind(null,o,r,t,n),void 0,null),t},useId:function(){var e=_e(),n=te.identifierPrefix;if(W){var t=Je,o=Ke;t=(o&~(1<<32-ze(o)-1)).toString(32)+t,n=":"+n+"R"+t,t=io++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=vp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Sp={readContext:je,useCallback:Pd,useContext:je,useEffect:es,useImperativeHandle:bd,useInsertionEffect:wd,useLayoutEffect:vd,useMemo:xd,useReducer:hr,useRef:yd,useState:function(){return hr(ro)},useDebugValue:ns,useDeferredValue:function(e){var n=Le();return Sd(n,J.memoizedState,e)},useTransition:function(){var e=hr(ro)[0],n=Le().memoizedState;return[e,n]},useMutableSource:dd,useSyncExternalStore:cd,useId:Ad,unstable_isNewReconciler:!1},Ap={readContext:je,useCallback:Pd,useContext:je,useEffect:es,useImperativeHandle:bd,useInsertionEffect:wd,useLayoutEffect:vd,useMemo:xd,useReducer:pr,useRef:yd,useState:function(){return pr(ro)},useDebugValue:ns,useDeferredValue:function(e){var n=Le();return J===null?n.memoizedState=e:Sd(n,J.memoizedState,e)},useTransition:function(){var e=pr(ro)[0],n=Le().memoizedState;return[e,n]},useMutableSource:dd,useSyncExternalStore:cd,useId:Ad,unstable_isNewReconciler:!1};function Ie(e,n){if(e&&e.defaultProps){n=Y({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Xr(e,n,t,o){n=e.memoizedState,t=t(o,n),t=t==null?n:Y({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ni={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var o=he(),i=vn(e),r=Qe(o,i);r.payload=n,t!=null&&(r.callback=t),n=yn(e,r,i),n!==null&&(We(n,e,i,o),Bo(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var o=he(),i=vn(e),r=Qe(o,i);r.tag=1,r.payload=n,t!=null&&(r.callback=t),n=yn(e,r,i),n!==null&&(We(n,e,i,o),Bo(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=he(),o=vn(e),i=Qe(t,o);i.tag=2,n!=null&&(i.callback=n),n=yn(e,i,o),n!==null&&(We(n,e,o,t),Bo(n,e,o))}};function al(e,n,t,o,i,r,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,a):n.prototype&&n.prototype.isPureReactComponent?!Qt(t,o)||!Qt(i,r):!0}function Vd(e,n,t){var o=!1,i=xn,r=n.contextType;return typeof r=="object"&&r!==null?r=je(r):(i=ve(n)?Dn:ue.current,o=n.contextTypes,r=(o=o!=null)?ft(e,i):xn),n=new n(t,r),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ni,e.stateNode=n,n._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=r),n}function sl(e,n,t,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,o),n.state!==e&&Ni.enqueueReplaceState(n,n.state,null)}function ea(e,n,t,o){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Ga(e);var r=n.contextType;typeof r=="object"&&r!==null?i.context=je(r):(r=ve(n)?Dn:ue.current,i.context=ft(e,r)),i.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Xr(e,n,r,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ni.enqueueReplaceState(i,i.state,null),fi(e,t,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function wt(e,n){try{var t="",o=n;do t+=Xc(o),o=o.return;while(o);var i=t}catch(r){i=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:n,stack:i,digest:null}}function fr(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function na(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Mp=typeof WeakMap=="function"?WeakMap:Map;function Ed(e,n,t){t=Qe(-1,t),t.tag=3,t.payload={element:null};var o=n.value;return t.callback=function(){vi||(vi=!0,ca=o),na(e,n)},t}function jd(e,n,t){t=Qe(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=n.value;t.payload=function(){return o(i)},t.callback=function(){na(e,n)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){na(e,n),typeof o!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function ll(e,n,t){var o=e.pingCache;if(o===null){o=e.pingCache=new Mp;var i=new Set;o.set(n,i)}else i=o.get(n),i===void 0&&(i=new Set,o.set(n,i));i.has(t)||(i.add(t),e=Wp.bind(null,e,n,t),n.then(e,e))}function ul(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function dl(e,n,t,o,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Qe(-1,1),n.tag=2,yn(t,n,1))),t.lanes|=1),e)}var Tp=on.ReactCurrentOwner,me=!1;function ce(e,n,t,o){n.child=e===null?ad(n,null,t,o):mt(n,e.child,t,o)}function cl(e,n,t,o,i){t=t.render;var r=n.ref;return ct(n,i),o=Qa(e,n,t,o,r,i),t=Xa(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,tn(e,n,i)):(W&&t&&Wa(n),n.flags|=1,ce(e,n,o,i),n.child)}function hl(e,n,t,o,i){if(e===null){var r=t.type;return typeof r=="function"&&!us(r)&&r.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=r,Ld(e,n,r,o,i)):(e=Jo(t.type,null,o,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!(e.lanes&i)){var a=r.memoizedProps;if(t=t.compare,t=t!==null?t:Qt,t(a,o)&&e.ref===n.ref)return tn(e,n,i)}return n.flags|=1,e=kn(r,o),e.ref=n.ref,e.return=n,n.child=e}function Ld(e,n,t,o,i){if(e!==null){var r=e.memoizedProps;if(Qt(r,o)&&e.ref===n.ref)if(me=!1,n.pendingProps=o=r,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return n.lanes=e.lanes,tn(e,n,i)}return ta(e,n,t,o,i)}function Nd(e,n,t){var o=n.pendingProps,i=o.children,r=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(at,be),be|=t;else{if(!(t&1073741824))return e=r!==null?r.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,U(at,be),be|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=r!==null?r.baseLanes:t,U(at,be),be|=o}else r!==null?(o=r.baseLanes|t,n.memoizedState=null):o=t,U(at,be),be|=o;return ce(e,n,i,t),n.child}function Od(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ta(e,n,t,o,i){var r=ve(t)?Dn:ue.current;return r=ft(n,r),ct(n,i),t=Qa(e,n,t,o,r,i),o=Xa(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,tn(e,n,i)):(W&&o&&Wa(n),n.flags|=1,ce(e,n,t,i),n.child)}function pl(e,n,t,o,i){if(ve(t)){var r=!0;ui(n)}else r=!1;if(ct(n,i),n.stateNode===null)qo(e,n),Vd(n,t,o),ea(n,t,o,i),o=!0;else if(e===null){var a=n.stateNode,s=n.memoizedProps;a.props=s;var l=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=je(u):(u=ve(t)?Dn:ue.current,u=ft(n,u));var f=t.getDerivedStateFromProps,c=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==o||l!==u)&&sl(n,a,o,u),sn=!1;var m=n.memoizedState;a.state=m,fi(n,o,a,i),l=n.memoizedState,s!==o||m!==l||we.current||sn?(typeof f=="function"&&(Xr(n,t,f,o),l=n.memoizedState),(s=sn||al(n,t,s,o,m,l,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=l),a.props=o,a.state=l,a.context=u,o=s):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{a=n.stateNode,ld(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:Ie(n.type,s),a.props=u,c=n.pendingProps,m=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=je(l):(l=ve(t)?Dn:ue.current,l=ft(n,l));var y=t.getDerivedStateFromProps;(f=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==c||m!==l)&&sl(n,a,o,l),sn=!1,m=n.memoizedState,a.state=m,fi(n,o,a,i);var w=n.memoizedState;s!==c||m!==w||we.current||sn?(typeof y=="function"&&(Xr(n,t,y,o),w=n.memoizedState),(u=sn||al(n,t,u,o,m,w,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(o,w,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(o,w,l)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=w),a.props=o,a.state=w,a.context=l,o=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),o=!1)}return oa(e,n,t,o,r,i)}function oa(e,n,t,o,i,r){Od(e,n);var a=(n.flags&128)!==0;if(!o&&!a)return i&&Qs(n,t,!1),tn(e,n,r);o=n.stateNode,Tp.current=n;var s=a&&typeof t.getDerivedStateFromError!="function"?null:o.render();return n.flags|=1,e!==null&&a?(n.child=mt(n,e.child,null,r),n.child=mt(n,null,s,r)):ce(e,n,s,r),n.memoizedState=o.state,i&&Qs(n,t,!0),n.child}function Rd(e){var n=e.stateNode;n.pendingContext?Js(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Js(e,n.context,!1),qa(e,n.containerInfo)}function fl(e,n,t,o,i){return gt(),Ha(i),n.flags|=256,ce(e,n,t,o),n.child}var ia={dehydrated:null,treeContext:null,retryLane:0};function ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function Id(e,n,t){var o=n.pendingProps,i=H.current,r=!1,a=(n.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(r=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(H,i&1),e===null)return Jr(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=o.children,e=o.fallback,r?(o=n.mode,r=n.child,a={mode:"hidden",children:a},!(o&1)&&r!==null?(r.childLanes=0,r.pendingProps=a):r=Ii(a,o,0,null),e=Un(e,o,t,null),r.return=n,e.return=n,r.sibling=e,n.child=r,n.child.memoizedState=ra(t),n.memoizedState=ia,e):ts(n,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Cp(e,n,a,o,s,i,t);if(r){r=o.fallback,a=n.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:o.children};return!(a&1)&&n.child!==i?(o=n.child,o.childLanes=0,o.pendingProps=l,n.deletions=null):(o=kn(i,l),o.subtreeFlags=i.subtreeFlags&14680064),s!==null?r=kn(s,r):(r=Un(r,a,t,null),r.flags|=2),r.return=n,o.return=n,o.sibling=r,n.child=o,o=r,r=n.child,a=e.child.memoizedState,a=a===null?ra(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},r.memoizedState=a,r.childLanes=e.childLanes&~t,n.memoizedState=ia,o}return r=e.child,e=r.sibling,o=kn(r,{mode:"visible",children:o.children}),!(n.mode&1)&&(o.lanes=t),o.return=n,o.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=o,n.memoizedState=null,o}function ts(e,n){return n=Ii({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function No(e,n,t,o){return o!==null&&Ha(o),mt(n,e.child,null,t),e=ts(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Cp(e,n,t,o,i,r,a){if(t)return n.flags&256?(n.flags&=-257,o=fr(Error(P(422))),No(e,n,a,o)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(r=o.fallback,i=n.mode,o=Ii({mode:"visible",children:o.children},i,0,null),r=Un(r,i,a,null),r.flags|=2,o.return=n,r.return=n,o.sibling=r,n.child=o,n.mode&1&&mt(n,e.child,null,a),n.child.memoizedState=ra(a),n.memoizedState=ia,r);if(!(n.mode&1))return No(e,n,a,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var s=o.dgst;return o=s,r=Error(P(419)),o=fr(r,o,void 0),No(e,n,a,o)}if(s=(a&e.childLanes)!==0,me||s){if(o=te,o!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|a)?0:i,i!==0&&i!==r.retryLane&&(r.retryLane=i,nn(e,i),We(o,e,i,-1))}return ls(),o=fr(Error(P(421))),No(e,n,a,o)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Fp.bind(null,e),i._reactRetry=n,null):(e=r.treeContext,Pe=mn(i.nextSibling),xe=n,W=!0,De=null,e!==null&&(Te[Ce++]=Ke,Te[Ce++]=Je,Te[Ce++]=zn,Ke=e.id,Je=e.overflow,zn=n),n=ts(n,o.children),n.flags|=4096,n)}function gl(e,n,t){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Qr(e.return,n,t)}function gr(e,n,t,o,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:i}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=o,r.tail=t,r.tailMode=i)}function Ud(e,n,t){var o=n.pendingProps,i=o.revealOrder,r=o.tail;if(ce(e,n,o.children,t),o=H.current,o&2)o=o&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gl(e,t,n);else if(e.tag===19)gl(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(U(H,o),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&gi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),gr(n,!1,i,t,r);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&gi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}gr(n,!0,t,null,r);break;case"together":gr(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function tn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Fn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=kn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=kn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Vp(e,n,t){switch(n.tag){case 3:Rd(n),gt();break;case 5:ud(n);break;case 1:ve(n.type)&&ui(n);break;case 4:qa(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,i=n.memoizedProps.value;U(hi,o._currentValue),o._currentValue=i;break;case 13:if(o=n.memoizedState,o!==null)return o.dehydrated!==null?(U(H,H.current&1),n.flags|=128,null):t&n.child.childLanes?Id(e,n,t):(U(H,H.current&1),e=tn(e,n,t),e!==null?e.sibling:null);U(H,H.current&1);break;case 19:if(o=(t&n.childLanes)!==0,e.flags&128){if(o)return Ud(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(H,H.current),o)break;return null;case 22:case 23:return n.lanes=0,Nd(e,n,t)}return tn(e,n,t)}var Dd,aa,zd,Wd;Dd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};aa=function(){};zd=function(e,n,t,o){var i=e.memoizedProps;if(i!==o){e=n.stateNode,Rn(Ze.current);var r=null;switch(t){case"input":i=Cr(e,i),o=Cr(e,o),r=[];break;case"select":i=Y({},i,{value:void 0}),o=Y({},o,{value:void 0}),r=[];break;case"textarea":i=jr(e,i),o=jr(e,o),r=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=si)}Nr(t,o);var a;t=null;for(u in i)if(!o.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bt.hasOwnProperty(u)?r||(r=[]):(r=r||[]).push(u,null));for(u in o){var l=o[u];if(s=i!=null?i[u]:void 0,o.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(r||(r=[]),r.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(r=r||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(r=r||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bt.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&D("scroll",e),r||s===l||(r=[])):(r=r||[]).push(u,l))}t&&(r=r||[]).push("style",t);var u=r;(n.updateQueue=u)&&(n.flags|=4)}};Wd=function(e,n,t,o){t!==o&&(n.flags|=4)};function Et(e,n){if(!W)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=t,n}function Ep(e,n,t){var o=n.pendingProps;switch(Fa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return ve(n.type)&&li(),se(n),null;case 3:return o=n.stateNode,yt(),z(we),z(ue),Ka(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(jo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,De!==null&&(fa(De),De=null))),aa(e,n),se(n),null;case 5:$a(n);var i=Rn(oo.current);if(t=n.type,e!==null&&n.stateNode!=null)zd(e,n,t,o,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(n.stateNode===null)throw Error(P(166));return se(n),null}if(e=Rn(Ze.current),jo(n)){o=n.stateNode,t=n.type;var r=n.memoizedProps;switch(o[Ye]=n,o[no]=r,e=(n.mode&1)!==0,t){case"dialog":D("cancel",o),D("close",o);break;case"iframe":case"object":case"embed":D("load",o);break;case"video":case"audio":for(i=0;i<Rt.length;i++)D(Rt[i],o);break;case"source":D("error",o);break;case"img":case"image":case"link":D("error",o),D("load",o);break;case"details":D("toggle",o);break;case"input":Ss(o,r),D("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!r.multiple},D("invalid",o);break;case"textarea":Ms(o,r),D("invalid",o)}Nr(t,r),i=null;for(var a in r)if(r.hasOwnProperty(a)){var s=r[a];a==="children"?typeof s=="string"?o.textContent!==s&&(r.suppressHydrationWarning!==!0&&Eo(o.textContent,s,e),i=["children",s]):typeof s=="number"&&o.textContent!==""+s&&(r.suppressHydrationWarning!==!0&&Eo(o.textContent,s,e),i=["children",""+s]):Bt.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&D("scroll",o)}switch(t){case"input":Po(o),As(o,r,!0);break;case"textarea":Po(o),Ts(o);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(o.onclick=si)}o=i,n.updateQueue=o,o!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=a.createElement(t,{is:o.is}):(e=a.createElement(t),t==="select"&&(a=e,o.multiple?a.multiple=!0:o.size&&(a.size=o.size))):e=a.createElementNS(e,t),e[Ye]=n,e[no]=o,Dd(e,n,!1,!1),n.stateNode=e;e:{switch(a=Or(t,o),t){case"dialog":D("cancel",e),D("close",e),i=o;break;case"iframe":case"object":case"embed":D("load",e),i=o;break;case"video":case"audio":for(i=0;i<Rt.length;i++)D(Rt[i],e);i=o;break;case"source":D("error",e),i=o;break;case"img":case"image":case"link":D("error",e),D("load",e),i=o;break;case"details":D("toggle",e),i=o;break;case"input":Ss(e,o),i=Cr(e,o),D("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=Y({},o,{value:void 0}),D("invalid",e);break;case"textarea":Ms(e,o),i=jr(e,o),D("invalid",e);break;default:i=o}Nr(t,i),s=i;for(r in s)if(s.hasOwnProperty(r)){var l=s[r];r==="style"?yu(e,l):r==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gu(e,l)):r==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Zt(e,l):typeof l=="number"&&Zt(e,""+l):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Bt.hasOwnProperty(r)?l!=null&&r==="onScroll"&&D("scroll",e):l!=null&&Ma(e,r,l,a))}switch(t){case"input":Po(e),As(e,o,!1);break;case"textarea":Po(e),Ts(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Pn(o.value));break;case"select":e.multiple=!!o.multiple,r=o.value,r!=null?st(e,!!o.multiple,r,!1):o.defaultValue!=null&&st(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=si)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)Wd(e,n,e.memoizedProps,o);else{if(typeof o!="string"&&n.stateNode===null)throw Error(P(166));if(t=Rn(oo.current),Rn(Ze.current),jo(n)){if(o=n.stateNode,t=n.memoizedProps,o[Ye]=n,(r=o.nodeValue!==t)&&(e=xe,e!==null))switch(e.tag){case 3:Eo(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Eo(o.nodeValue,t,(e.mode&1)!==0)}r&&(n.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[Ye]=n,n.stateNode=o}return se(n),null;case 13:if(z(H),o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Pe!==null&&n.mode&1&&!(n.flags&128))id(),gt(),n.flags|=98560,r=!1;else if(r=jo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!r)throw Error(P(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(P(317));r[Ye]=n}else gt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),r=!1}else De!==null&&(fa(De),De=null),r=!0;if(!r)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(n.child.flags|=8192,n.mode&1&&(e===null||H.current&1?Q===0&&(Q=3):ls())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return yt(),aa(e,n),e===null&&Xt(n.stateNode.containerInfo),se(n),null;case 10:return Ba(n.type._context),se(n),null;case 17:return ve(n.type)&&li(),se(n),null;case 19:if(z(H),r=n.memoizedState,r===null)return se(n),null;if(o=(n.flags&128)!==0,a=r.rendering,a===null)if(o)Et(r,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=gi(e),a!==null){for(n.flags|=128,Et(r,!1),o=a.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=t,t=n.child;t!==null;)r=t,e=o,r.flags&=14680066,a=r.alternate,a===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,e=a.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return U(H,H.current&1|2),n.child}e=e.sibling}r.tail!==null&&Z()>vt&&(n.flags|=128,o=!0,Et(r,!1),n.lanes=4194304)}else{if(!o)if(e=gi(a),e!==null){if(n.flags|=128,o=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Et(r,!0),r.tail===null&&r.tailMode==="hidden"&&!a.alternate&&!W)return se(n),null}else 2*Z()-r.renderingStartTime>vt&&t!==1073741824&&(n.flags|=128,o=!0,Et(r,!1),n.lanes=4194304);r.isBackwards?(a.sibling=n.child,n.child=a):(t=r.last,t!==null?t.sibling=a:n.child=a,r.last=a)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.renderingStartTime=Z(),n.sibling=null,t=H.current,U(H,o?t&1|2:t&1),n):(se(n),null);case 22:case 23:return ss(),o=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(n.flags|=8192),o&&n.mode&1?be&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function jp(e,n){switch(Fa(n),n.tag){case 1:return ve(n.type)&&li(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return yt(),z(we),z(ue),Ka(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return $a(n),null;case 13:if(z(H),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));gt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return z(H),null;case 4:return yt(),null;case 10:return Ba(n.type._context),null;case 22:case 23:return ss(),null;case 24:return null;default:return null}}var Oo=!1,le=!1,Lp=typeof WeakSet=="function"?WeakSet:Set,T=null;function rt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){B(e,n,o)}else t.current=null}function sa(e,n,t){try{t()}catch(o){B(e,n,o)}}var ml=!1;function Np(e,n){if(Yr=ii,e=Bu(),za(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var i=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var a=0,s=-1,l=-1,u=0,f=0,c=e,m=null;n:for(;;){for(var y;c!==t||i!==0&&c.nodeType!==3||(s=a+i),c!==r||o!==0&&c.nodeType!==3||(l=a+o),c.nodeType===3&&(a+=c.nodeValue.length),(y=c.firstChild)!==null;)m=c,c=y;for(;;){if(c===e)break n;if(m===t&&++u===i&&(s=a),m===r&&++f===o&&(l=a),(y=c.nextSibling)!==null)break;c=m,m=c.parentNode}c=y}t=s===-1||l===-1?null:{start:s,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Br={focusedElem:e,selectionRange:t},ii=!1,T=n;T!==null;)if(n=T,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,T=e;else for(;T!==null;){n=T;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,A=w.memoizedState,p=n.stateNode,d=p.getSnapshotBeforeUpdate(n.elementType===n.type?k:Ie(n.type,k),A);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(v){B(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,T=e;break}T=n.return}return w=ml,ml=!1,w}function Ht(e,n,t){var o=n.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var r=i.destroy;i.destroy=void 0,r!==void 0&&sa(n,t,r)}i=i.next}while(i!==o)}}function Oi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==n)}}function la(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Fd(e){var n=e.alternate;n!==null&&(e.alternate=null,Fd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ye],delete n[no],delete n[qr],delete n[gp],delete n[mp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hd(e){return e.tag===5||e.tag===3||e.tag===4}function yl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ua(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=si));else if(o!==4&&(e=e.child,e!==null))for(ua(e,n,t),e=e.sibling;e!==null;)ua(e,n,t),e=e.sibling}function da(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(da(e,n,t),e=e.sibling;e!==null;)da(e,n,t),e=e.sibling}var oe=null,Ue=!1;function rn(e,n,t){for(t=t.child;t!==null;)_d(e,n,t),t=t.sibling}function _d(e,n,t){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(Mi,t)}catch{}switch(t.tag){case 5:le||rt(t,n);case 6:var o=oe,i=Ue;oe=null,rn(e,n,t),oe=o,Ue=i,oe!==null&&(Ue?(e=oe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):oe.removeChild(t.stateNode));break;case 18:oe!==null&&(Ue?(e=oe,t=t.stateNode,e.nodeType===8?lr(e.parentNode,t):e.nodeType===1&&lr(e,t),Kt(e)):lr(oe,t.stateNode));break;case 4:o=oe,i=Ue,oe=t.stateNode.containerInfo,Ue=!0,rn(e,n,t),oe=o,Ue=i;break;case 0:case 11:case 14:case 15:if(!le&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var r=i,a=r.destroy;r=r.tag,a!==void 0&&(r&2||r&4)&&sa(t,n,a),i=i.next}while(i!==o)}rn(e,n,t);break;case 1:if(!le&&(rt(t,n),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(s){B(t,n,s)}rn(e,n,t);break;case 21:rn(e,n,t);break;case 22:t.mode&1?(le=(o=le)||t.memoizedState!==null,rn(e,n,t),le=o):rn(e,n,t);break;default:rn(e,n,t)}}function wl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Lp),n.forEach(function(o){var i=Hp.bind(null,e,o);t.has(o)||(t.add(o),o.then(i,i))})}}function Re(e,n){var t=n.deletions;if(t!==null)for(var o=0;o<t.length;o++){var i=t[o];try{var r=e,a=n,s=a;e:for(;s!==null;){switch(s.tag){case 5:oe=s.stateNode,Ue=!1;break e;case 3:oe=s.stateNode.containerInfo,Ue=!0;break e;case 4:oe=s.stateNode.containerInfo,Ue=!0;break e}s=s.return}if(oe===null)throw Error(P(160));_d(r,a,i),oe=null,Ue=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){B(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Yd(n,e),n=n.sibling}function Yd(e,n){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(n,e),He(e),o&4){try{Ht(3,e,e.return),Oi(3,e)}catch(k){B(e,e.return,k)}try{Ht(5,e,e.return)}catch(k){B(e,e.return,k)}}break;case 1:Re(n,e),He(e),o&512&&t!==null&&rt(t,t.return);break;case 5:if(Re(n,e),He(e),o&512&&t!==null&&rt(t,t.return),e.flags&32){var i=e.stateNode;try{Zt(i,"")}catch(k){B(e,e.return,k)}}if(o&4&&(i=e.stateNode,i!=null)){var r=e.memoizedProps,a=t!==null?t.memoizedProps:r,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&r.type==="radio"&&r.name!=null&&hu(i,r),Or(s,a);var u=Or(s,r);for(a=0;a<l.length;a+=2){var f=l[a],c=l[a+1];f==="style"?yu(i,c):f==="dangerouslySetInnerHTML"?gu(i,c):f==="children"?Zt(i,c):Ma(i,f,c,u)}switch(s){case"input":Vr(i,r);break;case"textarea":pu(i,r);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!r.multiple;var y=r.value;y!=null?st(i,!!r.multiple,y,!1):m!==!!r.multiple&&(r.defaultValue!=null?st(i,!!r.multiple,r.defaultValue,!0):st(i,!!r.multiple,r.multiple?[]:"",!1))}i[no]=r}catch(k){B(e,e.return,k)}}break;case 6:if(Re(n,e),He(e),o&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,r=e.memoizedProps;try{i.nodeValue=r}catch(k){B(e,e.return,k)}}break;case 3:if(Re(n,e),He(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{Kt(n.containerInfo)}catch(k){B(e,e.return,k)}break;case 4:Re(n,e),He(e);break;case 13:Re(n,e),He(e),i=e.child,i.flags&8192&&(r=i.memoizedState!==null,i.stateNode.isHidden=r,!r||i.alternate!==null&&i.alternate.memoizedState!==null||(rs=Z())),o&4&&wl(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(le=(u=le)||f,Re(n,e),le=u):Re(n,e),He(e),o&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(T=e,f=e.child;f!==null;){for(c=T=f;T!==null;){switch(m=T,y=m.child,m.tag){case 0:case 11:case 14:case 15:Ht(4,m,m.return);break;case 1:rt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){o=m,t=m.return;try{n=o,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(k){B(o,t,k)}}break;case 5:rt(m,m.return);break;case 22:if(m.memoizedState!==null){kl(c);continue}}y!==null?(y.return=m,T=y):kl(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(s=c.stateNode,l=c.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=mu("display",a))}catch(k){B(e,e.return,k)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(k){B(e,e.return,k)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Re(n,e),He(e),o&4&&wl(e);break;case 21:break;default:Re(n,e),He(e)}}function He(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Hd(t)){var o=t;break e}t=t.return}throw Error(P(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(Zt(i,""),o.flags&=-33);var r=yl(e);da(e,r,i);break;case 3:case 4:var a=o.stateNode.containerInfo,s=yl(e);ua(e,s,a);break;default:throw Error(P(161))}}catch(l){B(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Op(e,n,t){T=e,Bd(e)}function Bd(e,n,t){for(var o=(e.mode&1)!==0;T!==null;){var i=T,r=i.child;if(i.tag===22&&o){var a=i.memoizedState!==null||Oo;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||le;s=Oo;var u=le;if(Oo=a,(le=l)&&!u)for(T=i;T!==null;)a=T,l=a.child,a.tag===22&&a.memoizedState!==null?bl(i):l!==null?(l.return=a,T=l):bl(i);for(;r!==null;)T=r,Bd(r),r=r.sibling;T=i,Oo=s,le=u}vl(e)}else i.subtreeFlags&8772&&r!==null?(r.return=i,T=r):vl(e)}}function vl(e){for(;T!==null;){var n=T;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||Oi(5,n);break;case 1:var o=n.stateNode;if(n.flags&4&&!le)if(t===null)o.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Ie(n.type,t.memoizedProps);o.componentDidUpdate(i,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var r=n.updateQueue;r!==null&&ol(n,r,o);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ol(n,a,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&Kt(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}le||n.flags&512&&la(n)}catch(m){B(n,n.return,m)}}if(n===e){T=null;break}if(t=n.sibling,t!==null){t.return=n.return,T=t;break}T=n.return}}function kl(e){for(;T!==null;){var n=T;if(n===e){T=null;break}var t=n.sibling;if(t!==null){t.return=n.return,T=t;break}T=n.return}}function bl(e){for(;T!==null;){var n=T;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Oi(4,n)}catch(l){B(n,t,l)}break;case 1:var o=n.stateNode;if(typeof o.componentDidMount=="function"){var i=n.return;try{o.componentDidMount()}catch(l){B(n,i,l)}}var r=n.return;try{la(n)}catch(l){B(n,r,l)}break;case 5:var a=n.return;try{la(n)}catch(l){B(n,a,l)}}}catch(l){B(n,n.return,l)}if(n===e){T=null;break}var s=n.sibling;if(s!==null){s.return=n.return,T=s;break}T=n.return}}var Rp=Math.ceil,wi=on.ReactCurrentDispatcher,os=on.ReactCurrentOwner,Ee=on.ReactCurrentBatchConfig,O=0,te=null,G=null,ie=0,be=0,at=An(0),Q=0,so=null,Fn=0,Ri=0,is=0,_t=null,ge=null,rs=0,vt=1/0,qe=null,vi=!1,ca=null,wn=null,Ro=!1,cn=null,ki=0,Yt=0,ha=null,$o=-1,Ko=0;function he(){return O&6?Z():$o!==-1?$o:$o=Z()}function vn(e){return e.mode&1?O&2&&ie!==0?ie&-ie:wp.transition!==null?(Ko===0&&(Ko=Vu()),Ko):(e=R,e!==0||(e=window.event,e=e===void 0?16:Iu(e.type)),e):1}function We(e,n,t,o){if(50<Yt)throw Yt=0,ha=null,Error(P(185));ho(e,t,o),(!(O&2)||e!==te)&&(e===te&&(!(O&2)&&(Ri|=t),Q===4&&un(e,ie)),ke(e,o),t===1&&O===0&&!(n.mode&1)&&(vt=Z()+500,ji&&Mn()))}function ke(e,n){var t=e.callbackNode;wh(e,n);var o=oi(e,e===te?ie:0);if(o===0)t!==null&&Es(t),e.callbackNode=null,e.callbackPriority=0;else if(n=o&-o,e.callbackPriority!==n){if(t!=null&&Es(t),n===1)e.tag===0?yp(Pl.bind(null,e)):nd(Pl.bind(null,e)),pp(function(){!(O&6)&&Mn()}),t=null;else{switch(Eu(o)){case 1:t=ja;break;case 4:t=Tu;break;case 16:t=ti;break;case 536870912:t=Cu;break;default:t=ti}t=Xd(t,Zd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Zd(e,n){if($o=-1,Ko=0,O&6)throw Error(P(327));var t=e.callbackNode;if(ht()&&e.callbackNode!==t)return null;var o=oi(e,e===te?ie:0);if(o===0)return null;if(o&30||o&e.expiredLanes||n)n=bi(e,o);else{n=o;var i=O;O|=2;var r=qd();(te!==e||ie!==n)&&(qe=null,vt=Z()+500,In(e,n));do try{Dp();break}catch(s){Gd(e,s)}while(!0);Ya(),wi.current=r,O=i,G!==null?n=0:(te=null,ie=0,n=Q)}if(n!==0){if(n===2&&(i=zr(e),i!==0&&(o=i,n=pa(e,i))),n===1)throw t=so,In(e,0),un(e,o),ke(e,Z()),t;if(n===6)un(e,o);else{if(i=e.current.alternate,!(o&30)&&!Ip(i)&&(n=bi(e,o),n===2&&(r=zr(e),r!==0&&(o=r,n=pa(e,r))),n===1))throw t=so,In(e,0),un(e,o),ke(e,Z()),t;switch(e.finishedWork=i,e.finishedLanes=o,n){case 0:case 1:throw Error(P(345));case 2:Ln(e,ge,qe);break;case 3:if(un(e,o),(o&130023424)===o&&(n=rs+500-Z(),10<n)){if(oi(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){he(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Gr(Ln.bind(null,e,ge,qe),n);break}Ln(e,ge,qe);break;case 4:if(un(e,o),(o&4194240)===o)break;for(n=e.eventTimes,i=-1;0<o;){var a=31-ze(o);r=1<<a,a=n[a],a>i&&(i=a),o&=~r}if(o=i,o=Z()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Rp(o/1960))-o,10<o){e.timeoutHandle=Gr(Ln.bind(null,e,ge,qe),o);break}Ln(e,ge,qe);break;case 5:Ln(e,ge,qe);break;default:throw Error(P(329))}}}return ke(e,Z()),e.callbackNode===t?Zd.bind(null,e):null}function pa(e,n){var t=_t;return e.current.memoizedState.isDehydrated&&(In(e,n).flags|=256),e=bi(e,n),e!==2&&(n=ge,ge=t,n!==null&&fa(n)),e}function fa(e){ge===null?ge=e:ge.push.apply(ge,e)}function Ip(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var i=t[o],r=i.getSnapshot;i=i.value;try{if(!Fe(r(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function un(e,n){for(n&=~is,n&=~Ri,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-ze(n),o=1<<t;e[t]=-1,n&=~o}}function Pl(e){if(O&6)throw Error(P(327));ht();var n=oi(e,0);if(!(n&1))return ke(e,Z()),null;var t=bi(e,n);if(e.tag!==0&&t===2){var o=zr(e);o!==0&&(n=o,t=pa(e,o))}if(t===1)throw t=so,In(e,0),un(e,n),ke(e,Z()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Ln(e,ge,qe),ke(e,Z()),null}function as(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(vt=Z()+500,ji&&Mn())}}function Hn(e){cn!==null&&cn.tag===0&&!(O&6)&&ht();var n=O;O|=1;var t=Ee.transition,o=R;try{if(Ee.transition=null,R=1,e)return e()}finally{R=o,Ee.transition=t,O=n,!(O&6)&&Mn()}}function ss(){be=at.current,z(at)}function In(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,hp(t)),G!==null)for(t=G.return;t!==null;){var o=t;switch(Fa(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&li();break;case 3:yt(),z(we),z(ue),Ka();break;case 5:$a(o);break;case 4:yt();break;case 13:z(H);break;case 19:z(H);break;case 10:Ba(o.type._context);break;case 22:case 23:ss()}t=t.return}if(te=e,G=e=kn(e.current,null),ie=be=n,Q=0,so=null,is=Ri=Fn=0,ge=_t=null,On!==null){for(n=0;n<On.length;n++)if(t=On[n],o=t.interleaved,o!==null){t.interleaved=null;var i=o.next,r=t.pending;if(r!==null){var a=r.next;r.next=i,o.next=a}t.pending=o}On=null}return e}function Gd(e,n){do{var t=G;try{if(Ya(),Zo.current=yi,mi){for(var o=_.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}mi=!1}if(Wn=0,ne=J=_=null,Ft=!1,io=0,os.current=null,t===null||t.return===null){Q=1,so=n,G=null;break}e:{var r=e,a=t.return,s=t,l=n;if(n=ie,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=s,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=ul(a);if(y!==null){y.flags&=-257,dl(y,a,s,r,n),y.mode&1&&ll(r,u,n),n=y,l=u;var w=n.updateQueue;if(w===null){var k=new Set;k.add(l),n.updateQueue=k}else w.add(l);break e}else{if(!(n&1)){ll(r,u,n),ls();break e}l=Error(P(426))}}else if(W&&s.mode&1){var A=ul(a);if(A!==null){!(A.flags&65536)&&(A.flags|=256),dl(A,a,s,r,n),Ha(wt(l,s));break e}}r=l=wt(l,s),Q!==4&&(Q=2),_t===null?_t=[r]:_t.push(r),r=a;do{switch(r.tag){case 3:r.flags|=65536,n&=-n,r.lanes|=n;var p=Ed(r,l,n);tl(r,p);break e;case 1:s=l;var d=r.type,g=r.stateNode;if(!(r.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(wn===null||!wn.has(g)))){r.flags|=65536,n&=-n,r.lanes|=n;var v=jd(r,s,n);tl(r,v);break e}}r=r.return}while(r!==null)}Kd(t)}catch(S){n=S,G===t&&t!==null&&(G=t=t.return);continue}break}while(!0)}function qd(){var e=wi.current;return wi.current=yi,e===null?yi:e}function ls(){(Q===0||Q===3||Q===2)&&(Q=4),te===null||!(Fn&268435455)&&!(Ri&268435455)||un(te,ie)}function bi(e,n){var t=O;O|=2;var o=qd();(te!==e||ie!==n)&&(qe=null,In(e,n));do try{Up();break}catch(i){Gd(e,i)}while(!0);if(Ya(),O=t,wi.current=o,G!==null)throw Error(P(261));return te=null,ie=0,Q}function Up(){for(;G!==null;)$d(G)}function Dp(){for(;G!==null&&!uh();)$d(G)}function $d(e){var n=Qd(e.alternate,e,be);e.memoizedProps=e.pendingProps,n===null?Kd(e):G=n,os.current=null}function Kd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=jp(t,n),t!==null){t.flags&=32767,G=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,G=null;return}}else if(t=Ep(t,n,be),t!==null){G=t;return}if(n=n.sibling,n!==null){G=n;return}G=n=e}while(n!==null);Q===0&&(Q=5)}function Ln(e,n,t){var o=R,i=Ee.transition;try{Ee.transition=null,R=1,zp(e,n,t,o)}finally{Ee.transition=i,R=o}return null}function zp(e,n,t,o){do ht();while(cn!==null);if(O&6)throw Error(P(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var r=t.lanes|t.childLanes;if(vh(e,r),e===te&&(G=te=null,ie=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ro||(Ro=!0,Xd(ti,function(){return ht(),null})),r=(t.flags&15990)!==0,t.subtreeFlags&15990||r){r=Ee.transition,Ee.transition=null;var a=R;R=1;var s=O;O|=4,os.current=null,Np(e,t),Yd(t,e),rp(Br),ii=!!Yr,Br=Yr=null,e.current=t,Op(t),dh(),O=s,R=a,Ee.transition=r}else e.current=t;if(Ro&&(Ro=!1,cn=e,ki=i),r=e.pendingLanes,r===0&&(wn=null),ph(t.stateNode),ke(e,Z()),n!==null)for(o=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],o(i.value,{componentStack:i.stack,digest:i.digest});if(vi)throw vi=!1,e=ca,ca=null,e;return ki&1&&e.tag!==0&&ht(),r=e.pendingLanes,r&1?e===ha?Yt++:(Yt=0,ha=e):Yt=0,Mn(),null}function ht(){if(cn!==null){var e=Eu(ki),n=Ee.transition,t=R;try{if(Ee.transition=null,R=16>e?16:e,cn===null)var o=!1;else{if(e=cn,cn=null,ki=0,O&6)throw Error(P(331));var i=O;for(O|=4,T=e.current;T!==null;){var r=T,a=r.child;if(T.flags&16){var s=r.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(T=u;T!==null;){var f=T;switch(f.tag){case 0:case 11:case 15:Ht(8,f,r)}var c=f.child;if(c!==null)c.return=f,T=c;else for(;T!==null;){f=T;var m=f.sibling,y=f.return;if(Fd(f),f===u){T=null;break}if(m!==null){m.return=y,T=m;break}T=y}}}var w=r.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var A=k.sibling;k.sibling=null,k=A}while(k!==null)}}T=r}}if(r.subtreeFlags&2064&&a!==null)a.return=r,T=a;else e:for(;T!==null;){if(r=T,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Ht(9,r,r.return)}var p=r.sibling;if(p!==null){p.return=r.return,T=p;break e}T=r.return}}var d=e.current;for(T=d;T!==null;){a=T;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,T=g;else e:for(a=d;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Oi(9,s)}}catch(S){B(s,s.return,S)}if(s===a){T=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,T=v;break e}T=s.return}}if(O=i,Mn(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(Mi,e)}catch{}o=!0}return o}finally{R=t,Ee.transition=n}}return!1}function xl(e,n,t){n=wt(t,n),n=Ed(e,n,1),e=yn(e,n,1),n=he(),e!==null&&(ho(e,1,n),ke(e,n))}function B(e,n,t){if(e.tag===3)xl(e,e,t);else for(;n!==null;){if(n.tag===3){xl(n,e,t);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wn===null||!wn.has(o))){e=wt(t,e),e=jd(n,e,1),n=yn(n,e,1),e=he(),n!==null&&(ho(n,1,e),ke(n,e));break}}n=n.return}}function Wp(e,n,t){var o=e.pingCache;o!==null&&o.delete(n),n=he(),e.pingedLanes|=e.suspendedLanes&t,te===e&&(ie&t)===t&&(Q===4||Q===3&&(ie&130023424)===ie&&500>Z()-rs?In(e,0):is|=t),ke(e,n)}function Jd(e,n){n===0&&(e.mode&1?(n=Ao,Ao<<=1,!(Ao&130023424)&&(Ao=4194304)):n=1);var t=he();e=nn(e,n),e!==null&&(ho(e,n,t),ke(e,t))}function Fp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Jd(e,t)}function Hp(e,n){var t=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(P(314))}o!==null&&o.delete(n),Jd(e,t)}var Qd;Qd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||we.current)me=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return me=!1,Vp(e,n,t);me=!!(e.flags&131072)}else me=!1,W&&n.flags&1048576&&td(n,ci,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;qo(e,n),e=n.pendingProps;var i=ft(n,ue.current);ct(n,t),i=Qa(null,n,o,e,i,t);var r=Xa();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ve(o)?(r=!0,ui(n)):r=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ga(n),i.updater=Ni,n.stateNode=i,i._reactInternals=n,ea(n,o,e,t),n=oa(null,n,o,!0,r,t)):(n.tag=0,W&&r&&Wa(n),ce(null,n,i,t),n=n.child),n;case 16:o=n.elementType;e:{switch(qo(e,n),e=n.pendingProps,i=o._init,o=i(o._payload),n.type=o,i=n.tag=Yp(o),e=Ie(o,e),i){case 0:n=ta(null,n,o,e,t);break e;case 1:n=pl(null,n,o,e,t);break e;case 11:n=cl(null,n,o,e,t);break e;case 14:n=hl(null,n,o,Ie(o.type,e),t);break e}throw Error(P(306,o,""))}return n;case 0:return o=n.type,i=n.pendingProps,i=n.elementType===o?i:Ie(o,i),ta(e,n,o,i,t);case 1:return o=n.type,i=n.pendingProps,i=n.elementType===o?i:Ie(o,i),pl(e,n,o,i,t);case 3:e:{if(Rd(n),e===null)throw Error(P(387));o=n.pendingProps,r=n.memoizedState,i=r.element,ld(e,n),fi(n,o,null,t);var a=n.memoizedState;if(o=a.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){i=wt(Error(P(423)),n),n=fl(e,n,o,t,i);break e}else if(o!==i){i=wt(Error(P(424)),n),n=fl(e,n,o,t,i);break e}else for(Pe=mn(n.stateNode.containerInfo.firstChild),xe=n,W=!0,De=null,t=ad(n,null,o,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(gt(),o===i){n=tn(e,n,t);break e}ce(e,n,o,t)}n=n.child}return n;case 5:return ud(n),e===null&&Jr(n),o=n.type,i=n.pendingProps,r=e!==null?e.memoizedProps:null,a=i.children,Zr(o,i)?a=null:r!==null&&Zr(o,r)&&(n.flags|=32),Od(e,n),ce(e,n,a,t),n.child;case 6:return e===null&&Jr(n),null;case 13:return Id(e,n,t);case 4:return qa(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=mt(n,null,o,t):ce(e,n,o,t),n.child;case 11:return o=n.type,i=n.pendingProps,i=n.elementType===o?i:Ie(o,i),cl(e,n,o,i,t);case 7:return ce(e,n,n.pendingProps,t),n.child;case 8:return ce(e,n,n.pendingProps.children,t),n.child;case 12:return ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(o=n.type._context,i=n.pendingProps,r=n.memoizedProps,a=i.value,U(hi,o._currentValue),o._currentValue=a,r!==null)if(Fe(r.value,a)){if(r.children===i.children&&!we.current){n=tn(e,n,t);break e}}else for(r=n.child,r!==null&&(r.return=n);r!==null;){var s=r.dependencies;if(s!==null){a=r.child;for(var l=s.firstContext;l!==null;){if(l.context===o){if(r.tag===1){l=Qe(-1,t&-t),l.tag=2;var u=r.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}r.lanes|=t,l=r.alternate,l!==null&&(l.lanes|=t),Qr(r.return,t,n),s.lanes|=t;break}l=l.next}}else if(r.tag===10)a=r.type===n.type?null:r.child;else if(r.tag===18){if(a=r.return,a===null)throw Error(P(341));a.lanes|=t,s=a.alternate,s!==null&&(s.lanes|=t),Qr(a,t,n),a=r.sibling}else a=r.child;if(a!==null)a.return=r;else for(a=r;a!==null;){if(a===n){a=null;break}if(r=a.sibling,r!==null){r.return=a.return,a=r;break}a=a.return}r=a}ce(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,o=n.pendingProps.children,ct(n,t),i=je(i),o=o(i),n.flags|=1,ce(e,n,o,t),n.child;case 14:return o=n.type,i=Ie(o,n.pendingProps),i=Ie(o.type,i),hl(e,n,o,i,t);case 15:return Ld(e,n,n.type,n.pendingProps,t);case 17:return o=n.type,i=n.pendingProps,i=n.elementType===o?i:Ie(o,i),qo(e,n),n.tag=1,ve(o)?(e=!0,ui(n)):e=!1,ct(n,t),Vd(n,o,i),ea(n,o,i,t),oa(null,n,o,!0,e,t);case 19:return Ud(e,n,t);case 22:return Nd(e,n,t)}throw Error(P(156,n.tag))};function Xd(e,n){return Mu(e,n)}function _p(e,n,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(e,n,t,o){return new _p(e,n,t,o)}function us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yp(e){if(typeof e=="function")return us(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ca)return 11;if(e===Va)return 14}return 2}function kn(e,n){var t=e.alternate;return t===null?(t=Ve(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Jo(e,n,t,o,i,r){var a=2;if(o=e,typeof e=="function")us(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Kn:return Un(t.children,i,r,n);case Ta:a=8,i|=8;break;case Sr:return e=Ve(12,t,n,i|2),e.elementType=Sr,e.lanes=r,e;case Ar:return e=Ve(13,t,n,i),e.elementType=Ar,e.lanes=r,e;case Mr:return e=Ve(19,t,n,i),e.elementType=Mr,e.lanes=r,e;case uu:return Ii(t,i,r,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case su:a=10;break e;case lu:a=9;break e;case Ca:a=11;break e;case Va:a=14;break e;case an:a=16,o=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=Ve(a,t,n,i),n.elementType=e,n.type=o,n.lanes=r,n}function Un(e,n,t,o){return e=Ve(7,e,o,n),e.lanes=t,e}function Ii(e,n,t,o){return e=Ve(22,e,o,n),e.elementType=uu,e.lanes=t,e.stateNode={isHidden:!1},e}function mr(e,n,t){return e=Ve(6,e,null,n),e.lanes=t,e}function yr(e,n,t){return n=Ve(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Bp(e,n,t,o,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ji(0),this.expirationTimes=Ji(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ji(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ds(e,n,t,o,i,r,a,s,l){return e=new Bp(e,n,t,s,l),n===1?(n=1,r===!0&&(n|=8)):n=0,r=Ve(3,null,null,n),e.current=r,r.stateNode=e,r.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ga(r),e}function Zp(e,n,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:o==null?null:""+o,children:e,containerInfo:n,implementation:t}}function ec(e){if(!e)return xn;e=e._reactInternals;e:{if(Yn(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ve(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(ve(t))return ed(e,t,n)}return n}function nc(e,n,t,o,i,r,a,s,l){return e=ds(t,o,!0,e,i,r,a,s,l),e.context=ec(null),t=e.current,o=he(),i=vn(t),r=Qe(o,i),r.callback=n??null,yn(t,r,i),e.current.lanes=i,ho(e,i,o),ke(e,o),e}function Ui(e,n,t,o){var i=n.current,r=he(),a=vn(i);return t=ec(t),n.context===null?n.context=t:n.pendingContext=t,n=Qe(r,a),n.payload={element:e},o=o===void 0?null:o,o!==null&&(n.callback=o),e=yn(i,n,a),e!==null&&(We(e,i,a,r),Bo(e,i,a)),a}function Pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sl(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function cs(e,n){Sl(e,n),(e=e.alternate)&&Sl(e,n)}function Gp(){return null}var tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function hs(e){this._internalRoot=e}Di.prototype.render=hs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));Ui(e,n,null,null)};Di.prototype.unmount=hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Hn(function(){Ui(null,e,null,null)}),n[en]=null}};function Di(e){this._internalRoot=e}Di.prototype.unstable_scheduleHydration=function(e){if(e){var n=Nu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ln.length&&n!==0&&n<ln[t].priority;t++);ln.splice(t,0,e),t===0&&Ru(e)}};function ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Al(){}function qp(e,n,t,o,i){if(i){if(typeof o=="function"){var r=o;o=function(){var u=Pi(a);r.call(u)}}var a=nc(n,o,e,0,null,!1,!1,"",Al);return e._reactRootContainer=a,e[en]=a.current,Xt(e.nodeType===8?e.parentNode:e),Hn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var s=o;o=function(){var u=Pi(l);s.call(u)}}var l=ds(e,0,!1,null,null,!1,!1,"",Al);return e._reactRootContainer=l,e[en]=l.current,Xt(e.nodeType===8?e.parentNode:e),Hn(function(){Ui(n,l,t,o)}),l}function Wi(e,n,t,o,i){var r=t._reactRootContainer;if(r){var a=r;if(typeof i=="function"){var s=i;i=function(){var l=Pi(a);s.call(l)}}Ui(n,a,e,i)}else a=qp(t,n,e,i,o);return Pi(a)}ju=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ot(n.pendingLanes);t!==0&&(La(n,t|1),ke(n,Z()),!(O&6)&&(vt=Z()+500,Mn()))}break;case 13:Hn(function(){var o=nn(e,1);if(o!==null){var i=he();We(o,e,1,i)}}),cs(e,1)}};Na=function(e){if(e.tag===13){var n=nn(e,134217728);if(n!==null){var t=he();We(n,e,134217728,t)}cs(e,134217728)}};Lu=function(e){if(e.tag===13){var n=vn(e),t=nn(e,n);if(t!==null){var o=he();We(t,e,n,o)}cs(e,n)}};Nu=function(){return R};Ou=function(e,n){var t=R;try{return R=e,n()}finally{R=t}};Ir=function(e,n,t){switch(n){case"input":if(Vr(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var o=t[n];if(o!==e&&o.form===e.form){var i=Ei(o);if(!i)throw Error(P(90));cu(o),Vr(o,i)}}}break;case"textarea":pu(e,t);break;case"select":n=t.value,n!=null&&st(e,!!t.multiple,n,!1)}};ku=as;bu=Hn;var $p={usingClientEntryPoint:!1,Events:[fo,et,Ei,wu,vu,as]},jt={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kp={bundleType:jt.bundleType,version:jt.version,rendererPackageName:jt.rendererPackageName,rendererConfig:jt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Su(e),e===null?null:e.stateNode},findFiberByHostInstance:jt.findFiberByHostInstance||Gp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{Mi=Io.inject(Kp),Be=Io}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$p;Ae.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ps(n))throw Error(P(200));return Zp(e,n,null,t)};Ae.createRoot=function(e,n){if(!ps(e))throw Error(P(299));var t=!1,o="",i=tc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=ds(e,1,!1,null,null,t,!1,o,i),e[en]=n.current,Xt(e.nodeType===8?e.parentNode:e),new hs(n)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Su(n),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return Hn(e)};Ae.hydrate=function(e,n,t){if(!zi(n))throw Error(P(200));return Wi(null,e,n,!0,t)};Ae.hydrateRoot=function(e,n,t){if(!ps(e))throw Error(P(405));var o=t!=null&&t.hydratedSources||null,i=!1,r="",a=tc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=nc(n,null,e,1,t??null,i,!1,r,a),e[en]=n.current,Xt(e),o)for(e=0;e<o.length;e++)t=o[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Di(n)};Ae.render=function(e,n,t){if(!zi(n))throw Error(P(200));return Wi(null,e,n,!1,t)};Ae.unmountComponentAtNode=function(e){if(!zi(e))throw Error(P(40));return e._reactRootContainer?(Hn(function(){Wi(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};Ae.unstable_batchedUpdates=as;Ae.unstable_renderSubtreeIntoContainer=function(e,n,t,o){if(!zi(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Wi(e,n,t,!1,o)};Ae.version="18.3.1-next-f1338f8080-20240426";function oc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oc)}catch(e){console.error(e)}}oc(),ou.exports=Ae;var Jp=ou.exports,Ml=Jp;Pr.createRoot=Ml.createRoot,Pr.hydrateRoot=Ml.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lo(){return lo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},lo.apply(null,arguments)}var hn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(hn||(hn={}));const Tl="popstate";function Qp(e){e===void 0&&(e={});function n(o,i){let{pathname:r,search:a,hash:s}=o.location;return ga("",{pathname:r,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(o,i){return typeof i=="string"?i:xi(i)}return ef(n,t,null,e)}function q(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function fs(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Xp(){return Math.random().toString(36).substr(2,8)}function Cl(e,n){return{usr:e.state,key:e.key,idx:n}}function ga(e,n,t,o){return t===void 0&&(t=null),lo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?xt(n):n,{state:t,key:n&&n.key||o||Xp()})}function xi(e){let{pathname:n="/",search:t="",hash:o=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function xt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let o=e.indexOf("?");o>=0&&(n.search=e.substr(o),e=e.substr(0,o)),e&&(n.pathname=e)}return n}function ef(e,n,t,o){o===void 0&&(o={});let{window:i=document.defaultView,v5Compat:r=!1}=o,a=i.history,s=hn.Pop,l=null,u=f();u==null&&(u=0,a.replaceState(lo({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function c(){s=hn.Pop;let A=f(),p=A==null?null:A-u;u=A,l&&l({action:s,location:k.location,delta:p})}function m(A,p){s=hn.Push;let d=ga(k.location,A,p);u=f()+1;let g=Cl(d,u),v=k.createHref(d);try{a.pushState(g,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(v)}r&&l&&l({action:s,location:k.location,delta:1})}function y(A,p){s=hn.Replace;let d=ga(k.location,A,p);u=f();let g=Cl(d,u),v=k.createHref(d);a.replaceState(g,"",v),r&&l&&l({action:s,location:k.location,delta:0})}function w(A){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof A=="string"?A:xi(A);return d=d.replace(/ $/,"%20"),q(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let k={get action(){return s},get location(){return e(i,a)},listen(A){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Tl,c),l=A,()=>{i.removeEventListener(Tl,c),l=null}},createHref(A){return n(i,A)},createURL:w,encodeLocation(A){let p=w(A);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:y,go(A){return a.go(A)}};return k}var Vl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Vl||(Vl={}));function nf(e,n,t){return t===void 0&&(t="/"),tf(e,n,t)}function tf(e,n,t,o){let i=typeof n=="string"?xt(n):n,r=gs(i.pathname||"/",t);if(r==null)return null;let a=ic(e);of(a);let s=null,l=mf(r);for(let u=0;s==null&&u<a.length;++u)s=pf(a[u],l);return s}function ic(e,n,t,o){n===void 0&&(n=[]),t===void 0&&(t=[]),o===void 0&&(o="");let i=(r,a,s)=>{let l={relativePath:s===void 0?r.path||"":s,caseSensitive:r.caseSensitive===!0,childrenIndex:a,route:r};l.relativePath.startsWith("/")&&(q(l.relativePath.startsWith(o),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(o.length));let u=bn([o,l.relativePath]),f=t.concat(l);r.children&&r.children.length>0&&(q(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ic(r.children,n,f,u)),!(r.path==null&&!r.index)&&n.push({path:u,score:cf(u,r.index),routesMeta:f})};return e.forEach((r,a)=>{var s;if(r.path===""||!((s=r.path)!=null&&s.includes("?")))i(r,a);else for(let l of rc(r.path))i(r,a,l)}),n}function rc(e){let n=e.split("/");if(n.length===0)return[];let[t,...o]=n,i=t.endsWith("?"),r=t.replace(/\?$/,"");if(o.length===0)return i?[r,""]:[r];let a=rc(o.join("/")),s=[];return s.push(...a.map(l=>l===""?r:[r,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function of(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:hf(n.routesMeta.map(o=>o.childrenIndex),t.routesMeta.map(o=>o.childrenIndex)))}const rf=/^:[\w-]+$/,af=3,sf=2,lf=1,uf=10,df=-2,El=e=>e==="*";function cf(e,n){let t=e.split("/"),o=t.length;return t.some(El)&&(o+=df),n&&(o+=sf),t.filter(i=>!El(i)).reduce((i,r)=>i+(rf.test(r)?af:r===""?lf:uf),o)}function hf(e,n){return e.length===n.length&&e.slice(0,-1).every((o,i)=>o===n[i])?e[e.length-1]-n[n.length-1]:0}function pf(e,n,t){let{routesMeta:o}=e,i={},r="/",a=[];for(let s=0;s<o.length;++s){let l=o[s],u=s===o.length-1,f=r==="/"?n:n.slice(r.length)||"/",c=ff({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),m=l.route;if(!c)return null;Object.assign(i,c.params),a.push({params:i,pathname:bn([r,c.pathname]),pathnameBase:bf(bn([r,c.pathnameBase])),route:m}),c.pathnameBase!=="/"&&(r=bn([r,c.pathnameBase]))}return a}function ff(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,o]=gf(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let r=i[0],a=r.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:o.reduce((u,f,c)=>{let{paramName:m,isOptional:y}=f;if(m==="*"){let k=s[c]||"";a=r.slice(0,r.length-k.length).replace(/(.)\/+$/,"$1")}const w=s[c];return y&&!w?u[m]=void 0:u[m]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:r,pathnameBase:a,pattern:e}}function gf(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),fs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(o.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),o]}function mf(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return fs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function gs(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,o=e.charAt(t);return o&&o!=="/"?null:e.slice(t)||"/"}const yf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wf=e=>yf.test(e);function vf(e,n){n===void 0&&(n="/");let{pathname:t,search:o="",hash:i=""}=typeof e=="string"?xt(e):e,r;if(t)if(wf(t))r=t;else{if(t.includes("//")){let a=t;t=lc(t),fs(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?r=jl(t.substring(1),"/"):r=jl(t,n)}else r=n;return{pathname:r,search:Pf(o),hash:xf(i)}}function jl(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function wr(e,n,t,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kf(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function ac(e,n){let t=kf(e);return n?t.map((o,i)=>i===t.length-1?o.pathname:o.pathnameBase):t.map(o=>o.pathnameBase)}function sc(e,n,t,o){o===void 0&&(o=!1);let i;typeof e=="string"?i=xt(e):(i=lo({},e),q(!i.pathname||!i.pathname.includes("?"),wr("?","pathname","search",i)),q(!i.pathname||!i.pathname.includes("#"),wr("#","pathname","hash",i)),q(!i.search||!i.search.includes("#"),wr("#","search","hash",i)));let r=e===""||i.pathname==="",a=r?"/":i.pathname,s;if(a==null)s=t;else{let c=n.length-1;if(!o&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),c-=1;i.pathname=m.join("/")}s=c>=0?n[c]:"/"}let l=vf(i,s),u=a&&a!=="/"&&a.endsWith("/"),f=(r||a===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const lc=e=>e.replace(/\/\/+/g,"/"),bn=e=>lc(e.join("/")),bf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Pf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Sf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const uc=["post","put","patch","delete"];new Set(uc);const Af=["get",...uc];new Set(Af);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},uo.apply(null,arguments)}const ms=b.createContext(null),Mf=b.createContext(null),Bn=b.createContext(null),Fi=b.createContext(null),Zn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),dc=b.createContext(null);function Tf(e,n){let{relative:t}=n===void 0?{}:n;mo()||q(!1);let{basename:o,navigator:i}=b.useContext(Bn),{hash:r,pathname:a,search:s}=hc(e,{relative:t}),l=a;return o!=="/"&&(l=a==="/"?o:bn([o,a])),i.createHref({pathname:l,search:s,hash:r})}function mo(){return b.useContext(Fi)!=null}function Hi(){return mo()||q(!1),b.useContext(Fi).location}function cc(e){b.useContext(Bn).static||b.useLayoutEffect(e)}function _i(){let{isDataRoute:e}=b.useContext(Zn);return e?Wf():Cf()}function Cf(){mo()||q(!1);let e=b.useContext(ms),{basename:n,future:t,navigator:o}=b.useContext(Bn),{matches:i}=b.useContext(Zn),{pathname:r}=Hi(),a=JSON.stringify(ac(i,t.v7_relativeSplatPath)),s=b.useRef(!1);return cc(()=>{s.current=!0}),b.useCallback(function(u,f){if(f===void 0&&(f={}),!s.current)return;if(typeof u=="number"){o.go(u);return}let c=sc(u,JSON.parse(a),r,f.relative==="path");e==null&&n!=="/"&&(c.pathname=c.pathname==="/"?n:bn([n,c.pathname])),(f.replace?o.replace:o.push)(c,f.state,f)},[n,o,a,r,e])}function hc(e,n){let{relative:t}=n===void 0?{}:n,{future:o}=b.useContext(Bn),{matches:i}=b.useContext(Zn),{pathname:r}=Hi(),a=JSON.stringify(ac(i,o.v7_relativeSplatPath));return b.useMemo(()=>sc(e,JSON.parse(a),r,t==="path"),[e,a,r,t])}function Vf(e,n){return Ef(e,n)}function Ef(e,n,t,o){mo()||q(!1);let{navigator:i}=b.useContext(Bn),{matches:r}=b.useContext(Zn),a=r[r.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Hi(),f;if(n){var c;let A=typeof n=="string"?xt(n):n;l==="/"||(c=A.pathname)!=null&&c.startsWith(l)||q(!1),f=A}else f=u;let m=f.pathname||"/",y=m;if(l!=="/"){let A=l.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(A.length).join("/")}let w=nf(e,{pathname:y}),k=Rf(w&&w.map(A=>Object.assign({},A,{params:Object.assign({},s,A.params),pathname:bn([l,i.encodeLocation?i.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?l:bn([l,i.encodeLocation?i.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),r,t,o);return n&&k?b.createElement(Fi.Provider,{value:{location:uo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:hn.Pop}},k):k}function jf(){let e=zf(),n=Sf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},n),t?b.createElement("pre",{style:i},t):null,null)}const Lf=b.createElement(jf,null);class Nf extends b.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?b.createElement(Zn.Provider,{value:this.props.routeContext},b.createElement(dc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Of(e){let{routeContext:n,match:t,children:o}=e,i=b.useContext(ms);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(Zn.Provider,{value:n},o)}function Rf(e,n,t,o){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),o===void 0&&(o=null),e==null){var r;if(!t)return null;if(t.errors)e=t.matches;else if((r=o)!=null&&r.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,s=(i=t)==null?void 0:i.errors;if(s!=null){let f=a.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);f>=0||q(!1),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,u=-1;if(t&&o&&o.v7_partialHydration)for(let f=0;f<a.length;f++){let c=a[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.id){let{loaderData:m,errors:y}=t,w=c.route.loader&&m[c.route.id]===void 0&&(!y||y[c.route.id]===void 0);if(c.route.lazy||w){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((f,c,m)=>{let y,w=!1,k=null,A=null;t&&(y=s&&c.route.id?s[c.route.id]:void 0,k=c.route.errorElement||Lf,l&&(u<0&&m===0?(Ff("route-fallback"),w=!0,A=null):u===m&&(w=!0,A=c.route.hydrateFallbackElement||null)));let p=n.concat(a.slice(0,m+1)),d=()=>{let g;return y?g=k:w?g=A:c.route.Component?g=b.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=f,b.createElement(Of,{match:c,routeContext:{outlet:f,matches:p,isDataRoute:t!=null},children:g})};return t&&(c.route.ErrorBoundary||c.route.errorElement||m===0)?b.createElement(Nf,{location:t.location,revalidation:t.revalidation,component:k,error:y,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var pc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(pc||{}),fc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(fc||{});function If(e){let n=b.useContext(ms);return n||q(!1),n}function Uf(e){let n=b.useContext(Mf);return n||q(!1),n}function Df(e){let n=b.useContext(Zn);return n||q(!1),n}function gc(e){let n=Df(),t=n.matches[n.matches.length-1];return t.route.id||q(!1),t.route.id}function zf(){var e;let n=b.useContext(dc),t=Uf(),o=gc();return n!==void 0?n:(e=t.errors)==null?void 0:e[o]}function Wf(){let{router:e}=If(pc.UseNavigateStable),n=gc(fc.UseNavigateStable),t=b.useRef(!1);return cc(()=>{t.current=!0}),b.useCallback(function(i,r){r===void 0&&(r={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,uo({fromRouteId:n},r)))},[e,n])}const Ll={};function Ff(e,n,t){Ll[e]||(Ll[e]=!0)}function Hf(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function de(e){q(!1)}function _f(e){let{basename:n="/",children:t=null,location:o,navigationType:i=hn.Pop,navigator:r,static:a=!1,future:s}=e;mo()&&q(!1);let l=n.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:r,static:a,future:uo({v7_relativeSplatPath:!1},s)}),[l,s,r,a]);typeof o=="string"&&(o=xt(o));let{pathname:f="/",search:c="",hash:m="",state:y=null,key:w="default"}=o,k=b.useMemo(()=>{let A=gs(f,l);return A==null?null:{location:{pathname:A,search:c,hash:m,state:y,key:w},navigationType:i}},[l,f,c,m,y,w,i]);return k==null?null:b.createElement(Bn.Provider,{value:u},b.createElement(Fi.Provider,{children:t,value:k}))}function Yf(e){let{children:n,location:t}=e;return Vf(ma(n),t)}new Promise(()=>{});function ma(e,n){n===void 0&&(n=[]);let t=[];return b.Children.forEach(e,(o,i)=>{if(!b.isValidElement(o))return;let r=[...n,i];if(o.type===b.Fragment){t.push.apply(t,ma(o.props.children,r));return}o.type!==de&&q(!1),!o.props.index||!o.props.children||q(!1);let a={id:o.props.id||r.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(a.children=ma(o.props.children,r)),t.push(a)}),t}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ya.apply(null,arguments)}function Bf(e,n){if(e==null)return{};var t={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)!==-1)continue;t[o]=e[o]}return t}function Zf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Gf(e,n){return e.button===0&&(!n||n==="_self")&&!Zf(e)}const qf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],$f="6";try{window.__reactRouterVersion=$f}catch{}const Kf="startTransition",Nl=Wc[Kf];function Jf(e){let{basename:n,children:t,future:o,window:i}=e,r=b.useRef();r.current==null&&(r.current=Qp({window:i,v5Compat:!0}));let a=r.current,[s,l]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=o||{},f=b.useCallback(c=>{u&&Nl?Nl(()=>l(c)):l(c)},[l,u]);return b.useLayoutEffect(()=>a.listen(f),[a,f]),b.useEffect(()=>Hf(o),[o]),b.createElement(_f,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:a,future:o})}const Qf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qo=b.forwardRef(function(n,t){let{onClick:o,relative:i,reloadDocument:r,replace:a,state:s,target:l,to:u,preventScrollReset:f,viewTransition:c}=n,m=Bf(n,qf),{basename:y}=b.useContext(Bn),w,k=!1;if(typeof u=="string"&&Xf.test(u)&&(w=u,Qf))try{let g=new URL(window.location.href),v=u.startsWith("//")?new URL(g.protocol+u):new URL(u),S=gs(v.pathname,y);v.origin===g.origin&&S!=null?u=S+v.search+v.hash:k=!0}catch{}let A=Tf(u,{relative:i}),p=eg(u,{replace:a,state:s,target:l,preventScrollReset:f,relative:i,viewTransition:c});function d(g){o&&o(g),g.defaultPrevented||p(g)}return b.createElement("a",ya({},m,{href:w||A,onClick:k||r?o:d,ref:t,target:l}))});var Ol;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ol||(Ol={}));var Rl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rl||(Rl={}));function eg(e,n){let{target:t,replace:o,state:i,preventScrollReset:r,relative:a,viewTransition:s}=n===void 0?{}:n,l=_i(),u=Hi(),f=hc(e,{relative:a});return b.useCallback(c=>{if(Gf(c,t)){c.preventDefault();let m=o!==void 0?o:xi(u)===xi(f);l(e,{replace:m,state:i,preventScrollReset:r,relative:a,viewTransition:s})}},[u,l,f,o,i,t,e,r,a,s])}function ng(){const e=_i();return h.jsx("div",{className:"welcome-page",children:h.jsxs("div",{className:"welcome-content",children:[h.jsx("div",{className:"welcome-icon-box",children:h.jsx("img",{src:"/welcomepageimage.png",alt:"VolunteerHigh",className:"welcome-image"})}),h.jsx("h1",{className:"welcome-title",children:"Welcome to VolunteerHigh"}),h.jsx("button",{className:"welcome-next-btn",onClick:()=>e("/home"),children:"Get Started"})]})})}const tg="/assets/VolunteerHighLogo-BnGChIAc.png";function vr(e,n,t=1500,o=!1){const[i,r]=b.useState(o?e:0),a=b.useRef(!1),s=b.useRef(null);return b.useEffect(()=>{if(o){r(e);return}if(!n||a.current)return;a.current=!0;const l=performance.now(),u=f=>{const c=f-l,m=Math.min(c/t,1);r(Math.floor(m*e)),m<1&&(s.current=requestAnimationFrame(u))};return s.current=requestAnimationFrame(u),()=>{s.current&&cancelAnimationFrame(s.current)}},[n,o]),i}function Il(e=.5){const n=b.useRef(null),[t,o]=b.useState(!1);return b.useEffect(()=>{const i=n.current;if(!i)return;const r=new IntersectionObserver(([a])=>{a.isIntersecting&&a.intersectionRatio>=e&&o(!0)},{threshold:e});return r.observe(i),()=>r.disconnect()},[e]),[n,t]}function Ul(e=.35){const n=b.useRef(null),[t,o]=b.useState(!1);return b.useEffect(()=>{const i=n.current;if(!i)return;const r=new IntersectionObserver(([a])=>{o(a.isIntersecting&&a.intersectionRatio>=e)},{threshold:e});return r.observe(i),()=>r.disconnect()},[e]),[n,t]}const ys="volunteerhigh_home_animations_played";function og(){return sessionStorage.getItem(ys)!=="true"}function ig(){sessionStorage.setItem(ys,"true")}function rg(){sessionStorage.removeItem(ys)}const ag=[{label:"HandsOn Greater Phoenix",to:"/org/hands-on-greater-phoenix"},{label:"Arizona State Parks and Trails",to:"/org/arizona-state-parks"},{label:"City of Flagstaff",to:"/org/city-of-flagstaff"},{label:"Junior Achievement of Arizona",to:"/org/junior-achievement"},{label:"Feed My Starving Children",to:"/org/feed-my-starving-children"},{label:"Arizona Sustainability Alliance",to:"/org/az-sustainability-alliance"},{label:"Bureau of Land Management Arizona",to:"/org/bureau-of-land-management"},{label:"Lost Our Home Pet Rescue",to:"/org/lost-our-homes-pet-rescue"}];function yo({current:e}){const[n,t]=b.useState(!1),o=b.useRef(null),i=[{key:"quest",label:"Quest AI",to:"/quest"},{key:"maps",label:"Maps",to:"/maps"},{key:"about",label:"About",to:"/about"},{key:"faq",label:"FAQ's",to:"/faq"}];function r(){o.current&&clearTimeout(o.current),t(!0)}function a(){o.current=setTimeout(()=>t(!1),150)}return h.jsxs("div",{className:"navbar",children:[h.jsx(Qo,{to:"/home",className:"navbar-logo-link",onClick:rg,children:h.jsx("img",{src:tg,alt:"VolunteerHigh",className:"navbar-logo"})}),h.jsx("div",{className:"navbar-spacer"}),i.map(s=>e===s.key?h.jsx("span",{className:"navbar-current",children:s.label},s.key):h.jsx(Qo,{to:s.to,className:"navbar-link",children:s.label},s.key)),h.jsxs("div",{className:"navbar-org-dropdown",onMouseEnter:r,onMouseLeave:a,children:[h.jsxs("button",{className:`navbar-link navbar-org-trigger${e==="organizations"?" navbar-current":""}`,onClick:()=>t(s=>!s),"aria-expanded":n,children:["Organizations ",h.jsx("span",{className:"navbar-org-caret",children:"▾"})]}),n&&h.jsx("div",{className:"navbar-org-menu navbar-org-menu-right",children:ag.map(s=>h.jsx(Qo,{to:s.to,className:"navbar-org-menu-item",onClick:()=>t(!1),children:s.label},s.to))})]})]})}const sg="/assets/Image-DgsHldMx.png",lg="/assets/HandsOnGreaterPhoenixLogo-t_QkNJAt.jpg",ug="/assets/AZStateParksandTrailsLogo-bjg6v4ly.jpg",dg="/assets/CityOfFlagstaffLogo-DLqi0ajI.jpg",cg="/assets/JuniorAchievementOfArizonaLogo-phlbKpa8.jpg",hg="/assets/FMSCLogo-BcUhIjKK.jpg",pg="/assets/AZSustainabilityAllianceLogo-Gt_x0TzN.jpg",fg="/assets/BureauOfLandManagement-BaEZUK12.jpg",gg="/assets/LostOurHomesPetRescueImageLogo-BENexxV-.jpg",mg=[{to:"/org/hands-on-greater-phoenix",img:lg,name:"HandsOn Greater Phoenix",circular:!0},{to:"/org/arizona-state-parks",img:ug,name:"Arizona State Parks and Trails",circular:!1},{to:"/org/city-of-flagstaff",img:dg,name:"City of Flagstaff",circular:!0},{to:"/org/junior-achievement",img:cg,name:"Junior Achievement of Arizona",circular:!0}],yg=[{to:"/org/feed-my-starving-children",img:hg,name:"Feed My Starving Children",circular:!1},{to:"/org/az-sustainability-alliance",img:pg,name:"Arizona Sustainability Alliance",circular:!0},{to:"/org/bureau-of-land-management",img:fg,name:"Bureau of Land Management Arizona",circular:!1},{to:"/org/lost-our-homes-pet-rescue",img:gg,name:"Lost Our Home Pet Rescue",circular:!1}];function Dl({to:e,img:n,name:t,circular:o,isVisible:i,index:r,animationsEnabled:a}){const s=!a||i;return h.jsxs(Qo,{to:e,className:`partner-box${s?" visible":""}${a?"":" no-anim"}`,style:a?{transitionDelay:`${r*.28}s`}:void 0,children:[h.jsx("img",{src:n,alt:t,className:o?"circular":""}),h.jsx("span",{className:"org-name",children:t})]})}function wg(){const e=_i(),[n,t]=Il(.3),[o,i]=Il(.6),[r,a]=Ul(.35),[s,l]=Ul(.35),[u]=b.useState(()=>og());b.useEffect(()=>{u&&ig()},[u]);const f=vr(90,t,1500,!u),c=vr(100,t,1500,!u),m=vr(92,t,1500,!u);return h.jsxs("div",{className:"main-screen",children:[h.jsx(yo,{current:null}),h.jsxs("div",{className:"main-scroll",children:[h.jsx("div",{className:"hero-section",style:{backgroundImage:`url(${sg})`},children:h.jsxs("div",{className:"hero-text",children:[h.jsx("p",{className:"hero-brand",children:"VolunteerHigh"}),h.jsx("h1",{className:"hero-line1",children:"Discover High School"}),h.jsx("h1",{className:"hero-line2 blue",children:"Volunteer Opportunities"}),h.jsx("p",{className:"hero-sub",children:`Find community service in Arizona.
Together, we can make a lasting
impact and build a better tomorrow
for those in need`})]})}),h.jsxs("div",{className:"project-section",children:[h.jsx("h2",{className:"project-title",children:"The VolunteerHigh Project"}),h.jsx("p",{className:"project-sub",children:"A platform that empowers students to find, explore, and engage in"}),h.jsx("p",{className:"project-sub second",children:"meaningful local volunteer opportunities while creating lasting community impact."}),h.jsxs("div",{className:"stats-row",ref:n,children:[h.jsxs("div",{className:"stat-block",children:[h.jsx("div",{className:"stat-rule",children:"――――――"}),h.jsxs("p",{className:"stat-number",children:[f,"%+"]}),h.jsx("p",{className:"stat-caption",children:`of students participated in volunteer
work before entering
college`})]}),h.jsxs("div",{className:"stat-block",children:[h.jsx("div",{className:"stat-rule",children:"――――――"}),h.jsxs("p",{className:"stat-number",children:[c,"+"]}),h.jsx("p",{className:"stat-caption",children:`volunteering hours by the
average high schooler before
graduating.`})]}),h.jsxs("div",{className:"stat-block",children:[h.jsx("div",{className:"stat-rule",children:"――――――"}),h.jsxs("p",{className:"stat-number",children:[m,"%+"]}),h.jsx("p",{className:"stat-caption",children:`of admissions officers
value 4-year volunteering`})]})]})]}),h.jsxs("div",{className:"partners-divider-row",ref:o,children:[h.jsx("div",{className:"rule"}),h.jsx("span",{className:"label",children:"Our Partner Organizations"}),h.jsx("div",{className:"rule"})]}),h.jsxs("div",{className:"partners-grid-wrap",children:[h.jsx("div",{className:"partners-row",children:mg.map((y,w)=>h.jsx(Dl,{...y,isVisible:i,index:w,animationsEnabled:u},y.to))}),h.jsx("div",{className:"partners-row",children:yg.map((y,w)=>h.jsx(Dl,{...y,isVisible:i,index:w+4,animationsEnabled:u},y.to))})]}),h.jsx("div",{className:"quest-section",children:h.jsxs("div",{className:`scroll-transition${a?" identity":""}`,ref:r,children:[h.jsx("h2",{className:"quest-heading",children:"Quest - Our Volunteering Recommendation Engine"}),h.jsx("p",{className:"quest-body-text",children:`Quest in an intelligent Volunteer Recommendation engine helps you to find the best volunteering opportunities tailored to your
interests and location. By analyzing your preferences and matching them with relevant organizations, Quest simplifies the search process and makes
community involvement more accessible. Quest is designed to help you find the best volunteer opportunities where you can
make the greatest impact while supporting a cause that geniunely matters to you.`}),h.jsx("button",{className:"quest-cta",onClick:()=>e("/quest"),children:"Use Quest"})]})}),h.jsx("div",{className:"maps-section",children:h.jsxs("div",{className:`scroll-transition${l?" identity":""}`,ref:s,children:[h.jsx("h2",{className:"maps-heading",children:"Maps"}),h.jsx("p",{className:"maps-body-text",children:`Want to find the nearest opportunity, and fast? Maps is our location-based volunteer discovery tool that helps
you to find the nearest opportunity. By displaying nearby opportunities on an interactive map, Maps makes it easy
to explore opportunities based on your current location and identify places where you can get involved. Maps simplifies
the process of finding local volunteer opportunities, helping you connect with organizations in your community and make a
meaningful impact close to your home, while earning verified hours.`}),h.jsx("button",{className:"maps-cta",onClick:()=>e("/maps"),children:"Use Maps"})]})})]})]})}const mc="AQ.Ab8RN6ILQtJe2eUTlbveerBT6rJDhIghmyXY_hgBSSADpad49A",vg="gemini-2.5-flash-lite";function yc(){return!!mc}const kg=`You are Quest AI, a friendly volunteer recommendation engine for VolunteerHigh, a platform helping Arizona high school students find volunteer opportunities.

Rules:
1. The UI already shows a greeting, so jump straight to helping when the user sends their first message.
2. When the user shares their interests and/or location, search the provided opportunity database and recommend the single best match. Include the name, a brief reason why it fits, and key details like date, time, and location.
3. Answer follow-up questions accurately using the database.
4. Keep responses conversational, warm, and concise.
5. If no opportunities match well, say so honestly and suggest they check back soon as new opportunities are added daily.`;let kr=[],br=null;async function bg(e,n){var r,a,s,l,u,f;if(!yc())throw new Error("Quest AI isn't configured yet. Add your Gemini API key in src/config/firebaseConfig.js.");br||(br=kg+`

Volunteer opportunities database:
`+n),kr.push({role:"user",parts:[{text:e}]});const t=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${vg}:generateContent?key=${mc}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system_instruction:{parts:[{text:br}]},contents:kr,generationConfig:{maxOutputTokens:1e3,temperature:.7}})});if(!t.ok){const c=await t.json().catch(()=>({}));throw new Error(((r=c==null?void 0:c.error)==null?void 0:r.message)||`API error ${t.status}`)}const i=((f=(u=(l=(s=(a=(await t.json()).candidates)==null?void 0:a[0])==null?void 0:s.content)==null?void 0:l.parts)==null?void 0:u[0])==null?void 0:f.text)??"";return kr.push({role:"model",parts:[{text:i}]}),i}const Pg={title:"HandsOn Greater Phoenix",note:null,opportunities:[{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

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

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008ydQqsMAE",date:"2026-11-07"},{name:"Tempe Smoke Alarm Walk (Referral)",description:`Why Your Involvement Matters: With your support, we aim to install smoke alarms at no cost to residents in low-income or high-risk homes, with a goal of reaching hundreds of residents in just one morning! This is an opportunity to directly impact our community and contribute to creating safer living environments for those who need it most.

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

Volunteers still needed: 100`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009b6eDlMAI",date:"2026-11-07"},{name:"Coronado Area Bowling Competition in Tucson (Referral)",description:`Join Special Olympics Arizona for a Coronado Area Bowling Competition in Tucson!

 

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

Volunteers still needed: 20`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EF2GuMAL",date:"2026-11-07"},{name:"Garden Volunteers with St. Vincent de Paul (Main Campus)",description:`St. Vincent de Paul's three urban farms produce nutritionally dense food for those who do not have access to proper vitamins and nutrients. Annually, they grow 27,000 pounds of produce, which goes directly to SVdP's kitchens to be prepared for individuals and families experiencing homelessness and food insecurity, or delivered directly to families’ doors.

Spend your morning fertilizing soil, composting, planting, and harvesting the produce that helps feed the local community!

Please wear Closed-toe shoes, and clothes that can get dirty. Bring SPF and a reusable water bottle. There are shade structures, but be prepared to be in the sun.

Please Note: Volunteers serving court-ordered hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 8 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-07 | 8:00 AM - 11:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 8`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008qwjfZMAQ",date:"2026-11-07"},{name:"Food Box Distribution with Creighton Community Foundation",description:`Creighton Community Foundation (CCF) works in east-central Phoenix to cultivate a sense of school-centered identity, foster neighborhood interaction, increase social capacity, and improve adult supportive relationships within vibrant communities. Our ultimate goal is to improve youth life outcomes and create multi-generational in-community transformation.

Join us at Excelencia School to distribute food boxes to families through a mobile delivery line. Spend your morning making sure the Phoenix community has plenty of food for the week ahead!

There is no minimum age for this opportunity if youth are attending with a parent or guardian. Volunteers under 16 must attend with a parent/guardian. Volunteers aged 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-07 | 8:00 AM - 12:00 PM

Location: Phoenix, AZ, 85006

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008mYrbgMAC",date:"2026-11-07"},{name:"Mountain Area Golf Competition in Prescott (Referral)",description:`Join Special Olympics Arizona for a Mountain Area Golf Competition in Prescott!

 

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

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008mVanWMAS",date:"2026-11-07"},{name:"New Way Academy&#39;s Fall Kickoff (Referral)",description:`We are in need of volunteers for our biggest community event of the year, our annual Fall Kickoff on Saturday, November 7th from 11-2. Our community is comprised of students in grades K-12 with learning disabilities from all across the valley. Our families come from 75 different zip codes, making traditional school community gatherings difficult for our families to attend. Our Fall Kickoff is our highest attended event each year, with last year 520 tickets sold. Traditionally, we ask our parents and staff to help at various volunteer stations at the event, but this has resulted in volunteers not being able to fully enjoy the day with their families. We would be so grateful to partner with outside volunteers so our families and teachers can fully enjoy the event!

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

Volunteers still needed: 12`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008EE7FGMA1",date:"2026-11-07"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards Roosevelt",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at the Roosevelt Mini Park. Simply check the water temperature & water flow and wipe down the unit!

Do you walk by the mini park every morning? Do you ride your bike down Roosevelt Row once a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleaning. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-08 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTzyLMAS",date:"2026-11-08"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Lindo Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Lindo Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-08 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85041

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTwUPMA0",date:"2026-11-08"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards Desert West",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the two drinking stations at Desert West Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Desert West Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-08 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85035

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tUkM7MAK",date:"2026-11-08"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-09 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3wzMAC",date:"2026-11-09"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Grant Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Grant Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Grant Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-09 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tURwDMAW",date:"2026-11-09"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards-Cave Creek",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Cave Creek-Larkspur Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-09 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85029

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tUBt1MAG",date:"2026-11-09"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-10 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3x0MAC",date:"2026-11-10"},{name:"Picking and Packing Support with Arizona Diaper Bank",description:`Join us at the Arizona Diaper Bank to help with order picking and packing! Arizona Diaper promotes dignity through community partnerships by making diapers, period products, and incontinence supplies accessible.

Volunteers will help prepare diaper orders for distribution to families and partner agencies. You will pack up diaper order based on specific requests as well as organize and label packed orders for easy distribution. Your efforts will directly contribute to ensuring that essential supplies reach those in need efficiently and on time!

Please wear closed-toe shoes. This opportunity takes place in a warehouse which can get warm in the summer months!

The minimum age for this project is 10 with a parent/guardian. All Volunteers under the age of 18 must be accompanied by a parent/guardian.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-10 | 9:00 AM - 12:00 PM

Location: Phoenix, AZ, 85043

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008q2Bt7MAE",date:"2026-11-10"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-11 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3x1MAC",date:"2026-11-11"},{name:"BINGO! at Osborn Pointe",description:`Osborn Pointe is a 48-unit supportive housing community designed to serve individuals 55 and over.

Join the residents of Osborn Pointe for a fun game of BINGO! Volunteers will help run the game, read the winning numbers, and hand out prizes. Bring your smile and a positive attitude to set residents up for a wonderful weekend!

Please arrive at least 5 minutes early. The game will begin promptly at 3pm.

The minimum age for this project is 12 with a parent or guardian. All volunteers under the age of 18 must be accompanied by an adult.

2026-11-11 | 3:00 PM - 4:00 PM

Location: Phoenix, AZ, 85012

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009sh2CXMAY",date:"2026-11-11"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-12 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3x2MAC",date:"2026-11-12"},{name:"Valley Area Softball Competition (Referral)",description:`Join Special Olympics Arizona for a Valley Area Softball Competition in Peoria!

 

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

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008ju63BMAQ",date:"2026-11-12"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

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

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008mZ6cIMAS",date:"2026-11-14"},{name:"Stuff-The-Sleigh: Help Collect Donations for Operation Santa! (Referral)",description:`Help us kick off the holiday season by volunteering at SARRC's (Southwest Autism Research & Resource Center) Operation Santa Claus Toy Drive!

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

Volunteers still needed: 7`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008WyK29MAF",date:"2026-11-14"},{name:"Game Room Nights (Referral)",description:`Game Room Nights

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

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fhw3CMAQ",date:"2026-11-14"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards Roosevelt",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at the Roosevelt Mini Park. Simply check the water temperature & water flow and wipe down the unit!

Do you walk by the mini park every morning? Do you ride your bike down Roosevelt Row once a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleaning. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-15 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTzyMMAS",date:"2026-11-15"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Lindo Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Lindo Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-15 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85041

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTwUQMA0",date:"2026-11-15"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards Desert West",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the two drinking stations at Desert West Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Desert West Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-15 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85035

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tUkM8MAK",date:"2026-11-15"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-16 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3x4MAC",date:"2026-11-16"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Grant Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Grant Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Grant Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-16 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tURwEMAW",date:"2026-11-16"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards-Cave Creek",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Cave Creek-Larkspur Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-16 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85029

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tSufmMAC",date:"2026-11-16"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

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

Volunteers still needed: 6`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008WwhZNMAZ",date:"2026-11-21"},{name:"PACC911 Adopt-A-Thon Franciscan Renewal Center (Referral)",description:`We are looking for volunteers to assist pet rescues and shelters with:

	
putting up signage

	
directing vendors to their booth or parking area

	
unloading vehicles

	
setting up booths

	
setting up tables and chairs

	
getting water for the animals

	
cleaning up areas

Other duties may be assigned.

2026-11-21 | 8:00 AM - 10:30 AM

Location: Scottsdale, AZ, 85253

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009upWaTMAU",date:"2026-11-21"},{name:"Furry Friends at Forever Loved Pet Sanctuary",description:`Forever Loved's mission is to help overlooked senior dogs in Arizona find their forever homes. Help care for these furry friends while they wait for adoption!

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

Volunteers still needed: 7`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009TUPgtMAH",date:"2026-11-21"},{name:"Medical Sort and Pack at Project C.U.R.E.",description:`Bring hope and health to the world with Project C.U.R.E., a national faith-based organization! Join us as we sort and pack desperately needed medical supplies that are shipped to hospitals, clinics, and orphanages in over 100 poverty stricken countries worldwide! Volunteers will meet new people and learn a lot about medical supplies and the urgent needs of them in under-resourced countries around the world.

The minimum age for this volunteer opportunity is 14 with a parent or guardian. All volunteers under the age of 18 must be accompanied by a parent/guardian.

Volunteers must create an account with Project C.U.R.E. and sign in through their system at the warehouse. To make this process faster, please register here to set up your account before the project date.

Note: The building is a warehouse, so please wear close-toed shoes, appropriate clothing and bring water. You may be packing in either the warehouse or the sorting center. Please be prepared to do some lifting (up to 30 pounds). 

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-21 | 9:00 AM - 12:00 PM

Location: Phoenix, AZ, 85009

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008l05qTMAQ",date:"2026-11-21"},{name:"2026 Family Volunteer Day at HandsOn Greater Phoenix",description:`Saturday, November 21st, is National Family Volunteer Day! Bring the family to this fun and engaging volunteer event at the HandsOn Greater Phoenix office in Mesa!

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

Volunteers still needed: 6`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009TZHqHMAX",date:"2026-11-21"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards Roosevelt",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at the Roosevelt Mini Park. Simply check the water temperature & water flow and wipe down the unit!

Do you walk by the mini park every morning? Do you ride your bike down Roosevelt Row once a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleaning. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-22 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTzyNMAS",date:"2026-11-22"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Lindo Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Lindo Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-22 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85041

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTwURMA0",date:"2026-11-22"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards Desert West",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the two drinking stations at Desert West Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Desert West Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-22 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85035

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tUkM9MAK",date:"2026-11-22"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-23 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3x9MAC",date:"2026-11-23"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Grant Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Grant Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Grant Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-23 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tURwFMAW",date:"2026-11-23"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards-Cave Creek",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Cave Creek-Larkspur Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-23 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85029

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tSufnMAC",date:"2026-11-23"},{name:"Chef&#39;s Night Off at HomeBase",description:`Roll up your sleeves and help chop, slice, and dice with love as you prepare and serve dinner for homeless youth and young adults (ages 18-21) at HomeBase Youth Services. You can also help pack lunches that will be distributed throughout the week to homeless youth and young adults. Allow the busy chef to have a nice evening off.

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

Volunteers still needed: 12`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009VgQXYMA3",date:"2026-11-26"},{name:"Adaptive Pickleball- Coach/Unified Partner (Referral)",description:`Dates: Thursdays, November 5, 2026 - January 28, 2027 + Tournament on Saturday, January 30, 2027

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

Volunteers still needed: 6`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008lZ4j8MAC",date:"2026-11-28"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards Roosevelt",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at the Roosevelt Mini Park. Simply check the water temperature & water flow and wipe down the unit!

Do you walk by the mini park every morning? Do you ride your bike down Roosevelt Row once a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleaning. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-29 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTzyOMAS",date:"2026-11-29"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Lindo Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Lindo Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-29 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85041

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTwUSMA0",date:"2026-11-29"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards Desert West",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the two drinking stations at Desert West Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Desert West Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-29 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85035

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tUkMAMA0",date:"2026-11-29"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-30 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3xEMAS",date:"2026-11-30"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Grant Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Grant Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Grant Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-30 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tURwGMAW",date:"2026-11-30"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards-Cave Creek",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Cave Creek-Larkspur Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-30 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85029

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tSufoMAC",date:"2026-11-30"},{name:"Grant Writer (Referral)",description:`Our organization is seeking experienced writers, researchers, and data analysts to assist with storytelling and securing funding that aligns with our mission and vision. We are offering key opportunities for both remote and on-site roles. Specifically, the Grant Writer will be responsible for researching potential funders, drafting proposals, and managing the fundraising calendar. If you are interested in supporting our organization’s advancement, please reach out to us for inquiry and signup via email at dure45@sbuagphx.org. Commitment for at least a year is required and we also welcome negotiation in the terms to be served.

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

Volunteers still needed: 20`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009bbfrxMAA",date:"2026-12-05"},{name:"Garden Volunteers with St. Vincent de Paul (Main Campus)",description:`St. Vincent de Paul's three urban farms produce nutritionally dense food for those who do not have access to proper vitamins and nutrients. Annually, they grow 27,000 pounds of produce, which goes directly to SVdP's kitchens to be prepared for individuals and families experiencing homelessness and food insecurity, or delivered directly to families’ doors.

Spend your morning fertilizing soil, composting, planting, and harvesting the produce that helps feed the local community!

Please wear Closed-toe shoes, and clothes that can get dirty. Bring SPF and a reusable water bottle. There are shade structures, but be prepared to be in the sun.

Please Note: Volunteers serving court-ordered hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 8 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-12-05 | 8:00 AM - 11:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 28`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008qwYk6MAE",date:"2026-12-05"},{name:"Food Box Distribution with Creighton Community Foundation",description:`Creighton Community Foundation (CCF) works in east-central Phoenix to cultivate a sense of school-centered identity, foster neighborhood interaction, increase social capacity, and improve adult supportive relationships within vibrant communities. Our ultimate goal is to improve youth life outcomes and create multi-generational in-community transformation.

Join us at Excelencia School to distribute food boxes to families through a mobile delivery line. Spend your morning making sure the Phoenix community has plenty of food for the week ahead!

There is no minimum age for this opportunity if youth are attending with a parent or guardian. Volunteers under 16 must attend with a parent/guardian. Volunteers aged 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-12-05 | 8:00 AM - 12:00 PM

Location: Phoenix, AZ, 85006

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008mX3YIMA0",date:"2026-12-05"},{name:"Furry Friends at Forever Loved Pet Sanctuary",description:`Forever Loved's mission is to help overlooked senior dogs in Arizona find their forever homes. Help care for these furry friends while they wait for adoption!

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

Volunteers still needed: 6`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008mYDWpMAO",date:"2026-12-06"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards Roosevelt",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at the Roosevelt Mini Park. Simply check the water temperature & water flow and wipe down the unit!

Do you walk by the mini park every morning? Do you ride your bike down Roosevelt Row once a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleaning. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-12-06 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTzyPMAS",date:"2026-12-06"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Lindo Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Lindo Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-12-06 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85041

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTwUTMA0",date:"2026-12-06"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards Desert West",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the two drinking stations at Desert West Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Desert West Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-12-06 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85035

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tUkMBMA0",date:"2026-12-06"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Grant Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Grant Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Grant Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-12-07 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tURwHMAW",date:"2026-12-07"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards-Cave Creek",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Cave Creek-Larkspur Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-12-07 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85029

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tSufpMAC",date:"2026-12-07"},{name:"Nutrition Program Volunteer (Referral)",description:`Advance Community's Nutrition Program offers 2 separate volunteer opportunities. Our first program, Stove to Table delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

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

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fhoWsMAI",date:"2026-12-08"},{name:"Picking and Packing Support with Arizona Diaper Bank",description:`Join us at the Arizona Diaper Bank to help with order picking and packing! Arizona Diaper promotes dignity through community partnerships by making diapers, period products, and incontinence supplies accessible.

Volunteers will help prepare diaper orders for distribution to families and partner agencies. You will pack up diaper order based on specific requests as well as organize and label packed orders for easy distribution. Your efforts will directly contribute to ensuring that essential supplies reach those in need efficiently and on time!

Please wear closed-toe shoes. This opportunity takes place in a warehouse which can get warm in the summer months!

The minimum age for this project is 10 with a parent/guardian. All Volunteers under the age of 18 must be accompanied by a parent/guardian.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-12-09 | 9:00 AM - 12:00 PM

Location: Phoenix, AZ, 85043

Volunteers still needed: 7`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008pzWm4MAE",date:"2026-12-09"},{name:"Nutrition Program Volunteer (Referral)",description:`Advance Community's Nutrition Program offers 2 separate volunteer opportunities. Our first program, Stove to Table delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package over 500 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal.

Our second program is Mercado Fresh where we provide monthly nutritious food boxes to individuals facing food insecurity and chronic health conditions—because giving food is giving dignity.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
9:00 AM to 1:00 PM

You will be placed where the need is the greatest that day (either the kitchen or warehouse)

We ask that you come dressed appropriately; please no open toed shoes. Volunteers under the age of 16 are welcome with a parent or guardian.

2026-12-09 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fG8X0MAK",date:"2026-12-09"},{name:"Adaptive Basketball- Adult (Referral)",description:`Dates: Wednesdays, December 2, 2026 – March 3, 2027

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

Volunteers still needed: 17`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008pLmU6MAK",date:"2026-12-12"},{name:"Afternoon Sort and Pack at St. Mary&#39;s Food Bank - Phoenix",description:`Bring your helping hands to sort, pack, and distribute food that will go to other nonprofits and families in crisis at St. Mary's Food Bank Alliance. You will have a blast meeting new people while working the assembly line!

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

Volunteers still needed: 12`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008WxXpTMAV",date:"2026-12-12"},{name:"From the Ground Up: Volunteer Day at the Ranch (Referral)",description:`Join us for a meaningful day of giving back at Wildcat Ranch Phoenix! This in-person volunteer event is a wonderful opportunity to roll up your sleeves, enjoy the outdoors, and make a direct impact on the ranch and the horses who call it home.

Volunteers will work together on a variety of hands-on projects, including fence repairs, stall cleaning and refreshing, barn organization, and general facility beautification. These improvements help create a safer, more welcoming environment for our horses and the individuals who participate in our therapy programs.

No ranch experience is necessary—whether you’re a seasoned ranch hand or simply eager to help, your time and effort truly make a difference. Connect with nature, meet fellow community members, and be part of something meaningful.

2026-12-13 | 7:00 AM - 10:00 AM

Location: PHOENIX, AZ, AZ, 85042

Volunteers still needed: 50`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008oaIC8MAM",date:"2026-12-13"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards Roosevelt",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at the Roosevelt Mini Park. Simply check the water temperature & water flow and wipe down the unit!

Do you walk by the mini park every morning? Do you ride your bike down Roosevelt Row once a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleaning. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-12-13 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTzyQMAS",date:"2026-12-13"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Lindo Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Lindo Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-12-13 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85041

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTwUUMA0",date:"2026-12-13"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards Desert West",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the two drinking stations at Desert West Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Desert West Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-12-13 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85035

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tUkMCMA0",date:"2026-12-13"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Grant Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Grant Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Grant Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-12-14 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tURwIMAW",date:"2026-12-14"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards-Cave Creek",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Cave Creek-Larkspur Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-12-14 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85029

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tSufqMAC",date:"2026-12-14"},{name:"Nutrition Program Volunteer (Referral)",description:`Advance Community's Nutrition Program offers 2 separate volunteer opportunities. Our first program, Stove to Table delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

Each week we prepare and individually package over 500 meals for delivery in our kitchen. We rely on volunteers to help us prepare large quantities of ingredients, fresh fruits, and vegetables; as well as package meals and clean the kitchen at the end of a meal.

Our second program is Mercado Fresh where we provide monthly nutritious food boxes to individuals facing food insecurity and chronic health conditions—because giving food is giving dignity.

Shifts available are Tuesdays, Wednesdays & Thursdays:

	
9:00 AM to 1:00 PM

You will be placed where the need is the greatest that day (either the kitchen or warehouse)

We ask that you come dressed appropriately; please no open toed shoes. Volunteers under the age of 16 are welcome with a parent or guardian.

2026-12-15 | 9:00 AM - 1:00 PM

Location: Phoenix, AZ, 85015

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fG43XMAS",date:"2026-12-15"},{name:"HeARTsy (Peoria) Art Class Volunteer Adaptive Adults (Referral)",description:`During COVID, in 2020, Heartsy started working with adaptive adults with disabilities here in AZ including the Arc of Tempe, Tempe Pathway to Work, Treasure House and city park and recreation groups in Peoria, Surprise, Mesa, and Phoenix.  We love to have FUN so bring your silly side, your best sence of humor and a joke or two if that's your style! EVERYONE IS ACCEPTED HERE! 

After 4 years of experience specifically teaching this special group of individuals, we know their attention span, we know what arts materials they are able to safely manipulate and how to keep them moving successfully through a 2 hour program. ( While laughing, smiling, and having FUN!) 

As a volunteer in the classroom we sometimes have a student who would benefit from one on one assistance. No arts experience is necessary, just patience, kindness and a smile.

These students have a variety of intellectual, physical and mental disabilities. They sometimes find it hard to fit into a typical public group arts class and therefore need a special program, such as this, which is catered to their special style of learning. You will be AMAZED at what they create! 

We are looking for (5) volunteers MAXIMUM to help us in class. Verifying by phone is mandatory to confirm your enrollment for this class. Please call Tina upon registration at 651-334-3997. Let's meet outside in the parking lot or at the front door 15 minutes early ( I often could use a helping hand carrying materials inside.) Please wait there until we arrive as we are often coming from other classes/locations and timing is a bit flexible within 10-15 minutes. 

The minimum age for this volunteer opportunity is 16 with a parent/guardian. Please let us know if you plan to bring a child under the age of 18.

This is a casual, relaxed atmosphere. Please wear comfortable close-toed shoes, and feel free to wear jeans and a solid black T-shirt so the students know who Heartsy helpers are. (Please no shirts with words on them as they are distracting to this population) 

If you have questions, please call or email Tina Ferguson @ (651) 334-3997 or Tina@beHeARTsy.com

Please note: We are generally not reachable the day of class, during class time or in transit to classes. Questions or comments must be emailed or texted to Tina 24 hours in advance. Pleasr respect our prep time.

Thank you so much for your support! Your assistance in our classes or at 3rd Monday art material preparation day has been absolutely key to our success as a volunteer based NonProfit 501.c3 organization.

2026-12-15 | 10:30 AM - 12:30 PM

Location: Peoria, AZ, 85345

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000099yXx7MAE",date:"2026-12-15"},{name:"HeARTsy (Peoria) Art Class Volunteer-Senior Citizens (Referral)",description:`HeARTsy's Executive director, artist and architect, Tina Ferguson, has worked with Seniors since 2009 when she closed her Architectural Fitm to start a for profit arts education business inspired by her own Nana after her grandfathers unexpected death.  Before COVID, Artsy Smartsy was Minnesota and Arizonas largest Senior arts education provider specializing in the fine arts education of seniors with Alzheimer's, Dementia and Parkinson's Disease. She won the Phoenix Major's Art Award in 2018 for her work with these populations. 

 

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

2026-12-15 | 12:45 PM - 2:45 PM

Location: Peoria, AZ, 85345

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009A39u5MAB",date:"2026-12-15"},{name:"Adaptive Cheer (Referral)",description:`Dates: Tuesdays, December 1, 2026-March 2, 2027

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

2026-12-15 | 6:30 PM - 8:30 PM

Location: Mesa, AZ, 85208

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fhoWtMAI",date:"2026-12-15"},{name:"HeARTsy (Phoenix) Art Class Volunteer-Adaptive Adults (Referral)",description:`During COVID, in 2020, Heartsy started working with adaptive adults with disabilities here in AZ including the Arc of Tempe, Tempe Pathway to Work, Treasure House and city park and recreation groups in Peoria, Surprise, Mesa, and Phoenix.  We love to have FUN so bring your silly side, your best sence of humor and a joke or two if that's your style! EVERYONE IS ACCEPTED HERE! 

After 6 years of experience specifically teaching this special group of individuals, we know their attention span, we know what arts materials they are able to safely manipulate and how to keep them moving successfully through a 2 hour program. ( While laughing, smiling, and having FUN!) 

As a volunteer in the classroom we sometimes have a student who would benefit from one on one assistance. No arts experience is necessary, just patience, kindness and a smile.

These students have a variety of intellectual, physical and mental disabilities. They sometimes find it hard to fit into a typical public group arts class and therefore need a special program, such as this, which is catered to their special style of learning. You will be AMAZED at what they create! 

We are looking for (5) volunteers MAXIMUM to help us in class. Verifying by email is mandatory to confirm your enrollment for this class. Let's meet outside in the parking lot or at the front door 15 minutes early ( I often could use a helping hand carrying materials inside.) Please wait there until we arrive as we are often coming from other classes/locations and timing is a bit flexible within 10-15 minutes. 

The minimum age for this volunteer opportunity is 16 with a parent/guardian. Please let us know if you plan to bring a child under the age of 18.

This is a casual, relaxed atmosphere. Please wear comfortable close-toed shoes, and feel free to wear jeans and a solid black T-shirt so the students know who Heartsy helpers are. (Please no shirts with words on them as they are distracting to this population) 

If you have questions, please email Tina Ferguson @ Tina@beHeARTsy.com

Please note: We are generally not reachable the day of class, during class time or in transit to classes. Questions or comments must be emailed or texted to Tina 24 hours in advance. Pleasr respect our prep time.

Thank you so much for your support! Your assistance in our classes or at 3rd Monday art material preparation day has been absolutely key to our success as a volunteer based NonProfit 501.c3 organization.

2026-12-16 | 9:45 AM - 11:45 AM

Location: Phoenix, AZ, 85042

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009A3oluMAB",date:"2026-12-16"},{name:"HeARTsy (Phoenix) Art Class Volunteer - Senior Citizens (Referral)",description:`-

2026-12-16 | 12:00 PM - 2:00 PM

Location: Phoenix, AZ, 85042

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000099vpIgMAI",date:"2026-12-16"},{name:"Adaptive Basketball- Adult (Referral)",description:`Dates: Wednesdays, December 2, 2026 – March 3, 2027

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

2026-12-16 | 6:00 PM - 8:00 PM

Location: Mesa, AZ, 85204

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fkzqhMAA",date:"2026-12-16"},{name:"Adaptive Basketball - Youth (Referral)",description:`Dates: Wednesdays, December 2, 2026 – March 3, 2027

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

2026-12-16 | 6:00 PM - 8:00 PM

Location: Mesa, AZ, 85208

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009flBASMA2",date:"2026-12-16"},{name:"HeARTsy (Tempe) Art Class Volunteer - Adaptive Adults (Referral)",description:`During COVID, in 2020, Heartsy started working with adaptive adults with disabilities here in AZ including the Arc of Tempe, Tempe Pathway to Work, Treasure House and city park and recreation groups in Peoria, Surprise, Mesa, and Phoenix.  We love to have FUN so bring your silly side, your best sence of humor and a joke or two if that's your style! EVERYONE IS ACCEPTED HERE! 

After 4 years of experience specifically teaching this special group of individuals, we know their attention span, we know what arts materials they are able to safely manipulate and how to keep them moving successfully through a 2 hour program. ( While laughing, smiling, and having FUN!) 

As a volunteer in the classroom we sometimes have a student who would benefit from one on one assistance. No arts experience is necessary, just patience, kindness and a smile.

These students have a variety of intellectual, physical and mental disabilities. They sometimes find it hard to fit into a typical public group arts class and therefore need a special program, such as this, which is catered to their special style of learning. You will be AMAZED at what they create! 

We are looking for (5) volunteers MAXIMUM to help us in class. Verifying by phone is mandatory to confirm your enrollment for this class. Please call Tina upon registration at 651-334-3997. Let's meet outside in the parking lot or at the front door 15 minutes early ( I often could use a helping hand carrying materials inside.) Please wait there until we arrive as we are often coming from other classes/locations and timing is a bit flexible within 10-15 minutes. 

The minimum age for this volunteer opportunity is 16 with a parent/guardian. Please let us know if you plan to bring a child under the age of 18.

This is a casual, relaxed atmosphere. Please wear comfortable close-toed shoes, and feel free to wear jeans and a solid black T-shirt so the students know who Heartsy helpers are. (Please no shirts with words on them as they are distracting to this population) 

If you have questions, please call or email Tina Ferguson @ (651) 334-3997 or Tina@beHeARTsy.com

Please note: We are generally not reachable the day of class, during class time or in transit to classes. Questions or comments must be emailed or texted to Tina 24 hours in advance. Pleasr respect our prep time.

Thank you so much for your support! Your assistance in our classes or at 3rd Monday art material preparation day has been absolutely key to our success as a volunteer based NonProfit 501.c3 organization.

2026-12-16 | 6:00 PM - 8:00 PM

Location: Tempe, AZ, 85281

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009A3vaUMAR",date:"2026-12-16"},{name:"El Rancho Del Sol Community Garden (Referral)",description:`Volunteers are one of the most powerful ways Local First Arizona mobilizes communities across the state. By supporting our food access and community initiatives, volunteers help connect residents to fresh, nourishing foods while creating welcoming spaces that celebrate local food and the people who grow, make and share it.

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

2026-12-17 | 8:00 AM - 10:00 AM

Location: Mesa, AZ, 85203

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000093rC84MAE",date:"2026-12-17"},{name:"HeARTsy (Phoenix) Art Class Volunteer-Adaptive Adults (Referral)",description:`During COVID, in 2020, Heartsy started working with adaptive adults with disabilities here in AZ including the Arc of Tempe, Tempe Pathway to Work, Treasure House and city park and recreation groups in Peoria, Surprise, Mesa, and Phoenix.  We love to have FUN so bring your silly side, your best sence of humor and a joke or two if that's your style! EVERYONE IS ACCEPTED HERE! 

After 6 years of experience specifically teaching this special group of individuals, we know their attention span, we know what arts materials they are able to safely manipulate and how to keep them moving successfully through a 2 hour program. ( While laughing, smiling, and having FUN!) 

As a volunteer in the classroom we sometimes have a student who would benefit from one on one assistance. No arts experience is necessary, just patience, kindness and a smile.

These students have a variety of intellectual, physical and mental disabilities. They sometimes find it hard to fit into a typical public group arts class and therefore need a special program, such as this, which is catered to their special style of learning. You will be AMAZED at what they create! 

We are looking for (5) volunteers MAXIMUM to help us in class. Verifying by email is mandatory to confirm your enrollment for this class. Let's meet outside in the parking lot or at the front door 15 minutes early ( I often could use a helping hand carrying materials inside.) Please wait there until we arrive as we are often coming from other classes/locations and timing is a bit flexible within 10-15 minutes. 

The minimum age for this volunteer opportunity is 16 with a parent/guardian. Please let us know if you plan to bring a child under the age of 18.

This is a casual, relaxed atmosphere. Please wear comfortable close-toed shoes, and feel free to wear jeans and a solid black T-shirt so the students know who Heartsy helpers are. (Please no shirts with words on them as they are distracting to this population) 

If you have questions, please email Tina Ferguson @ Tina@beHeARTsy.com

Please note: We are generally not reachable the day of class, during class time or in transit to classes. Questions or comments must be emailed or texted to Tina 24 hours in advance. Pleasr respect our prep time.

Thank you so much for your support! Your assistance in our classes or at 3rd Monday art material preparation day has been absolutely key to our success as a volunteer based NonProfit 501.c3 organization.

2026-12-17 | 9:45 AM - 11:45 AM

Location: Phoenix, AZ, 85042

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009A3x1CMAR",date:"2026-12-17"},{name:"Adaptive Pickleball- Coach/Unified Partner (Referral)",description:`Dates: Thursdays, November 5, 2026 - January 28, 2027 + Tournament on Saturday, January 30, 2027

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

2026-12-17 | 5:00 PM - 8:00 PM

Location: Mesa, AZ, 85205

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009filgcMAA",date:"2026-12-17"},{name:"Lunch Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-12-18 | 10:00 AM - 1:30 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009iGDeYMAW",date:"2026-12-18"},{name:"Site Beautification at YWCA",description:`Part of YWCA's mission is to mitigate aging’s most harmful threats through home-delivered meals and senior centers. The organization provides safe spaces where older adults can congregate, share a meal, crack a smile, and create community.

Do you have a knack for organizing, labeling, decluttering, kit asssembly, or decorating? Then this volunteer opportunity is for you! Help YWCA maintain a warm and welcoming environment for senior guests at their main location in Glendale. Tasks will vary each month. A hot lunch will be provided if desired!

Volunteers must be 18 years or older to participate in this volunteer opportunity.

2026-12-18 | 10:30 AM - 12:30 PM

Location: Glendale, AZ, 85302

Volunteers still needed: 6`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000092gAjaMAE",date:"2026-12-18"},{name:"Evening Meal Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-12-18 | 3:00 PM - 6:00 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009iHTkVMAW",date:"2026-12-18"}]},xg={title:"City of Flagstaff",note:null,opportunities:[{name:"Open Space Working Group meeting",description:`Come meet with Open Space Stewards, and get updates on Flagstaff Open Space's projects at Picture Canyon, McMillan Mesa, and Observatory Mesa Natural Preserves!

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

• Fix-It Clinic Assist - See "Activity Description" (9 spots available)
• Fix-It Clinic Lead - See "Activity Description" (9 spots available)`,date:"2026-08-22",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Fix-it Clinic (2/4)",description:`At Fix-it Clinics, we support sustainable consumption and divert waste from landfills by repairing items that would otherwise end up in the trash. Our incredible team of volunteers can help you fix almost anything, including electronics, jewelry, clothing, bicycles, and more! \r
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

• Fix-It Clinic Assist - See "Activity Description" (9 spots available)
• Fix-It Clinic Lead - See "Activity Description" (9 spots available)`,date:"2026-11-07",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Fix-it Clinic (3/4)",description:`At Fix-it Clinics, we support sustainable consumption and divert waste from landfills by repairing items that would otherwise end up in the trash. Our incredible team of volunteers can help you fix almost anything, including electronics, jewelry, clothing, bicycles, and more! \r
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

• Fix-It Clinic Assist - See "Activity Description" (9 spots available)
• Fix-It Clinic Lead - See "Activity Description" (9 spots available)`,date:"2027-02-06",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Fix-it Clinic (4/4)",description:`At Fix-it Clinics, we support sustainable consumption and divert waste from landfills by repairing items that would otherwise end up in the trash. Our incredible team of volunteers can help you fix almost anything, including electronics, jewelry, clothing, bicycles, and more! \r
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

• Fix-It Clinic Assist - See "Activity Description" (9 spots available)
• Fix-It Clinic Lead - See "Activity Description" (9 spots available)`,date:"2027-05-08",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Full Moon Hike--Tunnel Springs Trail",description:`PROSE - Open Space hosts a full moon walk (and sometimes bike ride) on one of our beautiful Open Space properties--a different spot each month. We start about a half-hour before the moon rises, walk on either a loop trail or out-and-back, and watch the full moon rise. Come check out your open spaces, and meet new people! Check each month for specific starting time, meeting place, and what trail we'll walk/ride for that full moon. Wear sturdy shoes, dress for the weather, and bring a red-light flashlight and hiking poles, but we'll have extras! This month, we'll walk Observatory Mesa Natural Area's Tunnel Springs Trail. It is about 3 miles out and back, and is steep, but all on the wide FUTS trail. Meet at the intersection of Railroad Springs Blvd & Adirondack Ave.

2026-11-24 | 4:45 PM - 6:45 PM

Location: Observatory Mesa-Tunnel Springs (RR Springs Blvd)

Category: Special Event`,date:"2026-11-24",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Big trash cleanup!",description:`Help Open Space clean up several big trash piles way out on Observatory Mesa Natural Preserve. Trash piles located off trails and on slopes, so be prepared for uneven footing. Dress for the weather, wear sturdy shoes, bring drinking water and snacks. We will supply work gloves, trash pickers, and trash bags. Meet at the Sustainability garage at 419 N Mogollon St, and we will drive/ride in City vehicles to/near the site.

2026-11-13 | 1:00 PM - 4:30 PM

Location: Observatory Mesa-Tunnel Springs (RR Springs Blvd)

Category: Trash Clean-Up

• ALL Parks, Recreation, Open Space & Events Volunt - Trash clean-up (8 spots available)`,date:"2026-11-13",link:"https://volunteer.flagstaffaz.gov/Calendar"}]},Si={handsOnGreaterPhoenix:Pg,cityOfFlagstaff:xg};function zl(e){return e&&e.replace(/&#39;/g,"'").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#8217;/g,"’").replace(/&#8216;/g,"‘").replace(/&#8220;/g,"“").replace(/&#8221;/g,"”").replace(/&nbsp;/g," ")}function Yi(e,n){let t=e;if(!t&&n){const r=n.match(/(\d{4}-\d{2}-\d{2})\s*\|/);r&&(t=r[1])}if(!t)return!0;const o=new Date(t+"T23:59:59");if(isNaN(o.getTime()))return!0;const i=new Date;return i.setHours(0,0,0,0),o>=i}function wc(e){return e.map(n=>({...n,name:zl(n.name),description:zl(n.description)})).filter(n=>Yi(n.date,n.description))}const vc={title:"HandsOn Greater Phoenix",note:'For referral volunteer opportunities (marked "Referral" in the title), please contact the listed volunteer coordinator directly to confirm whether service hours can be verified, since HandsOn cannot sign off on hours for projects run by partner organizations.',opportunities:[{name:"TopGolf Competition - Gilbert",link:"https://www.handsonphoenix.org/calendar",description:`Volunteers are needed for event support.
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

Time: 6:15 PM - 8:15 PM`}]};var Hl,_l;const Uo=((_l=(Hl=Si.handsOnGreaterPhoenix)==null?void 0:Hl.opportunities)==null?void 0:_l.length)>0?Si.handsOnGreaterPhoenix:vc,Sg={...Uo,note:'For referral volunteer opportunities (marked "Referral" in the title), please contact HandsOn Greater Phoenix to confirm whether volunteer hours can be verified for that project before signing up.',opportunities:Uo===vc?Uo.opportunities.filter(e=>Yi(e.date)):wc(Uo.opportunities).map(e=>({...e,link:e.link||"https://www.handsonphoenix.org/calendar"}))};var Yl,Bl;const Do=((Bl=(Yl=Si.cityOfFlagstaff)==null?void 0:Yl.opportunities)==null?void 0:Bl.length)>0?Si.cityOfFlagstaff:kc,Ag={...Do,opportunities:Do===kc?Do.opportunities.filter(e=>Yi(e.date)):wc(Do.opportunities).map(e=>({...e,link:e.link||"https://volunteer.flagstaffaz.gov/Calendar"}))},ye={handsOnGreaterPhoenix:Sg,arizonaStateParks:{title:"Arizona State Parks and Trails",note:`Note: The following opportunities require an application, which can be done through this link:
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
Tempe, AZ  85282`}]}};Object.keys(ye).forEach(e=>{ye[e]={...ye[e],opportunities:ye[e].opportunities.filter(n=>Yi(n.date,n.description))}});const Mg=Object.freeze(Object.defineProperty({__proto__:null,organizations:ye},Symbol.toStringTag,{value:"Module"}));function Tg(){const[e,n]=b.useState([{sender:"ai",text:"Hi! I'm Quest AI. Tell me your interests and location, and I will find the best volunteer opportunity near you!"}]),[t,o]=b.useState(""),[i,r]=b.useState(!1),a=b.useRef(null);b.useEffect(()=>{a.current&&(a.current.scrollTop=a.current.scrollHeight)},[e]);const s=JSON.stringify(ye);async function l(){if(!t.trim()||i)return;const f=t;o(""),r(!0),n(c=>[...c,{sender:"user",text:f}]);try{const c=await bg(f,s);n(m=>[...m,{sender:"ai",text:c}])}catch(c){n(m=>[...m,{sender:"ai",text:`Error: ${c.message}`}])}finally{r(!1)}}function u(f){f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),l())}return h.jsxs("div",{className:"quest-page-wrap",children:[h.jsx(yo,{current:"quest"}),h.jsxs("div",{className:"quest-page",children:[h.jsx("h1",{className:"quest-title",children:"Quest AI"}),!yc()&&h.jsxs("div",{className:"quest-config-banner",children:["Quest AI isn't connected yet. Add your Firebase API key in ",h.jsx("code",{children:"src/config/firebaseConfig.js"})," to enable live responses."]}),h.jsx("div",{className:"quest-chat-scroll",ref:a,children:e.map((f,c)=>h.jsxs("div",{className:`quest-message-row ${f.sender}`,children:[f.sender==="ai"&&h.jsx("span",{className:`quest-avatar ai${i&&c===e.length-1?" loading":""}`,children:"✨"}),h.jsx("div",{className:`quest-bubble ${f.sender}`,children:f.text}),f.sender==="user"&&h.jsx("span",{className:"quest-avatar user",children:"👤"})]},c))}),h.jsxs("div",{className:"quest-input-bar",children:[h.jsxs("div",{className:"quest-input-wrap",children:[h.jsx("input",{className:"quest-input",value:t,onChange:f=>o(f.target.value),onKeyDown:u}),!t&&h.jsx("span",{className:"quest-input-placeholder",children:"Ask Quest AI..."})]}),h.jsx("button",{className:"quest-send-btn",onClick:l,children:i?"⋯":"➤"})]})]})]})}const Cg="modulepreload",Vg=function(e){return"/"+e},Wl={},Eg=function(n,t,o){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=Vg(l),l in Wl)return;Wl[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":Cg,u||(c.as="script"),c.crossOrigin="",c.href=l,s&&c.setAttribute("nonce",s),document.head.appendChild(c),u)return new Promise((m,y)=>{c.addEventListener("load",m),c.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return i.then(a=>{for(const s of a||[])s.status==="rejected"&&r(s.reason);return n().catch(r)})},bc="AIzaSyDyePdZI22sIGwZ84yK5mwOzjhtrVwq8us";function Fl(){return!!bc}const jg={handsOnGreaterPhoenix:"/org/hands-on-greater-phoenix",arizonaStateParks:"/org/arizona-state-parks",azSustainabilityAlliance:"/org/az-sustainability-alliance",bureauOfLandManagement:"/org/bureau-of-land-management",cityOfFlagstaff:"/org/city-of-flagstaff",feedMyStarvingChildren:"/org/feed-my-starving-children",lostOurHomesPetRescue:"/org/lost-our-homes-pet-rescue",juniorAchievement:"/org/junior-achievement"},Pc="vh_geocode_cache_v5";let zo=null;function Lg(e){var n;return(n=window.google)!=null&&n.maps?Promise.resolve(window.google):zo||(zo=new Promise((t,o)=>{const i=document.createElement("script");i.src=`https://maps.googleapis.com/maps/api/js?key=${e}&libraries=places,geometry`,i.async=!0,i.onload=()=>{const r=document.createElement("script");r.src="https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js",r.onload=()=>t(window.google),r.onerror=()=>t(window.google),document.head.appendChild(r)},i.onerror=o,document.head.appendChild(i)}),zo)}function Ng(e){if(!e)return null;const n=e.match(/Location:\s*([^\n]+)/i);if(!n)return null;let t=n[1].trim();return t=t.replace(/,?\s*AZ,\s*AZ/i,", AZ"),t.toLowerCase().includes("details")||t.toLowerCase().includes("provided after")||t.toLowerCase().includes("provided upon")||t.toLowerCase().includes("contact")||t.toLowerCase().includes("various")||t.toLowerCase().includes("multiple")||t.toLowerCase().includes("tbd")||t.length<4?null:/^\d{5}$/.test(t)?`${t}, AZ`:t}function Og(){try{const e=localStorage.getItem(Pc);return e?JSON.parse(e):{}}catch{return{}}}function Rg(e){try{localStorage.setItem(Pc,JSON.stringify(e))}catch{}}async function Ig(e,n,t){const o=n.toLowerCase().trim();return t[o]?t[o]:new Promise(i=>{new e.maps.Geocoder().geocode({address:n+", Arizona",componentRestrictions:{country:"us"},bounds:new e.maps.LatLngBounds(new e.maps.LatLng(31.3,-114.8),new e.maps.LatLng(37,-109))},(a,s)=>{if(s==="OK"&&a[0]){const{lat:l,lng:u}=a[0].geometry.location,f={lat:l(),lng:u()};t[o]=f,i(f)}else t[o]=null,i(null)})})}async function Ug(e,n,t){const o=Og(),i=[],r=[];for(const[s,l]of Object.entries(n))for(const u of l.opportunities){const f=Ng(u.description);f&&r.push({name:u.name,orgKey:s,loc:f})}t(`Locating ${r.length} opportunities...`);let a=0;for(const s of r){const l=await Ig(e,s.loc,o);l&&i.push({name:s.name,orgKey:s.orgKey,lat:l.lat,lng:l.lng}),a++,a%10===0&&t(`Locating opportunities... (${a}/${r.length})`),await new Promise(u=>setTimeout(u,60))}return Rg(o),i}function Dg(){const e=_i(),n=b.useRef(null),t=b.useRef(null),o=b.useRef([]),[i,r]=b.useState(""),[a,s]=b.useState(""),[l,u]=b.useState(null),[f,c]=b.useState(!1),[m,y]=b.useState(""),[w,k]=b.useState(""),[A,p]=b.useState("Loading map..."),[d,g]=b.useState([]);b.useEffect(()=>{if(!Fl())return;let x=!1;return Lg(bc).then(async C=>{var Ne;if(x||!n.current)return;const V=new C.maps.Map(n.current,{center:{lat:33.4484,lng:-111.95},zoom:9,mapTypeControl:!1});if(t.current=V,p("Locating opportunities..."),await new Promise(X=>setTimeout(X,150)),x)return;const{organizations:I}=await Eg(async()=>{const{organizations:X}=await Promise.resolve().then(()=>Mg);return{organizations:X}},void 0);if(x)return;const L=Object.values(I).reduce((X,Ge)=>X+Ge.opportunities.length,0);console.log(`MapsPage: loaded ${L} opportunities`);const $=await Ug(C,I,p);if(x)return;g($),o.current.forEach(X=>X.setMap(null));const K=$.map(X=>{const Ge=new C.maps.Marker({position:{lat:X.lat,lng:X.lng},title:X.name});return Ge.addListener("click",()=>u(X)),Ge});o.current=K,(Ne=window.markerClusterer)!=null&&Ne.MarkerClusterer?new window.markerClusterer.MarkerClusterer({map:V,markers:K}):K.forEach(X=>X.setMap(V)),c(!0),p("")}).catch(()=>{x||(y("Google Maps failed to load. Check your API key in src/config/googleMapsConfig.js."),p(""))}),()=>{x=!0}},[]);function v(){var V;if(k(""),s(""),!f){k("The map is still loading — try again in a moment.");return}if(!i.trim()){k("Enter an address first.");return}const x=window.google;if(!((V=x==null?void 0:x.maps)!=null&&V.Geocoder)){k("Geocoding not available. Try reloading.");return}new x.maps.Geocoder().geocode({address:i,componentRestrictions:{country:"us"},bounds:new x.maps.LatLngBounds(new x.maps.LatLng(31.3,-114.8),new x.maps.LatLng(37,-109))},(I,L)=>{var Ge,Gn;if(L!=="OK"||!I[0]){k(`Couldn't find that address. Try adding a city, e.g. "1110 W Washington, Phoenix".`);return}const $=I[0].geometry.location;let K=null,Ne=1/0;for(const Oe of d){const M=(Gn=(Ge=x.maps.geometry)==null?void 0:Ge.spherical)!=null&&Gn.computeDistanceBetween?x.maps.geometry.spherical.computeDistanceBetween($,new x.maps.LatLng(Oe.lat,Oe.lng)):zg($.lat(),$.lng(),Oe.lat,Oe.lng);M<Ne&&(Ne=M,K=Oe)}if(!K){k("No mapped opportunities found.");return}u(K),t.current.panTo({lat:K.lat,lng:K.lng}),t.current.setZoom(13),new x.maps.DirectionsService().route({origin:$,destination:{lat:K.lat,lng:K.lng},travelMode:x.maps.TravelMode.DRIVING},(Oe,M)=>{if(M==="OK"){const E=Oe.routes[0].legs[0],j=Math.round(E.duration.value/60),F=(E.distance.value/1609.34).toFixed(1);s(`📍 ${K.name} — ${F} mi · ${j} min away`)}else k(`Found nearest opportunity (${K.name}) but couldn't calculate drive time.`)})})}function S(){if(!l)return;const x=jg[l.orgKey];x&&e(x),u(null)}return h.jsxs("div",{className:"maps-page",children:[h.jsx(yo,{current:"maps"}),h.jsxs("div",{className:"maps-map-wrap",children:[Fl()?h.jsx("div",{className:"maps-map-canvas",ref:n}):h.jsx("div",{className:"maps-not-configured",children:h.jsxs("p",{children:["Add your Google Maps API key in ",h.jsx("code",{children:"src/config/googleMapsConfig.js"})]})}),m&&h.jsx("div",{className:"maps-not-configured",style:{background:"rgba(40,0,0,0.85)"},children:h.jsx("p",{children:m})}),A&&h.jsxs("div",{className:"maps-loading-banner",children:[h.jsx("span",{className:"maps-loading-spinner"})," ",A]}),h.jsxs("div",{className:"maps-search-panel",children:[h.jsx("input",{className:"maps-address-input",placeholder:"Address",value:i,onChange:x=>r(x.target.value),onKeyDown:x=>x.key==="Enter"&&v()}),h.jsx("button",{className:"maps-find-btn",onClick:v,children:"Find Nearest Opportunity"}),w&&h.jsx("span",{className:"maps-find-error",children:w}),a&&h.jsx("span",{className:"maps-travel-time",children:a}),h.jsx("p",{className:"maps-location-note",children:"📌 Some pin locations are approximate based on the area listed. Register with the organization for exact details."})]})]}),l&&h.jsx("div",{className:"maps-sheet-overlay",onClick:()=>u(null),children:h.jsxs("div",{className:"maps-sheet",onClick:x=>x.stopPropagation(),children:[h.jsx("span",{className:"maps-sheet-name",children:l.name}),h.jsx("button",{className:"maps-sheet-btn",onClick:S,children:"Click to View Organization"})]})})]})}function zg(e,n,t,o){const r=u=>u*Math.PI/180,a=r(t-e),s=r(o-n),l=Math.sin(a/2)**2+Math.cos(r(e))*Math.cos(r(t))*Math.sin(s/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))}const Wg="/assets/Image2-DbNKlkYW.png";function Fg(){return h.jsxs("div",{className:"about-page",children:[h.jsx(yo,{current:"about"}),h.jsxs("div",{className:"about-scroll",children:[h.jsx("div",{className:"about-hero",style:{backgroundImage:`url(${Wg})`},children:h.jsxs("div",{className:"about-hero-text",children:[h.jsx("h1",{className:"about-mission-title",children:"Our Mission"}),h.jsx("p",{className:"about-mission-body",children:`With the right tools and access to meaningful opportunities,
any student can make a difference. VolunteerHigh empowers
students to connect with
causes they care about, building lasting community
impact and growing service.`})]})}),h.jsxs("div",{className:"about-section",children:[h.jsxs("div",{className:"about-divider-row",children:[h.jsx("div",{className:"rule"}),h.jsx("span",{className:"label",children:"About VolunteerHigh"}),h.jsx("div",{className:"rule"})]}),h.jsx("p",{className:"about-body-text",children:`Created By A Student, for Students.

VolunteerHigh is a platform designed to help high school students in Arizona discover meaningful volunteer opportunities
 in their lcoal communities. Finding volunteer work can be difficult, with opportunities scattered across different websites and organizations.
VolunteerHigh simplifies this process by displaying various organizations in one place.`})]})]})]})}function wa(e){const n=/(https?:\/\/[^\s]+)/g;return e.split(n).map((o,i)=>n.test(o)&&o.startsWith("http")?h.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",children:o},i):h.jsx(xa.Fragment,{children:o},i))}const Hg=[{question:"Is VolunteerHigh Free?",answer:"Yes! VolunteerHigh is a completely free tool that can be used by anybody in Arizona."},{question:"Do I have to sign up to use VolunteerHigh?",answer:"No. VolunteerHigh requires no sign ups, though some opportunities require an account or aplication."},{question:"What organizations is VolunteerHigh partnered with?",answer:"VolunteerHigh is partnered with 8 organizations across the valley as of now."},{question:"Can I use VolunteerHigh in California?",answer:"No. VolunteerHigh is currently a platform designed only for students in Arizona."},{question:"How can I contact VolunteerHigh",answer:"Email VolunteerHighSupport@gmail.com"},{question:"Where can I contact the organizations?",answer:`Here are our following partner organizations, and their contact information:

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
Email: Volunteering@lostourhome.org`}];function _g({question:e,answer:n}){const[t,o]=b.useState(!1);return h.jsxs("div",{className:"faq-row",children:[h.jsxs("button",{className:"faq-question-row",onClick:()=>o(i=>!i),children:[h.jsx("span",{children:e}),h.jsx("span",{className:"faq-toggle-icon",children:t?"−":"+"})]}),t&&h.jsx("p",{className:"faq-answer",children:wa(n)})]})}function Yg(){return h.jsxs("div",{className:"faq-page",children:[h.jsx(yo,{current:"faq"}),h.jsx("div",{className:"faq-scroll",children:h.jsxs("div",{className:"faq-inner",children:[h.jsxs("div",{className:"faq-divider-row",children:[h.jsx("div",{className:"rule"}),h.jsx("span",{className:"label",children:"FAQ's"}),h.jsx("div",{className:"rule"})]}),Hg.map((e,n)=>h.jsx(_g,{question:e.question,answer:e.answer},n))]})})]})}function Tn({title:e,note:n,opportunities:t,centerTitle:o,bannerImage:i,contactEmail:r}){const[a,s]=b.useState(null),[l,u]=b.useState(""),f=b.useMemo(()=>{if(!l.trim())return t;const y=l.toLowerCase();return t.filter(w=>w.name.toLowerCase().includes(y)||w.description.toLowerCase().includes(y))},[t,l]),c=a!==null?t[a]:null;function m(y){if(!r)return null;const w=`Volunteering Inquiry — ${y}`,k=`Hi,

I'm interested in the "${y}" volunteer opportunity with ${e}, and I'd like to learn more.

Thank you!`;return`mailto:${r}?subject=${encodeURIComponent(w)}&body=${encodeURIComponent(k)}`}return h.jsxs("div",{className:"org-page",children:[i&&h.jsx("div",{className:"org-banner",style:{backgroundImage:`url(${i})`}}),h.jsxs("div",{className:`org-header${o?" center-title":""}`,children:[h.jsx("h1",{className:"org-title",children:e}),n&&h.jsx("p",{className:"org-note",children:wa(n)})]}),h.jsxs("div",{className:"org-body",children:[h.jsxs("div",{className:"org-list-pane",children:[h.jsx("h2",{className:"org-list-heading",children:"Opportunities Near You 📍"}),h.jsx("input",{className:"org-search-input",type:"text",placeholder:"Search opportunities...",value:l,onChange:y=>u(y.target.value)}),h.jsx("div",{className:"org-list-scroll",children:f.length===0?h.jsx("p",{className:"org-list-empty",children:"No opportunities match your search."}):f.map(y=>{const w=t.indexOf(y);return h.jsx("button",{className:`org-list-item${a===w?" selected":""}`,onClick:()=>s(w),children:y.name},w)})})]}),h.jsx("div",{className:"org-divider"}),h.jsx("div",{className:"org-detail-pane",children:h.jsx("div",{className:"org-detail-scroll",children:c?h.jsxs(h.Fragment,{children:[h.jsx("h3",{className:"org-detail-name",children:c.name}),h.jsx("p",{className:"org-detail-description",children:wa(c.description)}),h.jsxs("div",{className:"org-detail-actions",children:[c.link&&h.jsx("a",{className:"org-apply-button",href:c.link,target:"_blank",rel:"noopener noreferrer",children:"View Official Listing ↗"}),r&&h.jsxs("a",{className:"org-apply-button org-apply-button-secondary",href:m(c.name),children:["✉ Email ",e]})]})]}):h.jsx("p",{className:"org-detail-placeholder",children:"Select an opportunity on the left to view details"})})})]})]})}const Cn={arizonaStateParks:"crichards@azstateparks.gov",handsOnGreaterPhoenix:"info@handsonphoenix.org",cityOfFlagstaff:"Blake.Commisso@flagstaffaz.gov",juniorAchievement:"taylors@jaaz.org",feedMyStarvingChildren:"info@fmsc.org",azSustainabilityAlliance:"info@azsustain.org",bureauOfLandManagement:"elitchfield@az.go",lostOurHomesPetRescue:"Volunteering@lostourhome.org"};function Bg(){const e=ye.handsOnGreaterPhoenix;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Cn.handsOnGreaterPhoenix})}function Zg(){const e=ye.arizonaStateParks;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,centerTitle:!0,contactEmail:Cn.arizonaStateParks})}function Gg(){const e=ye.cityOfFlagstaff;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Cn.cityOfFlagstaff})}function qg(){const e=ye.juniorAchievement;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,centerTitle:!0,contactEmail:Cn.juniorAchievement})}function $g(){const e=ye.feedMyStarvingChildren;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Cn.feedMyStarvingChildren})}function Kg(){const e=ye.azSustainabilityAlliance;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Cn.azSustainabilityAlliance})}function Jg(){const e=ye.bureauOfLandManagement;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Cn.bureauOfLandManagement})}function Qg(){const e=ye.lostOurHomesPetRescue;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Cn.lostOurHomesPetRescue})}function Xg(){return h.jsx(Jf,{children:h.jsxs(Yf,{children:[h.jsx(de,{path:"/",element:h.jsx(ng,{})}),h.jsx(de,{path:"/home",element:h.jsx(wg,{})}),h.jsx(de,{path:"/quest",element:h.jsx(Tg,{})}),h.jsx(de,{path:"/maps",element:h.jsx(Dg,{})}),h.jsx(de,{path:"/about",element:h.jsx(Fg,{})}),h.jsx(de,{path:"/faq",element:h.jsx(Yg,{})}),h.jsx(de,{path:"/org/hands-on-greater-phoenix",element:h.jsx(Bg,{})}),h.jsx(de,{path:"/org/arizona-state-parks",element:h.jsx(Zg,{})}),h.jsx(de,{path:"/org/city-of-flagstaff",element:h.jsx(Gg,{})}),h.jsx(de,{path:"/org/junior-achievement",element:h.jsx(qg,{})}),h.jsx(de,{path:"/org/feed-my-starving-children",element:h.jsx($g,{})}),h.jsx(de,{path:"/org/az-sustainability-alliance",element:h.jsx(Kg,{})}),h.jsx(de,{path:"/org/bureau-of-land-management",element:h.jsx(Jg,{})}),h.jsx(de,{path:"/org/lost-our-homes-pet-rescue",element:h.jsx(Qg,{})})]})})}Pr.createRoot(document.getElementById("root")).render(h.jsx(xa.StrictMode,{children:h.jsx(Xg,{})}));
