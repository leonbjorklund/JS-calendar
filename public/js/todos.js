// Initialize event listeners
function runTodo() {
  const newEventButton = document.getElementById("new-event-button");
  const saveTaskButton = document.getElementById("save-task-button");
  const cancelEventButton = document.getElementById("cancel-event-button");
  const formInput = document.getElementById("input-form");
  
  window.addEventListener('load', showItem);
  newEventButton.addEventListener('click', toggleCreateEventCanvas);
  // newEventButton.addEventListener('click', () => {
  //   saveTaskButton.removeEventListener('click',  function () {
  //     saveEdit(index);
  //   });
  //   saveTaskButton.addEventListener('click', createTodo);
  // });
  saveTaskButton.addEventListener('click', createTodo);
  cancelEventButton.addEventListener('click', toggleCreateEventCanvas);
  formInput.addEventListener('input', () => (saveTaskButton.innerHTML = "Save Task"));
}

// Toggle show and hide on new-event-creator
function toggleCreateEventCanvas() {
  const newEventCanvas = document.getElementById("new-event-canvas");
  const saveTaskButton = document.getElementById("save-task-button");
  if (newEventCanvas.style.display === "block") {
    newEventCanvas.style.display = "none";
  } else {
    newEventCanvas.style.display = "block";
  }
  saveTaskButton.innerHTML = "Save Task";
}

function createTodo() {
  const newEventCanvas = document.getElementById("new-event-canvas");
  const saveTaskButton = document.getElementById("save-task-button");

  const titleInput = document.getElementById("title-input");
  const dateInput = document.getElementById("date-input");
  const startTimeInput = document.getElementById("start-time-input");
  const endTimeInput = document.getElementById("end-time-input");
  
  // creating task-object
  let task = {
    title: titleInput.value,
    date: dateInput.value,
    startTime: startTimeInput.value,
    endTime: endTimeInput.value,
  }

  // close create event canvas when new task is created
  toggleCreateEventCanvas();

  // checking if there exist user-input
  const hasValue = !Object.values(task).every((x) => x === null || x === "");

  // if user-input exists, give to local-storage item "localItem"
  if (hasValue) {
    let taskList = getTaskList();
  // push task-object to taskList array and set localStorage-item
    taskList.push(task);
    saveTaskList(taskList);
  } else {
    newEventCanvas.style.display = "block";
    saveTaskButton.innerHTML = "add atleast one value";
  }
  // resetting input-fields
  resetForm();

  //displaying task
  showItem();
}

function showItem() {

  let taskList = getTaskList();
  let html = "";
  let itemShow = document.getElementById("tasks-canvas");

  // create an unordered task list to hold all tasks
  html += `<ul data-cy="todo-list">`;
  taskList.forEach((_, index) => {
    // add a new list item for each task
    html += `<li class="event-block">`
    // only add fields (e.g. title, date etc) if they are not empty
    for (const elem in taskList[index]){
      if (taskList[index][elem] != "") {
        html += `${taskList[index][elem]}</br>`
      }
    }
    // add a delete and an edit button for each task
    html += `<button data-cy="delete-todo-button" onclick="removeTodo(${index})">x</button>`
    html += `<button data-cy="edit-todo-button" onclick="editTodo(${index})">Edit</button>`
    // close the list item, done with current task
    html += "</li>"
  ;
  });
  // close the unordered task list
  html += "</ul>";
  // give list to tasks-canvas div
  itemShow.innerHTML = html;
}

// remove item
function removeTodo(index) {
  let taskList = getTaskList()
  taskList.splice(index, 1);
  saveTaskList(taskList);
  showItem();
}

function editTodo (index) {

  toggleCreateEventCanvas();

  const saveTaskButton = document.getElementById("save-task-button");
  saveTaskButton.innerHTML = "Edit Task";
  saveTaskButton.removeEventListener('click', createTodo);

  const titleInput = document.getElementById("title-input");
  const dateInput = document.getElementById("date-input");
  const startTimeInput = document.getElementById("start-time-input");
  const endTimeInput = document.getElementById("end-time-input");
  let taskList = getTaskList();

  titleInput.value = taskList[index].title;
  dateInput.value = taskList[index].date;
  startTimeInput.value = taskList[index].startTime;
  endTimeInput.value = taskList[index].endTime;

  saveTaskButton.onclick = function() {
    saveEdit(index);
    saveTaskButton.onclick = createTodo;
  };
}

function saveEdit(index) {

  const titleInput = document.getElementById("title-input");
  const dateInput = document.getElementById("date-input");
  const startTimeInput = document.getElementById("start-time-input");
  const endTimeInput = document.getElementById("end-time-input");

  let taskList = getTaskList();
  taskList[index].title = titleInput.value;
  taskList[index].date = dateInput.value;
  taskList[index].startTime = startTimeInput.value;
  taskList[index].endTime = endTimeInput.value;

  saveTaskList(taskList);
  showItem();
  toggleCreateEventCanvas();
  resetForm();

}

// returns the stored task list or a new task list if it doesn't exist
function getTaskList() {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  if (localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }
  return taskList;
}

function saveTaskList(taskList) {
  localStorage.setItem("localItem", JSON.stringify(taskList));
}

function resetForm () {
  const titleInput = document.getElementById("title-input");
  const dateInput = document.getElementById("date-input");
  const startTimeInput = document.getElementById("start-time-input");
  const endTimeInput = document.getElementById("end-time-input");
  titleInput.value = "";
  dateInput.value = "";
  startTimeInput.value = "";
  endTimeInput.value = "";
}

// if we want to have a  "remove-all tasks button"

// function clearAllTask() {
//   localStorage.clear();
//   showItem();
// }



