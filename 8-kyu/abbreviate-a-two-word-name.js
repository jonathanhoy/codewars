function abbrevName(name) {
  return name
    .split(' ')
    .map(x => x.charAt(0).toUpperCase())
    .join('.');
}

console.log(abbrevName('Jonathan Hoy'));