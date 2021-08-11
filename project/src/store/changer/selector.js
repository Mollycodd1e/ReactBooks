import {NameSpace} from '../reducer.js';

export const getCategories = (state) => state[NameSpace.CHANGER].activeCategories;
export const getType = (state) => state[NameSpace.CHANGER].activeType;
