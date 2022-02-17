function encrypt(text, n) {
  console.log(text, n);
  if (!text || n <= 0) return text;
  while (n--) {
    let ans = '';
    for (let i = 1; i < text.length; i += 2) {
      ans += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      ans += text[i];
    }
    text = ans;
  }
  return text;
}

console.log(encrypt('This is a test!', 2));
// console.log(encrypt('This is a test!', 3));
// console.log(encrypt('This is a test!', 4));
// console.log(encrypt('This is a test!', 5));
