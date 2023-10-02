"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=t(function(w,s){
var x=require('@stdlib/stats-base-dvariancepn/dist'),f=require('@stdlib/math-base-special-sqrt/dist');function j(e,r,a,i){return f(x(e,r,a,i))}s.exports=j
});var d=t(function(z,v){
var m=require('@stdlib/stats-base-dvariancepn/dist').ndarray,l=require('@stdlib/math-base-special-sqrt/dist');function R(e,r,a,i,y){return l(m(e,r,a,i,y))}v.exports=R
});var o=t(function(A,p){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=u(),E=d();_(q,"ndarray",E);p.exports=q
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=o(),n,c=b(O(__dirname,"./native.js"));g(c)?n=h:n=c;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
