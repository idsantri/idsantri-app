"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[1247],{21247:(a,e,l)=>{l.r(e),l.d(e,{default:()=>B});l(67590);var t=l(51347),n=l(34187),i=l(60455),s=l(58094),d=l(23336),r=l(88556),o=l(96987),u=l(55123);const c={__name:"DropDownMenu",setup(a){const e=(0,n.KR)({santri_id:null,nama:""}),l=(0,i.rd)();return(0,t.wB)((()=>e.value.nama),(a=>{a?.length>0&&e.value.santri_id&&l.push("/keamanan/indisipliner/santri/"+e.value.santri_id)})),(a,l)=>{const n=(0,t.g2)("q-card-section"),i=(0,t.g2)("q-card"),s=(0,t.g2)("q-item-label"),d=(0,t.g2)("q-item-section"),r=(0,t.g2)("q-item"),o=(0,t.g2)("q-list"),c=(0,t.g2)("q-btn-dropdown");return(0,t.uX)(),(0,t.Wv)(c,{color:"green-10",label:"Filter By","no-caps":"",class:"text-green-11 q-px-md",dense:""},{default:(0,t.k6)((()=>[(0,t.bF)(o,null,{default:(0,t.k6)((()=>[(0,t.bF)(r,{class:"q-pa-sm"},{default:(0,t.k6)((()=>[(0,t.bF)(d,null,{default:(0,t.k6)((()=>[(0,t.bF)(s,null,{default:(0,t.k6)((()=>[(0,t.bF)(i,{flat:"",style:{width:"250px"}},{default:(0,t.k6)((()=>[(0,t.bF)(n,{class:"no-padding text-subtitle1"},{default:(0,t.k6)((()=>[(0,t.eW)(" Filter by Santri ID ")])),_:1}),(0,t.bF)(n,{class:"no-padding"},{default:(0,t.k6)((()=>[(0,t.bF)(u.A,{class:"q-mt-sm","active-only":!1,onEmitInput:l[0]||(l[0]=a=>Object.assign(e.value,a)),data:{}})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}};var p=l(73614),g=l(53766),b=l(22589),m=l(14958),k=l(99039),f=l(83341),_=l(60222),q=l(272),v=l.n(q);const F=c,A=F;v()(c,"components",{QBtnDropdown:p.A,QList:g.A,QItem:b.A,QItemSection:m.A,QItemLabel:k.A,QCard:f.A,QCardSection:_.A});const h=["innerHTML"],D=(0,t.Lk)("div",{class:"text-subtitle1 text-green-10"}," Data Perizinan ",-1),Q={__name:"IndisiplinerByDate",setup(a){const e=(0,n.KR)([{}]),l=(0,n.KR)(!1),u=(0,i.lq)(),c=(0,n.KR)({}),p=(0,n.KR)(""),g={startDate:u.params.startDate||0,endDate:u.params.endDate||0},b=(0,n.KR)(g.startDate),m=(0,n.KR)(g.endDate),k=(0,n.KR)(!1);function f(a){c.value=a}(0,t.sV)((async()=>{if((0,d.$P)(b.value)&&(0,d.$P)(m.value)){const a=await(0,s.A)({endPoint:"indisipliner",loading:l,params:{start_date:b.value,end_date:m.value}});a&&(e.value=a.indisipliner)}}));const _=[{name:"santri_id",label:"ID Santri",align:"left",field:"santri_id",sortable:!0},{name:"nama",label:"Nama",align:"left",field:"nama",sortable:!0},{name:"kategori",label:"Kategori",align:"left",field:"kategori_text",sortable:!0},{name:"tgl_sidang",label:"Sidang",align:"left",field:a=>(0,d.kz)(a.tgl_sidang),sortable:!0},{name:"no_pasal",label:"Pasal",align:"left",field:"no_pasal",sortable:!0},{name:"data_akhir",label:"Data Akhir",align:"left",field:"data_akhir",sortable:!0},{name:"alamat",label:"Alamat",align:"left",field:"alamat_pendek",sortable:!0,classes:"alamat"}];return(a,i)=>{const s=(0,t.g2)("q-space"),d=(0,t.g2)("q-btn"),u=(0,t.g2)("q-card-section"),g=(0,t.g2)("q-icon"),b=(0,t.g2)("q-input"),m=(0,t.g2)("q-table"),q=(0,t.g2)("q-card"),v=(0,t.g2)("q-page"),F=(0,t.g2)("q-dialog");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.bF)(v,{class:"q-pa-sm"},{default:(0,t.k6)((()=>[(0,t.bF)((0,n.R1)(r.A),{showBulanUjian:!0,"start-url":"/keamanan/indisipliner",onDataFilter:f},{default:(0,t.k6)((()=>[(0,t.bF)(A)])),_:1}),(0,t.bF)(q,{class:"q-mt-sm"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{class:"bg-green-8 text-green-1 text-subtitle1 q-pa-sm flex flex-center"},{default:(0,t.k6)((()=>[(0,t.Lk)("span",{innerHTML:c.value.display||""},null,8,h),(0,t.bF)(s),(0,t.bF)(d,{dense:"",icon:"add",label:"Baru","no-caps":"",color:"green-11 q-px-md",class:"text-green-10",onClick:i[0]||(i[0]=a=>k.value=!0)})])),_:1}),(0,t.bF)(m,{class:"dt q-pa-sm",rows:e.value,columns:_,loading:l.value,filter:p.value,"rows-per-page-options":[10,25,50,75,100,0],"no-data-label":"Silakan tentukan filter tanggal!","no-results-label":"Tidak ditemukan kata kunci yang sesuai dengan pencarian Anda!","row-key":"name",flat:"",onRowClick:i[2]||(i[2]=(e,l,t)=>a.$router.push(`/keamanan/indisipliner/${l.id}`))},{"top-left":(0,t.k6)((()=>[D])),"top-right":(0,t.k6)((()=>[(0,t.bF)(b,{outlined:"",dense:"",debounce:"300",modelValue:p.value,"onUpdate:modelValue":i[1]||(i[1]=a=>p.value=a),placeholder:"Cari"},{append:(0,t.k6)((()=>[(0,t.bF)(g,{name:"search"})])),_:1},8,["modelValue"])])),_:1},8,["rows","loading","filter"])])),_:1})])),_:1}),(0,t.bF)(F,{modelValue:k.value,"onUpdate:modelValue":i[4]||(i[4]=a=>k.value=a)},{default:(0,t.k6)((()=>[(0,t.bF)(o.A,{data:{},onSuccessDelete:a=>null,onSuccessSubmit:i[3]||(i[3]=e=>a.$router.push(`/keamanan/indisipliner/${e.id}`))})])),_:1},8,["modelValue"])],64)}}};var w=l(75013),x=l(5873),S=l(22677),C=l(27010),K=l(46395),R=l(93933),y=l(30045);const I=Q,B=I;v()(Q,"components",{QPage:w.A,QCard:f.A,QCardSection:_.A,QSpace:x.A,QBtn:S.A,QTable:C.A,QInput:K.A,QIcon:R.A,QDialog:y.A})}}]);