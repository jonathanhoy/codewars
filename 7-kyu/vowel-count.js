function getCount(str) {
  var vowelsCount = 0;

  const arr = str.split('');
  arr.forEach((char) => {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      vowelsCount++;
    }
  });

  return vowelsCount;
}