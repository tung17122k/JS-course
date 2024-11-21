// dao nguoc 1 chuoi vi du Nguyen Viet Tung  => Viet Tung Nguyen
function reverseString(str) {
  if (!str) return null;
  const newString = str.split(" ");
  console.log(newString);
  const abc = newString.slice(0, 1);
  const abcd = newString.slice(1);
  console.log(abc);
  console.log(abcd);
  const combinedArray = [...abcd, ...abc];
  console.log(combinedArray.join(" "));
}
console.log(reverseString("Nguyen Viet Tung"));
// 3. Capitalize In hoa chu cai dau trong chu vi du : my name is tung => My Name Is Tung
function capitalizeWord(word = "") {
  if (word.length === 0) return null;
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  //slice(startIndex, endIndex -1)
  let otherWord = word.toLowerCase().slice(1);
  return `${newWord}${otherWord}`;
}
function capitalizeString(str) {
  if (!str) return null;
  // str.split(" ").map(item => capitalizeWord(item)).join(" ") : split de lay ra chuoi cho vao mang, map de duyet tung phan tu voi capitalize, sau do join lai
  const result = str
    .split(" ")
    .map(capitalizeWord)
    // .map((item) => capitalizeWord(item))
    .join(" ");
  console.log(result);
}
capitalizeString("my name is tung");
