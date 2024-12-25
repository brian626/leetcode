// 17. Letter Combinations of a Phone Number

// Given a string containing digits from 2-9 inclusive, return all possible letter
// combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below.
// Note that 1 does not map to any letters.


// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:

// Input: digits = ""
// Output: []

// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]


// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

let DEBUG_17: boolean = false
function log(s: string): void {
    if (DEBUG_17) {
        console.log(s)
    }
}

const digitMap = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
}

function addLetterToStrings(letter: string, strings: string[]): string[] {
    let ret = []

    for (let i = 0; i < strings.length; i++) {
        ret.push(strings[i] + letter)
    }

    return ret
}

function letterCombinations(digits: string): string[] {
    let ret = []

    if (digits.length > 0) {
        ret.push(...digitMap[digits[0]])
    }

    for (let i = 1; i < digits.length; i++) {
        // Add each letter of lettersToAdd to tempRet
        const lettersToAdd = digitMap[digits[i]]
        let tempRet = []
        lettersToAdd.forEach(l => {
            addLetterToStrings(l, ret).forEach(s => {
                tempRet.push(s)
            })
        })

        ret = Array.from(tempRet)
    }

    return ret
}

// console.log(addLetterToStrings("e", ["ad", "bd", "cd"]))
// console.log(letterCombinations("2947"))
// console.log(letterCombinations("2"))
// console.log(letterCombinations("23"))
// console.log(letterCombinations("234"))
// console.log(letterCombinations("2345"))
// console.log(letterCombinations("2347"))
// console.log(letterCombinations("2379"))
