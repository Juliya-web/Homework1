//8
function date() {
    let mounth = Number(prompt('Ввведите номер месяца'));
    if (mounth === 12 || mounth === 1 && mounth === 2) {
        alert('Зима');
    } else if (mounth >= 3 && mounth <= 5) {
        alert ('Весна');
    }
    else if (mounth >= 6 && mounth <= 8) {
        alert ('Лето');
    }
    else if (mounth >= 9 && mounth <= 11) {
        alert ('Осень');
    } else {
        alert ('Такого месяца не существует');
    }
}