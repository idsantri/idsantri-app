"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[7296],{7296:(e,l,a)=>{a.r(l),a.d(l,{default:()=>F});var t=a(1347),n=a(8633),o=a(4187),u=a(6138);const s=(0,t.Lk)("h1",{class:"text-subtitle1"},"Upload File Excel",-1),r=(0,t.Lk)("br",null,null,-1),c=(0,t.Lk)("br",null,null,-1),p={__name:"testPage",setup(e){const l=(0,o.KR)(),a=(0,o.KR)([]),p=e=>{const l=e.target.files[0],t=new FileReader;t.onload=e=>{const l=e.target.result,t=(0,u.LF)(l,{type:"array"}),n=t.SheetNames[0],o=t.Sheets[n];a.value=u.Wp.sheet_to_json(o),console.log(a.value)},t.readAsArrayBuffer(l)};return(0,t.wB)(l,(e=>{e||(a.value=[])})),(e,o)=>{const u=(0,t.g2)("q-icon"),d=(0,t.g2)("q-file"),i=(0,t.g2)("q-card-section"),b=(0,t.g2)("q-table"),k=(0,t.g2)("q-card"),g=(0,t.g2)("q-page");return(0,t.uX)(),(0,t.Wv)(g,null,{default:(0,t.k6)((()=>[(0,t.bF)(k,null,{default:(0,t.k6)((()=>[(0,t.bF)(i,null,{default:(0,t.k6)((()=>[s,(0,t.bF)(d,{onInput:p,outlined:"","bottom-slots":"",modelValue:l.value,"onUpdate:modelValue":o[2]||(o[2]=e=>l.value=e),label:"Label",counter:""},{prepend:(0,t.k6)((()=>[(0,t.bF)(u,{name:"cloud_upload",onClick:o[0]||(o[0]=(0,n.D$)((()=>{}),["stop","prevent"]))})])),append:(0,t.k6)((()=>[(0,t.bF)(u,{name:"close",onClick:o[1]||(o[1]=(0,n.D$)((e=>l.value=null),["stop","prevent"])),class:"cursor-pointer"})])),hint:(0,t.k6)((()=>[(0,t.eW)("Hanya membaca sheet pertama ")])),_:1},8,["modelValue"]),r,c])),_:1}),(0,t.bF)(b,{rows:a.value},null,8,["rows"])])),_:1})])),_:1})}}};var d=a(5013),i=a(3341),b=a(222),k=a(5621),g=a(3933),m=a(7010),v=a(272),h=a.n(v);const _=p,F=_;h()(p,"components",{QPage:d.A,QCard:i.A,QCardSection:b.A,QFile:k.A,QIcon:g.A,QTable:m.A})}}]);