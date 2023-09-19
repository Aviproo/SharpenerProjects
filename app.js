// let header = document.getElementById("header-title");
// let mainheader = document.getElementById("main-header");
// let title = document.querySelector(".title");
// document.title = "sharpener";
// header.textContent = "Hello world";
// mainheader.style.border = "3px solid black";
// title.style.fontStyle = "bold";
// title.style.color = "green";
// let items = document.getElementsByClassName("list-group-item");
// for (let i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = "bold";
//   items[i].style.backgroundColor = "green";
// }
// let added = document.getElementsByClassName("added");
// added.innerHtml = "New added Item";

// queryselector

// let secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.backgroundColor = "green";
// let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.color = "white";
// thirdItem.style.border = "white";

// queryselectorall
// let li = document.querySelectorAll(".list-group-item");
// li[1].style.color = "green";
// let odd = document.querySelectorAll("li:nth-child(odd)");
// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "green";
// }

// Trversing the DOM
// parentElement
// lastelementchild
// lastchild
// createchild
// firstelementchild
// firstchild
// nextsibling
// nextelementsibling
// previoussibling
// previouselementsibling
// createelement
// setAttribute
// createtesxtnode
// appendchild
// let itemlist = document.querySelector("#items");
// let parentelement = itemlist.parentElement;
// let lastelementchild = itemlist.lastElementChild;
// let lastchild = itemlist.lastChild;
// let firstelementchild = itemlist.firstElementChild;
// let firstchild = itemlist.firstChild;
// let nextsibling = itemlist.nextSibling;
// let nextelementsibling = itemlist.nextElementSibling;
// let previoussibling = itemlist.previousSibling;
// let previouselementsibling = itemlist.previousElementSibling;
// let createelement = document.createElement("div");
// createelement.setAttribute("title", "new-attribute");
// let createtesxtnode = document.createTextNode("Hello World");
// createelement.append(createtesxtnode);
// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header h1");
// container.insertBefore(createelement, h1);
// let zeroitem = document.createElement("div");
// let itemtext = document.createTextNode("Hello World");
// zeroitem.append(itemtext);
// zeroitem.classList.add("list-group-item");
// let items = document.querySelector("#items");
// let item1 = document.querySelector("li");
// items.insertBefore(zeroitem, item1);
// console.log(a);
function buycar() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Buy a Car");
    }, 5000);
  });
}
function planTrip() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("We will go to manali");
    }, 2000);
  });
}
function reachedManali() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("we reached manali");
    }, 5000);
  });
}

// promises use
// buycar().then((msj) => {
//   console.log(msj);
//   planTrip().then((msj1) => {
//     console.log(msj1);
//     reachedManali().then((msj2) => {
//       console.log(msj2);
//     });
//   });
// });

// async use
// async function fun1() {
//   const msj = await buycar();
//   console.log(msj);
//   const msj1 = await planTrip();
//   console.log(msj1);
//   const msj2 = await reachedManali();
//   console.log(msj2);
// }
// fun1();

function goHome() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("First book the ticket");
    }, 2000);
  });
}
function bookTicket() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("we will book ticket iin litchwi train");
    }, 2000);
  });
}
async function tripToHome() {
  const ms1 = await bookTicket();
  console.log(ms1);
  const msj2 = await goHome();
  console.log(msj2);
}
// tripToHome();

let ticketbooking = function () {
  return new Promise((resolve, reject) => {
    resolve("first we will book ticket ");
  });
};
let grabTrain = function () {
  return new Promise((resolve, reject) => {
    resolve("we will grab the train");
  });
};
let goToHome = function () {
  return new Promise((resolve, reject) => {
    resolve("we will go to the home");
  });
};
async function home() {
  const go = await goToHome();
  console.log(go);
  const tic = await ticketbooking();
  console.log(tic);
  const train = await grabTrain();
  console.log(train);
}
// home();

async function dadpromise() {
  try {
    const promise1 = await new Promise((resolve, reject) => {
      const salary = false;
      const saving = 20000;
      const tripmoney = 30000;
      if (salary == true && tripmoney > saving) {
        resolve("we will go to trip");
      } else {
        reject("we cannot go to the trip");
      }
    });
    console.log(promise1);
  } catch (err) {
    console.log(err);
  }
}

async function buyLaptop() {
  try {
    const newLaptop = await new Promise((resolve, reject) => {
      let salary = true;
      let saving = 50000;
      let lapeRate = 40000;
      if (salary == true && saving < lapeRate) {
        resolve("we will buy a laptop");
      } else {
        reject("we will buy a old laptop");
      }
    });
    console.log(newLaptop);
  } catch (err) {
    console.log(err);
  }
}
// buyLaptop();

async function fun1() {
  let c = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("c");
    }, 1000);
  });
  console.log(c);
  let d = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("d");
    }, 2000);
  });
  console.log(d);
  let e = await new Promise((resolve, reject) => {
    resolve("e");
  });
  console.log(e);
}
// fun1();

// how to use Promise.all
// console.log(1);
// console.log(2);
let asyncfun = async () => {
  let three = new Promise((res, rej) => {
    setTimeout(() => {
      res(3);
    }, 10000);
  });
  let four = new Promise((res, rej) => {
    setTimeout(() => {
      res(4);
    }, 0);
  });
  let five = new Promise((res, rej) => {
    setTimeout(() => {
      res(5);
    }, 0);
  });
  let [inthree, infour, infive] = await Promise.all([three, four, five]);
  console.log(inthree, infour, infive);
};
// asyncfun();

// let asyncfunc = async () => {
//   let inthree = await three;
//   let infour = await four;
//   let infive = await five;
//   console.log(inthree);
//   console.log(infour);
//   console.log(infive);
// };
// asyncfunc();
console.log(1);
console.log(2);
let three = new Promise((res) => {
  res(3);
});
let four = new Promise((res) => {
  res(4);
});
let asyfun = async () => {
  let in3 = await three;
  let in4 = await four;
  console.log(in3);
  console.log(in4);
};
asyfun();
