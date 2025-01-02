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

function maxDepth(root: TreeNode | null): number {
    if (!root) { return 0; }

    return Math.max(traverse(root.left, 1), traverse(root.right, 1));
};

function traverse(node: TreeNode | null, depth: number): number {
    if (!node) { return depth; }

    return Math.max(traverse(node.left, depth + 1), traverse(node.right, depth + 1));
}
