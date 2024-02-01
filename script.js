//2.3 lesson
//let password = 'пароль';

//let exit = prompt('Введите пароль');
//if (exit === password) {
//alert('Пароль введен верно');
//} else {
//alert('Пароль введен не верно');

//}

//let c = 1;
//if (c > 0 && c < 10) {
//console.log('Верно');
//} else {
//console.log('Неверно');
//}

//let d = 150;
//let e = 7;
//if (d > 100 || e > 100) {
//console.log('Верно');
//} else {
//console.log('Неверно');
//}

//let a = '2';
//let b = '3';
//alert(Number(a) + Number(b));


//let mounthNumber = String(prompt('Введите номер месяца'));

//switch (mounthNumber) {
//case '12':
//case '1':
//case '2':
//console.log('зима')
//break;
//case '3':
//case '4':
//case '5':
//console.log('весна')
//break;
//case '6':
//case '7':
//case '8':
//console.log('лето')
//break;
//case '9':
//case '10':
//case '11':
//console.log('осень')
//break;
//default:
//console.log('Такой месяц еще не придумали')
//break;
//}

//2.4 lesson
//1
//let h = 0
//do {
//console.log('Привет');
//h++
//} while (h < 2);

//2
//let i = 1;
//do {
//console.log(i);
//i++;
//} while (i < 6);

//3
//let a = 7;
//do {
//console.log(a);
//a++;
//} while (a < 23 && a > 7);
//4
//const obj = {
//'Коля': '200',
//'Вася': '300',
//'Петя': '400'
//}
//for (let salary in obj) {
//console.log(`${salary} - зарплата ${obj[salary]} долларов`);
//}
//5
//let n = 1000;
//let num = 0;
//while (n >= 50) {
//n /= 2;
//num++;
//}
//console.log(n);
//console.log(num);

//6

//for (let dayNumber = 5; dayNumber <= 31; dayNumber += 7) {
//console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
//}

//2.5 lesson

//1
////function min(a, b) {
////let minA = a < b;
////if (minA) {
////console.log(a);
////} else {
////console.log(b)
////}
////}
////min(5, 5);

//2
//let number = prompt('Введите любое число');
//function usernum(number) {
//if (number % 2 === 0) {
//return 'Число четное';
//} else {
//return 'Число не четное';
//}
//}
//let result = usernum(number);
//console.log(result);

//3.1
//function userSquare(num) {
//console.log(num * num);
//}
//userSquare(6);

//3.2
//function printSquare(number) {
//return number * number;
//}
//let total = printSquare(8);
//console.log(total);

////4
//l//et age = prompt('Сколько Вам лет?');
//function userAge(age) {
//if (age < 0) {
//return 'Вы ввели неправильное значение';
//} else if (age > 0 && age < 12) {
//return 'Привет, друг!';
//} if (age >= 13) {
//return 'Добро пожаловать!';
//}
//}//
//alert(userAge(age));

//5
//function userCheck(a, b) {
//if (isNaN(a) || isNaN(b)) {
//return 'Одно или оба значения не являются числом';
//} else {
//return a * b;
//}
//}
//console.log(userCheck('r', 5));

//6

//let n = prompt('Введите число');
//function checkNum() {
//if (isNaN(n)) {
//return 'Переданный параметр не является числом';
//} else {
//return n * 3;
//}
//}
//alert(checkNum());

//7 
//function getRectangleArea() {//
//return this.radius * 3.14;
//}
//function getRectanglePerimeter() {//
//return this.radius * 2 * 3.14;
//}
//c//onst circle1 = {//
//radius: 2,
//getArea: getRectangleArea,
//getPerimeter: getRectanglePerimeter,
//}
//const circle2 = {
//radius: 4,
//getArea: getRectangleArea,
//getPerimeter: getRectanglePerimeter,
//}
//console.log(circle1.getArea());
//console.log(circle1.getPerimeter());
//console.log(circle2.getArea());
//onsole.log(circle2.getPerimeter());

//8
//let mounth = Number(prompt('Ввведите номер месяца'));
//function date(mounth) {
//if (mounth === 12 || mounth === 1 && mounth ===2) {
//return 'Зима';
//} else if (mounth >= 3 && mounth <= 5) {
//return 'Весна';
//}
//else if (mounth >= 6 && mounth <= 8) {
//return 'Лето';
//}
//else if (mounth >= 9 && mounth <= 11) {
//return 'Осень';
//} else {
//return 'Такого месяца не существует';
//}

//}
//alert(date(mounth));

// 2.6
//1
//const numbs = [1, 5, 4, 10, 0, 3];
//for (let index = 0;  index < numbs.length; index++) {
//console.log(numbs[index]);
//if(numbs[index] === 10) break;

//}
//2

//let numbs2 = [1, 5, 4, 10, 0, 3];
//for (let i = 0; i < numbs2.length; i++) {
//if (numbs2[i] == 4) {
//console.log(i);
//}

//}

//3
//let number = [1, 3, 5, 10, 20];
//number = number.join('');
//console.log(number);

//4
//let arr = [
//[1, 1, 1],
//[1, 1, 1],
//[1, 1, 1],
//];
//for( let i = 0; i < 3; i++) {
//arr[i] = [1];
//for(let e = 0; e < 3; e++) {
//arr[i][e] = 1;
//};
//console.log(arr);
//};

