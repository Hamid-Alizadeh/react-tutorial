import React from "react";
import ReactDom from "react-dom";

const Book = () => {
  return (
    <article>
      <BookImage />
      <Title />
      <Author />
    </article>
  );
};

const BookImage = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg"
    alt="A Promise Land"
  />
);

const Title = () => <h2>A Promised Land</h2>;
const Author = () => <strong>Barack Obama</strong>;

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
