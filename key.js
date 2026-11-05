function getValueFromKey(object, key) {
  return object[key];
}

function addKeyValuePairs(object, secondObject) {
  const combine = { ...object, ...secondObject };
  return combine;
}
