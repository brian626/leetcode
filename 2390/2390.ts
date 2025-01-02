function removeStars(s: string): string {
    const result: string[] = [];

    let i = 0;
    while (i < s.length) {
        if (s[i] === '*') {
            result.pop();
        } else {
            result.push(s[i]);
        }

        i++;
    }

    return result.join('');
};

const s = "leet**cod*e"

console.log(removeStars(s));
