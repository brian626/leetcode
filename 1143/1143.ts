function longestCommonSubsequence(text1: string, text2: string): number {
    if (text1.includes(text2)) { return text2.length; }
    if (text2.includes(text1)) { return text1.length; }

    let s1 = text1.split(''), s2 = text2.split('');
    if (text1.length > text2.length) {
        [s1, s2] = [s2, s1];
    }

    let indexes: number[] = [];
    for (let i = 0; i < s1.length; i++) {
        indexes[i] = s2.indexOf(s1[i]);
        if (indexes[i] !== -1) {
            s1[i] = 'X';
            s2[indexes[i]] = 'X';
        }
    }

    console.log(s1.join(''));
    console.log(s2.join(''));

    indexes = indexes.filter(x => x >= 0);
    console.log(indexes);

    if (indexes.length === 0) { return 0; }

    let longestSequence = -1;
    let firstIndex = 0;
    let lastIndex = 0;
    let i = 1;
    while (i < indexes.length) {
        if (indexes[i] > indexes[i - 1]) {
            lastIndex = i;
        } else {
            longestSequence = Math.max(longestSequence, lastIndex - firstIndex + 1);
            firstIndex = i;
            lastIndex = i;
        }

        i++;
    }

    return longestSequence === -1 ? indexes.length : longestSequence;
};

const text1 = "pmjghexybyrgzczy";
const text2 = "hafcdqbgncrcbihkd";

console.log(longestCommonSubsequence(text1, text2));
