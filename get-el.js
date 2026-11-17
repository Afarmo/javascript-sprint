function getElementsByTag(tag) {
  return document.getElementsByTagName(tag);
}

function getElementsByClassName(className) {
  return document.getElementsByClassName(className);
}

function getElementById(classID) {
  return document.getElementById(classID);
}

function getElementsByAttribute(attrName, attrValue) {
  if (attrValue !== "") {
    return document.querySelectorAll(`[${attrName}="${attrValue}"]`);
  }
  return document.querySelectorAll(`[${attrName}]`);
}
