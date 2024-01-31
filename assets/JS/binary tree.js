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

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('calculateHeightBtn');
    const resultParagraph = document.getElementById('result');

    button.addEventListener('click', function() {
        const treeInput = document.getElementById('treeInput').value;
        const root = constructBinaryTree(treeInput);
        const height = treeHeight(root);
        resultParagraph.textContent = "Height of the binary tree: " + height;
    });

    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    function treeHeight(root) {
        if (root === null) {
            return 0;
        } else {
            const leftHeight = treeHeight(root.left);
            const rightHeight = treeHeight(root.right);
            return Math.max(leftHeight, rightHeight) + 1;
        }
    }

    function constructBinaryTree(input) {
        const values = input.split(',').map(value => parseInt(value.trim()));
        return constructTreeFromArray(values);
    }

    function constructTreeFromArray(values) {
        if (values.length === 0) {
            return null;
        }

        const root = new TreeNode(values[0]);
        const queue = [root];
        let i = 1;

        while (i < values.length) {
            const currentNode = queue.shift();

            const leftValue = values[i++];
            if (leftValue !== null && leftValue !== undefined) {
                currentNode.left = new TreeNode(leftValue);
                queue.push(currentNode.left);
            }

            const rightValue = values[i++];
            if (rightValue !== null && rightValue !== undefined) {
                currentNode.right = new TreeNode(rightValue);
                queue.push(currentNode.right);
            }
        }

        return root;
    }
});
