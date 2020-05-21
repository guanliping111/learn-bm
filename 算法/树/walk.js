// function TreeNode(val) {
//     this.left = this.right = null;
//      }
var preorderTraversal = function(root) {
    let arr = [];
    function helper(node) {//递归
        if(node) {
            let val = node.val;//拿到根节点的值
            arr.push(val);
            //左子树： 根 左 右
            helper(node.left);
            //右子树：根 左 右
            helper(node.right);
        }  
    }
    helper(root);
    return arr;
};  