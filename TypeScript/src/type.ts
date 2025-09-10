type RGB = [number, number, number];

function randomColor(): RGB {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return [r, g, b];
}

console.log(randomColor());

// *****************************

type User = {
  name: string;
  age: number;
};

const userOne: User = {
  name: "John",
  age: 20,
};
function formatUser(user: User): void {
  console.log(user.name);
}
formatUser({ name: "MT", age: 22 });
formatUser(userOne);

// ***********************************

// type Person ={
//     name: string,
//     age: number
// }
// type Person = {
//     city: string
// }

interface Person {
  name: string;
  age: number;
}
interface Person {
  city: string;
}

const newPerson: Person = {
  name: "MT",
  age: 10,
  city: "ygn",
};
