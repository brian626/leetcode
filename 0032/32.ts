// 32. Longest Valid Parentheses

// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.


// Example 1:

// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".

// Example 2:

// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".

// Example 3:

// Input: s = ""
// Output: 0


// Constraints:

// 0 <= s.length <= 3 * 10^4
// s[i] is '(', or ')'.

function longestValidParentheses(s: string): number {
    // if (s.length < 2) { return 0 }

    while (true) {
        let madeSubstitution: boolean = false

        // Pass one - replace () with |2|
        if (s.indexOf("()") != -1) {
            madeSubstitution = true
            s = s.replace(/\(\)/g, "|2|")
        }

        console.log(`after pass one: "${s}"`)

        // Pass two - look for (|n|) and replace with |n+2|
        let numInParens = s.match(/\(\|[0-9]+\|\)/)
        while (numInParens != null) {
            console.log(numInParens)
            madeSubstitution = true
            const newValue: number = parseInt(numInParens[0].replace(/[()|]/g, ""), 10) + 2
            s = s.replace(numInParens[0], `|${newValue}|`)
            numInParens = s.match(/\(\|[0-9]+\|\)/)
        }

        console.log(`after pass two: "${s}"`)

        // Pass three - look for |m||n| and replace with |m+n|
        let adjacentNums = s.match(/\|([0-9]+)\|\|([0-9]+)\|/)
        while (adjacentNums != null) {
            console.log(adjacentNums)
            madeSubstitution = true
            const newValue = parseInt(adjacentNums[1], 10) + parseInt(adjacentNums[2], 10)
            console.log(`replacing "${adjacentNums[0]} with |${newValue}|`)
            s = s.replace(adjacentNums[0], `|${newValue}|`)
            adjacentNums = s.match(/\|([0-9]+)\|\|([0-9]+)\|/)
        }

        console.log(`after pass three: "${s}"`)

        if (!madeSubstitution) {
            break
        }
    }

    // We are left with a string containing unmatched parentheses and pipe-delimited numbers.
    // Let's toss the unmatched parens and return the biggest number.
    s = s.replace(/[()]/g, "")
    console.log(s)
    const lengths: number[] = (s.length > 0) ? s.split("|").map(x => (x.length > 0) ? parseInt(x, 10) : 0) : [0]
    console.log(lengths)

    return Math.max(...lengths)
};

console.log(longestValidParentheses("(()"))
// Output: 2

console.log(longestValidParentheses(")()())"))
// Output: 4

console.log(longestValidParentheses(""))
// Output: 0

console.log(longestValidParentheses("("))
// Output: 0

console.log(longestValidParentheses(")"))
// Output: 0

console.log(longestValidParentheses("(("))
// Output: 0

console.log(longestValidParentheses("(()()()))(()())"))
// Output: 8
