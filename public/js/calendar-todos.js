// Get todos from local storage
function getMonthTodos() {
    const allLocalTodos = JSON.parse(localStorage.getItem('localItem'));
    const openMonthTodos = filterMonthTodos(allLocalTodos);
    renderTodoIcons(openMonthTodos);
}

// Get all from current month
function filterMonthTodos(allLocalTodos) {
    const openMonthTodos = [];
    for (const todo of allLocalTodos) {
        let splitDate = todo.date.split('-');
        if (parseInt(splitDate[1]) === openMonth.monthNr + 1) {
            openMonthTodos.push(todo);
        }
    }
    return openMonthTodos;
}

// Creating the icon elements

// Declare type here?

function renderTodoIcons(openMonthTodos) {
    const iconArray = createIconArray(openMonthTodos);
    createIconElements(iconArray);
}

function createIconArray(openMonthTodos) {
    class Icon {
        constructor(date, number) {
            this.date = date;
            this.number = number
        }
    }
    const iconArray = [];
    for (todo of openMonthTodos) {
        const todoDate = todo.date.split('-')[2];
        const iconIndex = iconArray.findIndex(icon => icon.date === todoDate);
        if (iconIndex >= 0) {
            iconArray[iconIndex].number += 1;
        } else {
            iconArray.push(new Icon(todoDate, 1));
        }
    }
    return iconArray;
}

function createIconElements(iconArray) {
    for (const icon of iconArray) {
        const iconDiv = document.createElement('div');
        iconDiv.innerText = icon.number;
        document.getElementById(icon.date).appendChild(iconDiv);
    }
}

// Store to some kind of variable

// Check variable for a todo from the current date during day square creation

// Show number of todos found

// Should update when a todo is added.
// Todos will have to be mapped to the calendar separately from it's rendering.
// Todos rendering can then be called again with each addition or removal of a todo.
// Perhaps only call the function if the addition or removal happens on the current openMonth to avoid unnecessary work.