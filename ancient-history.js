function classifyDate(dateObject) {
  if (dateObject.getTime() < Date.now() - 1000 * 60 * 60) {
    return "ancient";
  }

  if (dateObject.getTime() > Date.now() + 1000 * 60 * 60) {
    return "distant future";
  }

  if (dateObject.getTime() > Date.now()) {
    return "future";
  } else {
    return "past";
  }
}
