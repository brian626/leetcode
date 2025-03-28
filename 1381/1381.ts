// 1381. Design a Stack With Increment Operation

// Design a stack which supports the following operations.

// Implement the CustomStack class:

// CustomStack(int maxSize)
//   Initializes the object with maxSize which is the maximum number of elements in the stack or do nothing if the stack reached the maxSize.
// void push(int x)
//   Adds x to the top of the stack if the stack hasn't reached the maxSize.
// int pop()
//   Pops and returns the top of stack or -1 if the stack is empty.
// void inc(int k, int val)
//   Increments the bottom k elements of the stack by val. If there are less than k elements in the stack, just increment all the elements in the stack.


// Example 1:

// Input
// ["CustomStack","push","push","pop","push","push","push","increment","increment","pop","pop","pop","pop"]
// [[3],[1],[2],[],[2],[3],[4],[5,100],[2,100],[],[],[],[]]
// Output
// [null,null,null,2,null,null,null,null,null,103,202,201,-1]
// Explanation
// CustomStack customStack = new CustomStack(3); // Stack is Empty []
// customStack.push(1);                          // stack becomes [1]
// customStack.push(2);                          // stack becomes [1, 2]
// customStack.pop();                            // return 2 --> Return top of the stack 2, stack becomes [1]
// customStack.push(2);                          // stack becomes [1, 2]
// customStack.push(3);                          // stack becomes [1, 2, 3]
// customStack.push(4);                          // stack still [1, 2, 3], Don't add another elements as size is 4
// customStack.increment(5, 100);                // stack becomes [101, 102, 103]
// customStack.increment(2, 100);                // stack becomes [201, 202, 103]
// customStack.pop();                            // return 103 --> Return top of the stack 103, stack becomes [201, 202]
// customStack.pop();                            // return 202 --> Return top of the stack 102, stack becomes [201]
// customStack.pop();                            // return 201 --> Return top of the stack 101, stack becomes []
// customStack.pop();                            // return -1 --> Stack is empty return -1.


// Constraints:

// 1 <= maxSize <= 1000
// 1 <= x <= 1000
// 1 <= k <= 1000
// 0 <= val <= 100
// At most 1000 calls will be made to each method of increment, push and pop each separately.

class CustomStack {
    constructor(maxSize: number) {
        this.maxSize = maxSize
        this.stack = []
    }

    push(x: number): void {
        if (this.stack.length < this.maxSize) {
            this.stack.push(x)
        }
    }

    pop(): number {
        return (this.stack.length > 0) ? this.stack.pop() : -1
    }

    increment(k: number, val: number): void {
        let newStack: number[] = []
        this.stack.reverse()
        console.log(`stack after reverse, before increment: [${this.stack}]`)

        console.log(`k = ${k}, stack length = ${this.stack.length}`)
        const itemsToIncrement = Math.min(k, this.stack.length)
        for (let i = 0; i < itemsToIncrement; i++) {
            newStack.push(this.stack.pop() + val)
        }

        console.log(`finished incrementing, stack.length is ${this.stack.length}`)

        while (this.stack.length > 0) {
            newStack.push(this.stack.pop())
        }

        console.log(`newStack after increment: [${newStack}]`)
        this.stack = newStack
        console.log(`stack after increment: [${this.stack}]`)
    }

    maxSize: number
    stack: number[]
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

let customStack: CustomStack = new CustomStack(3); // Stack is Empty []
customStack.push(1);                          // stack becomes [1]
customStack.push(2);                          // stack becomes [1, 2]
console.log(customStack.pop());                            // return 2 --> Return top of the stack 2, stack becomes [1]
customStack.push(2);                          // stack becomes [1, 2]
customStack.push(3);                          // stack becomes [1, 2, 3]
customStack.push(4);                          // stack still [1, 2, 3], Don't add another elements as size is 4
customStack.increment(5, 100);                // stack becomes [101, 102, 103]
customStack.increment(2, 100);                // stack becomes [201, 202, 103]
console.log(customStack.pop());                            // return 103 --> Return top of the stack 103, stack becomes [201, 202]
console.log(customStack.pop());                            // return 202 --> Return top of the stack 102, stack becomes [201]
console.log(customStack.pop());                            // return 201 --> Return top of the stack 101, stack becomes []
console.log(customStack.pop());                            // return -1 --> Stack is empty return -1.
