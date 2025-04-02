function reverseDegree(s: string): number {
    let rd = 0;

    for (let i = 0; i < s.length; i++) {
        rd += (26 - (s.charCodeAt(i) - 'a'.charCodeAt(0))) * (i + 1);
    }

    return rd;
};
