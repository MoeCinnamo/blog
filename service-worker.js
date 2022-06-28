/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ec71a752be3b4f6c3e8cf6bf563fe7f9"
  },
  {
    "url": "51.la/perf/js-sdk-perf.esm.min.js",
    "revision": "bc04abf565d6819da53a08ae6bc2cb2c"
  },
  {
    "url": "51.la/v6/event/js-sdk-event.min.js",
    "revision": "b4582be636799ecd228ab6d7b25f5db1"
  },
  {
    "url": "51.la/v6/js-sdk-pro.min.js",
    "revision": "5c56e451cd5b73bbe0f663daba14b059"
  },
  {
    "url": "about.html",
    "revision": "2972c91845bd8a99af328e18832471ca"
  },
  {
    "url": "archives/2022/blog-system-updated.html",
    "revision": "3a930c16f8a43366ddc4dc8d08342e20"
  },
  {
    "url": "archives/2022/bt-cloudreve-deploy-course.html",
    "revision": "c85611acaafadfad4aa05efdac8432f9"
  },
  {
    "url": "archives/2022/centos-linux-8-to-centos-stream-8.html",
    "revision": "aa2da50dfe9bbb56ff5434403dedbf86"
  },
  {
    "url": "archives/2022/CentOS7-edit-DNS.html",
    "revision": "95a466b6e495acb8fd86880dff421dd2"
  },
  {
    "url": "archives/2022/high-quality-picture-bed-recommended.html",
    "revision": "5f33e0cf290ec09ffe6a496a1ff15884"
  },
  {
    "url": "archives/2022/linux-disk-auto-mount.html",
    "revision": "b0cccc1b85eaea1df5e665382e6d70be"
  },
  {
    "url": "archives/2022/Microsoft-E5-free.html",
    "revision": "5631a3dec8d4f7364338bad0ef774ffb"
  },
  {
    "url": "archives/2022/nginx-reverse-proxy-error-pages.html",
    "revision": "770be6ad036cf0e997a812c8591bba58"
  },
  {
    "url": "archives/2022/Non-M1-front-desk-dispatcher.html",
    "revision": "8986d4258cd82d0b5a4b54a082d3e7e2"
  },
  {
    "url": "archives/2022/share-ikuai-to-visit-github.html",
    "revision": "39b41727649809a761e5d03cd8c90690"
  },
  {
    "url": "archives/2022/the-moral-bottom-line.html",
    "revision": "1599a17926d1a798bd2a5464e10c72c8"
  },
  {
    "url": "archives/2022/vuepress-blog-beautify.html",
    "revision": "a1ba0cf0e70d9f12c58ed35ed7ff2bf9"
  },
  {
    "url": "archives/2022/wisdom-in-it.html",
    "revision": "de931031ed730afc3de821b0971f3bc1"
  },
  {
    "url": "assets/css/0.styles.6047b277.css",
    "revision": "db29d25f80d1cc8b1e79335079977fec"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.74e426aa.js",
    "revision": "c1e1e57c3a7480f247c302643a8a6f4c"
  },
  {
    "url": "assets/js/10.1924dc3d.js",
    "revision": "fb7ccf86d83dbcd5af59b45ce3d17ead"
  },
  {
    "url": "assets/js/11.b620d916.js",
    "revision": "99eb67724d32a6ed4f184b89fb516691"
  },
  {
    "url": "assets/js/12.28cea132.js",
    "revision": "6e41a4927731e80bb38ed6364f1093fe"
  },
  {
    "url": "assets/js/13.2760aeae.js",
    "revision": "70d63e71532a5ae2ee73050e04890f33"
  },
  {
    "url": "assets/js/14.51f86655.js",
    "revision": "2e374f201d768d76f655f5a134e7595a"
  },
  {
    "url": "assets/js/15.0ecd2169.js",
    "revision": "68e6d131e0bb7464e44e195066288fee"
  },
  {
    "url": "assets/js/16.e9717aed.js",
    "revision": "c45c9c289b85079e526577576ee1fe20"
  },
  {
    "url": "assets/js/17.836f0354.js",
    "revision": "8beba262ff67b27ca290de89a66eff06"
  },
  {
    "url": "assets/js/18.50530671.js",
    "revision": "a081a49768780f4c4f2e23b8ee8e575a"
  },
  {
    "url": "assets/js/19.3e1edf67.js",
    "revision": "7851fa82c88d29bbd5ea6e71802e29b4"
  },
  {
    "url": "assets/js/20.0adaf932.js",
    "revision": "2a8a767e93ea29449a1c4018997463e4"
  },
  {
    "url": "assets/js/21.e59a4f9d.js",
    "revision": "5273881a49b6eaa75eac863c99775da5"
  },
  {
    "url": "assets/js/22.2ea16a7c.js",
    "revision": "70f3110f2d6d8d665f5ccfecf77d7aea"
  },
  {
    "url": "assets/js/23.540d9baa.js",
    "revision": "a3d3ae85b41c7f1fa36ea93c119b6b81"
  },
  {
    "url": "assets/js/24.e35f7cbd.js",
    "revision": "5293a1c596c112d3c9146f6af871d57c"
  },
  {
    "url": "assets/js/25.8c7c84de.js",
    "revision": "bcae0da7f6c84c74e284e7bf9e278106"
  },
  {
    "url": "assets/js/26.ed7bedfc.js",
    "revision": "2519353e4ee4e42d09b2d054a0ac84e7"
  },
  {
    "url": "assets/js/27.470a5081.js",
    "revision": "58762b8fe5af78bbbb45492a081bd3d1"
  },
  {
    "url": "assets/js/28.1e1a1c0f.js",
    "revision": "f6fa0a7466385eba0065279191b84e60"
  },
  {
    "url": "assets/js/29.9be37c59.js",
    "revision": "96dfd592864a08c5f1a645574941ae6b"
  },
  {
    "url": "assets/js/3.49b07d8d.js",
    "revision": "7daeddb019355ff5fa35a5055b11c181"
  },
  {
    "url": "assets/js/30.525c1803.js",
    "revision": "4d3896efeccd8e75c6cfd53860fdab21"
  },
  {
    "url": "assets/js/31.d0fc646c.js",
    "revision": "b27ad12bc695a029d098f9eebb2b958e"
  },
  {
    "url": "assets/js/4.67929245.js",
    "revision": "b4dc5cb79832ac8d5356eebedf0a7b5c"
  },
  {
    "url": "assets/js/5.6ed706f0.js",
    "revision": "a50f61879a1dc0b92326cced2f53da37"
  },
  {
    "url": "assets/js/6.11177aed.js",
    "revision": "256656b265c22a631f10488603dd8373"
  },
  {
    "url": "assets/js/7.c27fdce5.js",
    "revision": "4811663903d358828aa61dcd3835419e"
  },
  {
    "url": "assets/js/8.3a67fc43.js",
    "revision": "caf978797de308581c1235cc45cc27c7"
  },
  {
    "url": "assets/js/9.6dc99adc.js",
    "revision": "c9253c9a0fe27b80bc093089d2c4ac13"
  },
  {
    "url": "assets/js/app.89e179b4.js",
    "revision": "a38e90053bd4993c9e53aa3921c8c833"
  },
  {
    "url": "categories/index.html",
    "revision": "56c75f6253bad413cde5873040d0a0bc"
  },
  {
    "url": "categories/博客/index.html",
    "revision": "96c5ede4a3ddf90c5c9d275bfc7f9679"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "40e2f379e2ce69590a78c861cc0ca627"
  },
  {
    "url": "categories/折腾/index.html",
    "revision": "8e7fdbbb7bdcf1a8d75b41a043e3d903"
  },
  {
    "url": "categories/新闻/index.html",
    "revision": "df39832a5ca33cad1a3a5829dbf25701"
  },
  {
    "url": "index.html",
    "revision": "6a4cb6654fc146306b157c6466927bb7"
  },
  {
    "url": "links.html",
    "revision": "2323fb0103588490cdc9ca8e3128cb2c"
  },
  {
    "url": "message.html",
    "revision": "9609d70aa6329ca7d6eee81058a30e79"
  },
  {
    "url": "say.html",
    "revision": "30a6d71eaeccca6ec98afbf22d00363e"
  },
  {
    "url": "tag/Apple/index.html",
    "revision": "c38dad724f6d5816ce1af2aa13d995a5"
  },
  {
    "url": "tag/iKuai/index.html",
    "revision": "647baa280a179f733b287ed366da1e84"
  },
  {
    "url": "tag/index.html",
    "revision": "8979df4b4ee642451159facdb9e23c12"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "c7f4108fa164fbfbc1bd49ee0b92ee05"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "4157d7be64518f63133f6edd1cee1826"
  },
  {
    "url": "tag/免费/index.html",
    "revision": "f0dcb3fa8ea232c7a7b8191e649c3b81"
  },
  {
    "url": "tag/升级/index.html",
    "revision": "478c9bb87c40169dad1070895bae4eca"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "8b5338165f942b579ef210090bc31bba"
  },
  {
    "url": "tag/图床/index.html",
    "revision": "91625aafeaf5eeeb88e4f1d438f5dc74"
  },
  {
    "url": "tag/社会/index.html",
    "revision": "904b24d554ba7cadb1c533e04f281146"
  },
  {
    "url": "tag/系统/index.html",
    "revision": "3e7e556c0d414e215b18e0bc81a70ae4"
  },
  {
    "url": "tag/网盘/index.html",
    "revision": "69c57b120207c48f0519e6905bb564ba"
  },
  {
    "url": "tag/美化/index.html",
    "revision": "561addff90ff79885d49957cc164f9e7"
  },
  {
    "url": "timeline/index.html",
    "revision": "7c4bd58b2f8f49115bcdf80da024183f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
