// 227. Basic Calculator II

// Given a string s which represents an expression, evaluate this expression and return its value.

// The integer division should truncate toward zero.

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().


// Example 1:

// Input: s = "3+2*2"
// Output: 7

// Example 2:

// Input: s = " 3/2 "
// Output: 1

// Example 3:

// Input: s = " 3+5 / 2 "
// Output: 5


// Constraints:

// 1 <= s.length <= 3 * 10^5
// s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
// s represents a valid expression.
// All the integers in the expression are non-negative integers in the range [0, 2^31 - 1].
// The answer is guaranteed to fit in a 32-bit integer.

function hasTimesOrDivide(s: string): boolean { return s.indexOf('*') != -1 || s.indexOf('/') != -1 }
function hasPlusOrMinus(s: string): boolean { return s.indexOf('+') != -1 || s.slice(1).indexOf('-') != -1 }
function isOperator(s: string): boolean { return s === '+' || s === '-' || s === '*' || s === '/' }

function extractPrefixAndArg(s: string): [string, string] {
    let prefix: string = ""
    let arg: string = s

    for (let i = s.length - 1; i >= 0; i--) {
        if (isOperator(s[i])) {
            prefix = s.slice(0, i + 1)
            arg = s.slice(i + 1)
            if (i == 0 && s[i] == '-') {
                prefix = ''
                arg = '-' + arg
            }
        }
    }

    return [prefix, arg]
}

function extractArgAndSuffix(s: string): [string, string] {
    let arg: string = s
    let suffix: string = ""

    for (let i = s.length - 1; i >= 0; i--) {
        if (isOperator(s[i])) {
            arg = s.slice(0, i)
            suffix = s.slice(i)
        }
    }

    return [arg, suffix]
}

function calculate(s: string): number {
    // Remove spaces
    s = s.replace(new RegExp(' ', 'g'), '')

    while (hasTimesOrDivide(s)) {
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '*' || s[i] === '/') {
                const [prefix, arg1] = extractPrefixAndArg(s.slice(0, i))
                const [arg2, suffix] = extractArgAndSuffix(s.slice(i + 1))
                console.log(`${prefix} ${arg1} [*/] ${arg2} ${suffix}`)
                let result: string = ""
                if (s[i] === '*') { result = (parseInt(arg1, 10) * parseInt(arg2, 10)).toString() }
                else              {
                    const resultNum: number = parseInt(arg1, 10) / parseInt(arg2, 10)
                    result = (resultNum < 0) ? Math.ceil(resultNum).toString() : Math.floor(resultNum).toString()
                }

                s = prefix + result + suffix
                console.log(s)
            }
        }
    }

    while (hasPlusOrMinus(s)) {
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '+' || (i > 0 && s[i] === '-')) {
                const [prefix, arg1] = extractPrefixAndArg(s.slice(0, i))
                const [arg2, suffix] = extractArgAndSuffix(s.slice(i + 1))
                console.log(`[${prefix}] [${arg1}] [${s[i]}] [${arg2}] [${suffix}]`)
                let result: string = ""
                if (s[i] === '+') { result = (parseInt(arg1, 10) + parseInt(arg2, 10)).toString() }
                else              { result = (parseInt(arg1, 10) - parseInt(arg2, 10)).toString() }

                s = prefix + result + suffix
                console.log(s)
            }
        }
    }

    return parseInt(s, 10)
};

// console.log(calculate("3+2*2")) // Output: 7
// console.log(calculate(" 3/2 ")) // Output: 1
// console.log(calculate(" 3+5 / 2 ")) // Output: 5
// console.log(calculate("0-2147483647"))
// console.log(calculate("1-1+1"))
// console.log(calculate("1-1-1"))
// console.log(calculate("2-3+4"))
console.log(calculate("1*2-3/4+5*6-7*8+9/10"))
