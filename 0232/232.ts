// 232. Implement Queue using Stacks

// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue
// should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.

// Notes:

// You must use only standard operations of a stack, which means only push to top,
//   peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may
//   simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
// Follow-up: Can you implement the queue such that each operation is amortized O(1)
//   time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.


// Example 1:

// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]

// Explanation
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false


// Constraints:

// 1 <= x <= 9
// At most 100 calls will be made to push, pop, peek, and empty.
// All the calls to pop and peek are valid.

class MyQueue {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }

    push(x: number): void {
        if (this.stack1.length == 0 && this.stack2.length == 0) {
            this.stack1.unshift(x)
        }
        else if (this.stack1.length == 0) {
            while (this.stack2.length > 0) {
                this.stack1.unshift(this.stack2.shift())
            }
            this.stack2.unshift(x)
            while (this.stack1.length > 0) {
                this.stack2.unshift(this.stack1.shift())
            }
        }
        else if (this.stack2.length == 0) {
            while (this.stack1.length > 0) {
                this.stack2.unshift(this.stack1.shift())
            }
            this.stack1.unshift(x)
            while (this.stack2.length > 0) {
                this.stack1.unshift(this.stack2.shift())
            }
        }

        console.log(`pushed ${x}: [${this.stack1}] [${this.stack2}]`)
    }

    pop(): number {
        if (this.stack1.length == 0) { return this.stack2.shift() }
        else                         { return this.stack1.shift() }
    }

    peek(): number {
        if (this.stack1.length == 0) { return this.stack2[0] }
        else                         { return this.stack1[0] }
    }

    empty(): boolean {
        return this.stack1.length == 0 && this.stack2.length == 0
    }

    stack1: number[]
    stack2: number[]
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

let myQueue: MyQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.push(3); // queue is: [1, 2, 3] (leftmost is front of the queue)
console.log(myQueue.peek()); // return 1
console.log(myQueue.pop()); // return 1, queue is [2,3]
console.log(myQueue.empty()); // return false
console.log(myQueue.peek()); // return 2
console.log(myQueue.pop()); // return 2, queue is [3]
console.log(myQueue.empty()); // return false
console.log(myQueue.peek()); // return 3
console.log(myQueue.pop()); // return 3, queue is []
console.log(myQueue.empty()); // return true
