const images = document.querySelectorAll(".image");
images.forEach((item) => item.addEventListener("click", handleZoomImage));
function handleZoomImage(e) {
  console.log(e.target);
  const image = e.target.getAttribute("src");
  const template = `<div class="lightbox">
  <div class="lightbox-content">
    <i class="fa fa-angle-left lightbox-prev"></i>
    <img
      src="${image}"
      alt=""
      class="lightbox-image"
    />
    <i class="fa fa-angle-right lightbox-next"></i>
  </div>
</div>`;
  document.body.insertAdjacentHTML("beforeend", template);
}
let index = 0;
document.body.addEventListener("click", function (e) {
  const lightImage = document.querySelector(".lightbox-image");
  let lightSrc = "";
  if (e.target.matches(".lightbox")) {
    //remove lightbox out of dom
    e.target.parentNode.removeChild(e.target);
  } else if (e.target.matches(".lightbox-next")) {
    //handle next img
    lightSrc = lightImage.getAttribute("src");
    index = [...images].findIndex(
      (item) => item.getAttribute("src") === lightSrc
    );
    index++;
    if (index > images.length - 1) return;
    // console.log(index);
    const newSrc = [...images][index].getAttribute("src");
    // console.log(newSrc); // lay ra src cua anh tiep theo
    lightImage.setAttribute("src", newSrc); // dung src lay dc o tren set vao lightImage, lightImage dung de lay ra nhung cai co class lightbox-image thay doi duong dan cua no
  } else if (e.target.matches(".lightbox-prev")) {
    //handle next img
    lightSrc = lightImage.getAttribute("src");
    index = [...images].findIndex(
      (item) => item.getAttribute("src") === lightSrc
    );
    index--;
    if (index < 0) return;
    // console.log(index);
    const newSrc = [...images][index].getAttribute("src");
    // console.log(newSrc); // lay ra src cua anh phia truoc
    lightImage.setAttribute("src", newSrc); // dung src lay dc o tren set vao lightImage, lightImage dung de lay ra nhung cai co class lightbox-image thay doi duong dan cua no
  }
});
