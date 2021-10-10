import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

import{data} from './books'
import Book from './Book'

function BookList() {
  return (
    <section className="booklist">
      {data.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}



ReactDOM.render(<BookList />, document.getElementById("root"));
