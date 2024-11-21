const progress = document.querySelector(".progress");
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset;
  // console.log(scrollTop);
  // tinh ra chieu cao that cua document
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight; // scroll: 2940 - clientHeight
  const percent = height / 100; // 1% bang bn px
  const percentWidth = scrollTop / percent; // tinh ra % cua width
  // console.log(document.documentElement.scrollHeight);
  // const width = (scrollTop / height) * 100;
  // console.log(width);
  progress.style.width = `${percentWidth}%`;
});
