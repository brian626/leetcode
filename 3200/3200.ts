function maxHeightOfTriangle(red: number, blue: number): number {
    let maxHeight = 0;

    // Find the max height if we start with red.
    let redTemp = red, blueTemp = blue;
    let height = 0;
    while (redTemp >= 0 && blueTemp >= 0) {
        height++;
        if (height % 2 === 0) {
            blueTemp -= height;
        } else {
            redTemp -= height;
        }

        if (redTemp < 0 || blueTemp < 0) {
            break;
        }

        console.log(`a updating maxHeight, redTemp = ${redTemp}, blueTemp = ${blueTemp}`);
        maxHeight = Math.max(maxHeight, height);
    }

    // Find the max height if we start with blue.
    redTemp = red, blueTemp = blue;
    height = 0;
    while (redTemp >= 0 && blueTemp >= 0) {
        height++;
        if (height % 2 === 0) {
            redTemp -= height;
        } else {
            blueTemp -= height;
        }

        if (redTemp < 0 || blueTemp < 0) {
            break;
        }

        console.log(`b updating maxHeight, redTemp = ${redTemp}, blueTemp = ${blueTemp}`);
        maxHeight = Math.max(maxHeight, height);
    }

    return maxHeight;
};
