function XO(str) {
  let exes = 0;
  let ohs = 0;
  str
    .split('')
    .forEach((char) => {
      if (char.toLowerCase() === 'x') {
        exes++
      } else if (char.toLowerCase() === 'o') {
        ohs++
      }
    });
  if (exes === ohs) {
    return true
  } else {
    return false;
  }
}