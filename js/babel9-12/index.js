const babel = require('@babel/core');
const t = require('babel-types');
const code = `import { zip } from 'loader'`;
//js代码 1. module 2. 脚本

// import zip from 'lodash/zip';  // importDefault
// import zip as XX from XX       // importName 自定义名字
//实现babel插件
const plugin = {
    //path AST import 的节点
    ImportDeclaration(path) {
        // import React, {useState} from 'react';
        //判断是否是默认导入
        if(!t.isImportDefaultSpecifier(path.node.specifiers[0])) {
            console.log(path.node.specifiers[0].imported.name);
            let indetify = t.identifier('zip');
            let descs = [t.importDefaultSpecifier(indetify)]; //创建 默认导入什么 import zip
            let str = t.stringLiteral('lodash/zip'); //从哪导入 from
            let importStatement = t.importDeclaration(descs, str); //结合
            path.replaceWithMultiple([importStatement]); //替换
        }   
    }
}

const res = babel.transform(code,{
    //插件
    plugins: [
        {
            visitor:  plugin
        } 
    ]
})
//转换成功
console.log(res);// code: 'import zip from "lodash/zip";' 