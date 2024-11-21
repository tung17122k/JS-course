const accordionHeaders = document.querySelectorAll(".accordion-header");
const activeStr = "active";
[...accordionHeaders].forEach((item) =>
  item.addEventListener("click", handleClickAccordion)
);
function handleClickAccordion(e) {
  // console.log(e.target);
  const content = e.target.nextElementSibling;
  console.log(content.scrollHeight);
  content.style.height = `${content.scrollHeight}px`;
  if (!content.classList.contains("active")) {
    content.style.height = `0px`;
  }
  content.classList.toggle(activeStr);
  const icon = e.target.querySelector(".fa-angle-down");
  icon.classList.toggle(activeStr);
  // console.log(icon);
}
