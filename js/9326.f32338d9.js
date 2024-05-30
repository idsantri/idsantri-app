"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[9326],{9326:(e,a,t)=>{t.r(a),t.d(a,{default:()=>B});var l=t(1347),n=t(4187),s=t(5455),u=t(3336),i=t(528),o=t(9463),d=t(8633),c=t(7763),r=t(2364),m=t(2010),g=t(8158),p=t(6397),v=t(7543);const b={key:0},k={__name:"SantriStatusCrud",props:{data:{type:Object,required:!0},isNew:{type:Boolean,default:!0},title:{type:String,default:()=>"Input"}},emits:["successSubmit","successDelete"],setup(e,{emit:a}){const t=e,s=a,u=(0,n.KR)({}),i=(0,n.KR)([]),o=(0,n.KR)([]),k=(0,n.KR)(!1);(0,l.sV)((async()=>{Object.assign(u.value,t.data),await(0,m.Mr)({key:"status",loading:o,lists:i,sort:!0}),await(0,m.Mr)({key:"keterangan-status",loading:o,lists:i,sort:!0})}));const _=async()=>{const e={santri_id:u.value.santri_id,status:u.value.status,keterangan:u.value.keterangan};let a=null;a=t.isNew?await(0,g.A)({endPoint:"status",data:e,loading:k}):await(0,p.A)({endPoint:`status/${u.value.id}`,data:e,confirm:!0,notify:!0,loading:k}),a&&(document.getElementById("btn-close").click(),s("successSubmit"))},A=async e=>{const a={endPoint:`status/${e}`,loading:k},t=await(0,v.A)(a);t&&(document.getElementById("btn-close").click(),s("successDelete"))};return(a,n)=>{const s=(0,l.g2)("q-card-section"),m=(0,l.g2)("q-spinner-cube"),g=(0,l.g2)("q-dialog"),p=(0,l.g2)("q-input"),v=(0,l.g2)("q-select"),f=(0,l.g2)("q-btn"),S=(0,l.g2)("q-space"),q=(0,l.g2)("q-card-actions"),w=(0,l.g2)("q-form"),F=(0,l.g2)("q-card"),y=(0,l.gN)("close-popup");return(0,l.uX)(),(0,l.Wv)(F,{class:"full-width",style:{"max-width":"425px"}},{default:(0,l.k6)((()=>[(0,l.bF)(w,{onSubmit:(0,d.D$)(_,["prevent"])},{default:(0,l.k6)((()=>[(0,l.bF)(s,{class:"bg-green-7 text-green-11 q-pa-sm"},{default:(0,l.k6)((()=>[(0,l.bF)(r.A,{onEmitButton:e=>null},{default:(0,l.k6)((()=>[(0,l.eW)((0,c.v_)(t.title)+" — ",1),(0,l.Lk)("em",null,(0,c.v_)(e.isNew?"baru":"edit"),1)])),_:1})])),_:1}),(0,l.bF)(s,null,{default:(0,l.k6)((()=>[k.value?((0,l.uX)(),(0,l.CE)("div",b,[(0,l.bF)(g,{modelValue:k.value,"onUpdate:modelValue":n[0]||(n[0]=e=>k.value=e),persistent:""},{default:(0,l.k6)((()=>[(0,l.bF)(m,{color:"green-12",size:"8em",class:"flex q-ma-lg q-mx-auto"})])),_:1},8,["modelValue"])])):(0,l.Q3)("",!0),(0,l.bF)(p,{dense:"",outlined:"",label:"Nama","model-value":u.value?.nama+" ("+u.value?.santri_id+")",disable:"",filled:""},null,8,["model-value"]),(0,l.bF)(v,{dense:"",class:"q-mt-sm",outlined:"",label:"Status","emit-value":"","map-options":"",modelValue:u.value.status,"onUpdate:modelValue":n[1]||(n[1]=e=>u.value.status=e),options:i.value["status"],loading:o.value["status"],behavior:"menu"},null,8,["modelValue","options","loading"]),(0,l.bF)(v,{dense:"",class:"q-mt-sm",outlined:"",label:"Keterangan","emit-value":"","map-options":"",modelValue:u.value.keterangan,"onUpdate:modelValue":n[2]||(n[2]=e=>u.value.keterangan=e),options:i.value["keterangan-status"],loading:o.value["keterangan-status"],"use-input":"","new-value-mode":"add",clearable:"",behavior:"menu"},null,8,["modelValue","options","loading"])])),_:1}),(0,l.bF)(q,{class:"flex bg-green-6"},{default:(0,l.k6)((()=>[(0,l.bo)((0,l.bF)(f,{label:"Hapus",class:"bg-red text-red-1","no-caps":"",onClick:n[3]||(n[3]=e=>A(u.value.id))},null,512),[[d.aG,!t.isNew]]),(0,l.bF)(S),(0,l.bo)((0,l.bF)(f,{label:"Tutup",class:"bg-green-11","no-caps":"",id:"btn-close"},null,512),[[y]]),(0,l.bF)(f,{type:"submit",label:"Simpan",class:"bg-green-10 text-green-11","no-caps":""})])),_:1})])),_:1})])),_:1})}}};var _=t(3341),A=t(3417),f=t(222),S=t(45),q=t(1402),w=t(6067),F=t(6199),y=t(5034),V=t(2677),K=t(5873),Q=t(1038),C=t(272),R=t.n(C);const h=k,x=h;R()(k,"components",{QCard:_.A,QForm:A.A,QCardSection:f.A,QDialog:S.A,QSpinnerCube:q.A,QInput:w.A,QSelect:F.A,QCardActions:y.A,QBtn:V.A,QSpace:K.A}),R()(k,"directives",{ClosePopup:Q.A});var D=t(455),E=t(1734);const I={__name:"SantriStatus",setup(e){const a=(0,n.KR)(!1),t=(0,n.KR)(!1),d=(0,n.KR)({}),c=(0,n.KR)([]),r=(0,n.KR)([]),m=(0,n.KR)(!1),g=(0,n.KR)({}),p=(0,D.lq)(),v=p.params.id;async function b(){const e=await(0,E.A)({endPoint:`santri/${v}/status`,loading:a});r.value=e.status,c.value=e.status.map((e=>({Tanggal:(0,u.kz)(e.date_m)+" | "+(0,i.jh)(e.date_m),Status:e.status,Keterangan:e.keterangan||"-",id:e.id}))),g.value=e.santri}(0,l.sV)((async()=>{await b()}));const k=()=>{d.value={santri_id:g.value.id,nama:g.value.nama},m.value=!0,t.value=!0},_=({id:e})=>{d.value=(0,o.I)(r,e),d.value.santri_id=g.value.id,d.value.nama=g.value.nama,m.value=!1,t.value=!0};return(e,n)=>{const u=(0,l.g2)("q-dialog");return(0,l.uX)(),(0,l.CE)("div",null,[(0,l.bF)(s.A,{data:c.value,spinner:a.value,onAdd:k,onEdit:_},null,8,["data","spinner"]),(0,l.bF)(u,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},{default:(0,l.k6)((()=>[(0,l.bF)(x,{data:d.value,"is-new":m.value,title:"Input Status",onSuccessSubmit:b,onSuccessDelete:b},null,8,["data","is-new"])])),_:1},8,["modelValue"])])}}},N=I,B=N;R()(I,"components",{QDialog:S.A})}}]);