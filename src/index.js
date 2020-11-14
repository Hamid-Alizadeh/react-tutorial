import React from "react";
import ReactDom from "react-dom";

const Person = () => <h1>This Hamid</h1>;
const Message = () => {
  return (
    <p>
      We are leaning <strong>React</strong>
    </p>
  );
};

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
