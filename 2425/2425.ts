function xorAllNums(nums1: number[], nums2: number[]): number {
    let answer = 0;

    for (const num1 of nums1) {
        if (nums2.length % 2 === 0) {
            answer ^= 0;
        } else {
            answer ^= num1;
        }
    }

    for (const num2 of nums2) {
        if (nums1.length % 2 === 0) {
            answer ^= 0;
        } else {
            answer ^= num2;
        }
    }

    return answer;
};

const nums1 = [2,1,3]
const nums2 = [10,2,5,0]

console.log(xorAllNums(nums1, nums2));
