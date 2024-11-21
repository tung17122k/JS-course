// su kien la gi? (event)
// 2. Them 1 su kien: selector.addEventListener("eventName", handler,[options])
// click, keydown, keypress, keyup, mouseover, mouseleave, load, DOMContentLoaded, ...
// hander: funciton xu ly
// capture, bubbling
const button = document.querySelector(".button");
const span = document.querySelector("button span");
function handleClick() {
  console.log("click button");
}
// loi sai can tranh khi dung function vao eventListener
// button.addEventListener("click", handleClick());

// event: e
// span.addEventListener("click", function (e) {
//   e.stopImmediatePropagation();
//   console.log("click span");
// });
// span.addEventListener("click", function () {
//   console.log("click span 2 ");
// });
// bubbling: noi bot
// su kien click se chay tu trong ra ngoai

// target vs currentTaget
button.addEventListener("click", function (event) {
  // event.target se chon chinh xac element ma minh click
  // event.currentTarget thi no se chon phan tu minh click
  console.log(`event: Target ${event.target}`);
  console.log(`event: currentTarget ${event.currentTarget}`);
});

// event.preventDefault
const link = document.querySelector(".link");
link.addEventListener("click", function (event) {
  event.preventDefault();
  // de lay custom atribute data-abc
  // .dataset.name
  const name = event.target.dataset.name;
  console.log(name);
  // console.log("click me ");
  // console.log(event.target);
  // event.target.style.color = "red";
});
const buttonChange = document.querySelector(".change");
const colors = ["#ffa400", "#00aefd", "#000ccc", "#ffb297"];
buttonChange.addEventListener("click", handleChangeColor);
function handleChangeColor() {
  //   document.body.setAttribute("style", "background-color: red");
  const color = colors[Math.floor(Math.random() * colors.length)];
  //   document.body.style.backgroundColor = color; // thay doi backgound cua page
  buttonChange.setAttribute("style", `background-color:${color};`); // thay doi background cua button
}

const buttonMinus = document.querySelector(".counter-descrease");
const buttonPlus = document.querySelector(".counter-increase");
const counterNumber = document.querySelector(".counter-number");
let counterValue = parseInt(counterNumber.textContent);
console.log(counterValue);
buttonPlus.addEventListener("click", function () {
  if (counterValue >= 10) return 10;
  counterValue++;
  console.log(counterValue);
  counterNumber.textContent = counterValue;
});
buttonMinus.addEventListener("click", function () {
  if (counterValue <= 0) return 0;
  counterValue--;
  console.log(counterValue);
  counterNumber.textContent = counterValue;
});
