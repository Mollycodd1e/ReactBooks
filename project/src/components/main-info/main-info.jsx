import {getType} from '@reduxjs/toolkit';
import React from 'react';
import {useSelector} from 'react-redux';
import {getBooks} from '../../store/data/selector';
import {getSortedBooksByType} from '../../utils';
import BookInfo from '../book-info/book-info';
import Header from '../header/header';

function MainInfo () {

  const booksList = Array.from(useSelector(getBooks));

  const activeType = useSelector(getType);

  const sortedBooksByTypes = getSortedBooksByType(activeType, booksList);

  return (
    <div className="main__wrapper">
      <Header />
      <main className="main-page">
        <div className="main-page__wrapper">
          <h2 className="visually-hidden">Список найденных книг</h2>
          <p className="main-page__count-information">Found {sortedBooksByTypes.length} results</p>
          <div className="main-page__books-list books__list tabs__content">
            {sortedBooksByTypes.map((book) =>
              <BookInfo key={book.id} book={book}/>)}
          </div>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default MainInfo;
