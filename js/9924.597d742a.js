"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[9924],{9924:(l,a,e)=>{e.r(a),e.d(a,{default:()=>B});var t=e(1347),n=e(7763),u=e(4187),s=e(1734),d=e(4265),i=e(455),o=e(9889),r=e(5605);const k={class:"row",style:{"max-width":"1200px"}},c={class:"col-12 col-md-6 q-pt-sm"},g={key:0},v={key:1},b=(0,t.Lk)("td",null,"ID",-1),m=(0,t.Lk)("td",null,"Tahun Ajaran",-1),L=(0,t.Lk)("td",null,"Santri ID",-1),_={class:"flex flex-center"},p=(0,t.Lk)("td",null,"Nama",-1),f=(0,t.Lk)("td",null,"Data Akhir",-1),q=(0,t.Lk)("td",null,"No Telepon",-1),F=(0,t.Lk)("td",null,"Email",-1),x={class:"col-12 col-md-6 q-pt-sm"},A={key:0},h={key:1},y=(0,t.Lk)("td",null,"PJGT ID",-1),C={class:"flex flex-center"},Q=(0,t.Lk)("td",null,"Nama",-1),T=(0,t.Lk)("td",null,"Alamat",-1),j=(0,t.Lk)("td",null,"Wilayah",-1),w=(0,t.Lk)("td",null,"Lembaga",-1),D=(0,t.Lk)("td",null,"Administrasi",-1),R={__name:"GtDetail",setup(l){const a=(0,i.lq)(),e=a.params.id,R=(0,u.KR)(!1),S=(0,u.KR)({}),V=(0,u.KR)(!1),E=(0,u.KR)("");async function K(){const l=await(0,s.A)({endPoint:`ugt/gt/${e}`,loading:R});S.value=l.gt}(0,t.sV)((async()=>{await K()}));const P=(0,u.KR)(!1);async function X(){E.value=`reports/ugt/surat-tugas/view?id=${S.value.id}`,P.value=!0}return(l,a)=>{const e=(0,t.g2)("q-toolbar-title"),s=(0,t.g2)("q-btn"),i=(0,t.g2)("q-toolbar"),$=(0,t.g2)("q-card-section"),G=(0,t.g2)("q-spinner-cube"),W=(0,t.g2)("q-space"),z=(0,t.g2)("q-markup-table"),I=(0,t.g2)("q-card-actions"),N=(0,t.g2)("q-card"),J=(0,t.g2)("q-dialog"),U=(0,t.g2)("q-page");return(0,t.uX)(),(0,t.Wv)(U,null,{default:(0,t.k6)((()=>[(0,t.Lk)("div",k,[(0,t.Lk)("div",c,[(0,t.bF)(N,{class:"q-mx-sm"},{default:(0,t.k6)((()=>[(0,t.bF)($,{class:"bg-green-8 no-padding"},{default:(0,t.k6)((()=>[(0,t.bF)(i,{class:"no-padding no-margin"},{default:(0,t.k6)((()=>[(0,t.bF)(e,{class:"text-subtitle1 q-ml-sm text-green-11"},{default:(0,t.k6)((()=>[(0,t.eW)(" Data GT ")])),_:1}),(0,t.bF)(s,{dense:"",class:"q-px-md q-mr-sm text-green-10",label:"Edit","no-caps":"",icon:"edit",color:"green-2",onClick:a[0]||(a[0]=l=>V.value=!0)})])),_:1})])),_:1}),(0,t.bF)($,{class:"q-pa-sm"},{default:(0,t.k6)((()=>[R.value?((0,t.uX)(),(0,t.CE)("div",g,[(0,t.bF)(G,{color:"green-12",size:"8em",class:"flex q-ma-lg q-mx-auto"})])):((0,t.uX)(),(0,t.CE)("div",v,[(0,t.bF)(z,{flat:"",class:"text-green-10"},{default:(0,t.k6)((()=>[(0,t.Lk)("tbody",null,[(0,t.Lk)("tr",null,[b,(0,t.Lk)("td",null,(0,n.v_)(S.value.id),1)]),(0,t.Lk)("tr",null,[m,(0,t.Lk)("td",null,(0,n.v_)(S.value.th_ajaran_h),1)]),(0,t.Lk)("tr",null,[L,(0,t.Lk)("td",null,[(0,t.Lk)("div",_,[(0,t.Lk)("div",null,(0,n.v_)(S.value.santri_id),1),(0,t.bF)(W),(0,t.bF)(s,{class:"bg-green-11",icon:"info",glossy:"",round:"",dense:"",to:`/santri/${S.value.santri_id}`},null,8,["to"])])])]),(0,t.Lk)("tr",null,[p,(0,t.Lk)("td",null,(0,n.v_)(S.value.nama),1)]),(0,t.Lk)("tr",null,[f,(0,t.Lk)("td",null,(0,n.v_)(S.value.data_akhir),1)]),(0,t.Lk)("tr",null,[q,(0,t.Lk)("td",null,(0,n.v_)(S.value.telepon),1)]),(0,t.Lk)("tr",null,[F,(0,t.Lk)("td",null,(0,n.v_)(S.value.email),1)])])])),_:1})]))])),_:1}),(0,t.bF)(I,{class:"bg-green-7",align:"right"},{default:(0,t.k6)((()=>[(0,t.bF)(s,{label:"Print",dense:"","no-caps":"",icon:"print",color:"green-11",class:"q-px-md text-green-10",onClick:X})])),_:1})])),_:1})]),(0,t.Lk)("div",x,[(0,t.bF)(N,{class:"q-mx-sm"},{default:(0,t.k6)((()=>[(0,t.bF)($,{class:"bg-green-8 no-padding"},{default:(0,t.k6)((()=>[(0,t.bF)(i,{class:"no-padding no-margin"},{default:(0,t.k6)((()=>[(0,t.bF)(e,{class:"text-subtitle1 q-ml-sm text-green-11"},{default:(0,t.k6)((()=>[(0,t.eW)(" Data PJGT ")])),_:1})])),_:1})])),_:1}),(0,t.bF)($,{class:"q-pa-sm"},{default:(0,t.k6)((()=>[R.value?((0,t.uX)(),(0,t.CE)("div",A,[(0,t.bF)(G,{color:"green-12",size:"8em",class:"flex q-ma-lg q-mx-auto"})])):((0,t.uX)(),(0,t.CE)("div",h,[(0,t.bF)(z,{flat:"",class:"text-green-10"},{default:(0,t.k6)((()=>[(0,t.Lk)("tbody",null,[(0,t.Lk)("tr",null,[y,(0,t.Lk)("td",null,[(0,t.Lk)("div",C,[(0,t.Lk)("div",null,(0,n.v_)(S.value.pjgt_id),1),(0,t.bF)(W),(0,t.bF)(s,{class:"bg-green-11",icon:"info",glossy:"",round:"",dense:"",to:`/ugt/pjgt/${S.value.pjgt_id}`},null,8,["to"])])])]),(0,t.Lk)("tr",null,[Q,(0,t.Lk)("td",null,(0,n.v_)(S.value.pjgt_nama),1)]),(0,t.Lk)("tr",null,[T,(0,t.Lk)("td",null,(0,n.v_)(S.value.pjgt_alamat),1)]),(0,t.Lk)("tr",null,[j,(0,t.Lk)("td",null,(0,n.v_)(S.value.pjgt_wilayah),1)]),(0,t.Lk)("tr",null,[w,(0,t.Lk)("td",null,(0,n.v_)(S.value.pjgt_lembaga),1)]),(0,t.Lk)("tr",null,[D,(0,t.Lk)("td",null," Rp"+(0,n.v_)((0,u.R1)(d.z)(S.value.administrasi_nominal||0))+" ("+(0,n.v_)(S.value.administrasi_count||0)+"x) ",1)])])])),_:1})]))])),_:1})])),_:1})])]),(0,t.bF)(J,{persistent:"",modelValue:V.value,"onUpdate:modelValue":a[3]||(a[3]=l=>V.value=l)},{default:(0,t.k6)((()=>[(0,t.bF)(o.A,{"is-new":!1,data:S.value,onSuccessSubmit:a[1]||(a[1]=l=>K()),onSuccessDelete:a[2]||(a[2]=a=>l.$router.go(-1))},null,8,["data"])])),_:1},8,["modelValue"]),(0,t.bF)(J,{modelValue:P.value,"onUpdate:modelValue":a[4]||(a[4]=l=>P.value=l)},{default:(0,t.k6)((()=>[(0,t.bF)(r.A,{url:E.value},null,8,["url"])])),_:1},8,["modelValue"])])),_:1})}}};var S=e(5013),V=e(3341),E=e(222),K=e(6739),P=e(4629),X=e(2677),$=e(1402),G=e(4362),W=e(5873),z=e(5034),I=e(45),N=e(272),J=e.n(N);const U=R,B=U;J()(R,"components",{QPage:S.A,QCard:V.A,QCardSection:E.A,QToolbar:K.A,QToolbarTitle:P.A,QBtn:X.A,QSpinnerCube:$.A,QMarkupTable:G.A,QSpace:W.A,QCardActions:z.A,QDialog:I.A})}}]);