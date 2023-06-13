// A closure is where a function is returned from a function

// This allows you store to store a returned function into a binding, in which the funtion has access to variables of the environment it was created in, and no the environment form when that the returned funtion is called.

// This means that a closure gives you access to an outer functions scope from an inner function (nested function).

// A closure is a function having access to the parent scope, even after the parent function has closed.

// An item's lexical scope is the place in which the item got created.

/* Example 1 - Scope */

let x = 5;

function parentFunction() {
	// Local scope
	console.log('Parent function');
	let y = 10;
	console.log(x);
	console.log(y);

	const childFunction = () => {
		console.log('Child function');
		console.log((x += 5));
		console.log((y += 1));
	};

	// childFunction();

	// Returning function with access to local, parent & global scope
	return childFunction;
}

// Store return value (a function) to a variable
const result = parentFunction();

// This variable can now be invoked as a function
result();

// If we keep calling it, it will continue incrementing the values
result();
result();

// global variable x will have been updated becaue the result function has access to it
console.log(x);

// console.log(y); // Reference error - private variable

/* Example 2 - IIFE (Immediatly Invoked Function Expression) */

// Creating a counter in which the value is not accesible in the global scope
const privateCounter = (() => {
	let count = 0;
	console.log(`Initial Value: ${count}`);
	return () => {
		count += 1;
		console.log(`New Count: ${count}`);
	};
})();

// let counter = 0;

// const countToTen = setInterval(() => {
// 	privateCounter();
// 	counter++;
// 	check();
// }, 1000);

// function check() {
// 	counter === 10 && clearInterval(countToTen);
// }

/* Example 2 - IIFE with parameter */

const credits = ((num) => {
	let credits = num;
	console.log(`Initial credits: ${credits}`);
	return () => {
		credits--;
		if (credits > 0) console.log(`Playing game, credits remaining: ${credits}`);
		if (credits <= 0) console.log('Out of credits');
	};
})(4);

credits();
credits();
credits();
credits();
