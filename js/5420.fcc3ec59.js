"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[5420],{25420:(e,a,l)=>{l.r(a),l.d(a,{default:()=>_});l(67590);var n=l(51347),t=l(58094),i=l(34187);const s={__name:"UserPage",setup(e){const a=(0,i.KR)(""),l=(0,i.KR)(!1),s=(0,i.KR)([]),o=[{name:"name",label:"Nama",align:"left",field:"name",sortable:!0},{name:"username",label:"Username",align:"left",field:"username",sortable:!0},{name:"email",label:"Email",align:"left",field:"email",sortable:!0},{name:"roles",label:"Group (Role)",align:"left",field:"roles",sortable:!0},{name:"confirmed_at",label:"Konfirmasi",align:"left",field:"confirmed_at",format:e=>""+(e?"Ya":"Tidak"),sortable:!0},{name:"verified",label:"Verikasi",align:"left",field:"email_verified_at",format:e=>""+(e?"Ya":"Tidak"),sortable:!0}];async function r(){const e=await(0,t.A)({endPoint:"users",loading:l});s.value=e.users}return(0,n.sV)((async()=>{await r()})),(e,t)=>{const i=(0,n.g2)("q-space"),r=(0,n.g2)("q-btn"),u=(0,n.g2)("q-card-section"),d=(0,n.g2)("q-icon"),c=(0,n.g2)("q-input"),m=(0,n.g2)("q-table"),b=(0,n.g2)("q-card"),g=(0,n.g2)("q-page");return(0,n.uX)(),(0,n.Wv)(g,{class:"q-pa-sm"},{default:(0,n.k6)((()=>[(0,n.bF)(b,null,{default:(0,n.k6)((()=>[(0,n.bF)(u,{class:"q-pa-sm bg-green-8 text-green-11 text-subtitle1 flex"},{default:(0,n.k6)((()=>[(0,n.eW)(" Data Pengguna "),(0,n.bF)(i),(0,n.bF)(r,{"no-caps":"",label:"Kembali",icon:"reply",dense:"",class:"q-px-md",outline:"",onClick:t[0]||(t[0]=a=>e.$router.go(-1))})])),_:1}),(0,n.bF)(m,{rows:s.value,columns:o,"row-key":"name",loading:l.value,filter:a.value,onRowClick:t[2]||(t[2]=(a,l,n)=>e.$router.push(`/settings/users/${l.id}`)),"rows-per-page-options":[10,25,50,75,100,0]},{"top-right":(0,n.k6)((()=>[(0,n.bF)(c,{outlined:"",dense:"",debounce:"300",modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),placeholder:"Cari"},{append:(0,n.k6)((()=>[(0,n.bF)(d,{name:"search"})])),_:1},8,["modelValue"])])),_:1},8,["rows","loading","filter"])])),_:1})])),_:1})}}};var o=l(75013),r=l(83341),u=l(60222),d=l(5873),c=l(22677),m=l(27010),b=l(46395),g=l(93933),p=l(272),f=l.n(p);const k=s,_=k;f()(s,"components",{QPage:o.A,QCard:r.A,QCardSection:u.A,QSpace:d.A,QBtn:c.A,QTable:m.A,QInput:b.A,QIcon:g.A})}}]);