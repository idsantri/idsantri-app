if(!self.define){let s,l={};const n=(n,i)=>(n=new URL(n+".js",i).href,l[n]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=l,document.head.appendChild(s)}else s=n,importScripts(n),l()})).then((()=>{let s=l[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,e)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let u={};const c=s=>n(s,r),o={module:{uri:r},exports:u,require:c};l[r]=Promise.all(i.map((s=>o[s]||c(s)))).then((s=>(e(...s),u)))}}define(["./workbox-37fde244"],(function(s){"use strict";s.setCacheNameDetails({prefix:"idsantri-app"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_redirects",revision:"5f52dbefcf63c9f677ace09fcf8bc7d8"},{url:"/css/1498.5baf1c5b.css",revision:null},{url:"/css/2780.163d0a38.css",revision:null},{url:"/css/4619.1180a29c.css",revision:null},{url:"/css/4746.2a945f7c.css",revision:null},{url:"/css/5442.2e25c0bc.css",revision:null},{url:"/css/6949.0afa1671.css",revision:null},{url:"/css/7122.d7231541.css",revision:null},{url:"/css/7795.73efac7f.css",revision:null},{url:"/css/9097.9aa994b9.css",revision:null},{url:"/css/app.c91b3854.css",revision:null},{url:"/css/chunk-common.4991b51a.css",revision:null},{url:"/css/vendor.ff1b690f.css",revision:null},{url:"/favicon.ico",revision:"39912a5be17fa46731796f4afc7ae611"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c5371cfb.woff2",revision:null},{url:"/icons/apple-icon-120x120.png",revision:"4bede16a71b39108b76328a365a08d31"},{url:"/icons/apple-icon-152x152.png",revision:"14f0e219151dd92dfbc375c025410102"},{url:"/icons/apple-icon-167x167.png",revision:"49d1486ce52b8ed25204976ffe45d933"},{url:"/icons/apple-icon-180x180.png",revision:"17315b617cc2b345561d1d37b7725545"},{url:"/icons/apple-launch-1080x2340.png",revision:"e9b880e91cf632a5c89547ab523d22b0"},{url:"/icons/apple-launch-1125x2436.png",revision:"5e2545118186890da15848e824c1a72f"},{url:"/icons/apple-launch-1170x2532.png",revision:"9212ca82e632d7dc54f883ed3a1c7135"},{url:"/icons/apple-launch-1179x2556.png",revision:"1d38bc4e7fca7761469b34ea7dc5d894"},{url:"/icons/apple-launch-1242x2208.png",revision:"b4e36d38c1948a2fa36a95c20f76cf2a"},{url:"/icons/apple-launch-1242x2688.png",revision:"92858515d77bd7b070986576cf73c909"},{url:"/icons/apple-launch-1284x2778.png",revision:"796dac4964ef5ec5bc47fd37596ddf25"},{url:"/icons/apple-launch-1290x2796.png",revision:"12edd6146e46c87eb108e1eb8d7d199d"},{url:"/icons/apple-launch-1536x2048.png",revision:"d9fb58675516911b009164a8694f3312"},{url:"/icons/apple-launch-1620x2160.png",revision:"3e2a6bbc90ca0249c32f0de9a92d3409"},{url:"/icons/apple-launch-1668x2224.png",revision:"2f21d4e5600ded24d1d22545dd1b75b8"},{url:"/icons/apple-launch-1668x2388.png",revision:"6e0a55ce1568757b17a1222be246375c"},{url:"/icons/apple-launch-2048x2732.png",revision:"3ec15867ab093fc78e229016c8e4af3c"},{url:"/icons/apple-launch-750x1334.png",revision:"473cbf186f1bc75cceb8148fc3a621ed"},{url:"/icons/apple-launch-828x1792.png",revision:"54900909206cb2c5d92c2ca8c75a9c04"},{url:"/icons/favicon-128x128.png",revision:"085914bc71a46ef21437501286578127"},{url:"/icons/favicon-16x16.png",revision:"0ea9d629925fd779f14ae35008f114e4"},{url:"/icons/favicon-32x32.png",revision:"2786c63abaa60f14a8d85bca206908df"},{url:"/icons/favicon-96x96.png",revision:"b9d4e5a965e30bc7d6f1335d3ffb4ea7"},{url:"/icons/icon-128x128.png",revision:"085914bc71a46ef21437501286578127"},{url:"/icons/icon-192x192.png",revision:"3af30407013c7003107dd91bf4c07083"},{url:"/icons/icon-256x256.png",revision:"35397763b844e86ea055c70fce04a7dc"},{url:"/icons/icon-384x384.png",revision:"ca742a0c52959d5a958bf4a0e659ed4b"},{url:"/icons/icon-512x512.png",revision:"ab6b9cd7cb4caa87bcc4edba74e509f2"},{url:"/icons/ms-icon-144x144.png",revision:"cdb045a73cf379a1a9abdcc31aaf58be"},{url:"/icons/safari-pinned-tab.svg",revision:"546a16b0271ddd5f7b3058947d42c069"},{url:"/index.html",revision:"d80818e2922312879d60830b3bafe275"},{url:"/js/1398.354a2ca4.js",revision:null},{url:"/js/1498.5f3bb7d5.js",revision:null},{url:"/js/1509.384a8a6b.js",revision:null},{url:"/js/1610.dbc4dc89.js",revision:null},{url:"/js/1840.e0febaaa.js",revision:null},{url:"/js/2022.3a2aacdb.js",revision:null},{url:"/js/2155.06d53710.js",revision:null},{url:"/js/270.0d68650b.js",revision:null},{url:"/js/2780.9b80e311.js",revision:null},{url:"/js/2956.472b8573.js",revision:null},{url:"/js/2980.1a80670c.js",revision:null},{url:"/js/3044.2881b22d.js",revision:null},{url:"/js/3239.e6703b0e.js",revision:null},{url:"/js/3425.1759c8cc.js",revision:null},{url:"/js/3690.2958d5eb.js",revision:null},{url:"/js/3717.390a24b9.js",revision:null},{url:"/js/3741.72ea1263.js",revision:null},{url:"/js/3784.5aa1c111.js",revision:null},{url:"/js/4125.eef42bdd.js",revision:null},{url:"/js/4483.9ced63cc.js",revision:null},{url:"/js/4619.e8137b5f.js",revision:null},{url:"/js/464.87984a86.js",revision:null},{url:"/js/4746.139bb43b.js",revision:null},{url:"/js/4856.892c03e5.js",revision:null},{url:"/js/4949.fa21554e.js",revision:null},{url:"/js/496.3b696d47.js",revision:null},{url:"/js/5022.ea54ddd6.js",revision:null},{url:"/js/5038.2f1f79cb.js",revision:null},{url:"/js/5085.8a54352a.js",revision:null},{url:"/js/5420.6063a866.js",revision:null},{url:"/js/5431.05a7cc9d.js",revision:null},{url:"/js/5442.6106107b.js",revision:null},{url:"/js/5482.171730c1.js",revision:null},{url:"/js/5484.558d0686.js",revision:null},{url:"/js/5494.cf269227.js",revision:null},{url:"/js/5824.c1fa74c1.js",revision:null},{url:"/js/6051.b613c10d.js",revision:null},{url:"/js/6486.69f20b3c.js",revision:null},{url:"/js/660.9f1fe397.js",revision:null},{url:"/js/6742.703f8f42.js",revision:null},{url:"/js/6949.47274b36.js",revision:null},{url:"/js/7109.12eac2a8.js",revision:null},{url:"/js/7122.9d363ce1.js",revision:null},{url:"/js/7296.7a182764.js",revision:null},{url:"/js/732.95c2b229.js",revision:null},{url:"/js/7354.731e0b5f.js",revision:null},{url:"/js/746.db80a5b1.js",revision:null},{url:"/js/7539.a22bfe37.js",revision:null},{url:"/js/7795.e812a650.js",revision:null},{url:"/js/7958.716d9e7c.js",revision:null},{url:"/js/7959.badc49d8.js",revision:null},{url:"/js/8070.25bac580.js",revision:null},{url:"/js/8273.28b6bf75.js",revision:null},{url:"/js/8290.faa6a53e.js",revision:null},{url:"/js/8333.460ae570.js",revision:null},{url:"/js/8366.37cd7910.js",revision:null},{url:"/js/8377.b25a836d.js",revision:null},{url:"/js/8723.0bc738a3.js",revision:null},{url:"/js/8747.e1580881.js",revision:null},{url:"/js/906.7f2bc0ec.js",revision:null},{url:"/js/9060.e384434d.js",revision:null},{url:"/js/9097.5050f282.js",revision:null},{url:"/js/9326.f32338d9.js",revision:null},{url:"/js/9353.d805f322.js",revision:null},{url:"/js/9366.8cc801f1.js",revision:null},{url:"/js/9523.b0630c70.js",revision:null},{url:"/js/9924.597d742a.js",revision:null},{url:"/js/app.03cbb009.js",revision:null},{url:"/js/chunk-common.1713fb39.js",revision:null},{url:"/js/vendor.d437983d.js",revision:null},{url:"/logo.png",revision:"fa4bd79d331ecb3fe85f9e66d403c7f9"},{url:"/manifest.json",revision:"66e0225b06bd09e04581eeebf20e444b"},{url:"/user-default.png",revision:"d247853430005f21de45ce72601c9e8a"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));
