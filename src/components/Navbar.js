import React, { useContext } from "react";
import { BookListContext } from "./../contexts/BookListContext";

export default function Navbar() {
  const { books } = useContext(BookListContext);
  console.log(books);
  return (
    <div>
      <h1>BookList</h1>
      <p>There are {books.length} books to be read</p>
    </div>
  );
}
