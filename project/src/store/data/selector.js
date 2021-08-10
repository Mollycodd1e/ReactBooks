import {NameSpace} from '../reducer.js';

export const getBooks = (state) => state[NameSpace.DATA].books;
