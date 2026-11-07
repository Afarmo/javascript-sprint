function printPrettyDate(dateObject) {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const timeOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const date = dateObject.toLocaleDateString("en-US", dateOptions);
  const time = dateObject.toLocaleTimeString("en-US", timeOptions);

  console.log(`Today is ${date}, and the time is ${time}`);
}
