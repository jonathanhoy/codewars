function solution(str) {
  let solution = str;
  if (str.length % 2 !== 0) {
    solution = solution + '_';
  }
  return solution.match(/.{1,2}/g);
}


solution('abc');
solution('abcd');