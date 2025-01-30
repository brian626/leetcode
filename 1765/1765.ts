function highestPeak(isWater: number[][]): number[][] {
    const height: number[][] = [];
    const waterCells: number[][] = [];

    for (let row = 0; row < isWater.length; row++) {
        height[row] = []; // Array(isWater[0].length).fill(-1);

        for (let col = 0; col < isWater[0].length; col++) {
            if (isWater[row][col] === 1) {
                height[row][col] = 0;
                waterCells.push([row, col]);
            }
        }
    }

    while (waterCells.length > 0) {
        const waterCell = waterCells.shift();
        dfs(height, waterCell);
    }

    return height;
};


function dfs(height: number[][], waterCell: number[]) {
    let currentHeight = 0;

    let iterations = 0;
    while (true) {
        iterations++;
        if (iterations > 5) { break; }
        const cellsToExplore: number[][] = [];

        if (waterCell[0] > 0) { cellsToExplore.push([waterCell[0] - 1, waterCell[1]]) };
        if (waterCell[0] < height.length - 1) { cellsToExplore.push([waterCell[0] + 1, waterCell[1]]) };
        if (waterCell[1] > 0) { cellsToExplore.push([waterCell[0], waterCell[1] - 1]) };
        if (waterCell[1] < height[0].length - 1) { cellsToExplore.push([waterCell[0], waterCell[1] + 1]) };

        let updatedHeight = false;

        for (const cell of cellsToExplore) {
            const cellRow = cell[0];
            const cellCol = cell[1];
            if (height[cellRow][cellCol] === 0) {
                continue;
            } else if (height[cellRow][cellCol] === undefined) {
                height[cellRow][cellCol] = currentHeight + 1;
                updatedHeight = true;
            } else if (height[cellRow][cellCol] < currentHeight + 1) {
                height[cellRow][cellCol] = currentHeight + 1;
                updatedHeight = true;
            }
        }

        if (!updatedHeight) { break; }

        currentHeight++;
    }
}


const isWater = [[0, 1], [0, 0]];

console.log(highestPeak(isWater));
