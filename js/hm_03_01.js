const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = 'false';

const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key} : ${user[key]} `);
}

// const userUpdate = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'skydiving',
//   premium: false,
//   mood: 'happy',
// };

// const userNewProfile = {
//   ...user,
//   ...userUpdate,
// };

// console.log(userNewProfile);

// const keys = Object.keys(userNewProfile);
// for (const key of keys) {
//   console.log(`${key} : ${userNewProfile[key]}`);
// }
