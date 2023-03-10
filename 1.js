const far = (c) => (9 / 5) * c + 32;
const cel = +prompt('Введите градусы Цельсия: ');
alert(`Цельсий: ${cel} , Фаренгейт: ${far(cel).toFixed(1)}`);