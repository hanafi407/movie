import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

const book1 = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81iAADNy2NL._AC_UL200_SR200,200_.jpg",
  title:
    "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break BadOnes",
  author: "James Clear",
};
const book2 = {
  img: "https://images-na.ssl-images-amazon.com/images/I/91lk9FG9xQL._AC_UL200_SR200,200_.jpg",
  title:
    "The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)",
  author: "Don Miguel Ruiz ",
};
const book3 = {
  img: "https://images-na.ssl-images-amazon.com/images/I/71KTSD8PwLS._AC_UL200_SR200,200_.jpg",
  title:
    "Taste: My Life Through Food",
  author: "Stanley Tucci",
};
function BookList() {
  return (
    <section className="booklist">
      <Book img={book1.img} title={book1.title} author={book1.author} />
      <Book img={book2.img} title={book2.title} author={book2.author} />
      <Book img={book3.img} title={book3.title} author={book3.author} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
