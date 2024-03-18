const calculateTotalCost = () => {
    // Инициализация переменных
    const inputPhones = parseInt(document.querySelector('#phone_quantity').value);
    const inputPhonesPrice = parseInt(document.querySelector('#phone_price').value);
    const inputLaptops = parseInt(document.querySelector('#laptops_quantity').value);
    const inputLaptopsPrice = parseInt(document.querySelector('#laptops_price').value);
    const inputTablets = parseInt(document.querySelector('#tablets_quantity').value);
    const inputTabletsPrice = parseInt(document.querySelector('#tablets_price').value);


    if(isNaN(inputPhones) || isNaN(inputPhonesPrice) || isNaN(inputLaptops) || isNaN(inputLaptopsPrice) || isNaN(inputTablets) || isNaN(inputTabletsPrice)) {
        alert("Заполните все поля!");
        return;
    };

    if (0 >= inputPhones || 0 >= inputLaptops > 0 || 0 >= Tablets) {
        alert("Количество товара не может быть отрицательным!");
        return;
     };


     if (0 > inputPhonesPrice || 0 > inputLaptopsPrice > 0 || 0 > inputTabletsPrice) {
        alert("Цена товара не может быть ноль или отрицательным!");
        return;
     };

    
     let electronicsSum = (inputPhones * inputPhonesPrice) + (inputLaptops * inputLaptopsPrice) + (inputTablets * inputTabletsPrice);

     const resultDiv = document.querySelector('#result');
     resultDiv.innerHTML = `<p>Общая стоимость: ${electronicsSum.toFixed(2)}</p>`;
}
