const now = new Date();
// built-in object
console.log(now);
// timestamp tinh ra ket qua la miliseconds
console.log(now.getTime());
// new Date() -> in ra ngay gio hien tai
// new Date(timestamp) -> dua vao timestamp de in ra ngay gio
// new Date(date string) ->
// new Date(year, month, day, hours, minutes, second, miliseconds)
console.log(new Date(1704434675668));
console.log(new Date("Fri Jan 05 2024 13:04:35 GMT+0700 (Indochina Time)"));
console.log(new Date(2024, 1, 1, 23, 23, 23, 23));

const birthDay = new Date(2000, 11, 17);
// in ra nam
console.log(birthDay.getFullYear());
console.log(birthDay.getMonth());
// in ra ngay cua thang
console.log(birthDay.getDate());
// in ra thu
console.log(birthDay.getDay());
// in ra gio
console.log(birthDay.getHours());
// in ra phut
console.log(birthDay.getMinutes());
console.log(birthDay.getSeconds());
console.log(birthDay.getMilliseconds());

console.log(`My birthday: ${birthDay}`);
birthDay.setFullYear(1995);
console.log(`My birthday update: ${birthDay}`);
birthDay.setMonth(10);
birthDay.setDate(15);
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleDateString("vi-VI"));

const myTime = new Date("Thu Jan 01 2024 23:23:23 GMT+0700 (Indochina Time)");
const myYear = myTime.getFullYear();
const myMonth = myTime.getMonth() + 1;
const myDate = myTime.getDate();
const prefixMonth = myMonth < 10 ? "0" : "";
console.log(`${myDate}/${prefixMonth}${myMonth}/${myYear}`);

setTimeout(function () {
  alert("call me after 3s");
}, 3000);
const timer = setInterval(function () {
  console.log("hole");
}, 3000);
clearInterval(timer);
