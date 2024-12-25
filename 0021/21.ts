// 21. Merge Two Sorted Lists

// Merge two sorted linked lists and return it as a sorted list.
// The list should be made by splicing together the nodes of the first two lists.


// Example 1:

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:

// Input: l1 = [], l2 = []
// Output: []

// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]


// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 */
// class ListNode {
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
//         } while (c != null)

//         s = s.substring(0, s.length - 1)
//         s += ']'
//         return s
//     }
// }

// class LinkedList {
//     head: ListNode
//     constructor(values: number[]) {
//         if (values.length > 0) {
//             this.head = new ListNode()
//             let current = this.head

//             for (let i = 0; i < values.length; i++) {
//                 current.val = values[i]
//                 if (i != values.length - 1) {
//                     current.next = new ListNode()
//                     current = current.next
//                 }
//                 else {
//                     current.next = null
//                 }
//             }
//             current.next = null
//         }
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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let values: number[] = []
    log(`l1: ${l1?.toString()}`)
    log(`l2: ${l2?.toString()}`)

    while (l1 != null) {
        values.push(l1.val)
        l1 = l1.next
    }
    while (l2 != null) {
        values.push(l2.val)
        l2 = l2.next
    }

    if (values.length > 0) {
        return new LinkedList(values.sort(function(a,b) {return a - b})).getHead()
    }
    else {
        return null
    }
};

let DEBUG_21: boolean = false
function log(s: string): void {
    if (DEBUG_21) {
        console.log(s)
    }
}

// console.log(new LinkedList([1,2,4,1,3,4]).getHead().toString())
// console.log(mergeTwoLists(new LinkedList([1,2,4]).getHead(), new LinkedList([1,3,4]).getHead()).toString()) // Output: [1,1,2,3,4,4]
// console.log(mergeTwoLists(new LinkedList([]).getHead(), new LinkedList([]).getHead())?.toString()) // Output: []
// console.log(mergeTwoLists(new LinkedList([]).getHead(), new LinkedList([0]).getHead())?.toString()) // Output: [0]
console.log(mergeTwoLists(new LinkedList([-10,-6,-6,-6,-3,5]).getHead(), new LinkedList([]).getHead())?.toString()) // Output: [-10,-6,-6,-6,-3,5]
