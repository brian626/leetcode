function pivotArray(nums: number[], pivot: number): number[] {
    const lesser = nums.filter(x => x < pivot);
    const equal = nums.filter(x => x === pivot);
    const greater = nums.filter(x => x > pivot);

    return lesser.concat(equal).concat(greater);
};
