// 1.viet function so sanh 2 so a b tim ra so lon hon
function compare(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("pls enter a number");
  }
  return Math.max(a, b);
}
console.log(compare(100, 1000));
// 2. in hoa chu cai dau
// capitalize
function capitalize(word = "") {
  if (word.length === 0) return null;
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  //slice(startIndex, endIndex -1)
  let otherWord = word.toLowerCase().slice(1);
  return `${newWord}${otherWord}`;
}
console.log(capitalize("TUng"));

// Viet ham su dung call back
function useCallback(a, b, callback) {
  let max = compare(a, b);
  callback(max);
}
function callback(number) {
  console.log("so lon nhat la: " + number);
}
console.log(useCallback(500, 1000, callback));
// normal function
const square = function (x) {
  return x * x;
};
square(5);

const square2 = (x) => x * x;
