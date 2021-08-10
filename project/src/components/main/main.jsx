import React from 'react';

function Main () {
  return (
    <div className="main__wrapper">
      <header className="main-header">
        <nav className="main-nav">
          <div className="main-nav__wrapper">
            <h1>Search for books</h1>
            <div className="main-nav__search-wrapper">
              <form>
                <label forhtml="id-search" className="visually-hidden">Форма поиска книг</label>
                <input id="id-search" type="search" placeholder="Type here to search"/>
                <button type="submit" aria-label="Кнопка поиска">
                  <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref="#icon-magnifier"></use>
                  </svg>
                </button>
              </form>
            </div>
            <div className="main-nav__sort-wrapper">
              <div className="main-nav__categories-wrapper categories">
                <form className="categories__sorting" action="#" method="get">
                  <span className="categories__sorting-caption">Categories</span>
                  <span className="categories__sorting-type" tabIndex="0">
                    all
                  </span>
                  <ul className="categories__options categories__options--custom categories__options--closed">
                    <li className="categories__option categories__option--active" tabIndex="0">all</li>
                    <li className="categories__option" tabIndex="0">fantasy</li>
                    <li className="categories__option" tabIndex="0">programming</li>
                    <li className="categories__option" tabIndex="0">detective</li>
                    <li className="categories__option" tabIndex="0">music</li>
                  </ul>
                  <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref="#icon-arrow"></use>
                  </svg>
                </form>
              </div>
              <div className="main-nav__type-wrapper type">
                <form className="type__sorting" action="#" method="get">
                  <span className="type__sorting-caption">Sorting by</span>
                  <span className="type__sorting-type" tabIndex="0">
                    relevance
                  </span>
                  <ul className="type__options type__options--custom type__options--closed">
                    <li className="type__option type__option--active" tabIndex="0">relevance</li>
                    <li className="type__option" tabIndex="0">name</li>
                    <li className="type__option" tabIndex="0">author</li>
                  </ul>
                  <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref="#icon-arrow"></use>
                  </svg>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="main-page">
        <h2 className="visually-hidden">Список найденных книг</h2>
        <p className="main-page__count-information">Found 446 results</p>
        <div className="main-page__books-list books__list tabs__content">
          <article className="main-page__book-card book-card">
            <div className="main-page__image-wrapper book-card__image-wrapper">
              <a href="index-book.html">
                <img className="book-card__image" src="img/book.jpg" width="160" height="200" alt="Book image"/>
              </a>
            </div>
            <div className="book-card__info">
              <div className="book-card__info-wrapper">
                <div className="book-card__theme">
                  <span className="book-card__theme-text">Computers</span>
                </div>
                <div className="book-card__name">
                  <span className="book-card__name-text">Node.js Разработка серверных веб-приложений на JavaScript</span>
                </div>
                <div className="book-card__author">
                  <span className="book-card__name-text">Дэвид Херрон</span>
                </div>
              </div>
            </div>
          </article>
          <article className="main-page__book-card book-card">
            <div className="main-page__image-wrapper book-card__image-wrapper">
              <a href="index-book.html">
                <img className="book-card__image" src="img/book.jpg" width="160" height="200" alt="Book image"/>
              </a>
            </div>
            <div className="book-card__info">
              <div className="book-card__info-wrapper">
                <div className="book-card__theme">
                  <span className="book-card__theme-text">Computers</span>
                </div>
                <div className="book-card__name">
                  <span className="book-card__name-text">Node.js Путеводитель по технологиям</span>
                </div>
                <div className="book-card__author">
                  <span className="book-card__name-text">Кирилл Сухов</span>
                </div>
              </div>
            </div>
          </article>
          <article className="main-page__book-card book-card">
            <div className="main-page__image-wrapper book-card__image-wrapper">
              <a href="index-book.html">
                <img className="book-card__image" src="img/book.jpg" width="160" height="200" alt="Book image"/>
              </a>
            </div>
            <div className="book-card__info">
              <div className="book-card__info-wrapper">
                <div className="book-card__theme">
                  <span className="book-card__theme-text">Computers</span>
                </div>
                <div className="book-card__name">
                  <span className="book-card__name-text">Node.js в действии.2-е издание</span>
                </div>
                <div className="book-card__author">
                  <span className="book-card__name-text">Кантелон Майк, Хартер Марк, Головайчук TJ, Райлих Натан</span>
                </div>
              </div>
            </div>
          </article>
          <article className="main-page__book-card book-card">
            <div className="main-page__image-wrapper book-card__image-wrapper">
              <a href="index-book.html">
                <img className="book-card__image" src="img/book.jpg" width="160" height="200" alt="Book image"/>
              </a>
            </div>
            <div className="book-card__info">
              <div className="book-card__info-wrapper">
                <div className="book-card__theme">
                  <span className="book-card__theme-text">Computers</span>
                </div>
                <div className="book-card__name">
                  <span className="book-card__name-text">Vue.js в действии </span>
                </div>
                <div className="book-card__author">
                  <span className="book-card__name-text">Ханчетт Эрик, Листоун Бенджамин</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default Main;
