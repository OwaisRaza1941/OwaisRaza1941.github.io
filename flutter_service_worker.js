'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2bb1c9bd22623a939483d6e9056aff76",
".git/config": "c1d9e35c2bab807444a1cfc0b22a918c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7ae9b32f58396ae2cb6f531691ed358a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "17ca61cc1f9361d87c9a1f90f45cc8f5",
".git/logs/refs/heads/master": "17ca61cc1f9361d87c9a1f90f45cc8f5",
".git/logs/refs/remotes/origin/master": "aba35bd5f96072f13dbeebc7d3bd4773",
".git/objects/05/d19717bae16d235d779484507e7687de9b14ba": "bc8531b76c8cb246ad614e902e6ab5b6",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/0b/d9754a9934bb0b1b0d28be047cb08ed58596cd": "757943eed3551b47b2a28388d539192b",
".git/objects/13/b500e685004605f94371304931270ca8874ff4": "6a1827d09021f8958b33b453f8ed8bd7",
".git/objects/15/59957a4e96af663c7c290e0fdef8506ca65d55": "442e755ac45ca82711254f2f5fb3dc53",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/21/6717d4773f177a2d2742e0c3ae2de783c9e2b2": "e970e6e3181d5f657d916395ac25b1ca",
".git/objects/23/4a4eac1ad34e07abee57f7373f47b6fc4def3e": "76c24df9165fa716dbad917c9d544bf7",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/35/3f923c6a46d81268d5c92b75bdcc4eb4ee2dd8": "fbe08b66ac1dab5ea9e597e702304e8a",
".git/objects/36/0c735dea63f15142da7b38f4f4a138b1ff2a63": "6da1231de7f3999fd82ea605a1333821",
".git/objects/42/d7cce1173be38c79b887fac1d98f81d7e37597": "1ab82920498974887ea348fd33143256",
".git/objects/46/2321d6bd16d9235e45ab66019a347e919668a9": "a70ca66600d718e07fdb8478e6b0b881",
".git/objects/47/279765259771108bfde867be9fb34aa0f849e7": "fbb4c6c973dc76a98bfb400e853939a7",
".git/objects/47/66c13c0754e37d58053bceabd6234ea7c5a7cf": "9cbda7ac9b240c01ba787a094c0c0ef9",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/13934d750dcf9621f913aa2bd76311c4d7a427": "66a9a96b14a4125862664ceab04b8bbd",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/79f52349a19c5f35d3ace6d1b65d1c2c9f11ef": "ac2e7d28b55443a2eae0db86c3cbaa12",
".git/objects/5d/c394f187ab30680dbe1a71b624c283e4ba3e67": "1d2b24c4c1190fb8f151195d5c9c4b6d",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/b9ed4b83ba4bdeefc59bc0b8e23d18878029a4": "8e1cdfaa1b1062742d8999e67e2fec01",
".git/objects/66/97bd0ed7dc817c1bf25344e14a0c76473231ba": "872d203986e62241ca84b1ba8f9b0564",
".git/objects/66/ca9930788c3d99a0b75d722fbef99e3617ef5b": "0e8f3b2257c3aedf10f51559760bcbeb",
".git/objects/69/39157ab2f7a7d1c2a2407f4c17cd2a41770c1e": "4f08e76dc1f5c26e03cd1cdee1960310",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/ccd851a31aaa0651975525d68a31b3629c3093": "b0aff7fb852ddfa1fbfde989aa0a75a4",
".git/objects/77/93c7aa12b0dee668dc86536a940d635d0a351a": "d71472df5179152c2e03bb7bb5884f71",
".git/objects/78/784dfcf442678fb957c96df46ede8a20ccedb5": "3a278c07836fc87b87a84ffc143dbf48",
".git/objects/7b/cafa52171435c693fa5fc0810f39b8e58a7c52": "993d5294965634f6eba30331d75a46a5",
".git/objects/7f/6a04e9cd9f2c851776054c7472c9a4bd6125e7": "132d4bf8f765489bf6afe5a88530d163",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/53d37103667fde2a9d0cc7a43589684e52abba": "2ea1edfd3c75c20f55c67dbb27f76a55",
".git/objects/93/2c5c24ed79294cb889d6b93325b438525a8a60": "6b2b234b0719b8037e8c827173a8d44c",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/b7/42108f3822b8bc5f7a4f06867910360aae76e9": "d7840386425c426dcdefb499ccc07ef5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/be/6a3aab81fa405bfb91eae7d5382d9e7c469dca": "2a6aa91145bce22f3d00da146435be87",
".git/objects/c6/d10808377c3e7d510810d682fcd5d54aa74e7a": "14474bff4149aa632e47efb08715c27c",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cb/e2b3ee42267ff17f6d76af687bcba458c9ee94": "f309503a9ab449ef8783fa500907da9c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/18b6388e50ac8a0850b134bd923268b5d19bc7": "0b39821e0ef7be656ea0795d3849855d",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e6/7ea95b59a3a9e8a027b8178b1c103d27a0bf79": "e9d01679f2fa526da60052629d785428",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/ea48ee8ae786f26949b83d1f83cbd1f1113250": "3ea6c7db98b6e7054ee3f2a7748f92a9",
".git/objects/ef/34496c5decd1fba891b47ce96b8e4ee00bb185": "3a2534d54886226804cae22af25589e5",
".git/objects/ef/c2ab09f8ebd977e05c65675eef29f95a3dccef": "30232ca562a948ce52a1fb4b0fc38d2a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/d399e05b1c9ac1764102c99019c44515df7631": "34317242159c6871460eb0b9f4ccfdcc",
".git/objects/fe/1686533384ff5f7da8a8ec707acb5c64588aa5": "b54e49f137324eb58ff927c238f1b459",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/ea983906a2e936e94f48e46f59712fa8bdc614": "f32e251e6b0714c3940ff786aebeda54",
".git/refs/heads/master": "d33c222b0e7fb4b058eb5bacc75ed6ef",
".git/refs/remotes/origin/master": "d33c222b0e7fb4b058eb5bacc75ed6ef",
"assets/AssetManifest.bin": "935a6edec77fef7c2bdc1d3f2aae2206",
"assets/AssetManifest.bin.json": "fc05fe40ee6b78bfe975ccd958d59f05",
"assets/AssetManifest.json": "f9be3ba59514b6fc7cfd4d277e62d383",
"assets/assets/images/owais_pic1.png": "b2dfda7df779c3ddd211dd58ecc522ca",
"assets/assets/images/owais_pic2.png": "e960add49d6edf3935346d92a939ec58",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "dc9670a262729805af3070bd178d82dc",
"assets/NOTICES": "5d61754793bc06f98d79bc86369e36ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "37a5baeb8ea52dbfa2abea3042896b37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "32a15f7713f52ace70814eec9f775ec2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "482b592d256c5b2860ac97c2ddf9806a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "a7b61acf0dd3a677ba2ce24136cf8252",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
