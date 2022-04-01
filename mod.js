// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,a=i.toString,o=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,v;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,v="set"in t,s&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,t.get),v&&u&&u.call(r,e,t.set),r},l=n,v=s,p=t()?l:v;var g=function(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g;var h=function(r){return"number"==typeof r};var m=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return m&&"symbol"==typeof Symbol.toStringTag},y=Object.prototype.toString,w=y;var E=function(r){return w.call(r)},j=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&j.call(r,e)},_="function"==typeof Symbol?Symbol.toStringTag:"",O=P,T=_,V=y;var x=E,S=function(r){var e,t,n;if(null==r)return V.call(r);t=r[T],e=O(r,T);try{r[T]=void 0}catch(e){return V.call(r)}return n=V.call(r),e?r[T]=t:delete r[T],n},A=b()?S:x,k=Number,F=k.prototype.toString;var I=A,N=k,M=function(r){try{return F.call(r),!0}catch(r){return!1}},R=b();var $=function(r){return"object"==typeof r&&(r instanceof N||(R?M(r):"[object Number]"===I(r)))},C=h,B=$;var G=d,L=function(r){return C(r)||B(r)},Z=$;G(L,"isPrimitive",h),G(L,"isObject",Z);var W=L,X=Number.POSITIVE_INFINITY,z=k.NEGATIVE_INFINITY,U=Math.floor;var Y=function(r){return U(r)===r},D=X,q=z,H=Y;var J=function(r){return r<D&&r>q&&H(r)},K=W.isPrimitive,Q=J;var rr=function(r){return K(r)&&Q(r)},er=W.isObject,tr=J;var nr=function(r){return er(r)&&tr(r.valueOf())},ir=rr,ar=nr;var or=d,ur=function(r){return ir(r)||ar(r)},cr=nr;or(ur,"isPrimitive",rr),or(ur,"isObject",cr);var fr=ur,sr=fr.isPrimitive;var lr=function(r){return sr(r)&&r>0},vr=fr.isObject;var pr=function(r){return vr(r)&&r.valueOf()>0},gr=lr,dr=pr;var hr=d,mr=function(r){return gr(r)||dr(r)},br=pr;hr(mr,"isPrimitive",lr),hr(mr,"isObject",br);var yr=mr;var wr=function(r){return r!=r},Er=A,jr="function"==typeof Float64Array;var Pr="function"==typeof Float64Array?Float64Array:null,_r=function(r){return jr&&r instanceof Float64Array||"[object Float64Array]"===Er(r)},Or=Pr;var Tr,Vr="function"==typeof Float64Array?Float64Array:void 0,xr=function(){throw new Error("not implemented")};Tr=function(){var r,e;if("function"!=typeof Or)return!1;try{e=new Or([1,3.14,-3.14,NaN]),r=_r(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Vr:xr;var Sr=yr.isPrimitive,Ar=wr,kr=Tr;var Fr=function(r){var e,t,n,i,a;if(!Sr(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return t=new kr(r),n=0,a=-1,i=0,function(o){var u;if(0===arguments.length)return 0===i?null:n;if(a=(a+1)%r,Ar(o))i=r,n=NaN;else if(i<r)n+=(e=o-n)/(i+=1);else if(Ar(t[a])){for(i=1,n=o,u=0;u<r;u++)if(u!==a){if(Ar(t[u])){i=r,n=NaN;break}i+=1,e=t[u]-n,n+=e/i}}else!1===Ar(n)&&(e=o-t[a],n+=e/r);return t[a]=o,n}};var Ir=function(r){return Math.abs(r)};var Nr=function(r){return"string"==typeof r},Mr=String.prototype.valueOf;var Rr=A,$r=function(r){try{return Mr.call(r),!0}catch(r){return!1}},Cr=b();var Br=function(r){return"object"==typeof r&&(r instanceof String||(Cr?$r(r):"[object String]"===Rr(r)))},Gr=Nr,Lr=Br;var Zr=d,Wr=function(r){return Gr(r)||Lr(r)},Xr=Br;Zr(Wr,"isPrimitive",Nr),Zr(Wr,"isObject",Xr);var zr=Wr,Ur=Y;var Yr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Ur(r.length)&&r.length>=0&&r.length<=9007199254740991},Dr=W.isPrimitive,qr=wr;var Hr=function(r){return Dr(r)&&qr(r)},Jr=W.isObject,Kr=wr;var Qr=function(r){return Jr(r)&&Kr(r.valueOf())},re=Hr,ee=Qr;var te=d,ne=function(r){return re(r)||ee(r)},ie=Qr;te(ne,"isPrimitive",Hr),te(ne,"isObject",ie);var ae=Yr,oe=fr.isPrimitive,ue=zr.isPrimitive,ce=ne.isPrimitive;var fe=function(r,e,t){var n,i,a;if(!ae(r)&&!ue(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!oe(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(ue(r)){if(!ue(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,ce(e)){for(a=i;a<n;a++)if(ce(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},se=zr.isPrimitive;var le=function(r){if(!se(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},ve=zr.isPrimitive;var pe=function(r){if(!ve(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},ge=le,de=pe,he=zr.isPrimitive;var me=function(r){return he(r)&&r===de(r)&&r!==ge(r)},be=X,ye=z;var we=function(r){return r==r&&r>ye&&r<be},Ee=fr.isPrimitive;var je=function(r){return Ee(r)&&r>=0},Pe=fr.isObject;var _e=function(r){return Pe(r)&&r.valueOf()>=0},Oe=je,Te=_e;var Ve=d,xe=function(r){return Oe(r)||Te(r)},Se=_e;Ve(xe,"isPrimitive",je),Ve(xe,"isObject",Se);var Ae=xe.isPrimitive,ke=zr.isPrimitive;var Fe=function(r,e){var t,n;if(!ke(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Ae(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},Ie=fr.isPrimitive,Ne=zr.isPrimitive;var Me=Fe,Re=function(r,e,t){var n,i;if(!Ne(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Ne(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!Ie(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var $e=function(r,e,t){var n=!1,i=e-r.length;return i<0||(Re(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+Me("0",i):Me("0",i)+r,n&&(r="-"+r)),r},Ce=me,Be=pe,Ge=le,Le=we,Ze=W.isPrimitive,We=$e;var Xe=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Le(n)){if(!Ze(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=We(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=We(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=Ce(r.specifier)?Be(t):Ge(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},ze=zr.isPrimitive,Ue=/[-\/\\^$*+?.()|[\]{}]/g;var Ye=function(r){var e,t;if(!ze(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Ue,"\\$&"):(e=(e=r.substring(1,t)).replace(Ue,"\\$&"),r=r[0]+e+r.substring(t))},De=/./;var qe=function(r){return"boolean"==typeof r},He=Boolean.prototype.toString;var Je=A,Ke=function(r){try{return He.call(r),!0}catch(r){return!1}},Qe=b();var rt=function(r){return"object"==typeof r&&(r instanceof Boolean||(Qe?Ke(r):"[object Boolean]"===Je(r)))},et=qe,tt=rt;var nt=d,it=function(r){return et(r)||tt(r)},at=rt;nt(it,"isPrimitive",qe),nt(it,"isObject",at);var ot="object"==typeof self?self:null,ut="object"==typeof window?window:null,ct=it.isPrimitive,ft=function(){return new Function("return this;")()},st=ot,lt=ut,vt=r(Object.freeze({__proto__:null}));var pt=function(r){if(arguments.length){if(!ct(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return ft()}if(st)return st;if(lt)return lt;if(vt)return vt;throw new Error("unexpected error. Unable to resolve global object.")},gt=pt(),dt=gt.document&&gt.document.childNodes,ht=Int8Array,mt=De,bt=dt,yt=ht;var wt=function(){return"function"==typeof mt||"object"==typeof yt||"function"==typeof bt};var Et=function(){return/^\s*function\s*([^(]*)/i},jt=Et;d(jt,"REGEXP",Et());var Pt=jt,_t=A;var Ot=Array.isArray?Array.isArray:function(r){return"[object Array]"===_t(r)};var Tt=function(r){return null!==r&&"object"==typeof r};d(Tt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!Ot(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Tt));var Vt=Tt;var xt=A,St=Pt.REGEXP,At=function(r){return Vt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var kt=function(r){var e,t,n;if(("Object"===(t=xt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=St.exec(n.toString()))return e[1]}return At(r)?"Buffer":t},Ft=kt;var It=kt;var Nt=function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ft(r).toLowerCase():e},Mt=function(r){return It(r).toLowerCase()},Rt=wt()?Mt:Nt;var $t=function(r){return"function"===Rt(r)},Ct=RegExp.prototype.exec;var Bt=A,Gt=function(r){try{return Ct.call(r),!0}catch(r){return!1}},Lt=b();var Zt=Ye,Wt=$t,Xt=zr.isPrimitive,zt=function(r){return"object"==typeof r&&(r instanceof RegExp||(Lt?Gt(r):"[object RegExp]"===Bt(r)))};var Ut=me,Yt=pe,Dt=le,qt=function(r,e,t){if(!Xt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Xt(e))e=Zt(e),e=new RegExp(e,"g");else if(!zt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Xt(t)&&!Wt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Ht=we,Jt=W.isPrimitive,Kt=Ir,Qt=/e\+(\d)$/,rn=/e-(\d)$/,en=/^(\d+)$/,tn=/^(\d+)e/,nn=/\.0$/,an=/\.0*e/,on=/(\..*[^0])0*e/;var un=function(r){var e,t,n=parseFloat(r.arg);if(!Ht(n)){if(!Jt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Kt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=qt(t,on,"$1e"),t=qt(t,an,"e"),t=qt(t,nn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=qt(t,Qt,"e+0$1"),t=qt(t,rn,"e-0$1"),r.alternate&&(t=qt(t,en,"$1."),t=qt(t,tn,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Ut(r.specifier)?Yt(t):Dt(t)},cn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var fn=Fe;var sn=zr.isPrimitive,ln=fe,vn=wr,pn=Xe,gn=un,dn=function(r){var e,t,n,i,a;for(e=0,n=[],a=cn.exec(r);a;)(t=r.slice(e,cn.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=cn.lastIndex,a=cn.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},hn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+fn(" ",n):fn(" ",n)+r},mn=$e,bn=String.fromCharCode;var yn=yr.isPrimitive,wn=Fr,En=Ir,jn=function(r){var e,t,n,i,a,o,u,c,f;if(!sn(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=dn(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],sn(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!ln(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,vn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,vn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=pn(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!vn(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=vn(a)?String(n.arg):bn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=gn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=mn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=hn(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o};var Pn=function(r){var e;if(!yn(r))throw new TypeError(jn("invalid argument. Must provide a positive integer. Value: `%s`.",r));return e=wn(r),function(r,t){if(0===arguments.length)return e();return e(100*En((t-r)/t))}},_n=Pn;export{_n as default};
//# sourceMappingURL=mod.js.map
