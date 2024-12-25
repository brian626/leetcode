// 92. Reverse Linked List II

// Given the head of a singly linked list and two integers left and right where left <= right,
// reverse the nodes of the list from position left to position right, and return the reversed list.


// Example 1:

// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]


// Constraints:

// The number of nodes in the list is n.
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n


// Follow up: Could you do it in one pass?

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

 function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (left == right) { return head }

    let values: number[] = []
    let nodePtr = head
    while (nodePtr != null) {
        values.push(nodePtr.val)
        nodePtr = nodePtr.next
    }

    let newValues: number[] = values.slice(0, left - 1).concat(values.slice(left - 1, right).reverse()).concat(values.slice(right))

    let newHead: ListNode = new ListNode(newValues[0], null)
    nodePtr = newHead
    for (let i = 1; i < newValues.length; i++) {
        let newNode = new ListNode(newValues[i], null)
        nodePtr.next = newNode
        nodePtr = nodePtr.next
    }

    return newHead
};
