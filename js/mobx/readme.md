## mobx原理
重点两个api
1. autorun() 更新 自动运行
2. observerable 观察者

## Proxy
    Proxy(target, handler)
    1. target:目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
    2. handler:用来自定义代理对象的各种可代理操作
    3. handler.get():拦截对象的读取属性操作
    4. handler.set():拦截设置属性值的操作

## 跨域
- CORS:跨域资源共享
https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS

    请求被发送的两次(有些情况)
    什么时候需要预警请求
        “需预检的请求”要求必须首先使用 OPTIONS 方法发起一个预检请求到服务器，以获知服务器是否允许该实际请求。
        "预检请求“的使用，可以避免跨域请求对服务器的用户数据产生未预期的影响。
    1：preFlight 预警请求 options
    2：正式的请求 POST /API/XXX