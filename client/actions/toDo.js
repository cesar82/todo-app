/* CRUD Actions for ToDo task on local storage */
import sortBy from 'lodash/sortBy';
import remove from 'lodash/remove';

export function getToDoList() {
  let list = JSON.parse(localStorage.getItem('todo_tasks')) || [];

  return () => {  return sortBy(list, ['dueDate']) };
}

export function addToDoTask(task) {
  let list =  JSON.parse(localStorage.getItem('todo_tasks')) || [];
  list.push(task);
  localStorage.setItem('todo_tasks', JSON.stringify(list));
  return () => { return true };
}

export function removeToDoTask(id) {
  let list =  JSON.parse(localStorage.getItem('todo_tasks')) || [];
  remove(list, function(task) {
    return task.id == id;
  })
  localStorage.setItem('todo_tasks', JSON.stringify(list));
  return () => { return true };
}
