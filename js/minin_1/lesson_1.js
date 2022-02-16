const arr = ['Hello world', 'This is a great solution', 'How are you'];

const result = a =>
  a.map(len => len.split(' ').length).reduce((a, b) => (a > b ? a : b));

console.log(result(arr));
