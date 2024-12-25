function smallestNumber(n: number): number {
    const b = n.toString(2).split('');
    for (let i = 0; i < b.length; i++) {
        b[i] = '1';
    }
    return parseInt(b.join(''), 2);
};


console.log(smallestNumber(3));
