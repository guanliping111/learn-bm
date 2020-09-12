code -> code

babel如何转换 import
import { zip } from 'loader'

babel解析转换为 ast树 -> 把对应的节点修改 -> 再用babel转换回来

1. code -> reg 处理字符串 -> code
2. code -> AST(抽象语法树) -> 树 CRUD -> 另外一课AST -> 另外一份code

什么是CRUD? 
    主要被用在描述软件系统中DataBase或者持久层的基本操作功能。
    CRUD是指在做计算处理时的增加(Create)、读取查询(Retrieve)、更新(Update)和删除(Delete)几个单词的首字母简

HTML  -> AST -> appendChild -> 另外一课AST -> 渲染

- js词法分析
  js代码由什么组成 -> 引擎关心
  1. whiteSpace
  2. 换行
  3. comment
  4. token
    - 数字字面量  numberLiteral
    - 字符串字面量 stringLiteral
    - 符号 [] {} ()
    - 变量名 indentify  var c = a + b

## 什么是babel
babel是一个js编译器
语法转换 ->  添加缺失特性(Polyfill) -> 源码转换

- babel的插件
 babel解析转换为 ast 树 -> 把对应的节点修改 -> 再用babel转换回来

 js文件是一个字符串，经过状态机进行词法分析，然后语法分析，解析成AST抽象语法树。
