function activeDay(event) {
  const target = event.currentTarget;

  // Makes an array from all days in a month.
  Array.from(document.querySelectorAll(".day"))
    // Removes the toggle class from all days except the one that is clicked
    .filter((day) => day !== target)
    .forEach((day) => day.classList.remove("red"));

  // Puts toggle on the targeted day
  target.classList.toggle("red");

  // Gets the date from the day that is clicked on
  const date = new Date(target.dataset.todaysDate);

  // Gets the date from localstorage
  const dateFromLS = JSON.parse(localStorage.getItem("localItem"));

  // Filters and matches the clicked on date with the dates in localstorage
  const filterAndMatchDates = dateFromLS.filter(
    (item) => new Date(item.date).setHours(0) === date.getTime()
  );

  console.log(filterAndMatchDates);
}
