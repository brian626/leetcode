// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// Follow up: Could you write an algorithm with O(log n) runtime complexity?


// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]


// Constraints:

// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9
// nums is a non-decreasing array.
// -10^9 <= target <= 10^9

function searchRange(nums: number[], target: number): number[] {
    if (nums.length == 0) { return [-1, -1] }

    let startIndex = -1
    let endIndex = -1
    let searchIndex = Math.floor(nums.length / 2)
    let searchMin = 0
    let lastSearchMin = -1
    let searchMax = nums.length
    let lastSearchMax = -1

    while (true) {
        console.log(`searchMin = ${lastSearchMin}/${searchMin}, searchIndex = ${searchIndex}, searchMax = ${lastSearchMax}/${searchMax}`)
        if (searchMin == lastSearchMin && searchMax == lastSearchMax) {
            console.log(`giving up`)
            break
        }

        const testValue = nums[searchIndex]
        if (target > testValue) {
            lastSearchMin = searchMin
            lastSearchMax = searchMax

            searchMin = searchIndex
            searchIndex = Math.floor((searchIndex + searchMax) / 2)
            console.log(`  target is greater than the test value`)
        }
        else if (target < testValue) {
            lastSearchMin = searchMin
            lastSearchMax = searchMax

            searchMax = searchIndex
            searchIndex = Math.floor((searchIndex + searchMin) / 2)
            console.log(`  target is less than the test value`)
        }
        else {
            console.log(`  found it`)

            startIndex = searchIndex
            while (startIndex > 0 && nums[startIndex - 1] == target) {
                startIndex -= 1
            }

            endIndex = searchIndex
            while (endIndex < nums.length && nums[endIndex + 1] == target) {
                endIndex += 1
            }

            break
        }
    }

    return [startIndex, endIndex]
};

console.log(searchRange([5,7,7,8,8,10], 8)) // Output: [3,4]
console.log(searchRange([5,7,7,8,8,10], 6)) // Output: [-1,-1]
console.log(searchRange([], 0)) // Output: [-1,-1]
console.log(searchRange([5,7,7,8,8,10], 3)) // Output: [-1,-1]
console.log(searchRange([5,7,7,8,8,10], 13)) // Output: [-1,-1]
console.log(searchRange([5,7,7,8,8,10], 5)) // Output: [0,0]
console.log(searchRange([5,7,7,8,8,10], 10)) // Output: [5,5]
console.log(searchRange([5,5,5,5,5,5], 5)) // Output: [0,5]
console.log(searchRange([1,5,5,5,5,5], 5)) // Output: [1,5]
console.log(searchRange([5,5,5,5,5,6], 5)) // Output: [0,4]
console.log(searchRange([5,7,7,8,9,10], 9)) // Output: [4,4]
console.log(searchRange([1], 0)) // Output: [-1, -1]
console.log(searchRange([1], 1)) // Output: [0, 0]
console.log(searchRange([1,3], 1)) // Output: [0, 0]
