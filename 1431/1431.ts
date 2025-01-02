function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const originalMax = Math.max(...candies);
    const results: boolean[] = [];

    for (let i = 0; i < candies.length; i++) {
        results.push(candies[i] + extraCandies >= originalMax);
    }

    return results;
};
