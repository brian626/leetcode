// 1404. Number of Steps to Reduce a Number in Binary Representation to One

// Given a number s in their binary representation. Return the number of steps to reduce it to 1 under the following rules:

// If the current number is even, you have to divide it by 2.

// If the current number is odd, you have to add 1 to it.

// It's guaranteed that you can always reach to one for all testcases.


// Example 1:

// Input: s = "1101"
// Output: 6
// Explanation: "1101" corressponds to number 13 in their decimal representation.
// Step 1) 13 is odd, add 1 and obtain 14.
// Step 2) 14 is even, divide by 2 and obtain 7.
// Step 3) 7 is odd, add 1 and obtain 8.
// Step 4) 8 is even, divide by 2 and obtain 4.
// Step 5) 4 is even, divide by 2 and obtain 2.
// Step 6) 2 is even, divide by 2 and obtain 1.

// Example 2:

// Input: s = "10"
// Output: 1
// Explanation: "10" corressponds to number 2 in their decimal representation.
// Step 1) 2 is even, divide by 2 and obtain 1.

// Example 3:

// Input: s = "1"
// Output: 0


// Constraints:

// 1 <= s.length <= 500
// s consists of characters '0' or '1'
// s[0] == '1'

function numSteps(s: string): number {
    if (s.length == 1) { return 0 }

    let sArray: string[] = s.split("")

    let steps: number = 0
    while (sArray.length > 1) {
        // console.log(`top of loop, sArray: [${sArray}]`)
        steps += 1
        const lsb = sArray.pop()
        if (lsb == "0") {
            // console.log(`popped a zero, moving on...`)
        }
        else {
            // console.log(`popped a one`)
            let newLSBs: string[] = ["0"]
            let temp: string = sArray.pop()
            while (temp == "1") {
                newLSBs.unshift("0")
                temp = sArray.pop()
            }

            sArray = sArray.concat("1", newLSBs)
            // console.log(`newLSBs: [${newLSBs}], new sArray: [${sArray}]`)
        }
    }

    return steps
};

console.log(numSteps("1")) // Output: 0
console.log(numSteps("10")) // Output: 1
console.log(numSteps("11")) // Output: 3
console.log(numSteps("100")) // Output: 2
console.log(numSteps("101")) // Output: 5
console.log(numSteps("110")) // Output: 4
console.log(numSteps("111")) // Output: 4
console.log(numSteps("1000")) // Output: 3
console.log(numSteps("1001")) // Output: 7
console.log(numSteps("1010")) // Output: 6
console.log(numSteps("1011")) // Output: 6
console.log(numSteps("1100")) // Output: 5
console.log(numSteps("1101")) // Output: 6
console.log(numSteps("1110")) // Output: 5
console.log(numSteps("1111")) // Output: 5
console.log(numSteps("10000")) // Output: 4
