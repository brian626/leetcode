// 56. Merge Intervals
// Medium

// 7415

// 385

// Add to List

// Share
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
// and return an array of the non-overlapping intervals that cover all the intervals in the input.



// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.


// Constraints:

// 1 <= intervals.length <= 10^4
// intervals[i].length == 2
// 0 <= starti <= endi <= 10^4

function merge(intervals: number[][]): number[][] {
    if (intervals.length == 1) { return intervals }

    intervals.sort((a,b) => a[0] - b[0])

    let i: number = 0
    while (i < intervals.length - 1) {
        const interval: number[] = intervals[i]
        const nextInterval: number[] = intervals[i+1]

        if (interval[1] >= nextInterval[0]) {
            intervals.splice(i, 2, [interval[0], Math.max(interval[1], nextInterval[1])])
        }
        else {
            i++
        }
    }

    return intervals
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
// Output: [[1,6],[8,10],[15,18]]

console.log(merge([[1,4],[4,5]]))
// Output: [[1,5]]

console.log(merge([[1,4],[0,4]]))
