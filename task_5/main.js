// Создание объекта с данными о футбольном матче
let footballMatch = {
    teams: ['ЦСКА', 'Ростов'],
    score: [4, 1],
    stadium: 'Stadium Name',
    date: '2023-06-03',
    time: '17:00'
};

// Вывод всех свойств объекта на экран
for (let key in footballMatch) {
    console.log(key + ': ' + footballMatch[key]);
}

// Проверка счета матча и вывод сообщения о его исходе
if (footballMatch.score[0] > footballMatch.score[1]) {
    console.log('Победила команда ' + footballMatch.teams[0]);
} else if (footballMatch.score[0] < footballMatch.score[1]) {
    console.log('Победила команда ' + footballMatch.teams[1]);
} else {
    console.log('Ничья');
}