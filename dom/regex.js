// Regular expression
// 1. 2 cach khai bao voi regex
const re1 = /hello/;
const re2 = new RegExp("hello");
// hello world
console.log(re1.test("hello world"));
// 2. anchor
// ^: string bat dau , $: cuoi cua chuoi

/hi/.test("hi"); // true
/hi$/.test("welcome to hi"); // true
/hi$/.test("welcome to hello"); // false
/^hi/.test("hi welcome to hi"); // true
/^hi/.test("welcome to hi"); // false
// 3. range []
// [a-z]: cac ky tu tu a den z in thuong
// [A-Z]: cac ky tu tu a den z in hoa
// [0-9]: cac so tu 0 - 9
// [a-z0-9A-Z] cac so tu 0 - 9 hoac tu a - z hoac tu A - Z
/[a-z]/.test("a"); // true
/[a-z]/.test("A"); // false
/[A-Z]/.test("A"); // true
/[A-Z]/.test("a"); // false
/[0-9]/.test("1000"); // true
/[0-9]/.test("aa1000aaaaaaa"); // true
/[a-zA-Z0-9]/.test("aa1000aaAaaaaa"); // true
/[^a-z]/.test("a"); //false -> phu dinh
// 4. meta character
// \d: khop voi so no se tuong duong voi [0-9]
/\d/.test("1234"); //true
// \D: khop voi so no se tuong duong voi [^0-9]
/\D/.test("1234"); //false
// \w: khop voi cac ky tu va dau gach duoi va so , no se tuong duong [a-zA-Z0-9_]
/\w/.test("_"); // true
// \W: nguoc lai \w
/\W/.test("_"); //flase
// \s khop voi cac ky tu khoang trang
/\s/.test(" "); //true
// \S cac ky tu khong phai khoang trang
/\S/.test(" "); //flase
// \n: khop voi newline ( xuong hang )
// \t : khop voi tab character
// . khop voi tat ca tru xuong hang \n
// [^] khop voi tat ca moi thu bao gom xuong hang
// 5. quantifiers
// string.match(regex) "abc".match (/\w/) -> []
const str1 = "welcome to 202222221";
console.log(str1.match(/\d{4,6}/)[0]); //202222 => 4 - 6 ky tu
console.log(str1.match(/\d{4}/)[0]); //2022 => 4 so
// dau + no se lay 1 hoac nhieu
console.log(str1.match(/\d+/)[0]); //2022 => 4 so
const str2 = "color or colour";
console.log(str2.match(/color/)[0]); // color
console.log(str2.match(/colou?r/)[0]); // color => chu u co the co hoac ko thi dung dau ?
// flag
// g: global
// i: case insensitive
// m: multipe lines
console.log(str2.match(/colou?r/g)); // color , colour
// *: khong co hoac la nhieu
const str3 = "1234";
console.log(str3.match(/\d*/g)); // lay het hoac la null => ['1234', '']
// => ?: or bao gom ca empty  ,* = and => thoa ca 2 , +: sor => thoa it nhat 1 cai
// 6. group
// .test("123")
/(\d{3})?(\w+)/.test("123"); // true
// 7. Escaping \ / [ ] { } ? + * | . ^ $
/\?/.test("?"); // su dung \ de escape
//  8. Boundaries \b \B
// \b: dung 1 minh
"my name is Tung".match(/\bTung/g); // Tung
// \B: ko dung 1 minh
"my name isTung".match(/\BTung/g); // Tung
const str4 = "hello welcome hello to my hello";
console.log(str4.replace("hello", "Tung")); //Tung welcome hello to my hello
// string.replace(regex, value)
console.log(str4.replace(/hello/g, "Tung"));
console.log("welcome 1234567".match(/\d+/g));
