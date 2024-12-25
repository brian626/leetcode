// 29. Divide Two Integers

// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// Return the quotient after dividing dividend by divisor.

// The integer division should truncate toward zero, which means losing its fractional part. For example,
// truncate(8.345) = 8 and truncate(-2.7335) = -2.

// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed
// integer range: [−2^31, 2^31 − 1]. For this problem, assume that your function returns 2^31 − 1 when the division result overflows.



// Example 1:

// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = truncate(3.33333..) = 3.

// Example 2:

// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = truncate(-2.33333..) = -2.

// Example 3:

// Input: dividend = 0, divisor = 1
// Output: 0

// Example 4:

// Input: dividend = 1, divisor = 1
// Output: 1


// Constraints:

// -2^31 <= dividend, divisor <= 2^31 - 1
// divisor != 0

function divide(dividend: number, divisor: number): number {
    // It's easier to work with positive numbers, so let's flip one or both and remember to flip back
    // at the end if only one was negative.
    let resultIsNegative = (divisor > 0 && dividend < 0) || (divisor < 0 && dividend > 0)
    if (dividend < 0) { dividend = dividend - dividend - dividend }
    if (divisor < 0)  { divisor = divisor - divisor - divisor }

    // Trivial case: If dividend is less than the divisor (or zero), then the result will be less than 1,
    // and truncating it will result in 0.
    if (dividend < divisor) { return 0 }

    log(`dividend = ${dividend}, divisor = ${divisor}`)

    let dividendDigits = dividend.toString().split("").map(d => parseInt(d, 10)).reverse()
    let result: number[] = []

    let currentDividend = 0
    while (true) {
        currentDividend *= 10
        if (dividendDigits.length > 0) {
            currentDividend += dividendDigits.pop()
        }
        else {
            // Don't need the fractional part
            log(`Result is non-integer, bailing...`)
            break
        }
        log(`currentDividend: ${currentDividend}`)

        if (currentDividend < divisor) {
            // ???
            log(`  too small, continuing...`)
            continue
        }

        let resultDigit = 0
        if (divisor == 1) {
            resultDigit = currentDividend
            currentDividend = 0
        }
        else {
            while (currentDividend >= divisor) {
                resultDigit += 1
                currentDividend -= divisor
                log(`  end of division loop: resultDigit = ${resultDigit}, currentDividend = ${currentDividend}, dividendMod = dividendMod`)
            }
        }
        result.push(resultDigit)
        log(`pushed digit ${resultDigit} onto result`)

        let remainder = currentDividend
        if (remainder == 0 && dividendDigits.length == 0) {
            // All done
            log(`All done!`)
            break
        }
        else {
            // Keep going
            log(`Keep going, remainder = ${remainder}`)
        }
    }

    log(result.toString())
    let resultString = result.map(d => d.toString()).join("")
    let resultInt = parseInt(resultString, 10)

    if (resultIsNegative) {
        resultInt = resultInt - resultInt - resultInt
    }

    if (resultInt > (Math.pow(2,31) - 1)) {
        log(`Overflow!`)
        resultInt = Math.pow(2,31) - 1
    }

    return resultInt
};

let DEBUG_29: boolean = false
function log(s: string): void {
    if (DEBUG_29) {
        console.log(s)
    }
}

// console.log(divide(6,2)) // Output: 3
// console.log(divide(12,3)) // Output: 4
// console.log(divide(12,4)) // Output: 3
// console.log(divide(5,2)) // Output: 2(.5)
// console.log(divide(7,3)) // Output: 2(.333...)
// console.log(divide(7,-3)) // Output: -2(.333...)
// console.log(divide(-7,3)) // Output: -2(.333...)
// console.log(divide(5,3)) // Output: 1
// console.log(divide(-1 * Math.pow(2,31), -1)) // Output: 2147483647
// console.log(divide(Math.pow(2,31) - 1, -1)) // Output: -2147483647
// console.log(divide(Math.pow(2,31) - 1, 3)) // Output: 715827882
// console.log(divide(1,2)) // Output: 0
// console.log(divide(-9,-3)) // Output: 3
