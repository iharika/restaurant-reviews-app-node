// console.log('sw registered!!!!!');


// self.addEventListener('install', function (event) {
//     event.waitUntil(updateStaticCache());

// });

// var staticCacheName = 'static';
// var version = 'v2::';

// function updateStaticCache() {
//     return caches.open(version + staticCacheName)
//         .then(function (cache) {
//             console.log('cache created with name =' + cache);
//             return cache.addAll([
//                 '/css/styles.css',
//                 '/data/restaurants.json',
//                 '/img/',
//                 '/js/dbhelper.js',
//                 '/js/main.js',
//                 '/js/restaurant_info.js',
//                 '/serviceworker.js',
//                 '/index.html',
//                 '/restaurant.html',
//                 '/error_page.html',
//                 '/',
//                 'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css'
//             ]);
//         });
// };


// self.addEventListener('activate', function (event) {
//     event.waitUntil(
//         caches.keys()
//         .then(function (keys) {
//             return Promise.all(keys
//                 .filter(function (key) {
//                     return key.indexOf(version) !== 0;
//                 })
//                 .map(function (key) {
//                     console.log('key=' + key);
//                     return caches.delete(key);
//                 })
//             );
//         })
//     );
// });


// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.match(event.request).then(function (response) {
//             if (response) {
//                 console.log('response=' + response);
//                 return response;
//             }
//             console.log('event request url=' + event.request.url);
//             // return fetch(event.request);
//             return fetch(event.request).then(function (response) {
//                 return response;
//             }).catch(function (error) {
//                 console.error('Fetching failed:', error);
//                 return caches.match('/error_page.html');

//             });
//         })
//     );
// });
