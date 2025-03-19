function minimumRecolors(blocks: string, k: number): number {
    let l = 0, r = k;
    let min = Infinity;
    while (r <= blocks.length) {
        const slice = blocks.slice(l, r).split('');
        const numToRecolor = k - slice.filter(x => x === 'B').length;
        min = Math.min(min, numToRecolor);
        l++;
        r++;
    }

    return min;
};
