import {createReducer} from '@reduxjs/toolkit';
import {loadBooks} from '../action';

const initialState = {
  books: {},
  isDataLoaded: false,
  inputText: '',
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadBooks, (state, action) => {
      state.books = action.payload;
      state.isDataLoaded = true;
    });
});

export {data};
