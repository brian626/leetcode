// 13. Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two one's added together.
// 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four. The same principle applies
// to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.


// Example 1:

// Input: s = "III"
// Output: 3
// Example 2:

// Input: s = "IV"
// Output: 4
// Example 3:

// Input: s = "IX"
// Output: 9
// Example 4:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 5:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

function romanToInt(s: string): number {
    let ret = 0
    let i = 0

    while (i < s.length) {
        if (s[i] == "I") {
            if (s[i+1] == "V") {
                ret += 4
                i++
            }
            else if (s[i+1] == "X") {
                ret += 9
                i++
            }
            else {
                ret += 1
            }
        }

        else if (s[i] == "V") {
            ret += 5
        }

        else if (s[i] == "X") {
            if (s[i+1] == "L") {
                ret += 40
                i++
            }
            else if (s[i+1] == "C") {
                ret += 90
                i++
            }
            else {
                ret += 10
            }
        }

        else if (s[i] == "L") {
            ret += 50
        }

        else if (s[i] == "C") {
            if (s[i+1] == "D") {
                ret += 400
                i++
            }
            else if (s[i+1] == "M") {
                ret += 900
                i++
            }
            else {
                ret += 100
            }
        }

        else if (s[i] == "D") {
            ret += 500
        }

        else if (s[i] == "M") {
            ret += 1000
        }

        else {
            log(`unknown letter ${s[i]}`)
        }

        i++
    }


    return ret
};

const DEBUG_13: boolean = true
function log(s: string): void {
    if (DEBUG_13) {
        console.log(s)
    }
}

// console.log(`${romanToInt("III")} should be 3`)
// console.log(`${romanToInt("IV")} should be 4`)
// console.log(`${romanToInt("IX")} should be 9`)
// console.log(`${romanToInt("LVIII")} should be 58`)
// console.log(`${romanToInt("MCMXCIV")} should be 1994`)
