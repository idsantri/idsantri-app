"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[2980],{2980:(a,e,l)=>{l.r(e),l.d(e,{default:()=>w});l(7590);var n=l(1347),t=l(4187),i=l(1734),s=l(6175),r=l(455),d=l(3336),o=l(9613);const u=["innerHTML"],g=(0,n.Lk)("div",{class:"text-subtitle1 text-green-10"}," Data Perizinan ",-1),p={__name:"IndexPage",setup(a){const e=(0,t.KR)([{}]),l=(0,t.KR)(!1),p=(0,r.lq)(),b=(0,t.KR)({}),c=(0,t.KR)(""),m={startDate:p.params.startDate||0,endDate:p.params.endDate||0},k=(0,t.KR)(m.startDate),f=(0,t.KR)(m.endDate),_=(0,t.KR)(!1);function v(a){b.value=a}(0,n.sV)((async()=>{if((0,d.$P)(k.value)&&(0,d.$P)(f.value)){const a=await(0,i.A)({endPoint:"indisipliner",loading:l,params:{start_date:k.value,end_date:f.value}});e.value=a.indisipliner}}));const q=[{name:"santri_id",label:"ID Santri",align:"left",field:"santri_id",sortable:!0},{name:"nama",label:"Nama",align:"left",field:"nama",sortable:!0},{name:"kategori",label:"Kategori",align:"left",field:"kategori_text",sortable:!0},{name:"tgl_sidang",label:"Sidang",align:"left",field:a=>(0,d.kz)(a.tgl_sidang),sortable:!0},{name:"no_pasal",label:"Pasal",align:"left",field:"no_pasal",sortable:!0},{name:"data_akhir",label:"Data Akhir",align:"left",field:"data_akhir",sortable:!0},{name:"alamat",label:"Alamat",align:"left",field:"alamat_pendek",sortable:!0,classes:"alamat"}];return(a,i)=>{const r=(0,n.g2)("q-space"),d=(0,n.g2)("q-btn"),p=(0,n.g2)("q-card-section"),m=(0,n.g2)("q-icon"),k=(0,n.g2)("q-input"),f=(0,n.g2)("q-table"),A=(0,n.g2)("q-card"),h=(0,n.g2)("q-page"),F=(0,n.g2)("q-dialog");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(h,{class:"q-pa-sm"},{default:(0,n.k6)((()=>[(0,n.bF)((0,t.R1)(s.A),{showBulanUjian:!0,"start-url":"/keamanan/indisipliner",onDataFilter:v}),(0,n.bF)(A,{class:"q-mt-sm"},{default:(0,n.k6)((()=>[(0,n.bF)(p,{class:"bg-green-8 text-green-1 text-subtitle1 q-pa-sm flex flex-center"},{default:(0,n.k6)((()=>[(0,n.Lk)("span",{innerHTML:b.value.display||""},null,8,u),(0,n.bF)(r),(0,n.bF)(d,{dense:"",icon:"add",label:"Baru","no-caps":"",color:"green-11 q-px-md",class:"text-green-10",onClick:i[0]||(i[0]=a=>_.value=!0)})])),_:1}),(0,n.bF)(f,{class:"dt q-pa-sm",rows:e.value,columns:q,loading:l.value,filter:c.value,"rows-per-page-options":[10,25,50,75,100,0],"no-data-label":"Silakan tentukan filter tanggal!","no-results-label":"Tidak ditemukan kata kunci yang sesuai dengan pencarian Anda!","row-key":"name",flat:"",onRowClick:i[2]||(i[2]=(e,l,n)=>a.$router.push(`/keamanan/indisipliner/${l.id}`))},{"top-left":(0,n.k6)((()=>[g])),"top-right":(0,n.k6)((()=>[(0,n.bF)(k,{outlined:"",dense:"",debounce:"300",modelValue:c.value,"onUpdate:modelValue":i[1]||(i[1]=a=>c.value=a),placeholder:"Cari"},{append:(0,n.k6)((()=>[(0,n.bF)(m,{name:"search"})])),_:1},8,["modelValue"])])),_:1},8,["rows","loading","filter"])])),_:1})])),_:1}),(0,n.bF)(F,{modelValue:_.value,"onUpdate:modelValue":i[3]||(i[3]=a=>_.value=a)},{default:(0,n.k6)((()=>[(0,n.bF)(o.A,{"is-new":!0})])),_:1},8,["modelValue"])],64)}}};var b=l(5013),c=l(3341),m=l(222),k=l(5873),f=l(2677),_=l(7010),v=l(6067),q=l(3933),A=l(45),h=l(272),F=l.n(h);const D=p,w=D;F()(p,"components",{QPage:b.A,QCard:c.A,QCardSection:m.A,QSpace:k.A,QBtn:f.A,QTable:_.A,QInput:v.A,QIcon:q.A,QDialog:A.A})}}]);