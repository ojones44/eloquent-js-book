/* 

When a function produces a value, it is said to return that value. 
Anything that produces a value in JS is an expression

*/

function range(start, end, step = 1) {
	let range = [];
	for (
		let i = start;
		start > end ? i > end - 1 : i < end + 1;
		start > end ? (i -= step) : (i += step)
	) {
		range.push(i);
	}

	return range;
}

function sum(array) {
	let sum = 0;
	array.forEach((num) => (sum += num));

	return sum;
}

// console.log(sum(range(1, 10, 2)));

// console.log(range(1, 25, 12));

module.exports = {
	range,
	sum,
};
