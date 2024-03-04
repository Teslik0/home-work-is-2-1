// Вариант 14

function create_car_list() {
    let makes = prompt("Введите список марок машин через запятую:");
    let years = prompt("Введите список годов выпуска через запятую:");

    makes = makes.split(",");
    years = years.split(",");

    let car_list = [];

    for (let i = 0; i < makes.length; i++) {
        car_list.push({make: makes[i], year: years[i]});
    }

    return car_list;
}

let cars = create_car_list();
console.log(cars);