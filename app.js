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

let secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.backgroundColor = "green";
let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
thirdItem.style.color = "white";
thirdItem.style.border = "white";

// queryselectorall
let li = document.querySelectorAll(".list-group-item");
li[1].style.color = "green";
let odd = document.querySelectorAll("li:nth-child(odd)");
for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
}
