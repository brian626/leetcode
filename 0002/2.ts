// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.


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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let sumList: LinkedList = new LinkedList([])
    let sumNode: ListNode = sumList.getHead()
    let carry: number = 0

    while (true) {
        let x: number = 0

        if (l1 != null) {
            x = x + l1.val
            l1 = l1.next
        }

        if (l2 != null) {
            x = x + l2.val
            l2 = l2.next
        }

        sumNode.val = x + carry
        console.log(`${sumNode.val}`)
        carry = 0
        if (sumNode.val >= 10) {
            sumNode.val = sumNode.val - 10
            carry = 1
        }

        if (l1 == null && l2 == null) {
            console.log(`a, carry == ${carry}`)
            // if (carry == 1) {
                sumNode.next = new ListNode()
                sumNode = sumNode.next
                sumNode.val = carry
            // }
            break
        } else {
            console.log(`b`)
            sumNode.next = new ListNode()
            sumNode = sumNode.next
        }
}

    return sumList.getHead()
};

// console.log(addTwoNumbers(new LinkedList([2,4,3]).getHead(), new LinkedList([5,6,4]).getHead()).toString())
// Output: [7,0,8]

// console.log(addTwoNumbers(new LinkedList([0]).getHead(), new LinkedList([0]).getHead()).toString())
// Output: [0]

// console.log(addTwoNumbers(new LinkedList([9,9,9,9,9,9,9]).getHead(), new LinkedList([9,9,9,9]).getHead()).toString())
// Output: [8,9,9,9,0,0,0,1]
