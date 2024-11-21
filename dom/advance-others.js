// const input = document.querySelector("input");
// input.addEventListener("keyup", function () {
//   console.log(this.value);
// });
// const complexArr = [
//   [1, 2, 3],
//   [2, 3, 4],
//   [[5], [6], [7]],
// ];

// [1,2,3,2,3,4,5,6,7]

// function floatArr(arr, deep) {
//   const result =
//     deep > 0
//       ? arr.reduce(
//           (a, value) =>
//             a.concat(Array.isArray(value) ? floatArr(value, deep - 1) : value),
//           []
//         )
//       : arr.slice();
//   return result;
// }
// console.log(floatArr(complexArr, Infinity));

// const arb = [1, 2, [3]];
// console.log(arb.slice());

// constructor function

// function Student(name, age) {

//   this.name = name;
//   this.age = age;

// }
// let student2 = new Student("Tung", 40);
// console.log(student2);
// let student3 = new Student("B", 50);
// console.log(student3);

const student = {
  firstName: "Tung",
  lastName: "Nguyen",
  fullName: function () {
    console.log(`${this.lastName + this.firstName}`);
  },
};
// const button = document.querySelector(".button");
// button.addEventListener("click", student.fullName.bind(student));
const $ = document.querySelector.bind("document");
const $$ = document.querySelectorAll.bind("document");
function log(level, time, message) {
  console.log(`${level} ${time} ${message}`);
}
const logError = log.bind(null, "Error", "today");
logError("severOKe!");

// 2. Call and Apply
const persion = {
  name1: "Tung",
  name2: "Nguyen",
};
function sayhello(str1, str2) {
  console.log(`${str1} ${str2} ${this.name1} ${this.name2}`);
}
sayhello.call(persion, "hello", "hi");
sayhello.apply(persion, ["hello", "hi"]);

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
arr1.push.apply(arr1, arr2);
console.log(arr1);

// ES6

function Persion(name) {
  this.name = name;
}

Persion.prototype.getName = function () {
  console.log(this.name);
};
const tung = new Persion("Tung");
tung.getName();

// Clash
class Persion2 {
  constructor(name) {
    this._name = name;
  }
  // getName() {
  //   return this.name;
  // }
  get name() {
    return this._name;
  }
  set name(newName) {
    return (this._name = newName);
  }
  // setName(newName) {
  //   this.name = newName;
  // }
}
const t = new Persion2("t");
// t.getName();
t.name = "Bach";
console.log(t.name);

// class expresion
let Student = class {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    return (this._name = newName);
  }
};
const abc = new Student("abc");
console.log(abc.name);

function company(aClass) {
  return new aClass();
}
let hello = company(
  class {
    sayhello() {
      console.log("hello");
    }
  }
);
hello.sayhello();

// static method

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(a, b) {
    return a.date - b.date;
  }
}
let articles = [
  new Article("html", new Date(2021, 1, 1)),
  new Article("css", new Date(2021, 0, 1)),
  new Article("js", new Date(2021, 11, 1)),
];
// articles.sort((a, b) => a.date - b.date);
articles.sort(Article.compare);
console.log(articles[0].title);

// static properties
class Item {
  constructor(name) {
    this.name = name;
    // this.constructor.propertyName => propertyName = count
    this.constructor.count++;
  }
  static count = 0;
  static getCount() {
    // className.propertyName
    return Item.count;
  }
}
const pencil = new Item("pencil");
const laptop = new Item("laptop");
console.log(Item.getCount());

// supper and extends
class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  walking() {
    console.log(`walking on ${this.legs} legs`);
  }
}
class Bird extends Animal {
  constructor(legs) {
    super(legs);
  }
  fly() {
    console.log("i can flying");
  }
}

let bird = new Bird(2);
console.log(bird.fly());
console.log(bird.walking());

new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("1. This is the first time ");
  }, 2000);
})
  .then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("2. Run the second time");
      }, 3000);
    });
  })
  .then((data) => {
    console.log(data);
  });
function makeTimer(timer, str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str);
    }, timer);
  });
}
const timer1 = makeTimer(1000, "1");
const timer2 = makeTimer(2000, "2");
const timerTotal = Promise.all([timer1, timer2]).then((data) => {
  console.log(data);
});
