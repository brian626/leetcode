// 1925. Count Square Sum Triples

// A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.

// Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.


// Example 1:

// Input: n = 5
// Output: 2
// Explanation: The square triples are (3,4,5) and (4,3,5).

// Example 2:

// Input: n = 10
// Output: 4
// Explanation: The square triples are (3,4,5), (4,3,5), (6,8,10), and (8,6,10).


// Constraints:

// 1 <= n <= 250

function countTriples(n: number): number {
    let numTriples = 0;

    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            const c: number = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            if (c <= n && c === Math.floor(c)) {
                numTriples++;
            }
        }
    }

    return 2 * numTriples;
};

// console.log(countTriples(5)); // 2
// console.log(countTriples(10)); // 4
// console.log(countTriples(63)); // 54
// console.log(countTriples(249)); // 324
console.log(countTriples(250)); // 330
