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

function getMinimumDifference(root: TreeNode | null): number {
    const values: Set<number> = new Set<number>();

    const nodes: TreeNode[] = [root];
    while (nodes.length > 0) {
        const node = nodes.shift();
        values.add(node.val);
        if (node.left) {
            nodes.push(node.left);
        }
        if (node.right) {
            nodes.push(node.right);
        }
    }

    const valueArray = Array.from(values).sort((a, b) => a - b);
    let minDifference = Infinity;
    for (let i = 0; i < valueArray.length - 1; i++) {
        minDifference = Math.min(minDifference, valueArray[i+1] - valueArray[i]);
    }

    return minDifference;
};
