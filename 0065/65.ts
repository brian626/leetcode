// 65. Valid Number

// A valid number can be split up into these components (in order):

// A decimal number or an integer.
// (Optional) An 'e' or 'E', followed by an integer.

// A decimal number can be split up into these components (in order):

// (Optional) A sign character (either '+' or '-').
// One of the following formats:
// At least one digit, followed by a dot '.'.
// At least one digit, followed by a dot '.', followed by at least one digit.
// A dot '.', followed by at least one digit.

// An integer can be split up into these components (in order):

// (Optional) A sign character (either '+' or '-').
// At least one digit.

// For example, all the following are valid numbers:
// [
//     "2",
//     "0089",
//     "-0.1",
//     "+3.14",
//     "4.",
//     "-.9",
//     "2e10",
//     "-90E3",
//     "3e+7",
//     "+6e-1",
//     "53.5e93",
//     "-123.456e789"
// ], while the following are not valid numbers:
// [
//     "abc",
//     "1a",
//     "1e",
//     "e3",
//     "99e2.5",
//     "--6",
//     "-+3",
//     "95a54e53"
// ].

// Given a string s, return true if s is a valid number.



// Example 1:

// Input: s = "0"
// Output: true
// Example 2:

// Input: s = "e"
// Output: false
// Example 3:

// Input: s = "."
// Output: false
// Example 4:

// Input: s = ".1"
// Output: true


// Constraints:

// 1 <= s.length <= 20
// s consists of only English letters (both uppercase and lowercase), digits (0-9), plus '+', minus '-', or dot '.'.

function isValidInteger(s: string): boolean {
    const match = s.match(/^[+-]{0,1}[0-9]+$/)
    // console.log(match)

    return match != null
}

function isValidDecimalOrInteger(s: string): boolean {
    if (isValidInteger(s)) { return true }

    const match1 = s.match(/^[+\-]{0,1}[0-9]+\.[0-9]*$/)
    const match2 = s.match(/^[+\-]{0,1}\.[0-9]+$/)
    // console.log(match1)
    // console.log(match2)

    return match1 != null || match2 != null
}

function isNumber(s: string): boolean {
    if (isValidDecimalOrInteger(s)) { return true }

    const match = s.match(/^([^eE]*)[eE]([^eE]*)$/)
    // console.log(match)

    return (match != null) ? isValidDecimalOrInteger(match[1]) && isValidInteger(match[2]) : false
};

console.log("all true below")
console.log(isNumber("2"))
console.log(isNumber("0089"))
console.log(isNumber("-0.1"))
console.log(isNumber("+3.14"))
console.log(isNumber("4."))
console.log(isNumber("-.9"))
console.log(isNumber("2e10"))
console.log(isNumber("-90E3"))
console.log(isNumber("3e+7"))
console.log(isNumber("+6e-1"))
console.log(isNumber("53.5e93"))
console.log(isNumber("-123.456e789"))

console.log("")
console.log("all false below")
console.log(isNumber("abc"))
console.log(isNumber("1a"))
console.log(isNumber("1e"))
console.log(isNumber("e3"))
console.log(isNumber("99e2.5"))
console.log(isNumber("--6"))
console.log(isNumber("-+3"))
console.log(isNumber("95a54e53"))
console.log(isNumber("."))
