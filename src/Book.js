import React, { Component } from "react";
import ShelfChanger from "./ShelfChanger";

class Book extends Component {
  state = {
    shelf: this.props.shelf,
  };

  handleChange = (book, shelf) => {
    this.props.changeShelf(book, shelf);
  };

  componentDidUpdate(prevProps) {
    if (this.props.shelf !== prevProps.shelf) {
      this.setState(() => ({
        shelf: this.props.shelf,
      }));
    }
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage:
                  this.props.book.imageLinks &&
                  `url(${this.props.book.imageLinks.smallThumbnail})`,
              }}
            />
            <ShelfChanger
              book={this.props.book}
              shelf={this.state.shelf}
              id={this.props.book.id}
              changeShelf={this.handleChange}
            />
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">
            {this.props.book.authors &&
              this.props.book.authors.map((author) => (
                <div key={author}>{author}</div>
              ))}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
