function classifyDate(dateObject) {
  const now = Date.now();
  if (dateObject.getTime() > now.setFullyear(now.getFullYear() + 1)) {
    return "distant future";
  }

  if (dateObject.getTime() < now.setFullyear(now.getFullYear() - 1)) {
    return "ancient";
  }

  if (dateObject.getTime() > now) {
    return "future";
  }

  if (dateObject.getTime() < now) {
    return "past";
  }
}
