const ADMIN_PASSWORD = 'jqueryismyjam';
let userName = '';
let message;

let promtInputName = prompt('Введите имя пользователя');
userName = promtInputName;

let promtInputPass = prompt('Введите пароль');

if (promtInputPass === null) {
  alert('Отменено пользователем!');
} else if (promtInputPass === ADMIN_PASSWORD) {
  alert(`Добро пожаловать ${userName}!`);
} else {
  alert('Доступ запрещен, неверный пароль!');
}
