function addedInteger(nums1: number[], nums2: number[]): number {
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);

    return nums2[0] - nums1[0];
};

const nums1 = [2,6,4]
const nums2 = [9,7,5]

console.log(addedInteger(nums1, nums2));
