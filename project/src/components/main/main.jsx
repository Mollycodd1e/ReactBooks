import React from 'react';
import Header from '../header/header';

function Main () {
  return (
    <div className="main__wrapper">
      <Header />
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
