function classifyDate(Date) {
  if (Date.getTime() < Date.now() - 1000 * 60 * 60) {
    return "ancient";
  }

  if (Date.getTime() > Date.now() + 1000 * 60 * 60) {
    return "distant future";
  }

  if (Date.getTime() > Date.now()) {
    return "future";
  } else {
    return "past";
  }
}
