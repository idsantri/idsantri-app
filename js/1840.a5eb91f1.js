"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[1840],{1840:(e,a,l)=>{l.r(a),l.d(a,{default:()=>P});var n=l(1347),t=l(7763),s=l(4187),o=l(1734),u=l(4265),d=l(8633),i=l(2364),r=l(8158),c=l(6397),p=l(7543),m=l(8556),g=l(575);const b=(0,n.Lk)("div",{class:"text-caption"}," Jika terkait dengan administrasi GT ",-1),k={__name:"KasCrud",props:{data:Object,isNew:Boolean},emits:["successSubmit","successDelete"],setup(e,{emit:a}){const{loadingMain:l}=(0,s.QW)((0,g.A)()),u=e,k=a,v=(0,s.KR)({keperluan:"Biaya Administrasi GT",keterangan:"Lunas",flag:"+"}),f=(0,s.KR)(!1),_=(0,s.KR)({});async function F(e){return await(0,o.A)({endPoint:`ugt/gt/${e}`,loading:f})}async function q(){const e=JSON.parse(JSON.stringify(v.value));delete e.id;let a=null;a=u.isNew?await(0,r.A)({endPoint:"ugt/kas",data:e,loading:l}):await(0,c.A)({endPoint:`ugt/kas/${v.value.id}`,data:e,confirm:!0,notify:!0,loading:l}),a&&(document.getElementById("btn-close-crud").click(),k("successSubmit",a?.gt))}(0,n.sV)((async()=>{if(Object.assign(v.value,u.data),v.value.gt_id){const e=await F(v.value.gt_id);e?_.value=e.gt:(_.value.nama="Data tidak ditemukan",_.value.pjgt_nama="Data tidak ditemukan")}}));const w=async()=>{const e=await(0,p.A)({endPoint:`ugt/kas/${v.value.id}`,loading:l,rerender:!1});e&&(document.getElementById("btn-close-crud").click(),k("successDelete"))};return(0,n.wB)((()=>v.value.gt_id),(async(e,a)=>{if(_.value.nama="",_.value.pjgt_nama="",e!=a&&"undefined"!=typeof a){const a=await F(e);a?_.value=a.gt:(_.value.nama="Data tidak ditemukan",_.value.pjgt_nama="Data tidak ditemukan")}})),(e,a)=>{const l=(0,n.g2)("q-card-section"),s=(0,n.g2)("q-input"),o=(0,n.g2)("q-card"),u=(0,n.g2)("q-select"),r=(0,n.g2)("q-btn"),c=(0,n.g2)("q-space"),p=(0,n.g2)("q-card-actions"),g=(0,n.g2)("q-form"),k=(0,n.gN)("close-popup");return(0,n.uX)(),(0,n.Wv)(o,{class:"full-width",style:{"max-width":"425px"}},{default:(0,n.k6)((()=>[(0,n.bF)(g,{onSubmit:(0,d.D$)(q,["prevent"])},{default:(0,n.k6)((()=>[(0,n.bF)(l,{class:"bg-green-7 text-green-11 q-pa-sm"},{default:(0,n.k6)((()=>[(0,n.bF)(i.A,{onEmitButton:e=>null},{default:(0,n.k6)((()=>[(0,n.eW)(" Input Kas UGT — "),(0,n.Lk)("em",null,(0,t.v_)(e.$props.isNew?"baru":"edit"),1)])),_:1})])),_:1}),(0,n.bF)(l,{class:"q-pa-sm"},{default:(0,n.k6)((()=>[(0,n.bF)(s,{dense:"",hint:"Diisi oleh sistem",class:"",outlined:"",label:"ID",modelValue:v.value.id,"onUpdate:modelValue":a[0]||(a[0]=e=>v.value.id=e),disable:"",filled:""},null,8,["modelValue"]),(0,n.bF)(o,{class:"q-mt-sm",flat:"",bordered:""},{default:(0,n.k6)((()=>[(0,n.bF)(l,{class:"q-pa-sm"},{default:(0,n.k6)((()=>[b,(0,n.bF)(s,{dense:"",class:"q-mt-sm",outlined:"",label:"GT ID",modelValue:v.value.gt_id,"onUpdate:modelValue":a[1]||(a[1]=e=>v.value.gt_id=e)},null,8,["modelValue"]),(0,n.bF)(s,{dense:"",class:"q-mt-sm",outlined:"",label:"Nama GT",modelValue:_.value.nama,"onUpdate:modelValue":a[2]||(a[2]=e=>_.value.nama=e),disable:"",filled:"",loading:f.value},null,8,["modelValue","loading"]),(0,n.bF)(s,{dense:"",class:"q-mt-sm",outlined:"",label:"Nama PJGT",modelValue:_.value.pjgt_nama,"onUpdate:modelValue":a[3]||(a[3]=e=>_.value.pjgt_nama=e),disable:"",filled:"",loading:f.value},null,8,["modelValue","loading"])])),_:1})])),_:1}),(0,n.bF)(s,{dense:"",class:"q-mt-sm",outlined:"",label:"Keperluan",modelValue:v.value.keperluan,"onUpdate:modelValue":a[4]||(a[4]=e=>v.value.keperluan=e)},null,8,["modelValue"]),(0,n.bF)(u,{dense:"",class:"q-mt-sm",outlined:"",label:"Kas Masuk/Keluar",modelValue:v.value.flag,"onUpdate:modelValue":a[5]||(a[5]=e=>v.value.flag=e),options:[{value:"+",label:"Masuk"},{value:"-",label:"Keluar"}],"emit-value":"","map-options":"","error-color":"negative",behavior:"menu"},null,8,["modelValue"]),(0,n.bF)(m.A,{dense:"",class:"q-mt-sm",outlined:"",modelValue:v.value.nominal,"onUpdate:modelValue":a[6]||(a[6]=e=>v.value.nominal=e),required:"",label:"Nominal"},null,8,["modelValue"]),(0,n.bF)(s,{dense:"",class:"q-mt-sm",outlined:"",label:"Keterangan",modelValue:v.value.keterangan,"onUpdate:modelValue":a[7]||(a[7]=e=>v.value.keterangan=e),autogrow:""},null,8,["modelValue"])])),_:1}),(0,n.bF)(p,{class:"flex bg-green-6"},{default:(0,n.k6)((()=>[(0,n.bo)((0,n.bF)(r,{label:"Hapus",class:"bg-red text-red-1","no-caps":"",onClick:w},null,512),[[d.aG,!e.$props.isNew]]),(0,n.bF)(c),(0,n.bo)((0,n.bF)(r,{label:"Tutup",class:"bg-green-11","no-caps":"",id:"btn-close-crud"},null,512),[[k]]),(0,n.bF)(r,{type:"submit",label:"Simpan",class:"bg-green-10 text-green-11","no-caps":""})])),_:1})])),_:1})])),_:1})}}};var v=l(3341),f=l(3417),_=l(222),F=l(6395),q=l(4611),w=l(5034),V=l(2677),y=l(5873),A=l(1038),K=l(272),Q=l.n(K);const T=k,h=T;Q()(k,"components",{QCard:v.A,QForm:f.A,QCardSection:_.A,QInput:F.A,QSelect:q.A,QCardActions:w.A,QBtn:V.A,QSpace:y.A}),Q()(k,"directives",{ClosePopup:A.A});var C=l(5605);const x={class:"q-gutter-sm"},R={__name:"KasIndex",setup(e){const a=(0,s.KR)([]),l=(0,s.KR)(!1),d=(0,s.KR)(""),i=(0,s.KR)(!1),r=(0,s.KR)(!1),c=(0,s.KR)({}),p=(0,s.KR)("");async function m(){i.value=!1;const e=await(0,o.A)({endPoint:"ugt/kas",loading:l});a.value=e.kas}function g(){c.value={},r.value=!0,i.value=!0}const b=(0,s.KR)(!1);async function k(e){p.value=`reports/ugt/kuitansi/view?id=${e.id}`,b.value=!0}function v(e){const a=e.masuk?"+":"-",l=e.masuk||e.keluar,n={id:e.id,gt_id:e.gt_id,keperluan:e.keperluan,keterangan:e.keterangan,flag:a,nominal:l};c.value=n,r.value=!1,i.value=!0}(0,n.sV)((async()=>{await m()}));const f=[{name:"id",label:"ID",align:"left",field:"id",sortable:!0},{name:"tgl_m",label:"Tanggal",align:"left",field:"tgl_m",sortable:!0},{name:"keperluan",label:"Keperluan",align:"left",field:"keperluan",sortable:!0},{name:"keterangan",label:"Keterangan",align:"left",field:"keterangan",sortable:!0},{name:"masuk",label:"Masuk",align:"right",field:"masuk",sortable:!0},{name:"keluar",label:"Keluar",align:"right",field:"keluar",sortable:!0},{name:"saldo",label:"Saldo",align:"right",field:"saldo",sortable:!0},{name:"cr_by",label:"By",align:"left",field:"cr_by",sortable:!0},{name:"edit",label:"!",align:"center",field:"",sortable:!1}];return(e,o)=>{const _=(0,n.g2)("q-toolbar-title"),F=(0,n.g2)("q-btn"),q=(0,n.g2)("q-toolbar"),w=(0,n.g2)("q-card-section"),V=(0,n.g2)("q-icon"),y=(0,n.g2)("q-input"),A=(0,n.g2)("q-td"),K=(0,n.g2)("q-tr"),Q=(0,n.g2)("q-table"),T=(0,n.g2)("q-card"),R=(0,n.g2)("q-dialog"),S=(0,n.g2)("q-page");return(0,n.uX)(),(0,n.Wv)(S,{class:"q-pa-sm"},{default:(0,n.k6)((()=>[(0,n.bF)(T,{class:""},{default:(0,n.k6)((()=>[(0,n.bF)(w,{class:"bg-green-8 no-padding"},{default:(0,n.k6)((()=>[(0,n.bF)(q,{class:"no-padding no-margin"},{default:(0,n.k6)((()=>[(0,n.bF)(_,{class:"text-subtitle1 q-ml-sm text-green-11"},{default:(0,n.k6)((()=>[(0,n.eW)(" Kas UGT ")])),_:1}),(0,n.bF)(F,{dense:"",class:"q-px-md q-mr-sm text-green-10",label:"Tambah","no-caps":"",icon:"add",color:"green-2",onClick:g})])),_:1})])),_:1}),(0,n.bF)(w,{class:"no-padding"},{default:(0,n.k6)((()=>[(0,n.bF)(Q,{rows:a.value,loading:l.value,"rows-per-page-options":[10,25,50,100,0],pagination:{page:999},class:"dt q-px-sm",columns:f,filter:d.value,"no-data-label":"Tidak ada data untuk ditampilkan!","no-results-label":"Tidak ditemukan kata kunci yang sesuai dengan pencarian Anda!","row-key":"name",onRowClick:o[1]||(o[1]=(e,a,l)=>v(e,a,l))},{"top-right":(0,n.k6)((()=>[(0,n.bF)(y,{outlined:"",dense:"",debounce:"300",modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=e=>d.value=e),placeholder:"Cari"},{append:(0,n.k6)((()=>[(0,n.bF)(V,{name:"search"})])),_:1},8,["modelValue"])])),body:(0,n.k6)((e=>[(0,n.bF)(K,{props:e},{default:(0,n.k6)((()=>[(0,n.bF)(A,{key:"id",props:e},{default:(0,n.k6)((()=>[(0,n.eW)((0,t.v_)(e.row.id),1)])),_:2},1032,["props"]),(0,n.bF)(A,{key:"tgl_m",props:e},{default:(0,n.k6)((()=>[(0,n.eW)((0,t.v_)(e.row.tgl_m),1)])),_:2},1032,["props"]),(0,n.bF)(A,{key:"keperluan",props:e},{default:(0,n.k6)((()=>[(0,n.eW)((0,t.v_)(e.row.gt_id?`${e.row.keperluan} (${e.row.gt_id})`:e.row.keperluan),1)])),_:2},1032,["props"]),(0,n.bF)(A,{key:"keterangan",props:e},{default:(0,n.k6)((()=>[(0,n.eW)((0,t.v_)(e.row.keterangan),1)])),_:2},1032,["props"]),(0,n.bF)(A,{key:"masuk",props:e},{default:(0,n.k6)((()=>[(0,n.eW)((0,t.v_)((0,s.R1)(u.z)(e.row.masuk)),1)])),_:2},1032,["props"]),(0,n.bF)(A,{key:"keluar",props:e},{default:(0,n.k6)((()=>[(0,n.eW)((0,t.v_)((0,s.R1)(u.z)(e.row.keluar)),1)])),_:2},1032,["props"]),(0,n.bF)(A,{key:"saldo",props:e},{default:(0,n.k6)((()=>[(0,n.eW)((0,t.v_)((0,s.R1)(u.z)(e.row.saldo)),1)])),_:2},1032,["props"]),(0,n.bF)(A,{key:"cr_by",props:e},{default:(0,n.k6)((()=>[(0,n.eW)((0,t.v_)(e.row.cr_by),1)])),_:2},1032,["props"]),(0,n.bF)(A,{key:"edit",props:e},{default:(0,n.k6)((()=>[(0,n.Lk)("div",x,[(0,n.bF)(F,{icon:"edit","no-caps":"",color:"green-10",outline:"",dense:"",class:"q-px-md",onClick:a=>v(e.row)},null,8,["onClick"]),(0,n.bF)(F,{icon:"print","no-caps":"",color:"green-10",outline:"",dense:"",class:"q-px-md",onClick:a=>k(e.row),disable:!e.row.gt_id},null,8,["onClick","disable"])])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["rows","loading","filter"])])),_:1})])),_:1}),(0,n.bF)(R,{persistent:"",modelValue:i.value,"onUpdate:modelValue":o[4]||(o[4]=e=>i.value=e)},{default:(0,n.k6)((()=>[(0,n.bF)(h,{"is-new":r.value,data:c.value,onSuccessSubmit:o[2]||(o[2]=e=>m()),onSuccessDelete:o[3]||(o[3]=e=>m())},null,8,["is-new","data"])])),_:1},8,["modelValue"]),(0,n.bF)(R,{modelValue:b.value,"onUpdate:modelValue":o[5]||(o[5]=e=>b.value=e)},{default:(0,n.k6)((()=>[(0,n.bF)(C.A,{url:p.value},null,8,["url"])])),_:1},8,["modelValue"])])),_:1})}}};var S=l(5013),D=l(6739),U=l(4629),W=l(7010),I=l(3933),N=l(7339),B=l(8785),$=l(45);const G=R,P=G;Q()(R,"components",{QPage:S.A,QCard:v.A,QCardSection:_.A,QToolbar:D.A,QToolbarTitle:U.A,QBtn:V.A,QTable:W.A,QInput:F.A,QIcon:I.A,QTr:N.A,QTd:B.A,QDialog:$.A})}}]);