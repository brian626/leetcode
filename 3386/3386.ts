function buttonWithLongestTime(events: number[][]): number {
    let lastTime = 0;
    let longestTime = 0;
    let buttonWithLongestTime = 0;

    for (let i = 0; i < events.length; i++) {
        const [index, time] = events[i];
        const buttonTime = time - lastTime;
        lastTime = time;
        if (buttonTime > longestTime) {
            longestTime = buttonTime;
            buttonWithLongestTime = index;
        } else if (buttonTime === longestTime) {
            buttonWithLongestTime = Math.min(buttonWithLongestTime, index);
        }
    }

    return buttonWithLongestTime;
};

const events = [[1,2],[2,5],[3,9],[1,15]];
console.log(buttonWithLongestTime(events));
