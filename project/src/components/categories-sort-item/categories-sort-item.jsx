import React from 'react';
import PropTypes from 'prop-types';

function CategoriesSortItem (props) {

  const {CategoriesItem, isActive} = props;

  return (
    <li className={`categories__option ${isActive ? 'categories__option--active' : ''}`} tabIndex='0'>{CategoriesItem}</li>
  );
}


CategoriesSortItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  CategoriesItem: PropTypes.string.isRequired,
};

export default CategoriesSortItem;
