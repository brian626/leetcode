// 352. Data Stream as Disjoint Intervals

// Given a data stream input of non-negative integers a1, a2, ..., an, summarize the numbers seen so far as a list of disjoint intervals.

// Implement the SummaryRanges class:

// SummaryRanges() Initializes the object with an empty stream.
// void addNum(int val) Adds the integer val to the stream.
// int[][] getIntervals() Returns a summary of the integers in the stream currently as a list of disjoint intervals [starti, endi].


// Example 1:

// Input
// ["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"]
// [[], [1], [], [3], [], [7], [], [2], [], [6], []]
// Output
// [null, null, [[1, 1]], null, [[1, 1], [3, 3]], null, [[1, 1], [3, 3], [7, 7]], null, [[1, 3], [7, 7]], null, [[1, 3], [6, 7]]]

// Explanation
// SummaryRanges summaryRanges = new SummaryRanges();
// summaryRanges.addNum(1);      // arr = [1]
// summaryRanges.getIntervals(); // return [[1, 1]]
// summaryRanges.addNum(3);      // arr = [1, 3]
// summaryRanges.getIntervals(); // return [[1, 1], [3, 3]]
// summaryRanges.addNum(7);      // arr = [1, 3, 7]
// summaryRanges.getIntervals(); // return [[1, 1], [3, 3], [7, 7]]
// summaryRanges.addNum(2);      // arr = [1, 2, 3, 7]
// summaryRanges.getIntervals(); // return [[1, 3], [7, 7]]
// summaryRanges.addNum(6);      // arr = [1, 2, 3, 6, 7]
// summaryRanges.getIntervals(); // return [[1, 3], [6, 7]]


// Constraints:

// 0 <= val <= 10^4
// At most 3 * 10^4 calls will be made to addNum and getIntervals.


// Follow up: What if there are lots of merges and the number of disjoint intervals is small compared to the size of the data stream?

class SummaryRanges {
    constructor() {
        this.array = [];
    }

    addNum(val: number): void {
        this.array.push(val);
        this.array = Array.from(new Set(this.array)).sort((a,b) => a - b);
    }

    getIntervals(): number[][] {
        if (this.array.length === 1) { return [[this.array[0], this.array[0]]] }
        let intervals: number[][] = [];

        let i = 0;
        while (i < this.array.length) {
            const min = this.array[i]
            let j = i
            while (this.array[j] === this.array[j + 1] - 1) {
                j++
            }

            intervals.push([min, this.array[j]])
            i = j + 1
        }

        return intervals
    }

    array: number[];
}

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */

let sumRanges: SummaryRanges = new SummaryRanges();
// sumRanges.addNum(1);      // arr = [1]
// console.log(sumRanges.getIntervals()); // return [[1, 1]]
// sumRanges.addNum(3);      // arr = [1, 3]
// console.log(sumRanges.getIntervals()); // return [[1, 1], [3, 3]]
// sumRanges.addNum(7);      // arr = [1, 3, 7]
// console.log(sumRanges.getIntervals()); // return [[1, 1], [3, 3], [7, 7]]
// sumRanges.addNum(2);      // arr = [1, 2, 3, 7]
// console.log(sumRanges.getIntervals()); // return [[1, 3], [7, 7]]
// sumRanges.addNum(6);      // arr = [1, 2, 3, 6, 7]
// console.log(sumRanges.getIntervals()); // return [[1, 3], [6, 7]]

// ["addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals"]
// [[6],[],[6],[],[0],[],[4],[],[8],[],[7],[],[6],[],[4],[],[7],[],[5],[]]
sumRanges.addNum(6);
console.log(sumRanges.getIntervals());
sumRanges.addNum(6);
console.log(sumRanges.getIntervals());
