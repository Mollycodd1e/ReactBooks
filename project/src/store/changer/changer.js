import {createReducer} from '@reduxjs/toolkit';
import {CategoriesList, TypeList} from '../../const';
import {changeCategories, changeType} from '../action';

const initialState = {
  activeCategories: CategoriesList.ALL,
  activeType: TypeList.RELEVANCE,
};

const change = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCategories, (state, action) => {
      state.activeCategories = action.payload;
    })
    .addCase(changeType, (state, action) => {
      state.activeType = action.payload;
    });
});

export {change};
