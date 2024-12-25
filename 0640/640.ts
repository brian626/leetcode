// 640. Solve the Equation

// Solve a given equation and return the value of 'x' in the form of a string "x=#value".
// The equation contains only '+', '-' operation, the variable 'x' and its coefficient.
// You should return "No solution" if there is no solution for the equation, or "Infinite
// solutions" if there are infinite solutions for the equation.

// If there is exactly one solution for the equation, we ensure that the value of 'x' is an integer.


// Example 1:

// Input: equation = "x+5-3+x=6+x-2"
// Output: "x=2"

// Example 2:

// Input: equation = "x=x"
// Output: "Infinite solutions"

// Example 3:

// Input: equation = "2x=x"
// Output: "x=0"

// Example 4:

// Input: equation = "2x+3x-6x=x+2"
// Output: "x=-1"

// Example 5:

// Input: equation = "x=x+2"
// Output: "No solution"


// Constraints:

// 3 <= equation.length <= 1000
// equation has exactly one '='.
// equation consists of integers with an absolute value in the range [0, 100] without any leading zeros, and the variable 'x'.

function parse(s: string): [number, number] {
    // console.log(`parse(${s})`)
    let xParts: number = 0
    let cParts: number = 0

    let i = 0
    let isNegative = false
    while (i < s.length) {
        let j = i + 1
        while (j <= s.length) {
            if (s[j] == "+" || s[j] == "-" || s[j] == "x" || j >= s.length - 1 ) {
                let token = (j == s.length - 1) ? s.slice(i) : s.slice(i,j)
                let tokenVal = parseInt(token, 10)
                tokenVal = (isNegative) ? tokenVal * -1 : tokenVal
                // console.log(`  token: ${token}`)
                if (s[i] != "x" && s[j] != "x") { // (token.indexOf("x") == -1) {
                    // console.log(`  adding ${tokenVal} cParts`)
                    cParts += tokenVal
                }
                else {
                    if (token == "+" || token == "x" || token == "+x") {
                        tokenVal = (isNegative) ? -1 : 1
                    }
                    else if (token == "-" || token == "-x") {
                        tokenVal = -1
                    }
                    // console.log(`  adding ${tokenVal} xParts`)
                    xParts += tokenVal
                }

                i = j + 1

                if (s[j] == "-") { isNegative = true }
                else             { isNegative = false }
                break
            }

            j += 1
        }
    }

    return [xParts, cParts]
}

function solveEquation(equation: string): string {
    const [lhs, rhs] = equation.split("=")

    const [lhx, lhc] = parse(lhs)
    const [rhx, rhc] = parse(rhs)

    // console.log(lhx,lhc)
    // console.log(rhx,rhc)

    // Move x parts to the left side and c parts to the right
    const xPart = lhx - rhx
    const cPart = rhc - lhc

    if (xPart == 0 && cPart == 0) {
        return "Infinite solutions"
    }
    else if (xPart == 0) {
        return "No solution"
    }
    else {
        return `x=${cPart / xPart}`
    }
};

// let re = new RegExp("[+-]", "g")
// console.log("2x+3x-4".split(re))

// console.log(parseInt("2x", 10))

// console.log(solveEquation("x+5-3+x=6+x-2")) // Output: "x=2"
// console.log(solveEquation("x=x")) // Output: "Infinite solutions"
// console.log(solveEquation("2x=x")) // Output: "x=0"
// console.log(solveEquation("2x+3x-6x=x+2")) // Output: "x=-1"
// console.log(solveEquation("x=x+2")) // Output: "No solution"
// console.log(solveEquation("-x=-1")) // "x=1"
console.log(solveEquation("-x+x+3x=2x-x+x")) // Output: "x=0"
