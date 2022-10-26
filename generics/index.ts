//Generics;
//why we need generics;
//=> genreic means a thing that can be used in difference scenario and adapt to that scenario;


let arrNum = [23, 4356, 6, 7, 8, 8, 34];
let arrString = ['a', 'b', 'c', 'd', 'e'];
//<T> Generic type</T>
function getRandomElement<T>(arr: T[]): T {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

let result: string;

result = getRandomElement(arrString);
getRandomElement(arrNum);
console.log(typeof result);
