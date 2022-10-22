let year: number = 2022;

//never type;
// function sum(a: number, b: number) {
//    a + b;
// }

//never type;
function raiseError(message: string): never {
  throw new Error(message);
  //it will now return below anythis here
  console.log('error');
}
