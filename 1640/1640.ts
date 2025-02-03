function canFormArray(arr: number[], pieces: number[][]): boolean {
    let i = 0;

    while (i < arr.length) {
        const matchingPiece = pieces.find(x => x[0] === arr[i]);
        if (!matchingPiece) {
            return false;
        }

        for (let j = 0; j < matchingPiece.length; j++) {
            if (arr[i + j] !== matchingPiece[j]) {
                return false;
            }
        }

        i += matchingPiece.length;
    }

    return true;
};
