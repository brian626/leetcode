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

function pairSum(head: ListNode | null): number {
    if (!head) { return 0; }

    let numNodes = 0;
    let nodePtr = head;
    while (nodePtr) {
        numNodes++;
        nodePtr = nodePtr.next;
    }

    const sums: number[] = [];

    let index = 0;
    nodePtr = head;
    while (nodePtr) {
        if (index < (numNodes / 2)) {
            sums[index] = (sums[index] || 0) + nodePtr.val;
        } else {
            sums[numNodes - 1 - index] += nodePtr.val;
        }
        nodePtr = nodePtr.next;
        index++;
    }

    return Math.max(...sums);
};
