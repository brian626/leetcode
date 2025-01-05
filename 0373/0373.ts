function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    let pairs: number[][] = []; //  [[nums1[0], nums2[0]]];

    // let lastSum = nums1[0] + nums2[0];

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            pairs.push([nums1[i], nums2[j]]);
            pairs.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
            pairs = pairs.slice(0, k);

            // if (pairs.length === k + 1) { break; }
        }
        // if (pairs.length === k) { break; }
    }


    return pairs; // .slice(0, k);
};

const nums1 = [1, 2, 4, 5, 6]
const nums2 = [3, 5, 7, 9]
const k = 3

console.log(kSmallestPairs(nums1, nums2, k));
