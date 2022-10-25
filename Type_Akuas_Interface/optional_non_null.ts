//Optional properties and Non-null Assertion;

type Frit = {
  name: string;
  color: string;
  allSeason: boolean;
  price?: number | undefined; //this is ? called the optional parameter
};

let Fruit1: Frit = {
  name: 'Mango',
  color: 'Yellow',
  allSeason: false,
};

function getPrice(price: number) {
  return price + 10;
}
console.log(getPrice(Fruit1.price!));
