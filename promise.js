const posts = [{ title: "Post first" }, { title: "Post second" }];

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let creationTime = new Date().getTime();
      resolve(`post created at ${creationTime}`);
    }, 1000);
  });
}
function createPost3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: "Post Third" });
      resolve();
    }, 1000);
  });
}
function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let dltPost = posts.pop();
      let dltTime = new Date().getTime();
      resolve(`post deleted at ${dltTime}`);
    }, 1000);
  });
}
// Promise.all([promise1, promise2]);
createPost3().then(() => {
  updateLastUserActivityTime().then((msj) => {
    console.log(posts);
    console.log(msj);
    deletePost().then((msj2) => {
      console.log(posts);
      console.log(msj2);
    });
  });
});

// updateLastUserActivityTime().then(() => {
//   createPost3().then(() => {
//     console.log(posts);
//   });
// });
// Promise.all([
//   createPost3({ title: "Post Five", body: "This is Post Five" }),
//   updateLastUserActivityTime(),
// ]);
