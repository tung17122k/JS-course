// 1. textContent
const spinner = document.querySelector("#spinner");
// thay doi textContent
// spinner.textContent = "hello new content";
console.log(spinner.textContent);
// 2. innerText
console.log(spinner.innerText);

// 3. innerHTML -> lay ra noi dung cua selector bao gom ca HTML
console.log(spinner.innerHTML);
spinner.innerHTML = `<div class = "demo2"> demo innerHTML</div>`;
// parse
