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

function sumNumbers(root: TreeNode | null): number {
    let sum = 0;

    dfs(root, []);

    function dfs(node: TreeNode | null, values: number[]) {
        if (!node) { return; }

        if (!node.left && !node.right) {
            const num = parseInt(values.concat(node.val).join(''));
            sum += num;
        }

        dfs(node.left, values.concat(node.val));

        dfs(node.right, values.concat(node.val));
    }

    return sum;
};
