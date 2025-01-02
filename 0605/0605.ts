function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if (n === 0) { return true; }

    if (flowerbed.length === 1) {
        return flowerbed[0] === 0 && n === 1;
    }

    if (flowerbed[0] === 0 && flowerbed[1] === 0) {
        flowerbed[0] = 1;
        n--;
    }

    if (n === 0) { return true; }

    for (let i = 1; i < flowerbed.length - 1; i++) {
        if (flowerbed[i] === 0 && flowerbed[i-1] === 0 && flowerbed[i+1] === 0) {
            flowerbed[i] = 1;
            n--;
        }

        if (n === 0) { return true; }
    }

    if (flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0) {
        flowerbed[flowerbed.length - 1] = 1;
        n--;
    }

    if (n === 0) { return true; }

    return false;
};

const flowerbed = [1,0,0,0,1]
const n = 1


console.log(canPlaceFlowers(flowerbed, n));
