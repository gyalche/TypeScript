interface Fruit {
  name: string;
  readonly price: number;
  color?: string;
}

function getFruit(fruit: Fruit) {
  return `${fruit.name} is having price of $${fruit.price}`;
}

console.log(getFruit({ name: 'Mango', price: 2 }));

class MyFruit implements Fruit {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
