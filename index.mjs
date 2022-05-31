// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mmean@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var i=t.isPrimitive,n=s,m=e,d=r;var o=function(t){var s;if(!i(t))throw new TypeError(d("0e28T",t));return s=n(t),function(t,e){if(0===arguments.length)return s();return s(100*m((e-t)/e))}};export{o as default};
//# sourceMappingURL=index.mjs.map
