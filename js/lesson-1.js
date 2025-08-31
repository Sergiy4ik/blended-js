                 //  1

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// const userAnswer = Number(prompt("Введіть число 10"));
// if (userAnswer === 10) {
//     alert('Вірно')
// } else {
//     alert('Невірно')
// }








                   //  2

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min < 15) {
//     alert("1 чверть");
// } else if (min < 30) {
//     alert("2 чверть");
// } else if (min < 45) {
//     alert("3 чверть");
// } else {
//     alert("4 чверть")
// }







                   // 3

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const userAnswer = prompt("Введіть число від 1 до 4");

// switch (userAnswer) {
//     case "1":
//         console.log('зима');
//         break
//     case "2":
//         console.log('весна');
//         break
//     case "3":
//         console.log('літо');
//         break
//     case '4':
//         console.log('осінь');
//         break
//     default: console.log("Вибачте, але ви маєте ввести значення від 1 до 4 включно");
// }





 
                   //  4
 
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const totalMinutes = Number(prompt("Введіть кількість хвилин"));

// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const modifiedHours = String(hours).padStart(2, 0);

//     const minutes = totalMinutes % 60;
//     const modifiedMinutes = String(minutes).padStart(2, 0);

//     return `${modifiedHours}:${modifiedMinutes}`
// }

// console.log(formatTime(totalMinutes));







                 // 5 xxxxxxxxxxxxxxxxxxxxxxxx

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Даня",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Добрий день!",
// то вивести в alert рядок "Даня Вареник!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"
                 
// const login = prompt("Введіть свій логін");
// console.log(login);

// if (login === null || '') {
//         alert("Скасовано")
//     }

// if (login === "Даня") {
//     const password = prompt("Введіть пароль");

//     if (password === "Добрий день!") {
//         alert("Даня Вареник!")
//     } else {
//         alert("Невірний пароль!")
//     }
// } else {
//     alert("Я вас не знаю")
// }







                 // 6
                 
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let counter = 0;
// const number = 20;
// while (counter < number) {
//     counter += 1;
//     console.log(counter);
// }

                 // 7
                 
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// const max = 50;
// const min = 20;

// console.log(getNumbers(min, max));


// function getNumbers(min, max) {
//     let somOdd = 0;
//     for (let i = max; i >= min; i -= 1) {
//         console.log(i);
//         if (i % 2 === 0) {
//             somOdd += i
//         }
//     }

//     return somOdd
// }



                 // 8
                 
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// let number1 = '10';
// let number2 = '5';
// let minNumber = min(number1, number2);

// function min(a, b) {
//     if (Number.isFinite(a, b)) {
//     return Math.min(a, b)
//     } else {
//         return 'Not a number!'
//     }
// }


// console.log(minNumber);
 
                 // 9

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//        return confirm("Вам менше 18, продовжити?")
//     }
// }

// console.log(isAdult(19));
// console.log(isAdult(10));


                 // 10
                 
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//     for (let i = 1; i <= num; i++) {
//             if (i % 3 === 0 && i % 5 == 0) {
//         console.log('fizzbuzz');
//             } else if (i % 3 === 0) {
//                 console.log('fizz');
//             } else if (i % 5 === 0) {
//               console.log('buzz');
//             }
//          }
// }

// console.log(fizzBuzz(100));



                // чат gpt

// Напиши функцію getUniqueElements(array1, array2),
// яка приймає два масиви чисел і повертає новий масив,
// що містить тільки ті елементи, які є в першому масиві,
// але відсутні у другому.

// function getUniqueElements(array1, array2) {
//   let array3 = []
//   for (let i = 0; i < array1.length; i++) {
//     if (!(array2.includes(array1[i]))) {
//       array3.push(array1[i])
//     }
//   }
//   return array3
// }
// console.log(getUniqueElements([1, 2, 3, 4], [2, 4, 6]));
// // Очікується: [1, 3]

// console.log(getUniqueElements([10, 20, 30], [5, 10, 15, 20]));
// // Очікується: [30]

// console.log(getUniqueElements([7, 8, 9], [1, 2, 3]));
// // Очікується: [7, 8, 9]

// console.log(getUniqueElements([5, 6, 7], [5, 6, 7]));
// // Очікується: []

