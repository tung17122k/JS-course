// keydown: khi nhan xuong  phim
const input = document.querySelector(".input");
input.addEventListener("keydown", function (e) {
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(e.which);
  // e.key: la key nhap vao
  // if (e.key === "Enter") {
  //   console.log("hit enter");
  // } else {
  //   console.log(e.key);
  // }
});
// 2. key up: su kien nay se xay ra khi nhan phim roi tha ra

// input.addEventListener("keyup", function (e) {
//   console.log(e.key);
// });
// 3.keypress : su kien nay xay ra khi cac ban nhan phim
// keypress se ignore cac phim nhu delete, mui ten, page up, page down . home, end ,crt , alt
// thu tu uu tien keydown -> keypress -> keyup
// input.addEventListener("keypress", function (e) {
//   console.log(e.key);
// });
// 4. change : xay ra khi go xong nhan enter hoac an chuot ra ngoai
// input.addEventListener("change", function (e) {
//   console.log("working");
// });
// 5. focus
input.addEventListener("focus", function (e) {
  // console.log("is focus");
});
// 6. blur
input.addEventListener("blur", function (e) {
  // console.log("is blur");
});
// 7.submit form
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = this.elements["username"].value;
  const password = this.elements["password"].value;
  if (!username) {
    alert("please enter username");
    return;
  }
  if (!password) {
    alert("please enter password");
    return;
  }
  if (password.length <= 3) {
    alert("too short");
    return;
  }
  // if (input.value === "") {
  //   alert("khong dc de trong");
  // }
  // this, e.target
  // this.elements
  // console.log(this.elements);
  // console.log(this.elements["username"].value);
  // const username = this.elements["username"].value;

  // const gender = this.elements["gender"].value;
  // const hobby = this.querySelectorAll(`input[name="hobby"]`);
  // let hobbyValues = [];
  // [...hobby].forEach((item) => hobbyValues.push(item.value));
  // console.log(hobbyValues);
  // console.log({ username, gender, hobbyValue });
});
// validation
// email
// regular expression
