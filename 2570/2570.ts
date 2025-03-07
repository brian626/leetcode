function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
    const idToValue: Map<number, number> = new Map<number, number>();

    for (const [id, val] of nums1) {
        idToValue.set(id, (idToValue.get(id) || 0) + val);
    }

    for (const [id, val] of nums2) {
        idToValue.set(id, (idToValue.get(id) || 0) + val);
    }

    const result: number[][] = [];
    for (const [id, val] of idToValue) {
        result.push([id, val]);
    }

    result.sort((a, b) => a[0] - b[0]);

    return result;
};
