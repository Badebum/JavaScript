const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = (arr, prop) => {
  const newArr = [];
  arr.map(value =>
    value[prop] !== undefined ? newArr.push(value[prop]) : newArr,
  );
  return newArr;
};

// const getAllPropValues = (arr, prop) => {
//   const propArray = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     let obj = arr[i];

//     if (typeof obj[prop] !== 'undefined') {
//       propArray.push(obj[prop]);
//     }
//   }

//   return propArray;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
