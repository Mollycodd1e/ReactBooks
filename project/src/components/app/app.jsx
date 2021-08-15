import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import BookInfo from '../book-info/book-info';
import Main from '../main/main';

function App() {
  const [activeBook, setActiveBook] = useState();

  const handleBookHover = (book) => {
    setActiveBook(book);
  };

  return (
    <Switch>
      <Route exact path={AppRoute.MAIN}>
        <Main onBookHover={handleBookHover}/>
      </Route>
      <Route exact path={AppRoute.BOOK}>
        <BookInfo book={activeBook}/>
      </Route>
    </Switch>
  );
}

export default App;
