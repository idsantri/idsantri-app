"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[4483],{4483:(e,a,l)=>{l.r(a),l.d(a,{default:()=>k});l(7590);var t=l(1347),o=l(8633),r=l(1131),n=l(455),u=l(4187),s=l(9463),i=l(5469);const d={class:""},c={class:"q-gutter-y-md column"},m={__name:"RegisterPage",emits:["title","errors"],setup(e,{emit:a}){const l=(0,n.rd)(),m=(0,u.KR)(""),p=(0,u.KR)(""),b=(0,u.KR)(""),g=(0,u.KR)(""),f=a;f("title","Daftar"),f("errors",[]);const h=(0,u.KR)(!1),v=async()=>{f("errors",[]);try{h.value=!0;const e=await r.A.post("register",{name:m.value,email:p.value.toLowerCase(),password:b.value,password_confirmation:g.value}),a=(0,i.Wv)(e.data.message,0);await a,l.push({name:"Login"})}catch(e){f("errors",(0,s.$r)(e.response?.data?.message||"Terjadi sebuah kesalahan"))}finally{h.value=!1}};return(e,a)=>{const l=(0,t.g2)("q-input"),r=(0,t.g2)("q-btn"),n=(0,t.g2)("q-card-section"),u=(0,t.g2)("q-card"),s=(0,t.g2)("q-spinner-cube");return(0,t.uX)(),(0,t.CE)("div",d,[(0,t.Lk)("form",{onSubmit:(0,o.D$)(v,["prevent"])},[(0,t.Lk)("div",c,[(0,t.bF)(l,{required:"","bg-color":"green-1",outlined:"",modelValue:m.value,"onUpdate:modelValue":a[0]||(a[0]=e=>m.value=e),minlength:"5",label:"Nama",autocorrect:"off",placeholder:"Nama Anda",autocapitalize:"words"},null,8,["modelValue"]),(0,t.bF)(l,{"bg-color":"green-1",outlined:"",modelValue:p.value,"onUpdate:modelValue":a[1]||(a[1]=e=>p.value=e),type:"email",required:"",label:"Email/Surel",hint:"Kami tidak akan membagikan email/surel Anda",autocapitalize:"none",autocomplete:"off",autocorrect:"off",readonly:"",onfocus:"this.removeAttribute('readonly');",onblur:"this.setAttribute('readonly','true');"},null,8,["modelValue"]),(0,t.bF)(l,{"bg-color":"green-1",outlined:"",modelValue:b.value,"onUpdate:modelValue":a[2]||(a[2]=e=>b.value=e),type:"password",required:"",label:"Password",placeholder:"Masukkan password!",autocapitalize:"none",autocomplete:"off",autocorrect:"off",readonly:"",onfocus:"this.removeAttribute('readonly');",onblur:"this.setAttribute('readonly','true');"},null,8,["modelValue"]),(0,t.bF)(l,{"bg-color":"green-1",round:"",outlined:"",modelValue:g.value,"onUpdate:modelValue":a[3]||(a[3]=e=>g.value=e),type:"password",required:"",label:"Konfirmasi Password",placeholder:"Ulangi password!",autocapitalize:"none",autocomplete:"off",autocorrect:"off",readonly:"",onfocus:"this.removeAttribute('readonly');",onblur:"this.setAttribute('readonly','true');"},null,8,["modelValue"]),(0,t.bF)(r,{type:"submit",class:"full-width q-pa-sm text-green-10",color:"green-3",label:"Daftar"}),(0,t.bF)(u,{class:"my-card",flat:""},{default:(0,t.k6)((()=>[(0,t.bF)(n,{class:"text-green-10 text-center bg-green-2 q-pa-sm"},{default:(0,t.k6)((()=>[(0,t.bF)(r,{outline:"",color:"green-10",class:"full-width text-weight-regular","no-caps":"",to:"/login",label:"Sudah punya akun? Login"})])),_:1})])),_:1})])],32),(0,t.bo)((0,t.bF)(s,{color:"green-12",size:"14em",class:"absolute-center"},null,512),[[o.aG,h.value]])])}}};var p=l(6395),b=l(2677),g=l(3341),f=l(222),h=l(1402),v=l(272),y=l.n(v);const w=m,k=w;y()(m,"components",{QInput:p.A,QBtn:b.A,QCard:g.A,QCardSection:f.A,QSpinnerCube:h.A})}}]);