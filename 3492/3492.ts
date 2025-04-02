function maxContainers(n: number, w: number, maxWeight: number): number {
    return Math.min((n * n), Math.floor(maxWeight / w));
};
