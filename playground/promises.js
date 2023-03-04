const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

const newPost = { title: "Post Three", body: "This is post three" };

// Mimmicking server fetching using setTimeout()
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
      document.body.innerHTML = output;
    });
  }, 2000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      // Mimmicking an error
      const error = false;
      //   const error = true;

      if (!error) {
        resolve("Condition resolved");
      } else {
        reject("Error: something went wrong");
      }
    }, 2000);
  });
}

// ------------------------------------------------------------------------- //

// Args "msg" and "err" are taken from the "resolve" and "reject".
// The .then() and .catch() picks the values up respectively.

// You can then do stuff with the values, and execute any other code inside the .then() method.

// createPost(newPost)
//   .then((msg) => {
//     console.log(msg), getPosts();
//   })
//   .catch((err) => console.log(err));

// ------------------------------------------------------------------------- //

// In JavaScript, a promise is just like a promise that you make in real life to
// show that you are committed to doing something.

// "I promise I'll bring you this tea in 5 minutes"
// If the tea doesn't turn up - there will be a complaint
// If the tea does turn up - we will do something with it i.e drink

// Promises are used to handle asynchronous operations in JavaScript.
// They are an easy to manage when dealing with multiple asynchronous operations,
// where callbacks can create callback hell leading to unmanageable code.

// For example, I promise to get good marks in mathematics, and then this Promise has
// two outcomes, either it will be fulfilled (or resolved) or not fulfilled (or be rejected).
// So if I get good marks, the Promise is resolved, but if I fail to get good marks,
// it will not be resolved because I could not keep my Promise.

// However, in JavaScript, a promise has three outcomes; Promise gets resolved,
// gets rejected, or pending state, which means the Promise is not completed yet
// but may get completed after some time, so it is not rejected till now and is in the pending state.

// Promise.all
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);

// Fetch requires two .then() functions. One to be called directly on the fetch,
// to map the response as a JSON format - otherwise you get loads of response code.
// The .then() tagged on Promise.all then deals with the promise repsonses as expected.

// fetch() returns a promise

// NOTE: Without options (the second parameter of fetch()), Fetch will always act as a get request.

// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// This .all() method takes in an interable as an argument
// It waits for all fulfillments, or the first rejection - where it will stop.
// If one promise rejects then the rest will
// It returns one complete promise at the end
// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );

// ------------------------------------------------------------------------- //

// Async and Await
// It is a way to handles reponses

// Async has to preface the function
// Await has to preface the data handler

// Inside an async function, it will wait until the code prefaced
// with "await" completes before executing the next code

async function init() {
  await createPost(newPost);

  getPosts();
}

init();

// Async and Await with fetch

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);
}

fetchUsers();
