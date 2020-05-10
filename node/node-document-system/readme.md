## 2020-5-10
## Node.js 文件系统 
   https://www.runoob.com/nodejs/nodejs-fs.html
- Node.js 
  - 提供一组类似 UNIX（POSIX）标准的文件操作API。 
  - 导入文件系统模块(fs)语法如下所示：var fs = require("fs")
   
- 取文件内容的函数
 1. 异步的 fs.readFile() 
 2. 异步的 fs.readFile() 

- 打开文件
 异步模式下: fs.open(path, flags[, mode], callback)

- 获取文件信息
 异步模式获取: fs.stat(path, callback)

- 写入文件
  异步模式下: fs.writeFile(file, data[, options], callback)

-读取文件
  fs.read(fd, buffer, offset, length, position, callback)
  fd: 通过 fs.open() 方法