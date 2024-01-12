//8
function date() {
    let mounth = Number(prompt('Ввведите номер месяца'));
    if (mounth === 12 || mounth === 1 && mounth === 2) {
        return 'Зима';
    } else if (mounth >= 3 && mounth <= 5) {
        return 'Весна';
    }
    else if (mounth >= 6 && mounth <= 8) {
        return 'Лето';
    }
    else if (mounth >= 9 && mounth <= 11) {
        return 'Осень';
    } else {
        return 'Такого месяца не существует';
    }
}