function count(string) {
  const arrOfCharacters = string.split('');
  const charCount = {};
  for (let i = 0; i < arrOfCharacters.length; i++) {
    if (charCount[arrOfCharacters[i]]) {
      charCount[arrOfCharacters[i]]++;
    } else {
      charCount[arrOfCharacters[i]] = 1;
    }
  }
  return charCount;  
}

console.log(count('Cat'));
console.log(count('Cattt'));