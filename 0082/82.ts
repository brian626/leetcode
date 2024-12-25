// 82. Remove Duplicates from Sorted List II

// Given the head of a sorted linked list, delete all nodes that have duplicate numbers,
// leaving only distinct numbers from the original list. Return the linked list sorted as well.


// Example 1:

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]

// Example 2:

// Input: head = [1,1,1,2,3]
// Output: [2,3]


// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (head == null) { return head }

    let nodePtr: ListNode = head
    let previousNodePtr: ListNode = null

    while (nodePtr.next != null) {
        if (nodePtr.val == nodePtr.next.val) {
            const duplicateVal: number = nodePtr.val
            if (previousNodePtr) {
                while (nodePtr.val == duplicateVal && nodePtr.next != null) {
                    nodePtr = nodePtr.next
                }
                previousNodePtr.next = nodePtr
            }
            else {
                while (nodePtr.val == duplicateVal && nodePtr.next != null) {
                    nodePtr = nodePtr.next
                }
                head = nodePtr
            }
        }
        else {
            previousNodePtr = nodePtr
            nodePtr = nodePtr.next
        }
    }

    return head
};
