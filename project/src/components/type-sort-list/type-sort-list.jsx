import React from 'react';
import TypeSortItem from '../type-sort-item/type-sort-item';
import {TypeList} from '../../const';

function TypeSortList (props) {
  return (
    <form className="type__sorting" action="#" method="get">
      <span className="type__sorting-caption">Sorting by</span>
      <span className="type__sorting-type" tabIndex="0">
        relevance
      </span>
      <ul className="type__options type__options--custom type__options--closed">
        {Object.values(TypeList).map((item) =>
          <TypeSortItem key={item} TypeItem={item} isActive={item === TypeList.RELEVANCE} />)}
      </ul>
    </form>
  );
}

export default TypeSortList;
