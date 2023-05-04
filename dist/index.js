"use strict";(self.webpackChunkwebpack_up=self.webpackChunkwebpack_up||[]).push([[826],{426:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"* {\r\n  font-family: 'Roboto', sans-serif;\r\n  line-height: 30px;\r\n  font-weight: 100;\r\n  font-size: small;\r\n}\r\nbody {\r\n  background: rgb(255, 247, 247);\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n.main {\r\n  width: 50%;\r\n  height: auto;\r\n  background: #fff;\r\n  margin-top: 80px;\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\r\n}\r\nul {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.top {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-weight: 600;\r\n}\r\nli {\r\n  padding: 2px 8px;\r\n  height: 40px;\r\n  font-weight: 400;\r\n  border-bottom: 1px solid #ccc;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\ninput {\r\n  border: none;\r\n  margin: 0;\r\n  width: 98%;\r\n  height: 100%;\r\n  padding-left: 2px;\r\n  font-style: italic;\r\n}\r\nimg {\r\n  height: 18px;\r\n  width: 18px;\r\n}\r\n.newlist {\r\n  display: flex;\r\n  padding: 4px 8px;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.check {\r\n  width: 18px;\r\n  height: 18px;\r\n}\r\n.text {\r\n  width: 90%;\r\n}\r\n.text.complete {\r\n  text-decoration: line-through;\r\n}\r\n.newlist.complete li {\r\n  text-decoration: line-through;\r\n}\r\n.delete {\r\n  border-style: none;\r\n  width: 18px;\r\n  height: 18px;\r\n}\r\n.clear {\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: rgba(233, 217, 217, 0.3);\r\n}",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],p=t.base?s[0]+t.base:s[0],l=i[p]||0,u="".concat(p," ").concat(l);i[p]=l+1;var d=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var h=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=r(i[a]);e[c].references--}for(var s=t(n,o),p=0;p<i.length;p++){var l=r(i[p]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},987:(n,e,r)=>{var t=r(379),o=r.n(t),i=r(795),a=r.n(i),c=r(569),s=r.n(c),p=r(565),l=r.n(p),u=r(216),d=r.n(u),f=r(589),h=r.n(f),m=r(426),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=d(),o()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals}},n=>{n(n.s=987)}]);