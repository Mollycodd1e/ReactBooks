import React from 'react';

function MainEmpty () {
  return (
    <div className="main-page__wrapper">
      <h2 className="visually-hidden">Список найденных книг</h2>
      <p className="main-page__count-information">No books found</p>
    </div>
  );
}

export default MainEmpty;
