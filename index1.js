// .......................MY HOMEWORK 6/2/2021.............................
// Be today better, than you were yesterday!


// 1. Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua',
// 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// let a = 'hello';
// console.log(a);
// alert(a);
// document.write(a);
//
// let b = 'own';
// console.log(b);
// alert(b);
// document.write(b);
//
// let m = 'com';
// console.log(m);
// alert(m);
// document.write(m);
//
// let c = 'ua';
// console.log(c);
// alert(c);
// document.write(c);
//
// let d =  1;
// console.log(d);
// alert(d);
// document.write(d);
//
// let e = 10;
// console.log(e);
// alert(e);
// document.write(e);
//
// let f = -999;
// console.log(f);
// alert(f);
// document.write(f);
//
// let g = 123;
// console.log(g);
// alert(g);
// document.write(g);
//
// let h = 3.14;
// console.log(h);
// alert(h);
// document.write(h);
//
// let i = 2.7;
// console.log(i);
// alert(i);
// document.write(i);
//
//
// let j = 16;
// console.log(j);
// alert(j);
// document.write(j);
//
// let k = true;
// console.log(k);
// alert(k);
// document.write(k);
//
// let l = false;
// console.log(l);
// alert(l);
// document.write(l);


// 3. Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// a = 'hi';
// console.log(a);
// alert(a);
// document.write(a);
//
// b = 'web';
// console.log(b);
// alert(b);
// document.write(b);
//
// m = 'org';
// console.log(m);
// alert(m);
// document.write(m);
//
// c = 'site';
// console.log(c);
// alert(c);
// document.write(c);
//
// d =  2;
// console.log(d);
// alert(d);
// document.write(d);
//
// e = 4;
// console.log(e);
// alert(e);
// document.write(e);
//
// f = -1022;
// console.log(f);
// alert(f);
// document.write(f);
//
// g = 234;
// console.log(g);
// alert(g);
// document.write(g);
//
// h = 3.15;
// console.log(h);
// alert(h);
// document.write(h);
//
// i = 2.92;
// console.log(i);
// alert(i);
// document.write(i);
//
//
// j = 77;
// console.log(j);
// alert(j);
// document.write(j);
//
// k = false;
// console.log(k);
// alert(k);
// document.write(k);
//
// l = true;
// console.log(l);
// alert(l);
// document.write(l);


// 5. За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
// По-Батькові та роками.
//   Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let name = prompt();
// let surname = prompt();
// let age = prompt();
//
// document.write(`My Congratulations ${name} ${surname}. You have ${age} years old.`)
// console.log(`My Congratulations ${name} ${surname}. You have ${age} years old.`)


// 7. Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація):
// let name = prompt();
// let surname = prompt();
// let age = prompt();
// console.log('My congratulations '+name+' '+surname+'. You are '+age+' years old.')


// 8. За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to
// number JS"). Вивести їх в консоль.
// const numberOne = prompt();
// console.log(parseInt(numberOne))
// const numberTwo = prompt();
// console.log(parseInt(numberTwo))
// const numberThree = prompt();
// console.log(parseInt(numberThree))


// 9. За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою
// parseInt. Додати їх всі мож собою і результат вивести в консоль.
// const number1 = parseInt(prompt('number1'));
// console.log(number1)
//
// const number2 = parseInt(prompt('number2'));
// console.log(number2)
//
// const number3 = parseInt(prompt('number3'));
// console.log(number3);
//
// const number4 = parseInt(prompt('number4'))
// console.log(number4)
//
// let result = number1 + number2 + number3 + number4;
// console.log(result);


// 10. За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
// 11. Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
// const number1 = parseFloat(prompt('number1'));
// console.log(number1);
//
// const number2 = parseFloat(prompt('number2'));
// console.log(number2);
//
// const number3 = parseFloat(prompt('number3'));
// console.log(number3);
// result = number1 + number2 + number3;
// console.log(result);


// 12. За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх
// (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
// let number1 = Math.round(prompt('number1'));
// console.log(number1);
//
// let number2 = Math.round(prompt('number2'));
// console.log(number2);
//
// let number3 = Math.round(prompt('number3'));
// console.log(number3);
//
// result = number1 + number2 + number3;
// console.log(result);


// 13. За допомогою prompt() отримати 2 цілих числа.
// Перше число - це число яке будуть підносити до степеня. Друге число - це число яке
// являється степенню. За допомогою Math.pow (Google) піднести перше число в степінь
// другого числа.
//
// Example. Число 1 = 5. Число 2 = 2. Результат = 25
// const number1 = prompt('6');
// const number2 = prompt('2')
// let power = Math.pow(number1, number2);
// console.log(power);


// 17. За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100;
// console.log(typeof a);
//
// let b = '100';
// console.log(typeof b);
//
// let c = true;
// console.log(typeof c);
//
// let d = 100;
// console.log(typeof d);


// 19. Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразаї не використовувати однакові оператори!!!
// // 5 ? 6 -> true
// console.log(5 !== 6);
//
// // 5 ? 6 -> false
// console.log(5 > 6);
//
// // 5 ? 6 -> false
// console.log(5 == 6);
//
// // 5 ? 6 -> false
// console.log(5 === 6);
// //
// // 10 ? 10 -> true
// console.log(10 == 10);
// //
// // 10 ? 10 -> true
// console.log(10 === 10);
// //
// // 10 ? 10 -> false
// console.log(10 !== 10);
// //
// // 10 ? 10 -> false
// console.log(10 < 10);
// //
// // 10 ? 10 -> false
// console.log(10 > 10);
// //
// // 123 ? '123' -> false
// console.log(123 === '123');
// //
// // 123 ? '123' -> true
// console.log(123 == '123')


