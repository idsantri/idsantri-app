"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[5824],{15824:(e,a,t)=>{t.r(a),t.d(a,{default:()=>K});var n=t(51347),l=t(34187),r=t(60455),s=t(15469),i=t(21734),o=t(10685);const u=["innerHTML"],d={__name:"IndexPage",setup(e){const{params:a}=(0,r.lq)(),t=(0,l.KR)(!1),d=(0,l.KR)("");async function c(){if(!a.th_ajaran_h||!a.tingkat_id)return void(0,s.KQ)("Tentukan tahun ajaran dan tingkat pendidikan!");const e=await(0,i.A)({endPoint:"export/kelas",loading:t,params:{th_ajaran_h:a.th_ajaran_h,tingkat_id:a.tingkat_id}});if(!e)return;if(!e.url)return(0,s.KQ)("Url tidak ditemukan");let n=document.createElement("a");n.href=e.url,n.click(),n.remove()}return(e,a)=>{const l=(0,n.g2)("q-space"),r=(0,n.g2)("q-btn"),s=(0,n.g2)("q-item-label"),i=(0,n.g2)("q-item-section"),g=(0,n.g2)("q-icon"),p=(0,n.g2)("q-item"),k=(0,n.g2)("q-list"),m=(0,n.g2)("q-btn-dropdown"),b=(0,n.g2)("q-card-section"),_=(0,n.g2)("q-spinner-cube"),f=(0,n.g2)("q-dialog"),q=(0,n.g2)("router-view"),h=(0,n.g2)("q-card"),A=(0,n.g2)("q-page"),v=(0,n.gN)("close-popup");return(0,n.uX)(),(0,n.Wv)(A,{class:"q-pa-sm"},{default:(0,n.k6)((()=>[(0,n.bF)(o.A,{"show-ujian-ke":!1,"start-url":"/madrasah/murid",onDataFilter:a[0]||(a[0]=e=>d.value=e)}),(0,n.bF)(h,{class:"q-mt-sm"},{default:(0,n.k6)((()=>[(0,n.bF)(b,{class:"bg-green-8 text-green-1 text-subtitle1 q-pa-sm flex flex-center"},{default:(0,n.k6)((()=>[(0,n.Lk)("span",{innerHTML:d.value||""},null,8,u),(0,n.bF)(l),(0,n.bF)(r,{dense:"",icon:"download",label:"Excel","no-caps":"",class:"bg-green-11 text-green-10 q-px-md",onClick:c}),(0,n.bF)(m,{flat:"",dense:"","dropdown-icon":"more_vert",class:"q-ml-md",color:"green-11"},{default:(0,n.k6)((()=>[(0,n.bF)(k,null,{default:(0,n.k6)((()=>[(0,n.bo)(((0,n.uX)(),(0,n.Wv)(p,{to:"/madrasah/kelas/kenaikan",disable:""},{default:(0,n.k6)((()=>[(0,n.bF)(i,null,{default:(0,n.k6)((()=>[(0,n.bF)(s,null,{default:(0,n.k6)((()=>[(0,n.eW)("Kenaikan Kelas")])),_:1})])),_:1}),(0,n.bF)(i,{avatar:""},{default:(0,n.k6)((()=>[(0,n.bF)(g,{name:"trending_up",flat:""})])),_:1})])),_:1})),[[v]])])),_:1})])),_:1})])),_:1}),(0,n.bF)(b,{class:"q-pa-sm"},{default:(0,n.k6)((()=>[(0,n.bF)(f,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value=e),persistent:""},{default:(0,n.k6)((()=>[(0,n.bF)(_,{color:"green-12",size:"8em",class:"flex q-ma-lg q-mx-auto"})])),_:1},8,["modelValue"]),((0,n.uX)(),(0,n.Wv)(q,{key:e.$route.fullPath}))])),_:1})])),_:1})])),_:1})}}};var c=t(75013),g=t(83341),p=t(60222),k=t(5873),m=t(22677),b=t(73614),_=t(53766),f=t(22589),q=t(14958),h=t(99039),A=t(93933),v=t(30045),F=t(71402),Q=t(61038),x=t(272),w=t.n(x);const C=d,K=C;w()(d,"components",{QPage:c.A,QCard:g.A,QCardSection:p.A,QSpace:k.A,QBtn:m.A,QBtnDropdown:b.A,QList:_.A,QItem:f.A,QItemSection:q.A,QItemLabel:h.A,QIcon:A.A,QDialog:v.A,QSpinnerCube:F.A}),w()(d,"directives",{ClosePopup:Q.A})}}]);