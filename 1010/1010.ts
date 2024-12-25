// 1010. Pairs of Songs With Total Durations Divisible by 60

// You are given a list of songs where the ith song has a duration of time[i] seconds.

// Return the number of pairs of songs for which their total duration in seconds is
// divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.


// Example 1:

// Input: time = [30,20,150,100,40]
// Output: 3
// Explanation: Three pairs have a total duration divisible by 60:
// (time[0] = 30, time[2] = 150): total duration 180
// (time[1] = 20, time[3] = 100): total duration 120
// (time[1] = 20, time[4] = 40): total duration 60

// Example 2:

// Input: time = [60,60,60]
// Output: 3
// Explanation: All three pairs have a total duration of 120, which is divisible by 60.


// Constraints:

// 1 <= time.length <= 6 * 10^4
// 1 <= time[i] <= 500

function mod60(x: number, y: number): boolean {
    return ((x + y) % 60) === 0
}

function numPairsDivisibleBy60(time: number[]): number {
    const pairsMod0: number[] = time.filter(x => x % 10 == 0)
    const pairsMod1: number[] = time.filter(x => x % 10 == 1)
    const pairsMod2: number[] = time.filter(x => x % 10 == 2)
    const pairsMod3: number[] = time.filter(x => x % 10 == 3)
    const pairsMod4: number[] = time.filter(x => x % 10 == 4)
    const pairsMod5: number[] = time.filter(x => x % 10 == 5)
    const pairsMod6: number[] = time.filter(x => x % 10 == 6)
    const pairsMod7: number[] = time.filter(x => x % 10 == 7)
    const pairsMod8: number[] = time.filter(x => x % 10 == 8)
    const pairsMod9: number[] = time.filter(x => x % 10 == 9)

    let numPairs = 0

    for (let i = 0; i < pairsMod0.length - 1; i++) {
        for (let j = i + 1; j < pairsMod0.length; j++) {
            if (mod60(pairsMod0[i], pairsMod0[j])) { numPairs++ }
        }
    }

    for (let i = 0; i < pairsMod1.length; i++) {
        for (let j = 0; j < pairsMod9.length; j++) {
            if (mod60(pairsMod1[i], pairsMod9[j])) { numPairs++ }
        }
    }

    for (let i = 0; i < pairsMod2.length; i++) {
        for (let j = 0; j < pairsMod8.length; j++) {
            if (mod60(pairsMod2[i], pairsMod8[j])) { numPairs++ }
        }
    }

    for (let i = 0; i < pairsMod3.length; i++) {
        for (let j = 0; j < pairsMod7.length; j++) {
            if (mod60(pairsMod3[i], pairsMod7[j])) { numPairs++ }
        }
    }

    for (let i = 0; i < pairsMod4.length; i++) {
        for (let j = 0; j < pairsMod6.length; j++) {
            if (mod60(pairsMod4[i], pairsMod6[j])) { numPairs++ }
        }
    }

    for (let i = 0; i < pairsMod5.length - 1; i++) {
        for (let j = i + 1; j < pairsMod5.length; j++) {
            if (mod60(pairsMod5[i], pairsMod5[j])) { numPairs++ }
        }
    }

    return numPairs
};

console.log(numPairsDivisibleBy60([30,20,150,100,40])) // Output: 3
console.log(numPairsDivisibleBy60([60,60,60])) // Output: 3
