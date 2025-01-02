let memo: number[] = [];

function calc(n: number): number {
    if (memo[n - 3] === undefined) { memo[n - 3] = calc(n - 3); }
    if (memo[n - 2] === undefined) { memo[n - 2] = calc(n - 2); }
    if (memo[n - 1] === undefined) { memo[n - 1] = calc(n - 1); }

    return memo[n - 3] + memo[n - 2] + memo[n - 1];
}

function tribonacci(n: number): number {
    if (n === 0) { return 0; }
    if (n === 1) { return 1; }
    if (n === 2) { return 1; }

    memo[0] = 0;
    memo[1] = 1;
    memo[2] = 1;

    return calc(n);
};
