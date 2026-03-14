const todoList = [{ name: "make dinner", duedate: "03/09/2026" }];

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const dateElement = document.querySelector(".js-date-input");
  const name = inputElement.value;
  const duedate = dateElement.value;

  todoList.push({ name, duedate });
  console.log(todoList);
  inputElement.value = "";
  renderToDoList();
}

document.querySelector(".btn-add").addEventListener("click", () => {
  addTodo();
});
function renderToDoList() {
  let todoListHTML = "";
  todoList.forEach((todoObject, index) => {
    const { name, duedate } = todoObject; // destructuring

    const html = `
    <div> ${name} </div>
    <div> ${duedate} </div>
    <button class = "btn-del">Delete</button> 
    `;
    todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  document.querySelectorAll(".btn-del").forEach((deleteBtn, index) => {
    deleteBtn.addEventListener("click", () => {
      todoList.splice(index, 1);
      renderToDoList();
    });
  });
}
