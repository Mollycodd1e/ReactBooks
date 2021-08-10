import React from 'react';
import CategoriesSortItem from '../categories-sort-item/categories-sort-item';
import {CategoriesList} from '../../const';

function CategoriesSortList (props) {
  return (
    <form className="categories__sorting" action="#" method="get">
      <span className="categories__sorting-caption">Categories</span>
      <span className="categories__sorting-type" tabIndex="0">
        all
      </span>
      <ul className="categories__options categories__options--custom categories__options--closed">
        {Object.values(CategoriesList).map((item) =>
          <CategoriesSortItem key={item} CategoriesItem={item} isActive={item === CategoriesList.ALL} />)}
      </ul>
    </form>
  );
}

export default CategoriesSortList;
