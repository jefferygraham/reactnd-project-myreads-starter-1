import React, { Component } from "react";

class ShelfChanger extends Component {
  handleChange = (book, shelf) => {
    this.props.changeShelf(book, shelf);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          onChange={(e) => this.handleChange(this.props.book, e.target.value)}
          defaultValue={this.props.shelf}
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
    );
  }
}

export default ShelfChanger;
