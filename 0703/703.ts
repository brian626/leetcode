// 703. Kth Largest Element in a Stream

// Design a class to find the kth largest element in a stream. Note that it is the kth largest
// element in the sorted order, not the kth distinct element.

// Implement KthLargest class:

// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
// int add(int val) Returns the element representing the kth largest element in the stream.


// Example 1:

// Input
// ["KthLargest", "add", "add", "add", "add", "add"]
// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
// Output
// [null, 4, 5, 5, 8, 8]

// Explanation
// KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// kthLargest.add(3);   // stream is [2, 3, 4, 5, 8], return 4
// kthLargest.add(5);   // stream is [2, 3, 4, 5, 5, 8], return 5
// kthLargest.add(10);  // stream is [2, 3, 4, 5, 5, 8, 10], return 5
// kthLargest.add(9);   // stream is [2, 3, 4, 5, 5, 8, 9, 10], return 8
// kthLargest.add(4);   // stream is [2, 3, 4, 4, 5, 5, 8, 9, 10], return 8


// Constraints:

// 1 <= k <= 10^4
// 0 <= nums.length <= 10^4
// -10^4 <= nums[i] <= 10^4
// -10^4 <= val <= 10^4
// At most 10^4 calls will be made to add.
// It is guaranteed that there will be at least k elements in the array when you search for the kth element.

class KthLargest {
    constructor(k: number, nums: number[]) {
        this.k = k;
        this.nums = Array.from(nums);
        this.nums.sort((a,b) => a - b);
    }

    add(val: number): number {
        this.nums.push(val);
        this.nums.sort((a,b) => a - b);
        return this.nums[this.nums.length - this.k];
    }

    k: number;
    nums: number[];
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

let kthLargest: KthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3));   // return 4
console.log(kthLargest.add(5));   // return 5
console.log(kthLargest.add(10));  // return 5
console.log(kthLargest.add(9));   // return 8
console.log(kthLargest.add(4));   // return 8
