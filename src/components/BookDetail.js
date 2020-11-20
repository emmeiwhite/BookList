import React, { useContext } from "react";
import { BookListContext } from "./../contexts/BookListContext";
import "./BookDetail.css";

export default function BookDetail({ book }) {
  const { removeBook } = useContext(BookListContext);
  return (
    <div className="book-detail">
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <button onClick={() => removeBook(book.id)}>Delete Book</button>
    </div>
  );
}
