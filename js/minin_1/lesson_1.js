const doubleChar = str =>
  str
    .split('')
    .map(a => a.repeat(2))
    .join('');

console.log(doubleChar('asd'));
