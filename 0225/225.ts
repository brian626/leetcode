// 225. Implement Stack using Queues

// Implement a last in first out (LIFO) stack using only two queues. The implemented stack
// should support all the functions of a normal queue (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.

// Notes:

// You must use only standard operations of a queue, which means only push to back,
// peek/pop from front, size, and is empty operations are valid.

// Depending on your language, the queue may not be supported natively. You may simulate
// a queue using a list or deque (double-ended queue), as long as you use only a queue's standard operations.


// Example 1:

// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]

// Explanation
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False


// Constraints:

// 1 <= x <= 9
// At most 100 calls will be made to push, pop, top, and empty.
// All the calls to pop and top are valid.


// Follow-up: Can you implement the stack such that each operation is amortized O(1) time complexity?
// In other words, performing n operations will take overall O(n) time even if one of those operations
// may take longer. You can use more than two queues.

class MyStack {
    constructor() {
        this.queue1 = []
        this.queue2 = []
    }

    // LIFO
    // You must use only standard operations of a queue, which means only push to back,
    // peek/pop from front, size, and is empty operations are valid.

    push(x: number): void {
        if (this.queue1.length == 0 && this.queue2.length == 0) {
            this.queue1.push(x)
        }
        else if (this.queue1.length == 0) {
            this.queue1.push(x)
            while (this.queue2.length > 0) {
                this.queue1.push(this.queue2.shift())
            }
        }
        else if (this.queue2.length == 0) {
            this.queue2.push(x)
            while (this.queue1.length > 0) {
                this.queue2.push(this.queue1.shift())
            }
        }
    }

    pop(): number {
        if (this.queue1.length == 0) { return this.queue2.shift() }
        else                         { return this.queue1.shift() }
    }

    top(): number {
        if (this.queue1.length == 0) { return this.queue2[0] }
        else                         { return this.queue1[0] }
    }

    empty(): boolean {
        return this.queue1.length == 0 && this.queue2.length == 0
    }

    queue1: number[]
    queue2: number[]
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

let myStack: MyStack = new MyStack();

myStack.push(1);
myStack.push(2);
console.log(myStack.pop()); // return 2
console.log(myStack.empty()); // return False
myStack.push(3);
console.log(myStack.top()); // return 3
console.log(myStack.pop()); // return 3
console.log(myStack.empty()); // return False
console.log(myStack.pop()); // return 1
console.log(myStack.empty()); // return True
