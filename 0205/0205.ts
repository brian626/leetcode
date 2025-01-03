function isIsomorphic(s: string, t: string): boolean {
    const letterMap: Map<string, string> = new Map<string, string>();
    const lettersUsed: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (!letterMap.has(s[i])) {
            if (lettersUsed.includes(t[i])) {
                return false;
            }

            letterMap.set(s[i], t[i]);
            lettersUsed.push(t[i]);
        } else if (letterMap.get(s[i]) !== t[i]) {
            return false;
        }
    }

    return true;
};

const s = "badc";
const t = "baba";

console.log(isIsomorphic(s,t));
