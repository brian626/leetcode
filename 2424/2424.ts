class LUPrefix {
    constructor(n: number) {
        this.uploaded = Array(n).fill(false);
        this.lastPrefix = 1;
    }

    upload(video: number): void {
        this.uploaded[video] = true;
    }

    longest(): number {
        console.log(this.uploaded);
        while (this.uploaded[this.lastPrefix]) {
            this.lastPrefix++;
        }

        return this.lastPrefix - 1;
    }

    uploaded: boolean[];
    lastPrefix: number;
}

/**
 * Your LUPrefix object will be instantiated and called as such:
 * var obj = new LUPrefix(n)
 * obj.upload(video)
 * var param_2 = obj.longest()
 */

const server = new LUPrefix(4);
console.log(server.upload(3));                    // Upload video 3.
console.log(server.longest());                    // Since video 1 has not been uploaded yet, there is no prefix.
console.log(                );                    // So, we return 0.
console.log(server.upload(1));                    // Upload video 1.
console.log(server.longest());                    // The prefix [1] is the longest uploaded prefix, so we return 1.
console.log(server.upload(2));                    // Upload video 2.
console.log(server.longest());                    // The prefix [1,2,3] is the longest uploaded prefix, so we return 3.
