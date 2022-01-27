const number = arr =>  arr.map((a, i) => `${++i}: ${a}`);

console.log(number(['a', 'b', 'c']));
