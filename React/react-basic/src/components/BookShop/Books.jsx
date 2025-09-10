import React from "react";
import Book from "./Book";

const items = [
  {
    id: 1,
    title: "Book 1",
    description: "Book 1 description",
  },
  {
    id: 2,
    title: "Book 2",
    description: "Book 2 description",
  },
  {
    id: 3,
    title: "Book 3",
    description: "Book 3 description",
  },
];

function Books() {
  
  return (
    <>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <Book item={item}></Book>
          </div>
        );
      })}
    </>
  );
}

export default Books;
