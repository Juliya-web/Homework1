let a = "10";
alert(a);

let iphone = "Год выпуска первого IPhone - 2007";
alert(iphone);

let creator = "Создатель языка Java Script - Брендан Эйх";
alert(creator);

let number10 = 10;
let number2 = 2;
let result = number10 + number2;
alert(result);
let result1 = number10 - number2;
alert(result1);
let result2 = number10 * number2;
alert(result2);
let result3 = number10 / number2;
alert(result3);

let aa = 2;
let result4 = aa ** 5;
alert(result4);

let a1 = 9;
let b1 = 2;
alert(a1 % b1);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

let age = prompt("Сколько вам лет?");
alert(age);

let user = {
    name: "Juliya",
    age:34,
    isAdmin:true,
};
user ['cityofresidence'] = "Ufa";
user ['age'] = 30;
delete user['cityofresidence'];

let info = prompt("Какую информацию хотите узнать о пользователе");
alert(user[info]);

let name = prompt("как вас зовут?");
alert(`Привет, ${name}!`);

