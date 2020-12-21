'use strict';

// Здесь будут представлены решения ко всем частям второй задачи (2.1, 2.2 и 2.3)
// Дополним информацию о каждом продукте его количеством, содержащимся в корзине

// Объект будет содержать в себе стартовую цену корзину, массив с информацией о продуктах, 
// положенных в корзину и функцию, вычисляющую итоговую стоимость корзины.
let cart = {
    busketPrice: 0,
    prodList: {
        product1:{
            name:'Японский язык для начинающих Ч.1. Нечаева',
            price:1214,
            amount:1,
        },
        product2:{
            name:'Японский язык для начинающих Ч.2. Нечаева',
            price:1214,
            amount:1,
        },
        product3:{
            name:'Самоучитель японского языка. Лаврентьев',
            price:1174,
            amount:1,
        },
    },
    totalBasketPrice: function () {
        for (let prod in this.prodList) {
          this.busketPrice += this.prodList[prod].price * this.prodList[prod].amount;
        }
        return this.busketPrice;
    },
};
console.log(`Итоговая стоимость: ${cart.totalBasketPrice()} р.`); 