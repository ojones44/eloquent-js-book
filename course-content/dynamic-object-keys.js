// In JavaScript there are two ways you can access the properties (AKA key value pairs) of an object. The first is through dot notation, where the keys are explicitly defined inside the object. The second way is through square bracket notation.

// Firstly - dot notation

const person = {
	name: 'John',
	age: 34,
	occupation: 'Developer',
};

console.log(person.age);

// Square bracket notation

console.log(person['name']);

// However we can make the square bracket notation dynamic, by using bindings

const keyName = 'occupation';

console.log(person[keyName]);

// We can also define objects themselves using the square bracket notation

const stateKeys = {
	loading: 'loading',
	active: 'active',
};

let stateTracker = false;
const secondKey = 'user';

const appState = {
	[stateKeys.loading]: stateTracker,
};

appState[secondKey] = 'Oliver';
// console.log(appState);

// We could then dynamically alter these through functions

function updateState(key, value = false) {
	if (!stateKeys.key) {
		stateKeys[key] = key;
	}
	appState[key] = value;
}

updateState(stateKeys.loading, !stateTracker);
console.log(appState);
console.log(stateKeys);
updateState('data', []);
console.log(stateKeys);
