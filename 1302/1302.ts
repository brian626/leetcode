// 1302. Deepest Leaves Sum

// Given the root of a binary tree, return the sum of values of its deepest leaves.

// Example 1:


// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15

// Example 2:

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19


// Constraints:

// The number of nodes in the tree is in the range [1, 10^4].
// 1 <= Node.val <= 100

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

function deepestLeavesSum(root: TreeNode | null): number {
    if (root === null) { return 0; }

    let lastLevelSum = 0;
    let thisLevelQueue: TreeNode[] = [root];
    let nextLevelQueue: TreeNode[] = [];
    while (true) {
        while (thisLevelQueue.length > 0) {
            let thisLevelNode: TreeNode = thisLevelQueue.pop();
            lastLevelSum += thisLevelNode.val;
            if (thisLevelNode.left) { nextLevelQueue.push(thisLevelNode.left); }
            if (thisLevelNode.right) { nextLevelQueue.push(thisLevelNode.right); }
        }

        if (nextLevelQueue.length === 0) {
            break;
        }
        else {
            lastLevelSum = 0;
            thisLevelQueue = Array.from(nextLevelQueue);
            nextLevelQueue.length = 0;
        }
    }

    return lastLevelSum;
};
