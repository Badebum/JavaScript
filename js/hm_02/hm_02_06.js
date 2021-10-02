let input;
const numbers = [];
let total = 0;

do {
  input = Number(prompt('введите число'));
  numbers.push(input);
} while (input > 0);

total = numbers.map(i => (total += i), (total = 0)).reverse()[0];
console.log(`Общая сумма чисел равна ${total}`);
