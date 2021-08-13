import {NameSpace} from '../reducer.js';

export const getBooks = (state) => state[NameSpace.DATA].books;

export const getDataLoadStatus = (state) => state[NameSpace.DATA].isDataLoaded;

export const getInputText = (state) => state[NameSpace.DATA].getInputText;
