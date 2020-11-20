import React, { useState, useContext } from "react";
import { BookListContext } from "./../contexts/BookListContext";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const { addBook } = useContext(BookListContext);

  const formSubmit = (e) => {
    e.preventDefault();
    addBook({ title: title, author: author });
    setTitle("");
    setAuthor("");
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="title"
          value={title}
        />
        <input
          type="text"
          value="author"
          onChange={(e) => setAuthor(e.target.value)}
          required
          placeholder="author"
          value={author}
        />

        <button>Add Book</button>
      </form>
    </div>
  );
}
