// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,u=e.__lookupSetter__;var l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,l){var c,f,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(a.call(t,r)||u.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=l.value,t.__proto__=c):t[r]=l.value),y="get"in l,p="set"in l,f&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,r,l.get),p&&i&&i.call(t,r,l.set),t};function c(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function f(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;var s="function"==typeof Symbol?Symbol.toStringTag:"";var _=p()?function(t){var r,e,n,o,i;if(null==t)return v.call(t);e=t[s],i=s,r=null!=(o=t)&&b.call(o,i);try{t[s]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[s]=e:delete t[s],n}:function(t){return v.call(t)},m=Number,d=m.prototype.toString;var g=p();function h(t){return"object"==typeof t&&(t instanceof m||(g?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function j(t){return f(t)||h(t)}c(j,"isPrimitive",f),c(j,"isObject",h);var w=Number.POSITIVE_INFINITY,N=m.NEGATIVE_INFINITY,O=Math.floor;function S(t){return t<w&&t>N&&O(r=t)===r;var r}function T(t){return f(t)&&S(t)}function A(t){return h(t)&&S(t.valueOf())}function F(t){return T(t)||A(t)}function I(t){return T(t)&&t>0}function E(t){return A(t)&&t.valueOf()>0}function P(t){return I(t)||E(t)}function V(t){return t!=t}c(F,"isPrimitive",T),c(F,"isObject",A),c(P,"isPrimitive",I),c(P,"isObject",E);var k="function"==typeof Float64Array;var G="function"==typeof Float64Array?Float64Array:null;var M="function"==typeof Float64Array?Float64Array:void 0;var x=function(){var t,r,e;if("function"!=typeof G)return!1;try{r=new G([1,3.14,-3.14,NaN]),e=r,t=(k&&e instanceof Float64Array||"[object Float64Array]"===_(e))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?M:function(){throw new Error("not implemented")};function C(t){return Math.abs(t)}function Y(t){var r;if(!I(t))throw new TypeError(function(){var t,r=arguments,e="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}("0e28T",t));return r=function(t){var r,e,n,o,i;if(!I(t))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+t+"`.");return e=new x(t),n=0,i=-1,o=0,function(a){var u;if(0===arguments.length)return 0===o?null:n;if(i=(i+1)%t,V(a))o=t,n=NaN;else if(o<t)n+=(r=a-n)/(o+=1);else if(V(e[i])){for(o=1,n=a,u=0;u<t;u++)if(u!==i){if(V(e[u])){o=t,n=NaN;break}o+=1,r=e[u]-n,n+=r/o}}else!1===V(n)&&(r=a-e[i],n+=r/t);return e[i]=a,n}}(t),function(t,e){if(0===arguments.length)return r();return r(100*C((e-t)/e))}}export{Y as default};
//# sourceMappingURL=mod.js.map
