"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[9060],{99060:(t,a,e)=>{e.r(a),e.d(a,{default:()=>K});var i=e(51347),n=e(34187),l=e(60455),s=e(21734),o=(e(67590),e(37763));const r=(0,i.Lk)("div",{class:"text-subtitle2 text-weight-bold"}," Filter ID Santri ",-1),d={class:"flex content-start items-center",style:{"max-width":"1000px",width:"100%"}},u={key:0,class:"q-pa-sm"},c={key:1,class:"q-pa-sm text-negative"},p={__name:"HeadFilterSantri",props:{startUrl:String,activeOnly:{type:Boolean}},emits:["dataFilter"],setup(t,{emit:a}){const e=t,p=a,v=(0,l.lq)(),g=(0,l.rd)(),m={id:v.params.id},b=(0,n.KR)(m.id),k=(0,n.KR)(!1),_=(0,n.KR)([]),h=(0,n.KR)(!1);function f(t){t?g.push(`${e.startUrl}/${t}`):g.push(`${e.startUrl}`)}async function q(t,a){if(!t)return void a((()=>{_.value=[]}));const i=await(0,s.A)({endPoint:"santri/ids",loading:k,params:{active_only:!!e.activeOnly,q:t}});h.value=!i.lists.length,a((()=>_.value=i.lists),(a=>{""!==t&&a.options.length&&(a.setOptionIndex(-1),a.moveOptionSelection(1,!0))}))}return(0,i.sV)((async()=>{if(p("dataFilter",{display:'<div class="text-green-13 text-italic">Tentukan filter!</div>'}),b.value){const t=await(0,s.A)({endPoint:`santri/${b.value}`}),a={display:`\n\t\t\t➡️ ${b.value}\n\t\t\t| <strong>${t.santri.nama}</strong>\n\t\t\t| ${t.santri.data_akhir.data_akhir}\n\t\t\t`};p("dataFilter",a)}})),(t,a)=>{const e=(0,i.g2)("q-toolbar-title"),n=(0,i.g2)("q-toolbar"),l=(0,i.g2)("q-card-section"),s=(0,i.g2)("q-item-label"),p=(0,i.g2)("q-item-section"),v=(0,i.g2)("q-item"),g=(0,i.g2)("q-select"),m=(0,i.g2)("q-card");return(0,i.uX)(),(0,i.Wv)(m,null,{default:(0,i.k6)((()=>[(0,i.bF)(l,{class:"q-px-sm q-py-sm bg-green-11"},{default:(0,i.k6)((()=>[(0,i.bF)(n,{class:"no-padding",style:{"min-height":"0"}},{default:(0,i.k6)((()=>[(0,i.bF)(e,{class:"text-subtitle1"},{default:(0,i.k6)((()=>[r])),_:1}),(0,i.RG)(t.$slots,"default")])),_:3})])),_:3}),(0,i.bF)(l,{class:"no-padding"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",d,[(0,i.bF)(g,{class:"q-pa-sm",dense:"",outlined:"",label:"ID Santri",modelValue:b.value,"onUpdate:modelValue":[a[0]||(a[0]=t=>b.value=t),f],options:_.value,"emit-value":"","map-options":"","option-value":"id","option-label":"id","error-color":"negative",loading:k.value,"use-input":"",clearable:"",onFilter:q,behavior:"menu"},{option:(0,i.k6)((t=>[(0,i.bF)(v,(0,o._B)((0,i.Ng)(t.itemProps)),{default:(0,i.k6)((()=>[(0,i.bF)(p,null,{default:(0,i.k6)((()=>[(0,i.bF)(s,null,{default:(0,i.k6)((()=>[(0,i.eW)((0,o.v_)(t.opt.id)+" — "+(0,o.v_)(t.opt.nama),1)])),_:2},1024),(0,i.bF)(s,{caption:""},{default:(0,i.k6)((()=>[(0,i.eW)((0,o.v_)(t.opt.data_akhir),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","options","loading"]),b.value?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("div",u,"Ketikkan ID Santri")),h.value?((0,i.uX)(),(0,i.CE)("div",c," Data Tidak ditemukan ")):(0,i.Q3)("",!0)])])),_:1})])),_:3})}}};var v=e(83341),g=e(60222),m=e(66739),b=e(4629),k=e(54611),_=e(22589),h=e(14958),f=e(99039),q=e(272),F=e.n(q);const y=p,A=y;F()(p,"components",{QCard:v.A,QCardSection:g.A,QToolbar:m.A,QToolbarTitle:b.A,QSelect:k.A,QItem:_.A,QItemSection:h.A,QItemLabel:f.A});var x=e(34924),Q=e(71824);const S={__name:"IuranBySantri",setup(t){const a=(0,n.KR)([{}]),e=(0,n.KR)(!1),o=(0,n.KR)({}),r=(0,l.lq)(),d={id:r.params.id};return(0,i.sV)((async()=>{if(d.id){const t=await(0,s.A)({endPoint:"iuran",loading:e,params:{santri_id:d.id}});a.value=t.iuran}})),(t,n)=>{const l=(0,i.g2)("q-page");return(0,i.uX)(),(0,i.Wv)(l,{class:"q-pa-sm"},{default:(0,i.k6)((()=>[(0,i.bF)(A,{"start-url":"/bendahara/iuran/q/santri",onDataFilter:n[0]||(n[0]=t=>o.value=t),"active-only":!1},{default:(0,i.k6)((()=>[(0,i.bF)(x.A)])),_:1}),(0,i.bF)(Q.A,{data:a.value,loading:e.value,heading:o.value.display},null,8,["data","loading","heading"])])),_:1})}}};var w=e(75013);const I=S,K=I;F()(S,"components",{QPage:w.A})}}]);