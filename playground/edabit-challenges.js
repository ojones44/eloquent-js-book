// const sevenBoom = (nums) => {
// 	for (i = 0; i < nums.length; i++) {
// 		if (nums[i] === 7) {
// 			console.log('Boom!');
// 			return;
// 		}
// 	}

// 	console.log('Does not contain the number seven');
// };

// const numsArray = [1, 2, 3, 4, 7, 8, 9];

// sevenBoom(numsArray);

// /* ---------------------------------------- */

// function numberLength(x) {
// 	console.log(x.toString().length);
// }

// numberLength(12345678910);

// /* ---------------------------------------- */

// const toArray = (object) => {
// 	let newArray = [];

// 	Object.keys(object).forEach((key) => {
// 		newArray.push([Number(key)]);
// 	});

// 	Object.values(object).forEach((value, index) => {
// 		newArray[index].push(value);
// 	});

// 	console.log(newArray);
// };

// toArray({ 1: 2, 3: 4 });

// /* ---------------------------------------- */

// const redundant = (str) => () => {
// 	console.log(str);
// };

// const f1 = redundant('Closure function');
// const f2 = redundant('Closure function 2');
// const f3 = redundant('Closure function 3');

// f1();
// f2();
// f3();

// /* ---------------------------------------- */

// function minMax(nums) {
// 	let minMaxArray = [nums[0], nums[0]];

// 	nums.forEach((num) => {
// 		if (num > minMaxArray[1]) {
// 			minMaxArray[1] = num;
// 		}

// 		if (num < minMaxArray[0]) {
// 			minMaxArray[0] = num;
// 		}
// 	});

// 	console.log(minMaxArray);
// }

// minMax([2334454, 5]);

// /* ---------------------------------------- */

// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 		this.greet = () =>
// 			console.log(`Hi! My name is ${this.name} and I am ${this.age} years old`);
// 	}

// 	compareAge(person) {
// 		if (person.age < this.age) {
// 			console.log(`${person.name} is younger than ${this.name}`);
// 		} else if (person.age > this.age) {
// 			console.log(`${person.name} is older than ${this.name}`);
// 		} else if (person.age === this.age) {
// 			console.log(`${person.name} is the same age as ${this.name}`);
// 		}
// 	}
// }

// const person_1 = new Person('Oliver', '29');
// const person_2 = new Person('John', '35');
// const person_3 = new Person('Katie', '29');

// person_1.compareAge(person_2);
// person_2.compareAge(person_1);
// person_1.compareAge(person_3);
// person_1.greet();

// /* ---------------------------------------- */

// // Filter array

// function filterArray(array) {
// 	let notString = [];

// 	array.forEach((item, i) => {
// 		if (typeof item !== 'string') {
// 			notString.push(item);
// 		}
// 	});

// 	let uniqueChars = [];

// 	notString.forEach((ch) => {
// 		if (!uniqueChars.includes(ch)) {
// 			uniqueChars.push(ch);
// 		}
// 	});

// 	console.log(uniqueChars.sort());
// }

// filterArray([5, 1, 2, 4, 'string', 7, 4, '5', 5, 5, 5, 5, 5]);

/* ---------------------------------------- */

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// TODO - tough challenge

// function groupAnagrams(array) {
// 	let grouped = [];

// 	let sortedData = array.map((word, i) => {
// 		return word.split('').sort().join('');
// 	});

// 	console.log(grouped);
// }

// groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);

/* ---------------------------------------- */

// function numbersSum(arr) {
// 	let sum = 0;

// 	arr.forEach((item) => item === Number(item) && (sum += item));

// 	console.log(sum);
// }

// numbersSum(['5', true, false, '10']);

/* ---------------------------------------- */

// function flickSwitch(arr) {
// 	let bool = true;

// 	return arr.map((item) => {
// 		item === 'flick' && (bool = !bool);

// 		return bool;
// 	});
// }

// console.log(flickSwitch(['edabit', 'flick', 'eda', 'bit']));
// console.log(flickSwitch(['flick', 11037, 3.14, 53]));
// console.log(flickSwitch([false, false, 'flick', 'sheep', 'flick']));

/* ---------------------------------------- */

// function indexMuliplier(arr) {
// 	let sum = 0;
// 	arr.forEach((number, i) => {
// 		sum += number * i;
// 	});

// 	return sum;
// }

// console.log('The total of this array is: ' + indexMuliplier([1, 2, 3, 4, 5]));

/* ---------------------------------------- */

// TODO Not sure how this sorts an array: arr.sort((a, b) => a - b)

// function sumTwoSmallest(arr) {
// 	let sortedArr = arr.sort((a, b) => a - b).filter((num) => num > 0);

// 	return sortedArr[0] + sortedArr[1];
// }

// console.log(
// 	sumTwoSmallest([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])
// );

/* ---------------------------------------- */

// function diffSet(arr1, arr2) {
// 	return [
// 		...arr2.filter((num) => !arr1.includes(num)),
// 		...arr1.filter((num) => !arr2.includes(num)),
// 	];
// }

// console.log(diffSet([1, 2, 3, 4, 5], [6, 1, 2, 3, 4, 9]));

/* ---------------------------------------- */

/* 
Example of hoisting below

Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

To avoid bugs, always declare all variables at the beginning of every scope.

The variable i is captured in the closure of the anonymous function that calls console.log() and is invoked asynchronously via setTimeout(). So the invocation is added to the event loop, and at the time of invocation, the captured variable i has already been incremented to 3.

let has block scope, therefore each iteration, the value of i is bound to the closure.

*/

// for (var i = 0; i < 5; i++) {
// 	setTimeout(function () {
// 		console.log(i);
// 	}, i * 1000);
// }

// for (let i = 0; i < 5; i++) {
// 	setTimeout(function () {
// 		console.log(i);
// 	}, i * 1000);
// }

// for (var i = 0; i < 5; i++) {
// 	console.log(i);
// }

/* 
Below, we can see that every loop iteration is represented by invoking a function with the loop variable i. Therefore a copy of i is in the function scope of _loop(), which means that it will not be affected by later changes to the original i. 
*/

// var _loop = function _loop(i) {
// 	setTimeout(function () {
// 		return console.log(i);
// 	}, 0);
// };

// for (var i = 0; i < 5; i++) {
// 	_loop(i);
// }

/* ---------------------------------------- */

// function findLetters(str, letter) {
// 	let count = 0;

// 	str.split('').forEach((letterInStr) => letterInStr === letter && count++);

// 	return count;
// }

// const myStr =
// 	'This is a really long sentence that will count a specified letter';
// const letter = 'r';

// console.log(findLetters(myStr, letter));

/* ---------------------------------------- */
