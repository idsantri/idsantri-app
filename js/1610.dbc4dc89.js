"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[1610],{1610:(a,e,t)=>{t.r(e),t.d(e,{default:()=>m});t(7590);var l=t(1347),n=t(1734),r=t(4187),s=t(455);const i=(0,l.Lk)("div",{class:"text-subtitle1 text-green-10"}," Data Aparatur Madrasah ",-1),o={__name:"AparaturContent",setup(a){const e=(0,s.lq)(),t=(0,r.KR)(""),o={thAjaranH:e.params.thAjaranH,tingkatId:e.params.tingkatId},u=(0,r.KR)([]);(0,l.sV)((async()=>{if(o.thAjaranH&&o.tingkatId){const a=await(0,n.A)({endPoint:"aparatur-madrasah",params:{th_ajaran_h:o.thAjaranH,tingkat_id:o.tingkatId}});u.value=a.aparatur_madrasah}else u.value=[]}));const d=[{name:"nama",label:"Nama",align:"left",field:a=>`${a.nama} (${a.sex})`,sortable:!0},{name:"alamat",label:"Alamat",align:"left",field:"alamat_pendek",sortable:!0,classes:"alamat"},{name:"jabatan",label:"Jabatan",align:"left",field:"jabatan",sortable:!0},{name:"tingkat",label:"Tingkat",align:"left",field:"tingkat",sortable:!0},{name:"kelas",label:"Kelas",align:"left",field:"kelas",sortable:!0},{name:"ruang",label:"Ruang",align:"left",field:"ruang",sortable:!0}];return(a,e)=>{const n=(0,l.g2)("q-icon"),r=(0,l.g2)("q-input"),s=(0,l.g2)("q-table");return(0,l.uX)(),(0,l.Wv)(s,{flat:"",rows:u.value,columns:d,filter:t.value,onRowClick:e[1]||(e[1]=(e,t,l)=>a.$router.push(`/personalia/${t.aparatur_id}`)),"rows-per-page-options":[10,25,50,75,100,0],"no-data-label":"Silakan tentukan filter!","no-results-label":"Tidak ditemukan kata kunci yang sesuai dengan pencarian Anda!","row-key":"name"},{"top-left":(0,l.k6)((()=>[i])),"top-right":(0,l.k6)((()=>[(0,l.bF)(r,{outlined:"",dense:"",debounce:"300",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a),placeholder:"Cari"},{append:(0,l.k6)((()=>[(0,l.bF)(n,{name:"search"})])),_:1},8,["modelValue"])])),_:1},8,["rows","filter"])}}};var u=t(7010),d=t(6067),p=t(3933),b=t(272),g=t.n(b);const k=o,m=k;g()(o,"components",{QTable:u.A,QInput:d.A,QIcon:p.A})}}]);