function duplicateEncode(word) {
  const arrOfCharacters = word.toLowerCase().split('');
  const obj = {};
  for (let i = 0; i < arrOfCharacters.length; i++) {
    if (obj[arrOfCharacters[i]]) {
      obj[arrOfCharacters[i]]++;
    } else {
      obj[arrOfCharacters[i]] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] > 1) {
      obj[key] = ")";
    } else {
      obj[key] = "(";
    }
  }
  const newArr = arrOfCharacters.map((char) => {
    return char = obj[char];
  })
  return newArr.join('');
}

console.log(duplicateEncode("cattt"));