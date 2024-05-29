"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[5442],{5442:(a,e,l)=>{l.r(e),l.d(e,{default:()=>G});var t=l(1347),n=l(7763),s=l(4187),u=l(1734),i=l(3336),d=l(528),c=l(455),o=l(5499),r=l(8633),g=l(6397);const m=(0,t.Lk)("div",{class:"text-subtitle1"},"Tetapkan Tanggal Kembali",-1),b={key:0},p={__name:"IzinKembali",props:{data:Object},emits:["successSubmit"],setup(a,{emit:e}){const l=a,n=e,u=(0,s.KR)({}),d=(0,s.KR)(!1);async function c(){const a=await(0,g.A)({endPoint:`izin-pesantren/${u.value.id}/set-kembali`,loading:d,data:{kembali_tgl:u.value.kembali_tgl},message:"Tetapkan sudah kembali ke pesantren pada tanggal ini?"});a&&n("successSubmit")}async function o(){const a=await(0,g.A)({endPoint:`izin-pesantren/${u.value.id}/set-kembali`,loading:d,data:{kembali_tgl:null},message:"Tetapkan belum kembali ke pesantren?"});a&&n("successSubmit")}return(0,t.sV)((()=>{u.value=l.data})),(0,t.wB)((()=>u.value.kembali_tgl),(a=>{u.value.kembali_tgl=(0,i.p_)(a)})),(a,e)=>{const l=(0,t.g2)("q-card-section"),n=(0,t.g2)("q-spinner-cube"),g=(0,t.g2)("q-dialog"),p=(0,t.g2)("q-input"),k=(0,t.g2)("q-btn"),v=(0,t.g2)("q-space"),_=(0,t.g2)("q-card-actions"),q=(0,t.g2)("q-form"),f=(0,t.g2)("q-card"),x=(0,t.gN)("close-popup");return(0,t.uX)(),(0,t.Wv)(f,{class:"full-width",style:{"max-width":"425px"}},{default:(0,t.k6)((()=>[(0,t.bF)(q,{onSubmit:(0,r.D$)(c,["prevent"])},{default:(0,t.k6)((()=>[(0,t.bF)(l,{class:"bg-green-7 text-green-11 q-pa-sm"},{default:(0,t.k6)((()=>[m])),_:1}),(0,t.bF)(l,{class:"q-pa-sm"},{default:(0,t.k6)((()=>[d.value?((0,t.uX)(),(0,t.CE)("div",b,[(0,t.bF)(g,{modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=a=>d.value=a),persistent:""},{default:(0,t.k6)((()=>[(0,t.bF)(n,{color:"green-12",size:"8em",class:"flex q-ma-lg q-mx-auto"})])),_:1},8,["modelValue"])])):(0,t.Q3)("",!0),(0,t.bF)(p,{dense:"",hint:(0,s.R1)(i.$P)(u.value.kembali_tgl)?(0,s.R1)(i.H6)(u.value.kembali_tgl):"",class:"q-mt-sm",outlined:"",label:"Tanggal (M)*",modelValue:u.value.kembali_tgl,"onUpdate:modelValue":e[1]||(e[1]=a=>u.value.kembali_tgl=a),type:"datetime-local",rules:[a=>!!a||"Harus diisi!"],"error-color":"negative"},null,8,["hint","modelValue","rules"])])),_:1}),(0,t.bF)(_,{class:"bg-green-6 text-green-11 q-pa-sm"},{default:(0,t.k6)((()=>[(0,t.bF)(k,{label:"Belum Kembali","no-caps":"",class:"q-px-sm text-red-1",color:"negative",onClick:o}),(0,t.bF)(v),(0,t.bo)((0,t.bF)(k,{label:"Tutup","no-caps":"",class:"q-px-sm",color:"green-4"},null,512),[[x]]),(0,t.bF)(k,{label:"Simpan","no-caps":"",class:"q-px-sm",color:"green-10",type:"submit"})])),_:1})])),_:1})])),_:1})}}};var k=l(3341),v=l(3417),_=l(222),q=l(45),f=l(1402),x=l(6067),F=l(5034),L=l(2677),A=l(5873),Q=l(1038),R=l(272),V=l.n(R);const C=p,S=C;V()(p,"components",{QCard:k.A,QForm:v.A,QCardSection:_.A,QDialog:q.A,QSpinnerCube:f.A,QInput:x.A,QCardActions:F.A,QBtn:L.A,QSpace:A.A}),V()(p,"directives",{ClosePopup:Q.A});var h=l(5426),w=l(5605);const K=a=>((0,t.Qi)("data-v-c9755bde"),a=a(),(0,t.jt)(),a),T=K((()=>(0,t.Lk)("td",{class:"text-italic"},"Sifat Izin:",-1))),y=K((()=>(0,t.Lk)("td",{class:"text-italic"},"Durasi:",-1))),z=K((()=>(0,t.Lk)("td",{class:"text-italic"},"Dari Tanggal:",-1))),I=K((()=>(0,t.Lk)("td",{class:"text-italic"},"Sampai Tanggal:",-1))),D=K((()=>(0,t.Lk)("td",{class:"text-italic"},"Keperluan:",-1))),P=K((()=>(0,t.Lk)("td",{class:"text-italic"},"Tujuan:",-1))),U=K((()=>(0,t.Lk)("td",{class:"text-italic"},"Catatan:",-1))),$={colspan:"2"},E=K((()=>(0,t.Lk)("td",{class:"text-italic"},"Kembali:",-1))),H=K((()=>(0,t.Lk)("td",{class:"text-italic"},"Status:",-1))),W={__name:"IzinDetail",setup(a){const e=(0,s.KR)(!1),l=(0,s.KR)(""),r=(0,c.lq)(),g=(0,s.KR)({}),m=(0,s.KR)(!1),b=(0,s.KR)(!1),p=(0,s.KR)(!1);function k(){l.value=`reports/izin-pesantren/view?id=${g.value.id}`,e.value=!0}async function v(){const a=await(0,u.A)({endPoint:`izin-pesantren/${r.params.id}`,loading:m});if(g.value=a.izin_pesantren,g.value){const a=await(0,u.A)({endPoint:`images/santri/${g.value.santri_id}`});g.value.image=a.image_url}}async function _(){p.value=!1,await v()}function q(a){const e=/\(\+(\d+)\)/g,l=a.replace(e,((a,e)=>`(terlambat ${e} hari)`));return l}return(0,t.sV)((async()=>{r.params.id&&await v()})),(a,u)=>{const c=(0,t.g2)("q-toolbar-title"),r=(0,t.g2)("q-btn"),v=(0,t.g2)("q-toolbar"),f=(0,t.g2)("q-card-section"),x=(0,t.g2)("q-space"),F=(0,t.g2)("q-separator"),L=(0,t.g2)("q-card"),A=(0,t.g2)("q-dialog"),Q=(0,t.g2)("q-page");return(0,t.uX)(),(0,t.Wv)(Q,{class:"q-pa-sm"},{default:(0,t.k6)((()=>[(0,t.bF)(L,{class:"",style:{"max-width":"600px"}},{default:(0,t.k6)((()=>[(0,t.bF)(f,{class:"bg-green-8 no-padding"},{default:(0,t.k6)((()=>[(0,t.bF)(v,{class:"no-padding no-margin"},{default:(0,t.k6)((()=>[(0,t.bF)(c,{class:"text-subtitle1 q-ml-sm text-green-11"},{default:(0,t.k6)((()=>[(0,t.eW)(" Data Perizinan ")])),_:1}),(0,t.bF)(r,{dense:"",class:"q-px-md q-mr-sm text-green-10",label:"Cetak","no-caps":"",icon:"print",color:"green-11",onClick:k}),(0,t.bF)(r,{dense:"",class:"q-px-md q-mr-sm text-green-10",label:"Edit","no-caps":"",icon:"edit",color:"green-2",onClick:u[0]||(u[0]=a=>b.value=!0)})])),_:1})])),_:1}),g.value?((0,t.uX)(),(0,t.Wv)(f,{key:0,class:"q-pa-sm"},{default:(0,t.k6)((()=>[(0,t.bF)(h.A,{data:g.value,loading:m.value},null,8,["data","loading"]),(0,t.bF)(L,{bordered:"",flat:"",class:"q-mt-sm"},{default:(0,t.k6)((()=>[(0,t.bF)(f,{class:"q-pa-sm text-subtitle1 bg-green-11 flex"},{default:(0,t.k6)((()=>[(0,t.eW)(" Data Izin "),(0,t.bF)(x),(0,t.bF)(r,{dense:"",label:"Kembali",icon:"manage_history","no-caps":"",class:"q-px-sm bg-green-10 text-green-12",onClick:u[1]||(u[1]=a=>p.value=!0)})])),_:1}),(0,t.bF)(f,{class:"q-pa-sm"},{default:(0,t.k6)((()=>[(0,t.Lk)("table",null,[(0,t.Lk)("tr",null,[T,(0,t.Lk)("td",null,(0,n.v_)(g.value.sifat),1)]),(0,t.Lk)("tr",null,[y,(0,t.Lk)("td",null,(0,n.v_)(g.value.durasi+" hari"),1)]),(0,t.Lk)("tr",null,[z,(0,t.Lk)("td",null,(0,n.v_)((0,s.R1)(i.H6)(g.value.dari_tgl)+" | "+(0,s.R1)(d.IU)((0,s.R1)(d.cE)(g.value.dari_tgl))),1)]),(0,t.Lk)("tr",null,[I,(0,t.Lk)("td",null,(0,n.v_)((0,s.R1)(i.H6)(g.value.sampai_tgl)+" | "+(0,s.R1)(d.IU)((0,s.R1)(d.cE)(g.value.sampai_tgl))),1)]),(0,t.Lk)("tr",null,[D,(0,t.Lk)("td",null,(0,n.v_)(g.value.keperluan)+" "+(0,n.v_)(g.value.keterangan?" ("+g.value.keterangan+")":""),1)]),(0,t.Lk)("tr",null,[P,(0,t.Lk)("td",null,(0,n.v_)(g.value.tujuan),1)]),(0,t.Lk)("tr",null,[U,(0,t.Lk)("td",null,(0,n.v_)(g.value.catatan||"-"),1)]),(0,t.Lk)("tr",null,[(0,t.Lk)("td",$,[(0,t.bF)(F,{color:"green-8"})])]),(0,t.Lk)("tr",null,[E,(0,t.Lk)("td",null,(0,n.v_)((0,s.R1)(i.H6)(g.value.kembali_tgl)+" | "+(0,s.R1)(d.IU)((0,s.R1)(d.cE)(g.value.kembali_tgl))),1)]),(0,t.Lk)("tr",null,[H,(0,t.Lk)("td",null,(0,n.v_)(g.value.status?q(g.value.status):""),1)])])])),_:1})])),_:1})])),_:1})):(0,t.Q3)("",!0)])),_:1}),(0,t.bF)(A,{modelValue:b.value,"onUpdate:modelValue":u[2]||(u[2]=a=>b.value=a)},{default:(0,t.k6)((()=>[(0,t.bF)(o.A,{"is-new":!1,data:g.value},null,8,["data"])])),_:1},8,["modelValue"]),(0,t.bF)(A,{modelValue:p.value,"onUpdate:modelValue":u[3]||(u[3]=a=>p.value=a)},{default:(0,t.k6)((()=>[(0,t.bF)(S,{data:{id:g.value.id,kembali_tgl:g.value.kembali_tgl},onSuccessSubmit:_},null,8,["data"])])),_:1},8,["modelValue"]),(0,t.bF)(A,{modelValue:e.value,"onUpdate:modelValue":u[4]||(u[4]=a=>e.value=a)},{default:(0,t.k6)((()=>[(0,t.bF)(w.A,{url:l.value},null,8,["url"])])),_:1},8,["modelValue"])])),_:1})}}};var j=l(2968),B=l(5013),X=l(6739),M=l(4629),N=l(6915);const O=(0,j.A)(W,[["__scopeId","data-v-c9755bde"]]),G=O;V()(W,"components",{QPage:B.A,QCard:k.A,QCardSection:_.A,QToolbar:X.A,QToolbarTitle:M.A,QBtn:L.A,QSpace:A.A,QSeparator:N.A,QDialog:q.A})}}]);