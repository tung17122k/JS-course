const menu = document.querySelector(".menu");
// menu.classList.add("is-show");

const button = document.querySelector(".button");
button.addEventListener("click", handleChangeMenu);
function handleChangeMenu() {
  document.querySelector(".menu").classList.toggle("is-show");
}
document.addEventListener("click", handleClickOutMenu);
function handleClickOutMenu(event) {
  // event.target.contains
  if (!menu.contains(event.target) && !event.target.matches(".button"))
    menu.classList.remove("is-show");
  //   console.log(!menu.contains(event.target)); // true -> bam o body k chua menu -> tra ra la true
}
