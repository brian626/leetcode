// 738. Monotone Increasing Digits

// Given a non-negative integer N, find the largest number that is less than or equal to N with monotone increasing digits.

// (Recall that an integer has monotone increasing digits if and only if each pair of adjacent digits x and y satisfy x <= y.)

// Example 1:
// Input: N = 10
// Output: 9

// Example 2:
// Input: N = 1234
// Output: 1234

// Example 3:
// Input: N = 332
// Output: 299

// Note: N is an integer in the range [0, 10^9].

function isMonotone(n: number): boolean {
    if (n < 10) {
        return true
    }

    const digits: string[] = n.toString().split("")
    let lastDigit = digits[0]

    for (let i = 1; i < digits.length; i++) {
        if (digits[i] < lastDigit) {
            return false
        }

        lastDigit = digits[i]
    }

    return true
}

function monotoneIncreasingDigits(N: number): number {
    log(`considering ${N}`)

    if (N < 10) {
        log(`  it's monotone`)
        return N
    }
    else if (N == 10) {
        log(`  returning 9`)
        return 9
    }

    // At this point, we know N > 10 and is not monotone increasing.

    // Look at pairs of digits, starting from the right end. If we find a
    // non-monotone increasing pair, decrement the first one, and set all
    // digits to the right to 9.
    let digits: number[] = N.toString().split("").map((a) => parseInt(a, 10))
    let i: number = digits.length - 1
    while (true) {
        if (i == 0) {
            break
        }

        log(`  outer loop: comparing digits ${digits[i-1]} and ${digits[i]}`)
        if (digits[i-1] <= digits[i]) {
            // Nothing to do...
            log(`  nothing to do`)
        }
        else {
            log(`  decrementing digit ${i-1}, setting all digits to the right to 9`)
            digits[i-1] -= 1
            for (let j = i; j < digits.length; j++) {
                digits[j] = 9
            }
            log(`  digits after operation: ${digits}`)
        }

        i--
    }

    const ret = digits.join("")
    return parseInt(ret, 10)
};

let DEBUG_738: boolean = false
function log(s: string): void {
    if (DEBUG_738) {
        console.log(s)
    }
}

function monotoneIncreasingDigitsLoop(N: number): number {
    if (isMonotone(N)) {
        return N
    }

    for (let i = N; i > 9; i--) {
        if (isMonotone(i)) {
            return i
        }
    }

    return 9
}

// const MIN = 0
// const MAX = 20001
// for (let j = MIN; j < MAX; j++) {
//     const loop = monotoneIncreasingDigitsLoop(j)
//     const direct = monotoneIncreasingDigits(j)

//     if (loop != direct) {
//         console.log(`${j}: ${loop} != ${direct}`)
//     }
// }

// console.log(monotoneIncreasingDigits(10)) // Output: 9
// console.log(monotoneIncreasingDigits(1234)) // Output: 1234
// console.log(monotoneIncreasingDigits(332)) // Output: 299
// console.log(monotoneIncreasingDigits(3321)) // Output: 2999
// console.log(monotoneIncreasingDigits(987654321)) // Output 899999999
