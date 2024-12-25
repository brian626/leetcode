// 1854. Maximum Population Year

// You are given a 2D integer array logs where each logs[i] = [birthi, deathi]
// indicates the birth and death years of the ith person.

// The population of some year x is the number of people alive during that year.
// The ith person is counted in year x's population if x is in the inclusive range
// [birthi, deathi - 1]. Note that the person is not counted in the year that they die.

// Return the earliest year with the maximum population.


// Example 1:

// Input: logs = [[1993,1999],[2000,2010]]
// Output: 1993
// Explanation: The maximum population is 1, and 1993 is the earliest year with this population.

// Example 2:

// Input: logs = [[1950,1961],[1960,1971],[1970,1981]]
// Output: 1960
// Explanation:
// The maximum population is 2, and it had happened in years 1960 and 1970.
// The earlier year between them is 1960.

// Constraints:

// 1 <= logs.length <= 100
// 1950 <= birthi < deathi <= 2050

function maximumPopulation(logs: number[][]): number {
    let populationMap: Map<number, number> = new Map<number, number>();
    logs.forEach(log => {
        for (let i = log[0]; i < log[1]; i++) {
            if (populationMap.has(i)) {
                populationMap.set(i, populationMap.get(i) + 1);
            } else {
                populationMap.set(i, 1);
            }
        }
    });

    let maxPopulation: number = 0;
    Array.from(populationMap.values()).forEach(p => {
        maxPopulation = Math.max(p, maxPopulation);
    });

    for (let i = 1950; i <= 2050; i++) {
        if (populationMap.get(i) === maxPopulation) {
            return i;
        }
    }

    return -1;
};
