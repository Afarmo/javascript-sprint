function classifyDate(dateObject) {
  const now = new Date.now();
  if (dateObject.getTime() > now.setFullyear() + 1) {
    return "distant future";
  }

  if (dateObject.getTime() > now.setFullyear() - 1) {
    return "past";
  }

  if (dateObject.getTime() < now) {
    return "past";
  }

  if (dateObject.getTime() > now) {
    return "future";
  }
}
