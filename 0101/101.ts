// 101. Symmetric Tree

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:

// Input: root = [1,2,2,null,3,null,3]
// Output: false


// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100


// Follow up: Could you solve it both recursively and iteratively?

/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function walkTree(root: TreeNode | null): number[] | null {
    if (root == null) { return null }

    return [root.val].concat(walkTree(root.left)).concat(walkTree(root.right))
}

function isSymmetric(root: TreeNode | null): boolean {
    if (root == null)                            { return true }
    if (root.left == null && root.right == null) { return true }
    if (root.left == null || root.right == null) { return false }
    if (root.left.val != root.right.val)         { return false }

    // Walk the subtrees to make it easier to compare.
    let leftVals: number[] = walkTree(root.left)
    let rightVals: number[] = walkTree(root.right)

    console.log(leftVals)
    console.log(rightVals)

    return false
};


// [1,2,2,3,4,4,3]
let root =
    new TreeNode(1,
                 new TreeNode(2, new TreeNode(3), new TreeNode(4)),
                 new TreeNode(2, new TreeNode(4), new TreeNode(3)))

console.log(isSymmetric(root))
