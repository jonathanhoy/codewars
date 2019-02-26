function highAndLow(numbers) {
  const arr = numbers.split(' ').map(Number);
  const highest = Math.max(...arr);
  const lowest = Math.min(...arr);
  return `${highest} ${lowest}`  
}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");