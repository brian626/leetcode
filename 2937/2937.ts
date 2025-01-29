function findMinimumOperations(s1: string, s2: string, s3: string): number {
    let prefix = '';
    let minLength = Math.min(s1.length, s2.length, s3.length);

    for (let i = 0; i < minLength; i++) {
        if (s1[i] === s2[i] && s1[i] === s3[i]) {
            prefix += s1[i];
        } else {
            break;
        }
    }

    if (prefix.length > 0 && s1.startsWith(prefix) && s2.startsWith(prefix) && s3.startsWith(prefix)) {
        return (s1.length - prefix.length) + (s2.length - prefix.length) + (s3.length - prefix.length);
    } else {
        return -1;
    }
};
