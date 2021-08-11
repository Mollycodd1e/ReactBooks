import React, {useState} from 'react';
import CategoriesSortItem from '../categories-sort-item/categories-sort-item';
import {CategoriesList} from '../../const';
import {useDispatch, useSelector} from 'react-redux';
import {changeCategories} from '../../store/action';
import {getCategories} from '../../store/changer/selector';

function CategoriesSortList () {

  const dispatch = useDispatch();

  const activeCategories = useSelector(getCategories);

  const [isCategoriesListOpen, setIsCategoriesListOpen] = useState(false);

  const onCategoriesChange = (categories) => (
    dispatch(changeCategories(categories)),
    setIsCategoriesListOpen((prevState) => !prevState)
  );

  const handleCategoriesClick = () => {
    setIsCategoriesListOpen((prevState) => !prevState);
  };

  return (
    <form className="categories__sorting" action="#" method="get">
      <span className="categories__sorting-caption">Categories</span>
      <span className="categories__sorting-type" tabIndex="0" onClick={handleCategoriesClick}>
        {activeCategories}
      </span>
      <ul className={`categories__options categories__options--custom ${isCategoriesListOpen ? 'categories__options--opened' : 'categories__options--closed'}`}>
        {Object.values(CategoriesList).map((item) =>
          <CategoriesSortItem key={item} categoriesItem={item} isActive={item === activeCategories} onCategoriesChange={onCategoriesChange}/>)}
      </ul>
    </form>
  );
}

export default CategoriesSortList;
