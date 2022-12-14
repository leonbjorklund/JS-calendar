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
class icon {
    constructor(date, number) {
        this.date = date;
        this.number = number
    }
}

function renderTodoIcons(openMonthTodos) {
    // Loops through objects, checks date
    for (todo of openMonthTodos) {
        const todoDate = todo.date.split('-')[2];
    }
    // Creates a new object with class icon
    // If already exsists, adds to number
    // Adds object to array
    // Send array to rendering function
}

// Store to some kind of variable

// Check variable for a todo from the current date during day square creation

// Show number of todos found

// Should update when a todo is added.
// Todos will have to be mapped to the calendar separately from it's rendering.
// Todos rendering can then be called again with each addition or removal of a todo.
// Perhaps only call the function if the addition or removal happens on the current openMonth to avoid unnecessary work.