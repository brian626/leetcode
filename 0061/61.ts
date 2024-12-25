// 61. Rotate List

// Given the head of a linked list, rotate the list to the right by k places.


// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// Example 2:

// Input: head = [0,1,2], k = 4
// Output: [2,0,1]


// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 10^9

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

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function listLength(head: ListNode | null): number {
    if (head == null) { return 0 }
    let len = 0
    while (head != null) {
        len++
        head = head.next
    }

    return len
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    const listLen: number = listLength(head)
    if (listLength(head) == 1) { return head }

    k = k % listLen

    if (k == 0 || head == null) { return head }

    let newHead: ListNode = new ListNode(null, null)
    let nodePtr: ListNode = head
    for (let i = 0; i < listLen - k; i++) {
        nodePtr = nodePtr.next
    }

    let newNodePtr: ListNode = newHead
    while (nodePtr != null) {
        newNodePtr.val = nodePtr.val
        newNodePtr.next = new ListNode(null, null)
        newNodePtr = newNodePtr.next
        nodePtr = nodePtr.next
    }

    nodePtr = head
    for (let i = 0; i < listLen - k; i++) {
        newNodePtr.val = nodePtr.val
        if (i == listLen - k - 1) {
            newNodePtr.next = null
        }
        else {
            newNodePtr.next = new ListNode(null, null)
            newNodePtr = newNodePtr.next
            nodePtr = nodePtr.next
        }
    }

    return newHead
};
