document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById('create-task-form');
const inputField = document.getElementById('new-task-description');
const taskList = document.getElementById('task-list');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskDescription = inputField.value;
  const listItem = document.createElement('li');
  listItem.textContent = taskDescription;
  taskList.appendChild(listItem);
  inputField.value = '';
});
});
