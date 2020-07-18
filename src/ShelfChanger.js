import React, { Component } from "react";
import PropTypes from "prop-types";

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

ShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default ShelfChanger;
