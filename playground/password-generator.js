const { range } = require('./custom-functions');

function getCharArray(x, y) {
	return range(x, y).map((letter) => String.fromCharCode(letter));
}

function getRandInt(x) {
	return Math.floor(Math.random() * x);
}

function passwordGenerator(length) {
	let newPassword = '';

	const lowerCase = getCharArray(97, 122);
	const upperCase = getCharArray(65, 90);
	const nums = getCharArray(48, 57);

	const charArrayGroup = [lowerCase, upperCase, nums];

	for (let i = 0; i < length; i++) {
		let arraySelection = charArrayGroup[getRandInt(charArrayGroup.length - 1)];
		newPassword += arraySelection[getRandInt(arraySelection.length - 1)];
	}

	return newPassword;
}

const myPassword = passwordGenerator(50);
console.log(`Your new password is: <<< ${myPassword} >>>`);
