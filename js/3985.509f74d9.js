"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[3985],{73985:(e,a,t)=>{t.r(a),t.d(a,{default:()=>oe});var n=t(51347),l=t(34187),s=t(17569),i=t(58094),u=t(37763);const o={key:0,class:"text-center"},d={__name:"TableAlamat",props:{rows:{type:Array},columns:{type:Array},loading:{type:Boolean,default:()=>!1},noCheckBox:{type:Boolean,default:()=>!1}},setup(e){const a=(0,l.KR)([]);return(t,l)=>{const s=(0,n.g2)("q-th"),i=(0,n.g2)("q-tr"),d=(0,n.g2)("q-checkbox"),c=(0,n.g2)("q-td"),r=(0,n.g2)("q-btn"),m=(0,n.g2)("q-table");return(0,n.uX)(),(0,n.Wv)(m,{flat:"",bordered:"",rows:e.rows,columns:e.columns,"row-key":"id",selection:"single",selected:a.value,"onUpdate:selected":l[1]||(l[1]=e=>a.value=e),"rows-per-page-options":[0],"virtual-scroll":"",style:{height:"700px"},loading:e.loading},{header:(0,n.k6)((a=>[(0,n.bF)(i,{props:a},{default:(0,n.k6)((()=>[e.noCheckBox?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.Wv)(s,{key:0,class:"text-center"},{default:(0,n.k6)((()=>[(0,n.eW)("!")])),_:1})),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.cols,(e=>((0,n.uX)(),(0,n.Wv)(s,{key:e.name,props:a},{default:(0,n.k6)((()=>[(0,n.eW)((0,u.v_)(e.label),1)])),_:2},1032,["props"])))),128)),(0,n.bF)(s,{class:"text-center"},{default:(0,n.k6)((()=>[(0,n.eW)("!")])),_:1})])),_:2},1032,["props"])])),body:(0,n.k6)((s=>[(0,n.bF)(i,{props:s},{default:(0,n.k6)((()=>[e.noCheckBox?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("td",o,[(0,n.bF)(d,{modelValue:s.selected,"onUpdate:modelValue":[e=>s.selected=e,l[0]||(l[0]=e=>t.$emit("onSelect",a.value[0]))],dense:""},null,8,["modelValue","onUpdate:modelValue"])])),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.cols,(e=>((0,n.uX)(),(0,n.Wv)(c,{key:e.name,props:s},{default:(0,n.k6)((()=>[(0,n.eW)((0,u.v_)(e.value),1)])),_:2},1032,["props"])))),128)),(0,n.bF)(c,{class:"text-center"},{default:(0,n.k6)((()=>[(0,n.bF)(r,{icon:"edit",dense:"",color:"green-10",outline:"",onClick:e=>t.$emit("onEdit",s.row)},null,8,["onClick"])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows","columns","selected","loading"])}}};var c=t(27010),r=t(87339),m=t(22517),p=t(68349),b=t(38785),g=t(22677),v=t(272),k=t.n(v);const f=d,_=f;k()(d,"components",{QTable:c.A,QTr:r.A,QTh:m.A,QCheckbox:p.A,QTd:b.A,QBtn:g.A});var q=t(8633),A=t(20675),F=t(47509),w=t(59678),y=t(39987);const Q={__name:"CrudProvinsi",props:{data:{type:Object,required:!1,default:()=>{}}},emits:["successSubmit","successDelete"],setup(e,{emit:a}){const t=e,s=a,i=(0,l.KR)({}),u=(0,l.KR)(!1);(0,n.sV)((async()=>{Object.assign(i.value,t.data)}));const o=async e=>{const a=new FormData(e.target),n=Object.fromEntries(a.entries());let l=null;l=t.data.id?await(0,F.A)({endPoint:`alamat/provinsi/${t.data.id}`,data:n,confirm:!0,notify:!0,loading:u}):await(0,w.A)({endPoint:"alamat/provinsi",data:n,loading:u}),l&&(document.getElementById("btn-close").click(),s("successSubmit",l))},d=async()=>{const e=await(0,A.A)({endPoint:`alamat/provinsi/${t.data.id}`,loading:u});e&&(document.getElementById("btn-close").click(),s("successDelete"))};return(e,a)=>{const l=(0,n.g2)("q-spinner-cube"),s=(0,n.g2)("q-dialog"),c=(0,n.g2)("q-input"),r=(0,n.g2)("q-card-section"),m=(0,n.g2)("q-btn"),p=(0,n.g2)("q-space"),b=(0,n.g2)("q-card-actions"),g=(0,n.g2)("q-form"),v=(0,n.g2)("q-card"),k=(0,n.gN)("close-popup");return(0,n.uX)(),(0,n.Wv)(v,{class:"full-width",style:{"max-width":"425px"}},{default:(0,n.k6)((()=>[(0,n.bF)(g,{onSubmit:(0,q.D$)(o,["prevent"])},{default:(0,n.k6)((()=>[(0,n.bF)(y.A,{title:"Input Provinsi","is-new":!t.data?.id},null,8,["is-new"]),(0,n.bF)(r,null,{default:(0,n.k6)((()=>[u.value?((0,n.uX)(),(0,n.Wv)(s,{key:0,modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=e=>u.value=e),persistent:""},{default:(0,n.k6)((()=>[(0,n.bF)(l,{color:"green-12",size:"8em",class:"flex q-ma-lg q-mx-auto"})])),_:1},8,["modelValue"])):(0,n.Q3)("",!0),(0,n.bF)(c,{modelValue:i.value.id,"onUpdate:modelValue":a[1]||(a[1]=e=>i.value.id=e),name:"id",dense:"",class:"",outlined:"",required:"",label:"Kode Provinsi",rules:[e=>!!e||"Harus diisi!",e=>/^[a-zA-Z0-9]+$/.test(e)||"Harus berisi huruf atau angka!"]},null,8,["modelValue","rules"]),(0,n.bF)(c,{modelValue:i.value.provinsi,"onUpdate:modelValue":a[2]||(a[2]=e=>i.value.provinsi=e),name:"provinsi",dense:"",class:"q-mt-sm",outlined:"",required:"",label:"Nama Provinsi",rules:[e=>!!e||"Harus diisi!"]},null,8,["modelValue","rules"])])),_:1}),(0,n.bF)(b,{class:"flex bg-green-6"},{default:(0,n.k6)((()=>[(0,n.bo)((0,n.bF)(m,{label:"Hapus",class:"bg-red text-red-1","no-caps":"",onClick:d},null,512),[[q.aG,t.data.id]]),(0,n.bF)(p),(0,n.bo)((0,n.bF)(m,{label:"Tutup",class:"bg-green-11","no-caps":"",id:"btn-close"},null,512),[[k]]),(0,n.bF)(m,{type:"submit",label:"Simpan",class:"bg-green-10 text-green-11","no-caps":""})])),_:1})])),_:1})])),_:1})}}};var K=t(83341),x=t(53417),S=t(60222),V=t(30045),C=t(71402),h=t(46395),D=t(25034),P=t(5873),$=t(61038);const R=Q,W=R;k()(Q,"components",{QCard:K.A,QForm:x.A,QCardSection:S.A,QDialog:V.A,QSpinnerCube:C.A,QInput:h.A,QCardActions:D.A,QBtn:g.A,QSpace:P.A}),k()(Q,"directives",{ClosePopup:$.A});const B={__name:"DataProvinsi",setup(e){const a=(0,l.KR)([]),t=(0,l.KR)(!1),u=(0,l.KR)({}),o=(0,l.KR)(!1),d=(0,s.A)();async function c(){a.value=[];const e=d.getProvinsi();e?.length>0?a.value=e:await r()}async function r(){const e=await(0,i.A)({endPoint:"alamat/provinsi",loading:t});e&&e.provinsi&&(d.setProvinsi(e.provinsi),a.value=d.getProvinsi())}function m(){u.value={},o.value=!0}function p(e){u.value=e,o.value=!0}(0,n.sV)((async()=>{await c()}));const b=[{name:"id",label:"ID",align:"left",field:"id",sortable:!0},{name:"provinsi",align:"left",label:"Provinsi",field:"provinsi",sortable:!0}];return(e,l)=>{const s=(0,n.g2)("q-space"),i=(0,n.g2)("q-btn"),d=(0,n.g2)("q-card-section"),c=(0,n.g2)("q-dialog"),g=(0,n.g2)("q-card");return(0,n.uX)(),(0,n.Wv)(g,null,{default:(0,n.k6)((()=>[(0,n.bF)(d,{class:"q-pa-sm bg-green-7 text-green-11 text-subtitle1 flex flex-center"},{default:(0,n.k6)((()=>[(0,n.eW)(" Provinsi "),(0,n.bF)(s),(0,n.bF)(i,{onClick:r,icon:"sync",round:"",dense:"",flat:"",class:"q-mr-md"}),(0,n.bF)(i,{onClick:m,icon:"add",round:"",dense:"",flat:""})])),_:1}),(0,n.bF)(_,{rows:a.value,columns:b,loading:t.value,onOnSelect:l[0]||(l[0]=a=>e.$emit("onSelect",a)),onOnEdit:p},null,8,["rows","loading"]),(0,n.bF)(c,{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=e=>o.value=e)},{default:(0,n.k6)((()=>[(0,n.bF)(W,{data:u.value,onSuccessDelete:r,onSuccessSubmit:r},null,8,["data"])])),_:1},8,["modelValue"])])),_:1})}}},I=B,O=I;k()(B,"components",{QCard:K.A,QCardSection:S.A,QSpace:P.A,QBtn:g.A,QDialog:V.A});var U=t(15469);const E={__name:"CrudKabupaten",props:{data:{type:Object,required:!1,default:()=>{}}},emits:["successSubmit","successDelete"],setup(e,{emit:a}){const t=e,s=a,i=(0,l.KR)({}),u=(0,l.KR)(!1);(0,n.sV)((async()=>{Object.assign(i.value,t.data)}));const o=async e=>{const a=new FormData(e.target),n=Object.fromEntries(a.entries());let l=null;l=t.data.id?await(0,F.A)({endPoint:`alamat/kabupaten/${t.data.id}`,data:n,confirm:!0,notify:!0,loading:u}):await(0,w.A)({endPoint:"alamat/kabupaten",data:n,loading:u}),l&&(document.getElementById("btn-close").click(),s("successSubmit",l))},d=async()=>{const e=await(0,A.A)({endPoint:`alamat/kabupaten/${t.data.id}`,loading:u});e&&(document.getElementById("btn-close").click(),s("successDelete"))};return(e,a)=>{const l=(0,n.g2)("q-spinner-cube"),s=(0,n.g2)("q-dialog"),c=(0,n.g2)("q-input"),r=(0,n.g2)("q-card-section"),m=(0,n.g2)("q-btn"),p=(0,n.g2)("q-space"),b=(0,n.g2)("q-card-actions"),g=(0,n.g2)("q-form"),v=(0,n.g2)("q-card"),k=(0,n.gN)("close-popup");return(0,n.uX)(),(0,n.Wv)(v,{class:"full-width",style:{"max-width":"425px"}},{default:(0,n.k6)((()=>[(0,n.bF)(g,{onSubmit:(0,q.D$)(o,["prevent"])},{default:(0,n.k6)((()=>[(0,n.bF)(y.A,{title:"Input Kabupaten/Kota","is-new":!t.data?.id},null,8,["is-new"]),(0,n.bF)(r,null,{default:(0,n.k6)((()=>[u.value?((0,n.uX)(),(0,n.Wv)(s,{key:0,modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=e=>u.value=e),persistent:""},{default:(0,n.k6)((()=>[(0,n.bF)(l,{color:"green-12",size:"8em",class:"flex q-ma-lg q-mx-auto"})])),_:1},8,["modelValue"])):(0,n.Q3)("",!0),(0,n.bF)(c,{modelValue:i.value.provinsi_id,"onUpdate:modelValue":a[1]||(a[1]=e=>i.value.provinsi_id=e),name:"provinsi_id",dense:"",class:"",outlined:"",required:"",label:"Kode Provinsi",rules:[e=>!!e||"Harus diisi!"],readonly:""},null,8,["modelValue","rules"]),(0,n.bF)(c,{modelValue:i.value.id,"onUpdate:modelValue":a[2]||(a[2]=e=>i.value.id=e),name:"id",dense:"",class:"q-mt-sm",outlined:"",required:"",label:"Kode Kabupaten/Kota",rules:[e=>!!e||"Harus diisi!",e=>/^[a-zA-Z0-9]+$/.test(e)||"Harus berisi huruf atau angka!"]},null,8,["modelValue","rules"]),(0,n.bF)(c,{modelValue:i.value.kabupaten,"onUpdate:modelValue":a[3]||(a[3]=e=>i.value.kabupaten=e),name:"kabupaten",dense:"",class:"q-mt-sm",outlined:"",required:"",label:"Nama Kabupaten/Kota",rules:[e=>!!e||"Harus diisi!"]},null,8,["modelValue","rules"])])),_:1}),(0,n.bF)(b,{class:"flex bg-green-6"},{default:(0,n.k6)((()=>[(0,n.bo)((0,n.bF)(m,{label:"Hapus",class:"bg-red text-red-1","no-caps":"",onClick:d},null,512),[[q.aG,t.data.id]]),(0,n.bF)(p),(0,n.bo)((0,n.bF)(m,{label:"Tutup",class:"bg-green-11","no-caps":"",id:"btn-close"},null,512),[[k]]),(0,n.bF)(m,{type:"submit",label:"Simpan",class:"bg-green-10 text-green-11","no-caps":""})])),_:1})])),_:1})])),_:1})}}},X=E,H=X;k()(E,"components",{QCard:K.A,QForm:x.A,QCardSection:S.A,QDialog:V.A,QSpinnerCube:C.A,QInput:h.A,QCardActions:D.A,QBtn:g.A,QSpace:P.A}),k()(E,"directives",{ClosePopup:$.A});const j={__name:"DataKabupaten",props:{provinsi_id:{type:String,required:!0,default:""}},setup(e){const a=e,t=(0,l.KR)([]),u=(0,l.KR)(!1),o=(0,l.KR)({}),d=(0,l.KR)(!1),c=(0,s.A)();async function r(){t.value=[];const{provinsi_id:e}=a;if(!e)return;const n=await(0,i.A)({endPoint:"alamat/kabupaten",loading:u,params:{provinsi_id:e}});n&&n.kabupaten&&(c.setKabupaten(n.kabupaten,{provinsi_id:e}),t.value=c.getKabupaten({provinsi_id:e}))}async function m(){t.value=[];const{provinsi_id:e}=a;if(!e)return;const n=c.getKabupaten({provinsi_id:e});n?.length>0?t.value=n:r()}function p(){const{provinsi_id:e}=a;if(!e)return(0,U.KQ)("Pilih provinsi terlebih dahulu!");o.value={provinsi_id:e},d.value=!0}function b(e){o.value=e,d.value=!0}(0,n.wB)((()=>a.provinsi_id),(async e=>{await m()}));const g=[{name:"id",label:"ID",align:"left",field:"id",sortable:!0,format:e=>`${e.replace(/(\w{2})(\w{2})/,"$1.$2")}`},{name:"kabupaten",align:"left",label:"Kabupaten",field:"kabupaten",sortable:!0}];return(e,a)=>{const l=(0,n.g2)("q-space"),s=(0,n.g2)("q-btn"),i=(0,n.g2)("q-card-section"),c=(0,n.g2)("q-dialog"),m=(0,n.g2)("q-card");return(0,n.uX)(),(0,n.Wv)(m,null,{default:(0,n.k6)((()=>[(0,n.bF)(i,{class:"q-pa-sm bg-green-7 text-green-11 text-subtitle1 flex flex-center"},{default:(0,n.k6)((()=>[(0,n.eW)(" Kabupaten/Kota "),(0,n.bF)(l),(0,n.bF)(s,{onClick:r,icon:"sync",round:"",dense:"",flat:"",class:"q-mr-md"}),(0,n.bF)(s,{onClick:p,icon:"add",round:"",dense:"",flat:""})])),_:1}),(0,n.bF)(_,{rows:t.value,columns:g,loading:u.value,onOnSelect:a[0]||(a[0]=a=>e.$emit("onSelect",a)),onOnEdit:b},null,8,["rows","loading"]),(0,n.bF)(c,{modelValue:d.value,"onUpdate:modelValue":a[1]||(a[1]=e=>d.value=e)},{default:(0,n.k6)((()=>[(0,n.bF)(H,{data:o.value,onSuccessDelete:r,onSuccessSubmit:r},null,8,["data"])])),_:1},8,["modelValue"])])),_:1})}}},T=j,z=T;k()(j,"components",{QCard:K.A,QCardSection:S.A,QSpace:P.A,QBtn:g.A,QDialog:V.A});const N={__name:"CrudKecamatan",props:{data:{type:Object,required:!1,default:()=>{}}},emits:["successSubmit","successDelete"],setup(e,{emit:a}){const t=e,s=a,i=(0,l.KR)({}),u=(0,l.KR)(!1);(0,n.sV)((async()=>{Object.assign(i.value,t.data)}));const o=async e=>{const a=new FormData(e.target),n=Object.fromEntries(a.entries());let l=null;l=t.data.id?await(0,F.A)({endPoint:`alamat/kecamatan/${t.data.id}`,data:n,confirm:!0,notify:!0,loading:u}):await(0,w.A)({endPoint:"alamat/kecamatan",data:n,loading:u}),l&&(document.getElementById("btn-close").click(),s("successSubmit",l))},d=async()=>{const e=await(0,A.A)({endPoint:`alamat/kecamatan/${t.data.id}`,loading:u});e&&(document.getElementById("btn-close").click(),s("successDelete"))};return(e,a)=>{const l=(0,n.g2)("q-spinner-cube"),s=(0,n.g2)("q-dialog"),c=(0,n.g2)("q-input"),r=(0,n.g2)("q-card-section"),m=(0,n.g2)("q-btn"),p=(0,n.g2)("q-space"),b=(0,n.g2)("q-card-actions"),g=(0,n.g2)("q-form"),v=(0,n.g2)("q-card"),k=(0,n.gN)("close-popup");return(0,n.uX)(),(0,n.Wv)(v,{class:"full-width",style:{"max-width":"425px"}},{default:(0,n.k6)((()=>[(0,n.bF)(g,{onSubmit:(0,q.D$)(o,["prevent"])},{default:(0,n.k6)((()=>[(0,n.bF)(y.A,{title:"Input Kecamatan/Distrik","is-new":!t.data?.id},null,8,["is-new"]),(0,n.bF)(r,null,{default:(0,n.k6)((()=>[u.value?((0,n.uX)(),(0,n.Wv)(s,{key:0,modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=e=>u.value=e),persistent:""},{default:(0,n.k6)((()=>[(0,n.bF)(l,{color:"green-12",size:"8em",class:"flex q-ma-lg q-mx-auto"})])),_:1},8,["modelValue"])):(0,n.Q3)("",!0),(0,n.bF)(c,{modelValue:i.value.kabupaten_id,"onUpdate:modelValue":a[1]||(a[1]=e=>i.value.kabupaten_id=e),name:"kabupaten_id",dense:"",class:"",outlined:"",required:"",label:"Kode Kabupaten/Kota",rules:[e=>!!e||"Harus diisi!"],readonly:""},null,8,["modelValue","rules"]),(0,n.bF)(c,{modelValue:i.value.id,"onUpdate:modelValue":a[2]||(a[2]=e=>i.value.id=e),name:"id",dense:"",class:"q-mt-sm",outlined:"",required:"",label:"Kode Kecamatan/Distrik",rules:[e=>!!e||"Harus diisi!",e=>/^[a-zA-Z0-9]+$/.test(e)||"Harus berisi huruf atau angka!"]},null,8,["modelValue","rules"]),(0,n.bF)(c,{modelValue:i.value.kecamatan,"onUpdate:modelValue":a[3]||(a[3]=e=>i.value.kecamatan=e),name:"kecamatan",dense:"",class:"q-mt-sm",outlined:"",required:"",label:"Nama Kecamatan/Distrik",rules:[e=>!!e||"Harus diisi!"]},null,8,["modelValue","rules"])])),_:1}),(0,n.bF)(b,{class:"flex bg-green-6"},{default:(0,n.k6)((()=>[(0,n.bo)((0,n.bF)(m,{label:"Hapus",class:"bg-red text-red-1","no-caps":"",onClick:d},null,512),[[q.aG,t.data.id]]),(0,n.bF)(p),(0,n.bo)((0,n.bF)(m,{label:"Tutup",class:"bg-green-11","no-caps":"",id:"btn-close"},null,512),[[k]]),(0,n.bF)(m,{type:"submit",label:"Simpan",class:"bg-green-10 text-green-11","no-caps":""})])),_:1})])),_:1})])),_:1})}}},G=N,Z=G;k()(N,"components",{QCard:K.A,QForm:x.A,QCardSection:S.A,QDialog:V.A,QSpinnerCube:C.A,QInput:h.A,QCardActions:D.A,QBtn:g.A,QSpace:P.A}),k()(N,"directives",{ClosePopup:$.A});const J={__name:"DataKecamatan",props:{provinsi_id:{type:String,required:!0,default:""},kabupaten_id:{type:String,required:!0,default:""}},setup(e){const a=e,t=(0,l.KR)([]),u=(0,l.KR)(!1),o=(0,l.KR)({}),d=(0,l.KR)(!1),c=(0,s.A)();async function r(){t.value=[];const{provinsi_id:e,kabupaten_id:n}=a;if(!n||!e)return;const l=await(0,i.A)({endPoint:"alamat/kecamatan",loading:u,params:{kabupaten_id:n}});l&&l.kecamatan&&(c.setKecamatan(l.kecamatan,{provinsi_id:e,kabupaten_id:n}),t.value=c.getKecamatan({provinsi_id:e,kabupaten_id:n}))}async function m(){t.value=[];const{provinsi_id:e,kabupaten_id:n}=a;if(!n||!e)return;const l=c.getKecamatan({provinsi_id:e,kabupaten_id:n});l?.length>0?t.value=l:await r()}function p(){const{kabupaten_id:e}=a;if(!e)return(0,U.KQ)("Pilih kabupaten terlebih dahulu!");o.value={kabupaten_id:e},d.value=!0}function b(e){o.value=e,d.value=!0}(0,n.wB)((()=>a.kabupaten_id),(async e=>{await m()}));const g=[{name:"id",label:"ID",align:"left",field:"id",sortable:!0,format:e=>`${e.replace(/(\w{2})(\w{2})(\w{2})/,"$1.$2.$3")}`},{name:"kecamatan",align:"left",label:"Kecamatan",field:"kecamatan",sortable:!0}];return(e,a)=>{const l=(0,n.g2)("q-space"),s=(0,n.g2)("q-btn"),i=(0,n.g2)("q-card-section"),c=(0,n.g2)("q-dialog"),m=(0,n.g2)("q-card");return(0,n.uX)(),(0,n.Wv)(m,null,{default:(0,n.k6)((()=>[(0,n.bF)(i,{class:"q-pa-sm bg-green-7 text-green-11 text-subtitle1 flex flex-center"},{default:(0,n.k6)((()=>[(0,n.eW)(" Kecamatan/Distrik "),(0,n.bF)(l),(0,n.bF)(s,{onClick:r,icon:"sync",round:"",dense:"",flat:"",class:"q-mr-md"}),(0,n.bF)(s,{onClick:p,icon:"add",round:"",dense:"",flat:""})])),_:1}),(0,n.bF)(_,{rows:t.value,columns:g,loading:u.value,onOnSelect:a[0]||(a[0]=a=>e.$emit("onSelect",a)),onOnEdit:b},null,8,["rows","loading"]),(0,n.bF)(c,{modelValue:d.value,"onUpdate:modelValue":a[1]||(a[1]=e=>d.value=e)},{default:(0,n.k6)((()=>[(0,n.bF)(Z,{data:o.value,onSuccessDelete:r,onSuccessSubmit:r},null,8,["data"])])),_:1},8,["modelValue"])])),_:1})}}},L=J,M=L;k()(J,"components",{QCard:K.A,QCardSection:S.A,QSpace:P.A,QBtn:g.A,QDialog:V.A});const Y={__name:"CrudDesa",props:{data:{type:Object,required:!1,default:()=>{}}},emits:["successSubmit","successDelete"],setup(e,{emit:a}){const t=e,s=a,i=(0,l.KR)({}),u=(0,l.KR)(!1);(0,n.sV)((async()=>{Object.assign(i.value,t.data)}));const o=async e=>{const a=new FormData(e.target),n=Object.fromEntries(a.entries());let l=null;l=t.data.id?await(0,F.A)({endPoint:`alamat/desa/${t.data.id}`,data:n,confirm:!0,notify:!0,loading:u}):await(0,w.A)({endPoint:"alamat/desa",data:n,loading:u}),l&&(document.getElementById("btn-close").click(),s("successSubmit",l))},d=async()=>{const e=await(0,A.A)({endPoint:`alamat/desa/${t.data.id}`,loading:u});e&&(document.getElementById("btn-close").click(),s("successDelete"))};return(e,a)=>{const l=(0,n.g2)("q-spinner-cube"),s=(0,n.g2)("q-dialog"),c=(0,n.g2)("q-input"),r=(0,n.g2)("q-card-section"),m=(0,n.g2)("q-btn"),p=(0,n.g2)("q-space"),b=(0,n.g2)("q-card-actions"),g=(0,n.g2)("q-form"),v=(0,n.g2)("q-card"),k=(0,n.gN)("close-popup");return(0,n.uX)(),(0,n.Wv)(v,{class:"full-width",style:{"max-width":"425px"}},{default:(0,n.k6)((()=>[(0,n.bF)(g,{onSubmit:(0,q.D$)(o,["prevent"])},{default:(0,n.k6)((()=>[(0,n.bF)(y.A,{title:"Input Desa/Kelurahan","is-new":!t.data?.id},null,8,["is-new"]),(0,n.bF)(r,null,{default:(0,n.k6)((()=>[u.value?((0,n.uX)(),(0,n.Wv)(s,{key:0,modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=e=>u.value=e),persistent:""},{default:(0,n.k6)((()=>[(0,n.bF)(l,{color:"green-12",size:"8em",class:"flex q-ma-lg q-mx-auto"})])),_:1},8,["modelValue"])):(0,n.Q3)("",!0),(0,n.bF)(c,{modelValue:i.value.kecamatan_id,"onUpdate:modelValue":a[1]||(a[1]=e=>i.value.kecamatan_id=e),name:"kecamatan_id",dense:"",class:"",outlined:"",required:"",label:"Kode Kecamatan/Distrik",rules:[e=>!!e||"Harus diisi!"],readonly:""},null,8,["modelValue","rules"]),(0,n.bF)(c,{modelValue:i.value.id,"onUpdate:modelValue":a[2]||(a[2]=e=>i.value.id=e),name:"id",dense:"",class:"q-mt-sm",outlined:"",required:"",label:"Kode Desa/Kelurahan",rules:[e=>!!e||"Harus diisi!",e=>/^[a-zA-Z0-9]+$/.test(e)||"Harus berisi huruf atau angka!"]},null,8,["modelValue","rules"]),(0,n.bF)(c,{modelValue:i.value.desa,"onUpdate:modelValue":a[3]||(a[3]=e=>i.value.desa=e),name:"desa",dense:"",class:"q-mt-sm",outlined:"",required:"",label:"Nama Desa/Kelurahan",rules:[e=>!!e||"Harus diisi!"]},null,8,["modelValue","rules"])])),_:1}),(0,n.bF)(b,{class:"flex bg-green-6"},{default:(0,n.k6)((()=>[(0,n.bo)((0,n.bF)(m,{label:"Hapus",class:"bg-red text-red-1","no-caps":"",onClick:d},null,512),[[q.aG,t.data.id]]),(0,n.bF)(p),(0,n.bo)((0,n.bF)(m,{label:"Tutup",class:"bg-green-11","no-caps":"",id:"btn-close"},null,512),[[k]]),(0,n.bF)(m,{type:"submit",label:"Simpan",class:"bg-green-10 text-green-11","no-caps":""})])),_:1})])),_:1})])),_:1})}}},ee=Y,ae=ee;k()(Y,"components",{QCard:K.A,QForm:x.A,QCardSection:S.A,QDialog:V.A,QSpinnerCube:C.A,QInput:h.A,QCardActions:D.A,QBtn:g.A,QSpace:P.A}),k()(Y,"directives",{ClosePopup:$.A});const te={__name:"DataDesa",props:{provinsi_id:{type:String,required:!0,default:""},kabupaten_id:{type:String,required:!0,default:""},kecamatan_id:{type:String,required:!0,default:""}},setup(e){const a=e,t=(0,l.KR)([]),u=(0,l.KR)(!1),o=(0,l.KR)({}),d=(0,l.KR)(!1),c=(0,s.A)();async function r(){t.value=[];const{provinsi_id:e,kabupaten_id:n,kecamatan_id:l}=a;if(!n||!e||!l)return;const s=await(0,i.A)({endPoint:"alamat/desa",loading:u,params:{kecamatan_id:l}});s&&s.desa&&(c.setDesa(s.desa,{provinsi_id:e,kabupaten_id:n,kecamatan_id:l}),t.value=c.getDesa({provinsi_id:e,kabupaten_id:n,kecamatan_id:l}))}async function m(){t.value=[];const{provinsi_id:e,kabupaten_id:n,kecamatan_id:l}=a;if(!n||!e||!l)return;const s=c.getDesa({provinsi_id:e,kabupaten_id:n,kecamatan_id:l});s?.length>0?t.value=s:await r()}function p(){const{kecamatan_id:e}=a;if(!e)return(0,U.KQ)("Pilih kecamatan terlebih dahulu!");o.value={kecamatan_id:e},d.value=!0}function b(e){o.value=e,d.value=!0}(0,n.wB)((()=>a.kecamatan_id),(async e=>{await m()}));const g=[{name:"id",label:"ID",align:"left",field:"id",sortable:!0,format:e=>`${e.replace(/(\w{2})(\w{2})(\w{2})(\w{4})/,"$1.$2.$3.$4")}`},{name:"desa",align:"left",label:"Desa",field:"desa",sortable:!0}];return(e,a)=>{const l=(0,n.g2)("q-space"),s=(0,n.g2)("q-btn"),i=(0,n.g2)("q-card-section"),c=(0,n.g2)("q-dialog"),m=(0,n.g2)("q-card");return(0,n.uX)(),(0,n.Wv)(m,null,{default:(0,n.k6)((()=>[(0,n.bF)(i,{class:"q-pa-sm bg-green-7 text-green-11 text-subtitle1 flex flex-center"},{default:(0,n.k6)((()=>[(0,n.eW)(" Desa/Kelurahan "),(0,n.bF)(l),(0,n.bF)(s,{onClick:r,icon:"sync",round:"",dense:"",flat:"",class:"q-mr-md"}),(0,n.bF)(s,{onClick:p,icon:"add",round:"",dense:"",flat:""})])),_:1}),(0,n.bF)(_,{rows:t.value,columns:g,loading:u.value,onOnSelect:e=>null,"no-check-box":!0,onOnEdit:b},null,8,["rows","loading"]),(0,n.bF)(c,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=e=>d.value=e)},{default:(0,n.k6)((()=>[(0,n.bF)(ae,{data:o.value,onSuccessDelete:r,onSuccessSubmit:r},null,8,["data"])])),_:1},8,["modelValue"])])),_:1})}}},ne=te,le=ne;k()(te,"components",{QCard:K.A,QCardSection:S.A,QSpace:P.A,QBtn:g.A,QDialog:V.A});const se={__name:"IndexAlamat",setup(e){const a=(0,l.KR)(""),t=(0,l.KR)(""),s=(0,l.KR)("");function i(e){a.value=e?.id??"",t.value="",s.value=""}function u(e){t.value=e?.id??"",s.value=""}function o(e){s.value=e?.id??""}return(e,l)=>{const d=(0,n.g2)("q-card-section"),c=(0,n.g2)("q-card"),r=(0,n.g2)("q-page");return(0,n.uX)(),(0,n.Wv)(r,{class:"q-pa-sm"},{default:(0,n.k6)((()=>[(0,n.bF)(c,null,{default:(0,n.k6)((()=>[(0,n.bF)(d,{class:"q-pa-sm bg-green-8 text-green-11 text-subtitle1"},{default:(0,n.k6)((()=>[(0,n.eW)(" Pengaturan Alamat ")])),_:1}),(0,n.bF)(d,{class:"no-padding full-width row no-wrap justify-start items-start content-start scroll"},{default:(0,n.k6)((()=>[(0,n.bF)(O,{class:"q-ma-sm",style:{"min-width":"400px","max-width":"400px"},onOnSelect:i}),(0,n.bF)(z,{class:"q-ma-sm",style:{"min-width":"400px","max-width":"400px"},onOnSelect:u,provinsi_id:a.value},null,8,["provinsi_id"]),(0,n.bF)(M,{class:"q-ma-sm",style:{"min-width":"400px","max-width":"400px"},onOnSelect:o,provinsi_id:a.value,kabupaten_id:t.value},null,8,["provinsi_id","kabupaten_id"]),(0,n.bF)(le,{class:"q-ma-sm",style:{"min-width":"400px","max-width":"400px"},provinsi_id:a.value,kabupaten_id:t.value,kecamatan_id:s.value},null,8,["provinsi_id","kabupaten_id","kecamatan_id"])])),_:1})])),_:1})])),_:1})}}};var ie=t(75013);const ue=se,oe=ue;k()(se,"components",{QPage:ie.A,QCard:K.A,QCardSection:S.A})}}]);