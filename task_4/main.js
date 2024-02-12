// Задача 1

// Создание двумерного массива

let array_numbers = [ [3, 6, 9], [2, 4, 6], [8, 1, 5]];
// Вывод содержимого в консоль
console.log();
for (let i = 0; i < array_numbers.length; i++) {
    console.log(array_numbers[i]);
}
// нахождение суммы
let sum = 0;
for (let row of array_numbers){
    for (let element of row){
        sum += element;
    }
}
console.log(sum);

//Подсчёт кол-ва элементов
console.log ();
for (let row of array_numbers) {
    console.log (row.length);
}

// Задача 2

// Создание массива объектов с информацией о пользователях
let users = [
    { name: 'Alice', age: 23 },
    { name: 'Bob', age: 19 },
    { name: 'Tom', age: 40 }
]
// Вывод значения св-ва 'age' для каждого объекта
for (let i = 0; i < users.length; i++){
    console.log(users[i].age);
}
// Изменение значения свойства 'age' каждого объекта
for (let i = 0; i < users.length; i++){
    users[i].age += 3; // Увеличение возраста на 3
}
// Проверка изменённых значений
for (let i = 0; i < users.length; i++) {
    console.log (users[i].age);
}

// Задача 3

// Создание объекта с информацией о компаниях и их сотрудниках
let companyData = {
    companyA: {
        name: 'Додо Пицца',
        employees: ['Alice', 'Bob', 'Tom']
    },
    companyB: {
        name: 'Жар-Пицца',
        employees: ['David', 'Eve', 'Neil', 'Niki']
    }
};

for (let i in companyData) {
    console.log(`Компания «${companyData[i].title}», сотрудники:`);
    for (let j in companyData[i].staff) {
        console.log(companyData[i].staff[j].name)
    };
    console.log("\n");
};