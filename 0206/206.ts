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

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) { return head; }

    const nodeStack: ListNode[] = [];
    let nodePtr = head;
    while (nodePtr) {
        nodeStack.unshift(nodePtr);
        nodePtr = nodePtr.next;
    }

    let newHead = null;
    nodePtr = newHead;
    while (nodeStack.length) {
        const n = nodeStack.shift();
        if (!newHead) {
            newHead = n;
            nodePtr = n;
            nodePtr.next = null;
        } else {
            nodePtr.next = n;
            nodePtr = n;
            nodePtr.next = null;
        }
    }

    return newHead;
};
