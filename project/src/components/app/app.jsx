import React from 'react';
//import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
//import {fetchBooks} from '../../store/api-action';
import {getBooks} from '../../store/data/selector';
import BookInfo from '../book-info/book-info';
import Main from '../main/main';

function App() {
  //const dispatch = useDispatch();

  //dispatch(fetchBooks('', '', 'startIndex=1'));

  const booksList = Array.from(useSelector(getBooks));
  return (
    <Switch>
      <Route exact path={'/'}>
        <Main />
      </Route>
      <Route exact path={'/index-book.html'}>
        <BookInfo book={booksList[0]}/>
      </Route>
    </Switch>
  );
}

export default App;
