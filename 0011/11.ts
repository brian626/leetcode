// 11. Container With Most Water

// Given n non-negative integers a1, a2, ..., an , where each represents a point at
// coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the
// line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis
// forms a container, such that the container contains the most water.

// Notice that you may not slant the container.


// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
//   In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:

// Input: height = [1,1]
// Output: 1

// Example 3:

// Input: height = [4,3,2,1,4]
// Output: 16

// Example 4:

// Input: height = [1,2,1]
// Output: 2


// Constraints:

// n == height.length
// 2 <= n <= 10^5
// 0 <= height[i] <= 10^4

const DEBUG_11: boolean = false
function log(s: string): void {
    if (DEBUG_11) {
        console.log(s)
    }
}

function maxArea(height: number[]): number {
    // Start with a horizontal line at height h == (max a). Find its intersecting vertical lines
    // and calculate the product.
    // Repeat until h = 1 or maxArea is greater than h*n

    const n = height.length
    let h = Math.max(...height)
    let maxArea = 0

    while (h > 0) {
        log(`testing h = ${h}`)
        let firstIntersect = -1
        let lastIntersect = -1
        for (let i = 0; i < height.length; i++) {
            if (h <= height[i]) {
                if (firstIntersect == -1) {
                    log(`found first intersect at ${i}`)
                    firstIntersect = i
                }
                else
                {
                    log(`found next intersect at ${i}`)
                    lastIntersect = i
                }
            }
        }

        let area = h * (lastIntersect - firstIntersect)
        log(`area is ${area}`)
        if (area > maxArea) {
            maxArea = area
        }

        h -= 1
        log("")

        if (maxArea > n * h) {
            break
        }
    }

    return maxArea
};

// console.log(`${maxArea([1,8,6,2,5,4,8,3,7])} should be 49`)
// console.log(`${maxArea([1,1])} should be 1`)
// console.log(`${maxArea([4,3,2,1,4])} should be 16`)
// console.log(`${maxArea([1,2,1])} should be 2`)
