import React from 'react';
import CategoriesSortList from '../categories-sort-list/categories-sort-list';
import TypeSortList from '../type-sort-list/type-sort-list';
import {fetchBooks} from '../../store/api-action';
import {useDispatch, useSelector} from 'react-redux';
import { getCategories } from '../../store/changer/selector';
import { CategoriesList } from '../../const';

function Header() {

  const dispatch = useDispatch();

  const activeCategories = useSelector(getCategories);

  const handleSubmitClick = (evt, value) => {
    if (activeCategories !== CategoriesList.ALL) {
      evt.preventDefault();
      dispatch(fetchBooks(value, activeCategories, 'startIndex=1'));
    } else {
      evt.preventDefault();
      dispatch(fetchBooks(value, '', 'startIndex=1'));
    }
  };

  return (
    <header className="main-header">
      <nav className="main-nav">
        <div className="main-nav__wrapper">
          <h1>Search for books</h1>
          <div className="main-nav__search-wrapper">
            <form onSubmit={(evt) => handleSubmitClick(evt, document.querySelector('input[name=id-search]').value)}>
              <label forhtml="id-search" className="visually-hidden">Форма поиска книг</label>
              <input id="id-search" name="id-search" type="search" placeholder="Type here to search"/>
              <button type="submit" aria-label="Кнопка поиска">
                <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <use xlinkHref="#icon-magnifier"></use>
                </svg>
              </button>
            </form>
          </div>
          <div className="main-nav__sort-wrapper">
            <div className="main-nav__categories-wrapper categories">
              <CategoriesSortList />
            </div>
            <div className="main-nav__type-wrapper type">
              <TypeSortList />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
