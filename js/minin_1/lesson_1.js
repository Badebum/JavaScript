const arr = ['Hello world', 'This is a great solution', 'How are you'];

const result = a => Array.prototype.join.call(a, ' ');

console.log(result(arr));

const alt = Array.prototype.join.call('JavaScript', ' ');
console.log(alt);
