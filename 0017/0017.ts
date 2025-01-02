let DEBUG: boolean = false
function log(s: string): void {
    if (DEBUG) {
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
