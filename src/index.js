import React from "react";
import ReactDom from "react-dom";

const Person = () => <h1>This Hamid</h1>;

function Greeting() {
  return (
    <div>
      <Person />
      <p>Just start to teach react</p>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
