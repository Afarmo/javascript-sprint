function classifyDate(dateObject) {
  const now = new Date();
  const lastYear = new Date(now);
  const nextYear = new Date(now);

  if (dateObject.getTime() > nextYear.setFullYear(now.getFullYear() + 1)) {
    return "distant future";
  }

  if (dateObject.getTime() < lastYear.setFullYear(now.getFullYear() - 1)) {
    return "ancient";
  }

  if (dateObject.getTime() > now) {
    return "future";
  }

  return "past";
}
