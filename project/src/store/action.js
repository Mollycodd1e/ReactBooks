import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_BOOKS: 'books/loadBooks',
};

export const loadBooks = createAction(ActionType.LOAD_BOOKS, (book) => ({
  payload: book,
}));

