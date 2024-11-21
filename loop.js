// vòng lặp
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
  // console.log(`the index is ${i}`);
  // nếu giá trị là 8 thì dừng vòng lặp
  if (numbers[i] === 8) {
    continue;
  }
  console.log(`the value is ${numbers[i]}`);
  // neu gia tri la 8 thi bo qua gia tri do
}
// for (let i = numbers.length - 1; i >= 0; i--) {
//   console.log(`the value is ${numbers[i]}`);
//   for (let j = numbers.length - 1; j >= 0; j--) {
//     console.log(`the value is j:  ${numbers[j]}`);
//   }
// }

//infinity loop
// for (let i = 0; i < 2; i--) {}
let copyArr = [];
// push(value)
for (let i = 0; i < numbers.length; i++) {
  copyArr.push(numbers[i]);
}
console.log(copyArr);
// dao nguoc tu i love thanh evol i
let str = "i love";
let result = [];
for (let i = str.length - 1; i >= 0; i--) {
  result = result + str[i];
}
console.log(result);

// while va do while
// while (condition: dieu kien){
// body code
// }
let number1 = 1;
while (number1 < 10) {
  console.log("number is " + number1);
  // dieu kien de dung
  number1 = number1 + 1;
}
/* 
do {

}while(condition: dieu kien)
*/
let number2 = 8;
do {
  console.log("number is " + number2);
  number2++;
} while (number2 < 10);

let y = [];
for (let value of numbers) {
  value += 10;
  y.push(value);
}
console.log(y);

for (let c of "Tung") {
  console.log(c);
}
