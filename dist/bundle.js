!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/react-form-elementor/",r(r.s=3)}([function(e,t,r){"use strict";e.exports=r(1)},function(e,t,r){"use strict";
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,a=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,v=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,r,n,o,u,i,l){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,o,u,i,l],f=0;(e=Error(t.replace(/%s/g,function(){return c[f++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||g}function S(){}function w(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||g}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=j.prototype;var _=w.prototype=new S;_.constructor=w,n(_,j.prototype),_.isPureReactComponent=!0;var k={current:null},P={current:null},x=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n=void 0,o={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var f=Array(c),a=0;a<c;a++)f[a]=arguments[a+2];o.children=f}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:u,type:e,key:i,ref:l,props:o,_owner:P.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var R=/\/+/g,M=[];function V(e,t,r,n){if(M.length){var o=M.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>M.length&&M.push(e)}function I(e,t,r){return null==e?0:function e(t,r,n,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case u:case i:c=!0}}if(c)return n(o,t,""===r?"."+T(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var f=0;f<t.length;f++){var a=r+T(l=t[f],f);c+=e(l,a,n,o)}else if(a=null===t||"object"!=typeof t?null:"function"==typeof(a=h&&t[h]||t["@@iterator"])?a:null,"function"==typeof a)for(t=a.call(t),f=0;!(l=t.next()).done;)c+=e(l=l.value,a=r+T(l,f++),n,o);else"object"===l&&m("31","[object Object]"==(n=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return c}(e,"",t,r)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function N(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,n,r,function(e){return e}):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function q(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(R,"$&/")+"/"),I(e,U,t=V(t,u,n,o)),A(t)}function D(){var e=k.current;return null===e&&m("321"),e}var F={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return q(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,N,t=V(null,null,t,r)),A(t)},count:function(e){return I(e,function(){return null},null)},toArray:function(e){var t=[];return q(e,t,null,function(e){return e}),t},only:function(e){return $(e)||m("143"),e}},createRef:function(){return{current:null}},Component:j,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return D().useCallback(e,t)},useContext:function(e,t){return D().useContext(e,t)},useEffect:function(e,t){return D().useEffect(e,t)},useImperativeHandle:function(e,t,r){return D().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return D().useLayoutEffect(e,t)},useMemo:function(e,t){return D().useMemo(e,t)},useReducer:function(e,t,r){return D().useReducer(e,t,r)},useRef:function(e){return D().useRef(e)},useState:function(e){return D().useState(e)},Fragment:l,StrictMode:c,Suspense:d,createElement:E,cloneElement:function(e,t,r){null==e&&m("267",e);var o=void 0,i=n({},e.props),l=e.key,c=e.ref,f=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,f=P.current),void 0!==t.key&&(l=""+t.key);var a=void 0;for(o in e.type&&e.type.defaultProps&&(a=e.type.defaultProps),t)x.call(t,o)&&!C.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==a?a[o]:t[o])}if(1===(o=arguments.length-2))i.children=r;else if(1<o){a=Array(o);for(var s=0;s<o;s++)a[s]=arguments[s+2];i.children=a}return{$$typeof:u,type:e.type,key:l,ref:c,props:i,_owner:f}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:f,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentOwner:P,assign:n}},L={default:F},z=L&&F||L;e.exports=z.default||z},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var f in r=Object(arguments[c]))o.call(r,f)&&(l[f]=r[f]);if(n){i=n(r);for(var a=0;a<i.length;a++)u.call(r,i[a])&&(l[i[a]]=r[i[a]])}}return l}},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw u}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return n=this,r=!(o=(e=f(t)).call.apply(e,[this].concat(l)))||"object"!==u(o)&&"function"!=typeof o?a(n):o,p(a(r),"oldValues",new Map),p(a(r),"newValues",new Map),r}var r,y,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,n["Component"]),r=t,(y=[{key:"componentDidMount",value:function(){var e=this.props,t=(e.children,e.ref,l(e,["children","ref"])),r=JSON.parse(JSON.stringify(t));for(var n in r)this.oldValues.set(n,r[n])}},{key:"shouldComponentUpdate",value:function(e,t){e.children,e.ref;var r=l(e,["children","ref"]),n=JSON.parse(JSON.stringify(r));for(var o in n)this.newValues.set(o,n[o]);return!0}},{key:"reset",value:function(){this.oldValues=new Map(this.newValues)}},{key:"isChangeDetected",value:function(){if(this.oldValues.size!==this.newValues.size)return!0;var e=!1,t=!0,r=!1,n=void 0;try{for(var o,u=this.oldValues[Symbol.iterator]();!(t=(o=u.next()).done);t=!0){var l=i(o.value,2),c=l[0],f=l[1];if(!this.compare(f,this.newValues.get(c))){e=!0;break}}}catch(e){r=!0,n=e}finally{try{t||null==u.return||u.return()}finally{if(r)throw n}}return e}},{key:"compare",value:function(e,t){if(u(e)!==u(t))return!1;var r=!1;if(null===e&&null===t)return r=!0;switch(u(e)){case"object":r=this.deepCompare(e,t);break;default:r=e===t}return r}},{key:"deepCompare",value:function(e,t){if(0===Object.keys(e).length&&0===Object.keys(t).length)return!0;if(Object.keys(e).length!==Object.keys(t).length)return!1;var r=!1;for(var n in e)if(!(r=this.compare(e[n],t[n])))return r;return r}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,this.props.children)}}])&&c(r.prototype,y),d&&c(r,d),t}();r.d(t,"ChangeDetector",function(){return y})}]);