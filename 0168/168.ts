// 168. Excel Sheet Column Title

// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// W -> 23
// X -> 24
// Y -> 25
// Z -> 26
// AA -> 27
// AB -> 28
// ...
// AZ -> 52
// BA -> 53
// BB -> 54
// ...
// BZ -> 78


// Example 1:

// Input: columnNumber = 1
// Output: "A"

// Example 2:

// Input: columnNumber = 28
// Output: "AB"

// Example 3:

// Input: columnNumber = 701
// Output: "ZY"

// Example 4:

// Input: columnNumber = 2147483647
// Output: "FXSHRXW"


// Constraints:

// 1 <= columnNumber <= 2^31 - 1

function numToLetter(n: number): string {
    return String.fromCharCode(n + 64)
}

function convertToTitle(columnNumber: number): string {
    let title: string[] = []

    while (true) {
        if (columnNumber <= 26) {
            title.push(numToLetter(columnNumber))
            break
        }

        let letterNum = columnNumber % 26
        if (letterNum == 0) { letterNum = 26 }
        title.push(numToLetter(letterNum))

        columnNumber = Math.floor((columnNumber - letterNum) / 26)
    }

    return title.reverse().join("")
};

// console.log(convertToTitle(1)) // Output: "A"
// console.log(convertToTitle(26)) // Output: "Z"
// console.log(convertToTitle(27)) // Output: "AA"
// console.log(convertToTitle(28)) // Output: "AB"
// console.log(convertToTitle(701)) // Output: "ZY"
// console.log(convertToTitle(702)) // Output: "ZZ"
// console.log(convertToTitle(703)) // Output: "AAA"
// console.log(convertToTitle(2147483647)) // Output: "FXSHRXW"

for (let i = 1; i < 1000; i++) {
    console.log(`${convertToTitle(i)} : ${i}`)
}
