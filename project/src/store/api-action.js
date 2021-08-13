import {loadBooks, setInputText} from './action.js';
import {API_KEY} from '../const.js';

export const fetchBooks = (input, subject, startIndex) => (dispatch, _getState, api) => (
  api.get(`https://www.googleapis.com/books/v1/volumes?q=${input}+subject:${subject}&${startIndex}&maxResults=30&key=${API_KEY}`)
    .then(({data}) => {
      dispatch(setInputText(input));
      const books = data.items.map((item) => item);
      return books;
    })
    .then((books) => dispatch(loadBooks(books)))
);

