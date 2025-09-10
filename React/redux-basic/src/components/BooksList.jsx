import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, removeBook } from "../../redux/booksSlice";

function BooksList() {
  const books = useSelector((state) => state.books);
  console.log(books);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  const handleAdd = () => {
    dispatch(addBook({ name, author }));
    setName("");
    setAuthor("");
  };

  return (
    <>
      <h1>BooksList</h1>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter book title"
        value={name}
      />
      <br />
      <input
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Enter author name"
        value={author}
      />
      <br />
      <button onClick={handleAdd}>Add Book</button>
      {books.map((book, index) => {
        return (
          <div key={index}>
            <h3>{book.name}</h3>
            <p>{book.author}</p>
            <button onClick={() => dispatch(removeBook(index))}>Remove</button>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default BooksList;
