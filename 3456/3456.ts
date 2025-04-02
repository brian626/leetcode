function hasSpecialSubstring(s: string, k: number): boolean {
    if (s.length === 1 && k === 1) { return true; }

    for (let i = 0; i <= s.length - k; i++) {
        const slice = s.slice(i, i + k);
        if (allCharsSame(slice)) {
            const charBefore = (i === 0) ? '' : s[i - 1];
            const charAfter = (i > s.length - k - 1) ? '' : s[i + k];
            console.log(i, slice, charBefore, charAfter);
            if (s[i] !== charBefore && s[i] !== charAfter) {
                return true;
            }
        }
    }

    return false;
};

function allCharsSame(s: string): boolean {
    for (let i = 1; i < s.length; i++) {
        if (s[i] !== s[0]) {
            console.log(`allCharsSame(${s}) returning false`);
            return false;
        }
    }

    console.log(`allCharsSame(${s}) returning true`);
    return true;
}

console.log(hasSpecialSubstring("gdgkahhhdf", 2));
