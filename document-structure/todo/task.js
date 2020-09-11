const taskPlace = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");
const button = document.getElementById("tasks__add");
const tasks = document.getElementById("tasks");

function addTask() {
  if (taskPlace.value.length > 0) {
    event.preventDefault();
    tasks.insertAdjacentHTML('beforeEnd', '<div class="task"><div class="task__title"></div><a href="#" class="task__remove">&times;</a></div>');
    let text = document.getElementsByClassName("task__title")[0];
    text.append(taskPlace.value);
    taskPlace.value = "";
    let deleteButtons = document.getElementsByClassName("task__remove");
    for (let deleteButton of deleteButtons) {
        deleteButton.onclick = () => deleteButton.parentElement.remove();
    }
  }
}
button.addEventListener('click', addTask);

taskPlace.addEventListener("keyup", function(e) {
  if (e.keyCode === 13 && taskPlace.value.length > 0) {
    event.preventDefault();
    tasks.insertAdjacentHTML('beforeEnd', '<div class="task"><div class="task__title"></div><a href="#" class="task__remove">&times;</a></div>');

  }
})

