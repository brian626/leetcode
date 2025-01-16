function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const C: number[] = [];

    const sliceA: number[] = [];
    const sliceB: number[] = [];

    for (let i = 0; i < A.length; i++) {
        sliceA.push(A[i]);
        sliceB.push(B[i]);
        C[i] = countCommon(sliceA, sliceB);
    }

    return C;
};


function countCommon(A: number[], B: number[]): number {
    let count = 0;
    for (const a of A) {
        if (B.includes(a)) {
            count++;
        }
    }

    return count;
}


const A = [1,3,2,4]
const B = [3,1,2,4]

console.log(findThePrefixCommonArray(A, B));
