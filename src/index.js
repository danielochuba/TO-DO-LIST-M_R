import './style.css';

const todos = [
  {
    title: 'Watch the Tvs',
    completed: false,
    index: 1,
  },
  {
    title: 'Read Js books',
    completed: false,
    index: 2,
  },
  {
    title: 'Play the Sudoku',
    completed: false,
    index: 3,
  },
  {
    title: 'Complete Weekly Project for the week',
    completed: false,
    index: 4,
  },
  {
    title: 'work on Personal soft skilss',
    completed: false,
    index: 5,
  },
];

const description = todos.map((todo) => `
            <li class="fill task-list ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
              <input type="checkbox" ${todo.completed ? 'checked' : ''} class="checkbox"/>
              <input type="text" value="${todo.title}" class="inputtext" id="${todo.id}"/>
              <button type="button"><i class="fa-solid fa-trash-can"></i></button>
            </li>
          `).join('');

const listContainer = document.querySelector('.list');

listContainer.innerHTML += description;