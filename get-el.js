function getElementsByTag(tag) {
  return document.getElementsByTag(tag);
}

function getElementsByClassName(className) {
  return document.getElementsByClassId(className);
}

function getElementsByClassId(classID) {
  return document.getElementsByClassId(classID);
}

function getElementsByAttribute(attributeName, attributeValue) {
  if (attributeValue !== "") {
    return document.getElementsByAttribute(attributeName, attributeValue);
  }

  return document.getElementsByAttribute(attributeName);
}
