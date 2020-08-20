## cookie
name
value
Domain: cookie 生效的域名 baidu.com map.baidu.com
path:  /a/b  /c   /a  / 生效的路径
expires: 过期时间 默认就是当前 session 失效
httpOnly：cookie 只在http传输，js 无法操作的（cookie 可以有后端的 set-cookie 响应头设置， 也可以有前端 js document.cookie='' 设置）
secure：只在 https 的环境下面生效

cookie 只要符合 domain + path 的生效范围 就会随着 http请求发送
CSRF
sameSite：lax strict(cookie只在同域(juejin.im)生效) none

www.a.com 当前域名 cookie（a.com + /）
www.b.com 请求 www.a.com 

