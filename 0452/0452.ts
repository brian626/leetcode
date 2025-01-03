function findMinArrowShots(points: number[][]): number {
    if (points.length === 1) { return 1; }

    points.sort((a, b) => a[0] - b[0]);

    let shots = 0;

    while (points.length > 0) {
        console.log(points);

        const minX = Math.min(...points.map(x => x[0]));
        const maxX = Math.max(...points.map(x => x[1]));

        const ballonsBurstPerArrow: number[] = [];
        for (let i = minX; i <= maxX; i++) {
            ballonsBurstPerArrow[i] = countBursts(points, i);
        }

        console.log(ballonsBurstPerArrow);

        const maxBalloonsBurst = Math.max(...ballonsBurstPerArrow.filter(x => x !== undefined));
        const arrowToShoot = ballonsBurstPerArrow.indexOf(maxBalloonsBurst);

        console.log(`shooting arrow at x = ${arrowToShoot}`);
        points = shoot(points, arrowToShoot);
        shots++;
    }

    return shots;
};


function countBursts(points: number[][], arrow: number): number {
    let count = 0;

    for (const p of points) {
        if (arrow >= p[0] && arrow <= p[1]) {
            count++;
        }
    }

    return count;
}


function shoot(points: number[][], arrow: number): number[][] {
    const result: number[][] = [];

    for (const p of points) {
        if (arrow < p[0] || arrow > p[1]) {
            result.push(p);
        }
    }

    return result;
}

const points = [[10,16],[2,8],[1,6],[7,12]];

console.log(findMinArrowShots(points));
