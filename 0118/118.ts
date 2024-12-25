// 118. Pascal's Triangle

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:

// Input: numRows = 1
// Output: [[1]]


// Constraints:

// 1 <= numRows <= 30

function generate(numRows: number): number[][] {
    if (numRows == 1) { return [[1]] }
    if (numRows == 2) { return [[1], [1,1]] }

    let rows: number[][] = [[1], [1,1]]
    for (let i = 3; i <= numRows; i++) {
        let lastRow = rows[rows.length - 1]
        let newRow: number[] = []
        newRow.push(1)
        for (let j = 0; j < lastRow.length - 1; j++) {
            newRow.push(lastRow[j] + lastRow[j+1])
        }
        newRow.push(1)
        rows.push(newRow)
    }

    return rows
};

console.log(generate(5)) // Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)) // Output: [[1]]
console.log(generate(6)) // Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1]]
