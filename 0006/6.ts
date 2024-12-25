// 6. ZigZag Conversion

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows
// like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:


// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"


// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

function convert(s: string, numRows: number): string {
    let substrings: string[] = []
    let substringIndex: number = 0
    let n: number = 0
    let mode: number = 0 // 0 = vertical, 1 = diagonal
    let diagonalRowIndex = numRows - 2

    for (let index = 0; index < numRows; index++) {
        substrings[index] = ""
    }

    let incrementN: boolean = true
    while (n < s.length) {
        // console.log(`considering character #${n} == ${s[n]}`)

        if (mode == 0) {
            // console.log(`  mode = 0, substringIndex = ${substringIndex}`)
            // console.log(`  append ${s[n]} to substring #${substringIndex}`)
            substrings[substringIndex] += s[n]
            if (substringIndex < (numRows - 1)) {
                // console.log(`  incrementing substringIndex`)
                substringIndex += 1
            }
            else {
                mode = 1
                // console.log(`  switch mode to ${mode}`)
            }
        }
        else {
            // console.log(`  mode = 1, substringIndex = ${substringIndex}, diagonalRowIndex = ${diagonalRowIndex}`)
            if (diagonalRowIndex < 0) {
                mode = 0
                // console.log(`  switch mode to ${mode}`)
                diagonalRowIndex = numRows - 2
                substringIndex = (numRows > 1) ? 1 : 0
                incrementN = false
            }
            else {
                for (let index = numRows - 1; index >= 0; index--) {
                    if (index == diagonalRowIndex) {
                        // console.log(`  append ${s[n]} to substring #${index}`)
                        substrings[index] += s[n]
                    } else if (diagonalRowIndex != 0) {
                        // console.log(`  append space to substring #${index}`)
                        substrings[index] += " "
                    }
                }

                diagonalRowIndex -= 1
            }
        }

        if (incrementN) {
            n += 1
        } else {
            incrementN = true
        }
    }

    let ret = ""
    substrings.forEach(s => {
        // console.log(s)
        ret += s
    });

    // console.log("")
    // console.log("returning")
    return ret.split(" ").join("")
};

// console.log(convert("PAYPALISHIRING", 3)) // Output: "PAHNAPLSIIGYIR"
// console.log(convert("PAYPALISHIRING", 4)) // Output: "PINALSIGYAHRPI"
// console.log(convert("A", 1)) // Output: "A"
// console.log(convert("PAYPALISHIRING", 2)) // Output: "PYAIHRNAPLSIIG"
// console.log(convert("AB", 1)) // Output: "PYAIHRNAPLSIIG"
