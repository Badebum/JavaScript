const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],
  lastId: 0,
  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  addTransaction(transaction) {
    this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    let transaction = {};
    transaction.id = this.lastId + 1;
    this.lastId += 1;
    transaction.type = Transaction.DEPOSIT;
    transaction.amount = amount;
    this.addTransaction(transaction);
    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance >= amount) {
      let transaction = {};
      transaction.id = this.lastId + 1;
      this.lastId += 1;
      transaction.type = Transaction.WITHDRAW;
      transaction.amount = amount;
      this.addTransaction(transaction);
      this.balance -= amount;
    } else {
      console.log('Not enough money on account');
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

account.deposit(1000);
console.log(account.getBalance());
account.deposit(10);
console.log(account.getBalance());
account.withdraw(20);
console.log(account.getBalance());
account.withdraw(40);
console.log(account.getBalance());

console.log('Transaction 1: ');
console.log(account.getTransactionDetails(1));
console.log('Transaction 3: ');
console.log(account.getTransactionDetails(3));
console.log('Transaction 4: ');
console.log(account.getTransactionDetails(4));

console.log(
  'Withdrawals: ' + account.getTransactionTotal(Transaction.WITHDRAW),
);
console.log('Deposits: ' + account.getTransactionTotal(Transaction.DEPOSIT));
