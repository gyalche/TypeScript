//Type Alias and Interface;

//this is a type alias;
// type Fruit = {
//   name: string;
//   color: string;
// };

//interaface is just like type;
//type is restricted just for alias thing;

interface Fruit {
  name: string;
  color: string;
}
interface Fruit {
  allSeason: boolean;
}
interface Mango extends Fruit {
  price: number;
}

let fruit1: Mango = {
  name: 'Orange',
  color: 'blue',
  allSeason: false,
  price: 0,
};

//interaface is just like type;
//type is restricted just for alias thing

// i  preffer to use interface;
