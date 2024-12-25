function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
    let count = 0;

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] % (nums2[j] * k) === 0) {
                count++;
            }
        }
    }

    return count;
};

const nums1 = [1,2,4,12]
const nums2 = [2,4]
const k = 3;

console.log(numberOfPairs(nums1, nums2, k));
