(()=>{"use strict";var e={36176:(e,t,n)=>{var a=n(8633),i=n(17486),r=n(34187),o=n(51347);const l=(0,o.pM)(Object.assign({name:"App"},{__name:"App",setup(e){return(e,t)=>{const n=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(n)}}})),s=l,h=s;var d=n(36470),p=n(96305),c=n(7179);const m=(0,d.M_)((()=>{const e=(0,p.Ey)();return e.use(c.A),e}));var u=n(60455);const b=[{path:"/logout",name:"Logout",component:()=>Promise.all([n.e(4121),n.e(996),n.e(6742)]).then(n.bind(n,66742)),meta:{title:"Logout"}},{path:"verify",name:"Verify",component:()=>Promise.all([n.e(4121),n.e(996),n.e(5085)]).then(n.bind(n,45085)),meta:{title:"Verifikasi Email"}},{path:"register",name:"Register",component:()=>Promise.all([n.e(4121),n.e(996),n.e(4483)]).then(n.bind(n,54483)),meta:{title:"Registrasi"}},{path:"login",name:"Login",component:()=>Promise.all([n.e(4121),n.e(996),n.e(5494)]).then(n.bind(n,45494)),meta:{title:"Login"}},{path:"forgot-password",name:"Forgot",component:()=>Promise.all([n.e(4121),n.e(996),n.e(8333)]).then(n.bind(n,58333)),meta:{title:"Lupa Password"}},{path:"reset-password",name:"Reset",component:()=>Promise.all([n.e(4121),n.e(996),n.e(3717)]).then(n.bind(n,33717)),meta:{title:"Ganti Password"}}],f=[{path:"",redirect:()=>"/bendahara/iuran/q/tanggal"},{path:"iuran/export",component:()=>Promise.all([n.e(4121),n.e(996),n.e(3784)]).then(n.bind(n,73784))},{path:"iuran/santri/:id/:thAjaranH?",component:()=>Promise.all([n.e(4121),n.e(996),n.e(5431)]).then(n.bind(n,35431))},{path:"iuran/q",children:[{path:"th-ajaran/:thAjaranH?",component:()=>Promise.all([n.e(4121),n.e(996),n.e(5668)]).then(n.bind(n,55668))},{path:"santri/:id?",component:()=>Promise.all([n.e(4121),n.e(996),n.e(9060)]).then(n.bind(n,99060))},{path:"tanggal/:startDate?/:endDate?",component:()=>Promise.all([n.e(4121),n.e(996),n.e(7109)]).then(n.bind(n,37109))}]}],P=[{path:"",redirect:e=>e.fullPath+"/santri"},{path:"santri",component:()=>Promise.all([n.e(4121),n.e(996)]).then(n.bind(n,26913))},{path:"wali",component:()=>Promise.all([n.e(4121),n.e(996)]).then(n.bind(n,1424))},{path:"ortu",component:()=>Promise.all([n.e(4121),n.e(996)]).then(n.bind(n,67458))}],g=[{path:"",redirect:e=>`${e.fullPath}/izin-pesantren`},{path:"izin-pesantren/:startDate?/:endDate?",component:()=>Promise.all([n.e(4121),n.e(996),n.e(1881)]).then(n.bind(n,91881))},{path:"izin-pesantren/santri/:santri_id",component:()=>Promise.all([n.e(4121),n.e(996),n.e(6738)]).then(n.bind(n,6738))},{path:"izin-pesantren/:id(\\d+)",component:()=>Promise.all([n.e(4121),n.e(996),n.e(193)]).then(n.bind(n,30193))},{path:"indisipliner/:startDate?/:endDate?",component:()=>Promise.all([n.e(4121),n.e(996),n.e(1247)]).then(n.bind(n,21247))},{path:"indisipliner/santri/:santri_id",component:()=>Promise.all([n.e(4121),n.e(996),n.e(7801)]).then(n.bind(n,57801))},{path:"indisipliner/:id(\\d+)",component:()=>Promise.all([n.e(4121),n.e(996),n.e(9390)]).then(n.bind(n,29390))}],v=[{path:"",redirect:"cari/ortu"},{path:":id",component:()=>Promise.all([n.e(4121),n.e(996),n.e(7354)]).then(n.bind(n,57354))}],k=[{path:"",component:()=>Promise.all([n.e(4121),n.e(996),n.e(270)]).then(n.bind(n,40270))},{path:":id",component:()=>Promise.all([n.e(4121),n.e(996),n.e(464)]).then(n.bind(n,60464)),meta:{title:"Pesonalia Detail"}}],y=[{path:"",redirect:"cari/santri"},{path:":id",component:()=>Promise.all([n.e(4121),n.e(996),n.e(5482)]).then(n.bind(n,75482)),children:[{path:"",redirect:e=>e.fullPath+"/status"},{path:"status",component:()=>Promise.all([n.e(4121),n.e(996),n.e(9326)]).then(n.bind(n,79326))},{path:"kelas",component:()=>Promise.all([n.e(4121),n.e(996),n.e(3425)]).then(n.bind(n,63425))},{path:"domisili",component:()=>Promise.all([n.e(4121),n.e(996),n.e(9353)]).then(n.bind(n,39353))},{path:"wali",component:()=>Promise.all([n.e(4121),n.e(996),n.e(4125)]).then(n.bind(n,44125))},{path:"ortu",component:()=>Promise.all([n.e(4121),n.e(996),n.e(6051)]).then(n.bind(n,36051))},{path:"iuran-total",component:()=>Promise.all([n.e(4121),n.e(996),n.e(1509)]).then(n.bind(n,61509))}]}],_=[{path:"",component:()=>Promise.all([n.e(4121),n.e(8377)]).then(n.bind(n,88377))},{path:"export",component:()=>Promise.all([n.e(4121),n.e(996),n.e(3044)]).then(n.bind(n,53044))}],w=[{path:"lists",component:()=>Promise.all([n.e(4121),n.e(996),n.e(8070)]).then(n.bind(n,78070)),meta:{title:"Setting: List"},children:[{path:":listKey",component:()=>Promise.all([n.e(4121),n.e(996),n.e(4724)]).then(n.bind(n,44724))}]},{path:"users",meta:{title:"Setting: User"},children:[{path:"",component:()=>Promise.all([n.e(4121),n.e(996),n.e(5420)]).then(n.bind(n,25420))},{path:":id",component:()=>Promise.all([n.e(4121),n.e(996),n.e(4821)]).then(n.bind(n,34821))}]},{path:"profile",meta:{title:"Setting: Profile"},children:[{path:"",component:()=>Promise.all([n.e(4121),n.e(996),n.e(732)]).then(n.bind(n,50732))},{path:"sign",component:()=>Promise.all([n.e(4121),n.e(996),n.e(9414)]).then(n.bind(n,69414))}]},{path:"reports",component:()=>Promise.all([n.e(4121),n.e(996),n.e(9366)]).then(n.bind(n,19366)),meta:{title:"Setting: Reports"}}],j=[{path:"",redirect:()=>"/ugt/pjgt"},{path:"pjgt",component:()=>Promise.all([n.e(4121),n.e(996),n.e(3741)]).then(n.bind(n,83741))},{path:"pjgt/:id",component:()=>Promise.all([n.e(4121),n.e(996),n.e(4949)]).then(n.bind(n,54949))},{path:"gt",component:()=>Promise.all([n.e(4121),n.e(996),n.e(8747)]).then(n.bind(n,8747))},{path:"gt/:id",component:()=>Promise.all([n.e(4121),n.e(996),n.e(9924)]).then(n.bind(n,19924))},{path:"kas",component:()=>Promise.all([n.e(4121),n.e(996),n.e(1840)]).then(n.bind(n,11840))}],A=[{path:"",redirect:"cari/wali"},{path:":id",component:()=>Promise.all([n.e(4121),n.e(996),n.e(6486)]).then(n.bind(n,46486))}],S=[{path:"",redirect:()=>"/madrasah/murid"},{path:"murid",component:()=>Promise.all([n.e(4121),n.e(996),n.e(5824)]).then(n.bind(n,15824)),children:[{path:":th_ajaran_h?/:tingkat_id?/:kelas?",component:()=>Promise.all([n.e(4121),n.e(996),n.e(3690)]).then(n.bind(n,63690))}]},{path:"kelas/kenaikan",component:()=>Promise.all([n.e(4121),n.e(996),n.e(5481)]).then(n.bind(n,55481))},{path:"kelas/:id",component:()=>Promise.all([n.e(4121),n.e(996),n.e(2022)]).then(n.bind(n,52022)),redirect:e=>`${e.fullPath}/riwayat`,children:[{path:"riwayat",component:()=>Promise.all([n.e(4121),n.e(996),n.e(1398)]).then(n.bind(n,61398))},{path:"izin",component:()=>Promise.all([n.e(4121),n.e(996),n.e(9523)]).then(n.bind(n,69523))},{path:"nilai-mapel",component:()=>Promise.all([n.e(4121),n.e(996),n.e(9126)]).then(n.bind(n,69126))}]},{path:"tingkat",component:()=>Promise.all([n.e(4121),n.e(5484)]).then(n.bind(n,5484)),redirect:()=>"/madrasah/tingkat/id-murid",children:[{path:"id-murid",component:()=>Promise.all([n.e(4121),n.e(5038)]).then(n.bind(n,35038)),name:"ID Murid"}]},{path:"aparatur",component:()=>Promise.all([n.e(4121),n.e(996),n.e(496)]).then(n.bind(n,90496)),children:[{path:":th_ajaran_h?/:tingkat_id?",component:()=>Promise.all([n.e(4121),n.e(996),n.e(1610)]).then(n.bind(n,91610))}]},{path:"nilai-mapel",children:[{path:"",redirect:e=>`${e.fullPath}/rerata`},{path:"rerata/:th_ajaran_h?/:tingkat_id?/:kelas?",component:()=>Promise.all([n.e(4121),n.e(996),n.e(7795)]).then(n.bind(n,37795))},{path:"upload",component:()=>Promise.all([n.e(4121),n.e(996),n.e(641)]).then(n.bind(n,20641))},{path:"download",component:()=>Promise.all([n.e(4121),n.e(996),n.e(56)]).then(n.bind(n,80056))}]},{path:"nilai-ahwal",children:[{path:":th_ajaran_h?/:tingkat_id?/:kelas?/:ujian_ke?",component:()=>Promise.all([n.e(4121),n.e(996),n.e(1598)]).then(n.bind(n,31598))}]},{path:"nilai-unlock",children:[{path:"",component:()=>Promise.all([n.e(4121),n.e(996),n.e(5912)]).then(n.bind(n,45912))}]},{path:"mapel",component:()=>Promise.all([n.e(4121),n.e(996),n.e(8723)]).then(n.bind(n,68723))},{path:"absensi",component:()=>Promise.all([n.e(4121),n.e(2155)]).then(n.bind(n,62155)),children:[{path:"print",component:()=>Promise.all([n.e(4121),n.e(996),n.e(4856)]).then(n.bind(n,54856)),name:"Print"},{path:"setting",component:()=>Promise.all([n.e(4121),n.e(996),n.e(5022)]).then(n.bind(n,55022)),name:"Pengaturan Jadwal Ujian"},{path:"penomoran/:th_ajaran_h?/:tingkat_id?/:kelas?",component:()=>Promise.all([n.e(4121),n.e(996),n.e(9097)]).then(n.bind(n,79097)),name:"Atur Nomor Absen"},{path:"input/:absensi/:th_ajaran_h?/:tingkat_id?/:kelas?/:set_bulan_ujian?",component:()=>Promise.all([n.e(4121),n.e(996),n.e(4746)]).then(n.bind(n,44746)),name:"Input Data"},{path:"rekap-ujian/:absensi/:th_ajaran_h?/:tingkat_id?/:kelas?",component:()=>Promise.all([n.e(4121),n.e(996),n.e(7122)]).then(n.bind(n,57122)),name:"Rekap Ujian"},{path:"laporan/:absensi/:th_ajaran_h?/:tingkat_id?/:list_bulan_ujian?",component:()=>Promise.all([n.e(4121),n.e(996),n.e(2780)]).then(n.bind(n,2780)),name:"Laporan"}]}],O=[{path:"release",component:()=>Promise.all([n.e(4121),n.e(906)]).then(n.bind(n,10906)),meta:{title:"Info: Release"}},{path:"download",component:()=>Promise.all([n.e(4121),n.e(660)]).then(n.bind(n,50660)),meta:{title:"Info: Download"}}],E=[{path:"mutasi",redirect:e=>`${e.fullPath}/result`,meta:{title:"Makhadiyah: Mutasi Domisili"},children:[{path:"result",component:()=>Promise.all([n.e(4121),n.e(996),n.e(1835)]).then(n.bind(n,61835))},{path:"start",component:()=>Promise.all([n.e(4121),n.e(996),n.e(5672)]).then(n.bind(n,15672))}]}],D=[{path:"/",name:"Auth",component:()=>Promise.all([n.e(4121),n.e(996),n.e(1498)]).then(n.bind(n,1498)),children:b},{path:"/",component:()=>Promise.all([n.e(4121),n.e(996),n.e(6348)]).then(n.bind(n,6348)),children:[{path:"cari",component:()=>Promise.all([n.e(4121),n.e(7539)]).then(n.bind(n,27539)),meta:{title:"Cari"},children:P},{path:"santri",meta:{title:"Detail Santri"},children:y},{path:"wali",meta:{title:"Detail Wali"},children:A},{path:"ortu",meta:{title:"Detail Orang Tua"},children:v},{path:"home",component:()=>Promise.all([n.e(4121),n.e(996),n.e(7959)]).then(n.bind(n,87959)),meta:{title:"Home"}},{path:"sekretariat",meta:{title:"Sekretariat"},children:_},{path:"madrasah",meta:{title:"Madrasah"},children:S},{path:"makhadiyah",meta:{title:"Makhadiyah"},children:E},{path:"bendahara",meta:{title:"Bendahara"},children:f},{path:"keamanan",meta:{title:"Keamanan"},children:g},{path:"personalia",meta:{title:"Pesonalia"},children:k},{path:"ugt",meta:{title:"UGT"},children:j},{path:"settings",meta:{title:"Setting"},children:w},{path:"info",meta:{title:"Info"},children:O},{path:"profile",component:()=>Promise.all([n.e(4121),n.e(996),n.e(8366)]).then(n.bind(n,8366)),meta:{title:"User Profile"}},{path:"test",component:()=>Promise.all([n.e(4121),n.e(7296)]).then(n.bind(n,47296))},{path:"test-pdf",component:()=>Promise.all([n.e(4121),n.e(8273)]).then(n.bind(n,98273))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([n.e(4121),n.e(8290)]).then(n.bind(n,18290))}],N=D;var C=n(44257),T=n(86159);const L=(0,d.wE)((function(){const e=u.LA,t=(0,u.aE)({scrollBehavior:()=>({left:0,top:0}),routes:N,history:e("/")});t.beforeEach(((e,t,n)=>{if("/"==e.fullPath)return n("/cari");const a=(0,C.A)(),i=["Register","Login","Forgot","Reset","Verify"],r=i.includes(e.name),o=a.getToken&&a.getToken.length>0;r||o?r&&o?history.go(-1):n():n("/login")}));const n=T.A.INS_SHORT;return t.afterEach((e=>{(0,o.dY)((()=>{document.title=e.meta.title?n+" — "+e.meta.title:n}))})),t}));async function I(e,t){const n=e(h);n.use(i.A,t);const a="function"===typeof m?await m({}):m;n.use(a);const o=(0,r.IG)("function"===typeof L?await L({store:a}):L);return a.use((({store:e})=>{e.router=o})),{app:n,store:a,router:o}}var M=n(17649),x=n(10144),R=n(79765);const U={config:{notify:{}},lang:M.A,plugins:{Notify:x.A,Dialog:R.A}};var B=n(38657);(0,B.k)("/sw.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});const z="/";async function F({app:e,router:t,store:n},a){let i=!1;const r=e=>{try{return t.resolve(e).href}catch(n){}return Object(e)===e?null:e},o=e=>{if(i=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=r(e);null!==t&&(window.location.href=t)},l=window.location.href.replace(window.location.origin,"");for(let h=0;!1===i&&h<a.length;h++)try{await a[h]({app:e,router:t,store:n,ssrContext:null,redirect:o,urlPath:l,publicPath:z})}catch(s){return s&&s.url?void o(s.url):void console.error("[Quasar] boot error:",s)}!0!==i&&(e.use(t),e.mount("#q-app"))}I(a.Ef,U).then((e=>{const[t,a]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(n.bind(n,15583))]).then((t=>{const n=a(t).filter((e=>"function"===typeof e));F(e,n)}))}))},86159:(e,t,n)=>{n.d(t,{A:()=>i});const a={INS_DESC:"Madrasah dan ",INS_NAME:"Pondok Pesantren",INS_SHORT:"Demo Aplikasi",BASE_API:"https://demo.idsantri.my.id",END_API:"/admin",DEV:!0},i=a},44257:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(96305);const i=(0,a.nY)("auth",{state:()=>({token:null,user:null,roles:null,permissions:null}),getters:{getUser:e=>e.user,getToken:e=>e.token,getRoles:e=>e.roles,getPermissions:e=>e.permissions},actions:{setUser(e){e.roles&&(this.roles=e.roles),e.permissions&&(this.permissions=e.permissions),e.user&&(this.user=e.user),e.token&&(this.token=e.token)},clearUser(){this.roles=null,this.permissions=null,this.user=null,this.token=null}},persist:{storage:sessionStorage}}),r=i},15583:(e,t,n)=>{n.r(t),n.d(t,{api:()=>l,default:()=>s});var a=n(36470),i=n(59100),r=n(86159);const o=r.A.BASE_API,l=i.A.create({baseURL:o+r.A.END_API});l.defaults.withCredentials=!0;const s=(0,a.zj)((({app:e})=>{e.config.globalProperties.$axios=i.A,e.config.globalProperties.$api=l}))}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,(()=>{var e=[];n.O=(t,a,i,r)=>{if(!a){var o=1/0;for(d=0;d<e.length;d++){for(var[a,i,r]=e[d],l=!0,s=0;s<a.length;s++)(!1&r||o>=r)&&Object.keys(n.O).every((e=>n.O[e](a[s])))?a.splice(s--,1):(l=!1,r<o&&(o=r));if(l){e.splice(d--,1);var h=i();void 0!==h&&(t=h)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,i,r]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(a,i){if(1&i&&(a=this(a)),8&i)return a;if("object"===typeof a&&a){if(4&i&&a.__esModule)return a;if(16&i&&"function"===typeof a.then)return a}var r=Object.create(null);n.r(r);var o={};e=e||[null,t({}),t([]),t(t)];for(var l=2&i&&a;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>o[e]=()=>a[e]));return o["default"]=()=>a,n.d(r,o),r}})(),(()=>{n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,a)=>(n.f[a](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+(996===e?"chunk-common":e)+"."+{56:"42989c11",193:"d17b0697",270:"58f022d9",464:"3c96b098",496:"a53ac8af",641:"8e22c6fd",660:"67ce2157",732:"a3d5be2c",906:"506720d0",996:"7da94f02",1247:"50733ee0",1398:"c5bd0cef",1498:"36a42672",1509:"971bea21",1598:"707a9f4d",1610:"1bf5f2f5",1835:"52348d7a",1840:"b410123f",1881:"d83f0acb",2022:"603946c7",2155:"2735611c",2780:"3f942a47",3044:"663bb43e",3425:"1ffee46c",3690:"999376c5",3717:"d469c143",3741:"80bc3565",3784:"a5376b13",4125:"7efe7163",4483:"cb4ecd0a",4724:"ec42f8d6",4746:"78cbf764",4821:"c366ce0a",4856:"418511aa",4949:"0bf9a1bd",5022:"6a01a535",5038:"be25f312",5085:"e8d7abe6",5420:"3e8bb616",5431:"64504a06",5481:"18c0fd62",5482:"edc9d19c",5484:"8687d232",5494:"e294b4b5",5668:"5666b203",5672:"75f2621f",5824:"475fb5ba",5912:"94d5f818",6051:"061b4900",6348:"b58f36e2",6486:"1709df2e",6738:"fbbf4f1b",6742:"2c0803bc",7109:"b1fdea0a",7122:"751ba7de",7296:"1b551b66",7354:"fcf44372",7539:"152f681d",7795:"9dfd4ffb",7801:"f709575c",7959:"419d8bec",8070:"3a789a90",8273:"4819b11d",8290:"723ec47a",8333:"68a0755d",8366:"18ecfd87",8377:"14e2fe39",8723:"b90c04a4",8747:"241f7d4b",9060:"542de23d",9097:"2c360448",9126:"40c17a5e",9326:"3de42551",9353:"cf38a1f3",9366:"9f016af2",9390:"80ae7ad5",9414:"6d945418",9523:"f15ee29e",9924:"64634819"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+(996===e?"chunk-common":e)+"."+{193:"440cf865",996:"d4e17af9",1498:"f029cc90",2780:"163d0a38",4746:"cc277c1b",6348:"84982d95",7122:"8498dd4c",7795:"ec57e191",9097:"862fd54d",9390:"9694b464"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="idsantri-app:";n.l=(a,i,r,o)=>{if(e[a])e[a].push(i);else{var l,s;if(void 0!==r)for(var h=document.getElementsByTagName("script"),d=0;d<h.length;d++){var p=h[d];if(p.getAttribute("src")==a||p.getAttribute("data-webpack")==t+r){l=p;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+r),l.src=a),e[a]=[i];var c=(t,n)=>{l.onerror=l.onload=null,clearTimeout(m);var i=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((e=>e(n))),t)return t(n)},m=setTimeout(c.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=c.bind(null,l.onerror),l.onload=c.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,a,i,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",n.nc&&(o.nonce=n.nc);var l=n=>{if(o.onerror=o.onload=null,"load"===n.type)i();else{var a=n&&n.type,l=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+l+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=l,o.parentNode&&o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=l,o.href=t,a?a.parentNode.insertBefore(o,a.nextSibling):document.head.appendChild(o),o},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var i=n[a],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){i=o[a],r=i.getAttribute("data-href");if(r===e||r===t)return i}},a=a=>new Promise(((i,r)=>{var o=n.miniCssF(a),l=n.p+o;if(t(o,l))return i();e(a,l,null,i,r)})),i={3524:0};n.f.miniCss=(e,t)=>{var n={193:1,996:1,1498:1,2780:1,4746:1,6348:1,7122:1,7795:1,9097:1,9390:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=a(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))}}})(),(()=>{var e={3524:0};n.f.j=(t,a)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var r=new Promise(((n,a)=>i=e[t]=[n,a]));a.push(i[2]=r);var o=n.p+n.u(t),l=new Error,s=a=>{if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,i[1](l)}};n.l(o,s,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,a)=>{var i,r,[o,l,s]=a,h=0;if(o.some((t=>0!==e[t]))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)var d=s(n)}for(t&&t(a);h<o.length;h++)r=o[h],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},a=globalThis["webpackChunkidsantri_app"]=globalThis["webpackChunkidsantri_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=n.O(void 0,[4121],(()=>n(36176)));a=n.O(a)})();