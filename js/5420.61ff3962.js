"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[5420],{25420:(e,a,l)=>{l.r(a),l.d(a,{default:()=>v});l(67590);var n=l(51347),t=l(58094),o=l(34187);const i={__name:"UserPage",setup(e){const a=(0,o.KR)(""),l=(0,o.KR)(!1),i=(0,o.KR)([]),s=[{name:"name",label:"Nama",align:"left",field:"name",sortable:!0},{name:"username",label:"Username",align:"left",field:"username",sortable:!0},{name:"email",label:"Email",align:"left",field:"email",sortable:!0},{name:"roles",label:"Group (Role)",align:"left",field:"roles",sortable:!0},{name:"confirmed_at",label:"Konfirmasi",align:"left",field:"confirmed_at",format:e=>""+(e?"Ya":"Tidak"),sortable:!0},{name:"verified",label:"Verikasi",align:"left",field:"email_verified_at",format:e=>""+(e?"Ya":"Tidak"),sortable:!0}];async function r(){const e=await(0,t.A)({endPoint:"users",loading:l});i.value=e.users}return(0,n.sV)((async()=>{await r()})),(e,t)=>{const o=(0,n.g2)("q-toolbar-title"),r=(0,n.g2)("q-toolbar"),d=(0,n.g2)("q-card-section"),u=(0,n.g2)("q-icon"),g=(0,n.g2)("q-input"),m=(0,n.g2)("q-table"),b=(0,n.g2)("q-card"),c=(0,n.g2)("q-page");return(0,n.uX)(),(0,n.Wv)(c,{class:"q-pa-sm"},{default:(0,n.k6)((()=>[(0,n.bF)(b,null,{default:(0,n.k6)((()=>[(0,n.bF)(d,{class:"bg-green-8 no-padding"},{default:(0,n.k6)((()=>[(0,n.bF)(r,{class:"no-padding no-margin"},{default:(0,n.k6)((()=>[(0,n.bF)(o,{class:"text-subtitle1 q-ml-sm text-green-11"},{default:(0,n.k6)((()=>[(0,n.eW)(" Data Pengguna ")])),_:1})])),_:1})])),_:1}),(0,n.bF)(m,{rows:i.value,columns:s,"row-key":"name",loading:l.value,filter:a.value,onRowClick:t[1]||(t[1]=(a,l,n)=>e.$router.push(`/settings/users/${l.id}`)),"rows-per-page-options":[10,25,50,75,100,0]},{"top-right":(0,n.k6)((()=>[(0,n.bF)(g,{outlined:"",dense:"",debounce:"300",modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),placeholder:"Cari"},{append:(0,n.k6)((()=>[(0,n.bF)(u,{name:"search"})])),_:1},8,["modelValue"])])),_:1},8,["rows","loading","filter"])])),_:1})])),_:1})}}};var s=l(75013),r=l(83341),d=l(60222),u=l(66739),g=l(4629),m=l(22677),b=l(27010),c=l(46395),f=l(93933),p=l(272),k=l.n(p);const _=i,v=_;k()(i,"components",{QPage:s.A,QCard:r.A,QCardSection:d.A,QToolbar:u.A,QToolbarTitle:g.A,QBtn:m.A,QTable:b.A,QInput:c.A,QIcon:f.A})}}]);