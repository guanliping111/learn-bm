## 2020-5-10
## Node.js 文件系统 
   https://www.runoob.com/nodejs/nodejs-fs.html
- Node.js 
  - 提供一组类似 UNIX（POSIX）标准的文件操作API。 
  - 导入文件系统模块(fs)语法如下所示：var fs = require("fs")
   
- 取文件内容的函数
 1. 异步的 fs.readFile() 
 2. 同步的 fs.readFileSync() 

- 打开文件
 异步模式下: fs.open(path, flags[, mode], callback)

- 获取文件信息
 异步模式获取: fs.stat(path, callback)

- 写入文件
  异步模式下: fs.writeFile(file, data[, options], callback)

- 读取文件
  fs.read(fd, buffer, offset, length, position, callback)
  fd: 通过 fs.open() 方法

- 关闭文件
  fs.close(fd, callback)

- 截取文件 
  fs.ftruncate(fd, len, callback)

- 删除文件
  fs.unlink(path, callback)

- 创建目录
  fs.mkdir(path[, options], callback)
  eg: fs.mkdir("/workspace/test/",function(err){}

  可以添加 recursive: true 参数，不管创建的目录 /tmp 和 /tmp/a 是否存在

- 读取目录
  fs.readdir(path, callback)

- 删除目录
  fs.rmdir(path, callback)