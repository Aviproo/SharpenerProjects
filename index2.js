let form = document.querySelector("#addForm");
let itemlist = document.querySelector("#items");
let filter = document.querySelector("#filter");

form.addEventListener("submit", click);
itemlist.addEventListener("click", removeItem);
filter.addEventListener("keyup", filteritems);

function click(e) {
  e.preventDefault();
  let item = document.querySelector("#item").value;
  let item2 = document.querySelector("#item2").value;
  let li = document.createElement("div");
  li.classList.add("list-group-item");
  li.append(`${item} ${item2}`);
  let listgroup = document.querySelector(".list-group");
  listgroup.appendChild(li);
  let btn = document.createElement("button");
  btn.className = "btn btn-danger btn-sm float-right delete";
  btn.appendChild(document.createTextNode("X"));
  let btn2 = document.createElement("button");
  btn2.className = "btn btn-success btn-sm float-right delete";
  btn2.appendChild(document.createTextNode("EDIT"));
  li.append(btn2);
  li.append(btn);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    let li = e.target.parentElement;
    itemlist.removeChild(li);
  }
}

function filteritems(e) {
  let text = e.target.value.toLowerCase();
  let items = itemlist.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
