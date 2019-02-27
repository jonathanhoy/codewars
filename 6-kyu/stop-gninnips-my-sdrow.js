function spinWords(str) {
  return str
    .split(' ')
    .map((word) => {
      if (word.length >= 5) {
        return word
          .split('')
          .reverse()
          .join('');
      } else {
        return word;
      }
    })
    .join(' ');
}

spinWords('Hey fellow warriors')