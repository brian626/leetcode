function convertDateToBinary(date: string): string {
    const matches = /(\d+)-(\d+)-(\d+)/.exec(date);
    return parseInt(matches[1]).toString(2) + '-' + parseInt(matches[2]).toString(2) + '-' + parseInt(matches[3]).toString(2);
};

const date = "2080-02-29";
console.log(convertDateToBinary(date));
