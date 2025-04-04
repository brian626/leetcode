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

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
    return dfs(root)[1];
};


function dfs(node: TreeNode | null): [number, TreeNode | null] {
    if (!node) {
        return [0, null];
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (left[0] > right[0]) {
        return [left[0] + 1, left[1]];
    } else if (left[0] < right[0]) {
        return [right[0] + 1, right[1]];
    }

    return [left[0] + 1, node];
}
