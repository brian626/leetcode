// 24. Swap Nodes in Pairs

// Given a linked list, swap every two adjacent nodes and return its head.
// You must solve the problem without modifying the values in the list's nodes
// (i.e., only nodes themselves may be changed.)


// Example 1:

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

// Example 2:

// Input: head = []
// Output: []

// Example 3:

// Input: head = [1]
// Output: [1]


// Constraints:

// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100

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

function swapPairs(head: ListNode | null): ListNode | null {
    if (head == null || head.next == null) { return head }

    // List is at least two nodes

    let originalNode = head
    const newHead: ListNode = new ListNode(originalNode.next.val, null)
    let tempNode: ListNode = new ListNode(originalNode.val, null)
    newHead.next = tempNode

    let newNode = newHead.next
    originalNode = originalNode.next.next
    while (originalNode != null) {
        printList(newHead)

        if (originalNode.next == null) {
            // One node left
            let tempNode: ListNode = new ListNode(originalNode.val, null)
            newNode.next = tempNode

            break
        }
        else {
            // Even number of nodes
            let tempNode: ListNode = new ListNode(originalNode.next.val, null)
            newNode.next = tempNode

            let tempNode2: ListNode = new ListNode(originalNode.val, null)
            tempNode.next = tempNode2

            originalNode = originalNode.next.next
            newNode = tempNode.next
        }
    }

    return newHead
};

// [val = 1, next = 2] [val = 2, next = 3] [val = 3, next = 4], [val = 4, next = null]

// [val = 2, next = 1] [val = 1, next = 3] [val = 3, next = 4], [val = 4, next = null]
