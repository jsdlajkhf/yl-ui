!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["yl-ui"]=t(require("vue")):e["yl-ui"]=t(e.Vue)}(self,(e=>(()=>{"use strict";var t={789:t=>{t.exports=e}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var u=o[e]={exports:{}};return t[e](u,u.exports,r),u.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{r.r(n),r.d(n,{default:()=>o});var e=r(789);const t=(0,e.defineComponent)({name:"YlCol",props:{tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},xs:{type:Number},sm:{type:Number},md:{type:Number},lg:{type:Number},xl:{type:Number}},setup:function(t,o){var r=o.slots,n=(0,e.inject)("gutter",0),u=(0,e.computed)((function(){var e=[];return["span","offset"].forEach((function(o){var r=t[o];"number"==typeof r&&r>0&&e.push("yl-col-".concat(o,"-").concat(r))})),["xs","sm","md","lg","xl"].forEach((function(o){"number"==typeof t[o]&&e.push("yl-col-".concat(o,"-").concat(t[o]))})),["yl-col"].concat(e)})),p=(0,e.computed)((function(){return n?{paddingLeft:n/2+"px",paddingRight:n/2+"px"}:{}}));return function(){var o;return(0,e.h)(t.tag,{class:u.value,style:p.value},null===(o=r.default)||void 0===o?void 0:o.call(r))}}});t.install=function(e){e.component(t.name,t)};const o=t})(),n})()));