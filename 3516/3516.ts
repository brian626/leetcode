function findClosest(x: number, y: number, z: number): number {
    const xSteps = Math.abs(z - x);
    const ySteps = Math.abs(z - y);

    if (xSteps > ySteps) { return 2; }
    else if (ySteps > xSteps) { return 1; }
    else return 0;
};
