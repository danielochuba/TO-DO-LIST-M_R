import './style.css';
import tasksRefactor from '../modules/TaskHandle.js';

const newTodoForm = document.querySelector('#form-sec');
const todoList = document.querySelector('.task-section');
const removeMarked = document.querySelector('.clearComplete');

const updateInputText = (id, newText) => {
  const todoListArray = JSON.parse(localStorage.getItem('todos') || '[]');
  const targetIndex = todoListArray.findIndex((todo) => todo.id === parseInt(id, 10));

  if (targetIndex >= 0) {
    todoListArray[targetIndex].description = newText;
    localStorage.setItem('todos', JSON.stringify(todoListArray));
    tasksRefactor(todoListArray);
  }
};

const toggleComplete = (id) => {
  const todoListArray = JSON.parse(localStorage.getItem('todos') || '[]');
  const updateTodoList = todoListArray.map((todo) => {
    if (todo.id === parseInt(id, 10)) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });

  tasksRefactor(updateTodoList);
  // eslint-disable-next-line no-restricted-globals
  location.reload();
};

const removeTodo = (targetIndex) => {
  const todoListArr = JSON.parse(localStorage.getItem('todos') || '[]');
  const updateList = todoListArr.filter((todo) => todo.id !== parseInt(targetIndex, 10));
  tasksRefactor(updateList);
  // eslint-disable-next-line no-restricted-globals
  location.reload();
};

const removeCompleted = () => {
  let updtArr = [];
  const todoListArray = JSON.parse(localStorage.getItem('todos') || '[]');

  updtArr = todoListArray.filter((todo) => todo.completed !== true);

  localStorage.setItem('todos', JSON.stringify(updtArr));
  tasksRefactor(updtArr);
  // eslint-disable-next-line no-restricted-globals
  location.reload();
};

const updateList = (todos) => {
  const description = todos.map((todo) => `
            <li class="fill task-list ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
              <input type="checkbox" ${todo.completed ? 'checked' : ''} class="checkbox"/>
              <input type="text" value="${todo.description}" class="inputtext" id="${todo.id}"/>
              <button type="button"><i class="fa-solid fa-trash-can"></i></button>
            </li>
          `).join('');

  todoList.innerHTML = description;
  const enteredTexts = todoList.querySelectorAll('.task-list input[type=text]');

  enteredTexts.forEach((input) => input.addEventListener('change', (e) => updateInputText(input.id, e.target.value)));

  const erase = todoList.querySelectorAll('.task-list button');

  erase.forEach((button) => button.addEventListener('click', () => removeTodo(button.parentNode.getAttribute('data-id'))));

  const checkedUP = todoList.querySelectorAll('.checkbox');
  checkedUP.forEach((checkbox) => checkbox.addEventListener('click', () => toggleComplete(checkbox.parentNode.getAttribute('data-id'))));
};

const newTodo = (e) => {
  e.preventDefault();
  const newTask = document.getElementById('taskInput').value;
  const todos = JSON.parse(localStorage.getItem('todos') || '[]');

  const newTodo = {
    description: newTask,
    completed: false,
    id: todos.length,
  };

  document.getElementById('taskInput').value = '';
  localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
  updateList([...todos, newTodo]);
};

const addDisplay = () => {
  newTodoForm.addEventListener('submit', newTodo);
  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  updateList(todos);
};

removeMarked.addEventListener('click', () => {
  removeCompleted();
});

addDisplay();