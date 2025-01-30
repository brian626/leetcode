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

function maxLevelSum(root: TreeNode | null): number {
    return dfs(root);
};

function dfs(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    const result: number[] = [];
    const queue: { node: TreeNode, depth: number }[] = [];
    queue.push({ node: root, depth: 0 });

    let maxSum = Infinity * -1;
    let maxSumLevel = -1;

    while (queue.length > 0) {
        console.log(`queue: ${queue.map(x => x.node.val)}`);
        const { node, depth } = queue.shift();

        result.push(node.val);
        if (queue.length === 0 || depth !== queue[0].depth) {
            const levelSum = result.reduce((a, b) => a + b, 0);
            console.log(`Level ${depth + 1} sum = ${result.join(' + ')} = ${levelSum}`);
            if (levelSum > maxSum) {
                maxSum = levelSum;
                maxSumLevel = depth;
            }
            result.length = 0;
        }

        if (node.left) {
            queue.push({ node: node.left, depth: depth + 1 });
        }

        if (node.right) {
            queue.push({ node: node.right, depth: depth + 1 });
        }
    }

    return maxSumLevel + 1;
}
