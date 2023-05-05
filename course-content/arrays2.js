const people = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 },
];

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

const isAdult = (age = 18) =>
	people.some((person) => {
		const year = new Date().getFullYear();
		return year - person.year >= age;
	});

let requiredAge = 80;

// console.log(
// 	isAdult(requiredAge)
// 		? `Someone is older than ${requiredAge || 18}`
// 		: 'No one is old enough'
// );

// Array.prototype.every() // is everyone 19 or older?

const isEveryAdult = (olderThan = 18) =>
	people.every(
		(person) =>
			person.year < new Date().getFullYear() - 2 && person.name.length >= 3
	);

// console.log(isEveryAdult() ? 'Everyone' : 'Not every person');

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const findComment = comments.find(
	(comment) => String(comment.id).split('').slice(0, 2).join('') === '203'
);

console.log(findComment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const findIndex = comments.findIndex((comment) => comment.id === 123523);

comments.splice(findIndex, 1);

console.log(comments);

// console.log(findIndex);
// console.log(String(12345).split(''));

// Filter with no match

const noMatch = comments.filter((comment) => comment.text === 'lovely job!');
console.log(noMatch);
