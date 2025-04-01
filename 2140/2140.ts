function mostPoints(questions: number[][]): number {
    const dp: number[] = [];

    function calcDP(i: number): number {
        if (i >= questions.length) { return 0; }

        if (dp[i] === undefined) {
            const solveDP = calcDP(i + questions[i][1] + 1);
            const skipDP = calcDP(i + 1);
            dp[i] = Math.max(questions[i][0] + solveDP, skipDP);
        }

        return dp[i];
    }

    for (let i = 0; i < questions.length; i++) {
        dp[i] = calcDP(i);
    }

    console.log(dp);

    return Math.max(...dp);
};

const questions = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]
console.log(mostPoints(questions));
