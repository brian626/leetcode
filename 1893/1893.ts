function isCovered(ranges: number[][], left: number, right: number): boolean {
    for (let i = left; i <= right; i++) {
        let covered = false;

        for (const range of ranges) {
            if (i >= range[0] && i <= range[1]) {
                covered = true;
                break;
            }
        }

        if (!covered) {
            return false;
        }
    }

    return true;
};
