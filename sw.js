if(!self.define){let s,l={};const n=(n,i)=>(n=new URL(n+".js",i).href,l[n]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=l,document.head.appendChild(s)}else s=n,importScripts(n),l()})).then((()=>{let s=l[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,e)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let u={};const o=s=>n(s,r),c={module:{uri:r},exports:u,require:o};l[r]=Promise.all(i.map((s=>c[s]||o(s)))).then((s=>(e(...s),u)))}}define(["./workbox-37fde244"],(function(s){"use strict";s.setCacheNameDetails({prefix:"idsantri-app"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_redirects",revision:"5f52dbefcf63c9f677ace09fcf8bc7d8"},{url:"/css/1498.c45ca83a.css",revision:null},{url:"/css/2780.163d0a38.css",revision:null},{url:"/css/4746.2a945f7c.css",revision:null},{url:"/css/5442.2e25c0bc.css",revision:null},{url:"/css/6949.0afa1671.css",revision:null},{url:"/css/7122.d7231541.css",revision:null},{url:"/css/7795.3b8d19d8.css",revision:null},{url:"/css/9097.9aa994b9.css",revision:null},{url:"/css/9956.1180a29c.css",revision:null},{url:"/css/app.c91b3854.css",revision:null},{url:"/css/chunk-common.4991b51a.css",revision:null},{url:"/css/vendor.b51d26d1.css",revision:null},{url:"/favicon.ico",revision:"e99fbff0290b184581a1424b5fd1712f"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c5371cfb.woff2",revision:null},{url:"/icons/apple-icon-120x120.png",revision:"465c64d76c839494984551b03d831999"},{url:"/icons/apple-icon-152x152.png",revision:"ba1cd9e652b539c5c42150c0451994af"},{url:"/icons/apple-icon-167x167.png",revision:"4ff9739eda8b71d99408d02a6245f6cf"},{url:"/icons/apple-icon-180x180.png",revision:"597531fed97d9fa0ed87a5e82a6916e5"},{url:"/icons/apple-launch-1080x2340.png",revision:"37e755557fd4e45c8ec6f825677fc1f1"},{url:"/icons/apple-launch-1125x2436.png",revision:"897007e2767135c71267c2de7263adfb"},{url:"/icons/apple-launch-1170x2532.png",revision:"b3bf30677cabf107778608910bddbed4"},{url:"/icons/apple-launch-1179x2556.png",revision:"f31197942cfe1375a2987940b4b252d2"},{url:"/icons/apple-launch-1242x2208.png",revision:"d596a4343a33536f525f0be46a2bc80a"},{url:"/icons/apple-launch-1242x2688.png",revision:"c982b1d826899d299cd8949e8e495a00"},{url:"/icons/apple-launch-1284x2778.png",revision:"4aff3c1ee649b9dbc9c648f7e4f1b318"},{url:"/icons/apple-launch-1290x2796.png",revision:"6127f27f4c997e51623d91d866b76111"},{url:"/icons/apple-launch-1536x2048.png",revision:"6f9fc628cf205a3ccec38097a6e6cdb3"},{url:"/icons/apple-launch-1620x2160.png",revision:"1b2994fa0f0a81bea6f1c94af03b1312"},{url:"/icons/apple-launch-1668x2224.png",revision:"e06950b05991bae1d9ddaeb83f7705d4"},{url:"/icons/apple-launch-1668x2388.png",revision:"36da2bae0a521937de455467b9e410c5"},{url:"/icons/apple-launch-2048x2732.png",revision:"79369c2eb7e70913b45bf24b2d556aa1"},{url:"/icons/apple-launch-750x1334.png",revision:"7d82214a0cc8fa7202d7f75b54a23b55"},{url:"/icons/apple-launch-828x1792.png",revision:"08b579c8c3f3948ed1a4f0601be391d5"},{url:"/icons/favicon-128x128.png",revision:"fdebefdf67fe18ddd8739fca98787f51"},{url:"/icons/favicon-16x16.png",revision:"4a2c2546d4a8bf9842c86d518a22ef40"},{url:"/icons/favicon-32x32.png",revision:"e2076ee9a49f4b0a1d7b257caa6d9a72"},{url:"/icons/favicon-96x96.png",revision:"99503397a6af28807593e68b27bac594"},{url:"/icons/icon-128x128.png",revision:"fdebefdf67fe18ddd8739fca98787f51"},{url:"/icons/icon-192x192.png",revision:"79717d1056875654ceddacb53bf2350f"},{url:"/icons/icon-256x256.png",revision:"9caa58b25c56a35e22d8de1f20877d05"},{url:"/icons/icon-384x384.png",revision:"bede816685e256da711e09aa58f6d193"},{url:"/icons/icon-512x512.png",revision:"d6825e6b3a98a73bb87e4aef6bb9e96a"},{url:"/icons/ms-icon-144x144.png",revision:"d2aefa7a745c6c0309889f4fa2b7ff9c"},{url:"/icons/safari-pinned-tab.svg",revision:"6c248f754644438035705fafe5f2d728"},{url:"/index.html",revision:"246ca4bc9d98adb68058a0b7ee5413c9"},{url:"/js/1398.fdfc59aa.js",revision:null},{url:"/js/1498.a22038ba.js",revision:null},{url:"/js/1509.552324b0.js",revision:null},{url:"/js/1610.6ecaeeef.js",revision:null},{url:"/js/1840.8203cb87.js",revision:null},{url:"/js/2022.738da2ad.js",revision:null},{url:"/js/2155.898b301e.js",revision:null},{url:"/js/270.b7aafa39.js",revision:null},{url:"/js/2780.faca6f2c.js",revision:null},{url:"/js/2956.73ed0e7b.js",revision:null},{url:"/js/2980.57011f4f.js",revision:null},{url:"/js/3044.a180899c.js",revision:null},{url:"/js/3239.4b92f5db.js",revision:null},{url:"/js/3425.1a13a77d.js",revision:null},{url:"/js/3690.40d3cbf4.js",revision:null},{url:"/js/3717.59c83f83.js",revision:null},{url:"/js/3741.7df92828.js",revision:null},{url:"/js/3784.5905850a.js",revision:null},{url:"/js/4125.717c8aef.js",revision:null},{url:"/js/4483.49c20d36.js",revision:null},{url:"/js/464.61e341dc.js",revision:null},{url:"/js/4746.9d83cfa2.js",revision:null},{url:"/js/4856.36583560.js",revision:null},{url:"/js/4949.c0d97d5f.js",revision:null},{url:"/js/496.0c405c3e.js",revision:null},{url:"/js/5022.665f5c85.js",revision:null},{url:"/js/5038.7a38618b.js",revision:null},{url:"/js/5085.22d5fe77.js",revision:null},{url:"/js/5420.e9f4e07e.js",revision:null},{url:"/js/5431.abff797e.js",revision:null},{url:"/js/5442.5ace1f7f.js",revision:null},{url:"/js/5482.cc62df9d.js",revision:null},{url:"/js/5484.54ed937f.js",revision:null},{url:"/js/5494.48271370.js",revision:null},{url:"/js/56.b5387866.js",revision:null},{url:"/js/5824.f129f8ef.js",revision:null},{url:"/js/6051.be8ad650.js",revision:null},{url:"/js/641.b40c6181.js",revision:null},{url:"/js/6486.08f44136.js",revision:null},{url:"/js/660.34a0fef6.js",revision:null},{url:"/js/6742.0f78cd39.js",revision:null},{url:"/js/6949.a6ac2621.js",revision:null},{url:"/js/7109.a19fb2d8.js",revision:null},{url:"/js/7122.46ae2c67.js",revision:null},{url:"/js/7296.2c5b8c20.js",revision:null},{url:"/js/732.8814774e.js",revision:null},{url:"/js/7354.4d75e341.js",revision:null},{url:"/js/746.5ddae794.js",revision:null},{url:"/js/7539.d46882d1.js",revision:null},{url:"/js/7795.b29f0abb.js",revision:null},{url:"/js/7958.37934691.js",revision:null},{url:"/js/7959.0f9952e1.js",revision:null},{url:"/js/8070.a7a64063.js",revision:null},{url:"/js/8273.c0adc275.js",revision:null},{url:"/js/8290.5f337fd1.js",revision:null},{url:"/js/8333.cbbc88a0.js",revision:null},{url:"/js/8366.9d93b4a4.js",revision:null},{url:"/js/8377.1f2452d5.js",revision:null},{url:"/js/8723.bf0732a3.js",revision:null},{url:"/js/8747.f0a26ed6.js",revision:null},{url:"/js/906.dc96b959.js",revision:null},{url:"/js/9060.b1493523.js",revision:null},{url:"/js/9097.1bd3b703.js",revision:null},{url:"/js/9326.77d2408b.js",revision:null},{url:"/js/9353.deb7137a.js",revision:null},{url:"/js/9366.5c63cc7a.js",revision:null},{url:"/js/9523.721b4d68.js",revision:null},{url:"/js/9924.9107eea4.js",revision:null},{url:"/js/9956.6c306d7f.js",revision:null},{url:"/js/app.93ed3878.js",revision:null},{url:"/js/chunk-common.7c5fbbb2.js",revision:null},{url:"/js/vendor.38234989.js",revision:null},{url:"/logo.png",revision:"259b278de23ba399d4df56e76eab6fd1"},{url:"/manifest.json",revision:"769c1f3818d55bb3c635b7ace69da322"},{url:"/user-default.png",revision:"d247853430005f21de45ce72601c9e8a"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));
