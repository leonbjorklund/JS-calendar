function createTimeDateMonthMsg() {
  const date = new Date().toLocaleDateString("en-SE", {
    day: "numeric",
    month: "short",
  });

  const englishDayName = new Date().toLocaleDateString("en-SE", {
    weekday: "long",
  });

  const time = new Date().toLocaleTimeString("sv-SE", {
    hour: "numeric",
    minute: "numeric",
  });

  const today = new Date();
  const year = today.getFullYear();

  document.getElementById("displayCurrentTime").textContent = time;

  document.getElementById(
    "displayTodaysDay"
  ).textContent = `Today ${englishDayName}`;

  document.getElementById("displayTodaysDateMonth").textContent = ` ${date}`;
}
