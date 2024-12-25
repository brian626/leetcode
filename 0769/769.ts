function maxChunksToSorted(arr: number[]): number {
    const chunks: number[][] = [];
    while (arr.length > 0) {
        const [begin, end] = extractChunkContainingMinValue(arr);
        console.log(`chunk containing min value starts at ${begin} and ends at ${end}`);

        chunks.push(arr.slice(begin, end));
        arr.splice(begin, end);

        console.log(`chunks: ${chunks.map(x => '[' + x + ']')}`);
        console.log(`arr: ${arr}`);
    }

    return chunks.length;
};


function extractChunkContainingMinValue(arr: number[]): number[] {
    const minValue = Math.min(...arr);
    const indexOfMinValue = arr.indexOf(minValue);
    let endOfChunk = indexOfMinValue + 1;

    let chunk = arr.slice(0, endOfChunk);
    let maxOfChunk = Math.max(...chunk);
    console.log(`original end of chunk: ${endOfChunk}, min is ${minValue}, max is ${maxOfChunk}`);
    for (let i = endOfChunk; i < arr.length; i++) {
        if (arr[i] < maxOfChunk) {
            console.log(`extending end of chunk to ${i+1} to include ${arr[i]}`);
            endOfChunk = i + 1;
            chunk = arr.slice(0, endOfChunk);
            maxOfChunk = Math.max(...chunk);
        } else {
            console.log(`don't need to include ${arr[i]}`);
        }
    }

    return [0, endOfChunk];
}


console.log(maxChunksToSorted([2,0,4,6,3,1,7,5,8]));
