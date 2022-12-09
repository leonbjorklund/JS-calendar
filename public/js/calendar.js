/** Tracks current month displayed in calendar */
const calendarData = {
    month: 'December', // Eventually updates with date on page load, other months on navigation.
    monthNum: '12',
    year: '2022',
}

/** Coordinates functions responsible for the calendar's functionality. */
async function runCalendar() {
    // get date (perform in main.js)
    // send date to get month function
    await getData();
    // pass month name and year to head rendering function
    renderHead();
    // pass day array to day rendering function
    renderDays();
}

/** Fetches data on month's days from API, parses json, adds data to calendarData object. */
async function getData() {
    const data = await fetch(`http://sholiday.faboul.se/dagar/v2.1/${calendarData.year}/${calendarData.monthNum}`)
    .then((response) => response.json());
    calendarData.dagar = data.dagar;
    console.log(calendarData.dagar);
}

/** Renders info in calendar-head from data in calendarData object. */
function renderHead() {
    document.getElementById('open-month').innerText = calendarData.month;
    document.getElementById('open-year').innerText = calendarData.year;
}


/** Gets days from calendarData object and renders a grid square for each day */
function renderDays() {
    renderBlanks();
    for (let i = 0; i < calendarData.dagar.length; i++) {
        const daySquare = document.createElement('div');
        daySquare.innerText = i + 1;
        daySquare.classList.add('day');
        document.getElementById('calendarWrapper').append(daySquare);
    }
}

/** Places invisible days on the grid to offset the first day of the month according to weekday. */
function renderBlanks() {
    const sveDays = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Sondag'];
    for (let i = 0; i < 7; i ++) {
        if (calendarData.dagar[0].veckodag === sveDays[i]) {
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