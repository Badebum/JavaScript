let deliveryCountry = prompt('введите срану доставки');
let price;

deliveryCountry = deliveryCountry.toLowerCase();

switch (deliveryCountry) {
    case 'китай':
        deliveryCountry = 'Китай';
      price = 100
      alert(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);
        break;
        
    case 'чили':
        deliveryCountry = 'Чили';
    price = 250
    alert(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);
        break;

    case 'австралия':
        deliveryCountry = 'Австралия';
    price = 170
    alert(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);
        break;

    case 'индия':
        deliveryCountry = 'Индия';
    price = 80
    alert(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);
        break;

    case 'ямайка':
        deliveryCountry = 'Ямайка';
    price = 120
    alert(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);
        break;
    default:
        alert('В вашей стране доставка не доступна');
        break;
}


// alert(`Доставка в ${country} будет стоить ${price} кредитов`);   