if(!self.define){let s,l={};const n=(n,i)=>(n=new URL(n+".js",i).href,l[n]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=l,document.head.appendChild(s)}else s=n,importScripts(n),l()})).then((()=>{let s=l[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,e)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let u={};const c=s=>n(s,r),o={module:{uri:r},exports:u,require:c};l[r]=Promise.all(i.map((s=>o[s]||c(s)))).then((s=>(e(...s),u)))}}define(["./workbox-37fde244"],(function(s){"use strict";s.setCacheNameDetails({prefix:"idsantri-app"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_redirects",revision:"5f52dbefcf63c9f677ace09fcf8bc7d8"},{url:"/css/1498.34fd2098.css",revision:null},{url:"/css/193.440cf865.css",revision:null},{url:"/css/2780.163d0a38.css",revision:null},{url:"/css/4746.cc277c1b.css",revision:null},{url:"/css/6248.84982d95.css",revision:null},{url:"/css/7122.8498dd4c.css",revision:null},{url:"/css/7795.ec57e191.css",revision:null},{url:"/css/9097.862fd54d.css",revision:null},{url:"/css/9390.9694b464.css",revision:null},{url:"/css/app.c91b3854.css",revision:null},{url:"/css/chunk-common.d4e17af9.css",revision:null},{url:"/css/vendor.b51d26d1.css",revision:null},{url:"/favicon.ico",revision:"a28b8319724e72282ad0bf48e22f103b"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c5371cfb.woff2",revision:null},{url:"/icons/apple-icon-120x120.png",revision:"b54ed47619f11a904eae11ec0007afaf"},{url:"/icons/apple-icon-152x152.png",revision:"9231cdd3aff2324aa6835e5f25b8966b"},{url:"/icons/apple-icon-167x167.png",revision:"cfebacaa9d600340e82b994a89e2f8d6"},{url:"/icons/apple-icon-180x180.png",revision:"aa12f35c97fbead3b8f64c04d5fc3661"},{url:"/icons/apple-launch-1080x2340.png",revision:"fc8fdcc4f72d83ef48ab577952339717"},{url:"/icons/apple-launch-1125x2436.png",revision:"57bf455b04febc4f846aa6ecca3b377e"},{url:"/icons/apple-launch-1170x2532.png",revision:"d815cd5bf0fb8c1accc615a3eabeced2"},{url:"/icons/apple-launch-1179x2556.png",revision:"fe222341f8afea40239a49499a34a114"},{url:"/icons/apple-launch-1242x2208.png",revision:"d51d240ce0be736f2e314741dc210bcb"},{url:"/icons/apple-launch-1242x2688.png",revision:"9ed9651e7121495f96832e83ac565152"},{url:"/icons/apple-launch-1284x2778.png",revision:"288d248434741a5bbc0e2c52f4c0aee0"},{url:"/icons/apple-launch-1290x2796.png",revision:"72b765e7fcd0a46df5fc4d00da64416f"},{url:"/icons/apple-launch-1536x2048.png",revision:"4683bdc30e82fb6876eaed0149df8fb1"},{url:"/icons/apple-launch-1620x2160.png",revision:"b2c88b4346a021889d966c71f771f3d1"},{url:"/icons/apple-launch-1668x2224.png",revision:"2c9faa659d8fc9d8d6905fd402315270"},{url:"/icons/apple-launch-1668x2388.png",revision:"31f21a6eee1612418c8d7edd4bd3eb33"},{url:"/icons/apple-launch-2048x2732.png",revision:"e8807181efaf8167bf34db5a64a9c017"},{url:"/icons/apple-launch-750x1334.png",revision:"338d1d4c97d735859150e0d6db32bc2b"},{url:"/icons/apple-launch-828x1792.png",revision:"ec27d47c9959a106b866fa8c0f2daefa"},{url:"/icons/favicon-128x128.png",revision:"2de8ae3e929b4b0793d754cb1f62e5f1"},{url:"/icons/favicon-16x16.png",revision:"72b6914be23db89c382086f98e3e661c"},{url:"/icons/favicon-32x32.png",revision:"e4c77a656dfe5c920dccea20d3ad6849"},{url:"/icons/favicon-96x96.png",revision:"bd367eefb8697be587282824172a206f"},{url:"/icons/icon-128x128.png",revision:"2de8ae3e929b4b0793d754cb1f62e5f1"},{url:"/icons/icon-192x192.png",revision:"df22659854d75a8c688c6eacd61f8012"},{url:"/icons/icon-256x256.png",revision:"65f8872cae19e0e83b3e1f638f178ea5"},{url:"/icons/icon-384x384.png",revision:"d10f44971a26849ec8001071c369d359"},{url:"/icons/icon-512x512.png",revision:"359695f5f891be08215c0a604ec04026"},{url:"/icons/ms-icon-144x144.png",revision:"bdaeecb6849858b721a0cfe78c5dc0cd"},{url:"/icons/safari-pinned-tab.svg",revision:"a448440353e381969974fcd7708a226f"},{url:"/index.html",revision:"b5d303b6170070fe5cfa1e80defa85fd"},{url:"/js/1247.ed5778a5.js",revision:null},{url:"/js/1398.b9a91788.js",revision:null},{url:"/js/1498.4fb55c83.js",revision:null},{url:"/js/1598.18fdf680.js",revision:null},{url:"/js/1610.525bb528.js",revision:null},{url:"/js/1835.d0cf46bf.js",revision:null},{url:"/js/1840.f930bc73.js",revision:null},{url:"/js/1881.b46cceb4.js",revision:null},{url:"/js/193.8b08093d.js",revision:null},{url:"/js/2022.be7a4eb7.js",revision:null},{url:"/js/2155.674bd2a7.js",revision:null},{url:"/js/270.eeaaddba.js",revision:null},{url:"/js/2780.c4fdc108.js",revision:null},{url:"/js/3044.3d8d8cac.js",revision:null},{url:"/js/3425.18647a1a.js",revision:null},{url:"/js/3690.61d31980.js",revision:null},{url:"/js/3717.2d53da1d.js",revision:null},{url:"/js/3741.07fceee4.js",revision:null},{url:"/js/3784.d623c4b0.js",revision:null},{url:"/js/3985.26ff7dc1.js",revision:null},{url:"/js/4125.4395c3e2.js",revision:null},{url:"/js/4483.952a9d34.js",revision:null},{url:"/js/464.1a9c95b3.js",revision:null},{url:"/js/4724.d444c336.js",revision:null},{url:"/js/4746.3c31752a.js",revision:null},{url:"/js/4821.ab9b5886.js",revision:null},{url:"/js/4856.f0e13d94.js",revision:null},{url:"/js/4949.9b28532d.js",revision:null},{url:"/js/496.217e2c77.js",revision:null},{url:"/js/5022.aaf22a41.js",revision:null},{url:"/js/5038.2b8e5d17.js",revision:null},{url:"/js/5085.75ff87aa.js",revision:null},{url:"/js/5420.7f072289.js",revision:null},{url:"/js/5481.c51154e2.js",revision:null},{url:"/js/5482.84b0a570.js",revision:null},{url:"/js/5484.0f74c1a9.js",revision:null},{url:"/js/5494.7325ab82.js",revision:null},{url:"/js/56.cf358d9d.js",revision:null},{url:"/js/5668.6a6559d3.js",revision:null},{url:"/js/5672.eefb385d.js",revision:null},{url:"/js/5824.46cb777f.js",revision:null},{url:"/js/5912.1c88bf5e.js",revision:null},{url:"/js/6051.2ead2ee0.js",revision:null},{url:"/js/6248.22319a67.js",revision:null},{url:"/js/641.24731686.js",revision:null},{url:"/js/6486.78a6ae0f.js",revision:null},{url:"/js/660.87398b65.js",revision:null},{url:"/js/6738.816c13de.js",revision:null},{url:"/js/6742.a52a9917.js",revision:null},{url:"/js/7109.b142c47d.js",revision:null},{url:"/js/7122.ada71950.js",revision:null},{url:"/js/7296.3eb9d589.js",revision:null},{url:"/js/732.0a258fdc.js",revision:null},{url:"/js/7354.6bcec054.js",revision:null},{url:"/js/7539.a3afe23d.js",revision:null},{url:"/js/7788.6bf3aa7d.js",revision:null},{url:"/js/7795.f391c229.js",revision:null},{url:"/js/7801.586d10d3.js",revision:null},{url:"/js/7959.e7a1c82c.js",revision:null},{url:"/js/8070.c7570919.js",revision:null},{url:"/js/8273.5c8ea431.js",revision:null},{url:"/js/8290.6f13c239.js",revision:null},{url:"/js/8333.3c26fc18.js",revision:null},{url:"/js/8366.a90e1d00.js",revision:null},{url:"/js/8377.a4f2dc35.js",revision:null},{url:"/js/8723.1085a556.js",revision:null},{url:"/js/8747.d7a75cbe.js",revision:null},{url:"/js/906.4225e121.js",revision:null},{url:"/js/9060.dfff8483.js",revision:null},{url:"/js/9097.f27472e6.js",revision:null},{url:"/js/9126.64d17243.js",revision:null},{url:"/js/9326.3b96ebb5.js",revision:null},{url:"/js/9353.937c7448.js",revision:null},{url:"/js/9366.191ec1f2.js",revision:null},{url:"/js/9390.7f212b92.js",revision:null},{url:"/js/9414.e507dc24.js",revision:null},{url:"/js/9523.d3c4e853.js",revision:null},{url:"/js/9840.dfdc6cf8.js",revision:null},{url:"/js/9924.51acd7ef.js",revision:null},{url:"/js/app.4e65ca0c.js",revision:null},{url:"/js/chunk-common.df8dfeb0.js",revision:null},{url:"/js/vendor.74abd119.js",revision:null},{url:"/manifest.json",revision:"769c1f3818d55bb3c635b7ace69da322"},{url:"/user-default.png",revision:"d247853430005f21de45ce72601c9e8a"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));
