window.addEventListener("load", function () {
  const tabItems = document.querySelectorAll(".tab-item");
  const tabList = document.querySelector(".tab-list");
  const tab = document.querySelector(".tab");
  const tabOffsetLeft = tab.offsetLeft;
  const tabNext = document.querySelector(".tab-next");
  const tabPrev = document.querySelector(".tab-prev");
  let deltaScroll = 40;
  // const firstTabWidth = tabItems[0].offsetWidth;
  // const lastTabWidth = tabItems[tabItems.length - 1].offsetWidth;
  const tabScrollWidth = tabList.scrollWidth - tabList.clientWidth;
  // console.log(tabScrollWidth);
  [...tabItems].forEach((item) => item.addEventListener("click", handleClick));
  function handleClick(e) {
    [...tabItems].forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    let leftSpacing = e.target.offsetLeft;
    console.log(leftSpacing);
    // if (e.target.offsetLeft >= tabOffsetLeft) {
    //   leftSpacing = e.target.offsetLeft - tabOffsetLeft;
    // }
    tabList.scroll(leftSpacing / 2, 0);
    // document.querySelector(".tab-list").scroll(x,0)
  }
  tabList.addEventListener("wheel", function (e) {
    const delta = e.deltaY;
    // a.scrollLeft = 10
    tabList.scrollLeft += delta;
    if (tabList.scrollLeft > 0) {
      tabPrev.classList.remove("disabled");
    } else {
      tabNext.classList.remove("disabled");
    }
    if (tabList.scrollLeft >= tabScrollWidth) {
      tabNext.classList.add("disabled");
    } else if (tabList.scrollLeft <= 0) {
      tabPrev.classList.add("disabled");
    }
  });
  tabNext.addEventListener("click", function (e) {
    tabList.scrollLeft += deltaScroll;
    tabPrev.classList.remove("disabled");
    if (tabList.scrollLeft >= tabScrollWidth) {
      tabNext.classList.add("disabled");
    }
  });
  if (tabNext) {
    tabPrev.classList.add("disabled");
  }
  tabPrev.addEventListener("click", function (e) {
    tabList.scrollLeft -= deltaScroll;
    if (tabList.scrollLeft <= 0) {
      tabPrev.classList.add("disabled");
    }
    tabNext.classList.remove("disabled");
  });
});
