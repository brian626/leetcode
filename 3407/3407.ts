function hasMatch(s: string, p: string): boolean {
    const [prefix, suffix] = p.split('*');

    if (prefix.length === 0) {
        return s.includes(suffix);
    } else if (suffix.length === 0) {
        return s.includes(prefix);
    } else {
        const prefixIndex = s.indexOf(prefix);

        if (prefixIndex !== -1) {
            const suffixIndex = s.indexOf(suffix, prefixIndex + prefix.length);
            if (suffixIndex !== -1) {
                return true;
            }
        }
    }

    return false;
};

const s = "leetcode";
const p = "ee*e";

console.log(hasMatch(s, p));
