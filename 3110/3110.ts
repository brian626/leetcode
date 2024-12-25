function scoreOfString(s: string): number {
    let score = 0;

    for (let i = 0; i < s.length - 1; i++) {
        score += Math.abs(s[i].charCodeAt(0) - s[i+1].charCodeAt(0));
    }

    return score;
};

const s = "zaz";

console.log(scoreOfString(s));
