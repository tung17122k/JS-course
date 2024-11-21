// debounce
window.addEventListener(
  "scroll",
  debounceFn(function (e) {
    console.log("scroll");
  }, 100)
);
function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
// 3. window.pageYOffset va window.pageXOffset
// 4. ScrollTop, ScrollLeft, ScrollHeight, ScrollWidth. scrollTo
// scrollHeight: tra ve chieu cao cua element bao gom padding, nhung khong co border
// scrollWidth: tra ve chieu rong cua element bao gom paddin, nhung khong co border
const boxed = document.querySelector(".boxed");
boxed.addEventListener("scroll", function (e) {
  console.log(boxed.scrollTop);
  console.log(boxed.scrollLeft);
});
// 5. scrollWidth vs offsetWidth
