const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
	{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
	{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
	{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
	{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
	{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
	'Bernhard, Sandra',
	'Bethea, Erin',
	'Becker, Carl',
	'Bentsen, Lloyd',
	'Beckett, Samuel',
	'Blake, William',
	'Berger, Ric',
	'Beddoes, Mick',
	'Beethoven, Ludwig',
	'Belloc, Hilaire',
	'Begin, Menachem',
	'Bellow, Saul',
	'Benchley, Robert',
	'Blair, Robert',
	'Benenson, Peter',
	'Benjamin, Walter',
	'Berlin, Irving',
	'Benn, Tony',
	'Benson, Leana',
	'Bent, Silas',
	'Berle, Milton',
	'Berry, Halle',
	'Biko, Steve',
	'Beck, Glenn',
	'Bergman, Ingmar',
	'Black, Elk',
	'Berio, Luciano',
	'Berne, Eric',
	'Berra, Yogi',
	'Berry, Wendell',
	'Bevan, Aneurin',
	'Ben-Gurion, David',
	'Bevel, Ken',
	'Biden, Joseph',
	'Bennington, Chester',
	'Bierce, Ambrose',
	'Billings, Josh',
	'Birrell, Augustine',
	'Blair, Tony',
	'Beecher, Henry',
	'Biondo, Frank',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const bornIn1500s = inventors.filter(
	(inventor) => inventor.year >= 1500 && inventor.year < 1600
);

// console.table(bornIn1500s);

/* ------------------------------------------------ */

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const names = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
// console.log(names);

/* ------------------------------------------------ */

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const oldestToYoungest = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
// console.table(oldestToYoungest);

/* ------------------------------------------------ */

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const yearsLived = inventors.reduce(
	(total, inventor) => total + (inventor.passed - inventor.year),
	0
);
// console.log(yearsLived);

/* ------------------------------------------------ */

const nums = [1, 2, 3, 4, 5];

const reducer = (acc, value, i) => {
	return i > 0 && acc + value;
};

const sum = nums.reduce((acc, value) => acc + value, 10);
// console.log(sum);

/* ------------------------------------------------ */

const flattened = [
	[0, 1],
	[2, 3],
	[4, 5],
].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

// console.log(flattened);

/* ------------------------------------------------ */

// 5. Sort the inventors by years lived

const yearsLivedReducer = (livedObject, inventor) => {
	const age = inventor.passed - inventor.year;
	return [
		...livedObject,
		{
			name: `${inventor.first} ${inventor.last}`,
			death_at_age: age,
		},
	].sort((a, b) => (a.death_at_age > b.death_at_age ? 1 : -1));
};

const lived = inventors.reduce(yearsLivedReducer, []);
// console.log(lived);

/* ------------------------------------------------ */

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const blvds = Array.from(document.querySelectorAll('.mw-category a'))
// 	.map((element) => element.innerText)
// 	.filter((item) => item.includes('de'));

/* ------------------------------------------------ */

// 7. sort Exercise
// Sort the people alphabetically by last name

// console.log(people.sort());

/* ------------------------------------------------ */

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
	'car',
	'car',
	'truck',
	'truck',
	'bike',
	'walk',
	'car',
	'van',
	'bike',
	'walk',
	'car',
	'van',
	'car',
	'truck',
];

// In this example, I run the reduce method on the data array

// Then I define the reducer function outside to make the code cleaner

// I pass two arguments into the callback function, one being the 'accumulator', and one being the current item - in this case is a vehicle.

const vehicleReducer = (vehicleObject, vehicle) => {
	// Inside the reducer, I check if the vehicle exists in the object bound to 'vehicleObject' and try to access its value. If not, set the variable to 0
	const currtCount = vehicleObject[vehicle] ?? 0;

	// Then return the object which is spread inside curly braces, and append or alter the value with the current vehicle. Add one to whatever the value is inside the 'currtCount' variable.
	return {
		...vehicleObject,
		[vehicle]: currtCount + 1,
	};
};

// Reucde called, and callback function is passed in, with an empty object as an inital value for the accumulator.
const sumInstances = data.reduce(vehicleReducer, {});

// console.log(sumInstances);

/* ------------------------------------------------ */

function findNth(arr, i) {
	return i > arr.length ? 'Index out of range' : arr[i - 1];
}

// console.log(findNth([1, 2, 3, 4, 5], 10));

/* ------------------------------------------------ */

function removeNth(a, i = 3) {
	return a.slice(i);
}

// console.log(removeNth([1, 2, 3, 4], -3));

/* ------------------------------------------------ */

function removeFirstThree(a) {
	// return a.slice(0, 3);
	return [a.shift(), a.shift(), a.shift()];
}

// console.log(removeFirstThree([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/* ------------------------------------------------ */

function removeLastN(a, i) {
	return a.slice(i > a.length ? 0 : i * -1);
}

// console.log(removeLastN([1, 2, 3], 6));

/* ------------------------------------------------ */

function removeB(a, b) {
	return a.filter((item) => item !== b);
}

// console.log(removeB([1, 2, 3], 2));

/* ------------------------------------------------ */

function average(arr) {
	return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}

// console.log(average([10, 20, 30, 500]));

/* ------------------------------------------------ */

function returnLongest(arr) {
	// return arr.reduce((a, b) => a.length <= b.length ? b : a)
	return arr.sort((a, b) => (a.length > b.length ? -1 : 1))[0];
}

// console.log(returnLongest(['I', 'need', 'candy']));

/* ------------------------------------------------ */

function mergeArrays(...arrays) {
	// return arrays.flat()
	return arrays.reduce((newArr, crtArr) => newArr.concat(crtArr), []);
}

// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
// console.log(mergeArrays([true, true], [1, 2], ['a', 'b']));

/* ------------------------------------------------ */

function sortByProperty(arr) {
	return arr.sort((a, b) => (a.b < b.b ? -1 : 1));
}

// console.log(
// 	sortByProperty([
// 		{ a: 2, b: 10 },
// 		{ a: 5, b: 4 },
// 	])
// );

/* ------------------------------------------------ */
