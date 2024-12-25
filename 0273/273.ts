// 273. Integer to English Words

// Convert a non-negative integer num to its English words representation.


// Example 1:

// Input: num = 123
// Output: "One Hundred Twenty Three"

// Example 2:

// Input: num = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"

// Example 3:

// Input: num = 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

// Example 4:

// Input: num = 1234567891
// Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"


// Constraints:

// 0 <= num <= 2^31 - 1 = 2,147,483,647

const ONE_BILLION =  1000000000
const ONE_MILLION =  1000000
const ONE_THOUSAND = 1000

function digitToWords(d: number): string {
    switch(d) {
        case 1:
            return "One "
        case 2:
            return "Two "
        case 3:
            return "Three "
        case 4:
            return "Four "
        case 5:
            return "Five "
        case 6:
            return "Six "
        case 7:
            return "Seven "
        case 8:
            return "Eight "
        case 9:
            return "Nine "
        case 10:
            return "Ten "
        default:
            return `digitToWords default: ${d}`
    }
}

function twoDigitsToWords(d: number): string {
    switch(d) {
        case 2:
            return "Twenty "
        case 3:
            return "Thirty "
        case 4:
            return "Forty "
        case 5:
            return "Fifty "
        case 6:
            return "Sixty "
        case 7:
            return "Seventy "
        case 8:
            return "Eighty "
        case 9:
            return "Ninety "
        default:
            return "twoDigitsToWords default"
    }
}

function teensToWords(n: number): string {
    switch(n) {
        case 10:
            return "Ten "
        case 11:
            return "Eleven "
        case 12:
            return "Twelve "
        case 13:
            return "Thirteen "
        case 14:
            return "Fourteen "
        case 15:
            return "Fifteen "
        case 16:
            return "Sixteen "
        case 17:
            return "Seventeen "
        case 18:
            return "Eighteen "
        case 19:
            return "Nineteen "
        default:
            return "teensToWords default"
    }
}

function numToWords(n: number): string {
    let words = ""

    // 100 <= n < 1000
    if (n >= 100) {
        let numHundreds = Math.floor(n / 100)
        words += `${digitToWords(numHundreds)}Hundred `

        n = n % 100
    }

    // 20 <= n < 100
    if (n >= 20) {
        let numTens = Math.floor(n / 10)
        words += twoDigitsToWords(numTens)
        let numOnes = n % 10
        if (numOnes > 0) {
            words += digitToWords(numOnes)
        }
    }
    // 10 <= n < 20
    else if (n > 10) {
        words += teensToWords(n)
    }
    // 0 < n < 10
    else if (n > 0) {
        words += digitToWords(n)
    }

    return words
}

function compose(b: number, m: number, t: number, o: number): string {
    let words = ""

    if (b > 0) {
        words += `${numToWords(b)}Billion `
    }
    if (m > 0) {
        words += `${numToWords(m)}Million `
    }
    if (t > 0) {
        words += `${numToWords(t)}Thousand `
    }
    if (o > 0) {
        words += numToWords(o)
    }

    return words
}

function numberToWords(num: number): string {
    if (num == 0) {
        return "Zero"
    }

    let numBillions = 0, numMillions = 0, numThousands = 0, numOnes = 0

    while (num >= ONE_BILLION) {
        numBillions++
        num -= ONE_BILLION
    }

    while (num >= ONE_MILLION) {
        numMillions++
        num -= ONE_MILLION
    }

    while (num >= ONE_THOUSAND) {
        numThousands++
        num -= ONE_THOUSAND
    }

    numOnes = num

    return compose(numBillions, numMillions, numThousands, numOnes).trim()
};

// console.log(numberToWords(120)) // Output: "One Hundred Twenty"
// console.log(numberToWords(123)) // Output: "One Hundred Twenty Three"
// console.log(numberToWords(12345)) // Output: "Twelve Thousand Three Hundred Forty Five"
// console.log(numberToWords(1234567)) // Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
// console.log(numberToWords(1234567891)) // Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
// console.log(numberToWords(9))
// console.log(numberToWords(10))
// console.log(numberToWords(11))
// console.log(numberToWords(99))
// console.log(numberToWords(100))
// console.log(numberToWords(101))
// console.log(numberToWords(999))
// console.log(numberToWords(1000))
// console.log(numberToWords(1001))
// console.log(numberToWords(0))
// console.log(numberToWords(100000))
console.log(numberToWords(50858))

// const MIN = ONE_MILLION - ONE_THOUSAND
// const MAX = ONE_MILLION + ONE_THOUSAND
// for (let i = MIN; i < MAX; i++) {
//     console.log(numberToWords(i))
// }
