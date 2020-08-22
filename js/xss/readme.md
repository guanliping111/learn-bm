##  2020-8-21
### 三种 XSS 攻击模式是
- 存储型 XSS 攻击、
- 反射型 XSS 攻击
- 基于 DOM 的 XSS 攻击。

共同点: 都需要往用户的页面中注入恶意脚本，然后再通过恶意脚本将用户数据上传到黑客的恶意服务器上。

不同点：注入的方式不一样，有通过服务器漏洞来进行注入的，还有在客户端直接注入的。
### 预防xss
- 转义 编码
    - html &lt; 小于号

### XSS 介绍
Cross Site Script: 跨站脚本攻击(为了区别于CSS简称为XSS)
XSS 攻击，一般是指攻击者通过在网页中注入恶意脚本，当用户浏览网页时，恶意脚本执行，控制用户浏览器行为的一种攻击方式。
### XSS 危害
窃取用户Cookie，获取用户隐私，盗取用户账号。
劫持用户（浏览器）会话，从而执行任意操作，例如进行非法转账、强制发表日志、发送电子邮件等。
强制弹出广告页面，刷流量等。
传播跨站脚本蠕虫，网页挂马等。
结合其他漏洞，如 CSRF 漏洞，实施进一步的攻击。

### 反射型 XSS
攻击者诱导用户访问一个带有恶意代码的 URL 后，服务器端接收数据后处理，然后把带有恶意代码的数据发送到浏览器端，浏览器端解析这段带有 XSS 代码的数据后当做脚本执行，最终完成 XSS 攻击。
因为这个过程就像一次反射，故称为反射型 XSS。