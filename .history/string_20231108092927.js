// string chuoi
// "Hello"
// 'my name is ...'
// `I am ....`
// double quotes, single quote, backticks (tempplate literal)
const name = "Tuan";
const job = "dev";
// console.log(name);
// console.log(typeof name);
const newStr = name + job;
const newStr2 = "ten tao la " + name;
// console.log(newStr);
// console.log(newStr2);
// ${variable}
const newStr3 = ` My name is ${name} and i am ${job}`;
console.log(newStr3);
// .length
console.log(newStr3.length);
// index la vi tri cua tung ki tu trong chuoi bao gom ca khoang trang
const myStr = "FE Tung";
const myStr1 = "FE Tung";
console.log(myStr.split(" "));
console.log(myStr.split(""));
console.log(myStr.split("/"));
console.log(myStr.toLowerCase());
console.log(myStr.toUpperCase());
console.log(myStr.startsWith("FE"));
console.log(myStr.endsWith("Tung"));
console.log(myStr.includes("ung"));
console.log(myStr.indexOf("T"));
console.log(myStr.replace("FE", "ABC"));
console.log(myStr.repeat(5));
console.log(myStr.slice(0,3));
console.log(myStr.slice(-1)); //g
console.log(myStr.slice(-4)); //Tung
console.log(myStr1.trim());
