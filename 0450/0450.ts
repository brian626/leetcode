/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) { return root; }

    if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else {
        if (root.left === null) {
            return root.right;
        }

        if (root.right === null) {
            return root.left;
        }

        const descendent = getDescendent(root);
        root.val = descendent.val;
        root.right = deleteNode(root.right, descendent.val);
    }

    return root;
};


function getDescendent(node: TreeNode | null): TreeNode | null {
    node = node.right;

    while (node !== null && node.left !== null) {
        node = node.left;
    }

    return node;
}
