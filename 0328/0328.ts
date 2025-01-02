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

function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head) { return head; }

    let nodePtr = head;
    let index = 0;

    let headOfOdds = null;
    let oddsPtr = headOfOdds;
    let headOfEvens = null;
    let evensPtr = headOfEvens;

    while (nodePtr) {
        index++;
        if (index % 2 === 0) {
            if (!headOfEvens) {
                headOfEvens = nodePtr;
                evensPtr = headOfEvens;
                nodePtr = nodePtr.next;
                evensPtr.next = null;
            } else {
                evensPtr.next = nodePtr;
                evensPtr = evensPtr.next;
                nodePtr = nodePtr.next;
                evensPtr.next = null;
            }
        } else {
            if (!headOfOdds) {
                headOfOdds = nodePtr;
                oddsPtr = headOfOdds;
                nodePtr = nodePtr.next;
                oddsPtr.next = null;
            } else {
                oddsPtr.next = nodePtr;
                oddsPtr = oddsPtr.next;
                nodePtr = nodePtr.next;
                oddsPtr.next = null;
            }
        }
    }

    nodePtr = oddsPtr;
    while (nodePtr.next) {
        nodePtr = nodePtr.next;
    }
    nodePtr.next = headOfEvens;

    return headOfOdds;
};
