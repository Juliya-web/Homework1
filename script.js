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
let h = 0
do {
    console.log('Привет');
    h++
} while (h < 2);

//2
let i = 1;
do {
    console.log(i);
    i++;
} while (i < 6);

//3
let a = 7;
do {
    console.log(a);
    a++;
} while (a < 23 && a > 7);
//4
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}
for (let salary in obj) {
    console.log(`${salary} - зарплата ${obj[salary]} долларов`);
}
//5
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(n);
console.log(num);

//6

for (let dayNumber = 5; dayNumber <= 31; dayNumber += 7) {
    console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
}