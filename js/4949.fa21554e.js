"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[4949],{4949:(a,l,e)=>{e.r(l),e.d(l,{default:()=>z});var t=e(1347),n=e(7763),u=e(4187),s=e(1734),d=e(783),o=e(455),i=e(4954),r=e(9889);const k={class:"row",style:{"max-width":"1200px"}},c={class:"col-12 col-md-6 q-pt-sm"},m={key:0},g={key:1},v=(0,t.Lk)("td",null,"ID",-1),b=(0,t.Lk)("td",null,"Nama",-1),p=(0,t.Lk)("td",null,"Lembaga",-1),_=(0,t.Lk)("td",null,"Wilayah",-1),L=(0,t.Lk)("td",null,"Alamat",-1),q=(0,t.Lk)("td",null,"Telepon",-1),f=(0,t.Lk)("td",null,"Email",-1),F={class:"col-12 col-md-6 q-pt-sm"},x={key:0},A={key:1},y={key:0,class:"text-center text-negative bg-red-1"},C=(0,t.Lk)("p",{class:"no-margin q-pa-md"}," Tidak ada data untuk ditampilkan! ",-1),h=[C],w={__name:"PjgtDetail",setup(a){const l=(0,o.lq)(),e=l.params.id,C=(0,u.KR)(!1),w=(0,u.KR)(!1),Q=(0,u.KR)({}),T=(0,u.KR)([]),W=(0,u.KR)(!1),j=(0,u.KR)(!1);async function S(){const a=await(0,s.A)({endPoint:`ugt/pjgt/${e}`,loading:C});Q.value=a.pjgt}async function D(){const a=await(0,s.A)({endPoint:"ugt/gt",loading:w,params:{pjgt_id:e}});T.value=a.gt}return(0,t.sV)((async()=>{await S(),await D()})),(a,l)=>{const e=(0,t.g2)("q-toolbar-title"),s=(0,t.g2)("q-btn"),o=(0,t.g2)("q-toolbar"),E=(0,t.g2)("q-card-section"),X=(0,t.g2)("q-spinner-cube"),I=(0,t.g2)("q-markup-table"),K=(0,t.g2)("q-card"),R=(0,t.g2)("q-item-label"),V=(0,t.g2)("q-item-section"),P=(0,t.g2)("q-item"),U=(0,t.g2)("q-list"),$=(0,t.g2)("q-dialog"),G=(0,t.g2)("q-page");return(0,t.uX)(),(0,t.Wv)(G,null,{default:(0,t.k6)((()=>[(0,t.Lk)("div",k,[(0,t.Lk)("div",c,[(0,t.bF)(K,{class:"q-mx-sm"},{default:(0,t.k6)((()=>[(0,t.bF)(E,{class:"bg-green-8 no-padding"},{default:(0,t.k6)((()=>[(0,t.bF)(o,{class:"no-padding no-margin"},{default:(0,t.k6)((()=>[(0,t.bF)(e,{class:"text-subtitle1 q-ml-sm text-green-11"},{default:(0,t.k6)((()=>[(0,t.eW)(" Data PJGT ")])),_:1}),(0,t.bF)(s,{dense:"",class:"q-px-md q-mr-sm text-green-10",label:"Edit","no-caps":"",icon:"edit",color:"green-2",onClick:l[0]||(l[0]=a=>W.value=!0)})])),_:1})])),_:1}),(0,t.bF)(E,{class:"q-pa-sm"},{default:(0,t.k6)((()=>[C.value?((0,t.uX)(),(0,t.CE)("div",m,[(0,t.bF)(X,{color:"green-12",size:"8em",class:"flex q-ma-lg q-mx-auto"})])):((0,t.uX)(),(0,t.CE)("div",g,[(0,t.bF)(I,{flat:"",class:"text-green-10"},{default:(0,t.k6)((()=>[(0,t.Lk)("tbody",null,[(0,t.Lk)("tr",null,[v,(0,t.Lk)("td",null,(0,n.v_)(Q.value.id),1)]),(0,t.Lk)("tr",null,[b,(0,t.Lk)("td",null,(0,n.v_)(Q.value.nama?.toUpperCase()),1)]),(0,t.Lk)("tr",null,[p,(0,t.Lk)("td",null,(0,n.v_)(Q.value.jenis_lembaga)+" "+(0,n.v_)(Q.value.nama_lembaga),1)]),(0,t.Lk)("tr",null,[_,(0,t.Lk)("td",null,(0,n.v_)(Q.value.wilayah),1)]),(0,t.Lk)("tr",null,[L,(0,t.Lk)("td",null,(0,n.v_)((0,u.R1)(d.CA)(Q.value.jl,Q.value.rt,Q.value.rw,Q.value.desa,Q.value.kecamatan,Q.value.kabupaten,Q.value.provinsi,Q.value.kode_pos)),1)]),(0,t.Lk)("tr",null,[q,(0,t.Lk)("td",null,(0,n.v_)(Q.value.telepon),1)]),(0,t.Lk)("tr",null,[f,(0,t.Lk)("td",null,(0,n.v_)(Q.value.email),1)])])])),_:1})]))])),_:1})])),_:1})]),(0,t.Lk)("div",F,[(0,t.bF)(K,{class:"q-mx-sm"},{default:(0,t.k6)((()=>[(0,t.bF)(E,{class:"bg-green-8 no-padding"},{default:(0,t.k6)((()=>[(0,t.bF)(o,{class:"no-padding no-margin"},{default:(0,t.k6)((()=>[(0,t.bF)(e,{class:"text-subtitle1 q-ml-sm text-green-11"},{default:(0,t.k6)((()=>[(0,t.eW)(" Data GT ")])),_:1}),(0,t.bF)(s,{dense:"",class:"q-px-md q-mr-sm text-green-10",label:"Tambah","no-caps":"",icon:"add",color:"green-2",onClick:l[1]||(l[1]=a=>j.value=!0)})])),_:1})])),_:1}),(0,t.bF)(E,{class:"q-pa-sm"},{default:(0,t.k6)((()=>[w.value?((0,t.uX)(),(0,t.CE)("div",x,[(0,t.bF)(X,{color:"green-12",size:"8em",class:"flex q-ma-md q-mx-auto"})])):((0,t.uX)(),(0,t.CE)("div",A,[T.value.length?((0,t.uX)(),(0,t.Wv)(U,{key:1,bordered:"",separator:""},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(T.value,((a,l)=>((0,t.uX)(),(0,t.Wv)(P,{key:l},{default:(0,t.k6)((()=>[(0,t.bF)(V,null,{default:(0,t.k6)((()=>[(0,t.bF)(R,{overline:""},{default:(0,t.k6)((()=>[(0,t.eW)((0,n.v_)(a.th_ajaran_h),1)])),_:2},1024),(0,t.bF)(R,{caption:""},{default:(0,t.k6)((()=>[(0,t.Lk)("em",null,[(0,t.eW)(" GT ID: "),(0,t.Lk)("strong",null,(0,n.v_)(a.id),1),(0,t.eW)("; Santri ID: "),(0,t.Lk)("strong",null,(0,n.v_)(a.santri_id),1)])])),_:2},1024),(0,t.bF)(R,null,{default:(0,t.k6)((()=>[(0,t.eW)((0,n.v_)(a.nama?.toUpperCase()),1)])),_:2},1024),(0,t.bF)(R,{caption:""},{default:(0,t.k6)((()=>[(0,t.eW)(" Telepon: "+(0,n.v_)(a.telepon||"-")+"; Email: "+(0,n.v_)(a.email||"-"),1)])),_:2},1024)])),_:2},1024),(0,t.bF)(V,{avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(s,{class:"bg-green-11",icon:"info",glossy:"",round:"",outline:"",to:`/ugt/gt/${a.id}`},null,8,["to"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})):((0,t.uX)(),(0,t.CE)("div",y,h))]))])),_:1})])),_:1})])]),(0,t.bF)($,{persistent:"",modelValue:W.value,"onUpdate:modelValue":l[4]||(l[4]=a=>W.value=a)},{default:(0,t.k6)((()=>[(0,t.bF)(i.A,{"is-new":!1,data:Q.value,onSuccessSubmit:l[2]||(l[2]=a=>S()),onSuccessDelete:l[3]||(l[3]=l=>a.$router.go(-1))},null,8,["data"])])),_:1},8,["modelValue"]),(0,t.bF)($,{persistent:"",modelValue:j.value,"onUpdate:modelValue":l[7]||(l[7]=a=>j.value=a)},{default:(0,t.k6)((()=>[(0,t.bF)(r.A,{"is-new":!0,data:{pjgt_id:Q.value.id,pjgt_nama:Q.value.nama,pjgt_wilayah:Q.value.wilayah},onSuccessSubmit:l[5]||(l[5]=a=>D()),onSuccessDelete:l[6]||(l[6]=l=>a.$router.go(-1))},null,8,["data"])])),_:1},8,["modelValue"])])),_:1})}}};var Q=e(5013),T=e(3341),W=e(222),j=e(6739),S=e(4629),D=e(2677),E=e(1402),X=e(4362),I=e(3766),K=e(2589),R=e(4958),V=e(9039),P=e(45),U=e(272),$=e.n(U);const G=w,z=G;$()(w,"components",{QPage:Q.A,QCard:T.A,QCardSection:W.A,QToolbar:j.A,QToolbarTitle:S.A,QBtn:D.A,QSpinnerCube:E.A,QMarkupTable:X.A,QList:I.A,QItem:K.A,QItemSection:R.A,QItemLabel:V.A,QDialog:P.A})}}]);