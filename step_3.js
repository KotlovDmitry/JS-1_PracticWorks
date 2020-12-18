'use strict';
// Возьмем для массива данные из второй задачи

let cart_2 = [
    {
        product: "Японский язык для начинающих Ч.1. Нечаева",
        price: 1214
    },
    {
        product: "Японский язык для начинающих Ч.2. Нечаева",
        price: 1214
    },
    {
        product: "Самоучитель японского языка. Лаврентьев",
        price: 1174
    }
];
function countBasketPrice(cart_2) {
    let funBasketPrice = 0;
    for (let prod of cart_2){
        funBasketPrice += prod.price;
    }
    return funBasketPrice;
}
console.log("Стоимость корзины: " + countBasketPrice(cart_2) + " р.");