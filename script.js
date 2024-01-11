let password = 'пароль';

let exit = prompt('Введите пароль');
if (exit === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен не верно');

}

let c = 1;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let d = 150;
let e = 7;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let a = '2';
let b = '3';
alert(Number(a) + Number(b));


let mounthNumber = String(prompt('Введите номер месяца'));

switch (mounthNumber) {
    case '12':
    case '1':
    case '2':
        console.log('зима')
        break;
    case '3':
    case '4':
    case '5':
        console.log('весна')
        break;
    case '6':
    case '7':
    case '8':
        console.log('лето')
        break;
    case '9':
    case '10':
    case '11':
        console.log('осень')
        break;
    default:
        console.log('Такой месяц еще не придумали')
        break;
}