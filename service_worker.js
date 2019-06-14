// キャッシュファイルの指定
var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
	'/',
	'manifest.json',
	'/img/',
	'/css/
];

// インストール処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME).then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});
//有効化状態のイベント処理
self.addEventListener('activate', function(event) {  
  event.waitUntil(
     //現在のキャッシュをすべて取得する
    caches.keys().then(function(cache) {
      //新しいキャッシュ以外は削除する
      cache.map(function(name) {
        if(CACHE_NAME !== name) caches.delete(name);
      })
    })
    
  );
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});
