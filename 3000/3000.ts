function areaOfMaxDiagonal(dimensions: number[][]): number {
    let maxDiagonal = 0;
    const rectanglesWithMaxDiagonal: number[] = [];

    for (let i = 0; i < dimensions.length; i++) {
        const [length, width] = dimensions[i];
        const diagonalLength = Math.sqrt(length * length + width * width);
        if (diagonalLength > maxDiagonal) {
            console.log(`rectangle ${i} with dimensions [${dimensions[i]}] has new max diagonal length of ${diagonalLength}`);
            maxDiagonal = diagonalLength;
            rectanglesWithMaxDiagonal.length = 0;
            rectanglesWithMaxDiagonal.push(i);
        } else if (diagonalLength === maxDiagonal) {
            console.log(`rectangle ${i} with dimensions [${dimensions[i]}] has same max diagonal length of ${diagonalLength}`);
            rectanglesWithMaxDiagonal.push(i);
        }
    }

    let maxArea = 0;
    for (const i of rectanglesWithMaxDiagonal) {
        maxArea = Math.max(maxArea, dimensions[i][0] * dimensions[i][1]);
    }

    return maxArea;
};

const dimensions = [[6, 5], [8, 6], [2, 10], [8, 1], [9, 2], [3, 5], [3, 5]]

console.log(areaOfMaxDiagonal(dimensions));
