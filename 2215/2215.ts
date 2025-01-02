function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1: Set<number> = new Set<number>();
    const set2: Set<number> = new Set<number>();

    for (let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i])) {
            set1.add(nums1[i]);
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (!nums1.includes(nums2[i])) {
            set2.add(nums2[i]);
        }
    }

    return [Array.from(set1), Array.from(set2)];
};

const nums1 = [1,2,3]
const nums2 = [2,4,6]

console.log(findDifference(nums1,nums2));
