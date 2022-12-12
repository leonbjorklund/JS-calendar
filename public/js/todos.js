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


// let events = [];

//   const createToDo = (ev) => {
 
    
//     showNewEventCanvas();
//     ev.preventDefault();
//     let event = {
//       title: document.getElementById("input-event-title").value,
//       date: document.getElementById("input-event-date").value,
//       startTime: document.getElementById("input-event-start-time").value,
//       endTime: document.getElementById("input-event-end-time").value,
//     }
//     events.push(event);
//     document.forms[0].reset();
//     localStorage.setItem('eventList', JSON.stringify(events));

//     const eventBlock = document.createElement("div");
//     eventsCanvas.appendChild(eventBlock);
//     eventBlock.setAttribute("class", "event-block");
//     const createEventTitle = document.createElement("p");
//     const node = document.createTextNode(event.title);
//     createEventTitle.appendChild(node);
//     eventBlock.appendChild(createEventTitle);
//   }

//   document.addEventListener('DOMContentLoaded', () => {
//   createEventButton.addEventListener('click', createToDo);
//   });

// function createTodo(date, name) {
//   console.log(date);
//   console.log(name);
// }

// createTodo();
  


