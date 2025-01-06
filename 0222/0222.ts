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

function countNodes(root: TreeNode | null): number {
    if (!root) { return 0; }

    const depth = getDepth(root);

    let minNodes = Math.pow(2, depth);
    let maxNodes = Math.pow(2, depth + 1) - 1;

    for (let i = maxNodes; i >= minNodes; i--) {
        if (canFollowPath(root, i)) {
            return i;
        }
    }

    return 0;
};


function canFollowPath(node: TreeNode | null, n: number): boolean {
    const steps: string[] = n.toString(2).split('');
    let nodePtr = node;

    for (let i = 1; i < steps.length; i++) {
        if (steps[i] === '1') {
            nodePtr = nodePtr.right;
        } else {
            nodePtr = nodePtr.left;
        }

        if (!nodePtr) {
            return false;
        }
    }

    return true;
}

function getDepth(node: TreeNode | null): number {
    let nodePtr = node;
    let depth = 0;

    while (nodePtr && nodePtr.left) {
        nodePtr = nodePtr.left;
        depth++;
    }

    return depth;
}
