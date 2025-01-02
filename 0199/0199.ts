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

function rightSideView(root: TreeNode | null): number[] {
    return bfs(root);
};


function bfs(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }

    const result: number[] = [];
    const queue: {node: TreeNode, depth: number}[] = [];
    queue.push({node: root, depth: 0});

    while (queue.length > 0) {
        const {node, depth} = queue.shift();

        if (queue.length === 0 || depth !== queue[0].depth) {
            result.push(node.val);
        }

        if (node.left) {
            queue.push({node: node.left, depth: depth + 1});
        }

        if (node.right) {
            queue.push({node: node.right, depth: depth + 1});
        }
    }

    return result;
}
