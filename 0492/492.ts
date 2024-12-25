// 492. Construct the Rectangle

// A web developer needs to know how to design a web page's size. So, given a specific
// rectangular web page’s area, your job by now is to design a rectangular web page,
// whose length L and width W satisfy the following requirements:

// The area of the rectangular web page you designed must equal to the given target area.
// The width W should not be larger than the length L, which means L >= W.
// The difference between length L and width W should be as small as possible.

// Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.


// Example 1:

// Input: area = 4
// Output: [2,2]
// Explanation: The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1].
// But according to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.

// Example 2:

// Input: area = 37
// Output: [37,1]

// Example 3:

// Input: area = 122122
// Output: [427,286]


// Constraints:

// 1 <= area <= 10^7

// const PRIMES_BELOW_10_000_000: number[] = []

// function factor(n: number): number {

// }

function isPrime(num: number): boolean {
    if (num <= 3) return num > 1;

    if ((num % 2 === 0) || (num % 3 === 0)) return false;

    let count = 5;

    while (Math.pow(count, 2) <= num) {
      if (num % count === 0 || num % (count + 2) === 0) return false;

      count += 6;
    }

    return true;
}

function constructRectangle(area: number): number[] {
    if (isPrime(area)) {
        return [area, 1]
    }

    let L = Math.floor(Math.sqrt(area))
    let W = L

    while (true) {
        if ((L * W) == area) {
            break
        }

        L += 1
        W = Math.floor(area / L)
    }

    return [L, W]
};

// console.log(constructRectangle(4)) // Output: [2,2]
// console.log(constructRectangle(37)) // Output: [37,1]
// console.log(constructRectangle(122122)) // Output: [427,286]
// console.log(constructRectangle(1)) // Output: [1,1]
// console.log(constructRectangle(10000000)) // Output: [3200,3125]
console.log(constructRectangle(99102131)) // Output: [99102131,1]
