"4.5"; //4.5 parseFloat
"4"; //4 parseInt
// Number(value)
console.log(Number("4.5"));
console.log(Number("4"));
console.log(Number("abcdef"));
// NaN Not a Number
console.log(Number(null));
console.log(Number(false));
console.log(Number(""));
console.log(Number(NaN)); //NaN
// String(value)
console.log(String(4.5)); // "4.5"
console.log(String(null)); //"null"
console.log(String(undefined)); //"null"
console.log(String(NaN)); // "NaN"
// boolean(value) -> true or false
console.log(`Boolean of zero: ${ Boolean(0)}`);
// Toan tu so sanh > < >= <=
console.log(5 > 7) //false