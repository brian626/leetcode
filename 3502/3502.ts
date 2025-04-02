function minCosts(cost: number[]): number[] {
    const answer: number[] = [];

    for (let i = 0; i < cost.length; i++) {
        answer[i] = Math.min(cost[i], Math.min(...cost.slice(0, i)));
    }

    return answer;
};
