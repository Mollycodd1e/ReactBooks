import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_BOOKS: 'books/loadBooks',
  CHANGE_CATEGORIES: 'categories/changeCategories',
  CHANGE_TYPE: 'type/changeType',
};

export const loadBooks = createAction(ActionType.LOAD_BOOKS, (book) => ({
  payload: book,
}));

export const changeCategories = createAction(ActionType.CHANGE_CATEGORIES, (categories) => ({
  payload: categories,
}));

export const changeType = createAction(ActionType.CHANGE_TYPE, (type) => ({
  payload: type,
}));

