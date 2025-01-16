function shiftingLetters(s: string, shifts: number[][]): string {
    const shiftCounts: number[] = Array(s.length).fill(0);
    for (const shift of shifts) {
        const [start, end, direction] = shift;
        for (let i = start; i <= end; i++) {
            shiftCounts[i] += (direction === 1) ? 1 : -1;
        }
    }

    const arr = s.split('');

    for (let i = 0; i < shiftCounts.length; i++) {
        let shifted = arr[i].charCodeAt(0) + shiftCounts[i];
        while (shifted < 'a'.charCodeAt(0)) {
            shifted += 26;
        }
        while (shifted > 'z'.charCodeAt(0)) {
            shifted -= 26;
        }

        arr[i] = String.fromCharCode(shifted);
    }

    return arr.join('');
};

const s = "abc";
const shifts = [[0,1,0],[1,2,1],[0,2,1]];

console.log(shiftingLetters(s, shifts));
