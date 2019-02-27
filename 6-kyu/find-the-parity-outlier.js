function findOutlier(integers) {
  const even = [];
  const odd = [];
  integers.forEach((int) => {
    if (int % 2 === 0) {
      even.push(int);
    } else {
      odd.push(int);
    }
  })
  if (even.length > odd.length) {
    return odd[0];
  } else {
    return even[0];
  }
}

findOutlier([0, 1, 2]);