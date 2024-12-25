function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
    const answer1 = nums1.filter(x => nums2.includes(x)).length;
    const answer2 = nums2.filter(x => nums1.includes(x)).length;

    return [answer1, answer2];
};
