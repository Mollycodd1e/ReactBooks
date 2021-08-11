import {combineReducers} from 'redux';
import {change} from './changer/changer.js';
import {data} from './data/data.js';

export const NameSpace = {
  DATA: 'DATA',
  CHANGER: 'CHANGE',
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.CHANGER]: change,
});
