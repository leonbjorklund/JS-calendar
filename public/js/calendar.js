/** Coordinates functions responsible for the calendar's functionality. */
async function runCalendar() {
    // get date
    // send date to get month function
    const month = await getMonth();
    // pass month name and year to head rendering function
    // pass day array to day rendering function
}

/** Fetches data on month's days from API, parses json, returns object. */
async function getMonth() {
    const month = await fetch('http://sholiday.faboul.se/dagar/v2.1/2022/12')
    .then((response) => response.json())
    .then((data) => console.log(data));
    return month;
}

/**
 * Takes month and year strings from month object, renders to calendar-head.
 * @param {string} month 
 * @param {string} year 
 */
function renderCalHead(month, year) {
    // takes month and year and assigns to header text
}

function renderDays() {
    // takes day array
    // work out starting point by week day
    // loop and break at matching weekday
    // get square number
    // loop following days and increase square number by one each iteration

    // THOUGHTS
    // This means that all squares must be on the DOM but invisible until activated by script
}