function areAlmostEqual(s1: string, s2: string): boolean {
    if (s1 === s2) { return true; }

    const differentIndexes: number[] = [];

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            differentIndexes.push(i);
        }
    }

    if (differentIndexes.length !== 2) {
        return false;
    }

    const [index1, index2] = differentIndexes;

    return s1[index1] === s2[index2] && s1[index2] === s2[index1];
};
