function validPalindrome(s: string): boolean {
    if (isPalindrome(s)) { return true; }

    let i = 0;

    while (i < s.length) {
        if (isPalindrome(s.slice(0, i) + s.slice(i + 1))) { return true; }
        i++;
    }

    return false;
};

function isPalindrome(s: string): boolean {
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(validPalindrome('abc'));
