"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[8333],{8333:(a,e,t)=>{t.r(e),t.d(e,{default:()=>F});t(7590);var l=t(1347),n=t(8633),s=t(1131),r=t(455),i=t(4187),o=t(9463),u=t(5469);const d={class:""},g=(0,l.Lk)("p",{class:"q-pa-sm no-margin text-green-10 text-justify bg-green-2 rounded-borders"}," Tidak masalah. Masukkan email Anda di bawah ini dan kami akan mengirimkan instruksi untuk mengatur ulang kata sandi Anda. ",-1),c={class:"q-gutter-y-md column"},m={__name:"ForgotPage",emits:["title","errors"],setup(a,{emit:e}){const t=(0,i.KR)(!1),m=(0,r.rd)(),p=(0,i.KR)(""),b=e;b("title","Lupa Kata Sandi?"),b("errors",[]);const k=async()=>{b("errors",[]);try{t.value=!0;const a=await s.A.post("forgot-password",{email:p.value}),e=(0,u.Wv)(a.data.message,0);await e,m.push("/reset-password")}catch(a){b("errors",(0,o.$)(a.response?.data?.message||"Terjadi sebuah kesalahan"))}finally{t.value=!1}};return(a,e)=>{const s=(0,l.g2)("q-card-section"),r=(0,l.g2)("q-card"),i=(0,l.g2)("q-input"),o=(0,l.g2)("q-btn"),u=(0,l.g2)("q-spinner-cube");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("div",d,[(0,l.bF)(r,{class:"q-mb-lg",flat:""},{default:(0,l.k6)((()=>[(0,l.bF)(s,{class:"no-padding no-margin"},{default:(0,l.k6)((()=>[g])),_:1})])),_:1}),(0,l.Lk)("form",{onSubmit:(0,n.D$)(k,["prevent"])},[(0,l.Lk)("div",c,[(0,l.bF)(i,{class:"no-margin no-padding","bg-color":"green-1",outlined:"",modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=a=>p.value=a),required:"",label:"Email",placeholder:"Masukkan email Anda!",type:"email"},null,8,["modelValue"]),(0,l.bF)(o,{type:"submit",class:"full-width q-pa-sm text-green-10",color:"green-3",label:"Kirim instruksi"}),(0,l.bF)(r,{class:"",flat:""},{default:(0,l.k6)((()=>[(0,l.bF)(s,{class:"text-green-10 text-center bg-green-2 q-pa-sm"},{default:(0,l.k6)((()=>[(0,l.bF)(o,{outline:"",color:"green-10",class:"full-width text-weight-regular","no-caps":"",to:"/login",label:"Kembali ke halaman login"}),(0,l.bF)(o,{outline:"",color:"green-10",class:"full-width text-weight-regular q-mt-sm","no-caps":"",to:"/reset-password",label:"Atur ulang password"})])),_:1})])),_:1})])],32)]),(0,l.bo)((0,l.bF)(u,{color:"green-12",size:"14em",class:"absolute-center"},null,512),[[n.aG,t.value]])],64)}}};var p=t(3341),b=t(222),k=t(6067),h=t(2677),f=t(1402),w=t(272),q=t.n(w);const v=m,F=v;q()(m,"components",{QCard:p.A,QCardSection:b.A,QInput:k.A,QBtn:h.A,QSpinnerCube:f.A})}}]);