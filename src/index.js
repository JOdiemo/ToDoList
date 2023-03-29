import './style.css';
import render from './applications.js';
import Todos from './todolist.js';

const todosList = new Todos();
render(todosList);

// add todo
const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', () => {
  const id = `id${Math.random().toString(10).slice(2, 4)}`;
  const description = document.querySelector('.description').value.trim();
  const completed = false;
  const index = todosList.list.length + 1;

  const newTodo = {
    id, description, completed, index,
  };
  if (description) {
    todosList.addItems(newTodo);
    render(todosList);
  }
});
