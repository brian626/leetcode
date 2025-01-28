function findLatestTime(s: string): string {
    const [h1, h2, _, m1, m2] = s.split('');

    let result: string[] = [];

    if (h1 === '?') {
        if (h2 === '?') {
            result[0] = '1';
        } else if (h2 === '0' || h2 === '1') {
            result[0] = '1';
        } else {
            result[0] = '0';
        }
    } else {
        result[0] = h1;
    }

    if (h2 === '?') {
        result[1] = result[0] === '1' ? '1' : '9';
    } else {
        result[1] = h2;
    }

    result[2] = ':';

    result[3] = m1 === '?' ? '5' : m1;

    result[4] = m2 === '?' ? '9' : m2;

    return result.join('');
};

const s = "?3:12"

console.log(findLatestTime(s));
