function sieve(max: number): number[] {
    const bitArray = new Array(max + 1);;
    bitArray.fill(true);
    bitArray[0] = false;
    bitArray[1] = false;
    for (let i = 2; i <= Math.sqrt(max); i++) {
        for (let j = 2; i * j <= max; j++) {
            bitArray[i * j] = false;
        }
    }

    let primes: number[] = [];
    for (let i = 0; i < bitArray.length; i++) {
        if (bitArray[i]) {
            primes.push(i);
        }
    }

    return primes;
}

const PRIMES = sieve(Math.pow(10, 4));

function isPrime(n: number): boolean {
    return PRIMES.includes(n);
}

class MyNode {
    value: number;
    children: MyNode[];
    sumSoFar: number;

    constructor(value: number, sumSoFar: number = 0) {
        this.value = value;
        this.children = [];
        this.sumSoFar = sumSoFar;
    }
}

function minOperations(n: number, m: number): number {
    if (PRIMES.includes(n)) { return -1; }

    const rootNode = new MyNode(n);
    const nodesToExpand: MyNode[] = [rootNode];

    while (nodesToExpand.length > 0) {
        const node = nodesToExpand.shift();
        getChildValues(node);
        if (node.children.filter(x => x.value === m).length === 0) {
            for (const c of node.children) {
                console.log(`expanded ${node.value} to ${c.value}`);
                nodesToExpand.push(c);
            }
        }

        // if (nodesToExpand.map(x => x.value).filter(x => x === m).length > 0) {
        //     break;
        // }
    }

    function getChildValues(n: MyNode): void {
        // console.log(`getChildValues(${n.value})`);
        if (n.value === m) { return; }
        const digits = n.value.toString().split('').map(x => parseInt(x));

        for (let i = 0; i < digits.length; i++) {
            if (digits[i] < 9) {
                digits[i] += 1;
                // console.log(`  added 1 to digits[${i}] to get ${digits.join('')}`);
                let newNumber = parseInt(digits.join(''));
                if (newNumber > 0 && !isPrime(newNumber) && (n.sumSoFar + newNumber )) {
                    n.children.push(new MyNode(newNumber, n));
                    // console.log(`  adding ${newNumber} from ${n.value}`);
                } else {
                    // console.log(`  not adding ${newNumber} from ${n.value}`);
                }
                digits[i] -= 1;
            }

            if (digits[i] > 0) {
                digits[i] -= 1;
                // console.log(`  subtracted 1 to digits[${i}] to get ${digits.join('')}`);
                let newNumber = parseInt(digits.join(''));
                if (newNumber > 0 && !isPrime(newNumber) && newNumber !== n.parent?.value) {
                    n.children.push(new MyNode(newNumber, n));
                    // console.log(`  adding ${newNumber} from ${n.value}`);
                } else {
                    // console.log(`  not adding ${newNumber} from ${n.value}`);
                }
                digits[i] += 1;
            }
        }

        // console.log();
    }

    let nodePtrs = [rootNode];
    let goalPtrs: MyNode[] = [];
    while (nodePtrs.length > 0) {
        const nodePtr = nodePtrs.shift();
        if (nodePtr.value === m) {
            goalPtrs.push(nodePtr);
        }
        console.log(nodePtr);
        for (const c of nodePtr.children) {
            nodePtrs.push(c);
        }
    }

    let minCost = Infinity;
    if (goalPtrs.length === 0) {
        minCost = -1;
    } else {
        while (goalPtrs.length > 0) {
            let goalPtr = goalPtrs.pop();
            let goalSum = 0;
            while (goalPtr) {
                // console.log(goalPtr.value);
                goalSum += goalPtr.value;
                goalPtr = goalPtr.parent;
            }
            minCost = Math.min(goalSum, minCost);
        }

    }

    return minCost;
};

const n = 15, m = 88;
console.log(minOperations(n, m));
