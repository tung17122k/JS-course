window.addEventListener("load", function () {
  function renderSweetAlert() {
    const template = `<div class="sweet-alert">
    <i class="fa fa-check sweet-icon"></i>
    <p class="sweet-text">Chúc mừng bạn đã học dc ABC</p>
  </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
  }
  const button = document.querySelector(".button");
  button.addEventListener("click", renderSweetAlert);
  const sweetItem = document.querySelector(".sweet-alert");
  if (sweetItem) {
    this.setTimeout(function () {
      sweetItem.parentElement.removeChild(sweetItem);
    }, 2000);
  }
});
