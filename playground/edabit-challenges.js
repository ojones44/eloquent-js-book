const sevenBoom = (nums) => {
	for (i = 0; i < nums.length; i++) {
		if (nums[i] === 7) {
			console.log('Boom!');
			return;
		}
	}

	console.log('Does not contain the number seven');
};

const numsArray = [1, 2, 3, 4, 7, 8, 9];

sevenBoom(numsArray);

/* ---------------------------------------- */

function numberLength(x) {
	console.log(x.toString().length);
}

numberLength(12345678910);

/* ---------------------------------------- */

const toArray = (object) => {
	let newArray = [];

	Object.keys(object).forEach((key) => {
		newArray.push([Number(key)]);
	});

	Object.values(object).forEach((value, index) => {
		newArray[index].push(value);
	});

	console.log(newArray);
};

toArray({ 1: 2, 3: 4 });

/* ---------------------------------------- */

const redundant = (str) => () => {
	console.log(str);
};

const f1 = redundant('Closure function');
const f2 = redundant('Closure function 2');
const f3 = redundant('Closure function 3');

f1();
f2();
f3();

/* ---------------------------------------- */

function minMax(nums) {
	let minMaxArray = [nums[0], nums[0]];

	nums.forEach((num) => {
		if (num > minMaxArray[1]) {
			minMaxArray[1] = num;
		}

		if (num < minMaxArray[0]) {
			minMaxArray[0] = num;
		}
	});

	console.log(minMaxArray);
}

minMax([2334454, 5]);

/* ---------------------------------------- */

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.greet = () =>
			console.log(`Hi! My name is ${this.name} and I am ${this.age} years old`);
	}

	compareAge(person) {
		if (person.age < this.age) {
			console.log(`${person.name} is younger than ${this.name}`);
		} else if (person.age > this.age) {
			console.log(`${person.name} is older than ${this.name}`);
		} else if (person.age === this.age) {
			console.log(`${person.name} is the same age as ${this.name}`);
		}
	}
}

const person_1 = new Person('Oliver', '29');
const person_2 = new Person('John', '35');
const person_3 = new Person('Katie', '29');

person_1.compareAge(person_2);
person_2.compareAge(person_1);
person_1.compareAge(person_3);
person_1.greet();

/* ---------------------------------------- */

// Filter array

function filterArray(array) {
	let notString = [];

	array.forEach((item, i) => {
		if (typeof item !== 'string') {
			notString.push(item);
		}
	});

	let uniqueChars = [];

	notString.forEach((ch) => {
		if (!uniqueChars.includes(ch)) {
			uniqueChars.push(ch);
		}
	});

	console.log(uniqueChars.sort());
}

filterArray([5, 1, 2, 4, 'string', 7, 4, '5', 5, 5, 5, 5, 5]);

/* ---------------------------------------- */
