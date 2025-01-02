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

function deleteMiddle(head: ListNode | null): ListNode | null {
    let n = 0;
    let nodePtr = head;
    while (nodePtr) {
        n++;
        nodePtr = nodePtr.next;
    }

    const middleNodeIndex = Math.floor(n / 2);

    if (middleNodeIndex === 0) { return null; }

    n = 0;
    nodePtr = head;
    while (nodePtr) {
        n++;
        if (n === middleNodeIndex) {
            nodePtr.next = nodePtr.next.next;
            break;
        }
        nodePtr = nodePtr.next;
    }

    return head;
};
