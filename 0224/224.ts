// 224. Basic Calculator

// Given a string s representing a valid expression, implement a basic calculator
// to evaluate it, and return the result of the evaluation.

// Note: You are not allowed to use any built-in function which evaluates strings
// as mathematical expressions, such as eval().


// Example 1:

// Input: s = "1 + 1"
// Output: 2

// Example 2:

// Input: s = " 2-1 + 2 "
// Output: 3

// Example 3:

// Input: s = "(1+(4+5+2)-3)+(6+8)"
// Output: 23

// Example 4:

// Input: s = "+48 + -48"
// Output: 0
// Explanation: Numbers can have multiple digits and start with +/-.


// Constraints:

// 1 <= s.length <= 3 * 10^5
// s consists of digits, '+', '-', '(', ')', and ' '.
// s represents a valid expression.
// Every number and running calculation will fit in a signed 32-bit integer.

const ADDITION_REGEX    = new RegExp('^(-{0,1}[0-9]+)\\\+(-{0,1}[0-9]+)(.*)$')
const SUBTRACTION_REGEX = new RegExp('^(-{0,1}[0-9]+)-(-{0,1}[0-9]+)(.*)$')

function hasParenthesis(s: string): boolean { return s.indexOf('(') != -1 }
function hasOperation(s: string): boolean   { return s.indexOf('+') != -1 || s.slice(1).indexOf('-') != -1 }

function operate(s: string): string {
    log(`  add/subtract`)
    let addMatch: RegExpMatchArray = s.match(ADDITION_REGEX)
    let subtractMatch: RegExpMatchArray = s.match(SUBTRACTION_REGEX)

    log(`${addMatch}`)
    log(`${subtractMatch}`)

    if (addMatch && !hasOperation(addMatch[1]) && !hasOperation(addMatch[2])) {
        log(`  adding ${addMatch[1]} and ${addMatch[2]}`)
        const sum = parseInt(addMatch[1], 10) + parseInt(addMatch[2], 10)
        s = `${sum}${addMatch[3]}`
    }
    if (subtractMatch && !hasOperation(subtractMatch[1]) && !hasOperation(subtractMatch[2])) {
        log(`  subtracting ${subtractMatch[1]} and ${subtractMatch[2]}`)
        const difference = parseInt(subtractMatch[1], 10) - parseInt(subtractMatch[2], 10)
        s = `${difference}${subtractMatch[3]}`
    }

    return s
}

function simplify(s: string): string {
    log(`simplify(${s})`)
    // Look for a parenthetical and evaluate it first
    if (hasParenthesis(s)) {
        log(`  paren`)
        let parenStart = 0
        let parenEnd = 0
        for (let i = 0; i < s.length; i++) {
            if (s[i] == '(') {
                parenStart = i
            }
            else if (s[i] == ')') {
                parenEnd = i
                break
            }
        }

        let parenthetical: string = s.slice(parenStart + 1, parenEnd)
        log(`  simplifying parenthetical ${parenthetical}`)
        while (true) {
            const tempParenthetical = parenthetical
            parenthetical = operate(parenthetical)
            if (parenthetical === tempParenthetical) { log(`    breaking because ${tempParenthetical} == ${parenthetical}`); break }
            else { log(`    continuing because ${tempParenthetical} != ${parenthetical}`) }
        }
        log(`  simplified: ${parenthetical}`)
        s = s.slice(0, parenStart) + parenthetical + s.slice(parenEnd + 1)
    }

    // Otherwise, look for an addition or subtraction to simplify
    else if (hasOperation(s)) {
        s = operate(s)
    }

    log(`  done`)
    return s
}

function calculate(s: string): number {
    // Remove spaces
    s = s.replace(new RegExp(' ', 'g'), '')

    // Simplify signs
    s = s.replace(new RegExp('\\\+-', 'g'), '-')
    s = s.replace(new RegExp('\\\+\\\+', 'g'), '+')
    s = s.replace(new RegExp('--', 'g'), '+')
    s = s.replace(new RegExp('^\\\+', 'g'), '')
    s = s.replace(new RegExp('^\\\+'), '')
    s = s.replace(new RegExp('\\\(\\\+'), '(')

    // Simply expressions
    while (true) {
        const sTemp = s
        s = simplify(s)
        if (sTemp === s) { break }
    }

    return parseInt(s, 10)
};

let DEBUG_224: boolean = false
function log(s: string): void {
    if (DEBUG_224) {
        console.log(s)
    }
}

console.log(calculate("1 + 1")) // Output: 2
console.log(calculate("(1 + 1)")) // Output: 2
console.log(calculate("(1 + 1 + 1)")) // Output: 3
console.log(calculate(" 2-1 + 2 ")) // Output: 3
console.log(calculate("(1+(4+5+2)-3)+(6+8)")) // Output: 23
console.log(calculate("+48 + -48")) // Output: 0
console.log(calculate("-2+ 1")) // -1
console.log(calculate("1-(+1+1)")) // -1
