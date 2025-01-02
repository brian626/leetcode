function factorial(n: number): number {
    if (n == 1) { return 1 }
    else { return n * factorial(n - 1) }
}

function uniquePaths(m: number, n: number): number {
    [m, n] = [Math.min(m, n), Math.max(m, n)]

    if (m == 1) { return m }
    if (m == 2) { return n }

    const amountToAddToN = m - 2
    n += amountToAddToN
    const amountToDivideBy = factorial(amountToAddToN + 1)

    let paths: number = 1
    for (let i = 0; i <= amountToAddToN; i++) {
        paths *= n
        n -= 1
    }

    paths /= amountToDivideBy

    return paths
};

console.log(uniquePaths(3, 7))
// Output: 28

console.log(uniquePaths(3, 2))
// Output: 3

console.log(uniquePaths(7, 3))
// Output: 28

console.log(uniquePaths(3, 3))
// Output: 6
