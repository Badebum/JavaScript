function squareDigits(num) {
  return num
    .toString()
    .split('')
    .map(a => Number(a))
    .map(a => a * a)
    .join('');
}

console.log(squareDigits(3212));
