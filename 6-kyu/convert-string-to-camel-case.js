function toCamelCase(str) {
  const arr = str.split(/-|_/);
  return arr
    .map((word) => {
      if (word !== arr[0]) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    })
    .join('');
}

toCamelCase(`the_silent-warrior`);