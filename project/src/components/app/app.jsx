import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import BookInfo from '../book-info/book-info';
import Main from '../main/main';

function App() {
  const [activeBook, setActiveBook] = useState();

  const handleBookHover = (book) => {
    setActiveBook(book);
  };

  return (
    <Switch>
      <Route exact path={'/'}>
        <Main onBookHover={handleBookHover}/>
      </Route>
      <Route exact path={'/index-book.html'}>
        <BookInfo book={activeBook}/>
      </Route>
    </Switch>
  );
}

export default App;
