import React from "react";
import ReactDom from "react-dom";
//CSS
import "./index.css";

//Books and book
import { data } from "./books";
import { Book } from "./Book";

//La palabra key es para asignarle un identificador unico a cada objeto
function BookList() {
  return (
    <section className="booklist">
     {data.map((book)=>{
         return <Book key={book.ID} {...book}></Book>;
     })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
