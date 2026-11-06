function classifyDate(dateObject) {
  if (
    dateObject.getTime() > Date.now() &&
    dateObject.getTime() <= Date.now() + 1000 * 60 * 60 * 365
  ) {
    return "future";
  }

  if (
    dateObject.getTime() <= Date.now() &&
    dateObject.getTime() >= Date.now() - 1000 * 60 * 60 * 365
  ) {
    return "past";
  }

  if (dateObject.getTime() < Date.now()) {
    return "ancient";
  }

  if (dateObject.getTime() > Date.now()) {
    return "distant future";
  }
}
