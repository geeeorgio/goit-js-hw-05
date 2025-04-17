// * Задача 4. Загальний баланс
// Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:
// перший параметр users — масив об’єктів користувачів,
// другий параметр gender — рядок, що зберігає стать.
// Функція має використовувати ланцюжок виклику методів та повертати загальний баланс користувачів (властивість balance),
// стать яких (властивість gender) збігається зі значенням параметра gender.

const isValidArray = array =>
  Array.isArray(array) && array.every(el => typeof el === 'object');

const isValidInput = userGender =>
  typeof userGender === 'string' && userGender.trim() !== '';

// ======================================================================

const getTotalBalanceByGender = (users, gender) => {
  if (!isValidArray(users)) {
    return 'Array of objects needed';
  }

  if (!isValidInput(gender)) {
    return 'Gender you looking for needs to be a string (f.e => "male")';
  }

  return users
    .filter(user => user.gender === gender)
    .map(user => user.balance)
    .reduce((previousValue, amount) => previousValue + amount, 0);
};

// ======================================================================

console.group('task-4');
const clients = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(clients, 'male')); // 12053

console.log(getTotalBalanceByGender(clients, 'female')); // 8863

console.groupEnd();
