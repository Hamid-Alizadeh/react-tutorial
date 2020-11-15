import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

import { bookList } from "./books";

import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {bookList.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
