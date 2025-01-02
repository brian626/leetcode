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

function pathSum(root: TreeNode | null, targetSum: number): number {
    if (!root) { return 0; }

    const isRootGood = root.val === targetSum ? 1 : 0;

    return isRootGood + traverse(root.left, targetSum, [root.val]) + traverse(root.right, targetSum, [root.val]);
};


function traverse(node: TreeNode | null, targetSum: number, pathValues: number[]): number {
    if (!node) { return 0; }

    const fullPath = pathValues.concat([node.val]);
    let thisNodeIsGood = 0;
    for (let i = 0; i < fullPath.length; i++) {
        console.log(`does ${fullPath.slice(i).join(' + ')} add up to ${targetSum}? ${fullPath.slice(i).reduce((a, b) => a + b, 0) === targetSum ? 'yes' : 'no'}`);
        if (fullPath.slice(i).reduce((a, b) => a + b, 0) === targetSum) {
            thisNodeIsGood += 1;
        }
    }

    if (!node.left && !node.right) {
        return thisNodeIsGood;
    }

    return thisNodeIsGood + traverse(node.left, targetSum, pathValues.concat([node.val])) + traverse(node.right, targetSum, pathValues.concat([node.val]));
}
