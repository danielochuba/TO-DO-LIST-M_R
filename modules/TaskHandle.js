const taskSection = document.querySelector('.task-section');
/**
 * Updates the todos list with new items.
 * @param {Array} newTodos An array of new todo items to update the list with.
 */
const tasksRefactor = (newTodos) => {
  const updtArr = newTodos.map((todo, index) => ({ ...todo, id: index + 1 }));
  localStorage.setItem('todos', JSON.stringify(updtArr));
  const description = updtArr.map(
    (task) => `
        <li class="fill task-list ${task.completed ? 'completed' : ''}" data-id="${task.id}">
          <input type="checkbox" ${task.completed ? 'checked' : ''} class="checkbox"/>
          <input type="text" value="${task.description}" class="inputtext" id="${task.id}"/>
          <button type="button"><i class="fa-solid fa-trash-can"></i></button>
        </li>
      `,
  ).join('');

  taskSection.innerHTML = description;
};

export default tasksRefactor;