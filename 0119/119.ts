// 119. Pascal's Triangle II
// Easy

// 1333

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]

// Example 2:

// Input: rowIndex = 0
// Output: [1]

// Example 3:

// Input: rowIndex = 1
// Output: [1,1]


// Constraints:

// 0 <= rowIndex <= 33


// Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?

function getRow(rowIndex: number): number[] {
    if (rowIndex == 0) { return [1] }
    if (rowIndex == 1) { return [1,1] }

    let row: number[] = [1,1]
    for (let i = 1; i < rowIndex; i++) {
        let newRow: number[] = []

        newRow.push(1)
        for (let j = 0; j < row.length - 1; j++) {
            newRow.push(row[j] + row[j+1])
        }
        newRow.push(1)

        row = newRow
    }

    return row
};

console.log(getRow(3)) // Output: [1,3,3,1]
console.log(getRow(0)) // Output: [1]
console.log(getRow(1)) // Output: [1,1]
console.log(getRow(33))
