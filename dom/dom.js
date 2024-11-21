// 1. DOM laf gi
// Document Object Model
// DOM attribute
// DOM node
// 2. Selecting nodes
// 2.1 document.querySelector("selector") -> tra ve 1 node neu ton tai, nguoc lai no se tra ve null
// .header, p, body, #heading
const singleNode1 = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
// console.log(singleNode1);
// 2.2 document.querySelectorAll("selector") -> tra ve 1 NodeList chua danh sach cac node, neu khong co thi tra ve empty
// no co the loop va su dung forEach
// no giong array va co the loop nhung khong su dung dc cac phuong thuc nhu push, pop, shift
const multiNodes = document.querySelectorAll(".item");
// for (let i = 0; i < multiNodes.length; i++) {
//   console.log(multiNodes[i]);
// }
// console.log(multiNodes);
// 2.3 document.getElementsByClassName -> tra ve mot HTMLCollection chua danh sach cac node, neu khong co thi tra ve empty
const classNodes = document.getElementsByClassName("item");
console.log(classNodes);
// 2.4 document.getElementsByTagName("tagName")
// console.log(classNodes);
const tagNodes = document.getElementsByTagName("h1");
console.log(tagNodes);

// 2.5 document.getElementById("id") -> tra ve 1 node
const idNode = document.getElementById("spinner");
// hay dung nhat document.querySelector(),
console.log(idNode);
