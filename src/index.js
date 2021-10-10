import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81iAADNy2NL._AC_UL200_SR200,200_.jpg",
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break BadOnes",
    author: "James Clear",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/91lk9FG9xQL._AC_UL200_SR200,200_.jpg",
    title: "The Four Agreements: A Practical Guide to Personal Freedom",
    author: "Don Miguel Ruiz ",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/71KTSD8PwLS._AC_UL200_SR200,200_.jpg",
    title: "Taste: My Life Through Food",
    author: "Stanley Tucci",
  },
  {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/81dAl0oqP9L._AC_UL200_SR200,200_.jpg",
    title: "The Wish",
    author: "Nicholas Sparks",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props)
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
