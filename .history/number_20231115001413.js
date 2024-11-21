//
console.log(5 + 7);
console.log(typeof 10);
const number1 = "5";
const number2 = "4.8";
console.log(parseInt(number1)); //5
console.log(parseFloat(number2)); //4.8
const number3 = "-10";
// math.abs(value);
console.log(Math.abs(number3)); //10
// math.floor(value) -> lam tron xuong
console.log(Math.floor(4.3));
//math.ceil(value) -> lam tron len
console.log(Math.ceil(4.3)); //5
//Math.round(value) -> lam tron gan nhat 
console.log(Math.round(4.5)); // 4.5 -> 5, duoi 4.5 thanh 4
console.log(parseFloat((1/3).toFixed(2))); // 0.33333333333 -> 0.33(string)
console.log(Math.ceil(Math.random() * 10));