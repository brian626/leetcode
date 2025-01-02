function isSubsequence(s: string, t: string): boolean {
    let sPos = 0, tPos = 0;

    while (sPos < s.length && tPos < t.length) {
        if (s[sPos] === t[tPos]) {
            sPos++;
            tPos++;
        } else {
            tPos++;
        }
    }

    return sPos === s.length;
};

const s = "axc"
const t = "ahbgdc"

console.log(isSubsequence(s, t));
