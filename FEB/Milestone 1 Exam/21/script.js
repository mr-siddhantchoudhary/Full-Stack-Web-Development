// selecting DOM elements
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const addTodoBtn = document.getElementById('add-todo-btn');

//Array to store the todo items
let todos = [];

//Function to render the todo list
function renderTodoList() {
  //clearing the todo list
  todoList.innerHTML = '';

  //Looping through the todos array and adding each item to the list
  todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    const todoText = document.createElement('span');
    const deleteTodoBtn = document.createElement('button');

    todoText.textContent = todo;
    todoText.setAttribute('id','todo-text');

    deleteTodoBtn.textContent = 'Delete';
    deleteTodoBtn.setAttribute('id','delete-todo-btn');
    deleteTodoBtn.addEventListener('click', () => {
      //removing the todo item from the array and re-rendering the list
      todos.splice(index, 1);
      renderTodoList();
    });

    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteTodoBtn);

    todoList.appendChild(todoItem);
  });
}


//Function to add a todo item to the array

function addTodo() {
  const todo = todoInput.value.trim();

  if (todo !== '') {
    todos.push(todo);
    renderTodoList();
    todoInput.value = '';
  }
}

addTodoBtn.addEventListener('click', addTodo);