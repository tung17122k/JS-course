document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".container img");
  window.addEventListener("scroll", function () {
    const windowScrollTop = window.pageYOffset;
    // console.log(windowScrollTop);
    [...images].forEach((item) => {
      // const itemOffsetTop = item.offsetTop;
      // console.log(itemOffsetTop);
      // neu windowScrollTop > itemOffsetTop thi se lam 1 vc gi do
      if (windowScrollTop > item.offsetTop - item.offsetHeight / 2) {
        item.classList.add("active");
      }
    });
  });
});
// const button = document.querySelector(".button");
// removeEventListener
// function handleMouseMove(e) {
//   console.log(e.clientX);
// }
// document.addEventListener("mousemove", handleMouseMove);
// button.addEventListener("click", function () {
//   document.removeEventListener("mousemove", handleMouseMove);
// });
// function handleClick() {
//   console.log("clicked");
// }
// button.onclick = handleClick;
// button.addEventListener("click", handleClick, { once: true });
// onmousemove, onmosedown
