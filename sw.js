if(!self.define){let s,l={};const n=(n,i)=>(n=new URL(n+".js",i).href,l[n]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=l,document.head.appendChild(s)}else s=n,importScripts(n),l()})).then((()=>{let s=l[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,e)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let u={};const o=s=>n(s,r),c={module:{uri:r},exports:u,require:o};l[r]=Promise.all(i.map((s=>c[s]||o(s)))).then((s=>(e(...s),u)))}}define(["./workbox-37fde244"],(function(s){"use strict";s.setCacheNameDetails({prefix:"idsantri-app"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_redirects",revision:"5f52dbefcf63c9f677ace09fcf8bc7d8"},{url:"/css/1498.f029cc90.css",revision:null},{url:"/css/2780.163d0a38.css",revision:null},{url:"/css/4746.86a8cbe7.css",revision:null},{url:"/css/5442.124e11dc.css",revision:null},{url:"/css/6308.84982d95.css",revision:null},{url:"/css/6949.a1effa12.css",revision:null},{url:"/css/7122.8498dd4c.css",revision:null},{url:"/css/7795.ec57e191.css",revision:null},{url:"/css/9097.fe7175ed.css",revision:null},{url:"/css/app.c91b3854.css",revision:null},{url:"/css/chunk-common.8c05d545.css",revision:null},{url:"/css/vendor.b51d26d1.css",revision:null},{url:"/favicon.ico",revision:"9cb26f51a0dd301683e2c5348cc44f1e"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c5371cfb.woff2",revision:null},{url:"/icons/apple-icon-120x120.png",revision:"2924d911c7205d68ffcdacfa6f4d3bc5"},{url:"/icons/apple-icon-152x152.png",revision:"61c4c7998e42a59e008dda6d48a339f4"},{url:"/icons/apple-icon-167x167.png",revision:"0e86037b72a3194cf30db54de27acdd5"},{url:"/icons/apple-icon-180x180.png",revision:"e7353991fe3a9f69e565f20bdcec22d7"},{url:"/icons/apple-launch-1080x2340.png",revision:"f4c70a5f4277843d6ccef1181fa244aa"},{url:"/icons/apple-launch-1125x2436.png",revision:"bc955b31fe9d3f93f2d713b64bbeb976"},{url:"/icons/apple-launch-1170x2532.png",revision:"b7fda0aac0df7e142910b039d59cdb3e"},{url:"/icons/apple-launch-1179x2556.png",revision:"03604b35295f2b5d8591f223fea1befd"},{url:"/icons/apple-launch-1242x2208.png",revision:"ffbdab799a23879c7ecfab0027b324e5"},{url:"/icons/apple-launch-1242x2688.png",revision:"826cb23cfbd7850b778f44ceaec234f4"},{url:"/icons/apple-launch-1284x2778.png",revision:"264d237ad204641f362f1a2228f4ae1f"},{url:"/icons/apple-launch-1290x2796.png",revision:"cabdfe9bf8735c2cd0dd139e4b439ef7"},{url:"/icons/apple-launch-1536x2048.png",revision:"02f3d5ec76f50b75c42567506a9ecc1d"},{url:"/icons/apple-launch-1620x2160.png",revision:"8ec1516bf4df2372a6679b22b45084ff"},{url:"/icons/apple-launch-1668x2224.png",revision:"d0739f32f64d1184400160d975d42222"},{url:"/icons/apple-launch-1668x2388.png",revision:"b2e799f07a0eea93d98bdf00dbbd371d"},{url:"/icons/apple-launch-2048x2732.png",revision:"ca98bd485b066566989d4ca2a70ab5fe"},{url:"/icons/apple-launch-750x1334.png",revision:"81d4b6bcd6c27318268876608144dd51"},{url:"/icons/apple-launch-828x1792.png",revision:"3562e2701ba8303829d098863140cb0c"},{url:"/icons/favicon-128x128.png",revision:"aa6b10e3a7fec9e2289f1f6002ab7669"},{url:"/icons/favicon-16x16.png",revision:"2e3905884089c3ad5958b1de8ce87f4d"},{url:"/icons/favicon-32x32.png",revision:"8421cc9702a7890aabc8bcfc0583b301"},{url:"/icons/favicon-96x96.png",revision:"6984ffa2749531bddb551db9fd3c11fd"},{url:"/icons/icon-128x128.png",revision:"aa6b10e3a7fec9e2289f1f6002ab7669"},{url:"/icons/icon-192x192.png",revision:"46aac655743dc5013da46599d01dfb96"},{url:"/icons/icon-256x256.png",revision:"1883b8a5df3e39ec53b6895d3ee9d5eb"},{url:"/icons/icon-384x384.png",revision:"731be3b649752e3bca50a667762952ba"},{url:"/icons/icon-512x512.png",revision:"8d5920408938ed729d6d9bb1e801f457"},{url:"/icons/ms-icon-144x144.png",revision:"d74a9454c76ba6761afa1c26fd57d2b0"},{url:"/icons/safari-pinned-tab.svg",revision:"3ab0aa99f0f1454bff84adbf94e98626"},{url:"/index.html",revision:"f0efe630fa4976e2a46c0a0604212a49"},{url:"/js/1398.45a247e7.js",revision:null},{url:"/js/1498.b0024604.js",revision:null},{url:"/js/1509.50882d66.js",revision:null},{url:"/js/1598.cea08944.js",revision:null},{url:"/js/1610.4660a889.js",revision:null},{url:"/js/1840.83d4cf17.js",revision:null},{url:"/js/2022.4ea69a4e.js",revision:null},{url:"/js/2155.84c30d71.js",revision:null},{url:"/js/270.b69ee7c4.js",revision:null},{url:"/js/2780.3e3d1d4d.js",revision:null},{url:"/js/2980.63e3b728.js",revision:null},{url:"/js/3044.22b8e7c5.js",revision:null},{url:"/js/3425.06ecc292.js",revision:null},{url:"/js/3690.1c8345ad.js",revision:null},{url:"/js/3717.4e03590d.js",revision:null},{url:"/js/3741.fe676147.js",revision:null},{url:"/js/3784.dccff6f8.js",revision:null},{url:"/js/4125.33806066.js",revision:null},{url:"/js/4483.37925f35.js",revision:null},{url:"/js/464.942caec9.js",revision:null},{url:"/js/4724.41763eed.js",revision:null},{url:"/js/4746.8ad4088f.js",revision:null},{url:"/js/4856.096a8985.js",revision:null},{url:"/js/4949.b36b27d8.js",revision:null},{url:"/js/496.c6a8e47e.js",revision:null},{url:"/js/5022.665f5c85.js",revision:null},{url:"/js/5038.7a38618b.js",revision:null},{url:"/js/5085.ea7f8060.js",revision:null},{url:"/js/5420.20f857e6.js",revision:null},{url:"/js/5431.bca42180.js",revision:null},{url:"/js/5442.80b8d44d.js",revision:null},{url:"/js/5482.99d07cb9.js",revision:null},{url:"/js/5484.54ed937f.js",revision:null},{url:"/js/5494.5e233f29.js",revision:null},{url:"/js/56.1e0bce5e.js",revision:null},{url:"/js/5668.d3850679.js",revision:null},{url:"/js/5824.178def9b.js",revision:null},{url:"/js/5912.16a257ae.js",revision:null},{url:"/js/6051.70aad36e.js",revision:null},{url:"/js/6308.f20dcd48.js",revision:null},{url:"/js/641.b40c6181.js",revision:null},{url:"/js/6486.c111809f.js",revision:null},{url:"/js/660.34a0fef6.js",revision:null},{url:"/js/6742.0f78cd39.js",revision:null},{url:"/js/6949.ff23e408.js",revision:null},{url:"/js/7109.6867d673.js",revision:null},{url:"/js/7122.9c3f7bdb.js",revision:null},{url:"/js/7296.2c5b8c20.js",revision:null},{url:"/js/732.8814774e.js",revision:null},{url:"/js/7354.4d75e341.js",revision:null},{url:"/js/746.6e535c65.js",revision:null},{url:"/js/7539.d46882d1.js",revision:null},{url:"/js/7795.aa267ef0.js",revision:null},{url:"/js/7959.ac48a0fa.js",revision:null},{url:"/js/8070.72750db5.js",revision:null},{url:"/js/8273.c0adc275.js",revision:null},{url:"/js/8290.5f337fd1.js",revision:null},{url:"/js/8333.4ee16327.js",revision:null},{url:"/js/8366.b72cebc8.js",revision:null},{url:"/js/8377.1f2452d5.js",revision:null},{url:"/js/8723.1178d84f.js",revision:null},{url:"/js/8747.0a064cd6.js",revision:null},{url:"/js/906.024fe73a.js",revision:null},{url:"/js/9060.8da92912.js",revision:null},{url:"/js/9097.35559786.js",revision:null},{url:"/js/9126.6e65242a.js",revision:null},{url:"/js/9326.aa14b693.js",revision:null},{url:"/js/9353.414ad88d.js",revision:null},{url:"/js/9366.df88d3fd.js",revision:null},{url:"/js/9523.66d3940a.js",revision:null},{url:"/js/9924.9107eea4.js",revision:null},{url:"/js/app.721e795f.js",revision:null},{url:"/js/chunk-common.99ef32b2.js",revision:null},{url:"/js/vendor.a81a87fd.js",revision:null},{url:"/manifest.json",revision:"66e0225b06bd09e04581eeebf20e444b"},{url:"/user-default.png",revision:"d247853430005f21de45ce72601c9e8a"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));
