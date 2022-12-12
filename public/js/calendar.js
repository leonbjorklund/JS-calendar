/** Tracks open month and contains data. */
const openMonth = {
    monthNr: 0,
    monthName: '',
    year: 0,
    days: [],
    getLastDay() {
        let lastDay = this.days[this.days.length];
        lastDay = this.makeSundaySevenAgain(lastDay);
        return lastDay;
    },
    getFirstDay() {
        let firstDay = this.days[0];
        firstDay = this.makeSundaySevenAgain(firstDay);
        return firstDay;
    },
    makeSundaySevenAgain(dayNr) {
        if (dayNr === 0) {
            dayNr = 7;
        }
        return dayNr;
    }
}

/** Coordinates functions responsible for the calendar's functionality. */
function runCalendar(month, year) {
    addMonthChangeListeners();
    renderCalendar(month, year);
}

function renderCalendar(month, year) {
    openMonth.monthNr = month;
    openMonth.year = year;
    getMonthData();
    renderHead();
    renderDays();
}

function getMonthData() {
    openMonth.monthName = getMonthName();
    getDays();
}

/** Gets the month's name from an array. */
function getMonthName() {
    const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthsList[openMonth.monthNr];
}

/** Renders month name and year to calendar head. */
function renderHead() {
    document.getElementById('open-month').innerText = openMonth.monthName;
    document.getElementById('open-year').innerText = openMonth.year;
}

/** Creates an array of dates in the open month and assigns it to the days property */
function getDays() {
    let date = new Date(openMonth.year, openMonth.monthNr, 1);
    const days = [];
    while (date.getMonth() === openMonth.monthNr) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
  }
  openMonth.days = days;
}

/** Renders days of the open month to the screen. */
function renderDays() {
    const calendarWrapper = document.getElementById('calendarWrapper');
    const lastDay = openMonth.getLastDay();
    renderBlanks(calendarWrapper);
    createDaySquares(lastDay, calendarWrapper);
    addLastBorder(lastDay, calendarWrapper);
}

/**
 * Renders invisible squares to the screen to place the first day of the month in the right column.
 * @param {HTMLDivElement} calendarWrapper
 */
function renderBlanks(calendarWrapper) {
    for (let i = 0; i < 7; i ++) {
        if (openMonth.getFirstDay() === i + 1) {
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
 * Creates a square on the calendar for each day of the months with dynamic borders.
 * @param {number} lastDay Weekday of the last day of the month as number.
 * @param {HTMLDivElement} calendarWrapper 
 */
function createDaySquares(lastDay, calendarWrapper) {
    for (let i = 0; i < openMonth.days.length; i++) {
        const daySquare = document.createElement('div');
        daySquare.innerText = i + 1;
        daySquare.classList.add('day');
        setBorder(i, daySquare, lastDay);
        calendarWrapper.append(daySquare);
    }
}

/**
 * Adds borders to calendar days dynamically
 * @param {number} i The iteration of the square construction loop.
 * @param {HTMLDivElements} daySquare The calendar square currently under construction.
 * @param {number} lastDay Weekday of the last day of the month described as a number.
 */
function setBorder(i, daySquare, lastDay) {
    if (i >= 0 && openMonth.days[i].getDay() != 1) {
        daySquare.classList.add('border-left');
    };
    const lengthMinusLastRow = openMonth.days.length - lastDay;
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
    if (lastDay != 7) {
        const lastSquare = document.createElement('div');
        lastSquare.classList.add('day');
        lastSquare.classList.add('border-left');
        calendarWrapper.append(lastSquare);
    }
}


function addMonthChangeListeners() {
    document.getElementById('previous-month-button').addEventListener('click', monthDown)
    addEventListener('keypress', (e) => {
        if (e.key('ArrowLeft')) {
            monthDown();
        }
    })
    document.getElementById('next-month-button').addEventListener('click', monthUp)
}

/** Changes view to the next month */
function monthDown() {
    clearDays();
    let month = openMonth.monthNr - 1;
    let year = openMonth.year;
    if (month < 0) {
        year -= 1;
        month = 11;
    }
    renderCalendar(month, year);
}

/** Changes view to the previous month */
function monthUp(month, year) {
    clearDays();
    let month = openMonth.monthNr + 1;
    let year = openMonth.year;
    if (month > 11) {
        year += 1;
        month = 0;
    }
    console.log('Hallå');
    renderCalendar(month, year);
}

/** Cleard current days of the month from page. */
function clearDays() {
    document.getElementById('calendarWrapper').innerHTML = '';
};