// https://icanhazdadjoke.com/
const jokeHeading = document.querySelector(".joke-heading");
const jokeButton = document.querySelector(".joke-button");
const joke = document.querySelector(".joke");
const endpoint = "https://icanhazdadjoke.com/";
async function getJoke() {
  const response = await fetch(endpoint, {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  // console.log(data);
  return data;
}
// getJoke();
async function handleClick() {
  joke.classList.add("is-loading");
  const data = await getJoke();
  jokeHeading.textContent = data.joke;
  joke.classList.remove("is-loading");
}
function handleError(error) {
  console.log(error);
}
handleClick().catch(handleError);
jokeButton.addEventListener("click", handleClick);
