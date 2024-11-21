function createNotification() {
  const template = `<div class="noti">
    <img src="" alt="" class="noti-image" />
    <div class="noti-content">
      <h3 class="noti-title">Welcome to notification</h3>
      <p class="notidesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        voluptatum iure voluptatibus officiis. Pariatur, reprehenderit
        velit debitis voluptatem aspernatur accusamus, illum facilis qui,
        doloremque delectus expedita excepturi aliquid officia
        perspiciatis.
      </p>
    </div>
  </div>`;
  document.body.insertAdjacentHTML("afterbegin", template);
}
// const timer = setInterval(function () {
//   //   createNotification();
//   const item = document.querySelector(".noti");
//   if (item) item.parentNode.removeChild(item);
//   createNotification();
// }, 4000);
createNotification();

// HTMLcolection -> co the truy cap bang index, co do dai length: forEach( ko su dung dc )
// Nodelist su dung dc forEach
// su khac nhau giua parentNode va parentElement
// Node se lay het toan bo  thuoc tinh cua node, Element se lay chinh la thuoc tinh cua html
// parentElement co the null
console.log(document.documentElement.parentElement); // null
console.log(document.documentElement.parentNode); // document
// document.title and document.head
console.log(document.title); // tag title (JavaScript)
document.title = "Welcome to javascript course";
console.log(document.head); // head phan tu con tro lai noi mat heading
const meta = document.createElement("meta");
meta.setAttribute("content", "width=device-width", "initial-scale=1.0");
document.head.appendChild(meta);
const head = document.getElementsByTagName("head");
head[0].appendChild(meta);
console.log(head);

const span = document.createElement("span");
span.textContent = "abc";
document.body.replaceChild(span, document.querySelector(".noti"));
// convert HTML collection, NodeList  to Array
// Array.from(htmlcollection or Nodelist)
// [... html colection], [nodelist]
const li = document.getElementsByTagName("li");
[...li].filter((item) => item);
console.log(li);
