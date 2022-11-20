import React, { useState } from "react"
import { Link } from "react-router-dom";
import "../Styles/Search.css";
import BooksShelf from "./BooksShelf";


function Search(props) {

  const [text, setText] = useState("");
  const [books, setBooks] = useState(props.books);

  const handleTextChange = (e) => {
    setText(e.target.value);
    setBooks(props.books)
    
  };

  function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = books["books"].filter(book => 
      book.title.toString().toLowerCase().includes(text.toString().toLowerCase()) 
    );
    const result1 = books["books"].filter(author => 
      author.authors.toString().toLowerCase().includes(text.toString().toLowerCase()) 
    );
    const finalResult = removeDuplicates(result.concat(result1));
    const obj = {"books": finalResult}
    console.log(props.books)
    setBooks(obj)
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit} style={{marginBottom:"85px"}}>
        <div className="div-form">
          <Link to="/">
            <svg className="form-arrow" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
          </Link>
          <input className="form"
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder= "Search by title, author, or ISBN"
          />
        </div>
      </form>
      <BooksShelf makeRender={props.makeRender} books={books} shelf="any" any = "true" />
    </div>

  )
}

export default Search