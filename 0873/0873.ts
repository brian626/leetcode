function lenLongestFibSubseq(arr: number[]): number {
    // dp[i][j] represents the length of the longest Fibonacci-like sequence ending at arr[i] and arr[j], initialized to 2.
    const dp: number[][] = [];
    for (let i = 0; i < arr.length; i++) {
        dp[i] = [];

        for (let j = 0; j < arr.length; j++) {
            dp[i][j] = 2;
        }
    }

    const indexLookup: Map<number, number> = new Map<number, number>();
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            indexLookup.set(arr[j] - arr[i], arr.indexOf(arr[j] - arr[i]));
        }
    }
    // console.log(indexLookup);

    // Update dp as:
    //  dp[i][j] = dp[k][i] + 1
    //  where k is the index of arr[j] - arr[i].
    // Use a hash map (index) to quickly locate arr[j] - arr[i] and ensure it appears before i.
    let maxVal = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const k = indexLookup.get(arr[j] - arr[i]);
            if (k < 0 || k >= i) { continue; }
            dp[i][j] = dp[k][i] + 1;
            // console.log(`set dp[${i}][${j}] to dp[${k}][${i}] + 1 = ${dp[i][j]}`);
            maxVal = Math.max(maxVal, dp[i][j]);
        }
    }


    // The final answer is the maximum value in dp.
    // console.log(dp);

    return maxVal > 2 ? maxVal : 0;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(lenLongestFibSubseq(arr));
