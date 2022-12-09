/** Tracks current month displayed in calendar */
const calendarData = {
}

/** Coordinates functions responsible for the calendar's functionality. */
function runCalendar(month, year) {
    calendarData.monthNum = month;
    calendarData.year = year;
    getMonthName(month);
    // get date (perform in main.js)
    // send date to get month function
    // pass month name and year to head rendering function
    getDays(month, year);
    renderHead();
    // pass day array to day rendering function
    renderDays();
}

function getMonthName(month) {
    const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    calendarData.month = monthsList[month];
}

/** Renders info in calendar-head from data in calendarData object. */
function renderHead() {
    document.getElementById('open-month').innerText = calendarData.month;
    document.getElementById('open-year').innerText = calendarData.year;
}

/** Populates list of days in calendarData object. */
function getDays(month, year) {
    let date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
  }
  calendarData.days = days;
}

/** Gets days from calendarData object and renders a grid square for each day */
function renderDays() {
    renderBlanks();
    for (let i = 0; i < calendarData.days.length; i++) {
        const daySquare = document.createElement('div');
        daySquare.innerText = i + 1;
        daySquare.classList.add('day');
        document.getElementById('calendarWrapper').append(daySquare);
    }
}

/** Places invisible days on the grid to offset the first day of the month according to weekday. */
function renderBlanks() {
    console.log(calendarData.days[0].getDay());
    for (let i = 0; i < 7; i ++) {
        if (calendarData.days[0].getDay() === i + 1) {
            for (let ii = 0; ii < i; ii++) {
                const blankDay = document.createElement('div');
                blankDay.classList.add('blank');
                document.getElementById('calendarWrapper').append(blankDay);
        }
        }
    }
}

/**
 * Takes month and year strings from month object, renders to calendar-head.
 * @param {string} month 
 * @param {string} year 
 */
function renderCalHead(month, year) {
    // takes month and year and assigns to header text
}