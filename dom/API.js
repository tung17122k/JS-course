const endpoint = "https://api.github.com/users";
// fetch
const userEl = document.querySelector(".username");
async function displayUsername(username) {
  userEl.textContent = "...Loading";
  const promise = await fetch(`${endpoint}/${username}`);
  const data = await promise.json();
  userEl.textContent = `${data.login}`;
  console.log("displayUser ~ data ", data);
  // console.log(promise);
  // promise
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     console.log(data.login);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
}
function handleError(error) {
  console.log("handleError ~ error", error);
}
displayUsername("tung17122k").catch(handleError);
