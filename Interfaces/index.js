"use strict";
function getFruit(fruit) {
    return `${fruit.name} is having price of $${fruit.price}`;
}
console.log(getFruit({ name: 'Mango', price: 20 }));
