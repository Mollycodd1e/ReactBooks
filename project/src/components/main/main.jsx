import React from 'react';
import {useSelector} from 'react-redux';
import {getBooks} from '../../store/data/selector';
import Book from '../book/book';
import Header from '../header/header';
import MainEmpty from '../main-empty/main-empty';

function Main () {

  const booksList = Array.from(useSelector(getBooks));

  return (
    <div className="main__wrapper">
      <Header />
      <main className="main-page">
        {booksList.length > 0 ?
          <div className="main-page__wrapper">
            <h2 className="visually-hidden">Список найденных книг</h2>
            <p className="main-page__count-information">Found {booksList.length} results</p>
            <div className="main-page__books-list books__list tabs__content">
              {booksList.map((book) =>
                <Book key={book.id} book={book}/>)}
            </div>
          </div> : <MainEmpty />}
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default Main;
