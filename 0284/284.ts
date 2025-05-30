// 284. Peeking Iterator

// Design an iterator that supports the peek operation on a list in addition to the hasNext and the next operations.

// Implement the PeekingIterator class:

// PeekingIterator(int[] nums) Initializes the object with the given integer array nums.
// int next() Returns the next element in the array and moves the pointer to the next element.
// bool hasNext() Returns true if there are still elements in the array.
// int peek() Returns the next element in the array without moving the pointer.


// Example 1:

// Input
// ["PeekingIterator", "next", "peek", "next", "next", "hasNext"]
// [[[1, 2, 3]], [], [], [], [], []]
// Output
// [null, 1, 2, 2, 3, false]

// Explanation
// PeekingIterator peekingIterator = new PeekingIterator([1, 2, 3]); // [1,2,3]
// peekingIterator.next();    // return 1, the pointer moves to the next element [1,2,3].
// peekingIterator.peek();    // return 2, the pointer does not move [1,2,3].
// peekingIterator.next();    // return 2, the pointer moves to the next element [1,2,3]
// peekingIterator.next();    // return 3, the pointer moves to the next element [1,2,3]
// peekingIterator.hasNext(); // return False


// Constraints:

// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 1000
// All the calls to next and peek are valid.
// At most 1000 calls will be made to next, hasNext, and peek.


// Follow up: How would you extend your design to be generic and work with all types, not just integer?

/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

class PeekingIterator {
    constructor(iterator: Iterator<number>) {
        let value: number = iterator.next().value
        while (value) {
            this.cache.push(value)
            value = iterator.next().value
        }
        this.index = 0
    }

    peek(): number {
        return this.cache[this.index]
    }

    next(): number {
        const value: number = this.cache[this.index++]
        return value
    }

    hasNext(): boolean {
        return this.index < this.cache.length
    }

    cache: any[]
    index: number
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
