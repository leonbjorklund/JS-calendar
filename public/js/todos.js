document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', showItem);
  newEventButton.addEventListener('click', showNewEventCanvas);
  addTaskButton.addEventListener("click", createTodo);
  cancelEventButton.addEventListener('click', showNewEventCanvas);
  formInput.addEventListener('input', () => (addTaskButton.innerHTML = "Create Event"));
});

const newEventButton = document.getElementById("new-event-button");
const newEventCanvas = document.getElementById("new-event-canvas");
const cancelEventButton = document.getElementById("cancel-event-button");

// Toggle show and hide on new-event-creator

function showNewEventCanvas() {
    if (newEventCanvas.style.display === "block") {
      newEventCanvas.style.display = "none";
    } else {
      newEventCanvas.style.display = "block";
    }
    addTaskButton.innerHTML = "Create Task";
  }

const formInput = document.getElementById("input-form");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const startTimeInput = document.getElementById("start-time-input");
const endTimeInput = document.getElementById("end-time-input");

const addTaskButton = document.getElementById("add-task-button");

function createTodo() {

  // creating task-object
  let task = {
    title: titleInput.value,
    date: dateInput.value,
    startTime: startTimeInput.value,
    endTime: endTimeInput.value,
  }

  // close new-event canvas when new task is created
  showNewEventCanvas();

  // checking if there exist user-input
  const hasValue = !Object.values(task).every((x) => x === null || x === "");

  // if user-input exists, give to local-storage item "localItem"
  if (hasValue) {
    let localItems = JSON.parse(localStorage.getItem("localItem"));

  // if localItems empty, set array to zero, otherwise set array taskList = localStorage item.
    if (localItems === null) {
      taskList = [];
    } else {
      taskList = localItems;
    }
  
  // push task-object to taskList array and set localStorage-item
    taskList.push(task);
    localStorage.setItem("localItem", JSON.stringify(taskList));
  } else {
    newEventCanvas.style.display = "block";
    addTaskButton.innerHTML = "add atleast one value";
  }
  // resetting input-fields
  titleInput.value = "";
  dateInput.value = "";
  startTimeInput.value = "";
  endTimeInput.value = "";

  showItem();
}

function showItem() {

  // same as above
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  if (localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }

  let html = "";
  let itemShow = document.getElementById("tasks-canvas");

  // creating HTML-elements and placing input-values
  taskList.forEach((element, index) => {
    html += `
  <div class="task-block">
  
  <div class="event-text">${taskList[index].title}</div>
  <div class="event-text">${taskList[index].date}</div>
  <div class="event-text">${taskList[index].startTime}</div>
  <div class="event-text">${taskList[index].endTime}</div>
 
  <button data-cy="delete-todo-button” id="delete-task" onclick="removeTodo(${index})">x</button>

  </div>
  `;
  });
  itemShow.innerHTML = html;
}

// remove item
function removeTodo(index) {
  console.log("hej");
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  taskList.splice(index, 1);
  localStorage.setItem("localItem", JSON.stringify(taskList));
  showItem();
}

// if we want to have a  "remove-all tasks button"

// function clearAllTask() {
//   localStorage.clear();
//   showItem();
// }

