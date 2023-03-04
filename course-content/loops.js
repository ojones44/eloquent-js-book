/*
A do loop is a control structure similar to a while loop. It differs only
on one point: a do loop always executes its body at least once, and it
starts testing whether it should stop only after that first execution. To
reflect this, the test appears after the body of the loop.
*/

/* ----------------------------------------------------------------------- */

let complete = false;
counter = 0;

do {
	counter === 10 ? (complete = !complete) : console.log(counter);
	counter < 10 && counter++;
} while (!complete);
console.log(`Complete, counter = ${counter}`);

const squares = [];

/* ----------------------------------------------------------------------- */

for (let n = 2; n < 50; n += 2) {
	squares.push(n);
	if (n % 10 === 0) {
		console.log(`${n} is divisible by 10!`);
		continue;
	} else if (n === 32) {
		break;
	}
}

console.log(squares);

/* ----------------------------------------------------------------------- */

// In for loops, you can omit the conditional check. However without the correct code blocks inside the loop, it wil run forever.

for (let current = 20; ; current++) {
	if (current % 7 == 0) {
		console.log(current);
		break;
	}
}

/* ----------------------------------------------------------------------- */
