// khai bao function
//viet ham tinh tong 2 so a va b
function sum(a, b = 0) {
  //   console.log(a, b);
  return a + b;
}
console.log(sum(5, 10));
function add(a = 0, b = 0) {
  console.log(a + b);
  return a + b;
}
const sum2 = add; // gan funciton cho bien
sum2(300, 400);
// trung binh cua a va b
function average(a, b, fn) {
  const total = fn(a, b);
  return total / 2;
}
let result = average(200, 300, sum2); // gan ham cho bien result va trong cai ham average(a,b , bien sum2) bien sum2 gan cho ham fn
console.log(`result ${result}`);
// Anonymous function(funciton expression)
const logName = function () {
  console.log("yourName");
};
logName();
// IIFE -> immediately invoked function execution
(function () {
  console.log("this is IIFE function");
})();
let myName = "evondev"; // global scope
function logYourName() {
  let myName2 = myName; //function scope
  console.log(myName2);
}
logYourName();
// Closure
//block scope
if (2 > 1) {
  const message = "hello Tung";
  alert(message);
}
// function sayHello2() {
//   let message = "Hi";
//   function sayHi() {
//     console.log(message);
//   }
//   return sayHi;
// }
// let hello = sayHello2();
// hello();
function sayHello3(message) {
  return function hiYourName(name) {
    console.log(`${message} ${name}`);
  };
}
let hello = sayHello3("welcome to JS ");
hello("closure");
function anotherFunction() {
  let otherMessage = "hello";
  function sayHi() {
    console.log(otherMessage);
  }
  return sayHi;
}
let callFunc = anotherFunction();
callFunc();
