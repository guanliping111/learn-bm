## 14. 最长公共前缀
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。

示例 1:
输入: ["flower","flow","flight"]
输出: "fl"

示例 2:
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。

## 正则表达式
1. exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null
 - 在设置了 global 或 sticky 标志位的情况下（如 /foo/g or /foo/y），
    JavaScript RegExp 对象是有状态的。
    他们会将上次成功匹配后的位置记录在 lastIndex 属性中。
     lastIndex	下一次匹配开始的位置。
    使用此特性，exec() 可用来对单个字符串中的多次匹配结果进行逐条的遍历（包括捕获到的匹配），
    而相比之下， String.prototype.match() 只会返回匹配到的结果。

    如果你只是为了判断是否匹配（true或 false），
    可以使用 RegExp.test() 方法，或者 String.search() 方法。

  - exec() 方法还返回两个属性。
  index 匹配到的字符位于原始字符串的基于0的索引值
  input 原始字符串

  

2. replace()
   replace() 方法返回一个由替换值替换一些或所有匹配的模式后的新字符串。
   模式可以是一个字符串或者一个正则表达式，
   替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。

    - str.replace(regexp|substr, newSubStr|function)
    eg:  replace( reg,(...arg) => {}) 
    - 参数：第二个参数 将替换 第一个参数 字符串
      1. reg 匹配到了什么 表达式
      2. (...arg)  拿出来的数据 数组
    - 返回值：替换后生成的新字符串。

## 匹配位置
^: 首
$: 尾
(?=p): 正向先行断言
(?!p): 负向先行断言
(?<=p): p后面
(?<!)
