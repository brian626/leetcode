function gridGame(grid: number[][]): number {
    // First robot has to make a choice - when to move down to the second
    // row. We can programatically determine what the best choice is, where
    // "best" is defined as the choice that minimizes the score of the second
    // robot.
    let robot2MinScore = Infinity;
    for (let i = 0; i < grid[0].length; i++) {
        const score = maximizeScore(grid, i);
        robot2MinScore = Math.min(robot2MinScore, score);
    }

    return robot2MinScore;
};

function maximizeScore(grid: number[][], robot1MoveDownColumn: number): number {
    const tempGrid: number[][] = [];
    for (let r = 0; r < grid.length; r++) {
        tempGrid[r] = [];
        for (let c = 0; c < grid[0].length; c++) {
            tempGrid[r][c] = grid[r][c];
        }
    }

    for (let i = 0; i <= robot1MoveDownColumn; i++) {
        tempGrid[0][i] = 0;
    }
    for (let i = robot1MoveDownColumn; i < grid[0].length; i++) {
        tempGrid[1][i] = 0;
    }

    // console.log(`robot 1 moves down at column ${robot1MoveDownColumn}`);
    // console.log(tempGrid);

    let robot2MoveDownColumn = 0;
    let row1Sum = tempGrid[0][0];
    let row2Sum = tempGrid[1].reduce((a,b) => a + b, 0);
    let maxScore = row1Sum + row2Sum;

    for (let i = 1; i < tempGrid[0].length; i++) {
        row1Sum += tempGrid[0][i];
        row2Sum -= tempGrid[1][i-1];
        if (row1Sum + row2Sum > maxScore) {
            maxScore = row1Sum + row2Sum;
            robot2MoveDownColumn = i;
        }
    }

    return maxScore;
}

const grid = [[20,3,20,17,2,12,15,17,4,15],[20,10,13,14,15,5,2,3,14,3]];

console.log(gridGame(grid));
