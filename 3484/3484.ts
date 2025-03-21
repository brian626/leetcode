function isDigit(c: string): boolean {
    return /[0-9]/.test(c);
}

class Spreadsheet {
    constructor(rows: number) {
        this.grid = new Array(rows);
        for (let i = 0; i < rows; i++) {
            this.grid[i] = new Array();
        }
    }

    setCell(cell: string, value: number): void {
        const column = cell[0].charCodeAt(0) - 'A'.charCodeAt(0);
        const row = parseInt(cell.slice(1)) - 1;
        this.grid[row][column] = value;
    }

    resetCell(cell: string): void {
        this.setCell(cell, 0);
    }

    getValue(formula: string): number {
        const parts = /\=([A-Z0-9]+)\+([A-Z0-9]+)/.exec(formula);
        const op1 = parts[1], op2 = parts[2];
        let val1, val2;

        if (isDigit(op1[0])) {
            val1 = parseInt(op1);
        } else {
            const column = op1[0].charCodeAt(0) - 'A'.charCodeAt(0);
            const row = parseInt(op1.slice(1)) - 1;
            val1 = this.grid[row][column] || 0;
        }

        if (isDigit(op2[0])) {
            val2 = parseInt(op2);
        } else {
            const column = op2[0].charCodeAt(0) - 'A'.charCodeAt(0);
            const row = parseInt(op2.slice(1)) - 1;
            val2 = this.grid[row][column] || 0;
        }

        return val1 + val2;
    }

    grid: number[][];
}

/**
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */
