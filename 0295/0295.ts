class MedianFinder {
    values: number[];

    constructor() {
        this.values = [];
    }

    addNum(num: number): void {
        this.values.push(num);
        this.values.sort((a, b) => a - b);
        console.log(`arr = [${this.values}]`);
    }

    findMedian(): number {
        const index2 = this.values.length / 2;
        if (this.values.length % 2 === 0) {
            const index1 = index2 - 1;
            console.log(`return ${(this.values[index1] + this.values[index2]) / 2} (i.e. (${this.values[index1]} + ${this.values[index2]}) / 2)`);
            return (this.values[index1] + this.values[index2]) / 2;
        } else {
            console.log(`return ${this.values[Math.floor(index2)]}`);
            return this.values[Math.floor(index2)];
        }
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
