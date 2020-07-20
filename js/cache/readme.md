## cache
   https://www.cnblogs.com/ranyonsue/p/8918908.html
##  Cache-Control 
    通用消息头字段
- 强缓存  Cache-Control 相对时间
    是利用http的返回头中的Expires或者Cache-Control两个字段来控制的，用来表示资源的缓存时间。
    返回码是200
    cache-control的优先级更高。

- Expires 具体时间 在这之前是有效的 之后无效
    缓存过期时间，用来指定资源到期的时间，是服务器端的具体的时间点。
    也就是说，Expires=max-age + 请求时间，需要和Last-modified结合使用。
    Expires是Web服务器响应消息头字段，
    在响应http请求时告诉浏览器在过期时间前浏览器可以直接从浏览器缓存取数据，而无需再次请求

## MD5  加密
Etag生成：MD5
- Etag
    客户端请求一个页面（A）。 服务器返回页面A，并在给A加上一个ETag。 客户端展现该页面，并将页面连同ETag一起缓存。 客户再次请求页面A，并将上次请求时服务器返回的ETag一起传递给服务器。 服务器检查该ETag，并判断出该页面自上次客户端请求之后还未被修改，直接返回响应304（未修改——Not Modified）和一个空的响应体。