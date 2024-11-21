const button = document.querySelector(".button");
const template = ` <div class="modal">
<div class="modal-content">
  <i class="fa fa-times modal-close"></i>
</div>
</div>`;
button.addEventListener("click", function () {
  document.body.insertAdjacentHTML("beforeend", template);
});
document.body.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.matches(".modal-close")) {
    //handle modal close here
    const modal = e.target.parentNode.parentNode; // modal
    modal.parentNode.removeChild(modal);
  } else if (e.target.matches(".modal")) {
    e.target.parentNode.removeChild(e.target);
  }
});
// const modalClose = documnet.querySelector(".modal-close");
// modalClose.addEventListener("click", handleCloseModal);
// function handleCloseModal(event) {
//   console.log(event.target);
// }