//5
//let num = [1, 1, 1];
//num.push(2, 2, 2);
//console.log(num);

//6
//let num1 = [9, 8, 7, 'a', 6, 5];
//let num2 = num1.sort();
//num2 = num2.pop();
//console.log(num1);

//7
//const b = [9, 8, 7, 6, 5];
//if (b.includes(Number(prompt('Угадай число от 1 до 10')))) {
//alert('Угадал')
//} else {
//alert('Не угадал')
//}

//8?????
//let alf = 'abcdef';
//let result = alf.split('');
//result.reverse();
//let newResult = result.join('');
//console.log(newResult);

//9
//let mus = [
//[1, 2, 3],
//[4, 5, 6],
//];
//let flat = mus.flat();
//console.log(flat);

//10
//let num3 = [1, 2, 3, 4, 5];
//for (let i = 0; i < num3.length - 1; i++) {
//console.log(num3[i] + num3[i + 1]);

//}
//11
//function whole(array) {
//return array.map(num => num * num);
//}
//let resul = whole([1, 3, 5])
//console.log(resul);

//12
//function getLengthWords(words) {
//return words.map(words => words.length);
//}

//let res = getLengthWords(['слово', '', 'слог', 'длинное предложение']);
//console.log(res);

//13
//function filterPositive(array) {
//let result1 = [];
//for (let i = 0; i < array.length; i++) {
//if (array[i] < 0) {
//result1.push(array[i]);
//}
//}
//return result1;
//} 
//let got = filterPositive([-25, 25, 0, -1000, -2]);
//console.log(got);

//2.7.1
let str = 'Cтрока';
console.log(new String(str).toUpperCase());

//Задание 2.2.7
//Создайте функцию, которая в качестве параметров принимает 
//массив строк и строку. Возвращать данная функция должна новый массив, содержащий только те элементы переданного массива, которые начинаются с переданной строки. 
//Регистр символов не должен влиять.
//1ый вариант
//function searchStart(arr, str) {
    //return arr.filter(el => el.toLocaleLowerCase().startsWith(str));
//}
//console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
//console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // ['груша']
//console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // []
//2ой вариант
//function str(arr, word) {
    //return arr.map(element => element.toLocaleLowerCase()).filter(element => element.startsWith(word));
//}
//console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
//console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // ['груша']
//console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // []

//3ий вариант
function searchStart(arr, str) {
    let result = [];
    arr.forEach((el) => {
        if (el.toLocaleLowerCase().startsWith(str)) {
            result.push(el);
        }
    })
    return result;
}
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // ['груша']
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // []

//Задание 3.2.7
//Округлите число 32.58884:
//1.До меньшего целого
//2.До большего целого
//3.До ближайшего целого
let getRound = 32.58884
let resultmax = Math.round(getRound)
console.log(resultmax); //до большего целого

let getFloor = 32.58884;
let result = Math.floor(getFloor);
console.log(result);//до ближайшего целого

let getCeil = 32.58884;
let result1 = Math.ceil(getCeil);
console.log(result1);

//Задание 4.2.7
//Даны числа 52, 53, 49, 77, 21, 32. 
//Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.
let array = [52, 53, 49, 77, 21, 32];
let max = Math.max(...array);
let min = Math.min(...array);
console.log(max);
console.log(min);

//Задание 5.2.7
//Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.

function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandomInt(1, 10));

//Задание 6.2.7
//Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа. 
//Длина массива должна быть в 2 раза меньше переданного числа.
function getRandomArrNumbers(arr) {
    let newArr = []//пустой массив
    let el = Math.floor(arr / 2);//длину массива уменьшила в два раза и округлила до меньшего числа

    for (let i = 0; i < el; i++) {
        newArr[i] = Math.floor(Math.random() * arr);
    }
    return newArr
}

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));
console.log(getRandomArrNumbers(15));


//Задание 7.2.7
//Напишите функцию, которая на вход принимает 2 целых числа,
//а в качестве результата возвращает случайное целое число в этом диапазоне.

function randomNumb(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
console.log(randomNumb(5, 15));

//Задание 8.2.7
//Выведите в консоль текущую дату в стандартном режиме. 
//Используйте один из трех рассмотренных в уроке способов.

let currentDate = new Date();
console.log(currentDate);


//Задание 9.2.7
//Создайте переменную currentDate и сохраните в нее текущую дату. 
//Выведите дату, которая наступит через 73 дня после текущей.
let currentDatee = new Date();
//console.log(currentDatee);//Tue Jan 30 2024 22:05:39 GMT+0500 (Екатеринбург, стандартное время)
currentDatee.setDate(currentDatee.getDate() + 73);
console.log(currentDatee);

//Задание 10.2.7
//Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:
//Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
//Время: <часы>:<минуты>:<секунды>
//Время, которое будет выведено, также хранится в объекте Date.

const days = ["Воскресение", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//массив где хранится названия дней недели
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
//массив где хранится названия месяцев на русском
let myDate = new Date();

let seconds = myDate.getSeconds().toString().padStart(2, '0');
let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()];
let fullTime = "Время: " + myDate.getHours() + " : " + myDate.getMinutes() + " : " + myDate.getSeconds();

console.log(fullDate);
console.log(fullTime);

