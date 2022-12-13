async function getHols() {
    // Get the whole month
    const allDays = await getAllDays();
    // Get days from month that are helgdagar and assign to array
    // Send array to function which creates div and appends to right square

    // Will need to create CSS
    // Will need to add unique IDs to squares on creation on calendar.js
}

// URL: http://sholiday.faboul.se/dagar/v2.1/2015/02
// const hollibobs = await fetch('http://sholiday.faboul.se/dagar/v2.1/$`year`/$`month`')

async function getAllDays() {
    const allDays = await fetch(`http://sholiday.faboul.se/dagar/v2.1/${openMonth.year}/${openMonth.monthNr}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
}