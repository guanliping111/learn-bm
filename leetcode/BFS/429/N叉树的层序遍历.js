var levelOrder = function(root) {
    if(root === null) return [];
    let queue = [ root ];
    let res = [];
    while(queue.length) {
       let rowNode = queue.splice(0);//出栈
       let cell = [];
       for (node of rowNode) {
           cell.push(node.val);
           if(node.children) {//判断是否有子节点children
               for (let child of node.children) {
                   queue.push(child);
               }
           }
       } 
       res.push(cell);
    }
    return res;
};