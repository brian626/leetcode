function minOperations(boxes: string): number[] {
    const operations: number[] = [];

    for (let i = 0; i < boxes.length; i++) {
        let numOps = 0;

        for (let j = 0; j < boxes.length; j++) {
            if (i === j) { continue; }

            if (boxes[j] === '1') {
                numOps += Math.abs(j - i);
            }
        }

        operations.push(numOps);
    }

    return operations;
};

console.log(minOperations("110")); // Output: [1,1,3]
console.log(minOperations("001011")); // Output: [11,8,5,4,3,4]
