function totalCost(costs: number[], k: number, candidates: number): number {
    let total = 0;

    console.log(`costs starts as [${costs.join(', ')}]`)

    const pool1 = costs.slice(0, candidates);
    const pool2 = costs.slice(candidates, -1 * candidates);
    const pool3 = costs.slice(-1 * candidates);

    console.log(pool1);
    console.log(pool2);
    console.log(pool3);
    console.log();

    for (let i = 0; i < k; i++) {
        const minCostInPool1 = Math.min(...pool1);
        const minCostInPool3 = Math.min(...pool3);
        let minCost = -1;

        if (minCostInPool1 <= minCostInPool3) {
            minCost = minCostInPool1;
            const minCostIndex = pool1.indexOf(minCost);
            pool1.splice(minCostIndex, 1);
            if (pool2.length > 0) {
                pool1.push(pool2.shift());
            } else {
                pool1.push(pool3.shift())
            }
        } else {
            minCost = minCostInPool3;
            const minCostIndex = pool3.indexOf(minCost);
            pool3.splice(minCostIndex, 1);
            if (pool2.length > 0) {
                pool3.unshift(pool2.pop());
            } else {
                pool3.unshift(pool1.pop());
            }
        }

        total += minCost;
        console.log(`hired worker with cost ${minCost}`);
        console.log(pool1);
        console.log(pool2);
        console.log(pool3);
        console.log();
    }

    return total;
};

const costs = [17, 12, 10, 2, 7, 2, 11, 20, 8]
const k = 3;
const candidates = 4;

console.log(totalCost(costs, k, candidates));
