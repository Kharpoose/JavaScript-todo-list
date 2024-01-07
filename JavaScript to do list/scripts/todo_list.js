const todoList = [''];
//const todoList = ["Make dinner", "Wash dishes"];

renderTodoList();

function renderTodoList() {
  let todoListHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p  style="margin-bottom: 2px;  margin-top: 10px;">${todo}</p>`;
    todoListHtml += html;
  }

  //console.log(todoListHtml);
  document.querySelector('.js-todo-list').innerHTML = todoListHtml;
};

function addtodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  //console.log(name);

  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';
  renderTodoList();
}
