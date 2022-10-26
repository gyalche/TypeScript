class Fruit {
  readonly price: number; // readonly allows only access but cannt reassign the propterty;
  static count: number = 0;
  constructor(price: number) {
    this.price = price;
    Fruit.count++;
  }
}

const mango = new Fruit(20);
console.log(mango.price, Fruit.count);
const apple = new Fruit(21);
console.log(apple.price, Fruit.count);
