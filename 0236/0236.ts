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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    const pNodePath = findPath(root, p.val, []);
    const qNodePath = findPath(root, q.val, []);

    console.log(pNodePath);
    console.log(qNodePath);


    let i = 0;
    let ancestorVal = -1;
    while (pNodePath[i] === qNodePath[i]) {
        ancestorVal = pNodePath[i];
        i++;
    }

    return findNode(root, ancestorVal);
};


function findNode(node: TreeNode | null, target: number): TreeNode | null {
    if (!node) {
        return null;
    }

    if (node.val === target) {
        return node;
    }

    const leftResult = findNode(node.left, target);
    if (leftResult) {
        return leftResult;
    }

    return findNode(node.right, target);
}


function findPath(node: TreeNode | null, target: number, path: number[]): number[] {
    if (!node) {
        return null;
    }

    if (node.val === target) {
        return path.concat(node.val);
    }

    const leftResult = findPath(node.left, target, path.concat([node.val]));
    if (leftResult) {
        return leftResult;
    }

    return findPath(node.right, target, path.concat([node.val]));
}
