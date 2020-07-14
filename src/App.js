import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

class BooksApp extends React.Component {
  static defaultProps = {
    shelves: [
      { title: "Currently Reading", shelf: "currentlyReading" },
      { title: "Want to Read", shelf: "wantToRead" },
      { title: "Read", shelf: "read" },
    ],
  };

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/search">
          <SearchBooks />
        </Route>

        <Route exact path="/">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {this.props.shelves.map((shelf) => (
                  <BookShelf
                    key={shelf.shelf}
                    shelf={shelf}
                    books={this.state.books}
                  />
                ))}
              </div>
            </div>
            <Link to="/search">
              <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>
                  Add a book
                </button>
              </div>
            </Link>
          </div>
        </Route>
      </div>
    );
  }
}

export default BooksApp;
