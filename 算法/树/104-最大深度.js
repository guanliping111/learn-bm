var maxDepth = function(root) {
    function depth(root, leftDepth,rightDepth) {
        if(!root) return 0;
        leftDepth = depth(root.left);
        rightDepth = depth(root.right);
        //节点的高度 = Max(左子树的高度，右子树的高度) + 1
        return Math.max(leftDepth, rightDepth) + 1;
    }
    return depth(root);
};