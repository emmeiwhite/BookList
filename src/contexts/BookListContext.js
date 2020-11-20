import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookListContext = createContext();

const BookListContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "name of the wind", author: "patrick rothfuss", id: 1 },
    { title: "the final empire", author: "brandon sanderson", id: 2 },
  ]);

  const addBook = (book) => {
    book.id = uuidv4();
    setBooks([...books, book]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookListContext.Provider value={{ books, removeBook, addBook }}>
      {props.children}
    </BookListContext.Provider>
  );
};

export default BookListContextProvider;
