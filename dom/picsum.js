const limit = 8;
const endpoint = `https://picsum.photos/v2/list?limit=${limit}`;
const loading = document.querySelector(".img-loader");
let page = 1;
const loadMore = document.querySelector(".load-more");
loadMore.style.display = "none";
const imageList = document.querySelector(".images");
function imageTemplate(url) {
  const template = `<div class="image-item">
        <img src="${url}" alt="" />
      </div>`;
  imageList.insertAdjacentHTML("beforeend", template);
}
async function fetchImage(_page = 1) {
  loading.computedStyleMap.display = "block";
  const response = await fetch(`${endpoint}&page=${_page}`);
  const images = await response.json();
  if (Array.isArray(images) && images.length > 0) {
    loading.style.display = "none";
    images.forEach((item) => imageTemplate(item.download_url));
    loadMore.style.display = "block";
  }
}
async function handleLoadMore() {
  console.log("loadmore");
  page++;
  loading.style.display = "block";
  await fetchImage(page);
}
loadMore.addEventListener("click", handleLoadMore);

fetchImage();
