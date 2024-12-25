// 36. Valid Sudoku

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.


// Example 1:

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Example 2:

// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8.
// Since there are two 8's in the top left 3x3 sub-box, it is invalid.


// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit or '.'.

function checkSet(set: string[]): boolean {
    let sortedSet = Array.from(set).sort()
    let lastVal = sortedSet[0]

    for (let i = 1; i < 9; i++) {
        if (sortedSet[i] != "." && sortedSet[i] == lastVal) {
            return false
        }

        lastVal = sortedSet[i]
    }

    return true
}

function checkRow(row: string[]): boolean {
    // console.log(`checking row ${row.join(" ")}`)

    return checkSet(row)
}

function checkColumn(column: string[]): boolean {
    // console.log(`checking col ${column.join(" ")}`)

    return checkSet(column)
}

function checkBox(box: string[][]): boolean {
    let combinedBox = (box[0].join("") + box[1].join("") + box[2].join("")).split("")
    // console.log(`checking box ${combinedBox.join(" ")}`)

    return checkSet(combinedBox)
}

function isValidSudoku(board: string[][]): boolean {
    for (let i = 0; i < 9; i++) {
        if (!checkRow(board[i])) {
            return false
        }
    }

    for (let i = 0; i < 9; i++) {
        let column = []
        for (let j = 0; j < 9; j++) {
            column.push(board[j][i])
        }

        if (!checkColumn(column)) {
            return false
        }
    }

    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            let box: string[][] = []
            box[0] = [board[r * 3][c * 3], board[r * 3][(c * 3) + 1], board[r * 3][(c * 3) + 2]]
            box[1] = [board[(r * 3) + 1][c * 3], board[(r * 3) + 1][(c * 3) + 1], board[(r * 3) + 1][(c * 3) + 2]]
            box[2] = [board[(r * 3) + 2][c * 3], board[(r * 3) + 2][(c * 3) + 1], board[(r * 3) + 2][(c * 3) + 2]]

            if (!checkBox(box)) {
                return false
            }
        }
    }

    return true
};

console.log(isValidSudoku(
    [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]])) // Output: true

console.log(isValidSudoku(
    [["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["5",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]])) // Output: false
