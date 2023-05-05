"use strict";(self.webpackChunkwebpack_up=self.webpackChunkwebpack_up||[]).push([[826],{426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"* {\r\n  font-family: 'Roboto', sans-serif;\r\n  line-height: 30px;\r\n  font-weight: 100;\r\n  font-size: small;\r\n}\r\n\r\nbody {\r\n  background: rgb(255, 247, 247);\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\n.main {\r\n  width: 50%;\r\n  height: auto;\r\n  background: #fff;\r\n  margin-top: 80px;\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.top {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-weight: 600;\r\n}\r\n\r\n.action {\r\n  width: 100%;\r\n}\r\nli {\r\n  padding: 2px 8px;\r\n  height: 40px;\r\n  font-weight: 400;\r\n  border-bottom: 1px solid #ccc;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n}\r\n\r\ninput[type=\"checkbox\" i] {\r\n  width: 6%;\r\n}\r\n\r\n.inputtext {\r\n  font-size: 15px;\r\n  width: 90%;\r\n}\r\n\r\n.button {\r\n  border: none;\r\n}\r\nimg {\r\n  height: 18px;\r\n  width: 18px;\r\n}\r\n\r\n.newlist {\r\n  display: flex;\r\n  padding: 4px 8px;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.check {\r\n  width: 18px;\r\n  height: 18px;\r\n}\r\n\r\n.text {\r\n  width: 90%;\r\n}\r\n\r\n.text.complete {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.newlist.complete li {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.delete {\r\n  border-style: none;\r\n  width: 18px;\r\n  height: 18px;\r\n}\r\n\r\n.clear {\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: rgba(233, 217, 217, 0.3);\r\n}\r\n",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var p=t(i[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},987:(n,e,t)=>{var r=t(379),o=t.n(r),i=t(795),a=t.n(i),c=t(569),s=t.n(c),l=t(565),p=t.n(l),d=t(216),u=t.n(d),f=t(589),h=t.n(f),m=t(426),x={};x.styleTagTransform=h(),x.setAttributes=p(),x.insert=s().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=u(),o()(m.Z,x),m.Z&&m.Z.locals&&m.Z.locals;const v=[{title:"Watch the Tvs",completed:!1,index:1},{title:"Read Js books",completed:!1,index:2},{title:"Play the Sudoku",completed:!1,index:3},{title:"Complete Weekly Project for the week",completed:!1,index:4},{title:"work on Personal soft skilss",completed:!1,index:5}].map((n=>`\n            <li class="fill task-list ${n.completed?"completed":""}" data-id="${n.id}">\n              <input type="checkbox" ${n.completed?"checked":""} class="checkbox"/>\n              <input type="text" value="${n.title}" class="inputtext" id="${n.id}"/>\n              <button type="button"><i class="fa-solid fa-trash-can"></i></button>\n            </li>\n          `)).join("");document.querySelector(".list").innerHTML+=v}},n=>{n(n.s=987)}]);