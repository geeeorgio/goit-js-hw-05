// * Задача 2. Користувачі з другом
// Напиши стрілочну функцію getUsersWithFriend(users, friendName) , яка прийматиме два параметра:
// перший параметр users — масив об’єктів користувачів
// другий параметр friendName — ім’я друга для пошуку.
// Функція має повертати масив усіх користувачів із масиву users, у яких є друг з іменем friendName.
// Друзі кожного користувача зберігаються у властивості friends. Якщо користувачів, у яких є такий друг немає,
// то функція має повернути порожній масив.
// Поради:
// Метод filter() можна використовувати для створення нового масиву з елементами, які задовольняють певну умову.
// Використовуй метод includes() для перевірки, чи масив friends містить friendName.

const isValidArray = array =>
  Array.isArray(array) && array.every(el => typeof el === 'object');

const isValidInput = userName =>
  typeof userName === 'string' && userName.trim() !== '';

// ===========================================================================================

const getUsersWithFriend = (users, friendName) => {
  if (!isValidArray(users)) {
    return 'Array of objects needed';
  }

  if (!isValidInput(friendName)) {
    return 'Name of a friend you looking for needs to be a string (f.e => "Mike")';
  }

  return users.filter(user => user.friends.includes(friendName)) || [];
};

// ============================================================================================
console.group('task-2');
const allUsers = [
  {
    name: 'Moore Hensley',
    friends: ['Sharron Pace'],
  },
  {
    name: 'Sharlene Bush',
    friends: ['Briana Decker', 'Sharron Pace'],
  },
  {
    name: 'Ross Vazquez',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
  },
  {
    name: 'Elma Head',
    friends: ['Goldie Gentry', 'Aisha Tran'],
  },
  {
    name: 'Carey Barr',
    friends: ['Jordan Sampson', 'Eddie Strong'],
  },
  {
    name: 'Blackburn Dotson',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
  },
  {
    name: 'Sheree Anthony',
    friends: ['Goldie Gentry', 'Briana Decker'],
  },
];

console.log(getUsersWithFriend(allUsers, 'Briana Decker'));
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, 'Goldie Gentry'));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, 'Adrian Cross')); // []

console.groupEnd();
