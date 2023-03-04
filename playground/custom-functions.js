/* 

When a function produces a value, it is said to return that value. 
Anything that produces a value in JS is an expression

*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function range(start, end) {
	let range = [];
	for (let i = start; i < end + 1; i++) {
		range.push(i);
	}

	return range;
}

function sum(array) {
	let sum = 0;
	array.forEach((num) => (sum += num));

	return sum;
}

// console.log(sum(range(1, 10)));

// console.log(range(-10, -5));

module.exports = {
	range,
	sum,
};
