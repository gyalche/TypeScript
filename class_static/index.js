"use strict";
class Fruit {
    constructor(price) {
        this.price = price;
        Fruit.count++;
    }
}
Fruit.count = 0;
const mango = new Fruit(20);
console.log(mango.price, Fruit.count);
const apple = new Fruit(21);
console.log(apple.price, Fruit.count);
