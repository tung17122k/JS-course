window.addEventListener("load", function () {
  const links = [...document.querySelectorAll(".menu-link")];
  links.forEach((item) =>
    item.addEventListener("mouseenter", handeleHoverLink)
  );
  const line = document.createElement("div");
  line.className = "line-effect";
  document.body.appendChild(line);
  function handeleHoverLink(e) {
    console.log(e.target);
    const { left, top, width, height } = e.target.getBoundingClientRect();
    console.log({ left, top, width, height });
    line.style.width = `${width}px`;
    line.style.left = `${left}px`;
    // line.style.top = `${top}px`;
  }
  const menu = document.querySelector(".menu");
  menu.addEventListener("mouseleave", function (e) {
    line.style.width = 0;
  });
});
