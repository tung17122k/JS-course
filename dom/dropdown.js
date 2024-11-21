const dropdownSelect = document.querySelector(".dropdown-select");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const dropdownSelected = document.querySelector(".dropdown-selected");
const dropdownList = document.querySelector(".dropdown-list");
const dropdown = document.querySelector(".dropdown");
const dropdownCaret = document.querySelector(".dropdown-caret");
// dropdown select
dropdownSelect.addEventListener("click", function (e) {
  dropdownList.classList.toggle("show");
  dropdownCaret.classList.toggle("fa-caret-down");
});
// droprown item
dropdownItems.forEach((item) =>
  item.addEventListener("click", function (e) {
    const text = e.target.querySelector(".dropdown-text").textContent;
    dropdownSelected.textContent = text;
    dropdownList.classList.remove("show");
  })
);
// document
document.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target)) {
    dropdownList.classList.remove("show");
  }
});
