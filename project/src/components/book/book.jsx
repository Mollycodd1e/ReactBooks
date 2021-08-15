import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Book(props) {

  const {book, onBookHover} = props;

  const handleMouseEnter = () => {
    if (onBookHover) {
      onBookHover(book);
    }
  };

  const handleMouseLeave = () => {
    if (onBookHover) {
      onBookHover(null);
    }
  };

  return (
    <article className="main-page__book-card book-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} aria-label='article'>
      <div className="main-page__image-wrapper book-card__image-wrapper">
        <Link to="/index-book.html">
          {book.volumeInfo.imageLinks === undefined ? <img className="book-card__image" src="#" width="160" height="200" alt="Book image"/> :
            <img className="book-card__image" src={book.volumeInfo.imageLinks.thumbnail} width="160" height="200" alt="Book image"/>}
        </Link>
      </div>
      <div className="book-card__info">
        <div className="book-card__info-wrapper">
          <div className="book-card__theme">
            {book.volumeInfo.categories === undefined ? '' :
              <span className="book-card__theme-text">{book.volumeInfo.categories.map((item) => item).join(', ')}</span>}
          </div>
          <div className="book-card__name">
            <span className="book-card__name-text">{book.volumeInfo.title}</span>
          </div>
          <div className="book-card__author">
            {book.volumeInfo.authors === undefined ? <span className="book-card__name-text">Unknown</span> :
              <span className="book-card__name-text">{book.volumeInfo.authors.map((author) => author).join(', ')}</span>}
          </div>
        </div>
      </div>
    </article>
  );
}

Book.propTypes = {
  onBookHover: PropTypes.func,
  book: PropTypes.object.isRequired,
};

export default Book;
