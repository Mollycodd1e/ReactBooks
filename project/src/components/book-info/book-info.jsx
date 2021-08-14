import React from 'react';
import Header from '../header/header';
import PropTypes from 'prop-types';

function BookInfo(props) {

  const {book} = props;

  return (

    <div className="main__wrapper">
      <Header />
      <main className="main-page">
        <div className="main-page__wrapper main-page__wrapper--book-info">
          <img className="book-card__image" src={book.volumeInfo.imageLinks === undefined ? '' : book.volumeInfo.imageLinks.thumbnail} width="500" height="440" alt="Book image"/>
          <div className="main-page__info-wrapper main-page__wrapper--book-info">
            <p className="book-card__theme-text">{book.volumeInfo.categories === undefined ? '' : book.volumeInfo.categories[0]}/General</p>
            <p className="main-page__book-name">{book.volumeInfo.title === undefined ? '' : book.volumeInfo.title}</p>
            <p className="main-page__book-author">{book.volumeInfo.title === undefined ? '' : book.volumeInfo.authors.map((author) => author).join(', ')}</p>
            <p className="main-page__book-description">{book.volumeInfo.description === undefined ? '' : book.volumeInfo.description}</p>
          </div>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

BookInfo.propTypes = {
  book: PropTypes.object,
};

export default BookInfo;

