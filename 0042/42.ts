// 42. Trapping Rain Water

// Given n non-negative integers representing an elevation map where the width
// of each bar is 1, compute how much water it can trap after raining.


// Example 1:

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array
// [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9


// Constraints:

// n == height.length
// 0 <= n <= 3 * 10^4
// 0 <= height[i] <= 10^5

function trap(height: number[]): number {
    if (height.length == 0) { return 0 }

    let originalSum: number = height.reduce((a,b) => a + b)

    for (let h = 1; h <= Math.max(...height); h++) {
        let startOfElevation = -1
        let endOfElevation = -1
        for (let i = 0; i < height.length; i++) {
            if (height[i] >= h) {
                if (startOfElevation == -1) {
                    startOfElevation = i
                }
                endOfElevation = i
            }
        }

        for (let i = startOfElevation; i < endOfElevation; i++) {
            height[i] = Math.max(h, height[i])
        }
    }

    console.log(height)
    return height.reduce((a,b) => a + b) - originalSum
};

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
// Output: 6

// console.log(trap([4,2,0,3,2,5]))
// Output: 9

console.log(trap([2,0,2]))
// 2
