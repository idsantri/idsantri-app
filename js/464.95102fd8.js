"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[464],{60464:(a,e,l)=>{l.r(e),l.d(e,{default:()=>va});var t=l(51347),n=(l(67590),l(37763)),s=l(34187),u=l(60455),i=l(58094),d=l(23336),r=l(40423),o=l(52561);const c={key:0},m={key:1,class:"row"},p={class:"col-4 q-pr-sm"},v={class:"col"},b={class:"text-caption text-italic"},g={class:"q-mb-sm"},k={__name:"PersonaliaIdentitasCard",setup(a){const e=(0,u.lq)(),l=(0,u.rd)(),k=(0,s.KR)({}),_=(0,s.KR)({}),q=(0,s.KR)(!1),F=(0,s.KR)(!1);async function A(a){F.value=!1,a.id==e.params.id?(await f(),await h()):l.push(`/personalia/${a.id}`)}async function h(){const a=await(0,i.A)({endPoint:`images/aparatur/${k.value.id}`});k.value.image=a.image_url}async function f(){const a=await(0,i.A)({endPoint:`aparatur/${e.params.id}`,loading:q});k.value=a.aparatur,_.value={Nama:`${k.value.nama?.toUpperCase()} (${k.value.sex?.toUpperCase()})`,Alamat:`${k.value.jl||" "} RT ${String(k.value.rt||0).padStart(3,0)} RW ${String(k.value.rw||0).padStart(3,"0")} ${k.value.desa||" "} ${k.value.kecamatan||" "} ${k.value.kabupaten||" "} ${k.value.provinsi||" "} ${k.value.kode_pos||" "}`.replace(/\s\s+/g," "),Kelahiran:`${k.value.tmp_lahir||"-"}, ${(0,d.H6)(k.value.tgl_lahir)}`,Telepon:k.value.telepon||"-",Email:k.value.email||"-"}}(0,t.sV)((async()=>{e.params.id&&(await f(),await h())}));const w=(0,s.KR)(!1),C=a=>w.value=a;async function y(){w.value=!1,await h()}return(a,l)=>{const u=(0,t.g2)("q-toolbar-title"),i=(0,t.g2)("q-btn"),d=(0,t.g2)("q-toolbar"),h=(0,t.g2)("q-card-section"),f=(0,t.g2)("q-spinner-cube"),Q=(0,t.g2)("q-img"),x=(0,t.g2)("q-card"),V=(0,t.g2)("q-dialog");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.bF)(x,{class:""},{default:(0,t.k6)((()=>[(0,t.bF)(h,{class:"bg-green-8 no-padding"},{default:(0,t.k6)((()=>[(0,t.bF)(d,{class:"no-padding no-margin"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{class:"text-subtitle1 q-ml-sm text-green-11"},{default:(0,t.k6)((()=>[(0,t.eW)(" Data Personalia ")])),_:1}),(0,t.bF)(i,{dense:"",class:"q-px-md q-mr-sm text-green-10",label:"Edit","no-caps":"",icon:"edit",color:"green-2",onClick:l[0]||(l[0]=a=>F.value=!0)})])),_:1})])),_:1}),(0,t.bF)(h,{class:"q-pa-sm"},{default:(0,t.k6)((()=>[q.value?((0,t.uX)(),(0,t.CE)("div",c,[(0,t.bF)(f,{color:"green-12",size:"8em",class:"flex q-ma-lg q-mx-auto"})])):((0,t.uX)(),(0,t.CE)("div",m,[(0,t.Lk)("div",p,[(0,t.bF)(Q,{src:k.value?.image||"/user-default.png",ratio:3/4,alt:"aparatur"},null,8,["src"]),(0,t.bF)(i,{class:"q-mt-sm full-width",icon:"upload","no-caps":"",label:"Foto",dense:"",size:"sm",outline:"",color:"green-10",onClick:l[1]||(l[1]=a=>w.value=!0)})]),(0,t.Lk)("div",v,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(_.value,((a,e)=>((0,t.uX)(),(0,t.CE)("div",{key:e},[(0,t.Lk)("div",b,(0,n.v_)(e),1),(0,t.Lk)("div",g,(0,n.v_)(a),1)])))),128))])]))])),_:1})])),_:1}),(0,t.bF)(V,{persistent:"",modelValue:F.value,"onUpdate:modelValue":l[2]||(l[2]=a=>F.value=a)},{default:(0,t.k6)((()=>[(0,t.bF)(o.A,{"is-new":!1,"data-aparatur":k.value,onSuccessSubmit:A,onSuccessDelete:A},null,8,["data-aparatur"])])),_:1},8,["modelValue"]),(0,t.bF)(r.A,{"show-uploader":w.value,url:`/images/aparatur/${(0,s.R1)(e).params.id}`,"img-format":"webp",onUpdateUploader:C,onSuccessUpload:y},null,8,["show-uploader","url"])],64)}}};var _=l(83341),q=l(60222),F=l(66739),A=l(4629),h=l(22677),f=l(71402),w=l(87472),C=l(30045),y=l(272),Q=l.n(y);const x=k,V=x;Q()(k,"components",{QCard:_.A,QCardSection:q.A,QToolbar:F.A,QToolbarTitle:A.A,QBtn:h.A,QSpinnerCube:f.A,QImg:w.A,QDialog:C.A});var S=l(69463),K=l(8633),$=l(76162),j=l(20675),R=l(59678),X=l(47509),T=l(39987),E=l(92938),P=l(90486);const U={key:0},W={__name:"PersonaliaMadrasahModal",props:{data:{type:Object,required:!0},isNew:{type:Boolean,default:!0}},emits:["successSubmit","successDelete"],setup(a,{emit:e}){const l=a,n=e,u=(0,s.KR)({}),i=(0,s.KR)(!1),d=(0,s.KR)([]),r=(0,s.KR)([]);(0,t.sV)((async()=>{Object.assign(u.value,l.data),r.value=(0,$.A)().getByStateName("tahun-ajaran"),d.value=(0,$.A)().getByStateName("tingkat-pendidikan")}));const o=async()=>{const a={id:u.value.id,aparatur_id:u.value.aparatur_id,jabatan:u.value.jabatan,th_ajaran_h:u.value.th_ajaran_h,tingkat_id:u.value.tingkat_id,kelas:u.value.kelas,ruang:u.value.ruang,keterangan:u.value.keterangan};let e=null;e=l.isNew?await(0,R.A)({endPoint:"aparatur-madrasah",data:a,loading:i}):await(0,X.A)({endPoint:`aparatur-madrasah/${a.id}`,data:a,confirm:!0,loading:i}),e&&n("successSubmit")},c=async a=>{const e=await(0,j.A)({endPoint:`aparatur-madrasah/${a}`,loading:i});e&&n("successDelete")};return(e,n)=>{const s=(0,t.g2)("q-spinner-cube"),d=(0,t.g2)("q-input"),r=(0,t.g2)("q-card-section"),m=(0,t.g2)("q-btn"),p=(0,t.g2)("q-space"),v=(0,t.g2)("q-card-actions"),b=(0,t.g2)("q-form"),g=(0,t.g2)("q-card"),k=(0,t.gN)("close-popup");return(0,t.uX)(),(0,t.Wv)(g,{class:"full-width",style:{"max-width":"425px"}},{default:(0,t.k6)((()=>[(0,t.bF)(b,{onSubmit:(0,K.D$)(o,["prevent"])},{default:(0,t.k6)((()=>[(0,t.bF)(T.A,{title:"Jabatan Madrasiyah","is-new":a.isNew},null,8,["is-new"]),i.value?((0,t.uX)(),(0,t.CE)("div",U,[(0,t.bF)(s,{color:"green-12",size:"8em",class:"flex q-ma-lg q-mx-auto"})])):((0,t.uX)(),(0,t.Wv)(r,{key:1},{default:(0,t.k6)((()=>[(0,t.bF)(d,{dense:"",outlined:"",label:"Nama","model-value":u.value?.nama+" ("+u.value?.aparatur_id+")",disable:"",filled:""},null,8,["model-value"]),(0,t.bF)(P.A,{modelValue:u.value.jabatan,"onUpdate:modelValue":n[0]||(n[0]=a=>u.value.jabatan=a),url:"jabatan-madrasiyah",label:"Jabatan",class:"q-mt-sm",rules:[a=>!!a||"Harus diisi!"]},null,8,["modelValue","rules"]),(0,t.bF)(P.A,{modelValue:u.value.th_ajaran_h,"onUpdate:modelValue":n[1]||(n[1]=a=>u.value.th_ajaran_h=a),url:"tahun-ajaran",label:"Tahun Ajaran *",sort:"desc",class:"q-mt-sm",rules:[a=>!!a||"Harus diisi!"],selected:u.value.th_ajaran_h},null,8,["modelValue","rules","selected"]),(0,t.bF)(E.A,{modelValue:u.value.tingkat_id,"onUpdate:modelValue":n[2]||(n[2]=a=>u.value.tingkat_id=a),class:"q-mt-sm",rules:[a=>!!a||"Harus diisi!"],selected:u.value.tingkat_id},null,8,["modelValue","rules","selected"]),(0,t.bF)(P.A,{modelValue:u.value.kelas,"onUpdate:modelValue":n[3]||(n[3]=a=>u.value.kelas=a),url:"kelas",label:"Kelas",class:"q-mt-sm"},null,8,["modelValue"]),(0,t.bF)(d,{dense:"",class:"q-mt-sm",outlined:"",label:"Ruang",modelValue:u.value.ruang,"onUpdate:modelValue":n[4]||(n[4]=a=>u.value.ruang=a)},null,8,["modelValue"]),(0,t.bF)(d,{dense:"",class:"q-mt-sm",outlined:"",label:"Keterangan",modelValue:u.value.keterangan,"onUpdate:modelValue":n[5]||(n[5]=a=>u.value.keterangan=a),autogrow:""},null,8,["modelValue"])])),_:1})),(0,t.bF)(v,{class:"flex bg-green-6"},{default:(0,t.k6)((()=>[(0,t.bo)((0,t.bF)(m,{label:"Hapus",class:"bg-red text-red-1","no-caps":"",onClick:n[6]||(n[6]=a=>c(u.value.id))},null,512),[[K.aG,!l.isNew]]),(0,t.bF)(p),(0,t.bo)((0,t.bF)(m,{label:"Tutup",class:"bg-green-11","no-caps":"",id:"btn-close-santri-crud"},null,512),[[k]]),(0,t.bF)(m,{type:"submit",label:"Simpan",class:"bg-green-10 text-green-11","no-caps":""})])),_:1})])),_:1})])),_:1})}}};var L=l(53417),D=l(46395),I=l(25034),N=l(5873),B=l(61038);const H=W,M=H;Q()(W,"components",{QCard:_.A,QForm:L.A,QSpinnerCube:f.A,QCardSection:q.A,QInput:D.A,QCardActions:I.A,QBtn:h.A,QSpace:N.A}),Q()(W,"directives",{ClosePopup:B.A});const z={key:0},J={key:1},O={key:0},G=(0,t.Lk)("div",{class:"bg-red-1 text-negative text-center q-pa-md"},[(0,t.eW)(" Tidak data data untuk ditampilkan."),(0,t.Lk)("br"),(0,t.eW)("Silakan tambahkah data! ")],-1),Y=[G],Z={class:"text-bold"},aa={__name:"PersonaliaMadrasahCard",setup(a){const e=(0,u.lq)(),l=(0,s.KR)(!1),d=(0,s.KR)([]),r=(0,s.KR)({}),o=(0,s.KR)(!1),c=(0,s.KR)({}),m=(0,s.KR)(!1);async function p(){o.value=!1,await v()}async function v(){if(e.params.id){const a=await(0,i.A)({endPoint:`aparatur/${e.params.id}/madrasah`,loading:l});d.value=a.aparatur_madrasah,r.value=a.aparatur}}(0,t.sV)((async()=>{await v()}));const b=()=>{c.value={aparatur_id:r.value.id,nama:r.value.nama},m.value=!0,o.value=!0},g=a=>{c.value=(0,S.I$)(d.value,a),c.value.nama=r.value.nama,m.value=!1,o.value=!0};return(a,e)=>{const s=(0,t.g2)("q-toolbar-title"),u=(0,t.g2)("q-btn"),i=(0,t.g2)("q-toolbar"),r=(0,t.g2)("q-card-section"),v=(0,t.g2)("q-skeleton"),k=(0,t.g2)("q-item-label"),_=(0,t.g2)("q-item-section"),q=(0,t.g2)("q-item"),F=(0,t.g2)("q-list"),A=(0,t.g2)("q-card"),h=(0,t.g2)("q-dialog");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.bF)(A,{class:""},{default:(0,t.k6)((()=>[(0,t.bF)(r,{class:"bg-green-8 no-padding"},{default:(0,t.k6)((()=>[(0,t.bF)(i,{class:"no-padding no-margin"},{default:(0,t.k6)((()=>[(0,t.bF)(s,{class:"text-subtitle1 q-ml-sm text-green-11"},{default:(0,t.k6)((()=>[(0,t.eW)(" Jabatan ")])),_:1}),(0,t.bF)(u,{dense:"",class:"q-px-md q-mr-sm text-green-10",label:"Tambah","no-caps":"",icon:"add",color:"green-2",onClick:b})])),_:1})])),_:1}),(0,t.bF)(r,{class:"q-pa-sm"},{default:(0,t.k6)((()=>[l.value?((0,t.uX)(),(0,t.CE)("div",z,[(0,t.bF)(v,{height:"80px"})])):((0,t.uX)(),(0,t.CE)("div",J,[d.value.length?((0,t.uX)(),(0,t.Wv)(F,{key:1,bordered:"",separator:""},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(d.value,(a=>((0,t.uX)(),(0,t.Wv)(q,{key:a.id,class:"q-my-sm"},{default:(0,t.k6)((()=>[(0,t.bF)(_,null,{default:(0,t.k6)((()=>[(0,t.bF)(k,{overline:""},{default:(0,t.k6)((()=>[(0,t.eW)((0,n.v_)(a.th_ajaran_h)+" | "+(0,n.v_)(a.th_ajaran_m),1)])),_:2},1024),(0,t.bF)(k,{lines:"1"},{default:(0,t.k6)((()=>[(0,t.Lk)("span",Z,(0,n.v_)(a.jabatan),1),(0,t.eW)("; "+(0,n.v_)(a.tingkat)+(0,n.v_)(a.kelas?"; "+a.kelas:"")+" "+(0,n.v_)(a.ruang?"( "+a.ruang+")":""),1)])),_:2},1024),(0,t.bF)(k,{caption:"",class:"text-italic"},{default:(0,t.k6)((()=>[(0,t.eW)((0,n.v_)(a.keterangan||"-"),1)])),_:2},1024)])),_:2},1024),(0,t.bF)(_,{side:""},{default:(0,t.k6)((()=>[(0,t.bF)(u,{icon:"edit",round:"",dense:"",color:"green",onClick:e=>g(a.id)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})):((0,t.uX)(),(0,t.CE)("div",O,Y))]))])),_:1})])),_:1}),(0,t.bF)(h,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=a=>o.value=a)},{default:(0,t.k6)((()=>[(0,t.bF)(M,{data:c.value,"is-new":m.value,onSuccessSubmit:p,onSuccessDelete:p},null,8,["data","is-new"])])),_:1},8,["modelValue"])],64)}}};var ea=l(70981),la=l(53766),ta=l(22589),na=l(14958),sa=l(99039);const ua=aa,ia=ua;Q()(aa,"components",{QCard:_.A,QCardSection:q.A,QToolbar:F.A,QToolbarTitle:A.A,QBtn:h.A,QSkeleton:ea.Ay,QList:la.A,QItem:ta.A,QItemSection:na.A,QItemLabel:sa.A,QDialog:C.A});const da={class:"row",style:{"max-width":"1200px"}},ra={class:"col-12 col-md-6 q-pa-sm"},oa={class:"col-12 col-md-6 q-pa-sm"},ca={__name:"PersonaliaDetail",setup(a){return(a,e)=>{const l=(0,t.g2)("q-page");return(0,t.uX)(),(0,t.Wv)(l,{class:""},{default:(0,t.k6)((()=>[(0,t.Lk)("div",da,[(0,t.Lk)("div",ra,[(0,t.bF)(V)]),(0,t.Lk)("div",oa,[(0,t.bF)(ia)])])])),_:1})}}};var ma=l(75013);const pa=ca,va=pa;Q()(ca,"components",{QPage:ma.A})}}]);