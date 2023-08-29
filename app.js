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
let itemlist = document.querySelector("#items");
let parentelement = itemlist.parentElement;
let lastelementchild = itemlist.lastElementChild;
let lastchild = itemlist.lastChild;
let firstelementchild = itemlist.firstElementChild;
let firstchild = itemlist.firstChild;
let nextsibling = itemlist.nextSibling;
let nextelementsibling = itemlist.nextElementSibling;
let previoussibling = itemlist.previousSibling;
let previouselementsibling = itemlist.previousElementSibling;
let createelement = document.createElement("div");
createelement.setAttribute("title", "new-attribute");
let createtesxtnode = document.createTextNode("Hello World");
createelement.append(createtesxtnode);
let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");
container.insertBefore(createelement, h1);
let zeroitem = document.createElement("div");
let itemtext = document.createTextNode("Hello World");
zeroitem.append(itemtext);
zeroitem.classList.add("list-group-item");
let items = document.querySelector("#items");
let item1 = document.querySelector("li");
items.insertBefore(zeroitem, item1);
