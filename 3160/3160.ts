function queryResults(limit: number, queries: number[][]): number[] {
    const ballColors: Map<number, number> = new Map<number, number>();
    const colorCounts: Map<number, number> = new Map<number, number>();

    const result: number[] = [];

    for (const query of queries) {
        console.log(query, ballColors, colorCounts);
        const [ball, color] = query;

        if (ballColors.has(ball)) {
            const currentColor = ballColors.get(ball);
            if (currentColor === color) {
                result.push(colorCounts.size);
                continue;
            }

            const currentCount = colorCounts.get(currentColor) || 0;
            if (currentCount === 1) {
                colorCounts.delete(currentColor);
            } else {
                colorCounts.set(currentColor, currentCount - 1);
            }
        }

        ballColors.set(ball, color);
        const colorCount = colorCounts.get(color) || 0;
        colorCounts.set(color, colorCount + 1);

        result.push(colorCounts.size);
    }

    return result;
};

const limit = 1;
const queries = [[0, 1], [0, 4], [0, 4], [0, 1], [1, 2]]

console.log(queryResults(limit, queries));
