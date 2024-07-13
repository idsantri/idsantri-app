"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[5494],{45494:(e,a,t)=>{t.r(a),t.d(a,{default:()=>k});t(67590);var r=t(51347),s=t(8633),l=t(81131),o=t(60455),n=t(34187),u=t(69463),i=t(44257),d=t(15469);const c={class:""},p={class:"q-gutter-y-md column"},g={__name:"LoginPage",emits:["title","errors"],setup(e,{emit:a}){const t=(0,o.rd)(),g=(0,n.KR)(""),m=(0,n.KR)(""),b=(0,n.KR)(!1),h=a;h("title","Login"),h("errors",[]);const f=async()=>{h("errors",[]);try{b.value=!0;const e=await l.A.post("login",{login:g.value,password:m.value});(0,i.A)().token=e.data.token,(0,i.A)().user=e.data.user,(0,i.A)().roles=e.data.roles,(0,i.A)().permissions=e.data.permissions,(0,d.VX)(e.data.message);const a=e.data.user.confirmed_at;a?t.push("/"):t.push("/profile")}catch(e){h("errors",(0,u.$r)(e.response?.data?.message||"Terjadi sebuah kesalahan"))}finally{b.value=!1}};return(0,r.$u)((()=>{const e=document.getElementById("resend-email");e&&e.addEventListener("click",(async a=>{h("errors",[]),a.preventDefault();const t=e.href.replace("%2540","@");try{b.value=!0;const e=await l.A.get(t),a=(0,d.Wv)(e.data.message,0);await a}catch(r){h("errors",(0,u.$r)(r.response?.data?.message||"Terjadi sebuah kesalahan"))}finally{b.value=!1}}))})),(e,a)=>{const t=(0,r.g2)("q-input"),l=(0,r.g2)("q-btn"),o=(0,r.g2)("q-card-section"),n=(0,r.g2)("q-card"),u=(0,r.g2)("q-spinner-cube");return(0,r.uX)(),(0,r.CE)("div",c,[(0,r.Lk)("form",{onSubmit:(0,s.D$)(f,["prevent"])},[(0,r.Lk)("div",p,[(0,r.bF)(t,{"bg-color":"green-1",outlined:"",modelValue:g.value,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value=e),required:"",label:"Login",hint:"Username atau email/surel Anda!",autocomplete:"off",autocapitalize:"none",readonly:"",onfocus:"this.removeAttribute('readonly');",onblur:"this.setAttribute('readonly','true');"},null,8,["modelValue"]),(0,r.bF)(t,{id:"password","bg-color":"green-1",outlined:"",modelValue:m.value,"onUpdate:modelValue":a[1]||(a[1]=e=>m.value=e),type:"password",required:"",label:"Password",autocomplete:"off",autocapitalize:"none",readonly:"",onfocus:"this.removeAttribute('readonly');",onblur:"this.setAttribute('readonly','true');",hint:"Password atau kata sandi"},null,8,["modelValue"]),(0,r.bF)(l,{type:"submit",class:"full-width q-pa-sm text-green-10",color:"green-3",label:"Login"}),(0,r.bF)(n,{class:"my-card",flat:""},{default:(0,r.k6)((()=>[(0,r.bF)(o,{class:"text-green-10 text-center bg-green-2 q-pa-sm"},{default:(0,r.k6)((()=>[(0,r.bF)(l,{outline:"",color:"green-10",class:"full-width text-weight-regular","no-caps":"",to:"/register",label:"Belum punya akun? Daftar!"}),(0,r.bF)(l,{outline:"",color:"green-10",class:"full-width text-weight-regular q-mt-sm","no-caps":"",to:"/forgot-password",label:"Lupa password? Atur ulang!"})])),_:1})])),_:1})])],32),(0,r.bo)((0,r.bF)(u,{color:"green-12",size:"14em",class:"absolute-center"},null,512),[[s.aG,b.value]])])}}};var m=t(46395),b=t(22677),h=t(83341),f=t(60222),v=t(71402),y=t(272),w=t.n(y);const A=g,k=A;w()(g,"components",{QInput:m.A,QBtn:b.A,QCard:h.A,QCardSection:f.A,QSpinnerCube:v.A})}}]);