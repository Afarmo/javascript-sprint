function sumNestedArray(array) {
  const flatten = array.flat(Infinity);
  const filter = flatten.filter((value) => typeof value === "number");
  const sum = filter.reduce((total, value) => total + value, 0);

  return sum;
}
