// 234. Palindrome Linked List

// Given the head of a singly linked list, return true if it is a palindrome.


// Example 1:

// Input: head = [1,2,2,1]
// Output: true

// Example 2:

// Input: head = [1,2]
// Output: false


// Constraints:

// The number of nodes in the list is in the range [1, 10&5].
// 0 <= Node.val <= 9


// Follow up: Could you do it in O(n) time and O(1) space?

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

function isPalindrome(head: ListNode | null): boolean {
    let values: number[] = []
    let node: ListNode = head
    while (node) {
        values.push(node.val)
        node = node.next
    }

    let reversedValues: number[] = Array.from(values).reverse()

    return values.join('') === reversedValues.join('')
};
