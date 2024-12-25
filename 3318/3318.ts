function findXSum(nums: number[], k: number, x: number): number[] {
    let answer: number[] = [];

    for (let i = 0; i < nums.length - k + 1; i++) {
        answer[i] = xSum(nums.slice(i, i + k), x);
    }

    return answer;
};


function xSum(nums: number[], x: number): number {
    if (nums.length < x) { return nums.reduce((a, b) => a + b, 0); }

    const elementCount: Map<number, number> = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        elementCount.set(nums[i], (elementCount.get(nums[i]) || 0) + 1);
    }

    const keptElements: number[] = [];

    while (x > 0) {
        console.log(`for subarray [${nums}], element count is`);
        console.log(elementCount);

        let maxCount = Math.max(...elementCount.values());

        let elementsToPossiblyKeep: Set<number> = new Set<number>();
        for (const [element, count] of elementCount) {
            if (count === maxCount) {
                elementsToPossiblyKeep.add(element);
            }
        }

        console.log(`possibly keeping elements ${Array.from(elementsToPossiblyKeep)}`);
        if (elementsToPossiblyKeep.size === 1) {
            let keptElement = -1;
            for (const num of nums) {
                if (elementCount.get(num) === maxCount) {
                    keptElements.push(num);
                    keptElement = num;
                }
            }

            elementCount.delete(keptElement);

            x--;
        } else {
            const maxElement = Math.max(...elementsToPossiblyKeep);

            let keptElement = -1;
            for (const num of nums ) {
                if (num === maxElement) {
                    keptElements.push(num);
                    keptElement = num;
                }
            }

            elementCount.delete(keptElement);

            x--;
        }
    }

    console.log(`kept elements ${keptElements}`);
    console.log();

    return keptElements.reduce((a, b) => a + b, 0);
}




const nums = [9,2,2];
const k = 3;
const x = 3;

console.log(findXSum(nums, k, x));
