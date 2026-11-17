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
  if (attrValue === undefined) {
    return document.querySelectorAll(`[${attrName}]`);
  }
  return document.querySelectorAll(`[${attrName}="${attrValue}"]`);
}
