let input;
let total = 0;

do {
  input = Number(prompt('Введите число'));
  if (input !== NaN) {
    total += input;
  } else {
    alert('Было введено не число, попробуйте еще раз');
    input = Number(prompt('Введите число'));
  }
} while (input > 0);

alert(`Общая сумма чисел = ${total}`);
