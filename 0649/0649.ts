function predictPartyVictory(senate: string): string {
    const senateArray = senate.split('');

    let numD = senateArray.filter(x => x === 'D').length;
    let numR = senateArray.filter(x => x === 'R').length;

    while (numD > 0 && numR > 0) {
        console.log('top of loop', senateArray.join(' '), numD, numR);
        for (let i = 0; i < senateArray.length; i++) {
            if (senateArray[i] === 'R') {
                let k = i + 1;
                for (let j = 0; j < senateArray.length; j++) {
                    if (senateArray[k] === 'D') {
                        senateArray[k] = 'X';
                        break;
                    }
                    k++;
                    if (k >= senateArray.length) {
                        k = 0;
                    }
                }
            } else if (senateArray[i] === 'D') {
                let k = i + 1;
                for (let j = 0; j < senateArray.length; j++) {
                    if (senateArray[k] === 'R') {
                        senateArray[k] = 'X';
                        break;
                    }
                    k++;
                    if (k >= senateArray.length) {
                        k = 0;
                    }
                }
            }
        }

        numD = senateArray.filter(x => x === 'D').length;
        numR = senateArray.filter(x => x === 'R').length;
        console.log('bottom of loop', senateArray.join(' '), numD, numR);
    }

    console.log(senateArray.join(' '), numD, numR);
    return numD > numR ? 'Dire' : 'Radiant';
};

const senate = "DRRDRDRDRDDRDRDR";

console.log(predictPartyVictory(senate));
