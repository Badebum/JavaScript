let input;
const numbers = [];
let total = 0;

function sumInput() {
  while (true) {
    input = prompt('Введите число');

    if (input === '' || input === null || !isFinite(input)) break;

    numbers.push(+input);
  }

  for (const number of numbers) {
    total += number;
  }
  return total;
}

sumInput();
alert(`Общая сумма чисел равна ${total}`);

//  подсчитать сумму всех чисел массива и записать в переменную total
