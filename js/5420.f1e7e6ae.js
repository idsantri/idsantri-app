"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[5420],{25420:(e,a,l)=>{l.r(a),l.d(a,{default:()=>c});l(67590);var n=l(51347),t=l(21734),i=l(34187);const s=(0,n.Lk)("div",{class:"text-h6 text-green-10"},"Data Pengguna",-1),o={__name:"UserPage",setup(e){const a=(0,i.KR)(""),l=(0,i.KR)(!1),o=(0,i.KR)([]),r=[{name:"name",label:"Nama",align:"left",field:"name",sortable:!0},{name:"username",label:"Username",align:"left",field:"username",sortable:!0},{name:"email",label:"Email",align:"left",field:"email",sortable:!0},{name:"roles",label:"Group (Role)",align:"left",field:"roles",sortable:!0},{name:"confirmed_at",label:"Konfirmasi",align:"left",field:"confirmed_at",format:e=>""+(e?"Ya":"Tidak"),sortable:!0},{name:"verified",label:"Verikasi",align:"left",field:"email_verified_at",format:e=>""+(e?"Ya":"Tidak"),sortable:!0}];async function u(){const e=await(0,t.A)({endPoint:"users",loading:l});o.value=e.users}return(0,n.sV)((async()=>{await u()})),(e,t)=>{const i=(0,n.g2)("q-icon"),u=(0,n.g2)("q-input"),d=(0,n.g2)("q-table"),m=(0,n.g2)("q-page");return(0,n.uX)(),(0,n.Wv)(m,{class:"q-pa-sm"},{default:(0,n.k6)((()=>[(0,n.bF)(d,{rows:o.value,columns:r,"row-key":"name",loading:l.value,filter:a.value,onRowClick:t[1]||(t[1]=(a,l,n)=>e.$router.push(`/settings/users/${l.id}`)),"rows-per-page-options":[10,25,50,75,100,0]},{"top-left":(0,n.k6)((()=>[s])),"top-right":(0,n.k6)((()=>[(0,n.bF)(u,{outlined:"",dense:"",debounce:"300",modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),placeholder:"Cari"},{append:(0,n.k6)((()=>[(0,n.bF)(i,{name:"search"})])),_:1},8,["modelValue"])])),_:1},8,["rows","loading","filter"])])),_:1})}}};var r=l(75013),u=l(27010),d=l(46395),m=l(93933),f=l(272),g=l.n(f);const p=o,c=p;g()(o,"components",{QPage:r.A,QTable:u.A,QInput:d.A,QIcon:m.A})}}]);