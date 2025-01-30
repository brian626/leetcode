class Rectangle {
    bottom: number;
    left: number;
    top: number;
    right: number;

    constructor(coordinates: number[]) {
        this.left = coordinates[0];
        this.bottom = coordinates[1];
        this.right = coordinates[2];
        this.top = coordinates[3];
    }
}

function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
    const r1 = new Rectangle(rec1);
    const r2 = new Rectangle(rec2);

    return (r1.left < r2.right && r1.right > r2.left &&
        r1.top > r2.bottom && r1.bottom < r2.top)
};
