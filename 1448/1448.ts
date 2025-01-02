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

function goodNodes(root: TreeNode | null): number {
    if (!root) { return 0; }

    return 1 + traverse(root.left, [root.val]) + traverse(root.right, [root.val]);
};


function traverse(node: TreeNode | null, pathValues: number[]): number {
    if (!node) { return 0; }

    console.log(`is ${node.val} the max value in path ${pathValues}? ${(node.val >= Math.max(...pathValues)) ? 'yes' : 'no'}`);
    const thisNodeIsGood = (node.val >= Math.max(...pathValues)) ? 1 : 0;

    if (!node.left && !node.right) {
        return thisNodeIsGood;
    }

    return thisNodeIsGood + traverse(node.left, pathValues.concat([node.val])) + traverse(node.right, pathValues.concat([node.val]));
}
