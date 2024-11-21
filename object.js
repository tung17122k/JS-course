// Cach khai bao object
// object litertal
const objectLiteral = {};
//object constructor
const objectConstructor = new Object();
const student = {
  name: "Tung",
  age: 24,
  male: true,
  // isDeveloper: true,
  "last-name": "Tuan",
  hi: function () {
    console.log("Hi!");
  },
};
//properties
// method
// 2 cach truy xuat gia tri cua object
// 2.1 Dot notation
console.log(student.name);
// 2.2 bracket notation ["key"]
console.log(student["age"]);
console.log(student["last-name"]);
// Thay doi gia tri cua Object
student.age = 20;
student.male = "male";
student.isDeveloper = false;
student["isDeveloper"] = true;
delete student["last-name"];
student.hello = function () {
  console.log("hello");
};
console.log(student);
// for in
for (let key in student) {
  if (key === "name") {
    console.log("hello 1234");
  }
  const value = student[key];
  console.log(`${key}: ${value}`);
}
// object.keys() -> tra ve 1 mang chua tat ca cac keys cua object
const keys = Object.keys(student);
console.log(keys);
console.log(keys.length);
// object.value(object) -> tra ve 1 mang chua tat ca cac gia tri cua object
const values = Object.values(student);
console.log(values);
// object.entries(object) -> tra ve 1 mang chua tat ca cac [key, value]  tuong duoc co trong object (1 mang nested [["name, Tung"], ["age", 20]] gom co ca key va value)
const entries = Object.entries(student);
console.log(entries);
// object .assign()
const x = {
  firstName: "Tung",
};
const y = {
  lastName: "Nguyen",
};
const c = Object.assign(x, y);
console.log(c); // {firstName: 'Tung', lastName: 'Nguyen'}
const d = { ...x, ...y };
console.log(d);
// Object.freeze(object) - > ngan chan chinh sua key va value cua object
const car = {
  brand: "BMW",
};
const newCar = Object.freeze(car);
newCar.brand = "Audi";
console.log(newCar); // {brand: 'BMW'}
// Object.seal(object) -> cho phep chinh sua key value nhung khong dc them key value moi
const user = {
  userName: "Nam",
  school: {
    name: "Thuy Phuong",
    room: {
      name: "9A",
    },
  },
};
// const newUser = Object.seal(user);
// newUser.userName = "Nguyen Gia Tuan Anh ";
// newUser.lastName = "john";
// console.log(newUser);
// [...array] {...user}
const newUser = { ...user };
newUser.userName = "Nguyen Gia Tuan Anh ";
console.log(user);
console.log(newUser);
// Object.assign
const newUser2 = Object.assign({}, user);
console.log(newUser2);
// clone nested
const newUser3 = JSON.parse(JSON.stringify(user));
newUser3.school.name = "Dong Ngac";
console.log("newUser3");
console.log(newUser3);
// this keyword
// this no se de cap toi object gan nhat
const student2 = {
  name: "Tung",
  age: 24,
  male: true,
  // isDeveloper: true,
  "last-name": "Tuan",
  hi: function () {
    console.log(`My name is ${this.name} and i am  ${this.age} years old`);
    // console.log("Hi!");
  },
  // fullname: {
  //   name: "Nguyen Viet Tung",
  // },
};
student2.hi();
// optional chaining
// if (student2.fullname) {
//   if (student2.fullname.name) {
//     console.log(student2.fullname.name);
//   }
// }
console.log(student2.fullname?.name);
// student2.fullname?.name

// destructuring object
const { name, age, male, ...rest } = student2;
console.log(rest);
// function whatYourInfor(name, age, school) {
//   console.log(name, age, school);
// }
// function with object parameter
function whatYourInfor(obj) {
  console.log(obj.name, obj.age, obj.school);
}
const newObj = {
  name: "Evondev",
  age: 27,
  school: "HUST",
};
whatYourInfor(newObj);
// Object destructuring parameter
function whatYourInfor2({ name, age, school }) {
  console.log(name, age, school);
}
whatYourInfor2({
  name: "Tung",
  age: 24,
  school: "Thuy Phuong",
});
