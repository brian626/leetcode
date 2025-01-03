class StockSpanner {
    prices: number[];

    constructor() {
        this.prices = [];
    }

    next(price: number): number {
        this.prices.push(price);

        let count = 0;
        for (let i = this.prices.length - 1; i >= 0; i--) {
            if (this.prices[i] <= price) {
                count++;
            } else {
                break;
            }
        }

        return count;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
