addEventListener("DOMContentLoaded", main);

function main() {
  const date = new Date();
  runCalendar(date.getMonth(), date.getFullYear());
  createTimeDateMonthMsg();
  setInterval(createTimeDateMonthMsg, 1000);
}
