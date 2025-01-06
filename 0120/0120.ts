function minimumTotal(triangle: number[][]): number {
    const rows = triangle.length;
    const rowSums: number[][] = [[triangle[0][0]]];

    for (let i = 1; i < rows; i++) {
        rowSums[i] = [];

        for (let j = 0; j < triangle[i].length; j++) {
            let sumUL = Infinity, sumUR = Infinity;
            if (j > 0) { sumUL = rowSums[i - 1][j - 1] + triangle[i][j]; }
            if (j < triangle[i].length - 1) { sumUR = rowSums[i - 1][j] + triangle[i][j]; }
            rowSums[i].push(Math.min(sumUL, sumUR));
        }
    }

    console.log(rowSums);
    return Math.min(...rowSums[rows - 1]);
};


const triangle = [[-7],[-2,1],[-5,-5,9],[-4,-5,4,4],[-6,-6,2,-1,-5],[3,7,8,-3,7,-9],[-9,-1,-9,6,9,0,7],[-7,0,-6,-8,7,1,-4,9],[-3,2,-6,-9,-7,-6,-9,4,0],[-8,-6,-3,-9,-2,-6,7,-5,0,7],[-9,-1,-2,4,-2,4,4,-1,2,-5,5],[1,1,-6,1,-2,-4,4,-2,6,-6,0,6],[-3,-3,-6,-2,-6,-2,7,-9,-5,-7,-5,5,1]];
// const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];

console.log(minimumTotal(triangle));
