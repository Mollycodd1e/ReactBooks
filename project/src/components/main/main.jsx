import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CategoriesList} from '../../const';
import {fetchBooks} from '../../store/api-action';
import {getCategories, getType} from '../../store/changer/selector';
import {getBooks, getInputText} from '../../store/data/selector';
import {getSortedBooksByType} from '../../utils';
import Book from '../book/book';
import Header from '../header/header';
import MainEmpty from '../main-empty/main-empty';

function Main () {

  const booksList = Array.from(useSelector(getBooks));

  const dispatch = useDispatch();

  const [count, setCount] = useState(1);
  const activeCategories = useSelector(getCategories);
  const activeType = useSelector(getType);
  const inputText = useSelector(getInputText);

  const sortedBooksByTypes = getSortedBooksByType(activeType, booksList);

  const handleSubmitClick = (evt) => {
    if (activeCategories !== CategoriesList.ALL) {
      evt.preventDefault();
      dispatch(fetchBooks(`${inputText}`, activeCategories, `startIndex=${count*31}`));
      setCount(count + 1);
    } else {
      evt.preventDefault();
      dispatch(fetchBooks(`${inputText}`, '', `startIndex=${count*31}`));
      setCount(count + 1);
    }
  };

  return (
    <div className="main__wrapper">
      <Header />
      <main className="main-page">
        {sortedBooksByTypes.length > 0 ?
          <div className="main-page__wrapper">
            <h2 className="visually-hidden">Список найденных книг</h2>
            <p className="main-page__count-information">Found {sortedBooksByTypes.length} results</p>
            <div className="main-page__books-list books__list tabs__content">
              {sortedBooksByTypes.map((book) =>
                <Book key={book.id} book={book}/>)}
            </div>
          </div> : <MainEmpty />}
        {sortedBooksByTypes.length > 0 ?
          <button type="button" className="main-page__load-more-button" onClick={handleSubmitClick}>Load more</button> : <div></div>}
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default Main;
