// 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.


// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Example 3:

// Input: nums1 = [0,0], nums2 = [0,0]
// Output: 0.00000

// Example 4:

// Input: nums1 = [], nums2 = [1]
// Output: 1.00000

// Example 5:

// Input: nums1 = [2], nums2 = []
// Output: 2.00000


// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106


// Follow up: The overall run time complexity should be O(log (m+n)).


function median(nums: number[], len: number) {
    if (len == 0) {
        return 0
    } else if (len == 1) {
        return nums[0]
    }
    else if (len % 2 == 0) {
        return ((nums[len/2 - 1] + nums[len/2]) / 2)
    }
    else {
        return nums[Math.floor(len/2)]
    }
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let mergedArray = []
    let i1 = 0, i2 = 0, lenMerged = 0

    while (true) {
        // console.log(`merged array start: ${mergedArray}`)

        // Case 1 - both lists non-empty, head of nums1 < head of nums2
        if (i1 < nums1.length && i2 < nums2.length && nums1[i1] <= nums2[i2]) {
            // console.log(`case 1`)
            lenMerged = mergedArray.push(nums1[i1])
            i1 += 1
            // console.log(`merged array now: ${mergedArray}`)
        }

        // Case 2 - both lists non-empty, head of nums2 < head of nums1
        else if (i1 < nums1.length && i2 < nums2.length && nums1[i1] > nums2[i2]) {
            // console.log(`case 2`)
            lenMerged = mergedArray.push(nums2[i2])
            i2 += 1
            // console.log(`merged array now: ${mergedArray}`)
        }

        // Case 3 - nums1 empty
        else if (i1 == nums1.length && i2 < nums2.length) {
            // console.log(`case 3`)
            lenMerged = mergedArray.push(nums2[i2])
            i2 += 1
            // console.log(`merged array now: ${mergedArray}`)
        }

        // Case 4 - nums2 empty
        else if (i1 < nums1.length && i2 == nums2.length) {
            // console.log(`case 4`)
            lenMerged = mergedArray.push(nums1[i1])
            i1 += 1
            // console.log(`merged array now: ${mergedArray}`)
        }

        // Case 5 - both lists empty
        else {
            // console.log(`case 5`)
            break
        }

        // console.log(``)
    }

    return median(mergedArray, lenMerged)
};

// console.log(findMedianSortedArrays([1,3], [2]))   // Output: 2.00000
// console.log(findMedianSortedArrays([1,2], [3,4])) // Output: 2.5000
// console.log(findMedianSortedArrays([0,0], [0,0])) // Output: 0.0000
// console.log(findMedianSortedArrays([], [1])) // Output: 1.0000
// console.log(findMedianSortedArrays([2], [])) // Output: 2.0000
// console.log(findMedianSortedArrays([1,2,5], [3,4])) // Output: 3.0000
