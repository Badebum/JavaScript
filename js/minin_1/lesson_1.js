const arr = ['Hello world', 'This is a great solution', 'How are you'];

const result = a => a.map(len => len.split(' ').length);

console.log(result(arr));
