function getAge(year) {
  if (typeof year !== "number") return;
  const now = new Date();
  const currentYear = now.getFullYear();
  return currentYear - year;
}
console.log(getAge(a));
// function countdown(minutes) {
//   if (typeof minutes !== "number") return;
//   let seconds = minutes * 60;
//   // let counter = 0;
//   const timer = setInterval(function () {
//     console.log(seconds);
//     if (((seconds = seconds - 1), seconds === 0)) {
//       clearInterval(timer);
//       console.log("ban da het tg lam bai");
//     }
//   }, 1000);
// }
// countdown(1);

function timeSince(date) {
  const now = new Date();
  const yourDate = new Date(date);
  const secondsS = Math.floor((now.getTime() - yourDate.getTime()) / 1000);
  let timer = secondsS / (369 * 24 * 60 * 60);
  if (timer > 1) {
    console.log(`online ${Math.floor(timer)} nam truoc`);
    return;
  }
  timer = secondsS / (30 * 24 * 60 * 60);
  if (timer > 1) {
    console.log(`online ${Math.floor(timer)} thang truoc`);
    return;
  }
  timer = secondsS / (7 * 24 * 60 * 60);
  if (timer > 1) {
    console.log(`online ${Math.floor(timer)} tuan truoc`);
    return;
  }
  timer = secondsS / (24 * 60 * 60);
  if (timer > 1) {
    console.log(`online ${Math.floor(timer)} ngay truoc`);
    return;
  }
  timer = secondsS / (60 * 60);
  if (timer > 1) {
    console.log(`online ${Math.floor(timer)} gio truoc`);
    return;
  }
  timer = secondsS / 60;
  if (timer > 1) {
    console.log(`online ${Math.floor(timer)} phut truoc`);
    return;
  }
  if (timer > 1) {
    console.log(`online ${Math.floor(timer)} giay truoc`);
  }
  return;
}
timeSince("Fri Jan 12 2024 18:30:49 GMT+0700 (Indochina Time)");
