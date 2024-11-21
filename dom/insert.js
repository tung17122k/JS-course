// 1. insertAdjacentText
const h3 = document.querySelector("h3");
// h3.insertAdjacentText("position", "text");
// position: beforebegin, afterbefin, beforeend, afterend
h3.insertAdjacentText("beforeBegin", "before-begin");
h3.insertAdjacentText("afterBegin", "after-begin");
h3.insertAdjacentText("beforeEnd", "before-end");
h3.insertAdjacentText("afterEnd", "after-end");
// 2. insertAdjacentElement
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforeEnd", strong);

// 3. element.insertAdjacentHTML
/*
<ul class ="menu"
<li>1</li>
<li>2</li>
<li>3</li>
</ul
*/
const template = `<ul class ="menu2">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>`;
document.body.insertAdjacentHTML("beforeend", template);