//33.Додатково:
// - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
//   console.log(132 > 100 && 45 < 12 );
//    // false
//   console.log(34 > 33 && 23 < 90 );
//   // true
//   console.log(99 > 100 && 45 > 12 );
//   // false
//   console.log(132 > 100 || 45 < 12 );
//   // true
//   console.log(111 > 11 || 45 < 111 );
//   // true
//   console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
//   // true
//   console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
//   // true
//   console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
//   // false
//   console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
//   // true
//   console.log(!!'-1');
//   // Question true
//   console.log(!'-1');
//   // Question false
//   console.log(!!-1);
//   // true
//   console.log(!!'0');
//   // true
//   console.log(!'0');
//   // false
//   console.log(!!'null');
//   // true
//   console.log(!!'undefined');
//   // true
//   console.log('undefined');
//   // undefined
//   console.log(!!(3/'owu'));
//   // false
//   console.log(3/'owu');
//   // NaN
//   console.log((111 > 11 || 45 < 111) ||  !!'0');
//   true
//   console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));
//   false
// РОБОТА В АУДИТОРІЇ


// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string,
// number и  boolean.
//
// let str = ('Hi');
// let num = 123;
// let flag = true;
// let txt = "true";
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій
// отримайте числа:
// 34,
// 12,
// 66,
// 90,
// 87
// Старайтесь використовувати різні оператори.
// Example: 88 = (16 / 2) * 11
// let a1 = (25+25)* 2 - 66;
// console.log(a1);
// let a2 = 24 + 16 - 28
// console.log(a2);
// let a3 = 56 * 21 + 546 - 1656
// console.log(a3);
// let a4 = 34 * 3 - 12
// console.log(a4);
// let a5 = 8 * 9 + 15;
// console.log(a5);


// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
// let a6 = 2;
// 5 % 3,
// let a7 = 0;
// console.log(3 % 5);
// 5 + '3',
// '5' - 3,
// 75 + 'кг'
// let a6 = (5 % 3 );
// console.log(a6);
// let a7 = (3 % 10);
// console.log(a7);
// let a8 = (5 + '3');
// console.log(a8);
// let a9 = ('5' - 3);
// console.log(a9);
// let a10 = (75 + 'kg');
// console.log(a10);


// 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значееня площі зберігати в змінній s.
// height = 23;
// width = 10;
// s = height * width;
// console.log(s);


// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
// heightC = 10;
// dC = 4;
// v = heightC * dC;
// console.log(v);


// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// side1 = 3;
// side2 = 4;
// k = Math.sqrt(Math.pow(side1,2 ) + Math.pow(side2, 2));
// console.log(k);


// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
// str = ('Hello world');
// document.write(str);
// alert(str);
// console.log(str);


// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// let a = ('Kaapervud Frank Algernon \n 33 \n running');
// alert(a);


// 9. I might made mistake? Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write
// let str1 = 'Who';
// let str2 = 'are';
// let str3 = 'you';
// let concatenation = (''+str1+' '+str2+' '+str3+'?');
// document.write(concatenation);


// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); 205
// document.write(str - a + "<br/>"); 15
// document.write(str * "2" + "<br/>"); 40
// document.write(str / 2 + "<br/>"); 10


// 11. I have a problem with that exercise.Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
// let a = parseInt("3.14")
// console.log(a);
// // answer:3
// let b = parseInt("-7.875")
// console.log(b);
// // answer: -7
// let c = parseInt("435")
// console.log(c);
// // answer: 435
// let d = parseInt("Вася")
// console.log(d);
// // answer: Nan


// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные,
// которые будут использоваться далее, повторите код ниже
// let str = prompt("I am glad to hear you", "Lets start with")
// console.log(str);


// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел,
// // а вывод результата при помощи метода alert
// const num1 = parseInt(prompt('55'));
// const num2 = parseInt(prompt('42'));
// const sum = num1 + num2;
// alert(sum);
// console.log(num1 + num2)


// // 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно
// // выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// // Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при
// // помощи метода alert
// //
// const name = prompt('Fill in first name');
// const lastName = prompt('Fill in last name');
// const age = prompt('Fill in your age');
// alert('Good evening '+name+' '+lastName+', my congratulations you are '+age+'years old.')
// alert(`Good evening ${name} ${lastName}, my congratulations you are ${age} years old.`)



// =====================
// ======ДОП============
// =====================

// // 1. Три різних числа вводяться через prompt().
// // За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
// let number1 = prompt('number1');
// let number2 = prompt('number2');
// let number3 = prompt('number3');
//
// if (number1 >= number2 && number2 >= number3){
//     console.log(number1, number2, number3);
// } else if(number1 <= number2 && number1 >= number3){
//     console.log(number2, number1, number3)
// } else if(number1 <= number2 && number1 <= number3)
//      console.log(number3, number2, number1)


// // Все параматры получаем с клавиатуры!!!!
// // Имитируем поведение пешехода на перекстке.
// // Если светофор зеленый - вывести "иди".
// // Если светофор желтый - вывести "подожди".
// // Если светофор красный - вывести "стой".
// // Если светофор в аварийном режиме вывести "делай что хочешь"!
// let trafficLight = prompt('fill in a light');
//
// if(trafficLight === 'green'){
//     console.log('Go');
// } else if(trafficLight === 'red'){
//     console.log('Stop')
//
// } else if(trafficLight === 'yellow'){
//     console.log('Wait');
//
// } else if (trafficLight === 'broken'){
//     console.log('Do what you want')
// }




















