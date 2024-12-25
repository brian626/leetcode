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

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    let success = false;

    dfs(root);

    return success;

    function dfs(node: TreeNode | null, result: number[] = []): boolean {
        console.log(`visiting node ${node?.val}`);
        if (node?.left || node?.right) {
            result.push(node.val);
            if (node?.left) {
                dfs(node.left, result);
            }
            if (node?.right) {
                dfs(node.right, result);
            }
            result.pop();
        } else {
            result.push(node?.val);
            console.log(`reached a leaf, path was ${result.join(' -> ')}, sum is ${result.reduce((a, b) => a + b, 0)}`);
            if (result.reduce((a, b) => a + b, 0) === targetSum) {
                console.log(`GREAT SUCCESS`);
                success = true;
            }
            result.pop();
        }

        return result.reduce((a, b) => a + b, 0) === targetSum;
    }
};

[1,-2,-3,1,3,-2,null,-1]

const root = new TreeNode(1);
root.left = new TreeNode(-2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.left.left.left = new TreeNode(-1);

root.right = new TreeNode(-3);
root.right.left = new TreeNode(-2);

console.log(hasPathSum(root, 3));
