"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[56],{80056:(a,e,l)=>{l.r(e),l.d(e,{default:()=>F});var n=l(51347),t=l(8633),i=l(34187),s=l(58094),u=l(56194),o=l(32734),r=l(90575),d=l(15469);const c=(0,n.Lk)("div",{tag:"h1",class:"text-subtitle1"},"Download Nilai",-1),p={__name:"DownloadPage",setup(a){const{loadingMain:e}=(0,i.QW)((0,r.A)()),l=(0,i.KR)({}),p=(0,i.KR)([]),g=(0,i.KR)([]),m=[{value:"ujian",label:"Nilai Ujian"},{value:"harian",label:"Nilai Harian"},{value:"rapor",label:"Nilai Rapor"},{value:"ijazah",label:"Nilai Ijazah"}],h=(0,o.A)().getThAjaran;async function k(){const a=JSON.parse(JSON.stringify(l.value)),n=await(0,s.A)({endPoint:"export/nilai-mapel",loading:e,params:a});if(!n)return;if(!n.url)return(0,d.KQ)("Url tidak ditemukan");let t=document.createElement("a");t.href=n.url,t.click(),t.remove()}return g.value["th_ajaran"]=h,(0,n.sV)((async()=>{const a=(0,o.A)().getThAjaran;if(g.value["th_ajaran"]=a,0==a.length){const a=await(0,u.H)({url:"kelas/lists",key:"th_ajaran",loadingArray:p});(0,o.A)().setThAjaran(a),g.value["th_ajaran"]=a}else g.value["th_ajaran"]=a})),(0,n.wB)((()=>l.value.th_ajaran_h),(async a=>{if(l.value.tingkat_id="",l.value.kelas="",a){const e=(0,o.A)().getTingkatByTahun(a);if(e.length)g.value["tingkat"]=e;else{const e=await(0,u.H)({url:"kelas/lists",params:{th_ajaran_h:a},key:"tingkat",loadingArray:p,sort:"asc"});(0,o.A)().addTingkatToTahun(e,a),g.value["tingkat"]=e}}else g.value["tingkat"]=[];g.value["kelas"]=[]})),(0,n.wB)((()=>l.value.tingkat_id),(async a=>{if(l.value.kelas="",a){const e=(0,o.A)().getKelasByTingkatAndTahun(a,l.value.th_ajaran_h);if(e.length)g.value["kelas"]=e;else{const e=await(0,u.H)({url:"kelas/lists",params:{th_ajaran_h:l.value.th_ajaran_h,tingkat_id:a},key:"kelas",loadingArray:p,sort:"asc"});(0,o.A)().addKelasToTingkatByTahun(e,a,l.value.th_ajaran_h),g.value["kelas"]=e}}else g.value["kelas"]=[]})),(a,e)=>{const i=(0,n.g2)("q-space"),s=(0,n.g2)("q-btn"),u=(0,n.g2)("q-card-section"),o=(0,n.g2)("q-select"),r=(0,n.g2)("q-input"),d=(0,n.g2)("q-card-actions"),h=(0,n.g2)("q-card"),v=(0,n.g2)("q-form"),b=(0,n.g2)("q-page");return(0,n.uX)(),(0,n.Wv)(b,{class:"q-pa-sm"},{default:(0,n.k6)((()=>[(0,n.bF)(h,null,{default:(0,n.k6)((()=>[(0,n.bF)(u,{class:"q-pa-sm bg-green-8 text-green-11 flex"},{default:(0,n.k6)((()=>[c,(0,n.bF)(i),(0,n.bF)(s,{label:"Kembali",to:"/madrasah/nilai-mapel",dense:"",outline:"","no-caps":"",icon:"arrow_back",class:"q-px-sm q-mr-md"}),(0,n.bF)(s,{label:"Upload",to:"/madrasah/nilai-mapel/upload",dense:"",outline:"","no-caps":"",icon:"upload",class:"q-px-sm"})])),_:1}),(0,n.bF)(u,{class:"q-pa-sm"},{default:(0,n.k6)((()=>[(0,n.bF)(v,{onSubmit:(0,t.D$)(k,["prevent"])},{default:(0,n.k6)((()=>[(0,n.bF)(h,{style:{"max-width":"425px"}},{default:(0,n.k6)((()=>[(0,n.bF)(u,{class:"q-pa-sm"},{default:(0,n.k6)((()=>[(0,n.bF)(o,{dense:"",class:"",outlined:"",label:"Tahun Ajaran","emit-value":"","map-options":"",modelValue:l.value.th_ajaran_h,"onUpdate:modelValue":e[0]||(e[0]=a=>l.value.th_ajaran_h=a),options:g.value["th_ajaran"],"option-value":"th_ajaran_h","option-label":"th_ajaran_h",clearable:"",behavior:"menu",required:"",rules:[a=>!!a||"Harus diisi!"]},null,8,["modelValue","options","rules"]),(0,n.bF)(o,{dense:"",class:"",outlined:"",label:"Tingkat Pendidikan","emit-value":"","map-options":"","option-value":"tingkat_id","option-label":"tingkat",modelValue:l.value.tingkat_id,"onUpdate:modelValue":e[1]||(e[1]=a=>l.value.tingkat_id=a),options:g.value["tingkat"],loading:p.value["tingkat"],clearable:"",behavior:"menu",required:"",rules:[a=>!!a||"Harus diisi!"]},null,8,["modelValue","options","loading","rules"]),(0,n.bF)(o,{dense:"",class:"",outlined:"",label:"Kelas","emit-value":"","map-options":"",modelValue:l.value.kelas,"onUpdate:modelValue":e[2]||(e[2]=a=>l.value.kelas=a),options:g.value["kelas"],loading:p.value["kelas"],clearable:"",behavior:"menu",required:"",rules:[a=>!!a||"Harus diisi!"]},null,8,["modelValue","options","loading","rules"]),(0,n.bF)(o,{dense:"",class:"q-mt-sm",outlined:"",label:"Kategori Nilai",modelValue:l.value.category,"onUpdate:modelValue":e[3]||(e[3]=a=>l.value.category=a),behavior:"menu",required:"",options:m,"emit-value":"","map-options":"",rules:[a=>!!a||"Harus diisi!"]},null,8,["modelValue","rules"]),(0,n.bF)(r,{dense:"",class:"q-mt-sm",outlined:"",label:"Ujian Ke",modelValue:l.value.ujian_ke,"onUpdate:modelValue":e[4]||(e[4]=a=>l.value.ujian_ke=a),required:"",type:"number",rules:[a=>a>0&&a<5||"antara 1 s.d. 4"]},null,8,["modelValue","rules"])])),_:1}),(0,n.bF)(d,{class:"bg-green-6",align:"right"},{default:(0,n.k6)((()=>[(0,n.bF)(s,{class:"",type:"submit",label:"Download",icon:"download",color:"green-11","no-caps":"",outline:"",dense:""})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}};var g=l(75013),m=l(83341),h=l(60222),k=l(5873),v=l(22677),b=l(53417),_=l(76941),j=l(46395),A=l(25034),q=l(272),f=l.n(q);const y=p,F=y;f()(p,"components",{QPage:g.A,QCard:m.A,QCardSection:h.A,QSpace:k.A,QBtn:v.A,QForm:b.A,QSelect:_.A,QInput:j.A,QCardActions:A.A})}}]);