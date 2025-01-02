function largestAltitude(gain: number[]): number {
    let currentAltitude = 0
    let maxAltitude = 0
    gain.forEach(g => {
        currentAltitude += g
        maxAltitude = Math.max(currentAltitude, maxAltitude)
    })

    return maxAltitude
};

console.log(largestAltitude([-5,1,5,0,-7])) // Output: 1
console.log(largestAltitude([-4,-3,-2,-1,4,3,2])) // Output: 0
