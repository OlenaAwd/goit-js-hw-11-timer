parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Tnu0":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";function t(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}require("./styles.css");const e=t=>({daysRef:document.querySelector(`${t} span[data-value="days"]`),hoursRef:document.querySelector(`${t} span[data-value="hours"]`),minsRef:document.querySelector(`${t} span[data-value="mins"]`),secsRef:document.querySelector(`${t} span[data-value="secs"]`)});class s{constructor({selector:e,targetDate:s}){t(this,"pad",t=>String(t).padStart(2,"0")),this.selector=e,this.targetDate=s,this.intervalId=null}count(t){const s=this.pad(Math.floor(t/864e5)),a=this.pad(Math.floor(t%864e5/36e5)),r=this.pad(Math.floor(t%36e5/6e4)),n=this.pad(Math.floor(t%6e4/1e3));if(t>0){const{daysRef:t,hoursRef:o,minsRef:i,secsRef:l}=e(this.selector);t.textContent=s,o.textContent=a,i.textContent=r,l.textContent=n}else clearInterval(this.intervalId)}timer(){let t=Date.now();const e=this.targetDate-t;this.count(e)}start(){this.timer(),this.intervalId=setInterval(()=>{this.timer()},1e3)}}const a=new s({selector:"#timer-1",targetDate:new Date("Sep 25, 2025")});a.start();
},{"./styles.css":"Tnu0"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.f9ed41a3.js.map