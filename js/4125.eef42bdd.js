"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[4125],{4125:(a,t,e)=>{e.r(t),e.d(t,{default:()=>o});var i=e(1347),n=e(4187),l=e(5568),s=e(455),u=e(1734);const p={__name:"SantriWali",setup(a){const t=(0,s.lq)(),e=t.params.id,p=(0,n.KR)(!1),r=(0,n.KR)({});return(0,i.sV)((async()=>{const{wali:a}=await(0,u.A)({endPoint:`santri/${e}/wali`,loading:p});r.value={"ID Wali":a.id,Nama:`${a.nama} (${a?.sex?.toUpperCase()})`,Status:a.wali_status,Telepon:a.telepon||"-"}})),(a,t)=>((0,i.uX)(),(0,i.Wv)(l.A,{data:r.value,spinner:p.value,route:"/wali/"+r.value["ID Wali"]},null,8,["data","spinner","route"]))}},r=p,o=r}}]);