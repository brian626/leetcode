// 22. Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.


// Example 1:

// Input: n = 3
// Output: ["((()))",
//     "(()())",
//     "(())()",
//     "()(())",
//     "()()()"
// ]

// Example 2:

// Input: n = 1
// Output: ["()"]


// Constraints:

// 1 <= n <= 8

// Length of string = 2 * n
// # of combinations per level = 2 ^ (2 * n)
//
// At n = 8, that is 2 ^ 16 = 65,536 combinations
//
// Would it be fast enough to generate them all and test each one?
//
// Actually wouldn't haven't to test them all - the first char will always be (, and the last will always be )
//
// So at n = 8, that's only 2 ^ 14 = 16,384 combinations
//
// Test would be: do all ) come after a matching (?
//
// Actually...could the test logic be used in generation?

function doIt(partials: string[], length: number): string[] {

    let newPartials: string[] = []
    while (partials[0]?.length != length) {
        while (partials.length > 0) {
            const partial = partials.pop()
            if (partial.length == length) { break }

            newPartials.push(partial + "(")
            newPartials.push(partial + ")")
        }

        partials = Array.from(newPartials)
        newPartials = []
    }

    // Weed out the invalid ones
    let returns: string[] = []
    partials.forEach(partial => {
        const startsWithOpen = partial[0] == "("
        const endsWithClose = partial[partial.length - 1] == ")"
        if (startsWithOpen && endsWithClose) {
            const openCount = partial.split("").filter(x => x == "(").length
            const closeCount = partial.split("").filter(x => x == ")").length
            if (openCount == closeCount) {
                let parensMatch: boolean = true
                let numOpens: number = 1
                for (let i = 1; i < partial.length; i++) {
                    if (partial[i] == "(") { numOpens++ }
                    else { numOpens-- }

                    if (numOpens < 0) { parensMatch = false; break }
                }

                if (parensMatch) {
                    returns.push(partial)
                }
            }
        }
    })

    return returns
}


function generateParenthesis(n: number): string[] {
    let results = [""]
    results = doIt([""], n * 2)
    return results
};

// console.log(generateParenthesis(1))
// Output: ["()"]

// console.log(generateParenthesis(2))
// Output: ["(())", "()()"]

// console.log(generateParenthesis(3))
// Output: [
//     "((()))",
//     "(()())",
//     "(())()",
//     "()(())",
//     "()()()"
// ]

// console.log(generateParenthesis(4))
// Output: [
//    "(((())))", "((()()))",
//    "((())())", "((()))()",
//    "(()(()))", "(()()())",
//    "(()())()", "(())(())",
//    "(())()()", "()((()))",
//    "()(()())", "()(())()",
//    "()()(())", "()()()()"
// ]

// console.log(generateParenthesis(5))

// console.log(generateParenthesis(6))

console.log(generateParenthesis(8))
