function partitionLabels(s: string): number[] {
    const partitions: string[] = [];
    let pos = 0;
    while (pos < s.length) {
        const start = pos;
        const firstLetter = s[start];
        let end = s.lastIndexOf(firstLetter);
        console.log(firstLetter, start, end);
        if (start !== end) {
            for (let i = start; i < end; i++) {
                if (s[i] !== firstLetter) {
                    end = Math.max(end, s.lastIndexOf(s[i]));
                }
            }
        }

        partitions.push(s.slice(start, end + 1));
        pos = end + 1;
    }

    console.log(partitions);
    return partitions.map(x => x.length);
};

const s = "eccbbbbdec";
console.log(partitionLabels(s));
