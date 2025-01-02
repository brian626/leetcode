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

function longestZigZag(root: TreeNode | null): number {
    let nodePtrs = [root];
    let maxLength = 0;

    while (nodePtrs.length > 0) {
        const nodePtr = nodePtrs.pop();

        if (nodePtr?.left) {
            maxLength = Math.max(maxLength, findMaxLength(nodePtr.left, 'L', 1));
            nodePtrs.push(nodePtr.left);
        }
        if (nodePtr?.right) {
            maxLength = Math.max(maxLength, findMaxLength(nodePtr.right, 'R', 1));
            nodePtrs.push(nodePtr.right);
        }
    }

    return maxLength;
};


function findMaxLength(node: TreeNode | null, direction: string, nodesVisited: number): number {
    if (!node) {
        return nodesVisited - 1;
    }

    if (direction === 'L') {
        return findMaxLength(node.right, 'R', nodesVisited + 1);
    } else {
        return findMaxLength(node.left, 'L', nodesVisited + 1);
    }
}
