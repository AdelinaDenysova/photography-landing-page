// Module 2.4

// Example 1 - Индекс массы тела
// Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека.
// Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота будут специально переданы как строки.
// Нецелые числа могут быть заданы в виде 24.7 или 24, 7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;


// const calcBMI = (weight, height) => {
//     let result = 0;
//     const weightValue = Number(weight).replace(',', '.');
//     const heightValue = Number(height).replace(',', '.');

//     console.log(weightValue);
//     console.log(heightValue);

//     result = weightValue / Math.pow(heightValue, 2);

//     return result.toFixed(1);
// };

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

//////////////////////////////////////////////////////////////////////////////////////////

// Example 2 - Меньшее из чисел
// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.

// const min = (a, b) => {
//     let minNumber = a;

//     minNumber < b ? minNumber : minNumber = b;

//     return minNumber;

//      return a < b ? a : b;
// };

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

//////////////////////////////////////////////////////////////////////////////////////////

// Example 3 - Площадь прямоугольника
// Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами,
// значения которых будут переданы в параметр dimensions в виде строки.
// Значения гарантированно разделены пробелом.

// function getRectArea(dimensions) {
//     const dimensionsArr = dimensions.split(' ');
    
//     const rectArea = dimensionsArr[0] * dimensionsArr[1];
    
//     return rectArea;
// };

// console.log(getRectArea('8 11')); // 88

//////////////////////////////////////////////////////////////////////////////////////////

// Example 4 - Логирование элементов
// Напиши функцию logItems(items), которая получает массив и использует цикл for,
// который для каждого элемента массива будет выводить в консоль сообщение
// в формате < номер элемента > - <значение элемента >.
// Нумерация элементов должна начинаться с 1.

// Например для первого элемента массива ['Mango', 'Poly', 'Ajax']
// с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// function logItems(items) {
//     for (i = 0; i < items.length; i += 1) {
//         console.log(`${i + 1}: ${items[i]}`);
//     }
// }


// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

//////////////////////////////////////////////////////////////////////////////////////////

// Example 5 - Логирование контактов
// Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя.
// В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми.
// Порядковый номер имен и телефонов в строках указывают на соответствие.Количество имен и телефонов гарантированно одинаковое.

// function printContactsInfo(names, phones) {
//     const namesArr = names.split(',');
//     const phonesArr = phones.split(',');

//     for (i = 0; i < namesArr.length; i += 1) {
//         console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//     };
// };


// printContactsInfo('Jacob,William,Solomon,Artemis','89001234567,89001112233,890055566377,890055566300');

//////////////////////////////////////////////////////////////////////////////////////////

// Example 6 - Поиск наибольшего элемента
// Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.

// function findLargestNumber(numbers) {
    // let largestNumber = numbers[0];

    // for (const number of numbers) {
    //     if (number > largestNumber) {
    //         largestNumber = number;
    //     };
    // };

    // return largestNumber;
    
    //or:

    // return Math.max(...numbers);
// };

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

//////////////////////////////////////////////////////////////////////////////////////////

// Example 7 - Среднее значение
// Напишите функцию calcAverage() которая принимает произвольное кол-во аргументов
// и возвращает их среднее значение.
// Все аругменты будут только числами.

// function calcAverage(...args) {
//     let total = 0;

//     for (i = 0; i < args.length; i += 1) {
//         total += args[i];
//     };
    
//     const average = total / args.length;
//     return average;
// };

// console.log(calcAverage(1, 2, 3, 4)); // 2.5
// console.log(calcAverage(14, 8, 2)); // 8
// console.log(calcAverage(27, 43, 2, 8, 36)); // 23.2

//////////////////////////////////////////////////////////////////////////////////////////


// Example 8 - Форматирование времени
// Напиши функцию formatTime(minutes), которая переведёт
// значение minutes(количество минут) в строку в формате часов и минут HH:MM.

// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;
//     // console.log(hours);
//     // console.log(minutes);

//     const doubleDigitHours = String(hours).padStart(2, 0);
//     const doubleDigitMinutes = String(minutes).padStart(2, 0);
//     return `${doubleDigitHours}:${doubleDigitMinutes}`;
// };

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

//////////////////////////////////////////////////////////////////////////////////////////

// Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)
// Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName) - изменяет имя на новое

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// const addCourse = course => {
//     if (courses.includes(course)) {
//         console.log(`У вас уже есть курс "${course}".`);
//         return;
//     };

//     console.log(`Добавляем курс "${course}".`);
//     courses.push(course);
// };

// const removeCourse = course => {
//     if (courses.includes(course)) {
//         const courseIndex = courses.indexOf(course);
//         courses.splice(courseIndex, 1);
//         console.log(`Удаляем курс "${course}".`);
//         return;
//     };

//     console.log('Курс с таким имененем не найден');
// };

// const updateCourse = (oldCourse, newCourse) => {
//     if (courses.includes(oldCourse)) {
//         const courseIndex = courses.indexOf(oldCourse);
//         courses.splice(courseIndex, 1, newCourse);
//         console.log(`Заменяем курс "${oldCourse}" на "${newCourse}".`);
//         return;
//     };

//     console.log('Курс с таким имененем не найден');
// }

// console.log(courses);
// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такой курс'
// console.log(courses);

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// updateCourse('Vue', 'NestJS');
// console.log(courses);

//////////////////////////////////////////////////////////////////////////////////////////

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// console.log(tags); // ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

// Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// Это стандартная практика если callback-функция довольно большая.

// Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// то создаем его и записывает ему значение 0.
// В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce((acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//         acc[tag] = 0;
//     };

//     acc[tag] += 1;

//     return acc;
// }, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

//////////////////////////////////////////////////////////////////////////////////////////

// console.log("Модуль 3 Занятие 6. Деструктуризация и rest / spread");

// Example 1 - Деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function calcBMI ({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Было
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Ожидается
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );

//////////////////////////////////////////////////////////////////////////////////////////

// Example 2 - Деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Было
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Ожидается
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

//////////////////////////////////////////////////////////////////////////////////////////

// // Example 3 - Глубокая деструктуризация
// // Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function getBotReport({ companyName, bots: { repair, defence } }) {
//   return `${companyName} has ${repair + defence} bots in stock`;
// }

// // Было
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Ожидается
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 bots in stock"

//////////////////////////////////////////////////////////////////////////////////////////

// // Example 4 - Деструктуризация
// // Перепиши функцию так, чтобы она принимала объект параметров
// // со свойствами companyName и stock и выводила репорт
// // о количестве товаров на складе любой компании.

// // Решение
// function getStockReport({ companyName, stock }) {
//   let total = 0;
//   for (const value of Object.values(stock)) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"

//////////////////////////////////////////////////////////////////////////////////////////

// // Example 5 - Операция spread
// // Дополни функцию createContact(partialContact) так, чтобы она
// // возвращала новый объект контакта с добавленными свойствами id и createdAt,
// // а также list со значением "default" если в partialContact нет такого свойства.

// // Решение
// function createContact(partialContact) {
//   return {
//     list: 'default',
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

//////////////////////////////////////////////////////////////////////////////////////////

// // Example 6 - Операция rest
// // Напиши функцию transformUsername(user) так, чтобы она
// // возвращала новый обьект со свойством fullName, вместо firstName и lastName.

// // Решение
// function transformUsername({ firstName, lastName, ...otherProps }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...otherProps,
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   }),
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );

//////////////////////////////////////////////////////////////////////////////////////////

// console.log('Модуль 3. Занятие 1. Объекты');

// // Example 1 - Основы обьектов
// // Напиши скрипт, который, для объекта user, последовательно:

// // добавляет поле mood со значением 'happy'
// // заменяет значение hobby на 'skydiving'
// // заменяет значение premium на false
// // выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// function changeObj(obj) {
//     obj.mood = 'happy';
//     obj.hobby = 'skydiving';
//     obj.premium = false;
//     const keys = Object.keys(user);
//     for (const key of keys) {
//         console.log(`${key}: ${obj[key]}`);
//     };
//     return obj;
// };

// // Код
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// console.log(changeObj(user));

//////////////////////////////////////////////////////////////////////////////////////////

// // Example 2 - метод Object.values()
// // У нас есть объект, в котором хранятся зарплаты нашей команды.
// // Напишите код для суммирования всех зарплат и сохраните результат
// // в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

// // Код
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// const allSalaries = Object.values(salaries);
// for (const salary of allSalaries) {
//     sum += salary;
// };

// console.log(sum);

//////////////////////////////////////////////////////////////////////////////////////////

// // Example 3 - Массив объектов
// // Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает
// // массив обьектов и строку с названием камня. Ф - ция считает и возвращает
// // общую стоимость камней с таким именем, ценой и количеством из обьекта

// // Код
// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stonesObj, stoneName) {
//     for (const stone of stonesObj) {
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity;
//         };
//     };

//     return "Such stone doesn't exist";
// };

// console.log(calcTotalPrice(stones, 'Бриллиант'));

//////////////////////////////////////////////////////////////////////////////////////////

// // Example 4 - Комплексные задачи
// // Напиши скрипт управления личным кабинетом интернет банка.
// // Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//     balance: 0,
//   // История транзакций
//     transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//     createTransaction(amount, type) {
//         let transaction = {};
//         this.transactions.push(transaction);
//         transaction.id = this.transactions.length;
//         transaction.amount = amount;
//         transaction.type = type;
//     },

//   /*
//    * Метод, отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//     deposit(amount) {
//         this.createTransaction(amount, Transaction.DEPOSIT);
//         this.balance += amount;
//     },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//     withdraw(amount) {
//         this.createTransaction(amount, Transaction.WITHDRAW);
//         if (amount > this.balance) {
//             return "There are insufficient funds to withdraw.";
//         };
//         this.balance -= amount;
//     },

//   /*
//    * Метод возвращает текущий баланс
//    */
//     getBalance() {
//         return this.balance;
//     },

//   /*
//    * Метод ищет и возвращает объект транзаkции по id
//    */
//     getTransactionDetails(id) {
//         for (const tr of this.transactions) {
//             if (tr.id === id) {
//                 return tr;
//             };
//         };
//     },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//     getTransactionTotal(type) {
//         let currentTypeTransactionAmount = 0;
//         for (const tr of this.transactions) {
//             if (tr.type === type) {
//                 currentTypeTransactionAmount += tr.amount;
//             };
//         };
//         return currentTypeTransactionAmount;
//     },
// };

// account.deposit(1000);
// console.log(account.balance);
// account.deposit(2000);
// account.deposit(4000);
// console.log(account.balance);
// account.withdraw(4000);
// console.log(account.balance);
// account.withdraw(2000);
// console.log(account.balance);
// console.log(account.getBalance());
// console.log(account.transactions);
// console.log(account.getTransactionDetails(3));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));

console.log("🚀 ~ file: tasks4-2.js ~ line 669 ~ d", d)
const d = 'ffff';