function getFirstElement(array) {
  if (array.length === 0) {
    return undefined;
  }

  return array[0];
}

function getLastElement(array) {
  if (array.length === 0) {
    return undefined;
  }

  return array[array.length - 1];
}

function getElementByIndex(array, index) {
  if (array.length === 0) {
    return undefined;
  }

  return array[index];
}
