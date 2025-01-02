class SmallestInfiniteSet {
    missingNumbers: number[];

    constructor() {
        this.missingNumbers = [];
    }

    popSmallest(): number {
        if (this.missingNumbers.length === 0) {
            this.missingNumbers.unshift(1);
        } else {
            let smallestSoFar = 1;
            while (this.missingNumbers.includes(smallestSoFar)) {
                smallestSoFar++;
            }
            this.missingNumbers.unshift(smallestSoFar);
        }

        console.log(`popSmallest() returning ${this.missingNumbers[0]}, array is now ${this.missingNumbers}`);

        return this.missingNumbers[0];
    }

    addBack(num: number): void {
        const i = this.missingNumbers.indexOf(num);
        if (i !== -1) {
            this.missingNumbers.splice(i, 1);
        }

        console.log(`addBack(${num}), array is now ${this.missingNumbers}`);
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
