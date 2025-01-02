class RecentCounter {
    recentRequests: number[];

    constructor() {
        this.recentRequests = [];
    }

    ping(t: number): number {
        this.recentRequests.push(t);
        this.recentRequests = this.recentRequests.filter(x => x >= t - 3000 && x <= t);
        return this.recentRequests.length;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));     // requests = [1], range is [-2999,1], return 1
console.log(recentCounter.ping(100));   // requests = [1, 100], range is [-2900,100], return 2
console.log(recentCounter.ping(3001));  // requests = [1, 100, 3001], range is [1,3001], return 3
console.log(recentCounter.ping(3002));  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
