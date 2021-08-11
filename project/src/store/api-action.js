import {loadBooks} from './action.js';

export const fetchBooks = (input) => (dispatch, _getState, api) => (
  api.get(`https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=40&key=AIzaSyCTAwPNcTkfNKkIVdr0j05c-DYLm-k7LF0`)
    .then(({data}) => {
      const books = data.items.map((item) => item);
      return books;
    })
    .then((books) => dispatch(loadBooks(books)))
);

