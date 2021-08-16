const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('введите пароль');

if (message === null) {
  console.log('отменено пользователем');
} else if (message === ADMIN_PASSWORD) {
  console.log('Добро пожаловать');
} else {
  console.log('Доступ запрещен, неверный пароль!');
}
