if(!self.define){let s,l={};const n=(n,i)=>(n=new URL(n+".js",i).href,l[n]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=l,document.head.appendChild(s)}else s=n,importScripts(n),l()})).then((()=>{let s=l[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,e)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let u={};const o=s=>n(s,r),c={module:{uri:r},exports:u,require:o};l[r]=Promise.all(i.map((s=>c[s]||o(s)))).then((s=>(e(...s),u)))}}define(["./workbox-37fde244"],(function(s){"use strict";s.setCacheNameDetails({prefix:"idsantri-app"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_redirects",revision:"5f52dbefcf63c9f677ace09fcf8bc7d8"},{url:"/css/1498.5baf1c5b.css",revision:null},{url:"/css/2780.163d0a38.css",revision:null},{url:"/css/4619.1180a29c.css",revision:null},{url:"/css/4746.2a945f7c.css",revision:null},{url:"/css/5442.2e25c0bc.css",revision:null},{url:"/css/6949.0afa1671.css",revision:null},{url:"/css/7122.d7231541.css",revision:null},{url:"/css/7795.73efac7f.css",revision:null},{url:"/css/9097.9aa994b9.css",revision:null},{url:"/css/app.c91b3854.css",revision:null},{url:"/css/chunk-common.4991b51a.css",revision:null},{url:"/css/vendor.ff1b690f.css",revision:null},{url:"/favicon.ico",revision:"e99fbff0290b184581a1424b5fd1712f"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c5371cfb.woff2",revision:null},{url:"/icons/apple-icon-120x120.png",revision:"465c64d76c839494984551b03d831999"},{url:"/icons/apple-icon-152x152.png",revision:"ba1cd9e652b539c5c42150c0451994af"},{url:"/icons/apple-icon-167x167.png",revision:"4ff9739eda8b71d99408d02a6245f6cf"},{url:"/icons/apple-icon-180x180.png",revision:"597531fed97d9fa0ed87a5e82a6916e5"},{url:"/icons/apple-launch-1080x2340.png",revision:"37e755557fd4e45c8ec6f825677fc1f1"},{url:"/icons/apple-launch-1125x2436.png",revision:"897007e2767135c71267c2de7263adfb"},{url:"/icons/apple-launch-1170x2532.png",revision:"b3bf30677cabf107778608910bddbed4"},{url:"/icons/apple-launch-1179x2556.png",revision:"f31197942cfe1375a2987940b4b252d2"},{url:"/icons/apple-launch-1242x2208.png",revision:"d596a4343a33536f525f0be46a2bc80a"},{url:"/icons/apple-launch-1242x2688.png",revision:"c982b1d826899d299cd8949e8e495a00"},{url:"/icons/apple-launch-1284x2778.png",revision:"4aff3c1ee649b9dbc9c648f7e4f1b318"},{url:"/icons/apple-launch-1290x2796.png",revision:"6127f27f4c997e51623d91d866b76111"},{url:"/icons/apple-launch-1536x2048.png",revision:"6f9fc628cf205a3ccec38097a6e6cdb3"},{url:"/icons/apple-launch-1620x2160.png",revision:"1b2994fa0f0a81bea6f1c94af03b1312"},{url:"/icons/apple-launch-1668x2224.png",revision:"e06950b05991bae1d9ddaeb83f7705d4"},{url:"/icons/apple-launch-1668x2388.png",revision:"36da2bae0a521937de455467b9e410c5"},{url:"/icons/apple-launch-2048x2732.png",revision:"79369c2eb7e70913b45bf24b2d556aa1"},{url:"/icons/apple-launch-750x1334.png",revision:"7d82214a0cc8fa7202d7f75b54a23b55"},{url:"/icons/apple-launch-828x1792.png",revision:"08b579c8c3f3948ed1a4f0601be391d5"},{url:"/icons/favicon-128x128.png",revision:"fdebefdf67fe18ddd8739fca98787f51"},{url:"/icons/favicon-16x16.png",revision:"4a2c2546d4a8bf9842c86d518a22ef40"},{url:"/icons/favicon-32x32.png",revision:"e2076ee9a49f4b0a1d7b257caa6d9a72"},{url:"/icons/favicon-96x96.png",revision:"99503397a6af28807593e68b27bac594"},{url:"/icons/icon-128x128.png",revision:"fdebefdf67fe18ddd8739fca98787f51"},{url:"/icons/icon-192x192.png",revision:"79717d1056875654ceddacb53bf2350f"},{url:"/icons/icon-256x256.png",revision:"9caa58b25c56a35e22d8de1f20877d05"},{url:"/icons/icon-384x384.png",revision:"bede816685e256da711e09aa58f6d193"},{url:"/icons/icon-512x512.png",revision:"d6825e6b3a98a73bb87e4aef6bb9e96a"},{url:"/icons/ms-icon-144x144.png",revision:"d2aefa7a745c6c0309889f4fa2b7ff9c"},{url:"/icons/safari-pinned-tab.svg",revision:"6c248f754644438035705fafe5f2d728"},{url:"/index.html",revision:"4c2e95d69ade501885992734dc74315f"},{url:"/js/1398.354a2ca4.js",revision:null},{url:"/js/1498.5f3bb7d5.js",revision:null},{url:"/js/1509.384a8a6b.js",revision:null},{url:"/js/1610.dbc4dc89.js",revision:null},{url:"/js/1840.e0febaaa.js",revision:null},{url:"/js/2022.691ce1e6.js",revision:null},{url:"/js/2155.06d53710.js",revision:null},{url:"/js/270.0d68650b.js",revision:null},{url:"/js/2780.9b80e311.js",revision:null},{url:"/js/2956.472b8573.js",revision:null},{url:"/js/2980.1a80670c.js",revision:null},{url:"/js/3044.2881b22d.js",revision:null},{url:"/js/3239.e6703b0e.js",revision:null},{url:"/js/3425.1759c8cc.js",revision:null},{url:"/js/3690.2958d5eb.js",revision:null},{url:"/js/3717.390a24b9.js",revision:null},{url:"/js/3741.72ea1263.js",revision:null},{url:"/js/3784.5aa1c111.js",revision:null},{url:"/js/4125.eef42bdd.js",revision:null},{url:"/js/4483.9ced63cc.js",revision:null},{url:"/js/4619.89e7629e.js",revision:null},{url:"/js/464.87984a86.js",revision:null},{url:"/js/4746.139bb43b.js",revision:null},{url:"/js/4856.892c03e5.js",revision:null},{url:"/js/4949.fa21554e.js",revision:null},{url:"/js/496.3b696d47.js",revision:null},{url:"/js/5022.ea54ddd6.js",revision:null},{url:"/js/5038.2f1f79cb.js",revision:null},{url:"/js/5085.8a54352a.js",revision:null},{url:"/js/5420.6063a866.js",revision:null},{url:"/js/5431.05a7cc9d.js",revision:null},{url:"/js/5442.6106107b.js",revision:null},{url:"/js/5482.171730c1.js",revision:null},{url:"/js/5484.558d0686.js",revision:null},{url:"/js/5494.cf269227.js",revision:null},{url:"/js/5824.c1fa74c1.js",revision:null},{url:"/js/6051.b613c10d.js",revision:null},{url:"/js/6486.69f20b3c.js",revision:null},{url:"/js/660.9f1fe397.js",revision:null},{url:"/js/6742.703f8f42.js",revision:null},{url:"/js/6949.47274b36.js",revision:null},{url:"/js/7109.12eac2a8.js",revision:null},{url:"/js/7122.9d363ce1.js",revision:null},{url:"/js/7296.7a182764.js",revision:null},{url:"/js/732.95c2b229.js",revision:null},{url:"/js/7354.731e0b5f.js",revision:null},{url:"/js/746.db80a5b1.js",revision:null},{url:"/js/7539.a22bfe37.js",revision:null},{url:"/js/7795.e812a650.js",revision:null},{url:"/js/7958.716d9e7c.js",revision:null},{url:"/js/7959.badc49d8.js",revision:null},{url:"/js/8070.25bac580.js",revision:null},{url:"/js/8273.28b6bf75.js",revision:null},{url:"/js/8290.faa6a53e.js",revision:null},{url:"/js/8333.460ae570.js",revision:null},{url:"/js/8366.37cd7910.js",revision:null},{url:"/js/8377.b25a836d.js",revision:null},{url:"/js/8723.0bc738a3.js",revision:null},{url:"/js/8747.e1580881.js",revision:null},{url:"/js/906.b7298d08.js",revision:null},{url:"/js/9060.e384434d.js",revision:null},{url:"/js/9097.5050f282.js",revision:null},{url:"/js/9326.f32338d9.js",revision:null},{url:"/js/9353.d805f322.js",revision:null},{url:"/js/9366.8cc801f1.js",revision:null},{url:"/js/9523.b0630c70.js",revision:null},{url:"/js/9924.597d742a.js",revision:null},{url:"/js/app.1274ecfd.js",revision:null},{url:"/js/chunk-common.0db47aab.js",revision:null},{url:"/js/vendor.d437983d.js",revision:null},{url:"/logo.png",revision:"259b278de23ba399d4df56e76eab6fd1"},{url:"/manifest.json",revision:"769c1f3818d55bb3c635b7ace69da322"},{url:"/user-default.png",revision:"d247853430005f21de45ce72601c9e8a"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));
