// const fruit = "lemon";
// if (fruit === "apple") {
//   console.log("You like to eat apple");
// }
// if (fruit === "lemon") {
//   console.log("You like to eat lemon");
// }
// if (fruit === "watermelon") {
//   console.log("You like to eat watermelon");
// }
// switch (fruit) {
//   case "apple":
//     console.log("You like to eat apple");
//     break;
//   case "watermelon":
//   case "lemon":
//     console.log("You like to eat lemon and watermelon");
//     break;

//   default:
//     console.log("you like to eat orange");
//     break;
// }
// Ternary operator
const yourAge = 18;
let message = "you are a young boy";
if (yourAge >= 18) {
  message = "you are adult";
} else if (yourAge <= 10) {
  message = "you are still a child";
}
let message2 = yourAge >= 18 ? "You are adult" : "Your are still achild";
console.log(message2);
let message3 =
  yourAge >= 18
    ? "you are a boy"
    : yourAge <= 10
    ? "you are still a child"
    : "you are a young boy";
console.log(message3);
