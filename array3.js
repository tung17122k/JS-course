const num1 = 1;
const num2 = 1;
console.log(num1 === num2); //true
// by ref
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); //false
//JSON: Javascript Object Notation
// JSON.stringify
//JSON.parse
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.stringify([1, 2, 3]));
const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1Str === arr2Str);

const students = ["a", "b", "c"];
// students.pop(); // xoa di phan tu cuoi cung
console.log(students);
const sliceStudents = students.slice(); // sao chep 1 mang
console.log(sliceStudents);
// 2. spread operator [...aray]
const spreadStudents = [...students];
console.log(spreadStudents);
// [1,2] [2,3,4] [5, 6]
// concat
// array1.concat(array2, array3, arrayN);
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const mergeArray = array1.concat(array2, array3);
console.log(mergeArray);
// 2.spread operator
const mergeArray2 = [...array1, ...array2, ...array3];
console.log(mergeArray2);
// destructuring array
const toys = ["ball", "sword", "arrow", "magic", "water", "fire"];
const h = toys[0]; //ball
const j = toys[1]; //sword
const k = toys[2]; //arrow
// const [indexName, indexName, indexName] = toys;
const [] = toys;
const [x, y, z, ...rest] = toys;
console.log(x, y, z);
// rest paramete ...
console.log(rest);
function demo(a, ...rest) {
  console.log(a, rest);
}
demo(1, 2, 3, 4, 5);
