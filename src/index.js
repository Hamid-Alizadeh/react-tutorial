import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg",
  title: "A Promise Land",
  author: "Barack Obama",
};

const secondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/71Ks%2B8mKq2L._AC_UL200_SR200,200_.jpg",
  title: "The Deep End (Diary of a Wimpy Kid Book 15)",
  author: "Jeff Kinney",
};

const Book = (props) => {
  return (
    <article className="book">
      <BookImage img={props.img} title={props.title} />
      <Title title={props.title} />
      <Author author={props.author} />
    </article>
  );
};

const BookImage = (props) => <img src={props.img} alt={props.title} />;

const Title = (props) => <h2>{props.title}</h2>;
const Author = (props) => <strong>{props.author.toUpperCase()}</strong>;

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
