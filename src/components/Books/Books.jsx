import React from "react";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {
  const { books } = useLoaderData();
  console.log(books);

  return (
    <section className="container">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {books.map((book) => (
          <Book key={book.isbn13} book={book}></Book>
        ))}
      </div>
    </section>
  );
};

export default Books;
