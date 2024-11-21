const tabItem = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");
[...tabItem].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
  //   console.log(event.target);
  [...tabItem].forEach((item) => item.classList.remove("active")); // xoa het class active o class khac
  event.target.classList.add("active"); // add class active vao class hien tai click
  const tabNumber = event.target.dataset.tab; // lay gia tri data-tab cua thuoc tinh di click
  //   console.log(tabNumber);
  [...tabContents].forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("data-tab") === tabNumber)
      item.classList.add("active");
  });
  //   [...tabContents][tabNumber - 1].classList.add("active");
}
