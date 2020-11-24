const taskPlace = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");
const button = document.getElementById("tasks__add");
const tasks = document.getElementById("tasks");

function addTask(event) {
  event.preventDefault();
  taskPlace.value = taskPlace.value.trim();
  if (taskPlace.value.length > 0) {
    tasks.insertAdjacentHTML('beforeEnd', '<div class="task"><div class="task__title"></div><a href="#" class="task__remove">&times;</a></div>');
    tasks.lastElementChild.firstElementChild.innerText = taskPlace.value;
    taskPlace.value = "";
    let deleteButton = tasks.lastElementChild.getElementsByClassName("task__remove")[0];
    deleteButton.onclick = () => deleteButton.parentElement.remove();
  }
}

button.addEventListener('click', addTask);