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

const ADMI_PASSWORD = "qweqwe";
let message;

let quantity = prompt("введите пароль");

if (quantity == ADMI_PASSWORD) {
    message = "добро пожаловать";
} else if (quantity == null)
{    message = "отменено";}
    else  {        
        message = "доступ запрещен";
    }

console.log(message);

