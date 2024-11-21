const animals = ["tiger", "lion", "horse", "elephant"];
const animals2 = animals.slice();
console.log(animals2);
// ['lion', 'horse', 'elephant']
const animals3 = animals.slice(1);
console.log(animals3);
// 'lion', 'horse']
const animals4 = animals.slice(1, 3);
console.log(animals4);
const animals5 = animals.slice(-1);
console.log(animals5);
const pets = ["dog", "cat", "bird", "dragon"];
// splice start
// const pets2 = pets.splice(0);
// console.log(pets2);
// const pets3 = pets.splice(0, 1);
// console.log(pets);
// const pets3 = pets.splice(0, 1, "dinasour");
// console.log(pets);
pets.splice(0, 1, "dinasour");
console.log(pets);
const random = [1, 5, 10, 9, 99];
console.log(random.sort());
const random2 = random.sort(function (a, b) {
  if (a > b) return 1; // sap xep theo tang dan
  if (a < b) return -1; // sap xep theo giam dan
});
const random3 = random.sort((a, b) => (a > b ? 1 : -1));
console.log(random3);
const numbers = [1, 99, 999, 9999];
const findYourNumber = numbers.find((element) => element > 10);
console.log(findYourNumber);
const findYourIndex = numbers.findIndex((element) => element > 10);
console.log(findYourIndex);
// Duyet qua tung phan tu trong mang va tra ra 1 mang moi ma khong thay doi mang ban dau
const listNumber = [1, 2, 3, 4, 5];
// tra ra 1 mang moi ma cac gia tri trong mang cu nhan 2
const listNumberDouble = listNumber.map(function (value, index, array) {
  return value * 2;
});
console.log(listNumberDouble);
const listNumberTriple = listNumber.forEach((value, index, array) => {});
console.log(listNumberTriple);
// filter dung de filter cac phan tu sang loc trong mang
const listFilter = listNumber.filter((item, index) => item > 3 && index > 3);
console.log(listFilter);
// true or false
// some tra ve true khi thoa 1 dieu kien va nguoc lai tra ve false khi khong thoa dieu kien nao ca
const someNumber = listNumber.some((value) => value > 3);
console.log(someNumber);
// every tra ve true khi thoa tat ca dieu kien va nguoc lai tra ve false khi khong thoa 1 dieu kien
const everyNumber = listNumber.every((value) => value > 3);
console.log(everyNumber);
// reduce gom cac phan tu lai thanh 1
const totalNumber = listNumber.reduce(function (a, b) {
  return a + b;
}, 0);
console.log(totalNumber);
