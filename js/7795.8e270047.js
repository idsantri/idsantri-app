"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[7795],{37795:(a,e,t)=>{t.r(e),t.d(e,{default:()=>ea});var l=t(51347),r=t(34187),n=t(37763),s=t(8633),i=t(60455),d=t(58094),o=t(10685);const u=a=>((0,l.Qi)("data-v-4204081c"),a=a(),(0,l.jt)(),a),k=["innerHTML"],_=u((()=>(0,l.Lk)("div",{class:"text-center q-pa-lg text-negative text-italic"}," Tentukan Tahun Ajaran, Tingkat Pendidikan, dan Kelas! ",-1))),p={key:0},c={key:1},b={key:0},g={key:1},m={key:2},v={key:0},h={key:1},x={key:0,class:"text-italic text-negative"},f={key:1},F=u((()=>(0,l.Lk)("thead",{class:"bg-green-2 text-weight-medium text-right"},[(0,l.Lk)("tr",null,[(0,l.Lk)("td",{class:"text-left",style:{width:"80px"}}," ID (Kode) "),(0,l.Lk)("td",{class:"text-left"}," Mata Pelajaran "),(0,l.Lk)("td",{style:{width:"50px"}}," N-1 "),(0,l.Lk)("td",{style:{width:"50px"}}," N-2 "),(0,l.Lk)("td",{style:{width:"50px"}}," N-3 "),(0,l.Lk)("td",{style:{width:"50px"}}," N-4 "),(0,l.Lk)("td",{style:{width:"65px"}}," Rerata ")])],-1))),y={class:"text-left"},w={class:"text-left"},q={class:"text-right"},L={class:"text-right"},A={class:"text-right"},C={class:"text-right"},X={class:"text-right"},Q={class:"bg-green-2 text-weight-bold text-right text-green-10"},R=u((()=>(0,l.Lk)("td",{colspan:"2",class:"text-left"}," Rerata ",-1))),W={__name:"NilaiIndex",setup(a){const{params:e}=(0,i.lq)(),t=(0,r.KR)([{}]),u=(0,r.KR)(!1),W=(0,r.KR)(""),E=(0,r.KR)([{}]),K=(0,r.KR)([]),N=[{name:"no_absen",label:"No",align:"center",field:a=>a.no_absen,format:a=>`${a||""}`,sortable:!0},{name:"kelas_id",label:"ID Kelas",align:"center",field:a=>a.kelas_id,format:a=>`${a}`,sortable:!0},{name:"santri_id",label:"ID Santri",align:"center",field:a=>a.santri_id,format:a=>`${a}`,sortable:!0},{name:"nama",label:"Nama",align:"left",field:a=>a.nama,sortable:!0},{name:"rerata_1",label:"Rerata-1",align:"right",field:a=>a.rerata_1?parseFloat(a.rerata_1).toFixed(1):null,sortable:!0},{name:"rerata_2",label:"Rerata-2",align:"right",field:a=>a.rerata_2?parseFloat(a.rerata_2).toFixed(1):null,sortable:!0},{name:"rerata_3",label:"Rerata-3",align:"right",field:a=>a.rerata_3?parseFloat(a.rerata_3).toFixed(1):null,sortable:!0},{name:"rerata_4",label:"Rerata-4",align:"right",field:a=>a.rerata_4?parseFloat(a.rerata_4).toFixed(1):null,sortable:!0},{name:"rerata_akhir",label:"R. Akhir",align:"right",field:a=>a.rerata_akhir?parseFloat(a.rerata_akhir).toFixed(1):null,sortable:!0}];async function T(a){if(a.expand=!a.expand,a.expand){K.value[a.key]=!0,E.value[a.key]=null;const e=await(0,d.A)({endPoint:"nilai-mapel",params:{kelas_id:a.key,category:"rapor"}});K.value[a.key]=!1,E.value[a.key]=e.nilai}}function I(a,e){let t=0,l=0;if(a?.length){a.forEach((a=>{null!==a[e]&&(t+=parseFloat(a[e]),l++)}));const r=t/l;return isNaN(r)?null:r.toFixed(1)}return null}return(0,l.sV)((async()=>{if(e.th_ajaran_h&&e.tingkat_id&&e.kelas){const a=await(0,d.A)({endPoint:"nilai-mapel/rerata",params:{th_ajaran_h:e.th_ajaran_h,tingkat_id:e.tingkat_id,kelas:e.kelas,category:"rapor"},loading:u});t.value=a.nilai}})),(a,i)=>{const d=(0,l.g2)("q-space"),j=(0,l.g2)("q-btn"),P=(0,l.g2)("q-item-label"),D=(0,l.g2)("q-item-section"),M=(0,l.g2)("q-icon"),S=(0,l.g2)("q-item"),$=(0,l.g2)("q-list"),z=(0,l.g2)("q-btn-dropdown"),B=(0,l.g2)("q-card-section"),H=(0,l.g2)("q-skeleton"),G=(0,l.g2)("q-th"),V=(0,l.g2)("q-tr"),J=(0,l.g2)("q-td"),O=(0,l.g2)("q-markup-table"),U=(0,l.g2)("q-table"),Y=(0,l.g2)("q-card"),Z=(0,l.g2)("q-page"),aa=(0,l.gN)("close-popup");return(0,l.uX)(),(0,l.Wv)(Z,{class:"q-pa-sm"},{default:(0,l.k6)((()=>[(0,l.bF)(o.A,{"show-ujian-ke":!1,"start-url":"/madrasah/nilai-mapel/rerata",onDataFilter:i[0]||(i[0]=a=>W.value=a),title:"Filter Data: <span class='text-weight-medium'>Nilai Mapel (Rerata)</span>"}),(0,l.bF)(Y,{class:"q-mt-sm"},{default:(0,l.k6)((()=>[(0,l.bF)(B,{class:"bg-green-8 text-green-1 text-subtitle1 q-pa-sm flex flex-center"},{default:(0,l.k6)((()=>[(0,l.Lk)("span",{innerHTML:W.value+" ➡️ <em class='text-weight-light'>Kategori: </em> <strong>Nilai Rapor</strong>"||0},null,8,k),(0,l.bF)(d),(0,l.bF)(j,{dense:"",icon:"download",label:"Excel","no-caps":"",class:"bg-green-11 text-green-10 q-px-md q-mr-sm",to:"/madrasah/nilai-mapel/download"}),(0,l.bF)(j,{dense:"",icon:"upload",label:"Excel","no-caps":"",class:"bg-green-11 text-green-10 q-px-md q-mr-sm",to:"/madrasah/nilai-mapel/upload"}),(0,l.bF)(z,{outline:"","no-caps":"",class:"text-green-11 q-px-md",size:"",dense:"","dropdown-icon":"more_vert"},{default:(0,l.k6)((()=>[(0,l.bF)($,null,{default:(0,l.k6)((()=>[(0,l.bo)(((0,l.uX)(),(0,l.Wv)(S,{to:"/madrasah/mapel"},{default:(0,l.k6)((()=>[(0,l.bF)(D,null,{default:(0,l.k6)((()=>[(0,l.bF)(P,null,{default:(0,l.k6)((()=>[(0,l.eW)(" Mata Pelajaran ")])),_:1})])),_:1}),(0,l.bF)(D,{avatar:""},{default:(0,l.k6)((()=>[(0,l.bF)(M,{name:"settings"})])),_:1})])),_:1})),[[aa]]),(0,l.bo)(((0,l.uX)(),(0,l.Wv)(S,{to:"/madrasah/nilai-ahwal"},{default:(0,l.k6)((()=>[(0,l.bF)(D,null,{default:(0,l.k6)((()=>[(0,l.bF)(P,null,{default:(0,l.k6)((()=>[(0,l.eW)(" Nilai Ahwal ")])),_:1})])),_:1}),(0,l.bF)(D,{avatar:""},{default:(0,l.k6)((()=>[(0,l.bF)(M,{name:"settings_accessibility"})])),_:1})])),_:1})),[[aa]])])),_:1})])),_:1})])),_:1}),(0,r.R1)(e).th_ajaran_h&&(0,r.R1)(e).tingkat_id&&(0,r.R1)(e).kelas?((0,l.uX)(),(0,l.Wv)(B,{key:1,class:"q-pa-sm"},{default:(0,l.k6)((()=>[u.value?((0,l.uX)(),(0,l.CE)("div",p,[(0,l.bF)(H,{type:"text",height:"4rem"})])):((0,l.uX)(),(0,l.CE)("div",c,[(0,l.bF)(U,{flat:"",rows:t.value,columns:N,"row-key":"kelas_id","rows-per-page-options":[10,25,50,100,0],class:"my-sticky-header-table"},{header:(0,l.k6)((a=>[(0,l.bF)(V,{props:a,class:""},{default:(0,l.k6)((()=>[(0,l.bF)(G),(0,l.bF)(G),(0,l.bF)(G),(0,l.bF)(G),(0,l.bF)(G,{class:"text-left"},{default:(0,l.k6)((()=>[(0,l.eW)("Retata Kelas")])),_:1}),(0,l.bF)(G,{class:"text-right"},{default:(0,l.k6)((()=>[(0,l.eW)((0,n.v_)(I(t.value,"rerata_1")),1)])),_:1}),(0,l.bF)(G,{class:"text-right"},{default:(0,l.k6)((()=>[(0,l.eW)((0,n.v_)(I(t.value,"rerata_2")),1)])),_:1}),(0,l.bF)(G,{class:"text-right"},{default:(0,l.k6)((()=>[(0,l.eW)((0,n.v_)(I(t.value,"rerata_3")),1)])),_:1}),(0,l.bF)(G,{class:"text-right"},{default:(0,l.k6)((()=>[(0,l.eW)((0,n.v_)(I(t.value,"rerata_4")),1)])),_:1}),(0,l.bF)(G,{class:"text-right"},{default:(0,l.k6)((()=>[(0,l.eW)((0,n.v_)(I(t.value,"rerata_akhir")),1)])),_:1})])),_:2},1032,["props"]),(0,l.bF)(V,{props:a},{default:(0,l.k6)((()=>[(0,l.bF)(G,{"auto-width":""},{default:(0,l.k6)((()=>[(0,l.eW)("!")])),_:1}),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(a.cols,(e=>((0,l.uX)(),(0,l.Wv)(G,{key:e.name,props:a},{default:(0,l.k6)((()=>[(0,l.eW)((0,n.v_)(e.label),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),body:(0,l.k6)((a=>[(0,l.bF)(V,{props:a},{default:(0,l.k6)((()=>[(0,l.bF)(J,{"auto-width":""},{default:(0,l.k6)((()=>[(0,l.bF)(j,{size:"sm",color:"green",round:"",dense:"",onClick:e=>T(a),icon:a.expand?"remove":"add"},null,8,["onClick","icon"])])),_:2},1024),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(a.cols,(e=>((0,l.uX)(),(0,l.Wv)(J,{key:e.name,props:a},{default:(0,l.k6)((()=>["kelas_id"==e.name?((0,l.uX)(),(0,l.CE)("span",b,[(0,l.bF)(j,{label:e.value,dense:"",outline:"",class:"q-px-md text-green-10",to:`/madrasah/kelas/${e.value}/nilai-mapel`},null,8,["label","to"])])):"santri_id"==e.name?((0,l.uX)(),(0,l.CE)("span",g,[(0,l.bF)(j,{label:e.value,dense:"",outline:"",class:"q-px-md text-green-10",to:`/santri/${e.value}`},null,8,["label","to"])])):((0,l.uX)(),(0,l.CE)("span",m,(0,n.v_)(e.value),1))])),_:2},1032,["props"])))),128))])),_:2},1032,["props"]),(0,l.bo)((0,l.bF)(V,{props:a},{default:(0,l.k6)((()=>[(0,l.bF)(J,{colspan:"100%"},{default:(0,l.k6)((()=>[K.value[a.row.kelas_id]?((0,l.uX)(),(0,l.CE)("div",v,[(0,l.bF)(H,{height:"100px"})])):((0,l.uX)(),(0,l.CE)("div",h,[0==E.value[a.row.kelas_id]?.length?((0,l.uX)(),(0,l.CE)("div",x," Tidak ada data untuk ditampilkan! ")):((0,l.uX)(),(0,l.CE)("div",f,[(0,l.bF)(O,{flat:"",dense:"",class:"bg-green-1",separator:"cell"},{default:(0,l.k6)((()=>[F,(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(E.value[a.row.kelas_id],((a,e)=>((0,l.uX)(),(0,l.CE)("tr",{key:e},[(0,l.Lk)("td",y,(0,n.v_)(a.id),1),(0,l.Lk)("td",w,(0,n.v_)(a.name),1),(0,l.Lk)("td",q,(0,n.v_)(a.nilai_1),1),(0,l.Lk)("td",L,(0,n.v_)(a.nilai_2),1),(0,l.Lk)("td",A,(0,n.v_)(a.nilai_3),1),(0,l.Lk)("td",C,(0,n.v_)(a.nilai_4),1),(0,l.Lk)("td",X,(0,n.v_)(a.rerata?parseFloat(a.rerata).toFixed(1):null),1)])))),128))]),(0,l.Lk)("tfoot",Q,[(0,l.Lk)("tr",null,[R,(0,l.Lk)("td",null,(0,n.v_)(I(E.value[a.row.kelas_id],"nilai_1")),1),(0,l.Lk)("td",null,(0,n.v_)(I(E.value[a.row.kelas_id],"nilai_2")),1),(0,l.Lk)("td",null,(0,n.v_)(I(E.value[a.row.kelas_id],"nilai_3")),1),(0,l.Lk)("td",null,(0,n.v_)(I(E.value[a.row.kelas_id],"nilai_4")),1),(0,l.Lk)("td",null,(0,n.v_)(I(E.value[a.row.kelas_id],"rerata")),1)])])])),_:2},1024)]))]))])),_:2},1024)])),_:2},1032,["props"]),[[s.aG,a.expand]])])),_:1},8,["rows"])]))])),_:1})):((0,l.uX)(),(0,l.Wv)(B,{key:0,class:"q-pa-sm"},{default:(0,l.k6)((()=>[_])),_:1}))])),_:1})])),_:1})}}};var E=t(32968),K=t(75013),N=t(83341),T=t(60222),I=t(5873),j=t(22677),P=t(73614),D=t(53766),M=t(22589),S=t(14958),$=t(99039),z=t(93933),B=t(70981),H=t(27010),G=t(87339),V=t(22517),J=t(38785),O=t(94362),U=t(61038),Y=t(272),Z=t.n(Y);const aa=(0,E.A)(W,[["__scopeId","data-v-4204081c"]]),ea=aa;Z()(W,"components",{QPage:K.A,QCard:N.A,QCardSection:T.A,QSpace:I.A,QBtn:j.A,QBtnDropdown:P.A,QList:D.A,QItem:M.A,QItemSection:S.A,QItemLabel:$.A,QIcon:z.A,QSkeleton:B.Ay,QTable:H.A,QTr:G.A,QTh:V.A,QTd:J.A,QMarkupTable:O.A}),Z()(W,"directives",{ClosePopup:U.A})}}]);