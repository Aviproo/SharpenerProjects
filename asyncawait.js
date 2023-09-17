console.log("person1: Ticket");
console.log("person2: Ticket ");

const preMovie = async () => {
  const wifePromis = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 3000);
  });
  const getPopcorn = new Promise((resolve, reject) => {
    resolve(`popcorn`);
  });
  const addbutter = new Promise((resolve, reject) => {
    resolve(`butter`);
  });
  const getColdDrinks = new Promise((resolve, reject) => {
    resolve(`colddrink`);
  });
  let ticket = await wifePromis;
  console.log(`Wife: i have the ${ticket}`);
  console.log("Husband: we should go in");
  console.log("wife: no i am hungry");
  let popcorn = await getPopcorn;
  console.log(`Husband: i got some ${popcorn}`);
  console.log("Husband: we should go in");
  console.log("wife: i need butter on my popcorn");
  let butter = await addbutter;
  console.log(`husband: i got some ${butter} on popcorn`);
  console.log(`husband: anything else darling`);
  let coldrink = await getColdDrinks;
  console.log(`wife: i need some ${coldrink} `);
  console.log(`husband: ok i got some coldrink`);
  console.log(`husband: anything else darling`);
  console.log(`wife : No thanks let's in darling`);
  return ticket;
};
preMovie().then((m) => {
  console.log(`person3: shows ${m}`);
});
console.log("person4: Ticket ");
console.log("person5: Ticket ");

//create post and delete post by using async and await and promise.all
let posts = [{ title: "post1" }, { title: "post2" }];
const postadd = async () => {
  const createPost3 = new Promise((res, rej) => {
    setTimeout(() => {
      posts.push({ title: "post3" });
      let addtime = new Date().getTime();

      res(`post added at ${addtime}`);
    }, 1000);
  });

  const deletePost = new Promise((res, rej) => {
    setTimeout(() => {
      let delPost = posts.pop();
      let delTime = new Date().getTime();
      res(`post deleted at ${delTime}`);
    }, 2000);
  });
  let [add, del] = await Promise.all([createPost3, deletePost]);
  console.log(add);
  console.log(del);
};
