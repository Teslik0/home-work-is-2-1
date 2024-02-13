let product =  {
    name:"tech",
    price: 15999,
    inStock: true,
    brand:"ASUS",
}
let specifications = {
    Model: "ASUS PRO",
    Color: "Black",
}
let sale = {
    discount: "скидка в честь др",
    percentage: 20,
    expirationDate: "2024-11-12"
}
let customer = {
    peoplename: "Bob",
    budget: 10000,
}

if ( product.inStock === true ) {
    console.log(`Товар ${product.name} есть на складе.`);
    } else {
        console.log(`Товара ${product.name} нет на складе.`);
    }
    if ( customer.budget >= product.price ) {
        console.log(`Денег достаточно дла ${product.name}. Его цена ${product.price}. Ваш бюджет = ${customer.budget}.`);
        console.log(`Товар - ${product.name}. Цена - ${product.price} руб. Наличие на складе - ${product.inStock}. Бренд - ${product.brand}.`);
        console.log(`Модель - ${specifications.Model}. Цвет - ${specifications.Color}.`);
    } else {
        console.log(`Ваш бюджет = ${customer.budget}, Вам не достаточно денег на товар. Цена товара ${product.name} - ${product.price}.`);
    }
    if ( sale.percentage > 0 ) {
        let result = product.price - (product.price / 100 * sale.percentage)
        console.log(`На ${product.name} действует скидка ${sale.discount} ${sale.percentage} %. Цена со скидкой = ${result}.`);
    } else {
        console.log(`На ${product.name} нет скидки.`);
    }