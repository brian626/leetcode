// 900. RLE Iterator

// Write an iterator that iterates through a run-length encoded sequence.

// The iterator is initialized by RLEIterator(int[] A), where A is a run-length encoding
// of some sequence.  More specifically, for all even i, A[i] tells us the number of times
// that the non-negative integer value A[i+1] is repeated in the sequence.

// The iterator supports one function: next(int n), which exhausts the next n elements (n >= 1)
// and returns the last element exhausted in this way.  If there is no element left to exhaust,
// next returns -1 instead.

// For example, we start with A = [3,8,0,9,2,5], which is a run-length encoding of the sequence
// [8,8,8,5,5].  This is because the sequence can be read as "three eights, zero nines, two fives".


// Example 1:

// Input: ["RLEIterator","next","next","next","next"], [[[3,8,0,9,2,5]],[2],[1],[1],[2]]
// Output: [null,8,8,5,-1]
// Explanation:
// RLEIterator is initialized with RLEIterator([3,8,0,9,2,5]).
// This maps to the sequence [8,8,8,5,5].

// RLEIterator.next is then called 4 times:

// .next(2) exhausts 2 terms of the sequence, returning 8.  The remaining sequence is now [8, 5, 5].
// .next(1) exhausts 1 term of the sequence, returning 8.  The remaining sequence is now [5, 5].
// .next(1) exhausts 1 term of the sequence, returning 5.  The remaining sequence is now [5].
// .next(2) exhausts 2 terms, returning -1.  This is because the first term exhausted was 5,
//   but the second term did not exist.  Since the last term exhausted does not exist, we return -1.

// Note:

// 0 <= A.length <= 1000
// A.length is an even integer.
// 0 <= A[i] <= 10^9
// There are at most 1000 calls to RLEIterator.next(int n) per test case.
// Each call to RLEIterator.next(int n) will have 1 <= n <= 10^9.

class RLEIterator {
    constructor(A: number[]) {
        this.RLE = A
    }

    next(n: number): number {
        console.log(`next(${n})`)
        console.log(`  RLE starting as [${this.RLE}]`)

        let numTerms = this.RLE[0]
        while (n > numTerms) {
            n -= numTerms
            this.RLE.shift()
            this.RLE.shift()
            numTerms = this.RLE[0]
        }

        if (this.RLE.length > 0) {
            this.RLE[0] -= n
            console.log(`  RLE is now [${this.RLE}], returning ${this.RLE[1]}`)
            return this.RLE[1]
        }
        else {
            console.log(`  returning -1`)
            return -1
        }
    }

    RLE: number[]
}

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(A)
 * var param_1 = obj.next(n)
 */

// let r = new RLEIterator([3,8,0,9,2,5])

// console.log(r.next(2)) // 8
// console.log(r.next(1)) // 8
// console.log(r.next(1)) // 5
// console.log(r.next(2)) // -1

let r = new RLEIterator([923381016,843,898173122,924,540599925,391,705283400,275,811628709,850,895038968,590,949764874,580,450563107,660,996257840,917,793325084,82])

console.log(r.next(612783106)) // 843
console.log(r.next(486444202)) // 924
console.log(r.next(630147341)) //
console.log(r.next(845077576)) //
console.log(r.next(243035623)) //
console.log(r.next(731489221)) //
console.log(r.next(117134294)) //
console.log(r.next(220460537)) //
console.log(r.next(794582972)) //
console.log(r.next(332536150)) //
console.log(r.next(815913097)) //
console.log(r.next(100607521)) //
console.log(r.next(146358489)) //
console.log(r.next(697670641)) //
console.log(r.next(45234068)) //
console.log(r.next(573866037)) //
console.log(r.next(519323635)) //
console.log(r.next(27431940)) //
console.log(r.next(16279485)) //
console.log(r.next(203970)) //
