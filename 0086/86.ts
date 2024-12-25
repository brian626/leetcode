// 86. Partition List

// Given the head of a linked list and a value x, partition it such that all nodes less
// than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Example 1:

// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]

// Example 2:

// Input: head = [2,1], x = 2
// Output: [1,2]


// Constraints:

// The number of nodes in the list is in the range [0, 200].
// -100 <= Node.val <= 100
// -200 <= x <= 200

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

function partition(head: ListNode | null, x: number): ListNode | null {
    if (head == null) { return null }

    let lesserHead: ListNode = null
    let lesserNodePtr: ListNode = null
    let greaterHead: ListNode = null
    let greaterNodePtr: ListNode = null

    let nodePtr: ListNode = head
    while (nodePtr) {
        let newNode: ListNode = new ListNode(nodePtr.val, null)

        if (nodePtr.val < x) {
            if (lesserNodePtr != null) {
                lesserNodePtr.next = newNode
                lesserNodePtr = lesserNodePtr.next
            }
            else {
                lesserHead = newNode
                lesserNodePtr = lesserHead
            }
        }
        else {
            if (greaterNodePtr != null) {
                greaterNodePtr.next = newNode
                greaterNodePtr = greaterNodePtr.next
            }
            else {
                greaterHead = newNode
                greaterNodePtr = greaterHead
            }
        }

        nodePtr = nodePtr.next
    }

    if (lesserHead == null && greaterHead == null) { return null }
    else if (lesserHead == null) { return greaterHead }
    else if (greaterHead == null) { return lesserHead }
    else {
        let nodePtr = lesserHead
        while (nodePtr.next != null) {
            nodePtr = nodePtr.next
        }

        nodePtr.next = greaterHead

        return lesserHead
    }
};
