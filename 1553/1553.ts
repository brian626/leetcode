// 1553. Minimum Number of Days to Eat N Oranges

// There are n oranges in the kitchen and you decided to eat some of these oranges every day as follows:

// Eat one orange.
// If the number of remaining oranges (n) is divisible by 2 then you can eat  n/2 oranges.
// If the number of remaining oranges (n) is divisible by 3 then you can eat  2*(n/3) oranges.
// You can only choose one of the actions per day.

// Return the minimum number of days to eat n oranges.


// Example 1:

// Input: n = 10
// Output: 4
// Explanation: You have 10 oranges.
// Day 1: Eat 1 orange,  10 - 1 = 9.
// Day 2: Eat 6 oranges, 9 - 2*(9/3) = 9 - 6 = 3. (Since 9 is divisible by 3)
// Day 3: Eat 2 oranges, 3 - 2*(3/3) = 3 - 2 = 1.
// Day 4: Eat the last orange  1 - 1  = 0.
// You need at least 4 days to eat the 10 oranges.

// Example 2:

// Input: n = 6
// Output: 3
// Explanation: You have 6 oranges.
// Day 1: Eat 3 oranges, 6 - 6/2 = 6 - 3 = 3. (Since 6 is divisible by 2).
// Day 2: Eat 2 oranges, 3 - 2*(3/3) = 3 - 2 = 1. (Since 3 is divisible by 3)
// Day 3: Eat the last orange  1 - 1  = 0.
// You need at least 3 days to eat the 6 oranges.

// Example 3:

// Input: n = 1
// Output: 1

// Example 4:

// Input: n = 56
// Output: 6


// Constraints:

// 1 <= n <= 2*10^9

class treeNode {
    val: number
    leftChild: treeNode | null
    rightChild: treeNode | null

    constructor(val: number) {
        this.val = val
        this.leftChild = null
        this.rightChild = null
    }
}

class orangeTree {
    root: treeNode
    minDepth: number = 99999999

    constructor(val: number) {
        this.root = new treeNode(val)
        this.buildTree()
    }

    buildTree() {
        this.buildTreeHandler(this.root, 1)
    }

    buildTreeHandler(root: treeNode, depth: number): boolean {
        if (depth >= this.minDepth) {
            return false
        }

        if (root.val % 3 == 0) {
            root.leftChild = new treeNode(root.val / 3)
            if (!this.buildTreeHandler(root.leftChild, depth + 1)) {
                root.leftChild = null
            }

            if (root.val % 2 == 0) {
                root.rightChild = new treeNode(root.val / 2)
                if (!this.buildTreeHandler(root.rightChild, depth + 1)) {
                    root.rightChild = null
                }
            }
            else if (root.val > 1) {
                root.rightChild = new treeNode(root.val - 1)
                if (!this.buildTreeHandler(root.rightChild, depth + 1)) {
                    root.rightChild = null
                }
            }
        }
        else if (root.val % 2 == 0) {
            root.leftChild = new treeNode(root.val / 2)
            if (!this.buildTreeHandler(root.leftChild, depth + 1)) {
                root.leftChild = null
            }

            if (root.val > 1) {
                root.rightChild = new treeNode(root.val - 1)
                if (!this.buildTreeHandler(root.rightChild, depth + 1)) {
                    root.rightChild = null
                }
            }
        }
        else if (root.val > 1) {
            root.leftChild = new treeNode(root.val - 1)
            if (!this.buildTreeHandler(root.leftChild, depth + 1)) {
                root.leftChild = null
            }
        }
        else {
            // Found a path from root to leaf.
            if (depth < this.minDepth) {
                this.minDepth = depth
            }
        }

        return true
    }
}

function minDays(n: number): number {
    return new orangeTree(n).minDepth
};

let DEBUG_1553: boolean = false
function log(s: string): void {
    if (DEBUG_1553) {
        console.log(s)
    }
}

console.log(minDays(10)) // 4
console.log(minDays(6)) // 3
console.log(minDays(1)) // 1
console.log(minDays(56)) // 6
console.log(minDays(16)) // 5
console.log(minDays(156)) // 8
console.log(minDays(1567)) // 11
console.log(minDays(15678)) // 14
console.log(minDays(69652)) // 19
console.log(minDays(156789)) // 19
console.log(minDays(1567890)) // 22
console.log(minDays(2457214)) // 30
