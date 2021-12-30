import{d as B,r as p,o as M,a as z,b as E,c as L,e as c,p as A,f as C,g as $,w as D,v as P,h as N,t as k,F as H,i as T}from"./vendor.7b6b268e.js";const K=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const t of a.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}};K();var V={name:"drag",mounted(e,n){e.setAttribute("draggable","true")}};var w=(e,n)=>{const s=e.__vccOpts||e;for(const[i,o]of n)s[i]=o;return s};const X=B({emits:["addFile"],setup(e,n){const s=p(null),i=()=>{if(s){const r=s.value;if(r){const d=r.files;if(d==null?void 0:d.length){const v=d[0];n.emit("addFile",v)}}}},o=["drop","drgaleave","dragenter","dragover"],a=r=>{r.preventDefault()};M(()=>{const r=s.value;r&&r.addEventListener("change",i),o.forEach(l=>{const d=l,v=a;document.addEventListener(d,v)})}),z(()=>{const r=s.value;r&&r.removeEventListener("change",i),o.forEach(l=>{const d=l,v=a;document.removeEventListener(d,v)})});const t=r=>{var d;const l=(d=r.dataTransfer)==null?void 0:d.files;if(l==null?void 0:l.length){const v=l[0];n.emit("addFile",v)}else console.log("\u83B7\u53D6\u6587\u4EF6\u5931\u8D25");m(r)},u=r=>{r.target.classList.add("drag")},m=r=>{r.target.classList.remove("drag")};return{file:s,dropFile:t,dragEnter:u,dragLeave:m}}}),q=e=>(A("data-v-8bf77912"),e=e(),C(),e),G={for:"image-load",class:"label"},J=q(()=>c("div",{class:"tx"},"\u4E0A\u4F20\u6587\u4EF6",-1)),Q={type:"file",accept:"image/*",id:"image-load",ref:"file"};function W(e,n,s,i,o,a){return E(),L("div",{class:"upload-con",draggable:"true",onDrop:n[0]||(n[0]=(...t)=>e.dropFile&&e.dropFile(...t)),onDragenter:n[1]||(n[1]=(...t)=>e.dragEnter&&e.dragEnter(...t)),onDragleave:n[2]||(n[2]=(...t)=>e.dragLeave&&e.dragLeave(...t))},[c("label",G,[J,c("input",Q,null,512)])],32)}var Y=w(X,[["render",W],["__scopeId","data-v-8bf77912"]]);const Z={},j={width:"1em",height:"1em",viewBox:"0 0 24 24"},ee=c("path",{d:"M5 13v-1h13.01L18 13H5z",fill:"currentColor"},null,-1),te=[ee];function oe(e,n){return E(),L("svg",j,te)}var se=w(Z,[["render",oe]]);const ne={},ae={width:"1em",height:"1em",viewBox:"0 0 24 24"},re=c("path",{d:"M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6H5z",fill:"currentColor"},null,-1),le=[re];function ie(e,n){return E(),L("svg",ae,le)}var de=w(ne,[["render",ie]]);const ce={class:"num-btn-box"},ue=B({props:{step:{type:Number,default:.1},max:{type:Number,default:1},min:{type:Number,default:0},modelValue:{type:Number}},emits:["change"],setup(e,{emit:n}){const s=e,i=p(s.modelValue),o=a=>{let t=i.value;const u=s.step||1;if(a==="minus"){if(s.min!==void 0&&t<=s.min)return;t-=u}else{if(s.max&&t>=s.max)return;t+=u}t=+t.toFixed(2),i.value=t,n("change",t)};return(a,t)=>(E(),L("div",ce,[c("div",{class:"minus btn",onClick:t[0]||(t[0]=u=>o("minus"))},[$(se)]),D(c("input",{"onUpdate:modelValue":t[1]||(t[1]=u=>i.value=u),class:"value"},null,512),[[P,i.value]]),c("div",{class:"add btn",onClick:t[2]||(t[2]=u=>o("add"))},[$(de)])]))}});var ve=w(ue,[["__scopeId","data-v-756a435e"]]);function U(e,n,s){n=n||.3;var i=document.createElement("canvas"),o=i.getContext("2d"),a=document.createElement("canvas"),t=a.getContext("2d"),u=e.src.length,m=e.width,r=e.height,l;(l=m*r/4e6)>1?(l=Math.sqrt(l),m/=l,r/=l):l=1,i.width=m,i.height=r,o.fillStyle="#fff",o.fillRect(0,0,i.width,i.height);var d;if((d=m*r/1e6)>1){d=~~(Math.sqrt(d)+1);var v=~~(m/d),g=~~(r/d);a.width=v,a.height=g;for(var F=0;F<d;F++)for(var x=0;x<d;x++)t.drawImage(e,F*v*l,x*g*l,v*l,g*l,0,0,v,g),o.drawImage(a,F*v,x*g,v,g)}else o.drawImage(e,0,0,m,r);s?s=`image/${s}`:s="image/webp";var b=i.toDataURL(s,n),f=~~(100*(u-b.length)/u);return f<=0&&(s="image/jpeg",b=i.toDataURL(s,n),f=~~(100*(u-b.length)/u)),console.log("\u538B\u7F29\u524D\uFF1A"+u),console.log("\u538B\u7F29\u540E\uFF1A"+b.length),console.log("\u538B\u7F29\u7387\uFF1A"+f+"%"),a.width=a.height=i.width=i.height=0,{before:{size:u},after:{size:b.length,str:b}}}function I(e){return e<1024*1024?(e/1024).toFixed(1)+"kb":(e/1024/1024).toFixed(1)+"mb"}const fe=e=>(A("data-v-760aade2"),e=e(),C(),e),_e={class:"con"},me={class:"before"},pe=["src"],ge={class:"after"},he=["src"],be={class:"params"},Fe={class:"encoder"},xe=fe(()=>c("span",{class:"des"},"\u56FE\u7247\u538B\u7F29\u8D28\u91CF",-1)),Ee=B({setup(e){const n=p(""),s=p(),i=p(""),o=p(""),a=p(""),t=p(null),u=f=>{const _=new FileReader;_.onload=()=>{if(s&&s.value){const h=s.value;n.value=_.result,h.onload=()=>{const S=t.value.getBoundingClientRect();d=S.width,l=S.left;const y=U(h);i.value=I(y.before.size),o.value=y.after.str,a.value=I(y.after.size)}}},_.readAsDataURL(f)},m=p(null);let r=!1,l,d;const v=()=>{r=!0},g=()=>{r=!1},F=f=>{if(r){const h=(f.clientX-l)/d*100+"%";t.value.style.setProperty("--left",h)}};M(()=>{const f=m.value,_=t.value;f&&(f.addEventListener("mousedown",v),_.addEventListener("mousemove",F),document.addEventListener("mouseup",g))}),z(()=>{const f=m.value,_=t.value;f&&(f.removeEventListener("mousedown",v),_.removeEventListener("mousemove",F),document.removeEventListener("mouseup",g))});const x=p(.92),b=f=>{const _=s.value;if(!_)return;const h=U(_,f);o.value=h.after.str,a.value=I(h.after.size)};return(f,_)=>(E(),L(H,null,[$(Y,{onAddFile:u}),c("div",_e,[c("div",{class:"img-show",style:{"--left":"50%"},ref_key:"showBox",ref:t},[c("div",me,[c("img",{src:n.value,alt:"",ref_key:"beforeImg",ref:s,draggable:"false"},null,8,pe),D(c("div",{class:"before-text"}," \u538B\u7F29\u524D"+k(i.value),513),[[N,n.value]])]),c("div",{class:"line",ref_key:"moveLine",ref:m},null,512),c("div",ge,[D(c("div",{class:"after-text"}," \u538B\u7F29\u540E"+k(a.value),513),[[N,o.value]]),c("img",{src:o.value,alt:"",draggable:"false"},null,8,he)])],512),c("div",be,[c("div",Fe,[xe,$(ve,{modelValue:x.value,"onUpdate:modelValue":_[0]||(_[0]=h=>x.value=h),onChange:b,min:0,max:1,step:.01},null,8,["modelValue","step"])])])])],64))}});var Le=w(Ee,[["__scopeId","data-v-760aade2"]]);const R=T(Le);R.directive(V.name,V);R.mount("#app");
