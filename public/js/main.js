addEventListener("DOMContentLoaded", main);

/** Creates a date object for the current date and passes it to the functions
 * that runs the various elements of the page.
 */
function main() {
  const date = new Date();
  runCalendar(date.getMonth(), date.getFullYear());
  createTimeDateMonthMsg();
  setInterval(createTimeDateMonthMsg, 1000);
}
