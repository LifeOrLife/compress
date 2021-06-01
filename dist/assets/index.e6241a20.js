import{d as e,r as t,o as a,a as n,c as s,b as o,w as l,p as r,e as i,f as c,g as d,h as v,v as f,t as u,F as m,i as g}from"./vendor.910ccf44.js";var h=e({emits:["addFile"],setup(e,s){const o=t(null),l=()=>{if(o){const e=o.value;if(e){const t=e.files;if(null==t?void 0:t.length){const e=t[0];s.emit("addFile",e)}}}};return a((()=>{const e=o.value;if(e){e.addEventListener("change",l)}})),n((()=>{const e=o.value;if(e){e.removeEventListener("change",l)}})),{file:o}}});const p=l();r("data-v-279f8e4b");const w={class:"upload-con"},b={for:"image-load",class:"label"},L=o("div",{class:"tx"},"上传文件",-1),E={type:"file",accept:"image/*",id:"image-load",ref:"file"};i();const S=p(((e,t,a,n,l,r)=>(c(),s("div",w,[o("label",b,[L,o("input",E,null,512)])]))));function F(e){return e<1048576?(e/1024).toFixed(1)+"kb":(e/1024/1024).toFixed(1)+"mb"}h.render=S,h.__scopeId="data-v-279f8e4b";var x=e({components:{Upload:h},setup(){const e=t(""),s=t(null),o=t(""),l=t(""),r=t(""),i=t(null),c=t(null);let d,v,f=!1;const u=()=>{f=!0},m=e=>{},g=()=>{f=!1},h=e=>{if(f){const t=(e.clientX-d)/v*100+"%";c.value.style.setProperty("--left",t)}};return a((()=>{const e=i.value,t=c.value;e&&(e.addEventListener("mousedown",u),t.addEventListener("mousedown",m),t.addEventListener("mousemove",h),document.addEventListener("mouseup",g))})),n((()=>{const e=i.value,t=c.value;e&&(e.removeEventListener("mousedown",u),t.removeEventListener("mousedown",m),t.removeEventListener("mousemove",h),document.removeEventListener("mouseup",g))})),{getFile:t=>{const a=new FileReader;a.onload=function(){if(s&&s.value){const t=s.value;e.value=a.result,t.onload=function(){const e=c.value.getBoundingClientRect();v=e.width,d=e.left;const a=function(e,t,a){t=t||.3;var n,s,o=document.createElement("canvas"),l=o.getContext("2d"),r=document.createElement("canvas"),i=r.getContext("2d"),c=e.src.length,d=e.width,v=e.height;if((n=d*v/4e6)>1?(d/=n=Math.sqrt(n),v/=n):n=1,o.width=d,o.height=v,l.fillStyle="#fff",l.fillRect(0,0,o.width,o.height),(s=d*v/1e6)>1){var f=~~(d/(s=~~(Math.sqrt(s)+1))),u=~~(v/s);r.width=f,r.height=u;for(var m=0;m<s;m++)for(var g=0;g<s;g++)i.drawImage(e,m*f*n,g*u*n,f*n,u*n,0,0,f,u),l.drawImage(r,m*f,g*u,f,u)}else l.drawImage(e,0,0,d,v);a=a?`image/${a}`:"image/webp";var h=o.toDataURL(a,t),p=~~(100*(c-h.length)/c);return p<=0&&(a="image/jpeg",p=~~(100*(c-(h=o.toDataURL(a,t)).length)/c)),console.log("压缩前："+c),console.log("压缩后："+h.length),console.log("压缩率："+p+"%"),r.width=r.height=o.width=o.height=0,{before:{size:c},after:{size:h.length,str:h}}}(t);o.value=F(a.before.size),l.value=a.after.str,r.value=F(a.after.size)}}},a.readAsDataURL(t)},beforeImg:s,beforeSrc:e,beforeSize:o,afterSrc:l,afterSize:r,moveLine:i,handleLine:e=>{},showBox:c}}});const z=l();r("data-v-4721144c");const I={class:"con"},R={class:"img-show",style:{"--left":"50%"},ref:"showBox"},y={class:"before"},U={class:"line",ref:"moveLine"},_={class:"after"};i();const A=z(((e,t,a,n,l,r)=>{const i=d("Upload");return c(),s(m,null,[o(i,{onAddFile:e.getFile},null,8,["onAddFile"]),o("div",I,[o("div",R,[o("div",y,[o("img",{src:e.beforeSrc,alt:"",ref:"beforeImg"},null,8,["src"]),v(o("div",{class:"before-text"}," 压缩前"+u(e.beforeSize),513),[[f,e.beforeSrc]])]),o("div",U,null,512),o("div",_,[v(o("div",{class:"after-text"}," 压缩后"+u(e.afterSize),513),[[f,e.afterSrc]]),o("img",{src:e.afterSrc,alt:""},null,8,["src"])])],512)])],64)}));x.render=A,x.__scopeId="data-v-4721144c",g(x).mount("#app");
