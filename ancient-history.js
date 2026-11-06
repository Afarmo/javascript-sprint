function classifyDate(dateObject) {
  const now = new Date();
  const lastYear = new Date(now);
  const nextYear = new Date(now);

  if (dateObject.getTime() > lastYear.setFullyear(now.getFullYear() + 1)) {
    return "distant future";
  }

  if (dateObject.getTime() < nextYear.setFullyear(now.getFullYear() - 1)) {
    return "ancient";
  }

  if (dateObject.getTime() > now) {
    return "future";
  }

  if (dateObject.getTime() < now) {
    return "past";
  }
}
