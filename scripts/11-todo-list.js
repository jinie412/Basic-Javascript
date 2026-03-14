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

function renderToDoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const { name, duedate } = todoList[i]; // destructuring

    const html = `
    <div> ${name} </div>
    <div> ${duedate} </div>
    <button class = "btn-del" onclick="
      todoList.splice(${i},1);
      renderToDoList();
      ">Delete</button> 
    `;
    todoListHTML += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
