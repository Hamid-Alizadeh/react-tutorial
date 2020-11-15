import React from "react";

import BookImage from "./BookImage";
import Title from "./Title";
import Author from "./Author";

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

export default Book;
