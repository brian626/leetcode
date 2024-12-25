function stableMountains(height: number[], threshold: number): number[] {
    const answer: number[] = [];
    for (let i = 1; i < height.length; i++) {
        if (height[i-1] > threshold) {
            answer.push(i);
        }
    }

    return answer;
};

const height = [1,2,3,4,5];
const threshold = 2;
console.log(stableMountains(height, threshold));
