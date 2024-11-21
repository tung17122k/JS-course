window.addEventListener("load", function () {
  const input = document.querySelector(".input-search");
  const items = document.querySelectorAll(".dropdown-item");
  input.addEventListener("input", handleHighlight);
  // input no se lay value moi khi chung ta go
  function handleHighlight(e) {
    let filter = e.target.value;
    // console.log(filter);
    filter = filter.toLowerCase();
    // console.log(filter);
    [...items].forEach((item) => {
      const text = item.textContent;
      const index = text.toLocaleLowerCase().indexOf(filter);
      //   console.log(index);
      if (index >= 0 && text.toLocaleLowerCase().startsWith(filter.charAt(0))) {
        // nhap vao la "How t" => "How t": index = 0
        item.innerHTML = `${text.substring(
          0,
          index // substring(0, 0) => khong lay ra dc gi ca vi set if (index = 0 or index > 0)
        )}<span class = "primary">${text.substring(
          index,
          index + filter.length
        )}</span>${text.substring(index + filter.length)}`;
      }
    });
  }
});
