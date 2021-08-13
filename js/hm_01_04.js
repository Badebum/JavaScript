let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;

let piece = prompt('введите количество дронов');
piece = Number(piece);

piece <= 0 ? console.log('отменено пользователем') : totalPrice = piece * pricePerDroid;

if(totalPrice > credits ){
    console.log('Недостаточно средств на счету');
} else if (totalPrice <= credits) {
    credits -= totalPrice;
    console.log(`Вы купили ${piece} дроидов, на счету осталось ${credits} кредитов.`);
}

