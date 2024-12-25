// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

// Example 4:

// Input: s = "([)]"
// Output: false

// Example 5:

// Input: s = "{[]}"
// Output: true


// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
function isValid(s: string): boolean {
    let ret = true
    let lastOpen = []

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "(":
                lastOpen.push("(")
                break

            case "[":
                lastOpen.push("[")
                break

            case "{":
                lastOpen.push("{")
                break

            case ")":
                if (lastOpen.pop() != "(") { return false }
                break

            case "]":
                if (lastOpen.pop() != "[") { return false }
                break

            case "}":
                if (lastOpen.pop() != "{") { return false }
                break
            }
    }

    return (lastOpen.length == 0)
};

let DEBUG_20: boolean = false
function log(s: string): void {
    if (DEBUG_20) {
        console.log(s)
    }
}

// console.log(isValid("()")) // Output: true
// console.log(isValid("()[]{}")) // Output: true
// console.log(isValid("(]")) // Output: false
// console.log(isValid("([)]")) // Output: false
// console.log(isValid("{[]}")) // Output: true
// console.log(isValid("[")) // Output: false
