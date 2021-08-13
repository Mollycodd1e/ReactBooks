import React from 'react';
import { useSelector } from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import { getBooks } from '../../store/data/selector';
import BookInfo from '../book-info/book-info';
import Main from '../main/main';

function App() {

  const book = useSelector(getBooks);

  return (
    <Switch>
      <Route>
        <Main exact path={'/'}/>
      </Route>
      <Route>
        <BookInfo exact path={'/index-book.html'} book={book}/>
      </Route>
    </Switch>
  );
}

export default App;
