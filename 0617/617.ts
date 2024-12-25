// 617. Merge Two Binary Trees

// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover the other, some nodes of the
// two trees are overlapped while the others are not. You need to merge the two
// trees into a new binary tree. The merge rule is that if two nodes overlap,
// then sum node values up as the new value of the merged node. Otherwise, the
// NOT null node will be used as the node of the new tree.

// Return the merged tree.

// Note: The merging process must start from the root nodes of both trees.


// Example 1:

// Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// Output: [3,4,5,5,4,null,7]

// Example 2:

// Input: root1 = [1], root2 = [1,2]
// Output: [2,2]


// Constraints:

// The number of nodes in both trees is in the range [0, 2000].
// -10^4 <= Node.val <= 10^4

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

function treeToArray(root: TreeNode): number[] {
    const treeNodeQueue: TreeNode[] = [];
    const treeValues: number[] = [];
    treeNodeQueue.push(root);
    while (treeNodeQueue.length > 0) {
        const currentNode = treeNodeQueue.shift();
        if (currentNode) {
            treeValues.push(currentNode.val);
            treeNodeQueue.push(currentNode.left);
            treeNodeQueue.push(currentNode.right);
        }
        else {
            treeValues.push(-1);
        }
    }

    return treeValues;
}

function insertNode(value: number, root: TreeNode) {
    let newNode = value === -1 ? null : new TreeNode(value);

    if (!root) {
        root = newNode;
    }
}

function arrayToTree(values: number[]): TreeNode | null {
    let root: TreeNode = null;

    while (values.length > 0) {
        insertNode(values.shift(), root);
    }

    return root;
}

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    // Convert each tree to an array using BFS, then sum the arrays
    const tree1Values = treeToArray(root1);
    const tree2Values = treeToArray(root2);

    let mergedTreeValues: number[] = [];

    for (let i = 0; i < tree1Values.length; i++) {
        if (tree1Values[i] != -1 && tree2Values[i] != -1) { mergedTreeValues.push(tree1Values[i] + tree2Values[i]); }
        else if (tree1Values[i] != -1)                    { mergedTreeValues.push(tree1Values[i]); }
        else if (tree2Values[i] != -1)                    { mergedTreeValues.push(tree2Values[i]); }
        else                                              { mergedTreeValues.push(-1); }
    }

    mergedTreeValues.reverse();
    let firstNonNull = -1;
    for (let i = 0; i < mergedTreeValues.length; i++) {
        if (mergedTreeValues[i] !== -1) {
            firstNonNull = i;
            break;
        }
    }
    if (firstNonNull > -1) {
        mergedTreeValues = mergedTreeValues.slice(firstNonNull);
    }
    mergedTreeValues.reverse();

    console.log(mergedTreeValues);
    const mergedTree = arrayToTree(mergedTreeValues);

    return mergedTree;
};
