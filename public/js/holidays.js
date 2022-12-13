/** Coordinates functions responsible for fetching data on national holidays and rendering it to the screen. */
async function getHols() {
    const allDays = await getAllDays();
    const hollibobs = getHolArray(allDays);
    renderHollibobs(hollibobs);
}


/**
 * Fetches a data on each day of the month from the Svenska Helgdagar API.
 * @returns {Array.<Object>} All day objects in the month.
 */
async function getAllDays() {
    const month = await fetch(`http://sholiday.faboul.se/dagar/v2.1/${openMonth.year}/${openMonth.monthNr + 1}`)
        .then((response) => response.json());
    return month.dagar;
}

/**
 * Filters out holiday day objects from days of the month.
 * @param {Array.<Object>} allDays All day objects in the month.
 * @returns {Array.<Object} An array of holiday day objects.
 */
function getHolArray(allDays) {
    const hollibobs = [];
    for (const day of allDays) {
        if (day.hasOwnProperty('helgdag')) {
            hollibobs.push(day);
        }
    }
    return hollibobs;
}

/**
 * Renders holiday names to the relevent day on screen.
 * @param {Array.<Object>} hollibobs An array of holiday day objects. 
 */
function renderHollibobs(hollibobs) {
    for (const day of hollibobs) {
    const splitDate = day.datum.split('-');
    const holidate = parseInt(splitDate[2]);
    const holidiv = document.createElement('div');
    holidiv.innerText = day.helgdag;
    document.getElementById(holidate).appendChild(holidiv);
    }
}