function removeOccurrences(s: string, part: string): string {
    let i = s.indexOf(part);
    while (i !== -1) {
        s = s.replace(part, '');
        i = s.indexOf(part);
    }

    return s;
};
