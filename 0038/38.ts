// 38. Count and Say

// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is
// then converted into a different digit string.

// To determine how you "say" a digit string, split it into the minimal number of groups so that
// each group is a contiguous section all of the same character. Then for each group, say the number
// of characters, then say the character. To convert the saying into a digit string, replace the
// counts with a number and concatenate every saying.

// For example, the saying and conversion for digit string "3322251": "23321511"

// Given a positive integer n, return the nth term of the count-and-say sequence.


// Example 1:

// Input: n = 1
// Output: "1"
// Explanation: This is the base case.

// Example 2:

// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

// countAndSay(5) = say "1211" = one 1 + one 2 + two 1's = "111221"
// countAndSay(6) = say "111221" = "312211"


// Constraints:

// 1 <= n <= 30

function say(s: string): string {
    let output: string = ""

    let i: number = 0
    while (i < s.length) {
        let val = s[i++]
        let count = 1
        while (i < s.length && s[i] == val) {
            count++
            i++
        }

        output += `${count}${val}`
    }

    return output
}

function countAndSay(n: number): string {
    if (n == 1) { return "1" }
    else        { return say(countAndSay(n - 1)) }
};

console.log(countAndSay(9))
