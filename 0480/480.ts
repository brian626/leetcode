// 480. Sliding Window Median

// The median is the middle value in an ordered integer list. If the size of the list is even,
// there is no middle value. So the median is the mean of the two middle values.

// For examples, if arr = [2,3,4], the median is 3.
// For examples, if arr = [1,2,3,4], the median is (2 + 3) / 2 = 2.5.
// You are given an integer array nums and an integer k. There is a sliding window of size k
// which is moving from the very left of the array to the very right. You can only see the k
// numbers in the window. Each time the sliding window moves right by one position.

// Return the median array for each window in the original array. Answers within 10^-5 of the actual value will be accepted.


// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
// Explanation:
// Window position                Median
// ---------------                -----
// [1  3  -1] -3  5  3  6  7        1
//  1 [3  -1  -3] 5  3  6  7       -1
//  1  3 [-1  -3  5] 3  6  7       -1
//  1  3  -1 [-3  5  3] 6  7        3
//  1  3  -1  -3 [5  3  6] 7        5
//  1  3  -1  -3  5 [3  6  7]       6

// Example 2:

// Input: nums = [1,2,3,4,2,3,1,4,2], k = 3
// Output: [2.00000,3.00000,3.00000,3.00000,2.00000,3.00000,2.00000]


// Constraints:

// 1 <= k <= nums.length <= 10^5
// 2^31 <= nums[i] <= 2^31 - 1

function calcMedian(nums: number[]): number {
    let midpoint = Math.floor(nums.length / 2)

    if (nums.length % 2 == 0) { return (nums[midpoint - 1] + nums[midpoint]) / 2 }
    else                      { return nums[Math.floor(midpoint)] }
}

function medianSlidingWindow(nums: number[], k: number): number[] {
    let medians: number[] = []

    let i = 0
    while (i <= (nums.length - k)) {
        let window: number[] = []
        for (let j = i; j < (i + k); j++) { window.push(nums[j]) }
        medians.push( calcMedian(window.sort((a,b) => (a - b))) )
        i += 1
    }

    return medians
};

// console.log(medianSlidingWindow([1,3,-1,-3,5,3,6,7], 3)) // Output: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
console.log(medianSlidingWindow([1,2,3,4,2,3,1,4,2], 3)) // Output: [2.00000,3.00000,3.00000,3.00000,2.00000,3.00000,2.00000]
