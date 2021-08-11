import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {

  const {book} = props;

  return (
    <article className="main-page__book-card book-card">
      <div className="main-page__image-wrapper book-card__image-wrapper">
        <a href="index-book.html">
          <img className="book-card__image" src={book.volumeInfo.imageLinks.thumbnail} width="160" height="200" alt="Book image"/>
        </a>
      </div>
      <div className="book-card__info">
        <div className="book-card__info-wrapper">
          <div className="book-card__theme">
            <span className="book-card__theme-text">{book.volumeInfo.categories.map((item) => item).join(', ')}</span>
          </div>
          <div className="book-card__name">
            <span className="book-card__name-text">{book.volumeInfo.title}</span>
          </div>
          <div className="book-card__author">
            <span className="book-card__name-text">{book.volumeInfo.authors.map((author) => author).join(', ')}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
