import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

const bookList = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg",
    title: "A Promise Land",
    author: "Barack Obama",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71Ks%2B8mKq2L._AC_UL200_SR200,200_.jpg",
    title: "Diary of a Wimpy Kid - The Deep End",
    author: "Jeff Kinney",
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81Kc8OsbDxL._AC_UL200_SR200,200_.jpg",
    title: "Greenlights",
    author: "Matthew McConaughey",
  },
  {
    id: 4,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81hx39H8JEL._AC_UL200_SR200,200_.jpg",
    title: "The World Needs Who You Were Made to Be",
    author: "Joanna Gaines",
  },
];

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
