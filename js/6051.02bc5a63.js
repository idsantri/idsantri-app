"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[6051],{36051:(a,u,t)=>{t.r(u),t.d(u,{default:()=>o});var n=t(51347),r=t(34187),e=t(95568),i=t(60455),s=t(21734);const l={__name:"SantriOrtu",setup(a){const u=(0,i.lq)(),t=u.params.id,l=(0,r.KR)(!1),d=(0,r.KR)({});return(0,n.sV)((async()=>{const{ortu:a}=await(0,s.A)({endPoint:`santri/${t}/ortu`,loading:l});d.value={"ID Ortu":a.id,Ayah:a.ayah,Ibu:a.ibu,"Anak ke":`${a.anak_ke||"?"} dari ${a.jumlah_anak||"?"}  bersaudara`}})),(a,u)=>((0,n.uX)(),(0,n.Wv)(e.A,{data:d.value,route:"/ortu/"+d.value["ID Ortu"],spinner:l.value},null,8,["data","route","spinner"]))}},d=l,o=d}}]);