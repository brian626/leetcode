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

function findSecondMinimumValue(root: TreeNode | null): number {
    const values: Set<number> = new Set<number>();

    dfs(root, values);

    return values.size > 1 ? Array.from(values).sort((a, b) => a - b)[1] : -1;
};


function dfs(node: TreeNode | null, values: Set<number>) {
    if (node) {
        values.add(node.val);
        dfs(node.left, values);
        dfs(node.right, values);
    }
}
