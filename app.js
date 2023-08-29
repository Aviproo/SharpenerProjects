let header = document.getElementById("header-title");
let mainheader = document.getElementById("main-header");
let title = document.querySelector(".title");
document.title = "sharpener";
header.textContent = "Hello world";
mainheader.style.border = "3px solid black";
title.style.fontStyle = "bold";
title.style.color = "green";
let items = document.getElementsByClassName("list-group-item");
for (let i = 0; i < items.length; i++) {
  items[i].style.fontWeight = "bold";
  items[i].style.backgroundColor = "green";
}
let added = document.getElementsByClassName("added");
added.innerHtml = "New added Item";
