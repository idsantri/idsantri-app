"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[5912],{45912:(a,e,n)=>{n.r(e),n.d(e,{default:()=>F});var l=n(51347),t=n(37763),i=n(47543),s=n(21734),o=n(90575),r=n(34187);const d=(0,l.Lk)("div",{class:"text-subtitle1"}," Nilai dan Absensi yang Terkunci ",-1),c=(0,l.Lk)("div",{class:"text-caption text-italic"}," Data ini terbuat secara otomatis ketika Rapor dan/atau Ijazah dicetak. ",-1),u=(0,l.Lk)("div",{class:"text-overline"},"Akses Admin",-1),k={key:0},p={key:1},b={__name:"UnlockIndex",setup(a){const{loadingMain:e}=(0,r.QW)((0,o.A)()),n=(0,r.KR)([{}]);async function b(){const a=await(0,s.A)({endPoint:"nilai-lock",loading:e});n.value=a.nilai_lock}async function g(a){const n=await(0,i.A)({endPoint:`nilai-lock/${a}`,loading:e,message:'<span style="color: red" >Hapus data ini agar Nilai dan Absensi tidak terkunci!?</span>'});n&&await b()}(0,l.sV)((async()=>{await b()}));const m=[{name:"th_ajaran_h",label:"Tahun Ajaran",align:"left",field:a=>a.th_ajaran_h,sortable:!0},{name:"tingkat",label:"Tingkat",align:"left",field:a=>a.tingkat,sortable:!0},{name:"kelas",label:"Kelas",align:"left",field:a=>a.kelas,sortable:!0},{name:"ujian_ke",label:"Ujian Ke-?",align:"left",field:a=>a.ujian_ke,sortable:!1},{name:"id",label:"❌",align:"center",field:a=>a.id,sortable:!1}];return(a,e)=>{const i=(0,l.g2)("q-btn"),s=(0,l.g2)("q-card-section"),o=(0,l.g2)("q-separator"),r=(0,l.g2)("q-td"),b=(0,l.g2)("q-tr"),_=(0,l.g2)("q-table"),f=(0,l.g2)("q-card"),A=(0,l.g2)("q-page");return(0,l.uX)(),(0,l.Wv)(A,{class:"q-pa-sm"},{default:(0,l.k6)((()=>[(0,l.bF)(f,{class:"",style:{"max-width":"600px"}},{default:(0,l.k6)((()=>[(0,l.bF)(s,null,{default:(0,l.k6)((()=>[d,c,u,(0,l.bF)(i,{onClick:e[0]||(e[0]=e=>a.$router.go(-1)),outline:"",round:"",icon:"arrow_back",class:"absolute-top-right q-mt-md q-mr-md"})])),_:1}),(0,l.bF)(o),(0,l.bF)(s,null,{default:(0,l.k6)((()=>[(0,l.bF)(_,{rows:n.value,columns:m,"row-key":"id","rows-per-page-options":[10,25,50,100,0],flat:"",bordered:""},{body:(0,l.k6)((a=>[(0,l.bF)(b,{props:a},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(a.cols,(e=>((0,l.uX)(),(0,l.Wv)(r,{key:e.name,props:a},{default:(0,l.k6)((()=>["id"==e.name?((0,l.uX)(),(0,l.CE)("span",k,[(0,l.bF)(i,{icon:"delete",color:"negative",dense:"",outline:"",class:"q-px-md",onClick:a=>g(e.value)},null,8,["onClick"])])):((0,l.uX)(),(0,l.CE)("span",p,(0,t.v_)(e.value),1))])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),_:1},8,["rows"])])),_:1})])),_:1})])),_:1})}}};var g=n(75013),m=n(83341),_=n(60222),f=n(22677),A=n(86915),v=n(27010),h=n(87339),q=n(38785),w=n(272),y=n.n(w);const C=b,F=C;y()(b,"components",{QPage:g.A,QCard:m.A,QCardSection:_.A,QBtn:f.A,QSeparator:A.A,QTable:v.A,QTr:h.A,QTd:q.A})}}]);