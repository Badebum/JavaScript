// задача 1

// const name = "Генератор защитного поля ";
// let price = 1000;

// console.log(`${name}, цена за штуку ${price}`);

// price = 2000;

// console.log(`${name}, цена за штуку ${price}`);




// задача 2

// const total = 100;
// const ordered = 120;

// const messege = total <= ordered ? "На складе недостаточно товара" : " Заказа оформлен, с вами свяжутся.";
// console.log(messege);



// Задание 3

// const ADMI_PASSWORD = "qweqwe";
// let message;

// let quantity = prompt("введите пароль");

// if (quantity == ADMI_PASSWORD) {
//     message = "добро пожаловать";
// } else if (quantity == null)
// {    message = "отменено";}
//     else  {        
//         message = "доступ запрещен";
//     }

// console.log(message);


// Задание 4 

        // let credits = 23580;
        // let pricePerDroir = 3000;
        // let totalPrice;
        // let result;
 
        // let count = prompt(`количество дронов`);
        // if(count === null) { 
        //     result = "Отменено пользователем!";
        // } else if(isNaN(count[0]) || isNaN(count)) { // Если было введено не число
        //     result = "Введите число";
        // } else { // В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
        //     totalPrice = pricePerDroir * count;
        // }
 
        // if(!result) {
        //     // Проверяет сможет ли пользователь оплатить заказ:
        //     if((credits - totalPrice) <= 0) {  
        //         // если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
        //        console.log("Недостаточно средств на счету!.");
        //     } else {
        //         // в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение.
        //         credits = credits - totalPrice;
        //         console.log(`Вы купили ${count} дроида(ов), на счету осталось ${credits}`);
        //     }
        // } else {
        //     console.log(result);
        // }



// Задание 5

// let price;
// let country = prompt("введите страну доставки");
// country = country.toLowerCase();

// switch (country) {
//         case "китай":
//         price = 100;
//         break;

//         case "чили":
//         price = 250;
//         break;

//         case "австралия":
//         price = 170;
//         break;

//         case "индия":
//         price = 80;
//         break;

//         case "ямайка":
//         price = 120;
//         break;
        
//         default:
//         let message = alert('В вашей стране доставка не доступна');
// }
// console.log(`Доставка в страну ${country} будет стоить ${price} кредитов`);




// задача 6

// let input;
// let total = 0;

// input = Number(input);


// for (input = prompt(); input > 0; input + total) {
     
//         console.log(Number(total));   
// }
// 1
// console.log("результат");