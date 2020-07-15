import React, { Component } from "react";

class Book extends Component {
  handleChange = (book, shelf) => {
    this.props.changeShelf(book, shelf);
  };

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                this.props.book.imageLinks.smallThumbnail
              })`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={(e) =>
                this.handleChange(this.props.book, e.target.value)
              }
              defaultValue={this.props.book.shelf}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">
          {this.props.book.authors.map((author) => (
            <div key={author}>{author}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Book;
