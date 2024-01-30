class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

const getHeight = function(root) {
    if (root === null) {
        return 0;
    }
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
};

const getDepth = function(root, nodeVal, depth = 0) {
    if (root === null) {
        return -1;
    }
    if (root.val === nodeVal) {
        return depth;
    }
    const leftDepth = getDepth(root.left, nodeVal, depth + 1);
    const rightDepth = getDepth(root.right, nodeVal, depth + 1);
    return Math.max(leftDepth, rightDepth);
};

// Example usage:
// Create a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log("Height of the tree:", getHeight(root)); // Output: 3
console.log("Depth of node 5:", getDepth(root, 5)); // Output: 2