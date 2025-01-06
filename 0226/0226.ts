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

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) { return root; }

    let nodes: TreeNode[] = [root];

    while (nodes.length > 0) {
        const node = nodes.shift();
        [node.left, node.right] = [node.right, node.left];
        if (node.left) { nodes.push(node.left); }
        if (node.right) { nodes.push(node.right); }
    }

    return root;
};
