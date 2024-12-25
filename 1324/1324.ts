// 1324. Print Words Vertically

// Given a string s. Return all the words vertically in the same order in which they appear in s.
// Words are returned as a list of strings, complete with spaces when is necessary. (Trailing spaces are not allowed).
// Each word would be put on only one column and that in one column there will be only one word.


// Example 1:

// Input: s = "HOW ARE YOU"
// Output: ["HAY","ORO","WEU"]
// Explanation: Each word is printed vertically.
//  "HAY"
//  "ORO"
//  "WEU"

// Example 2:

// Input: s = "TO BE OR NOT TO BE"
// Output: ["TBONTB","OEROOE","   T"]
// Explanation: Trailing spaces is not allowed.
// "TBONTB"
// "OEROOE"
// "   T"

// Example 3:

// Input: s = "CONTEST IS COMING"
// Output: ["CIC","OSO","N M","T I","E N","S G","T"]


// Constraints:

// 1 <= s.length <= 200
// s contains only upper case English letters.
// It's guaranteed that there is only one space between 2 words.

function printVertically(s: string): string[] {
    const words: string[] = s.split(" ")
    const numWords: number = words.length

    let numOutputRows: number = 0
    words.forEach(word => {
        if (word.length > numOutputRows) {
            numOutputRows = word.length
        }
    })

    let output: string[] = []
    for (let i = 0; i < numOutputRows; i++) { output[i] = "" }

    let charIndex = 0
    for (let i = 0; i < numOutputRows; i++) {
        for (let w = 0; w < numWords; w++) {
            if (words[w][charIndex] !== undefined) {
                output[i] += words[w][charIndex]
            }
            else {
                output[i] += " "
            }
        }

        charIndex++
    }

    return output.map(w => w.replace(/ +$/, ""))
};

// console.log(printVertically("HOW ARE YOU")) // Output: ["HAY","ORO","WEU"]
console.log(printVertically("TO BE OR NOT TO BE")) // Output: ["TBONTB","OEROOE","   T"]
// console.log(printVertically("CONTEST IS COMING")) // Output: ["CIC","OSO","N M","T I","E N","S G","T"]
