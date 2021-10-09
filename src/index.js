import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img
    src="https://images-na.ssl-images-amazon.com/images/I/81iAADNy2NL._AC_UL200_SR200,200_.jpg"
    alt=""
  />
      <h1>
    Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones
  </h1>
       <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    James Clear
  </h4>
    </article>
  );
};


ReactDOM.render(<BookList />, document.getElementById("root"));
