function checkIfPrerequisite(numCourses: number, prerequisites: number[][], queries: number[][]): boolean[] {
    const isReachable: boolean[][] = [];
    for (let i = 0; i < numCourses; i++) {
        isReachable[i] = [];
        for (let j = 0; j < numCourses; j++) {
            isReachable[i][j] = false;
        }
    }

    for (const p of prerequisites) {
        const [i, j] = p;
        isReachable[i][j] = true;
    }

    for (let i = 0; i < numCourses; i++) {
        const reachables: number[] = [];
        for (let j = 0; j < numCourses; j++) {
            if (isReachable[i][j] && !reachables.includes(j)) {
                reachables.push(j);
            }
        }

        while (reachables.length > 0) {
            const r = reachables.shift();
            isReachable[i][r] = true;

            for (let j = 0; j < numCourses; j++) {
                if (isReachable[r][j] && !reachables.includes(j)) {
                    reachables.push(j);
                }
            }
        }
    }

    console.log(isReachable);

    const answer: boolean[] = [];

    for (const q of queries) {
        const [i, j] = q;
        answer.push(isReachable[i][j]);
    }

    return answer;
};

const numCourses = 5;
const prerequisites = [[4, 3], [4, 1], [4, 0], [3, 2], [3, 1], [3, 0], [2, 1], [2, 0], [1, 0]]
const queries = [[1, 4], [4, 2], [0, 1], [4, 0], [0, 2], [1, 3], [0, 1]]


console.log(checkIfPrerequisite(numCourses, prerequisites, queries));
