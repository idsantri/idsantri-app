"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[5481],{55481:(a,e,t)=>{t.r(e),t.d(e,{default:()=>Aa});var l=t(51347),n=t(37763),s=t(34187),i=t(96305),r=t(58094),o=t(56194),d=(t(67590),t(15469));const u={th_ajaran_h:"",tingkat_id:"",kelas:""},c=(0,i.nY)("kenaikan-kelas",{state:()=>({murid:[],oldDataFilter:JSON.parse(JSON.stringify(u)),newDataFilter:JSON.parse(JSON.stringify(u))}),getters:{getMurid:a=>a.murid},actions:{resetMurid(){this.murid=[]},resetOldFilter(){this.oldDataFilter=JSON.parse(JSON.stringify(u))},resetNewFilter(){this.newDataFilter=JSON.parse(JSON.stringify(u))},addMurid(a){this.resetMurid(),a.forEach((a=>{this.murid.push({id:a.id,santri_id:a.santri_id,th_ajaran_h:a.th_ajaran_h,tingkat_id:a.tingkat_id,tingkat:a.tingkat,kelas:a.kelas,no_absen:a.no_absen,nama:a.nama,domisili:a.domisili,proses:!1,new_th_ajaran_h:null,new_tingkat_id:null,new_kelas:null,new_keterangan:null})}))},addNewDataFilter(a){this.newDataFilter=a},addOldDataFilter(a){this.oldDataFilter=a},getMuridFalse(){return this.murid.filter((a=>0==a.proses))},getMuridTrue(){return this.murid.filter((a=>1==a.proses))},prosesTrue(a){if(!this.newDataFilter.th_ajaran_h)return(0,d.UG)("Tentukan tahun ajaran baru");if(!this.newDataFilter.tingkat_id)return(0,d.UG)("Tentukan tingkat pendidikan baru");if(!this.newDataFilter.kelas)return(0,d.UG)("Tentukan kelas baru");const e=this.murid.findIndex((e=>e.id===a)),t=this.murid[e];t.proses=!0,t.new_th_ajaran_h=this.newDataFilter.th_ajaran_h,t.new_tingkat_id=this.newDataFilter.tingkat_id,t.new_kelas=this.newDataFilter.kelas,t.new_keterangan=null},prosesFalse(a){const e=this.murid.findIndex((e=>e.id===a)),t=this.murid[e];t.proses=!1,t.new_th_ajaran_h=null,t.new_tingkat_id=null,t.new_kelas=null,t.new_keterangan=null},deleteTrueProses(){const a=[];this.murid.forEach((e=>{e.proses||a.push(e)})),this.murid=a}},persist:!0});var g=t(32734);const k={__name:"HeadLeft",props:{reload:{type:Boolean,default:!1}},emits:["onLoading"],setup(a,{emit:e}){const t=(0,s.KR)([]),n=(0,s.KR)([]),{oldDataFilter:d}=(0,i.bP)(c()),u=(0,s.KR)(!1),k=a,_=e,b=(0,s.lW)(k,"reload");async function h(){const a=(0,g.A)().getThAjaran;if(a.length)t.value["th_ajaran"]=a;else{const a=await(0,o.H)({url:"kelas/lists",key:"th_ajaran",loadingArray:n});(0,g.A)().setThAjaran(a),t.value["th_ajaran"]=a}}async function m(a){const e=(0,g.A)().getTingkatByTahun(a);if(e.length)t.value["tingkat"]=e;else{const e=await(0,o.H)({url:"kelas/lists",params:{th_ajaran_h:a},key:"tingkat",loadingArray:n,sort:"asc"});(0,g.A)().addTingkatToTahun(e,a),t.value["tingkat"]=e}}async function p(a,e){const l=(0,g.A)().getKelasByTingkatAndTahun(a,e);if(l.length)t.value["kelas"]=l;else{const l=await(0,o.H)({url:"kelas/lists",params:{th_ajaran_h:e,tingkat_id:a},key:"kelas",loadingArray:n,sort:"asc"});(0,g.A)().addKelasToTingkatByTahun(l,a,e),t.value["kelas"]=l}}return(0,l.sV)((async()=>{await h()})),(0,l.wB)((()=>d.value.th_ajaran_h),(async a=>{a&&(d.value.tingkat_id="",d.value.kelas="",await m(a),t.value["kelas"]=null)})),(0,l.wB)((()=>d.value.tingkat_id),(async a=>{a&&(d.value.kelas="",await p(a,d.value.th_ajaran_h))})),(0,l.wB)(b,(async()=>{t.value=[],c().resetOldFilter(),(0,g.A)().$reset(),await h()})),(0,l.wB)(d,(async a=>{if(c().addOldDataFilter(a),c().resetMurid(),a.th_ajaran_h&&a.tingkat_id&&a.kelas){a.status="Aktif",a.aktif=!0,_("onLoading",!0);const e=await(0,r.A)({endPoint:"kelas",params:a,loading:u});c().addMurid(e.murid),_("onLoading",!1)}}),{deep:!0}),(a,e)=>{const i=(0,l.g2)("q-select");return(0,l.uX)(),(0,l.CE)("div",null,[(0,l.bF)(i,{"model-value":(0,s.R1)(d).th_ajaran_h,"onUpdate:modelValue":e[0]||(e[0]=a=>(0,s.R1)(d).th_ajaran_h=a.th_ajaran_h),options:t.value["th_ajaran"],loading:n.value["th_ajaran"],"option-value":"th_ajaran_h","option-label":"th_ajaran_h",outlined:"",dense:"",class:"",label:"Tahun Ajaran","hide-bottom-space":""},null,8,["model-value","options","loading"]),(0,l.bF)(i,{"model-value":(0,s.R1)(d).tingkat_id,"onUpdate:modelValue":e[1]||(e[1]=a=>(0,s.R1)(d).tingkat_id=a.tingkat_id),options:t.value["tingkat"],loading:n.value["tingkat"],"option-value":"tingkat_id","option-label":"tingkat",outlined:"",dense:"",class:"q-mt-sm",label:"Tingkat"},null,8,["model-value","options","loading"]),(0,l.bF)(i,{modelValue:(0,s.R1)(d).kelas,"onUpdate:modelValue":e[2]||(e[2]=a=>(0,s.R1)(d).kelas=a),options:t.value["kelas"],loading:n.value["kelas"],outlined:"",dense:"",class:"q-mt-sm",label:"Kelas"},null,8,["modelValue","options","loading"])])}}};var _=t(76941),b=t(272),h=t.n(b);const m=k,p=m;h()(k,"components",{QSelect:_.A});const v=(0,l.Lk)("th",{class:"text-center"},"No.",-1),F=(0,l.Lk)("th",{class:"text-left"},"Nama",-1),f=(0,l.Lk)("th",{class:"text-left"},"Domisili",-1),w={class:"text-right"},A={class:"text-center"},q={class:"text-right"},T={class:"text-caption text-italic"},y=(0,l.Lk)("br",null,null,-1),L=(0,l.Lk)("div",null,null,-1),x={__name:"DataLeft",setup(a){const e=(0,s.KR)(!1),t=(0,s.KR)(!1),i=c(),r=(0,l.EW)((()=>i.getMuridFalse()));function o(){const a=r.value.length;if(!a)return;let e=0;t.value=!0,r.value.forEach((l=>{setTimeout((()=>{i.prosesTrue(l.id),e++,e===a&&(t.value=!1)}),500)}))}return(a,d)=>{const u=(0,l.g2)("q-toolbar-title"),c=(0,l.g2)("q-btn"),g=(0,l.g2)("q-toolbar"),k=(0,l.g2)("q-card-section"),_=(0,l.g2)("q-separator"),b=(0,l.g2)("q-spinner-bars"),h=(0,l.g2)("q-inner-loading"),m=(0,l.g2)("q-markup-table"),x=(0,l.g2)("q-space"),j=(0,l.g2)("q-card-actions"),Q=(0,l.g2)("q-card");return(0,l.uX)(),(0,l.Wv)(Q,{class:""},{default:(0,l.k6)((()=>[(0,l.bF)(k,{class:"q-pa-sm bg-green-7"},{default:(0,l.k6)((()=>[(0,l.bF)(g,{class:"no-padding text-green-11",style:{"min-height":"0"}},{default:(0,l.k6)((()=>[(0,l.bF)(u,{class:"text-subtitle1"},{default:(0,l.k6)((()=>[(0,l.eW)(" Kelas Lama ")])),_:1}),(0,l.bF)(c,{icon:"sync",dense:"",flat:"",class:"q-mr-xs",onClick:d[0]||(d[0]=a=>e.value=!e.value)})])),_:1})])),_:1}),(0,l.bF)(k,{class:"q-pa-sm"},{default:(0,l.k6)((()=>[(0,l.bF)(p,{reload:e.value,onOnLoading:d[1]||(d[1]=a=>t.value=a)},null,8,["reload"])])),_:1}),(0,l.bF)(_),(0,l.bF)(k,{class:"q-pa-sm"},{default:(0,l.k6)((()=>[(0,l.bF)(m,{flat:"",bordered:"",style:{height:"500px"}},{default:(0,l.k6)((()=>[(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[v,F,f,(0,l.Lk)("th",w,[(0,l.bF)(c,{icon:"keyboard_double_arrow_right",dense:"",color:"green-10",glossy:"",class:"text-green-11",disable:!r.value.length,onClick:o},null,8,["disable"])])])]),(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(r.value,((a,e)=>((0,l.uX)(),(0,l.CE)("tr",{key:e},[(0,l.Lk)("td",A,(0,n.v_)(a.no_absen?String(a.no_absen).padStart(2,"0"):""),1),(0,l.Lk)("td",null,(0,n.v_)(a.nama),1),(0,l.Lk)("td",null,(0,n.v_)(a.domisili),1),(0,l.Lk)("td",q,[(0,l.bF)(c,{icon:"arrow_right",dense:"",outline:"",color:"green-10",glossy:"",onClick:e=>(0,s.R1)(i).prosesTrue(a.id)},null,8,["onClick"])])])))),128))]),(0,l.bF)(h,{showing:t.value},{default:(0,l.k6)((()=>[(0,l.bF)(b,{size:"4em",color:"green"})])),_:1},8,["showing"])])),_:1})])),_:1}),(0,l.bF)(_),(0,l.bF)(j,{class:"bg-green-1"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",T,[(0,l.eW)(" Total: "+(0,n.v_)(r.value.length)+" murid",1),y,(0,l.eW)(" Hanya menampilkan murid dengan Kelas = Aktif dan Status = Aktif ")]),(0,l.bF)(x),L])),_:1})])),_:1})}}};var j=t(83341),Q=t(60222),C=t(66739),K=t(4629),V=t(22677),R=t(86915),D=t(94362),S=t(58356),B=t(40585),E=t(25034),N=t(5873);const P=x,M=P;h()(x,"components",{QCard:j.A,QCardSection:Q.A,QToolbar:C.A,QToolbarTitle:K.A,QBtn:V.A,QSeparator:R.A,QMarkupTable:D.A,QInnerLoading:S.A,QSpinnerBars:B.A,QCardActions:E.A,QSpace:N.A});var O=t(90486),U=t(92938);const W={__name:"HeadRight",setup(a){const{newDataFilter:e}=(0,i.bP)(c());function t(){const a=document.querySelectorAll("div.q-field__bottom.row.items-start.q-field__bottom");a.forEach((a=>a.remove()))}return(0,l.sV)((async()=>{t()})),(a,t)=>((0,l.uX)(),(0,l.CE)("div",null,[(0,l.bF)(O.A,{modelValue:(0,s.R1)(e).th_ajaran_h,"onUpdate:modelValue":t[0]||(t[0]=a=>(0,s.R1)(e).th_ajaran_h=a),url:"tahun-ajaran",label:"Tahun Ajaran *",sort:"desc",class:"no-padding",disable:!!(0,s.R1)(e).th_ajaran_h},null,8,["modelValue","disable"]),(0,l.bF)(U.A,{modelValue:(0,s.R1)(e).tingkat_id,"onUpdate:modelValue":t[1]||(t[1]=a=>(0,s.R1)(e).tingkat_id=a),label:"Tingkat Pendidikan *",class:"q-mt-sm no-padding",hint:null,disable:!!(0,s.R1)(e).tingkat_id},null,8,["modelValue","disable"]),(0,l.bF)(O.A,{modelValue:(0,s.R1)(e).kelas,"onUpdate:modelValue":t[2]||(t[2]=a=>(0,s.R1)(e).kelas=a),url:"kelas",label:"Kelas *",class:"q-mt-sm no-padding",disable:!!(0,s.R1)(e).kelas},null,8,["modelValue","disable"])]))}};var I=t(27861);const X=W,H=X;h()(W,"components",{QField:I.A});const J=(0,l.Lk)("span",{class:"text-italic"},"Edit",-1),G=(0,l.Lk)("span",{class:"text-italic text-caption"}," Auto Update ",-1),z={__name:"EditNewMurid",props:{data:{type:Object,required:!0}},setup(a){const e=a,t=(0,s.KR)(e.data);return(a,e)=>{const n=(0,l.g2)("q-toolbar-title"),s=(0,l.g2)("q-toolbar"),i=(0,l.g2)("q-card-section"),r=(0,l.g2)("q-input"),o=(0,l.g2)("q-btn"),d=(0,l.g2)("q-card-actions"),u=(0,l.g2)("q-card"),c=(0,l.gN)("close-popup");return(0,l.uX)(),(0,l.Wv)(u,{class:"full-width",style:{"max-width":"425px"}},{default:(0,l.k6)((()=>[(0,l.bF)(i,{class:"bg-green-7 text-green-11 q-pa-sm"},{default:(0,l.k6)((()=>[(0,l.bF)(s,{class:"q-px-sm",style:{"min-height":"0"}},{default:(0,l.k6)((()=>[(0,l.bF)(n,{class:"text-subtitle1 text-green-11"},{default:(0,l.k6)((()=>[(0,l.eW)(" Data Kelas Baru — "),J])),_:1}),G])),_:1})])),_:1}),(0,l.bF)(i,null,{default:(0,l.k6)((()=>[(0,l.bF)(r,{"model-value":t.value.nama+" ("+t.value.santri_id+")",class:"",disable:"",filled:"",dense:"",outlined:"",label:"Nama (ID)"},null,8,["model-value"]),(0,l.bF)(r,{"model-value":t.value.new_th_ajaran_h,class:"q-mt-sm",disable:"",filled:"",dense:"",outlined:"",label:"Tahun Ajaran (Baru) *"},null,8,["model-value"]),(0,l.bF)(U.A,{modelValue:t.value.new_tingkat_id,"onUpdate:modelValue":e[0]||(e[0]=a=>t.value.new_tingkat_id=a),label:"Tingkat Pendidikan (Baru) *",class:"q-mt-sm",selected:t.value.new_tingkat_id,rules:[a=>!!a||"Harus diisi!"],clearable:!1},null,8,["modelValue","selected","rules"]),(0,l.bF)(O.A,{modelValue:t.value.new_kelas,"onUpdate:modelValue":e[1]||(e[1]=a=>t.value.new_kelas=a),url:"kelas",label:"Kelas (Baru) *",class:"q-mt-sm",rules:[a=>!!a||"Harus diisi!"],clearable:!1},null,8,["modelValue","rules"]),(0,l.bF)(r,{modelValue:t.value.new_keterangan,"onUpdate:modelValue":e[2]||(e[2]=a=>t.value.new_keterangan=a),class:"q-mt-sm",dense:"",outlined:"",label:"Keterangan (Baru)",autogrow:!0},null,8,["modelValue"])])),_:1}),(0,l.bF)(d,{align:"right",class:"bg-green-6"},{default:(0,l.k6)((()=>[(0,l.bo)((0,l.bF)(o,{label:"Tutup",color:"green-11","no-caps":"",outline:""},null,512),[[c]])])),_:1})])),_:1})}}};var Y=t(46395),$=t(61038);const Z=z,aa=Z;h()(z,"components",{QCard:j.A,QCardSection:Q.A,QToolbar:C.A,QToolbarTitle:K.A,QInput:Y.A,QCardActions:E.A,QBtn:V.A}),h()(z,"directives",{ClosePopup:$.A});var ea=t(59678);const ta={class:"text-left"},la=(0,l.Lk)("th",{class:"text-left"},"Nama",-1),na=(0,l.Lk)("th",{class:"text-left"},"Domisili",-1),sa=(0,l.Lk)("th",{class:"text-left"},"Tingkat*",-1),ia=(0,l.Lk)("th",{class:"text-left"},"Kelas*",-1),ra=(0,l.Lk)("th",{class:"text-left"},"Keterangan",-1),oa={class:"text-right"},da={class:"text-left"},ua={class:"text-right"},ca={class:"text-caption text-italic"},ga=(0,l.Lk)("br",null,null,-1),ka={__name:"DataRight",setup(a){const e=c(),t=(0,l.EW)((()=>e.getMuridTrue())),i=(0,s.KR)(!1),r=(0,s.KR)(!1),o=(0,s.KR)({});function u(){const a=t.value.length;if(!a)return;let l=0;i.value=!0,t.value.forEach((t=>{setTimeout((()=>{e.prosesFalse(t.id),l++,l===a&&(i.value=!1)}),500)}))}function g(){e.resetNewFilter(),u()}function k(a){o.value=a,r.value=!0}async function _(){let a="";a+="<hr/>",a+='<p style="margin:0">Tahun Ajaran Baru: <strong>'+t.value[0].new_th_ajaran_h+"</strong></p>",a+="<hr/>",a+="Pastikan Anda sudah meneliti dengan seksama:",a+='<ul style="margin:0">\n\t\t<li>Tingkat Pendidikan</li>\n\t\t<li>Kelas</li>\n\t\t</ul>\n\t\t',a+="<strong>Pada setiap barisnya!</strong>";const l=await(0,d.Ix)(a,!0);if(!l)return;const n=t.value.map((a=>({santri_id:a.santri_id,th_ajaran_h:a.new_th_ajaran_h,tingkat_id:a.new_tingkat_id,kelas:a.new_kelas,keterangan:a.new_keterangan}))),s=await(0,ea.A)({endPoint:"kelas/kenaikan",loading:i,data:{murid:n}});s&&(e.deleteTrueProses(),e.newDataFilter.tingkat_id="",e.newDataFilter.kelas="")}return(a,d)=>{const c=(0,l.g2)("q-toolbar-title"),b=(0,l.g2)("q-btn"),h=(0,l.g2)("q-toolbar"),m=(0,l.g2)("q-card-section"),p=(0,l.g2)("q-separator"),v=(0,l.g2)("q-spinner-bars"),F=(0,l.g2)("q-inner-loading"),f=(0,l.g2)("q-markup-table"),w=(0,l.g2)("q-space"),A=(0,l.g2)("q-card-actions"),q=(0,l.g2)("q-card"),T=(0,l.g2)("q-dialog");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(q,{class:""},{default:(0,l.k6)((()=>[(0,l.bF)(m,{class:"q-pa-sm bg-green-7"},{default:(0,l.k6)((()=>[(0,l.bF)(h,{class:"no-padding text-green-11",style:{"min-height":"0"}},{default:(0,l.k6)((()=>[(0,l.bF)(c,{class:"text-subtitle1"},{default:(0,l.k6)((()=>[(0,l.eW)(" Kelas Baru ")])),_:1}),(0,l.bF)(b,{icon:"sync",dense:"",flat:"",class:"q-mr-xs",onClick:g})])),_:1})])),_:1}),(0,l.bF)(m,{class:"q-pa-sm"},{default:(0,l.k6)((()=>[(0,l.bF)(H)])),_:1}),(0,l.bF)(p),(0,l.bF)(m,{class:"q-pa-sm"},{default:(0,l.k6)((()=>[(0,l.bF)(f,{flat:"",bordered:"",style:{height:"500px"}},{default:(0,l.k6)((()=>[(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th",ta,[(0,l.bF)(b,{icon:"keyboard_double_arrow_left",dense:"",color:"green-10",glossy:"",class:"text-green-11",disable:!t.value.length,onClick:u},null,8,["disable"])]),la,na,sa,ia,ra,(0,l.Lk)("th",oa,[(0,l.bF)(b,{icon:"edit",dense:"",flat:"",disable:"",color:"green-10"})])])]),(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(t.value,((a,t)=>((0,l.uX)(),(0,l.CE)("tr",{key:t},[(0,l.Lk)("td",da,[(0,l.bF)(b,{icon:"arrow_left",dense:"",outline:"",color:"green-10",glossy:"",onClick:t=>(0,s.R1)(e).prosesFalse(a.id)},null,8,["onClick"])]),(0,l.Lk)("td",null,(0,n.v_)(a.nama),1),(0,l.Lk)("td",null,(0,n.v_)(a.domisili),1),(0,l.Lk)("td",null,(0,n.v_)(a.new_tingkat_id),1),(0,l.Lk)("td",null,(0,n.v_)(a.new_kelas),1),(0,l.Lk)("td",null,(0,n.v_)(a.new_keterangan||"-"),1),(0,l.Lk)("td",ua,[(0,l.bF)(b,{icon:"edit",dense:"",flat:"",color:"green-10",onClick:e=>k(a)},null,8,["onClick"])])])))),128))]),(0,l.bF)(F,{showing:i.value},{default:(0,l.k6)((()=>[(0,l.bF)(v,{size:"4em",color:"green"})])),_:1},8,["showing"])])),_:1})])),_:1}),(0,l.bF)(p),(0,l.bF)(A,{class:"bg-green-1"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",ca,[(0,l.eW)(" Total: "+(0,n.v_)(t.value.length)+" murid",1),ga,(0,l.eW)(" Pastikan data sudah benar-benar valid (kesalahan akan sulit diperbaiki). ")]),(0,l.bF)(w),(0,l.Lk)("div",null,[(0,l.bF)(b,{label:"Proses","no-caps":"",icon:"save",color:"green-10",class:"text-green-11",disable:!t.value.length>0,onClick:_},null,8,["disable"])])])),_:1})])),_:1}),(0,l.bF)(T,{modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=a=>r.value=a)},{default:(0,l.k6)((()=>[(0,l.bF)(aa,{data:o.value},null,8,["data"])])),_:1},8,["modelValue"])],64)}}};var _a=t(30045);const ba=ka,ha=ba;h()(ka,"components",{QCard:j.A,QCardSection:Q.A,QToolbar:C.A,QToolbarTitle:K.A,QBtn:V.A,QSeparator:R.A,QMarkupTable:D.A,QInnerLoading:S.A,QSpinnerBars:B.A,QCardActions:E.A,QSpace:N.A,QDialog:_a.A});const ma={class:"row"},pa={class:"col-6 q-pa-sm"},va={class:"col-6 q-pa-sm"},Fa={__name:"KenaikanKelas",setup(a){return(0,l.sV)((()=>{const a=document.getElementById("toggle-drawer");a&&a.click()})),(a,e)=>{const t=(0,l.g2)("q-toolbar-title"),n=(0,l.g2)("q-toolbar"),s=(0,l.g2)("q-card-section"),i=(0,l.g2)("q-card"),r=(0,l.g2)("q-page");return(0,l.uX)(),(0,l.Wv)(r,{class:"q-pa-sm"},{default:(0,l.k6)((()=>[(0,l.bF)(i,{class:"",style:{"min-width":"1200px"}},{default:(0,l.k6)((()=>[(0,l.bF)(s,{class:"bg-green-8 text-green-11 q-pa-sm"},{default:(0,l.k6)((()=>[(0,l.bF)(n,{class:"no-padding text-green-11",style:{"min-height":"0"}},{default:(0,l.k6)((()=>[(0,l.bF)(t,{class:"text-subtitle1"},{default:(0,l.k6)((()=>[(0,l.eW)(" Modul Kenaikan Kelas ")])),_:1})])),_:1})])),_:1}),(0,l.bF)(s,{class:"no-padding"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",ma,[(0,l.Lk)("div",pa,[(0,l.bF)(M)]),(0,l.Lk)("div",va,[(0,l.bF)(ha)])])])),_:1})])),_:1})])),_:1})}}};var fa=t(75013);const wa=Fa,Aa=wa;h()(Fa,"components",{QPage:fa.A,QCard:j.A,QCardSection:Q.A,QToolbar:C.A,QToolbarTitle:K.A,QBtn:V.A})}}]);