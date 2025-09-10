// console.log("Hello World")
// console.log("Hi, TS")

let age: number = 20;
let username: string = "MT";
let isMobile: boolean = true;

console.log(username);
isMobile = false;

// ***********************************

let username2 = "Khine";
// username2 = 20; // error

let place: null;
place = null;
console.log(place);
// ***********************************

let fruits: string[] = ["apple", "orange", "mango"];
// fruits.push(2) // error
fruits.push("kiwi");

// *******************************
let fruits2 = ["apple", "orange"];
// fruits2.push(2) // error

// **************************************

const allItems = ["apple", 2, true];
allItems.push(false);

// *************************************

let user: { name: string; age: number; id: number } = {
  name: "MT",
  age: 20,
  id: 1,
};

// **************************************

function sum(num1: number, num2: number): number {
  return num1 + num2;
}
sum(20, 30);
// sum("mt", 20) // error
// ******************************************

function allProducts(items: number[]): void {
  let total = items.reduce((sum, item) => sum + item, 0);
  // return total // error
}

allProducts([20, 40, 60]);

// ********************************************
let hsla: [number, string, string, number];
hsla = [100, "100%", "50%", 10];

// ******************************************
// let num: [number, number] = [12, NaN]

function coor(): [number, number] {
  return [100, 200];
}

// ************************************
let person: [name: string, age: number];
person = ["John", 20];
console.log(person[0]);

// *******************************************

// Interface

interface Author {
  name: string;
  avator: string;
}
const authorOne: Author = {
  name: "John",
  avator: "/img1/jpg",
};

interface Book {
  title: string;
  id: number;
  tags: string[];
  created_at: Date;
  author: Author;
}
const newBook: Book = {
  title: "Book 1",
  id: 1,
  tags: ["tag1", "tag2"],
  created_at: new Date(),
  author: authorOne,
};

function createBook(book: Book): void {
  console.log(`Create a book ${book.title}`);
}
createBook(newBook);

let books: Book[] = [];
books.push({
  title: "Book 1",
  id: 1,
  tags: ["tag1", "tag2"],
  created_at: new Date(),
  author: authorOne,
});
console.log(books)