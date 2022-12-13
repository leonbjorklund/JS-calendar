/** Tracks open month and contains data. */
const openMonth = {
    /** 
     * Number of the current month 0-11.
     * @type {number}
     */
    monthNr: 0,
    /**
     * Name of th current month.
     * @type {string}
     */
    monthName: '',
    /**
     * Number of the current year.
     * @type {number}
     */
    year: 0,
    /**
     * Array of days of days of the month.
     * @type {array}
     */
    days: [],
    /**
     * Weekday number of the first day of the month, 1-7.
     * @type {number}
     */
    firstDay: 0,
    /**
     * Weekday number of the last day of the month, 1-7.
     * @type {number}
     */
    lastDay: 0,
}

/** Calls functions to add button event listeners and render opening month. */
function runCalendar(month, year) {
    addMonthChangeListeners();
    renderCalendar(month, year);
}

/** Sets new open month and calls functions for getting data and adding functionality. */
function renderCalendar(month, year) {
    openMonth.monthNr = month;
    openMonth.year = year;
    getMonthData();
    renderHead();
    renderDays();
    getHols();
}


// FUNCTIONS POPULATING THE MONTH OBJECT WITH DATA

/** Calls functions which populate the openMonth object with data to be rendered. */
function getMonthData() {
    openMonth.monthName = getMonthName();
    getDays();
    getFirstDay();
    getLastDay();
}

/** Gets the month's name from an array. */
function getMonthName() {
    const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthsList[openMonth.monthNr];
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

/* Gets the weekday number of the first day of the month. Used for border-drawing functions below */
function getFirstDay() {
        let firstDay = openMonth.days[0].getDay();
        firstDay = makeSundaySevenAgain(firstDay);
        openMonth.firstDay = firstDay;
    };

/* Gets the weekday number of the last day of the month. Used for border-drawing functions below */
function getLastDay() {
    let lastDay = openMonth.days[openMonth.days.length - 1].getDay();
    lastDay = makeSundaySevenAgain(lastDay);
    openMonth.lastDay = lastDay;
}

/** Converts number for Sunday from 0 to 7 */
function makeSundaySevenAgain(dayNr) {
    if (dayNr === 0) {
        dayNr = 7;
    }
    return dayNr;
};


// RENDERING FUNCTIONS

/** Renders month name and year to calendar head. */
function renderHead() {
    document.getElementById('open-month').innerText = openMonth.monthName;
    document.getElementById('open-year').innerText = openMonth.year;
}

/** Renders days of the open month to the screen. */
function renderDays() {
    const calendarWrapper = document.getElementById('calendarWrapper');
    renderBlanks(calendarWrapper);
    createDaySquares(calendarWrapper);
    addLastBorder(calendarWrapper);
}

/**
 * Renders invisible squares to the screen to place the first day of the month in the right column.
 * @param {HTMLDivElement} calendarWrapper
 */
function renderBlanks(calendarWrapper) {
    for (let i = 0; i < 7; i ++) {
        if (openMonth.firstDay === i + 1) {
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
 * @param {HTMLDivElement} calendarWrapper 
 */
function createDaySquares(calendarWrapper) {
    for (let i = 0; i < openMonth.days.length; i++) {
        const daySquare = document.createElement('div');
        daySquare.innerText = i + 1;
        daySquare.classList.add('day');
        daySquare.id = i + 1;
        setBorder(i, daySquare);
        calendarWrapper.append(daySquare);
    }
}

/**
 * Adds borders to calendar days dynamically
 * @param {number} i The iteration of the square construction loop.
 * @param {HTMLDivElements} daySquare The calendar square currently under construction.
 */
function setBorder(i, daySquare) {
    if (i >= 0 && openMonth.days[i].getDay() != 1) {
        daySquare.classList.add('border-left');
    };
    const lengthMinusLastRow = openMonth.days.length - openMonth.lastDay;
    if (i < lengthMinusLastRow) {
        daySquare.classList.add('border-bottom');
    }
}

/**
 * Adds a closing border if needed.
 * @param {HTMLDivElement} calendarWrapper 
 */
function addLastBorder(calendarWrapper) {
    if (openMonth.lastDay != 7) {
        const lastSquare = document.createElement('div');
        lastSquare.classList.add('day');
        lastSquare.classList.add('border-left');
        calendarWrapper.append(lastSquare);
    }
}


// NAVIGATION FUNCTIONS

/** Adds listeners for changing month to previous and next */
function addMonthChangeListeners() {
    document.getElementById('previous-month-button').addEventListener('click', monthDown);
    addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            monthDown();
        }
    })
    document.getElementById('next-month-button').addEventListener('click', monthUp);
    addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            monthUp();
        }
    })
}

/** Changes view to the previous month. */
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

/** Changes view to the next month. */
function monthUp() {
    clearDays();
    let month = openMonth.monthNr + 1;
    let year = openMonth.year;
    if (month > 11) {
        year += 1;
        month = 0;
    }
    renderCalendar(month, year);
}

/** Clears current days of the month from page. */
function clearDays() {
    document.getElementById('calendarWrapper').innerHTML = '';
};