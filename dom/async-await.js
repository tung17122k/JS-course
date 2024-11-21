function wait(timer = 0) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, timer);
  });
}
async function run() {
  console.log("start");
  await wait(2000);
  console.log("end");
}
run();

function makeTimer(timer, str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str);
    }, timer);
  });
}

async function allTimer() {
  const timer = await makeTimer(1000, "first");
  console.log(timer);
  const timer2 = await makeTimer(1000, "second");
  console.log(timer2);
}
allTimer();
