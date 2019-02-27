function descendingOrder(n) {
  return parseInt(n
    .toString()
    .split('')
    .map(Number)
    .sort(function (a, b) {return b - a })
    .join('')
  )
}

descendingOrder(123534);