## 2020-5-15
## Content-Type:text/plain
提交给后端的数据 纯文本
## 编码
### text/plain
### application/x-www-form-urlencoded
### multipart/form-data
 ```js
 -----------------------------205579936434786223734260171678
Content-Disposition: form-data; name="name"

123
-----------------------------205579936434786223734260171678
Content-Disposition: form-data; name="file"; filename="test.txt"
Content-Type: text/plain

123456789   //文件内容

-----------------------------205579936434786223734260171678--
 ```

 后端处理文件上传
 - 分隔符分割
 - 得到分割之后的每一块 文件内容，可以调用fs.write()保存文件了
 - 完成