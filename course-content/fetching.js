// Fetching an API will return a promise. The below code shows a simulation of a promise. This is the type of thing we get back with fetching.

// Promise to simulate a fulfilled or rejected promise
const myPromise = new Promise((resolve, reject) => {
	const error = false;
	if (!error) {
		resolve('Promise resolved');
	} else {
		reject('Promise rejected');
	}
});

// Purely logging a promise will only show the STATE of that promise.
// console.log(myPromise);

// myPromise
// 	.then((value) => {
// 		return `Your message: ${value}`;
// 	})
// 	.then((newValue) => {
// 		console.log(newValue);
// 		return newValue;
// 	})
// 	.then((anotherValue) => {
// 		console.log(
// 			`I can chain as much as you want with your message: ${anotherValue}`
// 		);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// const waitPromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(2);
// 	}, 2000);
// });

// waitPromise
// 	.then((value) => {
// 		return value;
// 	})
// 	.then((valueAddFive) => {
// 		setTimeout(() => {
// 			console.log(valueAddFive + 5);
// 		}, 5000);
// 	});

// Simulating the pending state

const url = 'https://jsonplaceholder.typicode.com/users';

// const users = fetch(url)
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		data.forEach((user) => {
// 			console.log(user.email);
// 		});
// 	})
// 	.catch((err) => {
// 		console.log(`Oh no! ${err.message}`);
// 	});

// Async / Await

const myUsers = {
	names: [],
	emails: [],
};

const fetchingFunction = async (callback, type) => {
	const response = await fetch(url);
	const data = await response.json();
	callback(data, type);
	// return data;
};

const getUserData = (data, field) => {
	data.forEach((user) => myUsers[`${field}s`].push(user[field]));
	// console.log(myUsers);
};

// fetchingFunction(getUserData, 'name');
// fetchingFunction(getUserData, 'email');

// If a standard log is used to log users outside of the asynchronous code, it will run before the promise has resolved

// Logging inside the function will also stop this
// setTimeout(() => {
// 	console.log(myUsers);
// }, 2000);

// Get random dad joke

const dadJokeUrl = 'https://icanhazdadjoke.com';
const dadJokeParams = {
	method: 'GET',
	headers: {
		Accept: 'application/json',
	},
};

const getDadJoke = async () => {
	const data = await fetch(dadJokeUrl, dadJokeParams);
	const response = await data.json();
	console.log(`New Joke: ${response.joke}`);
};

let jokeCount = 0;

const randint = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// const getTenJokes = setInterval(() => {
// 	getDadJoke();
// 	checkJokeCount();
// }, randint(2000, 5000));

// const checkJokeCount = () => {
// 	jokeCount++;
// 	jokeCount >= 10 && clearInterval(getTenJokes);
// };

const getFormData = (firstName = 'Oliver', lastName = 'Jones') => {
	const formData = {
		firstName: firstName,
		lastName: lastName,
		categories: ['dev'],
	};

	return formData;
};

const buildRequest = (formData) => {
	return {
		url: `https://api.chucknorris.io/jokes/random?category=${formData.categories}`,
		name: `${formData.firstName} ${formData.lastName}`,
	};
};

const postJoke = (joke) => {
	console.log(joke);
};

const namedJoke = async (request) => {
	const data = await fetch(request.url);
	const response = await data.json();
	personalisedJoke = response.value.replace('Chuck Norris', request.name);

	postJoke(personalisedJoke);
};

// Workflow function
const processRequest = async () => {
	const requestData = getFormData();
	const httpData = buildRequest(requestData);
	await namedJoke(httpData);
};

processRequest();
