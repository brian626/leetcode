// 25. Reverse Nodes in k-Group

// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number
// of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.


// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Example 2:

// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

// Example 3:

// Input: head = [1,2,3,4,5], k = 1
// Output: [1,2,3,4,5]

// Example 4:

// Input: head = [1], k = 1
// Output: [1]


// Constraints:

// The number of nodes in the list is in the range sz.
// 1 <= sz <= 5000
// 0 <= Node.val <= 1000
// 1 <= k <= sz


// Follow-up: Can you solve the problem in O(1) extra memory space?

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function printList(head: ListNode) {
    let current = head
    let output: string = ""
    while (current != null) {
        output += `${current.val} -> `
        current = current.next
    }

    console.log(`${output} null`)
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (head == null || head.next == null) { return head }

    let originalNode = head
    let newHead: ListNode = null
    let newTail: ListNode = null

    while (originalNode != null) {
        printList(newHead)

        let oldNodes: ListNode[] = []
        for (let i = 0; i < k; i++) {
            oldNodes.push(originalNode)
            originalNode = originalNode.next

            if (originalNode == null) {
                break
            }
        }

        if (oldNodes.length == k) {
            oldNodes.reverse()
        }

        let newNodes: ListNode[] = []
        for (let i = 0; i < oldNodes.length; i++) {
            let newNode = new ListNode(oldNodes[i].val)
            newNodes.push(newNode)
            console.log(`pushed (${newNode.val}, ${newNode.next})`)
        }

        for (let i = 0; i < oldNodes.length - 1; i++) {
            newNodes[i].next = newNodes[i+1]
        }

        if (newHead === null) {
            newHead = newNodes[0]
        }
        else {
            console.log(`setting newTail.next to (${newNodes[0].val},${newNodes[0].next})`)
            newTail.next = newNodes[0]
        }

        newTail = newNodes[oldNodes.length - 1]
    }

    printList(newHead)
    return newHead
};


// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

// Input: head = [1,2,3,4,5], k = 4
// Output: [4,3,2,1,5]

// Input: head = [1,2,3,4,5], k = 5
// Output: [5,4,3,2,1]
