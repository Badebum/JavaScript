// const friends = ['mango', 'kivi', 'poly', 'ajax' ];
               
// console.table(friends);

// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1 ) {
//     console.log(friends[i]);
// }



// const cart = [54, 28, 105, 78, 92, 17, 120];
// let total = 0;

// for (const value of cart) {
//     total+=value;
// }
// console.log(`Total: `, total);


// ........................................
// поиск логина в массиве

// const logins = ['qweqwe', 'asdasd', 'zxczxc', 'rtyrty', 'qweasd'];
// const loginToFind = 'asdasd';
// let message = `пользователь ${loginToFind} не найден`;


// первый способ
// for (let i = 0; i < logins.length; i += 1) {
// const login = logins[i];

//     // console.log('Login: ', login);

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//     break;
//     }

//     message = `пользователь ${loginToFind} не найден`;
// }

// console.log(message);

// второй способ
// for (const login of logins) {

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//     break;
//     }

// }

// console.log(message);

// третий способ

// const message = logins.includes(loginToFind) 
// ? `Пользователь ${loginToFind} найден` 
// : `пользователь ${loginToFind} не найден`;

// console.log(message);



// .............................................................................
// поиск наименьшего числа в массиве

// const numbers = [51, 18, 105, 78, 2, 92, 17, 120];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log(smallestNumber);

// ..............................................................
// сшивание массива в строку

// const friends = ['mango', 'kivi', 'poly', 'ajax' ];
// const string = friends.join(', ')

// console.log(friends);
// console.log(string);

// .........................................
// инвертирование регистра строки

// const string = 'JavaScript';
// const letters = string.split('');
// let invString = '';

// for (const letter of letters) {
    
//     invString += 
//     letter === letter.toLowerCase () 
//     ? letter.toUpperCase ()
//     : letter.toLowerCase();
// }
// console.log(invString);


// .........................................
// изменение строки с преобразованием через массив

// const title = 'Аренда Помещений Офисных Луганск';
// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);

// ..........................................
// подсчет суммы двух массивов

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// const array3 = [5, 10, 15, 20, 10, 20, 30, 1];
// let total = 0;

// const numbers = array1.concat(array2, array3);

// for (const number of numbers) {
//     total+= number;
// }
// console.log(total);



// ДЗ  ........... ДЗ..............ДЗ

// задание 1

// const logItems = function(array) {
//    for ( let i = 0; i< array.length; i +=1){
//        const message = `${i + 1} - ${array[i]}`;

//        console.log(message);
//    }
// }
 

//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
//   logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


  // ДЗ  ........... ДЗ..............ДЗ

// задание 2

// const calculateEngravingPrice = function(message, pricePerWord) {
// const result = message.split(' ').length * pricePerWord;
// console.log(result);
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       10,
//     ),
//   ); // 80
  
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,
//     ),
//   ); // 160
  
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//   ); // 240
  
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
//   ); // 120



 // ДЗ  ........... ДЗ..............ДЗ

// задание 3

// const findLongestWord = function(string) {
//   const words = string.split(' ');
//   let longestWord = words[0];


// for (const word of words) {
//   if (word.length > longestWord.length){
//     longestWord = word;
//   }
  
// }
// return longestWord;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'



 // ДЗ  ........... ДЗ..............ДЗ

// задание 4

const formatString = function(string) {
  const 
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка