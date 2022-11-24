//selectors
const todoin = document.querySelector(".input");
const todoBtn = document.querySelector(".addtodo");
const e = document.querySelector(".error");
const todocon = document.querySelector(".todo-list");
//console loging for testing
// console.log(todo.value);
// console.log(todoBtn);

//event listener

todocon.addEventListener("click", deleteTodo);
document.addEventListener("DOMContentLoaded", gettodos);

function addtodo() {
  //   console.log(todo.value);

  if (todoin.value == "") {
    e.innerHTML = "Please enter your todo.....";
  } else {
    e.innerHTML = "";

    //creating list using ul
    const todolist = document.createElement("div");
    todolist.classList.add("tododiv");

    //creating a todo using li and will add this li in ul
    const todo = document.createElement("li");
    todo.classList.add("todo");
    todo.innerText = todoin.value;

    //adding to localstorage
    saveLocalTodos(todoin.value);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("completeBtn");
    completeBtn.innerHTML = '<i class="fas fa-plus"></i>';
    //adding the created html element to todocontainer

    todolist.appendChild(todo);
    todolist.appendChild(completeBtn);
    todolist.appendChild(deleteBtn);
    todocon.appendChild(todolist);
    // console.log(todocon);
    todoin.value = "";
  }
}

function deleteTodo(event) {
  const item = event.target;
  //   console.log(item);

  const todo = item.parentElement;
  //   todo.remove();
  //   //   item.remove();
  //   console.log("remove");

  if (item.classList[0] === "deleteBtn") {
    removeLocalTodos(todo);
    todo.remove();
    // console.log("Remove");
  }

  if (item.classList[0] === "completeBtn") {
    todo.classList.toggle("completed");
  }
}

// function saveLocalTodos(todo) {
//   let todos;

//   todos = [];
//   todos.push(todo);

//   //   let todos;
//   //   todos.push(todo);
//   localStorage.setItem("todos", JSON.stringify(todos));
//   console.log("Stored");
//   console.log(localStorage.getItem("todos"));
// }

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function gettodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    const todolist = document.createElement("div");
    todolist.classList.add("tododiv");

    //creating a todo using li and will add this li in ul
    const newtodo = document.createElement("li");
    newtodo.classList.add("todo");
    newtodo.innerText = todo;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("completeBtn");
    completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    //adding the created html element to todocontainer

    todolist.appendChild(newtodo);
    todolist.appendChild(completeBtn);
    todolist.appendChild(deleteBtn);
    todocon.appendChild(todolist);
    // console.log(todocon);
    // todoin.value = "";
  });
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  //   console.log(todoIndex);
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
