// 43. Multiply Strings

// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.


// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"

// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"


// Constraints:

// 1 <= num1.length, num2.length <= 200
// num1 and num2 consist of digits only.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.

const TIMES_TABLE = {
    "2": [["2","4"],["3","6"],["4","8"],["5","10"],["6","12"],["7","14"],["8","16"],["9","18"]],
    "3": [["3","9"],["4","12"],["5","15"],["6","18"],["7","21"],["8","24"],["9","27"]],
    "4": [["4","16"],["5","20"],["6","24"],["7","28"],["8","32"],["9","36"]],
    "5": [["5","25"],["6","30"],["7","35"],["8","40"],["9","45"]],
    "6": [["6","36"],["7","42"],["8","48"],["9","54"]],
    "7": [["7","49"],["8","56"],["9","63"]],
    "8": [["8","64"],["9","72"]],
    "9": [["9","81"]],
}

const ADDITION_TABLE = {
    "1": [["1","2"],["2","3"],["3","4"],["4","5"],["5","6"],["6","7"],["7","8"],["8","9"],["9","10"]],
    "2": [["2","4"],["3","5"],["4","6"],["5","7"],["6","8"],["7","9"],["8","10"],["9","11"]],
    "3": [["3","6"],["4","7"],["5","8"],["6","9"],["7","10"],["8","11"],["9","12"]],
    "4": [["4","8"],["5","9"],["6","10"],["7","11"],["8","12"],["9","13"]],
    "5": [["5","10"],["6","11"],["7","12"],["8","13"],["9","14"]],
    "6": [["6","12"],["7","13"],["8","14"],["9","15"]],
    "7": [["7","14"],["8","15"],["9","16"]],
    "8": [["8","16"],["9","17"]],
    "9": [["9","18"]],
}

function minDigit(d1: string, d2: string): string { return (d1 < d2) ? d1 : d2 }
function maxDigit(d1: string, d2: string): string { return (d1 > d2) ? d1 : d2 }

function addDigits(d1: string, d2: string): [string, string] {
    if      (d1 === "0") { return [d2, "0"] }
    else if (d2 === "0") { return [d1, "0"] }

    if (d1 > d2) { [d2, d1] = [d1, d2] }

    let sums: string[] = ADDITION_TABLE[d1]
    for (let i = 0; i < sums.length; i++) {
        let s = sums[i]
        if (s[0] === d2) {
            let sum = s[1]
            if (sum.length > 1) {
                return [sum[1], sum[0]]
            }
            else {
                return [sum[0], "0"]
            }
        }
    }
}

function padLeft(num: string, pad: number) {
    let newNum = ""
    for (let i = 0; i < pad; i++) { newNum += "0" }
    return newNum + num
}

function padRight(num: string, pad: number) {
    let newNum = num
    for (let i = 0; i < pad; i++) { newNum += "0" }
    return newNum
}

function add(num1: string, num2: string): string {
    if (num1.length < num2.length)      { num1 = padLeft(num1, num2.length - num1.length) }
    else if (num1.length > num2.length) { num2 = padLeft(num2, num1.length - num2.length) }

    let sum = ""
    let carry = "0"

    for (let i = num1.length - 1; i >= 0; i--) {
        let digit1 = num1[i]
        let digit2 = num2[i]
        if (carry !== "0") {
            let [newDigit1, _newCarry] = addDigits(digit1, carry)
            digit1 = newDigit1
        }

        let [subSum, newCarry] = addDigits(digit1, digit2)

        sum = subSum + sum
        carry = newCarry
    }

    if (carry != "0") {
        sum = carry + sum
        carry = "0"
    }

    return sum
}

function multiplyDigits(d1: string, d2: string): [string, string] {
    if (d1 === "0" || d2 === "0") { return ["0", "0"] }
    if (d1 === "1")      { return [d2, "0"] }
    else if (d2 === "1") { return [d1, "0"] }

    if (d1 > d2) { [d2, d1] = [d1, d2] }

    let products: string[] = TIMES_TABLE[d1]

    for (let i = 0; i < products.length; i++) {
        let p = products[i]
        if (p[0] === d2) {
            let product = p[1]
            if (product.length > 1) {
                return [product[1], product[0]]
            }
            else {
                return [product[0], "0"]
            }
        }
    }
}


function multiply(num1: string, num2: string): string {
    if (num1 === "0" || num2 === "0") { return "0" }

    if (num1.length < num2.length)      { num1 = padLeft(num1, num2.length - num1.length) }
    else if (num1.length > num2.length) { num2 = padLeft(num2, num1.length - num2.length) }
    log(`multiply: ${num1} * ${num2}`)

    let product = ""
    let carry = "0"
    let outerShift = 0
    for (let i = num1.length - 1; i >= 0; i--) {
        log(`  starting outer loop, i = ${i}`)
        let innerShift = outerShift
        for (let j = num2.length - 1; j >= 0; j--) {
            log(`  starting inner loop, j = ${j}, innerShift = ${innerShift}`)

            log(`  multiplying ${num2[i]} and ${num1[j]}`)

            let [subProduct, subCarry] = multiplyDigits(num2[i], num1[j])
            log(`  subProduct is ${subProduct}, subCarry is ${subCarry}, carry is ${carry}`)

            subProduct = add(subProduct, carry)
            if (subCarry != "0") {
                subProduct = subCarry + subProduct
                subCarry = "0"
            }

            if (product.length == 0) {
                product = subProduct
                log(`    @@ product initialized to ${product}`)
            }
            else {
                if (subProduct != "0") {
                    for (let k = 0; k < innerShift; k++) {
                        subProduct += "0"
                    }

                    product = add(subProduct, product)
                }

                log(`    @@ product is now ${product}`)
            }

            carry = subCarry
            innerShift += 1
        }

        outerShift += 1
    }

    return product
};

let DEBUG_43: boolean = false
function log(s: string): void {
    if (DEBUG_43) {
        console.log(s)
    }
}

console.log(multiply("2", "3")) // Output: "6"
console.log(multiply("123", "456")) // Output: "56088"
console.log(multiply("123", "0")) // Output: "0"
console.log(multiply("0", "123")) // Output: "0"
console.log(multiply("1", "456")) // Output: "456"
console.log(multiply("456", "1")) // Output: "456"
console.log(multiply("98", "9")) // Output: "882"
