// localStorage.setItem("name", "Tung");
// localstorage.getItem("key")
// console.log(localStorage.getItem("name"));
// 3. localStorage.remove("key")
// localStorage.removeItem("name");
// 4. localStorage.clear()
// let arr = [1, 2, 3, 4, 5];
// localStorage.setItem("list", JSON.stringify(arr));
// const newArr = JSON.parse(localStorage.getItem("list"));
// console.log(newArr);
window.addEventListener("load", function () {
  const form = document.querySelector(".todo-form");
  const todoList = document.querySelector(".todo-list");
  let todos = localStorage ? JSON.parse(localStorage.getItem("todoList")) : [];
  // console.log(todos); // lay ra mang todos
  if (Array.isArray(todos) && todos.length > 0) {
    [...todos].forEach((item) => createTodoItem(item));
  }
  function createTodoItem(title) {
    const template = `<div class="todo-item">
    <span class="todo-text">${title}</span>
    <i class="fa fa-trash todo-remove"></i>
  </div>`;
    todoList.insertAdjacentHTML("beforeend", template);
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoInput = document.querySelector(".todo-input");
    const todoInputValue = todoInput.value;
    const template2 = `<div class="sweet-alert">
    <i class="fa fa-check sweet-icon"></i>
    <p class="sweet-text">Added ${todoInputValue}</p>
  </div>`;
    document.body.insertAdjacentHTML("beforeend", template2);
    const todoVal = this.elements.todo.value;
    // main code
    createTodoItem(todoVal);
    todos.push(todoVal);
    // console.log(todos);
    localStorage && localStorage.setItem("todoList", JSON.stringify(todos)); // luu todoList vao localstorage
    // save to localStorage
    this.elements["todo"].value = "";
  });
  // handle remove todo
  todoList.addEventListener("click", function (e) {
    if (e.target.matches(".todo-remove")) {
      // remove todo in DOM
      const todo = e.target.parentNode; // todo-item

      //   console.log(todo);
      todo.parentNode.removeChild(todo); // gọi đến parent của item là list -> sau đó removeChild(todo) xóa item ( phải truyền vào todo) ko là nó sẽ k hiểu
      // remove todo in localStorage
      const todoText = e.target.previousElementSibling.textContent;
      // console.log(todoText);
      for (let i = 0; i < todos.length; i++) {
        if (todos[i] === todoText) {
          todos.splice(i, 1);
          i--;
          localStorage.setItem("todoList", JSON.stringify(todos));
        }
      }
    }
  });
});
