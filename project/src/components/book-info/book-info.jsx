import React from 'react';
import PropTypes from 'prop-types';

function BookInfo(props) {

  const {book} = props;

  return (
    <div className="main-page__wrapper">
      {book[1].volumeInfo.imageLinks === undefined ? <img className="book-card__image" src="#" width="160" height="200" alt="Book image"/> :
        <img className="book-card__image" src={book.volumeInfo.imageLinks.thumbnail} width="160" height="200" alt="Book image"/>}
      <div className="main-page__info-wrapper">
        {book.volumeInfo.categories === undefined ? '' :
          <p className="book-card__theme-text">{book.volumeInfo.categories[0]`/General`}</p>}
        <p className="main-page__book-name">{book.volumeInfo.title}</p>
        {book.volumeInfo.authors === undefined ? <p className="book-card__name-text">Unknown</p> :
          <p className="main-page__book-author">{book.volumeInfo.authors.map((author) => author).join(', ')}</p>}
        {book.volumeInfo.description === undefined ? <p className="main-page__book-description"></p> :
          <p className="main-page__book-description">{book.volumeInfo.description}</p>}
      </div>
    </div>
  );
}

BookInfo.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookInfo;

