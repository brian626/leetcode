# You are given two non-empty linked lists representing two non-negative integers.
# The digits are stored in reverse order, and each of their nodes contains a single digit.
# Add the two numbers and return the sum as a linked list.

# You may assume the two numbers do not contain any leading zero, except the number 0 itself.



# Example 1:

# Input: l1 = [2,4,3], l2 = [5,6,4]
# Output: [7,0,8]
# Explanation: 342 + 465 = 807.

# Example 2:

# Input: l1 = [0], l2 = [0]
# Output: [0]

# Example 3:

# Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
# Output: [8,9,9,9,0,0,0,1]


# Constraints:

# The number of nodes in each linked list is in the range [1, 100].
# 0 <= Node.val <= 9
# It is guaranteed that the list represents a number that does not have leading zeros.

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        if type(val).__name__ == 'int':
            self.val = val
            self.next = next
        elif type(val).__name__ == 'list':
            print(f"initing with list {val}")
            cur = self
            for n in range(len(val)):
                cur.val = val[n]
                if n < len(val) - 1:
                    cur.next = ListNode()
                    cur = cur.next

    def to_string(self):
        cur = self
        while cur != None:
            print(cur.val)
            cur = cur.next

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        s = ListNode()
        head = s
        carry = 0

        while True:
            x = 0
            if l1 != None:
                print(f"adding l1.val = {l1.val}")
                x += l1.val
            if l2 != None:
                print(f"adding l2.val = {l2.val}")
                x += l2.val
            if x == 0:
                break

            s.val = carry + x
            carry = 0
            if s.val > 10:
                s.val -= 9
                carry = 1

            l1 = l1.next if l1 != None else None
            l2 = l2.next if l2 != None else None
            s.next = ListNode()
            s = s.next

        return head

s = Solution()

# x = ListNode([2,4,3])
# print(x.to_string())

# Input: l1 = [2,4,3], l2 = [5,6,4]
# Output: [7,0,8]
# Explanation: 342 + 465 = 807.
print(s.addTwoNumbers([2,4,3], [5,6,4]))

# Input: l1 = [0], l2 = [0]
# Output: [0]

# Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
# Output: [8,9,9,9,0,0,0,1]
