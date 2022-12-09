/** Coordinates functions responsible for the calendar's functionality. */
function runCalendar(month, year) {
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
 * @param {array} days 
 */
function renderDays(days) {
    renderBlanks(days);
    for (let i = 0; i < days.length; i++) {
        const daySquare = document.createElement('div');
        daySquare.innerText = i + 1;
        daySquare.classList.add('day');
        document.getElementById('calendarWrapper').append(daySquare);
    }
}

/**
 * Renders invisible squares to the screen to place the first day of the month in the right column.
 * @param {array} days 
 */
function renderBlanks(days) {
    for (let i = 0; i < 7; i ++) {
        if (days[0].getDay() === i + 1) {
            for (let ii = 0; ii < i; ii++) {
                const blankDay = document.createElement('div');
                blankDay.classList.add('blank');
                document.getElementById('calendarWrapper').append(blankDay);
        }
        }
    }
}