import { ReadLine, createInterface } from "readline";
const rl = createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

export async function typewrite(txt: any) {
    var i = 0;
    var speed = 50; /* The speed/duration of the effect in milliseconds */

    const write = () => {
        if (i < txt.length) {
            process.stdout.write(txt.charAt(i));
            i++;
            setTimeout(write, speed);
            return;
        }

        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    return write();
}

export async function ask(question: string, callback: (int) => void) {
    rl.question(question, (card: string) => {
        try {
            const x = Number(card);
            if (isNaN(x) || card == "\n" || card == "") throw new Error();
            callback(x)
            rl.close();
        }
        catch {
            typewrite("Input was invalid. Bye now.\n").then(() => {
                console.log("Test.");
                rl.close();
            })
        }
    })
}