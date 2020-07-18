import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

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

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
};

export default BookShelf;
