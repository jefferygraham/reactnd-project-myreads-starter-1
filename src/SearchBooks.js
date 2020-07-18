import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import PropTypes from "prop-types";

class SearchBooks extends Component {
  state = {
    query: "",
    books: [],
  };

  getShelf = (book) => {
    const foundBook = this.props.mainBooks.filter((b) => b.id === book.id);
    if (foundBook.length > 0) {
      return foundBook[0].shelf;
    }
    return "none";
  };

  searchBooks = (query) => {
    BooksAPI.search(query).then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  };

  handleChange = (query) => {
    this.setState(() => ({
      query: query,
    }));
    this.searchBooks(query);
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
            onClick={() => this.setState({ showSearchPage: false })}
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              onChange={(e) => this.handleChange(e.target.value)}
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
            />
          </div>
        </div>
        <div className="search-books-results">
          {Array.isArray(this.state.books) ? (
            <ol className="books-grid">
              {this.state.books &&
                this.state.books.map((book) => (
                  <Book
                    book={book}
                    shelf={this.getShelf(book)}
                    key={book.id}
                    changeShelf={this.props.update}
                  />
                ))}
            </ol>
          ) : (
            <h2>No Results</h2>
          )}
        </div>
      </div>
    );
  }
}

SearchBooks.propTypes = {
  search: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  mainBooks: PropTypes.array.isRequired,
};

export default SearchBooks;
