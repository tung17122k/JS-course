// them xoa sua node trong javascript
// 1. tao ra element trong Js : document.createElement("tag")
const div = document.createElement("div");
// 2. selector.appendChild
// document.body -> body
// document.querySelector("body")
const body = document.body;
body.appendChild(div);
div.classList.add("container");
div.className = "container wrapper";
div.textContent = "Lorem";
div.innerHTML = `<div class = " content" > <h3></h3></div>`;
div.setAttribute("data", "tung");
// Bai tap tao ra html nhu da minh hoa o file HTML
const card = document.createElement("div");
card.classList.add("card");
body.appendChild(card);
// card.innerHTML = `<img src ="" alt = "" />`;
const cardImage = document.createElement("img");
cardImage.setAttribute("src", "https://source.unsplash.com/random");
cardImage.setAttribute("class", "card-image");
card.appendChild(cardImage);

// 3. document.createTextNode
const text = document.createTextNode("hello Tung");
const h1 = document.createElement("h1");
body.appendChild(h1);
h1.appendChild(text);

// 4. cloneNode element.cloneNode
const h1Clone = h1.cloneNode(true);
body.appendChild(h1Clone);

// 5. element.hasChildNodes -> kiem tra co phan tu con hay khong, co -> true, khong thi tra ve false
console.log(h1.hasChildNodes()); // true
