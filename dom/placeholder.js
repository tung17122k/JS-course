// npx json-server db.json
const course = {
  image: "",
  title: "",
  author: "",
  rating: "",
  price: "",
  bestSeller: false,
  buyAmount: "",
};
const endpoint = "http://localhost:3000/Courses";

async function addNewCourse({
  image,
  title,
  author,
  rating,
  price,
  bestSeller,
  buyAmount,
}) {
  const response = await fetch("http://localhost:3000/Courses", {
    method: "POST",
    body: JSON.stringify({
      image,
      title,
      author,
      rating,
      price,
      bestSeller,
      buyAmount,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response;
}

function renderItem(courses) {
  const courseList = document.querySelector(".course-list");
  courseList.innerHTML = ""; // clear course list
  courses.forEach((course) => {
    const courseItem = document.createElement("div"); // create div
    courseItem.classList.add("course-item"); // create class cho div tren
    // tao giao dien display course trong db
    courseItem.innerHTML = `<div class="course-image">
        <img src="${course.image}" alt="${course.title}" />
      </div>
      <div class="course-content">
        <h3 class="course-title">${course.title}</h3>
        <div class="course-author">${course.author}</div>
        <div class="course-meta">
          <div class="course-rating">${course.rating}</div>
          <div class="course-enroll">${course.buyAmount}</div>
        </div>
        ${
          course.bestSeller
            ? '<div class="course-best-seller">Best Seller</div>'
            : ""
        }
      </div>`;
    courseList.appendChild(courseItem);
  });
}

async function getCourse() {
  const response = await fetch(endpoint); // fetch tu API
  const data = await response.json(); // get ra db json
  // console.log(data);
  renderItem(data); // truyền dữ liệu JSON vào hàm renderItem
}

const formPost = document.querySelector(".form-post");
formPost.addEventListener("submit", async function (e) {
  e.preventDefault();
  // console.log(this);
  const course = {
    image: this.elements.image.value,
    title: this.elements["title"].value,
    author: this.elements["author"].value,
    rating: +this.elements["rating"].value,
    price: +this.elements["price"].value,
    bestSeller: this.elements["bestSeller"].checked,
    buyAmount: +this.elements["buyAmount"].value,
  };
  // console.log(title, views);
  await addNewCourse(course);
  this.reset();
  // addPost(title, author);
  // console.log(bestSeller);
});
getCourse();
