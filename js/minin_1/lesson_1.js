// Что такое prototype. JavaScript Prototype

const person = new Object({
  name: 'Lu',
  age: 25,
  greet: () => {
    console.log('GREET!');
  },
});

Object.prototype.sayHello = () => {
  console.log('hello');
};

const lena = Object.create(person);

// console.log(person);
// console.log(lena);

const str = '';
console.log(str.toString());
