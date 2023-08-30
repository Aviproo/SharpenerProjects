let form = document.querySelector("#addForm");
let itemlist = document.querySelector("#items");

form.addEventListener("submit", click);
itemlist.addEventListener("click", removeItem);

function click(e) {
  e.preventDefault();
  let item = document.querySelector("#item").value;
  let li = document.createElement("div");
  li.classList.add("list-group-item");
  li.append(item);
  let listgroup = document.querySelector(".list-group");
  listgroup.appendChild(li);
  let btn = document.createElement("button");
  btn.className = "btn btn-danger btn-sm float-right delete";
  btn.appendChild(document.createTextNode("X"));
  let btn2 = document.createElement("button");
  btn2.className = "btn btn-success btn-sm float-right delete";
  btn2.appendChild(document.createTextNode("E"));
  li.append(btn2);
  li.append(btn);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    let li = e.target.parentElement;
    itemlist.removeChild(li);
  }
}
