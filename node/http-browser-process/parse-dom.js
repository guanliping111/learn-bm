let htmlStr = `<html>
  <head></head>
  <body>
    <div></div>
  </body>
</html>`
// 可以：KMP 正则 原理都是 FSM
// 正则 split(): 完整的 html 
// token: html tag

let currentToken = null;
//栈
let stack = [ {type: 'document', children: []} ]
parse(htmlStr);
console.log(JSON.stringify(stack[0], null, 2));
function emit(token) {
  //1：遇到开始标签入栈，同时把这个标签最作为栈顶元素的字节点
  //2：遇到结束标签就 出栈
  let top = stack[stack.length - 1];
  if(token.type === 'startTag') {//开始标签处理配对
    // push  pop 
    let element = {
      type: 'element',
      children: [],
      attributes: [],
      tagName: token.tagName
    }
    stack.push(element);
    // 作为栈顶的元素子节点，为了生成树
    // if (!top.children) top.children = [];
    top.children.push(element);
  }else if(token.type === 'endTag') {//结束标签
    stack.pop();
  }
  currentToken = null;
}
function parse(htmlString) {
  state = start;
  for (let c of htmlString) {
    state = state(c);
  }
}
function start(c) {
  if (c === '<') {
    return tagOpen
  } else {
    return start
  }
}
function tagOpen(c) {
  // <html>: html tag 由 a-zA-Z  div span p 
  // </html>
  //  h t m l
  // console.log(c);
  if (c === '/') {
    return endTagOpen
  } else if (c.match(/[a-zA-Z]/)) {
    currentToken = {
      type: 'startTag',
      tagName: c
    }
    return tagName
  }
}
function tagName(c) {
  if (c.match(/[a-zA-Z]/)) {
    currentToken.tagName += c;
    return tagName
  } else if (c === '>') {
    // tag 拼接结束
    emit(currentToken);
    return start
  }
}
function endTagOpen(c) {
  if (c.match(/[a-zA-Z]/)) {
    currentToken = {
      type: 'endTag',
      tagName: c
    }
    return tagName;
  }
}