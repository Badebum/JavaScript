const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let orderedDroid = prompt('Введите количество дроидов');

orderedDroid === null
  ? alert('Отменено пользователем!')
  : (totalPrice = orderedDroid * pricePerDroid);

totalPrice > credits
  ? alert('Недостаточно средств на счету!')
  : alert(
      `Вы купили ${orderedDroid} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`,
    );
