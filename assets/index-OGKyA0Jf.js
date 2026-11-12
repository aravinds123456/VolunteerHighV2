function Sc(e,n){for(var t=0;t<n.length;t++){const i=n[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in e)){const r=Object.getOwnPropertyDescriptor(i,o);r&&Object.defineProperty(e,o,r.get?r:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();function xc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zl={exports:{}},Ao={},Gl={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var di=Symbol.for("react.element"),Ac=Symbol.for("react.portal"),Mc=Symbol.for("react.fragment"),Tc=Symbol.for("react.strict_mode"),Cc=Symbol.for("react.profiler"),Ec=Symbol.for("react.provider"),Vc=Symbol.for("react.context"),jc=Symbol.for("react.forward_ref"),Nc=Symbol.for("react.suspense"),Lc=Symbol.for("react.memo"),Oc=Symbol.for("react.lazy"),ws=Symbol.iterator;function Rc(e){return e===null||typeof e!="object"?null:(e=ws&&e[ws]||e["@@iterator"],typeof e=="function"?e:null)}var ql={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$l=Object.assign,Kl={};function kt(e,n,t){this.props=e,this.context=n,this.refs=Kl,this.updater=t||ql}kt.prototype.isReactComponent={};kt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};kt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jl(){}Jl.prototype=kt.prototype;function va(e,n,t){this.props=e,this.context=n,this.refs=Kl,this.updater=t||ql}var ka=va.prototype=new Jl;ka.constructor=va;$l(ka,kt.prototype);ka.isPureReactComponent=!0;var vs=Array.isArray,Ql=Object.prototype.hasOwnProperty,ba={current:null},Xl={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,n,t){var i,o={},r=null,a=null;if(n!=null)for(i in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(r=""+n.key),n)Ql.call(n,i)&&!Xl.hasOwnProperty(i)&&(o[i]=n[i]);var s=arguments.length-2;if(s===1)o.children=t;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)o[i]===void 0&&(o[i]=s[i]);return{$$typeof:di,type:e,key:r,ref:a,props:o,_owner:ba.current}}function Uc(e,n){return{$$typeof:di,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Pa(e){return typeof e=="object"&&e!==null&&e.$$typeof===di}function Ic(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ks=/\/+/g;function Zo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Ic(""+e.key):n.toString(36)}function zi(e,n,t,i,o){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(r){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case di:case Ac:a=!0}}if(a)return a=e,o=o(a),e=i===""?"."+Zo(a,0):i,vs(o)?(t="",e!=null&&(t=e.replace(ks,"$&/")+"/"),zi(o,n,t,"",function(u){return u})):o!=null&&(Pa(o)&&(o=Uc(o,t+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(ks,"$&/")+"/")+e)),n.push(o)),1;if(a=0,i=i===""?".":i+":",vs(e))for(var s=0;s<e.length;s++){r=e[s];var l=i+Zo(r,s);a+=zi(r,n,t,l,o)}else if(l=Rc(e),typeof l=="function")for(e=l.call(e),s=0;!(r=e.next()).done;)r=r.value,l=i+Zo(r,s++),a+=zi(r,n,t,l,o);else if(r==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function vi(e,n,t){if(e==null)return e;var i=[],o=0;return zi(e,i,"","",function(r){return n.call(t,r,o++)}),i}function Dc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Wi={transition:null},zc={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Wi,ReactCurrentOwner:ba};function nu(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:vi,forEach:function(e,n,t){vi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return vi(e,function(){n++}),n},toArray:function(e){return vi(e,function(n){return n})||[]},only:function(e){if(!Pa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=kt;L.Fragment=Mc;L.Profiler=Cc;L.PureComponent=va;L.StrictMode=Tc;L.Suspense=Nc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zc;L.act=nu;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=$l({},e.props),o=e.key,r=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(r=n.ref,a=ba.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in n)Ql.call(n,l)&&!Xl.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&s!==void 0?s[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}return{$$typeof:di,type:e.type,key:o,ref:r,props:i,_owner:a}};L.createContext=function(e){return e={$$typeof:Vc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ec,_context:e},e.Consumer=e};L.createElement=eu;L.createFactory=function(e){var n=eu.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:jc,render:e}};L.isValidElement=Pa;L.lazy=function(e){return{$$typeof:Oc,_payload:{_status:-1,_result:e},_init:Dc}};L.memo=function(e,n){return{$$typeof:Lc,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=Wi.transition;Wi.transition={};try{e()}finally{Wi.transition=n}};L.unstable_act=nu;L.useCallback=function(e,n){return pe.current.useCallback(e,n)};L.useContext=function(e){return pe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};L.useEffect=function(e,n){return pe.current.useEffect(e,n)};L.useId=function(){return pe.current.useId()};L.useImperativeHandle=function(e,n,t){return pe.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return pe.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return pe.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return pe.current.useMemo(e,n)};L.useReducer=function(e,n,t){return pe.current.useReducer(e,n,t)};L.useRef=function(e){return pe.current.useRef(e)};L.useState=function(e){return pe.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return pe.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return pe.current.useTransition()};L.version="18.3.1";Gl.exports=L;var b=Gl.exports;const Sa=xc(b),Wc=Sc({__proto__:null,default:Sa},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc=b,Hc=Symbol.for("react.element"),_c=Symbol.for("react.fragment"),Bc=Object.prototype.hasOwnProperty,Yc=Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zc={key:!0,ref:!0,__self:!0,__source:!0};function tu(e,n,t){var i,o={},r=null,a=null;t!==void 0&&(r=""+t),n.key!==void 0&&(r=""+n.key),n.ref!==void 0&&(a=n.ref);for(i in n)Bc.call(n,i)&&!Zc.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps,n)o[i]===void 0&&(o[i]=n[i]);return{$$typeof:Hc,type:e,key:r,ref:a,props:o,_owner:Yc.current}}Ao.Fragment=_c;Ao.jsx=tu;Ao.jsxs=tu;Zl.exports=Ao;var h=Zl.exports,Pr={},iu={exports:{}},Ae={},ou={exports:{}},ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(M,V){var j=M.length;M.push(V);e:for(;0<j;){var F=j-1>>>1,ee=M[F];if(0<o(ee,V))M[F]=V,M[j]=ee,j=F;else break e}}function t(M){return M.length===0?null:M[0]}function i(M){if(M.length===0)return null;var V=M[0],j=M.pop();if(j!==V){M[0]=j;e:for(var F=0,ee=M.length,yi=ee>>>1;F<yi;){var En=2*(F+1)-1,Yo=M[En],Vn=En+1,wi=M[Vn];if(0>o(Yo,j))Vn<ee&&0>o(wi,Yo)?(M[F]=wi,M[Vn]=j,F=Vn):(M[F]=Yo,M[En]=j,F=En);else if(Vn<ee&&0>o(wi,j))M[F]=wi,M[Vn]=j,F=Vn;else break e}}return V}function o(M,V){var j=M.sortIndex-V.sortIndex;return j!==0?j:M.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],f=1,c=null,m=3,y=!1,w=!1,k=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(M){for(var V=t(u);V!==null;){if(V.callback===null)i(u);else if(V.startTime<=M)i(u),V.sortIndex=V.expirationTime,n(l,V);else break;V=t(u)}}function v(M){if(k=!1,g(M),!w)if(t(l)!==null)w=!0,Gn(x);else{var V=t(u);V!==null&&Oe(v,V.startTime-M)}}function x(M,V){w=!1,k&&(k=!1,p(E),E=-1),y=!0;var j=m;try{for(g(V),c=t(l);c!==null&&(!(c.expirationTime>V)||M&&!$());){var F=c.callback;if(typeof F=="function"){c.callback=null,m=c.priorityLevel;var ee=F(c.expirationTime<=V);V=e.unstable_now(),typeof ee=="function"?c.callback=ee:c===t(l)&&i(l),g(V)}else i(l);c=t(l)}if(c!==null)var yi=!0;else{var En=t(u);En!==null&&Oe(v,En.startTime-V),yi=!1}return yi}finally{c=null,m=j,y=!1}}var S=!1,C=null,E=-1,U=5,N=-1;function $(){return!(e.unstable_now()-N<U)}function K(){if(C!==null){var M=e.unstable_now();N=M;var V=!0;try{V=C(!0,M)}finally{V?Le():(S=!1,C=null)}}else S=!1}var Le;if(typeof d=="function")Le=function(){d(K)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Ge=X.port2;X.port1.onmessage=K,Le=function(){Ge.postMessage(null)}}else Le=function(){A(K,0)};function Gn(M){C=M,S||(S=!0,Le())}function Oe(M,V){E=A(function(){M(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,Gn(x))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(M){switch(m){case 1:case 2:case 3:var V=3;break;default:V=m}var j=m;m=V;try{return M()}finally{m=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,V){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var j=m;m=M;try{return V()}finally{m=j}},e.unstable_scheduleCallback=function(M,V,j){var F=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?F+j:F):j=F,M){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=j+ee,M={id:f++,callback:V,priorityLevel:M,startTime:j,expirationTime:ee,sortIndex:-1},j>F?(M.sortIndex=j,n(u,M),t(l)===null&&M===t(u)&&(k?(p(E),E=-1):k=!0,Oe(v,j-F))):(M.sortIndex=ee,n(l,M),w||y||(w=!0,Gn(x))),M},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(M){var V=m;return function(){var j=m;m=V;try{return M.apply(this,arguments)}finally{m=j}}}})(ru);ou.exports=ru;var Gc=ou.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=b,xe=Gc;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var au=new Set,Yt={};function _n(e,n){pt(e,n),pt(e+"Capture",n)}function pt(e,n){for(Yt[e]=n,e=0;e<n.length;e++)au.add(n[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sr=Object.prototype.hasOwnProperty,$c=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bs={},Ps={};function Kc(e){return Sr.call(Ps,e)?!0:Sr.call(bs,e)?!1:$c.test(e)?Ps[e]=!0:(bs[e]=!0,!1)}function Jc(e,n,t,i){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qc(e,n,t,i){if(n===null||typeof n>"u"||Jc(e,n,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function fe(e,n,t,i,o,r,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=r,this.removeEmptyString=a}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];re[n]=new fe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var xa=/[\-:]([a-z])/g;function Aa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(xa,Aa);re[n]=new fe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(xa,Aa);re[n]=new fe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(xa,Aa);re[n]=new fe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ma(e,n,t,i){var o=re.hasOwnProperty(n)?re[n]:null;(o!==null?o.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Qc(n,t,o,i)&&(t=null),i||o===null?Kc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,i=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,i?e.setAttributeNS(i,n,t):e.setAttribute(n,t))))}var on=qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ki=Symbol.for("react.element"),$n=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),Ta=Symbol.for("react.strict_mode"),xr=Symbol.for("react.profiler"),su=Symbol.for("react.provider"),lu=Symbol.for("react.context"),Ca=Symbol.for("react.forward_ref"),Ar=Symbol.for("react.suspense"),Mr=Symbol.for("react.suspense_list"),Ea=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),uu=Symbol.for("react.offscreen"),Ss=Symbol.iterator;function xt(e){return e===null||typeof e!="object"?null:(e=Ss&&e[Ss]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,Go;function Nt(e){if(Go===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Go=n&&n[1]||""}return`
`+Go+e}var qo=!1;function $o(e,n){if(!e||qo)return"";qo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var i=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){i=u}e.call(n.prototype)}else{try{throw Error()}catch(u){i=u}e()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),r=i.stack.split(`
`),a=o.length-1,s=r.length-1;1<=a&&0<=s&&o[a]!==r[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==r[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==r[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{qo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Nt(e):""}function Xc(e){switch(e.tag){case 5:return Nt(e.type);case 16:return Nt("Lazy");case 13:return Nt("Suspense");case 19:return Nt("SuspenseList");case 0:case 2:case 15:return e=$o(e.type,!1),e;case 11:return e=$o(e.type.render,!1),e;case 1:return e=$o(e.type,!0),e;default:return""}}function Tr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case $n:return"Portal";case xr:return"Profiler";case Ta:return"StrictMode";case Ar:return"Suspense";case Mr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lu:return(e.displayName||"Context")+".Consumer";case su:return(e._context.displayName||"Context")+".Provider";case Ca:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ea:return n=e.displayName||null,n!==null?n:Tr(e.type)||"Memo";case an:n=e._payload,e=e._init;try{return Tr(e(n))}catch{}}return null}function eh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tr(n);case 8:return n===Ta?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function du(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nh(e){var n=du(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,r=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(a){i=""+a,r.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function bi(e){e._valueTracker||(e._valueTracker=nh(e))}function cu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),i="";return e&&(i=du(e)?e.checked?"true":"false":e.value),e=i,e!==t?(n.setValue(e),!0):!1}function Qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cr(e,n){var t=n.checked;return B({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function xs(e,n){var t=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;t=Pn(n.value!=null?n.value:t),e._wrapperState={initialChecked:i,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function hu(e,n){n=n.checked,n!=null&&Ma(e,"checked",n,!1)}function Er(e,n){hu(e,n);var t=Pn(n.value),i=n.type;if(t!=null)i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Vr(e,n.type,t):n.hasOwnProperty("defaultValue")&&Vr(e,n.type,Pn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function As(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Vr(e,n,t){(n!=="number"||Qi(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Lt=Array.isArray;function st(e,n,t,i){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&i&&(e[t].defaultSelected=!0)}else{for(t=""+Pn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function jr(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return B({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ms(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(Lt(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Pn(t)}}function pu(e,n){var t=Pn(n.value),i=Pn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),i!=null&&(e.defaultValue=""+i)}function Ts(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function fu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nr(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?fu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pi,gu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,i,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,i,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Pi=Pi||document.createElement("div"),Pi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Zt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ut={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},th=["Webkit","ms","Moz","O"];Object.keys(Ut).forEach(function(e){th.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ut[n]=Ut[e]})});function mu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ut.hasOwnProperty(e)&&Ut[e]?(""+n).trim():n+"px"}function yu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var i=t.indexOf("--")===0,o=mu(t,n[t],i);t==="float"&&(t="cssFloat"),i?e.setProperty(t,o):e[t]=o}}var ih=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lr(e,n){if(n){if(ih[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function Or(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rr=null;function Va(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ur=null,lt=null,ut=null;function Cs(e){if(e=pi(e)){if(typeof Ur!="function")throw Error(P(280));var n=e.stateNode;n&&(n=Vo(n),Ur(e.stateNode,e.type,n))}}function wu(e){lt?ut?ut.push(e):ut=[e]:lt=e}function vu(){if(lt){var e=lt,n=ut;if(ut=lt=null,Cs(e),n)for(e=0;e<n.length;e++)Cs(n[e])}}function ku(e,n){return e(n)}function bu(){}var Ko=!1;function Pu(e,n,t){if(Ko)return e(n,t);Ko=!0;try{return ku(e,n,t)}finally{Ko=!1,(lt!==null||ut!==null)&&(bu(),vu())}}function Gt(e,n){var t=e.stateNode;if(t===null)return null;var i=Vo(t);if(i===null)return null;t=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var Ir=!1;if(Xe)try{var At={};Object.defineProperty(At,"passive",{get:function(){Ir=!0}}),window.addEventListener("test",At,At),window.removeEventListener("test",At,At)}catch{Ir=!1}function oh(e,n,t,i,o,r,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(f){this.onError(f)}}var It=!1,Xi=null,eo=!1,Dr=null,rh={onError:function(e){It=!0,Xi=e}};function ah(e,n,t,i,o,r,a,s,l){It=!1,Xi=null,oh.apply(rh,arguments)}function sh(e,n,t,i,o,r,a,s,l){if(ah.apply(this,arguments),It){if(It){var u=Xi;It=!1,Xi=null}else throw Error(P(198));eo||(eo=!0,Dr=u)}}function Bn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Su(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Es(e){if(Bn(e)!==e)throw Error(P(188))}function lh(e){var n=e.alternate;if(!n){if(n=Bn(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,i=n;;){var o=t.return;if(o===null)break;var r=o.alternate;if(r===null){if(i=o.return,i!==null){t=i;continue}break}if(o.child===r.child){for(r=o.child;r;){if(r===t)return Es(o),e;if(r===i)return Es(o),n;r=r.sibling}throw Error(P(188))}if(t.return!==i.return)t=o,i=r;else{for(var a=!1,s=o.child;s;){if(s===t){a=!0,t=o,i=r;break}if(s===i){a=!0,i=o,t=r;break}s=s.sibling}if(!a){for(s=r.child;s;){if(s===t){a=!0,t=r,i=o;break}if(s===i){a=!0,i=r,t=o;break}s=s.sibling}if(!a)throw Error(P(189))}}if(t.alternate!==i)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function xu(e){return e=lh(e),e!==null?Au(e):null}function Au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Au(e);if(n!==null)return n;e=e.sibling}return null}var Mu=xe.unstable_scheduleCallback,Vs=xe.unstable_cancelCallback,uh=xe.unstable_shouldYield,dh=xe.unstable_requestPaint,Z=xe.unstable_now,ch=xe.unstable_getCurrentPriorityLevel,ja=xe.unstable_ImmediatePriority,Tu=xe.unstable_UserBlockingPriority,no=xe.unstable_NormalPriority,hh=xe.unstable_LowPriority,Cu=xe.unstable_IdlePriority,Mo=null,Ye=null;function ph(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Mo,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:mh,fh=Math.log,gh=Math.LN2;function mh(e){return e>>>=0,e===0?32:31-(fh(e)/gh|0)|0}var Si=64,xi=4194304;function Ot(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function to(e,n){var t=e.pendingLanes;if(t===0)return 0;var i=0,o=e.suspendedLanes,r=e.pingedLanes,a=t&268435455;if(a!==0){var s=a&~o;s!==0?i=Ot(s):(r&=a,r!==0&&(i=Ot(r)))}else a=t&~o,a!==0?i=Ot(a):r!==0&&(i=Ot(r));if(i===0)return 0;if(n!==0&&n!==i&&!(n&o)&&(o=i&-i,r=n&-n,o>=r||o===16&&(r&4194240)!==0))return n;if(i&4&&(i|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)t=31-ze(n),o=1<<t,i|=e[t],n&=~o;return i}function yh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wh(e,n){for(var t=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,r=e.pendingLanes;0<r;){var a=31-ze(r),s=1<<a,l=o[a];l===-1?(!(s&t)||s&i)&&(o[a]=yh(s,n)):l<=n&&(e.expiredLanes|=s),r&=~s}}function zr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Eu(){var e=Si;return Si<<=1,!(Si&4194240)&&(Si=64),e}function Jo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ci(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-ze(n),e[n]=t}function vh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-ze(t),r=1<<o;n[o]=0,i[o]=-1,e[o]=-1,t&=~r}}function Na(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var i=31-ze(t),o=1<<i;o&n|e[i]&n&&(e[i]|=n),t&=~o}}var R=0;function Vu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ju,La,Nu,Lu,Ou,Wr=!1,Ai=[],pn=null,fn=null,gn=null,qt=new Map,$t=new Map,ln=[],kh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function js(e,n){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":qt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":$t.delete(n.pointerId)}}function Mt(e,n,t,i,o,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:t,eventSystemFlags:i,nativeEvent:r,targetContainers:[o]},n!==null&&(n=pi(n),n!==null&&La(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function bh(e,n,t,i,o){switch(n){case"focusin":return pn=Mt(pn,e,n,t,i,o),!0;case"dragenter":return fn=Mt(fn,e,n,t,i,o),!0;case"mouseover":return gn=Mt(gn,e,n,t,i,o),!0;case"pointerover":var r=o.pointerId;return qt.set(r,Mt(qt.get(r)||null,e,n,t,i,o)),!0;case"gotpointercapture":return r=o.pointerId,$t.set(r,Mt($t.get(r)||null,e,n,t,i,o)),!0}return!1}function Ru(e){var n=Ln(e.target);if(n!==null){var t=Bn(n);if(t!==null){if(n=t.tag,n===13){if(n=Su(t),n!==null){e.blockedOn=n,Ou(e.priority,function(){Nu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Fr(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);Rr=i,t.target.dispatchEvent(i),Rr=null}else return n=pi(t),n!==null&&La(n),e.blockedOn=t,!1;n.shift()}return!0}function Ns(e,n,t){Fi(e)&&t.delete(n)}function Ph(){Wr=!1,pn!==null&&Fi(pn)&&(pn=null),fn!==null&&Fi(fn)&&(fn=null),gn!==null&&Fi(gn)&&(gn=null),qt.forEach(Ns),$t.forEach(Ns)}function Tt(e,n){e.blockedOn===n&&(e.blockedOn=null,Wr||(Wr=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,Ph)))}function Kt(e){function n(o){return Tt(o,e)}if(0<Ai.length){Tt(Ai[0],e);for(var t=1;t<Ai.length;t++){var i=Ai[t];i.blockedOn===e&&(i.blockedOn=null)}}for(pn!==null&&Tt(pn,e),fn!==null&&Tt(fn,e),gn!==null&&Tt(gn,e),qt.forEach(n),$t.forEach(n),t=0;t<ln.length;t++)i=ln[t],i.blockedOn===e&&(i.blockedOn=null);for(;0<ln.length&&(t=ln[0],t.blockedOn===null);)Ru(t),t.blockedOn===null&&ln.shift()}var dt=on.ReactCurrentBatchConfig,io=!0;function Sh(e,n,t,i){var o=R,r=dt.transition;dt.transition=null;try{R=1,Oa(e,n,t,i)}finally{R=o,dt.transition=r}}function xh(e,n,t,i){var o=R,r=dt.transition;dt.transition=null;try{R=4,Oa(e,n,t,i)}finally{R=o,dt.transition=r}}function Oa(e,n,t,i){if(io){var o=Fr(e,n,t,i);if(o===null)sr(e,n,i,oo,t),js(e,i);else if(bh(o,e,n,t,i))i.stopPropagation();else if(js(e,i),n&4&&-1<kh.indexOf(e)){for(;o!==null;){var r=pi(o);if(r!==null&&ju(r),r=Fr(e,n,t,i),r===null&&sr(e,n,i,oo,t),r===o)break;o=r}o!==null&&i.stopPropagation()}else sr(e,n,i,null,t)}}var oo=null;function Fr(e,n,t,i){if(oo=null,e=Va(i),e=Ln(e),e!==null)if(n=Bn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Su(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return oo=e,null}function Uu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ch()){case ja:return 1;case Tu:return 4;case no:case hh:return 16;case Cu:return 536870912;default:return 16}default:return 16}}var dn=null,Ra=null,Hi=null;function Iu(){if(Hi)return Hi;var e,n=Ra,t=n.length,i,o="value"in dn?dn.value:dn.textContent,r=o.length;for(e=0;e<t&&n[e]===o[e];e++);var a=t-e;for(i=1;i<=a&&n[t-i]===o[r-i];i++);return Hi=o.slice(e,1<i?1-i:void 0)}function _i(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Mi(){return!0}function Ls(){return!1}function Me(e){function n(t,i,o,r,a){this._reactName=t,this._targetInst=o,this.type=i,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Mi:Ls,this.isPropagationStopped=Ls,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Mi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Mi)},persist:function(){},isPersistent:Mi}),n}var bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ua=Me(bt),hi=B({},bt,{view:0,detail:0}),Ah=Me(hi),Qo,Xo,Ct,To=B({},hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ia,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ct&&(Ct&&e.type==="mousemove"?(Qo=e.screenX-Ct.screenX,Xo=e.screenY-Ct.screenY):Xo=Qo=0,Ct=e),Qo)},movementY:function(e){return"movementY"in e?e.movementY:Xo}}),Os=Me(To),Mh=B({},To,{dataTransfer:0}),Th=Me(Mh),Ch=B({},hi,{relatedTarget:0}),er=Me(Ch),Eh=B({},bt,{animationName:0,elapsedTime:0,pseudoElement:0}),Vh=Me(Eh),jh=B({},bt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nh=Me(jh),Lh=B({},bt,{data:0}),Rs=Me(Lh),Oh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ih(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Uh[e])?!!n[e]:!1}function Ia(){return Ih}var Dh=B({},hi,{key:function(e){if(e.key){var n=Oh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ia,charCode:function(e){return e.type==="keypress"?_i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zh=Me(Dh),Wh=B({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Us=Me(Wh),Fh=B({},hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ia}),Hh=Me(Fh),_h=B({},bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bh=Me(_h),Yh=B({},To,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zh=Me(Yh),Gh=[9,13,27,32],Da=Xe&&"CompositionEvent"in window,Dt=null;Xe&&"documentMode"in document&&(Dt=document.documentMode);var qh=Xe&&"TextEvent"in window&&!Dt,Du=Xe&&(!Da||Dt&&8<Dt&&11>=Dt),Is=" ",Ds=!1;function zu(e,n){switch(e){case"keyup":return Gh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function $h(e,n){switch(e){case"compositionend":return Wu(n);case"keypress":return n.which!==32?null:(Ds=!0,Is);case"textInput":return e=n.data,e===Is&&Ds?null:e;default:return null}}function Kh(e,n){if(Jn)return e==="compositionend"||!Da&&zu(e,n)?(e=Iu(),Hi=Ra=dn=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Du&&n.locale!=="ko"?null:n.data;default:return null}}var Jh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Jh[e.type]:n==="textarea"}function Fu(e,n,t,i){wu(i),n=ro(n,"onChange"),0<n.length&&(t=new Ua("onChange","change",null,t,i),e.push({event:t,listeners:n}))}var zt=null,Jt=null;function Qh(e){Qu(e,0)}function Co(e){var n=et(e);if(cu(n))return e}function Xh(e,n){if(e==="change")return n}var Hu=!1;if(Xe){var nr;if(Xe){var tr="oninput"in document;if(!tr){var Ws=document.createElement("div");Ws.setAttribute("oninput","return;"),tr=typeof Ws.oninput=="function"}nr=tr}else nr=!1;Hu=nr&&(!document.documentMode||9<document.documentMode)}function Fs(){zt&&(zt.detachEvent("onpropertychange",_u),Jt=zt=null)}function _u(e){if(e.propertyName==="value"&&Co(Jt)){var n=[];Fu(n,Jt,e,Va(e)),Pu(Qh,n)}}function ep(e,n,t){e==="focusin"?(Fs(),zt=n,Jt=t,zt.attachEvent("onpropertychange",_u)):e==="focusout"&&Fs()}function np(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(Jt)}function tp(e,n){if(e==="click")return Co(n)}function ip(e,n){if(e==="input"||e==="change")return Co(n)}function op(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fe=typeof Object.is=="function"?Object.is:op;function Qt(e,n){if(Fe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var o=t[i];if(!Sr.call(n,o)||!Fe(e[o],n[o]))return!1}return!0}function Hs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _s(e,n){var t=Hs(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=n&&i>=n)return{node:t,offset:n-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Hs(t)}}function Bu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Bu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Yu(){for(var e=window,n=Qi();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Qi(e.document)}return n}function za(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function rp(e){var n=Yu(),t=e.focusedElem,i=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Bu(t.ownerDocument.documentElement,t)){if(i!==null&&za(t)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,r=Math.min(i.start,o);i=i.end===void 0?r:Math.min(i.end,o),!e.extend&&r>i&&(o=i,i=r,r=o),o=_s(t,r);var a=_s(t,i);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),r>i?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ap=Xe&&"documentMode"in document&&11>=document.documentMode,Qn=null,Hr=null,Wt=null,_r=!1;function Bs(e,n,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;_r||Qn==null||Qn!==Qi(i)||(i=Qn,"selectionStart"in i&&za(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wt&&Qt(Wt,i)||(Wt=i,i=ro(Hr,"onSelect"),0<i.length&&(n=new Ua("onSelect","select",null,n,t),e.push({event:n,listeners:i}),n.target=Qn)))}function Ti(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Xn={animationend:Ti("Animation","AnimationEnd"),animationiteration:Ti("Animation","AnimationIteration"),animationstart:Ti("Animation","AnimationStart"),transitionend:Ti("Transition","TransitionEnd")},ir={},Zu={};Xe&&(Zu=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Eo(e){if(ir[e])return ir[e];if(!Xn[e])return e;var n=Xn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Zu)return ir[e]=n[t];return e}var Gu=Eo("animationend"),qu=Eo("animationiteration"),$u=Eo("animationstart"),Ku=Eo("transitionend"),Ju=new Map,Ys="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,n){Ju.set(e,n),_n(n,[e])}for(var or=0;or<Ys.length;or++){var rr=Ys[or],sp=rr.toLowerCase(),lp=rr[0].toUpperCase()+rr.slice(1);xn(sp,"on"+lp)}xn(Gu,"onAnimationEnd");xn(qu,"onAnimationIteration");xn($u,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(Ku,"onTransitionEnd");pt("onMouseEnter",["mouseout","mouseover"]);pt("onMouseLeave",["mouseout","mouseover"]);pt("onPointerEnter",["pointerout","pointerover"]);pt("onPointerLeave",["pointerout","pointerover"]);_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_n("onBeforeInput",["compositionend","keypress","textInput","paste"]);_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),up=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rt));function Zs(e,n,t){var i=e.type||"unknown-event";e.currentTarget=t,sh(i,n,void 0,e),e.currentTarget=null}function Qu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],o=i.event;i=i.listeners;e:{var r=void 0;if(n)for(var a=i.length-1;0<=a;a--){var s=i[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==r&&o.isPropagationStopped())break e;Zs(o,s,u),r=l}else for(a=0;a<i.length;a++){if(s=i[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==r&&o.isPropagationStopped())break e;Zs(o,s,u),r=l}}}if(eo)throw e=Dr,eo=!1,Dr=null,e}function D(e,n){var t=n[qr];t===void 0&&(t=n[qr]=new Set);var i=e+"__bubble";t.has(i)||(Xu(n,e,2,!1),t.add(i))}function ar(e,n,t){var i=0;n&&(i|=4),Xu(t,e,i,n)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function Xt(e){if(!e[Ci]){e[Ci]=!0,au.forEach(function(t){t!=="selectionchange"&&(up.has(t)||ar(t,!1,e),ar(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ci]||(n[Ci]=!0,ar("selectionchange",!1,n))}}function Xu(e,n,t,i){switch(Uu(n)){case 1:var o=Sh;break;case 4:o=xh;break;default:o=Oa}t=o.bind(null,n,t,e),o=void 0,!Ir||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function sr(e,n,t,i,o){var r=i;if(!(n&1)&&!(n&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var s=i.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Ln(s),a===null)return;if(l=a.tag,l===5||l===6){i=r=a;continue e}s=s.parentNode}}i=i.return}Pu(function(){var u=r,f=Va(t),c=[];e:{var m=Ju.get(e);if(m!==void 0){var y=Ua,w=e;switch(e){case"keypress":if(_i(t)===0)break e;case"keydown":case"keyup":y=zh;break;case"focusin":w="focus",y=er;break;case"focusout":w="blur",y=er;break;case"beforeblur":case"afterblur":y=er;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Hh;break;case Gu:case qu:case $u:y=Vh;break;case Ku:y=Bh;break;case"scroll":y=Ah;break;case"wheel":y=Zh;break;case"copy":case"cut":case"paste":y=Nh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Us}var k=(n&4)!==0,A=!k&&e==="scroll",p=k?m!==null?m+"Capture":null:m;k=[];for(var d=u,g;d!==null;){g=d;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,p!==null&&(v=Gt(d,p),v!=null&&k.push(ei(d,v,g)))),A)break;d=d.return}0<k.length&&(m=new y(m,w,null,t,f),c.push({event:m,listeners:k}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&t!==Rr&&(w=t.relatedTarget||t.fromElement)&&(Ln(w)||w[en]))break e;if((y||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,y?(w=t.relatedTarget||t.toElement,y=u,w=w?Ln(w):null,w!==null&&(A=Bn(w),w!==A||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(k=Os,v="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=Us,v="onPointerLeave",p="onPointerEnter",d="pointer"),A=y==null?m:et(y),g=w==null?m:et(w),m=new k(v,d+"leave",y,t,f),m.target=A,m.relatedTarget=g,v=null,Ln(f)===u&&(k=new k(p,d+"enter",w,t,f),k.target=g,k.relatedTarget=A,v=k),A=v,y&&w)n:{for(k=y,p=w,d=0,g=k;g;g=qn(g))d++;for(g=0,v=p;v;v=qn(v))g++;for(;0<d-g;)k=qn(k),d--;for(;0<g-d;)p=qn(p),g--;for(;d--;){if(k===p||p!==null&&k===p.alternate)break n;k=qn(k),p=qn(p)}k=null}else k=null;y!==null&&Gs(c,m,y,k,!1),w!==null&&A!==null&&Gs(c,A,w,k,!0)}}e:{if(m=u?et(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var x=Xh;else if(zs(m))if(Hu)x=ip;else{x=np;var S=ep}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(x=tp);if(x&&(x=x(e,u))){Fu(c,x,t,f);break e}S&&S(e,m,u),e==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&Vr(m,"number",m.value)}switch(S=u?et(u):window,e){case"focusin":(zs(S)||S.contentEditable==="true")&&(Qn=S,Hr=u,Wt=null);break;case"focusout":Wt=Hr=Qn=null;break;case"mousedown":_r=!0;break;case"contextmenu":case"mouseup":case"dragend":_r=!1,Bs(c,t,f);break;case"selectionchange":if(ap)break;case"keydown":case"keyup":Bs(c,t,f)}var C;if(Da)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Jn?zu(e,t)&&(E="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(Du&&t.locale!=="ko"&&(Jn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Jn&&(C=Iu()):(dn=f,Ra="value"in dn?dn.value:dn.textContent,Jn=!0)),S=ro(u,E),0<S.length&&(E=new Rs(E,e,null,t,f),c.push({event:E,listeners:S}),C?E.data=C:(C=Wu(t),C!==null&&(E.data=C)))),(C=qh?$h(e,t):Kh(e,t))&&(u=ro(u,"onBeforeInput"),0<u.length&&(f=new Rs("onBeforeInput","beforeinput",null,t,f),c.push({event:f,listeners:u}),f.data=C))}Qu(c,n)})}function ei(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ro(e,n){for(var t=n+"Capture",i=[];e!==null;){var o=e,r=o.stateNode;o.tag===5&&r!==null&&(o=r,r=Gt(e,t),r!=null&&i.unshift(ei(e,r,o)),r=Gt(e,n),r!=null&&i.push(ei(e,r,o))),e=e.return}return i}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gs(e,n,t,i,o){for(var r=n._reactName,a=[];t!==null&&t!==i;){var s=t,l=s.alternate,u=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&u!==null&&(s=u,o?(l=Gt(t,r),l!=null&&a.unshift(ei(t,l,s))):o||(l=Gt(t,r),l!=null&&a.push(ei(t,l,s)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var dp=/\r\n?/g,cp=/\u0000|\uFFFD/g;function qs(e){return(typeof e=="string"?e:""+e).replace(dp,`
`).replace(cp,"")}function Ei(e,n,t){if(n=qs(n),qs(e)!==n&&t)throw Error(P(425))}function ao(){}var Br=null,Yr=null;function Zr(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gr=typeof setTimeout=="function"?setTimeout:void 0,hp=typeof clearTimeout=="function"?clearTimeout:void 0,$s=typeof Promise=="function"?Promise:void 0,pp=typeof queueMicrotask=="function"?queueMicrotask:typeof $s<"u"?function(e){return $s.resolve(null).then(e).catch(fp)}:Gr;function fp(e){setTimeout(function(){throw e})}function lr(e,n){var t=n,i=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(i===0){e.removeChild(o),Kt(n);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=o}while(t);Kt(n)}function mn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ks(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Pt=Math.random().toString(36).slice(2),Be="__reactFiber$"+Pt,ni="__reactProps$"+Pt,en="__reactContainer$"+Pt,qr="__reactEvents$"+Pt,gp="__reactListeners$"+Pt,mp="__reactHandles$"+Pt;function Ln(e){var n=e[Be];if(n)return n;for(var t=e.parentNode;t;){if(n=t[en]||t[Be]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ks(e);e!==null;){if(t=e[Be])return t;e=Ks(e)}return n}e=t,t=e.parentNode}return null}function pi(e){return e=e[Be]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function et(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Vo(e){return e[ni]||null}var $r=[],nt=-1;function An(e){return{current:e}}function z(e){0>nt||(e.current=$r[nt],$r[nt]=null,nt--)}function I(e,n){nt++,$r[nt]=e.current,e.current=n}var Sn={},ue=An(Sn),we=An(!1),Dn=Sn;function ft(e,n){var t=e.type.contextTypes;if(!t)return Sn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var o={},r;for(r in t)o[r]=n[r];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function ve(e){return e=e.childContextTypes,e!=null}function so(){z(we),z(ue)}function Js(e,n,t){if(ue.current!==Sn)throw Error(P(168));I(ue,n),I(we,t)}function ed(e,n,t){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var o in i)if(!(o in n))throw Error(P(108,eh(e)||"Unknown",o));return B({},t,i)}function lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,Dn=ue.current,I(ue,e),I(we,we.current),!0}function Qs(e,n,t){var i=e.stateNode;if(!i)throw Error(P(169));t?(e=ed(e,n,Dn),i.__reactInternalMemoizedMergedChildContext=e,z(we),z(ue),I(ue,e)):z(we),I(we,t)}var $e=null,jo=!1,ur=!1;function nd(e){$e===null?$e=[e]:$e.push(e)}function yp(e){jo=!0,nd(e)}function Mn(){if(!ur&&$e!==null){ur=!0;var e=0,n=R;try{var t=$e;for(R=1;e<t.length;e++){var i=t[e];do i=i(!0);while(i!==null)}$e=null,jo=!1}catch(o){throw $e!==null&&($e=$e.slice(e+1)),Mu(ja,Mn),o}finally{R=n,ur=!1}}return null}var tt=[],it=0,uo=null,co=0,Te=[],Ce=0,zn=null,Ke=1,Je="";function jn(e,n){tt[it++]=co,tt[it++]=uo,uo=e,co=n}function td(e,n,t){Te[Ce++]=Ke,Te[Ce++]=Je,Te[Ce++]=zn,zn=e;var i=Ke;e=Je;var o=32-ze(i)-1;i&=~(1<<o),t+=1;var r=32-ze(n)+o;if(30<r){var a=o-o%5;r=(i&(1<<a)-1).toString(32),i>>=a,o-=a,Ke=1<<32-ze(n)+o|t<<o|i,Je=r+e}else Ke=1<<r|t<<o|i,Je=e}function Wa(e){e.return!==null&&(jn(e,1),td(e,1,0))}function Fa(e){for(;e===uo;)uo=tt[--it],tt[it]=null,co=tt[--it],tt[it]=null;for(;e===zn;)zn=Te[--Ce],Te[Ce]=null,Je=Te[--Ce],Te[Ce]=null,Ke=Te[--Ce],Te[Ce]=null}var Se=null,Pe=null,W=!1,De=null;function id(e,n){var t=Ee(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Xs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Se=e,Pe=mn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Se=e,Pe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=zn!==null?{id:Ke,overflow:Je}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ee(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Se=e,Pe=null,!0):!1;default:return!1}}function Kr(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jr(e){if(W){var n=Pe;if(n){var t=n;if(!Xs(e,n)){if(Kr(e))throw Error(P(418));n=mn(t.nextSibling);var i=Se;n&&Xs(e,n)?id(i,t):(e.flags=e.flags&-4097|2,W=!1,Se=e)}}else{if(Kr(e))throw Error(P(418));e.flags=e.flags&-4097|2,W=!1,Se=e}}}function el(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Vi(e){if(e!==Se)return!1;if(!W)return el(e),W=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Zr(e.type,e.memoizedProps)),n&&(n=Pe)){if(Kr(e))throw od(),Error(P(418));for(;n;)id(e,n),n=mn(n.nextSibling)}if(el(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Pe=mn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Pe=null}}else Pe=Se?mn(e.stateNode.nextSibling):null;return!0}function od(){for(var e=Pe;e;)e=mn(e.nextSibling)}function gt(){Pe=Se=null,W=!1}function Ha(e){De===null?De=[e]:De.push(e)}var wp=on.ReactCurrentBatchConfig;function Et(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var i=t.stateNode}if(!i)throw Error(P(147,e));var o=i,r=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===r?n.ref:(n=function(a){var s=o.refs;a===null?delete s[r]:s[r]=a},n._stringRef=r,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function ji(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function nl(e){var n=e._init;return n(e._payload)}function rd(e){function n(p,d){if(e){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function t(p,d){if(!e)return null;for(;d!==null;)n(p,d),d=d.sibling;return null}function i(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function o(p,d){return p=kn(p,d),p.index=0,p.sibling=null,p}function r(p,d,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,g,v){return d===null||d.tag!==6?(d=mr(g,p.mode,v),d.return=p,d):(d=o(d,g),d.return=p,d)}function l(p,d,g,v){var x=g.type;return x===Kn?f(p,d,g.props.children,v,g.key):d!==null&&(d.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===an&&nl(x)===d.type)?(v=o(d,g.props),v.ref=Et(p,d,g),v.return=p,v):(v=Ki(g.type,g.key,g.props,null,p.mode,v),v.ref=Et(p,d,g),v.return=p,v)}function u(p,d,g,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=yr(g,p.mode,v),d.return=p,d):(d=o(d,g.children||[]),d.return=p,d)}function f(p,d,g,v,x){return d===null||d.tag!==7?(d=In(g,p.mode,v,x),d.return=p,d):(d=o(d,g),d.return=p,d)}function c(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=mr(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ki:return g=Ki(d.type,d.key,d.props,null,p.mode,g),g.ref=Et(p,null,d),g.return=p,g;case $n:return d=yr(d,p.mode,g),d.return=p,d;case an:var v=d._init;return c(p,v(d._payload),g)}if(Lt(d)||xt(d))return d=In(d,p.mode,g,null),d.return=p,d;ji(p,d)}return null}function m(p,d,g,v){var x=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:s(p,d,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ki:return g.key===x?l(p,d,g,v):null;case $n:return g.key===x?u(p,d,g,v):null;case an:return x=g._init,m(p,d,x(g._payload),v)}if(Lt(g)||xt(g))return x!==null?null:f(p,d,g,v,null);ji(p,g)}return null}function y(p,d,g,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(g)||null,s(d,p,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ki:return p=p.get(v.key===null?g:v.key)||null,l(d,p,v,x);case $n:return p=p.get(v.key===null?g:v.key)||null,u(d,p,v,x);case an:var S=v._init;return y(p,d,g,S(v._payload),x)}if(Lt(v)||xt(v))return p=p.get(g)||null,f(d,p,v,x,null);ji(d,v)}return null}function w(p,d,g,v){for(var x=null,S=null,C=d,E=d=0,U=null;C!==null&&E<g.length;E++){C.index>E?(U=C,C=null):U=C.sibling;var N=m(p,C,g[E],v);if(N===null){C===null&&(C=U);break}e&&C&&N.alternate===null&&n(p,C),d=r(N,d,E),S===null?x=N:S.sibling=N,S=N,C=U}if(E===g.length)return t(p,C),W&&jn(p,E),x;if(C===null){for(;E<g.length;E++)C=c(p,g[E],v),C!==null&&(d=r(C,d,E),S===null?x=C:S.sibling=C,S=C);return W&&jn(p,E),x}for(C=i(p,C);E<g.length;E++)U=y(C,p,E,g[E],v),U!==null&&(e&&U.alternate!==null&&C.delete(U.key===null?E:U.key),d=r(U,d,E),S===null?x=U:S.sibling=U,S=U);return e&&C.forEach(function($){return n(p,$)}),W&&jn(p,E),x}function k(p,d,g,v){var x=xt(g);if(typeof x!="function")throw Error(P(150));if(g=x.call(g),g==null)throw Error(P(151));for(var S=x=null,C=d,E=d=0,U=null,N=g.next();C!==null&&!N.done;E++,N=g.next()){C.index>E?(U=C,C=null):U=C.sibling;var $=m(p,C,N.value,v);if($===null){C===null&&(C=U);break}e&&C&&$.alternate===null&&n(p,C),d=r($,d,E),S===null?x=$:S.sibling=$,S=$,C=U}if(N.done)return t(p,C),W&&jn(p,E),x;if(C===null){for(;!N.done;E++,N=g.next())N=c(p,N.value,v),N!==null&&(d=r(N,d,E),S===null?x=N:S.sibling=N,S=N);return W&&jn(p,E),x}for(C=i(p,C);!N.done;E++,N=g.next())N=y(C,p,E,N.value,v),N!==null&&(e&&N.alternate!==null&&C.delete(N.key===null?E:N.key),d=r(N,d,E),S===null?x=N:S.sibling=N,S=N);return e&&C.forEach(function(K){return n(p,K)}),W&&jn(p,E),x}function A(p,d,g,v){if(typeof g=="object"&&g!==null&&g.type===Kn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ki:e:{for(var x=g.key,S=d;S!==null;){if(S.key===x){if(x=g.type,x===Kn){if(S.tag===7){t(p,S.sibling),d=o(S,g.props.children),d.return=p,p=d;break e}}else if(S.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===an&&nl(x)===S.type){t(p,S.sibling),d=o(S,g.props),d.ref=Et(p,S,g),d.return=p,p=d;break e}t(p,S);break}else n(p,S);S=S.sibling}g.type===Kn?(d=In(g.props.children,p.mode,v,g.key),d.return=p,p=d):(v=Ki(g.type,g.key,g.props,null,p.mode,v),v.ref=Et(p,d,g),v.return=p,p=v)}return a(p);case $n:e:{for(S=g.key;d!==null;){if(d.key===S)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){t(p,d.sibling),d=o(d,g.children||[]),d.return=p,p=d;break e}else{t(p,d);break}else n(p,d);d=d.sibling}d=yr(g,p.mode,v),d.return=p,p=d}return a(p);case an:return S=g._init,A(p,d,S(g._payload),v)}if(Lt(g))return w(p,d,g,v);if(xt(g))return k(p,d,g,v);ji(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(t(p,d.sibling),d=o(d,g),d.return=p,p=d):(t(p,d),d=mr(g,p.mode,v),d.return=p,p=d),a(p)):t(p,d)}return A}var mt=rd(!0),ad=rd(!1),ho=An(null),po=null,ot=null,_a=null;function Ba(){_a=ot=po=null}function Ya(e){var n=ho.current;z(ho),e._currentValue=n}function Qr(e,n,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===t)break;e=e.return}}function ct(e,n){po=e,_a=ot=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(me=!0),e.firstContext=null)}function je(e){var n=e._currentValue;if(_a!==e)if(e={context:e,memoizedValue:n,next:null},ot===null){if(po===null)throw Error(P(308));ot=e,po.dependencies={lanes:0,firstContext:e}}else ot=ot.next=e;return n}var On=null;function Za(e){On===null?On=[e]:On.push(e)}function sd(e,n,t,i){var o=n.interleaved;return o===null?(t.next=t,Za(n)):(t.next=o.next,o.next=t),n.interleaved=t,nn(e,i)}function nn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var sn=!1;function Ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ld(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function yn(e,n,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,O&2){var o=i.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),i.pending=n,nn(e,t)}return o=i.interleaved,o===null?(n.next=n,Za(i)):(n.next=o.next,o.next=n),i.interleaved=n,nn(e,t)}function Bi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,Na(e,t)}}function tl(e,n){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var o=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};r===null?o=r=a:r=r.next=a,t=t.next}while(t!==null);r===null?o=r=n:r=r.next=n}else o=r=n;t={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:r,shared:i.shared,effects:i.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function fo(e,n,t,i){var o=e.updateQueue;sn=!1;var r=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?r=u:a.next=u,a=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=l))}if(r!==null){var c=o.baseState;a=0,f=u=l=null,s=r;do{var m=s.lane,y=s.eventTime;if((i&m)===m){f!==null&&(f=f.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(m=n,y=t,k.tag){case 1:if(w=k.payload,typeof w=="function"){c=w.call(y,c,m);break e}c=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(y,c,m):w,m==null)break e;c=B({},c,m);break e;case 2:sn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else y={eventTime:y,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=y,l=c):f=f.next=y,a|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(f===null&&(l=c),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=f,n=o.shared.interleaved,n!==null){o=n;do a|=o.lane,o=o.next;while(o!==n)}else r===null&&(o.shared.lanes=0);Fn|=a,e.lanes=a,e.memoizedState=c}}function il(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],o=i.callback;if(o!==null){if(i.callback=null,i=t,typeof o!="function")throw Error(P(191,o));o.call(i)}}}var fi={},Ze=An(fi),ti=An(fi),ii=An(fi);function Rn(e){if(e===fi)throw Error(P(174));return e}function qa(e,n){switch(I(ii,n),I(ti,e),I(Ze,fi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Nr(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Nr(n,e)}z(Ze),I(Ze,n)}function yt(){z(Ze),z(ti),z(ii)}function ud(e){Rn(ii.current);var n=Rn(Ze.current),t=Nr(n,e.type);n!==t&&(I(ti,e),I(Ze,t))}function $a(e){ti.current===e&&(z(Ze),z(ti))}var H=An(0);function go(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var dr=[];function Ka(){for(var e=0;e<dr.length;e++)dr[e]._workInProgressVersionPrimary=null;dr.length=0}var Yi=on.ReactCurrentDispatcher,cr=on.ReactCurrentBatchConfig,Wn=0,_=null,J=null,ne=null,mo=!1,Ft=!1,oi=0,vp=0;function ae(){throw Error(P(321))}function Ja(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Fe(e[t],n[t]))return!1;return!0}function Qa(e,n,t,i,o,r){if(Wn=r,_=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Yi.current=e===null||e.memoizedState===null?Sp:xp,e=t(i,o),Ft){r=0;do{if(Ft=!1,oi=0,25<=r)throw Error(P(301));r+=1,ne=J=null,n.updateQueue=null,Yi.current=Ap,e=t(i,o)}while(Ft)}if(Yi.current=yo,n=J!==null&&J.next!==null,Wn=0,ne=J=_=null,mo=!1,n)throw Error(P(300));return e}function Xa(){var e=oi!==0;return oi=0,e}function _e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?_.memoizedState=ne=e:ne=ne.next=e,ne}function Ne(){if(J===null){var e=_.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=ne===null?_.memoizedState:ne.next;if(n!==null)ne=n,J=e;else{if(e===null)throw Error(P(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ne===null?_.memoizedState=ne=e:ne=ne.next=e}return ne}function ri(e,n){return typeof n=="function"?n(e):n}function hr(e){var n=Ne(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var i=J,o=i.baseQueue,r=t.pending;if(r!==null){if(o!==null){var a=o.next;o.next=r.next,r.next=a}i.baseQueue=o=r,t.pending=null}if(o!==null){r=o.next,i=i.baseState;var s=a=null,l=null,u=r;do{var f=u.lane;if((Wn&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=c,a=i):l=l.next=c,_.lanes|=f,Fn|=f}u=u.next}while(u!==null&&u!==r);l===null?a=i:l.next=s,Fe(i,n.memoizedState)||(me=!0),n.memoizedState=i,n.baseState=a,n.baseQueue=l,t.lastRenderedState=i}if(e=t.interleaved,e!==null){o=e;do r=o.lane,_.lanes|=r,Fn|=r,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function pr(e){var n=Ne(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var i=t.dispatch,o=t.pending,r=n.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do r=e(r,a.action),a=a.next;while(a!==o);Fe(r,n.memoizedState)||(me=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),t.lastRenderedState=r}return[r,i]}function dd(){}function cd(e,n){var t=_,i=Ne(),o=n(),r=!Fe(i.memoizedState,o);if(r&&(i.memoizedState=o,me=!0),i=i.queue,es(fd.bind(null,t,i,e),[e]),i.getSnapshot!==n||r||ne!==null&&ne.memoizedState.tag&1){if(t.flags|=2048,ai(9,pd.bind(null,t,i,o,n),void 0,null),te===null)throw Error(P(349));Wn&30||hd(t,n,o)}return o}function hd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=_.updateQueue,n===null?(n={lastEffect:null,stores:null},_.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function pd(e,n,t,i){n.value=t,n.getSnapshot=i,gd(n)&&md(e)}function fd(e,n,t){return t(function(){gd(n)&&md(e)})}function gd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Fe(e,t)}catch{return!0}}function md(e){var n=nn(e,1);n!==null&&We(n,e,1,-1)}function ol(e){var n=_e();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ri,lastRenderedState:e},n.queue=e,e=e.dispatch=Pp.bind(null,_,e),[n.memoizedState,e]}function ai(e,n,t,i){return e={tag:e,create:n,destroy:t,deps:i,next:null},n=_.updateQueue,n===null?(n={lastEffect:null,stores:null},_.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,n.lastEffect=e)),e}function yd(){return Ne().memoizedState}function Zi(e,n,t,i){var o=_e();_.flags|=e,o.memoizedState=ai(1|n,t,void 0,i===void 0?null:i)}function No(e,n,t,i){var o=Ne();i=i===void 0?null:i;var r=void 0;if(J!==null){var a=J.memoizedState;if(r=a.destroy,i!==null&&Ja(i,a.deps)){o.memoizedState=ai(n,t,r,i);return}}_.flags|=e,o.memoizedState=ai(1|n,t,r,i)}function rl(e,n){return Zi(8390656,8,e,n)}function es(e,n){return No(2048,8,e,n)}function wd(e,n){return No(4,2,e,n)}function vd(e,n){return No(4,4,e,n)}function kd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function bd(e,n,t){return t=t!=null?t.concat([e]):null,No(4,4,kd.bind(null,n,e),t)}function ns(){}function Pd(e,n){var t=Ne();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&Ja(n,i[1])?i[0]:(t.memoizedState=[e,n],e)}function Sd(e,n){var t=Ne();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&Ja(n,i[1])?i[0]:(e=e(),t.memoizedState=[e,n],e)}function xd(e,n,t){return Wn&21?(Fe(t,n)||(t=Eu(),_.lanes|=t,Fn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=t)}function kp(e,n){var t=R;R=t!==0&&4>t?t:4,e(!0);var i=cr.transition;cr.transition={};try{e(!1),n()}finally{R=t,cr.transition=i}}function Ad(){return Ne().memoizedState}function bp(e,n,t){var i=vn(e);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Md(e))Td(n,t);else if(t=sd(e,n,t,i),t!==null){var o=he();We(t,e,i,o),Cd(t,n,i)}}function Pp(e,n,t){var i=vn(e),o={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Md(e))Td(n,o);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var a=n.lastRenderedState,s=r(a,t);if(o.hasEagerState=!0,o.eagerState=s,Fe(s,a)){var l=n.interleaved;l===null?(o.next=o,Za(n)):(o.next=l.next,l.next=o),n.interleaved=o;return}}catch{}finally{}t=sd(e,n,o,i),t!==null&&(o=he(),We(t,e,i,o),Cd(t,n,i))}}function Md(e){var n=e.alternate;return e===_||n!==null&&n===_}function Td(e,n){Ft=mo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Cd(e,n,t){if(t&4194240){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,Na(e,t)}}var yo={readContext:je,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Sp={readContext:je,useCallback:function(e,n){return _e().memoizedState=[e,n===void 0?null:n],e},useContext:je,useEffect:rl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Zi(4194308,4,kd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Zi(4194308,4,e,n)},useInsertionEffect:function(e,n){return Zi(4,2,e,n)},useMemo:function(e,n){var t=_e();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var i=_e();return n=t!==void 0?t(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=bp.bind(null,_,e),[i.memoizedState,e]},useRef:function(e){var n=_e();return e={current:e},n.memoizedState=e},useState:ol,useDebugValue:ns,useDeferredValue:function(e){return _e().memoizedState=e},useTransition:function(){var e=ol(!1),n=e[0];return e=kp.bind(null,e[1]),_e().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var i=_,o=_e();if(W){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),te===null)throw Error(P(349));Wn&30||hd(i,n,t)}o.memoizedState=t;var r={value:t,getSnapshot:n};return o.queue=r,rl(fd.bind(null,i,r,e),[e]),i.flags|=2048,ai(9,pd.bind(null,i,r,t,n),void 0,null),t},useId:function(){var e=_e(),n=te.identifierPrefix;if(W){var t=Je,i=Ke;t=(i&~(1<<32-ze(i)-1)).toString(32)+t,n=":"+n+"R"+t,t=oi++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=vp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},xp={readContext:je,useCallback:Pd,useContext:je,useEffect:es,useImperativeHandle:bd,useInsertionEffect:wd,useLayoutEffect:vd,useMemo:Sd,useReducer:hr,useRef:yd,useState:function(){return hr(ri)},useDebugValue:ns,useDeferredValue:function(e){var n=Ne();return xd(n,J.memoizedState,e)},useTransition:function(){var e=hr(ri)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:dd,useSyncExternalStore:cd,useId:Ad,unstable_isNewReconciler:!1},Ap={readContext:je,useCallback:Pd,useContext:je,useEffect:es,useImperativeHandle:bd,useInsertionEffect:wd,useLayoutEffect:vd,useMemo:Sd,useReducer:pr,useRef:yd,useState:function(){return pr(ri)},useDebugValue:ns,useDeferredValue:function(e){var n=Ne();return J===null?n.memoizedState=e:xd(n,J.memoizedState,e)},useTransition:function(){var e=pr(ri)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:dd,useSyncExternalStore:cd,useId:Ad,unstable_isNewReconciler:!1};function Ue(e,n){if(e&&e.defaultProps){n=B({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Xr(e,n,t,i){n=e.memoizedState,t=t(i,n),t=t==null?n:B({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Lo={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var i=he(),o=vn(e),r=Qe(i,o);r.payload=n,t!=null&&(r.callback=t),n=yn(e,r,o),n!==null&&(We(n,e,o,i),Bi(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var i=he(),o=vn(e),r=Qe(i,o);r.tag=1,r.payload=n,t!=null&&(r.callback=t),n=yn(e,r,o),n!==null&&(We(n,e,o,i),Bi(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=he(),i=vn(e),o=Qe(t,i);o.tag=2,n!=null&&(o.callback=n),n=yn(e,o,i),n!==null&&(We(n,e,i,t),Bi(n,e,i))}};function al(e,n,t,i,o,r,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,a):n.prototype&&n.prototype.isPureReactComponent?!Qt(t,i)||!Qt(o,r):!0}function Ed(e,n,t){var i=!1,o=Sn,r=n.contextType;return typeof r=="object"&&r!==null?r=je(r):(o=ve(n)?Dn:ue.current,i=n.contextTypes,r=(i=i!=null)?ft(e,o):Sn),n=new n(t,r),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Lo,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=r),n}function sl(e,n,t,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==e&&Lo.enqueueReplaceState(n,n.state,null)}function ea(e,n,t,i){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Ga(e);var r=n.contextType;typeof r=="object"&&r!==null?o.context=je(r):(r=ve(n)?Dn:ue.current,o.context=ft(e,r)),o.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Xr(e,n,r,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Lo.enqueueReplaceState(o,o.state,null),fo(e,t,o,i),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function wt(e,n){try{var t="",i=n;do t+=Xc(i),i=i.return;while(i);var o=t}catch(r){o=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:n,stack:o,digest:null}}function fr(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function na(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Mp=typeof WeakMap=="function"?WeakMap:Map;function Vd(e,n,t){t=Qe(-1,t),t.tag=3,t.payload={element:null};var i=n.value;return t.callback=function(){vo||(vo=!0,ca=i),na(e,n)},t}function jd(e,n,t){t=Qe(-1,t),t.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=n.value;t.payload=function(){return i(o)},t.callback=function(){na(e,n)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){na(e,n),typeof i!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function ll(e,n,t){var i=e.pingCache;if(i===null){i=e.pingCache=new Mp;var o=new Set;i.set(n,o)}else o=i.get(n),o===void 0&&(o=new Set,i.set(n,o));o.has(t)||(o.add(t),e=Wp.bind(null,e,n,t),n.then(e,e))}function ul(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function dl(e,n,t,i,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Qe(-1,1),n.tag=2,yn(t,n,1))),t.lanes|=1),e)}var Tp=on.ReactCurrentOwner,me=!1;function ce(e,n,t,i){n.child=e===null?ad(n,null,t,i):mt(n,e.child,t,i)}function cl(e,n,t,i,o){t=t.render;var r=n.ref;return ct(n,o),i=Qa(e,n,t,i,r,o),t=Xa(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,tn(e,n,o)):(W&&t&&Wa(n),n.flags|=1,ce(e,n,i,o),n.child)}function hl(e,n,t,i,o){if(e===null){var r=t.type;return typeof r=="function"&&!us(r)&&r.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=r,Nd(e,n,r,i,o)):(e=Ki(t.type,null,i,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!(e.lanes&o)){var a=r.memoizedProps;if(t=t.compare,t=t!==null?t:Qt,t(a,i)&&e.ref===n.ref)return tn(e,n,o)}return n.flags|=1,e=kn(r,i),e.ref=n.ref,e.return=n,n.child=e}function Nd(e,n,t,i,o){if(e!==null){var r=e.memoizedProps;if(Qt(r,i)&&e.ref===n.ref)if(me=!1,n.pendingProps=i=r,(e.lanes&o)!==0)e.flags&131072&&(me=!0);else return n.lanes=e.lanes,tn(e,n,o)}return ta(e,n,t,i,o)}function Ld(e,n,t){var i=n.pendingProps,o=i.children,r=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(at,be),be|=t;else{if(!(t&1073741824))return e=r!==null?r.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,I(at,be),be|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=r!==null?r.baseLanes:t,I(at,be),be|=i}else r!==null?(i=r.baseLanes|t,n.memoizedState=null):i=t,I(at,be),be|=i;return ce(e,n,o,t),n.child}function Od(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ta(e,n,t,i,o){var r=ve(t)?Dn:ue.current;return r=ft(n,r),ct(n,o),t=Qa(e,n,t,i,r,o),i=Xa(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,tn(e,n,o)):(W&&i&&Wa(n),n.flags|=1,ce(e,n,t,o),n.child)}function pl(e,n,t,i,o){if(ve(t)){var r=!0;lo(n)}else r=!1;if(ct(n,o),n.stateNode===null)Gi(e,n),Ed(n,t,i),ea(n,t,i,o),i=!0;else if(e===null){var a=n.stateNode,s=n.memoizedProps;a.props=s;var l=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=je(u):(u=ve(t)?Dn:ue.current,u=ft(n,u));var f=t.getDerivedStateFromProps,c=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==i||l!==u)&&sl(n,a,i,u),sn=!1;var m=n.memoizedState;a.state=m,fo(n,i,a,o),l=n.memoizedState,s!==i||m!==l||we.current||sn?(typeof f=="function"&&(Xr(n,t,f,i),l=n.memoizedState),(s=sn||al(n,t,s,i,m,l,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=l),a.props=i,a.state=l,a.context=u,i=s):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{a=n.stateNode,ld(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:Ue(n.type,s),a.props=u,c=n.pendingProps,m=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=je(l):(l=ve(t)?Dn:ue.current,l=ft(n,l));var y=t.getDerivedStateFromProps;(f=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==c||m!==l)&&sl(n,a,i,l),sn=!1,m=n.memoizedState,a.state=m,fo(n,i,a,o);var w=n.memoizedState;s!==c||m!==w||we.current||sn?(typeof y=="function"&&(Xr(n,t,y,i),w=n.memoizedState),(u=sn||al(n,t,u,i,m,w,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,w,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,w,l)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=w),a.props=i,a.state=w,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),i=!1)}return ia(e,n,t,i,r,o)}function ia(e,n,t,i,o,r){Od(e,n);var a=(n.flags&128)!==0;if(!i&&!a)return o&&Qs(n,t,!1),tn(e,n,r);i=n.stateNode,Tp.current=n;var s=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&a?(n.child=mt(n,e.child,null,r),n.child=mt(n,null,s,r)):ce(e,n,s,r),n.memoizedState=i.state,o&&Qs(n,t,!0),n.child}function Rd(e){var n=e.stateNode;n.pendingContext?Js(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Js(e,n.context,!1),qa(e,n.containerInfo)}function fl(e,n,t,i,o){return gt(),Ha(o),n.flags|=256,ce(e,n,t,i),n.child}var oa={dehydrated:null,treeContext:null,retryLane:0};function ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ud(e,n,t){var i=n.pendingProps,o=H.current,r=!1,a=(n.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(r=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),I(H,o&1),e===null)return Jr(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=i.children,e=i.fallback,r?(i=n.mode,r=n.child,a={mode:"hidden",children:a},!(i&1)&&r!==null?(r.childLanes=0,r.pendingProps=a):r=Uo(a,i,0,null),e=In(e,i,t,null),r.return=n,e.return=n,r.sibling=e,n.child=r,n.child.memoizedState=ra(t),n.memoizedState=oa,e):ts(n,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Cp(e,n,a,i,s,o,t);if(r){r=i.fallback,a=n.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&n.child!==o?(i=n.child,i.childLanes=0,i.pendingProps=l,n.deletions=null):(i=kn(o,l),i.subtreeFlags=o.subtreeFlags&14680064),s!==null?r=kn(s,r):(r=In(r,a,t,null),r.flags|=2),r.return=n,i.return=n,i.sibling=r,n.child=i,i=r,r=n.child,a=e.child.memoizedState,a=a===null?ra(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},r.memoizedState=a,r.childLanes=e.childLanes&~t,n.memoizedState=oa,i}return r=e.child,e=r.sibling,i=kn(r,{mode:"visible",children:i.children}),!(n.mode&1)&&(i.lanes=t),i.return=n,i.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=i,n.memoizedState=null,i}function ts(e,n){return n=Uo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ni(e,n,t,i){return i!==null&&Ha(i),mt(n,e.child,null,t),e=ts(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Cp(e,n,t,i,o,r,a){if(t)return n.flags&256?(n.flags&=-257,i=fr(Error(P(422))),Ni(e,n,a,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(r=i.fallback,o=n.mode,i=Uo({mode:"visible",children:i.children},o,0,null),r=In(r,o,a,null),r.flags|=2,i.return=n,r.return=n,i.sibling=r,n.child=i,n.mode&1&&mt(n,e.child,null,a),n.child.memoizedState=ra(a),n.memoizedState=oa,r);if(!(n.mode&1))return Ni(e,n,a,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var s=i.dgst;return i=s,r=Error(P(419)),i=fr(r,i,void 0),Ni(e,n,a,i)}if(s=(a&e.childLanes)!==0,me||s){if(i=te,i!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(i.suspendedLanes|a)?0:o,o!==0&&o!==r.retryLane&&(r.retryLane=o,nn(e,o),We(i,e,o,-1))}return ls(),i=fr(Error(P(421))),Ni(e,n,a,i)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Fp.bind(null,e),o._reactRetry=n,null):(e=r.treeContext,Pe=mn(o.nextSibling),Se=n,W=!0,De=null,e!==null&&(Te[Ce++]=Ke,Te[Ce++]=Je,Te[Ce++]=zn,Ke=e.id,Je=e.overflow,zn=n),n=ts(n,i.children),n.flags|=4096,n)}function gl(e,n,t){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),Qr(e.return,n,t)}function gr(e,n,t,i,o){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:o}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=t,r.tailMode=o)}function Id(e,n,t){var i=n.pendingProps,o=i.revealOrder,r=i.tail;if(ce(e,n,i.children,t),i=H.current,i&2)i=i&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gl(e,t,n);else if(e.tag===19)gl(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(I(H,i),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&go(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),gr(n,!1,o,t,r);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&go(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}gr(n,!0,t,null,r);break;case"together":gr(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function tn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Fn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=kn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=kn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ep(e,n,t){switch(n.tag){case 3:Rd(n),gt();break;case 5:ud(n);break;case 1:ve(n.type)&&lo(n);break;case 4:qa(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,o=n.memoizedProps.value;I(ho,i._currentValue),i._currentValue=o;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(I(H,H.current&1),n.flags|=128,null):t&n.child.childLanes?Ud(e,n,t):(I(H,H.current&1),e=tn(e,n,t),e!==null?e.sibling:null);I(H,H.current&1);break;case 19:if(i=(t&n.childLanes)!==0,e.flags&128){if(i)return Id(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),I(H,H.current),i)break;return null;case 22:case 23:return n.lanes=0,Ld(e,n,t)}return tn(e,n,t)}var Dd,aa,zd,Wd;Dd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};aa=function(){};zd=function(e,n,t,i){var o=e.memoizedProps;if(o!==i){e=n.stateNode,Rn(Ze.current);var r=null;switch(t){case"input":o=Cr(e,o),i=Cr(e,i),r=[];break;case"select":o=B({},o,{value:void 0}),i=B({},i,{value:void 0}),r=[];break;case"textarea":o=jr(e,o),i=jr(e,i),r=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=ao)}Lr(t,i);var a;t=null;for(u in o)if(!i.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yt.hasOwnProperty(u)?r||(r=[]):(r=r||[]).push(u,null));for(u in i){var l=i[u];if(s=o!=null?o[u]:void 0,i.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(r||(r=[]),r.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(r=r||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(r=r||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yt.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&D("scroll",e),r||s===l||(r=[])):(r=r||[]).push(u,l))}t&&(r=r||[]).push("style",t);var u=r;(n.updateQueue=u)&&(n.flags|=4)}};Wd=function(e,n,t,i){t!==i&&(n.flags|=4)};function Vt(e,n){if(!W)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=t,n}function Vp(e,n,t){var i=n.pendingProps;switch(Fa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return ve(n.type)&&so(),se(n),null;case 3:return i=n.stateNode,yt(),z(we),z(ue),Ka(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Vi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,De!==null&&(fa(De),De=null))),aa(e,n),se(n),null;case 5:$a(n);var o=Rn(ii.current);if(t=n.type,e!==null&&n.stateNode!=null)zd(e,n,t,i,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(P(166));return se(n),null}if(e=Rn(Ze.current),Vi(n)){i=n.stateNode,t=n.type;var r=n.memoizedProps;switch(i[Be]=n,i[ni]=r,e=(n.mode&1)!==0,t){case"dialog":D("cancel",i),D("close",i);break;case"iframe":case"object":case"embed":D("load",i);break;case"video":case"audio":for(o=0;o<Rt.length;o++)D(Rt[o],i);break;case"source":D("error",i);break;case"img":case"image":case"link":D("error",i),D("load",i);break;case"details":D("toggle",i);break;case"input":xs(i,r),D("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!r.multiple},D("invalid",i);break;case"textarea":Ms(i,r),D("invalid",i)}Lr(t,r),o=null;for(var a in r)if(r.hasOwnProperty(a)){var s=r[a];a==="children"?typeof s=="string"?i.textContent!==s&&(r.suppressHydrationWarning!==!0&&Ei(i.textContent,s,e),o=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(r.suppressHydrationWarning!==!0&&Ei(i.textContent,s,e),o=["children",""+s]):Yt.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&D("scroll",i)}switch(t){case"input":bi(i),As(i,r,!0);break;case"textarea":bi(i),Ts(i);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(i.onclick=ao)}i=o,n.updateQueue=i,i!==null&&(n.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=a.createElement(t,{is:i.is}):(e=a.createElement(t),t==="select"&&(a=e,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):e=a.createElementNS(e,t),e[Be]=n,e[ni]=i,Dd(e,n,!1,!1),n.stateNode=e;e:{switch(a=Or(t,i),t){case"dialog":D("cancel",e),D("close",e),o=i;break;case"iframe":case"object":case"embed":D("load",e),o=i;break;case"video":case"audio":for(o=0;o<Rt.length;o++)D(Rt[o],e);o=i;break;case"source":D("error",e),o=i;break;case"img":case"image":case"link":D("error",e),D("load",e),o=i;break;case"details":D("toggle",e),o=i;break;case"input":xs(e,i),o=Cr(e,i),D("invalid",e);break;case"option":o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=B({},i,{value:void 0}),D("invalid",e);break;case"textarea":Ms(e,i),o=jr(e,i),D("invalid",e);break;default:o=i}Lr(t,o),s=o;for(r in s)if(s.hasOwnProperty(r)){var l=s[r];r==="style"?yu(e,l):r==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gu(e,l)):r==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Zt(e,l):typeof l=="number"&&Zt(e,""+l):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Yt.hasOwnProperty(r)?l!=null&&r==="onScroll"&&D("scroll",e):l!=null&&Ma(e,r,l,a))}switch(t){case"input":bi(e),As(e,i,!1);break;case"textarea":bi(e),Ts(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Pn(i.value));break;case"select":e.multiple=!!i.multiple,r=i.value,r!=null?st(e,!!i.multiple,r,!1):i.defaultValue!=null&&st(e,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ao)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)Wd(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(P(166));if(t=Rn(ii.current),Rn(Ze.current),Vi(n)){if(i=n.stateNode,t=n.memoizedProps,i[Be]=n,(r=i.nodeValue!==t)&&(e=Se,e!==null))switch(e.tag){case 3:Ei(i.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ei(i.nodeValue,t,(e.mode&1)!==0)}r&&(n.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Be]=n,n.stateNode=i}return se(n),null;case 13:if(z(H),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Pe!==null&&n.mode&1&&!(n.flags&128))od(),gt(),n.flags|=98560,r=!1;else if(r=Vi(n),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(P(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(P(317));r[Be]=n}else gt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),r=!1}else De!==null&&(fa(De),De=null),r=!0;if(!r)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,n.mode&1&&(e===null||H.current&1?Q===0&&(Q=3):ls())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return yt(),aa(e,n),e===null&&Xt(n.stateNode.containerInfo),se(n),null;case 10:return Ya(n.type._context),se(n),null;case 17:return ve(n.type)&&so(),se(n),null;case 19:if(z(H),r=n.memoizedState,r===null)return se(n),null;if(i=(n.flags&128)!==0,a=r.rendering,a===null)if(i)Vt(r,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=go(e),a!==null){for(n.flags|=128,Vt(r,!1),i=a.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=t,t=n.child;t!==null;)r=t,e=i,r.flags&=14680066,a=r.alternate,a===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,e=a.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return I(H,H.current&1|2),n.child}e=e.sibling}r.tail!==null&&Z()>vt&&(n.flags|=128,i=!0,Vt(r,!1),n.lanes=4194304)}else{if(!i)if(e=go(a),e!==null){if(n.flags|=128,i=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Vt(r,!0),r.tail===null&&r.tailMode==="hidden"&&!a.alternate&&!W)return se(n),null}else 2*Z()-r.renderingStartTime>vt&&t!==1073741824&&(n.flags|=128,i=!0,Vt(r,!1),n.lanes=4194304);r.isBackwards?(a.sibling=n.child,n.child=a):(t=r.last,t!==null?t.sibling=a:n.child=a,r.last=a)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.renderingStartTime=Z(),n.sibling=null,t=H.current,I(H,i?t&1|2:t&1),n):(se(n),null);case 22:case 23:return ss(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&n.mode&1?be&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function jp(e,n){switch(Fa(n),n.tag){case 1:return ve(n.type)&&so(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return yt(),z(we),z(ue),Ka(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return $a(n),null;case 13:if(z(H),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));gt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return z(H),null;case 4:return yt(),null;case 10:return Ya(n.type._context),null;case 22:case 23:return ss(),null;case 24:return null;default:return null}}var Li=!1,le=!1,Np=typeof WeakSet=="function"?WeakSet:Set,T=null;function rt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Y(e,n,i)}else t.current=null}function sa(e,n,t){try{t()}catch(i){Y(e,n,i)}}var ml=!1;function Lp(e,n){if(Br=io,e=Yu(),za(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var o=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var a=0,s=-1,l=-1,u=0,f=0,c=e,m=null;n:for(;;){for(var y;c!==t||o!==0&&c.nodeType!==3||(s=a+o),c!==r||i!==0&&c.nodeType!==3||(l=a+i),c.nodeType===3&&(a+=c.nodeValue.length),(y=c.firstChild)!==null;)m=c,c=y;for(;;){if(c===e)break n;if(m===t&&++u===o&&(s=a),m===r&&++f===i&&(l=a),(y=c.nextSibling)!==null)break;c=m,m=c.parentNode}c=y}t=s===-1||l===-1?null:{start:s,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Yr={focusedElem:e,selectionRange:t},io=!1,T=n;T!==null;)if(n=T,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,T=e;else for(;T!==null;){n=T;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,A=w.memoizedState,p=n.stateNode,d=p.getSnapshotBeforeUpdate(n.elementType===n.type?k:Ue(n.type,k),A);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(v){Y(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,T=e;break}T=n.return}return w=ml,ml=!1,w}function Ht(e,n,t){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var r=o.destroy;o.destroy=void 0,r!==void 0&&sa(n,t,r)}o=o.next}while(o!==i)}}function Oo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var i=t.create;t.destroy=i()}t=t.next}while(t!==n)}}function la(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Fd(e){var n=e.alternate;n!==null&&(e.alternate=null,Fd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Be],delete n[ni],delete n[qr],delete n[gp],delete n[mp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hd(e){return e.tag===5||e.tag===3||e.tag===4}function yl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ua(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ao));else if(i!==4&&(e=e.child,e!==null))for(ua(e,n,t),e=e.sibling;e!==null;)ua(e,n,t),e=e.sibling}function da(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(da(e,n,t),e=e.sibling;e!==null;)da(e,n,t),e=e.sibling}var ie=null,Ie=!1;function rn(e,n,t){for(t=t.child;t!==null;)_d(e,n,t),t=t.sibling}function _d(e,n,t){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Mo,t)}catch{}switch(t.tag){case 5:le||rt(t,n);case 6:var i=ie,o=Ie;ie=null,rn(e,n,t),ie=i,Ie=o,ie!==null&&(Ie?(e=ie,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ie.removeChild(t.stateNode));break;case 18:ie!==null&&(Ie?(e=ie,t=t.stateNode,e.nodeType===8?lr(e.parentNode,t):e.nodeType===1&&lr(e,t),Kt(e)):lr(ie,t.stateNode));break;case 4:i=ie,o=Ie,ie=t.stateNode.containerInfo,Ie=!0,rn(e,n,t),ie=i,Ie=o;break;case 0:case 11:case 14:case 15:if(!le&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var r=o,a=r.destroy;r=r.tag,a!==void 0&&(r&2||r&4)&&sa(t,n,a),o=o.next}while(o!==i)}rn(e,n,t);break;case 1:if(!le&&(rt(t,n),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(s){Y(t,n,s)}rn(e,n,t);break;case 21:rn(e,n,t);break;case 22:t.mode&1?(le=(i=le)||t.memoizedState!==null,rn(e,n,t),le=i):rn(e,n,t);break;default:rn(e,n,t)}}function wl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Np),n.forEach(function(i){var o=Hp.bind(null,e,i);t.has(i)||(t.add(i),i.then(o,o))})}}function Re(e,n){var t=n.deletions;if(t!==null)for(var i=0;i<t.length;i++){var o=t[i];try{var r=e,a=n,s=a;e:for(;s!==null;){switch(s.tag){case 5:ie=s.stateNode,Ie=!1;break e;case 3:ie=s.stateNode.containerInfo,Ie=!0;break e;case 4:ie=s.stateNode.containerInfo,Ie=!0;break e}s=s.return}if(ie===null)throw Error(P(160));_d(r,a,o),ie=null,Ie=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){Y(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Bd(n,e),n=n.sibling}function Bd(e,n){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(n,e),He(e),i&4){try{Ht(3,e,e.return),Oo(3,e)}catch(k){Y(e,e.return,k)}try{Ht(5,e,e.return)}catch(k){Y(e,e.return,k)}}break;case 1:Re(n,e),He(e),i&512&&t!==null&&rt(t,t.return);break;case 5:if(Re(n,e),He(e),i&512&&t!==null&&rt(t,t.return),e.flags&32){var o=e.stateNode;try{Zt(o,"")}catch(k){Y(e,e.return,k)}}if(i&4&&(o=e.stateNode,o!=null)){var r=e.memoizedProps,a=t!==null?t.memoizedProps:r,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&r.type==="radio"&&r.name!=null&&hu(o,r),Or(s,a);var u=Or(s,r);for(a=0;a<l.length;a+=2){var f=l[a],c=l[a+1];f==="style"?yu(o,c):f==="dangerouslySetInnerHTML"?gu(o,c):f==="children"?Zt(o,c):Ma(o,f,c,u)}switch(s){case"input":Er(o,r);break;case"textarea":pu(o,r);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!r.multiple;var y=r.value;y!=null?st(o,!!r.multiple,y,!1):m!==!!r.multiple&&(r.defaultValue!=null?st(o,!!r.multiple,r.defaultValue,!0):st(o,!!r.multiple,r.multiple?[]:"",!1))}o[ni]=r}catch(k){Y(e,e.return,k)}}break;case 6:if(Re(n,e),He(e),i&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,r=e.memoizedProps;try{o.nodeValue=r}catch(k){Y(e,e.return,k)}}break;case 3:if(Re(n,e),He(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Kt(n.containerInfo)}catch(k){Y(e,e.return,k)}break;case 4:Re(n,e),He(e);break;case 13:Re(n,e),He(e),o=e.child,o.flags&8192&&(r=o.memoizedState!==null,o.stateNode.isHidden=r,!r||o.alternate!==null&&o.alternate.memoizedState!==null||(rs=Z())),i&4&&wl(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(le=(u=le)||f,Re(n,e),le=u):Re(n,e),He(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(T=e,f=e.child;f!==null;){for(c=T=f;T!==null;){switch(m=T,y=m.child,m.tag){case 0:case 11:case 14:case 15:Ht(4,m,m.return);break;case 1:rt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){i=m,t=m.return;try{n=i,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(k){Y(i,t,k)}}break;case 5:rt(m,m.return);break;case 22:if(m.memoizedState!==null){kl(c);continue}}y!==null?(y.return=m,T=y):kl(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{o=c.stateNode,u?(r=o.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(s=c.stateNode,l=c.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=mu("display",a))}catch(k){Y(e,e.return,k)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(k){Y(e,e.return,k)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Re(n,e),He(e),i&4&&wl(e);break;case 21:break;default:Re(n,e),He(e)}}function He(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Hd(t)){var i=t;break e}t=t.return}throw Error(P(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(Zt(o,""),i.flags&=-33);var r=yl(e);da(e,r,o);break;case 3:case 4:var a=i.stateNode.containerInfo,s=yl(e);ua(e,s,a);break;default:throw Error(P(161))}}catch(l){Y(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Op(e,n,t){T=e,Yd(e)}function Yd(e,n,t){for(var i=(e.mode&1)!==0;T!==null;){var o=T,r=o.child;if(o.tag===22&&i){var a=o.memoizedState!==null||Li;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||le;s=Li;var u=le;if(Li=a,(le=l)&&!u)for(T=o;T!==null;)a=T,l=a.child,a.tag===22&&a.memoizedState!==null?bl(o):l!==null?(l.return=a,T=l):bl(o);for(;r!==null;)T=r,Yd(r),r=r.sibling;T=o,Li=s,le=u}vl(e)}else o.subtreeFlags&8772&&r!==null?(r.return=o,T=r):vl(e)}}function vl(e){for(;T!==null;){var n=T;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||Oo(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!le)if(t===null)i.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:Ue(n.type,t.memoizedProps);i.componentDidUpdate(o,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var r=n.updateQueue;r!==null&&il(n,r,i);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}il(n,a,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&Kt(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}le||n.flags&512&&la(n)}catch(m){Y(n,n.return,m)}}if(n===e){T=null;break}if(t=n.sibling,t!==null){t.return=n.return,T=t;break}T=n.return}}function kl(e){for(;T!==null;){var n=T;if(n===e){T=null;break}var t=n.sibling;if(t!==null){t.return=n.return,T=t;break}T=n.return}}function bl(e){for(;T!==null;){var n=T;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Oo(4,n)}catch(l){Y(n,t,l)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var o=n.return;try{i.componentDidMount()}catch(l){Y(n,o,l)}}var r=n.return;try{la(n)}catch(l){Y(n,r,l)}break;case 5:var a=n.return;try{la(n)}catch(l){Y(n,a,l)}}}catch(l){Y(n,n.return,l)}if(n===e){T=null;break}var s=n.sibling;if(s!==null){s.return=n.return,T=s;break}T=n.return}}var Rp=Math.ceil,wo=on.ReactCurrentDispatcher,is=on.ReactCurrentOwner,Ve=on.ReactCurrentBatchConfig,O=0,te=null,G=null,oe=0,be=0,at=An(0),Q=0,si=null,Fn=0,Ro=0,os=0,_t=null,ge=null,rs=0,vt=1/0,qe=null,vo=!1,ca=null,wn=null,Oi=!1,cn=null,ko=0,Bt=0,ha=null,qi=-1,$i=0;function he(){return O&6?Z():qi!==-1?qi:qi=Z()}function vn(e){return e.mode&1?O&2&&oe!==0?oe&-oe:wp.transition!==null?($i===0&&($i=Eu()),$i):(e=R,e!==0||(e=window.event,e=e===void 0?16:Uu(e.type)),e):1}function We(e,n,t,i){if(50<Bt)throw Bt=0,ha=null,Error(P(185));ci(e,t,i),(!(O&2)||e!==te)&&(e===te&&(!(O&2)&&(Ro|=t),Q===4&&un(e,oe)),ke(e,i),t===1&&O===0&&!(n.mode&1)&&(vt=Z()+500,jo&&Mn()))}function ke(e,n){var t=e.callbackNode;wh(e,n);var i=to(e,e===te?oe:0);if(i===0)t!==null&&Vs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(t!=null&&Vs(t),n===1)e.tag===0?yp(Pl.bind(null,e)):nd(Pl.bind(null,e)),pp(function(){!(O&6)&&Mn()}),t=null;else{switch(Vu(i)){case 1:t=ja;break;case 4:t=Tu;break;case 16:t=no;break;case 536870912:t=Cu;break;default:t=no}t=Xd(t,Zd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Zd(e,n){if(qi=-1,$i=0,O&6)throw Error(P(327));var t=e.callbackNode;if(ht()&&e.callbackNode!==t)return null;var i=to(e,e===te?oe:0);if(i===0)return null;if(i&30||i&e.expiredLanes||n)n=bo(e,i);else{n=i;var o=O;O|=2;var r=qd();(te!==e||oe!==n)&&(qe=null,vt=Z()+500,Un(e,n));do try{Dp();break}catch(s){Gd(e,s)}while(!0);Ba(),wo.current=r,O=o,G!==null?n=0:(te=null,oe=0,n=Q)}if(n!==0){if(n===2&&(o=zr(e),o!==0&&(i=o,n=pa(e,o))),n===1)throw t=si,Un(e,0),un(e,i),ke(e,Z()),t;if(n===6)un(e,i);else{if(o=e.current.alternate,!(i&30)&&!Up(o)&&(n=bo(e,i),n===2&&(r=zr(e),r!==0&&(i=r,n=pa(e,r))),n===1))throw t=si,Un(e,0),un(e,i),ke(e,Z()),t;switch(e.finishedWork=o,e.finishedLanes=i,n){case 0:case 1:throw Error(P(345));case 2:Nn(e,ge,qe);break;case 3:if(un(e,i),(i&130023424)===i&&(n=rs+500-Z(),10<n)){if(to(e,0)!==0)break;if(o=e.suspendedLanes,(o&i)!==i){he(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Gr(Nn.bind(null,e,ge,qe),n);break}Nn(e,ge,qe);break;case 4:if(un(e,i),(i&4194240)===i)break;for(n=e.eventTimes,o=-1;0<i;){var a=31-ze(i);r=1<<a,a=n[a],a>o&&(o=a),i&=~r}if(i=o,i=Z()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Rp(i/1960))-i,10<i){e.timeoutHandle=Gr(Nn.bind(null,e,ge,qe),i);break}Nn(e,ge,qe);break;case 5:Nn(e,ge,qe);break;default:throw Error(P(329))}}}return ke(e,Z()),e.callbackNode===t?Zd.bind(null,e):null}function pa(e,n){var t=_t;return e.current.memoizedState.isDehydrated&&(Un(e,n).flags|=256),e=bo(e,n),e!==2&&(n=ge,ge=t,n!==null&&fa(n)),e}function fa(e){ge===null?ge=e:ge.push.apply(ge,e)}function Up(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var o=t[i],r=o.getSnapshot;o=o.value;try{if(!Fe(r(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function un(e,n){for(n&=~os,n&=~Ro,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-ze(n),i=1<<t;e[t]=-1,n&=~i}}function Pl(e){if(O&6)throw Error(P(327));ht();var n=to(e,0);if(!(n&1))return ke(e,Z()),null;var t=bo(e,n);if(e.tag!==0&&t===2){var i=zr(e);i!==0&&(n=i,t=pa(e,i))}if(t===1)throw t=si,Un(e,0),un(e,n),ke(e,Z()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Nn(e,ge,qe),ke(e,Z()),null}function as(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(vt=Z()+500,jo&&Mn())}}function Hn(e){cn!==null&&cn.tag===0&&!(O&6)&&ht();var n=O;O|=1;var t=Ve.transition,i=R;try{if(Ve.transition=null,R=1,e)return e()}finally{R=i,Ve.transition=t,O=n,!(O&6)&&Mn()}}function ss(){be=at.current,z(at)}function Un(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,hp(t)),G!==null)for(t=G.return;t!==null;){var i=t;switch(Fa(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&so();break;case 3:yt(),z(we),z(ue),Ka();break;case 5:$a(i);break;case 4:yt();break;case 13:z(H);break;case 19:z(H);break;case 10:Ya(i.type._context);break;case 22:case 23:ss()}t=t.return}if(te=e,G=e=kn(e.current,null),oe=be=n,Q=0,si=null,os=Ro=Fn=0,ge=_t=null,On!==null){for(n=0;n<On.length;n++)if(t=On[n],i=t.interleaved,i!==null){t.interleaved=null;var o=i.next,r=t.pending;if(r!==null){var a=r.next;r.next=o,i.next=a}t.pending=i}On=null}return e}function Gd(e,n){do{var t=G;try{if(Ba(),Yi.current=yo,mo){for(var i=_.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}mo=!1}if(Wn=0,ne=J=_=null,Ft=!1,oi=0,is.current=null,t===null||t.return===null){Q=1,si=n,G=null;break}e:{var r=e,a=t.return,s=t,l=n;if(n=oe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=s,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=ul(a);if(y!==null){y.flags&=-257,dl(y,a,s,r,n),y.mode&1&&ll(r,u,n),n=y,l=u;var w=n.updateQueue;if(w===null){var k=new Set;k.add(l),n.updateQueue=k}else w.add(l);break e}else{if(!(n&1)){ll(r,u,n),ls();break e}l=Error(P(426))}}else if(W&&s.mode&1){var A=ul(a);if(A!==null){!(A.flags&65536)&&(A.flags|=256),dl(A,a,s,r,n),Ha(wt(l,s));break e}}r=l=wt(l,s),Q!==4&&(Q=2),_t===null?_t=[r]:_t.push(r),r=a;do{switch(r.tag){case 3:r.flags|=65536,n&=-n,r.lanes|=n;var p=Vd(r,l,n);tl(r,p);break e;case 1:s=l;var d=r.type,g=r.stateNode;if(!(r.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(wn===null||!wn.has(g)))){r.flags|=65536,n&=-n,r.lanes|=n;var v=jd(r,s,n);tl(r,v);break e}}r=r.return}while(r!==null)}Kd(t)}catch(x){n=x,G===t&&t!==null&&(G=t=t.return);continue}break}while(!0)}function qd(){var e=wo.current;return wo.current=yo,e===null?yo:e}function ls(){(Q===0||Q===3||Q===2)&&(Q=4),te===null||!(Fn&268435455)&&!(Ro&268435455)||un(te,oe)}function bo(e,n){var t=O;O|=2;var i=qd();(te!==e||oe!==n)&&(qe=null,Un(e,n));do try{Ip();break}catch(o){Gd(e,o)}while(!0);if(Ba(),O=t,wo.current=i,G!==null)throw Error(P(261));return te=null,oe=0,Q}function Ip(){for(;G!==null;)$d(G)}function Dp(){for(;G!==null&&!uh();)$d(G)}function $d(e){var n=Qd(e.alternate,e,be);e.memoizedProps=e.pendingProps,n===null?Kd(e):G=n,is.current=null}function Kd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=jp(t,n),t!==null){t.flags&=32767,G=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,G=null;return}}else if(t=Vp(t,n,be),t!==null){G=t;return}if(n=n.sibling,n!==null){G=n;return}G=n=e}while(n!==null);Q===0&&(Q=5)}function Nn(e,n,t){var i=R,o=Ve.transition;try{Ve.transition=null,R=1,zp(e,n,t,i)}finally{Ve.transition=o,R=i}return null}function zp(e,n,t,i){do ht();while(cn!==null);if(O&6)throw Error(P(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var r=t.lanes|t.childLanes;if(vh(e,r),e===te&&(G=te=null,oe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Oi||(Oi=!0,Xd(no,function(){return ht(),null})),r=(t.flags&15990)!==0,t.subtreeFlags&15990||r){r=Ve.transition,Ve.transition=null;var a=R;R=1;var s=O;O|=4,is.current=null,Lp(e,t),Bd(t,e),rp(Yr),io=!!Br,Yr=Br=null,e.current=t,Op(t),dh(),O=s,R=a,Ve.transition=r}else e.current=t;if(Oi&&(Oi=!1,cn=e,ko=o),r=e.pendingLanes,r===0&&(wn=null),ph(t.stateNode),ke(e,Z()),n!==null)for(i=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],i(o.value,{componentStack:o.stack,digest:o.digest});if(vo)throw vo=!1,e=ca,ca=null,e;return ko&1&&e.tag!==0&&ht(),r=e.pendingLanes,r&1?e===ha?Bt++:(Bt=0,ha=e):Bt=0,Mn(),null}function ht(){if(cn!==null){var e=Vu(ko),n=Ve.transition,t=R;try{if(Ve.transition=null,R=16>e?16:e,cn===null)var i=!1;else{if(e=cn,cn=null,ko=0,O&6)throw Error(P(331));var o=O;for(O|=4,T=e.current;T!==null;){var r=T,a=r.child;if(T.flags&16){var s=r.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(T=u;T!==null;){var f=T;switch(f.tag){case 0:case 11:case 15:Ht(8,f,r)}var c=f.child;if(c!==null)c.return=f,T=c;else for(;T!==null;){f=T;var m=f.sibling,y=f.return;if(Fd(f),f===u){T=null;break}if(m!==null){m.return=y,T=m;break}T=y}}}var w=r.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var A=k.sibling;k.sibling=null,k=A}while(k!==null)}}T=r}}if(r.subtreeFlags&2064&&a!==null)a.return=r,T=a;else e:for(;T!==null;){if(r=T,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Ht(9,r,r.return)}var p=r.sibling;if(p!==null){p.return=r.return,T=p;break e}T=r.return}}var d=e.current;for(T=d;T!==null;){a=T;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,T=g;else e:for(a=d;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Oo(9,s)}}catch(x){Y(s,s.return,x)}if(s===a){T=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,T=v;break e}T=s.return}}if(O=o,Mn(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Mo,e)}catch{}i=!0}return i}finally{R=t,Ve.transition=n}}return!1}function Sl(e,n,t){n=wt(t,n),n=Vd(e,n,1),e=yn(e,n,1),n=he(),e!==null&&(ci(e,1,n),ke(e,n))}function Y(e,n,t){if(e.tag===3)Sl(e,e,t);else for(;n!==null;){if(n.tag===3){Sl(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(wn===null||!wn.has(i))){e=wt(t,e),e=jd(n,e,1),n=yn(n,e,1),e=he(),n!==null&&(ci(n,1,e),ke(n,e));break}}n=n.return}}function Wp(e,n,t){var i=e.pingCache;i!==null&&i.delete(n),n=he(),e.pingedLanes|=e.suspendedLanes&t,te===e&&(oe&t)===t&&(Q===4||Q===3&&(oe&130023424)===oe&&500>Z()-rs?Un(e,0):os|=t),ke(e,n)}function Jd(e,n){n===0&&(e.mode&1?(n=xi,xi<<=1,!(xi&130023424)&&(xi=4194304)):n=1);var t=he();e=nn(e,n),e!==null&&(ci(e,n,t),ke(e,t))}function Fp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Jd(e,t)}function Hp(e,n){var t=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(P(314))}i!==null&&i.delete(n),Jd(e,t)}var Qd;Qd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||we.current)me=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return me=!1,Ep(e,n,t);me=!!(e.flags&131072)}else me=!1,W&&n.flags&1048576&&td(n,co,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;Gi(e,n),e=n.pendingProps;var o=ft(n,ue.current);ct(n,t),o=Qa(null,n,i,e,o,t);var r=Xa();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ve(i)?(r=!0,lo(n)):r=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ga(n),o.updater=Lo,n.stateNode=o,o._reactInternals=n,ea(n,i,e,t),n=ia(null,n,i,!0,r,t)):(n.tag=0,W&&r&&Wa(n),ce(null,n,o,t),n=n.child),n;case 16:i=n.elementType;e:{switch(Gi(e,n),e=n.pendingProps,o=i._init,i=o(i._payload),n.type=i,o=n.tag=Bp(i),e=Ue(i,e),o){case 0:n=ta(null,n,i,e,t);break e;case 1:n=pl(null,n,i,e,t);break e;case 11:n=cl(null,n,i,e,t);break e;case 14:n=hl(null,n,i,Ue(i.type,e),t);break e}throw Error(P(306,i,""))}return n;case 0:return i=n.type,o=n.pendingProps,o=n.elementType===i?o:Ue(i,o),ta(e,n,i,o,t);case 1:return i=n.type,o=n.pendingProps,o=n.elementType===i?o:Ue(i,o),pl(e,n,i,o,t);case 3:e:{if(Rd(n),e===null)throw Error(P(387));i=n.pendingProps,r=n.memoizedState,o=r.element,ld(e,n),fo(n,i,null,t);var a=n.memoizedState;if(i=a.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){o=wt(Error(P(423)),n),n=fl(e,n,i,t,o);break e}else if(i!==o){o=wt(Error(P(424)),n),n=fl(e,n,i,t,o);break e}else for(Pe=mn(n.stateNode.containerInfo.firstChild),Se=n,W=!0,De=null,t=ad(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(gt(),i===o){n=tn(e,n,t);break e}ce(e,n,i,t)}n=n.child}return n;case 5:return ud(n),e===null&&Jr(n),i=n.type,o=n.pendingProps,r=e!==null?e.memoizedProps:null,a=o.children,Zr(i,o)?a=null:r!==null&&Zr(i,r)&&(n.flags|=32),Od(e,n),ce(e,n,a,t),n.child;case 6:return e===null&&Jr(n),null;case 13:return Ud(e,n,t);case 4:return qa(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=mt(n,null,i,t):ce(e,n,i,t),n.child;case 11:return i=n.type,o=n.pendingProps,o=n.elementType===i?o:Ue(i,o),cl(e,n,i,o,t);case 7:return ce(e,n,n.pendingProps,t),n.child;case 8:return ce(e,n,n.pendingProps.children,t),n.child;case 12:return ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(i=n.type._context,o=n.pendingProps,r=n.memoizedProps,a=o.value,I(ho,i._currentValue),i._currentValue=a,r!==null)if(Fe(r.value,a)){if(r.children===o.children&&!we.current){n=tn(e,n,t);break e}}else for(r=n.child,r!==null&&(r.return=n);r!==null;){var s=r.dependencies;if(s!==null){a=r.child;for(var l=s.firstContext;l!==null;){if(l.context===i){if(r.tag===1){l=Qe(-1,t&-t),l.tag=2;var u=r.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}r.lanes|=t,l=r.alternate,l!==null&&(l.lanes|=t),Qr(r.return,t,n),s.lanes|=t;break}l=l.next}}else if(r.tag===10)a=r.type===n.type?null:r.child;else if(r.tag===18){if(a=r.return,a===null)throw Error(P(341));a.lanes|=t,s=a.alternate,s!==null&&(s.lanes|=t),Qr(a,t,n),a=r.sibling}else a=r.child;if(a!==null)a.return=r;else for(a=r;a!==null;){if(a===n){a=null;break}if(r=a.sibling,r!==null){r.return=a.return,a=r;break}a=a.return}r=a}ce(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,i=n.pendingProps.children,ct(n,t),o=je(o),i=i(o),n.flags|=1,ce(e,n,i,t),n.child;case 14:return i=n.type,o=Ue(i,n.pendingProps),o=Ue(i.type,o),hl(e,n,i,o,t);case 15:return Nd(e,n,n.type,n.pendingProps,t);case 17:return i=n.type,o=n.pendingProps,o=n.elementType===i?o:Ue(i,o),Gi(e,n),n.tag=1,ve(i)?(e=!0,lo(n)):e=!1,ct(n,t),Ed(n,i,o),ea(n,i,o,t),ia(null,n,i,!0,e,t);case 19:return Id(e,n,t);case 22:return Ld(e,n,t)}throw Error(P(156,n.tag))};function Xd(e,n){return Mu(e,n)}function _p(e,n,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,n,t,i){return new _p(e,n,t,i)}function us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bp(e){if(typeof e=="function")return us(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ca)return 11;if(e===Ea)return 14}return 2}function kn(e,n){var t=e.alternate;return t===null?(t=Ee(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ki(e,n,t,i,o,r){var a=2;if(i=e,typeof e=="function")us(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Kn:return In(t.children,o,r,n);case Ta:a=8,o|=8;break;case xr:return e=Ee(12,t,n,o|2),e.elementType=xr,e.lanes=r,e;case Ar:return e=Ee(13,t,n,o),e.elementType=Ar,e.lanes=r,e;case Mr:return e=Ee(19,t,n,o),e.elementType=Mr,e.lanes=r,e;case uu:return Uo(t,o,r,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case su:a=10;break e;case lu:a=9;break e;case Ca:a=11;break e;case Ea:a=14;break e;case an:a=16,i=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=Ee(a,t,n,o),n.elementType=e,n.type=i,n.lanes=r,n}function In(e,n,t,i){return e=Ee(7,e,i,n),e.lanes=t,e}function Uo(e,n,t,i){return e=Ee(22,e,i,n),e.elementType=uu,e.lanes=t,e.stateNode={isHidden:!1},e}function mr(e,n,t){return e=Ee(6,e,null,n),e.lanes=t,e}function yr(e,n,t){return n=Ee(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Yp(e,n,t,i,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jo(0),this.expirationTimes=Jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ds(e,n,t,i,o,r,a,s,l){return e=new Yp(e,n,t,s,l),n===1?(n=1,r===!0&&(n|=8)):n=0,r=Ee(3,null,null,n),e.current=r,r.stateNode=e,r.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ga(r),e}function Zp(e,n,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:i==null?null:""+i,children:e,containerInfo:n,implementation:t}}function ec(e){if(!e)return Sn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ve(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(ve(t))return ed(e,t,n)}return n}function nc(e,n,t,i,o,r,a,s,l){return e=ds(t,i,!0,e,o,r,a,s,l),e.context=ec(null),t=e.current,i=he(),o=vn(t),r=Qe(i,o),r.callback=n??null,yn(t,r,o),e.current.lanes=o,ci(e,o,i),ke(e,i),e}function Io(e,n,t,i){var o=n.current,r=he(),a=vn(o);return t=ec(t),n.context===null?n.context=t:n.pendingContext=t,n=Qe(r,a),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=yn(o,n,a),e!==null&&(We(e,o,a,r),Bi(e,o,a)),a}function Po(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xl(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function cs(e,n){xl(e,n),(e=e.alternate)&&xl(e,n)}function Gp(){return null}var tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function hs(e){this._internalRoot=e}Do.prototype.render=hs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));Io(e,n,null,null)};Do.prototype.unmount=hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Hn(function(){Io(null,e,null,null)}),n[en]=null}};function Do(e){this._internalRoot=e}Do.prototype.unstable_scheduleHydration=function(e){if(e){var n=Lu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ln.length&&n!==0&&n<ln[t].priority;t++);ln.splice(t,0,e),t===0&&Ru(e)}};function ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Al(){}function qp(e,n,t,i,o){if(o){if(typeof i=="function"){var r=i;i=function(){var u=Po(a);r.call(u)}}var a=nc(n,i,e,0,null,!1,!1,"",Al);return e._reactRootContainer=a,e[en]=a.current,Xt(e.nodeType===8?e.parentNode:e),Hn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof i=="function"){var s=i;i=function(){var u=Po(l);s.call(u)}}var l=ds(e,0,!1,null,null,!1,!1,"",Al);return e._reactRootContainer=l,e[en]=l.current,Xt(e.nodeType===8?e.parentNode:e),Hn(function(){Io(n,l,t,i)}),l}function Wo(e,n,t,i,o){var r=t._reactRootContainer;if(r){var a=r;if(typeof o=="function"){var s=o;o=function(){var l=Po(a);s.call(l)}}Io(n,a,e,o)}else a=qp(t,n,e,o,i);return Po(a)}ju=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ot(n.pendingLanes);t!==0&&(Na(n,t|1),ke(n,Z()),!(O&6)&&(vt=Z()+500,Mn()))}break;case 13:Hn(function(){var i=nn(e,1);if(i!==null){var o=he();We(i,e,1,o)}}),cs(e,1)}};La=function(e){if(e.tag===13){var n=nn(e,134217728);if(n!==null){var t=he();We(n,e,134217728,t)}cs(e,134217728)}};Nu=function(e){if(e.tag===13){var n=vn(e),t=nn(e,n);if(t!==null){var i=he();We(t,e,n,i)}cs(e,n)}};Lu=function(){return R};Ou=function(e,n){var t=R;try{return R=e,n()}finally{R=t}};Ur=function(e,n,t){switch(n){case"input":if(Er(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var i=t[n];if(i!==e&&i.form===e.form){var o=Vo(i);if(!o)throw Error(P(90));cu(i),Er(i,o)}}}break;case"textarea":pu(e,t);break;case"select":n=t.value,n!=null&&st(e,!!t.multiple,n,!1)}};ku=as;bu=Hn;var $p={usingClientEntryPoint:!1,Events:[pi,et,Vo,wu,vu,as]},jt={findFiberByHostInstance:Ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kp={bundleType:jt.bundleType,version:jt.version,rendererPackageName:jt.rendererPackageName,rendererConfig:jt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xu(e),e===null?null:e.stateNode},findFiberByHostInstance:jt.findFiberByHostInstance||Gp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ri.isDisabled&&Ri.supportsFiber)try{Mo=Ri.inject(Kp),Ye=Ri}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$p;Ae.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ps(n))throw Error(P(200));return Zp(e,n,null,t)};Ae.createRoot=function(e,n){if(!ps(e))throw Error(P(299));var t=!1,i="",o=tc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=ds(e,1,!1,null,null,t,!1,i,o),e[en]=n.current,Xt(e.nodeType===8?e.parentNode:e),new hs(n)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=xu(n),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return Hn(e)};Ae.hydrate=function(e,n,t){if(!zo(n))throw Error(P(200));return Wo(null,e,n,!0,t)};Ae.hydrateRoot=function(e,n,t){if(!ps(e))throw Error(P(405));var i=t!=null&&t.hydratedSources||null,o=!1,r="",a=tc;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=nc(n,null,e,1,t??null,o,!1,r,a),e[en]=n.current,Xt(e),i)for(e=0;e<i.length;e++)t=i[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Do(n)};Ae.render=function(e,n,t){if(!zo(n))throw Error(P(200));return Wo(null,e,n,!1,t)};Ae.unmountComponentAtNode=function(e){if(!zo(e))throw Error(P(40));return e._reactRootContainer?(Hn(function(){Wo(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};Ae.unstable_batchedUpdates=as;Ae.unstable_renderSubtreeIntoContainer=function(e,n,t,i){if(!zo(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Wo(e,n,t,!1,i)};Ae.version="18.3.1-next-f1338f8080-20240426";function ic(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ic)}catch(e){console.error(e)}}ic(),iu.exports=Ae;var Jp=iu.exports,Ml=Jp;Pr.createRoot=Ml.createRoot,Pr.hydrateRoot=Ml.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function li(){return li=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)({}).hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},li.apply(null,arguments)}var hn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(hn||(hn={}));const Tl="popstate";function Qp(e){e===void 0&&(e={});function n(i,o){let{pathname:r,search:a,hash:s}=i.location;return ga("",{pathname:r,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:So(o)}return ef(n,t,null,e)}function q(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function fs(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Xp(){return Math.random().toString(36).substr(2,8)}function Cl(e,n){return{usr:e.state,key:e.key,idx:n}}function ga(e,n,t,i){return t===void 0&&(t=null),li({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?St(n):n,{state:t,key:n&&n.key||i||Xp()})}function So(e){let{pathname:n="/",search:t="",hash:i=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function St(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let i=e.indexOf("?");i>=0&&(n.search=e.substr(i),e=e.substr(0,i)),e&&(n.pathname=e)}return n}function ef(e,n,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:r=!1}=i,a=o.history,s=hn.Pop,l=null,u=f();u==null&&(u=0,a.replaceState(li({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function c(){s=hn.Pop;let A=f(),p=A==null?null:A-u;u=A,l&&l({action:s,location:k.location,delta:p})}function m(A,p){s=hn.Push;let d=ga(k.location,A,p);u=f()+1;let g=Cl(d,u),v=k.createHref(d);try{a.pushState(g,"",v)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;o.location.assign(v)}r&&l&&l({action:s,location:k.location,delta:1})}function y(A,p){s=hn.Replace;let d=ga(k.location,A,p);u=f();let g=Cl(d,u),v=k.createHref(d);a.replaceState(g,"",v),r&&l&&l({action:s,location:k.location,delta:0})}function w(A){let p=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof A=="string"?A:So(A);return d=d.replace(/ $/,"%20"),q(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let k={get action(){return s},get location(){return e(o,a)},listen(A){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Tl,c),l=A,()=>{o.removeEventListener(Tl,c),l=null}},createHref(A){return n(o,A)},createURL:w,encodeLocation(A){let p=w(A);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:y,go(A){return a.go(A)}};return k}var El;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(El||(El={}));function nf(e,n,t){return t===void 0&&(t="/"),tf(e,n,t)}function tf(e,n,t,i){let o=typeof n=="string"?St(n):n,r=gs(o.pathname||"/",t);if(r==null)return null;let a=oc(e);of(a);let s=null,l=mf(r);for(let u=0;s==null&&u<a.length;++u)s=pf(a[u],l);return s}function oc(e,n,t,i){n===void 0&&(n=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(r,a,s)=>{let l={relativePath:s===void 0?r.path||"":s,caseSensitive:r.caseSensitive===!0,childrenIndex:a,route:r};l.relativePath.startsWith("/")&&(q(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=bn([i,l.relativePath]),f=t.concat(l);r.children&&r.children.length>0&&(q(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),oc(r.children,n,f,u)),!(r.path==null&&!r.index)&&n.push({path:u,score:cf(u,r.index),routesMeta:f})};return e.forEach((r,a)=>{var s;if(r.path===""||!((s=r.path)!=null&&s.includes("?")))o(r,a);else for(let l of rc(r.path))o(r,a,l)}),n}function rc(e){let n=e.split("/");if(n.length===0)return[];let[t,...i]=n,o=t.endsWith("?"),r=t.replace(/\?$/,"");if(i.length===0)return o?[r,""]:[r];let a=rc(i.join("/")),s=[];return s.push(...a.map(l=>l===""?r:[r,l].join("/"))),o&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function of(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:hf(n.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const rf=/^:[\w-]+$/,af=3,sf=2,lf=1,uf=10,df=-2,Vl=e=>e==="*";function cf(e,n){let t=e.split("/"),i=t.length;return t.some(Vl)&&(i+=df),n&&(i+=sf),t.filter(o=>!Vl(o)).reduce((o,r)=>o+(rf.test(r)?af:r===""?lf:uf),i)}function hf(e,n){return e.length===n.length&&e.slice(0,-1).every((i,o)=>i===n[o])?e[e.length-1]-n[n.length-1]:0}function pf(e,n,t){let{routesMeta:i}=e,o={},r="/",a=[];for(let s=0;s<i.length;++s){let l=i[s],u=s===i.length-1,f=r==="/"?n:n.slice(r.length)||"/",c=ff({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),m=l.route;if(!c)return null;Object.assign(o,c.params),a.push({params:o,pathname:bn([r,c.pathname]),pathnameBase:bf(bn([r,c.pathnameBase])),route:m}),c.pathnameBase!=="/"&&(r=bn([r,c.pathnameBase]))}return a}function ff(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,i]=gf(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let r=o[0],a=r.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:i.reduce((u,f,c)=>{let{paramName:m,isOptional:y}=f;if(m==="*"){let k=s[c]||"";a=r.slice(0,r.length-k.length).replace(/(.)\/+$/,"$1")}const w=s[c];return y&&!w?u[m]=void 0:u[m]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:r,pathnameBase:a,pattern:e}}function gf(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),fs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(i.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),i]}function mf(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return fs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function gs(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,i=e.charAt(t);return i&&i!=="/"?null:e.slice(t)||"/"}const yf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wf=e=>yf.test(e);function vf(e,n){n===void 0&&(n="/");let{pathname:t,search:i="",hash:o=""}=typeof e=="string"?St(e):e,r;if(t)if(wf(t))r=t;else{if(t.includes("//")){let a=t;t=lc(t),fs(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?r=jl(t.substring(1),"/"):r=jl(t,n)}else r=n;return{pathname:r,search:Pf(i),hash:Sf(o)}}function jl(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function wr(e,n,t,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kf(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function ac(e,n){let t=kf(e);return n?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function sc(e,n,t,i){i===void 0&&(i=!1);let o;typeof e=="string"?o=St(e):(o=li({},e),q(!o.pathname||!o.pathname.includes("?"),wr("?","pathname","search",o)),q(!o.pathname||!o.pathname.includes("#"),wr("#","pathname","hash",o)),q(!o.search||!o.search.includes("#"),wr("#","search","hash",o)));let r=e===""||o.pathname==="",a=r?"/":o.pathname,s;if(a==null)s=t;else{let c=n.length-1;if(!i&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),c-=1;o.pathname=m.join("/")}s=c>=0?n[c]:"/"}let l=vf(o,s),u=a&&a!=="/"&&a.endsWith("/"),f=(r||a===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const lc=e=>e.replace(/\/\/+/g,"/"),bn=e=>lc(e.join("/")),bf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Pf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Sf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function xf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const uc=["post","put","patch","delete"];new Set(uc);const Af=["get",...uc];new Set(Af);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ui(){return ui=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)({}).hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ui.apply(null,arguments)}const ms=b.createContext(null),Mf=b.createContext(null),Yn=b.createContext(null),Fo=b.createContext(null),Zn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),dc=b.createContext(null);function Tf(e,n){let{relative:t}=n===void 0?{}:n;gi()||q(!1);let{basename:i,navigator:o}=b.useContext(Yn),{hash:r,pathname:a,search:s}=hc(e,{relative:t}),l=a;return i!=="/"&&(l=a==="/"?i:bn([i,a])),o.createHref({pathname:l,search:s,hash:r})}function gi(){return b.useContext(Fo)!=null}function Ho(){return gi()||q(!1),b.useContext(Fo).location}function cc(e){b.useContext(Yn).static||b.useLayoutEffect(e)}function _o(){let{isDataRoute:e}=b.useContext(Zn);return e?Wf():Cf()}function Cf(){gi()||q(!1);let e=b.useContext(ms),{basename:n,future:t,navigator:i}=b.useContext(Yn),{matches:o}=b.useContext(Zn),{pathname:r}=Ho(),a=JSON.stringify(ac(o,t.v7_relativeSplatPath)),s=b.useRef(!1);return cc(()=>{s.current=!0}),b.useCallback(function(u,f){if(f===void 0&&(f={}),!s.current)return;if(typeof u=="number"){i.go(u);return}let c=sc(u,JSON.parse(a),r,f.relative==="path");e==null&&n!=="/"&&(c.pathname=c.pathname==="/"?n:bn([n,c.pathname])),(f.replace?i.replace:i.push)(c,f.state,f)},[n,i,a,r,e])}function hc(e,n){let{relative:t}=n===void 0?{}:n,{future:i}=b.useContext(Yn),{matches:o}=b.useContext(Zn),{pathname:r}=Ho(),a=JSON.stringify(ac(o,i.v7_relativeSplatPath));return b.useMemo(()=>sc(e,JSON.parse(a),r,t==="path"),[e,a,r,t])}function Ef(e,n){return Vf(e,n)}function Vf(e,n,t,i){gi()||q(!1);let{navigator:o}=b.useContext(Yn),{matches:r}=b.useContext(Zn),a=r[r.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Ho(),f;if(n){var c;let A=typeof n=="string"?St(n):n;l==="/"||(c=A.pathname)!=null&&c.startsWith(l)||q(!1),f=A}else f=u;let m=f.pathname||"/",y=m;if(l!=="/"){let A=l.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(A.length).join("/")}let w=nf(e,{pathname:y}),k=Rf(w&&w.map(A=>Object.assign({},A,{params:Object.assign({},s,A.params),pathname:bn([l,o.encodeLocation?o.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?l:bn([l,o.encodeLocation?o.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),r,t,i);return n&&k?b.createElement(Fo.Provider,{value:{location:ui({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:hn.Pop}},k):k}function jf(){let e=zf(),n=xf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},n),t?b.createElement("pre",{style:o},t):null,null)}const Nf=b.createElement(jf,null);class Lf extends b.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?b.createElement(Zn.Provider,{value:this.props.routeContext},b.createElement(dc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Of(e){let{routeContext:n,match:t,children:i}=e,o=b.useContext(ms);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(Zn.Provider,{value:n},i)}function Rf(e,n,t,i){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),i===void 0&&(i=null),e==null){var r;if(!t)return null;if(t.errors)e=t.matches;else if((r=i)!=null&&r.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,s=(o=t)==null?void 0:o.errors;if(s!=null){let f=a.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);f>=0||q(!1),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,u=-1;if(t&&i&&i.v7_partialHydration)for(let f=0;f<a.length;f++){let c=a[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.id){let{loaderData:m,errors:y}=t,w=c.route.loader&&m[c.route.id]===void 0&&(!y||y[c.route.id]===void 0);if(c.route.lazy||w){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((f,c,m)=>{let y,w=!1,k=null,A=null;t&&(y=s&&c.route.id?s[c.route.id]:void 0,k=c.route.errorElement||Nf,l&&(u<0&&m===0?(Ff("route-fallback"),w=!0,A=null):u===m&&(w=!0,A=c.route.hydrateFallbackElement||null)));let p=n.concat(a.slice(0,m+1)),d=()=>{let g;return y?g=k:w?g=A:c.route.Component?g=b.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=f,b.createElement(Of,{match:c,routeContext:{outlet:f,matches:p,isDataRoute:t!=null},children:g})};return t&&(c.route.ErrorBoundary||c.route.errorElement||m===0)?b.createElement(Lf,{location:t.location,revalidation:t.revalidation,component:k,error:y,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var pc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(pc||{}),fc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(fc||{});function Uf(e){let n=b.useContext(ms);return n||q(!1),n}function If(e){let n=b.useContext(Mf);return n||q(!1),n}function Df(e){let n=b.useContext(Zn);return n||q(!1),n}function gc(e){let n=Df(),t=n.matches[n.matches.length-1];return t.route.id||q(!1),t.route.id}function zf(){var e;let n=b.useContext(dc),t=If(),i=gc();return n!==void 0?n:(e=t.errors)==null?void 0:e[i]}function Wf(){let{router:e}=Uf(pc.UseNavigateStable),n=gc(fc.UseNavigateStable),t=b.useRef(!1);return cc(()=>{t.current=!0}),b.useCallback(function(o,r){r===void 0&&(r={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ui({fromRouteId:n},r)))},[e,n])}const Nl={};function Ff(e,n,t){Nl[e]||(Nl[e]=!0)}function Hf(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function de(e){q(!1)}function _f(e){let{basename:n="/",children:t=null,location:i,navigationType:o=hn.Pop,navigator:r,static:a=!1,future:s}=e;gi()&&q(!1);let l=n.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:r,static:a,future:ui({v7_relativeSplatPath:!1},s)}),[l,s,r,a]);typeof i=="string"&&(i=St(i));let{pathname:f="/",search:c="",hash:m="",state:y=null,key:w="default"}=i,k=b.useMemo(()=>{let A=gs(f,l);return A==null?null:{location:{pathname:A,search:c,hash:m,state:y,key:w},navigationType:o}},[l,f,c,m,y,w,o]);return k==null?null:b.createElement(Yn.Provider,{value:u},b.createElement(Fo.Provider,{children:t,value:k}))}function Bf(e){let{children:n,location:t}=e;return Ef(ma(n),t)}new Promise(()=>{});function ma(e,n){n===void 0&&(n=[]);let t=[];return b.Children.forEach(e,(i,o)=>{if(!b.isValidElement(i))return;let r=[...n,o];if(i.type===b.Fragment){t.push.apply(t,ma(i.props.children,r));return}i.type!==de&&q(!1),!i.props.index||!i.props.children||q(!1);let a={id:i.props.id||r.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=ma(i.props.children,r)),t.push(a)}),t}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)({}).hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ya.apply(null,arguments)}function Yf(e,n){if(e==null)return{};var t={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(n.indexOf(i)!==-1)continue;t[i]=e[i]}return t}function Zf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Gf(e,n){return e.button===0&&(!n||n==="_self")&&!Zf(e)}const qf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],$f="6";try{window.__reactRouterVersion=$f}catch{}const Kf="startTransition",Ll=Wc[Kf];function Jf(e){let{basename:n,children:t,future:i,window:o}=e,r=b.useRef();r.current==null&&(r.current=Qp({window:o,v5Compat:!0}));let a=r.current,[s,l]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=i||{},f=b.useCallback(c=>{u&&Ll?Ll(()=>l(c)):l(c)},[l,u]);return b.useLayoutEffect(()=>a.listen(f),[a,f]),b.useEffect(()=>Hf(i),[i]),b.createElement(_f,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:a,future:i})}const Qf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ji=b.forwardRef(function(n,t){let{onClick:i,relative:o,reloadDocument:r,replace:a,state:s,target:l,to:u,preventScrollReset:f,viewTransition:c}=n,m=Yf(n,qf),{basename:y}=b.useContext(Yn),w,k=!1;if(typeof u=="string"&&Xf.test(u)&&(w=u,Qf))try{let g=new URL(window.location.href),v=u.startsWith("//")?new URL(g.protocol+u):new URL(u),x=gs(v.pathname,y);v.origin===g.origin&&x!=null?u=x+v.search+v.hash:k=!0}catch{}let A=Tf(u,{relative:o}),p=eg(u,{replace:a,state:s,target:l,preventScrollReset:f,relative:o,viewTransition:c});function d(g){i&&i(g),g.defaultPrevented||p(g)}return b.createElement("a",ya({},m,{href:w||A,onClick:k||r?i:d,ref:t,target:l}))});var Ol;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ol||(Ol={}));var Rl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rl||(Rl={}));function eg(e,n){let{target:t,replace:i,state:o,preventScrollReset:r,relative:a,viewTransition:s}=n===void 0?{}:n,l=_o(),u=Ho(),f=hc(e,{relative:a});return b.useCallback(c=>{if(Gf(c,t)){c.preventDefault();let m=i!==void 0?i:So(u)===So(f);l(e,{replace:m,state:o,preventScrollReset:r,relative:a,viewTransition:s})}},[u,l,f,i,o,t,e,r,a,s])}function ng(){const e=_o();return h.jsx("div",{className:"welcome-page",children:h.jsxs("div",{className:"welcome-content",children:[h.jsx("div",{className:"welcome-icon-box",children:h.jsx("img",{src:"/welcomepageimage.png",alt:"VolunteerHigh",className:"welcome-image"})}),h.jsx("h1",{className:"welcome-title",children:"Welcome to VolunteerHigh"}),h.jsx("button",{className:"welcome-next-btn",onClick:()=>e("/home"),children:"Get Started"})]})})}const tg="/assets/VolunteerHighLogo-BnGChIAc.png";function vr(e,n,t=1500,i=!1){const[o,r]=b.useState(i?e:0),a=b.useRef(!1),s=b.useRef(null);return b.useEffect(()=>{if(i){r(e);return}if(!n||a.current)return;a.current=!0;const l=performance.now(),u=f=>{const c=f-l,m=Math.min(c/t,1);r(Math.floor(m*e)),m<1&&(s.current=requestAnimationFrame(u))};return s.current=requestAnimationFrame(u),()=>{s.current&&cancelAnimationFrame(s.current)}},[n,i]),o}function Ul(e=.5){const n=b.useRef(null),[t,i]=b.useState(!1);return b.useEffect(()=>{const o=n.current;if(!o)return;const r=new IntersectionObserver(([a])=>{a.isIntersecting&&a.intersectionRatio>=e&&i(!0)},{threshold:e});return r.observe(o),()=>r.disconnect()},[e]),[n,t]}function Il(e=.35){const n=b.useRef(null),[t,i]=b.useState(!1);return b.useEffect(()=>{const o=n.current;if(!o)return;const r=new IntersectionObserver(([a])=>{i(a.isIntersecting&&a.intersectionRatio>=e)},{threshold:e});return r.observe(o),()=>r.disconnect()},[e]),[n,t]}const ys="volunteerhigh_home_animations_played";function ig(){return sessionStorage.getItem(ys)!=="true"}function og(){sessionStorage.setItem(ys,"true")}function rg(){sessionStorage.removeItem(ys)}const ag=[{label:"HandsOn Greater Phoenix",to:"/org/hands-on-greater-phoenix"},{label:"Arizona State Parks and Trails",to:"/org/arizona-state-parks"},{label:"City of Flagstaff",to:"/org/city-of-flagstaff"},{label:"Junior Achievement of Arizona",to:"/org/junior-achievement"},{label:"Feed My Starving Children",to:"/org/feed-my-starving-children"},{label:"Arizona Sustainability Alliance",to:"/org/az-sustainability-alliance"},{label:"Bureau of Land Management Arizona",to:"/org/bureau-of-land-management"},{label:"Lost Our Home Pet Rescue",to:"/org/lost-our-homes-pet-rescue"}];function mi({current:e}){const[n,t]=b.useState(!1),i=b.useRef(null),o=[{key:"quest",label:"Quest AI",to:"/quest"},{key:"maps",label:"Maps",to:"/maps"},{key:"about",label:"About",to:"/about"},{key:"faq",label:"FAQ's",to:"/faq"}];function r(){i.current&&clearTimeout(i.current),t(!0)}function a(){i.current=setTimeout(()=>t(!1),150)}return h.jsxs("div",{className:"navbar",children:[h.jsx(Ji,{to:"/home",className:"navbar-logo-link",onClick:rg,children:h.jsx("img",{src:tg,alt:"VolunteerHigh",className:"navbar-logo"})}),h.jsx("div",{className:"navbar-spacer"}),o.map(s=>e===s.key?h.jsx("span",{className:"navbar-current",children:s.label},s.key):h.jsx(Ji,{to:s.to,className:"navbar-link",children:s.label},s.key)),h.jsxs("div",{className:"navbar-org-dropdown",onMouseEnter:r,onMouseLeave:a,children:[h.jsxs("button",{className:`navbar-link navbar-org-trigger${e==="organizations"?" navbar-current":""}`,onClick:()=>t(s=>!s),"aria-expanded":n,children:["Organizations ",h.jsx("span",{className:"navbar-org-caret",children:"▾"})]}),n&&h.jsx("div",{className:"navbar-org-menu navbar-org-menu-right",children:ag.map(s=>h.jsx(Ji,{to:s.to,className:"navbar-org-menu-item",onClick:()=>t(!1),children:s.label},s.to))})]})]})}const sg="/assets/Image-DgsHldMx.png",lg="/assets/HandsOnGreaterPhoenixLogo-t_QkNJAt.jpg",ug="/assets/AZStateParksandTrailsLogo-bjg6v4ly.jpg",dg="/assets/CityOfFlagstaffLogo-DLqi0ajI.jpg",cg="/assets/JuniorAchievementOfArizonaLogo-phlbKpa8.jpg",hg="/assets/FMSCLogo-BcUhIjKK.jpg",pg="/assets/AZSustainabilityAllianceLogo-Gt_x0TzN.jpg",fg="/assets/BureauOfLandManagement-BaEZUK12.jpg",gg="/assets/LostOurHomesPetRescueImageLogo-BENexxV-.jpg",mg=[{to:"/org/hands-on-greater-phoenix",img:lg,name:"HandsOn Greater Phoenix",circular:!0},{to:"/org/arizona-state-parks",img:ug,name:"Arizona State Parks and Trails",circular:!1},{to:"/org/city-of-flagstaff",img:dg,name:"City of Flagstaff",circular:!0},{to:"/org/junior-achievement",img:cg,name:"Junior Achievement of Arizona",circular:!0}],yg=[{to:"/org/feed-my-starving-children",img:hg,name:"Feed My Starving Children",circular:!1},{to:"/org/az-sustainability-alliance",img:pg,name:"Arizona Sustainability Alliance",circular:!0},{to:"/org/bureau-of-land-management",img:fg,name:"Bureau of Land Management Arizona",circular:!1},{to:"/org/lost-our-homes-pet-rescue",img:gg,name:"Lost Our Home Pet Rescue",circular:!1}];function Dl({to:e,img:n,name:t,circular:i,isVisible:o,index:r,animationsEnabled:a}){const s=!a||o;return h.jsxs(Ji,{to:e,className:`partner-box${s?" visible":""}${a?"":" no-anim"}`,style:a?{transitionDelay:`${r*.28}s`}:void 0,children:[h.jsx("img",{src:n,alt:t,className:i?"circular":""}),h.jsx("span",{className:"org-name",children:t})]})}function wg(){const e=_o(),[n,t]=Ul(.3),[i,o]=Ul(.6),[r,a]=Il(.35),[s,l]=Il(.35),[u]=b.useState(()=>ig());b.useEffect(()=>{u&&og()},[u]);const f=vr(90,t,1500,!u),c=vr(100,t,1500,!u),m=vr(92,t,1500,!u);return h.jsxs("div",{className:"main-screen",children:[h.jsx(mi,{current:null}),h.jsxs("div",{className:"main-scroll",children:[h.jsx("div",{className:"hero-section",style:{backgroundImage:`url(${sg})`},children:h.jsxs("div",{className:"hero-text",children:[h.jsx("p",{className:"hero-brand",children:"VolunteerHigh"}),h.jsx("h1",{className:"hero-line1",children:"Discover High School"}),h.jsx("h1",{className:"hero-line2 blue",children:"Volunteer Opportunities"}),h.jsx("p",{className:"hero-sub",children:`Find community service in Arizona.
Together, we can make a lasting
impact and build a better tomorrow
for those in need`})]})}),h.jsxs("div",{className:"project-section",children:[h.jsx("h2",{className:"project-title",children:"The VolunteerHigh Project"}),h.jsx("p",{className:"project-sub",children:"A platform that empowers students to find, explore, and engage in"}),h.jsx("p",{className:"project-sub second",children:"meaningful local volunteer opportunities while creating lasting community impact."}),h.jsxs("div",{className:"stats-row",ref:n,children:[h.jsxs("div",{className:"stat-block",children:[h.jsx("div",{className:"stat-rule",children:"――――――"}),h.jsxs("p",{className:"stat-number",children:[f,"%+"]}),h.jsx("p",{className:"stat-caption",children:`of students participated in volunteer
work before entering
college`})]}),h.jsxs("div",{className:"stat-block",children:[h.jsx("div",{className:"stat-rule",children:"――――――"}),h.jsxs("p",{className:"stat-number",children:[c,"+"]}),h.jsx("p",{className:"stat-caption",children:`volunteering hours by the
average high schooler before
graduating.`})]}),h.jsxs("div",{className:"stat-block",children:[h.jsx("div",{className:"stat-rule",children:"――――――"}),h.jsxs("p",{className:"stat-number",children:[m,"%+"]}),h.jsx("p",{className:"stat-caption",children:`of admissions officers
value 4-year volunteering`})]})]})]}),h.jsxs("div",{className:"partners-divider-row",ref:i,children:[h.jsx("div",{className:"rule"}),h.jsx("span",{className:"label",children:"Our Partner Organizations"}),h.jsx("div",{className:"rule"})]}),h.jsxs("div",{className:"partners-grid-wrap",children:[h.jsx("div",{className:"partners-row",children:mg.map((y,w)=>h.jsx(Dl,{...y,isVisible:o,index:w,animationsEnabled:u},y.to))}),h.jsx("div",{className:"partners-row",children:yg.map((y,w)=>h.jsx(Dl,{...y,isVisible:o,index:w+4,animationsEnabled:u},y.to))})]}),h.jsx("div",{className:"quest-section",children:h.jsxs("div",{className:`scroll-transition${a?" identity":""}`,ref:r,children:[h.jsx("h2",{className:"quest-heading",children:"Quest - Our Volunteering Recommendation Engine"}),h.jsx("p",{className:"quest-body-text",children:`Quest in an intelligent Volunteer Recommendation engine helps you to find the best volunteering opportunities tailored to your
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
`+n),kr.push({role:"user",parts:[{text:e}]});const t=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${vg}:generateContent?key=${mc}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system_instruction:{parts:[{text:br}]},contents:kr,generationConfig:{maxOutputTokens:1e3,temperature:.7}})});if(!t.ok){const c=await t.json().catch(()=>({}));throw new Error(((r=c==null?void 0:c.error)==null?void 0:r.message)||`API error ${t.status}`)}const o=((f=(u=(l=(s=(a=(await t.json()).candidates)==null?void 0:a[0])==null?void 0:s.content)==null?void 0:l.parts)==null?void 0:u[0])==null?void 0:f.text)??"";return kr.push({role:"model",parts:[{text:o}]}),o}const Pg={title:"HandsOn Greater Phoenix",note:null,opportunities:[{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

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

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fGJXDMA4",date:"2026-11-12"},{name:"Adaptive Pickleball- Coach/Unified Partner (Referral)",description:`Dates: Thursdays, November 5, 2026 - January 28, 2027 + Tournament on Saturday, January 30, 2027

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

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009iInHFMA0",date:"2026-11-13"},{name:"Evening Meal Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-13 | 3:00 PM - 6:00 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009iJcTRMA0",date:"2026-11-13"},{name:"Chef&#39;s Night Off at HomeBase Surprise",description:`Roll up your sleeves and help chop, slice, and dice with love as you prepare and serve dinner for homeless youth and young adults (ages 18-26) at HomeBase Youth Services in Surprise. You can also help pack lunches that will be distributed throughout the week to homeless youth and young adults. Allow the busy chef to have a nice evening off.

Volunteers must wear closed-toe shoes, and long hair should be pulled back.

The minimum age for this project is 11 with a parent/guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-13 | 3:00 PM - 5:00 PM

Location: Surprise, AZ, 85378

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000093DennMAC",date:"2026-11-13"},{name:"Nature Nurturers at Escalante Community Garden",description:`The Escalante Community Garden is a garden that follows a communal model with healthy growing practices. A portion of the garden’s harvest is given to Tempe Community Action Agency's Food Pantry to supplement emergency food boxes. The garden features a children's area, as well as a desert and herb garden.

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

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008mZ6cIMAS",date:"2026-11-14"},{name:"Stuff-The-Sleigh: Help Collect Donations for Operation Santa! (Referral)",description:`Help us kick off the holiday season by volunteering at SARRC's (Southwest Autism Research & Resource Center) Operation Santa Claus Toy Drive!

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

Volunteers still needed: 7`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008pOAETMA4",date:"2026-11-14"},{name:"Afternoon Sort and Pack at St. Mary&#39;s Food Bank - Phoenix",description:`Bring your helping hands to sort, pack, and distribute food that will go to other nonprofits and families in crisis at St. Mary's Food Bank Alliance. You will have a blast meeting new people while working the assembly line!

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

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008WyK29MAF",date:"2026-11-14"},{name:"Game Room Nights (Referral)",description:`Game Room Nights

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

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTzyMMAS",date:"2026-11-15"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards Desert West",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the two drinking stations at Desert West Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Desert West Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-15 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85035

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tUkM8MAK",date:"2026-11-15"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Lindo Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Lindo Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-15 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85041

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTwUQMA0",date:"2026-11-15"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

There will be gloves provided. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved shirts (no tank tops or sleeveless shirts).

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 9 with a parent or guardian. All volunteers under the age of 14 must be accompanied by a parent/guardian. Volunteers ages 14 through 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in at the Main Campus, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-11-16 | 6:30 AM - 9:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3x4MAC",date:"2026-11-16"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Grant Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

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

Volunteers still needed: 100`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008xqimzMAA",date:"2026-11-21"},{name:"PACC911 Adopt-A-Thon Franciscan Renewal Center (Referral)",description:`We are looking for volunteers to assist pet rescues and shelters with:

	
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

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009upWaTMAU",date:"2026-11-21"},{name:"Sort and Pack at St. Mary&#39;s Food Bank - Phoenix",description:`Bring your helping hands to sort, pack, and distribute food that will go to other nonprofits and families in crisis at St. Mary's Food Bank Alliance. You will have a blast meeting new people while working the conveyer belt!

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

Volunteers still needed: 6`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008WwhZNMAZ",date:"2026-11-21"},{name:"November 2026 Monthly Park Cleanup and Stinknet Removal–LoPiano Park East (Ref)",description:`Join Keep Tempe Beautiful on Saturday, November 21st to clean up LoPiano Park East and remove invasive stinknet.

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

Volunteers still needed: 20`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00006oUtMSMA0",date:"2026-11-21"},{name:"Furry Friends at Forever Loved Pet Sanctuary",description:`Forever Loved's mission is to help overlooked senior dogs in Arizona find their forever homes. Help care for these furry friends while they wait for adoption!

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

Volunteers still needed: 6`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009TUPgtMAH",date:"2026-11-21"},{name:"2026 Family Volunteer Day at HandsOn Greater Phoenix",description:`Saturday, November 21st, is National Family Volunteer Day! Bring the family to this fun and engaging volunteer event at the HandsOn Greater Phoenix office in Mesa!

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

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009TZHqHMAX",date:"2026-11-21"},{name:"Medical Sort and Pack at Project C.U.R.E.",description:`Bring hope and health to the world with Project C.U.R.E., a national faith-based organization! Join us as we sort and pack desperately needed medical supplies that are shipped to hospitals, clinics, and orphanages in over 100 poverty stricken countries worldwide! Volunteers will meet new people and learn a lot about medical supplies and the urgent needs of them in under-resourced countries around the world.

The minimum age for this volunteer opportunity is 14 with a parent or guardian. All volunteers under the age of 18 must be accompanied by a parent/guardian.

Volunteers must create an account with Project C.U.R.E. and sign in through their system at the warehouse. To make this process faster, please register here to set up your account before the project date.

Note: The building is a warehouse, so please wear close-toed shoes, appropriate clothing and bring water. You may be packing in either the warehouse or the sorting center. Please be prepared to do some lifting (up to 30 pounds). 

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-21 | 9:00 AM - 12:00 PM

Location: Phoenix, AZ, 85009

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008l05qTMAQ",date:"2026-11-21"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards Roosevelt",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at the Roosevelt Mini Park. Simply check the water temperature & water flow and wipe down the unit!

Do you walk by the mini park every morning? Do you ride your bike down Roosevelt Row once a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleaning. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-22 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTzyNMAS",date:"2026-11-22"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards Desert West",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the two drinking stations at Desert West Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Desert West Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-22 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85035

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tUkM9MAK",date:"2026-11-22"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Lindo Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Lindo Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-22 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85041

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTwURMA0",date:"2026-11-22"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

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

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009cD3xAMAS",date:"2026-11-24"},{name:"Nutrition Program Volunteer (Referral)",description:`Advance Community's Nutrition Program offers 2 separate volunteer opportunities. Our first program, Stove to Table delivers healthy, made from scratch meals for seniors living in subsidized housing in Maricopa County. This population experiences disproportionately high levels of food insecurity and chronic illness and our hot, fresh meals go a long way to help ease this burden and improve their quality of life. 

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

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009VgQXYMA3",date:"2026-11-26"},{name:"Adaptive Pickleball- Coach/Unified Partner (Referral)",description:`Dates: Thursdays, November 5, 2026 - January 28, 2027 + Tournament on Saturday, January 30, 2027

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

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009iCaudMAC",date:"2026-11-27"},{name:"Evening Meal Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

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

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008pJ9irMAC",date:"2026-11-28"},{name:"Thrift Shop Assistants at Hope&#39;s Closet",description:`Hope's Closet is New Life Center's social enterprise thrift store, open to both the organization's emergency shelter residents and the local community. Join us at Hope's Closet to collect and sort through clothing donations, move items to the sales floor, and organize clothing racks.

New Life Center's mission is “Helping to eliminate domestic and sexual violence through support services, education, and expertise.” New Life Center provides services to over 1,100 adults and children each year. In addition to a safe place to stay, they provide advocacy, employment services, legal assistance, comprehensive children's services, transportation and outreach services to individual survivors and their families who have experienced domestic violence, sexual abuse, or human trafficking. All proceeds from Hope's Closet go back to our participating families and help to fund shelter operations. 

The minimum age for this volunteer opportunity is 14. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-11-28 | 10:00 AM - 12:00 PM

Location: Goodyear, AZ, 85338

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008lZ4j8MAC",date:"2026-11-28"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards Roosevelt",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at the Roosevelt Mini Park. Simply check the water temperature & water flow and wipe down the unit!

Do you walk by the mini park every morning? Do you ride your bike down Roosevelt Row once a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleaning. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-29 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTzyOMAS",date:"2026-11-29"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards Desert West",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the two drinking stations at Desert West Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Desert West Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-29 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85035

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tUkMAMA0",date:"2026-11-29"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Lindo Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Lindo Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-11-29 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85041

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTwUSMA0",date:"2026-11-29"},{name:"Morning Kitchen Crew at St. Vincent de Paul",description:`We need your help to prepare and clean up as we create over 4,000 meals in the St. Vincent de Paul kitchen! No kitchen experience necessary.

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

Volunteers still needed: 20`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009bbfrxMAA",date:"2026-12-05"},{name:"Food Box Distribution with Creighton Community Foundation",description:`Creighton Community Foundation (CCF) works in east-central Phoenix to cultivate a sense of school-centered identity, foster neighborhood interaction, increase social capacity, and improve adult supportive relationships within vibrant communities. Our ultimate goal is to improve youth life outcomes and create multi-generational in-community transformation.

Join us at Excelencia School to distribute food boxes to families through a mobile delivery line. Spend your morning making sure the Phoenix community has plenty of food for the week ahead!

There is no minimum age for this opportunity if youth are attending with a parent or guardian. Volunteers under 16 must attend with a parent/guardian. Volunteers aged 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-12-05 | 8:00 AM - 12:00 PM

Location: Phoenix, AZ, 85006

Volunteers still needed: 3`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008mX3YIMA0",date:"2026-12-05"},{name:"Garden Volunteers with St. Vincent de Paul (Main Campus)",description:`St. Vincent de Paul's three urban farms produce nutritionally dense food for those who do not have access to proper vitamins and nutrients. Annually, they grow 27,000 pounds of produce, which goes directly to SVdP's kitchens to be prepared for individuals and families experiencing homelessness and food insecurity, or delivered directly to families’ doors.

Spend your morning fertilizing soil, composting, planting, and harvesting the produce that helps feed the local community!

Please wear Closed-toe shoes, and clothes that can get dirty. Bring SPF and a reusable water bottle. There are shade structures, but be prepared to be in the sun.

Please Note: Volunteers serving court-ordered hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 8 with a parent or guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-12-05 | 8:00 AM - 11:00 AM

Location: Phoenix, AZ, 85003

Volunteers still needed: 19`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008qwYk6MAE",date:"2026-12-05"},{name:"Furry Friends at Forever Loved Pet Sanctuary",description:`Forever Loved's mission is to help overlooked senior dogs in Arizona find their forever homes. Help care for these furry friends while they wait for adoption!

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

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTzyPMAS",date:"2026-12-06"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards Desert West",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the two drinking stations at Desert West Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Desert West Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-12-06 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85035

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tUkMBMA0",date:"2026-12-06"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Lindo Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Lindo Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-12-06 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85041

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTwUTMA0",date:"2026-12-06"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Grant Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

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

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009iBIAPMA4",date:"2026-12-11"},{name:"Evening Meal Service at St. Vincent de Paul- Phoenix Dining Room",description:`Those who are experiencing homelessness and food insecurity do not know where or when their next meal is coming. SVdP’s dining rooms around the Valley are thriving places where these individuals can come not only for a hot, nutritious meal and a smile, but to find supportive wrap-around services such as shelter, clothing, medical attention, and housing services. Volunteers create an experience many of us take for granted, an opportunity to feel welcome and part of a family.

Our dining room volunteers create a warm and welcoming environment and assist with tasks that include, but are not limited to dining room set up, guest greeting, serving, bussing tables, waiting on tables, washing dishes, dining room clean-up, and assisting with the distribution of clothing and supplies to our dining room guests.

Please Note: Volunteers serving court-ordered volunteer hours must register directly through St. Vincent de Paul and attend a virtual orientation before being scheduled to volunteer.

The minimum age for this volunteer opportunity is 16. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

This project is led by the staff at St. Vincent de Paul. When you sign in, please mark that you are volunteering with HandsOn Greater Phoenix.

2026-12-11 | 3:00 PM - 6:00 PM

Location: Phoenix, AZ, 85007

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009iHNf0MAG",date:"2026-12-11"},{name:"Chef&#39;s Night Off at HomeBase Surprise",description:`Roll up your sleeves and help chop, slice, and dice with love as you prepare and serve dinner for homeless youth and young adults (ages 18-26) at HomeBase Youth Services in Surprise. You can also help pack lunches that will be distributed throughout the week to homeless youth and young adults. Allow the busy chef to have a nice evening off.

Volunteers must wear closed-toe shoes, and long hair should be pulled back.

The minimum age for this project is 11 with a parent/guardian. All Volunteers under the age of 16 must be accompanied by a parent/guardian. Volunteers ages 16 and 17 who aren't attending a project with a parent/guardian MUST bring a Youth Waiver signed by a parent or guardian, to each project.

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-12-11 | 3:00 PM - 5:00 PM

Location: Surprise, AZ, 85378

Volunteers still needed: 0`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000093Co2lMAC",date:"2026-12-11"},{name:"State Softball Competition in Peoria-MULTIPLE SHIFTS  (Referral)",description:`Join Special Olympics Arizona for State Softball in Peoria!

 

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

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008mYr3nMAC",date:"2026-12-12"},{name:"Community Crafters at HandsOn Greater Phoenix",description:`Bring the family to this fun and engaging volunteer event at the HandsOn Greater Phoenix office in Mesa! Each month, volunteers will be doing crafty projects to benefit our nonprofit partners. Whether it's creating fleece capes for foster kids, making no-sew blankets for Veterans, or decorating canvas bags/bookmarks to supplement our kitted projects for youth, we'll have an activity for you to get creative for a cause!

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

Volunteers still needed: 11`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008WxXpTMAV",date:"2026-12-12"},{name:"From the Ground Up: Volunteer Day at the Ranch (Referral)",description:`Join us for a meaningful day of giving back at Wildcat Ranch Phoenix! This in-person volunteer event is a wonderful opportunity to roll up your sleeves, enjoy the outdoors, and make a direct impact on the ranch and the horses who call it home.

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

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTzyQMAS",date:"2026-12-13"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards Desert West",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the two drinking stations at Desert West Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Desert West Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-12-13 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85035

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tUkMCMA0",date:"2026-12-13"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Lindo Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Lindo Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-12-13 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85041

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTwUUMA0",date:"2026-12-13"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Grant Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

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

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009iHTkVMAW",date:"2026-12-18"},{name:"December 2026 Monthly Park Cleanup and Stinknet Removal –Hayden Butte (Referral)",description:`Join Keep Tempe Beautiful on Saturday, December 19th to clean up Hayden Butte (A Mountain) and remove invasive stinknet.

We will be in the parking lot next to Mill and 3rd Street (281 S Mill Ave, Tempe, AZ 85281).

Here is more information on what we will be working on:

o Trash and litter removal

o Stinknet removal

If you need additional support in identifying stinknet, we recommend the iNaturalist app (press + to create a new observation, take a photo, then review suggestions). If you would like to support larger efforts to stop the spread, please report your findings on Stinknet.org (push the red button, input the details, then submit). Bring water, sunscreen, hat and gloves. Your time slot will start and end on time; we won’t ask you to stay longer. There is no minimum age to participate in this event and we will have staff on-site to sign any documents for community service requirements. 1 Hour Shifts – 3 Shifts in Total: 8am-9am, 9am-10am, 10am-11am. You are welcome to sign up for one session or multiple.

We are also looking for Day Chairs to assist in managing the event! Day Chairs are the lifeblood of our operations and are the first step to greater leadership opportunities within Keep Tempe Beautiful. Some of the things Day Chairs are tasked with are event setup, teardown, sign-in, sign-out, event raffles (if applicable), parking lot attendance, diverting trash from recyclables, photo/video taker, and more (these aren’t things that you choose; rather, everyone does a little of each depending where the needs are during the event)!

Click express interest below to be redirected to our sign up page!

2026-12-19 | 8:00 AM - 11:00 AM

Location: Tempe, AZ, 85281

Volunteers still needed: 20`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00006oU7ZZMA0",date:"2026-12-19"},{name:"Sort and Pack at St. Mary&#39;s Food Bank - Phoenix",description:`Bring your helping hands to sort, pack, and distribute food that will go to other nonprofits and families in crisis at St. Mary's Food Bank Alliance. You will have a blast meeting new people while working the conveyer belt!

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

2026-12-19 | 8:00 AM - 10:00 AM

Location: Phoenix, AZ, 85009

Volunteers still needed: 7`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008WxWAEMA3",date:"2026-12-19"},{name:"The People&#39;s Garden (Referral)",description:`Volunteers are one of the most powerful ways Local First Arizona mobilizes communities across the state. By supporting our food access and community initiatives, volunteers help connect residents to fresh, nourishing foods while creating welcoming spaces that celebrate local food and the people who grow, make and share it.

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

2026-12-19 | 9:00 AM - 12:00 PM

Location: Phoenix, AZ, 85004

Volunteers still needed: 10`,link:"https://www.handsonphoenix.org/opportunity/a0CUi000092joe2MAA",date:"2026-12-19"},{name:"Medical Sort and Pack at Project C.U.R.E.",description:`Bring hope and health to the world with Project C.U.R.E., a national faith-based organization! Join us as we sort and pack desperately needed medical supplies that are shipped to hospitals, clinics, and orphanages in over 100 poverty stricken countries worldwide! Volunteers will meet new people and learn a lot about medical supplies and the urgent needs of them in under-resourced countries around the world.

The minimum age for this volunteer opportunity is 14 with a parent or guardian. All volunteers under the age of 18 must be accompanied by a parent/guardian.

Volunteers must create an account with Project C.U.R.E. and sign in through their system at the warehouse. To make this process faster, please register here to set up your account before the project date.

Note: The building is a warehouse, so please wear close-toed shoes, appropriate clothing and bring water. You may be packing in either the warehouse or the sorting center. Please be prepared to do some lifting (up to 30 pounds). 

If you would like to register your child, please email the opportunity coordinator listed below and ask to reserve a guest slot. Please note, volunteers 13 years or older can create their own HandsOn account and sign up for opportunities directly (activation fee is not applicable for those under the age of 16).

2026-12-19 | 9:00 AM - 12:00 PM

Location: Phoenix, AZ, 85009

Volunteers still needed: 9`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00008lVlYHMA0",date:"2026-12-19"},{name:"Game Room Nights (Referral)",description:`Game Room Nights

Upcoming dates:

	
Saturday, November 14, 5-9pm at Jefferson Recreation Center - 120 S Jefferson Ave, Mesa, AZ 85208

	
Saturday, December 19, from 4-8pm at Eagles Community Center - 828 E Broadway Rd, Mesa, AZ 85204

Volunteer job description:

	
Assist with set up and clean up 30 minutes before and after event

	
Play video games or board games with participants (may need to assist with teaching how to play the game)

	
Serving pizza and drinks

Please express interest below to be redirected to our volunteer application.

2026-12-19 | 4:00 PM - 8:00 PM

Location: Mesa, AZ, 85208

Volunteers still needed: 2`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fi6LeMAI",date:"2026-12-19"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards Roosevelt",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at the Roosevelt Mini Park. Simply check the water temperature & water flow and wipe down the unit!

Do you walk by the mini park every morning? Do you ride your bike down Roosevelt Row once a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleaning. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-12-20 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTzyRMAS",date:"2026-12-20"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards Desert West",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the two drinking stations at Desert West Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Desert West Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-12-20 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85035

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tUkMDMA0",date:"2026-12-20"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Lindo Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Lindo Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-12-20 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85041

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tTwUVMA0",date:"2026-12-20"},{name:"Pick Your Time -10-Minute Opportunity! Chilled Water Station Stewards-Grant Park",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Grant Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Grant Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-12-21 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85003

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tURwJMAW",date:"2026-12-21"},{name:"Pick Your Time-10-Minute Opportunity! Chilled Water Station Stewards-Cave Creek",description:`PICK YOUR DAY & TIME! This is a 10-minute, independent, flexible, micro-volunteering opportunity!

The City of Phoenix is on a mission to create a sustainable network of chilled drinking water stations in high-density areas of the City, adapting innovative technologies to respond to rising urban temperatures.

The success of these chilled drinking water stations depends on public use- which means keeping them clean and inviting! Take 10 minutes, 1-2 times during the week you sign-up for, to help monitor and clean the drinking station at Lindo Park. Simply check the water temperature & water flow and wipe down the units!

Do you live close to Cave Creek-Larkspur Park? Do you walk your dog or ride your bike there once or twice a week? This quick and easy volunteer opportunity is flexible, so you can choose any day/time during the week you sign up for to stop by and conduct the cleanings. Cleaning supplies are located on site. Further instructions will be provided in your confirmation email.

Volunteers must be 16 years or older to sign up. All volunteers must email a signed waiver of liability linked here to benjamin.obrien@phoenix.gov prior to conducting the cleaning. The youth permission slip must also be completed for each youth even if they will be accompanied by an adult.

Be a part of an innovative and sustainable project that provides cool drinking water for Phonecians while reducing the use of plastic water bottles! Sign Up to adopt a week today!

Please note, this is an independent volunteer opportunity. The website will always reflect that one of two slots is filled. Please disregard this. If one spot is remaining, then we still need a volunteer to visit the water station 1-2 times that week. You will not work with another volunteer or meet anyone else on site.

2026-12-21 | 12:00 PM - 1:00 PM

Location: Phoenix, AZ, 85029

Volunteers still needed: 1`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009tSufrMAC",date:"2026-12-21"},{name:"Adaptive Cheer (Referral)",description:`Dates: Tuesdays, December 1, 2026-March 2, 2027

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

2026-12-22 | 6:30 PM - 8:30 PM

Location: Mesa, AZ, 85208

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fhoWuMAI",date:"2026-12-22"},{name:"Adaptive Basketball- Adult (Referral)",description:`Dates: Wednesdays, December 2, 2026 – March 3, 2027

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

2026-12-23 | 6:00 PM - 8:00 PM

Location: Mesa, AZ, 85204

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009fkzqiMAA",date:"2026-12-23"},{name:"Adaptive Basketball - Youth (Referral)",description:`Dates: Wednesdays, December 2, 2026 – March 3, 2027

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

2026-12-23 | 6:00 PM - 8:00 PM

Location: Mesa, AZ, 85208

Volunteers still needed: 4`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009flBATMA2",date:"2026-12-23"},{name:"Adaptive Pickleball- Coach/Unified Partner (Referral)",description:`Dates: Thursdays, November 5, 2026 - January 28, 2027 + Tournament on Saturday, January 30, 2027

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

2026-12-24 | 5:00 PM - 8:00 PM

Location: Mesa, AZ, 85205

Volunteers still needed: 5`,link:"https://www.handsonphoenix.org/opportunity/a0CUi00009filgdMAA",date:"2026-12-24"}]},Sg={title:"City of Flagstaff",note:null,opportunities:[{name:"Open Space Working Group meeting",description:`Come meet with Open Space Stewards, and get updates on Flagstaff Open Space's projects at Picture Canyon, McMillan Mesa, and Observatory Mesa Natural Preserves!

2026-12-09 | 10:30 AM - 12:00 PM

Location: White Dove Coffee Shop

Category: Stewardship`,date:"2026-12-09",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Full Moon Hike",description:`PROSE - Open Space hosts a full moon walk on one of our beautiful Open Space properties--a different spot each month. We start about a half-hour before the moon rises, walk on either a loop trail or out-and-back, and watch the full moon rise. Come check out your open spaces, and meet new people! Check each month for specific starting time, meeting place, and what trail we'll walk for that full moon. Wear sturdy shoes, dress for the weather, and bring a red-light flashlight and hiking poles, but we'll have extras! This month, we'll walk the 2-mile Nate Avery Loop at Buffalo Park, which has some incline but is primarily flat. We'll meet at Buffalo Park by the buffalo!

2026-12-23 | 4:45 PM - 6:00 PM

Location: Buffalo Park

Category: Special Event`,date:"2026-12-23",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Full Moon Hike--Tunnel Springs Trail",description:`PROSE - Open Space hosts a full moon walk (and sometimes bike ride) on one of our beautiful Open Space properties--a different spot each month. We start about a half-hour before the moon rises, walk on either a loop trail or out-and-back, and watch the full moon rise. Come check out your open spaces, and meet new people! Check each month for specific starting time, meeting place, and what trail we'll walk/ride for that full moon. Wear sturdy shoes, dress for the weather, and bring a red-light flashlight and hiking poles, but we'll have extras! This month, we'll walk Observatory Mesa Natural Area's Tunnel Springs Trail. It is about 3 miles out and back, and is steep, but all on the wide FUTS trail. Meet at the intersection of Railroad Springs Blvd & Adirondack Ave.

2026-11-24 | 4:45 PM - 6:45 PM

Location: Observatory Mesa-Tunnel Springs (RR Springs Blvd)

Category: Special Event`,date:"2026-11-24",link:"https://volunteer.flagstaffaz.gov/Calendar"},{name:"Big trash cleanup!",description:`Help Open Space clean up several big trash piles way out on Observatory Mesa Natural Preserve. Trash piles located off trails and on slopes, so be prepared for uneven footing. Dress for the weather, wear sturdy shoes, bring drinking water and snacks. We will supply work gloves, trash pickers, and trash bags. Meet at the Sustainability garage at 419 N Mogollon St, and we will drive/ride in City vehicles to/near the site.

2026-11-13 | 1:00 PM - 4:30 PM

Location: Observatory Mesa-Tunnel Springs (RR Springs Blvd)

Category: Trash Clean-Up`,date:"2026-11-13",link:"https://volunteer.flagstaffaz.gov/Calendar"}]},xo={handsOnGreaterPhoenix:Pg,cityOfFlagstaff:Sg};function zl(e){return e&&e.replace(/&#39;/g,"'").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#8217;/g,"’").replace(/&#8216;/g,"‘").replace(/&#8220;/g,"“").replace(/&#8221;/g,"”").replace(/&nbsp;/g," ")}function Bo(e,n){let t=e;if(!t&&n){const r=n.match(/(\d{4}-\d{2}-\d{2})\s*\|/);r&&(t=r[1])}if(!t)return!0;const i=new Date(t+"T23:59:59");if(isNaN(i.getTime()))return!0;const o=new Date;return o.setHours(0,0,0,0),i>=o}function wc(e){return e.map(n=>({...n,name:zl(n.name),description:zl(n.description)})).filter(n=>Bo(n.date,n.description))}const vc={title:"HandsOn Greater Phoenix",note:'For referral volunteer opportunities (marked "Referral" in the title), please contact the listed volunteer coordinator directly to confirm whether service hours can be verified, since HandsOn cannot sign off on hours for projects run by partner organizations.',opportunities:[{name:"TopGolf Competition - Gilbert",link:"https://www.handsonphoenix.org/calendar",description:`Volunteers are needed for event support.
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

Time: 6:15 PM - 8:15 PM`}]};var Hl,_l;const Ui=((_l=(Hl=xo.handsOnGreaterPhoenix)==null?void 0:Hl.opportunities)==null?void 0:_l.length)>0?xo.handsOnGreaterPhoenix:vc,xg={...Ui,note:'For referral volunteer opportunities (marked "Referral" in the title), please contact HandsOn Greater Phoenix to confirm whether volunteer hours can be verified for that project before signing up.',opportunities:Ui===vc?Ui.opportunities.filter(e=>Bo(e.date)):wc(Ui.opportunities).map(e=>({...e,link:e.link||"https://www.handsonphoenix.org/calendar"}))};var Bl,Yl;const Ii=((Yl=(Bl=xo.cityOfFlagstaff)==null?void 0:Bl.opportunities)==null?void 0:Yl.length)>0?xo.cityOfFlagstaff:kc,Ag={...Ii,opportunities:Ii===kc?Ii.opportunities.filter(e=>Bo(e.date)):wc(Ii.opportunities).map(e=>({...e,link:e.link||"https://volunteer.flagstaffaz.gov/Calendar"}))},ye={handsOnGreaterPhoenix:xg,arizonaStateParks:{title:"Arizona State Parks and Trails",note:`Note: The following opportunities require an application, which can be done through this link:
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
Tempe, AZ  85282`}]}};Object.keys(ye).forEach(e=>{ye[e]={...ye[e],opportunities:ye[e].opportunities.filter(n=>Bo(n.date,n.description))}});const Mg=Object.freeze(Object.defineProperty({__proto__:null,organizations:ye},Symbol.toStringTag,{value:"Module"}));function Tg(){const[e,n]=b.useState([{sender:"ai",text:"Hi! I'm Quest AI. Tell me your interests and location, and I will find the best volunteer opportunity near you!"}]),[t,i]=b.useState(""),[o,r]=b.useState(!1),a=b.useRef(null);b.useEffect(()=>{a.current&&(a.current.scrollTop=a.current.scrollHeight)},[e]);const s=JSON.stringify(ye);async function l(){if(!t.trim()||o)return;const f=t;i(""),r(!0),n(c=>[...c,{sender:"user",text:f}]);try{const c=await bg(f,s);n(m=>[...m,{sender:"ai",text:c}])}catch(c){n(m=>[...m,{sender:"ai",text:`Error: ${c.message}`}])}finally{r(!1)}}function u(f){f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),l())}return h.jsxs("div",{className:"quest-page-wrap",children:[h.jsx(mi,{current:"quest"}),h.jsxs("div",{className:"quest-page",children:[h.jsx("h1",{className:"quest-title",children:"Quest AI"}),!yc()&&h.jsxs("div",{className:"quest-config-banner",children:["Quest AI isn't connected yet. Add your Firebase API key in ",h.jsx("code",{children:"src/config/firebaseConfig.js"})," to enable live responses."]}),h.jsx("div",{className:"quest-chat-scroll",ref:a,children:e.map((f,c)=>h.jsxs("div",{className:`quest-message-row ${f.sender}`,children:[f.sender==="ai"&&h.jsx("span",{className:`quest-avatar ai${o&&c===e.length-1?" loading":""}`,children:"✨"}),h.jsx("div",{className:`quest-bubble ${f.sender}`,children:f.text}),f.sender==="user"&&h.jsx("span",{className:"quest-avatar user",children:"👤"})]},c))}),h.jsxs("div",{className:"quest-input-bar",children:[h.jsxs("div",{className:"quest-input-wrap",children:[h.jsx("input",{className:"quest-input",value:t,onChange:f=>i(f.target.value),onKeyDown:u}),!t&&h.jsx("span",{className:"quest-input-placeholder",children:"Ask Quest AI..."})]}),h.jsx("button",{className:"quest-send-btn",onClick:l,children:o?"⋯":"➤"})]})]})]})}const Cg="modulepreload",Eg=function(e){return"/"+e},Wl={},Vg=function(n,t,i){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(t.map(l=>{if(l=Eg(l),l in Wl)return;Wl[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":Cg,u||(c.as="script"),c.crossOrigin="",c.href=l,s&&c.setAttribute("nonce",s),document.head.appendChild(c),u)return new Promise((m,y)=>{c.addEventListener("load",m),c.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return o.then(a=>{for(const s of a||[])s.status==="rejected"&&r(s.reason);return n().catch(r)})},bc="AIzaSyDyePdZI22sIGwZ84yK5mwOzjhtrVwq8us";function Fl(){return!!bc}const jg={handsOnGreaterPhoenix:"/org/hands-on-greater-phoenix",arizonaStateParks:"/org/arizona-state-parks",azSustainabilityAlliance:"/org/az-sustainability-alliance",bureauOfLandManagement:"/org/bureau-of-land-management",cityOfFlagstaff:"/org/city-of-flagstaff",feedMyStarvingChildren:"/org/feed-my-starving-children",lostOurHomesPetRescue:"/org/lost-our-homes-pet-rescue",juniorAchievement:"/org/junior-achievement"},Pc="vh_geocode_cache_v5";let Di=null;function Ng(e){var n;return(n=window.google)!=null&&n.maps?Promise.resolve(window.google):Di||(Di=new Promise((t,i)=>{const o=document.createElement("script");o.src=`https://maps.googleapis.com/maps/api/js?key=${e}&libraries=places,geometry`,o.async=!0,o.onload=()=>{const r=document.createElement("script");r.src="https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js",r.onload=()=>t(window.google),r.onerror=()=>t(window.google),document.head.appendChild(r)},o.onerror=i,document.head.appendChild(o)}),Di)}function Lg(e){if(!e)return null;const n=e.match(/Location:\s*([^\n]+)/i);if(!n)return null;let t=n[1].trim();return t=t.replace(/,?\s*AZ,\s*AZ/i,", AZ"),t.toLowerCase().includes("details")||t.toLowerCase().includes("provided after")||t.toLowerCase().includes("provided upon")||t.toLowerCase().includes("contact")||t.toLowerCase().includes("various")||t.toLowerCase().includes("multiple")||t.toLowerCase().includes("tbd")||t.length<4?null:/^\d{5}$/.test(t)?`${t}, AZ`:t}function Og(){try{const e=localStorage.getItem(Pc);return e?JSON.parse(e):{}}catch{return{}}}function Rg(e){try{localStorage.setItem(Pc,JSON.stringify(e))}catch{}}async function Ug(e,n,t){const i=n.toLowerCase().trim();return t[i]?t[i]:new Promise(o=>{new e.maps.Geocoder().geocode({address:n+", Arizona",componentRestrictions:{country:"us"},bounds:new e.maps.LatLngBounds(new e.maps.LatLng(31.3,-114.8),new e.maps.LatLng(37,-109))},(a,s)=>{if(s==="OK"&&a[0]){const{lat:l,lng:u}=a[0].geometry.location,f={lat:l(),lng:u()};t[i]=f,o(f)}else t[i]=null,o(null)})})}async function Ig(e,n,t){const i=Og(),o=[],r=[];for(const[s,l]of Object.entries(n))for(const u of l.opportunities){const f=Lg(u.description);f&&r.push({name:u.name,orgKey:s,loc:f})}t(`Locating ${r.length} opportunities...`);let a=0;for(const s of r){const l=await Ug(e,s.loc,i);l&&o.push({name:s.name,orgKey:s.orgKey,lat:l.lat,lng:l.lng}),a++,a%10===0&&t(`Locating opportunities... (${a}/${r.length})`),await new Promise(u=>setTimeout(u,60))}return Rg(i),o}function Dg(){const e=_o(),n=b.useRef(null),t=b.useRef(null),i=b.useRef([]),[o,r]=b.useState(""),[a,s]=b.useState(""),[l,u]=b.useState(null),[f,c]=b.useState(!1),[m,y]=b.useState(""),[w,k]=b.useState(""),[A,p]=b.useState("Loading map..."),[d,g]=b.useState([]);b.useEffect(()=>{if(!Fl())return;let S=!1;return Ng(bc).then(async C=>{var Le;if(S||!n.current)return;const E=new C.maps.Map(n.current,{center:{lat:33.4484,lng:-111.95},zoom:9,mapTypeControl:!1});if(t.current=E,p("Locating opportunities..."),await new Promise(X=>setTimeout(X,150)),S)return;const{organizations:U}=await Vg(async()=>{const{organizations:X}=await Promise.resolve().then(()=>Mg);return{organizations:X}},void 0);if(S)return;const N=Object.values(U).reduce((X,Ge)=>X+Ge.opportunities.length,0);console.log(`MapsPage: loaded ${N} opportunities`);const $=await Ig(C,U,p);if(S)return;g($),i.current.forEach(X=>X.setMap(null));const K=$.map(X=>{const Ge=new C.maps.Marker({position:{lat:X.lat,lng:X.lng},title:X.name});return Ge.addListener("click",()=>u(X)),Ge});i.current=K,(Le=window.markerClusterer)!=null&&Le.MarkerClusterer?new window.markerClusterer.MarkerClusterer({map:E,markers:K}):K.forEach(X=>X.setMap(E)),c(!0),p("")}).catch(()=>{S||(y("Google Maps failed to load. Check your API key in src/config/googleMapsConfig.js."),p(""))}),()=>{S=!0}},[]);function v(){var E;if(k(""),s(""),!f){k("The map is still loading — try again in a moment.");return}if(!o.trim()){k("Enter an address first.");return}const S=window.google;if(!((E=S==null?void 0:S.maps)!=null&&E.Geocoder)){k("Geocoding not available. Try reloading.");return}new S.maps.Geocoder().geocode({address:o,componentRestrictions:{country:"us"},bounds:new S.maps.LatLngBounds(new S.maps.LatLng(31.3,-114.8),new S.maps.LatLng(37,-109))},(U,N)=>{var Ge,Gn;if(N!=="OK"||!U[0]){k(`Couldn't find that address. Try adding a city, e.g. "1110 W Washington, Phoenix".`);return}const $=U[0].geometry.location;let K=null,Le=1/0;for(const Oe of d){const M=(Gn=(Ge=S.maps.geometry)==null?void 0:Ge.spherical)!=null&&Gn.computeDistanceBetween?S.maps.geometry.spherical.computeDistanceBetween($,new S.maps.LatLng(Oe.lat,Oe.lng)):zg($.lat(),$.lng(),Oe.lat,Oe.lng);M<Le&&(Le=M,K=Oe)}if(!K){k("No mapped opportunities found.");return}u(K),t.current.panTo({lat:K.lat,lng:K.lng}),t.current.setZoom(13),new S.maps.DirectionsService().route({origin:$,destination:{lat:K.lat,lng:K.lng},travelMode:S.maps.TravelMode.DRIVING},(Oe,M)=>{if(M==="OK"){const V=Oe.routes[0].legs[0],j=Math.round(V.duration.value/60),F=(V.distance.value/1609.34).toFixed(1);s(`📍 ${K.name} — ${F} mi · ${j} min away`)}else k(`Found nearest opportunity (${K.name}) but couldn't calculate drive time.`)})})}function x(){if(!l)return;const S=jg[l.orgKey];S&&e(S),u(null)}return h.jsxs("div",{className:"maps-page",children:[h.jsx(mi,{current:"maps"}),h.jsxs("div",{className:"maps-map-wrap",children:[Fl()?h.jsx("div",{className:"maps-map-canvas",ref:n}):h.jsx("div",{className:"maps-not-configured",children:h.jsxs("p",{children:["Add your Google Maps API key in ",h.jsx("code",{children:"src/config/googleMapsConfig.js"})]})}),m&&h.jsx("div",{className:"maps-not-configured",style:{background:"rgba(40,0,0,0.85)"},children:h.jsx("p",{children:m})}),A&&h.jsxs("div",{className:"maps-loading-banner",children:[h.jsx("span",{className:"maps-loading-spinner"})," ",A]}),h.jsxs("div",{className:"maps-search-panel",children:[h.jsx("input",{className:"maps-address-input",placeholder:"Address",value:o,onChange:S=>r(S.target.value),onKeyDown:S=>S.key==="Enter"&&v()}),h.jsx("button",{className:"maps-find-btn",onClick:v,children:"Find Nearest Opportunity"}),w&&h.jsx("span",{className:"maps-find-error",children:w}),a&&h.jsx("span",{className:"maps-travel-time",children:a}),h.jsx("p",{className:"maps-location-note",children:"📌 Some pin locations are approximate based on the area listed. Register with the organization for exact details."})]})]}),l&&h.jsx("div",{className:"maps-sheet-overlay",onClick:()=>u(null),children:h.jsxs("div",{className:"maps-sheet",onClick:S=>S.stopPropagation(),children:[h.jsx("span",{className:"maps-sheet-name",children:l.name}),h.jsx("button",{className:"maps-sheet-btn",onClick:x,children:"Click to View Organization"})]})})]})}function zg(e,n,t,i){const r=u=>u*Math.PI/180,a=r(t-e),s=r(i-n),l=Math.sin(a/2)**2+Math.cos(r(e))*Math.cos(r(t))*Math.sin(s/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))}const Wg="/assets/Image2-DbNKlkYW.png";function Fg(){return h.jsxs("div",{className:"about-page",children:[h.jsx(mi,{current:"about"}),h.jsxs("div",{className:"about-scroll",children:[h.jsx("div",{className:"about-hero",style:{backgroundImage:`url(${Wg})`},children:h.jsxs("div",{className:"about-hero-text",children:[h.jsx("h1",{className:"about-mission-title",children:"Our Mission"}),h.jsx("p",{className:"about-mission-body",children:`With the right tools and access to meaningful opportunities,
any student can make a difference. VolunteerHigh empowers
students to connect with
causes they care about, building lasting community
impact and growing service.`})]})}),h.jsxs("div",{className:"about-section",children:[h.jsxs("div",{className:"about-divider-row",children:[h.jsx("div",{className:"rule"}),h.jsx("span",{className:"label",children:"About VolunteerHigh"}),h.jsx("div",{className:"rule"})]}),h.jsx("p",{className:"about-body-text",children:`Created By A Student, for Students.

VolunteerHigh is a platform designed to help high school students in Arizona discover meaningful volunteer opportunities
 in their lcoal communities. Finding volunteer work can be difficult, with opportunities scattered across different websites and organizations.
VolunteerHigh simplifies this process by displaying various organizations in one place.`})]})]})]})}function wa(e){const n=/(https?:\/\/[^\s]+)/g;return e.split(n).map((i,o)=>n.test(i)&&i.startsWith("http")?h.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer",children:i},o):h.jsx(Sa.Fragment,{children:i},o))}const Hg=[{question:"Is VolunteerHigh Free?",answer:"Yes! VolunteerHigh is a completely free tool that can be used by anybody in Arizona."},{question:"Do I have to sign up to use VolunteerHigh?",answer:"No. VolunteerHigh requires no sign ups, though some opportunities require an account or aplication."},{question:"What organizations is VolunteerHigh partnered with?",answer:"VolunteerHigh is partnered with 8 organizations across the valley as of now."},{question:"Can I use VolunteerHigh in California?",answer:"No. VolunteerHigh is currently a platform designed only for students in Arizona."},{question:"How can I contact VolunteerHigh",answer:"Email VolunteerHighSupport@gmail.com"},{question:"Where can I contact the organizations?",answer:`Here are our following partner organizations, and their contact information:

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
Email: Volunteering@lostourhome.org`}];function _g({question:e,answer:n}){const[t,i]=b.useState(!1);return h.jsxs("div",{className:"faq-row",children:[h.jsxs("button",{className:"faq-question-row",onClick:()=>i(o=>!o),children:[h.jsx("span",{children:e}),h.jsx("span",{className:"faq-toggle-icon",children:t?"−":"+"})]}),t&&h.jsx("p",{className:"faq-answer",children:wa(n)})]})}function Bg(){return h.jsxs("div",{className:"faq-page",children:[h.jsx(mi,{current:"faq"}),h.jsx("div",{className:"faq-scroll",children:h.jsxs("div",{className:"faq-inner",children:[h.jsxs("div",{className:"faq-divider-row",children:[h.jsx("div",{className:"rule"}),h.jsx("span",{className:"label",children:"FAQ's"}),h.jsx("div",{className:"rule"})]}),Hg.map((e,n)=>h.jsx(_g,{question:e.question,answer:e.answer},n))]})})]})}function Tn({title:e,note:n,opportunities:t,centerTitle:i,bannerImage:o,contactEmail:r}){const[a,s]=b.useState(null),[l,u]=b.useState(""),f=b.useMemo(()=>{if(!l.trim())return t;const y=l.toLowerCase();return t.filter(w=>w.name.toLowerCase().includes(y)||w.description.toLowerCase().includes(y))},[t,l]),c=a!==null?t[a]:null;function m(y){if(!r)return null;const w=`Volunteering Inquiry — ${y}`,k=`Hi,

I'm interested in the "${y}" volunteer opportunity with ${e}, and I'd like to learn more.

Thank you!`;return`mailto:${r}?subject=${encodeURIComponent(w)}&body=${encodeURIComponent(k)}`}return h.jsxs("div",{className:"org-page",children:[o&&h.jsx("div",{className:"org-banner",style:{backgroundImage:`url(${o})`}}),h.jsxs("div",{className:`org-header${i?" center-title":""}`,children:[h.jsx("h1",{className:"org-title",children:e}),n&&h.jsx("p",{className:"org-note",children:wa(n)})]}),h.jsxs("div",{className:"org-body",children:[h.jsxs("div",{className:"org-list-pane",children:[h.jsx("h2",{className:"org-list-heading",children:"Opportunities Near You 📍"}),h.jsx("input",{className:"org-search-input",type:"text",placeholder:"Search opportunities...",value:l,onChange:y=>u(y.target.value)}),h.jsx("div",{className:"org-list-scroll",children:f.length===0?h.jsx("p",{className:"org-list-empty",children:"No opportunities match your search."}):f.map(y=>{const w=t.indexOf(y);return h.jsx("button",{className:`org-list-item${a===w?" selected":""}`,onClick:()=>s(w),children:y.name},w)})})]}),h.jsx("div",{className:"org-divider"}),h.jsx("div",{className:"org-detail-pane",children:h.jsx("div",{className:"org-detail-scroll",children:c?h.jsxs(h.Fragment,{children:[h.jsx("h3",{className:"org-detail-name",children:c.name}),h.jsx("p",{className:"org-detail-description",children:wa(c.description)}),h.jsxs("div",{className:"org-detail-actions",children:[c.link&&h.jsx("a",{className:"org-apply-button",href:c.link,target:"_blank",rel:"noopener noreferrer",children:"View Official Listing ↗"}),r&&h.jsxs("a",{className:"org-apply-button org-apply-button-secondary",href:m(c.name),children:["✉ Email ",e]})]})]}):h.jsx("p",{className:"org-detail-placeholder",children:"Select an opportunity on the left to view details"})})})]})]})}const Cn={arizonaStateParks:"crichards@azstateparks.gov",handsOnGreaterPhoenix:"info@handsonphoenix.org",cityOfFlagstaff:"Blake.Commisso@flagstaffaz.gov",juniorAchievement:"taylors@jaaz.org",feedMyStarvingChildren:"info@fmsc.org",azSustainabilityAlliance:"info@azsustain.org",bureauOfLandManagement:"elitchfield@az.go",lostOurHomesPetRescue:"Volunteering@lostourhome.org"};function Yg(){const e=ye.handsOnGreaterPhoenix;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Cn.handsOnGreaterPhoenix})}function Zg(){const e=ye.arizonaStateParks;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,centerTitle:!0,contactEmail:Cn.arizonaStateParks})}function Gg(){const e=ye.cityOfFlagstaff;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Cn.cityOfFlagstaff})}function qg(){const e=ye.juniorAchievement;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,centerTitle:!0,contactEmail:Cn.juniorAchievement})}function $g(){const e=ye.feedMyStarvingChildren;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Cn.feedMyStarvingChildren})}function Kg(){const e=ye.azSustainabilityAlliance;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Cn.azSustainabilityAlliance})}function Jg(){const e=ye.bureauOfLandManagement;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Cn.bureauOfLandManagement})}function Qg(){const e=ye.lostOurHomesPetRescue;return h.jsx(Tn,{title:e.title,note:e.note,opportunities:e.opportunities,contactEmail:Cn.lostOurHomesPetRescue})}function Xg(){return h.jsx(Jf,{children:h.jsxs(Bf,{children:[h.jsx(de,{path:"/",element:h.jsx(ng,{})}),h.jsx(de,{path:"/home",element:h.jsx(wg,{})}),h.jsx(de,{path:"/quest",element:h.jsx(Tg,{})}),h.jsx(de,{path:"/maps",element:h.jsx(Dg,{})}),h.jsx(de,{path:"/about",element:h.jsx(Fg,{})}),h.jsx(de,{path:"/faq",element:h.jsx(Bg,{})}),h.jsx(de,{path:"/org/hands-on-greater-phoenix",element:h.jsx(Yg,{})}),h.jsx(de,{path:"/org/arizona-state-parks",element:h.jsx(Zg,{})}),h.jsx(de,{path:"/org/city-of-flagstaff",element:h.jsx(Gg,{})}),h.jsx(de,{path:"/org/junior-achievement",element:h.jsx(qg,{})}),h.jsx(de,{path:"/org/feed-my-starving-children",element:h.jsx($g,{})}),h.jsx(de,{path:"/org/az-sustainability-alliance",element:h.jsx(Kg,{})}),h.jsx(de,{path:"/org/bureau-of-land-management",element:h.jsx(Jg,{})}),h.jsx(de,{path:"/org/lost-our-homes-pet-rescue",element:h.jsx(Qg,{})})]})})}Pr.createRoot(document.getElementById("root")).render(h.jsx(Sa.StrictMode,{children:h.jsx(Xg,{})}));
