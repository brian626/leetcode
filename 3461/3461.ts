function hasSameDigits(s: string): boolean {
    while (s.length > 2) {
        let newS = '';

        for (let i = 0; i < s.length - 1; i++) {
            newS += ((parseInt(s[i]) + parseInt(s[i + 1])) % 10).toString();
        }

        s = newS;
    }

    return s[0] === s[1];
};
