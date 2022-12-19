/* index.js */
import { createTodo } from "./todo.js";

let form = document.querySelector("#todo-list-form");
let title = document.querySelector("#todo-title");
let completed = document.querySelector("#todo-completed");
let category = document.querySelector("#todo-category");
let list = document.querySelector("#todo-list");

function render(todo) {
  list.innerHTML = `<li><div class="card">${todo.icon} &nbsp;<strong>${todo.todoTitle}</strong> - by ${todo.user.first} ${todo.user.last}</strong> in ${todo.chosenCategory}</div></li>`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let author = {
    first: "Sam",
    last: "Blue",
  };
  let gift = completed.checked ? "✅" : "⏳";
  let values = {
    icon: gift,
    todoTitle: title.value,
    completed: completed.checked,
    chosenCategory: category.value,
    user: author,
  };
  let todo = createTodo(values);
  title.value = "";
  console.dir(todo);
  render(todo);
});
