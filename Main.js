/*
 * #1
 *
 * Створіть функцію counter(), яка має реалізувати лічильник за допомогою замикання:
 * функція може приймати число як аргумент counter(n)
 * якщо число передано у функцію - лічба починається із зазначеного числа
 * якщо ні - то лічба триває
 */

const createCounter = function () {
  let num = -1;
  return function (n) {
    if (typeof n === "number") {
      num = n;
    } else {
      num++;
    }
    return num;
  };
};

const counter = createCounter();

document.write(`Вивід #1: Немає бо ломається лічильник`);
console.log(counter()); // 0
// document.write(`<br> ${counter()}`); // 0
console.log(counter()); // 1
// document.write(`<br> ${counter()}`); // 1
console.log(counter(100)); // 100
// document.write(`<br> ${counter(100)}`); // 100
console.log(counter()); // 101
// document.write(`<br> ${counter()}`); // 101
console.log(counter()); // 102
// document.write(`<br> ${counter()}`); // 102
console.log(counter(500)); // 500
// document.write(`<br> ${counter(500)}`); // 500
console.log(counter()); // 501
// document.write(`<br> ${counter()}`); // 501
console.log(counter()); // 502
// document.write(`<br> ${counter()}`); // 502
console.log(counter(0)); // 0
// document.write(`<br> ${counter(0)}`); // 0
console.log(counter()); // 0
// document.write(`<br> ${counter()}`); // 0
console.log(counter()); // 1
// document.write(`<br> ${counter()}`); // 1

/*
 * #2
 *
 * Створіть функцію counterFactory, яка має реалізувати три методи за допомогою замикання:
 * початкове значення лічильника - 0
 * counterFactory.value() - повертає значення лічильника
 * counterFactory.value(n) - встановлює значення лічильника, повертає нове значення
 * counterFactory.increment() - збільшує значення лічильника на 1
 * counterFactory.decrement() - зменшує значення лічильника на 1
 */

const result = function () {
  let num = 0;
  return {
    value: function (n) {
      if (typeof n === "number") {
        num = n;
      }
      return num;
    },
    increment: function () {
      return ++num;
    },
    decrement: function () {
      return --num;
    },
  };
};

const counterFactory = result();

counterFactory.value();

document.write(`<br> <br> Вивід #2: `);
console.log(counterFactory.value()); // 0
document.write(`<br> ${counterFactory.value()}`); // 0
counterFactory.increment();
counterFactory.increment();
counterFactory.increment();
console.log(counterFactory.value()); // 3
document.write(`<br> ${counterFactory.value()}`); // 3
counterFactory.decrement();
counterFactory.decrement();
console.log(counterFactory.value()); // 1
document.write(`<br> ${counterFactory.value()}`); // 1
console.log(counterFactory.value(100)); // 100
document.write(`<br> ${counterFactory.value(100)}`); // 100
counterFactory.decrement();
console.log(counterFactory.value()); // 99
document.write(`<br> ${counterFactory.value()}`); // 99
console.log(counterFactory.value(200)); // 200
document.write(`<br> ${counterFactory.value(200)}`); // 200
counterFactory.increment();
console.log(counterFactory.value()); // 201
document.write(`<br> ${counterFactory.value()}`); // 201

/*
 * #3
 *
 * Створіть функцію myPow(a, b, myPrint). Всередині реалізуйте рекурсію для підрахунку результату піднесення числа a до ступеня b.
 * - Функція myPrint(a, b, res) - глобальна функція, що має генерувати з параметрів a, b, res рядок вигляду 'a^b=res' і повертати його.
 * - myPrint() має бути передана в myPow() як параметр і викликана всередині як callback-функція.
 * - функція myPow() як значення, що повертається, приймає результат myPrint().
 */
const myPrint = (a, b, res) => `${a}^${b} = ${res}`;

const myPow = (a, b, callback) => {
  if (b === 0) return callback(a, b, 1);
  if (b < 0) {
    let result = 1 / myPow(a, -b, (a, b, res) => res);
    return callback(a, b, result);
  }

  if (b === 1) return callback(a, b, a);
  let result = a * myPow(a, b - 1, (a, b, res) => res);
  return callback(a, b, result);
};

console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8
console.log(myPow(2, 0, myPrint)); // 2^0=1
console.log(myPow(2, -2, myPrint)); // 2^-2=0.25
document.write(`<br> <br> Вивід #3: <br> ${myPow(3, 4, myPrint)}`); // 3^4=81
document.write(`<br> ${myPow(2, 3, myPrint)}`); // 2^3=8
document.write(`<br> ${myPow(2, 0, myPrint)}`); // 2^0=1
document.write(`<br> ${myPow(2, -2, myPrint)} <br>`); // 2^-2=0.25

/*
 * #4
 * Створіть функцію myMax(arr), яка як параметр приймає
 * довільний числовий масив і повертає максимальне число з переданого їй масиву.
 * У реалізації функції має бути застосовано метод Math.max() і apply().
 */

const list = [12, 23, 100, 34, 56, 9, 233];
const myMax = (arr) => {
  return Math.max.apply(arr, list);
};

console.log(myMax(list)); // 233
document.write(`<br> Вивід #4: <br> ${myMax(list)}`); // 233

/*
 * #5
 *
 * Створіть функцію myMul(a, b), яка буде множити числа а і b, повертаючи результат.
 */

const myMul = (a, b) => a * b;

/*
 * Створіть функції myDouble(n), яка приймає один параметр і подвоює його.
 * Використовувати множення або інші математичні операції всередині функції - заборонено, тільки bind() і myMul().
 * Функція повертає результат обчислення.
 */

const myDouble = myMul.bind(null, 2);

console.log(myDouble(3)); // = myMul(2, 3) = 6
console.log(myDouble(4)); // = myMul(2, 4) = 8
console.log(myDouble(5)); // = myMul(2, 5) = 10
document.write(`<br> <br> Вивід #5: <br> ${myDouble(3)}`); // = myMul(2, 4) = 6
document.write(`<br> ${myDouble(4)}`); // = myMul(2, 3) = 8
document.write(`<br> ${myDouble(5)}`); // = myMul(2, 5) = 10

// Аналогічним чином створюємо функцію myTriple(n), яка потроює параметр, що приймає, повертаючи результат.

const myTriple = myMul.bind(null, 3);

console.log(myTriple(3)); // = myMul(3, 3) = 9
console.log(myTriple(4)); // = myMul(3, 4) = 12
console.log(myTriple(5)); // = myMul(3, 5) = 15
document.write(`<br> ${myTriple(3)}`); // = myMul(3, 3) = 9
document.write(`<br> ${myTriple(4)}`); // = myMul(3, 4) = 12
document.write(`<br> ${myTriple(5)}`); // = myMul(3, 5) = 15
