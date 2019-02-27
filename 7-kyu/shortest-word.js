function findShort(s) {
  return Math.min(...s
    .split(' ')
    .map((word) => {
      return word.length;
    }))
};