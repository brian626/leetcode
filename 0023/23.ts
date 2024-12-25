// 23. Merge k Sorted Lists

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Constraints:

// k == lists.length
// 0 <= k <= 10^4
// 0 <= lists[i].length <= 500
// -10^4 <= lists[i][j] <= 10^4
// lists[i] is sorted in ascending order.
// The sum of lists[i].length won't exceed 10^4.
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let values: number[] = []
    lists.forEach(list => {
        while (list != null) {
            values.push(list.val)
            list = list.next
        }
    })

    if (values.length > 0) {
        return new LinkedList(values.sort(function(a,b) {return a - b})).getHead()
    }
    else {
        return null
    }
};

let DEBUG_23: boolean = false
function log(s: string): void {
    if (DEBUG_23) {
        console.log(s)
    }
}


console.log(mergeKLists([new LinkedList([1,4,5]).getHead(),
                         new LinkedList([1,3,4]).getHead(),
                         new LinkedList([2,6]).getHead()]).toString()) // Output: [1,1,2,3,4,4,5,6]

console.log(mergeKLists([])?.toString()) // Output: []

console.log(mergeKLists([new LinkedList([]).getHead()])?.toString()) // Output: []
