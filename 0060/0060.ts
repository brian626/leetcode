function getPermutation(n: number, k: number): string {
    let s = '';
    for (let i = 1; i <= n; i++) {
        s += `${i}`;
    }

    return func(s, k - 1);
};


function func(s: string, k: number): string {
    console.log(`func(${s}, ${k})`);
    if (s.length === 1) { return s; }
    else if (s.length === 2) {
        if (k === 0) { return s; }
        else if (k === 1) { return s[1] + s[0]; }
        else { return 'wtf'; }
    }

    const block = Math.floor(k / factorial(s.length - 1));
    const prefix = s[block];
    const suffix = s.slice(0, block).concat(s.slice(block + 1));

    return prefix + func(suffix, k % factorial(s.length - 1));
}


function factorial(n: number): number {
    if (n === 1) { return 1; }

    return n * factorial(n - 1);
}

console.log(getPermutation(4, 10));
