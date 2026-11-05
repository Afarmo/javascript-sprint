const mathObj = {
  abs(value) {
    return Math.abs(value);
  },

  isEven(value) {
    return value % 2 === 0;
  },

  isOdd(value) {
    return value % 2 !== 0;
  },
  isStrictlyPositive(value) {
    return value > 0;
  },

  min(a, b) {
    return Math.min(a, b);
  },

  max(a, b) {
    return Math.max(a, b);
  },
};
