import React from 'react';

function Book() {
  return (
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
  );
}

export default Book;
