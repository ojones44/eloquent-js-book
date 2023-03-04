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

// Converting two functions calls into one by passing getPosts() under a callback alias
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

// getPosts();
createPost(newPost, getPosts);
