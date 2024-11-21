const students1 = ["Tung", "Tuan", "Bang", "Duy", "Hung"];
console.log(students1);
console.log("----array.length----");
console.log(students1.length);
// reverse
// console.log(students1.reverse());
//join
console.log(students1.join());
console.log(students1.join(" "));
// includes -> kiem tra trong mang co chua phan tu nao do k
console.log(students1.includes("Tung"));
//indexOf tra ve vi tri cua phan tu tim thay dau tien
console.log(students1.indexOf("Tuan"));
//indexOf tra ve vi tri cua phan tu tim thay cuoi cung
console.log(students1.lastIndexOf(""));
// push -> them phan tu vao cuoi mang
console.log(students1.push("js"));
console.log(students1);
//unshift them phan tu vao dau mang
console.log(students1.unshift("Binh"));
console.log(students1);
