const { range } = require('./custom-functions');

function getCharArray(x, y) {
	return range(x, y).map((number) => String.fromCharCode(number));
}

function getRandInt(x) {
	return Math.floor(Math.random() * x);
}

function passwordGenerator(length, specials = 0) {
	let newPassword = '';
	let charArrayGroup = [];

	charArrayGroup = charArrayGroup.concat(
		getCharArray(97, 122),
		getCharArray(65, 90),
		getCharArray(48, 57)
	);

	if (specials) {
		charArrayGroup = charArrayGroup.concat(['?', '!', '%', '$']);
	}

	console.log(charArrayGroup);

	// if (specials) {
	// 	const specials = ['?', '!', '#', '&', '*'];
	// }

	for (let i = 0; i < length; i++) {
		// let arraySelection = charArrayGroup[getRandInt(charArrayGroup.length - 1)];
		newPassword += charArrayGroup[getRandInt(charArrayGroup.length - 1)];
	}

	return newPassword;
}

const myPassword = passwordGenerator(15, 1);
console.log(`Your new password is: <<< ${myPassword} >>>`);
