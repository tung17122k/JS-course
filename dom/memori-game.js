const cardsArray = [
  {
    name: "fire",
    img: "img/fire.jpg",
  },
  {
    name: "youtube",
    img: "img/youtube.jpg",
  },
  {
    name: "flash",
    img: "img/flash.png",
  },
  {
    name: "gift",
    img: "img/gift.png",
  },
  {
    name: "tron",
    img: "img/tron.png",
  },
  {
    name: "ufo",
    img: "img/ufo.png",
  },
  {
    name: "plant",
    img: "img/plant.jpg",
  },
  {
    name: "burger",
    img: "img/burger.jpg",
  },
];
count = 0;
let previousCard;
let firstGuess = "";
let secondsGuess = "";
const grid = document.querySelector(".grid");
const delay = 1000;
const cardsArrayMerge = cardsArray
  .concat(cardsArray)
  .sort(() => 0.5 - Math.random()); // gop thanh 2 lan , .sort(() => 0.5 - Math.random()) : random array
cardsArrayMerge.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = item.name;
  // front & back
  const front = document.createElement("div");
  front.classList.add("front");
  const back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = `url(${item.img})`;
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});
function matchingCard() {
  const selects = document.querySelectorAll(".selected");
  [...selects].forEach((item) => item.classList.add("matched"));
}
function resetGuess() {
  firstGuess = "";
  secondsGuess = "";
  count = 0;
  previousCard = null;
  const selects = document.querySelectorAll(".selected");
  [...selects].forEach((item) => item.classList.remove("selected"));
}
grid.addEventListener("click", function (e) {
  const clicked = e.target;
  if (clicked.nodeName === "SECTION" || previousCard === clicked) {
    return;
  }
  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    } else {
      secondsGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    }
    if (firstGuess !== "" && secondsGuess !== "") {
      if (firstGuess === secondsGuess) {
        console.log("match");
        setTimeout(matchingCard, delay);
        setTimeout(resetGuess, delay);
      } else {
        setTimeout(resetGuess, delay);
      }
    }
  }
  previousCard = clicked;
});
