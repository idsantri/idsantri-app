"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[3717],{3717:(e,a,l)=>{l.r(a),l.d(a,{default:()=>y});l(7590);var o=l(1347),t=l(8633),r=l(1131),n=l(455),s=l(4187),u=l(9463),d=l(5469);const i={class:""},c={class:"q-gutter-y-md column"},p={__name:"ResetPage",emits:["title","errors"],setup(e,{emit:a}){const l=(0,s.KR)(!1),p=(0,n.rd)(),m=(0,s.KR)(""),b=(0,s.KR)(""),g=(0,s.KR)(""),k=a;k("title","Reset Password"),k("errors",[]);const{query:v}=(0,n.lq)(),h=(0,s.KR)(v.token),f=async()=>{k("errors",[]);try{l.value=!0;const e=await r.A.post("reset-password",{token:h.value,email:m.value,password:b.value,password_confirmation:g.value}),a=(0,d.Wv)(e.data.message,0);await a,p.push({name:"Login"})}catch(e){k("errors",(0,u.$)(e.response?.data?.message||"Terjadi sebuah kesalahan"))}finally{l.value=!1}};return(e,a)=>{const r=(0,o.g2)("q-input"),n=(0,o.g2)("q-btn"),s=(0,o.g2)("q-card-section"),u=(0,o.g2)("q-card"),d=(0,o.g2)("q-spinner-cube");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",i,[(0,o.Lk)("form",{onSubmit:(0,t.D$)(f,["prevent"])},[(0,o.Lk)("div",c,[(0,o.bF)(r,{"bg-color":"green-1",outlined:"",modelValue:h.value,"onUpdate:modelValue":a[0]||(a[0]=e=>h.value=e),required:"",label:"Token",placeholder:"Masukkan token!",hint:"Token yang Anda dapatkan dari email",autocomplete:"off"},null,8,["modelValue"]),(0,o.bF)(r,{"bg-color":"green-1",outlined:"",modelValue:m.value,"onUpdate:modelValue":a[1]||(a[1]=e=>m.value=e),type:"email",required:"",label:"Email",placeholder:"Masukkan email!",autocomplete:"off"},null,8,["modelValue"]),(0,o.bF)(r,{"bg-color":"green-1",outlined:"",modelValue:b.value,"onUpdate:modelValue":a[2]||(a[2]=e=>b.value=e),type:"password",required:"",label:"Password",placeholder:"Masukkan password!",autocomplete:"off",readonly:"",onfocus:"this.removeAttribute('readonly');",onblur:"this.setAttribute('readonly','true');"},null,8,["modelValue"]),(0,o.bF)(r,{"bg-color":"green-1",outlined:"",modelValue:g.value,"onUpdate:modelValue":a[3]||(a[3]=e=>g.value=e),type:"password",required:"",label:"Konfirmasi Password",placeholder:"Ulangi password!",autocomplete:"off",readonly:"",onfocus:"this.removeAttribute('readonly');",onblur:"this.setAttribute('readonly','true');"},null,8,["modelValue"]),(0,o.bF)(n,{type:"submit",class:"full-width q-pa-sm text-green-10",color:"green-3",label:"Ganti Password"}),(0,o.bF)(u,{class:"my-card",flat:""},{default:(0,o.k6)((()=>[(0,o.bF)(s,{class:"text-green-10 text-center bg-green-2 q-pa-sm"},{default:(0,o.k6)((()=>[(0,o.bF)(n,{outline:"",color:"green-10",class:"full-width text-weight-regular","no-caps":"",to:"/login",label:"Kembali ke halaman Login"})])),_:1})])),_:1})])],32)]),(0,o.bo)((0,o.bF)(d,{color:"green-12",size:"14em",class:"absolute-center"},null,512),[[t.aG,l.value]])],64)}}};var m=l(6067),b=l(2677),g=l(3341),k=l(222),v=l(1402),h=l(272),f=l.n(h);const w=p,y=w;f()(p,"components",{QInput:m.A,QBtn:b.A,QCard:g.A,QCardSection:k.A,QSpinnerCube:v.A})}}]);