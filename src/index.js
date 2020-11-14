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
  const { img, title, author } = props;
  return (
    <article className="book">
      <BookImage img={img} alt={title} />
      <Title title={title} />
      <Author author={author} />
      {props.children}
    </article>
  );
};

const BookImage = ({ img, alt }) => <img src={img} alt={alt} />;

const Title = (props) => <h2>{props.title}</h2>;
const Author = (props) => <strong>{props.author.toUpperCase()}</strong>;

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          quaerat voluptate harum exercitationem.
        </p>
      </Book>
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
