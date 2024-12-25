// 19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Follow up: Could you do this in one pass?


// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:

// Input: head = [1], n = 1
// Output: []

// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]


// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

/**
 * Definition for singly-linked list.
 */
//  class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }

//     toString(): string {
//         let s: string = '['
//         let c: ListNode = this

//         do {
//             s += `${c.val},`
//             c = c.next
//         } while (c.next != null)

//         s = s.substring(0, s.length - 1)
//         s += ']'
//         return s
//     }
// }

// class LinkedList {
//     head: ListNode
//     constructor(values: number[]) {
//         this.head = new ListNode()
//         let current = this.head

//         values.forEach(v => {
//             current.val = v
//             current.next = new ListNode()
//             current = current.next
//         });

//         current.next = null
//     }

//     getHead(): ListNode {
//         return this.head
//     }

//     static from(n: ListNode): LinkedList {
//         let values: number[] = []
//         while (n != null) {
//             values.push(n.val)
//             n = n.next
//         }

//         return new LinkedList(values)
//     }
// }

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let values: number[] = []
    while (head.next != null) {
        values.push(head.val)
        head = head.next
    }

    values.splice(-1 * n, 1)

    if (values.length) {
        let newList = new LinkedList(values)
        return newList.head
    }
    else {
        return null
    }
};

let DEBUG_19: boolean = false
function log(s: string): void {
    if (DEBUG_19) {
        console.log(s)
    }
}


// console.log(removeNthFromEnd(new LinkedList([1,2,3,4,5]).getHead(), 2).toString()) // Output: [1,2,3,5]
// console.log(removeNthFromEnd(new LinkedList([1]).getHead(), 1)?.toString()) // Output: []
// console.log(removeNthFromEnd(new LinkedList([1,2]).getHead(), 1)?.toString()) // Output: [1]
