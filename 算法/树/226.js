var invertTree = function(root) {
    // if(root !== null)
    // [root.left,root.right] = [invertTree(root.right),invertTree(root.left)];
    // return root;

    function swap(node) {
        if(!node) return;
        [node.left, node.right] = [node.right, node.left];
        swap(node.left);
        swap(node.right);
    }
    swap(root);//开始调用
    return root;
};