document.addEventListener("DOMContentLoaded", function () {
  console.log("dom loaded");
});
window.addEventListener("load", function () {
  console.log("yt web loaded");
});
const button = document.querySelector(".button");
// mousemove, mouseover, mouseenter, mouseleave
// mouseover: chay khi re chuot vao phan tu hoac con cua phan tu do
// mouseenter: chay khi re chuot vao phan tu
// mouseleave: chay khi re chuot vao phan tu roi re chuot ra ngoai
// pageX , pgaeY, clienX, clienY
document.addEventListener("mousemove", function (e) {
  console.log(`pageY ${e.pageY}`);
  console.log(`clienY ${e.clientY}`);
});
// pageY: lay toa do cua document
// clienY: lay toa do theo viewport
// X là chiều ngang
// Y là chiều dọc , khi có croll thì nó sẽ thay đổi
