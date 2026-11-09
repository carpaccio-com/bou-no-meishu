// 棒の盟主：オフライン用のサービスワーカー
// ゲームを更新したら、下の VERSION を1つ上げる（古いファイルが残らないように）
const VERSION='bou-no-meishu-v27';
const FILES=['./','index.html','style.css','game.js','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))));self.clients.claim();});
// まずネットから取り、つながらないときは保存しておいた物を使う
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
  e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();if(new URL(e.request.url).origin===location.origin)caches.open(VERSION).then(c=>c.put(e.request,cp));return r;}).catch(()=>caches.match(e.request)));});
