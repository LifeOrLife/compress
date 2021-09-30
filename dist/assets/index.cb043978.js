import{d as S,r as _,o as $,a as D,p as I,b as y,c as z,e as p,w as A,f as B,g as M,v as U,t as x,F as k,h as P,i as H}from"./vendor.120ce226.js";const K=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}};K();var R={name:"drag",mounted(e,s){e.setAttribute("draggable","true")}},L=S({emits:["addFile"],setup(e,s){const l=_(null),i=()=>{if(l){const o=l.value;if(o){const a=o.files;if(a==null?void 0:a.length){const c=a[0];s.emit("addFile",c)}}}},t=["drop","drgaleave","dragenter","dragover"],r=o=>{o.preventDefault()};$(()=>{const o=l.value;o&&o.addEventListener("change",i),t.forEach(n=>{const a=n,c=r;document.addEventListener(a,c)})}),D(()=>{const o=l.value;o&&o.removeEventListener("change",i),t.forEach(n=>{const a=n,c=r;document.removeEventListener(a,c)})});const d=o=>{var a;const n=(a=o.dataTransfer)==null?void 0:a.files;if(n==null?void 0:n.length){const c=n[0];s.emit("addFile",c)}else console.log("\u83B7\u53D6\u6587\u4EF6\u5931\u8D25");g(o)},v=o=>{o.target.classList.add("drag")},g=o=>{o.target.classList.remove("drag")};return{file:l,dropFile:d,dragEnter:v,dragLeave:g}}});const T=A("data-v-e2cddd32");I("data-v-e2cddd32");const V={for:"image-load",class:"label"},X=p("div",{class:"tx"},"\u4E0A\u4F20\u6587\u4EF6",-1),q={type:"file",accept:"image/*",id:"image-load",ref:"file"};y();const G=T((e,s,l,i,t,r)=>(B(),z("div",{class:"upload-con",draggable:"true",onDrop:s[1]||(s[1]=(...d)=>e.dropFile&&e.dropFile(...d)),onDragenter:s[2]||(s[2]=(...d)=>e.dragEnter&&e.dragEnter(...d)),onDragleave:s[3]||(s[3]=(...d)=>e.dragLeave&&e.dragLeave(...d))},[p("label",V,[X,p("input",q,null,512)])],32)));L.render=G;L.__scopeId="data-v-e2cddd32";function J(e,s,l){s=s||.3;var i=document.createElement("canvas"),t=i.getContext("2d"),r=document.createElement("canvas"),d=r.getContext("2d"),v=e.src.length,g=e.width,o=e.height,n;(n=g*o/4e6)>1?(n=Math.sqrt(n),g/=n,o/=n):n=1,i.width=g,i.height=o,t.fillStyle="#fff",t.fillRect(0,0,i.width,i.height);var a;if((a=g*o/1e6)>1){a=~~(Math.sqrt(a)+1);var c=~~(g/a),m=~~(o/a);r.width=c,r.height=m;for(var b=0;b<a;b++)for(var u=0;u<a;u++)d.drawImage(e,b*c*n,u*m*n,c*n,m*n,0,0,c,m),t.drawImage(r,b*c,u*m,c,m)}else t.drawImage(e,0,0,g,o);l?l=`image/${l}`:l="image/webp";var f=i.toDataURL(l,s),h=~~(100*(v-f.length)/v);return h<=0&&(l="image/jpeg",f=i.toDataURL(l,s),h=~~(100*(v-f.length)/v)),console.log("\u538B\u7F29\u524D\uFF1A"+v),console.log("\u538B\u7F29\u540E\uFF1A"+f.length),console.log("\u538B\u7F29\u7387\uFF1A"+h+"%"),r.width=r.height=i.width=i.height=0,{before:{size:v},after:{size:f.length,str:f}}}function C(e){return e<1024*1024?(e/1024).toFixed(1)+"kb":(e/1024/1024).toFixed(1)+"mb"}var w=S({components:{Upload:L},setup(){const e=_(""),s=_(null),l=_(""),i=_(""),t=_(""),r=u=>{const f=new FileReader;f.onload=function(){if(s&&s.value){const h=s.value;e.value=f.result,h.onload=function(){const E=v.value.getBoundingClientRect();n=E.width,o=E.left;const F=J(h);l.value=C(F.before.size),i.value=F.after.str,t.value=C(F.after.size)}}},f.readAsDataURL(u)},d=_(null),v=_(null);let g=!1,o,n;const a=()=>{g=!0},c=()=>{g=!1},m=u=>{if(g){const h=(u.clientX-o)/n*100+"%";v.value.style.setProperty("--left",h)}},b=u=>{};return $(()=>{const u=d.value,f=v.value;u&&(u.addEventListener("mousedown",a),f.addEventListener("mousemove",m),document.addEventListener("mouseup",c))}),D(()=>{const u=d.value,f=v.value;u&&(u.removeEventListener("mousedown",a),f.removeEventListener("mousemove",m),document.removeEventListener("mouseup",c))}),{getFile:r,beforeImg:s,beforeSrc:e,beforeSize:l,afterSrc:i,afterSize:t,moveLine:d,handleLine:b,showBox:v}}});const Q=A("data-v-152ebf58");I("data-v-152ebf58");const W={class:"con"},Y={class:"img-show",style:{"--left":"50%"},ref:"showBox"},Z={class:"before"},j={class:"line",ref:"moveLine"},ee={class:"after"};y();const te=Q((e,s,l,i,t,r)=>{const d=P("Upload");return B(),z(k,null,[p(d,{onAddFile:e.getFile},null,8,["onAddFile"]),p("div",W,[p("div",Y,[p("div",Z,[p("img",{src:e.beforeSrc,alt:"",ref:"beforeImg",draggable:"false"},null,8,["src"]),M(p("div",{class:"before-text"}," \u538B\u7F29\u524D"+x(e.beforeSize),513),[[U,e.beforeSrc]])]),p("div",j,null,512),p("div",ee,[M(p("div",{class:"after-text"}," \u538B\u7F29\u540E"+x(e.afterSize),513),[[U,e.afterSrc]]),p("img",{src:e.afterSrc,alt:"",draggable:"false"},null,8,["src"])])],512)])],64)});w.render=te;w.__scopeId="data-v-152ebf58";const N=H(w);N.directive(R.name,R);N.mount("#app");