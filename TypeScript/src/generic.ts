// function getFirstStringElement(arr: string[]): string {
//   return arr[0];
// }

// let names = ["John", "Rose"];
// // console.log(getFirstStringElement(names))

// let numbers = [1, 2, 3];
// // console.log(getFirstStringElement(numbers))

// function getFirstAnyElement(arr: any[]): any {
//     return arr[0];
// }
// console.log(getFirstAnyElement(numbers))
// console.log(getFirstAnyElement([10, "hello", true]))

// let value:any = getFirstAnyElement([10, "hello", true]);
// value.toLowerCase();
// console.log(value)

// *****************************

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

let names: string[] = ["John", "Rose"];
console.log(getFirstElement(names))

let numbers = [1, 2, 3];
console.log(getFirstElement(numbers))

let booleans:boolean[] = [true, false];
console.log(getFirstElement(booleans))

let value = getFirstElement([10, "hello", true]);
// value.toLowerCase(); //error
