const newEventButton = document.getElementById("new-event-button");
const newEventCanvas = document.getElementById("new-event-canvas");

newEventButton.addEventListener('click', showNewEventCanvas);

function showNewEventCanvas () {
  if (newEventCanvas.style.display === "block") {
    newEventCanvas.style.display = "none";
  }
  else {
    newEventCanvas.style.display = "block";
  }
}

const createEventButton = document.getElementById("create-event-button");
const eventsCanvas = document.getElementById("events-canvas");
const dateInput = document.getElementById("input-event-date");

const startTime = document.getElementById("input-event-start-time");
const endTime = document.getElementById("input-event-end-time");


let events = [];

const createToDo = (ev) => {
  
  showNewEventCanvas();
  ev.preventDefault();

  let event = {
    title: document.getElementById("input-event-title").value,
    date: document.getElementById("input-event-date").value,
    startTime: document.getElementById("input-event-start-time").value,
    endTime: document.getElementById("input-event-end-time").value,
  }

  events.push(event);
  document.forms[0].reset();
  localStorage.setItem('eventList', JSON.stringify(events));

  const eventBlock = document.createElement("div");
  eventBlock.setAttribute("class", "event-block");
  eventsCanvas.appendChild(eventBlock);

  const createEventTitle = document.createElement("p");
  createEventTitle.setAttribute("class", "event-text");
  const giveTitleText = document.createTextNode(event.title);
  eventBlock.appendChild(createEventTitle);
  createEventTitle.appendChild(giveTitleText);
  eventBlock.appendChild(createEventTitle);

  const createDate = document.createElement("p");
  createDate.setAttribute("class", "event-text");
  const giveDate = document.createTextNode(event.date);
  eventBlock.appendChild(createDate);
  createDate.appendChild(giveDate);

  const createStartTime = document.createElement("p");
  createStartTime.setAttribute("class", "event-time");
  const giveStartTime = document.createTextNode(event.startTime + " to ");
  eventBlock.appendChild(createStartTime);
  createStartTime.appendChild(giveStartTime);

  const createEndTime = document.createElement("p");
  createEndTime.setAttribute("class", "event-time");
  const giveEndTime = document.createTextNode(event.endTime);
  eventBlock.appendChild(createEndTime);
  createEndTime.appendChild(giveEndTime);
  
}

document.addEventListener('DOMContentLoaded', () => {
  createEventButton.addEventListener('click', createToDo);
});

  


