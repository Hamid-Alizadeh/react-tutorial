import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

import { bookList } from "./books";

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <BookImage img={img} alt={title} />
      <Title title={title} />
      <Author author={author} />
    </article>
  );
};

const BookImage = ({ img, alt }) => <img src={img} alt={alt} />;

const Title = (props) => <h2>{props.title}</h2>;
const Author = (props) => <strong>{props.author.toUpperCase()}</strong>;

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
