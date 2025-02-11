function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const dp: number[][] = [];
    for (let row = 0; row < obstacleGrid.length; row++) {
        dp[row] = [];
    }

    return getPaths(obstacleGrid, dp, obstacleGrid.length - 1, obstacleGrid[0].length - 1);
};


function getPaths(obstacleGrid: number[][], dp: number[][], row: number, col: number) {
    if (dp[row][col] === undefined) {
        if (obstacleGrid[row][col] === 1) {
            dp[row][col] = 0;
        } else {
            if (row === 0 && col === 0) {
                dp[row][col] = 1;
            } else if (row === 0) {
                dp[row][col] = getPaths(obstacleGrid, dp, row, col - 1);
            } else if (col === 0) {
                dp[row][col] = getPaths(obstacleGrid, dp, row - 1, col);
            } else {
                dp[row][col] = getPaths(obstacleGrid, dp, row, col - 1) + getPaths(obstacleGrid, dp, row - 1, col);
            }
        }
    }

    console.log(`getPaths(${row}, ${col}) returning ${dp[row][col]}`);
    return dp[row][col];
}

const obstacleGrid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]

console.log(uniquePathsWithObstacles(obstacleGrid));
