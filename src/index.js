import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

const bookImage =
  "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg";
const bookTitle = "A Promise Land";
const bookAuthor = "Barack Obama";

const Book = () => {
  return (
    <article className="book">
      <BookImage />
      <Title />
      <Author />
    </article>
  );
};

const BookImage = () => <img src={bookImage} alt={bookTitle} />;

const Title = () => <h2>{bookTitle}</h2>;
const Author = () => <strong>{bookAuthor}</strong>;

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
