function far(c) {
    const f = (9 / 5) * c + 32;
    return +f.toFixed(1);
}
const c = +prompt('Введите градусы Цельсия: ');
alert(`Цельсий: ${c} , Фаренгейт: ${far(c)}`);