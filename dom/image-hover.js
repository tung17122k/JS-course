window.addEventListener("load", function () {
  const imageCover = document.querySelector(".image-cover");
  imageCover.addEventListener("mousemove", handleHoverImage);
  const imageWrapper = document.querySelector(".image-wrapper");
  const image = document.querySelector(".image");
  let imageWrapperWidth = imageWrapper.offsetWidth;
  let imageWrapperHeight = imageWrapper.offsetHeight;
  function handleHoverImage(e) {
    const pX = e.pageX; // target
    const pY = e.pageY; // target
    image.style = `width: auto; height: auto; max-height: unset`;
    let imageWidth = image.offsetWidth; // 2070
    let imageHeight = image.offsetHeight; // 1380
    let spaceX = (imageWidth / 2 - imageWrapperWidth) * 2; // (2070 / 2 - 450 ) *2 = 1170
    imageWidth = imageWidth + spaceX; // 2070 + 1170 = 3240
    let spaceY = (imageHeight / 2 - imageWrapperHeight) * 2; // (1380 / 2 - 300 ) *2 = 780
    imageHeight = imageHeight + spaceY; // 780 + 1380 = 2160
    let ratioX = imageWidth / imageWrapperWidth / 2; // 3240 / 450 / 2 =3.6
    let ratioY = imageHeight / imageWrapperHeight / 2; // 2160 / 300 / 2  = 3.6
    let x = (pX - imageWrapper.offsetLeft) * ratioX; //target * 3.6 vd: target vao pX = 20 => x = 3.6 x 20  = 69.6
    let y = (pY - imageWrapper.offsetTop) * ratioY; //target * 3.6 vd: target vap pY = 20 => y = 3.6 x 20 =  69.6
    console.log(x);
    // console.log(imageWidth, imageHeight); // 2070, 1380
    // console.log(imageWrapperWidth, imageWrapperHeight); // 450,300
    image.style = `left: ${-x}px; top: ${-y}px; width: auto; height: auto; max-height: unset; transform: none`; // =>
  }
  imageCover.addEventListener("mouseleave", function (e) {
    image.style = "";
  });
});
