// 984. String Without AAA or BBB

// Given two integers a and b, return any string s such that:

// s has length a + b and contains exactly a 'a' letters, and exactly b 'b' letters,
// The substring 'aaa' does not occur in s, and
// The substring 'bbb' does not occur in s.


// Example 1:

// Input: a = 1, b = 2
// Output: "abb"
// Explanation: "abb", "bab" and "bba" are all correct answers.

// Example 2:

// Input: a = 4, b = 1
// Output: "aabaa"


// Constraints:

// 0 <= a, b <= 100
// It is guaranteed such an s exists for the given a and b.

function strWithout3a3b(a: number, b: number): string {
    if (a == 0 && b == 0) { return "" }

    let output: string = ""

    let consecutiveAs: number = 0
    let consecutiveBs: number = 0

    while (a > 0 || b > 0) {
        console.log(`loop start - a: ${a}, b: ${b}`)

        if (a >= b) {
            if (consecutiveAs == 2) {
                if (b > 0) {
                    output += "b"
                    b -= 1
                    consecutiveAs = 0
                    consecutiveBs = 1
                }
                else {
                    break
                }
            }
            else if (a > 0) {
                output += "a"
                a -= 1
                consecutiveAs++
                consecutiveBs = 0
            }
            else {
                break
            }
        }
        else {
            if (consecutiveBs == 2) {
                if (a > 0) {
                    output += "a"
                    a -= 1
                    consecutiveAs = 1
                    consecutiveBs = 0
                }
                else {
                    break
                }
            }
            else if (b > 0) {
                output += "b"
                b -= 1
                consecutiveBs++
                consecutiveAs = 0
            }
            else {
                break
            }
        }

        console.log(`loop end - a: ${a}, b: ${b}`)
    }

    console.log(`returning - a: ${a}, b: ${b}`)

    return output
};

// console.log(strWithout3a3b(1, 1)) // Output: "ab"
// console.log(strWithout3a3b(1, 2)) // Output: "abb"
// console.log(strWithout3a3b(1, 3)) // Output: "bbab"
// console.log(strWithout3a3b(1, 4)) // Output: "bbabb"

// console.log(strWithout3a3b(2, 1)) // Output: "aab"
// console.log(strWithout3a3b(2, 2)) // Output: "abab"
// console.log(strWithout3a3b(2, 3)) // Output: "babab"
// console.log(strWithout3a3b(2, 4)) // Output: "bbabab"
// console.log(strWithout3a3b(2, 5)) // Output: "bbabbab"
// console.log(strWithout3a3b(2, 6)) // Output: "bbabbabb"

// console.log(strWithout3a3b(4, 1)) // Output: "aabaa"
// console.log(strWithout3a3b(4, 2)) // Output: "aabaab"
// console.log(strWithout3a3b(4, 3)) // Output: "aababab"
// console.log(strWithout3a3b(4, 4)) // Output: "abababab"
// console.log(strWithout3a3b(4, 5)) // Output: "babababab"
// console.log(strWithout3a3b(4, 8)) // Output: "bbabbabbabab"
