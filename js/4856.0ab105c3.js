"use strict";(globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[]).push([[4856],{54856:(a,e,l)=>{l.r(e),l.d(e,{default:()=>B});l(5047),l(94114),l(59557);var n=l(51347),u=l(8633),s=l(2010),d=l(34187),o=l(30528),t=l(39908),i=(l(60295),l(37763)),r=l(32091),v=l.n(r),p=l(15469),b=l(90575);const m={id:"pdf-element"},c=["src"],g={__name:"TestPrint",props:{dataMurid:Array},setup(a){const e=a,l=(0,d.KR)(),u=(0,d.KR)(!1),{loadingMain:s}=(0,d.QW)((0,b.A)());async function o(){s.value=!0,u.value=!1;const a=document.getElementById("pdf-element");if(a){a.style.overflow="linebreak";const e={margin:[5,5,5,5],html2canvas:{scale:10},jsPDF:{format:"a4",orientation:"p"}},n=v()().set(e).from(a),d=await n.outputPdf();if(!d)return void(0,p.UG)("Report gagal dibuat");l.value=`data:application/pdf;base64,${btoa(d)}`,s.value=!1,u.value=!0}}return(0,n.nT)((()=>{e.dataMurid.length>0&&o()})),(a,s)=>{const d=(0,n.g2)("q-card-section"),o=(0,n.g2)("q-card"),t=(0,n.g2)("q-dialog");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",null,[(0,n.Lk)("div",m,[(0,n.Lk)("table",null,[(0,n.Lk)("tbody",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.dataMurid,((a,e)=>((0,n.uX)(),(0,n.CE)("tr",{key:e},[(0,n.Lk)("td",null,(0,i.v_)(a.no_absen),1),(0,n.Lk)("td",null,(0,i.v_)(a.nama),1),(0,n.Lk)("td",null,(0,i.v_)(a.ayah),1),(0,n.Lk)("td",null,(0,i.v_)(a.wali_nama),1)])))),128))])])])]),(0,n.bF)(t,{modelValue:u.value,"onUpdate:modelValue":s[0]||(s[0]=a=>u.value=a)},{default:(0,n.k6)((()=>[(0,n.bF)(o,{style:{width:"600px",height:"800px"}},{default:(0,n.k6)((()=>[(0,n.bF)(d,{style:{width:"100%",height:"100%"},class:"q-pa-sm"},{default:(0,n.k6)((()=>[(0,n.Lk)("iframe",{src:l.value,style:{height:"100%",width:"100%"},frameborder:"0",loading:"lazy",scrolling:"no",seamless:"seamless"},null,8,c)])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var k=l(30045),h=l(83341),_=l(60222),V=l(272),f=l.n(V);f()(g,"components",{QDialog:k.A,QCard:h.A,QCardSection:_.A});l(21734);var F=l(75605);const q={class:"row"},A={key:0},w={class:"col-12 col-md-3 q-pa-sm"},y={class:"col-12 col-md-3 q-pa-sm"},C={class:"col-12 col-md-6 q-pa-sm"},L=(0,n.Lk)("small",null,[(0,n.Lk)("em",null,"(untuk absensi perpekan)")],-1),U={class:"row"},I={class:"row"},K={class:"row"},Q={__name:"AbsensiPrint",setup(a){const e=(0,d.KR)([]),l=(0,d.KR)([]),i=(0,d.KR)({absensi:"Sekolah"}),r=(0,d.KR)([]),v=(0,d.KR)(o.DQ.map((a=>a.name))),p=(0,d.KR)(!1),b=(0,d.KR)(!1),m=(0,d.KR)("");(0,d.KR)([]);async function c(){const a=JSON.parse(JSON.stringify(i.value)),e="absensi-"+(a.absensi?.toLowerCase()||"")+"~"+(a.th_ajaran_h||"")+"~"+(a.tingkat_id||"")+"~"+(a.kelas||"")+"~"+(a.tahun||"")+"~"+(a.bulan?.toLowerCase()||"")+(a.pekan?"~p"+a.pekan:"");let l="";l=p.value?"/reports/absensi/pekanan/download":"/reports/absensi/bulanan/download",await(0,t.A)({endPoint:l,loading:b,params:a,fileName:e})}const g=(0,d.KR)(!1);function k(){const a=new URLSearchParams(i.value).toString();let e="";e=p.value?"reports/absensi/pekanan/view":"reports/absensi/bulanan/view",m.value=`${e}?${a}`,g.value=!0}function h(a){1==a&&(isNaN(i.value.d1)||(i.value.d2=parseInt(i.value.d1)+1||"",i.value.d3=parseInt(i.value.d1)+2||"",i.value.d4=parseInt(i.value.d1)+3||"",i.value.d5=parseInt(i.value.d1)+4||"",i.value.d6=parseInt(i.value.d1)+5||"")),2==a&&(isNaN(i.value.d2)||(i.value.d3=parseInt(i.value.d2)+1||"",i.value.d4=parseInt(i.value.d2)+2||"",i.value.d5=parseInt(i.value.d2)+3||"",i.value.d6=parseInt(i.value.d2)+4||"")),3==a&&(isNaN(i.value.d3)||(i.value.d4=parseInt(i.value.d3)+1||"",i.value.d5=parseInt(i.value.d3)+2||"",i.value.d6=parseInt(i.value.d3)+3||"")),4==a&&(isNaN(i.value.d4)||(i.value.d5=parseInt(i.value.d4)+1||"",i.value.d6=parseInt(i.value.d4)+2||"")),5==a&&(isNaN(i.value.d5)||(i.value.d6=parseInt(i.value.d5)+1||""))}return(0,n.sV)((async()=>{const a=await(0,s.H)({url:"murid/lists-kelas",key:"th_ajaran",loadingArray:e});l.value["th_ajaran"]=a})),(0,n.wB)((()=>i.value.th_ajaran_h),(async(a,n)=>{if(a!=n){i.value.tingkat_id="",i.value.kelas="",i.value.tahun="";const n=await(0,s.H)({url:`murid/lists-kelas/${a}`,key:"tingkat",loadingArray:e});l.value["tingkat"]=n,r.value=[a.substring(0,4),a.substring(5)]}})),(0,n.wB)((()=>i.value.tingkat_id),(async(a,n)=>{if(a!=n&&(i.value.kelas="",a&&i.value.th_ajaran_h)){const n=await(0,s.H)({url:`murid/lists-kelas/${i.value.th_ajaran_h}/${a}`,key:"kelas",loadingArray:e});l.value["kelas"]=n}})),(a,s)=>{const d=(0,n.g2)("q-spinner-cube"),o=(0,n.g2)("q-dialog"),t=(0,n.g2)("q-card-section"),_=(0,n.g2)("q-select"),V=(0,n.g2)("q-card"),f=(0,n.g2)("q-toggle"),Q=(0,n.g2)("q-input"),R=(0,n.g2)("q-btn"),S=(0,n.g2)("q-space"),T=(0,n.g2)("q-card-actions"),j=(0,n.g2)("q-form");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(V,{flat:"",bordered:"",style:{"max-width":"1000px"}},{default:(0,n.k6)((()=>[(0,n.bF)(j,{onSubmit:(0,u.D$)(c,["prevent"])},{default:(0,n.k6)((()=>[(0,n.bF)(t,{class:"no-padding"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",q,[b.value?((0,n.uX)(),(0,n.CE)("div",A,[(0,n.bF)(o,{modelValue:b.value,"onUpdate:modelValue":s[0]||(s[0]=a=>b.value=a),persistent:""},{default:(0,n.k6)((()=>[(0,n.bF)(d,{color:"green-12",size:"8em",class:"flex q-ma-lg q-mx-auto"})])),_:1},8,["modelValue"])])):(0,n.Q3)("",!0),(0,n.Lk)("div",w,[(0,n.bF)(V,{bordered:"",flat:""},{default:(0,n.k6)((()=>[(0,n.bF)(t,{class:"bg-green-11 q-pa-sm"},{default:(0,n.k6)((()=>[(0,n.eW)(" Pilih Kelas ")])),_:1}),(0,n.bF)(t,{class:"no-padding"},{default:(0,n.k6)((()=>[(0,n.bF)(_,{class:"q-pa-sm",dense:"",outlined:"",label:"Tahun Ajaran",modelValue:i.value.th_ajaran_h,"onUpdate:modelValue":s[1]||(s[1]=a=>i.value.th_ajaran_h=a),options:l.value["th_ajaran"],"option-value":"th_ajaran_h","option-label":"th_ajaran_h","emit-value":"","map-options":"",loading:e.value["th_ajaran"],behavior:"menu"},null,8,["modelValue","options","loading"]),(0,n.bF)(_,{class:"q-pa-sm",dense:"",outlined:"",label:"Tingkat Pendidikan",modelValue:i.value.tingkat_id,"onUpdate:modelValue":s[2]||(s[2]=a=>i.value.tingkat_id=a),options:l.value["tingkat"],"option-value":"tingkat_id","option-label":"tingkat","emit-value":"","map-options":"",loading:e.value["tingkat"],clearable:"",behavior:"menu"},null,8,["modelValue","options","loading"]),(0,n.bF)(_,{class:"q-pa-sm",dense:"",outlined:"",label:"Kelas",modelValue:i.value.kelas,"onUpdate:modelValue":s[3]||(s[3]=a=>i.value.kelas=a),options:l.value["kelas"],"option-value":"kelas","option-label":"kelas","emit-value":"","map-options":"",loading:e.value["kelas"],clearable:"",behavior:"menu"},null,8,["modelValue","options","loading"])])),_:1})])),_:1})]),(0,n.Lk)("div",y,[(0,n.bF)(V,{bordered:"",flat:""},{default:(0,n.k6)((()=>[(0,n.bF)(t,{class:"bg-green-11 q-pa-sm"},{default:(0,n.k6)((()=>[(0,n.eW)(" Atur Absensi ")])),_:1}),(0,n.bF)(t,{class:"no-padding"},{default:(0,n.k6)((()=>[(0,n.bF)(_,{class:"q-pa-sm",dense:"",outlined:"",label:"Absensi",modelValue:i.value.absensi,"onUpdate:modelValue":s[4]||(s[4]=a=>i.value.absensi=a),options:["Sekolah","Musyawarah"],behavior:"menu"},null,8,["modelValue"]),(0,n.bF)(_,{class:"q-pa-sm",dense:"",outlined:"",label:"Tahun",modelValue:i.value.tahun,"onUpdate:modelValue":s[5]||(s[5]=a=>i.value.tahun=a),options:r.value,behavior:"menu"},null,8,["modelValue","options"]),(0,n.bF)(_,{class:"q-pa-sm",dense:"",outlined:"",label:"Bulan",modelValue:i.value.bulan,"onUpdate:modelValue":s[6]||(s[6]=a=>i.value.bulan=a),options:v.value,clearable:"",behavior:"menu"},null,8,["modelValue","options"])])),_:1})])),_:1})]),(0,n.Lk)("div",C,[(0,n.bF)(V,{bordered:"",flat:""},{default:(0,n.k6)((()=>[(0,n.bF)(t,{class:"bg-green-11 q-pa-sm"},{default:(0,n.k6)((()=>[(0,n.eW)(" Atur Pekan dan Tanggal "),L])),_:1}),(0,n.bF)(t,{class:"no-padding"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",U,[(0,n.bF)(f,{class:"q-pa-sm col-4",label:"Perpekan",modelValue:p.value,"onUpdate:modelValue":s[7]||(s[7]=a=>p.value=a)},null,8,["modelValue"]),(0,n.bF)(Q,{class:"q-pa-sm col-4",dense:"",outlined:"",label:"Pekan ke-?",modelValue:i.value.pekan,"onUpdate:modelValue":s[8]||(s[8]=a=>i.value.pekan=a),disable:!p.value},null,8,["modelValue","disable"])]),(0,n.Lk)("div",I,[(0,n.bF)(Q,{class:"q-pa-sm col-4",dense:"",outlined:"",label:"Sabtu Tanggal",modelValue:i.value.d1,"onUpdate:modelValue":s[9]||(s[9]=a=>i.value.d1=a),onChange:s[10]||(s[10]=a=>h(1)),disable:!p.value},null,8,["modelValue","disable"]),(0,n.bF)(Q,{class:"q-pa-sm col-4",dense:"",outlined:"",label:"Ahad Tanggal",modelValue:i.value.d2,"onUpdate:modelValue":s[11]||(s[11]=a=>i.value.d2=a),onChange:s[12]||(s[12]=a=>h(2)),disable:!p.value},null,8,["modelValue","disable"]),(0,n.bF)(Q,{class:"q-pa-sm col-4",dense:"",outlined:"",label:"Senin Tanggal",modelValue:i.value.d3,"onUpdate:modelValue":s[13]||(s[13]=a=>i.value.d3=a),onChange:s[14]||(s[14]=a=>h(3)),disable:!p.value},null,8,["modelValue","disable"])]),(0,n.Lk)("div",K,[(0,n.bF)(Q,{class:"q-pa-sm col-4",dense:"",outlined:"",label:"Selasa Tanggal",modelValue:i.value.d4,"onUpdate:modelValue":s[15]||(s[15]=a=>i.value.d4=a),onChange:s[16]||(s[16]=a=>h(4)),disable:!p.value},null,8,["modelValue","disable"]),(0,n.bF)(Q,{class:"q-pa-sm col-4",dense:"",outlined:"",label:"Rabu Tanggal",modelValue:i.value.d5,"onUpdate:modelValue":s[17]||(s[17]=a=>i.value.d5=a),onChange:s[18]||(s[18]=a=>h(5)),disable:!p.value},null,8,["modelValue","disable"]),(0,n.bF)(Q,{class:"q-pa-sm col-4",dense:"",outlined:"",label:"Kamis Tanggal",modelValue:i.value.d6,"onUpdate:modelValue":s[19]||(s[19]=a=>i.value.d6=a),onChange:s[20]||(s[20]=a=>h(6)),disable:!p.value},null,8,["modelValue","disable"])])])),_:1})])),_:1})])])])),_:1}),(0,n.bF)(T,{class:"bg-green-7 flex"},{default:(0,n.k6)((()=>[(0,n.bF)(R,{label:"Cetak dengan Access",icon:"print",color:"green-10",class:"q-px-md text-green-11",dense:"","no-caps":"",to:"/info/download"}),(0,n.bF)(S),(0,n.bF)(R,{label:"Print",icon:"print",color:"green-11",class:"q-px-md text-green-10",dense:"","no-caps":"",onClick:k}),(0,n.bF)(R,{type:"submit",label:"Unduh",icon:"download",color:"green-11",class:"q-px-md text-green-10",dense:"","no-caps":""})])),_:1})])),_:1})])),_:1}),(0,n.bF)(o,{modelValue:g.value,"onUpdate:modelValue":s[21]||(s[21]=a=>g.value=a)},{default:(0,n.k6)((()=>[(0,n.bF)(F.A,{url:m.value},null,8,["url"])])),_:1},8,["modelValue"]),(0,n.Q3)("",!0)],64)}}};var R=l(53417),S=l(71402),T=l(76941),j=l(55725),x=l(46395),N=l(25034),P=l(22677),$=l(5873);const E=Q,B=E;f()(Q,"components",{QCard:h.A,QForm:R.A,QCardSection:_.A,QDialog:k.A,QSpinnerCube:S.A,QSelect:T.A,QToggle:j.A,QInput:x.A,QCardActions:N.A,QBtn:P.A,QSpace:$.A})}}]);