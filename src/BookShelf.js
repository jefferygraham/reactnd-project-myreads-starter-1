import React from "react";
import Book from "./Book";

const BookShelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelf.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books
            .filter((book) => book.shelf === props.shelf.shelf)
            .map((book) => (
              <Book
                book={book}
                changeShelf={props.update}
                shelf={book.shelf}
                key={book.id}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
