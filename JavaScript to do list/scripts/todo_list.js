const todoList = [];

function addtodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    //console.log(name);

    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';
}