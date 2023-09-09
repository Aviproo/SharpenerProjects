let button = document.querySelector(".button");
let body = document.querySelector("body");
let main = document.querySelector(".main");
button.addEventListener("click", ButtonClicked);

function ButtonClicked() {
  let amount = document.querySelector(".amount").value;
  let description = document.querySelector(".description").value;
  let catagory = document.querySelector(".catagory").value;
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];

  userData.push({
    amount: amount,
    description: description,
    catagory: catagory,
  });
  localStorage.setItem("userDetails", JSON.stringify(userData));
  displayData();
}
let displayData = () => {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  console.log(userData);
  let finalData = "";
  userData.forEach((element, i) => {
    finalData += `<div class="row">
    <div class="col">${element.amount}</div>
    <div class="col">
      ${element.description}
    </div>
    <div class="col">${element.catagory}</div>
    <div class="col-2">
      <button class="button" onclick=dlt(${i})>Delete</button>
    </div>
    <div class="col-2">
      <button class="button" onclick=edit(${i})>Edit</button>
    </div>
  </div>`;
  });

  main.innerHTML = finalData;
};
function dlt(index) {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  userData.splice(index, 1);
  localStorage.setItem("userDetails", JSON.stringify(userData));
  displayData();
}
function edit(index) {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  userData.splice(index, 1);
  localStorage.setItem("userDetails", JSON.stringify(userData));
  displayData();
}

displayData();
