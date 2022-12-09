/** Coordinates functions responsible for the calendar's functionality. */
function runCalendar(month, year) {
    addMonthChangeListeners(month, year);
    renderCalendar(month, year);
}

function renderCalendar(month, year) {
    const monthName = getMonthName(month);
    getDays(month, year);
    renderHead(monthName, year);
}

/** Gets the month's name from an array. */
function getMonthName(month) {
    const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthsList[month];
}

/**
 * Renders arguments to calendar head.
 * @param {string} monthName 
 * @param {number} year 
 */
function renderHead(monthName, year) {
    document.getElementById('open-month').innerText = monthName;
    document.getElementById('open-year').innerText = year;
}

/**
 * Gets days in month send via arguments. Passes onwards to functions the render days to the screen.
 * @param {number} month 
 * @param {number} year 
 */
function getDays(month, year) {
    let date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
  }
  renderDays(days);
}

/**
 * Takes array of dates in month as parameter. Renders to the screen individually in correct columns.
 * @param {array} days An array containg the dates of all days in the month.
 */
function renderDays(days) {
    const calendarWrapper = document.getElementById('calendarWrapper');
    const lastDay = days[days.length - 1].getDay();
    renderBlanks(days, calendarWrapper);
    createDaySquares(days, lastDay, calendarWrapper);
    addLastBorder(lastDay, calendarWrapper);
}

/**
 * Creates a square on the calendar for each day of the months width dynamic borders.
 * @param {array} days An array containg the dates of all days in the month.
 * @param {number} lastDay Weekday of the last day of the month described as a number.
 * @param {HTMLDivElement} calendarWrapper 
 */
function createDaySquares(days, lastDay, calendarWrapper) {
    for (let i = 0; i < days.length; i++) {
        const daySquare = document.createElement('div');
        daySquare.innerText = i + 1;
        daySquare.classList.add('day');
        setBorder(days, i, daySquare, lastDay);
        calendarWrapper.append(daySquare);
    }
}

/**
 * Renders invisible squares to the screen to place the first day of the month in the right column.
 * @param {array} days An array containg the dates of all days in the month.
 */
function renderBlanks(days, calendarWrapper) {
    for (let i = 0; i < 7; i ++) {
        if (days[0].getDay() === i + 1) {
            for (let ii = 0; ii < i; ii++) {
                const blankDay = document.createElement('div');
                blankDay.classList.add('day');
                blankDay.classList.add('blank');
                blankDay.classList.add('border-bottom');
                calendarWrapper.append(blankDay);
        }
        }
    }
}

/**
 * Adds borders to calendar days dynamically
 * @param {array} days An array containg the dates of all days in the month.
 * @param {number} i The iteration of the square construction loop.
 * @param {HTMLDivElements} daySquare The calendar square currently under construction.
 * @param {number} lastDay Weekday of the last day of the month described as a number.
 */
function setBorder(days, i, daySquare, lastDay) {
    if (i >= 0 && days[i].getDay() != 1) {
        daySquare.classList.add('border-left');
    };
    const lengthMinusLastRow = days.length - lastDay;
    console.log(lengthMinusLastRow, days.length);
    if (i < lengthMinusLastRow) {
        daySquare.classList.add('border-bottom');
    }
}

/**
 * Adds a closing border if needed.
 * @param {number} lastDay Weekday of the last day of the month described as a number.
 * @param {HTMLDivElement} calendarWrapper 
 */
function addLastBorder(lastDay, calendarWrapper) {
    if (lastDay != 0) {
        const lastSquare = document.createElement('div');
        lastSquare.classList.add('day');
        lastSquare.classList.add('border-left');
        calendarWrapper.append(lastSquare);
    }
}

function addMonthChangeListeners(month, year) {
    document.getElementById('previous-month-button').addEventListener('click', () => {
        clearDays();
        month--;
        if (month < 0) {
            year--;
            month = 11;
        }
        renderCalendar(month, year);
    })
    document.getElementById('next-month-button').addEventListener('click', () => {
        clearDays();
        month++;
        if (month > 11) {
            year++;
            month = 0;
        }
        renderCalendar(month, year);
    })
}

function clearDays() {
    document.getElementById('calendarWrapper').innerHTML = '';
};