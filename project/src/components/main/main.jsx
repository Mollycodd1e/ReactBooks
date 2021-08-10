import React from 'react';
import {useSelector} from 'react-redux';
import {getBooks} from '../../store/data/selector';
import Book from '../book/book';
import Header from '../header/header';

function Main () {

  const BooksList = useSelector(getBooks);

  return (
    <div className="main__wrapper">
      <Header />
      <main className="main-page">
        <h2 className="visually-hidden">Список найденных книг</h2>
        <p className="main-page__count-information">Found 446 results</p>
        <div className="main-page__books-list books__list tabs__content">
          {
            <Book book={BooksList[0]}/>
          }
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default Main;
