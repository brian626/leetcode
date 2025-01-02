function maxScore(nums1: number[], nums2: number[], k: number): number {
    if (k === 1) {
        let max = 0;
        for (let i = 0; i < nums1.length; i++) {
            max = Math.max(max, nums1[i] * nums2[i]);
        }
        return max;
    }

    if (k === nums1.length) {
        return nums1.reduce((a, b) => a + b, 0) * Math.min(...nums2);
    }

};

const nums1 = [1, 3, 3, 2]
const nums2 = [2, 1, 3, 4]
const k = 3

console.log(maxScore(nums1, nums2, k));
