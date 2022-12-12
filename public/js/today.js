function createTimeDateMonthMsg() {
  const date = new Date().toLocaleDateString("en-SE", {
    day: "numeric",
    weekday: "long",
    month: "long",
  });

  const time = new Date().toLocaleTimeString("sv-SE", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  document.getElementById(
    "timeDayDate"
  ).textContent = `The time is: ${time} and the date is ${date}`;
}
