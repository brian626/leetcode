function isLongPressedName(name: string, typed: string): boolean {
    let p1 = 0, p2 = 0;

    while (true) {
        if (name[p1] === typed[p2]) {
            if (name[p1] !== name[p1 + 1]) {
                while (name[p1] === typed[p2]) {
                    p2++;
                }
            } else {
                p2++;
            }

            p1++;
        } else {
            break;
        }

        if (p1 === name.length || p2 === typed.length) {
            break;
        }
    }

    console.log(p1, name.length);
    console.log(p2, typed.length);

    return (p1 === name.length && p2 === typed.length);
};

const testName = "alex"
const typed = "aaleexa"

console.log(isLongPressedName(testName, typed));
