import React, { useContext } from "react";
import { BookListContext } from "./../contexts/BookListContext";
import BookDetail from "./BookDetail";

export default function BookList() {
  const { books } = useContext(BookListContext);
  return (
    <div>
      {books.length ? (
        books.map((book) => {
          return <BookDetail book={book} key={book.id} />;
        })
      ) : (
        <p>All the books have been read so far :)</p>
      )}
    </div>
  );
}
