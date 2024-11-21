// 1. selector.classList.add("abc")
// const container = document.querySelector(".container");
// container.classList.add("is-active");
// 2. selector.classList.remove("abc")
// container.classList.remove("is-active");
// 3. selector.classList.contains("abc")
// console.log(container.classList.contains("container")); //true
// console.log(container.classList.contains("is-active")); //false
// 4. selector.classList.toggle("is-active")

// container.classList.toggle("is-active");
// 5. selector.classname -> tra ra chuoi cac class cua selector
// const title = document.querySelector(".title");
// console.log(title.className);
// title.className = "title";
// menu toggle
const menu = document.querySelector(".menu");
// menu.classList.add("is-show");
menu.classList.toggle("is-show"); // mo ra menu
menu.classList.toggle("is-show"); // xoa di menu
