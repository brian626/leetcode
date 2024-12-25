// 67. Add Binary

// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"

// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"


// Constraints:

// 1 <= a.length, b.length <= 10^4
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

function addBinary(a: string, b: string): string {
    let sum: string = ""
    if (b.length > a.length) { [a, b] = [b, a] }

    let indexA = a.length - 1
    let indexB = b.length - 1
    let carry = false
    while (indexA >= 0 && indexB >= 0) {
        console.log(`indexA = ${indexA}, indexB = ${indexB}, carry = ${carry}, sum = ${sum}`)

        if (a[indexA] == "0" && b[indexB] == "0") {
            sum = (carry ? "1" : "0") + sum
            carry = false
        }
        else if (a[indexA] == "0" && b[indexB] == "1" || a[indexA] == "1" && b[indexB] == "0") {
            if (carry) { sum = "0" + sum }
            else       { sum = "1" + sum }
        }
        else {
            if (carry) { sum = "1" + sum }
            else       { sum = "0" + sum; carry = true }
        }

        if (indexA >= 0) { indexA-- }
        if (indexB >= 0) { indexB--}
    }

    while (indexA > -1) {
        if (a[indexA] == "0") {
            if (carry) { carry = false; sum = "1" + sum }
            else       { sum = "0" + sum }
        }
        else {
            if (carry) { sum = "0" + sum }
            else       { sum = "1" + sum }
        }

        indexA--
    }

    if (carry) { sum = "1" + sum }

    return sum
};

// console.log(addBinary("11", "1"))
// Output: "100"

// console.log(addBinary("1010", "1011"))
// Output: "10101"

console.log(addBinary("1111", "1111"))
// "11110"
