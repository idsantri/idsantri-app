if(!self.define){let s,l={};const n=(n,i)=>(n=new URL(n+".js",i).href,l[n]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=l,document.head.appendChild(s)}else s=n,importScripts(n),l()})).then((()=>{let s=l[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,e)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let u={};const c=s=>n(s,r),o={module:{uri:r},exports:u,require:c};l[r]=Promise.all(i.map((s=>o[s]||c(s)))).then((s=>(e(...s),u)))}}define(["./workbox-37fde244"],(function(s){"use strict";s.setCacheNameDetails({prefix:"idsantri-app"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_redirects",revision:"5f52dbefcf63c9f677ace09fcf8bc7d8"},{url:"/css/1498.f029cc90.css",revision:null},{url:"/css/2780.163d0a38.css",revision:null},{url:"/css/4746.86a8cbe7.css",revision:null},{url:"/css/5442.124e11dc.css",revision:null},{url:"/css/6308.84982d95.css",revision:null},{url:"/css/6949.a1effa12.css",revision:null},{url:"/css/7122.8498dd4c.css",revision:null},{url:"/css/7795.ec57e191.css",revision:null},{url:"/css/9097.fe7175ed.css",revision:null},{url:"/css/app.c91b3854.css",revision:null},{url:"/css/chunk-common.8c05d545.css",revision:null},{url:"/css/vendor.b51d26d1.css",revision:null},{url:"/favicon.ico",revision:"a28b8319724e72282ad0bf48e22f103b"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c5371cfb.woff2",revision:null},{url:"/icons/apple-icon-120x120.png",revision:"b54ed47619f11a904eae11ec0007afaf"},{url:"/icons/apple-icon-152x152.png",revision:"9231cdd3aff2324aa6835e5f25b8966b"},{url:"/icons/apple-icon-167x167.png",revision:"cfebacaa9d600340e82b994a89e2f8d6"},{url:"/icons/apple-icon-180x180.png",revision:"aa12f35c97fbead3b8f64c04d5fc3661"},{url:"/icons/apple-launch-1080x2340.png",revision:"fc8fdcc4f72d83ef48ab577952339717"},{url:"/icons/apple-launch-1125x2436.png",revision:"57bf455b04febc4f846aa6ecca3b377e"},{url:"/icons/apple-launch-1170x2532.png",revision:"d815cd5bf0fb8c1accc615a3eabeced2"},{url:"/icons/apple-launch-1179x2556.png",revision:"fe222341f8afea40239a49499a34a114"},{url:"/icons/apple-launch-1242x2208.png",revision:"d51d240ce0be736f2e314741dc210bcb"},{url:"/icons/apple-launch-1242x2688.png",revision:"9ed9651e7121495f96832e83ac565152"},{url:"/icons/apple-launch-1284x2778.png",revision:"288d248434741a5bbc0e2c52f4c0aee0"},{url:"/icons/apple-launch-1290x2796.png",revision:"72b765e7fcd0a46df5fc4d00da64416f"},{url:"/icons/apple-launch-1536x2048.png",revision:"4683bdc30e82fb6876eaed0149df8fb1"},{url:"/icons/apple-launch-1620x2160.png",revision:"b2c88b4346a021889d966c71f771f3d1"},{url:"/icons/apple-launch-1668x2224.png",revision:"2c9faa659d8fc9d8d6905fd402315270"},{url:"/icons/apple-launch-1668x2388.png",revision:"31f21a6eee1612418c8d7edd4bd3eb33"},{url:"/icons/apple-launch-2048x2732.png",revision:"e8807181efaf8167bf34db5a64a9c017"},{url:"/icons/apple-launch-750x1334.png",revision:"338d1d4c97d735859150e0d6db32bc2b"},{url:"/icons/apple-launch-828x1792.png",revision:"ec27d47c9959a106b866fa8c0f2daefa"},{url:"/icons/favicon-128x128.png",revision:"2de8ae3e929b4b0793d754cb1f62e5f1"},{url:"/icons/favicon-16x16.png",revision:"72b6914be23db89c382086f98e3e661c"},{url:"/icons/favicon-32x32.png",revision:"e4c77a656dfe5c920dccea20d3ad6849"},{url:"/icons/favicon-96x96.png",revision:"bd367eefb8697be587282824172a206f"},{url:"/icons/icon-128x128.png",revision:"2de8ae3e929b4b0793d754cb1f62e5f1"},{url:"/icons/icon-192x192.png",revision:"df22659854d75a8c688c6eacd61f8012"},{url:"/icons/icon-256x256.png",revision:"65f8872cae19e0e83b3e1f638f178ea5"},{url:"/icons/icon-384x384.png",revision:"d10f44971a26849ec8001071c369d359"},{url:"/icons/icon-512x512.png",revision:"359695f5f891be08215c0a604ec04026"},{url:"/icons/ms-icon-144x144.png",revision:"bdaeecb6849858b721a0cfe78c5dc0cd"},{url:"/icons/safari-pinned-tab.svg",revision:"a448440353e381969974fcd7708a226f"},{url:"/index.html",revision:"07e7b6e7c7523f555df37dc6c94b92c7"},{url:"/js/1398.45a247e7.js",revision:null},{url:"/js/1498.b0024604.js",revision:null},{url:"/js/1509.50882d66.js",revision:null},{url:"/js/1598.cea08944.js",revision:null},{url:"/js/1610.4660a889.js",revision:null},{url:"/js/1840.83d4cf17.js",revision:null},{url:"/js/2022.4ea69a4e.js",revision:null},{url:"/js/2155.84c30d71.js",revision:null},{url:"/js/270.b69ee7c4.js",revision:null},{url:"/js/2780.d87c34c9.js",revision:null},{url:"/js/2980.63e3b728.js",revision:null},{url:"/js/3044.7874bea0.js",revision:null},{url:"/js/3425.8a75cdd0.js",revision:null},{url:"/js/3690.1c8345ad.js",revision:null},{url:"/js/3717.4e03590d.js",revision:null},{url:"/js/3741.fe676147.js",revision:null},{url:"/js/3784.dccff6f8.js",revision:null},{url:"/js/4125.33806066.js",revision:null},{url:"/js/4483.37925f35.js",revision:null},{url:"/js/464.942caec9.js",revision:null},{url:"/js/4724.25935cec.js",revision:null},{url:"/js/4746.8ad4088f.js",revision:null},{url:"/js/4856.096a8985.js",revision:null},{url:"/js/4949.b36b27d8.js",revision:null},{url:"/js/496.c6a8e47e.js",revision:null},{url:"/js/5022.665f5c85.js",revision:null},{url:"/js/5038.7a38618b.js",revision:null},{url:"/js/5085.ea7f8060.js",revision:null},{url:"/js/5420.20f857e6.js",revision:null},{url:"/js/5431.bca42180.js",revision:null},{url:"/js/5442.80b8d44d.js",revision:null},{url:"/js/5482.f6e1feae.js",revision:null},{url:"/js/5484.54ed937f.js",revision:null},{url:"/js/5494.5e233f29.js",revision:null},{url:"/js/56.1e0bce5e.js",revision:null},{url:"/js/5668.d3850679.js",revision:null},{url:"/js/5824.178def9b.js",revision:null},{url:"/js/5912.16a257ae.js",revision:null},{url:"/js/6051.70aad36e.js",revision:null},{url:"/js/6308.f20dcd48.js",revision:null},{url:"/js/641.b40c6181.js",revision:null},{url:"/js/6486.c111809f.js",revision:null},{url:"/js/660.34a0fef6.js",revision:null},{url:"/js/6742.0f78cd39.js",revision:null},{url:"/js/6949.ff23e408.js",revision:null},{url:"/js/7109.6867d673.js",revision:null},{url:"/js/7122.9c3f7bdb.js",revision:null},{url:"/js/7296.2c5b8c20.js",revision:null},{url:"/js/732.8814774e.js",revision:null},{url:"/js/7354.4d75e341.js",revision:null},{url:"/js/746.6e535c65.js",revision:null},{url:"/js/7539.d46882d1.js",revision:null},{url:"/js/7795.aa267ef0.js",revision:null},{url:"/js/7959.ac48a0fa.js",revision:null},{url:"/js/8070.72750db5.js",revision:null},{url:"/js/8273.c0adc275.js",revision:null},{url:"/js/8290.5f337fd1.js",revision:null},{url:"/js/8333.4ee16327.js",revision:null},{url:"/js/8366.b72cebc8.js",revision:null},{url:"/js/8377.1f2452d5.js",revision:null},{url:"/js/8723.1178d84f.js",revision:null},{url:"/js/8747.0a064cd6.js",revision:null},{url:"/js/906.024fe73a.js",revision:null},{url:"/js/9060.8da92912.js",revision:null},{url:"/js/9097.35559786.js",revision:null},{url:"/js/9126.6e65242a.js",revision:null},{url:"/js/9326.aa14b693.js",revision:null},{url:"/js/9353.414ad88d.js",revision:null},{url:"/js/9366.df88d3fd.js",revision:null},{url:"/js/9523.66d3940a.js",revision:null},{url:"/js/9924.9107eea4.js",revision:null},{url:"/js/app.32524e44.js",revision:null},{url:"/js/chunk-common.f5de1f09.js",revision:null},{url:"/js/vendor.6b6270f2.js",revision:null},{url:"/manifest.json",revision:"769c1f3818d55bb3c635b7ace69da322"},{url:"/user-default.png",revision:"d247853430005f21de45ce72601c9e8a"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));
