/*

*/
// const template = ` <div class="modal">
// <div class="modal-content">
//   <i class="fa fa-times modal-close"></i>
//   <div class="modal-desc">
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
//     harum possimus repellat rerum aliquam similique velit aliquid,
//     odio nisi eius, ipsam impedit minus vitae. Nostrum officia quaerat
//     ducimus et non.
//   </div>
//   <div class="modal-action">
//     <button class="modal-submit">Confirm</button>
//     <button class="modal-cancel">Cancel</button>
//   </div>
// </div>
// </div>`;
// const body = document.body;
// body.insertAdjacentHTML("afterbegin", template);

// const modal = document.querySelector(".modal");
// if (modal) {
//   setTimeout(function () {
//     modal.classList.add("is-show");
//   }, 3000);
// }

// Cach 3
const modal = document.createElement("div");
modal.classList.add("modal");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);
document.body.appendChild(modal);
const modalClose = document.createElement("i");
modalClose.className = "fa fa-times modal-close";
modalContent.appendChild(modalClose);
const modalDesc = document.createElement("div");
modalDesc.classList.add("modal-desc");
modalDesc.textContent = "Lorem ..................";
modalContent.appendChild(modalDesc);
const modalAction = document.createElement("div");
modalAction.classList.add("modal-action");
modalContent.appendChild(modalAction);
const modalSubmit = document.createElement("button");
modalSubmit.classList.add("modal-submit");
modalAction.appendChild(modalSubmit);
modalSubmit.textContent = "Confirm";
const modalCancel = document.createElement("button");
modalCancel.classList.add("modal-cancel");
modalAction.appendChild(modalCancel);
modalCancel.textContent = "Cancel";

const modalWrap = document.querySelector(".modal");
if (modal) {
  setTimeout(function () {
    modal.classList.add("is-show");
  }, 3000);
}
