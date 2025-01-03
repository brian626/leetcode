/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 *
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    if (!head) { return null; }

    let nodePtr = head;
    let newHead = null;
    while (nodePtr) {
        const newNode = new _Node(nodePtr.val, nodePtr.next, nodePtr.random);
        nodePtr.next = newNode;
        nodePtr = newNode.next;
    }

    nodePtr = head.next;
    while (nodePtr) {
        nodePtr.next = nodePtr.next?.next;
        nodePtr = nodePtr.next;
    }

    return head.next;
};


const head = [[7,null],[13,0],[11,4],[10,2],[1,0]];

console.log(copyRandomList(head));
