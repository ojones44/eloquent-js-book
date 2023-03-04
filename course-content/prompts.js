// const message = prompt('Enter a message');

// document.body.innerHTML = `<h1>${message}</h1>`;

const squareRoot = Number(
	prompt("Enter a number, and I'll tell you what it is square root of")
);

if (!Number.isNaN(squareRoot)) {
	console.log(`${squareRoot} is the square root of ${squareRoot * squareRoot}`);
} else {
	console.log("You didn't provide a number!");
}
