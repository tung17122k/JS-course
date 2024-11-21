// cho 1 mang const array = [1, 1000, false, null, "Tung", "js", [1, 2, 3]]. Viet chuong trinh loai bo cac gia tri la falsy ra khoi mang chi giu lai truthy. falsy: 0 null undefined false "" NaN
const array = [1, 1000, false, null, "Tung", "js", [1, 2, 3], NaN];
// new Boolean
// build in object
const filterFalsy = array.filter((item) => Boolean(item));
console.log(filterFalsy);

// cho 1 mang [[1,2,3], [false, null]], [1,5,6,["js"], [888,666,[90]]], va ket qua mong muon la [1,2,3,false, null,1,5,6,"js,888,666,90"]

const complexArray = [
  [1, 2, 3, [false, null]],
  [1, 5, 6, ["js"]],
  [888, 666, [90]],
];
// flat(number)
const result = complexArray.flat(2);
console.log(result);

// 3. Dao nguoc so nguyen. VI du 1234 -> 4321, -567 -> -765
// Math.sign(123) -> 1
// Math.sign (-123) -> -1
function reverseNumber(number) {
  // convert to string
  // split ("") -> [value]
  // reverse()
  //join("")
  const value =
    parseInt(number.toString().split("").reverse().join("")) *
    Math.sign(number);
  console.log(value);
}
reverseNumber(-1234);
// 4. viet chuong trinh co ten la fizzBuzz voi dau vao la 1 so nguyen, cho chay tu 1 cho toi so nguyen do roi kiem tra neu so do chia het cho 2 thi in ra chu "fizz" neu chia het cho 3 thi in ra chu "Buzz", neu chia het cho ca 2 va 3 thi in ra chu "fizzbuzz"

function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 2 === 0) {
      console.log("FizzBuzz");
    } else if (i % 2 === 0) {
      console.log("Fizz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    }
  }
}
fizzBuzz(15);

// 5. Cho 1 chuoi bat ky, dem so ky tu `vowels` có trong chuỗi.
// vowels là các ký tự u e o a i
// ví dụ "evondev" -> 3
function countVowels(string) {
  let count = 0;
  const characters = "ueoai";
  for (let c of string.toLowerCase()) {
    if (characters.includes(c)) count = count + 1;
  }
  return count;
}
console.log(countVowels("EVONDEV"));

// 6. cho 1 mang cac gia tri so [1,2,3,1,1,1,2,2,2,5,5,5,7,7,6] viet mot function tra ve 1 mang voi gia tri unique. ket qua o tren se la [1,2,3,5,7,6]

function unique(arr) {
  let result = [];
  // array.isArray(array) -> true or false
  if (!Array.isArray(arr)) return result;
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(unique([1, 2, 3, 1, 1, 1, 2, 2, 2, 5, 5, 5, 7, 7, 6]));
console.log(unique("string"));

// 7. Viet 1 function xu ly tu 1 mang lon thanh nhieu mang con dua vao mot so nguyen dau vao. Vi du ([1,2,3,4,5], 2) -> [[1,2] [3,4], [5]]
function splitArray(array, number) {
  let result = [];
  // slice(start, end )
  // [1,2,3,4,5,6]
  let index = 0;
  while (index < array.length) {
    // array.slice(index, index+number)
    result.push(array.slice(index, index + number));
    index = index + number;
  }
  console.log(result);
  return result;
}
splitArray([1, 2, 3, 4, 5, 6, 7], 2);
