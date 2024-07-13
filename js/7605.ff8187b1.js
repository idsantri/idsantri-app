"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[7605],{97605:(a,l,e)=>{e.r(l),e.d(l,{default:()=>$});var t=e(51347),u=e(34187),i=e(60455),n=e(75285),s=e(37763),r=e(21734);const o={key:0,class:"q-pa-md"},d={__name:"CardSantri",props:{id:{required:!0}},setup(a){const l=a,e=(0,u.KR)(!1),i=(0,u.KR)({});async function n(){const a=await(0,r.A)({endPoint:`santri/${l.id}`,loading:e});i.value=a.santri;const t=await(0,r.A)({endPoint:`images/santri/${i.value.id}`});i.value.image=t.image_url}return(0,t.sV)((async()=>{await n()})),(a,l)=>{const u=(0,t.g2)("q-toolbar-title"),n=(0,t.g2)("q-toolbar"),r=(0,t.g2)("q-spinner-cube"),d=(0,t.g2)("q-img"),_=(0,t.g2)("q-avatar"),v=(0,t.g2)("q-item-section"),c=(0,t.g2)("q-item-label"),b=(0,t.g2)("q-btn"),k=(0,t.g2)("q-item"),m=(0,t.g2)("q-separator"),f=(0,t.g2)("q-list"),F=(0,t.g2)("q-card-section"),g=(0,t.g2)("q-card");return(0,t.uX)(),(0,t.Wv)(g,null,{default:(0,t.k6)((()=>[(0,t.bF)(F,{class:"q-pa-sm"},{default:(0,t.k6)((()=>[(0,t.bF)(n,{class:"bg-green-1"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{class:"text-subtitle1"},{default:(0,t.k6)((()=>[(0,t.eW)(" Identitas Santri ")])),_:1})])),_:1}),e.value?((0,t.uX)(),(0,t.CE)("div",o,[(0,t.bF)(r,{color:"green-12",size:"8em",class:"flex q-mx-auto"})])):((0,t.uX)(),(0,t.Wv)(f,{key:1,dense:""},{default:(0,t.k6)((()=>[(0,t.bF)(k,null,{default:(0,t.k6)((()=>[(0,t.bF)(v,{avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(_,{class:"d-flex"},{default:(0,t.k6)((()=>[(0,t.bF)(d,{src:i.value?.image||"/user-default.png",ratio:1,cover:""},null,8,["src"])])),_:1})])),_:1}),(0,t.bF)(v,null,{default:(0,t.k6)((()=>[(0,t.bF)(c,{overline:""},{default:(0,t.k6)((()=>[(0,t.eW)(" Santri ")])),_:1}),(0,t.bF)(c,null,{default:(0,t.k6)((()=>[(0,t.eW)((0,s.v_)(i.value.nama)+" ("+(0,s.v_)(i.value.sex)+") ",1)])),_:1}),(0,t.bF)(c,{caption:"",lines:"1",class:"text-italic"},{default:(0,t.k6)((()=>[(0,t.eW)((0,s.v_)(i.value.data_akhir?.data_akhir),1)])),_:1})])),_:1}),(0,t.bF)(v,{avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(b,{outline:"",color:"green",to:`/santri/${i.value.id}`},{default:(0,t.k6)((()=>[(0,t.Lk)("small",null,(0,s.v_)(i.value.id),1)])),_:1},8,["to"])])),_:1})])),_:1}),(0,t.bF)(m,{inset:"item"}),(0,t.bF)(k,null,{default:(0,t.k6)((()=>[(0,t.bF)(v,{top:"",avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(_)])),_:1}),(0,t.bF)(v,null,{default:(0,t.k6)((()=>[(0,t.bF)(c,{overline:""},{default:(0,t.k6)((()=>[(0,t.eW)(" Wali ")])),_:1}),(0,t.bF)(c,null,{default:(0,t.k6)((()=>[(0,t.eW)((0,s.v_)(i.value.wali?.nama)+" ("+(0,s.v_)(i.value.wali?.sex)+"; "+(0,s.v_)(i.value.wali_status)+") ",1)])),_:1})])),_:1}),(0,t.bF)(v,{avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(b,{outline:"",color:"green",to:`/wali/${i.value.wali_id}`},{default:(0,t.k6)((()=>[(0,t.Lk)("small",null,(0,s.v_)(i.value.wali_id),1)])),_:1},8,["to"])])),_:1})])),_:1}),(0,t.bF)(m,{inset:"item"}),(0,t.bF)(k,null,{default:(0,t.k6)((()=>[(0,t.bF)(v,{top:"",avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(_)])),_:1}),(0,t.bF)(v,null,{default:(0,t.k6)((()=>[(0,t.bF)(c,{overline:""},{default:(0,t.k6)((()=>[(0,t.eW)(" Orang Tua ")])),_:1}),(0,t.bF)(c,null,{default:(0,t.k6)((()=>[(0,t.eW)((0,s.v_)(i.value.ortu?.ayah)+" | "+(0,s.v_)(i.value.ortu?.ibu),1)])),_:1})])),_:1}),(0,t.bF)(v,{avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(b,{outline:"",color:"green",to:`/ortu/${i.value.ortu_id}`},{default:(0,t.k6)((()=>[(0,t.Lk)("small",null,(0,s.v_)(i.value.ortu_id),1)])),_:1},8,["to"])])),_:1})])),_:1})])),_:1}))])),_:1})])),_:1})}}};var _=e(83341),v=e(60222),c=e(66739),b=e(4629),k=e(22677),m=e(71402),f=e(53766),F=e(22589),g=e(14958),p=e(25305),q=e(87472),A=e(99039),Q=e(86915),w=e(272),W=e.n(w);const x=d,h=x;W()(d,"components",{QCard:_.A,QCardSection:v.A,QToolbar:c.A,QToolbarTitle:b.A,QBtn:k.A,QSpinnerCube:m.A,QList:f.A,QItem:F.A,QItemSection:g.A,QAvatar:p.A,QImg:q.A,QItemLabel:A.A,QSeparator:Q.A});const y={class:"row",style:{"max-width":"1200px"}},L={class:"col-xs-12 col-sm-6"},S={class:"col-xs-12 col-sm-6"},C={__name:"IzinBySantri",setup(a){const{params:l}=(0,i.lq)(),e=(0,u.KR)(l.santri_id);return(0,t.sV)((async()=>{e.value=l.santri_id})),(a,i)=>{const s=(0,t.g2)("q-page");return(0,t.uX)(),(0,t.Wv)(s,{class:""},{default:(0,t.k6)((()=>[(0,t.Lk)("div",y,[(0,t.Lk)("div",L,[(0,t.bF)(h,{class:"q-ma-sm",id:(0,u.R1)(l).santri_id},null,8,["id"])]),(0,t.Lk)("div",S,[(0,t.bF)(n.A,{class:"q-ma-sm",santri_id:e.value},null,8,["santri_id"])])])])),_:1})}}};var I=e(75013);const T=C,$=T;W()(C,"components",{QPage:I.A})}}]);