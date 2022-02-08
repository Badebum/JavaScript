function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;
  let str = '';
  for (let i = 0; i < n; i++) {
    let len = Math.abs((n - 2 * i - 1) / 2);
   
    str += ' '.repeat(len);
    str += '*'.repeat(n - 2 * len);
    str += '\n';
     console.log(len);
  }
  return str;
}

// console.log(diamond(1));
console.log(diamond(3));
// console.log(diamond(1));
