/* CRUD Actions for ToDo task on local storage */

export const saveToDoList = (tasks) => {
  localStorage.setItem('todo_tasks', JSON.stringify(tasks));
}

export function getToDoList() {
  return () => {  return JSON.parse(localStorage.getItem('todo_tasks')) || [] };
}

export function addToDoTask(task) {
  let list =  JSON.parse(localStorage.getItem('todo_tasks')) || [];
  list.push(task);
  localStorage.setItem('todo_tasks', JSON.stringify(list));
  return () => { return true };
}
