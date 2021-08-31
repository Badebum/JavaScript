import users from './users.js';

// Задание 1 - Получить массив имен всех пользователей (поле name).
const getUserNames = users => {
  const usersNames = users.map(user => user.name);
  return usersNames;
};

// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//Задание 2 - Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  const usersEyeColor = users.filter(user => color === user.eyeColor);
  return usersEyeColor;
};

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//Задание 3 - Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
  const usersGenderName = users
    .filter(user => gender === user.gender)
    .map(user => user.name);

  return usersGenderName;
};

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Задание 4 - Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
  const usersInactiv = users.filter(user => !user.isActive);
  return usersInactiv;
};

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//Задание 5 - Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
  const findUserEmail = users.find(user => email === user.email);

  return findUserEmail;
};

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//Задание 6 - Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => {
  const findUsersAge = users.filter(user => user.age < max && user.age > min);
  // .map(user => user.name);

  return findUsersAge;
};

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//Задание 7 -Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
  const usersBalance = users.reduce(
    (balance, user) => balance + user.balance,
    0,
  );

  return usersBalance;
};

// console.log(calculateTotalBalance(users)); // 20916

// Задание 8 - Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  const usersNameFriend = users
    .filter(({ friends }) => friends.includes(friendName))
    .map(user => user.name);

  return usersNameFriend;
};

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// Задание 9 -Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
  const sortByFriendsCount = [...users]
    .sort((prew, next) => prew.friends.length - next.friends.length)
    .map(user => user.name);

  return sortByFriendsCount;
};

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//Задание 10 -Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  const sorterBySkills = users
    .flatMap(user => user.skills)
    .filter((item, index, arr) => {
      return arr.indexOf(item) === index;
    })
    .sort((prev, next) => {
      return next < prev ? 1 : -1;
    });
  return sorterBySkills;
};

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
