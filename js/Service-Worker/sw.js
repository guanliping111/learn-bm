//serviceWorker 缓存
console.log(1)
//请求 -> sw.js(拦截 代理) -> 后端
//sw.js 监听请求  之前有没有请求过
//如果请求过 直接取缓存
//如果没有我们帮浏览器发出请求 得到内容后 我给浏览器
//同时 我在缓存一次
const CACHE_NAME = "APP" + 1;

this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                './',
                'js/bundle.js'
            ])
        })
    )
})