const findBestEmployee = employees => {
  const entries = Object.entries(employees);
  let bestEmployees = 0;
  let nameEmployees;

  for (const key in employees) {
    if (bestEmployees < employees[key]) {
      bestEmployees = employees[key];
      nameEmployees = key;
    }
  }
  return nameEmployees;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
