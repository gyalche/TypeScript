//Union Type;
let ID: number | string | boolean;
ID = 123;
ID = 'name';
ID = true;

function printId(id: number | string) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printId(23);
