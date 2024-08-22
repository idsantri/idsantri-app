"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[193],{30193:(a,e,l)=>{l.r(e),l.d(e,{default:()=>na});var t=l(51347),n=l(37763),s=l(34187),u=l(60455),i=l(21734),d=l(23336),c=l(30528),o=l(95499),r=l(8633),m=l(6397);const g=(0,t.Lk)("div",{class:"text-subtitle1"},"Tetapkan Tanggal Kembali",-1),b={key:0},k={__name:"IzinKembali",props:{data:Object},emits:["successSubmit"],setup(a,{emit:e}){const l=a,n=e,u=(0,s.KR)({}),i=(0,s.KR)(!1);async function c(){const a=await(0,m.A)({endPoint:`izin-pesantren/${u.value.id}/set-kembali`,loading:i,data:{kembali_tgl:u.value.kembali_tgl},message:"Tetapkan sudah kembali ke pesantren pada tanggal ini?"});a&&(document.getElementById("btn-close-crud").click(),n("successSubmit"))}async function o(){const a=await(0,m.A)({endPoint:`izin-pesantren/${u.value.id}/set-kembali`,loading:i,data:{kembali_tgl:null},message:"Tetapkan belum kembali ke pesantren?"});a&&(document.getElementById("btn-close-crud").click(),n("successSubmit"))}return(0,t.sV)((()=>{u.value=l.data})),(0,t.wB)((()=>u.value.kembali_tgl),(a=>{u.value.kembali_tgl=(0,d.p_)(a)})),(a,e)=>{const l=(0,t.g2)("q-card-section"),n=(0,t.g2)("q-spinner-cube"),m=(0,t.g2)("q-dialog"),k=(0,t.g2)("q-input"),p=(0,t.g2)("q-btn"),v=(0,t.g2)("q-space"),_=(0,t.g2)("q-card-actions"),q=(0,t.g2)("q-form"),L=(0,t.g2)("q-card"),x=(0,t.gN)("close-popup");return(0,t.uX)(),(0,t.Wv)(L,{class:"full-width",style:{"max-width":"425px"}},{default:(0,t.k6)((()=>[(0,t.bF)(q,{onSubmit:(0,r.D$)(c,["prevent"])},{default:(0,t.k6)((()=>[(0,t.bF)(l,{class:"bg-green-7 text-green-11 q-pa-sm"},{default:(0,t.k6)((()=>[g])),_:1}),(0,t.bF)(l,{class:"q-pa-sm"},{default:(0,t.k6)((()=>[i.value?((0,t.uX)(),(0,t.CE)("div",b,[(0,t.bF)(m,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=a=>i.value=a),persistent:""},{default:(0,t.k6)((()=>[(0,t.bF)(n,{color:"green-12",size:"8em",class:"flex q-ma-lg q-mx-auto"})])),_:1},8,["modelValue"])])):(0,t.Q3)("",!0),(0,t.bF)(k,{dense:"",hint:(0,s.R1)(d.$P)(u.value.kembali_tgl)?(0,s.R1)(d.H6)(u.value.kembali_tgl):"",class:"q-mt-sm",outlined:"",label:"Tanggal (M)*",modelValue:u.value.kembali_tgl,"onUpdate:modelValue":e[1]||(e[1]=a=>u.value.kembali_tgl=a),type:"datetime-local",rules:[a=>!!a||"Harus diisi!"],"error-color":"negative"},null,8,["hint","modelValue","rules"])])),_:1}),(0,t.bF)(_,{class:"bg-green-6 text-green-11 q-pa-sm"},{default:(0,t.k6)((()=>[(0,t.bF)(p,{label:"Belum Kembali","no-caps":"",class:"q-px-sm text-red-1",color:"negative",onClick:o}),(0,t.bF)(v),(0,t.bo)((0,t.bF)(p,{label:"Tutup","no-caps":"",class:"q-px-sm",color:"green-4",id:"btn-close-crud"},null,512),[[x]]),(0,t.bF)(p,{label:"Simpan","no-caps":"",class:"q-px-sm",color:"green-10",type:"submit"})])),_:1})])),_:1})])),_:1})}}};var p=l(83341),v=l(53417),_=l(60222),q=l(30045),L=l(71402),x=l(46395),f=l(25034),F=l(22677),A=l(5873),Q=l(61038),R=l(272),S=l.n(R);const V=k,C=V;S()(k,"components",{QCard:p.A,QForm:v.A,QCardSection:_.A,QDialog:q.A,QSpinnerCube:L.A,QInput:x.A,QCardActions:f.A,QBtn:F.A,QSpace:A.A}),S()(k,"directives",{ClosePopup:Q.A});var K=l(45426),h=l(75605),w=l(64248),y=l(1995);const T=a=>((0,t.Qi)("data-v-0ee10b6d"),a=a(),(0,t.jt)(),a),I={class:"row",style:{"max-width":"1200px"}},z={class:"col-xs-12 col-sm-6"},$={class:"full-width"},P=T((()=>(0,t.Lk)("td",{class:"text-italic"},"Sifat:",-1))),D=T((()=>(0,t.Lk)("td",{class:"text-italic"},"Pengajuan:",-1))),U=T((()=>(0,t.Lk)("td",{class:"text-italic"},"Durasi:",-1))),B=T((()=>(0,t.Lk)("td",{class:"text-italic"}," Dari Tanggal: ",-1))),E=T((()=>(0,t.Lk)("td",{class:"text-italic"}," Sampai Tanggal: ",-1))),j=T((()=>(0,t.Lk)("td",{class:"text-italic"},"Keperluan:",-1))),H=T((()=>(0,t.Lk)("td",{class:"text-italic"},"Keterangan:",-1))),W=T((()=>(0,t.Lk)("td",{class:"text-italic"},"Tujuan:",-1))),X=T((()=>(0,t.Lk)("td",{class:"text-italic"},"Catatan:",-1))),M={colspan:"2"},N=T((()=>(0,t.Lk)("td",{class:"text-italic"},"Kembali:",-1))),O=T((()=>(0,t.Lk)("td",{class:"text-italic"},"Status:",-1))),G={class:"col-xs-12 col-sm-6"},J={__name:"IzinById",setup(a){const e=(0,s.KR)(!1),l=(0,s.KR)(""),r=(0,u.lq)(),m=(0,s.KR)({}),g=(0,s.KR)(!1),b=(0,s.KR)(!1),k=(0,s.KR)(!1),p=(0,s.KR)();function v(){l.value=`reports/izin-pesantren/view?id=${m.value.id}&token=${(0,y.A)()}`,e.value=!0}async function _(){p.value=null;const a=await(0,i.A)({endPoint:`izin-pesantren/${r.params.id}`,loading:g});if(m.value=a.izin_pesantren,m.value){p.value=m.value.santri_id;const a=await(0,i.A)({endPoint:`images/santri/${m.value.santri_id}`});m.value.image=a.image_url}}function q(a){const e=/\(\+(\d+)\)/g,l=a.replace(e,((a,e)=>`(terlambat ${e} hari)`));return l}return(0,t.sV)((async()=>{r.params.id&&await _()})),(a,u)=>{const i=(0,t.g2)("q-toolbar-title"),r=(0,t.g2)("q-btn"),L=(0,t.g2)("q-toolbar"),x=(0,t.g2)("q-card-section"),f=(0,t.g2)("q-space"),F=(0,t.g2)("q-separator"),A=(0,t.g2)("q-card"),Q=(0,t.g2)("q-dialog"),R=(0,t.g2)("q-page");return(0,t.uX)(),(0,t.Wv)(R,{class:""},{default:(0,t.k6)((()=>[(0,t.Lk)("div",I,[(0,t.Lk)("div",z,[(0,t.bF)(A,{class:"q-ma-sm"},{default:(0,t.k6)((()=>[(0,t.bF)(x,{class:"bg-green-8 no-padding"},{default:(0,t.k6)((()=>[(0,t.bF)(L,{class:"no-padding no-margin"},{default:(0,t.k6)((()=>[(0,t.bF)(i,{class:"text-subtitle1 q-ml-sm text-green-11"},{default:(0,t.k6)((()=>[(0,t.eW)(" Data Perizinan ")])),_:1}),(0,t.bF)(r,{dense:"",class:"q-px-md q-mr-sm text-green-10",label:"Cetak","no-caps":"",icon:"print",color:"green-11",onClick:v}),(0,t.bF)(r,{dense:"",class:"q-px-md q-mr-sm text-green-10",label:"Edit","no-caps":"",icon:"edit",color:"green-11",onClick:u[0]||(u[0]=a=>b.value=!0)})])),_:1})])),_:1}),m.value?((0,t.uX)(),(0,t.Wv)(x,{key:0,class:"q-pa-sm"},{default:(0,t.k6)((()=>[(0,t.bF)(K.A,{data:m.value,loading:g.value},null,8,["data","loading"]),(0,t.bF)(A,{bordered:"",flat:"",class:"q-mt-sm"},{default:(0,t.k6)((()=>[(0,t.bF)(x,{class:"q-pa-sm text-subtitle1 bg-green-11 flex"},{default:(0,t.k6)((()=>[(0,t.eW)(" Data Izin "),(0,t.bF)(f),(0,t.bF)(r,{dense:"",label:"Kembali",icon:"manage_history","no-caps":"",class:"q-px-sm bg-green-10 text-green-12",onClick:u[1]||(u[1]=a=>k.value=!0)})])),_:1}),(0,t.bF)(x,{class:"q-pa-sm"},{default:(0,t.k6)((()=>[(0,t.Lk)("table",$,[(0,t.Lk)("tr",null,[P,(0,t.Lk)("td",null,(0,n.v_)(m.value.sifat),1)]),(0,t.Lk)("tr",null,[D,(0,t.Lk)("td",null,(0,n.v_)(m.value.pengajuan),1)]),(0,t.Lk)("tr",null,[U,(0,t.Lk)("td",null,(0,n.v_)(m.value.durasi+" hari"),1)]),(0,t.Lk)("tr",null,[B,(0,t.Lk)("td",null,(0,n.v_)((0,s.R1)(d.H6)(m.value.dari_tgl)+" | "+(0,s.R1)(c.IU)((0,s.R1)(c.cE)(m.value.dari_tgl))),1)]),(0,t.Lk)("tr",null,[E,(0,t.Lk)("td",null,(0,n.v_)((0,s.R1)(d.H6)(m.value.sampai_tgl)+" | "+(0,s.R1)(c.IU)((0,s.R1)(c.cE)(m.value.sampai_tgl))),1)]),(0,t.Lk)("tr",null,[j,(0,t.Lk)("td",null,(0,n.v_)(m.value.keperluan),1)]),(0,t.Lk)("tr",null,[H,(0,t.Lk)("td",null,(0,n.v_)(m.value.keterangan??"-"),1)]),(0,t.Lk)("tr",null,[W,(0,t.Lk)("td",null,(0,n.v_)(m.value.tujuan),1)]),(0,t.Lk)("tr",null,[X,(0,t.Lk)("td",null,(0,n.v_)(m.value.catatan||"-"),1)]),(0,t.Lk)("tr",null,[(0,t.Lk)("td",M,[(0,t.bF)(F,{color:"green-8"})])]),(0,t.Lk)("tr",null,[N,(0,t.Lk)("td",null,(0,n.v_)((0,s.R1)(d.H6)(m.value.kembali_tgl)+" | "+(0,s.R1)(c.IU)((0,s.R1)(c.cE)(m.value.kembali_tgl))),1)]),(0,t.Lk)("tr",null,[O,(0,t.Lk)("td",null,(0,n.v_)(m.value.status?q(m.value.status):""),1)])])])),_:1})])),_:1})])),_:1})):(0,t.Q3)("",!0)])),_:1})]),(0,t.Lk)("div",G,[(0,t.bF)(w.A,{class:"q-ma-sm",santri_id:p.value},null,8,["santri_id"])])]),(0,t.bF)(Q,{modelValue:b.value,"onUpdate:modelValue":u[3]||(u[3]=a=>b.value=a)},{default:(0,t.k6)((()=>[(0,t.bF)(o.A,{data:m.value,onSuccessDelete:u[2]||(u[2]=e=>a.$router.go(-1)),onSuccessSubmit:_},null,8,["data"])])),_:1},8,["modelValue"]),(0,t.bF)(Q,{modelValue:k.value,"onUpdate:modelValue":u[4]||(u[4]=a=>k.value=a)},{default:(0,t.k6)((()=>[(0,t.bF)(C,{data:{id:m.value.id,kembali_tgl:m.value.kembali_tgl},onSuccessSubmit:_},null,8,["data"])])),_:1},8,["modelValue"]),(0,t.bF)(Q,{modelValue:e.value,"onUpdate:modelValue":u[5]||(u[5]=a=>e.value=a)},{default:(0,t.k6)((()=>[(0,t.bF)(h.A,{url:l.value},null,8,["url"])])),_:1},8,["modelValue"])])),_:1})}}};var Y=l(32968),Z=l(75013),aa=l(66739),ea=l(4629),la=l(86915);const ta=(0,Y.A)(J,[["__scopeId","data-v-0ee10b6d"]]),na=ta;S()(J,"components",{QPage:Z.A,QCard:p.A,QCardSection:_.A,QToolbar:aa.A,QToolbarTitle:ea.A,QBtn:F.A,QSpace:A.A,QSeparator:la.A,QDialog:q.A})}}]);