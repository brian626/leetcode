for (let a = 0; a < 21; a++) {
    for (let b = 0; b < 21; b++) {
        for (let c = 0; c < 21; c++) {
            for (let d = 0; d < 21; d++) {
                if ((a * 419 + b * 408 + c * 186 + d * 83) === 6249) {
                    console.log(a,b,c,d,a+b+c+d);
                    break;
                }
            }
        }
    }
}
