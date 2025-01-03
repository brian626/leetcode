function dailyTemperatures(T: number[]): number[] {
    const answer: number[] = [];

    for (let i = 0; i < T.length; i++) {
        let setDays = false;
        for (let j = i + 1; j < T.length; j++) {
            if (T[j] > T[i]) {
                setDays = true;
                answer[i] = j - i;
                break;
            }
        }

        if (!setDays) {
            answer[i] = 0;
        }
    }

    return answer;
};


console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
// [1, 1, 4, 2, 1, 1, 0, 0]
