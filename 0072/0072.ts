function minDistance(word1: string, word2: string): number {
    if (word1.length === 0) { return word2.length; }
    if (word2.length === 0) { return word1.length; }
    if (word1 === word2) { return 0; }

    function getDP(i: number, j: number): number {
        if (dp[i][j] === undefined) {
            if (i === 0) { dp[i][j] = j; }
            else if (j === 0) { dp[i][j] = i; }
            else if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = getDP(i - 1, j - 1);
            }
            else {
                dp[i][j] = 1 + Math.min(getDP(i - 1, j - 1), getDP(i, j - 1), getDP(i - 1, j));
            }
        }

        console.log(`getDP(${i},${j}) returning ${dp[i][j]}`);
        return dp[i][j];
    }

    const dp: number[][] = [];
    for (let i = 0; i <= word1.length; i++) {
        dp[i] = [];
    }

    for (let i = 0; i <= word2.length; i++) {
        dp[0][i] = i;
    }

    for (let i = 0; i <= word1.length; i++) {
        dp[i][0] = i;
    }

    for (let i = 0; i <= word1.length; i++) {
        for (let j = 0; j <= word2.length; j++) {
            dp[i][j] = getDP(i, j);
        }
    }

    console.log(dp);
    return dp[word1.length][word2.length];
};

const word1 = "horse"
const word2 = "ros"

console.log(minDistance(word1, word2));
