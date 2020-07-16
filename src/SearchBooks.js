import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class SearchBooks extends Component {
  state = {
    query: "",
    books: [],
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
    console.log(this.state.books);
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
                  <Book book={book} key={book.id} />
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

export default SearchBooks;
