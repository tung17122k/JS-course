// 1. selector.getAtribute("attribute")
// selector : 1 cai
// attribute -> thuoc tinh : href, id ,class, src, style
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));
const li = document.querySelectorAll(".item");
li.forEach((item) => {
  console.log(item.getAttribute("class"));
});
console.log(li);

// 2. selector.setAttribute("attribute", value) -> set gia tri cho attribute cho 1 gia tri nao do
link.setAttribute("target", "_blank");
const listLinks = document.querySelectorAll("a.link");
listLinks.forEach((item) => item.setAttribute("target", "_blank"));
// 3. selector.removeAtribute("attribute") -> xoa attribute
const p = document.getElementById("spinner");
p.removeAttribute("style");
// 4. hasAttribute("attribute") -> kiem tra selector co attribute nao do hay k, neu co -> true , nguoc lai khong co tra ve false
console.log(p.hasAttribute("class"));
console.log(p.hasAttribute("id"));
