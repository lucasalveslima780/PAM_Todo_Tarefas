const CACHE_NAME = 'jogo-da-velha-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

// Essa parte esta definindo como o Service work vai se comportar durante a instalação. 
// Também vai verificar o arquivo declarado com o cache e criar ele na nossa aplicação e retornar. 
self.addEventListener('install', event => {
  console.log('[ServiceWorker] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[ServiceWorker] Cache criado');
        return cache.addAll(FILES_TO_CACHE);
      })
  );
  self.skipWaiting();
});

// Basicamente vai aguardar a nova instalção do Service Work e quando acontecer compara o cache existente com o atual e remove/sobrescreve o antigo.
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removendo cache antigo', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim(); //assumir controle imediato das páginas já abertas.
});

// Aqui ele tenta interromper o com fetch a requisição da página buscando as informações no cache. 
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});