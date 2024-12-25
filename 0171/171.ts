// 171. Excel Sheet Column Number

// Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...


// Example 1:

// Input: columnTitle = "A"
// Output: 1

// Example 2:

// Input: columnTitle = "AB"
// Output: 28

// Example 3:

// Input: columnTitle = "ZY"
// Output: 701

// Example 4:

// Input: columnTitle = "FXSHRXW"
// Output: 2147483647


// Constraints:

// 1 <= columnTitle.length <= 7
// columnTitle consists only of uppercase English letters.
// columnTitle is in the range ["A", "FXSHRXW"].

function titleToNumber(columnTitle: string): number {
    let num = 0
    for (let i = 0; i < columnTitle.length; i++) {
        let letter = columnTitle[i]
        let letterNum = letter.charCodeAt(0) - 64
        num += ( letterNum * Math.pow(26, columnTitle.length - i - 1))
    }

    return num
};

console.log(titleToNumber("A"))
console.log(titleToNumber("Z"))
console.log(titleToNumber("AB"))
console.log(titleToNumber("ZY"))
console.log(titleToNumber("ZZ"))
console.log(titleToNumber("AAA"))
console.log(titleToNumber("FXSHRXW"))
